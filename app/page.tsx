import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
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

type Tool = { href: string; label: string; icon: ReactNode; badge?: string };

function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {tools.map(({ href, label, icon, badge }, idx) => (
        <Link
          key={href}
          href={href}
          className="tool-card group relative flex flex-col items-center gap-4 px-4 py-6 rounded-2xl border border-border bg-surface text-center no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-brand shadow-sm hover:shadow-xl animate-fade-up"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          {badge && (
            <span className="absolute top-3 right-3 text-[10px] font-bold bg-brand text-white rounded-full px-2 py-0.5 leading-none shadow-sm z-10">
              {badge}
            </span>
          )}
          <div className="w-12 h-12 rounded-xl bg-surface-muted flex items-center justify-center text-muted-foreground group-hover:bg-brand-light group-hover:text-brand transition-all duration-300 rotate-0 group-hover:rotate-6">
            {icon}
          </div>
          <span className="text-[14px] font-bold text-muted-foreground group-hover:text-foreground leading-tight transition-colors">
            {label}
          </span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-500" />
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
    <div className="relative isolate">
      {/* Background Mesh */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Hero */}
      <section className="max-w-[800px] mx-auto px-5 pt-20 pb-12 text-center relative">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-brand bg-brand-light rounded-full px-4 py-2 mb-8 border border-brand/10 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          Free · No login · Instant download
        </div>

        <h1 className="text-[52px] md:text-[72px] font-extrabold tracking-tight leading-[0.95] mb-6 text-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Compress files.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-accent">No friction.</span>
        </h1>
        <p className="text-muted-foreground text-xl mb-12 max-w-[480px] mx-auto leading-relaxed font-medium animate-fade-up" style={{ animationDelay: '0.2s' }}>
          The fastest way to optimize images and PDFs. Instant results, zero registration, and complete privacy.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <CompressorWidget />
        </div>

        <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <TrustSignals />
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 relative" id="tools">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Powerful tools, zero cost.</h2>
          <div className="h-1 w-20 bg-brand rounded-full mb-2" />
        </div>


        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 px-2">Image Tools</p>
          <ToolGrid tools={IMAGE_TOOLS} />
        </div>

        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 px-2">Convert & PDF</p>
          <ToolGrid tools={CONVERT_TOOLS} />
        </div>
        
        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 px-2">Design & Developer</p>
          <ToolGrid tools={DEV_DESIGN_TOOLS} />
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 px-2">Advanced PDF</p>
          <ToolGrid tools={PDF_TOOLS} />
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-border bg-surface-muted/30">
        <div className="max-w-[1100px] mx-auto px-5 py-8 flex flex-wrap justify-center gap-x-16 gap-y-6">
          {[
            { num: "50+",   label: "Free online tools" },
            { num: "10 MB", label: "Max file size" },
            { num: "0",     label: "Files stored" },
            { num: "100%",  label: "Free forever" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center min-w-[100px]">
              <div className="text-2xl font-black tracking-tight text-foreground">{num}</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-[680px] mx-auto px-5 py-16">
        <FAQ items={HOME_FAQ} />
      </section>

      {/* SEO text */}
      <section className="max-w-[800px] mx-auto px-5 pb-24 space-y-6 text-[16px] text-muted-foreground leading-relaxed">
        <div className="p-8 rounded-3xl bg-surface-muted/50 border border-border/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">The fastest way to compress files online</h2>
          <div className="space-y-4 font-medium">
            <p>ShrinkBox is a free online file utility built for speed and simplicity. Whether you need to reduce an image for email, shrink a PDF for an upload limit, or convert between formats — we handle it instantly without any sign-up.</p>
            <p>Our image compression uses Sharp with MozJPEG encoding to reduce JPG, PNG, and WebP files by up to 60% while maintaining visual quality. All processing happens server-side and files are permanently deleted after download.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
