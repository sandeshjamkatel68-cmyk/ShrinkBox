import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-[var(--text-muted)]">
        <div>
          <div className="text-[var(--text)] font-semibold mb-3 flex items-center gap-2">
            <span className="text-[var(--brand)]">⬡</span> ShrinkBox
          </div>
          <p className="text-xs leading-relaxed mb-3">
            Fast, free file compression. No login. No tricks. Files deleted automatically.
          </p>
          <p className="text-xs text-[var(--text-subtle)]">
            Compress images and PDFs online — JPG, PNG, WebP, PDF.
          </p>
        </div>

        <div>
          <div className="font-medium text-[var(--text)] mb-3">Tools</div>
          <ul className="space-y-2">
            <li><Link href="/compress-image"      className="hover:text-[var(--text)] transition-colors">Compress Image</Link></li>
            <li><Link href="/compress-pdf"        className="hover:text-[var(--text)] transition-colors">Compress PDF</Link></li>
            <li><Link href="/bulk-compress"       className="hover:text-[var(--text)] transition-colors">Bulk Compress</Link></li>
            <li><Link href="/resize-image"        className="hover:text-[var(--text)] transition-colors">Resize Image</Link></li>
            <li><Link href="/convert-jpg-to-png"  className="hover:text-[var(--text)] transition-colors">JPG to PNG</Link></li>
            <li><Link href="/convert-png-to-webp" className="hover:text-[var(--text)] transition-colors">PNG to WebP</Link></li>
            <li><Link href="/merge-pdf"           className="hover:text-[var(--text)] transition-colors">Merge PDF</Link></li>
            <li><Link href="/split-pdf"           className="hover:text-[var(--text)] transition-colors">Split PDF</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-medium text-[var(--text)] mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link href="/about"   className="hover:text-[var(--text)] transition-colors">About</Link></li>
            <li><Link href="/blog"    className="hover:text-[var(--text)] transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--text)] transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms"   className="hover:text-[var(--text)] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-medium text-[var(--text)] mb-3">Trust</div>
          <ul className="space-y-2 text-xs leading-relaxed">
            <li>🔒 Files deleted after processing</li>
            <li>🚫 No account required</li>
            <li>⚡ Processed in seconds</li>
            <li>📱 Works on mobile</li>
            <li>🔐 HTTPS encrypted</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--text-subtle)]">
        © {new Date().getFullYear()} ShrinkBox. All rights reserved. ·{" "}
        <Link href="/privacy" className="hover:text-[var(--text-muted)] transition-colors">Privacy</Link> ·{" "}
        <Link href="/terms"   className="hover:text-[var(--text-muted)] transition-colors">Terms</Link> ·{" "}
        <Link href="/contact" className="hover:text-[var(--text-muted)] transition-colors">Contact</Link>
      </div>
    </footer>
  );
}

