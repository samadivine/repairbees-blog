/**
 * Blog Post Image Generation using Nano Banana 2 (Gemini 3.1 Flash Image)
 *
 * Generates a featured image for each blog post based on the article's
 * topic, title, and category. Uses Google's Nano Banana 2 model for
 * fast, high-quality image generation.
 *
 * Usage: npm run generate-image -- --slug "article-slug"
 *        Called automatically during article generation pipeline.
 */

import { GoogleGenAI } from "@google/genai";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { env, PATHS } from "./config.js";
import type { Topic, ArticleFrontmatter } from "./types.js";
import { slugify } from "./utils.js";

const NANO_BANANA_MODEL = "gemini-3.1-flash-image-preview";

/**
 * Build an image generation prompt based on the article topic and metadata.
 */
function buildImagePrompt(topic: Topic, frontmatter?: ArticleFrontmatter): string {
  const title = frontmatter?.title || topic.title;
  const category = frontmatter?.category || topic.category;

  // Map categories to visual styles — Repairbees plumbing blog
  const categoryStyles: Record<string, string> = {
    "maintenance": "clean home interior with well-maintained copper pipes and plumbing fixtures, warm lighting, deep blue (#1E3A8A) and white tones",
    "repairs": "close-up of plumbing tools (wrench, pliers, tape) on a clean workbench, organized and professional, warm orange (#F97316) accents",
    "seasonal": "split composition showing home exterior through seasons, pipes and plumbing elements visible, blue sky and warm interiors",
    "emergency": "dramatic but clean image of water flow through pipes, urgent energy with deep blue (#1E3A8A) lighting, professional editorial style",
    "diy": "hands working on plumbing fixtures with proper tools, bright well-lit workspace, educational and approachable feeling",
    "water-heater": "modern water heater unit in a clean utility room, warm orange (#F97316) accent lighting, technical but approachable",
    "drains": "cross-section style view of clean drain system, modern illustration quality, blue and white color palette",
  };

  const style = categoryStyles[category.toLowerCase()] || categoryStyles["maintenance"];

  return `Create a professional blog header image for an article titled "${title}".

Visual style: ${style}

Requirements:
- 16:9 aspect ratio landscape orientation
- Modern, clean, professional look suitable for a home maintenance blog
- No text or words in the image
- Subtle, not overly busy — should work as a blog hero image
- Plumbing/home maintenance themed but tasteful and editorial quality
- Color palette: deep blue (#1E3A8A), soft orange (#F97316), white, clean grays
- Good contrast so text overlays would be readable`;
}

/**
 * Generate a featured image for a blog post using Nano Banana 2.
 */
export async function generateBlogImage(
  topic: Topic,
  frontmatter?: ArticleFrontmatter,
): Promise<string | null> {
  if (!env.GOOGLE_AI_API_KEY) {
    console.log("  Skipping image generation (GOOGLE_AI_API_KEY not configured)");
    return null;
  }

  const slug = frontmatter?.slug || slugify(topic.keyword);
  console.log(`🎨 Generating featured image for: "${topic.title}"`);

  const ai = new GoogleGenAI({ apiKey: env.GOOGLE_AI_API_KEY });
  const prompt = buildImagePrompt(topic, frontmatter);

  try {
    const response = await ai.models.generateContent({
      model: NANO_BANANA_MODEL,
      contents: prompt,
      config: {
        responseModalities: ["IMAGE"],
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      console.log("  No image data in response");
      return null;
    }

    for (const part of parts) {
      if (part.inlineData) {
        const imageData = part.inlineData.data;
        if (!imageData) {
          console.log("  Empty image data in response");
          return null;
        }

        // Determine file extension from mime type
        const mimeType = part.inlineData.mimeType || "image/png";
        const ext = mimeType.includes("jpeg") || mimeType.includes("jpg") ? "jpg" : "png";
        const filename = `${slug}.${ext}`;

        // Ensure output directory exists
        if (!existsSync(PATHS.images)) {
          mkdirSync(PATHS.images, { recursive: true });
        }

        const outputPath = `${PATHS.images}/${filename}`;
        const buffer = Buffer.from(imageData, "base64");
        writeFileSync(outputPath, buffer);

        const imagePath = `/images/blog/${filename}`;
        console.log(`  Image saved: ${outputPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
        return imagePath;
      }
    }

    console.log("  No image found in response parts");
    return null;
  } catch (error) {
    console.error("  Image generation failed:", error);
    return null;
  }
}

// CLI entry point
const isMainModule =
  process.argv[1]?.endsWith("generate-image.ts") ||
  process.argv[1]?.endsWith("generate-image.js");

if (isMainModule) {
  const args = process.argv.slice(2);
  const slugIndex = args.indexOf("--slug");
  const keywordIndex = args.indexOf("--keyword");

  let keyword = "";
  if (slugIndex !== -1 && args[slugIndex + 1]) {
    keyword = args[slugIndex + 1];
  } else if (keywordIndex !== -1 && args[keywordIndex + 1]) {
    keyword = args[keywordIndex + 1];
  }

  if (!keyword) {
    console.log("Usage: npm run generate-image -- --keyword 'your keyword'");
    process.exit(1);
  }

  const topic: Topic = {
    id: `manual-${Date.now()}`,
    keyword,
    title: keyword,
    suggestedAngle: "",
    category: "ai-tools",
    score: 50,
    searchVolumeEstimate: "medium",
    competition: "medium",
    relatedKeywords: [],
    peopleAlsoAsk: [],
    source: "manual",
    discoveredAt: new Date().toISOString(),
    status: "approved",
  };

  generateBlogImage(topic).catch(console.error);
}
