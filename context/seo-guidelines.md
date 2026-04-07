# SEO Guidelines

## On-Page SEO Requirements

### Title (Meta Title)
- 40–60 characters
- Primary keyword within first 3 words
- Positive sentiment framing (+4.1% CTR vs neutral)
- Include brackets/parentheses when relevant (~40% more clicks — HubSpot)
- Use 1–2 power words: "Complete", "Essential", "Guide", "Fix", "Fast", "Step-by-Step"
- Avoid: clickbait, ALL CAPS, excessive punctuation, vague promises

#### Title Formulas
1. **How-To:** "How to [Fix X] Without [Calling a Plumber]"
2. **List:** "[N] [Fixes/Tips] That [Save Money/Prevent Damage]"
3. **Question:** "Why Does [Problem] Keep Happening?"
4. **Cost:** "[Repair Type] Cost: What You'll Actually Pay ([Year])"
5. **Emergency:** "[Problem]? Here's What to Do Right Now"
6. **Before/After:** "From [Problem] to [Fixed]: [Method]"
7. **Data-Backed:** "[Power Word] Guide to [Topic]: [Number] [Outcome] ([Year])"

### Meta Description
- 150–160 characters
- Include one specific statistic with source
- No keyword stuffing
- End with value proposition or call to action
- Fact-dense, not vague
- Formula: "[Key statistic]. Here's how [strategy] delivers [outcome] in [year]."

### URL Slug
- Short and descriptive (3–5 words ideal)
- Include primary keyword
- Use hyphens, no underscores
- No stop words (the, a, an, is, etc.)

### Heading Structure
- **H1**: One per page (the title only)
- **H2**: 6–8 main sections per article
- **H3**: Subsections under H2s as needed
- H2 every 200–300 words
- H3 every 100–200 words under each H2
- Never skip heading levels (no H2 → H4)
- Include primary keyword naturally in 2–3 headings

#### Question-Format Headings (Critical for AI Citation)
- Convert 60–70% of H2s to questions
- "Fixing Low Water Pressure" → "Why Is My Water Pressure So Low?"
- "Pipe Insulation Tips" → "How Do You Insulate Pipes for Winter?"
- Keep 2–3 statement headings for variety
- AI systems directly extract answers following question formats
- Search engines show these in People Also Ask

#### Heading Quality Rules
- Every H2 must convey actual information, not generic labels
- Bad: "Getting Started" → Good: "How to Shut Off Your Water in 30 Seconds"
- Bad: "Tips" → Good: "5 Maintenance Tasks That Prevent 80% of Plumbing Emergencies"
- Each heading should make a specific claim or promise a concrete payoff

## Answer-First Formatting (+340% AI Citation Improvement)

Every H2 section must open with a 40–60 word paragraph that:
1. Contains at least one specific statistic with source attribution
2. Directly answers the heading's implicit question
3. Uses natural, conversational language

**Pattern:**
```
## Why Do Pipes Burst in Winter?

Water expands by 9% when it freezes, generating up to 2,000 PSI of pressure inside your pipes (IBHS, 2024). That's enough to split copper, PVC, or even steel. The most vulnerable pipes are in unheated areas like attics, crawl spaces, and exterior walls.
```

## TL;DR Box Requirement

Every post must include a TL;DR summary immediately after the introduction:
- **Length**: 40–60 words (standalone summary)
- **Purpose**: AI extraction target — LLMs frequently cite these verbatim
- **Content**: 2–3 sentences covering the core finding/argument with one key statistic
- **Format**: Blockquote for visual distinction
- **Rule**: Must be comprehensible without reading the rest of the article

**Pattern:**
```markdown
> **TL;DR**: [Core finding with statistic] ([Source], year). [1–2 sentences
> explaining the main takeaway and what the reader should do about it.]
```

## Content Requirements

### Length by Content Type
| Content Type | Target Length | Minimum |
|-------------|-------------|---------|
| Pillar guide | 3,000–4,000 words | 2,500 |
| Standard blog post | 2,000–2,500 words | 1,500 |
| Comparison post | 1,500–2,000 words | 1,200 |
| Tutorial/How-to | 2,500–3,500 words | 2,000 |
| FAQ/listicle | 1,500–2,000 words | 1,000 |
| Cost guide | 1,500–2,000 words | 1,200 |
| Emergency fix | 800–1,200 words | 600 |

### Keyword Optimization
- **Density**: 0.5–2% for primary keyword (flag at >2.5%)
- **First 100 words**: Include primary keyword
- **Distribution**: Natural, not clustered — primary keyword 3–5 times (intro 1x, body 1–2x, conclusion 1x)
- **Related keywords**: Weave naturally throughout

### Citation & Statistics Rules
- **Statistic density**: 1 per 200 words
- **External citations**: 1–3 per 1,000 words from Tier 1–3 sources only
- **Attribution format**: `[Number]% [claim] ([Source](url), [Year])`
- All statistics must be attributed with source and year

#### Source Tier System
- **Tier 1** (Highest Trust): Official manufacturer docs, .gov, .edu, building codes, EPA, IBHS
- **Tier 2** (Research): HomeAdvisor, Angi, This Old House, Family Handyman, NAHB
- **Tier 3** (Trusted Journalism): Consumer Reports, Wirecutter, Bob Vila, The Spruce
- **Avoid**: SEO content farms, affiliate-only sites, AI-generated content, unsourced forums

### Internal Linking
- **Standard post (1,000–2,000 words)**: 5–7 internal links
- **Pillar post (2,000+ words)**: 7–10 internal links
- Use descriptive anchor text (NEVER "click here", "read more", "this article")
- Anchor text 2–6 words, varied across pages
- Position most important links in opening paragraphs
- Every post must link to minimum 3 other Repairbees articles

### External Links
- 2–3 authoritative sources per article (official docs, original research, building codes)
- Inline attribution preferred: `A burst pipe can cause $5,000+ in water damage ([IBHS](url), 2024)`

### Images
- At least 1 per article with descriptive alt text containing keywords
- Alt text: full descriptive sentence, 10–125 characters
- Image every 200–350 words for optimal engagement

### FAQ Section
- 3–5 questions from "People Also Ask" data
- Use FAQ schema markup (FAQJsonLd)
- Questions should be actual search queries people type
- Answers: 40–60 words each, must include a specific statistic with source
- Each answer must be self-contained and independently useful

### Schema Markup (JSON-LD)
- **Required per page** (minimum 3 types):
  - ArticleJsonLd (BlogPosting) — every blog post
  - BreadcrumbJsonLd — navigation path
  - Person — author (Sama Divine) with E-E-A-T credentials
  - Organization — Repairbees
- **Additional when relevant**:
  - FAQJsonLd — for FAQ sections (+28% AI citations)
- Use stable @id patterns: `https://repairbees.com/blog/{slug}#article`

## Content Structure Pattern
1. **Hook** (1–2 sentences): Lead with a specific fact, number, or real problem — no throat-clearing
2. **Context** (1–2 sentences): What the reader will learn and why it matters
3. **TL;DR box**: 40–60 word standalone summary with key statistic
4. **Main content** (6–8 H2 sections): Answer-first formatting, question headings, stat-rich
5. **Limitations / When to Call a Pro**: Required — builds trust, great for SEO
6. **FAQ section**: 3–5 questions with stat-backed answers
7. **Key takeaways**: 3–5 bullet points
8. **CTA**: Topic-specific call-to-action (not generic)

## GEO / AI Citation Optimization

### Content Format Impact on AI Citations
| Format | Impact |
|--------|--------|
| Tables/structured data | 2.5x more citations |
| Long-form (2,000+ words) | 3x more citations |
| Answer-first formatting | +340% improvement |
| Content with statistics | +40% higher citation rates |
| Sections 120–180 words between headings | 70% more ChatGPT citations |
| FAQ schema | +28% citations |

### AI-Extractable Content Rules
- Write in 50–150 word chunks between headings
- Use declarative "X is Y because Z" structures
- Target 120–180 word passages for optimal ChatGPT extraction
- Use unambiguous entity references (name the specific problem/tool, don't say "it")
- 60–70% of H2s should be question-formatted

## Quality Scoring Rubric (100 points)

| Category | Points | Key Criteria |
|----------|--------|-------------|
| Content Quality | 30 | Depth, readability (Flesch 60–70), originality, info-gain, no filler |
| SEO Optimization | 25 | Heading hierarchy, title, keyword placement, linking, meta description |
| E-E-A-T Signals | 15 | Named author with credentials, Tier 1–3 citations, experience markers |
| Technical Elements | 15 | Schema markup (3+ types), image optimization, structured data |
| AI Citation Readiness | 15 | Answer-first formatting, question headings, extractable passages, freshness |

### Score Thresholds
- **90–100**: Publish as-is
- **80–89**: Minor polish needed
- **70–79**: Targeted improvements required
- **60–69**: Significant rework needed
- **<60**: Fundamental rewrite
