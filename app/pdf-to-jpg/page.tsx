import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import PdfToJpgWidget from "@/app/pdf-to-jpg/PdfToJpgWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["pdf-to-jpg"].title, description: TOOL_META["pdf-to-jpg"].description, keywords: TOOL_META["pdf-to-jpg"].keywords,
  openGraph: { title: TOOL_META["pdf-to-jpg"].title, description: TOOL_META["pdf-to-jpg"].description, url: "https://shrink-box.com/pdf-to-jpg", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["pdf-to-jpg"].title, description: TOOL_META["pdf-to-jpg"].description },
  alternates: { canonical: "https://shrink-box.com/pdf-to-jpg" },
};

const FAQ_ITEMS = [
  { q: "How many pages can I extract?", a: "You can extract all pages from any PDF. Each page becomes a separate JPG image that you can download individually or all at once." },
  { q: "What resolution are the extracted images?", a: "Images are extracted at the resolution embedded in the PDF. For scanned documents, this is typically 150-300 DPI." },
  { q: "Can I extract just one page?", a: "All pages are extracted at once. Download only the ones you need." },
];

export default function PdfToJpgPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["pdf-to-jpg"].title} description={TOOL_META["pdf-to-jpg"].description} url={TOOL_META["pdf-to-jpg"].url} category={TOOL_META["pdf-to-jpg"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="📄→🖼" title="PDF to JPG Converter" description="Extract every page from a PDF as individual JPG image files. Download pages separately or all at once." badge="Free · Instant · No Signup" />
        <PdfToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How PDF to JPG conversion works</h2>
        <p>Our converter uses pdf-lib to parse the PDF structure and extract embedded images and rendered pages. Each page is converted to a JPG image file that can be used independently — for presentations, social media, or archiving.</p>
        <p>This is particularly useful for extracting charts, diagrams, or scanned document pages from PDFs when you need them as standalone image files.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
