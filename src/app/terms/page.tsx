import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Repairbees terms of service. Please read these terms carefully before using our website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Terms of Service</h1>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Last updated: April 6, 2026</p>

      <div className="mt-8 space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
        <p>
          Welcome to Repairbees. By accessing and using our website repairbees.com (the &quot;Site&quot;), you agree to
          comply with and be bound by the following terms and conditions. Please review the following terms carefully.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Site, you agree to be bound by these Terms of Service and all applicable laws and
          regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this
          site.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">2. Use of Content</h2>
        <p>
          The content on this Site is provided for general informational purposes only. It is not intended as
          professional plumbing advice. While we strive to provide accurate and up-to-date information, we make no
          representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
          or suitability of the information.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">3. Disclaimer</h2>
        <p>
          Plumbing work can be dangerous and may require professional expertise. Always consult a licensed plumber for
          significant repairs or installations. Repairbees is not responsible for any damages or injuries resulting from
          the use of information provided on this Site.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">4. Intellectual Property</h2>
        <p>
          All content on this Site, including text, graphics, logos, images, and software, is the property of
          Repairbees or its content suppliers and is protected by copyright laws. You may not reproduce, distribute,
          modify, or create derivative works from any content without our express written permission.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">5. User Conduct</h2>
        <p>When using our Site, you agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use the Site for any unlawful purpose</li>
          <li>Attempt to interfere with the proper functioning of the Site</li>
          <li>Collect or harvest any personally identifiable information from the Site</li>
          <li>Use the Site to transmit any spam, malware, or other harmful content</li>
        </ul>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">6. Third-Party Links</h2>
        <p>
          Our Site may contain links to third-party websites. These links are provided for your convenience only. We
          have no control over the content of these sites and accept no responsibility for them or for any loss or
          damage that may arise from your use of them.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">7. Advertising</h2>
        <p>
          The Site may display advertisements from third-party advertising networks, including Google AdSense. These
          advertisements may use cookies and similar technologies. Your interaction with these advertisements is subject
          to the terms and policies of the respective advertisers.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">8. Limitation of Liability</h2>
        <p>
          In no event shall Repairbees be liable for any direct, indirect, incidental, special, consequential, or
          punitive damages arising out of or in connection with your use of the Site, whether based on warranty,
          contract, tort, or any other legal theory.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon
          posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new
          terms.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">10. Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at{" "}
          <a href="mailto:contact@repairbees.com" className="text-[var(--color-primary)] hover:underline">
            contact@repairbees.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
