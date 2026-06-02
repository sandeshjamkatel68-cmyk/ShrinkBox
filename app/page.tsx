'use client'

import Link from 'next/link'
import { useState } from 'react'
import { TOOLS, CATEGORIES, searchTools } from '@/lib/data/tools'
import { GENERAL_FAQS } from '@/lib/data/faqs'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const results = query.trim().length > 1 ? searchTools(query) : []
  const popularTools = TOOLS.slice(0, 9)

  return (
    <div>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-5 pt-20 pb-16 text-center">

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-100">
            Free SaaS alternatives
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Stop paying for software<br />
            <span className="text-emerald-500">you don&apos;t need to</span>
          </h1>

          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Search any tool you pay for. Find free alternatives instantly.
          </p>

          {/* Search bar */}
          <div className="relative">
            <div className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-gray-200 shadow-sm focus-within:border-emerald-400 focus-within:ring-3 focus-within:ring-emerald-50 transition-all">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder='Try "Notion", "Figma", "Slack"...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 text-gray-900 placeholder:text-gray-400 outline-none text-sm bg-transparent"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Dropdown */}
            {results.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                {results.map(tool => (
                  <Link
                    key={tool.id}
                    href={`/${tool.slug}-alternatives`}
                    onClick={() => setQuery('')}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <span className="text-lg">{tool.logo}</span>
                    <div className="text-left flex-1">
                      <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                      <div className="text-xs text-gray-400">{tool.alternatives.filter(a => a.isFree).length} free alternatives</div>
                    </div>
                    <span className="text-xs font-medium text-red-500">{tool.pricing}</span>
                  </Link>
                ))}
              </div>
            )}

            {query.trim().length > 1 && results.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 text-sm text-gray-500 z-50">
                No results — <Link href="/contact" className="text-emerald-600 hover:underline">suggest a tool</Link>
              </div>
            )}
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['notion', 'figma', 'slack', 'ahrefs', 'zoom', 'canva', '1password'].map(slug => {
              const tool = TOOLS.find(t => t.slug === slug)
              if (!tool) return null
              return (
                <Link key={slug} href={`/${tool.slug}-alternatives`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 border border-transparent transition-all">
                  {tool.logo} {tool.name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-2xl mx-auto px-5 py-4 flex justify-center gap-12">
          {[
            { v: `${TOOLS.length}+`, l: 'Tools' },
            { v: `${TOOLS.reduce((a, t) => a + t.alternatives.length, 0)}+`, l: 'Free alternatives' },
            { v: '$0', l: 'Cost to use' },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-lg font-bold text-emerald-500">{s.v}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Browse by category</h2>
        <p className="text-sm text-gray-400 mb-7">Pick the category where you spend the most</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {CATEGORIES.map(cat => {
            const count = TOOLS.filter(t => t.category === cat.id).length
            if (!count) return null
            return (
              <Link key={cat.id} href={`/category/${cat.id}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-center">
                <span className="text-xl">{cat.emoji}</span>
                <span className="text-xs font-medium text-gray-700 group-hover:text-emerald-700 leading-tight">{cat.name}</span>
                <span className="text-[11px] text-gray-400">{count} tools</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Popular Tools ─────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-5 py-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Popular tools</h2>
          <p className="text-sm text-gray-400 mb-7">Tools people search most for cheaper options</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {popularTools.map(tool => (
              <Link key={tool.id} href={`/${tool.slug}-alternatives`}
                className="group flex items-center gap-3.5 p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all">
                <span className="text-2xl shrink-0">{tool.logo}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{tool.name}</div>
                  <div className="text-xs text-red-500 font-medium mt-0.5">{tool.pricing}</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xs text-gray-400">{tool.alternatives.filter(a => a.isFree).length} free</div>
                  <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-400 transition-colors mt-1 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/tools" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 font-medium transition-colors">
              View all {TOOLS.length} tools
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-10 text-center">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { n: '1', t: 'Search your tool', d: 'Type any SaaS tool you currently pay for.' },
            { n: '2', t: 'Compare options', d: 'See free and cheaper alternatives with key highlights.' },
            { n: '3', t: 'Switch and save', d: 'Click through, sign up for free, save money today.' },
          ].map(s => (
            <div key={s.n} className="flex flex-col items-center text-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white font-bold text-sm flex items-center justify-center">{s.n}</div>
              <div className="font-semibold text-sm text-gray-900">{s.t}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-5 py-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Frequently asked questions</h2>
          <p className="text-sm text-gray-400 mb-8">Everything you need to know about finding free SaaS alternatives</p>
          <FAQAccordion items={GENERAL_FAQS} />
        </div>
      </section>

    </div>
  )
}

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left bg-transparent"
          >
            <span className="text-sm font-medium text-gray-900">{item.q}</span>
            <svg
              className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-4 pb-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 leading-relaxed pt-3">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
