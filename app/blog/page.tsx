import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — ShrinkBox',
  description: 'Tips and guides on finding free alternatives to expensive SaaS tools, saving money on software, and building lean tech stacks.',
}

const POSTS = [
  {
    slug: 'free-alternatives-to-notion',
    title: 'Best Free Alternatives to Notion in 2025',
    excerpt: 'Notion costs $8–16/month per user. Here are 3 free alternatives that cover everything most people actually use Notion for.',
    date: '2025-06-01',
    category: 'Project Management',
  },
  {
    slug: 'free-alternatives-to-figma',
    title: 'Best Free Alternatives to Figma',
    excerpt: 'Figma now charges $12/month per editor. Penpot and Lunacy offer the same core features completely free.',
    date: '2025-05-28',
    category: 'Design',
  },
  {
    slug: 'how-to-shrink-your-saas-bill',
    title: 'How to Cut Your SaaS Bill in Half This Month',
    excerpt: 'The average startup spends $4,000+/month on software. Here is a step-by-step audit to find what you can replace for free.',
    date: '2025-05-20',
    category: 'Savings Guide',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Blog</h1>
      <p className="text-[var(--color-text-secondary)] mb-10">Guides on finding free software alternatives and saving money on SaaS.</p>

      <div className="flex flex-col gap-6">
        {POSTS.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-emerald-500 transition-all no-underline"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {post.category}
              </span>
              <span className="text-xs text-[var(--color-text-tertiary)]">{post.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-emerald-500 transition-colors mb-1">{post.title}</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
