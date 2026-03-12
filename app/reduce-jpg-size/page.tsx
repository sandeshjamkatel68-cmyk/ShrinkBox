import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Reduce JPG File Size Online Free — JPEG Compressor | ShrinkBox",
  description:
    "Reduce JPG and JPEG file size online for free. Compress JPG images quickly without noticeable quality loss. No signup required. Fast, private, and easy with ShrinkBox.",
  keywords: [
    "reduce jpg file size",
    "jpeg compressor",
    "compress jpg online",
    "compress jpeg online",
    "reduce jpeg size",
    "jpg file size reducer",
    "free jpg compressor",
    "online jpeg compression",
    "ShrinkBox jpg compressor",
  ],
  alternates: {
    canonical: "https://shrink-box.com/reduce-jpg-size",
  },
  openGraph: {
    title: "Reduce JPG File Size Online Free — JPEG Compressor | ShrinkBox",
    description:
      "Compress JPG and JPEG images online for free. Reduce file size quickly while keeping good visual quality.",
    url: "https://shrink-box.com/reduce-jpg-size",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce JPG File Size Online Free — JPEG Compressor | ShrinkBox",
    description:
      "Reduce JPG file size online for free and compress JPEG images quickly with ShrinkBox.",
  },
};

const JPG_FAQ = [
  {
    q: "How do I reduce a JPG file size without losing noticeable quality?",
    a: "Use a balanced compression level that keeps visual quality high while removing unnecessary file weight. In many cases, JPG images can be reduced significantly with little to no visible difference during normal viewing.",
  },
  {
    q: "What is the best JPG quality setting for web use?",
    a: "A medium-to-high quality setting is usually the best balance for web images because it keeps the image looking clear while reducing file size enough for faster page loading.",
  },
  {
    q: "Does compressing a JPG multiple times reduce quality?",
    a: "Yes. Repeated JPG compression can gradually reduce quality because JPG uses lossy compression. For best results, compress the original file once instead of re-compressing the same file many times.",
  },
  {
    q: "Why are JPG files good for photos?",
    a: "JPG and JPEG are widely used for photos because they can keep good visual quality while creating smaller file sizes than many other image formats.",
  },
  {
    q: "Is this JPG compressor free to use?",
    a: "Yes. ShrinkBox lets you reduce JPG file size online for free with no signup required.",
  },
  {
    q: "Are my uploaded JPG files stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function ReduceJpgPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="📸"
          title="Reduce JPG File Size"
          description="Compress JPG and JPEG images online in seconds. Reduce file size for web, email, storage, and sharing while keeping good visual quality — no signup required."
          badge="JPG · JPEG · Free"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you reduce JPG file size online for free without installing any
            software. JPG and JPEG images are commonly used for photos, blog images,
            portfolio work, website uploads, and email attachments. This tool makes them
            smaller so they are easier to share, upload, and store.
          </p>
        </div>

        <CompressorWidget />

        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={JPG_FAQ} />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Why reduce JPG file size?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Large JPG files can slow down websites, make uploads take longer, and create
            problems when sending images through email or online forms. Reducing JPG file
            size helps make images easier to manage while still looking good for normal use.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is useful for students, photographers, bloggers, designers, developers,
            businesses, and anyone who works with digital images. Smaller JPG files improve
            website speed, reduce storage usage, and make file sharing faster.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to compress JPEG images online
            without creating an account or installing a desktop app.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How JPG compression works
        </h2>
        <p>
          JPG compression works by re-encoding the image with optimized settings so the file
          becomes smaller while still looking visually clear in normal use. Additional file
          weight may also be reduced by removing unnecessary metadata.
        </p>
        <p>
          Because JPG is one of the most common image formats for photos and digital content,
          reducing JPG size is a practical way to improve upload speed, website performance,
          and storage efficiency without changing image dimensions.
        </p>
      </section>
    </>
  );
}