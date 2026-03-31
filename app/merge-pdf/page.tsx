import type { Metadata } from "next";
import MergePdfWidget from "@/components/tools/MergePdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["merge-pdf"].title,
  description: TOOL_META["merge-pdf"].description,
  keywords:    TOOL_META["merge-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["merge-pdf"].title,
    description: TOOL_META["merge-pdf"].description,
    url:         "https://shrink-box.com/merge-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
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

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Securely Combine PDF Documents</h2>
        <p>
          Managing multiple PDF documents—like invoices, scanned tax forms, or school reports—can quickly become messy. Our PDF Merging tool simplifies this by allowing you to combine up to 10 separate PDF files into one clean, continuous document. You maintain full control over the sequence of the pages by reordering the files before hitting merge.
        </p>
        <p>
          More importantly, we understand that PDFs often contain highly sensitive personal or business information. Unlike server-side converters that upload your documents to a cloud queue, ShrinkBox utilizes local browser processing. This means your PDFs are merged entirely on your own device's RAM, ensuring your private data never touches the internet.
        </p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
