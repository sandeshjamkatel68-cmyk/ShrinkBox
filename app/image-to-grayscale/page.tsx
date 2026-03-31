import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import GrayscaleWidget from "@/app/image-to-grayscale/GrayscaleWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["image-to-grayscale"].title,
  description: TOOL_META["image-to-grayscale"].description,
  keywords:    TOOL_META["image-to-grayscale"].keywords,
  openGraph: {
    title:       TOOL_META["image-to-grayscale"].title,
    description: TOOL_META["image-to-grayscale"].description,
    url:         "https://shrink-box.com/image-to-grayscale",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: TOOL_META["image-to-grayscale"].title, description: TOOL_META["image-to-grayscale"].description },
  alternates: { canonical: "https://shrink-box.com/image-to-grayscale" },
};

const FAQ_ITEMS = [
  { q: "Does converting to grayscale reduce file size?", a: "Yes, slightly. Grayscale images contain less color information, which can reduce file size by 10-30% depending on the image content." },
  { q: "Can I convert back to color?", a: "No. Converting to grayscale permanently removes color information. Always keep your original file as a backup." },
  { q: "What formats are supported?", a: "JPG, PNG, and WebP images up to 10MB. The output keeps the same format as the input." },
  { q: "Is this the same as desaturation?", a: "Yes. Our grayscale conversion desaturates all colors equally, producing a true black-and-white image." },
];

export default function GrayscalePage() {
  return (
    <>
      <ToolSchema name={TOOL_META["image-to-grayscale"].title} description={TOOL_META["image-to-grayscale"].description} url={TOOL_META["image-to-grayscale"].url} category={TOOL_META["image-to-grayscale"].category} />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="⚫" title="Convert Image to Black & White" description="Convert any image to grayscale instantly. Keeps original format and quality. Supports JPG, PNG, and WebP." badge="Free · Instant · Private" />
        <GrayscaleWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How grayscale conversion works</h2>
        <p>Our converter uses Sharp to apply luminance-weighted grayscale conversion. Each pixel's RGB values are combined using the formula: 0.2126R + 0.7152G + 0.0722B, matching human perception of brightness. This produces natural-looking black and white images where skin tones, skies, and foliage appear as expected.</p>
        <p>The output maintains the original dimensions, format, and metadata. Grayscale images are widely used for document scanning, artistic photography, printing cost reduction, and creating professional-looking visual content.</p>
      </section>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
