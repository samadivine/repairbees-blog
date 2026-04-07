/**
 * Blog Performance Data Auto-Importer
 *
 * Paste this into your Google Sheet's Apps Script editor.
 * It pulls data from Google Search Console and GA4 weekly.
 *
 * SETUP:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Update the CONFIG section below with your values
 * 5. Click "Run" → select "fetchAllData" → click Run
 * 6. It will ask for permissions — click "Advanced" → "Go to Blog Performance (unsafe)" → Allow
 * 7. Set up the weekly trigger (instructions below the code)
 */

// ============================================
// CONFIG — Update these values
// ============================================
const CONFIG = {
  // Your website URL (must match what's in Search Console)
  siteUrl: 'https://repairbees.com', // Update if using sc-domain: property in GSC

  // Your GA4 Property ID (find in GA4 → Admin → Property Settings)
  // It's a number like 123456789
  ga4PropertyId: 'YOUR_GA4_PROPERTY_ID_HERE',

  // How many days of data to pull (default: last 28 days)
  daysBack: 28,

  // Sheet tab names (must match your tab names exactly)
  gscSheetName: 'Google Search Console',
  ga4SheetName: 'Google Analytics 4',
};

// ============================================
// MAIN FUNCTION — Run this one
// ============================================
function fetchAllData() {
  Logger.log('Starting data fetch...');

  fetchGSCData();
  fetchGA4Data();

  Logger.log('All data fetched successfully!');
}

// ============================================
// GOOGLE SEARCH CONSOLE
// ============================================
function fetchGSCData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.gscSheetName);
  if (!sheet) {
    Logger.log('ERROR: Sheet tab "' + CONFIG.gscSheetName + '" not found');
    return;
  }

  // Date range
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 3); // GSC has 3-day delay
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - CONFIG.daysBack);

  const startStr = Utilities.formatDate(startDate, 'GMT', 'yyyy-MM-dd');
  const endStr = Utilities.formatDate(endDate, 'GMT', 'yyyy-MM-dd');

  Logger.log('Fetching GSC data: ' + startStr + ' to ' + endStr);

  // Call Search Console API
  const url = 'https://www.googleapis.com/webmasters/v3/sites/'
    + encodeURIComponent(CONFIG.siteUrl)
    + '/searchAnalytics/query';

  const payload = {
    startDate: startStr,
    endDate: endStr,
    dimensions: ['page', 'query'],
    rowLimit: 1000,
    dataState: 'final'
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  const status = response.getResponseCode();

  if (status !== 200) {
    Logger.log('GSC API error (' + status + '): ' + response.getContentText());
    sheet.getRange(1, 1).setValue('ERROR: ' + response.getContentText());
    return;
  }

  const data = JSON.parse(response.getContentText());
  const rows = data.rows || [];

  Logger.log('GSC: Found ' + rows.length + ' rows');

  // Clear existing data
  sheet.clear();

  // Write headers
  const headers = ['Page URL', 'Query', 'Clicks', 'Impressions', 'CTR', 'Position', 'Date Range', 'Last Updated'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');

  if (rows.length === 0) {
    sheet.getRange(2, 1).setValue('No data yet — GSC takes 2-3 days to start collecting data after verification.');
    return;
  }

  // Write data rows
  const sheetData = rows.map(row => [
    row.keys[0],                              // Page URL
    row.keys[1],                              // Query
    row.clicks,                               // Clicks
    row.impressions,                          // Impressions
    (row.ctr * 100).toFixed(2) + '%',         // CTR as percentage
    row.position.toFixed(1),                  // Average position
    startStr + ' to ' + endStr,               // Date range
    new Date().toISOString().split('T')[0]    // Last updated
  ]);

  if (sheetData.length > 0) {
    sheet.getRange(2, 1, sheetData.length, headers.length).setValues(sheetData);
  }

  // Also create a summary by page (aggregated)
  const pageSummary = {};
  rows.forEach(row => {
    const page = row.keys[0];
    if (!pageSummary[page]) {
      pageSummary[page] = { clicks: 0, impressions: 0, ctrSum: 0, posSum: 0, count: 0 };
    }
    pageSummary[page].clicks += row.clicks;
    pageSummary[page].impressions += row.impressions;
    pageSummary[page].ctrSum += row.ctr;
    pageSummary[page].posSum += row.position;
    pageSummary[page].count += 1;
  });

  // Write summary starting from column J
  const summaryHeaders = ['Page (Summary)', 'Total Clicks', 'Total Impressions', 'Avg CTR', 'Avg Position'];
  const summaryStartCol = 10; // Column J
  sheet.getRange(1, summaryStartCol, 1, summaryHeaders.length).setValues([summaryHeaders]);
  sheet.getRange(1, summaryStartCol, 1, summaryHeaders.length).setFontWeight('bold');

  const summaryRows = Object.entries(pageSummary)
    .sort((a, b) => b[1].clicks - a[1].clicks) // Sort by clicks desc
    .map(([page, stats]) => [
      page,
      stats.clicks,
      stats.impressions,
      ((stats.ctrSum / stats.count) * 100).toFixed(2) + '%',
      (stats.posSum / stats.count).toFixed(1)
    ]);

  if (summaryRows.length > 0) {
    sheet.getRange(2, summaryStartCol, summaryRows.length, summaryHeaders.length).setValues(summaryRows);
  }

  Logger.log('GSC data written: ' + rows.length + ' detail rows, ' + summaryRows.length + ' summary rows');
}

// ============================================
// GOOGLE ANALYTICS 4
// ============================================
function fetchGA4Data() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.ga4SheetName);
  if (!sheet) {
    Logger.log('ERROR: Sheet tab "' + CONFIG.ga4SheetName + '" not found');
    return;
  }

  if (CONFIG.ga4PropertyId === 'YOUR_GA4_PROPERTY_ID_HERE') {
    sheet.clear();
    sheet.getRange(1, 1).setValue('Please set your GA4 Property ID in the script CONFIG section.');
    sheet.getRange(2, 1).setValue('Find it at: analytics.google.com → Admin → Property Settings');
    Logger.log('GA4: Property ID not configured');
    return;
  }

  // Date range
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 1); // GA4 has 1-day delay
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - CONFIG.daysBack);

  const startStr = Utilities.formatDate(startDate, 'GMT', 'yyyy-MM-dd');
  const endStr = Utilities.formatDate(endDate, 'GMT', 'yyyy-MM-dd');

  Logger.log('Fetching GA4 data: ' + startStr + ' to ' + endStr);

  const url = 'https://analyticsdata.googleapis.com/v1beta/properties/'
    + CONFIG.ga4PropertyId + ':runReport';

  const payload = {
    dateRanges: [{ startDate: startStr, endDate: endStr }],
    dimensions: [
      { name: 'pagePath' },
      { name: 'pageTitle' }
    ],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'averageSessionDuration' },
      { name: 'bounceRate' },
      { name: 'engagedSessions' },
      { name: 'totalUsers' }
    ],
    dimensionFilter: {
      filter: {
        fieldName: 'pagePath',
        stringFilter: {
          matchType: 'BEGINS_WITH',
          value: '/blog/'
        }
      }
    },
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 100
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);
  const status = response.getResponseCode();

  if (status !== 200) {
    Logger.log('GA4 API error (' + status + '): ' + response.getContentText());
    sheet.clear();
    sheet.getRange(1, 1).setValue('ERROR: ' + response.getContentText());
    sheet.getRange(2, 1).setValue('Make sure the GA4 Property ID is correct and the API is enabled.');
    return;
  }

  const data = JSON.parse(response.getContentText());
  const rows = data.rows || [];

  Logger.log('GA4: Found ' + rows.length + ' rows');

  // Clear existing data
  sheet.clear();

  // Write headers
  const headers = ['Page Path', 'Page Title', 'Page Views', 'Avg Session Duration (sec)', 'Bounce Rate', 'Engaged Sessions', 'Total Users', 'Date Range', 'Last Updated'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');

  if (rows.length === 0) {
    sheet.getRange(2, 1).setValue('No blog page data yet — GA4 needs visitors to start recording.');
    return;
  }

  // Write data rows
  const sheetData = rows.map(row => [
    row.dimensionValues[0].value,                          // Page path
    row.dimensionValues[1].value,                          // Page title
    parseInt(row.metricValues[0].value),                   // Page views
    parseFloat(row.metricValues[1].value).toFixed(1),      // Avg session duration
    (parseFloat(row.metricValues[2].value) * 100).toFixed(1) + '%', // Bounce rate
    parseInt(row.metricValues[3].value),                   // Engaged sessions
    parseInt(row.metricValues[4].value),                   // Total users
    startStr + ' to ' + endStr,                            // Date range
    new Date().toISOString().split('T')[0]                 // Last updated
  ]);

  if (sheetData.length > 0) {
    sheet.getRange(2, 1, sheetData.length, headers.length).setValues(sheetData);
  }

  Logger.log('GA4 data written: ' + sheetData.length + ' rows');
}

// ============================================
// WEEKLY TRIGGER SETUP
// ============================================
function createWeeklyTrigger() {
  // Remove any existing triggers first
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));

  // Create new weekly trigger: Sunday 7am
  ScriptApp.newTrigger('fetchAllData')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.SUNDAY)
    .atHour(7)
    .create();

  Logger.log('Weekly trigger created: Every Sunday at 7am');
}

// ============================================
// OAUTH SCOPES (required for API access)
// ============================================
// These are declared so Apps Script knows what permissions to request.
// You don't need to do anything with this — it's automatic.

/**
 * @OnlyCurrentDoc
 * @customfunction
 */
function getOAuthScopes_() {
  // This function exists only to declare required OAuth scopes
  // via the appsscript.json manifest
}
