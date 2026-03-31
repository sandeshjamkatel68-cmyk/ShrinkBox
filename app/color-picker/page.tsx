import type { Metadata } from "next";
import ColorPickerWidget from "./ColorPickerWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["color-picker"].title,
  description: TOOL_META["color-picker"].description,
  keywords:    TOOL_META["color-picker"].keywords,
  openGraph: {
    title:       TOOL_META["color-picker"].title,
    description: TOOL_META["color-picker"].description,
    url:         "https://shrink-box.com/color-picker",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["color-picker"].title,
    description: TOOL_META["color-picker"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/color-picker`,
  },
};

const FAQ_ITEMS = [
  { q: "How many colors does it extract?", a: "Our tool analyzes your image and extracts the 5 most dominant colors to create a professional design palette automatically." },
  { q: "Can I copy the HEX codes?", a: "Yes. Simply click on any color in the generated palette to instantly copy its HEX code to your clipboard." },
  { q: "Does the palette generator support all images?", a: "Yes. You can upload JPG, PNG, and WebP files. It works best with high-contrast images or colorful photography." },
];

export default function ColorPickerPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["color-picker"].title}
        description={TOOL_META["color-picker"].description}
        url={TOOL_META["color-picker"].url}
        category={TOOL_META["color-picker"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🎨" 
          title="Image Color Picker" 
          description="Extract dominant colors and generate beautiful palettes from your photos instantly in your browser." 
          badge="Design · Free" 
        />
        <ColorPickerWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <RelatedGuides tags={["Design", "Images"]} />
    </>
  );
}
