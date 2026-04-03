import { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["convert-png-to-webp"].title,
  description: TOOL_META["convert-png-to-webp"].description,
  keywords:    TOOL_META["convert-png-to-webp"].keywords,
  openGraph: {
    title:       TOOL_META["convert-png-to-webp"].title,
    description: TOOL_META["convert-png-to-webp"].description,
    url:         "https://shrink-box.com/convert-png-to-webp",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["convert-png-to-webp"].title,
    description: TOOL_META["convert-png-to-webp"].description,
  },
  alternates: {
    canonical: "/convert-png-to-webp",
  },
};

const FAQ_ITEMS = [
  { q: "Why is WebP better than PNG for my website?", a: "WebP is a modern image format designed specifically for the web. It provides superior compression, resulting in files that are typically 25–35% smaller than PNGs while maintaining identical visual quality. Smaller files mean faster page loads and improved SEO rankings." },
  { q: "Will I lose my transparent background after conversion?", a: "No. Unlike JPG, the WebP format explicitly supports full alpha transparency (alpha channels). When you convert a transparent PNG using ShrinkBox, your icons, logos, and overlays will retain their perfect transparency with a significantly smaller footprint." },
  { q: "Is WebP supported by all browsers?", a: "Yes. WebP is now supported by all major modern browsers, including Chrome, Firefox, Safari (since iOS 14 and macOS Big Sur), and Edge. For maximum performance and Google Core Web Vitals, WebP is the recommended standard." },
  { q: "Is it secure to convert proprietary icons or brand assets?", a: "100%. ShrinkBox performs the entire encoding process **locally in your web browser**. Your proprietary graphics never leave your machine, ensuring complete privacy and zero risk of data leaks to third-party servers." },
];

export default function PngToWebpPage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["convert-png-to-webp"].title}
        description={TOOL_META["convert-png-to-webp"].description}
        url={TOOL_META["convert-png-to-webp"].url}
        category={TOOL_META["convert-png-to-webp"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "PNG to WebP", url: "/convert-png-to-webp" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "PNG to WebP", url: "/convert-png-to-webp" }]} />
        <ToolHero 
          icon="⚡" 
          title="Convert PNG to WebP Online Free — Direct Transparency Support" 
          description="Transform your heavy PNG graphics into lightweight, high-performance WebP images instantly. Save bandwidth and boost site speed without sacrificing clarity or transparency." 
          badge="PNG → WebP · Free · Private" 
        />
        <ConvertImageWidget defaultTarget="webp" allowedSources=".png" />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="PNG to WebP"
        title="PNG to WebP Online Free — The Gold Standard for Modern Assets"
        description="Don't settle for slow-loading PNGs. ShrinkBox provides a high-speed, secure sandbox to transcode your high-fidelity graphics into web-optimized WebP files instantly."
        howToSteps={[
          "Select or drag & drop your PNG image file into the secure local converter.",
          "Our system instantly analyzes the alpha channel and pixel density.",
          "Adjust the quality slider to find the perfect balance for your project.",
          "Download your optimized, transparent WebP file instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why PNG to WebP conversion is essential for modern SEO</h3>
            <p>
              Google has long advocated for the use of 'Next-Gen Formats' like WebP to improve the user experience on the web. A high-resolution PNG can easily exceed several megabytes, slowing down your 'Largest Contentful Paint' (LCP) and harming your search rankings. By converting your PNGs to WebP, you get the same transparency and crisp edges at a fraction of the weight, ensuring your site remains fast and responsive on all devices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Local JavaScript Transcoding</h3>
            <p>
              Your graphics and project assets are sensitive property. ShrinkBox respects your privacy by performing the entire transcoding process **within your own browser**. Your PNG files are never transmitted to our servers, bypassing the privacy risks and slow upload times associated with traditional 'cloud' converters.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Transparency and Lossless Encoding</h3>
            <p className="text-sm">
              If your PNG contains essential pixel-perfect detail that cannot be altered, set the quality slider to 100%. This uses WebP's lossless mode, which still typically produces a file 25% smaller than the original PNG while preserving every single pixel exactly as it was.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats", "Images"]} />
    </>
  );
}
