import type { Metadata } from "next";
import SplitPdfWidget from "@/components/tools/SplitPdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["split-pdf"].title,
  description: TOOL_META["split-pdf"].description,
  keywords:    TOOL_META["split-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["split-pdf"].title,
    description: TOOL_META["split-pdf"].description,
    url:         "https://shrink-box.com/split-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["split-pdf"].title,
    description: TOOL_META["split-pdf"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/split-pdf`,
  },
};

const FAQ_ITEMS = [
  { q: "How does PDF splitting work?", a: "Each page of your PDF is extracted into its own separate PDF file. You can then download individual pages or all pages at once." },
  { q: "Is there a page limit?", a: "Free tier processes up to 20 pages. If your PDF has more, the first 20 pages will be extracted." },
  { q: "Will the split pages look exactly like the original?", a: "Yes. Each extracted page is an exact copy of the original — same text, images, and layout." },
];

export default function SplitPdfPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["split-pdf"].title}
        description={TOOL_META["split-pdf"].description}
        url={TOOL_META["split-pdf"].url}
        category={TOOL_META["split-pdf"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="✂️" title="Split PDF into Pages" description="Extract individual pages from any PDF. Download them one by one or all at once — instantly and free." badge="Free · Up to 20 pages" />
        <SplitPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Extract PDF Pages Instantly</h2>
        <p>
          Often, you receive a massive PDF report but only need a single page or a specific section to send to a client or colleague. Our PDF Splitter solves this by allowing you to easily extract individual pages from a multi-page PDF document and save them as standalone files.
        </p>
        <p>
          Just like our other tools, ShrinkBox ensures the highest level of privacy by parsing and extracting the PDF pages entirely within your web browser. No data is transmitted to a remote server, meaning confidential financial documents, legal contracts, and personal records remain strictly on your own device. The extracted pages maintain 100% of the original formatting, fonts, and image quality.
        </p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
