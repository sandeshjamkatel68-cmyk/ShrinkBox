import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["convert-png-to-webp"].title,
  description: TOOL_META["convert-png-to-webp"].description,
  keywords:    TOOL_META["convert-png-to-webp"].keywords,
  openGraph: {
    title:       TOOL_META["convert-png-to-webp"].title,
    description: TOOL_META["convert-png-to-webp"].description,
    url:         "https://shrink-box.com/convert-png-to-webp",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
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
      
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Why convert PNG to WebP?</h2>
        <p>
          PNG is widely loved for its ability to handle transparent backgrounds (alpha channels) perfectly, but it's notorious for generating massive file sizes. WebP solves this problem completely. Unlike JPEG, WebP explicitly supports transparency, meaning you can convert your transparent PNG logos, illustrations, and graphic assets into WebP and see an immediate 30% file size reduction without losing the transparent background.
        </p>
        <p>
          Our PNG to WebP converter runs securely in your browser. This offline capability allows designers and developers to bulk-convert heavy assets instantly without being throttled by cloud upload limits. Just drag your files in, and ShrinkBox will intelligently encode them into pristine WebP format.
        </p>
      </section>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
