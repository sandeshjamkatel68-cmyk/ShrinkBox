import { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export const metadata: Metadata = {
  title: "Free Image & PDF Tools Directory — 40+ Online Utilities | ShrinkBox",
  description: 
    "Access the complete directory of ShrinkBox free online tools. Compress, convert, resize, and edit images and PDFs instantly. No signup, 100% private, and browser-based.",
  keywords: [
    "free online tools",
    "image tools",
    "pdf tools",
    "online file converter",
    "browser based tools",
    "privacy focused tools",
    "shrinkbox tools",
  ],
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free Online Tools Directory | ShrinkBox",
    description: "40+ professional tools for images and PDFs. Fast, free, and secure.",
    url: "https://shrink-box.com/tools",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
