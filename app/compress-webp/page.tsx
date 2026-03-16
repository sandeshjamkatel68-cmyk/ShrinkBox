import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["compress-webp"].title,
  description: TOOL_META["compress-webp"].description,
  keywords:    TOOL_META["compress-webp"].keywords,
  openGraph: {
    title:       TOOL_META["compress-webp"].title,
    description: TOOL_META["compress-webp"].description,
    url:         `https://shrink-box.comCompress WebP Online`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["compress-webp"].title,
    description: TOOL_META["compress-webp"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/compress-webp`,
  },
};

const FAQ_ITEMS = [
  { q: "Can WebP be compressed further?", a: "Yes. Even WebP images can be re-encoded at optimized settings to reduce size further, especially if they were exported at maximum quality." },
  { q: "Will compressing WebP affect transparency?", a: "No. Transparency (alpha channel) is preserved during WebP compression." },
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
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="⚙️" title="Compress WebP Online" description="Reduce WebP image file sizes instantly. Re-encode at optimized settings while keeping visual quality." badge="WebP · Free · Instant" />
        <CompressorWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
