"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              viewBox="0 0 32 32"
              className="h-8 w-8 text-[var(--color-accent)] transition-transform group-hover:scale-105"
              fill="currentColor"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4a3 3 0 110 6 3 3 0 010-6zm-4 8h8l1 3h-2l2 6h-3l-2-5-2 5h-3l2-6h-2l1-3z" />
            </svg>
            <span className="text-xl font-bold text-[var(--color-foreground)]">
              Repairbees
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2 text-[var(--color-text-secondary)]"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-[var(--color-border)] py-3 space-y-1">
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
