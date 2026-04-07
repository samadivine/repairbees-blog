# AI Writing Tropes — Detection & Avoidance Guide

Source: [tropes.fyi](https://tropes.fyi) by ossama.is
Adapted for Repairbees content engine.

This file serves two purposes:
1. **Generation**: Injected into the article prompt to prevent AI writing patterns
2. **Detection**: Used to score articles for trope violations

---

## WORD CHOICE

### TROPE_MAGIC_ADVERBS (severity: 2)
Overuse of adverbs like "quietly", "deeply", "fundamentally", "remarkably" to make mundane descriptions feel significant.

**Detection**: Match `\b(quietly|deeply|fundamentally|remarkably|arguably|profoundly|inherently|incredibly|vastly|undeniably)\b`

### TROPE_DELVE_FRIENDS (severity: 3)
The infamous AI vocabulary cluster. These words are banned entirely in Repairbees content.

**Detection**: Match `\b(delve|delving|utilize|utilizing|leverage|leveraging|robust|streamline|streamlining|harness|harnessing|facilitate|facilitating)\b`

### TROPE_TAPESTRY_LANDSCAPE (severity: 2)
Grandiose nouns where simpler words work.

**Detection**: Match `\b(tapestry|landscape|paradigm|synergy|ecosystem|framework)\b` when used metaphorically

### TROPE_SERVES_AS (severity: 1)
Replacing simple "is/are" with pompous alternatives.

**Detection**: Match `\b(serves as|stands as|marks a|represents a)\b`

---

## SENTENCE STRUCTURE

### TROPE_NEGATIVE_PARALLELISM (severity: 3)
"It's not X — it's Y" pattern. Maximum 1 per article.

**Detection**: Match patterns:
- `it's not .{5,60}(--|—|–) it's`
- `not .{5,40}, but .{5,40}`
- `isn't about .{5,40}(--|—|–) it's about`

### TROPE_RHETORICAL_QA (severity: 2)
Self-posed rhetorical questions answered immediately. "The result? Devastating."

**Detection**: Match `The [a-z]+\? [A-Z][^.]{2,30}\.`

### TROPE_FILLER_TRANSITIONS (severity: 2)
Transitions that signal nothing: "It's worth noting", "Importantly", "Interestingly".

**Detection**: Match `\b(It's worth noting|It bears mentioning|Importantly,|Interestingly,|Notably,|It should be noted)\b`

### TROPE_SUPERFICIAL_ING (severity: 1)
Tacking "-ing" phrases onto sentences for shallow analysis.

**Detection**: Match `, (highlighting|reflecting|underscoring|showcasing|demonstrating|contributing to|signaling|marking) (its|the|a|broader)`

---

## TONE

### TROPE_HERES_THE_KICKER (severity: 2)
False suspense transitions. NEVER use "Here's the kicker" or "Here's the thing".

**Detection**: Match `\b(Here's the kicker|Here's the thing|Here's where it gets interesting|Here's what most people miss|Here's the deal)\b`

### TROPE_LETS_BREAK_DOWN (severity: 2)
Pedagogical hand-holding voice. NEVER use "Let's break this down" or similar.

**Detection**: Match `\b(Let's (break this down|unpack|explore this|dive in|take a look|walk through))\b`

### TROPE_IMAGINE_A_WORLD (severity: 2)
Classic AI futurism opener.

**Detection**: Match `\b(Imagine a world|Imagine a future|Imagine if)\b`

### TROPE_FALSE_VULNERABILITY (severity: 2)
Simulated self-awareness that reads as performative.

**Detection**: Match `\b(And yes, (I'm|since we're|if we're)|This is not a rant|if we're being honest|let me be (real|honest|frank|candid))\b`

### TROPE_STAKES_INFLATION (severity: 2)
Inflating every argument to world-historical significance.

**Detection**: Match `\b(fundamentally reshape|define the next era|entirely new|transform everything|change the world|revolutionize)\b`

### TROPE_VAGUE_ATTRIBUTIONS (severity: 2)
Attributing claims to unnamed authorities.

**Detection**: Match `\b(Experts (argue|say|suggest|believe|note)|Industry reports (suggest|indicate|show))\b`

---

## FORMATTING

### TROPE_EMDASH_ADDICTION (severity: 2)
Maximum 3 em dashes per article.

**Detection**: Count `—` and `--` occurrences. Flag if >3 in article.

### TROPE_BOLD_FIRST_BULLETS (severity: 3)
Every bullet point starts with a bolded phrase. Extremely common AI output. NEVER do this.

**Detection**: Match `^\s*[-*]\s+\*\*[^*]+\*\*` in list items. Flag if >50% of bullet points match.

---

## COMPOSITION

### TROPE_FRACTAL_SUMMARIES (severity: 2)
Summarizing at every level. NEVER use "as we've seen" or "to recap".

**Detection**: Match `(as we've seen|as we discussed|as mentioned (earlier|above)|And so we return|to recap)\b`

### TROPE_SIGNPOSTED_CONCLUSION (severity: 3)
Explicitly announcing conclusions. NEVER use "In conclusion", "To sum up", "In summary".

**Detection**: Match `\b(In conclusion|To sum up|In summary|To summarize|Wrapping up)\b`

### TROPE_DESPITE_CHALLENGES (severity: 2)
The rigid formula: acknowledge problems, immediately dismiss, end with optimism.

**Detection**: Match `Despite (these|its|the) (challenges|limitations|drawbacks|shortcomings).{10,80}(continues to|remains|thrives|promising)`

### TROPE_IN_THE_WORLD_OF (severity: 2)
AI cliche opener.

**Detection**: Match `\bIn the world of\b`

---

## Summary for Generation Prompt

**Hard limits per article:**
- "It's not X — it's Y" pattern: max 1
- Em dashes: max 3
- Bold-first bullet lists: never (0%)
- "In conclusion" / "To sum up": never
- "Let's break this down" / "Let's unpack": never
- "Here's the kicker" / "Here's the thing": never
- Filler transitions: never
- Banned AI words: never (see brand-voice.md)
- Banned phrases: never (see brand-voice.md)

**Remember**: Any single pattern used once might be fine. The problem is when multiple tropes appear together or when a single trope is used repeatedly. Write like a human: varied, imperfect, specific.
