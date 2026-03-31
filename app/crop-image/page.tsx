import type { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import CropImageWidget from "@/app/crop-image/CropImageWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["crop-image"].title,
  description: TOOL_META["crop-image"].description,
  keywords:    TOOL_META["crop-image"].keywords,
  openGraph: {
    title:       TOOL_META["crop-image"].title,
    description: TOOL_META["crop-image"].description,
    url:         "https://shrink-box.com/crop-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["crop-image"].title,
    description: TOOL_META["crop-image"].description,
  },
  alternates: {
    canonical: "https://shrink-box.com/crop-image",
  },
};

const FAQ_ITEMS = [
  { q: "Can I crop to a specific aspect ratio?", a: "Yes — set the width and height to your desired ratio (e.g. 1080×1080 for a square, 1920×1080 for 16:9). The crop area starts from the top-left coordinates you specify." },
  { q: "Will cropping reduce image quality?", a: "No. Cropping extracts the specified region from your original image without re-compressing it. The cropped area retains its original quality." },
  { q: "What file formats are supported?", a: "JPG, JPEG, PNG, and WebP images up to 10MB." },
  { q: "Can I preview the crop before downloading?", a: "Currently you set pixel coordinates manually. We show the output dimensions before you crop so you know exactly what you'll get." },
];

export default function CropImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["crop-image"].title}
        description={TOOL_META["crop-image"].description}
        url={TOOL_META["crop-image"].url}
        category={TOOL_META["crop-image"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="✂️"
          title="Crop Image Online"
          description="Crop any image to exact pixel dimensions. Set coordinates, preview the output size, and download instantly — no signup required."
          badge="Free · Instant · Private"
        />
        <CropImageWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">How online image cropping works</h2>
        <p>
          Our image cropper uses Sharp, a high-performance server-side image processing library. You specify the crop
          region using pixel coordinates (left, top, width, height), and Sharp extracts that exact region from your
          original image without any quality loss.
        </p>
        <p>
          This is useful for removing unwanted borders, creating square thumbnails for social media, or extracting a
          specific section from a larger image. The output retains the original format and quality settings.
        </p>
      </section>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
