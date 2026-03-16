/**
 * Generates JSON-LD structured data for tool pages.
 * This tells Google exactly what each page does — improves rich results.
 */

const BASE_URL = "https://shrink-box.com";

interface ToolSchemaProps {
  name: string;
  description: string;
  url: string;
  category: string;
}

export function ToolSchema({ name, description, url, category }: ToolSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "url": `${BASE_URL}${url}`,
    "description": description,
    "applicationCategory": category,
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "provider": {
      "@type": "Organization",
      "name": "ShrinkBox",
      "url": BASE_URL,
    },
    "featureList": [
      "No registration required",
      "Files deleted after processing",
      "Works on all devices",
      "Free to use",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  items: { q: string; a: string }[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ToolMeta {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  category: string;
}

// All tool metadata in one place — consistent and easy to update
export const TOOL_META: Record<string, ToolMeta> = {
  "compress-image": {
    title:       "Compress Image Online Free — Reduce JPG PNG WebP Size",
    description: "Compress JPG, PNG, and WebP images online for free. Reduce image file size by up to 60% without visible quality loss. No signup, instant download.",
    keywords:    ["compress image online", "reduce image size", "jpg compressor", "png compressor", "webp compressor", "image optimizer"],
    url:         "/compress-image",
    category:    "MultimediaApplication",
  },
  "compress-pdf": {
    title:       "Compress PDF Online Free — Reduce PDF File Size",
    description: "Compress PDF files online for free. Reduce PDF size without losing quality. Shrink PDFs for email, upload, and sharing. No signup required.",
    keywords:    ["compress pdf online", "reduce pdf size", "pdf compressor free", "shrink pdf", "pdf file size reducer"],
    url:         "/compress-pdf",
    category:    "BusinessApplication",
  },
  "compress-webp": {
    title:       "Compress WebP Online Free — WebP Image Compressor",
    description: "Compress WebP images online for free. Reduce WebP file size while maintaining quality. Fast, free, no registration needed.",
    keywords:    ["compress webp", "webp compressor", "reduce webp size", "webp optimizer online"],
    url:         "/compress-webp",
    category:    "MultimediaApplication",
  },
  "bulk-compress": {
    title:       "Bulk Image Compressor — Compress Multiple Images Free",
    description: "Compress up to 10 images at once online for free. Bulk compress JPG, PNG, and WebP images. Download all compressed files instantly.",
    keywords:    ["bulk image compressor", "compress multiple images", "batch image compression", "compress images in bulk"],
    url:         "/bulk-compress",
    category:    "MultimediaApplication",
  },
  "resize-image": {
    title:       "Resize Image Online Free — Image Resizer Tool",
    description: "Resize images online for free. Set exact pixel dimensions or scale by percentage. Supports JPG, PNG, WebP. No signup required.",
    keywords:    ["resize image online", "image resizer", "resize photo online", "change image size", "scale image online"],
    url:         "/resize-image",
    category:    "MultimediaApplication",
  },
  "crop-image": {
    title:       "Crop Image Online Free — Image Cropper Tool",
    description: "Crop images online for free. Set exact pixel coordinates to crop JPG, PNG, and WebP images. Fast, free, no registration.",
    keywords:    ["crop image online", "image cropper", "crop photo online free", "trim image online"],
    url:         "/crop-image",
    category:    "MultimediaApplication",
  },
  "image-to-grayscale": {
    title:       "Convert Image to Black and White Online Free",
    description: "Convert any image to black and white (grayscale) online for free. Supports JPG, PNG, WebP. Instant conversion, no signup.",
    keywords:    ["image to black and white", "convert image grayscale", "black white photo converter", "grayscale image online"],
    url:         "/image-to-grayscale",
    category:    "MultimediaApplication",
  },
  "reduce-jpg-size": {
    title:       "Reduce JPG Size Online Free — JPG File Size Reducer",
    description: "Reduce JPG and JPEG file size online for free. Compress JPG images without losing quality. No signup, instant download.",
    keywords:    ["reduce jpg size", "jpg compressor online", "reduce jpeg size", "compress jpg free", "jpg file size reducer"],
    url:         "/reduce-jpg-size",
    category:    "MultimediaApplication",
  },
  "reduce-png-size": {
    title:       "Reduce PNG Size Online Free — PNG File Size Reducer",
    description: "Reduce PNG file size online for free. Compress PNG images while preserving quality and transparency. No signup required.",
    keywords:    ["reduce png size", "png compressor online", "compress png free", "png file size reducer", "optimize png"],
    url:         "/reduce-png-size",
    category:    "MultimediaApplication",
  },
  "convert-jpg-to-webp": {
    title:       "Convert JPG to WebP Online Free — JPG to WebP Converter",
    description: "Convert JPG images to WebP format online for free. WebP files are 25-35% smaller than JPG. No signup, instant download.",
    keywords:    ["jpg to webp", "convert jpg to webp", "jpeg to webp converter", "jpg webp online free"],
    url:         "/convert-jpg-to-webp",
    category:    "MultimediaApplication",
  },
  "convert-jpg-to-png": {
    title:       "Convert JPG to PNG Online Free — JPG to PNG Converter",
    description: "Convert JPG images to PNG format online for free. Lossless PNG output with transparency support. No signup required.",
    keywords:    ["jpg to png", "convert jpg to png", "jpeg to png converter", "jpg png online free"],
    url:         "/convert-jpg-to-png",
    category:    "MultimediaApplication",
  },
  "convert-png-to-webp": {
    title:       "Convert PNG to WebP Online Free — PNG to WebP Converter",
    description: "Convert PNG images to WebP format online for free. Smaller files, same quality, transparency supported. No signup.",
    keywords:    ["png to webp", "convert png to webp", "png webp converter online free"],
    url:         "/convert-png-to-webp",
    category:    "MultimediaApplication",
  },
  "convert-png-to-jpg": {
    title:       "Convert PNG to JPG Online Free — PNG to JPG Converter",
    description: "Convert PNG images to JPG format online for free. Reduce file size significantly. Transparency replaced with white background. No signup.",
    keywords:    ["png to jpg", "convert png to jpg", "png jpeg converter online free", "png to jpeg"],
    url:         "/convert-png-to-jpg",
    category:    "MultimediaApplication",
  },
  "convert-webp-to-jpg": {
    title:       "Convert WebP to JPG Online Free — WebP to JPG Converter",
    description: "Convert WebP images to JPG format online for free. Maximum compatibility with all devices and software. No signup required.",
    keywords:    ["webp to jpg", "convert webp to jpg", "webp to jpeg converter online free"],
    url:         "/convert-webp-to-jpg",
    category:    "MultimediaApplication",
  },
  "images-to-pdf": {
    title:       "Convert Images to PDF Online Free — JPG to PDF",
    description: "Combine multiple images into one PDF online for free. Upload JPG, PNG, or WebP images and download as a single PDF. No signup.",
    keywords:    ["images to pdf", "jpg to pdf", "convert images to pdf online free", "combine photos to pdf"],
    url:         "/images-to-pdf",
    category:    "BusinessApplication",
  },
  "merge-pdf": {
    title:       "Merge PDF Online Free — Combine PDF Files",
    description: "Merge multiple PDF files into one online for free. Combine up to 10 PDFs, reorder pages, instant download. No signup required.",
    keywords:    ["merge pdf online", "combine pdf files free", "join pdf online", "merge pdf free", "pdf merger"],
    url:         "/merge-pdf",
    category:    "BusinessApplication",
  },
  "split-pdf": {
    title:       "Split PDF Online Free — Extract PDF Pages",
    description: "Split a PDF into individual pages online for free. Extract any page from a PDF and download separately. No signup required.",
    keywords:    ["split pdf online", "extract pdf pages", "split pdf free", "pdf splitter online", "separate pdf pages"],
    url:         "/split-pdf",
    category:    "BusinessApplication",
  },
  "rotate-pdf": {
    title:       "Rotate PDF Online Free — Rotate PDF Pages",
    description: "Rotate PDF pages online for free. Rotate all pages 90°, 180°, or 270°. Instant download, no signup required.",
    keywords:    ["rotate pdf online", "rotate pdf pages free", "pdf rotator online", "turn pdf pages"],
    url:         "/rotate-pdf",
    category:    "BusinessApplication",
  },
  "remove-pdf-pages": {
    title:       "Remove Pages from PDF Online Free",
    description: "Delete specific pages from a PDF online for free. Enter page numbers to remove and download the cleaned PDF instantly. No signup.",
    keywords:    ["remove pages from pdf", "delete pdf pages online free", "remove pdf page", "pdf page remover"],
    url:         "/remove-pdf-pages",
    category:    "BusinessApplication",
  },
  "watermark-pdf": {
    title:       "Add Watermark to PDF Online Free — PDF Watermark Tool",
    description: "Add a text watermark to every page of your PDF online for free. Customize text, color, opacity and position. No signup required.",
    keywords:    ["watermark pdf online", "add watermark to pdf free", "pdf watermark tool", "stamp pdf online"],
    url:         "/watermark-pdf",
    category:    "BusinessApplication",
  },
  "protect-pdf": {
    title:       "Protect PDF Online Free — Add Password to PDF",
    description: "Protect your PDF with a password online for free. Add security to confidential documents. No signup required.",
    keywords:    ["protect pdf online", "add password to pdf free", "pdf password protection", "secure pdf online"],
    url:         "/protect-pdf",
    category:    "BusinessApplication",
  },
  "unlock-pdf": {
    title:       "Unlock PDF Online Free — Remove PDF Password",
    description: "Unlock and remove restrictions from a PDF online for free. Remove PDF password protection instantly. No signup required.",
    keywords:    ["unlock pdf online", "remove pdf password free", "pdf unlocker online", "decrypt pdf online"],
    url:         "/unlock-pdf",
    category:    "BusinessApplication",
  },
  "add-page-numbers-pdf": {
    title:       "Add Page Numbers to PDF Online Free",
    description: "Add page numbers to every page of your PDF online for free. Choose position, format, and style. No signup required.",
    keywords:    ["add page numbers to pdf", "pdf page numbering online free", "number pdf pages", "pdf page number tool"],
    url:         "/add-page-numbers-pdf",
    category:    "BusinessApplication",
  },
  "pdf-to-jpg": {
    title:       "PDF to JPG Online Free — Convert PDF to Image",
    description: "Convert PDF pages to JPG images online for free. Extract every page as a separate image file. No signup required.",
    keywords:    ["pdf to jpg online", "convert pdf to image free", "pdf to jpeg converter", "extract images from pdf"],
    url:         "/pdf-to-jpg",
    category:    "BusinessApplication",
  },
  "pdf-to-word": {
    title:       "PDF to Word Online Free — Convert PDF to Text",
    description: "Convert PDF to Word/text format online for free. Extract text content from PDF documents. No signup required.",
    keywords:    ["pdf to word online free", "convert pdf to word", "pdf to text converter", "pdf word converter online"],
    url:         "/pdf-to-word",
    category:    "BusinessApplication",
  },
};
