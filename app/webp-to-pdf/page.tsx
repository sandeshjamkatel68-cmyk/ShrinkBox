import { Metadata } from "next";
import ImagesToPdfWidget from "@/app/images-to-pdf/ImagesToPdfWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["webp-to-pdf"].title,
  description: TOOL_META["webp-to-pdf"].description,
  keywords:    TOOL_META["webp-to-pdf"].keywords,
  openGraph: {
    title:       TOOL_META["webp-to-pdf"].title,
    description: TOOL_META["webp-to-pdf"].description,
    url:         "https://shrink-box.com/webp-to-pdf",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["webp-to-pdf"].title,
    description: TOOL_META["webp-to-pdf"].description,
  },
  alternates: {
    canonical: "/webp-to-pdf",
  },
};

const FAQ_ITEMS = [
  { q: "Is WebP to PDF conversion possible without quality loss?", a: "Yes. Our professional converter supports WebP images and converts them directly to PDF without re-compressing them. This ensures that every detail of your high-fidelity WebP images is perfectly preserved in the final document." },
  { q: "Can I combine multiple WebP files into a single PDF document?", a: "Absolutely. You can upload up to 20 WebP images and merge them into one organized PDF file. For best results, we recommend arranging them in the desired order before generating the document." },
  { q: "Does your tool support animated WebP files?", a: "Our converter treats animated WebP images as static frames. If you have an animated WebP, only the first frame will be converted and included in the output PDF document." },
  { q: "Are my WebP images stored on your servers?", a: "No. Your privacy is our priority. ShrinkBox uses high-performance browser-side technology to convert your WebP images to PDF entirely on your own device. No data is ever uploaded." },
];

export default function WebpToPdfPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "WebP to PDF", url: "/webp-to-pdf" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "WebP to PDF", url: "/webp-to-pdf" }]} />
        <ToolHero
          icon="🖼️"
          title="Convert WebP to PDF Online Free — Modern Format to Document"
          description="Transform your high-performance WebP images into high-quality PDF documents instantly. Perfect for portfolios and documents with modern visual assets."
          badge="Free · Instant · Secure"
        />
        <ImagesToPdfWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="WebP to PDF"
        title="Convert WebP to PDF Online Free — Fast and Professional Results"
        description="Need to turn your web-ready WebP graphics into a professional document? ShrinkBox provides the most reliable way to convert your WebP files to PDF while maintaining high fidelity. Our advanced client-side processing keeps your images private and your workflow lightning-fast."
        howToSteps={[
          "Select or drag & drop your WebP files into the secure local converter zone.",
          "Arrange the images in the desired order by dragging and dropping them before conversion.",
          "Select your preferred page orientation (Portrait or Landscape) and formatting options.",
          "Download your perfectly formatted, single PDF document instantly to your local storage."
        ]}
      >
        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[0.95rem]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🌐</span> Bridging Web Standards and Documents
              </h3>
              <p>
                WebP is the modern standard for fast loading on the internet, optimized for the lowest possible byte-weights. However, it's not a universal format for sharing professional documents, contracts, or high-end portfolios. By converting your WebP assets to PDF, you ensure that they can be viewed, shared, and archived by anyone, on any platform, while maintaining incredible visual quality.
              </p>
              <p className="mt-4">
                ShrinkBox makes this transition seamless. We take your high-performance web images and encapsulate them into a standard Portable Document Format, making them ready for email attachments, corporate Slack channels, and official project handoffs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🛡️</span> Zero-Upload Privacy Guarantee
              </h3>
              <p>
                Your graphics and private images stay on your device. ShrinkBox respects your data privacy by performing the entire WebP to PDF conversion **entirely in your web browser**. No binary data is ever transmitted to a remote server for processing.
              </p>
              <p className="mt-4">
                By leveraging modern browser-side processing, we eliminate the security risks associated with traditional online converters. Whether you're a government contractor or a solo creator, your sensitive visual data is safe with our 'local-first' architecture.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="text-xl font-bold text-foreground mb-4">Technical Integrity: Lossless Containerization</h3>
            <p>
              Our conversion engine doesn't just 'take a screenshot' of your WebP. It performs a precise structural mapping, wrapping the compressed bitstream of your WebP image inside a standard PDF XObject. This means there is **zero quality loss** during the conversion process. The color accuracy, sharpness, and metadata of your original file are preserved exactly as they were, just inside a more versatile document container.
            </p>
          </div>

          <div className="bg-brand-light/20 p-8 rounded-3xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-3 italic">Pro Tip: Streamlining Web Portfolios</h3>
            <p className="text-sm">
              If your current portfolio website uses WebP for performance, you can quickly turn those same optimized assets into a professional PDF lookbook for offline viewing. This ensures high-speed loading on the web and high-fidelity presentation during client meetings where internet access might be limited.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Marketing Assets</p>
              <p className="text-xs">Turn web-optimized banners and graphics into a single pitch deck PDF for stakeholders.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Legal Documentation</p>
              <p className="text-xs">Convert WebP screenshots of website evidence into a stable, court-ready PDF format.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Project Archives</p>
              <p className="text-xs">Consolidate diverse web assets into a single paginated archive for long-term storage.</p>
            </div>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Conversion","Tools"]} />
    </>
  );
}
