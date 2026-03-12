import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Compress WebP Online Free — Reduce WebP File Size | ShrinkBox",
  description:
    "Compress WebP images online for free. Reduce WebP file size quickly while keeping good visual quality and transparency. No signup required. Fast, private, and simple with ShrinkBox.",
  keywords: [
    "compress webp online",
    "webp compressor",
    "reduce webp size",
    "compress webp image",
    "free webp compressor",
    "webp file size reducer",
    "optimize webp images",
    "online webp compression",
    "ShrinkBox webp compressor",
  ],
  alternates: {
    canonical: "https://shrink-box.com/compress-webp",
  },
  openGraph: {
    title: "Compress WebP Online Free — Reduce WebP File Size | ShrinkBox",
    description:
      "Reduce WebP image file size online for free. Fast WebP compression with preserved quality and transparency.",
    url: "https://shrink-box.com/compress-webp",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress WebP Online Free — Reduce WebP File Size | ShrinkBox",
    description:
      "Compress WebP images online for free and reduce file size quickly with ShrinkBox.",
  },
};

const FAQ_ITEMS = [
  {
    q: "Can WebP be compressed further?",
    a: "Yes. Even WebP images can often be compressed more by re-encoding them with optimized settings, especially if the original file was exported at very high quality.",
  },
  {
    q: "Will compressing WebP reduce quality?",
    a: "Compression may slightly reduce visual quality depending on the level used, but in most normal use cases the difference is small while the file size savings can be significant.",
  },
  {
    q: "Will compressing WebP affect transparency?",
    a: "No. Transparency is preserved when supported by the original WebP file and the compression process keeps the alpha channel intact.",
  },
  {
    q: "Why use WebP instead of JPG or PNG?",
    a: "WebP often produces smaller file sizes than JPG and PNG while maintaining strong visual quality. It is commonly used for websites because it helps pages load faster.",
  },
  {
    q: "Is this WebP compressor free to use?",
    a: "Yes. ShrinkBox lets you compress WebP images online for free with no signup required.",
  },
  {
    q: "Are my uploaded WebP images stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function CompressWebpPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="⚙️"
          title="Compress WebP Online"
          description="Reduce WebP image file sizes instantly. Upload your WebP file, optimize it in seconds, and download a smaller image while keeping good visual quality."
          badge="WebP · Free · Instant"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you compress WebP images online for free without extra software
            or complicated settings. If your WebP file is too large for web use, storage,
            sharing, or faster page loading, this tool can reduce its size quickly while
            preserving good image quality and transparency where supported.
          </p>
        </div>

        <CompressorWidget />

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
            Why use a WebP compressor?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            WebP is already an efficient image format, but many WebP files can still be
            optimized further. Compressing WebP images helps reduce bandwidth usage, improve
            website performance, speed up uploads, and save storage space.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is especially useful for developers, designers, bloggers, and site owners
            who want smaller images without noticeably affecting visual quality. Smaller
            WebP files can help web pages load faster and provide a better experience for
            users on both desktop and mobile devices.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to reduce WebP image file size online
            without creating an account or installing any desktop tool.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How WebP compression works
        </h2>
        <p>
          Our WebP compressor re-encodes WebP files using optimized compression settings to
          reduce unnecessary file weight while keeping the image visually clear for normal
          use. This process is especially effective when the original file was saved at a
          higher quality than needed.
        </p>
        <p>
          Because WebP supports efficient modern compression and transparency, it is widely
          used for websites and digital products. Optimizing WebP files helps keep pages
          lighter and faster without changing the image dimensions.
        </p>
      </section>
    </>
  );
}