import type { Metadata } from "next";
import SplitPdfWidget from "@/components/tools/SplitPdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["split-pdf"].title,
  description: TOOL_META["split-pdf"].description,
  keywords:    TOOL_META["split-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["split-pdf"].title,
    description: TOOL_META["split-pdf"].description,
    url:         `https://shrink-box.comSplit PDF Online`,
    siteName:    "ShrinkBox",
    type:        "website",
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
    </>
  );
}
