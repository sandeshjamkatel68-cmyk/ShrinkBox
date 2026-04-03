import { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["compress-jpg"].title,
  description: TOOL_META["compress-jpg"].description,
  keywords:    TOOL_META["compress-jpg"].keywords,
  openGraph: {
    title:       TOOL_META["compress-jpg"].title,
    description: TOOL_META["compress-jpg"].description,
    url:         "https://shrink-box.com/compress-jpg",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-jpg"].title,
    description: TOOL_META["compress-jpg"].description,
  },
  alternates: {
    canonical: "/compress-jpg",
  },
};

const FAQ_ITEMS = [
  { q: "How much can I compress a JPG file?", a: "Most JPEGs can be compressed by 40-70% without any noticeable loss in visual quality. High-resolution photos from cameras usually see the biggest savings when optimized for web use." },
  { q: "Is JPG compression lossy or lossless?", a: "JPG is a lossy format, meaning it removes some data to reduce size. However, our 'Low' and 'Medium' settings are tuned to remove data that is invisible to the human eye, ensuring your photos still look professional." },
  { q: "Will my JPEG images still work on all devices?", a: "Yes. Our compressor outputs standard-compliant JPEG/JPG files that work perfectly on all websites, smartphones, social media platforms, and printing services." },
  { q: "Does ShrinkBox store my photos?", a: "No. Your privacy is our priority. All compression happens locally in your browser. Your images are never uploaded to our servers and are never stored anywhere." },
];

export default function CompressJpgPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compress JPG", url: "/compress-jpg" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Compress JPG", url: "/compress-jpg" }]} />
        <ToolHero
          icon="📉"
          title="Compress JPG Online Free — High-Quality JPEG Optimizer"
          description="Reduce JPG file size instantly in your browser. Our professional-grade compressor optimizes your JPEG images for faster loading and better web performance."
          badge="Free · Instant · Private"
        />
        <CompressorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="Compress JPG"
        title="Compress JPG Online Free — The Best Way to Optimize Web Photos"
        description="JPEG optimization is the key to a fast website. ShrinkBox provides a secure, locally-processed tool to compress your JPG files without sacrificing the visual clarity your brand needs."
        howToSteps={[
          "Upload your JPG or JPEG image by dragging it into the secure box above.",
          "Choose your preferred compression level: Low, Medium, or High.",
          "Review the estimated file size reduction and quality preview.",
          "Download your optimized JPG file instantly with zero wait time."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why you should compress JPGs before uploading</h3>
            <p>
              Uncompressed JPGs can be several megabytes each, which can triple your website's load time. Research shows that users abandon sites that take longer than 3 seconds to load. By using a professional JPG compressor, you provide a better user experience, reduce bounce rates, and improve your ranking on Google and other search engines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">100% Secure: Your Data Stays Local</h3>
            <p>
              Forget 'cloud' compressors that harvest your personal data. ShrinkBox uses modern browser technology to process your images **entirely on your computer**. No uploads, no server-side storage, and no risk to your privacy.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Metadata Stripping</h3>
            <p className="text-sm">
              Our tool automatically removes hidden EXIF metadata (like GPS location and camera settings) from your JPGs. This not only protects your privacy but also shaves off extra kilobytes from every file.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
