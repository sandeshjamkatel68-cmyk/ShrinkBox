import { Metadata } from "next";
import Base64Widget from "./Base64Widget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/image-to-base64",
  },
};

const FAQ_ITEMS = [
  { q: "What is Base64 image encoding?", a: "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. Converting an image to Base64 allows you to embed the image data directly into HTML, CSS, or JSON files, effectively eliminating the need for separate HTTP requests for small assets." },
  { q: "When should I use Base64 instead of a file link?", a: "Base64 is ideal for small UI elements like icons, decorative shapes, or logos under 10KB. For larger photographs, standard file links are preferred because they can be cached by the browser individually, reducing overall page weight." },
  { q: "Does Base64 encoding increase the file size?", a: "Yes. Base64 encoded strings are typically about 33% larger than the original binary file. This is why it's critical to only use this method for tiny assets where the performance gain of reducing a round-trip request outweighs the extra byte count." },
  { q: "Is the conversion process secure for private assets?", a: "100%. ShrinkBox performs the entire encoding operation **locally in your web browser**. Your images are never uploaded to a server, ensuring that your private design assets and sensitive data remain entirely on your device." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Image to Base64", url: "/image-to-base64" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Image to Base64", url: "/image-to-base64" }]} />
        <ToolHero 
          icon="🔡" 
          title="Convert Image to Base64 Online Free — Developer Assets Toolkit" 
          description="Instantly encode images into clean Base64 strings for direct embedding in CSS, HTML, or JSON. Secure, fast, and 100% browser-based." 
          badge="Image → Base64 · Free · Private" 
        />
        <Base64Widget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Image to Base64"
        title="Image to Base64 Online Free — Optimize Your Web Assets"
        description="Streamline your development workflow by embedding assets directly. ShrinkBox's Image to Base64 converter provides a secure way to transform icons and logos into strings instantly."
        howToSteps={[
          "Select or drag & drop your small image file into the developer encoding zone.",
          "Our system instantly converts the binary data into a standardized ASCII string.",
          "Choose between raw Base64, Data URI (HTML), or CSS background-image format.",
          "Copy the resulting code to your clipboard for immediate use in your codebase."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why local Base64 encoding is essential for modern devops</h3>
            <p>
              In the quest for perfect Core Web Vitals, reducing the number of critical-path requests is a high-priority task. Embedding small assets as Base64 Data URIs can improve your Largest Contentful Paint (LCP) by delivering critical UI elements as part of the initial HTML or CSS payload. ShrinkBox provides a high-speed tool that handles the encoding locally, ensuring your development keys or sensitive assets never leave your local environment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Encoding Lab</h3>
            <p>
              Your design assets are your property. ShrinkBox respects your intellectual property by performing the entire encoding process **within your own browser**. No data is ever sent to a server, making this the safest way to convert assets for enterprise-level or confidential client projects.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Small SVGs</h3>
            <p className="text-sm">
              While Base64 works for all formats, it's particularly useful for small SVG icons. By converting an SVG to a Base64 Data URI, you can easily use it as a CSS `background-image` without worrying about cross-origin issues or managing external file paths in complex project structures.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Tools", "Design"]} />
    </>
  );
}
