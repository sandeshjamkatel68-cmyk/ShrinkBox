import { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["compress-png"].title,
  description: TOOL_META["compress-png"].description,
  keywords:    TOOL_META["compress-png"].keywords,
  openGraph: {
    title:       TOOL_META["compress-png"].title,
    description: TOOL_META["compress-png"].description,
    url:         "https://shrink-box.com/compress-png",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-png"].title,
    description: TOOL_META["compress-png"].description,
  },
  alternates: {
    canonical: "/compress-png",
  },
};

const FAQ_ITEMS = [
  { q: "Is PNG compression truly lossless?", a: "By default, our PNG compressor uses lossless optimization, which removes binary bloat and metadata without changing a single pixel. We also offer a 'High' mode that uses lossy color indexing for much smaller files where absolute fidelity isn't the priority." },
  { q: "Will my PNG transparency be kept after compression?", a: "Yes. Our optimizer is built to handle multiple types of transparency (alpha channels). Whether it's a simple logo or a complex UI element, your transparency remains 100% intact." },
  { q: "How much file size can I save with a PNG compressor?", a: "Typically, you can save 20-50% on standard PNGs. For images with fewer colors (like screenshots or diagrams), saving up to 80% is possible using our advanced indexing features." },
  { q: "Why should I use PNG instead of JPG?", a: "PNG is better for images with text, logos with transparency, or screenshots where you need sharp edges and no compression artifacts. Use our PNG compressor to keep those files small and fast." },
];

export default function CompressPngPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress PNG", url: "/compress-png" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Compress PNG", url: "/compress-png" }]} />
        <ToolHero
          icon="📊"
          title="Compress PNG Online Free — Lossless PNG Optimization"
          description="Reduce PNG file size instantly in your browser without losing transparency or sharpness. Our professional-grade optimizer strips metadata and optimizes internal zlib chunks."
          badge="Free · Instant · Private"
        />
        <CompressorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="Compress PNG"
        title="Compress PNG Online Free — The Best Professional PNG Reducer"
        description="Preserve your transparency and sharpness while shrinking your PNG files. ShrinkBox uses high-performance browser technology to optimize your graphics for the modern web."
        howToSteps={[
          "Select or drag & drop your PNG file into the secure compressor area.",
          "Our system instantly analyzes the color depth and binary structure.",
          "Check the file size and preview the document structure.",
          "Download your optimized, high-fidelity PNG file instantly."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you should optimize your PNGs before deployment</h3>
            <p>
              PNGs are famous for their quality, but they are also famous for being uncomfortably large. This makes them a bottleneck for website performance. By compressing your PNGs, you can keep the crisp edges and clear transparency your brand needs while ensuring your pages load fast enough to keep your visitors happy and your SEO score high.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Security: Local PNG Compression</h3>
            <p>
              Your graphics and screenshots are private. ShrinkBox respects that by performing all optimization **locally in your browser**. We never upload your images to our servers, providing the security of a desktop app with the convenience of a web tool.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Try Our Heic to JPG Converter</h3>
            <p className="text-sm">
              If your images are coming from an iPhone and you want the smallest possible file sizes, try our 'HEIC to JPG' converter first, and then run the resulting JPG through our compressor for maximum efficiency.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
