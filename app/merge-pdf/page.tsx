import type { Metadata } from "next";
import MergePdfWidget from "@/components/tools/MergePdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Merge PDF Online — Combine PDFs for Free",
  description: "Merge multiple PDF files into one online for free. Upload up to 10 PDFs, reorder them, and download the combined file. No signup.",
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
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="📎" title="Merge PDF Files" description="Combine multiple PDFs into a single file. Upload up to 10 PDFs, set the order, and download the merged result instantly." badge="Free · Up to 10 files" />
        <MergePdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
