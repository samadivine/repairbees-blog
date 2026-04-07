Trigger a prompt evolution cycle based on latest performance data.

## Instructions

You are a prompt evolution agent for https://repairbees.com. Your job is to analyze what's working, what isn't, and improve the content generation approach.

### Step 1: Load Performance Data

Read these files:
- `learning/reward-scores.json` — performance scores per article
- `learning/winning-patterns.json` — patterns from top performers
- `learning/prompt-versions.json` — history of generation prompts

If reward scores don't exist yet, read whatever articles exist in `drafts/` and analyze their quality directly using the SEO rubric from `context/seo-guidelines.md`.

### Step 2: Analyze What's Working

From top-performing articles (top 25% by reward score), identify:

1. **Title patterns**: What makes titles click-worthy?
   - Word count range, question vs statement, power words used

2. **Opening patterns**: What hooks keep readers?
   - Stat-first, anecdote-first, code-first, question-first

3. **Structure patterns**: What keeps engagement high?
   - Number of H2s, FAQ length, table usage, code examples

4. **Voice patterns**: What reads most naturally?
   - Sentence length variance, experience signal frequency, analogy usage

5. **CTA patterns**: What drives Skool clicks?
   - Placement, copy style, specificity level

### Step 3: Analyze What's Not Working

From bottom 25% articles:
- What title patterns underperform?
- Where do readers drop off?
- What topics don't resonate?
- Are there common structural issues?

### Step 4: Generate Improved Approach

Based on the analysis, create an updated generation approach with 3 focus areas:

1. **Structural improvement**: Better heading patterns, section flow, content density
2. **Engagement improvement**: Better hooks, storytelling, experience signals
3. **SEO/citation improvement**: Better answer-first formatting, stat density, extractability

For each, specify:
- What to change
- Why (backed by performance data)
- Example of the old way vs new way

### Step 5: Save New Prompt Version

Append a new entry to `learning/prompt-versions.json`:

```json
{
  "version": "v{N}",
  "prompt": "Updated generation guidance incorporating learnings...",
  "createdAt": "2026-03-31T00:00:00.000Z",
  "basedOnPatterns": ["pattern 1", "pattern 2"],
  "articlesSlugs": ["articles analyzed"],
  "avgRewardScore": null,
  "changes": [
    "Change 1: what and why",
    "Change 2: what and why"
  ]
}
```

### Step 6: Report

Show:
- **Patterns extracted from winners**: What the data says works
- **Patterns from losers**: What to avoid
- **Previous approach vs new approach**: Key differences
- **Specific changes made**: What's different and why
- **Expected impact**: What metrics should improve

### Important Notes

- Never overwrite old prompt versions — always append
- Base changes on actual performance data, not assumptions
- Small, targeted changes are better than wholesale rewrites
- If insufficient data exists (<5 articles with scores), note this and make conservative changes based on SEO rubric analysis instead
