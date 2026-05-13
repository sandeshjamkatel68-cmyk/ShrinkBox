import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { TrustSignals, FAQ } from "@/components/seo";
import LazySection from "@/components/ui/LazySection";

// Defer widget — it's not above-the-fold critical render path
const DynamicCompressorWidget = dynamic(
  () => import("@/components/upload/DynamicCompressorWidget"),
  { ssr: false, loading: () => <div className="h-48 rounded-xl bg-[hsl(var(--surface-muted))] animate-pulse" /> }
);

export const metadata: Metadata = {
  title: "ShrinkBox — Free Image Compressor & PDF Tools Online",
  description:
    "Compress images, convert formats, merge PDFs and more — free, instant, no signup. Works in your browser. Trusted by developers, designers, and content creators.",
  alternates: { canonical: "/" },
};

// ── Compact SVG icons ──────────────────────────────────────────────────────
const I = {
  Compress:  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L3 17m0 0h3m-3 0v-3M14 6l3-3m0 0h-3m3 0v3M6 6L3 3m0 0h3M3 3v3M14 14l3 3m0 0h-3m3 0v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Bulk:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Resize:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 8V3h5M17 12v5h-5M3 3l5.5 5.5M17 17l-5.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Crop:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 2v9a2 2 0 002 2h9M15 18v-9a2 2 0 00-2-2H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  BW:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v14" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3a7 7 0 010 14z" fill="currentColor" opacity="0.25"/></svg>,
  Convert:   <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ImgPdf:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6h4M6 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Pdf:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7h4M8 10h4M8 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  Merge:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="12" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Split:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="12" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/></svg>,
  Rotate:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.5 10a5.5 5.5 0 105.5-5.5H7m0 0L4.5 7M7 4.5L9.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Delete:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7h10l-1 9H6L5 7zM3 7h14M8 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Watermark: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 16l3-9 3 6 2-3 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Lock:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Unlock:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 9V7a3 3 0 014.83-2.91" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Numbers:   <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 4h2v8H5M7 8H5M10 4l-1.5 8h4M10 4h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M3 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  PdfImg:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="9" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 9l5-0M14.5 6.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Word:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 8l1.5 6L10 9l2 5 1.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Code:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 6l-4 4 4 4M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 4L9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Social:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 17c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7a3 3 0 100 6 3 3 0 000-6z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Qr:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z" fill="currentColor"/></svg>,
  Json:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7 4h-1a2 2 0 00-2 2v2a2 2 0 01-2 2 2 2 0 012 2v2a2 2 0 002 2h1M13 4h1a2 2 0 012 2v2a2 2 0 002 2 2 2 0 00-2 2v2a2 2 0 01-2 2h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Jpg:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 8h2v5H7m0 0a2 2 0 002 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  Legal:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3L5 5v5c0 3.866 5 7 5 7s5-3.134 5-7V5l-5-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Heic:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Favicon:   <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Text:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 3h8M10 4v12M7 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Dropper:   <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M15 5l.7-.7a2.8 2.8 0 00-4-4L11 1M8 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5L4 16a2 2 0 00-1 2v1h1a2 2 0 002-1L17 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

type Tool = { href: string; label: string; icon: ReactNode; badge?: string };

const IMAGE_TOOLS: Tool[] = [
  { href: "/compress-image",          label: "Compress Image",   icon: I.Compress, badge: "Popular" },
  { href: "/compress-image-to-size",  label: "Compress to KB",   icon: I.Compress },
  { href: "/bulk-compress",           label: "Bulk Compress",    icon: I.Bulk },
  { href: "/resize-image",            label: "Resize Image",     icon: I.Resize },
  { href: "/crop-image",              label: "Crop Image",       icon: I.Crop },
  { href: "/image-to-grayscale",      label: "Black & White",    icon: I.BW },
  { href: "/reduce-jpg-size",         label: "Reduce JPG",       icon: I.Jpg },
  { href: "/watermark-image",         label: "Watermark Photo",  icon: I.Watermark },
  { href: "/social-media-resizer",    label: "Social Resize",    icon: I.Social },
];

const CONVERT_TOOLS: Tool[] = [
  { href: "/convert-jpg-to-webp",    label: "JPG → WebP",        icon: I.Convert },
  { href: "/heic-to-jpg",            label: "HEIC → JPG",        icon: I.Heic, badge: "iPhone" },
  { href: "/convert-jpg-to-png",     label: "JPG → PNG",         icon: I.Convert },
  { href: "/convert-png-to-webp",    label: "PNG → WebP",        icon: I.Convert },
  { href: "/convert-png-to-jpg",     label: "PNG → JPG",         icon: I.Convert },
  { href: "/convert-webp-to-jpg",    label: "WebP → JPG",        icon: I.Convert },
  { href: "/svg-to-png",             label: "SVG → PNG",         icon: I.Convert },
  { href: "/images-to-pdf",          label: "Images → PDF",      icon: I.ImgPdf },
];

const PDF_TOOLS: Tool[] = [
  { href: "/compress-pdf",           label: "Compress PDF",      icon: I.Pdf },
  { href: "/merge-pdf",              label: "Merge PDF",         icon: I.Merge },
  { href: "/split-pdf",              label: "Split PDF",         icon: I.Split },
  { href: "/pdf-to-jpg",             label: "PDF → JPG",         icon: I.PdfImg },
  { href: "/pdf-to-word",            label: "PDF → Word",        icon: I.Word },
  { href: "/protect-pdf",            label: "Protect PDF",       icon: I.Lock },
  { href: "/unlock-pdf",             label: "Unlock PDF",        icon: I.Unlock },
  { href: "/rotate-pdf",             label: "Rotate PDF",        icon: I.Rotate },
  { href: "/remove-pdf-pages",       label: "Remove Pages",      icon: I.Delete },
  { href: "/watermark-pdf",          label: "Watermark PDF",     icon: I.Watermark },
  { href: "/add-page-numbers-pdf",   label: "Page Numbers",      icon: I.Numbers },
];

const DEV_TOOLS: Tool[] = [
  { href: "/bulk-image-downloader",  label: "Bulk Downloader",   icon: I.Bulk, badge: "New" },
  { href: "/image-to-text",          label: "Image to Text",     icon: I.Text },
  { href: "/color-picker",           label: "Color Picker",      icon: I.Dropper },
  { href: "/favicon-generator",      label: "Favicon Generator", icon: I.Favicon },
  { href: "/qr-code-generator",      label: "QR Generator",      icon: I.Qr },
  { href: "/json-formatter",         label: "JSON Formatter",    icon: I.Json },
  { href: "/image-to-base64",        label: "Image → Base64",    icon: I.Code },
];

function ToolCard({ href, label, icon, badge }: Tool) {
  return (
    <Link href={href} className="tool-card no-underline" aria-label={label}>
      {badge && (
        <span className="badge badge-brand absolute top-2 right-2 text-[10px]">{badge}</span>
      )}
      <div className="tool-card-icon" aria-hidden="true">
        {icon}
      </div>
      <span className="text-[12px] font-semibold text-[hsl(var(--text-secondary))] leading-tight">
        {label}
      </span>
    </Link>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-[hsl(var(--text-subtle))] whitespace-nowrap">
        {children}
      </span>
      <div className="h-px flex-1 bg-[hsl(var(--border))]" />
    </div>
  );
}

const HOME_FAQ = [
  {
    q: "Is ShrinkBox completely free?",
    a: "Yes — every tool is free with no hidden costs, no watermarks, and no account required. We sustain the service through non-intrusive ads.",
  },
  {
    q: "Are my files kept private?",
    a: "Browser-side tools (JSON Formatter, QR Generator, color picker) never send your data to any server. For image and PDF processing tools, files are handled in secure memory and permanently deleted the moment your download completes — we don't store, log, or share them.",
  },
  {
    q: "What file size limit applies?",
    a: "The free tier supports files up to 10 MB, which covers the vast majority of everyday images and documents. This limit applies per file.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "Yes. The Bulk Compress tool lets you drop up to 10 images simultaneously and compress them all in one pass — useful for batch-optimizing website assets.",
  },
  {
    q: "Does compression hurt image quality?",
    a: "At Low and Medium levels, quality loss is virtually invisible — we use MozJPEG encoding which achieves the smallest file size at any given visual quality. High compression is suitable when size is the priority over pixel-perfect fidelity.",
  },
];

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero-gradient relative">
        <div className="relative z-10 max-w-[680px] mx-auto px-5 pt-14 sm:pt-20 pb-10 text-center">

          {/* Status chip */}
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[hsl(var(--text-muted))] bg-[hsl(var(--surface-muted))] border border-[hsl(var(--border))] rounded-full px-3.5 py-1.5 mb-7 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand))] inline-block" aria-hidden="true" />
            Free · No signup · Instant results
          </div>

          <h1
            className="heading-display text-[34px] sm:text-[46px] md:text-[56px] mb-4 text-[hsl(var(--text))] animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            Compress images.<br />
            <span className="text-gradient">Ship faster.</span>
          </h1>

          <p
            className="text-[hsl(var(--text-muted))] text-[15px] sm:text-base mb-8 max-w-[420px] mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            Reduce JPG, PNG, WebP and PDF file sizes without losing quality.
            No installation. Files deleted instantly after download.
          </p>

          {/* Primary CTA row */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-up"
            style={{ animationDelay: "0.24s" }}
          >
            <Link href="/compress-image" className="btn-primary">
              Compress an image
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4.5L10.5 7 8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/compress-pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[hsl(var(--text-secondary))] border border-[hsl(var(--border))] rounded-lg hover:bg-[hsl(var(--surface-muted))] hover:border-[hsl(var(--border-hover))] transition-all no-underline"
            >
              Compress a PDF
            </Link>
          </div>

          {/* Compressor widget — lazy loaded */}
          <div className="animate-fade-up" style={{ animationDelay: "0.32s" }}>
            <DynamicCompressorWidget />
          </div>

          <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <TrustSignals />
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <div className="border-y border-[hsl(var(--border))]">
        <div className="max-w-[900px] mx-auto px-5 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: "38+",   label: "Free tools" },
            { num: "10 MB", label: "Per file" },
            { num: "0",     label: "Signups needed" },
            { num: "100%",  label: "Private" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-xl font-bold tracking-tight text-[hsl(var(--text))]">{num}</div>
              <div className="text-[11px] font-medium text-[hsl(var(--text-subtle))] uppercase tracking-wider mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tools grid ───────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 py-16 sm:py-20" id="tools">
        <div className="mb-10">
          <h2 className="heading-section text-2xl sm:text-[28px] text-[hsl(var(--text))] mb-2">
            All tools
          </h2>
          <p className="text-sm text-[hsl(var(--text-muted))]">
            Image compression, format conversion, PDF editing — all in one place.
          </p>
        </div>

        <LazySection fallbackHeight="900px">
          <div className="space-y-10">
            <div>
              <SectionLabel>Image Optimization</SectionLabel>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5">
                {IMAGE_TOOLS.map(t => <ToolCard key={t.href} {...t} />)}
              </div>
            </div>

            <div>
              <SectionLabel>Format Conversion</SectionLabel>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5">
                {CONVERT_TOOLS.map(t => <ToolCard key={t.href} {...t} />)}
              </div>
            </div>

            <div>
              <SectionLabel>PDF Management</SectionLabel>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5">
                {PDF_TOOLS.map(t => <ToolCard key={t.href} {...t} />)}
              </div>
            </div>

            <div>
              <SectionLabel>Developer & Design</SectionLabel>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5">
                {DEV_TOOLS.map(t => <ToolCard key={t.href} {...t} />)}
              </div>
            </div>
          </div>
        </LazySection>
      </section>

      {/* ── Why section ──────────────────────────────────────── */}
      <LazySection fallbackHeight="400px">
        <section className="border-t border-[hsl(var(--border))]">
          <div className="max-w-[1100px] mx-auto px-5 py-16 sm:py-20">
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  title: "No account. Ever.",
                  body: "Open a tool, drop your file, download the result. No email, no password, no free-trial countdown. It's just a tool.",
                },
                {
                  title: "Files are gone after download.",
                  body: "We don't keep your images or PDFs. Processing runs in secure server memory — the file is wiped the moment you click download.",
                },
                {
                  title: "Professional quality, zero cost.",
                  body: "We use MozJPEG and Sharp — the same engines used by Squoosh and Cloudinary. You get production-grade compression for free.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="space-y-2">
                  <div className="w-6 h-0.5 bg-[hsl(var(--brand))] mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-[15px] text-[hsl(var(--text))]">{title}</h3>
                  <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* ── Blog preview ─────────────────────────────────────── */}
      <LazySection fallbackHeight="380px">
        <section className="border-t border-[hsl(var(--border))]">
          <div className="max-w-[1100px] mx-auto px-5 py-16 sm:py-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="heading-section text-2xl sm:text-[26px] text-[hsl(var(--text))] mb-1.5">
                  Guides & tutorials
                </h2>
                <p className="text-sm text-[hsl(var(--text-muted))]">
                  Practical guides on file optimization and web performance.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[hsl(var(--brand))] hover:underline no-underline"
              >
                All articles
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  slug: "compress-images-for-wordpress",
                  tag: "WordPress",
                  title: "How to Compress Images for WordPress Without Plugins",
                  excerpt: "WordPress images that aren't compressed slow down your site and hurt SEO. Here's how to compress before uploading — no plugin needed.",
                },
                {
                  slug: "pdf-too-large-to-email",
                  tag: "PDF",
                  title: "PDF Too Large to Email? Here's the Fix",
                  excerpt: "Hit that 'attachment too large' error? Exactly how to shrink PDFs for Gmail, Outlook, and any mail provider.",
                },
                {
                  slug: "core-web-vitals-images",
                  tag: "Performance",
                  title: "How Images Affect Your Core Web Vitals Score",
                  excerpt: "Images are the #1 cause of poor LCP scores. Here's how unoptimized images hurt your ranking and what to fix first.",
                },
              ].map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-5 border border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--border-hover))] hover:shadow-md transition-all no-underline bg-[hsl(var(--surface))]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[hsl(var(--text-subtle))] mb-3">
                    {post.tag}
                  </span>
                  <h3 className="text-[14px] font-semibold text-[hsl(var(--text))] group-hover:text-[hsl(var(--brand))] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-[hsl(var(--text-muted))] leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 pt-3 border-t border-[hsl(var(--border))]">
                    <span className="text-[12px] font-semibold text-[hsl(var(--brand))]">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="sm:hidden mt-5 text-center">
              <Link href="/blog" className="text-sm font-medium text-[hsl(var(--brand))] no-underline">
                View all articles →
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <LazySection fallbackHeight="500px">
        <section className="border-t border-[hsl(var(--border))]">
          <div className="max-w-[640px] mx-auto px-5 py-16 sm:py-20">
            <h2 className="heading-section text-2xl text-[hsl(var(--text))] mb-8">
              Frequently asked questions
            </h2>
            <FAQ items={HOME_FAQ} />
          </div>
        </section>
      </LazySection>

      {/* ── SEO content ──────────────────────────────────────── */}
      <LazySection fallbackHeight="300px">
        <section className="border-t border-[hsl(var(--border))]">
          <div className="max-w-[900px] mx-auto px-5 py-14 grid sm:grid-cols-2 gap-10 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
            <div>
              <h2 className="heading-section text-base text-[hsl(var(--text))] mb-3">
                Why image compression matters for SEO
              </h2>
              <p>
                Page load speed is a direct Google ranking factor through Core Web Vitals.
                Largest Contentful Paint (LCP) — the time for the biggest visible element to load
                — is almost always an image. Compressing your JPG, PNG, and WebP files with
                ShrinkBox directly improves your LCP score, reduces bounce rate, and signals
                quality to search engines.
              </p>
            </div>
            <div>
              <h2 className="heading-section text-base text-[hsl(var(--text))] mb-3">
                Browser-based processing — what it means for you
              </h2>
              <p>
                Tools like the JSON Formatter, QR Generator, and Color Picker run entirely
                in your browser — your data never leaves your device. For image and PDF tools
                that require server processing, files are handled in isolated memory and
                permanently deleted the moment you download the result. No cloud storage,
                no data retention.
              </p>
            </div>
          </div>
        </section>
      </LazySection>

    </div>
  );
}
