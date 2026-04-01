import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blogPosts";
import { TOOL_META } from "@/lib/seo";

/**
 * Dynamic Sitemap Generator.
 * Automatically stays in sync with TOOL_META and BLOG_POSTS.
 */

const BASE_URL = "https://shrink-box.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Tool Paths (Extracted from registry)
  const toolPaths = Object.values(TOOL_META).map((tool) => tool.url);

  // 2. Static Content
  const staticPaths = ["/", "/about", "/contact", "/privacy", "/terms", "/blog"];

  // 3. Blog Posts
  const blogPaths = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  // Combine all paths (Ensure uniqueness)
  const allPaths = Array.from(new Set([...staticPaths, ...toolPaths, ...blogPaths]));

  return allPaths.map((path) => {
    // Dynamic Priority Logic
    let priority = 0.5;
    if (path === "/") {
      priority = 1.0;
    } else if (toolPaths.includes(path)) {
      priority = 0.8;
    } else if (path === "/blog") {
      priority = 0.7;
    } else if (blogPaths.includes(path)) {
      priority = 0.6;
    }

    // Change Frequency
    let changefreq: "weekly" | "monthly" | "yearly" = "monthly";
    if (path === "/" || path === "/blog") {
      changefreq = "weekly";
    }

    return {
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: changefreq,
      priority: priority,
    };
  });
}
