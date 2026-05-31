import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS, CATEGORIES, getCategoryById, getToolsByCategory } from '@/lib/data/tools'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = getCategoryById(category)
  if (!cat) return {}
  return {
    title: `Free Alternatives to ${cat.name} Tools`,
    description: `Find free and cheaper alternatives to popular ${cat.name.toLowerCase()} tools. Stop overpaying — switch to better free options today.`,
  }
}

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ category: c.id }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = getCategoryById(category)
  if (!cat) notFound()

  const tools = getToolsByCategory(category)
  if (tools.length === 0) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] mb-8">
        <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[var(--color-text-primary)]">{cat.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="text-4xl mb-3">{cat.emoji}</div>
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          Free Alternatives to {cat.name} Tools
        </h1>
        <p className="text-[var(--color-text-secondary)]">{cat.description}</p>
      </div>

      {/* Tools Grid */}
      <div className="flex flex-col gap-4">
        {tools.map(tool => {
          const freeCount = tool.alternatives.filter(a => a.isFree).length
          return (
            <Link
              key={tool.id}
              href={`/${tool.slug}-alternatives`}
              className="group flex items-start gap-4 p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-emerald-500 transition-all"
            >
              <span className="text-3xl shrink-0">{tool.logo}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h2 className="font-semibold text-[var(--color-text-primary)] group-hover:text-emerald-500 transition-colors">{tool.name}</h2>
                  <span className="text-xs text-red-500 font-medium">{tool.pricing}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">{tool.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {freeCount} free alternatives
                  </span>
                  <span className="text-xs text-[var(--color-text-tertiary)]">
                    {tool.alternatives.length} total options
                  </span>
                </div>
              </div>
              <svg className="w-4 h-4 text-[var(--color-text-tertiary)] shrink-0 mt-1 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )
        })}
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-emerald-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Browse all categories
        </Link>
      </div>
    </div>
  )
}
