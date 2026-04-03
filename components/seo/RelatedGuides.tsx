import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

export default function RelatedGuides({ tags }: { tags: string[] }) {
  // Find up to 3 posts that match any of the given tags
  let relatedPosts = BLOG_POSTS.filter((post) => tags.includes(post.tag));
  
  // If we don't have enough matching posts, fill with others
  if (relatedPosts.length < 3) {
    const otherPosts = BLOG_POSTS.filter((post) => !tags.includes(post.tag));
    relatedPosts = [...relatedPosts, ...otherPosts].slice(0, 3);
  } else {
    // Only take top 3 if we have over abundance
    relatedPosts = relatedPosts.slice(0, 3);
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 pb-16 pt-8 border-t border-border">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Related Guides & Tutorials</h2>
        <Link href="/blog" className="text-sm font-medium text-brand hover:text-[var(--brand-dim)] transition-colors">
          View all articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:shadow-[var(--shadow-md)] hover:border-brand/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2 w-full">
              <span className="text-[10px] font-bold tracking-wider uppercase text-brand bg-[var(--brand-light)] rounded-full px-2 py-0.5 shrink-0">
                {post.tag}
              </span>
              <span className="text-[11px] font-medium text-subtle truncate">
                {post.readMin} min read
              </span>
            </div>
            
            <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-brand transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-sm text-muted line-clamp-3 leading-relaxed mt-auto">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
