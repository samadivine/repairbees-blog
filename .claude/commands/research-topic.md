Deep research a specific topic for a blog article: $ARGUMENTS

## Instructions

You are a research agent for https://repairbees.com. Your job is to gather comprehensive, current information about a topic to inform article writing.

### Step 1: Core Research

Perform multiple web searches to build a complete picture:

1. **Latest information**: `"{topic}" 2026`
2. **Statistics and data**: `"{topic}" statistics data research`
3. **How-to content**: `"{topic}" tutorial guide how to`
4. **Comparisons**: `"{topic}" vs alternatives comparison`
5. **Problems/limitations**: `"{topic}" problems limitations issues`
6. **Reddit discussions**: `"{topic}" site:reddit.com`
7. **Official sources**: `"{topic}" official documentation`

### Step 2: People Also Ask Discovery

Search for common questions people ask:
- `"{topic}" questions`
- `"{topic}" FAQ`
- `"{topic}" how do I`
- `"{topic}" why does`

Collect 5-10 real questions people are asking.

### Step 3: Competitor Content Analysis

Search `"{topic}" complete guide` and `"{topic}" tutorial` to find top-ranking content.

For each top result, note:
- What they cover well
- What they miss (content gaps)
- How old the content is
- What format they use (listicle, how-to, comparison)

### Step 4: Statistics Gathering

Find at least 5-8 specific, attributable statistics:
- Each stat needs: the number, the claim, the source name, the year
- Format: `[Number]% [claim] ([Source](url), [Year])`
- Prioritize Tier 1-3 sources per `context/seo-guidelines.md`

### Step 5: Compile Research Brief

Save research to `research/research-data.json` with this structure:

```json
{
  "keyword": "{topic}",
  "researched_at": "2026-03-31T00:00:00.000Z",
  "key_facts": [
    "Fact 1 with source attribution",
    "Fact 2 with source attribution"
  ],
  "statistics": [
    {
      "stat": "47% of developers now use AI coding tools",
      "source": "Stack Overflow Survey",
      "year": 2025,
      "url": "https://..."
    }
  ],
  "people_also_ask": [
    "How do I set up Claude Code?",
    "Is Claude Code free?"
  ],
  "competitor_gaps": [
    "No existing content covers X",
    "Top results are outdated (2024)"
  ],
  "recommended_angle": "Focus on X because the gap is Y",
  "search_intent": "informational|commercial|transactional",
  "content_type_suggestion": "how-to|listicle|comparison|tutorial|pillar"
}
```

### Step 6: Present Research Brief

Show:
- **Key Facts**: Top 5-8 findings with sources
- **Statistics**: All stats found with full attribution
- **People Also Ask**: Questions to answer in the FAQ section
- **Content Gaps**: What existing content misses
- **Recommended Angle**: Your suggested approach
- **Search Intent**: Informational, commercial, or transactional
- **Suggested Content Type**: Best format for this topic
- **Authoritative Sources**: Links to cite in the article
