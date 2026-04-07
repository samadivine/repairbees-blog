/**
 * Blog Post Image Generation — Repairbees
 *
 * Uses Google Gemini 3.1 Flash Image API to generate featured images.
 *
 * Usage: npx tsx pipeline/generate-image.ts --keyword "leaky faucet repair"
 *        npx tsx pipeline/generate-image.ts --keyword "frozen pipes" --category seasonal
 */

import { GoogleGenAI } from "@google/genai";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env") });

const GEMINI_MODEL = "gemini-2.5-flash-image";
const OUTPUT_DIR = resolve(process.cwd(), "public/images/blog");

// Category → visual style mapping for Repairbees
const CATEGORY_STYLES: Record<string, string> = {
  "plumbing-problems":
    "copper pipes and pipe fittings arranged in a clean geometric layout, with a single deep blue (#1E3A8A) wrench icon as focal point",
  "home-repair":
    "a minimal tool arrangement — hammer, wrench, screwdriver — in a flat geometric composition with deep blue (#1E3A8A) accent outlines",
  "emergency-fixes":
    "a single water droplet icon with concentric ripple rings, urgent but clean, deep blue (#1E3A8A) drop with amber warning accent",
  maintenance:
    "a clipboard with check marks arranged beside a small pipe and valve icon, organized and calm, deep blue (#1E3A8A) elements",
  "cost-guides":
    "a minimal calculator icon next to a pipe cross-section, with small coin/dollar symbols, deep blue (#1E3A8A) and warm gray tones",
  seasonal:
    "a split composition — snowflake on one side, sun on the other — with a horizontal pipe connecting them, deep blue (#1E3A8A) palette",
  diy:
    "hands-free tool layout — adjustable wrench, pliers, tape — arranged in a flat geometric grid, deep blue (#1E3A8A) with warm highlights",
};

const STYLE_BIBLE = `Style: Flat geometric vector illustration. Clean minimal composition on a dark charcoal background (#18181B). Primary accent color deep blue (#1E3A8A) used for key structural elements. Secondary accent warm amber (#F59E0B) used sparingly for one highlight element. Supporting colors limited to zinc grays (#27272A, #3F3F46, #52525B, #71717A) and warm stone (#D6D3D1). No gradients except subtle ambient glow on accent elements. Sharp clean edges, no textures or noise. Simple geometric shapes — circles, rectangles, rounded corners. Negative space is intentional and generous. No text, no words, no letters, no watermarks. No photorealism, no 3D rendering, no depth of field. Editorial quality suitable for a premium home maintenance blog. 16:9 aspect ratio landscape.`;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildPrompt(keyword: string, category: string): string {
  const subject =
    CATEGORY_STYLES[category] || CATEGORY_STYLES["plumbing-problems"];

  return `${subject}

${STYLE_BIBLE}

The image should relate to the topic: "${keyword}".`;
}

async function generateImage(
  keyword: string,
  category: string
): Promise<void> {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.error(
      "Error: GOOGLE_AI_API_KEY not set. Add it to your .env file."
    );
    process.exit(1);
  }

  const slug = slugify(keyword);
  const prompt = buildPrompt(keyword, category);

  console.log(`Generating image for: "${keyword}" (category: ${category})`);
  console.log(`Slug: ${slug}`);

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseModalities: ["IMAGE", "TEXT"],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      console.error("No response data received.");
      process.exit(1);
    }

    for (const part of parts) {
      if (part.inlineData?.data) {
        if (!existsSync(OUTPUT_DIR)) {
          mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        const filename = `${slug}.jpg`;
        const outputPath = resolve(OUTPUT_DIR, filename);
        const buffer = Buffer.from(part.inlineData.data, "base64");
        writeFileSync(outputPath, buffer);

        console.log(
          `Image saved: public/images/blog/${filename} (${(buffer.length / 1024).toFixed(0)} KB)`
        );
        console.log(`Frontmatter path: /images/blog/${filename}`);
        return;
      }
    }

    console.error("No image data in response parts.");
    process.exit(1);
  } catch (error) {
    console.error("Image generation failed:", error);
    process.exit(1);
  }
}

// CLI
const args = process.argv.slice(2);

function getArg(flag: string): string | undefined {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
}

const keyword = getArg("--keyword");
const category = getArg("--category") || "plumbing-problems";

if (!keyword) {
  console.log("Usage: npx tsx pipeline/generate-image.ts --keyword 'your keyword' [--category plumbing-problems]");
  console.log("");
  console.log("Categories: plumbing-problems, home-repair, emergency-fixes, maintenance, cost-guides, seasonal, diy");
  process.exit(1);
}

generateImage(keyword, category);
