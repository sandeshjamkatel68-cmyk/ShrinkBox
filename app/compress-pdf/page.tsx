import type { Metadata } from "next";
import CompressorWidget from "@/components/upload/CompressorWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Compress PDF Online Free — Reduce PDF File Size | ShrinkBox",
  description:
    "Compress PDF files online for free. Reduce PDF file size quickly by cleaning metadata and optimizing document structure. No signup required. Fast, private, and simple with ShrinkBox.",
  keywords: [
    "compress pdf online",
    "pdf compressor",
    "reduce pdf file size",
    "shrink pdf",
    "make pdf smaller",
    "free pdf compressor",
    "reduce pdf size for email",
    "online pdf compression",
    "compress pdf free",
    "ShrinkBox pdf compressor",
  ],
  alternates: {
    canonical: "https://shrink-box.com/compress-pdf",
  },
  openGraph: {
    title: "Compress PDF Online Free — Reduce PDF File Size | ShrinkBox",
    description:
      "Reduce PDF file size online for free. Fast PDF compression with no signup required.",
    url: "https://shrink-box.com/compress-pdf",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Online Free — Reduce PDF File Size | ShrinkBox",
    description:
      "Compress PDF files online for free and reduce document size quickly with ShrinkBox.",
  },
};

const PDF_FAQ = [
  {
    q: "How much will my PDF shrink?",
    a: "The size reduction depends on the PDF itself. Some files shrink noticeably, especially if they include extra metadata or inefficient internal structure. Other PDFs that are already optimized may shrink less. ShrinkBox always shows the exact before-and-after result.",
  },
  {
    q: "Will my PDF content change?",
    a: "No. Your document text, images, and layout are preserved. The compression process focuses on reducing unnecessary overhead and improving the internal structure of the file.",
  },
  {
    q: "Can I compress a password-protected PDF?",
    a: "No. Encrypted or password-protected PDFs cannot be processed until the password protection is removed.",
  },
  {
    q: "Why is my compressed PDF the same size?",
    a: "Some PDFs are already well optimized, so there may be little or no extra size to remove. In that case, ShrinkBox will show the real result instead of pretending the file was compressed.",
  },
  {
    q: "Is this PDF compressor free to use?",
    a: "Yes. You can compress PDF files online for free with no signup required.",
  },
  {
    q: "Are my uploaded PDF files stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function CompressPDFPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="📄"
          title="Compress PDF Online"
          description="Reduce PDF file size online for free. Upload your document, optimize it in seconds, and download a smaller PDF without signup."
          badge="Free · No signup · Instant"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you compress PDF files online without extra software or complicated
            steps. If your PDF is too large for email, uploading, storage, or sharing, this
            tool can reduce file size while keeping the document readable and usable. It is a
            simple free PDF compressor for students, professionals, offices, and everyday use.
          </p>
        </div>

        <CompressorWidget />

        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={PDF_FAQ} />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Why use an online PDF compressor?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Large PDF files can be difficult to email, slow to upload, and inconvenient to
            store or share. Compressing a PDF reduces the file size so it becomes easier to
            send through email, submit on websites, store in the cloud, or share with others.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is especially useful for resumes, reports, assignments, scanned documents,
            forms, presentations, and office files. A smaller PDF saves bandwidth, speeds up
            file transfer, and helps avoid file-size upload limits.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to reduce PDF file size online for free,
            without needing an account or installing a desktop application.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How PDF compression works
        </h2>
        <p>
          Our PDF compressor uses pdf-lib to parse, clean, and re-pack PDF files. It removes
          embedded metadata such as author information, creation timestamps, and software
          signatures, then optimizes the file structure where possible.
        </p>
        <p>
          This method works best on PDFs exported from word processors, browsers, office tools,
          and other software that often adds unnecessary metadata or structural overhead. The
          result is a smaller PDF without changing the visible content of the document.
        </p>
      </section>
    </>
  );
}