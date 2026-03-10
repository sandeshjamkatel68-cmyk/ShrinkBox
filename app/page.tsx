import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ } from "@/components/seo";

export const metadata: Metadata = {
  title: "ShrinkBox — Free File Compression Online",
  description:
    "Compress JPG, PNG, WebP images and PDFs for free. No sign-up. Drag and drop. Instant download. Files are deleted automatically.",
};

const HOME_FAQ = [
  {
    q: "Is ShrinkBox really free?",
    a: "Yes. Compressing images and PDFs is completely free. No hidden fees, no email required.",
  },
  {
    q: "Are my files stored on your servers?",
    a: "No. Files are processed in memory and deleted immediately after compression completes. We never store your files permanently.",
  },
  {
    q: "What file types do you support?",
    a: "Currently JPG, JPEG, PNG, WebP, and PDF. More formats are coming soon.",
  },
  {
    q: "What's the maximum file size?",
    a: "The free tier supports files up to 10 MB. Larger file support is planned for premium.",
  },
  {
    q: "How much will my file shrink?",
    a: "It depends on the file. Images typically reduce by 30–60%. PDFs with metadata can shrink by 5–25%. Files that are already well-compressed may see little reduction — we'll tell you honestly.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-4 pt-16 pb-8 text-center">
        <div className="inline-block text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1 mb-5">
          Free · No login · Instant
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Compress files.<br />
          <span className="text-[var(--brand)]">No friction.</span>
        </h1>
        <p className="text-[var(--text-muted)] text-lg mb-10 max-w-lg mx-auto">
          Upload a JPG, PNG, WebP, or PDF. We compress it instantly and hand it back. That's it.
        </p>

        {/* Upload widget */}
        <CompressorWidget />

        {/* Trust signals */}
        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      {/* Tool links */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-lg font-semibold text-center mb-6 text-[var(--text-muted)]">All tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/compress-image",     label: "Compress Image",    icon: "🖼",  badge: null },
            { href: "/compress-pdf",       label: "Compress PDF",      icon: "📄",  badge: null },
            { href: "/compress-webp",      label: "Compress WebP",     icon: "⚙️", badge: null },
            { href: "/bulk-compress",      label: "Bulk Compress",     icon: "🗂",  badge: "Up to 10" },
            { href: "/resize-image",       label: "Resize Image",      icon: "📐",  badge: null },
            { href: "/convert-jpg-to-png", label: "JPG → PNG",         icon: "🔄",  badge: null },
            { href: "/convert-png-to-webp",label: "PNG → WebP",        icon: "⚡",  badge: null },
            { href: "/convert-jpg-to-webp",label: "JPG → WebP",        icon: "🚀",  badge: null },
            { href: "/merge-pdf",          label: "Merge PDF",         icon: "📎",  badge: null },
            { href: "/split-pdf",          label: "Split PDF",         icon: "✂️", badge: null },
            { href: "/reduce-jpg-size",    label: "Reduce JPG Size",   icon: "📸",  badge: null },
            { href: "/reduce-png-size",    label: "Reduce PNG Size",   icon: "🎨",  badge: null },
          ].map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="relative flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center hover:border-[var(--brand)]/40 transition-colors duration-150"
              style={{ boxShadow: "var(--shadow)" }}
            >
              {tool.badge && (
                <span className="absolute top-2 right-2 text-[9px] font-medium bg-[var(--brand-light)] text-[var(--brand)] rounded-full px-1.5 py-0.5">
                  {tool.badge}
                </span>
              )}
              <span className="text-2xl">{tool.icon}</span>
              <span className="text-sm font-medium">{tool.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={HOME_FAQ} />
      </section>

      {/* SEO content block */}
      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          The fastest way to compress files online
        </h2>
        <p>
          ShrinkBox is a free online file compressor built for speed and simplicity. Whether you
          need to reduce an image size for email, shrink a PDF for upload limits, or optimize
          assets for a web project — we handle it instantly without any sign-up.
        </p>
        <p>
          Our image compression uses industry-standard algorithms to reduce JPG, PNG, and WebP
          files by up to 60% while maintaining visual quality. PDF compression strips redundant
          metadata and re-optimizes structure to reduce file size.
        </p>
        <p>
          All compression happens on secure servers and files are permanently deleted after
          processing. Your data never touches permanent storage.
        </p>
      </section>
    </>
  );
}
