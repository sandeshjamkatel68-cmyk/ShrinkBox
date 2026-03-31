import type { Metadata } from "next";
import SvgToPngWidget from "./SvgToPngWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["svg-to-png"].title,
  description: TOOL_META["svg-to-png"].description,
  keywords:    TOOL_META["svg-to-png"].keywords,
  openGraph: {
    title:       TOOL_META["svg-to-png"].title,
    description: TOOL_META["svg-to-png"].description,
    url:         "https://shrink-box.com/svg-to-png",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["svg-to-png"].title,
    description: TOOL_META["svg-to-png"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/svg-to-png`,
  },
};

const FAQ_ITEMS = [
  { q: "Can I convert large SVG files?", a: "Yes. Our tool handles SVG files of all sizes by rendering them to a high-resolution PNG canvas directly in your browser." },
  { q: "Will the background be transparent?", a: "By default, we preserve the transparency of your SVG. The resulting PNG will have a transparent background wherever the SVG does." },
  { q: "Do I need to upload my SVG to a server?", a: "No. The entire conversion process happens locally on your computer. Your vector graphics stay private." },
];

export default function SvgToPngPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["svg-to-png"].title}
        description={TOOL_META["svg-to-png"].description}
        url={TOOL_META["svg-to-png"].url}
        category={TOOL_META["svg-to-png"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="📐" 
          title="Convert SVG to PNG" 
          description="Rasterize your vector SVG files into high-quality PNG images instantly and privately." 
          badge="SVG → PNG · Free" 
        />
        <SvgToPngWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">Vector to Raster Conversion</h2>
        <p>
          SVG (Scalable Vector Graphics) is the gold standard for icons and illustrations on the web because it never loses quality. However, many applications—social media, email clients, and document editors—only support raster formats like PNG.
        </p>
        <p>
          ShrinkBox provides a bridge. By drawing your vector paths onto a high-performance HTML5 canvas, we generate a pixel-perfect PNG version of your graphic. You get the compatibility you need without giving up the crispness of your original design.
        </p>
      </section>

      <RelatedGuides tags={["Formats", "Tools"]} />
    </>
  );
}
