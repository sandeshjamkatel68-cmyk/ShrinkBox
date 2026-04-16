import Link from "next/link";

interface ToolCTAProps {
  toolName: string;
  toolHref: string;
  headline?: string;
  description?: string;
  variant?: "inline" | "bottom";
}

/**
 * ToolCTA — Reusable CTA component to embed in blog articles.
 * Links readers directly to the relevant ShrinkBox tool.
 */
export function ToolCTA({
  toolName,
  toolHref,
  headline,
  description,
  variant = "bottom",
}: ToolCTAProps) {
  const defaultHeadline = variant === "inline"
    ? `Try it now — ${toolName}`
    : `Ready to try it yourself?`;

  const defaultDescription = variant === "inline"
    ? `Skip the reading and use our free ${toolName} tool — no signup, no limits.`
    : `Use ShrinkBox's free ${toolName} — no account required, instant results.`;

  return (
    <div
      className={`rounded-2xl border border-brand/30 bg-[var(--brand-light)] px-6 py-6 ${
        variant === "bottom" ? "text-center" : "flex items-center justify-between gap-6 flex-wrap"
      }`}
    >
      <div className={variant === "inline" ? "flex-1" : ""}>
        <p className="font-bold text-foreground mb-1 text-sm">
          🔧 {headline ?? defaultHeadline}
        </p>
        <p className="text-muted text-xs leading-relaxed">
          {description ?? defaultDescription}
        </p>
      </div>
      <Link
        href={toolHref}
        className={`inline-block bg-brand hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors shrink-0 ${
          variant === "bottom" ? "mt-4" : ""
        }`}
      >
        {toolName} →
      </Link>
    </div>
  );
}

interface RelatedArticlesProps {
  currentSlug: string;
  articles: Array<{ slug: string; title: string; tag: string; excerpt: string }>;
  count?: number;
}

/**
 * RelatedArticles — Shows links to related blog posts at the bottom of articles and tool pages.
 */
export function RelatedArticles({ currentSlug, articles, count = 3 }: RelatedArticlesProps) {
  const related = articles.filter((a) => a.slug !== currentSlug).slice(0, count);
  if (related.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-4">Related Articles</h3>
      <div className="flex flex-col gap-3">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-4 hover:border-brand/40 transition-colors group"
          >
            <span className="text-xs font-medium text-brand bg-[var(--brand-light)] rounded-full px-2 py-0.5 shrink-0 mt-0.5">
              {article.tag}
            </span>
            <div>
              <span className="text-sm font-semibold group-hover:text-brand transition-colors block text-foreground">
                {article.title}
              </span>
              <span className="text-xs text-muted mt-1 block line-clamp-2">{article.excerpt}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
