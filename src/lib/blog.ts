import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  category: string;
  author: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  cta?: {
    text: string;
    url: string;
  };
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  category: string;
  author: string;
  image: string;
  imageAlt: string;
  readingTime: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      keywords: data.keywords || [],
      category: data.category || "General",
      author: data.author || "Repairbees Team",
      image: data.image || "",
      imageAlt: data.imageAlt || data.title || "",
      readingTime: data.readingTime || calculateReadingTime(content),
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories).sort();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!fs.existsSync(contentDirectory)) {
    return null;
  }

  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const fileSlug = data.slug || filename.replace(/\.md$/, "");

    if (fileSlug === slug) {
      const processedContent = await remark().use(html).process(content);

      return {
        slug: fileSlug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        keywords: data.keywords || [],
        category: data.category || "General",
        author: data.author || "Repairbees Team",
        image: data.image || "",
        imageAlt: data.imageAlt || data.title || "",
        readingTime: data.readingTime || calculateReadingTime(content),
        cta: data.cta || undefined,
        content: processedContent.toString(),
      };
    }
  }

  return null;
}

export function extractHeadings(htmlContent: string): { id: string; text: string; level: number }[] {
  const headingRegex = /<h([23])[^>]*>([^<]+)<\/h[23]>/g;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, text, level });
  }

  return headings;
}

export function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(/<h([23])>([^<]+)<\/h([23])>/g, (_match, level, text) => {
    const id = text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}
