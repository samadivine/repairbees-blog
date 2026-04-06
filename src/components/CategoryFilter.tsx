"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "";

  function handleFilter(category: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    params.delete("page");
    router.push(`/blog?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleFilter("")}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          !active
            ? "bg-[var(--color-primary)] text-white"
            : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-[var(--color-primary)] text-white"
              : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
