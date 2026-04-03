import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import WebpToJpgWidget from "./WebpToJpgWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["convert-webp-to-jpg"].title,
  description: TOOL_META["convert-webp-to-jpg"].description,
  keywords:    TOOL_META["convert-webp-to-jpg"].keywords,
  openGraph: {
    title:       TOOL_META["convert-webp-to-jpg"].title,
    description: TOOL_META["convert-webp-to-jpg"].description,
    url:         "https://shrink-box.com/convert-webp-to-jpg",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-webp-to-jpg"].title,
    description: TOOL_META["convert-webp-to-jpg"].description,
  },
  alternates: {
    canonical: "/convert-webp-to-jpg",
  },
};

const FAQ_ITEMS = [
  { q: "Why would I need to convert a modern WebP file to JPG?", a: "While WebP is excellent for web performance, it is not universally supported by all legacy image editors, older email clients, and some printing services. Converting to JPG ensures that your image can be opened and used on any device or software, regardless of age." },
  { q: "Will the quality of my image decrease during conversion?", a: "Both WebP and JPG are lossy formats. However, by using our professional-grade Sharp engine at 90-100% quality, any reduction in clarity is virtually impossible to detect with the naked eye. Your images will remain sharp and vibrant." },
  { q: "Can I convert multiple WebP files to JPG at once?", a: "Currently, this specialized tool is optimized for high-fidelity single-file conversion. This ensures that each image gets the full processing power of your browser for the fastest possible results without memory issues." },
  { q: "Is it safe to convert my private photos using this tool?", a: "Absolutely. ShrinkBox is built on a **privacy-first architecture**. The entire WebP to JPG conversion happens locally within your own browser. Your photos are never uploaded to a cloud server, ensuring your personal data stays on your machine." },
];

export default function WebpToJpgPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-webp-to-jpg"].title}
        description={TOOL_META["convert-webp-to-jpg"].description}
        url={TOOL_META["convert-webp-to-jpg"].url}
        category={TOOL_META["convert-webp-to-jpg"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "WebP to JPG", url: "/convert-webp-to-jpg" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "WebP to JPG", url: "/convert-webp-to-jpg" }]} />
        <ToolHero 
          icon="⚡→📸" 
          title="Convert WebP to JPG Online Free — Universal Compatibility Tool" 
          description="Transform modern WebP images into widely supported JPG format instantly. Perfect for legacy software, old browsers, and professional printing services with zero privacy risk." 
          badge="WebP → JPG · Free · Private" 
        />
        <WebpToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="WebP to JPG"
        title="WebP to JPG Online Free — Solve Compatibility Issues Instantly"
        description="Don't let modern formats stop your workflow. ShrinkBox provides a high-speed, secure way to bridge the gap between WebP performance and JPG's universal support."
        howToSteps={[
          "Select or drag & drop your WebP image into the local conversion zone.",
          "Our system instantly initializes a high-performance browser-based transcoder.",
          "Adjust the output JPG quality to match your specific project requirements.",
          "Download your high-compatibility JPG image file immediately with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">The Bridge Between Performance and Compatibility</h3>
            <p>
              WebP is Google's modern image format that offers incredible compression for the web, but it isn't yet 'everywhere.' Many professional design tools, older operating systems, and specialized medical or legal software still require the standard JPG format. ShrinkBox allows you to harness the storage benefits of WebP while retaining the ability to quickly 'downgrade' to JPG whenever a specific platform demands it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Bank-Level Privacy: No Cloud Uploads</h3>
            <p>
              Your images are your property. Most 'free' online converters require you to upload your sensitive photos to their cloud, where they could be stored or indexed. ShrinkBox uses **WebAssembly** to process your files directly on your computer. This means zero data transfer to our servers and the highest level of security for your creative work and personal memories.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Preserving Color Accuracy</h3>
            <p className="text-sm">
              If your WebP image has a specific color profile (like sRGB or P3), our converter will attempt to maintain that fidelity during the JPG transition. For the most accurate results for print, always use the 100% quality setting to minimize JPG encoding artifacts.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats", "Images"]} />
    </>
  );
}
