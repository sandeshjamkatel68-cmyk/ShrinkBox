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
  "Top Guides": [
    { href: "/blog/how-to-compress-images-for-web", label: "Image Compression Guide" },
    { href: "/blog/reduce-pdf-file-size",           label: "Reduce PDF Size" },
    { href: "/blog/jpg-vs-png-vs-webp",             label: "Web Image Formats" },
    { href: "/blog/merge-pdf-guide",                label: "How to Merge PDFs" },
    { href: "/blog/ilovepdf-alternative",           label: "ilovepdf Alternative" },
    { href: "/blog/convert-images-to-pdf",          label: "Convert Images to PDF" },
  ],
  "Internal": [
    { href: "/about",   label: "About" },
    { href: "/blog",    label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms",   label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="max-w-[1120px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 no-underline mb-4">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="hsl(var(--brand))"/>
                <path d="M8.5 10h11M8.5 14h8M12 18.5l2 2.5 4.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-[15px] text-foreground tracking-tight">ShrinkBox</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Free online tools for compressing, converting, and editing images and PDFs. No signup. Files deleted instantly.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { dot: true, text: "Files deleted after processing" },
                { dot: true, text: "No account required" },
                { dot: true, text: "HTTPS encrypted" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 text-xs text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-subtle mb-4">{title}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted hover:text-foreground no-underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-subtle">
          <span>© {new Date().getFullYear()} ShrinkBox. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-muted no-underline transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-muted no-underline transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-muted no-underline transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
