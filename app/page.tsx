import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import DynamicCompressorWidget from "@/components/upload/DynamicCompressorWidget";
import { TrustSignals, FAQ } from "@/components/seo";
import LazySection from "@/components/ui/LazySection";

export const metadata: Metadata = {
  title: "ShrinkBox — Free Image & PDF Tools Online",
  description: "Free online tools for compressing, converting, resizing, and editing images and PDFs. No signup. Files deleted instantly.",
  alternates: {
    canonical: "/",
  },
};

// ── SVG Icons (compact) ────────────────────────────────────────────────────

const I = {
  Compress:   <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 14L3 17m0 0h3m-3 0v-3M14 6l3-3m0 0h-3m3 0v3M6 6L3 3m0 0h3M3 3v3M14 14l3 3m0 0h-3m3 0v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Bulk:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Resize:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 8V3h5M17 12v5h-5M3 3l5.5 5.5M17 17l-5.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Crop:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 2v9a2 2 0 002 2h9M15 18v-9a2 2 0 00-2-2H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  BW:         <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v14" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3a7 7 0 010 14z" fill="currentColor" opacity="0.2"/></svg>,
  Convert:    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ImgPdf:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6h4M6 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Pdf:        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7h4M8 10h4M8 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  Merge:      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="12" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Split:      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="12" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/></svg>,
  Rotate:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.5 10a5.5 5.5 0 105.5-5.5H7m0 0L4.5 7M7 4.5L9.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Delete:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7h10l-1 9H6L5 7zM3 7h14M8 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Watermark:  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 16l3-9 3 6 2-3 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Lock:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Unlock:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 9V7a3 3 0 014.83-2.91" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Numbers:    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 4h2v8H5M7 8H5M10 4l-1.5 8h4M10 4h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M3 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  PdfImg:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="9" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M12 9l5-0M14.5 6.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Word:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 8l1.5 6L10 9l2 5 1.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Code:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 6l-4 4 4 4M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 4L9 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Grid:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Text:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 3h8M10 4v12M7 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Dropper:    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5l.7-.7a2.8 2.8 0 00-4-4L11 1M8 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5L4 16a2 2 0 00-1 2v1h1a2 2 0 002-1L17 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Qr:         <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z" fill="currentColor"/></svg>,
  Json:       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4h-1a2 2 0 00-2 2v2a2 2 0 01-2 2 2 2 0 012 2v2a2 2 0 002 2h1M13 4h1a2 2 0 012 2v2a2 2 0 002 2 2 2 0 00-2 2v2a2 2 0 01-2 2h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Social:     <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 17c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7a3 3 0 100 6 3 3 0 000-6z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  Legal:      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L5 5v5c0 3.866 5 7 5 7s5-3.134 5-7V5l-5-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 9.5l1.5 1.5 2.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Jpg:        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 8h2v5H7m0 0a2 2 0 002 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
};

const IMAGE_TOOLS = [
  { href: "/compress-image",         label: "Compress Image", icon: I.Compress },
  { href: "/compress-image-to-size", label: "Compress to KB", icon: I.Compress, badge: "Popular" },
  { href: "/bulk-compress",          label: "Bulk Compress",  icon: I.Bulk },
  { href: "/resize-image",           label: "Resize Image",   icon: I.Resize },
  { href: "/crop-image",             label: "Crop Image",     icon: I.Crop },
  { href: "/image-to-grayscale",     label: "Black & White",  icon: I.BW },
  { href: "/reduce-jpg-size",        label: "Reduce JPG",     icon: I.Jpg },
  { href: "/watermark-image",        label: "Watermark Photo",icon: I.Watermark },
  { href: "/social-media-resizer",   label: "Social Resize",  icon: I.Social },
  { href: "/meme-generator",         label: "Meme Generator", icon: I.Text },
];

const CONVERT_TOOLS = [
  { href: "/convert-jpg-to-webp", label: "JPG → WebP",   icon: I.Convert },
  { href: "/convert-jpg-to-png",  label: "JPG → PNG",    icon: I.Convert },
  { href: "/convert-png-to-webp", label: "PNG → WebP",   icon: I.Convert },
  { href: "/convert-png-to-jpg",  label: "PNG → JPG",    icon: I.Convert },
  { href: "/convert-webp-to-jpg", label: "WebP → JPG",   icon: I.Convert },
  { href: "/heic-to-jpg",         label: "HEIC → JPG",   icon: I.Convert },
  { href: "/svg-to-png",          label: "SVG → PNG",    icon: I.Convert },
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
  { href: "/privacy-policy-generator", label: "Legal Generator", icon: I.Legal },
];

const DEV_DESIGN_TOOLS = [
  { href: "/bulk-image-downloader", label: "Bulk URL Downloader", icon: I.Bulk, badge: "New" },
  { href: "/image-to-text",        label: "Image to Text (OCR)", icon: I.Word },
  { href: "/color-picker",         label: "Color Palette",       icon: I.Dropper },
  { href: "/favicon-generator",    label: "Favicon Generator",   icon: I.Grid },
  { href: "/qr-code-generator",    label: "QR Generator",        icon: I.Qr },
  { href: "/json-formatter",       label: "JSON Formatter",      icon: I.Json },
  { href: "/image-to-base64",      label: "Image → Base64",      icon: I.Code },
  { href: "/base64-to-image",      label: "Base64 → Image",      icon: I.Code },
];

type Tool = { href: string; label: string; icon: ReactNode; badge?: string };

function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {tools.map(({ href, label, icon, badge }, idx) => (
        <Link
          key={href}
          href={href}
          className="card-interactive card-shine group relative flex flex-col items-center gap-3 px-3 py-5 text-center no-underline animate-fade-up"
          style={{ animationDelay: `${idx * 0.04}s` }}
        >
          {badge && (
            <span className="badge badge-brand absolute top-2.5 right-2.5 shadow-sm z-10">
              {badge}
            </span>
          )}
          <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand">
            {icon}
          </div>
          <span className="text-[13px] font-semibold text-foreground leading-tight">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}

function CategoryLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <p className="text-2xs font-bold uppercase tracking-[0.15em] text-subtle whitespace-nowrap">{children}</p>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

const HOME_FAQ = [
  { q: "Is ShrinkBox really free to use?", a: "Yes. Every tool on ShrinkBox is 100% free with no hidden fees, no subscription traps, and no watermarks on your files." },
  { q: "How secure are my files?", a: "For tools like JSON Formatter and QR Generator, processing happens entirely in your browser — your data never leaves your device. For image and PDF tools that require server processing, files are processed in secure memory and deleted permanently after download." },
  { q: "What is the maximum file size?", a: "Our free tier supports files up to 10 MB, which covers the vast majority of web optimization needs for images and documents." },
  { q: "Does ShrinkBox support bulk processing?", a: "Yes! Our Bulk Image Compressor lets you optimize up to 10 images simultaneously, saving time on large projects." },
  { q: "Will I lose image quality?", a: "We use professional-grade MozJPEG and Sharp encoding. At 'Low' and 'Medium' compression levels, quality loss is virtually invisible to the human eye while reducing file size significantly." },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="hero-gradient relative">
        <div className="max-w-[720px] mx-auto px-5 pt-16 sm:pt-24 pb-10 text-center">
          <div
            className="inline-flex items-center gap-2 text-2xs font-bold text-brand bg-brand-light rounded-full px-4 py-2 mb-8 border border-brand/10 animate-fade-up"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
            </span>
            Free · No Signup · Privacy-First
          </div>

          <h1
            className="heading-display text-[36px] sm:text-[48px] md:text-[60px] mb-5 text-foreground animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Optimize files.{" "}
            <span className="text-gradient">Ship faster.</span>
          </h1>

          <p
            className="text-muted text-base sm:text-lg mb-10 max-w-[440px] mx-auto leading-relaxed font-medium animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Professional image compression, PDF tools, and format converters. Free, fast, and built for privacy.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <DynamicCompressorWidget />
          </div>

          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <TrustSignals />
          </div>
        </div>
      </section>

      {/* ── Tools Section ────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 py-16 sm:py-24" id="tools">
        <div className="text-center mb-14">
          <h2 className="heading-section text-2xl sm:text-3xl mb-3 text-foreground">
            30+ Professional Tools
          </h2>
          <p className="text-muted max-w-md mx-auto text-sm sm:text-base font-medium">
            Everything you need to optimize images, manage PDFs, and streamline your workflow.
          </p>
        </div>

        <LazySection fallbackHeight="800px">
          <div className="space-y-12">
            <div>
              <CategoryLabel>Image Optimization</CategoryLabel>
              <ToolGrid tools={IMAGE_TOOLS} />
            </div>

            <div>
              <CategoryLabel>Format Conversion</CategoryLabel>
              <ToolGrid tools={CONVERT_TOOLS} />
            </div>

            <div>
              <CategoryLabel>Developer & Design</CategoryLabel>
              <ToolGrid tools={DEV_DESIGN_TOOLS} />
            </div>

            <div>
              <CategoryLabel>PDF Management</CategoryLabel>
              <ToolGrid tools={PDF_TOOLS} />
            </div>
          </div>
        </LazySection>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div className="border-y border-border bg-surface-muted/30">
        <div className="max-w-[1100px] mx-auto px-5 py-10 flex flex-wrap justify-center gap-x-16 gap-y-6">
          {[
            { num: "30+",   label: "Free Tools" },
            { num: "10 MB", label: "Max Upload" },
            { num: "Zero",  label: "Signups Required" },
            { num: "100%",  label: "Privacy Guaranteed" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center min-w-[100px]">
              <div className="text-2xl font-extrabold tracking-tight text-foreground">{num}</div>
              <div className="text-2xs font-bold uppercase tracking-wider text-subtle mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Blog Preview ─────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 py-16 sm:py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="heading-section text-2xl sm:text-3xl mb-2 text-foreground">From the Blog</h2>
            <p className="text-muted font-medium text-sm">Practical guides on file optimization and web performance.</p>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all no-underline">
            All articles
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              slug: "compress-images-for-wordpress",
              tag: "WordPress",
              title: "How to Compress Images for WordPress Without Plugins",
              excerpt: "WordPress images that aren't compressed slow down your site and hurt SEO. Here's how to compress before uploading.",
            },
            {
              slug: "pdf-too-large-to-email",
              tag: "PDF",
              title: "PDF Too Large to Email? Here's the Complete Fix",
              excerpt: "Hit that 'attachment too large' error again? Here's exactly how to shrink PDFs for Gmail, Outlook, and any mail server.",
            },
            {
              slug: "core-web-vitals-images",
              tag: "Web Performance",
              title: "How Images Affect Your Core Web Vitals Score",
              excerpt: "Images are the #1 cause of poor LCP scores. Here's how unoptimized images hurt your ranking and what to do.",
            },
          ].map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-interactive group flex flex-col p-5 sm:p-6 no-underline"
            >
              <span className="badge badge-surface mb-4 self-start">{post.tag}</span>
              <h3 className="text-[15px] font-bold text-foreground group-hover:text-brand transition-colors mb-2.5 leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-4 pt-3 border-t border-border/50">
                <span className="text-xs font-semibold text-brand group-hover:translate-x-1 transition-transform inline-block">
                  Read guide →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline">
            View all articles →
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="max-w-[680px] mx-auto px-5 py-12 sm:py-16">
        <FAQ items={HOME_FAQ} />
      </section>

      {/* ── SEO Content ──────────────────────────────────────── */}
      <LazySection fallbackHeight="400px">
        <section className="max-w-[900px] mx-auto px-5 pb-20 space-y-12 text-muted leading-relaxed">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="heading-section text-xl text-foreground">Why Speed Matters for SEO</h2>
              <p className="text-sm">
                Page load speed is a critical ranking factor. Large, unoptimized images and heavy PDF documents are the primary culprits behind slow mobile performance and poor Core Web Vitals scores. ShrinkBox provides an all-in-one platform to compress JPG, convert PNG to WebP, and shrink PDF files in seconds.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="heading-section text-xl text-foreground">Privacy-First Architecture</h2>
              <p className="text-sm">
                Many of our tools, like the JSON Formatter and QR Code Generator, run entirely within your browser — your data never touches our servers. For tools requiring server processing, files are processed in secure memory and deleted immediately after your download completes.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border space-y-6">
            <h2 className="heading-section text-xl text-foreground text-center">How It Works</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              {[
                { step: "1", title: "Select Your Tool", desc: "Choose from our specialized image, PDF, or developer tools." },
                { step: "2", title: "Drop & Configure", desc: "Drag your files in and adjust quality settings with intuitive controls." },
                { step: "3", title: "Instant Download", desc: "Our engine processes your request in real-time. Download immediately." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-sm">{step}</div>
                  <p className="font-bold text-foreground">{title}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
