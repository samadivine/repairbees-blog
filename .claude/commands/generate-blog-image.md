Generate a featured blog image for an article.

Usage: /generate-blog-image <slug or topic>

## Instructions

You are an image generation agent for https://repairbees.com. Generate a consistent, on-brand featured image for a blog article.

### Step 1: Understand the Article

If a slug is provided, read the article from `drafts/{slug}.md` or `content/blog/{slug}.md` to understand:
- The title and primary keyword
- The category (maintenance, repairs, seasonal, emergency, diy, water-heater, drains)
- The core concept or metaphor of the article

If just a topic is provided, use it directly.

### Step 2: Choose a Visual Subject

Map the article's core concept to a **single visual metaphor**. Keep it simple — one clear subject, not a busy scene.

**Category → Visual Language:**

| Category | Visual Elements |
|----------|----------------|
| maintenance | Wrenches, checklists, clean pipes, inspection tools, calendars |
| repairs | Pipe fittings, plumber's wrench, faucet cross-sections, tool layouts |
| seasonal | Snowflakes + pipes, sun + water flow, leaves + gutters, seasonal icons |
| emergency | Water droplets, shutoff valves, warning symbols, flooding icons |
| diy | Hand tools arranged neatly, step-by-step diagrams, tool belt icons |
| water-heater | Water heater unit, temperature gauge, anode rod, flame/heating elements |
| drains | Cross-section pipe views, drain grates, flow arrows, clean vs clogged pipes |

Pick ONE primary element. Add ONE supporting element max. Resist the urge to cram everything in.

### Step 3: Generate the Image

Use the following **Style Bible** — paste this EXACTLY as the suffix of every image prompt. Never modify the style portion, only change the subject.

#### Prompt Template

```
{SUBJECT DESCRIPTION}.

Style: Flat geometric vector illustration. Clean minimal composition on a white background (#FFFFFF). Primary accent color deep blue (#1E3A8A) used for key structural elements. Secondary accent soft orange (#F97316) used sparingly for highlights and call-outs. Supporting colors limited to light grays (#F9FAFB, #E5E7EB) and dark text tones (#111827, #6B7280). No gradients except subtle ambient glow. Sharp clean edges, no textures or noise. Simple geometric shapes — circles, rectangles, rounded corners. Negative space is intentional and generous. No text, no words, no letters, no watermarks. No photorealism, no 3D rendering, no depth of field. Editorial quality suitable for a premium home maintenance blog. 16:9 aspect ratio landscape.
```

#### Subject Description Examples (for reference)

**For "Preventive Plumbing Maintenance Checklist":**
```
A minimal clipboard icon with check marks in deep blue, surrounded by small plumbing tool icons (wrench, pipe, valve) arranged in a circular orbit with subtle orange connecting lines
```

**For "How to Fix a Leaky Faucet":**
```
A clean cross-section view of a faucet with a single orange water droplet, with a wrench icon below it, set against generous white space
```

**For "Winter Pipe Freeze Prevention":**
```
A horizontal pipe with a snowflake icon on one end and a small orange shield icon on the other, with subtle insulation wrap lines around the pipe center
```

**For "Water Heater Maintenance Guide":**
```
A minimal water heater cylinder in deep blue with a small orange temperature gauge, with subtle maintenance tool icons floating nearby
```

### Step 4: Generation Method

**Method A: Gemini (preferred, local only)**

Run the existing image generation pipeline with a custom prompt:

```bash
cd D:/Myblog/repairbees-blog && npx tsx -e "
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_AI_API_KEY });

async function generate() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: \`YOUR_FULL_PROMPT_HERE\`,
    config: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '16:9' } }
  });
  const parts = response.candidates?.[0]?.content?.parts;
  for (const part of parts) {
    if (part.inlineData?.data) {
      fs.mkdirSync('public/images/blog', { recursive: true });
      fs.writeFileSync('public/images/blog/{slug}.jpg', Buffer.from(part.inlineData.data, 'base64'));
      console.log('Image saved');
    }
  }
}
generate();
"
```

**Method B: Pollinations.ai (free fallback, works anywhere)**

If no Google AI API key is available, use the free Pollinations API:

```bash
curl -o "public/images/blog/{slug}.jpg" "https://image.pollinations.ai/prompt/{URL_ENCODED_PROMPT}?width=1200&height=675&nologo=true&model=flux"
```

The prompt must be URL-encoded. This works in remote scheduled agents with no API key.

### Step 5: Quality Check

After generating, verify the image:
- [ ] White or light background (not dark, not gradient-heavy)
- [ ] Deep blue (#1E3A8A) as primary structural color
- [ ] Soft orange (#F97316) accent visible but not overwhelming
- [ ] Clean geometric shapes, no photorealism
- [ ] No text, words, or watermarks in the image
- [ ] Simple composition, generous negative space
- [ ] Looks consistent with the Repairbees brand (blue + orange on white)

If the image doesn't pass, regenerate with a simpler subject description. Less is more.

### Step 6: Update Frontmatter

Ensure the article's frontmatter `image` field points to the correct path:
```yaml
image: "/images/blog/{slug}.jpg"
imageAlt: "{Descriptive sentence about the image content with topic keywords}"
```

### Style Rules (NON-NEGOTIABLE)

These rules ensure every image looks like it belongs to the same blog:

1. **ALWAYS light/white background** (#FFFFFF) — matches the blog's clean, professional look
2. **ALWAYS deep blue accent** (#1E3A8A) — this is the primary brand color, use it on structural elements
3. **ALWAYS soft orange highlight** (#F97316) — secondary brand color, use sparingly on 1-2 elements
4. **ALWAYS flat geometric** — no photorealism, no 3D, no AI-portrait-style images
5. **ALWAYS minimal** — one subject, generous whitespace, clean composition
6. **NEVER text in images** — no titles, no labels, no captions baked into the image
7. **NEVER busy scenes** — no crowded compositions, no multiple focal points
8. **NEVER stock photo aesthetics** — no handshakes, no people pointing at screens, no cheesy plumber photos
9. **Color palette is locked**: deep blue (#1E3A8A), soft orange (#F97316), white (#FFFFFF), light gray (#F9FAFB, #E5E7EB), dark text (#111827). No other colors.

### Prompt Storage

Save the exact prompt used to `drafts/{slug}-image-prompt.txt` so images can be regenerated consistently later. This is important for maintaining the style over time.
