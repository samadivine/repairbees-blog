import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-white transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] bg-[var(--color-surface)] overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)]">
            <svg className="h-12 w-12 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.3-5.3a2.1 2.1 0 010-2.97l.88-.88a2.1 2.1 0 012.97 0l2.12 2.12 5.3-5.3a2.1 2.1 0 012.97 0l.88.88a2.1 2.1 0 010 2.97l-8.18 8.18a1.5 1.5 0 01-2.12 0z" />
            </svg>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 font-medium text-[var(--color-primary)]">
            {post.category}
          </span>
          <span className="text-[var(--color-text-secondary)]">{post.readingTime}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="mt-3">
          <h2 className="text-lg font-semibold text-[var(--color-foreground)] leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="mt-2 flex-1 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
          {post.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
          <span>{post.author}</span>
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
      </div>
    </article>
  );
}
