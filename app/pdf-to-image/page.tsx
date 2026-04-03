import { Metadata } from "next";
import PdfToJpgWidget from "@/app/pdf-to-jpg/PdfToJpgWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["pdf-to-image"].title,
  description: TOOL_META["pdf-to-image"].description,
  keywords:    TOOL_META["pdf-to-image"].keywords,
  openGraph: {
    title:       TOOL_META["pdf-to-image"].title,
    description: TOOL_META["pdf-to-image"].description,
    url:         "https://shrink-box.com/pdf-to-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["pdf-to-image"].title,
    description: TOOL_META["pdf-to-image"].description,
  },
  alternates: {
    canonical: "/pdf-to-image",
  },
};

const FAQ_ITEMS = [
  { q: "What is the difference between PDF to JPG and PDF to Image?", a: "Broadly speaking, they are the same. Our 'PDF to Image' tool is designed to provide the highest quality extraction, allowing you to turn each PDF page into a high-resolution graphic file suitable for presentations and social media." },
  { q: "Can I extract images that are *inside* the PDF, or just full pages?", a: "Our current tool converts entire pages into image files. This ensures that the layout, fonts, and graphics of your document are perfectly preserved in the visual output." },
  { q: "Is there a limit to how many pages I can convert?", a: "You can convert documents up to 50 pages in a single operation. For larger files, we recommend splitting the PDF first or processing in smaller batches for the best performance." },
  { q: "Are my documents secure during the image extraction process?", a: "Yes. Unlike other converters, ShrinkBox performs the extraction locally in your browser. Your sensitive documents never leave your computer, ensuring total privacy." },
];

export default function PdfToImagePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "PDF to Image", url: "/pdf-to-image" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "PDF to Image", url: "/pdf-to-image" }]} />
        <ToolHero
          icon="🖼️"
          title="Convert PDF to Image Online Free — High Quality Extraction"
          description="Turn your PDF pages into high-resolution images instantly. Professional-grade conversion that preserves the exact layout and clarity of your original document."
          badge="Free · Instant · Secure"
        />
        <PdfToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="PDF to Image"
        title="Convert PDF to Image Online Free — Professional Quality Visuals"
        description="Need to share a PDF page on Instagram or embed it in a PowerPoint? ShrinkBox provides the fastest, most secure way to turn your PDF documents into web-ready images."
        howToSteps={[
          "Drag and drop your PDF file into the secure extraction zone.",
          "Our system will instantly analyze the document structure and page count.",
          "Click 'Extract Pages' to generate high-resolution visual files.",
          "Download your images as individual files or a organized batch."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you need a dedicated PDF to Image converter</h3>
            <p>
              Screenshots often result in blurry text and low-resolution graphics. A professional converter ensures that every vector, font, and image inside your PDF is rendered at the highest possible fidelity. This is essential for creators, students, and professionals who need to maintain a high-quality aesthetic across different platforms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Privacy first: Local browser-based conversion</h3>
            <p>
              Your PDFs often contain sensitive information. ShrinkBox doesn't require you to 'upload' your files to a mystery server. Every step of the image extraction happens **locally in your web browser**, giving you the speed of the web with the security of an offline application.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Social Media</h3>
            <p className="text-sm">
              If you have a beautiful document design that you want to share on LinkedIn or Pinterest, converting it to an image is the best way to ensure it displays correctly without requiring your followers to download a separate file.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Conversion","Tools"]} />
    </>
  );
}
