import { Metadata } from "next";
import Base64DecodeWidget from "./Base64DecodeWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/base64-to-image",
  },
};

const FAQ_ITEMS = [
  { q: "How do I turn a Base64 string back into an image?", a: "Simply paste your Base64 encoded string (with or without the data:image prefix) into the text input area. Our decoder instantly parses the binary representation and generates a full-resolution image preview that you can save to your device." },
  { q: "What types of Base64 strings are supported?", a: "We support all standard web-ready Base64 formats, including Data URIs for PNG, JPG, WebP, SVG, and GIF. Whether it comes from a CSS file, a JSON API response, or an HTML tag, we can decode it." },
  { q: "Can I decode very long Base64 strings?", a: "Yes. Our browser-based decoder is highly optimized and can handle large strings efficiently. However, extremely large images (over 20MB) may take a few seconds to render depending on your computer's RAM." },
  { q: "Is it secure to paste private image data into the decoder?", a: "Absolutely. ShrinkBox performs the entire decoding process **locally in your web browser**. Your sensitive Base64 strings never leave your machine, ensuring total privacy for your internal development and private documents." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Base64 to Image", url: "/base64-to-image" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Base64 to Image", url: "/base64-to-image" }]} />
        <ToolHero 
          icon="🖼️" 
          title="Base64 to Image Online Free — Developer Assets Decoder" 
          description="Instantly transform Base64 encoded strings back into downloadable image files. A secure, high-speed tool for developers and designers to preview and extract web assets." 
          badge="Base64 → Image · Free · Private" 
        />
        <Base64DecodeWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Base64 to Image"
        title="Base64 to Image Online Free — Extract Assets Instantly"
        description="Recover your image assets from code. ShrinkBox's Base64 to Image decoder provides a fast, browser-based way to turn data strings back into polished JPG, PNG, and SVG files."
        howToSteps={[
          "Paste your Base64 encoded string or Data URI into the secure input zone.",
          "Our internal decoder instantly parses the ASCII text back into binary pixel data.",
          "Check the generated image preview for resolution, transparency, and quality.",
          "Download your restored image file instantly to your local machine with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why local Base64 decoding is a development necessity</h3>
            <p>
              When auditing a legacy codebase or inspecting a complex JSON response, you often encounter hardcoded images as Base64 strings. Manually reconstructing these into files can be tedious. ShrinkBox provides an instant sandbox to visualize these assets without needing to set up a local development environment. Because we decode everything locally, we bridge the gap between abstract code and visual reality in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Recovery Zone</h3>
            <p>
              Your data security is non-negotiable. ShrinkBox respects your privacy by performing the entire restoration process **within your own browser's memory**. Your strings are never transmitted to our servers, making this the safest way to preview and recover assets from high-security enterprise databases and internal Slack/Discord channels.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Debugging CSS</h3>
            <p className="text-sm">
              If your CSS `background-image` isn't rendering correctly, paste the string into our decoder. We'll tell you immediately if the Base64 format is valid and show you exactly what the browser is seeing, saving you hours of trial-and-error debugging.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Tools", "Images"]} />
    </>
  );
}
