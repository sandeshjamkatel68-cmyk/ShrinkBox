import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import HeicToJpgTool from "./HeicToJpgTool";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free, No Upload",
  description:
    "Convert iPhone HEIC photos to JPG entirely in your browser. No upload, no signup, batch conversion supported. Your photos never leave this tab.",
  alternates: { canonical: "https://shrink-box.com/heic-to-jpg" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="HEIC to JPG Converter"
      subhead="Convert iPhone photos to JPG so any device, app, or upload form can open them — processed locally, nothing uploaded."
      breadcrumbLabel="HEIC to JPG"
      tool={<HeicToJpgTool />}
      howItWorks={[
        "Drop one or more .heic or .heif files, or choose them from your device.",
        "Your browser decodes the HEIC container and re-encodes each photo as a standard JPG.",
        "Download the JPG, or download all converted photos at once as a ZIP.",
      ]}
      technicalHeading="Why iPhones save HEIC, and why it breaks so many uploads"
      technicalParagraphs={[
        "Apple switched the default iPhone camera format to HEIC (High Efficiency Image Container) in iOS 11. It stores photos at roughly half the file size of an equivalent JPG at the same visual quality, using the HEVC codec instead of JPEG's older DCT compression.",
        "The catch: HEIC support outside Apple's ecosystem is inconsistent. Most Windows photo viewers, many web upload forms, and a lot of older software simply don't decode it, so a photo taken on an iPhone often fails to open — or fails to upload — the moment it leaves iOS or macOS.",
        "This tool decodes the HEIC container in your browser using WebAssembly and re-encodes it as a JPG at 92% quality, which is high enough that the conversion is visually lossless for virtually all use cases.",
      ]}
      comparisonTable={{
        headers: ["Input", "Original (HEIC)", "Output (JPG)", "Compatible with"],
        rows: [
          ["iPhone photo, 12MP", "~1.8 MB", "~2.4 MB", "Windows, Android, any browser, any upload form"],
          ["iPhone photo, 48MP (ProRAW off)", "~4.5 MB", "~6.1 MB", "Windows, Android, any browser, any upload form"],
        ],
      }}
      faqs={[
        {
          q: "Does converting HEIC to JPG lose quality?",
          a: "At 92% JPG quality the difference is not visible to the eye in normal viewing. JPG is a lossy format and HEIC is more efficient per byte, so the JPG file will typically be somewhat larger for the same visual quality — that's the trade-off for universal compatibility.",
        },
        {
          q: "Can I convert multiple HEIC files at once?",
          a: "Yes. Drop up to 5 files at a time on the free tier and download them individually or as a single ZIP.",
        },
        {
          q: "Does this work on iPhone or only on a computer?",
          a: "It works in any modern mobile or desktop browser, including Safari on iPhone — though iPhones can already export HEIC as JPG from the Photos app share sheet. This tool is most useful once the file has already left iOS, e.g. on a Windows laptop.",
        },
        {
          q: "Are my photos uploaded anywhere?",
          a: "No. Decoding and re-encoding both happen in your browser via WebAssembly. The file is never sent over the network.",
        },
      ]}
      relatedTools={[
        { href: "/compress-image", label: "Compress Image" },
        { href: "/resize-image", label: "Resize Image" },
        { href: "/png-to-jpg", label: "PNG to JPG" },
      ]}
      schemaName="HEIC to JPG Converter"
      schemaUrl="https://shrink-box.com/heic-to-jpg"
    />
  );
}
