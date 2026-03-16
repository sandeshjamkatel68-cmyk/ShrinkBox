import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["compress-pdf"].title,
  description: TOOL_META["compress-pdf"].description,
  keywords:    TOOL_META["compress-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["compress-pdf"].title,
    description: TOOL_META["compress-pdf"].description,
    url:         `https://shrink-box.comCompress PDF Online`,
    siteName:    "ShrinkBox",
    type:        "website",
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

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How PDF compression works</h2>
        <p>
          Our PDF compressor uses pdf-lib to parse, clean, and re-pack PDF files. It removes
          embedded metadata like author information, creation timestamps, and software signatures.
          It also enables object stream compression, which reduces the size of the PDF's internal
          structure.
        </p>
        <p>
          This approach works best on PDFs exported from word processors, design tools, or
          web browsers — files that tend to carry significant metadata overhead.
        </p>
      </section>
    </>
  );
}
