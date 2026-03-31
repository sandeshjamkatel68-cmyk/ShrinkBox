import type { Metadata } from "next";
import CompressSizeWidget from "./CompressSizeWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["compress-image-to-size"].title,
  description: TOOL_META["compress-image-to-size"].description,
  keywords:    TOOL_META["compress-image-to-size"].keywords,
  openGraph: {
    title:       TOOL_META["compress-image-to-size"].title,
    description: TOOL_META["compress-image-to-size"].description,
    url:         "https://shrink-box.com/compress-image-to-size",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-image-to-size"].title,
    description: TOOL_META["compress-image-to-size"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/compress-image-to-size`,
  },
};

const FAQ_ITEMS = [
  { q: "How do I compress an image to exactly 50KB?", a: "Simply upload your image, enter '50' in the target size field, and click compress. Our tool will automatically adjust the quality to stay under 50KB while maintaining the best possible clarity." },
  { q: "What images can I compress to a specific size?", a: "We support JPG, JPEG, and WebP formats for exact-size compression. PNG files are lossless and generally don't support target-size compression as effectively, so we recommend converting them to JPG first." },
  { q: "Is there a limit to how small I can compress?", a: "If you set a target size that is too low (e.g., 5KB for a high-res photo), the image may become pixelated. We recommend balancing size and quality for the best results." },
];

export default function CompressToSizePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-image-to-size"].title}
        description={TOOL_META["compress-image-to-size"].description}
        url={TOOL_META["compress-image-to-size"].url}
        category={TOOL_META["compress-image-to-size"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="📉" 
          title="Compress Image to KB" 
          description="Perfect for government forms, job applications, and student portals. Set your target file size in KB and we'll handle the rest." 
          badge="Exact Size · Free" 
        />
        <CompressSizeWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Why use Exact Size Compression?</h2>
        <p>
          Many online applications—especially for government services, visas, and educational portals—have strict file size limits (often 50KB, 100KB, or 200KB). Manual compression is a game of trial and error that can take forever. 
        </p>
        <p>
          ShrinkBox automates this process using a binary-search optimization algorithm. By repeatedly testing different quality levels in your browser's memory, we find the highest possible quality that still falls below your specified byte limit. No uploads, no waiting, and no guesswork.
        </p>
      </section>

      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
