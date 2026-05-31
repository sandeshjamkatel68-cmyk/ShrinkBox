'use client'

import Link from 'next/link'
import { useState } from 'react'
import { TOOLS, CATEGORIES, searchTools } from '@/lib/data/tools'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const results = query.trim().length > 1 ? searchTools(query) : []

  const popularTools = TOOLS.slice(0, 9)

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            💰 Stop overpaying for software
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
            Find free alternatives to<br />
            <span className="text-emerald-500">expensive SaaS tools</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Search any tool you&apos;re paying for. Instantly find free or cheaper alternatives and shrink your monthly software bill.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <svg className="w-5 h-5 text-[var(--color-text-tertiary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder='Search a tool (e.g. "Notion", "Figma", "Slack")...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none text-base"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {results.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-lg overflow-hidden z-50">
                {results.map(tool => (
                  <Link
                    key={tool.id}
                    href={`/${tool.slug}-alternatives`}
                    onClick={() => setQuery('')}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-bg-hover)] transition-colors"
                  >
                    <span className="text-xl">{tool.logo}</span>
                    <div className="text-left">
                      <div className="text-sm font-medium text-[var(--color-text-primary)]">{tool.name}</div>
                      <div className="text-xs text-[var(--color-text-tertiary)]">{tool.alternatives.length} alternatives found</div>
                    </div>
                    <span className="ml-auto text-xs text-red-500 font-medium">{tool.pricing}</span>
                  </Link>
                ))}
              </div>
            )}

            {query.trim().length > 1 && results.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-lg px-4 py-3 text-sm text-[var(--color-text-secondary)] z-50">
                No results for &quot;{query}&quot; —{' '}
                <Link href="/contact" className="text-emerald-500 hover:underline">suggest a tool</Link>
              </div>
            )}
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['notion', 'figma', 'slack', 'ahrefs', 'zoom', 'canva'].map(slug => {
              const tool = TOOLS.find(t => t.slug === slug)
              if (!tool) return null
              return (
                <Link
                  key={slug}
                  href={`/${tool.slug}-alternatives`}
                  className="px-3 py-1 rounded-full text-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-emerald-500 hover:text-emerald-500 transition-all"
                >
                  {tool.logo} {tool.name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-10">
          {[
            { value: `${TOOLS.length}+`, label: 'Tools covered' },
            { value: `${TOOLS.reduce((a, t) => a + t.alternatives.length, 0)}+`, label: 'Free alternatives' },
            { value: '$0', label: 'Cost to use ShrinkBox' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-emerald-500">{stat.value}</div>
              <div className="text-xs text-[var(--color-text-tertiary)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-14 w-full">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Browse by category</h2>
        <p className="text-[var(--color-text-secondary)] mb-8">Find alternatives in the category you spend most on</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CATEGORIES.map(cat => {
            const count = TOOLS.filter(t => t.category === cat.id).length
            if (count === 0) return null
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-emerald-500 hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-emerald-500 transition-colors leading-tight">{cat.name}</span>
                <span className="text-xs text-[var(--color-text-tertiary)]">{count} tools</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Popular Tools ─────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Most searched tools</h2>
          <p className="text-[var(--color-text-secondary)] mb-8">Popular tools people want cheaper alternatives for</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map(tool => (
              <Link
                key={tool.id}
                href={`/${tool.slug}-alternatives`}
                className="group flex items-start gap-4 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-emerald-500 hover:shadow-sm transition-all"
              >
                <span className="text-3xl shrink-0">{tool.logo}</span>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[var(--color-text-primary)] group-hover:text-emerald-500 transition-colors">{tool.name}</div>
                  <div className="text-sm text-red-500 font-medium mb-1">{tool.pricing}</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">
                    {tool.alternatives.filter(a => a.isFree).length} free alternatives
                  </div>
                </div>
                <svg className="w-4 h-4 text-[var(--color-text-tertiary)] shrink-0 mt-1 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-emerald-500 hover:text-emerald-500 transition-all text-sm font-medium"
            >
              View all {TOOLS.length} tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-14 w-full">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-10 text-center">How ShrinkBox works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Search your tool', desc: 'Type the name of any SaaS tool you currently pay for.' },
            { step: '2', title: 'Compare alternatives', desc: 'See free and cheaper options with honest feature comparisons.' },
            { step: '3', title: 'Switch and save', desc: 'Click through, sign up for free, and start saving money today.' },
          ].map(item => (
            <div key={item.step} className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-lg flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
