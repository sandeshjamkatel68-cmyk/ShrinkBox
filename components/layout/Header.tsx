"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CATEGORIES, TOOLS } from "@/lib/data/tools";

const NAV_CATS = CATEGORIES.filter(c => TOOLS.some(t => t.category === c.id)).slice(0, 5)

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm border-b border-gray-100' : 'border-b border-gray-100'}`}>
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 3.5h9M2 6.5h6M4 9.5l2 1.5 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-sm text-gray-900 tracking-tight">ShrinkBox</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href="/tools" className="px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all">
              All Tools
            </Link>
            {NAV_CATS.map(cat => (
              <Link key={cat.id} href={`/category/${cat.id}`}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all">
                {cat.name}
              </Link>
            ))}
            <Link href="/blog" className="px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all">
              Blog
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 3.5h11M1.5 7h11M1.5 10.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg lg:hidden">
            <div className="px-5 py-4 space-y-1">
              {[
                { href: '/tools', label: 'All Tools' },
                ...CATEGORIES.filter(c => TOOLS.some(t => t.category === c.id)).map(c => ({
                  href: `/category/${c.id}`,
                  label: `${c.emoji} ${c.name}`,
                })),
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
              ].map(item => (
                <Link key={item.href} href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
