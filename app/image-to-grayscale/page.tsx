import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import GrayscaleWidget from "@/app/image-to-grayscale/GrayscaleWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["image-to-grayscale"].title,
  description: TOOL_META["image-to-grayscale"].description,
  keywords:    TOOL_META["image-to-grayscale"].keywords,
  openGraph: {
    title:       TOOL_META["image-to-grayscale"].title,
    description: TOOL_META["image-to-grayscale"].description,
    url:         "https://shrink-box.com/image-to-grayscale",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["image-to-grayscale"].title,
    description: TOOL_META["image-to-grayscale"].description,
  },
  alternates: {
    canonical: "/image-to-grayscale",
  },
};

const FAQ_ITEMS = [
  { q: "Does converting to grayscale reduce the overall file size?", a: "Yes, typically by 10-25%. A grayscale image only needs to store one channel of information (luminance) instead of three (Red, Green, Blue), which allows modern compression algorithms to be much more efficient." },
  { q: "Can I convert my grayscale image back to full color?", a: "No. Converting to black and white is a destructive process that permanently removes color data. We always recommend keeping a backup of your original color file." },
  { q: "What is the formula used for the conversion?", a: "We use a luminance-weighted formula (0.2126R + 0.7152G + 0.0722B). This matches how the human eye perceives brightness across different colors, ensuring your black and white photos look natural and professional." },
  { q: "Are my private images uploaded to a server for processing?", a: "Absolutely not. ShrinkBox uses high-performance browser-side technology to process your images locally. Your files never leave your device, ensuring total privacy." },
];

export default function GrayscalePage() {
  return (
    <>
      <ToolSchema 
        name={TOOL_META["image-to-grayscale"].title} 
        description={TOOL_META["image-to-grayscale"].description} 
        url={TOOL_META["image-to-grayscale"].url} 
        category={TOOL_META["image-to-grayscale"].category} 
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Image to Grayscale", url: "/image-to-grayscale" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Image to Grayscale", url: "/image-to-grayscale" }]} />
        <ToolHero icon="⚫" title="Convert Image to Black & White Online Free" description="Transform any color image into a professional grayscale photo instantly. Optimized for JPG, PNG, and WebP with zero quality loss and absolute privacy." badge="Free · Instant · Private" />
        <GrayscaleWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="Image to Grayscale"
        title="Convert Image to Black & White Online Free — Professional Artistic Filtering"
        description="Whether you're creating a nostalgic aesthetic for a blog post or reducing print costs for a document, ShrinkBox provides the most precise grayscale conversion available in a browser."
        howToSteps={[
          "Select or drag & drop your color image into the secure processing area.",
          "Our system will instantly analyze the color depth and apply luminance weighting.",
          "Review the resulting black and white preview to ensure professional contrast.",
          "Download your high-fidelity grayscale image instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why black and white conversion is more than just 'removing color'</h3>
            <p>
              Professional grayscale conversion isn't just about desaturation. It's about respecting the luminosity of different colors. Red, green, and blue all appear at different brightnesses to the human eye. ShrinkBox uses advanced algorithms to translate these colors into the perfect shade of gray, ensuring that your skin tones, sky gradients, and foreground details remain crisp and well-defined.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ultimate Privacy: Your Art Stays on Your Machine</h3>
            <p>
              Your graphics and private photography shouldn't be uploaded to a third-party server just for a simple filter. ShrinkBox performs all grayscale processing **locally in your web browser**. Your files never touch our servers, providing the privacy of a professional desktop application with the speed of a web tool.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Use for Printing Efficiency</h3>
            <p className="text-sm">
              If you have a document with heavy colors and you need to print it on a standard black and white printer, running the images through this tool first can help you preview how the contrast will look, ensuring your text remains readable after the print job.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Formats","Images"]} />
    </>
  );
}
