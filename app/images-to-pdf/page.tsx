import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import ImagesToPdfWidget from "@/app/images-to-pdf/ImagesToPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: TOOL_META["images-to-pdf"].title, description: TOOL_META["images-to-pdf"].description, keywords: TOOL_META["images-to-pdf"].keywords,
  openGraph: { title: TOOL_META["images-to-pdf"].title, description: TOOL_META["images-to-pdf"].description, url: "https://shrink-box.com/images-to-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["images-to-pdf"].title, description: TOOL_META["images-to-pdf"].description },
  alternates: {
    canonical: "/images-to-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "How many images can I combine into one PDF?", a: "ShrinkBox allows you to combine up to 20 images in a single operation. Each image is neatly converted into an individual page within the final PDF document." },
  { q: "In what order will my images appear in the PDF?", a: "By default, your images are arranged in the order they were uploaded. Most modern browsers handle this alphabetically by filename, so we recommend naming your files (e.g., 01, 02, 03) before uploading for the best results." },
  { q: "What image file formats do you support?", a: "Our converter is compatible with all standard formats including JPG, JPEG, PNG, and WebP. No matter the source, the output is always a clean, universally readable PDF file." },
  { q: "Is there a limit on individual image file size?", a: "For the fastest experience in your browser, we recommend keeping individual images under 15MB each. This ensures the PDF generation stays snappy and responsive." },
];

export default function ImagesToPdfPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Images to PDF", url: "/images-to-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Images to PDF", url: "/images-to-pdf" }]} />
        <ToolHero icon="🖼→📄" title="Images to PDF Online Free — Combine Photos to PDF Instantly" description="Merge JPG, PNG, or WebP images into a single, professional PDF document in seconds. Upload your gallery and create a portable document directly in your browser." badge="Free · Up to 20 images" />
        <ImagesToPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <SEOContent
        toolName="Images to PDF"
        title="Images to PDF Online Free — Create Professional Digital Portfolios"
        description="Whether you're assembling receipts for an expense report or creating a high-quality photo catalog for a client, our browser-based converter combines your images into a clean PDF in seconds."
        howToSteps={[
          "Select or drag & drop up to 20 image files (JPG, PNG, WebP) into the converter.",
          "Our system instantly analyzes the metadata and prepares the document structure.",
          "Check the generated preview to ensure all your images are accounted for.",
          "Download your combined, multi-page PDF document immediately with zero wait time."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you should combine your images into a PDF</h3>
            <p>
              Sending twenty individual image files via email is messy and unprofessional. Converting those images into a single PDF makes your content much easier to share, print, and archive. Whether you're a student submitting scanned homework or a business professional organizing project photos, ShrinkBox's 'Images to PDF' tool ensures your visual content is delivered in a universally accepted, high-fidelity format.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Your Photos Never Leave Your Browser</h3>
            <p>
              Your personal photos and sensitive document scans should never be uploaded to a third-party server. ShrinkBox leverages advanced client-side technology to perform the entire conversion **locally on your computer**. This means your images are processed privately within your browser, ensuring 100% security and zero data retention.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Optimize Before Combining</h3>
            <p className="text-sm">
              If your original images are extremely large (multi-megabyte photos), we recommend running them through our 'Compress Image' tool before converting them to PDF. This will keep your final PDF file size manageable and ensure it's easy for your recipients to open and download.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
