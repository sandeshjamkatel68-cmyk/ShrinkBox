import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import PdfToWordWidget from "./PdfToWordWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["pdf-to-word"].title, description: TOOL_META["pdf-to-word"].description, keywords: TOOL_META["pdf-to-word"].keywords,
  openGraph: { title: TOOL_META["pdf-to-word"].title, description: TOOL_META["pdf-to-word"].description, url: "https://shrink-box.com/pdf-to-word", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["pdf-to-word"].title, description: TOOL_META["pdf-to-word"].description },
  alternates: { canonical: "https://shrink-box.com/pdf-to-word" },
};

const FAQ_ITEMS = [
  { q: "Will the formatting be preserved?", a: "This free tool extracts text content and basic structure. Full formatting, tables, and images are not preserved. For complete Word conversion, use Adobe Acrobat or CloudConvert." },
  { q: "What output format do I get?", a: "The output is a plain text (.txt) file containing the extracted text content from your PDF." },
  { q: "Does this work with scanned PDFs?", a: "No. Scanned PDFs contain images, not text. You would need OCR (Optical Character Recognition) software to extract text from scanned documents." },
];

export default function PdfToWordPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["pdf-to-word"].title} description={TOOL_META["pdf-to-word"].description} url={TOOL_META["pdf-to-word"].url} category={TOOL_META["pdf-to-word"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="📄→📝" title="PDF to Word Converter" description="Extract text content from PDF documents. Convert PDF to editable text format instantly — no signup required." badge="Free · Instant · Basic Text" />
        <PdfToWordWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How PDF to text extraction works</h2>
        <p>Our converter uses pdf-lib to parse the PDF document structure and extract embedded text content. The extracted text includes the document metadata, page count, and text content organized by page.</p>
        <p>This tool is best for text-heavy PDFs like reports, articles, and documentation. For PDFs with complex layouts, tables, or images, we recommend professional tools like Adobe Acrobat for full Word format conversion.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
