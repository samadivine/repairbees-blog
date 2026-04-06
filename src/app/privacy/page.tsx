import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Repairbees privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Privacy Policy</h1>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Last updated: April 6, 2026</p>

      <div className="mt-8 space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
        <p>
          At Repairbees (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
          visit our website repairbees.com (the &quot;Site&quot;).
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Information We Collect</h2>
        <p>We may collect information about you in a variety of ways, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[var(--color-foreground)]">Personal Data:</strong> When you voluntarily provide it
            through our contact form, such as your name and email address.
          </li>
          <li>
            <strong className="text-[var(--color-foreground)]">Usage Data:</strong> Information automatically collected
            when you visit the Site, including your IP address, browser type, operating system, referring URLs, pages
            viewed, and the dates/times of your visits.
          </li>
          <li>
            <strong className="text-[var(--color-foreground)]">Cookies and Tracking:</strong> We may use cookies, web
            beacons, and similar technologies to enhance your experience and gather information about visitors and
            visits to our Site.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Operate and maintain our website</li>
          <li>Improve, personalize, and expand our content</li>
          <li>Understand and analyze how you use our website</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Display advertisements through third-party advertising partners, such as Google AdSense</li>
        </ul>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Third-Party Advertising</h2>
        <p>
          We may use third-party advertising companies, including Google AdSense, to serve ads when you visit our Site.
          These companies may use information about your visits to this and other websites to provide advertisements
          about goods and services of interest to you. For more information about Google&apos;s use of data, please
          visit{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-[var(--color-primary)] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Advertising Policies
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Cookies</h2>
        <p>
          We use cookies to help personalize your online experience. A cookie is a text file that is placed on your
          hard drive by a web page server. You can choose to accept or decline cookies through your browser settings.
          Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if
          you prefer.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information. However, no method of
          transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including the
          right to access, correct, or delete your data. To exercise these rights, please contact us at{" "}
          <a href="mailto:contact@repairbees.com" className="text-[var(--color-primary)] hover:underline">
            contact@repairbees.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this
          Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-xl font-semibold text-[var(--color-foreground)] pt-4">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:contact@repairbees.com" className="text-[var(--color-primary)] hover:underline">
            contact@repairbees.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
