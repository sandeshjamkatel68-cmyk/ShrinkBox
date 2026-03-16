import type { Metadata } from "next";
import BulkCompressWidget from "@/components/tools/BulkCompressWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["bulk-compress"].title,
  description: TOOL_META["bulk-compress"].description,
  keywords:    TOOL_META["bulk-compress"].keywords,
  openGraph: {
    title:       TOOL_META["bulk-compress"].title,
    description: TOOL_META["bulk-compress"].description,
    url:         `https://shrink-box.comBulk Image Compressor`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["bulk-compress"].title,
    description: TOOL_META["bulk-compress"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/bulk-compress`,
  },
};

const FAQ_ITEMS = [
  { q: "How many images can I compress at once?", a: "Up to 10 images per batch in the free tier." },
  { q: "Can I download all compressed images at once?", a: "Yes. After compression, a 'Download all' button downloads each file in sequence." },
  { q: "Does each image get compressed separately?", a: "Yes. Each image is compressed individually with its own before/after comparison shown in the results." },
];

export default function BulkCompressPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["bulk-compress"].title}
        description={TOOL_META["bulk-compress"].description}
        url={TOOL_META["bulk-compress"].url}
        category={TOOL_META["bulk-compress"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🗂" title="Bulk Image Compressor" description="Compress up to 10 images at once. Upload JPG, PNG, or WebP files and download them all compressed in seconds." badge="Up to 10 files · Free" />
        <BulkCompressWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
