import type { Metadata } from "next";
import SplitPdfWidget from "@/components/tools/SplitPdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Split PDF Online Free — Extract PDF Pages | ShrinkBox",
  description:
    "Split PDF files online for free. Extract PDF pages into separate files, download individual pages or all at once, and keep the original formatting. No signup required with ShrinkBox.",
  keywords: [
    "split pdf online",
    "extract pdf pages",
    "pdf splitter",
    "split pdf free",
    "separate pdf pages",
    "pdf page extractor",
    "online pdf splitter",
    "extract pages from pdf",
    "ShrinkBox split pdf",
  ],
  alternates: {
    canonical: "https://shrink-box.com/split-pdf",
  },
  openGraph: {
    title: "Split PDF Online Free — Extract PDF Pages | ShrinkBox",
    description:
      "Extract individual pages from a PDF online for free. Download separate PDF pages instantly with ShrinkBox.",
    url: "https://shrink-box.com/split-pdf",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Split PDF Online Free — Extract PDF Pages | ShrinkBox",
    description:
      "Split PDF files online for free and extract pages into separate files with ShrinkBox.",
  },
};

const FAQ_ITEMS = [
  {
    q: "How does PDF splitting work?",
    a: "Each page of your PDF is extracted into its own separate PDF file. You can then download individual pages or download all extracted pages at once.",
  },
  {
    q: "Is there a page limit?",
    a: "The free version processes up to 20 pages per file. If your PDF has more than that, only the supported number of pages will be extracted.",
  },
  {
    q: "Will the split pages look exactly like the original?",
    a: "Yes. Each extracted page keeps the original text, images, and layout from the source PDF.",
  },
  {
    q: "Can I split a password-protected PDF?",
    a: "No. Password-protected or encrypted PDFs need to be unlocked before they can be split.",
  },
  {
    q: "Is this PDF splitter free to use?",
    a: "Yes. ShrinkBox lets you split PDF files online for free with no signup required.",
  },
  {
    q: "Are my uploaded PDF files stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function SplitPdfPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="✂️"
          title="Split PDF into Pages"
          description="Extract individual pages from a PDF online. Download pages one by one or all at once in seconds — no signup required."
          badge="Free · Up to 20 pages"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you split PDF files online for free without installing software
            or creating an account. If you need to extract one page, separate multiple
            pages, or break a document into smaller parts, this tool makes the process fast
            and simple for school, office, business, and personal use.
          </p>
        </div>

        <SplitPdfWidget />

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
            Why use an online PDF splitter?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Splitting a PDF is useful when you only need certain pages from a larger
            document. Instead of sending or storing the whole file, you can extract the
            pages you need and keep the document more organized.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is especially helpful for students, office work, scanned documents,
            contracts, reports, forms, and application files. A PDF splitter makes it easier
            to separate sections, remove unnecessary pages, and share only the relevant
            parts.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to extract PDF pages online for free,
            with simple downloads and no need to install a desktop PDF tool.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How PDF splitting works
        </h2>
        <p>
          Our PDF splitter reads the pages in your uploaded PDF and creates separate output
          files for each extracted page. The goal is to preserve the original page content,
          formatting, and layout while making each page available as its own PDF.
        </p>
        <p>
          This is a convenient way to break large PDF documents into smaller files for
          sharing, archiving, printing, or submitting only the pages you need.
        </p>
      </section>
    </>
  );
}