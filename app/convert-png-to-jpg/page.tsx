import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import PngToJpgWidget from "@/app/convert-png-to-jpg/PngToJpgWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["convert-png-to-jpg"].title,
  description: TOOL_META["convert-png-to-jpg"].description,
  keywords:    TOOL_META["convert-png-to-jpg"].keywords,
  openGraph: {
    title:       TOOL_META["convert-png-to-jpg"].title,
    description: TOOL_META["convert-png-to-jpg"].description,
    url:         "https://shrink-box.com/convert-png-to-jpg",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-png-to-jpg"].title,
    description: TOOL_META["convert-png-to-jpg"].description,
  },
  alternates: {
    canonical: "/convert-png-to-jpg",
  },
};

const FAQ_ITEMS = [
  { q: "What happens to the transparency in my PNG after conversion?", a: "JPG does not support alpha channels (transparency). Our professional converter will replace all transparent areas with a clean, high-contrast white background in the resulting JPG file, ensuring your subject remains distinct." },
  { q: "Will the file size actually decrease when converting to JPG?", a: "Yes, almost always. PNG is a lossless format, while JPG uses sophisticated lossy compression. For photographic content or complex graphics, you can expect a file size reduction of 50-80% without any perceptible loss in visual clarity." },
  { q: "What is the best quality setting for a PNG to JPG conversion?", a: "We recommend a setting of 85-90% for most web uses. This provides a massive reduction in file weight while maintaining the sharp edges and vivid colors of your original PNG asset." },
  { q: "Is my personal data safe during the transcoding process?", a: "100%. ShrinkBox performs the entire image conversion **locally in your web browser**. Your high-resolution PNGs never touch our servers, meaning your private graphics and screenshots stay entirely on your device." },
];

export default function PngToJpgPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-png-to-jpg"].title}
        description={TOOL_META["convert-png-to-jpg"].description}
        url={TOOL_META["convert-png-to-jpg"].url}
        category={TOOL_META["convert-png-to-jpg"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "PNG to JPG", url: "/convert-png-to-jpg" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "PNG to JPG", url: "/convert-png-to-jpg" }]} />
        <ToolHero 
          icon="🔄" 
          title="Convert PNG to JPG Online Free — High-Speed Batch Transcoder" 
          description="Instantly transform your PNG graphics into universally compatible JPG files. Optimize for web performance and social media sharing with professional quality control." 
          badge="PNG → JPG · Free · Private" 
        />
        <PngToJpgWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="PNG to JPG"
        title="Convert PNG to JPG Online Free — The Faster Way to Optimize for Web"
        description="Don't let large PNG files slow down your website. ShrinkBox provides a secure, browser-based environment to convert your high-fidelity graphics into web-ready JPEGs instantly."
        howToSteps={[
          "Select or drag & drop your PNG image file into the secure local converter.",
          "Our system will instantly analyze the pixel structure and transparency layers.",
          "Adjust the JPG quality slider to balance file weight with visual fidelity.",
          "Download your optimized, universally compatible JPG file to your local machine."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why PNG to JPG conversion is essential for site performance</h3>
            <p>
              PNG is the gold standard for icons and logos with transparency, but it is often inefficient for full-color photographs or complex digital art. A single unoptimized PNG can be several megabytes, which can destroy your 'Largest Contentful Paint' (LCP) score. Converting these files to a high-quality JPG is the fastest way to shrink your page weight, improve your SEO ranking, and provide a snappier experience for mobile users.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local High-Speed Transcoding</h3>
            <p>
              Your graphics and project assets are sensitive information. ShrinkBox respects your privacy by performing the entire transcoding process **within your own browser**. Your PNG files are never transmitted to our servers, bypassing the privacy risks and slow upload times associated with traditional 'cloud' converters.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Transparency Handling</h3>
            <p className="text-sm">
              If your PNG contains essential transparency that you must keep, consider using our 'PNG to WebP' converter instead. WebP supports alpha channels while maintaining file sizes that are even smaller than JPG, providing the best of both worlds for modern web designers.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats", "Images"]} />
    </>
  );
}
