import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["compress-pdf"].title,
  description: TOOL_META["compress-pdf"].description,
  keywords:    TOOL_META["compress-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["compress-pdf"].title,
    description: TOOL_META["compress-pdf"].description,
    url:         "https://shrink-box.com/compress-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-pdf"].title,
    description: TOOL_META["compress-pdf"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/compress-pdf`,
  },
};

const PDF_FAQ = [
  {
    q: "How much will my PDF shrink?",
    a: "It depends heavily on the PDF. Text-only PDFs with lots of metadata can shrink by 10–25%. Image-heavy PDFs may see less reduction with our current engine. We always show you the exact result.",
  },
  {
    q: "Will my PDF content change?",
    a: "No. Text, images, and layout are preserved. We only strip redundant metadata and optimize the file structure.",
  },
  {
    q: "Can I compress a password-protected PDF?",
    a: "No. Encrypted or password-protected PDFs cannot be processed. Remove the password first in your PDF viewer.",
  },
  {
    q: "Why is my compressed PDF the same size?",
    a: "If your PDF is already well-optimized or contains only embedded images, our current engine may not be able to reduce it further. We'll tell you this clearly rather than pretending to compress it.",
  },
];

export default function CompressPDFPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-pdf"].title}
        description={TOOL_META["compress-pdf"].description}
        url={TOOL_META["compress-pdf"].url}
        category={TOOL_META["compress-pdf"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="📄"
          title="Compress PDF Online"
          description="Reduce your PDF file size by stripping metadata and optimizing structure. Free, instant, and private."
          badge="Free · No signup · Instant"
        />
        <CompressorWidget />
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={PDF_FAQ} />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Why Choose ShrinkBox?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">🌐</div>
                <div>
                  <p className="font-bold text-foreground">Global Standard Compression</p>
                  <p className="text-sm text-muted-foreground">We use industry-leading libraries to ensure your PDFs stay sharp while losing weight.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center shrink-0">🔒</div>
                <div>
                  <p className="font-bold text-foreground">100% Private & Secure</p>
                  <p className="text-sm text-muted-foreground">Your files never leave the processing memory and are deleted instantly. Zero storage, zero risk.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">⚡</div>
                <div>
                  <p className="font-bold text-foreground">Lightning Fast</p>
                  <p className="text-sm text-muted-foreground">No queues, no signups, no waiting. Just upload and download in seconds.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">How to Compress PDF (3 Simple Steps)</h2>
            <ol className="relative border-l border-brand/20 ml-3 space-y-8">
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand rounded-full -left-4 ring-4 ring-background text-white font-bold">1</span>
                <div>
                  <p className="font-bold text-foreground">Upload your PDF</p>
                  <p className="text-sm text-muted-foreground">Drag and drop your file into the box above or click to select from your device.</p>
                </div>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand rounded-full -left-4 ring-4 ring-background text-white font-bold">2</span>
                <div>
                  <p className="font-bold text-foreground">Automatic Optimization</p>
                  <p className="text-sm text-muted-foreground">Our engine immediately strips redundant metadata and cleans internal structures.</p>
                </div>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand rounded-full -left-4 ring-4 ring-background text-white font-bold">3</span>
                <div>
                  <p className="font-bold text-foreground">Download & Save</p>
                  <p className="text-sm text-muted-foreground">Get your optimized PDF instantly. Check the file size reduction and save to your folder.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-24 text-[16px] text-muted-foreground leading-relaxed">
        <div className="p-8 rounded-3xl bg-surface-muted/50 border border-border/50">
          <h2 className="text-2xl font-bold text-foreground mb-6">Deep Dive: How PDF Compression Works</h2>
          <div className="grid md:grid-cols-2 gap-8 font-medium">
            <p>
              Our PDF compressor uses advanced <strong>pdf-lib</strong> technology to parse, clean, and re-pack document files. Its primary goal is to reduce file size without ever compromising on readability or document integrity.
            </p>
            <p>
              Specifically, the tool targets <strong>embedded metadata</strong> — information like author details, software signatures, and time-stamps that add weight but zero visual value.
            </p>
            <p>
              Furthermore, we enable <strong>object stream compression</strong>. This technical process groups small objects together within the PDF structure, allowing for better overall compression ratios.
            </p>
            <p>
              ShrinkBox is perfect for students, professionals, and developers who need to meet strict upload limits for email, government forms, or web deployments.
            </p>
          </div>
        </div>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
