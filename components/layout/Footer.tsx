import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/lib/data/tools";

export default function Footer() {
  const categories = CATEGORIES.filter(c => TOOLS.some(t => t.category === c.id))

  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 3.5h9M2 6.5h6M4 9.5l2 1.5 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold text-sm text-gray-900">ShrinkBox</span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">
              Find free and cheaper alternatives to expensive software. Shrink your SaaS bill.
            </p>
          </div>

          {/* Categories */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Categories</p>
            <ul className="space-y-2">
              {categories.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Popular</p>
            <ul className="space-y-2">
              {TOOLS.slice(0, 6).map(tool => (
                <li key={tool.id}>
                  <Link href={`/${tool.slug}-alternatives`} className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Company</p>
            <ul className="space-y-2">
              {[
                ['/tools', 'All Tools'],
                ['/blog', 'Blog'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
                ['/privacy', 'Privacy'],
                ['/terms', 'Terms'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-xs text-gray-500 hover:text-emerald-600 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-gray-400">© {new Date().getFullYear()} ShrinkBox</span>
          <div className="flex items-center gap-4">
            {[['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
