import type { Metadata } from "next";
import BulkCompressWidget from "@/components/tools/BulkCompressWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Bulk Image Compressor — Compress Multiple Images Online Free | ShrinkBox",
  description:
    "Compress multiple JPG, PNG, and WebP images at once online for free. Upload up to 10 images, reduce file size in bulk, and download compressed images in seconds with ShrinkBox.",
  keywords: [
    "bulk image compressor",
    "compress multiple images",
    "batch image compressor",
    "compress multiple jpg files",
    "compress multiple png files",
    "bulk compress webp images",
    "free bulk image compressor",
    "online batch image compression",
    "ShrinkBox bulk image compressor",
  ],
  alternates: {
    canonical: "https://shrink-box.com/bulk-compress",
  },
  openGraph: {
    title: "Bulk Image Compressor — Compress Multiple Images Online Free | ShrinkBox",
    description:
      "Upload up to 10 JPG, PNG, or WebP images and compress them all at once for free. Fast bulk image compression with easy downloads.",
    url: "https://shrink-box.com/bulk-compress",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Image Compressor — Compress Multiple Images Online Free | ShrinkBox",
    description:
      "Compress multiple images at once online for free. Upload up to 10 files and download compressed results quickly.",
  },
};

const FAQ_ITEMS = [
  {
    q: "How many images can I compress at once?",
    a: "You can compress up to 10 images in one batch using the free bulk image compressor.",
  },
  {
    q: "Which image formats are supported?",
    a: "This tool supports JPG, PNG, and WebP images for bulk compression.",
  },
  {
    q: "Can I download all compressed images together?",
    a: "Yes. After compression, you can download all compressed images easily without needing to repeat the process one by one.",
  },
  {
    q: "Does each image get compressed separately?",
    a: "Yes. Every uploaded image is compressed individually, so each file gets its own optimized result.",
  },
  {
    q: "Is the bulk image compressor free to use?",
    a: "Yes. ShrinkBox lets you compress multiple images online for free with no login required.",
  },
  {
    q: "Are my uploaded files stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function BulkCompressPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="🗂"
          title="Bulk Image Compressor"
          description="Compress multiple JPG, PNG, and WebP images at once. Upload up to 10 files, reduce image size in bulk, and download compressed images in seconds."
          badge="Up to 10 files · Free"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            Need to compress many images quickly? ShrinkBox makes bulk image compression
            simple. Upload multiple files in one batch, reduce their size online, and
            download the compressed versions without signing up. This tool is useful for
            website images, email attachments, documents, assignments, portfolios, and
            everyday storage saving.
          </p>
        </div>

        <BulkCompressWidget />

        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Compress multiple images online in one go
          </h2>
          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            This bulk image compressor is designed for people who need to reduce the file
            size of several images at once instead of compressing them one by one. It
            saves time and makes batch optimization easier for students, designers,
            developers, bloggers, and businesses.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            Whether you are preparing images for a website, sending files by email, or
            organizing photos for storage, bulk compression helps keep file sizes smaller
            while maintaining usable quality. ShrinkBox supports common image formats like
            JPG, PNG, and WebP, so you can work with the formats most people already use.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Because the process runs online and requires no account, you can upload your
            images, compress them quickly, and move on without extra steps. That makes it
            a convenient free tool for fast batch image optimization.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>
    </>
  );
}