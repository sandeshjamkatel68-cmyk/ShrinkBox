"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { CATEGORIES, TOOLS } from "@/lib/data/tools";

const CATEGORY_LINKS = CATEGORIES.filter(cat =>
  TOOLS.some(t => t.category === cat.id)
).slice(0, 6)

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-border)] shadow-sm"
            : "bg-[var(--color-bg)] border-b border-[var(--color-border)]"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 no-underline group" aria-label="ShrinkBox home">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 4h10M2 7h7M4 10l2.5 2L11 6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-[15px] text-[var(--color-text-primary)] tracking-tight">
              ShrinkBox
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            <Link href="/tools" className="px-3 py-2 rounded-lg text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all no-underline">
              All Tools
            </Link>
            {CATEGORY_LINKS.map(cat => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="px-3 py-2 rounded-lg text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all no-underline"
              >
                {cat.emoji} {cat.name}
              </Link>
            ))}
            <Link href="/blog" className="px-3 py-2 rounded-lg text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all no-underline">
              Blog
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--color-surface)] cursor-pointer transition-colors border border-[var(--color-border)]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1.5 3.5h11M1.5 7h11M1.5 10.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="fixed top-14 left-0 right-0 bottom-0 z-40 lg:hidden overflow-y-auto bg-[var(--color-bg)] border-t border-[var(--color-border)]">
            <div className="px-4 py-5 space-y-2">
              {[
                { href: '/', label: '🏠 Home' },
                { href: '/tools', label: '🔧 All Tools' },
                ...CATEGORIES.filter(c => TOOLS.some(t => t.category === c.id)).map(c => ({
                  href: `/category/${c.id}`,
                  label: `${c.emoji} ${c.name}`,
                })),
                { href: '/blog', label: '📝 Blog' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)] no-underline transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
