import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:  "ShrinkBox — Find Free Alternatives to Expensive SaaS Tools",
    template: "%s | ShrinkBox",
  },
  description:
    "Stop overpaying for software. Find free and cheaper alternatives to Notion, Figma, Ahrefs, Slack, and 25+ popular SaaS tools. Save hundreds every month.",
  verification: {
    google: "fvxtXiiyxC4FAmF7IKprJdHOBflEpXjwoLgXLYlbPcI",
    other: {
      "msvalidate.01": "B5104EF60CDFF9D0B4CC09A251FF65A7",
      "impact-site-verification": "f6570a12-1315-4f95-97ec-924bf7726920",
    },
  },
  metadataBase: new URL("https://shrink-box.com"),
  icons: {
    icon:     "/favicon.ico",
    shortcut: "/favicon.ico",
    apple:    "/apple-icon.png",
  },
  openGraph: {
    type:     "website",
    locale:   "en_US",
    url:      "https://shrink-box.com",
    siteName: "ShrinkBox",
    title:    "ShrinkBox — Free Image & PDF Tools Online",
    description: "Free online tools for compressing, converting, resizing, and editing images and PDFs. No signup required.",
    images: [
      {
        url:    "https://shrink-box.com/og-image.png",
        width:  1200,
        height: 630,
        alt:    "ShrinkBox — Free Image & PDF Tools",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "ShrinkBox — Free Image & PDF Tools",
    description: "Free online tools for compressing and converting images and PDFs. No signup required.",
    images:      ["https://shrink-box.com/og-image.png"],
  },
  robots: {
    index:  true,
    follow: true,
  },
};

// ── JSON-LD Structured Data ─────────────────────────────
function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ShrinkBox",
    "url": "https://shrink-box.com",
    "logo": "https://shrink-box.com/icon-512.png",
    "description": "Free online tools for compressing, converting, resizing, and editing images and PDFs.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://shrink-box.com/contact",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ShrinkBox",
    "url": "https://shrink-box.com",
    "description": "Free online tools for compressing, converting, resizing, and editing images and PDFs.",
    "publisher": {
      "@type": "Organization",
      "name": "ShrinkBox",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shrink-box.com/tools?q={search_term_string}",
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
    <html lang="en" dir="ltr" className={`${geist.variable} ${geistMono.variable}`}>
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

      <body className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Analytics />
      </body>
    </html>
  );
}
