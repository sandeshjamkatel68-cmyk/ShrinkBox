import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

export const metadata: Metadata = {
  title: "Blog — File Compression Tips & Guides | ShrinkBox",
  description: "Learn how to compress images, reduce PDF size, convert file formats, and optimize files for web, email, and storage.",
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">Blog</span>
        <h1 className="text-4xl font-bold mt-4 mb-3">Compression Tips & Guides</h1>
        <p className="text-[var(--text-muted)] text-lg">
          Practical guides on image compression, PDF optimization, file formats, and getting the most out of your files.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 hover:border-[var(--brand)]/40 transition-all"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-2.5 py-0.5">
                {post.tag}
              </span>
              <span className="text-xs text-[var(--text-subtle)]">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="text-xs text-[var(--text-subtle)]">· {post.readMin} min read</span>
            </div>
            <h2 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--brand)] transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{post.excerpt}</p>
            <span className="inline-block mt-3 text-xs text-[var(--brand)] font-medium">Read article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
