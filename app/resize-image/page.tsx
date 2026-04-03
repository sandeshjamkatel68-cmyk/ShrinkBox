import { Metadata } from "next";
import ResizeImageWidget from "@/components/tools/ResizeImageWidget";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, FAQSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["resize-image"].title,
  description: TOOL_META["resize-image"].description,
  keywords:    TOOL_META["resize-image"].keywords,
  openGraph: {
    title:       TOOL_META["resize-image"].title,
    description: TOOL_META["resize-image"].description,
    url:         "https://shrink-box.com/resize-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["resize-image"].title,
    description: TOOL_META["resize-image"].description,
  },
  alternates: {
    canonical: "/resize-image",
  },
};

const FAQ_ITEMS = [
  { q: "Can I resize my images without losing clarity or quality?", a: "When downscaling (making an image smaller), quality is perfectly preserved. For minor adjustments, any loss is virtually invisible. However, we do not recommend significant 'upscaling' (making a small image much larger), as this can introduce pixelation because no new detail is being added to the file." },
  { q: "What are the different 'Fit Modes' and which one should I use?", a: "'Fit Inside' keeps your entire image visible within your set dimensions. 'Cover' fills the entire area, which may crop the edges. 'Contain' adds padding to avoid cropping, and 'Stretch' forces the image to the exact pixels, which may cause distortion. For social media, 'Cover' or 'Fit Inside' are usually best." },
  { q: "Does resizing an image also change its file format?", a: "No. Our resizer respects your original format—a JPG stays a JPG, and a PNG stays a PNG. If you need to change the format while resizing, we recommend using our 'Convert' tools after you've achieved the perfect dimensions." },
  { q: "Is there a limit on the maximum pixel dimensions I can set?", a: "For the best performance in your browser, we support resizing images up to 5000x5000 pixels. This covers almost all professional web, print, and social media requirements." },
];

export default function ResizeImagePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Resize Image", url: "/resize-image" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Resize Image", url: "/resize-image" }]} />
        <ToolHero icon="📐" title="Resize Image Online Free — Professional Photo Dimension Control" description="Set exact pixel dimensions or scale by percentage instantly in your browser. Perfect for Instagram squares, YouTube banners, and website thumbnails with zero quality loss." badge="Free · Instant · Private" />
        <ResizeImageWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
      
      <SEOContent
        toolName="Resize Image"
        title="Resize Image Online Free — Pixel-Perfect Control for Every Platform"
        description="Whether you need a 1080x1080 square for Instagram, a 1200x630 banner for a blog post, or a tiny thumbnail, our local-processing engine ensures your images are resized with professional precision."
        howToSteps={[
          "Select or drag & drop your image file into the secure local resizer zone.",
          "Enter your target width and height in pixels, or use the percentage slider for quick scaling.",
          "Choose a fit mode (Fit Inside, Cover, Contain, or Stretch) to control how your image fills the space.",
          "Download your perfectly resized, high-fidelity image instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why exact image dimensions matter for modern SEO</h3>
            <p>
              Search engines and social media platforms favor images that fit their specific 'preferred' dimensions. If you upload a massive 4K photo when a 600px thumbnail is required, you're slowing down your site and wasting bandwidth. By using a professional image resizer like ShrinkBox, you can ensure your content looks crisp on every platform, from high-density Retina displays to mobile screens, while significantly improving your page load speeds.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ultimate Privacy: Your Files Never Travel the Web</h3>
            <p>
              Most online resizers upload your personal photos to their servers, creating a potential privacy risk. ShrinkBox leverages advanced 'offscreen canvas' technology to perform all resizing operations **entirely within your browser**. Your pictures never touch our servers, ensuring your visual content, screenshots, and private photos remain 100% secure on your own hardware.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Lock the Aspect Ratio</h3>
            <p className="text-sm">
              Unless you specifically want to distort your image, always keep the 'Lock Aspect Ratio' setting enabled. This ensures that when you change the width, the height adjusts automatically, preventing your photos from looking stretched or squashed. This is the key to maintaining a professional aesthetic for your brand.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
