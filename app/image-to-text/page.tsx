import { Metadata } from "next";
import OcrWidget from "./OcrWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["image-to-text"].title,
  description: TOOL_META["image-to-text"].description,
  keywords:    TOOL_META["image-to-text"].keywords,
  openGraph: {
    title:       TOOL_META["image-to-text"].title,
    description: TOOL_META["image-to-text"].description,
    url:         "https://shrink-box.com/image-to-text",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["image-to-text"].title,
    description: TOOL_META["image-to-text"].description,
  },
  alternates: {
    canonical: "/image-to-text",
  },
};

const FAQ_ITEMS = [
  { q: "How accurate is the Image to Text extraction?", a: "ShrinkBox uses Tesseract.js, the most advanced open-source OCR engine available for the web. For clear, digital text on light backgrounds, accuracy remains extremely high. Performance may vary for complex handwriting or very low-resolution documents." },
  { q: "Can I extract text from screenshots or protected PDFs?", a: "Yes. Simply upload your screenshot or the image version of your document. Our engine will bypass any digital lock by reading the pixels directly and converting them into editable text for you." },
  { q: "Is the text extraction process truly private?", a: "Absolutely. 100% of the extraction logic runs inside a secure WebWorker within your own browser. Your sensitive images and the resulting text never leave your device, ensuring zero data retention and maximum privacy." },
  { q: "What languages does the OCR tool support?", a: "Our current implementation is highly optimized for English and standard Latin characters. We are continuously updating our internal models to support more languages and complex character sets in the future." },
];

export default function ImageToTextPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["image-to-text"].title}
        description={TOOL_META["image-to-text"].description}
        url={TOOL_META["image-to-text"].url}
        category={TOOL_META["image-to-text"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Image to Text", url: "/image-to-text" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Image to Text", url: "/image-to-text" }]} />
        <ToolHero 
          icon="📝" 
          title="Extract Text from Image Online Free — High-Precision OCR" 
          description="Transform screenshots, scans, and photos into editable text instantly with professional-grade accuracy and complete privacy." 
          badge="Image → Text · Free · Instant" 
        />
        <OcrWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Image to Text"
        title="Extract Text from Image Online Free — The Future of Data Entry"
        description="Stop retyping documents manually. ShrinkBox's Image to Text tool uses high-performance OCR technology to reach into your images and pull out the raw text layer in seconds."
        howToSteps={[
          "Select or drag & drop your image or screenshot into the secure converter box.",
          "Our internal OCR engine instantly initializes the AI model directly in your browser.",
          "Allow the engine to scan the pixel layout for recognized characters and patterns.",
          "Review your editable content and copy it instantly to your clipboard with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why browser-side OCR is a productivity game-changer</h3>
            <p>
              Traditional OCR services require you to upload potentially sensitive documents to a mysterious cloud server. ShrinkBox changes this by bringing the AI directly to you. By downloading the OCR models into your browser's local cache, we combine the intelligence of a massive server farm with the total security of a local desktop application.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Security: Zero-Retention Text Scans</h3>
            <p>
              Whether you're scanning a confidential legal contract or a private bank statement, your data security is our priority. ShrinkBox's Image to Text extractor runs entirely on your local CPU. Once you close the tab, all traces of your documents are purged, fulfilling the strictest privacy requirements for professional and personal use.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Clean Images Yield Better Results</h3>
            <p className="text-sm">
              For the highest possible character recognition accuracy, ensure your scans or photos are taken in good lighting with the text properly aligned. Using our 'Rotate Image' or 'Crop Image' tools beforehand can drastically improve the extraction quality of complex documents.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Tools", "Business"]} />
    </>
  );
}
