import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import Pagination from "@/components/Pagination";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Browse our latest plumbing maintenance articles, tips, and expert guides to keep your home plumbing system in great condition.",
};

const POSTS_PER_PAGE = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const category = typeof resolvedParams.category === "string" ? resolvedParams.category : "";
  const page = typeof resolvedParams.page === "string" ? parseInt(resolvedParams.page, 10) : 1;
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const filtered = category ? allPosts.filter((p) => p.category === category) : allPosts;
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const posts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const filterParams: Record<string, string> = {};
  if (category) filterParams.category = category;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Blog</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Tips, guides, and expert advice for plumbing maintenance
        </p>
      </div>

      {categories.length > 0 && (
        <div className="mb-8">
          <Suspense fallback={null}>
            <CategoryFilter categories={categories} />
          </Suspense>
        </div>
      )}

      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-[var(--color-text-secondary)]">No articles found.</p>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/blog"
        searchParams={filterParams}
      />
    </div>
  );
}
