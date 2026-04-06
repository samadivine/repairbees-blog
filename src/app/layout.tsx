import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Repairbees - Plumbing Maintenance Tips & Expert Guides",
    template: "%s | Repairbees",
  },
  description:
    "Your trusted source for plumbing maintenance tips, expert guides, and home repair advice. Keep your plumbing in top shape with Repairbees.",
  keywords: ["plumbing", "maintenance", "home repair", "plumbing tips", "pipe repair", "drain cleaning"],
  authors: [{ name: "Repairbees Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Repairbees",
    title: "Repairbees - Plumbing Maintenance Tips & Expert Guides",
    description:
      "Your trusted source for plumbing maintenance tips, expert guides, and home repair advice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repairbees - Plumbing Maintenance Tips & Expert Guides",
    description:
      "Your trusted source for plumbing maintenance tips, expert guides, and home repair advice.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
