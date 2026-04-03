import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import WatermarkPdfWidget from "./WatermarkPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["watermark-pdf"].title,
  description: TOOL_META["watermark-pdf"].description,
  keywords:    TOOL_META["watermark-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["watermark-pdf"].title,
    description: TOOL_META["watermark-pdf"].description,
    url:         "https://shrink-box.com/watermark-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["watermark-pdf"].title,
    description: TOOL_META["watermark-pdf"].description,
  },
  alternates: {
    canonical: "/watermark-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "Can I customize the exact text and style of the watermark?", a: "Yes. You have full control over the text content (e.g., 'CONFIDENTIAL', 'SAMPLE'), font size, color, opacity, rotation angle, and exact position on the page. You can even choose to tile the watermark across the entire document." },
  { q: "Will the watermark obscure the text underneath it?", a: "By default, our tool uses a semi-transparent opacity (30%) which ensures the watermark is clearly visible while the original document text remains perfectly readable. You can adjust this transparency setting to your preference." },
  { q: "Does watermarking a PDF affect its final file size?", a: "A text-based watermark adds a very small amount of data to the PDF structure, usually only a few KB. It significantly increases document security and branding without compromising the portability of the file." },
  { q: "Is my private document safe during the watermarking process?", a: "Absolutely. ShrinkBox uses high-performance browser-side libraries to layer the watermark. Your files never leave your device, ensuring that your sensitive business or personal documents remain 100% private." },
];

export default function WatermarkPdfPage() {
  return (
    <>
      <ToolSchema 
        name={TOOL_META["watermark-pdf"].title} 
        description={TOOL_META["watermark-pdf"].description} 
        url={TOOL_META["watermark-pdf"].url} 
        category={TOOL_META["watermark-pdf"].category} 
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Watermark PDF", url: "/watermark-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Watermark PDF", url: "/watermark-pdf" }]} />
        <ToolHero 
          icon="💧" 
          title="Add Watermark to PDF Online Free — Professional Document Branding" 
          description="Protect your intellectual property. Add custom text watermarks to every page of your PDF instantly with total control over opacity, angle, and positioning." 
          badge="Free · Instant · Private" 
        />
        <WatermarkPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="Watermark PDF"
        title="Add Watermark to PDF Online Free — Secure and Professional Document Stamping"
        description="Whether you're marking a draft for review or protecting proprietary information, ShrinkBox provides the most reliable way to add professional watermarks to your PDFs directly in your browser."
        howToSteps={[
          "Select or drag & drop your PDF file into the secure local watermark area.",
          "Enter your custom text (e.g., DRAFT, VOID, or your company name).",
          "Adjust the slider controls for opacity, rotation, and positioning for the perfect overlay.",
          "Download your watermarked, high-fidelity PDF instantly with zero wait time."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why document watermarking is a critical business practice</h3>
            <p>
              In a professional environment, clarity is everything. A clear 'DRAFT' watermark prevents accidental use of unfinished documents, while a 'CONFIDENTIAL' stamp signals the importance of sensitive information to the recipient. By using ShrinkBox, you can establish consistent document branding and security across your entire organization in seconds, ensuring your business communication remains high-quality and protected.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Security: Local Browser-Based Text Layering</h3>
            <p>
              Your sensitive documents should never be 'uploaded' to a random server just to have a watermark added. ShrinkBox utilizes **advanced client-side WebAssembly technology** to perform all text rendering and layering directly on your own computer. Your files never touch our servers, fulfilling your strict data privacy requirements while providing the speed of a web-based workflow.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use Tiling for Maximum Protection</h3>
            <p className="text-sm">
              If you want to ensure that specific parts of a page can't be easily screenshotted or cropped out without the watermark, use the 'Tiled' position. This repeats your watermark text in a repeating grid across the entire page, providing the highest level of visual security.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
