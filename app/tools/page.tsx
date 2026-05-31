import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS, CATEGORIES } from '@/lib/data/tools'

export const metadata: Metadata = {
  title: 'All Tools — Find Free Alternatives to Any SaaS',
  description: `Browse all ${TOOLS.length} SaaS tools and find free or cheaper alternatives. Stop overpaying for software you don't need to pay for.`,
}

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">All Tools</h1>
        <p className="text-[var(--color-text-secondary)]">
          {TOOLS.length} popular SaaS tools — click any to find free alternatives
        </p>
      </div>

      {CATEGORIES.map(cat => {
        const tools = TOOLS.filter(t => t.category === cat.id)
        if (tools.length === 0) return null
        return (
          <div key={cat.id} className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{cat.emoji}</span>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{cat.name}</h2>
              <Link href={`/category/${cat.id}`} className="ml-auto text-xs text-emerald-500 hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tools.map(tool => (
                <Link
                  key={tool.id}
                  href={`/${tool.slug}-alternatives`}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-emerald-500 transition-all"
                >
                  <span className="text-2xl shrink-0">{tool.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-emerald-500 transition-colors truncate">{tool.name}</div>
                    <div className="text-xs text-red-500">{tool.pricing}</div>
                  </div>
                  <span className="text-xs text-[var(--color-text-tertiary)] shrink-0">
                    {tool.alternatives.filter(a => a.isFree).length} free
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
