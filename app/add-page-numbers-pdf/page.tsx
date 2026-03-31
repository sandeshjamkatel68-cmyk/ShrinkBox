import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import AddPageNumbersWidget from "./AddPageNumbersWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["add-page-numbers-pdf"].title, description: TOOL_META["add-page-numbers-pdf"].description, keywords: TOOL_META["add-page-numbers-pdf"].keywords,
  openGraph: { title: TOOL_META["add-page-numbers-pdf"].title, description: TOOL_META["add-page-numbers-pdf"].description, url: "https://shrink-box.com/add-page-numbers-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["add-page-numbers-pdf"].title, description: TOOL_META["add-page-numbers-pdf"].description },
  alternates: { canonical: "https://shrink-box.com/add-page-numbers-pdf" },
};

const FAQ_ITEMS = [
  { q: "Can I choose where the page numbers appear?", a: "Yes. Choose from bottom center, bottom right, bottom left, top center, or top right positioning." },
  { q: "Can I start numbering from a specific page?", a: "Yes. Set the starting number to any value. For example, start from 5 if your document continues from a previous section." },
  { q: "What number formats are available?", a: "Simple numbers (1, 2, 3) or page-of-total format (1/10, 2/10, 3/10)." },
  { q: "Will page numbers work on scanned PDFs?", a: "Yes. Page numbers are added as a text layer on top of existing content, so they work on all PDFs including scanned documents." },
];

export default function AddPageNumbersPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["add-page-numbers-pdf"].title} description={TOOL_META["add-page-numbers-pdf"].description} url={TOOL_META["add-page-numbers-pdf"].url} category={TOOL_META["add-page-numbers-pdf"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🔢" title="Add Page Numbers to PDF" description="Automatically number every page of your PDF. Choose position, format, color, and starting number — completely free." badge="Free · Instant · No Signup" />
        <AddPageNumbersWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Why add page numbers to PDFs</h2>
        <p>Page numbers make multi-page documents easier to navigate, reference, and discuss. They're essential for reports, theses, manuals, contracts, and any professional document that may be printed or shared.</p>
        <p>Our tool uses pdf-lib to draw page numbers directly onto each page at your chosen position. The numbers are embedded as text elements, ensuring they appear correctly when the document is printed or viewed in any PDF reader.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
