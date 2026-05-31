import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS, CATEGORIES } from '@/lib/data/tools'

export const metadata: Metadata = {
  title: 'All Tools — ShrinkBox',
  description: `Browse all ${TOOLS.length} tools and find free alternatives.`,
}

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-12">

      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">All Tools</h1>
        <p className="text-sm text-gray-400">{TOOLS.length} popular SaaS tools — click any to find free alternatives</p>
      </div>

      {CATEGORIES.map(cat => {
        const tools = TOOLS.filter(t => t.category === cat.id)
        if (!tools.length) return null
        return (
          <div key={cat.id} className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-base">{cat.emoji}</span>
                <h2 className="text-sm font-semibold text-gray-900">{cat.name}</h2>
              </div>
              <Link href={`/category/${cat.id}`} className="text-xs text-emerald-600 hover:underline">View all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {tools.map(tool => (
                <Link key={tool.id} href={`/${tool.slug}-alternatives`}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-emerald-300 transition-all">
                  <span className="text-xl shrink-0">{tool.logo}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors truncate">{tool.name}</div>
                    <div className="text-xs text-red-500 font-medium">{tool.pricing}</div>
                  </div>
                  <span className="text-[11px] text-gray-400 shrink-0">
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
