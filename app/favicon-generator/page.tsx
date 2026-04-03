import { Metadata } from "next";
import FaviconWidget from "./FaviconWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["favicon-generator"].title,
  description: TOOL_META["favicon-generator"].description,
  keywords:    TOOL_META["favicon-generator"].keywords,
  openGraph: {
    title:       TOOL_META["favicon-generator"].title,
    description: TOOL_META["favicon-generator"].description,
    url:         "https://shrink-box.com/favicon-generator",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["favicon-generator"].title,
    description: TOOL_META["favicon-generator"].description,
  },
  alternates: {
    canonical: "/favicon-generator",
  },
};

const FAQ_ITEMS = [
  { q: "What sizes are included in the generated ZIP?", a: "Our professional packager includes all standard web sizes: 16x16 (favicon.ico), 32x32 (standard PNG), 180x180 (Apple Touch Icon), and 512x512 (Android/PWA Manifest). All these are compressed into a single downloadable ZIP file for easy deployment." },
  { q: "Should I upload a square image for the best result?", a: "Yes. For the most professional look, use a square source image (1:1 ratio). If your image is rectangular, our smart generator will automatically center-crop it to prevent distortion and ensure your logo looks perfect in the browser tab." },
  { q: "Does the generator support transparency?", a: "Absolutely. We fully support alpha channels in PNG and WebP files. Using a transparent source image is the best way to ensure your favicon looks seamless across all browser themes, including dark mode." },
  { q: "Are my logo files uploaded to a server?", a: "Never. ShrinkBox processes your brand assets entirely **within your web browser**. Your high-resolution logos never leave your machine, ensuring 100% privacy and protection for your intellectual property." },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["favicon-generator"].title}
        description={TOOL_META["favicon-generator"].description}
        url={TOOL_META["favicon-generator"].url}
        category={TOOL_META["favicon-generator"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Favicon Generator", url: "/favicon-generator" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Favicon Generator", url: "/favicon-generator" }]} />
        <ToolHero 
          icon="⭐" 
          title="Favicon Generator Online Free — Professional Web Icon Kit" 
          description="Create a complete set of browser icons from your logotype in seconds. Generate high-quality .ico and .png bundles for your web projects instantly." 
          badge="Design · Free · Private" 
        />
        <FaviconWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Favicon Generator"
        title="Favicon Generator Online Free — The Faster Way to Brand Your Web App"
        description="Don't spend hours resizing icons manually. ShrinkBox's Favicon Generator provides a high-speed, browser-based way to create all the essential icon sizes required by modern browsers and mobile devices."
        howToSteps={[
          "Select or drag & drop your high-resolution logo into the secure icon zone.",
          "Our system instantly generates multiple sizes and formats from your source file.",
          "Review the generated favicon.ico and high-resolution PNG variants in the preview.",
          "Download the complete, production-ready ZIP package to your local machine."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why every professional web project needs a comprehensive favicon set</h3>
            <p>
              In today's multi-device world, a simple 16x16 icon isn't enough. Users are viewing your site on high-resolution Retina displays, pinning shortcuts to their mobile home screens, and using various web manifests. ShrinkBox creates a unified icon kit that ensures your brand looks crisp and professional whether it's in a Chrome tab on Windows or an app shortcut on an iPhone.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local Brand Asset Processing</h3>
            <p>
              Your branding and intellectual property are sensitive. ShrinkBox respects your privacy by performing the entire icon generation and packaging process **within your own browser**. Your source logos are never transmitted to our servers, making this the safest way to generate assets for upcoming product launches and confidential client brands.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use SVG for Source</h3>
            <p className="text-sm">
              For the absolute sharpest results across all sizes, use a high-resolution PNG or SVG source. Since we downscale from your original, starting with a larger, clear image ensures that even the tiny 16x16 favicon.ico retains the core identity of your brand.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Design", "Tools"]} />
    </>
  );
}
