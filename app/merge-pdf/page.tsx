import type { Metadata } from "next";
import MergePdfWidget from "@/components/tools/MergePdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["merge-pdf"].title,
  description: TOOL_META["merge-pdf"].description,
  keywords:    TOOL_META["merge-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["merge-pdf"].title,
    description: TOOL_META["merge-pdf"].description,
    url:         `https://shrink-box.comMerge PDF Online`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["merge-pdf"].title,
    description: TOOL_META["merge-pdf"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/merge-pdf`,
  },
};

const FAQ_ITEMS = [
  { q: "How many PDFs can I merge at once?", a: "You can merge up to 10 PDF files in a single operation for free." },
  { q: "Can I reorder the pages before merging?", a: "Yes. After uploading, you can reorder your PDFs using the up and down arrows before merging." },
  { q: "Will the merged PDF retain all formatting?", a: "Yes. All text, images, and layout from each input PDF are preserved exactly." },
  { q: "Can I merge password-protected PDFs?", a: "No. Remove the password from your PDFs first, then merge them here." },
];

export default function MergePdfPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["merge-pdf"].title}
        description={TOOL_META["merge-pdf"].description}
        url={TOOL_META["merge-pdf"].url}
        category={TOOL_META["merge-pdf"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="📎" title="Merge PDF Files" description="Combine multiple PDFs into a single file. Upload up to 10 PDFs, set the order, and download the merged result instantly." badge="Free · Up to 10 files" />
        <MergePdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
