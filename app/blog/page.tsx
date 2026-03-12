import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

export const metadata: Metadata = {
  title: "Blog — File Compression Tips, Guides & Tutorials | ShrinkBox",
  description:
    "Read practical guides on image compression, PDF size reduction, file format conversion, and file optimization for web, email, and storage. Learn how to compress files online for free with ShrinkBox.",
  keywords: [
    "file compression blog",
    "image compression tips",
    "how to reduce pdf size",
    "compress images for web",
    "file conversion guides",
    "optimize files for email",
    "free file compression tips",
    "ShrinkBox blog",
  ],
  alternates: {
    canonical: "https://shrink-box.com/blog",
  },
  openGraph: {
    title: "ShrinkBox Blog — File Compression Tips, Guides & Tutorials",
    description:
      "Learn how to compress images, reduce PDF size, convert file formats, and optimize files for web, email, and storage.",
    url: "https://shrink-box.com/blog",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShrinkBox Blog — File Compression Tips, Guides & Tutorials",
    description:
      "Practical guides on image compression, PDF optimization, file conversion, and file size reduction.",
  },
};

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <section className="mb-12">
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">
          Blog
        </span>

        <h1 className="text-4xl font-bold mt-4 mb-4">
          File Compression Tips, Guides & Tutorials
        </h1>

        <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl">
          Explore practical articles on compressing images, reducing PDF file size,
          converting file formats, and optimizing files for websites, email attachments,
          and storage. Whether you want faster-loading web images or smaller documents,
          ShrinkBox helps you get better results with less file size.
        </p>
      </section>

      <section className="flex flex-col gap-4" aria-label="Blog posts">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 hover:border-[var(--brand)]/40 transition-all"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-medium text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-2.5 py-0.5">
                {post.tag}
              </span>

              <span className="text-xs text-[var(--text-subtle)]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>

              <span className="text-xs text-[var(--text-subtle)]">
                · {post.readMin} min read
              </span>
            </div>

            <h2 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--brand)] transition-colors mb-2">
              {post.title}
            </h2>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {post.excerpt}
            </p>

            <span className="inline-block mt-3 text-xs text-[var(--brand)] font-medium">
              Read article →
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-semibold mb-3">
          What you’ll learn on the ShrinkBox blog
        </h2>
        <p className="text-[var(--text-muted)] leading-relaxed mb-4">
          Our blog covers the basics and best practices of file optimization, including
          how to compress images without losing too much quality, how to reduce PDF size
          for email, when to use JPG vs PNG vs WebP, and ways to keep files smaller for
          faster websites and easier sharing.
        </p>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Each guide is written to be simple, practical, and useful for students,
          professionals, creators, and anyone who needs smaller files without unnecessary
          steps or software downloads.
        </p>
      </section>
    </main>
  );
}