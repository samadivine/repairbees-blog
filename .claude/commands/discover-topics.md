Discover trending topics in the plumbing and home repair niche for the blog.

## Instructions

You are a topic discovery agent. Your job is to find high-potential blog topics for https://repairbees.com.

### Step 1: Load Context

Read `context/target-niches.md` to understand the seed keywords and priority niches.

### Step 2: Web Research

For each Priority 1-3 niche, perform web searches to find:
- What people are currently searching for (trending queries)
- Recent news, releases, and updates in the space
- Questions people are asking on Reddit, Stack Overflow, and forums
- Gaps in existing content (topics with poor or outdated coverage)

Use searches like:
- `"{seed keyword}" 2026 guide`
- `"{seed keyword}" reddit questions`
- `"{seed keyword}" tutorial site:reddit.com`
- `"{seed keyword}" vs` (to find comparison opportunities)
- `"{seed keyword}" problems OR limitations OR issues`

### Step 3: Score & Classify Each Topic

For each discovered topic, assess:

| Factor | Weight | How to Assess |
|--------|--------|---------------|
| Search demand | 30% | Is this something many people search for? Look for Reddit upvotes, forum activity, autocomplete suggestions |
| Competition (inverse) | 30% | Are top results thin, outdated, or from small sites? Lower competition = higher score |
| Relevance to niche | 20% | Does it align with target-niches.md categories? |
| Trending trajectory | 20% | Is this growing in interest, stable, or declining? |

Classify search intent for each:
- **Informational**: "how to", "what is", "guide" → Educational content
- **Commercial**: "best", "vs", "review", "top" → Comparison content
- **Transactional**: "pricing", "buy", "sign up" → Action content

### Step 4: Cannibalization Check

Read existing articles in `drafts/` and check `topics/discovered.json` to ensure no duplicate or overlapping topics.

### Step 5: 6 Circles Clustering

For the top seed keyword area, organize topics into pillar-cluster groups:
1. **1 pillar topic** — broad, high-traffic keyword
2. **3 sub-themes** — related themes supporting the pillar
3. **3 articles per sub-theme** — specific pieces (9 supporting + 1 pillar = 10 per cluster)

### Step 6: Write Results

Write the top 10 discovered topics to `topics/discovered.json` in this format:

```json
[
  {
    "keyword": "the primary keyword",
    "title_suggestion": "Suggested article title",
    "category": "plumbing-problems|home-repair|emergency-fixes|maintenance|cost-guides|seasonal|diy",
    "search_intent": "informational|commercial|transactional",
    "score": 85,
    "score_breakdown": {
      "demand": 8,
      "competition_inverse": 9,
      "relevance": 8,
      "trending": 7
    },
    "content_type": "how-to|listicle|comparison|tutorial|pillar|thought-leadership|news",
    "people_also_ask": ["question 1", "question 2", "question 3"],
    "content_gaps": ["gap 1", "gap 2"],
    "cluster_group": "pillar name or null",
    "notes": "Why this topic is worth pursuing",
    "discovered_at": "2026-03-31T00:00:00.000Z"
  }
]
```

### Step 7: Present Results

Show the top 10 topics sorted by score, including:
- Search intent classification
- People Also Ask questions found
- Content gaps identified
- Suggested cluster grouping
- Any cannibalization warnings

Ask which topics should be approved for article generation.
