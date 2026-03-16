import type { Metadata } from "next";
import ResizeImageWidget from "@/components/tools/ResizeImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META } from "@/lib/seo";

export const metadata: Metadata = {
  title:       TOOL_META["resize-image"].title,
  description: TOOL_META["resize-image"].description,
  keywords:    TOOL_META["resize-image"].keywords,
  openGraph: {
    title:       TOOL_META["resize-image"].title,
    description: TOOL_META["resize-image"].description,
    url:         `https://shrink-box.comResize Image Online`,
    siteName:    "ShrinkBox",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["resize-image"].title,
    description: TOOL_META["resize-image"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/resize-image`,
  },
};

const FAQ_ITEMS = [
  { q: "Can I resize without losing quality?", a: "For minor resizing, quality loss is minimal. For significant downscaling, quality is preserved. We never upscale images, as that would add no real detail." },
  { q: "What fit modes are available?", a: "Fit Inside keeps your image within the bounds without cropping. Cover fills the exact size but may crop edges. Contain adds padding to fit exactly. Stretch forces the exact size but may distort." },
  { q: "Does resizing change the file format?", a: "No. A JPG stays a JPG, a PNG stays a PNG. If you want to change format, use our Convert tool." },
];

export default function ResizeImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["resize-image"].title}
        description={TOOL_META["resize-image"].description}
        url={TOOL_META["resize-image"].url}
        category={TOOL_META["resize-image"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="📐" title="Resize Image Online" description="Set exact pixel dimensions or scale by percentage. Choose your fit mode and download instantly — no signup." badge="Free · Instant · Private" />
        <ResizeImageWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
