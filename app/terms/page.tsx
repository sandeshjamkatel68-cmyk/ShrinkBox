import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ShrinkBox",
  description: "ShrinkBox terms of service. Rules for using our free file compression tools.",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-[var(--text-muted)] mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">1. Acceptance of terms</h2>
          <p>By accessing or using ShrinkBox ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">2. Description of service</h2>
          <p>ShrinkBox provides free online tools for compressing, converting, resizing, merging, and splitting image and PDF files. The Service is provided "as is" without warranties of any kind. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">3. Acceptable use</h2>
          <p>You agree to use ShrinkBox only for lawful purposes. You must not:</p>
          <ul className="mt-3 space-y-2">
            {[
              "Upload files containing malware, viruses, or malicious code",
              "Upload files that infringe on any copyright, trademark, or intellectual property rights",
              "Attempt to overwhelm our servers through automated uploads, bots, or denial-of-service attacks",
              "Attempt to reverse-engineer, hack, or exploit any part of the Service",
              "Use the Service to process files containing illegal content of any kind",
              "Resell or redistribute the Service without written permission",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-red-400 shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">4. File ownership and responsibility</h2>
          <p>You retain full ownership of any files you upload. By uploading a file, you confirm that:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>You own the file or have permission to process it.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>The file does not contain illegal content.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>You are solely responsible for any consequences arising from the file's content.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">5. File limits and fair use</h2>
          <p>The free tier is subject to the following limits, which may change over time:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>Maximum file size: 10 MB per file</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>Rate limiting applies to prevent abuse (maximum 20 requests per minute per IP)</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>Bulk operations: maximum 10 files per batch</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>PDF split: up to 20 pages in the free tier</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">6. No guarantees on compression results</h2>
          <p>ShrinkBox processes files using industry-standard compression algorithms. However, we do not guarantee a specific reduction percentage for any file. Results vary depending on file content, existing compression, and file type. Files that are already well-optimized may show minimal reduction.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">7. Disclaimer of warranties</h2>
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT FILES WILL BE PROCESSED WITHOUT DATA LOSS.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">8. Limitation of liability</h2>
          <p>TO THE FULLEST EXTENT PERMITTED BY LAW, SHRINKBOX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE, INCLUDING DATA LOSS. ALWAYS KEEP BACKUPS OF IMPORTANT FILES BEFORE PROCESSING THEM.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">9. Changes to terms</h2>
          <p>We may update these terms from time to time. We will update the "Last updated" date above. Continued use of the Service after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">10. Contact</h2>
          <p>Questions about these terms? Contact us at <a href="mailto:legal@shrinkbox.io" className="text-[var(--brand)] hover:underline">legal@shrinkbox.io</a>.</p>
        </section>

      </div>
    </div>
  );
}
