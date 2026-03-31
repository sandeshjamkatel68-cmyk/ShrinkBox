import type { Metadata } from "next";
import Link from "next/link";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ } from "@/components/seo";

export const metadata: Metadata = {
  title: "ShrinkBox — Free Image & PDF Tools Online",
  description: "Free online tools for compressing, converting, resizing, and editing images and PDFs. No signup. Files deleted instantly.",
};

// ── SVG Icons ────────────────────────────────────────────────────────────────

const I = {
  Compress:   <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 14L3 17m0 0h3m-3 0v-3M14 6l3-3m0 0h-3m3 0v3M6 6L3 3m0 0h3M3 3v3M14 14l3 3m0 0h-3m3 0v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Bulk:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Resize:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 8V3h5M17 12v5h-5M3 3l5.5 5.5M17 17l-5.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Crop:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 2v9a2 2 0 002 2h9M15 18v-9a2 2 0 00-2-2H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  BW:         <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v14" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3a7 7 0 010 14z" fill="currentColor" opacity="0.25"/></svg>,
  Jpg:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 8h2v5H7m0 0a2 2 0 002 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  Convert:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ImgPdf:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6h4M6 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Pdf:        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7h4M8 10h4M8 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  Merge:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="12" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Split:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="12" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/></svg>,
  Rotate:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4.5 10a5.5 5.5 0 105.5-5.5H7m0 0L4.5 7M7 4.5L9.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Delete:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 7h10l-1 9H6L5 7zM3 7h14M8 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Watermark:  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 16l3-9 3 6 2-3 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Lock:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Unlock:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 9V7a3 3 0 014.83-2.91" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Numbers:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 4h2v8H5M7 8H5M10 4l-1.5 8h4M10 4h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M3 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  PdfImg:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="9" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 9l5-0M14.5 6.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Word:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 8l1.5 6L10 9l2 5 1.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Code:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7 6l-4 4 4 4M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 4L9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Grid:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Text:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 3h8M10 4v12M7 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Dropper:    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M15 5l.7-.7a2.8 2.8 0 00-4-4L11 1M8 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5L4 16a2 2 0 00-1 2v1h1a2 2 0 002-1L17 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Qr:         <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z" fill="currentColor"/></svg>,
  Json:       <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7 4h-1a2 2 0 00-2 2v2a2 2 0 01-2 2 2 2 0 012 2v2a2 2 0 002 2h1M13 4h1a2 2 0 012 2v2a2 2 0 002 2 2 2 0 00-2 2v2a2 2 0 01-2 2h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Social:     <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 17c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7a3 3 0 100 6 3 3 0 000-6z" stroke="currentColor" strokeWidth="1.5"/><path d="M13.5 6.5l.5.5M6 14l.5.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Legal:      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 3L5 5v5c0 3.866 5 7 5 7s5-3.134 5-7V5l-5-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 9.5l1.5 1.5 2.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

const IMAGE_TOOLS = [
  { href: "/compress-image",         label: "Compress Image", icon: I.Compress },
  { href: "/compress-image-to-size", label: "Compress to KB", icon: I.Compress, badge: "New" },
  { href: "/bulk-compress",          label: "Bulk Compress",  icon: I.Bulk,     badge: "×10" },
  { href: "/resize-image",           label: "Resize Image",   icon: I.Resize },
  { href: "/crop-image",             label: "Crop Image",     icon: I.Crop },
  { href: "/image-to-grayscale",     label: "Black & White",  icon: I.BW },
  { href: "/reduce-jpg-size",        label: "Reduce JPG",     icon: I.Jpg },
  { href: "/watermark-image",        label: "Watermark Photo",icon: I.Watermark, badge: "New" },
  { href: "/social-media-resizer",   label: "Social Resize",  icon: I.Social,    badge: "New" },
  { href: "/meme-generator",         label: "Meme Generator", icon: I.Text,      badge: "New" },
];

const CONVERT_TOOLS = [
  { href: "/convert-jpg-to-webp", label: "JPG → WebP",   icon: I.Convert },
  { href: "/convert-jpg-to-png",  label: "JPG → PNG",    icon: I.Convert },
  { href: "/convert-png-to-webp", label: "PNG → WebP",   icon: I.Convert },
  { href: "/convert-png-to-jpg",  label: "PNG → JPG",    icon: I.Convert },
  { href: "/convert-webp-to-jpg", label: "WebP → JPG",   icon: I.Convert },
  { href: "/heic-to-jpg",         label: "HEIC → JPG",   icon: I.Convert, badge: "New" },
  { href: "/svg-to-png",          label: "SVG → PNG",    icon: I.Convert, badge: "New" },
  { href: "/images-to-pdf",       label: "Images → PDF", icon: I.ImgPdf },
];

const PDF_TOOLS = [
  { href: "/compress-pdf",         label: "Compress PDF",  icon: I.Pdf },
  { href: "/merge-pdf",            label: "Merge PDF",     icon: I.Merge },
  { href: "/split-pdf",            label: "Split PDF",     icon: I.Split },
  { href: "/rotate-pdf",           label: "Rotate PDF",    icon: I.Rotate },
  { href: "/remove-pdf-pages",     label: "Remove Pages",  icon: I.Delete },
  { href: "/watermark-pdf",        label: "Watermark PDF", icon: I.Watermark },
  { href: "/protect-pdf",          label: "Protect PDF",   icon: I.Lock },
  { href: "/unlock-pdf",           label: "Unlock PDF",    icon: I.Unlock },
  { href: "/add-page-numbers-pdf", label: "Page Numbers",  icon: I.Numbers },
  { href: "/pdf-to-jpg",           label: "PDF → JPG",     icon: I.PdfImg },
  { href: "/pdf-to-word",          label: "PDF → Word",    icon: I.Word },
  { href: "/privacy-policy-generator", label: "Legal Generator", icon: I.Legal, badge: "New" },
];

const DEV_DESIGN_TOOLS = [
  { href: "/image-to-text",        label: "Image to Text (OCR)", icon: I.Word, badge: "New" },
  { href: "/color-picker",         label: "Color Palette",       icon: I.Dropper, badge: "New" },
  { href: "/favicon-generator",    label: "Favicon Generator",   icon: I.Grid, badge: "New" },
  { href: "/qr-code-generator",    label: "QR Generator",        icon: I.Qr,   badge: "New" },
  { href: "/json-formatter",       label: "JSON Formatter",      icon: I.Json, badge: "New" },
  { href: "/image-to-base64",      label: "Image → Base64",      icon: I.Code, badge: "New" },
  { href: "/base64-to-image",      label: "Base64 → Image",      icon: I.Code, badge: "New" },
];

type Tool = { href: string; label: string; icon: React.ReactNode; badge?: string };

function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
      {tools.map(({ href, label, icon, badge }) => (
        <Link
          key={href}
          href={href}
          className="tool-card relative group flex flex-col items-center gap-2.5 px-3 py-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--brand)]"
          style={{ boxShadow: "var(--shadow-xs)" }}
        >
          {badge && (
            <span className="absolute top-2 right-2 text-[9px] font-bold bg-[var(--brand)] text-white rounded-full px-1.5 py-0.5 leading-none">
              {badge}
            </span>
          )}
          <div className="w-9 h-9 rounded-lg bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--brand-light)] group-hover:text-[var(--brand)] transition-all duration-150">
            {icon}
          </div>
          <span className="text-[12.5px] font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] leading-tight transition-colors">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}

const HOME_FAQ = [
  { q: "Is ShrinkBox really free?",            a: "Yes. All tools are completely free. No hidden fees, no email required, no watermarks added to your files." },
  { q: "Are my files stored on your servers?", a: "No. Files are processed in memory and deleted immediately after you download the result. We never store your files permanently." },
  { q: "What file types do you support?",      a: "JPG, JPEG, PNG, WebP for images — and PDF for document tools. More formats coming soon." },
  { q: "What's the maximum file size?",        a: "The free tier supports files up to 10 MB. Need larger? Let us know via the contact page." },
  { q: "How much will my file shrink?",        a: "Images typically reduce by 30–60% at medium quality. PDFs with metadata can shrink 5–25%. Already-optimized files may see minimal reduction — we'll tell you honestly." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[640px] mx-auto px-5 pt-14 pb-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-3 py-1.5 mb-5 border border-[var(--brand-muted)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] inline-block" />
          Free · No login · Instant download
        </div>

        <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight leading-[1.08] mb-4">
          Compress files.<br />
          <span className="text-[var(--brand)]">No friction.</span>
        </h1>
        <p className="text-[var(--text-muted)] text-lg mb-10 max-w-[360px] mx-auto leading-relaxed">
          Upload an image or PDF. We compress it instantly and send it right back.
        </p>

        <CompressorWidget />

        <div className="mt-5">
          <TrustSignals />
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-[1100px] mx-auto px-5 py-12" id="tools">

        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-subtle)] mb-3">Image Tools</p>
          <ToolGrid tools={IMAGE_TOOLS} />
        </div>

        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-subtle)] mb-3">Convert Images</p>
          <ToolGrid tools={CONVERT_TOOLS} />
        </div>
        
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-subtle)] mb-3">Design & Developer Tools</p>
          <ToolGrid tools={DEV_DESIGN_TOOLS} />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-subtle)] mb-3">PDF Tools</p>
          <ToolGrid tools={PDF_TOOLS} />
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[1100px] mx-auto px-5 py-5 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {[
            { num: "21+",   label: "Free tools" },
            { num: "10 MB", label: "Max file size" },
            { num: "0",     label: "Files stored" },
            { num: "100%",  label: "Free forever" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center min-w-[64px]">
              <div className="text-xl font-bold tracking-tight text-[var(--text)]">{num}</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-[680px] mx-auto px-5 py-16">
        <FAQ items={HOME_FAQ} />
      </section>

      {/* SEO text */}
      <section className="max-w-[680px] mx-auto px-5 pb-16 space-y-3 text-[15px] text-[var(--text-muted)] leading-relaxed">
        <h2 className="text-xl font-bold text-[var(--text)]">The fastest way to compress files online</h2>
        <p>ShrinkBox is a free online file utility built for speed and simplicity. Whether you need to reduce an image for email, shrink a PDF for an upload limit, or convert between formats — we handle it instantly without any sign-up.</p>
        <p>Our image compression uses Sharp with MozJPEG encoding to reduce JPG, PNG, and WebP files by up to 60% while maintaining visual quality. All processing happens server-side and files are permanently deleted after download.</p>
      </section>
    </>
  );
}
