import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, extractHeadings, addHeadingIds } from "@/lib/blog";
import TableOfContents from "@/components/TableOfContents";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentWithIds = addHeadingIds(post.content);
  const headings = extractHeadings(contentWithIds);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image || undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Repairbees",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://repairbees.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://repairbees.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://repairbees.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-[var(--color-text-secondary)]">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[var(--color-primary)] transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--color-foreground)] font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl">
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)]">
            <span>{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="h-1 w-1 rounded-full bg-[var(--color-border)]" />
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mt-8 relative aspect-[2/1] max-w-3xl overflow-hidden rounded-lg bg-[var(--color-surface)]">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        )}

        {/* Content + TOC layout */}
        <div className="mt-10 flex gap-12">
          <div
            className="prose max-w-3xl flex-1"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />
          {headings.length > 0 && (
            <aside className="hidden xl:block w-56 shrink-0">
              <TableOfContents headings={headings} />
            </aside>
          )}
        </div>

        {/* CTA */}
        {post.cta && (
          <div className="mt-12 max-w-3xl rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
            <Link
              href={post.cta.url}
              className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-accent-light)] transition-colors"
            >
              {post.cta.text}
            </Link>
          </div>
        )}
      </article>
    </>
  );
}
