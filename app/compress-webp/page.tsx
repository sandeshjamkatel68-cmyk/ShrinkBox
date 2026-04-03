import { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["compress-webp"].title,
  description: TOOL_META["compress-webp"].description,
  keywords:    TOOL_META["compress-webp"].keywords,
  openGraph: {
    title:       TOOL_META["compress-webp"].title,
    description: TOOL_META["compress-webp"].description,
    url:         "https://shrink-box.com/compress-webp",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-webp"].title,
    description: TOOL_META["compress-webp"].description,
  },
  alternates: {
    canonical: "/compress-webp",
  },
};

const FAQ_ITEMS = [
  { q: "Can WebP images actually be compressed even further?", a: "Yes. WebP images are already highly optimized, but many creators export them at 100% quality, which leaves room for further reduction. ShrinkBox can re-encode these files at optimized quality settings (like 80-85%) without any perceptible loss in visual clarity, often saving an additional 30-50% in file size." },
  { q: "Will compressing a WebP image destroy my transparency?", a: "No. Our professional-grade compressor fully supports the WebP alpha channel. Your transparent backgrounds, soft shadows, and semi-transparent gradients will remain perfectly intact while the overall file footprint is reduced." },
  { q: "Is it better to compress WebP or convert to JPG?", a: "WebP is almost always superior. It supports both lossy and lossless compression while maintaining smaller file sizes than JPG at equivalent qualities. We recommend keeping your files in WebP format and using our optimizer to shave off every unnecessary byte." },
  { q: "Is my private imagery safe during the compression process?", a: "Absolutely. Your data never travels to a server. ShrinkBox performs the entire WebP re-encoding process **locally in your browser** using modern API standards, ensuring your creative assets stay on your device." },
];

export default function CompressWebpPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-webp"].title}
        description={TOOL_META["compress-webp"].description}
        url={TOOL_META["compress-webp"].url}
        category={TOOL_META["compress-webp"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress WebP", url: "/compress-webp" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Compress WebP", url: "/compress-webp" }]} />
        <ToolHero 
          icon="⚙️" 
          title="Compress WebP Online Free — Ultimate High-Performance Optimizer" 
          description="Optimize and reduce WebP image file sizes instantly in your browser. Re-encode at professional settings while keeping crystal-clear visual quality and full transparency support." 
          badge="WebP · Free · Private" 
        />
        <CompressorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Compress WebP"
        title="Compress WebP Online Free — Maximum Efficiency for the Modern Web"
        description="Even WebP images can be re-encoded at optimized settings to reduce size further. ShrinkBox handles all image pruning directly in your browser, ensuring your high-performance assets stay as light as possible while maintaining crystal-clear visual quality."
        howToSteps={[
          "Select or drag & drop your WebP image file into the secure local compressor zone.",
          "Our system performs a real-time structural analysis of the pixel data and metadata layers.",
          "Select your target quality level to perfectly balance file weight with visual fidelity.",
          "Download your polished, optimized WebP image file instantly to your local machine."
        ]}
      >
        <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[0.95rem]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🚀</span> The Final Frontier of Web Performance
              </h3>
              <p>
                WebP is already the 'gold standard' for web performance, but many automated export pipelines and CMS plugins produce files that are significantly larger than they need to be. By fine-tuning the compression parameters specifically for your unique content, you can reduce LCP (Largest Contentful Paint) times and improve your Core Web Vitals across the board.
              </p>
              <p className="mt-4">
                ShrinkBox provides a high-speed, secure sandbox to re-optimize your WebP assets, ensuring your site remains fast, responsive, and friendly to low-bandwidth mobile users. Our engine strips unnecessary metadata and prunes the bitstream for maximum efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-brand">🛡️</span> 100% Private: Local High-Speed Encoding
              </h3>
              <p>
                Your graphics and private photos are your property. ShrinkBox respects your intellectual property rights by performing the entire WebP re-encoding process **within your own web browser**. No binary data is ever transmitted to a remote server, fulfilling the strictest security requirements for professional software development.
              </p>
              <p className="mt-4">
                This 'Local-First' approach means you can optimize sensitive product mockups, internal dashboard screenshots, or personal photography without ever worrying about data leaks or third-party storage. 
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Understanding Lossy vs. Lossless WebP Compression</h3>
            <p>
              WebP offers a unique 'hybrid' compression model. While many tools only offer a single slider, ShrinkBox's underlying engine optimizes the predictive coding used in WebP's VP8-based frames. This allows us to find the 'sweet spot' where math-heavy reductions result in smaller files without introducing the blocky artifacts common in older formats like JPG. We prioritize the preservation of soft gradients and sharp text-on-image layers.
            </p>
          </div>

          <div className="bg-brand-light/20 p-8 rounded-3xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-3 italic">Pro Tip: Use for Bulk Website Updates</h3>
            <p className="text-sm">
              If you're migrating a legacy site to WebP, ensure you're not just 'converting' but also 'optimizing.' Running your batch through our compressor ensures that you're getting the best possible compression ratio available. For high-traffic sites, saving just 10KB per image can result in gigabytes of bandwidth savings over millions of pageviews, directly reducing your cloud hosting costs and carbon footprint.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Mobile Optimization</p>
              <p className="text-xs">Ensure your WebP hero images load instantly on slow 3G/4G mobile connections.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">E-commerce Speed</p>
              <p className="text-xs">Optimize product galleries to prevent cumulative layout shift and keep customers engaged.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-muted border border-border">
              <p className="font-bold text-foreground mb-2 text-sm uppercase tracking-tighter">Eco-Friendly Web</p>
              <p className="text-xs">Reduce the energy required to transmit and render your site by serving smaller assets.</p>
            </div>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats", "Images"]} />
    </>
  );
}
