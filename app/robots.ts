import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow:     "/",
      disallow:  ["/api/"],
    },
    sitemap: "https://shrink-box.com/sitemap.xml",
    host:    "https://shrink-box.com",
  };
}
