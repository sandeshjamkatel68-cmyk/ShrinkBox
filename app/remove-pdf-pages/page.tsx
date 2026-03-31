import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RemovePdfPagesWidget from "./RemovePdfPagesWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["remove-pdf-pages"].title, description: TOOL_META["remove-pdf-pages"].description, keywords: TOOL_META["remove-pdf-pages"].keywords,
  openGraph: { title: TOOL_META["remove-pdf-pages"].title, description: TOOL_META["remove-pdf-pages"].description, url: "https://shrink-box.com/remove-pdf-pages", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["remove-pdf-pages"].title, description: TOOL_META["remove-pdf-pages"].description },
  alternates: { canonical: "https://shrink-box.com/remove-pdf-pages" },
};

const FAQ_ITEMS = [
  { q: "Can I remove multiple pages at once?", a: "Yes. Enter page numbers separated by commas — for example: 1, 3, 5 removes pages 1, 3, and 5. At least one page must remain in the document." },
  { q: "Will removing pages change the content of other pages?", a: "No. Only the specified pages are deleted. All other pages retain their original content, formatting, and position." },
  { q: "How do I know which page numbers to remove?", a: "Open your PDF in any viewer (browser, Adobe Reader, Preview) and check the page numbers shown in the viewer — use those numbers, not any printed page numbers inside the document." },
];

export default function RemovePdfPagesPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["remove-pdf-pages"].title} description={TOOL_META["remove-pdf-pages"].description} url={TOOL_META["remove-pdf-pages"].url} category={TOOL_META["remove-pdf-pages"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🗑" title="Remove Pages from PDF" description="Delete specific pages from a PDF. Enter page numbers, click remove, and download the cleaned file instantly." badge="Free · Instant · No Signup" />
        <RemovePdfPagesWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">When to remove pages from a PDF</h2>
        <p>Common reasons include removing blank pages at the end of documents exported from Word, deleting cover pages with internal information before sharing externally, removing duplicate pages from scanned documents, or stripping confidential pages before distributing to clients.</p>
        <p>If you need to keep only a few specific pages from a large document, consider using our Split PDF tool instead — it lets you extract individual pages as separate files.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
