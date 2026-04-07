Analyze and optimize the SEO of a draft article: $ARGUMENTS

## Instructions

You are an SEO analyst for https://repairbees.com. Score the article against the full quality rubric and provide actionable improvement suggestions.

### Step 1: Load Context

Read these files:
- `context/seo-guidelines.md` — the scoring rubric and all SEO requirements
- `context/brand-voice.md` — banned words, voice requirements
- `context/ai-tropes.md` — AI writing patterns to detect and flag

Then read the article file specified in the arguments.

### Step 2: Score Against 100-Point Rubric

Score each category and provide specific evidence:

#### Content Quality (30 points)
- **Depth & completeness** (10 pts): Does it thoroughly cover the topic? Are there gaps?
- **Readability** (8 pts): Flesch Reading Ease 60-70? Sentence length varied? Paragraphs short?
- **Originality & info-gain** (7 pts): Does it contain unique insights, personal experience, original data?
- **No filler** (5 pts): Is every paragraph necessary? Any topic drift or padding?

#### SEO Optimization (25 points)
- **Title quality** (5 pts): 40-60 chars? Primary keyword in first 3 words? Power word?
- **Meta description** (3 pts): 150-160 chars? Contains statistic? Ends with value prop?
- **Heading hierarchy** (5 pts): H1 → H2 → H3 proper? 6-8 H2s? No skipped levels?
- **Keyword optimization** (5 pts): In first 100 words? Density 0.5-2%? Natural distribution?
- **Internal linking** (4 pts): 5-7 links for standard post? Descriptive anchor text?
- **External linking** (3 pts): 2-3 authoritative sources? Inline attribution?

#### E-E-A-T Signals (15 points)
- **Author credentials** (5 pts): Named author with experience markers?
- **Citations** (5 pts): Tier 1-3 sources? 1 per 200 words? Properly attributed?
- **Experience signals** (5 pts): "When I tested...", "In my experience..." present?

#### Technical Elements (15 points)
- **Schema readiness** (5 pts): Article, Breadcrumb, Person, FAQ schema data present?
- **Image optimization** (5 pts): Alt text present? Descriptive with keywords?
- **Structured data** (5 pts): Tables, lists, comparison data present?

#### AI Citation Readiness (15 points)
- **Answer-first formatting** (5 pts): Every H2 opens with direct answer + stat?
- **Question headings** (5 pts): 60-70% of H2s are questions?
- **Extractable passages** (5 pts): 120-180 word passages? Declarative "X is Y because Z"?

### Step 3: Writing Authenticity Check

Scan for AI writing patterns from ai-tropes.md:

**Banned Words** (count occurrences):
delve, tapestry, multifaceted, testament, pivotal, robust, cutting-edge, furthermore, indeed, moreover, utilize, leverage, comprehensive, landscape, crucial, foster, illuminate, underscore, embark, endeavor, facilitate, paramount, nuanced, intricate, meticulous, realm, harness, unleash, game-changer, revolutionary

**Trope Detection** (flag with severity):
- Negative parallelism ("It's not X — it's Y") — max 1
- Rhetorical Q&A ("The result? Devastating.")
- "Here's the kicker" / "Here's the thing"
- Em dashes — count, flag if >3
- Bold-first bullet points — flag if >50% of bullets
- Filler transitions ("It's worth noting", "Importantly")
- "Let's break this down" / "Let's unpack"
- Signposted conclusions ("In conclusion", "To sum up")
- Passive voice — estimate %, flag if >10%

### Step 4: Report

Present results in this format:

```
## SEO Analysis: {article title}

### Overall Score: {X}/100

| Category | Score | Max | Status |
|----------|-------|-----|--------|
| Content Quality | X | 30 | ✅/⚠️/❌ |
| SEO Optimization | X | 25 | ✅/⚠️/❌ |
| E-E-A-T Signals | X | 15 | ✅/⚠️/❌ |
| Technical Elements | X | 15 | ✅/⚠️/❌ |
| AI Citation Readiness | X | 15 | ✅/⚠️/❌ |

### Trope Violations
- {trope name}: {count} occurrences (severity: {1-3})

### Top Issues (by impact)
1. {Most impactful issue with specific fix}
2. {Second issue with specific fix}
3. {Third issue with specific fix}

### Quick Wins
- {Easy fix that would boost score}
- {Easy fix 2}
```

### Step 5: Auto-Fix (if requested)

If the user asks to fix issues, edit the article file directly:
- Replace banned words with natural alternatives
- Rewrite passive voice sentences
- Add missing elements (TL;DR, FAQ, CTAs)
- Fix heading hierarchy
- Add keyword to first 100 words if missing

Re-score after fixes and show the improvement.
