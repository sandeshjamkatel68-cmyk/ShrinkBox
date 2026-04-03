import { Metadata } from "next";
import WatermarkWidget from "./WatermarkWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["watermark-image"].title,
  description: TOOL_META["watermark-image"].description,
  keywords:    TOOL_META["watermark-image"].keywords,
  openGraph: {
    title:       TOOL_META["watermark-image"].title,
    description: TOOL_META["watermark-image"].description,
    url:         "https://shrink-box.com/watermark-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["watermark-image"].title,
    description: TOOL_META["watermark-image"].description,
  },
  alternates: {
    canonical: "/watermark-image",
  },
};

const FAQ_ITEMS = [
  { q: "Can I add my business logo as a watermark?", a: "Our current tool supports high-precision text watermarks where you can control the font size, color, opacity, and exact position on the image. We are working on a 'Logo Overlay' feature that will allow you to upload a PNG logo as a watermark in a future update." },
  { q: "Is the watermark permanent after I download the image?", a: "Yes. When you click 'Watermark Image,' our engine flattens the text directly into the pixel data of the output file. This makes it much more difficult for others to use your work without credit or removal of the watermark." },
  { q: "Does watermarking reduce the quality of my photos?", a: "No. We process the watermark using high-fidelity canvas rendering and export the result using professional-grade compression settings (95% quality by default for JPG/WebP) to ensure your clarity remains intact." },
  { q: "Are my original high-res photos safe and private?", a: "Absolutely. Your images are never 'uploaded' to our servers. All positioning, styling, and flattening of the watermark happens **locally in your web browser**. Your creative assets never leave your computer." },
];

export default function WatermarkImagePage() {
  return (
    <>
      <ToolSchema
        name={TOOL_META["watermark-image"].title}
        description={TOOL_META["watermark-image"].description}
        url={TOOL_META["watermark-image"].url}
        category={TOOL_META["watermark-image"].category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Watermark Image", url: "/watermark-image" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Watermark Image", url: "/watermark-image" }]} />
        <ToolHero 
          icon="🛡️" 
          title="Add Watermark to Image Online Free — Protect Your Art" 
          description="Stamp your brand or name onto your photos instantly. Our professional watermarking tool provides total control over text, opacity, and positioning with absolute privacy." 
          badge="Watermark · Free · Private" 
        />
        <WatermarkWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Watermark Image"
        title="Add Watermark to Image Online Free — The Best Way to Deter Image Theft"
        description="Sharing your original photography or design work on social media can be risky without proper protection. ShrinkBox's Watermark tool lets you establish ownership in seconds before your work goes viral."
        howToSteps={[
          "Select or drag & drop your original image into the secure local watermark zone.",
          "Enter your custom text (e.g., your name, business, or website URL).",
          "Adjust the font size, color, opacity, and position until it perfectly fits your composition.",
          "Download your protected, high-fidelity watermarked image instantly."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why every digital creator should watermark their work</h3>
            <p>
              In the age of social media sharing, content can be scraped or reposted without attribution in seconds. A visible watermark serves as a constant reminder of the original source, making it much easier for potential clients or fans to find your portfolio. By using ShrinkBox, you can quickly add a professional-looking 'Copyright' or 'Property of' stamp that deters generic theft while maintaining the aesthetic flow of your visual art.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Complete Privacy: Protection and Security</h3>
            <p>
              Your creative assets are your most valuable property. Most online 'watermarkers' require you to upload your files to their cloud, where they could be seen or stored. ShrinkBox performs all text layering and image flattening **locally in your web browser**. No uploads required, and zero risk of your photos being accessed by anyone else.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Balance Visibility and Aesthetics</h3>
            <p className="text-sm">
              For the best results, use an opacity setting between 30% and 50%. This makes the watermark clearly visible enough to deter theft, but transparent enough that it doesn't distract from the beauty and detail of your original photo.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images", "Tools"]} />
    </>
  );
}
