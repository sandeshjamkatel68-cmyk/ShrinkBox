import { Metadata } from "next";
import { TrustSignals, FAQ, ToolHero, SEOContent } from "@/components/seo";
import { ToolSchema, TOOL_META, BreadcrumbSchema } from "@/lib/seo";
import CropImageWidget from "@/app/crop-image/CropImageWidget";
import RelatedGuides from "@/components/seo/RelatedGuides";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title:       TOOL_META["crop-image"].title,
  description: TOOL_META["crop-image"].description,
  keywords:    TOOL_META["crop-image"].keywords,
  openGraph: {
    title:       TOOL_META["crop-image"].title,
    description: TOOL_META["crop-image"].description,
    url:         "https://shrink-box.com/crop-image",
    siteName:    "ShrinkBox",
    type:        "website",
    images:      [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       TOOL_META["crop-image"].title,
    description: TOOL_META["crop-image"].description,
  },
  alternates: {
    canonical: "/crop-image",
  },
};

const FAQ_ITEMS = [
  { q: "Can I crop to a specific aspect ratio manually?", a: "Yes. Simply set the width and height to your desired ratio (e.g. 1080×1080 for an Instagram square, or 1920×1080 for a 16:9 cinematic frame). The tool will extract exactly that region from the starting coordinates you specify." },
  { q: "Will cropping reduce the overall image quality?", a: "No. Cropping extracts a specific region from your original pixel data without re-encoding the result. The cropped area retains its original fidelity and clarity because no new compression is applied during the extraction." },
  { q: "What image formats are supported by the cropper?", a: "Our professional cropper supports JPG, JPEG, PNG, and WebP images. We recommend files under 10MB for the fastest performance directly in your web browser." },
  { q: "Can I preview my crop before I download it?", a: "When you enter your 'Left,' 'Top,' 'Width,' and 'Height' coordinates, our system calculates the final output dimensions instantly. You can adjust these numbers to dial in the perfect frame before clicking 'Crop Image' and downloading." },
];

export default function CropImagePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Crop Image", url: "/crop-image" },
        ]}
      />
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <Breadcrumbs items={[{ name: "Crop Image", url: "/crop-image" }]} />
        <ToolHero
          icon="✂️"
          title="Crop Image Online Free — Professional Pixel-Perfect Pruning"
          description="Extract the perfect frame from any image with exact coordinate control. Set your boundaries, preview your output size, and download your cropped images instantly with zero quality loss."
          badge="Free · Instant · Private"
        />
        <CropImageWidget />
        <div className="mt-8"><TrustSignals /></div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <SEOContent
        toolName="Crop Image"
        title="Crop Image Online Free — The Ultimate Precision Tool for Designers"
        description="Whether you're framing a new profile picture or prepping assets for a web application, ShrinkBox provides the exact pixel control you need. Our local-processing engine ensures your images are pruned with professional accuracy."
        howToSteps={[
          "Select or drag & drop your image file into the secure local cropper zone.",
          "Enter your crop boundaries: Left (X) and Top (Y) starting points, plus Width and Height.",
          "Instantly see the calculated output dimensions to ensure perfect composition.",
          "Download your precisely cropped, high-fidelity image instantly with one click."
        ]}
      >
        <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Why exact pixel cropping is superior to 'eye-balling' it</h3>
            <p>
              In professional web design and social media management, a single pixel can make the difference between a crisp image and one that looks slightly 'off.' Most visual croppers rely on dragging handles, which can be imprecise. By using exact coordinate inputs, ShrinkBox gives you the power to match the precise requirements of any platform—ensuring your banners, thumbnails, and profile cards are framed with 100% mathematical accuracy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Ultimate Privacy: Pruning Happens on Your Device</h3>
            <p>
              Your personal photos and sensitive screenshots shouldn't be uploaded to a third-party server just to be cropped. ShrinkBox uses advanced 'canvas' technology to perform all image pruning **locally in your web browser**. Your files never touch our servers, providing the privacy of a desktop application with the unparalleled speed of a web tool.
            </p>
          </div>

          <div className="bg-brand-light/20 p-6 rounded-2xl border border-brand/10">
            <h3 className="text-lg font-bold text-brand mb-2">Pro Tip: Find Your 'Sweet Spot' Coordinates</h3>
            <p className="text-sm">
              If you have a subject that is off-center, use the 'Left' and 'Top' coordinates to shift your crop area. This allows you to 're-center' your subject within a perfectly sized 1:1 or 16:9 frame, creating a much more professional and balanced visual output for your social media feed.
            </p>
          </div>
        </div>
      </SEOContent>
      <RelatedGuides tags={["Images","Tools"]} />
    </>
  );
}
