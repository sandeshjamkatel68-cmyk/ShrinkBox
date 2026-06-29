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
    description: `Find free and cheaper alternatives to popular ${cat.name.toLowerCase()} tools.`,
    alternates: {
      canonical: `https://shrink-box.com/category/${cat.id}`,
    },
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
  if (!tools.length) notFound()

  return (
    <div className="max-w-2xl mx-auto px-5 py-12">

      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-600">{cat.name}</span>
      </nav>

      <div className="mb-10">
        <div className="text-3xl mb-3">{cat.emoji}</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Free {cat.name} Alternatives</h1>
        <p className="text-sm text-gray-500">{cat.description}</p>
      </div>

      <div className="flex flex-col gap-3">
        {tools.map(tool => {
          const freeCount = tool.alternatives.filter(a => a.isFree).length
          return (
            <Link key={tool.id} href={`/${tool.slug}-alternatives`}
              className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all">
              <span className="text-2xl shrink-0">{tool.logo}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{tool.name}</span>
                  <span className="text-xs text-red-500 font-medium">{tool.pricing}</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 truncate">{tool.description}</p>
              </div>
              <span className="shrink-0 text-xs text-emerald-600 font-medium bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">
                {freeCount} free
              </span>
              <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-400 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )
        })}
      </div>

      <div className="mt-8">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-600 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All categories
        </Link>
      </div>
    </div>
  )
}
