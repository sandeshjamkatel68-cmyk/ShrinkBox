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

  // ── Redirects: old/renamed file-tool URLs → live tool pages ──
  // ShrinkBox is a file-tools site again (see shrink-box-rebuildplan.md).
  // Tools that now have a real page are NOT redirected — they resolve
  // directly. Everything else falls through to the /tools index instead
  // of a dead SaaS-alternatives category page.
  async redirects() {
    return [
      { source: "/compress-image-to-size", destination: "/compress-image", permanent: true },
      { source: "/bulk-compress", destination: "/compress-image", permanent: true },
      { source: "/compress-jpg", destination: "/compress-image", permanent: true },
      { source: "/compress-png", destination: "/compress-image", permanent: true },
      { source: "/compress-webp", destination: "/compress-image", permanent: true },
      { source: "/reduce-jpg-size", destination: "/compress-image", permanent: true },
      { source: "/reduce-png-size", destination: "/compress-image", permanent: true },
      { source: "/social-media-resizer", destination: "/resize-image", permanent: true },
      { source: "/convert-jpg-to-webp", destination: "/webp-converter", permanent: true },
      { source: "/convert-png-to-webp", destination: "/webp-converter", permanent: true },
      { source: "/convert-webp-to-jpg", destination: "/webp-converter", permanent: true },
      { source: "/convert-jpg-to-png", destination: "/jpg-to-png", permanent: true },
      { source: "/convert-png-to-jpg", destination: "/png-to-jpg", permanent: true },
      { source: "/image-to-base64", destination: "/tools", permanent: true },
      { source: "/base64-to-image", destination: "/tools", permanent: true },
      { source: "/crop-image", destination: "/tools", permanent: true },
      { source: "/watermark-image", destination: "/tools", permanent: true },
      { source: "/watermark-pdf", destination: "/tools", permanent: true },
      { source: "/image-to-grayscale", destination: "/tools", permanent: true },
      { source: "/svg-to-png", destination: "/tools", permanent: true },
      { source: "/images-to-pdf", destination: "/tools", permanent: true },
      { source: "/jpg-to-pdf", destination: "/tools", permanent: true },
      { source: "/png-to-pdf", destination: "/tools", permanent: true },
      { source: "/webp-to-pdf", destination: "/tools", permanent: true },
      { source: "/compress-pdf", destination: "/tools", permanent: true },
      { source: "/merge-pdf", destination: "/tools", permanent: true },
      { source: "/split-pdf", destination: "/tools", permanent: true },
      { source: "/pdf-to-jpg", destination: "/tools", permanent: true },
      { source: "/pdf-to-word", destination: "/tools", permanent: true },
      { source: "/pdf-to-image", destination: "/tools", permanent: true },
      { source: "/protect-pdf", destination: "/tools", permanent: true },
      { source: "/unlock-pdf", destination: "/tools", permanent: true },
      { source: "/rotate-pdf", destination: "/tools", permanent: true },
      { source: "/remove-pdf-pages", destination: "/tools", permanent: true },
      { source: "/add-page-numbers-pdf", destination: "/tools", permanent: true },
      { source: "/favicon-generator", destination: "/tools", permanent: true },
      { source: "/qr-code-generator", destination: "/tools", permanent: true },
      { source: "/color-picker", destination: "/tools", permanent: true },
      { source: "/json-formatter", destination: "/tools", permanent: true },
      { source: "/image-to-text", destination: "/tools", permanent: true },
      { source: "/meme-generator", destination: "/tools", permanent: true },
      { source: "/privacy-policy-generator", destination: "/tools", permanent: true },
      { source: "/bulk-image-downloader", destination: "/tools", permanent: true },
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
