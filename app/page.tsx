import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import { FILE_TOOLS } from "@/lib/data/fileTools";

export const metadata: Metadata = {
  title: "ShrinkBox — File Tools That Never Upload Your Files",
  description:
    "Compress, convert, and resize images entirely in your browser. No upload, no signup, no waiting on a server. Your file never leaves this tab.",
  alternates: { canonical: "https://shrink-box.com" },
};

const FAQS = [
  {
    q: "Do you upload my files to a server?",
    a: "No. Every tool on ShrinkBox runs in your browser using WebAssembly and the Canvas API. Your file is read, processed, and written back to a download link without a single network request carrying its bytes.",
  },
  {
    q: "Why is that better than iLovePDF or Smallpdf?",
    a: "Those tools upload your file to their servers, process it there, and send it back — which means your contract, ID scan, or unreleased design sits on someone else's infrastructure, even briefly. ShrinkBox skips the round trip entirely, which also makes it faster and able to work offline after the first load.",
  },
  {
    q: "Is ShrinkBox free?",
    a: "Yes, for the common case: batches of up to 5 files, up to 25MB each. A paid tier for larger batches and bigger files is planned, but the free tier is not a trial — it stays free.",
  },
  {
    q: "Which browsers are supported?",
    a: "Any modern Chrome, Edge, Firefox, or Safari release. AVIF output requires a browser with AVIF encoding support in Canvas — currently strongest in Chrome and Edge.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-5 pt-14 sm:pt-20 pb-14">
          <h1 className="heading-display text-2xl sm:text-3xl text-ink text-center mb-3">
            File tools that never upload your files.
          </h1>
          <p className="font-sans text-sm sm:text-base text-ink-dim text-center mb-10 max-w-[46ch] mx-auto">
            Compress, convert, and resize images in your browser. Nothing touches a server —{" "}
            <span className="text-ink font-medium">your file never leaves this tab.</span>
          </p>

          <HomeHero />
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 py-14">
        <h2 className="heading-display text-lg text-ink mb-5">More tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FILE_TOOLS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="panel p-4 hover:border-signal transition-colors">
              <p className="font-sans text-sm font-medium text-ink mb-1">{t.name}</p>
              <p className="font-sans text-xs text-ink-dim leading-relaxed">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            ["No upload", "Files are read and processed locally. Nothing is sent over the network."],
            ["Works offline", "After the first visit, tools keep working without a connection."],
            ["No signup", "No account, no email, no cookie banner. Drop a file and go."],
          ].map(([title, body]) => (
            <div key={title}>
              <p className="font-sans text-sm font-semibold text-ink mb-1">{title}</p>
              <p className="font-sans text-xs text-ink-dim leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-5 pb-16">
        <h2 className="heading-display text-lg text-ink mb-5">Frequently asked questions</h2>
        <div className="space-y-5">
          {FAQS.map((f) => (
            <div key={f.q}>
              <p className="font-sans text-sm font-medium text-ink mb-1">{f.q}</p>
              <p className="font-sans text-sm text-ink-dim leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
