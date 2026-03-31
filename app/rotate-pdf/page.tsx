import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RotatePdfWidget from "./RotatePdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["rotate-pdf"].title, description: TOOL_META["rotate-pdf"].description, keywords: TOOL_META["rotate-pdf"].keywords,
  openGraph: { title: TOOL_META["rotate-pdf"].title, description: TOOL_META["rotate-pdf"].description, url: "https://shrink-box.com/rotate-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["rotate-pdf"].title, description: TOOL_META["rotate-pdf"].description },
  alternates: { canonical: "https://shrink-box.com/rotate-pdf" },
};

const FAQ_ITEMS = [
  { q: "Can I rotate just one page?", a: "Currently the tool rotates all pages by the same angle. To rotate specific pages, split the PDF first, rotate individual files, then merge them back together." },
  { q: "Will rotation affect the content quality?", a: "No. Rotation only changes the page orientation metadata — text, images, and formatting remain untouched." },
  { q: "What angles are available?", a: "90° clockwise, 180° (upside down), and 270° clockwise (same as 90° counter-clockwise)." },
];

export default function RotatePdfPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["rotate-pdf"].title} description={TOOL_META["rotate-pdf"].description} url={TOOL_META["rotate-pdf"].url} category={TOOL_META["rotate-pdf"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🔄" title="Rotate PDF Pages" description="Rotate all pages in a PDF by 90°, 180°, or 270°. Fix scanned documents and wrongly-oriented pages instantly." badge="Free · Instant · No Signup" />
        <RotatePdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">When to rotate PDF pages</h2>
        <p>The most common reason for rotating PDFs is scanning — documents placed sideways or upside down on a scanner produce rotated pages. Our tool fixes this by rotating all pages to the correct orientation in seconds.</p>
        <p>Another common use is converting between landscape and portrait orientation for presentations, reports, or any document where the page orientation needs to be adjusted before printing or sharing.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
