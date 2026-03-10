"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-[var(--brand)]">⬡</span>
          <span>ShrinkBox</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-muted)]">
          <Link href="/compress-image"      className="hover:text-[var(--text)] transition-colors">Compress Image</Link>
          <Link href="/compress-pdf"        className="hover:text-[var(--text)] transition-colors">Compress PDF</Link>
          <Link href="/bulk-compress"       className="hover:text-[var(--text)] transition-colors">Bulk Compress</Link>
          <Link href="/merge-pdf"           className="hover:text-[var(--text)] transition-colors">Merge PDF</Link>
          <Link href="/resize-image"        className="hover:text-[var(--text)] transition-colors">Resize</Link>
          <Link href="/convert-jpg-to-png"  className="hover:text-[var(--text)] transition-colors">Convert</Link>
        </nav>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden text-[var(--text-muted)] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex flex-col gap-3 text-sm">
          <Link href="/compress-image"       onClick={() => setMenuOpen(false)}>Compress Image</Link>
          <Link href="/compress-pdf"         onClick={() => setMenuOpen(false)}>Compress PDF</Link>
          <Link href="/compress-webp"        onClick={() => setMenuOpen(false)}>Compress WebP</Link>
          <Link href="/bulk-compress"        onClick={() => setMenuOpen(false)}>Bulk Compress</Link>
          <Link href="/resize-image"         onClick={() => setMenuOpen(false)}>Resize Image</Link>
          <Link href="/convert-jpg-to-png"   onClick={() => setMenuOpen(false)}>JPG → PNG</Link>
          <Link href="/convert-png-to-webp"  onClick={() => setMenuOpen(false)}>PNG → WebP</Link>
          <Link href="/convert-jpg-to-webp"  onClick={() => setMenuOpen(false)}>JPG → WebP</Link>
          <Link href="/merge-pdf"            onClick={() => setMenuOpen(false)}>Merge PDF</Link>
          <Link href="/split-pdf"            onClick={() => setMenuOpen(false)}>Split PDF</Link>
        </div>
      )}
    </header>
  );
}
