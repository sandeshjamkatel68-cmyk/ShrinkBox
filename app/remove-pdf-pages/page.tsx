import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RemovePdfPagesWidget from "./RemovePdfPagesWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: TOOL_META["remove-pdf-pages"].title, description: TOOL_META["remove-pdf-pages"].description, keywords: TOOL_META["remove-pdf-pages"].keywords,
  openGraph: { title: TOOL_META["remove-pdf-pages"].title, description: TOOL_META["remove-pdf-pages"].description, url: "https://shrink-box.com/remove-pdf-pages", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["remove-pdf-pages"].title, description: TOOL_META["remove-pdf-pages"].description },
  alternates: {
    canonical: "/remove-pdf-pages",
  },
};

const FAQ_ITEMS = [
  { q: "How do I remove multiple non-consecutive pages?", a: "Our tool makes it simple—just enter the page numbers separated by commas. For example, entering '1, 3, 5' will remove those specific pages while leaving everything else intact. Please ensure at least one page remains in your final document." },
  { q: "Will deleting pages ruin my document's formatting?", a: "Not at all. We precision-cut the specified pages from the document's internal map. All remaining pages retain their exact layout, high-resolution images, and selectable text perfectly." },
  { q: "How do I identify the exact page numbers to remove?", a: "We recommend opening your PDF in a standard viewer (like your web browser) and noting the 'logical' page numbers shown in the viewer's navigation bar. Use those numbers for the most accurate results." },
  { q: "Can I remove a range of pages (e.g., 5 through 10)?", a: "Yes! While you can enter individual numbers, our tool also supports ranges. Simply enter '5-10' to quickly strip out an entire section of your document in one go." },
];

export default function RemovePdfPagesPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["remove-pdf-pages"].title} description={TOOL_META["remove-pdf-pages"].description} url={TOOL_META["remove-pdf-pages"].url} category={TOOL_META["remove-pdf-pages"].category} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Remove PDF Pages", url: "/remove-pdf-pages" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Remove PDF Pages", url: "/remove-pdf-pages" }]} />
        <ToolHero icon="🗑" title="Remove PDF Pages Online Free — Clean Up Your Documents" description="Easily delete unnecessary pages from any PDF. Enter specific page numbers or ranges, and download your optimized document instantly with zero signup required." badge="Free · Instant · Private" />
        <RemovePdfPagesWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>

      <SEOContent
        toolName="Remove PDF Pages"
        title="Remove PDF Pages Online Free — Professional Document Pruning"
        description="Stop sharing cluttered documents. Our secure, browser-based tool allows you to strip out blank pages, confidential sections, or redundant slides in seconds."
        howToSteps={[
          "Select or drag & drop your PDF file into the secure delete zone above.",
          "Identify the page numbers you wish to remove (e.g., 2, 4, 6-10).",
          "Enter these numbers into the input field and click 'Remove Pages'.",
          "Download your polished, cleaned PDF document instantly and securely."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">When to use a PDF page remover</h3>
            <p>
              Common document management tasks often require removing specific pieces of information. Whether you're stripping out blank pages from a scan, deleting internal-only cover sheets before a client presentation, or removing redundant appendices from a report, pruning your PDF ensures your message is clear and professional. ShrinkBox provides a high-speed, zero-cost way to achieve this without needing expensive desktop software.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Privacy Guaranteed: Secure Document Processing</h3>
            <p>
              Your documents are personal, and we treat them that way. While our page removal tool utilizes secure APIs for processing complex document maps, we prioritize your data security by ensuring all files are deleted immediately after your session. We never store, analyze, or share your document content, providing you with a safe environment for handling sensitive information.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Combine with Compression</h3>
            <p className="text-sm">
              Removing pages already helps reduce file size, but if you're preparing a document for email, we recommend running your new cleaned PDF through our 'Compress PDF' tool. This double-optimization ensures your file is as light and fast as possible for your recipients.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
