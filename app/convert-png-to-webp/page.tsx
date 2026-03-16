import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["convert-png-to-webp"].title,
  description: TOOL_META["convert-png-to-webp"].description,
  keywords:    TOOL_META["convert-png-to-webp"].keywords,
  openGraph: {
    title:       TOOL_META["convert-png-to-webp"].title,
    description: TOOL_META["convert-png-to-webp"].description,
    url:         `https://shrink-box.comConvert PNG to WebP`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-png-to-webp"].title,
    description: TOOL_META["convert-png-to-webp"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/convert-png-to-webp`,
  },
};

const FAQ_ITEMS = [
  { q: "Why convert PNG to WebP?", a: "WebP files are typically 25–35% smaller than PNGs at similar quality. All modern browsers support WebP, making it the best format for web use." },
  { q: "Does WebP support transparency like PNG?", a: "Yes. WebP supports full alpha transparency, making it a direct replacement for PNG in web projects." },
  { q: "Is WebP supported everywhere?", a: "WebP is supported in all modern browsers including Chrome, Firefox, Safari (since 2020), and Edge. For older systems, stick with PNG." },
];

export default function PngToWebpPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-png-to-webp"].title}
        description={TOOL_META["convert-png-to-webp"].description}
        url={TOOL_META["convert-png-to-webp"].url}
        category={TOOL_META["convert-png-to-webp"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="⚡" title="Convert PNG to WebP" description="Convert PNG images to WebP for smaller file sizes with no visible quality loss. Perfect for web performance." badge="PNG → WebP · Free" />
        <ConvertImageWidget defaultTarget="webp" allowedSources=".png" />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
