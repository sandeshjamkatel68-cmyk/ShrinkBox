import type { Metadata } from "next";
import MergePdfWidget from "@/components/tools/MergePdfWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Merge PDF Online Free — Combine PDF Files | ShrinkBox",
  description:
    "Merge PDF files online for free. Combine multiple PDFs into one document, reorder files before merging, and download the merged PDF instantly. No signup required with ShrinkBox.",
  keywords: [
    "merge pdf online",
    "combine pdf files",
    "pdf merger",
    "merge pdf free",
    "join pdf files",
    "merge multiple pdfs",
    "online pdf merger",
    "combine pdf online",
    "ShrinkBox merge pdf",
  ],
  alternates: {
    canonical: "https://shrink-box.com/merge-pdf",
  },
  openGraph: {
    title: "Merge PDF Online Free — Combine PDF Files | ShrinkBox",
    description:
      "Combine multiple PDF files into one online for free. Reorder files and download the merged PDF instantly.",
    url: "https://shrink-box.com/merge-pdf",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Online Free — Combine PDF Files | ShrinkBox",
    description:
      "Merge PDF files online for free and combine multiple documents into one with ShrinkBox.",
  },
};

const FAQ_ITEMS = [
  {
    q: "How many PDFs can I merge at once?",
    a: "You can merge up to 10 PDF files in a single operation for free.",
  },
  {
    q: "Can I reorder files before merging?",
    a: "Yes. After uploading your PDF files, you can change their order before creating the merged document.",
  },
  {
    q: "Will the merged PDF keep the original formatting?",
    a: "Yes. The merged PDF keeps the text, images, and layout from each original PDF file.",
  },
  {
    q: "Can I merge password-protected PDFs?",
    a: "No. Password-protected or encrypted PDF files need to be unlocked before they can be merged.",
  },
  {
    q: "Is this PDF merger free to use?",
    a: "Yes. ShrinkBox lets you merge PDF files online for free with no signup required.",
  },
  {
    q: "Are my uploaded PDF files stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function MergePdfPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="📎"
          title="Merge PDF Files"
          description="Combine multiple PDF files into a single document online. Upload your PDFs, set the file order, and download the merged result in seconds — no signup required."
          badge="Free · Up to 10 files"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you merge PDF files online for free without installing software
            or creating an account. If you need to combine reports, assignments, forms,
            scanned pages, resumes, or other documents into one PDF, this tool makes the
            process quick and simple.
          </p>
        </div>

        <MergePdfWidget />

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
            Why use an online PDF merger?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Merging PDF files is useful when you want to keep related documents together in
            one file. Instead of sending or storing multiple separate PDFs, you can combine
            them into a single document that is easier to manage, upload, print, or share.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is especially helpful for students, office work, business records,
            applications, reports, contracts, and scanned pages. A single merged PDF is more
            convenient for email, cloud storage, and document submission.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to combine PDFs online for free, with
            support for reordering files before merging and downloading the final result
            instantly.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How PDF merging works
        </h2>
        <p>
          Our PDF merger takes the uploaded PDF files, arranges them in the order you set,
          and combines them into a single output document. The goal is to preserve the
          original pages, formatting, and content while making the final file easier to use
          and share.
        </p>
        <p>
          This is a convenient way to organize multiple documents into one PDF without using
          desktop software. It works well for combining related files into a single clean
          document for digital workflows.
        </p>
      </section>
    </>
  );
}