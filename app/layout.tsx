import type { Metadata } from "next";
import { Archivo, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-data",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShrinkBox — File Tools That Never Upload Your Files",
    template: "%s | ShrinkBox",
  },
  description:
    "Compress, convert, and resize images, PDFs, and video entirely in your browser. Nothing is uploaded to a server — your file never leaves the tab.",
  alternates: {
    canonical: "https://shrink-box.com",
  },
  keywords: [
    "compress image online",
    "heic to jpg converter",
    "compress pdf without uploading",
    "image compressor that doesn't upload",
    "offline file compressor browser",
    "resize image online",
    "webp to png converter",
    "private file compressor",
  ],
  verification: {
    google: "fvxtXiiyxC4FAmF7IKprJdHOBflEpXjwoLgXLYlbPcI",
    other: {
      "msvalidate.01": "B5104EF60CDFF9D0B4CC09A251FF65A7",
      "impact-site-verification": "f6570a12-1315-4f95-97ec-924bf7726920",
    },
  },
  metadataBase: new URL("https://shrink-box.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrink-box.com",
    siteName: "ShrinkBox",
    title: "ShrinkBox — File Tools That Never Upload Your Files",
    description:
      "Compress, convert, and resize images, PDFs, and video entirely in your browser. Your file never leaves this tab.",
    images: [
      {
        url: "https://shrink-box.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShrinkBox — File tools that never upload your files",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShrinkBox — File Tools That Never Upload Your Files",
    description:
      "Compress, convert, and resize images, PDFs, and video entirely in your browser.",
    images: ["https://shrink-box.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShrinkBox",
    url: "https://shrink-box.com",
    logo: "https://shrink-box.com/icon-512.png",
    description:
      "File tools that never upload your files — compress, convert, and resize images, PDFs, and video entirely in the browser.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://shrink-box.com/contact",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ShrinkBox",
    url: "https://shrink-box.com",
    description:
      "File tools that never upload your files — compress, convert, and resize images, PDFs, and video entirely in the browser.",
    publisher: {
      "@type": "Organization",
      name: "ShrinkBox",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://shrink-box.com/tools?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${archivo.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
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

        <meta name="google-adsense-account" content="ca-pub-3220445637759521" />

        <StructuredData />
      </head>

      <body className="min-h-screen flex flex-col bg-casing text-ink">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
