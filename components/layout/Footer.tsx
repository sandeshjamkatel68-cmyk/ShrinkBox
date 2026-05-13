import Link from "next/link";

const FOOTER_LINKS = {
  "Image Tools": [
    { href: "/compress-image",      label: "Compress Image" },
    { href: "/bulk-compress",       label: "Bulk Compress" },
    { href: "/resize-image",        label: "Resize Image" },
    { href: "/crop-image",          label: "Crop Image" },
    { href: "/image-to-grayscale",  label: "Black & White" },
    { href: "/reduce-jpg-size",     label: "Reduce JPG" },
    { href: "/reduce-png-size",     label: "Reduce PNG" },
    { href: "/convert-jpg-to-webp", label: "JPG → WebP" },
    { href: "/convert-png-to-jpg",  label: "PNG → JPG" },
    { href: "/images-to-pdf",       label: "Images → PDF" },
  ],
  "PDF Tools": [
    { href: "/compress-pdf",         label: "Compress PDF" },
    { href: "/merge-pdf",            label: "Merge PDF" },
    { href: "/split-pdf",            label: "Split PDF" },
    { href: "/rotate-pdf",           label: "Rotate PDF" },
    { href: "/remove-pdf-pages",     label: "Remove Pages" },
    { href: "/watermark-pdf",        label: "Watermark PDF" },
    { href: "/protect-pdf",          label: "Protect PDF" },
    { href: "/unlock-pdf",           label: "Unlock PDF" },
    { href: "/pdf-to-jpg",           label: "PDF → JPG" },
    { href: "/pdf-to-word",          label: "PDF → Word" },
    { href: "/add-page-numbers-pdf", label: "Page Numbers" },
  ],
  "Guides": [
    { href: "/blog/how-to-compress-images-for-web",     label: "Image Optimization" },
    { href: "/blog/reduce-pdf-file-size",                label: "Reduce PDF Size" },
    { href: "/blog/pdf-too-large-to-email",              label: "PDF Email Fix" },
    { href: "/blog/instagram-image-size-guide-2026",     label: "Instagram Sizes 2026" },
    { href: "/blog/heic-vs-jpg",                         label: "HEIC vs JPG" },
    { href: "/blog/core-web-vitals-images",              label: "Core Web Vitals" },
    { href: "/blog/whatsapp-image-compression-guide",    label: "WhatsApp Quality" },
    { href: "/blog/qr-code-for-business-card",           label: "QR Code Guide" },
    { href: "/blog/svg-vs-png",                          label: "SVG vs PNG" },
    { href: "/blog/extract-text-from-image",             label: "OCR Guide" },
    { href: "/blog/tinypng-alternative",                 label: "TinyPNG Alternative" },
  ],
  "Company": [
    { href: "/about",   label: "About" },
    { href: "/blog",    label: "Blog" },
    { href: "/tools",   label: "All Tools" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms",   label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] mt-16 sm:mt-20">
      <div className="max-w-[1200px] mx-auto px-5 py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 no-underline mb-4" aria-label="ShrinkBox home">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "hsl(var(--brand))" }}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5h8M3 7.5h5M5 10l2 1.5L10 8" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-[15px] text-[hsl(var(--text))] tracking-tight">ShrinkBox</span>
            </Link>
            <p className="text-xs text-[hsl(var(--text-muted))] leading-relaxed mb-4 max-w-[240px]">
              Free tools for compressing, converting, and editing images and PDFs. No signup required.
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                "Files deleted after processing",
                "No account required",
                "HTTPS encrypted",
              ].map(text => (
                <div key={text} className="flex items-center gap-2 text-[11px] text-[hsl(var(--text-subtle))]">
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: "hsl(var(--brand))" }} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[hsl(var(--text-subtle))] mb-3">{title}</p>
              <ul className="flex flex-col gap-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] no-underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[hsl(var(--text-subtle))]">
          <span>© {new Date().getFullYear()} ShrinkBox. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[hsl(var(--text-muted))] no-underline transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-[hsl(var(--text-muted))] no-underline transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-[hsl(var(--text-muted))] no-underline transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
