import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["convert-jpg-to-webp"].title,
  description: TOOL_META["convert-jpg-to-webp"].description,
  keywords:    TOOL_META["convert-jpg-to-webp"].keywords,
  openGraph: {
    title:       TOOL_META["convert-jpg-to-webp"].title,
    description: TOOL_META["convert-jpg-to-webp"].description,
    url:         `https://shrink-box.comConvert JPG to WebP`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-jpg-to-webp"].title,
    description: TOOL_META["convert-jpg-to-webp"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/convert-jpg-to-webp`,
  },
};

const FAQ_ITEMS = [
  { q: "How much smaller is WebP vs JPG?", a: "WebP is typically 25–40% smaller than JPEG at equivalent visual quality. This makes it excellent for web pages that need to load fast." },
  { q: "Should I replace all my JPGs with WebP?", a: "For web use, yes — WebP is better in almost every way. For compatibility with older software or sharing with non-web contexts, JPG is more universal." },
];

export default function JpgToWebpPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-jpg-to-webp"].title}
        description={TOOL_META["convert-jpg-to-webp"].description}
        url={TOOL_META["convert-jpg-to-webp"].url}
        category={TOOL_META["convert-jpg-to-webp"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🚀" title="Convert JPG to WebP" description="Convert JPEG images to modern WebP format. Smaller files, faster pages, same visual quality." badge="JPG → WebP · Free" />
        <ConvertImageWidget defaultTarget="webp" allowedSources=".jpg,.jpeg" />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
