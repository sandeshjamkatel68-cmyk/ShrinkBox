import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ShrinkBox — Free File Compression Tool",
  description: "Learn about ShrinkBox — a free online tool for compressing images and PDFs. No signup, no storage, no tricks.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-10">
        <span className="text-xs font-medium text-[var(--brand)] border border-[var(--brand)]/30 rounded-full px-3 py-1">About us</span>
        <h1 className="text-4xl font-bold mt-4 mb-4">We built ShrinkBox to solve a simple problem.</h1>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
          File compression tools online are either confusing, full of ads, or force you to create an account just to compress a single image. We thought that was unnecessary.
        </p>
      </div>

      <div className="space-y-8 text-[var(--text-muted)] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">What ShrinkBox does</h2>
          <p>
            ShrinkBox is a free online utility for compressing and converting files — images and PDFs — directly in your browser. You upload a file, we compress or convert it on our servers, and you download the result. That's the entire product.
          </p>
          <p className="mt-3">
            We currently support JPG, PNG, WebP image compression and conversion, PDF compression, PDF merge and split, image resizing, and bulk image compression.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">How we handle your files</h2>
          <p>
            Your privacy matters. When you upload a file to ShrinkBox, it is processed entirely on our server and immediately deleted after you download the result. We do not store your files, we do not index them, and we do not share them with anyone.
          </p>
          <p className="mt-3">
            Files that are not downloaded are automatically swept and deleted within 10 minutes. We have no interest in your file content — only in making compression fast and easy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Who is this for?</h2>
          <p>ShrinkBox is built for anyone who needs to reduce a file size quickly:</p>
          <ul className="mt-3 space-y-2 list-none">
            {[
              "Designers and developers optimizing images for the web",
              "Students compressing files to meet email attachment limits",
              "Small business owners preparing documents for clients",
              "Anyone who Googled 'how to compress a JPG' and wants a fast answer",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--brand)] mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Our commitment</h2>
          <p>
            ShrinkBox will always have a free tier. We believe compression is a basic utility — like a calculator — and it should not be locked behind a paywall. Our goal is to keep the free experience fast, honest, and completely functional.
          </p>
          <p className="mt-3">
            We are transparent about what our tools can and cannot do. We never fake compression results or exaggerate reduction percentages. If a file is already well-optimized, we tell you that directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Contact us</h2>
          <p>
            Questions, feedback, or something not working? We'd love to hear from you.{" "}
            <Link href="/contact" className="text-[var(--brand)] hover:underline">
              Visit our contact page
            </Link>.
          </p>
        </section>
      </div>

      {/* Trust badges */}
      <div className="mt-12 grid grid-cols-3 gap-4 text-center text-sm">
        {[
          { icon: "🔒", label: "Files deleted instantly" },
          { icon: "🚫", label: "No account required" },
          { icon: "⚡", label: "Processed in seconds" },
        ].map((b) => (
          <div key={b.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="text-2xl mb-2">{b.icon}</div>
            <div className="text-[var(--text-muted)] text-xs">{b.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
