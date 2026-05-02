"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_GROUPS = [
  {
    label: "Image Tools",
    items: [
      { href: "/compress-image",      label: "Compress Image" },
      { href: "/compress-image-to-size", label: "Compress to KB" },
      { href: "/bulk-compress",       label: "Bulk Compress" },
      { href: "/resize-image",        label: "Resize Image" },
      { href: "/crop-image",          label: "Crop Image" },
      { href: "/image-to-grayscale",  label: "Black & White" },
      { href: "/reduce-jpg-size",     label: "Reduce JPG Size" },
      { href: "/compress-webp",       label: "Compress WebP" },
      { href: "/watermark-image",     label: "Watermark Image" },
      { href: "/social-media-resizer", label: "Social Resize" },
    ],
  },
  {
    label: "Convert",
    items: [
      { href: "/convert-jpg-to-webp", label: "JPG → WebP" },
      { href: "/convert-jpg-to-png",  label: "JPG → PNG" },
      { href: "/convert-png-to-webp", label: "PNG → WebP" },
      { href: "/convert-png-to-jpg",  label: "PNG → JPG" },
      { href: "/convert-webp-to-jpg", label: "WebP → JPG" },
      { href: "/heic-to-jpg",         label: "HEIC → JPG" },
      { href: "/svg-to-png",          label: "SVG → PNG" },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-heavy border-b border-border shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand to-brand-vibrant flex items-center justify-center shadow-brand group-hover:shadow-glow transition-shadow duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6h8M4 8.5h6M6.5 11l1.5 1.5L11.5 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              Shrink<span className="text-gradient-subtle">Box</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveGroup(group.label)}
                onMouseLeave={() => setActiveGroup(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium text-muted hover:text-foreground hover:bg-surface-muted transition-all bg-transparent border-none cursor-pointer font-[inherit]">
                  {group.label}
                  <svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    className={`transition-transform duration-200 ${activeGroup === group.label ? "rotate-180" : ""}`}
                    style={{ opacity: 0.5 }}
                  >
                    <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Dropdown */}
                {activeGroup === group.label && (
                  <>
                    <div className="absolute top-full left-0 w-full h-3" />
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 glass-heavy border border-border rounded-2xl py-2 z-50 min-w-[220px] shadow-xl animate-slide-down">
                      <div className="max-h-[360px] overflow-y-auto">
                        {group.items.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center px-4 py-2 text-[13px] font-medium text-muted hover:bg-brand-light hover:text-brand transition-all no-underline rounded-lg mx-1.5"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            <Link href="/tools"
              className="px-3 py-2 rounded-lg text-[13px] font-medium text-muted hover:text-foreground hover:bg-surface-muted transition-all no-underline">
              All Tools
            </Link>
            <Link href="/blog"
              className="px-3 py-2 rounded-lg text-[13px] font-medium text-muted hover:text-foreground hover:bg-surface-muted transition-all no-underline">
              Blog
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-surface hover:bg-surface-muted cursor-pointer transition-colors touch-target"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="hsl(var(--text-muted))" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="hsl(var(--text-muted))" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 lg:hidden overflow-y-auto bg-surface border-t border-border animate-slide-down">
          <div className="max-w-lg mx-auto px-5 py-6">
            {NAV_GROUPS.map(group => (
              <div key={group.label} className="mb-6">
                <p className="text-2xs font-bold uppercase tracking-[0.15em] text-subtle mb-3 px-1">
                  {group.label}
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {group.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 rounded-xl text-[13px] font-medium text-muted hover:bg-brand-light hover:text-brand no-underline transition-colors touch-target"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-border pt-4 mt-4 flex flex-wrap gap-3">
              {[
                ["All Tools", "/tools"],
                ["Blog", "/blog"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted hover:bg-surface-muted hover:text-foreground no-underline transition-colors touch-target"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
