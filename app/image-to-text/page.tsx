import type { Metadata } from "next";
import OcrWidget from "./OcrWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

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
    canonical: `https://shrink-box.com/image-to-text`,
  },
};

const FAQ_ITEMS = [
  { q: "How accurate is the OCR?", a: "We use Tesseract.js, a world-class OCR engine. Accuracy is extremely high for clear text on flat backgrounds. Handwriting or low-resolution scans may have limited accuracy." },
  { q: "Can I extract text from a screenshot?", a: "Yes. Simply take a screenshot, upload it here, and our tool will instantly convert the pixels into editable text." },
  { q: "Is the text extraction private?", a: "100%. The OCR engine runs inside your web browser using a WebWorker. We never upload your images to our server or store your extracted text." },
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
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="📝" 
          title="Extract Text from Image" 
          description="Free online OCR. Turn images, screenshots, and scans into editable text instantly using your browser's power." 
          badge="Image → Text · Free" 
        />
        <OcrWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">The Best Free Online OCR Tool</h2>
        <p>
          Ever needed to copy text from a locked PDF, a screenshot of a website, or a photo of a document? ShrinkBox's Image-to-Text tool uses advanced Optical Character Recognition (OCR) to solve this problem in seconds.
        </p>
        <p>
          Unlike cloud-based OCR services that might scrape your data, our tool is 100% private. We download the necessary AI models directly to your browser's cache, allowing you to process documents offline without ever sending sensitive images over the internet.
        </p>
      </section>

      <RelatedGuides tags={["Tools", "Business"]} />
    </>
  );
}
