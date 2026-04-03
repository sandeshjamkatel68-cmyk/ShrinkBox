import { Metadata } from "next";
import SvgToPngWidget from "./SvgToPngWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
    canonical: "/svg-to-png",
  },
};

const FAQ_ITEMS = [
  { q: "Can I convert large or complex SVG files to PNG?", a: "Yes. Our high-performance renderer can handle SVG files of all complexities. By drawing your vector paths onto a high-resolution HTML5 canvas, we generate a pixel-perfect PNG version of your design instantly in your browser." },
  { q: "Will my transparent background be preserved?", a: "Absolutely. Our SVG to PNG converter fully respects the alpha channel of your vector data. If your SVG has a transparent background, the resulting PNG will also have professional-grade transparency for seamless use in web design." },
  { q: "How do I control the resolution of the output PNG?", a: "Currently, we render your SVG at its native defined dimensions. If your SVG is small, we recommend increasing its internal width and height values in a text editor before conversion to ensure a high-resolution raster output." },
  { q: "Is it secure to convert proprietary icons or logos?", a: "100%. ShrinkBox performs the entire rasterization process **locally in your web browser**. Your proprietary vector assets and source code never leave your machine, ensuring complete privacy for your brand assets." },
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "SVG to PNG", url: "/svg-to-png" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "SVG to PNG", url: "/svg-to-png" }]} />
        <ToolHero 
          icon="📐" 
          title="Convert SVG to PNG Online Free — Precision Vector Rasterizer" 
          description="Rasterize your vector SVG files into high-quality, transparent PNG images instantly. A secure, developer-friendly tool for turning code into icons and assets." 
          badge="SVG → PNG · Free · Private" 
        />
        <SvgToPngWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="SVG to PNG"
        title="SVG to PNG Online Free — The Better Way to Rasterize Vectors"
        description="Don't struggle with complex software just to get a simple image. ShrinkBox provides a high-speed, browser-based sandbox to transform your vector code into polished, web-ready PNG files instantly."
        howToSteps={[
          "Select or drag & drop your SVG file into the secure vector conversion zone.",
          "Our system instantly initializes a high-fidelity local canvas renderer.",
          "Check the generated PNG preview for clarity, transparency, and structure.",
          "Download your high-resolution PNG image file instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why SVG to PNG conversion is essential for modern designers</h3>
            <p>
              SVG (Scalable Vector Graphics) is the gold standard for icons and illustrations on the web because it never loses quality. However, many mission-critical applications—social media platforms, email clients, and legacy document editors—still require raster formats for compatibility. ShrinkBox provides a high-fidelity bridge, giving you the compatibility you need without ever leaving your browser or sacrificing the crispness of your original design.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local High-Fidelity Rendering</h3>
            <p>
              Your vector graphics and proprietary icons are your property. ShrinkBox respects your intellectual property by performing the entire rasterization process **within your own browser**. Your source code and design files are never transmitted to our servers, making this the safest way to convert assets for upcoming product launches and confidential brand projects.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Scaling Before Rasterizing</h3>
            <p className="text-sm">
              Since SVGs are code-based, you can often scale them to any size before conversion. For the sharpest PNG output, ensure your SVG's `viewBox` is correctly set and your `width`/`height` attributes reflect the target resolution you need for your final PNG image.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats", "Tools"]} />
    </>
  );
}
