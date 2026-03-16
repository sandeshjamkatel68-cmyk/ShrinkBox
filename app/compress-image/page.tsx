import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["compress-image"].title,
  description: TOOL_META["compress-image"].description,
  keywords:    TOOL_META["compress-image"].keywords,
  openGraph: {
    title:       TOOL_META["compress-image"].title,
    description: TOOL_META["compress-image"].description,
    url:         `https://shrink-box.comCompress Image Online`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-image"].title,
    description: TOOL_META["compress-image"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/compress-image`,
  },
};

const IMAGE_FAQ = [
  {
    q: "Does compressing an image reduce its quality?",
    a: "At 'Low' and 'Medium' settings, quality loss is minimal and typically invisible to the naked eye. 'High' compression produces the smallest file but may show subtle artifacts on close inspection.",
  },
  {
    q: "What's the difference between JPG, PNG, and WebP compression?",
    a: "JPGs use lossy compression and are best for photos. PNGs are lossless by default but we can reduce size by stripping metadata and optimizing the palette. WebP supports both and often achieves the best compression.",
  },
  {
    q: "Will my image dimensions change?",
    a: "No. We only reduce file size — your image dimensions stay exactly the same.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "Batch compression is coming in a future update. For now, compress one image at a time.",
  },
];

export default function CompressImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["compress-image"].title}
        description={TOOL_META["compress-image"].description}
        url={TOOL_META["compress-image"].url}
        category={TOOL_META["compress-image"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="🖼"
          title="Compress Image Online"
          description="Reduce JPG, PNG, and WebP file sizes instantly. Choose your compression level and download the result — no signup required."
          badge="Free · Instant · Private"
        />
        <CompressorWidget />
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={IMAGE_FAQ} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How image compression works</h2>
        <p>
          Our image compressor uses Sharp, a high-performance Node.js image processing library
          built on libvips. It re-encodes your image using optimized settings — stripping EXIF
          metadata, applying progressive encoding for JPEGs, and using maximum effort compression
          for WebP and PNG files.
        </p>
        <p>
          The result is a smaller file that looks visually identical at normal viewing sizes.
          This is the same technique used by CDNs and major image hosting services.
        </p>
      </section>
    </>
  );
}
