import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

const BASE_URL = "https://shrink-box.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = [
    // Image tools
    "/compress-image",
    "/compress-webp",
    "/bulk-compress",
    "/resize-image",
    "/crop-image",
    "/image-to-grayscale",
    "/reduce-jpg-size",
    "/reduce-png-size",
    // Image convert
    "/convert-jpg-to-webp",
    "/convert-jpg-to-png",
    "/convert-png-to-webp",
    "/convert-png-to-jpg",
    "/convert-webp-to-jpg",
    "/images-to-pdf",
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
    // New Tools
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
    "/json-formatter",
    "/social-media-resizer",
    "/privacy-policy-generator",
  ];

  const staticPages = ["/", "/about", "/contact", "/privacy", "/terms", "/blog"];
  const blogPages   = BLOG_POSTS.map((p) => `/blog/${p.slug}`);
  const allPages    = [...staticPages, ...toolPages, ...blogPages];

  return allPages.map((path) => ({
    url:             `${BASE_URL}${path}`,
    lastModified:    new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:        path === "/" ? 1 : toolPages.includes(path) ? 0.8 : 0.6,
  }));
}
