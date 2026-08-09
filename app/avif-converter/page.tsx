import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ConvertTool from "@/components/tools/ConvertTool";

export const metadata: Metadata = {
  title: "AVIF Converter — Free, No Upload",
  description: "Convert JPG, PNG, or WebP images to AVIF, the smallest widely-supported image format. Runs in your browser, nothing uploaded.",
  alternates: { canonical: "https://shrink-box.com/avif-converter" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="AVIF Converter"
      subhead="Convert images to AVIF for the smallest file size at a given quality — processed locally, never uploaded."
      breadcrumbLabel="AVIF Converter"
      tool={<ConvertTool accept="image/*" outputMime="image/avif" outputExt="avif" quality={0.6} dropLabel="Drop images here, or choose files" dropHint="Needs a browser with AVIF encoding support (Chrome, Edge)" />}
      howItWorks={[
        "Drop your JPG, PNG, or WebP files.",
        "Your browser encodes each one as AVIF using its built-in image codec — no server involved.",
        "Download the result individually or as a ZIP.",
      ]}
      technicalHeading="AVIF: the smallest format that's actually usable today"
      technicalParagraphs={[
        "AVIF is built on the AV1 video codec's intra-frame compression, and it typically beats both JPEG and WebP by a wide margin at equivalent visual quality — often 40–50% smaller than a comparable JPG.",
        "The cost is encoding speed and browser support depth: AVIF encoding is slower than JPEG or WebP, and while decoding is now supported in every major browser, in-browser encoding via the Canvas API is currently strongest in Chrome and Edge. Safari and Firefox support varies by version.",
        "Because of that, this tool is best used for images you're publishing to a modern web audience — not for a file you need to open in an arbitrary desktop app tomorrow.",
      ]}
      faqs={[
        {
          q: "Why didn't my file convert?",
          a: "AVIF encoding via the Canvas API isn't supported in every browser. Try the latest Chrome or Edge if conversion fails.",
        },
        {
          q: "How much smaller is AVIF than JPG?",
          a: "Typically 40-50% smaller at similar visual quality, though the exact gain depends heavily on image content.",
        },
      ]}
      relatedTools={[
        { href: "/webp-converter", label: "WebP Converter" },
        { href: "/compress-image", label: "Compress Image" },
        { href: "/resize-image", label: "Resize Image" },
      ]}
      schemaName="AVIF Converter"
      schemaUrl="https://shrink-box.com/avif-converter"
    />
  );
}
