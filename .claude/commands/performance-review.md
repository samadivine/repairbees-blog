Run a full performance analysis of all published articles.

## Instructions

You are a performance analyst for https://repairbees.com. Your job is to analyze article performance data, calculate reward scores, identify patterns, and recommend improvements.

### Step 1: Load Performance Data

Read `learning/performance.json` for the latest metrics.

If the file doesn't exist or is empty, check for manually exported CSV files in `learning/`:
- `learning/gsc-export.csv` — Google Search Console data (queries, clicks, impressions, CTR, position)
- `learning/ga4-export.csv` — Google Analytics data (page views, engagement time, scroll depth, bounce rate)

If CSV files are found, parse them and correlate data by article slug/URL.

### Step 2: Calculate Reward Scores

For each article with sufficient data (at least 7 days of metrics), calculate a composite reward score (0-100):

| Metric | Weight | Normalization |
|--------|--------|--------------|
| Skool CTA clicks | 35% | Relative to best performer |
| Click-through rate (CTR) | 25% | Against average CTR |
| Average position | 15% | Inverse (lower position = higher score) |
| Engagement time | 15% | Relative to content length |
| Scroll depth | 10% | Percentage (0-100%) |

Formula per metric: `(value - min) / (max - min) * 100 * weight`

Save scores to `learning/reward-scores.json`:
```json
{
  "scores": [
    {
      "slug": "article-slug",
      "score": 78,
      "breakdown": {
        "cta_clicks": 85,
        "ctr": 72,
        "position": 65,
        "engagement": 80,
        "scroll_depth": 90
      },
      "metrics": {
        "clicks": 45,
        "impressions": 1200,
        "ctr": 0.0375,
        "position": 8.2,
        "engagement_seconds": 240,
        "scroll_depth": 0.72,
        "cta_clicks": 3
      },
      "scored_at": "2026-03-31"
    }
  ],
  "last_updated": "2026-03-31"
}
```

### Step 3: Classify into Quadrants

Place each article into a performance quadrant:

| Quadrant | CTR | Engagement | Action |
|----------|-----|-----------|--------|
| **Stars** | High | High | Replicate patterns, create cluster content |
| **Overperformers** | Low | High | Improve titles/meta for more clicks |
| **Underperformers** | High | Low | Improve content depth, fix bounce issues |
| **Declining** | Low | Low | Consider rewrite or consolidation |

### Step 4: Extract Winning Patterns

Analyze the top 25% of articles (by reward score) and identify:

1. **Title patterns**: Word count, format (question, how-to, list), power words used
2. **Content structure**: Number of H2s, FAQ length, CTA placement
3. **Writing style**: Average sentence length, opening type, experience signals used
4. **Topic patterns**: Which categories perform best, which search intents convert
5. **Length patterns**: Optimal word count range for your audience

Save patterns to `learning/winning-patterns.json`.

### Step 5: Identify Quick Wins

Find articles that need small changes for big impact:
- **Title tweaks**: High-impression, low-CTR articles (change title/meta)
- **CTA optimization**: High-engagement, low-CTA-click articles (better CTA copy)
- **Content updates**: Articles ranking 5-15 that could reach top 5 with refresh
- **Internal linking**: Top performers that aren't linked from other articles

### Step 6: Update Learning Memory

After analysis, update the `learning_content_patterns.md` memory file with new findings:

1. **Title Patterns**: What formats get the highest CTR? Add specific examples.
2. **Content Structure**: What H2 count, section length, FAQ style gets best engagement?
3. **CTA Patterns**: Which CTA variants drive the most Skool clicks?
4. **Topic Categories**: Which niches perform best?
5. **Generation Rules**: Update any rules based on data — add new rules, modify existing ones, or note which rules to deprioritize.
6. **Evolution Log**: Add a row with today's date, what changed, and why.

This is the **learning loop** — these findings carry forward to future `/write-article` runs, making each article better than the last.

### Step 7: Report

Present results:

```
## Performance Review — {date}

### Top Performers (Stars)
1. {article} — Score: {X}/100 — {why it works}
2. {article} — Score: {X}/100 — {why it works}

### Quick Wins
1. {article}: {specific change} → Expected impact: {what}
2. {article}: {specific change} → Expected impact: {what}

### Quadrant Summary
- Stars: {N} articles
- Overperformers: {N} articles
- Underperformers: {N} articles
- Declining: {N} articles

### Key Patterns from Winners
- Title: {pattern}
- Structure: {pattern}
- Length: {pattern}
- Topics: {pattern}

### Recommendations
1. {Top recommendation with specific action}
2. {Second recommendation}
3. {Third recommendation}
```
