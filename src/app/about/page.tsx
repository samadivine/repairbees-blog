import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Repairbees — your trusted resource for plumbing maintenance advice, expert tips, and home repair guides.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-foreground)]">About Repairbees</h1>

      <div className="mt-8 space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
        <p>
          Welcome to <strong className="text-[var(--color-foreground)]">Repairbees</strong> — your go-to resource for
          practical plumbing maintenance tips, expert guides, and home repair advice. We believe that every homeowner
          should have access to reliable information about maintaining their plumbing systems.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Our Mission</h2>
        <p>
          Our mission is simple: to help homeowners prevent costly plumbing repairs through education and proactive
          maintenance. We publish clear, actionable content that empowers you to take control of your home&apos;s
          plumbing health.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">What We Cover</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Preventive maintenance schedules and checklists</li>
          <li>Step-by-step repair guides for common plumbing issues</li>
          <li>Seasonal plumbing tips to protect your home year-round</li>
          <li>Expert advice on when to call a professional plumber</li>
          <li>Product reviews and recommendations for homeowners</li>
        </ul>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Our Team</h2>
        <p>
          Our content is created and reviewed by experienced plumbing professionals and home maintenance experts. We
          combine decades of hands-on experience with a passion for educating homeowners. Every article is researched,
          fact-checked, and written to provide genuine value.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Why Trust Repairbees</h2>
        <p>
          We are committed to providing accurate, unbiased, and practical information. Our team has no affiliation with
          any plumbing product manufacturers, ensuring that our recommendations are always in your best interest. We
          update our content regularly to reflect the latest best practices and industry standards.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Get in Touch</h2>
        <p>
          Have a question or suggestion? We&apos;d love to hear from you. Visit our{" "}
          <a href="/contact" className="text-[var(--color-primary)] hover:underline">
            Contact page
          </a>{" "}
          to reach out to our team.
        </p>
      </div>
    </div>
  );
}
