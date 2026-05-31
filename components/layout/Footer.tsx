import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/lib/data/tools";

export default function Footer() {
  const categories = CATEGORIES.filter(c => TOOLS.some(t => t.category === c.id))

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 4h10M2 7h7M4 10l2.5 2L11 6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-[15px] text-[var(--color-text-primary)] tracking-tight">ShrinkBox</span>
            </Link>
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed mb-3 max-w-[200px]">
              Find free and cheaper alternatives to expensive SaaS tools. Shrink your monthly software bill.
            </p>
          </div>

          {/* Categories */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Categories</p>
            <ul className="flex flex-col gap-2">
              {categories.slice(0, 7).map(cat => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="text-[12px] text-[var(--color-text-secondary)] hover:text-emerald-500 no-underline transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Popular</p>
            <ul className="flex flex-col gap-2">
              {TOOLS.slice(0, 7).map(tool => (
                <li key={tool.id}>
                  <Link href={`/${tool.slug}-alternatives`} className="text-[12px] text-[var(--color-text-secondary)] hover:text-emerald-500 no-underline transition-colors">
                    {tool.name} alternatives
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Company</p>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/tools', label: 'All Tools' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[12px] text-[var(--color-text-secondary)] hover:text-emerald-500 no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--color-text-tertiary)]">
          <span>© {new Date().getFullYear()} ShrinkBox. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--color-text-secondary)] no-underline transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--color-text-secondary)] no-underline transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-[var(--color-text-secondary)] no-underline transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
