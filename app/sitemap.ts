import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

/**
 * Sitemap generator for ShrinkBox.
 * Essential for Google to discover all 50+ tools and blog posts.
 */

const BASE_URL = "https://shrink-box.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPaths = [
    // Image tools
    "/compress-image",
    "/compress-webp",
    "/bulk-compress",
    "/resize-image",
    "/crop-image",
    "/image-to-grayscale",
    "/reduce-jpg-size",
    "/reduce-png-size",
    "/compress-image-to-size",
    "/heic-to-jpg",
    "/image-to-text",
    "/color-picker",
    "/svg-to-png",
    "/watermark-image",
    "/image-to-base64",
    "/base64-to-image",
    "/favicon-generator",
    "/meme-generator",
    "/qr-code-generator",
    "/social-media-resizer",
    "/json-formatter",
    
    // PDF tools
    "/compress-pdf",
    "/merge-pdf",
    "/split-pdf",
    "/rotate-pdf",
    "/remove-pdf-pages",
    "/watermark-pdf",
    "/protect-pdf",
    "/unlock-pdf",
    "/add-page-numbers-pdf",
    "/pdf-to-jpg",
    "/pdf-to-word",

    // Legal / Meta
    "/privacy-policy-generator",
  ];

  const staticPaths = ["/", "/about", "/contact", "/privacy", "/terms", "/blog"];
  const blogPaths   = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  // Combine all paths
  const allPaths = [...staticPaths, ...toolPaths, ...blogPaths];

  return allPaths.map((path) => {
    // Dynamic Priority Logic
    let priority = 0.5;
    if (path === "/") priority = 1.0;
    else if (toolPaths.includes(path)) priority = 0.8;
    else if (path === "/blog") priority = 0.7;
    else if (blogPaths.includes(path)) priority = 0.6;

    // Change Frequency
    let changefreq: "weekly" | "monthly" | "yearly" = "monthly";
    if (path === "/" || path === "/blog") changefreq = "weekly";

    return ({
      url:             `${BASE_URL}${path}`,
      lastModified:    new Date(),
      changeFrequency: changefreq,
      priority:        priority,
    });
  });
}
