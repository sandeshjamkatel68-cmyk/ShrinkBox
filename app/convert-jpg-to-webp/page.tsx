import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["convert-jpg-to-webp"].title,
  description: TOOL_META["convert-jpg-to-webp"].description,
  keywords:    TOOL_META["convert-jpg-to-webp"].keywords,
  openGraph: {
    title:       TOOL_META["convert-jpg-to-webp"].title,
    description: TOOL_META["convert-jpg-to-webp"].description,
    url:         "https://shrink-box.com/convert-jpg-to-webp",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
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
      
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Why convert JPG to WebP?</h2>
        <p>
          <a href="https://developers.google.com/speed/webp" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">WebP is a modern image format developed by Google</a> that provides superior lossless and lossy compression for web images. Compared to the older JPEG (JPG) format, WebP creates files that are typically 25% to 35% smaller at the exact same visual quality. This massive reduction in file size is critical for speeding up website loading times, improving Google Core Web Vitals, and reducing bandwidth costs.
        </p>
        <p>
          Using our zero-upload converter, your JPGs are transcoded into WebP locally via WebAssembly. This ensures that every conversion happens instantly on your own machine. We support advanced encoding parameters so that the resulting WebP file maintains the brilliant colors and sharp details of your original photograph.
        </p>
      </section>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
