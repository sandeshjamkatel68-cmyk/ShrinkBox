import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "ShrinkBox Blog — Learn About Image & PDF Optimization",
  description: 
    "Practical guides and technical deep-dives into image compression, PDF management, web performance, and modern file formats. Written by developers for everyone.",
  keywords: [
    "image optimization blog",
    "pdf compression guide",
    "web performance tips",
    "file format tutorials",
    "shrinkbox articles",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "ShrinkBox Blog | File Optimization & Web Performance",
    description: "Expert guides on making your digital assets smaller and faster.",
    url: "https://shrink-box.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
