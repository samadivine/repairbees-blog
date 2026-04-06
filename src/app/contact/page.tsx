import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Repairbees team. We welcome your questions, feedback, and suggestions about plumbing maintenance.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Contact Us</h1>
      <p className="mt-3 text-[var(--color-text-secondary)]">
        Have a question, suggestion, or feedback? We&apos;d love to hear from you.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--color-border)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-foreground)]">Email Us</h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            For general inquiries and feedback
          </p>
          <a
            href="mailto:contact@repairbees.com"
            className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          >
            contact@repairbees.com
          </a>
        </div>

        <div className="rounded-lg border border-[var(--color-border)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-foreground)]">Content Suggestions</h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Have a topic you&apos;d like us to cover?
          </p>
          <a
            href="mailto:content@repairbees.com"
            className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          >
            content@repairbees.com
          </a>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
        <h2 className="text-xl font-semibold text-[var(--color-foreground)]">Send a Message</h2>
        <form className="mt-6 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1.5 block w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1.5 block w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1.5 block w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] resize-y"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
