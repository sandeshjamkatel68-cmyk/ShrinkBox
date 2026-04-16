"use client";

import { useState } from "react";
import Link from "next/link";

const IMAGE_TOOLS = [
  { href: "/compress-image",         label: "Compress Image",       desc: "Reduce JPG, PNG, and WebP file size up to 80% with no visible quality loss.",     badge: "Popular" },
  { href: "/compress-image-to-size", label: "Compress to KB",       desc: "Compress an image to any exact target file size in KB or MB.",                      badge: "New" },
  { href: "/bulk-compress",          label: "Bulk Compress",        desc: "Compress up to 10 images simultaneously and download them all at once.",             badge: "×10" },
  { href: "/resize-image",           label: "Resize Image",         desc: "Resize images to exact dimensions or by percentage while preserving aspect ratio.",  badge: "" },
  { href: "/crop-image",             label: "Crop Image",           desc: "Crop JPG, PNG or WebP images to any size or aspect ratio online.",                   badge: "" },
  { href: "/image-to-grayscale",     label: "Black & White",        desc: "Convert any color image to professional black and white in one click.",              badge: "" },
  { href: "/reduce-jpg-size",        label: "Reduce JPG Size",      desc: "Specifically optimized for JPEG compression using MozJPEG technology.",              badge: "" },
  { href: "/reduce-png-size",        label: "Reduce PNG Size",      desc: "Compress PNG files using lossless optimization and metadata stripping.",              badge: "" },
  { href: "/watermark-image",        label: "Watermark Photo",      desc: "Add a text watermark to any image to protect your photography or artwork.",          badge: "New" },
  { href: "/social-media-resizer",   label: "Social Media Resizer", desc: "Resize images to perfect dimensions for Instagram, Facebook, Twitter, LinkedIn.",    badge: "New" },
  { href: "/meme-generator",         label: "Meme Generator",       desc: "Create custom memes online with any image. Add top and bottom text instantly.",      badge: "New" },
];

const CONVERT_TOOLS = [
  { href: "/convert-jpg-to-webp", label: "JPG → WebP",   desc: "Convert JPG photos to WebP for 30% smaller file sizes on your website.",          badge: "Popular" },
  { href: "/convert-jpg-to-png",  label: "JPG → PNG",    desc: "Convert JPG images to lossless PNG format. Ideal for graphics needing transparency.", badge: "" },
  { href: "/convert-png-to-webp", label: "PNG → WebP",   desc: "Convert PNG to WebP for smaller file sizes while keeping full transparency support.", badge: "" },
  { href: "/convert-png-to-jpg",  label: "PNG → JPG",    desc: "Convert large PNG photos to compact JPG format. Reduces file size by up to 5×.",    badge: "" },
  { href: "/convert-webp-to-jpg", label: "WebP → JPG",   desc: "Convert WebP images to universally compatible JPG format.",                         badge: "" },
  { href: "/heic-to-jpg",         label: "HEIC → JPG",   desc: "Convert iPhone HEIC photos to JPG. Works on Windows and Android instantly.",        badge: "Popular" },
  { href: "/svg-to-png",          label: "SVG → PNG",    desc: "Convert SVG vector files to raster PNG images at any size you need.",               badge: "New" },
  { href: "/images-to-pdf",       label: "Images → PDF", desc: "Combine multiple JPG, PNG, or WebP images into a single PDF document.",             badge: "Popular" },
];

const PDF_TOOLS = [
  { href: "/compress-pdf",         label: "Compress PDF",        desc: "Reduce PDF file size for email or upload. Strips metadata and optimizes structure.", badge: "Popular" },
  { href: "/merge-pdf",            label: "Merge PDF",           desc: "Combine multiple PDF files into one document. Rearrange pages in any order.",        badge: "Popular" },
  { href: "/split-pdf",            label: "Split PDF",           desc: "Split a PDF into individual pages or extract a specific page range.",                badge: "" },
  { href: "/rotate-pdf",           label: "Rotate PDF",          desc: "Rotate all pages in a PDF by 90°, 180° or 270°. Fix scanned documents instantly.",   badge: "" },
  { href: "/remove-pdf-pages",     label: "Remove Pages",        desc: "Delete specific pages from a PDF. Remove blank pages, duplicates, or confidential pages.", badge: "" },
  { href: "/watermark-pdf",        label: "Watermark PDF",       desc: "Add a text watermark to every page of a PDF to protect or brand your documents.",    badge: "" },
  { href: "/protect-pdf",          label: "Protect PDF",         desc: "Add password protection to any PDF. Secure sensitive documents before sharing.",     badge: "" },
  { href: "/unlock-pdf",           label: "Unlock PDF",          desc: "Remove password protection from a PDF you own. Enter the password, get an unlocked file.", badge: "" },
  { href: "/add-page-numbers-pdf", label: "Add Page Numbers",    desc: "Add professional page numbers to any PDF. Choose position, format and starting number.", badge: "" },
  { href: "/pdf-to-jpg",           label: "PDF → JPG",           desc: "Convert each page of a PDF to a high-resolution JPG image.",                         badge: "" },
  { href: "/pdf-to-word",          label: "PDF → Word",          desc: "Convert PDF documents to editable Word format for easy editing.",                    badge: "Popular" },
  { href: "/jpg-to-pdf",           label: "JPG → PDF",           desc: "Convert a single JPG image to a PDF document instantly.",                            badge: "" },
  { href: "/png-to-pdf",           label: "PNG → PDF",           desc: "Convert a single PNG image to a PDF document.",                                      badge: "" },
  { href: "/webp-to-pdf",          label: "WebP → PDF",          desc: "Convert a WebP image to a PDF file quickly and for free.",                           badge: "" },
  { href: "/pdf-to-image",         label: "PDF → Image",         desc: "Convert PDF pages to image files in multiple formats.",                              badge: "" },
  { href: "/privacy-policy-generator", label: "Legal Generator", desc: "Generate a privacy policy for your website in seconds. Download as PDF.",           badge: "New" },
];

const DEV_TOOLS = [
  { href: "/image-to-text",     label: "Image to Text (OCR)", desc: "Extract text from images, screenshots, or scanned documents using OCR technology.", badge: "New" },
  { href: "/color-picker",      label: "Color Palette",       desc: "Pick colors from any image and extract your palette as HEX, RGB, or HSL codes.",    badge: "New" },
  { href: "/favicon-generator", label: "Favicon Generator",   desc: "Generate favicon files in all sizes (16×16 to 512×512) from any image.",             badge: "New" },
  { href: "/qr-code-generator", label: "QR Code Generator",   desc: "Create QR codes for URLs, text, or any content. Download as PNG instantly.",        badge: "New" },
  { href: "/json-formatter",    label: "JSON Formatter",       desc: "Format, validate, and beautify JSON data instantly in your browser. 100% private.",  badge: "New" },
  { href: "/image-to-base64",   label: "Image → Base64",       desc: "Convert any image to a Base64 data URI string for CSS or HTML embedding.",           badge: "New" },
  { href: "/base64-to-image",   label: "Base64 → Image",       desc: "Decode a Base64 image string and download it as a PNG or JPG file.",                badge: "New" },
];

type Tool = { href: string; label: string; desc: string; badge: string };

function ToolRow({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-surface hover:border-brand/40 hover:bg-surface-muted transition-all duration-200"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-sm text-foreground group-hover:text-brand transition-colors">
            {tool.label}
          </span>
          {tool.badge && (
            <span className="text-[10px] font-bold bg-brand text-white rounded-full px-2 py-0.5 leading-none">
              {tool.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-muted leading-relaxed truncate">{tool.desc}</p>
      </div>
      <span className="text-muted group-hover:text-brand shrink-0 transition-colors">→</span>
    </Link>
  );
}

function ToolSection({
  title,
  emoji,
  description,
  tools,
  id,
}: {
  title: string;
  emoji: string;
  description: string;
  tools: Tool[];
  id: string;
}) {
  if (tools.length === 0) return null;

  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{emoji}</span>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted text-sm">{description}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {tools.map((tool) => (
          <ToolRow key={tool.href} tool={tool} />
        ))}
      </div>
    </section>
  );
}

export default function ToolsPage() {
  const [query, setQuery] = useState("");

  const filterTools = (tools: Tool[]) => {
    if (!query) return tools;
    return tools.filter(
      (t) =>
        t.label.toLowerCase().includes(query.toLowerCase()) ||
        t.desc.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredImages = filterTools(IMAGE_TOOLS);
  const filteredConvert = filterTools(CONVERT_TOOLS);
  const filteredPdf = filterTools(PDF_TOOLS);
  const filteredDev = filterTools(DEV_TOOLS);

  const totalResults =
    filteredImages.length +
    filteredConvert.length +
    filteredPdf.length +
    filteredDev.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-xs font-bold text-brand uppercase tracking-widest bg-[var(--brand-light)] px-3 py-1 rounded-full border border-brand/10">
          Free Tools Directory
        </span>
        <h1 className="text-4xl font-extrabold mt-6 mb-4 tracking-tight">
          Every Tool. No Signup. Free Forever.
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
          40+ free online tools for images, PDFs, and developer utilities. No account, no watermarks, no limits on basic usage.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-12">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <input
          type="text"
          placeholder="Search tools (e.g. compress, pdf, watermark...)"
          className="w-full bg-surface border-2 border-border rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted focus:border-brand/40 focus:ring-0 transition-all outline-none text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button 
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-muted hover:text-foreground"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        )}
      </div>

      {/* Quick Nav (Only if not searching) */}
      {!query && (
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {[
            { label: "🖼️ Image Tools", id: "image" },
            { label: "🔄 Converters", id: "convert" },
            { label: "📄 PDF Tools", id: "pdf" },
            { label: "💻 Developer", id: "developer" },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium border border-border bg-surface rounded-xl px-4 py-2 hover:border-brand/40 hover:text-brand transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {totalResults > 0 ? (
        <>
          <ToolSection
            id="image"
            emoji="🖼️"
            title="Image Optimization Tools"
            description="Compress, resize, crop, and edit images for web, email, and social media. Fast client-side processing."
            tools={filteredImages}
          />

          <ToolSection
            id="convert"
            emoji="🔄"
            title="Image Format Converters"
            description="Convert between JPG, PNG, WebP, HEIC, SVG and PDF instantly."
            tools={filteredConvert}
          />

          <ToolSection
            id="pdf"
            emoji="📄"
            title="PDF Management Tools"
            description="Compress, combine, split, and protect PDF documents entirely in your browser."
            tools={filteredPdf}
          />

          <ToolSection
            id="developer"
            emoji="💻"
            title="Developer & Design Utilities"
            description="Tools for developers: OCR, QR codes, JSON formatting, Base64, and color palettes."
            tools={filteredDev}
          />
        </>
      ) : (
        <div className="text-center py-20 bg-surface-muted rounded-3xl border-2 border-dashed border-border mb-16">
          <p className="text-lg font-bold text-foreground mb-2">No tools found for "{query}"</p>
          <p className="text-muted text-sm">Try a different keyword or suggest a tool below.</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-8 p-8 rounded-3xl bg-surface-muted border border-border text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">Can't find what you need?</h2>
        <p className="text-muted text-sm mb-6">
          We're always adding new tools. Suggest a tool or reach out if you have a file task you need help with.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-brand hover:bg-brand-dim text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors"
        >
          Suggest a Tool →
        </Link>
      </div>
    </div>
  );
}
