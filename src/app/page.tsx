import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
              Plumbing Maintenance Blog
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.1]">
              Keep your home plumbing in{" "}
              <span className="text-[var(--color-primary)]">top shape</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Expert guides, maintenance tips, and practical advice for homeowners. Learn how to prevent costly repairs and maintain your plumbing system.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-primary-light)] transition-colors"
              >
                Read the Blog
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-surface)] transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
