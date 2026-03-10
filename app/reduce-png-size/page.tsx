import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Reduce PNG File Size Online — Free PNG Compressor",
  description:
    "Reduce PNG file sizes online for free. Compress PNG images by stripping metadata and optimizing the color palette. No signup needed.",
};

const PNG_FAQ = [
  {
    q: "Why are PNG files so large?",
    a: "PNG uses lossless compression by default, preserving every pixel. This makes PNGs larger than JPEGs for photos, but ideal for screenshots, logos, and images with transparency.",
  },
  {
    q: "How does PNG compression work?",
    a: "We strip metadata and apply maximum zlib compression. For 'High' mode, we also convert to an indexed color palette when possible, which dramatically reduces size for images with limited colors.",
  },
  {
    q: "Should I use PNG or WebP?",
    a: "WebP typically achieves better compression than PNG for similar quality. If your use case supports WebP (most modern browsers do), it's often the better choice.",
  },
];

export default function ReducePngPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="🎨"
          title="Reduce PNG File Size"
          description="Compress PNG images online for free. Strip metadata, optimize compression, and reduce size without losing transparency or sharpness."
          badge="PNG · Free · Instant"
        />
        <CompressorWidget />
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={PNG_FAQ} />
      </section>
    </>
  );
}
