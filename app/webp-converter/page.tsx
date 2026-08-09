import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import WebpConverterTool from "./WebpConverterTool";

export const metadata: Metadata = {
  title: "WebP Converter — Free, No Upload",
  description: "Convert JPG or PNG to WebP, or WebP back to JPG, entirely in your browser. Nothing uploaded.",
  alternates: { canonical: "https://shrink-box.com/webp-converter" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="WebP Converter"
      subhead="Convert into WebP for smaller web-ready files, or back out to JPG for compatibility — processed locally, never uploaded."
      breadcrumbLabel="WebP Converter"
      tool={<WebpConverterTool />}
      howItWorks={[
        "Drop your images. The tool detects the format automatically.",
        "WebP files are converted to JPG; JPG, PNG, and other formats are converted to WebP.",
        "Download the result individually or as a ZIP.",
      ]}
      technicalHeading="What WebP trades off"
      technicalParagraphs={[
        "WebP is Google's image format built specifically for the web — it supports both lossy and lossless compression, transparency, and typically produces files 25–35% smaller than an equivalent-quality JPG or PNG.",
        "The trade-off is compatibility: WebP is well supported by every modern browser, but plenty of older software, some email clients, and some print/design workflows still expect JPG or PNG. That's the usual reason to convert a WebP back — not because WebP is worse, but because the destination doesn't read it.",
        "This tool auto-detects direction: point it at a WebP file and it converts to JPG; point it at anything else and it converts to WebP at 85% quality, a setting tuned for negligible visible loss.",
      ]}
      faqs={[
        {
          q: "Is WebP actually smaller than JPG?",
          a: "Generally yes, often by 25–35% at comparable visual quality, which is why most websites now serve WebP by default.",
        },
        {
          q: "Why would I convert WebP back to JPG?",
          a: "Compatibility. Some older software, certain print workflows, and some email clients don't render WebP correctly, so converting back to JPG avoids broken images.",
        },
      ]}
      relatedTools={[
        { href: "/avif-converter", label: "AVIF Converter" },
        { href: "/png-to-jpg", label: "PNG to JPG" },
        { href: "/compress-image", label: "Compress Image" },
      ]}
      schemaName="WebP Converter"
      schemaUrl="https://shrink-box.com/webp-converter"
    />
  );
}
