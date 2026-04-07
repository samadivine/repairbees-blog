# AI Writing Tropes — Detection & Avoidance Guide

Source: [tropes.fyi](https://tropes.fyi) by ossama.is
Integrated from: github.com/jimibarkway/writing-style-guide

This file serves two purposes:
1. **Generation**: Injected into the article prompt to prevent AI writing patterns
2. **Detection**: Used by optimize.ts to score articles for trope violations

---

## WORD CHOICE

### TROPE_MAGIC_ADVERBS (severity: 2)
Overuse of adverbs like "quietly", "deeply", "fundamentally", "remarkably", "arguably" to make mundane descriptions feel significant.

**Detection**: Match `\b(quietly|deeply|fundamentally|remarkably|arguably|profoundly|inherently|incredibly|vastly|undeniably)\b`

**Avoid**: "quietly orchestrating workflows", "a quiet intelligence behind it", "deeply personal", "fundamentally reshaping"

### TROPE_DELVE_FRIENDS (severity: 3)
The infamous AI vocabulary cluster. "Delve" went from uncommon to appearing in a huge percentage of AI text.

**Detection**: Match `\b(delve|delving|certainly|utilize|utilizing|leverage|leveraging|robust|streamline|streamlining|harness|harnessing)\b` (partially overlaps BANNED_WORDS)

**Avoid**: "Let's delve into the details", "We certainly need to leverage these robust frameworks"

### TROPE_TAPESTRY_LANDSCAPE (severity: 2)
Grandiose nouns where simpler words work. "Tapestry" for anything interconnected. "Landscape" for any field.

**Detection**: Match `\b(tapestry|landscape|paradigm|synergy|ecosystem|framework)\b` when used metaphorically (partially overlaps BANNED_WORDS)

### TROPE_SERVES_AS (severity: 1)
Replacing simple "is/are" with pompous alternatives. AI avoids basic copulas because repetition penalty pushes it toward fancier constructions.

**Detection**: Match `\b(serves as|stands as|marks a|represents a)\b`

---

## SENTENCE STRUCTURE

### TROPE_NEGATIVE_PARALLELISM (severity: 3)
"It's not X -- it's Y" pattern. The single most commonly identified AI writing tell. One per piece can be effective; ten is an insult to the reader.

**Detection**: Match patterns:
- `it's not .{5,60}(--|—|–) it's`
- `not .{5,40}, but .{5,40}`
- `The question isn't .{5,40}\. The question is`
- `isn't about .{5,40}(--|—|–) it's about`

**Avoid**: "It's not bold. It's backwards.", "Half the bugs you chase aren't in your code. They're in your head."

### TROPE_NOT_X_NOT_Y_JUST_Z (severity: 2)
Dramatic countdown negating two things before the reveal: "Not a bug. Not a feature. A fundamental design flaw."

**Detection**: Match `Not [^.]{3,30}\. Not [^.]{3,30}\.`

### TROPE_RHETORICAL_QA (severity: 2)
Self-posed rhetorical questions answered immediately. "The result? Devastating."

**Detection**: Match `The [a-z]+\? [A-Z][^.]{2,30}\.`

### TROPE_ANAPHORA (severity: 2)
Repeating the same sentence opening 3+ times in quick succession.

**Detection**: Check for 3+ consecutive sentences starting with the same 2-3 words within a paragraph.

### TROPE_TRICOLON (severity: 1)
Overusing rule-of-three patterns, especially multiple tricolons back-to-back. A single tricolon is fine; three back-to-back tricolons are a pattern recognition failure.

**Detection**: Match `[^,;]+, [^,;]+, and [^.]+\.` appearing 3+ times within 200 words.

### TROPE_FILLER_TRANSITIONS (severity: 2)
Transitions that signal nothing: "It's worth noting", "Importantly", "Interestingly", "Notably".

**Detection**: Match `\b(It's worth noting|It bears mentioning|Importantly,|Interestingly,|Notably,|It should be noted)\b`

### TROPE_SUPERFICIAL_ING (severity: 1)
Tacking "-ing" phrases onto sentences for shallow analysis: "highlighting its importance", "reflecting broader trends".

**Detection**: Match `, (highlighting|reflecting|underscoring|showcasing|demonstrating|contributing to|signaling|marking) (its|the|a|broader)`

### TROPE_FALSE_RANGES (severity: 1)
"From X to Y" where X and Y aren't on any real scale: "From innovation to cultural transformation."

**Detection**: Match `[Ff]rom [^.]{5,40} to [^.]{5,40}(to [^.]{5,40})?\.`

---

## PARAGRAPH STRUCTURE

### TROPE_PUNCHY_FRAGMENTS (severity: 1)
Excessive one-sentence paragraphs for manufactured emphasis. Real people don't write first drafts this way.

**Detection**: Count single-sentence paragraphs (under 10 words). Flag if >20% of paragraphs are fragments.

### TROPE_LISTICLE_TRENCHCOAT (severity: 2)
Numbered points dressed as prose: "The first... The second... The third..."

**Detection**: Match `The (first|second|third|fourth|fifth) .{10,60}(is|was|involves)`

---

## TONE

### TROPE_HERES_THE_KICKER (severity: 2)
False suspense transitions promising revelations that don't need buildup.

**Detection**: Match `\b(Here's the kicker|Here's the thing|Here's where it gets interesting|Here's what most people miss|Here's the deal)\b`

### TROPE_THINK_OF_IT_AS (severity: 2)
Patronizing analogies. AI defaults to teacher mode assuming the reader needs metaphors.

**Detection**: Match `\b(Think of it (as|like)|It's like a )\b`

### TROPE_IMAGINE_A_WORLD (severity: 2)
Classic AI futurism opener selling a wish list.

**Detection**: Match `\b(Imagine a world|Imagine a future|Imagine if)\b`

### TROPE_FALSE_VULNERABILITY (severity: 2)
Simulated self-awareness that reads as performative. Real vulnerability is specific and uncomfortable; AI vulnerability is polished and risk-free.

**Detection**: Match `\b(And yes, (I'm|since we're|if we're)|This is not a rant|if we're being honest|let me be (real|honest|frank|candid))\b`

### TROPE_TRUTH_IS_SIMPLE (severity: 2)
Asserting something is obvious instead of proving it.

**Detection**: Match `\b(The (reality|truth) is (simpler|simple|clear)|History is (unambiguous|clear)|the real story is)\b`

### TROPE_STAKES_INFLATION (severity: 2)
Inflating every argument to world-historical significance.

**Detection**: Match `\b(fundamentally reshape|define the next era|entirely new|transform everything|change the world|revolutionize)\b`

### TROPE_LETS_BREAK_DOWN (severity: 2)
Pedagogical voice assuming the reader needs hand-holding.

**Detection**: Match `\b(Let's (break this down|unpack|explore this|dive in|take a look|walk through))\b`

### TROPE_VAGUE_ATTRIBUTIONS (severity: 2)
Attributing claims to unnamed authorities: "Experts argue", "Industry reports suggest".

**Detection**: Match `\b(Experts (argue|say|suggest|believe|note)|Industry reports (suggest|indicate|show)|Observers (have cited|note|say)|Several publications)\b`

### TROPE_INVENTED_LABELS (severity: 1)
Compound labels that sound analytical without being grounded: "supervision paradox", "acceleration trap", "workload creep".

**Detection**: Manual review — difficult to regex without false positives.

---

## FORMATTING

### TROPE_EMDASH_ADDICTION (severity: 2)
Compulsive overuse of em dashes. Humans use 2-3 per piece; AI uses 20+.

**Detection**: Count `—` and `--` occurrences. Flag if >3 in article.

### TROPE_BOLD_FIRST_BULLETS (severity: 3)
Every bullet point starts with a bolded phrase. Extremely common in Claude/ChatGPT output. Almost nobody formats lists this way by hand.

**Detection**: Match `^\s*[-*]\s+\*\*[^*]+\*\*` in list items. Flag if >50% of bullet points match.

### TROPE_UNICODE_DECORATION (severity: 1)
Unicode arrows, smart quotes, special characters that can't be easily typed.

**Detection**: Match `→|←|↑|↓|⟶|➡|✨|🔥|💡` and curly quotes `'|'|"|"`

---

## COMPOSITION

### TROPE_FRACTAL_SUMMARIES (severity: 2)
Summarizing at every level: subsection, section, document. "What I'm going to tell you; what I'm telling you; what I just told you."

**Detection**: Match `(as we've seen|as we discussed|as mentioned (earlier|above)|And so we return|to recap)\b`

### TROPE_DEAD_METAPHOR (severity: 2)
Latching onto one metaphor and repeating it 5-10 times across the piece.

**Detection**: Check for any non-common noun appearing 5+ times across the article (excluding keywords).

### TROPE_HISTORICAL_STACKING (severity: 2)
Rapid-fire listing of historical companies or tech revolutions.

**Detection**: Match 3+ company names (Apple, Google, Facebook, Uber, Airbnb, Spotify, Shopify, Netflix, Amazon, Stripe, Discord) within 100 words.

### TROPE_ONE_POINT_DILUTION (severity: 2)
Restating a single argument 10 different ways across thousands of words.

**Detection**: Requires Claude analysis — not feasible with regex alone.

### TROPE_SIGNPOSTED_CONCLUSION (severity: 3)
Explicitly announcing conclusions: "In conclusion", "To sum up", "In summary".

**Detection**: Match `\b(In conclusion|To sum up|In summary|To summarize|Wrapping up)\b`

### TROPE_DESPITE_CHALLENGES (severity: 2)
The rigid formula: acknowledge problems, immediately dismiss, end with optimism.

**Detection**: Match `Despite (these|its|the) (challenges|limitations|drawbacks|shortcomings).{10,80}(continues to|remains|thrives|promising)`

---

---

## ADDITIONAL PATTERNS (from taste-skill)

### TROPE_MARKETING_BUZZWORDS (severity: 2)
AI marketing vocabulary cluster: "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Revolutionize". Distinct from TROPE_DELVE_FRIENDS — these are marketing-specific.

**Detection**: Match `\b(elevate|elevating|seamless|seamlessly|unleash|next-gen|next generation|game.?changer|revolutionize|revolutionizing)\b`

### TROPE_IN_THE_WORLD_OF (severity: 2)
AI cliche opener: "In the world of..." used to introduce any topic.

**Detection**: Match `\bIn the world of\b`

### TROPE_OFFER_TO_CONTINUE (severity: 2)
Meta-commentary about the output itself rather than content: "Let me know if you want me to continue", "I can provide more details", "for brevity".

**Detection**: Match `\b(Let me know if you (want|need)|I can provide more details|for brevity|the rest follows the same pattern|I'll leave that as an exercise)\b`

### TROPE_TITLE_CASE_ABUSE (severity: 1)
Applying Title Case On Every Heading instead of sentence case. A formatting-level AI signal.

**Detection**: Check if >70% of H2 headings have Title Case (3+ consecutive capitalized words).

---

## Summary for Generation Prompt

**Remember**: Any single pattern used once might be fine. The problem is when multiple tropes appear together or when a single trope is used repeatedly. Write like a human: varied, imperfect, specific.
