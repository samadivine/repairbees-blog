# Article Template

## Frontmatter
```yaml
---
title: "{title}"
slug: "{slug}"
date: "{YYYY-MM-DD}"
dateModified: "{YYYY-MM-DD}"
description: "{meta description — 150-160 chars with one stat}"
keywords:
  - "{primary_keyword}"
  - "{secondary_keyword}"
  - "{related_keyword}"
category: "{category}"
author: "Sama Divine"
image: "/images/blog/{slug}.jpg"
imageAlt: "{Descriptive sentence with topic keywords}"
readingTime: "{N} min read"
contentType: "{how-to|listicle|comparison|tutorial|pillar|cost-guide|emergency-fix}"
cta:
  text: "{CTA button text}"
  url: "https://repairbees.com/blog"
---
```

## Content Type Detection

Select template structure based on topic signals:

| Signal in Topic | Content Type | Word Target |
|----------------|-------------|-------------|
| "How to...", "Guide to...", "Steps to..." | how-to | 2,000–2,500 |
| Numbers in title ("10 Best...", "Top 5...") | listicle | 1,500–2,000 |
| "X vs Y", "compared", "alternative to" | comparison | 1,500–2,000 |
| "Tutorial", "walkthrough", "fix", "repair" | tutorial | 2,500–3,500 |
| "Complete guide", "everything about", "ultimate" | pillar | 3,000–4,000 |
| "Cost", "price", "how much", "budget" | cost-guide | 1,500–2,000 |
| "Emergency", "right now", "fast fix", "burst" | emergency-fix | 800–1,200 |

Default: how-to (most versatile for informational intent).

## Universal Content Structure

### 1. Opening (100–150 words max)

**Lead with the problem** — the first sentence MUST be one of:
- A specific statistic with source about the problem
- A real scenario the reader is likely dealing with right now
- A surprising cost or consequence fact
- A personal anecdote from real repair experience

NO throat-clearing. NO "In today's world..." NO background/history first.

```markdown
# {H1 Title — matches or closely mirrors meta title}

{First sentence: specific fact, number, or problem scenario.}
{Second sentence: what this means for the reader's home or wallet.}
{Third sentence: what you'll learn / what you'll be able to do after reading.}
```

**Strong opening example:**
```markdown
A single dripping faucet wastes 3,000+ gallons of water per year — that's
roughly $20/month on your water bill for nothing. The fix takes 20 minutes
and costs under $10 in parts. Here's exactly how to do it.
```

**Weak opening example (NEVER do this):**
```markdown
In today's world of rising home maintenance costs, homeowners are increasingly
looking for ways to save money on plumbing repairs. In this comprehensive
guide, we'll explore the various methods...
```

### 2. TL;DR Box (immediately after intro)

```markdown
> **TL;DR**: {Core finding with one key statistic} ({Source}, {year}).
> {1–2 sentences explaining the main takeaway and what the reader should do.}
```

### 3. Main Content (6–8 H2 Sections)

#### H2 Section Pattern

Every H2 follows this structure:

```markdown
## {Question-format heading with keyword}?

{ANSWER-FIRST: 40–60 word paragraph opening with a statistic and source,
directly answering the heading's question. Include one stat where possible.}

{2–3 more paragraphs expanding on the answer with practical detail.}

### {H3 Subsection if needed}

{Practical steps, cost breakdown, tool list, or comparison table.}
```

**Rules:**
- 60–70% of H2s must be question-formatted
- Every H2 opens with answer-first paragraph (40–60 words with stat)
- Heading must convey specific information (not generic labels)
- Include experience signal in at least 3 sections ("When I tested...", "In my experience...")
- Keep passages 120–180 words between headings for optimal AI extraction

### 4. Limitations / When to Call a Professional

```markdown
## When Should You Call a Professional?

{Answer-first paragraph acknowledging real limitations with specifics.}

- {Situation 1 where DIY isn't safe or practical}
- {Situation 2 that requires licensed expertise}
- {Signs the problem is bigger than it looks}
- {Cost comparison: DIY gone wrong vs hiring a pro upfront}
```

This section builds trust and is excellent for SEO — people actively search for "when to call a plumber" and "DIY vs professional".

### 5. Mid-Article CTA (after the most valuable section, ~60% scroll depth)

```markdown
> **{Problem-specific CTA headline — NOT generic}**
> {1–2 sentence value proposition tied directly to this article's topic.}
> [{CTA Button Text} →](https://repairbees.com/blog?utm_source=blog&utm_medium=cta&utm_campaign={slug}&utm_content=cta-mid)
```

### 6. FAQ Section

```markdown
## Frequently Asked Questions

### {Question from People Also Ask — actual search query}?

{40–60 word answer with a specific statistic and source attribution.
Must be self-contained — comprehensible without reading the article.}

### {Question 2}?

{Answer with stat and source.}

### {Question 3}?

{Answer with stat and source.}
```

**Rules:**
- 3–5 questions minimum
- Every answer MUST include a statistic with source
- Questions should come from People Also Ask, Reddit, or common homeowner concerns
- Each answer is 40–60 words, self-contained

### 7. Key Takeaways

```markdown
## Key Takeaways

- {Takeaway 1 — specific and actionable}
- {Takeaway 2 — includes a number or cost}
- {Takeaway 3 — what to do next}
- {Takeaway 4 — when to call a professional}
```

### 8. End CTA

```markdown
> **{Topic-specific CTA heading}**
> {Value proposition specific to what was discussed — NOT generic.}
> [{CTA Button Text} →](https://repairbees.com/blog?utm_source=blog&utm_medium=cta&utm_campaign={slug}&utm_content=cta-end)
```

## Content-Type Specific Additions

### How-To Guide
- Include tools/materials needed section after TL;DR
- Number steps clearly (Step 1, Step 2...)
- Add "Common Mistakes to Avoid" section before FAQ
- Include estimated time and cost for the repair

### Cost Guide
- Include price range table by repair type
- Break down DIY cost vs professional cost
- Note regional price variations
- Include "hidden costs" section
- Add "How to save money" section

### Emergency Fix
- Lead with immediate action steps (first 5 minutes)
- Include "What NOT to do" section prominently
- Provide temporary fix before permanent repair
- Include emergency plumber contact guidance

### Comparison
- Lead with quick comparison table (feature/cost matrix)
- Dedicate equal depth to each option
- Include "When to Choose X" vs "When to Choose Y" section
- End with clear recommendation, not just "it depends"

### Pillar Page
- Include table of contents after TL;DR
- Link to supporting articles from every major section
- Add "Tools & Resources" section
- 5–8 FAQ questions (more than standard)

## Information Gain Markers

Mark sections that need original/unique content:

- **[INFO-GAIN: personal-experience]** — Author's first-hand testing/repair experience
- **[INFO-GAIN: original-data]** — Real cost quotes, measurements, time logs
- **[INFO-GAIN: case-study]** — Real repair results with specific metrics
- **[INFO-GAIN: practitioner-wisdom]** — Tips only from real-world plumbing experience
- **[INFO-GAIN: cost-data]** — Actual price ranges from real quotes

Every article must have at least 2 info-gain sections.

## Categories
- `plumbing-problems`
- `home-repair`
- `emergency-fixes`
- `maintenance`
- `cost-guides`
- `seasonal`
- `diy`
