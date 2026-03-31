import type { Metadata } from "next";
import Base64DecodeWidget from "./Base64DecodeWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["base64-to-image"].title,
  description: TOOL_META["base64-to-image"].description,
  keywords:    TOOL_META["base64-to-image"].keywords,
  openGraph: {
    title:       TOOL_META["base64-to-image"].title,
    description: TOOL_META["base64-to-image"].description,
    url:         "https://shrink-box.com/base64-to-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["base64-to-image"].title,
    description: TOOL_META["base64-to-image"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/base64-to-image`,
  },
};

const FAQ_ITEMS = [
  { q: "How do I decode Base64 to an image?", a: "Paste your Base64 encoded string into the text area. Our tool will instantly parse the data and show you a preview of the image, which you can then download with one click." },
  { q: "What Base64 formats are supported?", a: "We support standard Base64 data URIs (e.g., data:image/png;base64,...) as well as raw Base64 strings without the prefix." },
  { q: "Is it safe to paste my Base64 strings?", a: "Absolutely. The decoding happens directly in your browser's memory. We never send your strings to our server." },
];

export default function Base64ToImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["base64-to-image"].title}
        description={TOOL_META["base64-to-image"].description}
        url={TOOL_META["base64-to-image"].url}
        category={TOOL_META["base64-to-image"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🖼️" 
          title="Decode Base64 to Image" 
          description="Developer tool to instantly turn Base64 encoded strings back into viewable and downloadable image files." 
          badge="Base64 → Image · Free" 
        />
        <Base64DecodeWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <RelatedGuides tags={["Tools", "Images"]} />
    </>
  );
}
