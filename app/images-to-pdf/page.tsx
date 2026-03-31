import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import ImagesToPdfWidget from "@/app/images-to-pdf/ImagesToPdfWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title: TOOL_META["images-to-pdf"].title, description: TOOL_META["images-to-pdf"].description, keywords: TOOL_META["images-to-pdf"].keywords,
  openGraph: { title: TOOL_META["images-to-pdf"].title, description: TOOL_META["images-to-pdf"].description, url: "https://shrink-box.com/images-to-pdf", siteName: "ShrinkBox", type: "website", images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TOOL_META["images-to-pdf"].title, description: TOOL_META["images-to-pdf"].description },
  alternates: { canonical: "https://shrink-box.com/images-to-pdf" },
};

const FAQ_ITEMS = [
  { q: "How many images can I combine?", a: "You can combine up to 20 images at once. Each image becomes one page in the output PDF." },
  { q: "What order will images appear?", a: "Images appear in the order they were uploaded. Most browsers upload in alphabetical order by filename." },
  { q: "What file formats are supported?", a: "JPG, JPEG, PNG, and WebP images. The output is always a PDF file." },
  { q: "Can I set the page size?", a: "Each page automatically matches the dimensions of its corresponding image." },
];

export default function ImagesToPdfPage() {
  return (
    <>
      <ToolSchema name={TOOL_META["images-to-pdf"].title} description={TOOL_META["images-to-pdf"].description} url={TOOL_META["images-to-pdf"].url} category={TOOL_META["images-to-pdf"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🖼→📄" title="Images to PDF Converter" description="Combine JPG, PNG or WebP images into one PDF document. Upload up to 20 images and download as a single PDF." badge="Free · Up to 20 images" />
        <ImagesToPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">When to convert images to PDF</h2>
        <p>Converting images to PDF is commonly used for submitting scanned documents, creating photo albums, assembling portfolios, combining receipts for expense reports, and creating product catalogs from images.</p>
        <p>Our converter uses pdf-lib to create a standards-compliant PDF where each image becomes a full page. The resulting PDF can be opened in any PDF reader and is ready for emailing, printing, or archiving.</p>
      </section>
      <RelatedGuides tags={["PDF","Tools"]} />
    </>
  );
}
