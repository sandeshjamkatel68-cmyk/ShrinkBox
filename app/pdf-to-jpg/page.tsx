import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import PdfToJpgWidget from "@/app/pdf-to-jpg/PdfToJpgWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: TOOL_META["pdf-to-jpg"].title, description: TOOL_META["pdf-to-jpg"].description, keywords: TOOL_META["pdf-to-jpg"].keywords,
  openGraph: { title: TOOL_META["pdf-to-jpg"].title, description: TOOL_META["pdf-to-jpg"].description, url: "https://shrink-box.com/pdf-to-jpg", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["pdf-to-jpg"].title, description: TOOL_META["pdf-to-jpg"].description },
  alternates: {
    canonical: "/pdf-to-jpg",
  },
};

const FAQ_ITEMS = [
  { q: "How many pages can I extract from my PDF?", a: "With ShrinkBox, you can extract every single page from any PDF document, regardless of length. Each page is converted into a high-quality JPG image that you can download individually or as a complete collection." },
  { q: "What is the resolution of the extracted JPG images?", a: "We extract images at the highest possible resolution embedded within the PDF. For professional documents, this usually means a crisp 300 DPI output, ensuring your text and graphics remain perfectly legible." },
  { q: "Can I extract just a specific page or range?", a: "Our tool processes the entire document at once for maximum speed. Once the extraction is complete, you can browse the gallery and simply download only the specific pages you need." },
  { q: "Do the JPG images have watermarks?", a: "No. ShrinkBox is 100% free and we never add watermarks, logos, or any other branding to your extracted images. You get clean, professional-grade files every time." },
];

export default function PdfToJpgPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "PDF to JPG", url: "/pdf-to-jpg" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "PDF to JPG", url: "/pdf-to-jpg" }]} />
        <ToolHero icon="📄→🖼" title="PDF to JPG Online Free — Convert PDF Pages to Images Instantly" description="Turn any PDF document into a gallery of high-quality images. Our browser-based converter extracts each page as a separate JPG file with zero quality loss and complete privacy." badge="Free · Instant · No Signup" />
        <PdfToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <SEOContent
        toolName="PDF to JPG"
        title="PDF to JPG Online Free — High-Fidelity Image Extraction in 2026"
        description="Whether you're looking to share a chart on social media, archive document pages as images, or repurpose PDF graphics, our browser-based converter provides crystal clear output."
        howToSteps={[
          "Select or drag & drop your PDF document into the secure processing zone above.",
          "Our engine instantly renders every page of the document into a high-resolution JPG.",
          "Browse the generated image gallery and select the specific pages you wish to save.",
          "Download individual JPGs or the entire set as a packaged ZIP file with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you might need to convert PDF pages to JPG images</h3>
            <p>
              PDFs are great for documents, but they aren't always easy to share on visual platforms. If you want to post a page from a report on LinkedIn, embed a chart into a PowerPoint presentation, or send a single invoice page via WhatsApp, a JPG is often the much better format. ShrinkBox makes this transition effortless by providing a high-speed extraction tool that keeps your documents looking exactly as they should.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Privacy Guaranteed: No Server-Side Processing</h3>
            <p>
              Most online converters upload your PDFs to their cloud servers, posing a significant privacy risk. ShrinkBox leverages modern browser capabilities to perform the entire conversion **locally on your computer**. Your sensitive document data never leaves your device, ensuring your privacy is never compromised. It's the security of a desktop app with the speed of the web.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Image Quality Matters</h3>
            <p className="text-sm">
              If you're extracting images for professional use or printing, ensure your source PDF wasn't already heavily compressed. Our 'PDF to JPG' tool will preserve the original resolution, but it cannot 'add' quality that wasn't there in the source file. For the best results, use 'born-digital' PDFs rather than low-resolution scans.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
