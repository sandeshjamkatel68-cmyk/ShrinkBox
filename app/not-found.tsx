import Link from "next/link";
import type { Metadata } from "next";
import { FILE_TOOLS } from "@/lib/data/fileTools";

export const metadata: Metadata = {
  title: "Page Not Found — ShrinkBox",
  description: "This page doesn't exist. Browse free image tools on ShrinkBox.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = FILE_TOOLS.slice(0, 6).map((t) => ({ href: `/${t.slug}`, label: t.shortLabel }));

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded mb-6 panel" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7.5" stroke="var(--ink-dim)" strokeWidth="1.5" />
            <path d="M10 6.5v4M10 12.5v1" stroke="var(--ink-dim)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-[11px] font-sans font-semibold uppercase tracking-widest text-ink-dim mb-2">404</p>

        <h1 className="heading-display text-2xl text-ink mb-3">Page not found</h1>

        <p className="font-sans text-sm text-ink-dim mb-8 leading-relaxed">
          This page doesn&apos;t exist or was moved. Use one of our free tools below, or go back home.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 min-h-[44px] flex items-center text-[12px] font-sans font-medium border border-[var(--border)] rounded text-ink-dim hover:border-signal hover:text-ink transition-colors bg-panel"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-signal hover:underline">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to ShrinkBox
        </Link>
      </div>
    </div>
  );
}
