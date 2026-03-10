import type { Metadata } from "next";
import BulkCompressWidget from "@/components/tools/BulkCompressWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Bulk Image Compressor — Compress Multiple Images Free",
  description: "Compress multiple JPG, PNG, and WebP images at once online for free. Upload up to 10 images and download them all compressed.",
};

const FAQ_ITEMS = [
  { q: "How many images can I compress at once?", a: "Up to 10 images per batch in the free tier." },
  { q: "Can I download all compressed images at once?", a: "Yes. After compression, a 'Download all' button downloads each file in sequence." },
  { q: "Does each image get compressed separately?", a: "Yes. Each image is compressed individually with its own before/after comparison shown in the results." },
];

export default function BulkCompressPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🗂" title="Bulk Image Compressor" description="Compress up to 10 images at once. Upload JPG, PNG, or WebP files and download them all compressed in seconds." badge="Up to 10 files · Free" />
        <BulkCompressWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
