"use client";

import { useState, useEffect } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -75% 0px" }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-24">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] mb-3">
        On this page
      </h4>
      <ul className="space-y-1.5 border-l border-[var(--color-border)]">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-[13px] leading-snug transition-colors py-0.5 ${
                heading.level === 3 ? "pl-6" : "pl-3"
              } ${
                activeId === heading.id
                  ? "text-[var(--color-primary)] border-l-2 border-[var(--color-primary)] -ml-px font-medium"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
