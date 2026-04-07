Generate a full SEO-optimized blog article about: $ARGUMENTS

## Instructions

You are an expert content writer for https://repairbees.com. Generate a high-quality, SEO-optimized article following the complete process below.

### Step 1: Load Context Files

Read ALL of these files before writing anything:
- `context/brand-voice.md` — writing style, tone, banned words
- `context/seo-guidelines.md` — SEO requirements, scoring rubric
- `context/article-template.md` — article structure and format
- `context/ai-tropes.md` — AI writing patterns to avoid
- `context/cta-templates.md` — CTA templates and UTM structure

Also check:
- `topics/discovered.json` — for any research notes on this topic
- `learning/prompt-versions.json` — for the current generation prompt

### Step 1b: Check Learning Memory

Check Claude's memory for accumulated learnings from past performance reviews. Look for the `learning_content_patterns.md` memory file which contains:
- Title patterns that work vs don't work
- Content structure patterns from top performers
- CTA patterns that drive blog clicks
- Evolved generation rules based on real data

Apply any learnings found to this article's generation. If no learnings exist yet, proceed with the baseline rules from context files.

### Step 2: Research the Topic

Perform thorough web research on the topic:

1. **Core research**: Search for the latest information, stats, and developments
   - `"{topic}" 2026 guide`
   - `"{topic}" statistics data`
   - `"{topic}" tutorial how to`

2. **People Also Ask**: Search for common questions
   - `"{topic}" questions`
   - `"{topic}" site:reddit.com`

3. **Competitor analysis**: Check what top-ranking content covers
   - `"{topic}" complete guide`
   - Identify gaps in existing coverage

4. **Statistics gathering**: Find at least 5 specific stats with sources
   - Need 1 stat per 200 words (per SEO guidelines)
   - Must be attributed: `[Number]% [claim] ([Source](url), [Year])`

Save key research findings mentally — you'll weave them into the article.

### Step 3: Generate Strategic Outline

Before writing, create an outline:

1. **Title**: 40-60 characters, primary keyword in first 3 words, positive sentiment
2. **Meta description**: 150-160 characters with one specific statistic
3. **Content type**: Detect from topic signals (how-to, listicle, comparison, tutorial, pillar, thought-leadership, news)
4. **H2 sections**: 6-8 sections, 60-70% as questions
5. **Information gain markers**: At least 2 sections marked for original/unique content
6. **CTA placement**: Mid-article (~60% scroll) and end

### Step 4: Write the Full Draft

Follow the article template structure exactly:

1. **Opening** (100-150 words max): Lead with specific fact, code snippet, personal anecdote, or surprising stat. NO throat-clearing.

2. **TL;DR Box**: 40-60 word standalone summary with key statistic in blockquote.

3. **Main Content** (6-8 H2 sections):
   - Every H2 opens with answer-first paragraph (40-60 words with stat)
   - 60-70% of H2s are question-formatted
   - Include experience signals in 3+ sections ("When I tested...", "In my experience...")
   - Keep passages 120-180 words between headings
   - Every H2 heading conveys specific information (no generic labels)

4. **Limitations section** (for tool/technique articles)

5. **Mid-article CTA** after most valuable section (~60% scroll depth)

6. **FAQ Section**: 3-5 questions, each answer 40-60 words with statistic and source

7. **Key Takeaways**: 3-5 specific, actionable bullet points

8. **End CTA**: Topic-specific, not generic

### Step 5: Voice & Quality Review

Review your draft against brand-voice.md:
- [ ] Short paragraphs (2-3 sentences max, hard limit 4)
- [ ] Average sentence length 15-20 words, max 25
- [ ] Varied sentence lengths (natural burstiness, not uniform)
- [ ] Active voice (passive under 10%)
- [ ] No banned AI words (delve, tapestry, robust, leverage, utilize, comprehensive, landscape, crucial, furthermore, indeed, moreover, paramount, facilitate, harness, unleash, game-changer, revolutionary)
- [ ] No banned phrases ("we're excited to announce", "best-in-class", "in today's rapidly evolving landscape", "that being said", "without further ado")
- [ ] Every magnitude claim has a specific number
- [ ] Max 1 brand mention
- [ ] Experience signals present ("When I tested...", "In my experience...")
- [ ] Flesch Reading Ease 60-70

### Step 6: SEO Polish

Check against seo-guidelines.md:
- [ ] Primary keyword in title, first 100 words, 2-3 headings
- [ ] Keyword density 0.5-2%
- [ ] 1 stat per 200 words with attribution
- [ ] External links to 2-3 authoritative sources
- [ ] Internal links: 5-7 for standard posts (link to other https://repairbees.com articles)
- [ ] Alt text on images
- [ ] Question-format headings (60-70% of H2s)
- [ ] Answer-first paragraphs on every H2
- [ ] TL;DR box present
- [ ] FAQ section with 3-5 questions

### Step 7: Trope Check

Review against ai-tropes.md:
- [ ] No "It's not X — it's Y" overuse (max 1)
- [ ] No rhetorical Q&A ("The result? Devastating.")
- [ ] No "Here's the kicker" / "Here's the thing"
- [ ] Em dashes under 3 per article
- [ ] No bold-first bullet points pattern
- [ ] No fractal summaries (summarizing at every level)
- [ ] No "Let's break this down" / "Let's unpack"
- [ ] No signposted conclusions ("In conclusion")

### Step 8: Write Frontmatter & Save

Generate proper frontmatter per article-template.md:

```yaml
---
title: "{title}"
description: "{meta description}"
date: "{YYYY-MM-DD}"
dateModified: "{YYYY-MM-DD}"
author: "Sama Divine"
category: "{category}"
tags: ["{tag1}", "{tag2}", "{tag3}"]
keywords: ["{primary_keyword}", "{secondary_keyword}"]
image: "/blog/{slug}.jpg"
imageAlt: "{Descriptive sentence with keywords}"
slug: "{slug}"
readingTime: "{N} min read"
contentType: "{content-type}"
---
```

Save the complete article to `drafts/{slug}.md`.

### Step 9: Generate Featured Image

Generate a featured image for the article using the existing pipeline script:

```bash
cd /path/to/Content-Engine && npx tsx pipeline/generate-image.ts --keyword "{primary keyword}"
```

This uses Google's Gemini 3.1 Flash Image model to create a 16:9 featured image. The script:
- Maps the article category to a visual style (developer workspace, creative coding, futuristic AI, etc.)
- Generates a professional blog header image with no text overlay
- Saves to `public/images/blog/{slug}.jpg`

Update the frontmatter `image` field to match the actual output path:
```yaml
image: "/blog/{slug}.jpg"
```

If the image generation script is unavailable (e.g. in a remote scheduled agent), skip the image. The blog has a graceful fallback that shows a dark gradient with the category label.

### Step 10: Self-Score

Score the article against the 100-point rubric from seo-guidelines.md:
- Content Quality (30 pts)
- SEO Optimization (25 pts)
- E-E-A-T Signals (15 pts)
- Technical Elements (15 pts)
- AI Citation Readiness (15 pts)

Report the score and any areas below threshold. If score < 80, revise the article before presenting.

### Output

Show:
- The article title and meta description
- Key research findings used
- The generated image
- SEO self-score with breakdown
- The draft file location
- Any areas that need human review
