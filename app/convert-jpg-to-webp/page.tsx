import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Convert JPG to WebP Online Free — JPG to WebP Converter | ShrinkBox",
  description:
    "Convert JPG and JPEG images to WebP online for free. Create smaller, web-friendly image files with good visual quality. No signup required. Fast, private, and easy with ShrinkBox.",
  keywords: [
    "jpg to webp",
    "jpeg to webp",
    "convert jpg to webp",
    "convert jpeg to webp",
    "jpg to webp converter",
    "free jpg to webp converter",
    "online jpg to webp",
    "convert image to webp",
    "ShrinkBox jpg to webp",
  ],
  alternates: {
    canonical: "https://shrink-box.com/jpg-to-webp",
  },
  openGraph: {
    title: "Convert JPG to WebP Online Free — JPG to WebP Converter | ShrinkBox",
    description:
      "Convert JPG and JPEG images to WebP online for free. Smaller, web-friendly files with no signup required.",
    url: "https://shrink-box.com/jpg-to-webp",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert JPG to WebP Online Free — JPG to WebP Converter | ShrinkBox",
    description:
      "Convert JPG images to WebP online for free and create smaller files with ShrinkBox.",
  },
};

const FAQ_ITEMS = [
  {
    q: "How much smaller is WebP compared to JPG?",
    a: "WebP is often smaller than JPG at similar visual quality, which makes it a popular choice for websites and faster-loading pages. The exact size difference depends on the image.",
  },
  {
    q: "Why convert JPG to WebP?",
    a: "Converting JPG to WebP can reduce file size, improve website performance, and save bandwidth while still keeping the image visually clear.",
  },
  {
    q: "Will converting JPG to WebP reduce image quality?",
    a: "WebP is designed to keep strong visual quality at smaller sizes. In most normal use cases, the converted image still looks very good while taking up less space.",
  },
  {
    q: "Should I replace all JPG files with WebP?",
    a: "For websites and modern digital use, WebP is often a better choice because it creates smaller files. However, JPG still has broader compatibility in some older software and workflows.",
  },
  {
    q: "Is this JPG to WebP converter free to use?",
    a: "Yes. ShrinkBox lets you convert JPG to WebP online for free with no signup required.",
  },
  {
    q: "Are my uploaded images stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function JpgToWebpPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="🚀"
          title="Convert JPG to WebP"
          description="Convert JPG and JPEG images to modern WebP format online. Create smaller, web-friendly image files in seconds with no signup required."
          badge="JPG → WebP · Free"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you convert JPG to WebP online for free without extra software
            or complicated settings. WebP is a modern image format that often creates
            smaller file sizes than JPG, making it a smart choice for websites, blogs,
            apps, portfolios, and faster image delivery.
          </p>
        </div>

        <ConvertImageWidget defaultTarget="webp" allowedSources=".jpg,.jpeg" />

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
            Why convert JPG to WebP?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            JPG is a widely used image format, especially for photos, but WebP is often
            more efficient for web use. Converting JPG images to WebP can reduce file size,
            improve page speed, and lower bandwidth usage while keeping the image visually
            clear for normal viewing.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is useful for developers, bloggers, designers, businesses, and anyone who
            wants faster websites or smaller image files. A smaller image format can help
            pages load more quickly on both desktop and mobile devices.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to convert JPEG images to WebP online
            without creating an account or installing a desktop converter.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How JPG to WebP conversion works
        </h2>
        <p>
          Our converter takes your JPG or JPEG image and re-encodes it into the WebP
          format using optimized settings. The goal is to keep the image visually strong
          while creating a smaller, more efficient file for web and digital use.
        </p>
        <p>
          Because WebP is designed for modern image delivery, it is commonly used in
          websites and applications where performance matters. Converting JPG to WebP is a
          practical way to modernize image assets without changing their dimensions.
        </p>
      </section>
    </>
  );
}