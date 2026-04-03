import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import PdfToWordWidget from "./PdfToWordWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["pdf-to-word"].title,
  description: TOOL_META["pdf-to-word"].description,
  keywords:    TOOL_META["pdf-to-word"].keywords,
  openGraph: {
    title:       TOOL_META["pdf-to-word"].title,
    description: TOOL_META["pdf-to-word"].description,
    url:         "https://shrink-box.com/pdf-to-word",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["pdf-to-word"].title,
    description: TOOL_META["pdf-to-word"].description,
  },
  alternates: {
    canonical: "/pdf-to-word",
  },
};

const FAQ_ITEMS = [
  { q: "Will the formatting be preserved?", a: "This free tool extracts text content and basic structure. While we aim to keep the text in order, complex formatting, nested tables, and multi-column layouts might require manual adjustment in your Word processor." },
  { q: "What output format do I get?", a: "To ensure maximum compatibility and speed, the current output is a clean .txt file. You can easily copy this content into Microsoft Word, Google Docs, or any other editor." },
  { q: "Does this work with scanned PDFs?", a: "No. Scanned PDFs are essentially images of text. Our current extractor works only on 'born-digital' PDFs where text is selectable. For scanned documents, you would need an OCR tool." },
  { q: "Is there a file size limit?", a: "For the best experience in your browser, we recommend PDFs under 10MB. Larger files might cause temporary lag during the extraction process." },
];

export default function PdfToWordPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "PDF to Word", url: "/pdf-to-word" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "PDF to Word", url: "/pdf-to-word" }]} />
        <ToolHero icon="📄→📝" title="PDF to Word Online Free — Extract Editable Text Instantly" description="Stop retyping documents manually. Our PDF to Word extractor analyzes your files instantly in the browser, providing clean text you can edit anywhere." badge="Free · Instant · Private" />
        <PdfToWordWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <SEOContent
        toolName="PDF to Word"
        title="PDF to Word Online Free — The Faster Way to Edit PDF Content"
        description="Stop fighting with locked PDF files. Our secure, browser-based text extractor helps you turn static documents into editable content in seconds."
        howToSteps={[
          "Select or drag & drop your PDF file into the secure converter box.",
          "Our engine instantly scans the internal document structure for text layers.",
          "Review the extracted content count and metadata directly in your browser.",
          "Download the extracted text or copy it to your clipboard for use in Word."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">The benefits of converting PDF to editable text</h3>
            <p>
              PDFs are perfect for sharing but terrible for editing. If you need to borrow a paragraph from a report, update a legal clause, or repurpose content from an old assignment, retyping is a waste of time. ShrinkBox's PDF to Word tool bridges this gap by reaching into the document structure and pulling out the raw information, allowing you to focus on writing rather than data entry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Zero Uploads: Your Sensitive Documents Stay Local</h3>
            <p>
              Most 'free' online converters are data miners in disguise. They upload your documents to their servers, where they might be stored or analyzed. ShrinkBox uses advanced JavaScript technology to perform the text extraction **entirely within your browser**. Your data, your privacy, and your documents never leave your machine.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Formatting for Success</h3>
            <p className="text-sm">
              If the extracted text loses its indentation or specific layout, try copying the text into a simple editor like Notepad first to strip any hidden styling bits, then paste it into Microsoft Word. This often results in a cleaner starting point for your new document.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
