import type { Metadata } from "next";
import Base64Widget from "./Base64Widget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";
import { ToolSchema, TOOL_META } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";

export const metadata: Metadata = {
  title:       TOOL_META["image-to-base64"].title,
  description: TOOL_META["image-to-base64"].description,
  keywords:    TOOL_META["image-to-base64"].keywords,
  openGraph: {
    title:       TOOL_META["image-to-base64"].title,
    description: TOOL_META["image-to-base64"].description,
    url:         "https://shrink-box.com/image-to-base64",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["image-to-base64"].title,
    description: TOOL_META["image-to-base64"].description,
  },
  alternates: {
    canonical: `https://shrink-box.com/image-to-base64`,
  },
};

const FAQ_ITEMS = [
  { q: "What is a Base64 image?", a: "Base64 is a binary-to-text encoding scheme. Converting an image to Base64 allows you to embed the image data directly into HTML or CSS files, which can improve page load performance by reducing HTTP requests." },
  { q: "When should I use Base64?", a: "Base64 is best for small icons, simple graphics, or logos under 10KB. For large photos, standard image files are better for browser caching." },
  { q: "Is the conversion secure?", a: "Yes. The encoding happens entirely within your web browser using JavaScript. No binary data is sent to our servers." },
];

export default function ImageToBase64Page() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["image-to-base64"].title}
        description={TOOL_META["image-to-base64"].description}
        url={TOOL_META["image-to-base64"].url}
        category={TOOL_META["image-to-base64"].category}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero 
          icon="🔡" 
          title="Convert Image to Base64" 
          description="Developer tool to instantly encode images into Base64 strings for embedding in HTML, CSS, or JSON." 
          badge="Image → Base64 · Free" 
        />
        <Base64Widget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <RelatedGuides tags={["Tools", "Images"]} />
    </>
  );
}
