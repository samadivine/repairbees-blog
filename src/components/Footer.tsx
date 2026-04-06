import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-[var(--color-foreground)]">
              Repairbees
            </Link>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              Your trusted source for plumbing maintenance tips, guides, and expert advice to keep your home running smoothly.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="mailto:contact@repairbees.com" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  contact@repairbees.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)]">
          <p className="text-center text-xs text-[var(--color-text-secondary)]">
            &copy; {new Date().getFullYear()} Repairbees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
