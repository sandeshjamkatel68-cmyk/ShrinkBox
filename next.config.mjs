/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["sharp"],

  // ── Image Optimization ──────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // ── Compression ─────────────────────────────────────────
  compress: true,

  // ── Performance ─────────────────────────────────────────
  poweredByHeader: false,

  // ── Redirects: old file-tool URLs → new SaaS alternative pages ──
  // The site pivoted from a file compression tool to a SaaS
  // alternatives directory. Google still has the old URLs indexed
  // and crawls them, producing 404s. Redirect them to the most
  // relevant new page instead of letting them die.
  async redirects() {
    return [
      { source: "/compress-image", destination: "/", permanent: true },
      { source: "/compress-image-to-size", destination: "/", permanent: true },
      { source: "/bulk-compress", destination: "/", permanent: true },
      { source: "/compress-jpg", destination: "/", permanent: true },
      { source: "/compress-png", destination: "/", permanent: true },
      { source: "/compress-webp", destination: "/", permanent: true },
      { source: "/compress-pdf", destination: "/", permanent: true },
      { source: "/reduce-jpg-size", destination: "/", permanent: true },
      { source: "/reduce-png-size", destination: "/", permanent: true },
      { source: "/resize-image", destination: "/", permanent: true },
      { source: "/crop-image", destination: "/", permanent: true },
      { source: "/watermark-image", destination: "/", permanent: true },
      { source: "/watermark-pdf", destination: "/", permanent: true },
      { source: "/image-to-grayscale", destination: "/", permanent: true },
      { source: "/social-media-resizer", destination: "/", permanent: true },
      { source: "/convert-jpg-to-webp", destination: "/category/design", permanent: true },
      { source: "/convert-jpg-to-png", destination: "/category/design", permanent: true },
      { source: "/convert-png-to-jpg", destination: "/category/design", permanent: true },
      { source: "/convert-png-to-webp", destination: "/category/design", permanent: true },
      { source: "/convert-webp-to-jpg", destination: "/category/design", permanent: true },
      { source: "/heic-to-jpg", destination: "/category/design", permanent: true },
      { source: "/svg-to-png", destination: "/category/design", permanent: true },
      { source: "/images-to-pdf", destination: "/", permanent: true },
      { source: "/jpg-to-pdf", destination: "/", permanent: true },
      { source: "/png-to-pdf", destination: "/", permanent: true },
      { source: "/webp-to-pdf", destination: "/", permanent: true },
      { source: "/merge-pdf", destination: "/", permanent: true },
      { source: "/split-pdf", destination: "/", permanent: true },
      { source: "/pdf-to-jpg", destination: "/", permanent: true },
      { source: "/pdf-to-word", destination: "/", permanent: true },
      { source: "/pdf-to-image", destination: "/", permanent: true },
      { source: "/protect-pdf", destination: "/category/password", permanent: true },
      { source: "/unlock-pdf", destination: "/category/password", permanent: true },
      { source: "/rotate-pdf", destination: "/", permanent: true },
      { source: "/remove-pdf-pages", destination: "/", permanent: true },
      { source: "/add-page-numbers-pdf", destination: "/", permanent: true },
      { source: "/favicon-generator", destination: "/category/design", permanent: true },
      { source: "/qr-code-generator", destination: "/", permanent: true },
      { source: "/color-picker", destination: "/category/design", permanent: true },
      { source: "/json-formatter", destination: "/category/development", permanent: true },
      { source: "/image-to-base64", destination: "/category/development", permanent: true },
      { source: "/base64-to-image", destination: "/category/development", permanent: true },
      { source: "/image-to-text", destination: "/", permanent: true },
      { source: "/meme-generator", destination: "/category/design", permanent: true },
      { source: "/privacy-policy-generator", destination: "/", permanent: true },
      { source: "/bulk-image-downloader", destination: "/", permanent: true },
    ];
  },

  // ── Security & Caching Headers ──────────────────────────
  async headers() {
    return [
      // Global security headers
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Cache static assets aggressively (fonts, images, icons)
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache JS/CSS chunks (they have content hashes in filenames)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
