import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["compress-pdf"].title,
  description: TOOL_META["compress-pdf"].description,
  keywords:    TOOL_META["compress-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["compress-pdf"].title,
    description: TOOL_META["compress-pdf"].description,
    url:         "https://shrink-box.com/compress-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-pdf"].title,
    description: TOOL_META["compress-pdf"].description,
  },
  alternates: {
    canonical: "/compress-pdf",
  },
};

const PDF_FAQ = [
  {
    q: "How much will my PDF shrink?",
    a: "It depends heavily on the PDF. Text-only PDFs with tons of internal metadata can often shrink by 10–25%. Image-heavy PDFs may see variable reduction depending on existing optimizations. ShrinkBox always provides the most efficient structure without corrupting your file.",
  },
  {
    q: "Will my PDF content change or lose quality?",
    a: "No. Our compression engine focuses on document structure and metadata pruning. This means your text, fonts, and images remain sharp and exactly where you placed them. We don't perform destructive downsampling by default.",
  },
  {
    q: "Can I compress a password-protected PDF?",
    a: "No. Encrypted or password-protected PDFs are locked for security. You must remove the password using our 'Unlock PDF' tool or your PDF viewer before we can optimize the internal structure.",
  },
  {
    q: "Why is my compressed PDF the same size as the original?",
    a: "If your PDF is already highly optimized (common with professional exports from InDesign or Acrobat), our engine might not find enough 'bloat' to safely remove. We prioritize file integrity over aggressive, risky compression.",
  },
];

export default function CompressPDFPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-pdf"].title}
        description={TOOL_META["compress-pdf"].description}
        url={TOOL_META["compress-pdf"].url}
        category={TOOL_META["compress-pdf"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress PDF", url: "/compress-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Compress PDF", url: "/compress-pdf" }]} />
        <ToolHero
          icon="📄"
          title="Compress PDF Online Free — Reduce PDF File Size Instantly"
          description="Meeting strict upload limits shouldn't be a struggle. ShrinkBox allows you to reduce PDF file size online without installing bulky software. Our browser-based optimizer is fast, free, and completely private."
          badge="Free · No signup · Instant"
        />
        <CompressorWidget />
        <div className="mt-12">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={PDF_FAQ} />
      </section>

      <SEOContent
        toolName="Compress PDF"
        title="Compress PDF Online Free — The Ultimate PDF Optimizer for 2026"
        description="Whether you're a student, professional, or job seeker, large PDF files can be a major roadblock. ShrinkBox provides a seamless, secure way to prune document weight instantly."
        howToSteps={[
          "Select or drag & drop your large PDF file into the secure processing box above.",
          "Our engine automatically scans the file structure for redundant metadata and objects.",
          "Click the 'Compress' button to initiate the optimization process locally in your browser.",
          "Download your newly optimized, smaller PDF file instantly with zero wait times."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you should compress your PDF files before sharing</h3>
            <p>
              In today's digital landscape, speed and efficiency are everything. Large PDF documents often exceed the 25MB attachment limit of major email providers like Gmail and Outlook. Beyond email, government portals and university application systems frequently impose strict 500KB or 2MB limits. By compressing your PDF, you ensure your documents are received without bounce-backs or technical errors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">100% Private: Browser-Side Optimization</h3>
            <p>
              Most online PDF compressors upload your sensitive documents to their servers. ShrinkBox is different. We leverage modern WebAssembly to perform the compression **directly on your device**. This means your bank statements, legal contracts, and personal IDs never leave your computer. It's the same security as desktop software with the convenience of an online tool.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip for Maximum Compression</h3>
            <p className="text-sm">
              If your PDF is still too large after compression, check for high-resolution images within the document. For the most effective size reduction, try our 'Images to PDF' tool with pre-compressed JPGs, as it can often produce significantly smaller final documents than simply shrinking an existing PDF export.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
