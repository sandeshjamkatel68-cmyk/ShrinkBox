"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FILE_TOOLS } from "@/lib/data/fileTools";
import ThemeToggle from "./ThemeToggle";

const NAV_TOOLS = FILE_TOOLS.slice(0, 5);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-panel transition-shadow duration-200 ${
          scrolled ? "shadow-sm border-b border-[var(--border)]" : "border-b border-[var(--border)]"
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 bg-signal flex items-center justify-center shrink-0 rounded">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 3.5h9M2 6.5h6M4 9.5l2 1.5 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="heading-display text-sm text-ink">ShrinkBox</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href="/tools" className="px-3 py-1.5 rounded text-sm font-sans text-ink-dim hover:text-ink transition-colors">
              All Tools
            </Link>
            {NAV_TOOLS.map((t) => (
              <Link key={t.slug} href={`/${t.slug}`} className="px-3 py-1.5 rounded text-sm font-sans text-ink-dim hover:text-ink transition-colors">
                {t.shortLabel}
              </Link>
            ))}
            <Link href="/blog" className="px-3 py-1.5 rounded text-sm font-sans text-ink-dim hover:text-ink transition-colors">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] hover:border-signal transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 3.5h11M1.5 7h11M1.5 10.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-14 left-0 right-0 z-40 bg-panel border-b border-[var(--border)] shadow-lg lg:hidden">
            <div className="px-5 py-4 space-y-1">
              {[{ href: "/tools", label: "All Tools" }, ...FILE_TOOLS.map((t) => ({ href: `/${t.slug}`, label: t.shortLabel })), { href: "/blog", label: "Blog" }, { href: "/about", label: "About" }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 min-h-[44px] flex items-center rounded text-sm font-sans text-ink-dim hover:text-ink transition-colors"
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
