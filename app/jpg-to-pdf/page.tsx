import { Metadata } from "next";
import ImagesToPdfWidget from "@/app/images-to-pdf/ImagesToPdfWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["jpg-to-pdf"].title,
  description: TOOL_META["jpg-to-pdf"].description,
  keywords:    TOOL_META["jpg-to-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["jpg-to-pdf"].title,
    description: TOOL_META["jpg-to-pdf"].description,
    url:         "https://shrink-box.com/jpg-to-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["jpg-to-pdf"].title,
    description: TOOL_META["jpg-to-pdf"].description,
  },
  alternates: {
    canonical: "/jpg-to-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "How many JPG images can I convert to PDF at once?", a: "Our converter allows you to combine up to 20 images in a single batch. For larger projects, we recommend processing in segments to ensure the best performance in your browser." },
  { q: "Will the PDF maintain the high quality of my JPG files?", a: "Yes. ShrinkBox is built to preserve the resolution and clarity of your original photography. We wrap each image in a standard PDF container without re-compressing your data by default." },
  { q: "Is it possible to reorder the images after I upload them?", a: "Yes. Once you've uploaded your files, you can simply drag and drop them in the preferred order before you generate the final PDF document." },
  { q: "Is my privacy protected when I convert my photos?", a: "Absolutely. Your images never leave your computer. All the processing happens locally in your browser, so no third-party server will ever see your personal data." },
];

export default function JpgToPdfPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "JPG to PDF", url: "/jpg-to-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "JPG to PDF", url: "/jpg-to-pdf" }]} />
        <ToolHero
          icon="📄"
          title="Convert JPG to PDF Online Free — Fast and Professional"
          description="Transform your JPG/JPEG images into high-quality PDF documents instantly. Perfect for combining multiple photos into a single professional document."
          badge="Free · Instant · Secure"
        />
        <ImagesToPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="JPG to PDF"
        title="Convert JPG to PDF Online Free — Streamline Your Digital Documents"
        description="Whether you need to combine several photos for a portfolio or turn a scanned document into an official PDF, ShrinkBox provides the most reliable way to create professional PDF documents from your images. Our client-side conversion ensures your files are never uploaded, keeping your data 100% private."
        howToSteps={[
          "Select or drag & drop your JPG/JPEG images into the secure local converter.",
          "Arrange the images in the desired order by dragging and dropping them before processing.",
          "Choose your preferred page orientation (Portrait or Landscape) and margin settings.",
          "Download your perfectly formatted, single PDF document instantly to your device."
        ]}
      >
        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[0.95rem]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">⚡</span> Why JPG to PDF is Essential
              </h3>
              <p>
                While JPEGs are the gold standard for high-fidelity photography, they lack the structural reliability of the Portable Document Format (PDF). A single PDF file is significantly easier to share via email, upload to official portals, and ensures that the layout of your images remains identical across every device, from smartphones to professional print stations.
              </p>
              <p className="mt-4">
                By converting your JPGs to PDF, you transition from 'viewing a photo' to 'reading a document.' This is crucial for legal submissions, job applications, and formal report sharing where presentation is as important as the content itself.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🔒</span> Security: Local Device Conversion
              </h3>
              <p>
                Unlike traditional online converters that require you to upload your personal photos to a remote cloud server, ShrinkBox operates entirely inside your web browser. Using modern WebAssembly and JavaScript APIs, we containerize your images locally.
              </p>
              <p className="mt-4">
                This 'Browser-Side' approach means your sensitive documents—like passports, receipts, or personal IDs—never touch our infrastructure. It is the highest standard of privacy available on the web today.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="text-xl font-bold text-foreground mb-4">Technical Containerization vs. Re-compression</h3>
            <p>
              Many converters degrade image quality by 'optimizing' your photos during the PDF creation process. ShrinkBox treats each JPG as a raw data stream, wrapping it in a PDF object without recalculating the pixels unless you explicitly ask for compression. This preserves the original DPI and color profile of your photography, ensuring that what you see in the JPG is exactly what you get in the PDF.
            </p>
          </div>

          <div className="bg-brand-light/20 p-8 rounded-3xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-3 italic">Pro Tip: Mastering Multi-Page Documents</h3>
            <p className="text-sm">
              If you are building a professional portfolio, ensure your JPGs are all the same aspect ratio before conversion. This results in a much cleaner PDF layout where each page fills the frame consistently. If your images are high-resolution, consider using our 'Compress JPG' tool beforehand to ensure the final PDF remains under common 20MB email attachment limits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Business Use</p>
              <p className="text-xs">Combine receipts, invoices, and reports into a single, signable PDF document for accounting.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Academic Use</p>
              <p className="text-xs">Merge handwritten assignment photos into a single PDF submission for Canvas or Google Classroom.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Creative Use</p>
              <p className="text-xs">Turn high-res design exports into a clean, paginated digital lookbook for client review.</p>
            </div>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Conversion","Tools"]} />
    </>
  );
}
