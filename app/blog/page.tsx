"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

const ALL_TAGS = Array.from(new Set(BLOG_POSTS.map((p) => p.tag)));

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag
    ? BLOG_POSTS.filter((p) => p.tag === activeTag)
    : BLOG_POSTS;

  const featured = BLOG_POSTS[BLOG_POSTS.length - 1]; // latest article

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="text-xs font-bold text-brand uppercase tracking-widest bg-[var(--brand-light)] px-3 py-1 rounded-full border border-brand/10">
          Blog &middot; {BLOG_POSTS.length} Articles
        </span>
        <h1 className="text-4xl font-extrabold mt-6 mb-3 tracking-tight">
          Learn. Optimize. Ship Faster.
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Practical guides on image compression, PDF tools, web performance, and file formats — written by developers for everyone.
        </p>
      </div>

      {/* Featured Article */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group block rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-[var(--brand-light)] to-surface p-8 mb-10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-brand text-white px-2.5 py-1 rounded-full">
            ✨ Latest
          </span>
          <span className="text-xs font-medium text-brand bg-white/60 rounded-full px-2.5 py-0.5">
            {featured.tag}
          </span>
          <span className="text-xs text-muted">
            {new Date(featured.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-foreground group-hover:text-brand transition-colors mb-3">
          {featured.title}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{featured.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-brand group-hover:gap-3 transition-all">
          Read article
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </Link>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
            !activeTag
              ? "bg-brand text-white border-brand shadow-lg"
              : "bg-surface border-border text-muted hover:border-brand/40 hover:text-brand"
          }`}
        >
          All ({BLOG_POSTS.length})
        </button>
        {ALL_TAGS.map((tag) => {
          const count = BLOG_POSTS.filter((p) => p.tag === tag).length;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                activeTag === tag
                  ? "bg-brand text-white border-brand shadow-lg"
                  : "bg-surface border-border text-muted hover:border-brand/40 hover:text-brand"
              }`}
            >
              {tag} ({count})
            </button>
          );
        })}
      </div>

      {/* Article Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-border bg-surface px-6 py-5 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl flex flex-col"
            style={{ animationDelay: `${idx * 0.03}s` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-brand bg-[var(--brand-light)] rounded-full px-2.5 py-0.5">
                {post.tag}
              </span>
              <span className="text-xs text-muted ml-auto">{post.readMin} min</span>
            </div>
            <h2 className="text-[15px] font-bold text-foreground group-hover:text-brand transition-colors mb-2 leading-snug">
              {post.title}
            </h2>
            <p className="text-xs text-muted leading-relaxed flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
              <span className="text-[11px] text-muted">
                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              <span className="text-xs text-brand font-bold group-hover:translate-x-1 transition-transform">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand to-accent p-10 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative">
          <h2 className="text-2xl font-extrabold mb-2">Stay ahead of the curve</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Get weekly tips on web performance, image optimization, and file management. No spam — just useful stuff.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/60 text-sm font-medium"
            />
            <button className="px-6 py-3 bg-white text-brand font-bold rounded-xl text-sm hover:bg-white/90 transition-colors shrink-0 cursor-pointer shadow-lg">
              Subscribe
            </button>
          </div>
          <p className="text-[11px] text-white/50 mt-3">Join 500+ creators and developers. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}
