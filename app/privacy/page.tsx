import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ShrinkBox",
  description: "ShrinkBox privacy policy. Learn how we handle your files and data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-[var(--text-muted)] mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Overview</h2>
          <p>ShrinkBox ("we", "our", "us") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and what rights you have. By using ShrinkBox, you agree to this policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Files you upload</h2>
          <p>When you upload a file for compression, conversion, or any other operation:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>Your file is transmitted securely to our server via HTTPS.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>It is processed in a temporary location and the output is returned to you.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>Both the input and output files are deleted automatically within 10 minutes of processing, or immediately after you download the result.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>We do not read, analyze, index, or store the content of your files.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span>We do not share your files with any third party under any circumstance.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Information we collect automatically</h2>
          <p>Like most websites, ShrinkBox collects basic technical information when you visit:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span><strong className="text-[var(--text)]">IP address</strong> — used for rate limiting and abuse prevention. Not stored beyond the session.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span><strong className="text-[var(--text)]">Browser and device type</strong> — collected via analytics to understand how the site is used.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span><strong className="text-[var(--text)]">Pages visited</strong> — used to understand which tools are most useful.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span><strong className="text-[var(--text)]">Referring URL</strong> — where you came from before visiting ShrinkBox.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Cookies</h2>
          <p>ShrinkBox uses a minimal number of cookies:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span><strong className="text-[var(--text)]">Theme preference</strong> — stores your light/dark mode preference in localStorage. This never leaves your browser.</span></li>
            <li className="flex gap-2"><span className="text-[var(--brand)] shrink-0">→</span><span><strong className="text-[var(--text)]">Analytics cookies</strong> — if analytics is enabled, we use privacy-friendly analytics that does not track personal identifiers.</span></li>
          </ul>
          <p className="mt-3">We do not use advertising cookies or tracking cookies from social media platforms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Analytics</h2>
          <p>We use analytics software to understand site usage — which tools are used, what devices visit, and general traffic patterns. This data is aggregated and anonymized. We do not track individual users across sessions.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Advertising</h2>
          <p>ShrinkBox may display advertisements provided by Google AdSense or similar networks. These networks may use cookies to show relevant ads based on your browsing history. You can opt out of personalized advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] hover:underline">adssettings.google.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Data security</h2>
          <p>All connections to ShrinkBox use HTTPS encryption. Uploaded files are stored only in server memory or temporary disk storage and are never written to permanent storage or databases. Our servers are hosted on reputable cloud infrastructure with industry-standard security practices.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Children's privacy</h2>
          <p>ShrinkBox is not directed at children under 13 years of age and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Your rights</h2>
          <p>Because we do not store personal data or file content, there is generally nothing to request deletion of. If you have concerns about any data we may hold, contact us at the address below and we will respond within 30 days.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Changes to this policy</h2>
          <p>We may update this policy occasionally. We will note the "Last updated" date at the top of this page. Continued use of ShrinkBox after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text)] mb-3">Contact</h2>
          <p>Questions about this privacy policy? Email us at <a href="mailto:privacy@shrinkbox.io" className="text-[var(--brand)] hover:underline">privacy@shrinkbox.io</a> or use our <a href="/contact" className="text-[var(--brand)] hover:underline">contact form</a>.</p>
        </section>

      </div>
    </div>
  );
}
