import { Metadata } from "next";
import ColorPickerWidget from "./ColorPickerWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/color-picker",
  },
};

const FAQ_ITEMS = [
  { q: "How many dominant colors can I extract from one image?", a: "Our professional color analysis engine identifies and extracts the top 5 most dominant colors from any image. These are presented in a clean Pinterest-style palette for immediate design use." },
  { q: "Can I instantly copy HEX, RGB, or HSL codes?", a: "Yes. By clicking on any color in the generated palette, the standardized HEX code is instantly copied to your clipboard. We are working on adding multi-format support (RGB/HSL) in the next update." },
  { q: "Is there an image file size limit for color extraction?", a: "To ensure your browser remains responsive, we recommend uploading images under 15MB. Since we analyze pixel data locally, larger files may take a few extra seconds to process." },
  { q: "Are my design assets uploaded to your server?", a: "Never. ShrinkBox treats your creative assets with total respect. All color sampling and palette generation happen **locally in your web browser**. Your images are never uploaded or stored." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Color Picker", url: "/color-picker" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Color Picker", url: "/color-picker" }]} />
        <ToolHero 
          icon="🎨" 
          title="Image Color Picker Online Free — Professional Palette Generator" 
          description="Build stunning design systems in seconds. Extract dominant color palettes from any photograph or screenshot instantly and securely in your browser." 
          badge="Design · Free · Private" 
        />
        <ColorPickerWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Color Picker"
        title="Image Color Picker Online Free — The Faster Way to Design Palettes"
        description="Stop hunting for hex codes manually. ShrinkBox's Color Picker uses advanced pixel-sampling technology to generate harmonious color palettes from your images instantly."
        howToSteps={[
          "Select or drag & drop your reference photo into the secure local sampling zone.",
          "Our engine instantly scans the pixel array to identify dominant color frequencies.",
          "Check the generated 5-color palette for design harmony and contrast requirements.",
          "Download individual HEX codes or save the entire palette to your local machine."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why every designer needs a browser-side palette generator</h3>
            <p>
              Inspiration is everywhere. Whether it's a beautiful sunset or a high-end brand's landing page, capturing the exact mood requires an accurate color sampler. ShrinkBox provides a high-speed tool that doesn't require you to install heavy browser extensions or upload your design files to a cloud service. We handle the math locally, giving you the hex codes you need to start your project immediately.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Color Sampling</h3>
            <p>
              Your screenshots and design mockups are sensitive. ShrinkBox respects your privacy by performing the entire color extraction process **within your own browser**. Your images are never transmitted over the internet, making this the safest way to extract colors for high-security corporate design projects.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Sampler for Accessibility</h3>
            <p className="text-sm">
              Use our tool to extract background and foreground colors from your UI mockups. Check the resulting HEX codes in an accessibility validator to ensure your color palette meets WCAG AA or AAA contrast standards for better inclusive design.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Design", "Images"]} />
    </>
  );
}
