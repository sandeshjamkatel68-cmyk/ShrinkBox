import type { Metadata } from "next";
import MergePdfWidget from "@/components/tools/MergePdfWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/merge-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "How many PDFs can I merge at once?", a: "With ShrinkBox, you can merge up to 10 PDF files in a single operation for free. If you have more, simply merge the first 10, then add the resulting file to your next batch." },
  { q: "Can I reorder the pages before merging?", a: "Yes. After uploading your documents, you can use the intuitive sorting arrows to arrange your PDFs in the exact order you want them to appear in the final combined file." },
  { q: "Will the merged PDF lose quality or formatting?", a: "No. Our merging engine performs a 'lossless' join. This means all text, fonts, high-resolution images, and complex layouts from each input PDF are preserved exactly as they were." },
  { q: "Can I merge password-protected PDFs?", a: "No. For security reasons, encrypted or password-protected PDFs cannot be accessed by our tool. Please use our 'Unlock PDF' tool to remove the protection before merging." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Merge PDF", url: "/merge-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Merge PDF", url: "/merge-pdf" }]} />
        <ToolHero icon="📎" title="Merge PDF Files Online Free — Combine Multiple Documents Instantly" description="Combining documents shouldn't require complex software. ShrinkBox allows you to merge multiple PDFs into a single, organized file directly in your browser. Perfect for students, lawyers, and business professionals." badge="Free · Up to 10 files" />
        <MergePdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>

      <SEOContent
        toolName="Merge PDF"
        title="Merge PDF Online Free — The Easiest Way to Combine Documents in 2026"
        description="Stop struggling with fragmented files. Our professional-grade PDF merger allows you to securely combine multiple documents into one polished file directly in your browser."
        howToSteps={[
          "Select up to 10 PDF files from your device or drag them into the secure upload zone.",
          "Arrange your files in the desired sequence using our easy-to-use sorting arrows.",
          "Click the 'Merge PDF' button to initiate the joining process locally on your computer.",
          "Download your combined, high-quality document instantly with zero server-side storage."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why merging PDFs is essential for efficient document management</h3>
            <p>
              Managing dozens of individual PDF files can be a nightmare for organization and sharing. Whether you're combining monthly invoices into a yearly report, merging academic certificates for a job application, or joining chapters of a manuscript, a single unified PDF is far more professional and easier to navigate. ShrinkBox makes this transition seamless by providing a high-speed, zero-cost solution that works on any device.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Privacy First: Your Documents Never Leave Your Device</h3>
            <p>
              Unlike traditional 'cloud' tools that upload your files to remote servers, ShrinkBox performs the entire merging operation **locally in your browser**. Using modern WebAssembly technology, we process your sensitive documents (like medical records or legal contracts) on your hardware. This ensures 100% privacy and eliminates the risk of data breaches associated with third-party server storage.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Optimize After Merging</h3>
            <p className="text-sm">
              Merging multiple high-resolution PDFs can result in a very large final file. After you've combined your documents using this tool, we recommend running the output through our 'Compress PDF' tool. This will prune redundant metadata and ensure your combined file is small enough for easy email sharing or web uploads.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
