import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS, CATEGORIES, getToolBySlug } from '@/lib/data/tools'

interface Props {
  params: Promise<{ slug: string }>
}

function resolveSlug(raw: string): string {
  return raw.endsWith('-alternatives') ? raw.slice(0, -'-alternatives'.length) : raw
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(resolveSlug(slug))
  if (!tool) return {}
  return {
    title: `Best Free Alternatives to ${tool.name} in 2025`,
    description: `Stop paying ${tool.pricing} for ${tool.name}. Here are ${tool.alternatives.length} free and cheaper alternatives that do the same job.`,
  }
}

export async function generateStaticParams() {
  return TOOLS.map(tool => ({ slug: `${tool.slug}-alternatives` }))
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(resolveSlug(slug))
  if (!tool) notFound()

  const category = CATEGORIES.find(c => c.id === tool.category)
  const relatedTools = TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 3)
  const freeCount = tool.alternatives.filter(a => a.isFree).length

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] mb-8">
        <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/category/${category.id}`} className="hover:text-emerald-500 transition-colors">{category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-[var(--color-text-primary)]">{tool.name} Alternatives</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{tool.logo}</span>
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
              Best Free Alternatives to {tool.name}
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-1">
              Currently paying <span className="text-red-500 font-semibold">{tool.pricing}</span>? Here are {tool.alternatives.length} alternatives — {freeCount} completely free.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-3 mt-6">
          <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
            💸 {tool.name}: {tool.pricing}
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm">
            ✅ {freeCount} free alternatives below
          </div>
        </div>
      </div>

      {/* Alternatives */}
      <div className="flex flex-col gap-4 mb-14">
        {tool.alternatives.map((alt, i) => (
          <div
            key={alt.id}
            className="relative p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-emerald-500 transition-all group"
          >
            {i === 0 && (
              <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                Best pick
              </div>
            )}
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">{alt.logo}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{alt.name}</h2>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${alt.isFree ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'}`}>
                    {alt.pricing}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">{alt.tagline}</p>
                <ul className="flex flex-col gap-1 mb-4">
                  {alt.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={alt.affiliateLink ?? alt.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
                >
                  Try {alt.name} free
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-14">
        <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Bottom line</h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {tool.name} costs {tool.pricing}. All {freeCount} free alternatives above cover the core functionality most users need. If you&apos;re on a tight budget or just starting out, try the free options first before committing to a paid plan.
        </p>
      </div>

      {/* Related tools in same category */}
      {relatedTools.length > 0 && (
        <div>
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
            More {category?.name ?? ''} alternatives
          </h3>
          <div className="flex flex-col gap-3">
            {relatedTools.map(t => (
              <Link
                key={t.id}
                href={`/${t.slug}-alternatives`}
                className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-emerald-500 transition-all group"
              >
                <span className="text-xl">{t.logo}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-emerald-500 transition-colors">{t.name} alternatives</span>
                  <span className="text-xs text-[var(--color-text-tertiary)] ml-2">{t.pricing}</span>
                </div>
                <svg className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
