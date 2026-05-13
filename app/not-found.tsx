import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — ShrinkBox",
  description: "This page doesn't exist. Browse free image and PDF tools on ShrinkBox.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/compress-image", label: "Compress Image" },
  { href: "/compress-pdf",   label: "Compress PDF" },
  { href: "/heic-to-jpg",    label: "HEIC → JPG" },
  { href: "/merge-pdf",      label: "Merge PDF" },
  { href: "/resize-image",   label: "Resize Image" },
  { href: "/qr-code-generator", label: "QR Generator" },
];

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">

        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
          style={{ background: "hsl(var(--surface-muted))", border: "1px solid hsl(var(--border))" }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7.5" stroke="hsl(var(--text-subtle))" strokeWidth="1.5"/>
            <path d="M10 6.5v4M10 12.5v1" stroke="hsl(var(--text-subtle))" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-widest text-[hsl(var(--text-subtle))] mb-2">
          404
        </p>

        <h1 className="heading-display text-2xl text-[hsl(var(--text))] mb-3">
          Page not found
        </h1>

        <p className="text-sm text-[hsl(var(--text-muted))] mb-8 leading-relaxed">
          This page doesn&apos;t exist or was moved. Use one of our free tools below, or go back home.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {QUICK_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-[12px] font-medium border border-[hsl(var(--border))] rounded-lg text-[hsl(var(--text-secondary))] hover:border-[hsl(var(--border-hover))] hover:text-[hsl(var(--text))] no-underline transition-colors bg-[hsl(var(--surface))]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand))] hover:underline no-underline"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to ShrinkBox
        </Link>

      </div>
    </div>
  );
}
