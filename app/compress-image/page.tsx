import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Compress Image Online Free — JPG, PNG & WebP Compressor | ShrinkBox",
  description:
    "Compress JPG, PNG, and WebP images online for free. Reduce image file size quickly without noticeable quality loss. No signup required. Fast, private, and easy to use with ShrinkBox.",
  keywords: [
    "compress image online",
    "image compressor",
    "jpg compressor",
    "png compressor",
    "webp compressor",
    "reduce image size",
    "compress jpg online",
    "compress png online",
    "free image compressor",
    "online image compression",
    "ShrinkBox image compressor",
  ],
  alternates: {
    canonical: "https://shrink-box.com/compress-image",
  },
  openGraph: {
    title: "Compress Image Online Free — JPG, PNG & WebP Compressor | ShrinkBox",
    description:
      "Reduce JPG, PNG, and WebP image file sizes online for free. Fast image compression with no signup required.",
    url: "https://shrink-box.com/compress-image",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress Image Online Free — JPG, PNG & WebP Compressor | ShrinkBox",
    description:
      "Compress JPG, PNG, and WebP images online for free. Reduce file size fast with ShrinkBox.",
  },
};

const IMAGE_FAQ = [
  {
    q: "Does compressing an image reduce its quality?",
    a: "Compression can reduce quality slightly depending on the level you choose, but in most cases the difference is minimal and not noticeable during normal viewing. Lower compression keeps more quality, while higher compression gives you a smaller file size.",
  },
  {
    q: "What formats are supported?",
    a: "ShrinkBox supports JPG, PNG, and WebP image compression online.",
  },
  {
    q: "What's the difference between JPG, PNG, and WebP compression?",
    a: "JPG is best for photos and usually gives strong size reduction with good visual quality. PNG is useful for graphics and transparency, while WebP often provides smaller files than both JPG and PNG with good quality.",
  },
  {
    q: "Will my image dimensions change?",
    a: "No. This tool reduces file size without changing your original image dimensions.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "Yes. If you want to compress multiple images in one batch, you can use the Bulk Image Compressor on ShrinkBox.",
  },
  {
    q: "Is this image compressor free to use?",
    a: "Yes. ShrinkBox lets you compress images online for free with no signup required.",
  },
  {
    q: "Are my uploaded images stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function CompressImagePage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="🖼"
          title="Compress Image Online"
          description="Reduce JPG, PNG, and WebP image file sizes instantly. Choose your compression level and download a smaller image in seconds — free, private, and no signup required."
          badge="Free · Instant · Private"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you compress images online without complicated settings or extra
            software. Upload a JPG, PNG, or WebP image, reduce its file size, and download
            the optimized result in seconds. This free image compressor is useful for website
            performance, email attachments, assignments, portfolios, blogs, and saving storage
            space on your device.
          </p>
        </div>

        <CompressorWidget />

        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={IMAGE_FAQ} />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Why use an online image compressor?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Large image files can slow down websites, take longer to upload, and make email
            attachments harder to send. Compressing an image reduces its file size so it
            becomes easier to share, store, and publish while still keeping good visual
            quality.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This tool is especially useful for students, developers, designers, bloggers,
            content creators, and anyone who works with digital images regularly. Whether you
            want faster-loading web pages, smaller attachments, or better storage efficiency,
            image compression is one of the easiest ways to optimize files.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox supports common image formats like JPG, PNG, and WebP, making it easy
            to reduce image size online for free without creating an account or installing
            any desktop application.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How image compression works
        </h2>
        <p>
          Our image compressor uses Sharp, a high-performance Node.js image processing library
          built on libvips. It re-encodes your image using optimized settings, including
          metadata stripping, efficient encoding, and format-aware compression methods for
          JPG, PNG, and WebP files.
        </p>
        <p>
          The goal is to make the file smaller while keeping the image visually clear for
          normal use. This kind of optimization is commonly used across websites, apps, and
          modern image delivery systems to improve performance and reduce bandwidth usage.
        </p>
      </section>
    </>
  );
}