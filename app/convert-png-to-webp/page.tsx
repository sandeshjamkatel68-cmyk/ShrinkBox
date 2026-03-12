import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Convert PNG to WebP Online Free — PNG to WebP Converter | ShrinkBox",
  description:
    "Convert PNG images to WebP online for free. Reduce file size while keeping strong visual quality and transparency. No signup required. Fast, private, and easy with ShrinkBox.",
  keywords: [
    "png to webp",
    "convert png to webp",
    "png to webp converter",
    "free png to webp converter",
    "online png to webp",
    "convert image to webp",
    "png webp converter",
    "reduce png file size",
    "ShrinkBox png to webp",
  ],
  alternates: {
    canonical: "https://shrink-box.com/png-to-webp",
  },
  openGraph: {
    title: "Convert PNG to WebP Online Free — PNG to WebP Converter | ShrinkBox",
    description:
      "Convert PNG images to WebP online for free. Create smaller, web-friendly files while keeping transparency.",
    url: "https://shrink-box.com/png-to-webp",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PNG to WebP Online Free — PNG to WebP Converter | ShrinkBox",
    description:
      "Convert PNG images to WebP online for free and reduce file size with ShrinkBox.",
  },
};

const FAQ_ITEMS = [
  {
    q: "Why convert PNG to WebP?",
    a: "WebP often produces smaller files than PNG while keeping strong visual quality. This makes it a smart choice for websites, blogs, apps, and other digital projects where page speed matters.",
  },
  {
    q: "Does WebP support transparency like PNG?",
    a: "Yes. WebP supports transparency, so it can often replace PNG in web use cases where transparent backgrounds are needed.",
  },
  {
    q: "Will converting PNG to WebP reduce image quality?",
    a: "WebP is designed to keep good visual quality while reducing file size. In many cases, the converted image still looks very similar while taking up less space.",
  },
  {
    q: "Is WebP supported everywhere?",
    a: "WebP is supported by all major modern browsers. For older software or workflows that require universal compatibility, PNG may still be preferred in some cases.",
  },
  {
    q: "Is this PNG to WebP converter free to use?",
    a: "Yes. ShrinkBox lets you convert PNG to WebP online for free with no signup required.",
  },
  {
    q: "Are my uploaded images stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function PngToWebpPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="⚡"
          title="Convert PNG to WebP"
          description="Convert PNG images to WebP online for smaller, web-friendly file sizes while keeping strong visual quality and transparency — no signup required."
          badge="PNG → WebP · Free"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you convert PNG to WebP online for free without installing extra
            software. WebP is a modern image format that often creates smaller file sizes
            than PNG, making it useful for websites, apps, blogs, portfolios, and faster
            image delivery while still supporting transparency.
          </p>
        </div>

        <ConvertImageWidget defaultTarget="webp" allowedSources=".png" />

        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Why convert PNG to WebP?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            PNG is widely used for graphics, logos, screenshots, and images with transparent
            backgrounds, but PNG files can often be quite large. Converting PNG to WebP can
            significantly reduce file size while keeping the image visually clear and
            preserving transparency in many cases.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is especially useful for developers, designers, bloggers, and businesses
            that want faster-loading web pages and lower bandwidth usage. Smaller image
            files can improve performance on both desktop and mobile devices.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to convert PNG images to WebP online
            without creating an account or installing a desktop converter.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How PNG to WebP conversion works
        </h2>
        <p>
          Our converter takes your PNG image and re-encodes it into the WebP format using
          optimized settings. The goal is to keep the image visually strong while producing
          a smaller and more efficient file for digital and web use.
        </p>
        <p>
          Because WebP supports modern compression and transparency, it is commonly used for
          website images that need to stay lightweight without losing important visual
          details. Converting PNG to WebP is a practical way to modernize image assets and
          improve performance.
        </p>
      </section>
    </>
  );
}