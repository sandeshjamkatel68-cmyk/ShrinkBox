import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RotatePdfWidget from "./RotatePdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: TOOL_META["rotate-pdf"].title, description: TOOL_META["rotate-pdf"].description, keywords: TOOL_META["rotate-pdf"].keywords,
  openGraph: { title: TOOL_META["rotate-pdf"].title, description: TOOL_META["rotate-pdf"].description, url: "https://shrink-box.com/rotate-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["rotate-pdf"].title, description: TOOL_META["rotate-pdf"].description },
  alternates: {
    canonical: "/rotate-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "Can I rotate just one specific page?", a: "Our current tool rotates all pages in the PDF by the same selected angle. If you only need to rotate one page, we recommend using 'Split PDF' first, rotating that specific page file, and then 'Merge PDF' to join them back together." },
  { q: "Will rotating my PDF affect the content quality?", a: "No. Rotation only modifies the page orientation metadata within the PDF. Your text, high-resolution images, and document formatting remain entirely untouched and of the same quality." },
  { q: "Which rotation angles are available?", a: "You can choose from 90° clockwise (Right), 180° (Upside down), or 90° counter-clockwise (Left/270°). This covers all standard orientation fixes for scanned documents." },
  { q: "Can I rotate a password-protected PDF?", a: "No. Encrypted documents are locked for security. You must first remove the password using our 'Unlock PDF' tool or your PDF viewer before you can adjust the page orientation." },
];

export default function RotatePdfPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Rotate PDF", url: "/rotate-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Rotate PDF", url: "/rotate-pdf" }]} />
        <ToolHero icon="🔄" title="Rotate PDF Online Free — Fix Document Orientation Instantly" description="Poorly scanned or wrongly-oriented pages shouldn't be a hassle. ShrinkBox allows you to rotate all pages in a PDF by 90°, 180°, or 270° instantly and for free directly in your browser." badge="Free · Instant · No Signup" />
        <RotatePdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <SEOContent
        toolName="Rotate PDF"
        title="Rotate PDF Online Free — Achieve Perfect Alignment for Scanned Docs"
        description="Whether your scanner placed pages sideways or you need to adjust portrait vs landscape views for a presentation, our browser-based rotator handles everything securely."
        howToSteps={[
          "Upload your PDF document by clicking the 'Select PDF' button above.",
          "Choose your preferred rotation angle: 90° Right, 180° Flip, or 90° Left.",
          "Our engine will instantly modify the page orientation metadata within the file.",
          "Download your properly oriented, clean PDF file immediately."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you should fix PDF orientation before sharing</h3>
            <p>
              Presenting a document with upside-down or sideways pages is unprofessional and frustrating for the reader. If you've ever dealt with a scanner that misread the orientation of your sheets, our 'Rotate PDF' tool is your best friend. In a few clicks, you can ensure every page of your legal contract, invoice, or resume is oriented perfectly, providing a seamless reading experience on any device.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Your Files Never Leave Your Browser</h3>
            <p>
              Forget 'cloud' services that upload your personal documents to their remote servers. ShrinkBox uses modern JavaScript technology to perform the entire rotation operation **locally in your browser**. This means your sensitive document data never travels across the internet, ensuring 100% privacy and bank-level security for your most confidential files.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Check for Size Bloat</h3>
            <p className="text-sm">
              Sometimes poorly scanned PDFs are unnecessarily large. After you've fixed the orientation of your document using this tool, we recommend running it through our 'Compress PDF' tool. This will prune redundant metadata and ensure your properly-aligned file is also optimized for fast email sharing.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
