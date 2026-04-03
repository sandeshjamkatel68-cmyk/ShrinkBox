import type { Metadata } from "next";
import SplitPdfWidget from "@/components/tools/SplitPdfWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/split-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "How exactly does PDF splitting work?", a: "ShrinkBox extracts every page of your PDF into its own standalone PDF file. You can then download individual pages or grab all pages at once in a single packaged zip file." },
  { q: "Is there a limit on how many pages I can split?", a: "For the best experience in your browser, our tool currently supports splitting up to 20 pages in a single operation for free. If you have a larger file, we recommend separating it into smaller sections first." },
  { q: "Will the split pages maintain the original resolution and quality?", a: "Yes. Each extracted page is a 100% fidelity copy of the original — all text, high-res images, and complex layering remain perfectly intact." },
  { q: "Can I split a password-protected PDF?", a: "No. Encrypted documents are locked for your protection. You'll need to remove the password using our 'Unlock PDF' tool or your document viewer before splitting." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Split PDF", url: "/split-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Split PDF", url: "/split-pdf" }]} />
        <ToolHero icon="✂️" title="Split PDF Online Free — Extract Pages from PDF Instantly" description="Break down large PDF documents into manageable, individual pages. Our professional-grade splitter extracts every page into a standalone PDF file directly in your browser." badge="Free · Up to 20 pages" />
        <SplitPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>

      <SEOContent
        toolName="Split PDF"
        title="Split PDF Online Free — The Faster Way to Organize Multi-Page Documents"
        description="Whether you need a single page from a massive report or want to separate an entire PDF into individual files for easier sharing, our browser-based splitter is the ultimate professional solution."
        howToSteps={[
          "Select or drag & drop your PDF file (up to 20 pages) into the secure upload area.",
          "Our system instantly renders each page of the document as a separate thumbnail.",
          "Click the download icon on any specific page you wish to extract and save.",
          "Use 'Download All' to save every extracted page as a separate PDF file instantly."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you should split your PDFs for better communication</h3>
            <p>
              Sending a fifty-page document when someone only needs page twelve is a waste of bandwidth and attention. Whether you're extracting a single invoice from a monthly batch, separating chapters of a book, or pulling a specific certificate from a portfolio, splitting your PDF ensures your recipient gets exactly what they need — nothing more, nothing less. ShrinkBox provides a clean, zero-cost way to perform this operation in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Privacy Guaranteed: Extraction Happens on Your Hardware</h3>
            <p>
              Most online PDF splitters upload your sensitive documents to their cloud servers, posing a significant security risk. ShrinkBox leverages advanced JavaScript technology to perform the entire splitting operation **locally in your browser**. This means your bank statements, legal contracts, and personal IDs never leave your device. It's the security of a desktop app with the convenience of the web.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Merge for Greater Control</h3>
            <p className="text-sm">
              If you need to extract and then re-combine specific pages, use this 'Split PDF' tool first to separate everything. Then, select only the pages you want and use our 'Merge PDF' tool to join them back together in your preferred order. This workflow gives you total control over your final document structure.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
