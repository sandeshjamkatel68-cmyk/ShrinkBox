import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["reduce-jpg-size"].title,
  description: TOOL_META["reduce-jpg-size"].description,
  keywords:    TOOL_META["reduce-jpg-size"].keywords,
  openGraph: {
    title:       TOOL_META["reduce-jpg-size"].title,
    description: TOOL_META["reduce-jpg-size"].description,
    url:         `https://shrink-box.comReduce JPG Size Online`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["reduce-jpg-size"].title,
    description: TOOL_META["reduce-jpg-size"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/reduce-jpg-size`,
  },
};

const JPG_FAQ = [
  {
    q: "How do I reduce a JPG file size without losing quality?",
    a: "Use 'Low' compression mode. It re-encodes the JPEG at a high quality setting while stripping metadata like GPS coordinates and camera info, typically saving 20–35% with no visible difference.",
  },
  {
    q: "What's the best JPG quality setting for web?",
    a: "80–85% quality is the sweet spot for web images — visually lossless at normal screen sizes, with significantly smaller file sizes than the original.",
  },
  {
    q: "Does compressing a JPG multiple times degrade quality?",
    a: "Yes — each JPEG re-encode introduces a small amount of additional loss. For best results, compress once from your original file.",
  },
];

export default function ReduceJpgPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["reduce-jpg-size"].title}
        description={TOOL_META["reduce-jpg-size"].description}
        url={TOOL_META["reduce-jpg-size"].url}
        category={TOOL_META["reduce-jpg-size"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="📸"
          title="Reduce JPG File Size"
          description="Compress JPEG images online without visible quality loss. Strip EXIF data, apply progressive encoding, and download instantly."
          badge="JPG · JPEG · Free"
        />
        <CompressorWidget />
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={JPG_FAQ} />
      </section>
    </>
  );
}
