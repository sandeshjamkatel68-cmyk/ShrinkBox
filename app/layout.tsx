import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShrinkBox — Free File Compression Online",
    template: "%s | ShrinkBox",
  },
  description:
    "Compress images and PDFs instantly. No sign-up required. Reduce JPG, PNG, WebP, and PDF file sizes for free.",
  keywords: [
    "compress image online",
    "reduce pdf size",
    "compress jpg",
    "compress png",
    "file size reducer",
    "free image compressor",
  ],
  verification: {
    google: "QHiiT1cFLbXp7paWiZbCCOcMRF551Xzn8jPKyGlvsnM",
  },
  metadataBase: new URL("https://shrink-box.com"),

  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrink-box.com",
    images: [{ url: "https://shrink-box.com/og-image.png", width: 1200, height: 630, alt: "ShrinkBox" }],
    siteName: "ShrinkBox",
    title: "ShrinkBox — Free File Compression Online",
    description:
      "Compress images and PDFs instantly. No sign-up required.",
  },
  twitter: {
    images: ["https://shrink-box.com/og-image.png"],
    card: "summary_large_image",
    title: "ShrinkBox — Free File Compression",
    description:
      "Compress images and PDFs instantly. No sign-up required.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WR9QK5Q510"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WR9QK5Q510');
          `}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3220445637759521"
     crossorigin="anonymous"></script>
      </head>

      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}