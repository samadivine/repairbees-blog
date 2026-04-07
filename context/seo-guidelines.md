# SEO Guidelines

## On-Page SEO Requirements

### Title (Meta Title)
- 40-60 characters (8.9% higher CTR — Backlinko)
- Primary keyword within first 3 words when possible
- Positive sentiment framing (+4.1% CTR vs neutral)
- Include brackets/parentheses when relevant (~40% more clicks — HubSpot)
- Use 1-2 power words: "Definitive", "Essential", "Data-Backed", "Complete", "Guide"
- Avoid: clickbait, ALL CAPS, excessive punctuation, vague promises

#### Title Formulas (use for A/B testing variants)
1. **How-To:** "How to [Achieve X] Without [Pain Point]"
2. **List:** "[N] [Things] That [Benefit]"
3. **Question:** "Is [Topic] [Claim]?"
4. **Negative:** "Stop [Bad Practice]: Why [Better Alternative] Wins"
5. **Curiosity Gap:** "The [Adjective] Thing About [Topic] Nobody Talks About"
6. **Before/After:** "From [Bad State] to [Good State]: [Method]"
7. **Data-Backed:** "[Power Word] Guide to [Topic]: [Number] [Outcome] [Year]"

### Meta Description
- 150-160 characters
- Include one specific statistic with source
- No keyword stuffing
- End with value proposition or call to action
- Fact-dense, not vague
- Formula: "[Key statistic]. Here's how [strategy] delivers [outcome] in [year]."

### URL Slug
- Short and descriptive (3-5 words ideal)
- Include primary keyword
- Use hyphens, no underscores
- No stop words (the, a, an, is, etc.)

### Heading Structure
- **H1**: One per page (the title only)
- **H2**: 6-8 main sections per article
- **H3**: Subsections under H2s as needed
- H2 every 200-300 words (Yoast flags sections >300 words without subheading)
- H3 every 100-200 words under each H2
- Never skip heading levels (no H2 → H4)
- Include primary keyword naturally in 2-3 headings

#### Question-Format Headings (Critical for AI Citation)
- Convert 60-70% of H2s to questions
- "The Future of X" → "What Does X Look Like in 2026?"
- "Strategies for Y" → "How Do You Achieve Y in 2026?"
- Keep 2-3 statement headings for variety
- AI systems directly extract answers following question formats
- Search engines show these in People Also Ask

#### Heading Quality Rules
- Every H2 must convey actual information, not generic labels
- Bad: "Getting Started" → Good: "Set Up Claude Code in 3 Terminal Commands"
- Bad: "Tools" → Good: "The 5 AI Coding Tools That Actually Work in Production"
- Each heading should make a specific claim or promise a concrete payoff

## Answer-First Formatting (+340% AI Citation Improvement)

Every H2 section must open with a 40-60 word paragraph that:
1. Contains at least one specific statistic with source attribution
2. Directly answers the heading's implicit question
3. Uses natural, conversational language

**Pattern:**
```
## How Does X Impact Y in 2026?

[Stat] ([Source](url), year). [Direct answer in 1-2 more sentences,
explaining the implication for the reader. Keep this opening paragraph
to 40-60 words total.]
```

**Why:** "44.2% of all LLM citations come from the first 30% of text" (Growth Memo, Feb 2026). Lead with answers, then explain.

## TL;DR Box Requirement

Every post must include a TL;DR summary immediately after the introduction:
- **Length**: 40-60 words (standalone summary)
- **Purpose**: AI extraction target — LLMs frequently cite these verbatim
- **Content**: 2-3 sentences covering the core finding/argument with one key statistic
- **Format**: Blockquote for visual distinction
- **Rule**: Must be comprehensible without reading the rest of the article

**Pattern:**
```markdown
> **TL;DR**: [Core finding with statistic] ([Source], year). [1-2 sentences
> explaining the main takeaway and what the reader should do about it.]
```

## Content Requirements

### Length by Content Type
| Content Type | Target Length | Minimum |
|-------------|-------------|---------|
| Pillar guide | 3,000-4,000 words | 2,500 |
| Standard blog post | 2,000-2,500 words | 1,500 |
| Comparison post | 1,500-2,000 words | 1,200 |
| Tutorial | 2,500-3,500 words | 2,000 |
| FAQ/listicle | 1,500-2,000 words | 1,000 |
| News/update | 800-1,200 words | 600 |

### Keyword Optimization
- **Density**: 0.5-2% for primary keyword (flag at >2.5%, keyword stuffing hurts AI engines)
- **First 100 words**: Include primary keyword
- **Distribution**: Natural, not clustered — primary keyword 3-5 times (intro 1x, body 1-2x, conclusion 1x)
- **Related keywords**: Weave naturally throughout

### Citation & Statistics Rules (GEO Critical)
- **Statistic density**: 1 per 200 words (1 per 150 words for GEO-optimized)
- **External citations**: 1-3 per 1,000 words from Tier 1-3 sources only
- **Attribution format**: `[Number]% [claim] ([Source](url), [Year])`
- Unattributed statistics damage E-E-A-T trust signals
- "Statistics addition boosts AI visibility up to 41%" (Princeton GEO paper)
- Fluency + Statistics combined outperforms single tactics by 5.5%

#### Source Tier System
- **Tier 1** (Highest Trust): Official docs, Google Search Central, .gov, .edu, W3C
- **Tier 2** (Research): Ahrefs, Semrush, SparkToro, Princeton GEO Paper, BrightEdge
- **Tier 3** (Trusted Journalism): Search Engine Land, TechCrunch, The Verge, Wired
- **Avoid**: SEO tool blogs (non-research), affiliate sites, content mills, AI-generated farms

### Internal Linking
- **Density by length**:
  - Under 1,000 words: 3-5 links
  - 1,000-2,000 words: 5-7 links
  - 2,000-3,000 words: 7-10 links
  - 3,000+ words (pillar): 8-12 links
- Use descriptive anchor text (NEVER "click here", "read more", "this article")
- Anchor text 2-6 words, varied across pages
- Position most important links in opening paragraphs
- Ensure bidirectional linking (if A links to B, B should link back to A)
- Every post must link to minimum 3 other pages (no dead ends)

#### Anchor Text Distribution
| Type | Target Share |
|------|-------------|
| Exact match keyword | 5-10% |
| Partial match | 20-30% |
| Semantic/related | 30-40% |
| Branded ("our guide") | 10-15% |
| Natural/contextual | 15-25% |

### External Links
- 2-3 authoritative sources per article (official docs, original research)
- Inline attribution preferred: `Organic CTR declined 61% with AI Overviews ([Seer Interactive](url), 2025)`

### Images
- At least 1 per article, with descriptive alt text containing keywords
- Alt text: full descriptive sentence, 10-125 characters
- Image every 200-350 words for optimal engagement
- Include key data point in alt text for data-driven images

### FAQ Section
- 3-5 questions from "People Also Ask" data
- Use FAQ schema markup (FAQJsonLd)
- Questions should be actual search queries people type
- Answers: 40-60 words each, must include a specific statistic with source
- Each answer must be self-contained and independently useful

### Schema Markup (JSON-LD)
- **Required per page** (minimum 3 types):
  - ArticleJsonLd (BlogPosting) — every blog post
  - BreadcrumbJsonLd — navigation path
  - Person — author with E-E-A-T credentials
  - Organization — publisher
- **Additional when relevant**:
  - FAQJsonLd — for FAQ sections (+28% AI citations)
- Schema must exist in HTML source (not JS-injected — AI crawlers don't execute JS)
- Use stable @id patterns: `{siteUrl}/blog/{slug}#article`
- dateModified must reflect actual content updates

## Content Structure Pattern
1. **Hook** (1-2 sentences): Lead with a specific fact, number, code snippet, or anecdote — no throat-clearing
2. **Context** (1-2 sentences): What the reader will learn and why it matters
3. **TL;DR box**: 40-60 word standalone summary with key statistic
4. **Main content** (6-8 H2 sections): Answer-first formatting, question headings, stat-rich
5. **Limitations / When Not to Use This**: Required for tool/technique articles — builds trust, great for SEO
6. **FAQ section**: 3-5 questions with stat-backed answers
7. **Key takeaways**: 3-5 bullet points
8. **Skool CTA**: Topic-specific call-to-action (not generic)

## GEO / AI Citation Optimization

### Content Format Impact on AI Citations
| Format | Impact |
|--------|--------|
| Tables/structured data | 2.5x more citations |
| Long-form (2,000+ words) | 3x more citations |
| Answer-first formatting | +340% improvement |
| Content with statistics | +40% higher citation rates |
| Sections 120-180 words between headings | 70% more ChatGPT citations |
| Comparison tables with `<thead>` | 47% higher AI citation rates |
| Listicle format | 50% of top AI citations |
| FAQ schema | +28% citations |

### AI-Extractable Content Rules
- Write in 50-150 word chunks between headings
- Use declarative "X is Y because Z" structures
- Target 120-180 word passages for optimal ChatGPT extraction
- Use unambiguous entity references (name the specific tool/concept, don't say "it")
- 60-70% of H2s should be question-formatted

### Content Freshness
- Content <3 months old is 3x more likely to get cited by AI
- Update critical content quarterly with at least 30% changes
- Always include dateModified in schema reflecting actual updates
- 76.4% of ChatGPT's most-cited pages updated within 30 days

## Anti-Pattern Detection

### AI-Generated Content Flags
- **AI trigger words**: Max 5 per 1,000 words (see brand-voice.md banned list)
- **Passive voice**: Max 10% of sentences
- **Transition words**: 20-30% of sentences (below 20% = choppy, above 35% = formulaic)
- **Filler content**: Entity drift, topical dilution, needless repetition, intent mismatch

### The "Would I Share This?" Test
A post deserves publication only if it contains at least one of:
- Technical decisions with trade-off explanations
- Original data/testing unavailable elsewhere
- Real experience stories with specific details
- Honest accounts of what didn't work
- How-tos that save meaningful reader time

## Technical SEO
- All images optimized (AVIF primary, WebP fallback — AVIF is ~50% smaller than JPEG)
- Canonical URLs on every page
- Open Graph tags for social sharing (1200x630 images)
- Twitter Card meta tags
- Proper robots.txt and sitemap.xml
- AI crawler access: allow GPTBot, ClaudeBot, PerplexityBot in robots.txt
- Server response time under 200ms TTFB (AI crawlers skip slow pages)
- Content must be in HTML source (not behind JavaScript — AI crawlers don't execute JS)

## Quality Scoring Rubric (100 points)

| Category | Points | Key Criteria |
|----------|--------|-------------|
| Content Quality | 30 | Depth, readability (Flesch 60-70), originality, info-gain, no filler |
| SEO Optimization | 25 | Heading hierarchy, title, keyword placement, linking, meta description |
| E-E-A-T Signals | 15 | Named author with credentials, Tier 1-3 citations, experience markers |
| Technical Elements | 15 | Schema markup (3+ types), image optimization, structured data |
| AI Citation Readiness | 15 | Answer-first formatting, question headings, extractable passages, freshness |

### Score Thresholds
- **90-100**: Publish as-is
- **80-89**: Minor polish needed
- **70-79**: Targeted improvements required
- **60-69**: Significant rework needed
- **<60**: Fundamental rewrite
