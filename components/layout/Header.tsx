"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_GROUPS = [
  {
    label: "Image Tools",
    items: [
      { href: "/compress-image",         label: "Compress Image",    desc: "JPG, PNG, WebP" },
      { href: "/compress-image-to-size",  label: "Compress to KB",    desc: "Target file size" },
      { href: "/bulk-compress",           label: "Bulk Compress",     desc: "Up to 10 at once" },
      { href: "/resize-image",            label: "Resize Image",      desc: "Custom dimensions" },
      { href: "/crop-image",              label: "Crop Image",        desc: "Free crop & ratio" },
      { href: "/watermark-image",         label: "Watermark Photo",   desc: "Text or image" },
      { href: "/image-to-grayscale",      label: "Black & White",     desc: "Grayscale convert" },
      { href: "/social-media-resizer",    label: "Social Resize",     desc: "Instagram, Twitter…" },
      { href: "/reduce-jpg-size",         label: "Reduce JPG Size",   desc: "JPEG optimizer" },
    ],
  },
  {
    label: "Convert",
    items: [
      { href: "/convert-jpg-to-webp",    label: "JPG → WebP",        desc: "Smaller web format" },
      { href: "/heic-to-jpg",            label: "HEIC → JPG",        desc: "iPhone photos" },
      { href: "/convert-png-to-webp",    label: "PNG → WebP",        desc: "Lossless + smaller" },
      { href: "/convert-jpg-to-png",     label: "JPG → PNG",         desc: "Add transparency" },
      { href: "/convert-png-to-jpg",     label: "PNG → JPG",         desc: "Reduce file size" },
      { href: "/convert-webp-to-jpg",    label: "WebP → JPG",        desc: "Universal format" },
      { href: "/svg-to-png",             label: "SVG → PNG",         desc: "Vector to raster" },
      { href: "/images-to-pdf",          label: "Images → PDF",      desc: "Combine into PDF" },
    ],
  },
  {
    label: "PDF Tools",
    items: [
      { href: "/compress-pdf",           label: "Compress PDF",      desc: "Shrink file size" },
      { href: "/merge-pdf",              label: "Merge PDF",         desc: "Combine files" },
      { href: "/split-pdf",              label: "Split PDF",         desc: "Extract pages" },
      { href: "/pdf-to-jpg",             label: "PDF → JPG",         desc: "Each page as image" },
      { href: "/pdf-to-word",            label: "PDF → Word",        desc: "Editable .docx" },
      { href: "/protect-pdf",            label: "Protect PDF",       desc: "Add password" },
      { href: "/unlock-pdf",             label: "Unlock PDF",        desc: "Remove password" },
      { href: "/rotate-pdf",             label: "Rotate PDF",        desc: "Fix orientation" },
      { href: "/remove-pdf-pages",       label: "Remove Pages",      desc: "Delete specific pages" },
      { href: "/watermark-pdf",          label: "Watermark PDF",     desc: "Text stamp" },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DropdownMenu({ group }: { group: typeof NAV_GROUPS[0] }) {
  return (
    <div className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 z-50 w-72 animate-slide-down">
      <div className="bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-xl shadow-xl overflow-hidden">
        <div className="p-1.5">
          {group.items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-[hsl(var(--surface-muted))] transition-colors no-underline group"
            >
              <span className="text-[13px] font-medium text-[hsl(var(--text))]">
                {item.label}
              </span>
              <span className="text-[11px] text-[hsl(var(--text-subtle))] group-hover:text-[hsl(var(--text-muted))] transition-colors shrink-0">
                {item.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveGroup(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveGroup(null), 80);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "glass-heavy border-b border-[hsl(var(--border))]"
            : "bg-[hsl(var(--bg))] border-b border-[hsl(var(--border))]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 no-underline group" aria-label="ShrinkBox home">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "hsl(var(--brand))" }}
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5h8M3 7.5h5M5 10l2 1.5L10 8" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-[15px] text-[hsl(var(--text))] tracking-tight">
              ShrinkBox
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-muted))] transition-all bg-transparent border-none cursor-pointer font-[inherit]"
                  aria-expanded={activeGroup === group.label}
                  aria-haspopup="true"
                >
                  {group.label}
                  <ChevronIcon open={activeGroup === group.label} />
                </button>

                {activeGroup === group.label && (
                  <DropdownMenu group={group} />
                )}
              </div>
            ))}

            <Link
              href="/tools"
              className="px-3 py-2 rounded-lg text-[13px] font-medium text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-muted))] transition-all no-underline"
            >
              All Tools
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg text-[13px] font-medium text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-muted))] transition-all no-underline"
            >
              Blog
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[hsl(var(--surface-muted))] cursor-pointer transition-colors border border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
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
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-14 left-0 right-0 bottom-0 z-40 lg:hidden overflow-y-auto bg-[hsl(var(--bg))] border-t border-[hsl(var(--border))] animate-slide-down">
            <div className="px-4 py-5 space-y-6">
              {NAV_GROUPS.map(group => (
                <div key={group.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[hsl(var(--text-subtle))] mb-2 px-1">
                    {group.label}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--surface-muted))] hover:text-[hsl(var(--text))] no-underline transition-colors"
                      >
                        <span>{item.label}</span>
                        <span className="text-[11px] text-[hsl(var(--text-subtle))]">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-[hsl(var(--border))] pt-4 flex flex-wrap gap-2">
                {[["All Tools", "/tools"], ["Blog", "/blog"], ["About", "/about"], ["Contact", "/contact"]] .map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-muted))] hover:text-[hsl(var(--text))] no-underline transition-colors border border-[hsl(var(--border))]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
