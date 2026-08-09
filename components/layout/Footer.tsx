import Link from "next/link";
import { FILE_TOOLS } from "@/lib/data/fileTools";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-signal flex items-center justify-center rounded">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 3.5h9M2 6.5h6M4 9.5l2 1.5 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="heading-display text-sm text-ink">ShrinkBox</span>
            </Link>
            <p className="text-xs font-sans text-ink-dim leading-relaxed max-w-[200px]">
              File tools that never upload your files. Everything runs in your browser.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-widest text-ink-dim mb-3">Image tools</p>
            <ul className="space-y-2">
              {FILE_TOOLS.filter((t) => t.category === "image").map((t) => (
                <li key={t.slug}>
                  <Link href={`/${t.slug}`} className="text-xs font-sans text-ink-dim hover:text-signal transition-colors">
                    {t.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-widest text-ink-dim mb-3">Product</p>
            <ul className="space-y-2">
              {[
                ["/tools", "All Tools"],
                ["/blog", "Blog"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-xs font-sans text-ink-dim hover:text-signal transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-widest text-ink-dim mb-3">Company</p>
            <ul className="space-y-2">
              {[
                ["/about", "About"],
                ["/contact", "Contact"],
                ["/privacy", "Privacy"],
                ["/terms", "Terms"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-xs font-sans text-ink-dim hover:text-signal transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] font-sans text-ink-dim">© {new Date().getFullYear()} ShrinkBox — your file never leaves this tab.</span>
          <div className="flex items-center gap-4">
            {[["/privacy", "Privacy"], ["/terms", "Terms"], ["/contact", "Contact"]].map(([href, label]) => (
              <Link key={href} href={href} className="text-[11px] font-sans text-ink-dim hover:text-ink transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
