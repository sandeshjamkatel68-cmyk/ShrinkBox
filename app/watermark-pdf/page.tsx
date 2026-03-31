import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import WatermarkPdfWidget from "./WatermarkPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["watermark-pdf"].title,
  description: TOOL_META["watermark-pdf"].description,
  keywords: TOOL_META["watermark-pdf"].keywords,
  openGraph: { title: TOOL_META["watermark-pdf"].title, description: TOOL_META["watermark-pdf"].description, url: "https://shrink-box.com/watermark-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["watermark-pdf"].title, description: TOOL_META["watermark-pdf"].description },
  alternates: { canonical: "https://shrink-box.com/watermark-pdf" },
};

const FAQ_ITEMS = [
  { q: "Can I customize the watermark text?", a: "Yes. Enter any text you want — CONFIDENTIAL, DRAFT, your company name, etc. You can also adjust color, opacity, angle, and position." },
  { q: "Will the watermark cover the content?", a: "The watermark is semi-transparent by default (30% opacity). You can adjust the opacity from subtle (5%) to bold (80%) depending on your needs." },
  { q: "Can I tile the watermark across every page?", a: "Yes. Choose 'Tiled' position to repeat the watermark text across the entire page, or 'Center' for a single centered watermark." },
  { q: "Can I remove the watermark later?", a: "Watermarks added by this tool are embedded directly into the PDF pages. They cannot be easily removed, so keep your original file." },
];

export default function WatermarkPdfPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["watermark-pdf"].title} description={TOOL_META["watermark-pdf"].description} url={TOOL_META["watermark-pdf"].url} category={TOOL_META["watermark-pdf"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="💧" title="Add Watermark to PDF" description="Add custom text watermark to every page of your PDF. Choose text, color, opacity, angle, and position — completely free." badge="Free · Instant · No Signup" />
        <WatermarkPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How PDF watermarking works</h2>
        <p>Our watermark tool uses pdf-lib to draw semi-transparent text directly onto each page of your PDF. The watermark is rendered at the position and angle you specify, with your chosen font size, color, and opacity. The result is a new PDF with the watermark permanently embedded.</p>
        <p>Watermarks are commonly used to mark documents as DRAFT, CONFIDENTIAL, or to brand them with a company name. This protects against unauthorized use and makes it clear that a document is not final or is proprietary.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
