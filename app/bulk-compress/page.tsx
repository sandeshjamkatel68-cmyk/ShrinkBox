import type { Metadata } from "next";
import BulkCompressWidget from "@/components/tools/BulkCompressWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["bulk-compress"].title,
  description: TOOL_META["bulk-compress"].description,
  keywords:    TOOL_META["bulk-compress"].keywords,
  openGraph: {
    title:       TOOL_META["bulk-compress"].title,
    description: TOOL_META["bulk-compress"].description,
    url:         "https://shrink-box.com/bulk-compress",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
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
      
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Fast and Private Bulk Image Compression</h2>
        <p>
          Compressing dozens of images one by one is incredibly tedious. Our bulk image compressor is designed for photographers, developers, and content creators who need to batch process multiple images at once without sacrificing quality. You can upload a mix of JPG, PNG, and WebP files simultaneously.
        </p>
        <p>
          Unlike cloud-based competitors, our tool processes all images locally inside your browser using WebAssembly. This means you skip the slow upload times, and your files never touch an external server. It's faster, completely private, and highly efficient for optimizing large galleries or e-commerce product photos.
        </p>
      </section>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
