# Article Template

## Frontmatter
```yaml
---
title: "{title}"
description: "{description}"
date: "{YYYY-MM-DD}"
dateModified: "{YYYY-MM-DD}"
author: "YOUR NAME"
category: "{category}"
tags: ["{tag1}", "{tag2}"]
keywords: ["{primary_keyword}", "{secondary_keyword}"]
image: "/blog/images/{slug}.webp"
imageAlt: "{Descriptive sentence with topic keywords}"
slug: "{slug}"
readingTime: "{N} min read"
contentType: "{how-to|listicle|comparison|tutorial|pillar|thought-leadership|news}"
---
```

## Content Type Detection

Select template structure based on topic signals:

| Signal in Topic | Content Type | Word Target |
|----------------|-------------|-------------|
| "How to...", "Guide to...", "Steps to..." | how-to | 2,000-2,500 |
| Numbers in title ("10 Best...", "Top 5...") | listicle | 1,500-2,000 |
| "X vs Y", "compared", "alternative to" | comparison | 1,500-2,000 |
| "Tutorial", "walkthrough", "build", "implement" | tutorial | 2,500-3,500 |
| "Complete guide", "everything about", "ultimate" | pillar | 3,000-4,000 |
| Industry trend, "prediction", "future of" | thought-leadership | 2,000-3,000 |
| News event, "update", "just released" | news | 800-1,200 |

Default: how-to (most versatile for informational intent).

## Universal Content Structure

### 1. Opening (100-150 words max)

**Lead with concrete** — the first sentence MUST be one of:
- A specific statistic with source
- A code snippet or terminal output
- A personal anecdote from real experience
- A surprising or counterintuitive fact

NO throat-clearing. NO "In today's world..." NO background/history first.

```markdown
# {H1 Title — matches or closely mirrors meta title}

{First sentence: specific fact, number, or anecdote.}
{Second sentence: what this means for the reader.}
{Third sentence: what you'll learn / what you'll be able to do after reading.}
```

**Strong opening example:**
```markdown
Claude Code completed a 47-file refactor in 3 minutes that took me 2 hours
manually last month. That's not a typo. Here's exactly how to set it up
and which features actually matter.
```

**Weak opening example (NEVER do this):**
```markdown
In the rapidly evolving world of AI-assisted development, developers are
increasingly turning to new tools to boost their productivity. In this
blog post, we'll explore one such tool...
```

### 2. TL;DR Box (immediately after intro)

```markdown
> **TL;DR**: {Core finding with one key statistic} ({Source}, {year}).
> {1-2 sentences explaining the main takeaway and what the reader should do.}
```

### 3. Main Content (6-8 H2 Sections)

#### H2 Section Pattern

Every H2 follows this structure:

```markdown
## {Question-format heading with keyword}?

{ANSWER-FIRST: 40-60 word paragraph opening with a statistic and source,
directly answering the heading's question. Use "X is Y because Z" structure.}

{2-3 more paragraphs expanding on the answer with practical detail.}

### {H3 Subsection if needed}

{Practical example, code snippet, step-by-step, or comparison table.}
```

**Section word targets:**
- Standard H2 section: 300-400 words
- Lightweight section: 200-300 words
- Heavy section (pillar): 400-600 words

**Rules:**
- 60-70% of H2s must be question-formatted
- Every H2 opens with answer-first paragraph (40-60 words with stat)
- Heading must convey specific information (not generic labels)
- Include experience signal in at least 3 sections ("When I tested...", "In my experience...")
- Keep passages 120-180 words between headings for optimal AI extraction

### 4. Limitations / Honest Assessment (required for tool/technique articles)

```markdown
## What Are the Limitations of {Topic}?

{Answer-first paragraph acknowledging real limitations with specifics.}

- {Specific limitation 1 with context}
- {Specific limitation 2 with context}
- {When this approach doesn't work}
- {What the alternatives are}
```

This section builds trust and is excellent for SEO — people actively search for "[tool] limitations" and "[tool] problems".

### 5. Mid-Article CTA (after the most valuable section, ~60% scroll depth)

```markdown
> **{Topic-specific CTA headline — NOT generic "Ready to Level Up?"}**
> {1-2 sentence value proposition tied directly to this article's topic.}
> [{CTA Button Text} →]({cta_url})
```

### 6. FAQ Section

```markdown
## Frequently Asked Questions

### {Question from People Also Ask — actual search query}?

{40-60 word answer with a specific statistic and source attribution.
Must be self-contained — comprehensible without reading the article.}

### {Question 2}?

{Answer with stat and source.}

### {Question 3}?

{Answer with stat and source.}
```

**Rules:**
- 3-5 questions minimum
- Every answer MUST include a statistic with source
- Questions should come from People Also Ask, Reddit, or common objections
- Each answer is 40-60 words, self-contained

### 7. Key Takeaways

```markdown
## Key Takeaways

- {Takeaway 1 — specific and actionable}
- {Takeaway 2 — includes a number or metric}
- {Takeaway 3 — what to do next}
- {Takeaway 4 — surprising or counterintuitive finding}
```

### 8. End CTA

```markdown
## {Topic-Specific CTA Heading}

> **{Headline tied to article topic}**
> {Value proposition specific to what was discussed — NOT generic.}
> [{CTA Button Text} →]({cta_url})
```

## Content-Type Specific Additions

### How-To Guide
- Include prerequisites/requirements section after TL;DR
- Number steps clearly (Step 1, Step 2...)
- Add "Common Mistakes to Avoid" section before FAQ
- Include before/after comparison if applicable

### Listicle
- Number items in H2 headings: "## 1. {Item Name}: {Key Differentiator}"
- Add quick comparison table at the beginning or end
- Include evaluation methodology section
- Each item needs: what it is, why it matters, specific data point

### Comparison
- Lead with quick comparison table (feature matrix)
- Dedicate equal depth to each option
- Include "When to Choose X" vs "When to Choose Y" section
- End with clear recommendation logic, not just "it depends"

### Tutorial
- Start with "What You'll Build" preview (screenshot or code output)
- Include prerequisites with exact version numbers
- Test all code examples — they must be runnable
- Add troubleshooting section before FAQ

### Pillar Page
- Include table of contents after TL;DR
- Link to supporting articles from every major section
- Add "Tools & Resources" section
- 5-8 FAQ questions (more than standard)

### Thought Leadership
- Open with contrarian take or tension point
- Maintain single argument per section
- Include "What I Think Will Happen" predictions section
- Back opinions with data — every opinion needs evidence

## Information Gain Markers

Mark sections that need original/unique content (not consensus AI can generate):

- **[INFO-GAIN: personal-experience]** — Author's first-hand testing/usage
- **[INFO-GAIN: original-data]** — Proprietary benchmarks, surveys, experiments
- **[INFO-GAIN: case-study]** — Real results with specific metrics
- **[INFO-GAIN: practitioner-wisdom]** — Tips only from real-world usage
- **[INFO-GAIN: contrarian-take]** — Opinion that differs from consensus

Every article must have at least 2 info-gain sections.

## Categories
- `claude-code`
- `vibe-coding`
- `ai-tools`
- `gemini`
- `tutorials`
- `comparisons`
- `automation`
