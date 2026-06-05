import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — ShrinkBox',
  description: 'Guides on finding free software alternatives, reducing SaaS costs, and saving money on tools your business uses every day.',
}

const POSTS = [
  { slug: 'reduce-saas-costs-startup', title: 'How Startups Can Reduce SaaS Costs Without Sacrificing Productivity', excerpt: 'SaaS costs are one of the fastest-growing expenses for startups. Here is how to cut them without hurting your team.', date: '2026-06-04', category: 'Savings Guide' },
  { slug: 'open-source-alternatives-to-paid-software', title: 'The Best Open Source Alternatives to Paid Software in 2025', excerpt: 'Open source software is free, secure, and often just as good as paid alternatives. Here are the best ones worth switching to today.', date: '2026-06-03', category: 'Savings Guide' },
  { slug: 'free-email-marketing-tools-mailchimp-alternatives', title: 'Best Free Email Marketing Tools — Mailchimp Alternatives in 2025', excerpt: 'Mailchimp gutted its free plan. Brevo and MailerLite offer better free tiers with automation included.', date: '2026-06-01', category: 'SEO & Marketing' },
  { slug: 'free-password-manager-bitwarden-vs-1password', title: 'Bitwarden vs 1Password — Why the Free Option Wins', excerpt: '1Password costs $2.99/month. Bitwarden is free, open source, and just as secure.', date: '2026-05-28', category: 'Password & Security' },
  { slug: 'microsoft-clarity-vs-hotjar-free-alternative', title: 'Microsoft Clarity vs Hotjar — Why I Switched to the Free Option', excerpt: 'Microsoft Clarity is completely free with no session limits. Hotjar charges $32/month for the same features.', date: '2026-05-25', category: 'Analytics' },
  { slug: 'best-free-seo-tools-ahrefs-alternatives', title: 'Best Free SEO Tools — Ahrefs Alternatives That Actually Work', excerpt: 'Ahrefs costs $99/month. These free SEO tools cover 80% of what most small websites need.', date: '2026-05-20', category: 'SEO & Marketing' },
  { slug: 'free-slack-alternatives-for-small-teams', title: 'Best Free Slack Alternatives for Small Teams in 2025', excerpt: 'Slack charges $7.25 per user per month. These free alternatives do the same job.', date: '2026-05-15', category: 'Communication' },
  { slug: 'how-to-shrink-your-saas-bill', title: 'How to Cut Your SaaS Bill in Half This Month', excerpt: 'The average startup spends $4,000+/month on software. Here is a step-by-step audit to find what you can replace for free.', date: '2026-05-10', category: 'Savings Guide' },
  { slug: 'free-alternatives-to-figma', title: 'Best Free Alternatives to Figma in 2025', excerpt: 'Figma charges $12/month per editor. Penpot and Lunacy offer the same core features completely free.', date: '2026-05-05', category: 'Design' },
  { slug: 'free-alternatives-to-notion', title: 'Best Free Alternatives to Notion in 2025', excerpt: 'Notion costs $8-16/month per user. Here are 3 completely free alternatives that cover everything most people use Notion for.', date: '2026-05-01', category: 'Project Management' },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Savings Guide': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Design': 'bg-purple-50 text-purple-700 border-purple-100',
  'SEO & Marketing': 'bg-blue-50 text-blue-700 border-blue-100',
  'Communication': 'bg-orange-50 text-orange-700 border-orange-100',
  'Analytics': 'bg-yellow-50 text-yellow-700 border-yellow-100',
  'Password & Security': 'bg-red-50 text-red-700 border-red-100',
  'Project Management': 'bg-indigo-50 text-indigo-700 border-indigo-100',
}

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Blog</h1>
        <p className="text-sm text-gray-400">Guides on finding free software alternatives and saving money on SaaS tools.</p>
      </div>

      <div className="flex flex-col gap-4">
        {POSTS.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="group block p-5 rounded-xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${CATEGORY_COLORS[post.category] ?? 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
            <h2 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1 leading-snug">{post.title}</h2>
            <p className="text-xs text-gray-400 leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
