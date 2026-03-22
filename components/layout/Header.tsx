"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_GROUPS = [
  {
    label: "Image Tools",
    items: [
      { href: "/compress-image",      label: "Compress Image" },
      { href: "/bulk-compress",       label: "Bulk Compress" },
      { href: "/resize-image",        label: "Resize Image" },
      { href: "/crop-image",          label: "Crop Image" },
      { href: "/image-to-grayscale",  label: "Black & White" },
      { href: "/reduce-jpg-size",     label: "Reduce JPG Size" },
      { href: "/compress-webp",       label: "Compress WebP" },
      { href: "/convert-jpg-to-webp", label: "JPG → WebP" },
      { href: "/convert-jpg-to-png",  label: "JPG → PNG" },
      { href: "/convert-png-to-webp", label: "PNG → WebP" },
      { href: "/convert-png-to-jpg",  label: "PNG → JPG" },
      { href: "/convert-webp-to-jpg", label: "WebP → JPG" },
      { href: "/images-to-pdf",       label: "Images → PDF" },
    ],
  },
  {
    label: "PDF Tools",
    items: [
      { href: "/compress-pdf",         label: "Compress PDF" },
      { href: "/merge-pdf",            label: "Merge PDF" },
      { href: "/split-pdf",            label: "Split PDF" },
      { href: "/rotate-pdf",           label: "Rotate PDF" },
      { href: "/remove-pdf-pages",     label: "Remove Pages" },
      { href: "/watermark-pdf",        label: "Watermark PDF" },
      { href: "/protect-pdf",          label: "Protect PDF" },
      { href: "/unlock-pdf",           label: "Unlock PDF" },
      { href: "/add-page-numbers-pdf", label: "Page Numbers" },
      { href: "/pdf-to-jpg",           label: "PDF → JPG" },
      { href: "/pdf-to-word",          label: "PDF → Word" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-6 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 no-underline">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="var(--brand)"/>
            <path d="M8.5 10h11M8.5 14h8M12 18.5l2 2.5 4.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-[15px] text-[var(--text)] tracking-tight">ShrinkBox</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_GROUPS.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-muted)] transition-all bg-transparent border-none cursor-pointer font-[inherit]">
                {group.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{ transform: activeGroup === group.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s ease", opacity: 0.5 }}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Invisible bridge to prevent gap closing dropdown */}
              {activeGroup === group.label && (
                <div className="absolute top-full left-0 w-full h-2" />
              )}

              {activeGroup === group.label && (
                <div
                  className="absolute top-[calc(100%+8px)] left-0 bg-[var(--surface)] border border-[var(--border)] rounded-xl py-2 z-50 min-w-[200px]"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)" }}
                >
                  {group.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-4 py-2.5 text-[13px] font-medium text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)] transition-colors no-underline whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/blog"
            className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-muted)] transition-all no-underline">
            Blog
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] cursor-pointer"
            aria-label="Menu"
          >
            {mobileOpen
              ? <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 2l11 11M13 2L2 13" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round"/></svg>
              : <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1.5 3.5h12M1.5 7.5h12M1.5 11.5h12" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] overflow-y-auto" style={{ maxHeight: "80vh" }}>
          {NAV_GROUPS.map(group => (
            <div key={group.label} className="px-5 py-4 border-b border-[var(--border)]">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-subtle)] mb-3">
                {group.label}
              </p>
              <div className="flex flex-col gap-1">
                {group.items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-[13px] font-medium text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)] no-underline transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="px-5 py-4 flex gap-5">
            {[["Blog", "/blog"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} onClick={() => setMobileOpen(false)}
                className="text-sm text-[var(--text-muted)] no-underline hover:text-[var(--text)]">
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
