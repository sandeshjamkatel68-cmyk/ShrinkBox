import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { TOOLS, CATEGORIES, getToolBySlug } from '@/lib/data/tools'
import { getToolFAQs } from '@/lib/data/faqs'

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
  const freeCount = tool.alternatives.filter(a => a.isFree).length
  return {
    title: `${tool.name} Alternatives — ${freeCount} Free Options in 2025`,
    description: `Stop paying ${tool.pricing} for ${tool.name}. Discover ${freeCount} free alternatives that do the same job. Compare features, pricing, and find the best free ${tool.name} replacement for your needs.`,
    keywords: [
      `${tool.name.toLowerCase()} alternatives`,
      `free ${tool.name.toLowerCase()} alternative`,
      `${tool.name.toLowerCase()} alternative free`,
      `cheaper alternative to ${tool.name.toLowerCase()}`,
      `${tool.name.toLowerCase()} replacement`,
      `tools like ${tool.name.toLowerCase()}`,
      `best ${tool.name.toLowerCase()} alternative 2025`,
    ],
    alternates: {
      canonical: `https://shrink-box.com/${tool.slug}-alternatives`,
    },
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
  const faqs = getToolFAQs(resolveSlug(slug))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-12">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/category/${category.id}`} className="hover:text-gray-600 transition-colors">{category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-600">{tool.name} Alternatives</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-start gap-4 mb-5">
          <span className="text-4xl">{tool.logo}</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Best Free Alternatives to {tool.name}
            </h1>
            <p className="text-gray-500 text-sm mt-1.5">
              {tool.name} costs <span className="text-red-500 font-semibold">{tool.pricing}</span> — {freeCount} free alternatives below.
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 border border-red-100 text-red-600 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
            {tool.pricing}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            {freeCount} free alternatives
          </span>
        </div>
      </div>

      {/* Alternatives */}
      <div className="flex flex-col gap-3 mb-12">
        {tool.alternatives.map((alt, i) => (
          <div key={alt.id} className="relative rounded-xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm transition-all overflow-hidden">
            {i === 0 && (
              <div className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 text-center">
                Best pick
              </div>
            )}
            <div className="p-5">
              <div className="flex items-start gap-3.5">
                <span className="text-3xl shrink-0 mt-0.5">{alt.logo}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <h2 className="text-base font-semibold text-gray-900">{alt.name}</h2>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                      alt.isFree
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}>
                      {alt.pricing}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{alt.tagline}</p>
                  <ul className="space-y-1.5 mb-4">
                    {alt.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
                  >
                    Try {alt.name} free
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary callout */}
      <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-12">
        <p className="text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-900">Bottom line:</span>{' '}
          {tool.name} costs {tool.pricing}. The {freeCount} free alternatives above cover what most users actually need.
          Try a free option first — you can always upgrade later.
        </p>
      </div>

      {/* FAQ */}
      {faqs.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">
            Frequently asked questions
          </h2>
          <div className="space-y-2">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      )}

      {/* Related */}
      {relatedTools.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            More {category?.name} alternatives
          </h3>
          <div className="flex flex-col gap-2">
            {relatedTools.map(t => (
              <Link key={t.id} href={`/${t.slug}-alternatives`}
                className="group flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-emerald-300 transition-all">
                <span className="text-lg">{t.logo}</span>
                <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
                  {t.name} alternatives
                </span>
                <span className="text-xs text-red-500 font-medium">{t.pricing}</span>
                <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-4 py-3.5 cursor-pointer list-none">
        <span className="text-sm font-medium text-gray-900">{q}</span>
        <svg className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-4 pb-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 leading-relaxed pt-3">{a}</p>
      </div>
    </details>
  )
}
