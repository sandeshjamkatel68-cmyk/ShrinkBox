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
  // ── Image tools ───────────────────────────────────────────────────────────
  "compress-image": {
    title:       "Compress Image Without Losing Quality — Free Online Tool",
    description: "Reduce JPG, PNG, and WebP file sizes by up to 80% while keeping images looking sharp. Works in your browser, files deleted immediately, no account needed.",
    keywords:    ["compress image without losing quality", "reduce image file size free", "jpg png webp compressor online", "image optimizer no signup"],
    url:         "/compress-image",
    category:    "MultimediaApplication",
  },
  "compress-image-to-size": {
    title:       "Compress Image to 20KB, 50KB, 100KB — Target File Size Tool",
    description: "Enter an exact target size in KB and get a compressed image that hits it. Useful for passport photos, government forms, job applications, and site uploads with strict limits.",
    keywords:    ["compress image to 50kb", "compress photo to 100kb", "reduce image size to specific kb", "passport photo file size reducer", "compress image for government form"],
    url:         "/compress-image-to-size",
    category:    "MultimediaApplication",
  },
  "bulk-compress": {
    title:       "Compress Multiple Images at Once — Free Batch Image Compressor",
    description: "Upload up to 10 JPG, PNG, or WebP images and compress them all in one go. Download as individual files or a ZIP. No account, no watermarks, no limits.",
    keywords:    ["batch image compressor", "compress multiple images at once", "bulk compress photos free", "compress 10 images online"],
    url:         "/bulk-compress",
    category:    "MultimediaApplication",
  },
  "resize-image": {
    title:       "Resize Image to Exact Pixels Online — Free Image Resizer",
    description: "Set exact pixel dimensions or scale by percentage. Resize JPG, PNG, WebP images for websites, emails, or social media. No signup, instant download.",
    keywords:    ["resize image to exact pixels", "change image dimensions online free", "scale image online", "image resizer pixels"],
    url:         "/resize-image",
    category:    "MultimediaApplication",
  },
  "crop-image": {
    title:       "Crop Image Online Free — Cut Any Part of a Photo",
    description: "Crop JPG, PNG, and WebP images by dragging a selection or entering exact pixel coordinates. Free, instant, nothing saved to our servers.",
    keywords:    ["crop image online free", "cut photo online", "crop picture to specific size", "image cropper pixels"],
    url:         "/crop-image",
    category:    "MultimediaApplication",
  },
  "image-to-grayscale": {
    title:       "Convert Photo to Black and White Online — Free Grayscale Converter",
    description: "Turn any JPG, PNG, or WebP image into a clean black-and-white photo instantly. No effects, no filters — pure grayscale conversion in one click.",
    keywords:    ["convert photo to black and white", "black and white image converter online free", "grayscale photo free", "make image black and white online"],
    url:         "/image-to-grayscale",
    category:    "MultimediaApplication",
  },
  "reduce-jpg-size": {
    title:       "Reduce JPG File Size Online Free — JPEG Compressor",
    description: "Cut JPEG file sizes by 40–70% without visible quality loss using MozJPEG encoding. Works for photos, product images, and website assets. No signup.",
    keywords:    ["reduce jpg file size online free", "jpeg compressor no quality loss", "make jpg smaller online", "compress jpeg file online"],
    url:         "/reduce-jpg-size",
    category:    "MultimediaApplication",
  },
  "reduce-png-size": {
    title:       "Reduce PNG File Size Online Free — PNG Optimizer",
    description: "Strip metadata and optimize PNG images to the smallest possible size while keeping transparency intact. Free, instant, private.",
    keywords:    ["reduce png file size", "png optimizer online free", "compress png without losing transparency", "smaller png file"],
    url:         "/reduce-png-size",
    category:    "MultimediaApplication",
  },
  "compress-jpg": {
    title:       "Compress JPG Online Free — Reduce JPEG Without Quality Loss",
    description: "Compress JPEG images online using MozJPEG — the same encoder used by Google. Get smaller files without visible degradation. No account required.",
    keywords:    ["compress jpg online free", "jpeg optimizer online", "reduce jpeg size without quality loss", "compress jpeg for web"],
    url:         "/compress-jpg",
    category:    "MultimediaApplication",
  },
  "compress-png": {
    title:       "Compress PNG Online Free — Smaller PNG, Same Quality",
    description: "Compress PNG images without losing transparency or introducing artifacts. Strips hidden metadata and optimizes color palettes. No registration.",
    keywords:    ["compress png online free", "optimize png transparency", "png file compressor", "reduce png without quality loss"],
    url:         "/compress-png",
    category:    "MultimediaApplication",
  },
  "compress-webp": {
    title:       "Compress WebP Images Online Free — WebP Optimizer",
    description: "Further reduce the size of WebP images while keeping Google's next-gen format. Ideal for squeezing more performance out of images already in WebP.",
    keywords:    ["compress webp online free", "webp image optimizer", "reduce webp file size", "smaller webp image"],
    url:         "/compress-webp",
    category:    "MultimediaApplication",
  },
  "watermark-image": {
    title:       "Add Text Watermark to Photo Online Free — Image Stamper",
    description: "Type your watermark text, pick font size and position, and stamp it onto any JPG, PNG, or WebP image. Instant, private, no account needed.",
    keywords:    ["add text watermark to photo free", "watermark image online", "stamp text on picture", "copyright photo online free"],
    url:         "/watermark-image",
    category:    "MultimediaApplication",
  },
  "social-media-resizer": {
    title:       "Resize Photo for Instagram, YouTube & TikTok — Free Social Media Resizer",
    description: "One-click presets for every platform: Instagram post (1080×1080), Story (1080×1920), YouTube thumbnail (1280×720), Twitter header, and more.",
    keywords:    ["resize photo for instagram", "social media image resizer free", "youtube thumbnail size resizer", "instagram image dimensions tool", "resize image for tiktok"],
    url:         "/social-media-resizer",
    category:    "MultimediaApplication",
  },

  // ── Format conversion ─────────────────────────────────────────────────────
  "convert-jpg-to-webp": {
    title:       "Convert JPG to WebP Online Free — Smaller Files for the Web",
    description: "WebP images are 25–35% smaller than JPEG at the same visual quality. Convert your JPG photos to WebP format instantly with no quality penalty. No signup.",
    keywords:    ["convert jpg to webp free", "jpg to webp online", "jpeg to webp converter", "webp for website performance"],
    url:         "/convert-jpg-to-webp",
    category:    "MultimediaApplication",
  },
  "convert-jpg-to-png": {
    title:       "Convert JPG to PNG Online Free — Add Transparency to JPEG",
    description: "Convert JPEG photos to lossless PNG format. Useful when you need a transparent background or lossless editing. Instant conversion, no account.",
    keywords:    ["convert jpg to png free", "jpeg to png with transparency", "jpg to png online converter", "lossless jpg to png"],
    url:         "/convert-jpg-to-png",
    category:    "MultimediaApplication",
  },
  "convert-png-to-webp": {
    title:       "Convert PNG to WebP Online Free — Preserve Transparency",
    description: "Convert PNG images to WebP while keeping transparent backgrounds intact. WebP supports transparency just like PNG — with much smaller file sizes.",
    keywords:    ["png to webp with transparency", "convert png to webp free", "png webp online converter", "lossless png to webp"],
    url:         "/convert-png-to-webp",
    category:    "MultimediaApplication",
  },
  "convert-png-to-jpg": {
    title:       "Convert PNG to JPG Online Free — Flatten Transparency",
    description: "Convert PNG to JPEG format for universal compatibility. Transparent areas are replaced with a white background. Instant conversion, no signup required.",
    keywords:    ["convert png to jpg free", "png to jpeg online", "flatten png transparency to white", "png jpeg converter no signup"],
    url:         "/convert-png-to-jpg",
    category:    "MultimediaApplication",
  },
  "convert-webp-to-jpg": {
    title:       "Convert WebP to JPG Online Free — Universal Compatibility",
    description: "Convert WebP images to JPEG for apps, software, and email clients that don't support WebP. Instant conversion in your browser, no upload required.",
    keywords:    ["convert webp to jpg free", "webp to jpeg online", "open webp file as jpg", "webp not supported convert"],
    url:         "/convert-webp-to-jpg",
    category:    "MultimediaApplication",
  },
  "heic-to-jpg": {
    title:       "Convert HEIC to JPG Online Free — Open iPhone Photos on Any Device",
    description: "iPhone photos taken in HEIC format won't open on Windows or most apps. Convert them to JPG instantly in your browser — no software to install, completely private.",
    keywords:    ["convert heic to jpg free", "heic to jpeg online", "open heic file on windows", "iphone photo heic to jpg", "heic converter no software"],
    url:         "/heic-to-jpg",
    category:    "MultimediaApplication",
  },
  "svg-to-png": {
    title:       "Convert SVG to PNG Online Free — Vector to Image",
    description: "Rasterize SVG vector files to high-resolution PNG images at any size. Useful for sharing logos or icons where SVG isn't supported. No signup.",
    keywords:    ["svg to png converter free", "convert svg to png online", "vector to raster online free", "svg to high resolution png"],
    url:         "/svg-to-png",
    category:    "MultimediaApplication",
  },
  "images-to-pdf": {
    title:       "Combine Images into One PDF Online Free — JPG PNG to PDF",
    description: "Upload multiple JPG or PNG images and merge them into a single PDF document in the right order. Useful for scanned documents, photo albums, and portfolios.",
    keywords:    ["combine images into pdf free", "multiple jpg to pdf online", "photos to pdf document", "images to pdf no signup", "jpg png webp to pdf"],
    url:         "/images-to-pdf",
    category:    "BusinessApplication",
  },
  "jpg-to-pdf": {
    title:       "Convert JPG to PDF Online Free — Single or Multiple Images",
    description: "Turn a JPG photo into a PDF document in one click. Accepts single images or multiple JPGs as separate pages. Free, instant, no account needed.",
    keywords:    ["jpg to pdf online free", "convert jpeg to pdf", "image to pdf converter free", "photo to pdf document"],
    url:         "/jpg-to-pdf",
    category:    "BusinessApplication",
  },
  "png-to-pdf": {
    title:       "Convert PNG to PDF Online Free — Image to Document",
    description: "Convert PNG screenshots, diagrams, or photos into a clean PDF document. Transparency handled automatically. Free and instant.",
    keywords:    ["png to pdf free online", "convert png to pdf document", "screenshot to pdf", "png image to pdf converter"],
    url:         "/png-to-pdf",
    category:    "BusinessApplication",
  },
  "webp-to-pdf": {
    title:       "Convert WebP to PDF Online Free — WebP Image to Document",
    description: "Turn WebP images into PDF documents instantly. Useful when you need to share or print WebP photos as a standard document.",
    keywords:    ["webp to pdf free", "convert webp to pdf document", "webp image as pdf", "webp to printable document"],
    url:         "/webp-to-pdf",
    category:    "BusinessApplication",
  },

  // ── PDF tools ─────────────────────────────────────────────────────────────
  "compress-pdf": {
    title:       "Compress PDF to Smaller Size — Free Online PDF Reducer",
    description: "Shrink large PDF files so they fit within email attachment limits (Gmail's 25MB, Outlook's 20MB). Reduce by 40–70% with no visible quality change. No signup.",
    keywords:    ["compress pdf for email free", "reduce pdf file size online", "pdf too large to send shrink", "make pdf smaller for gmail", "pdf compressor no signup"],
    url:         "/compress-pdf",
    category:    "BusinessApplication",
  },
  "merge-pdf": {
    title:       "Merge PDF Files Online Free — Combine Multiple PDFs Into One",
    description: "Upload two or more PDF files and combine them into a single document in any order. No page limit, no watermarks, nothing saved on our end.",
    keywords:    ["merge pdf files online free", "combine pdf documents", "join two pdfs into one", "pdf merger no watermark", "combine pdf files free"],
    url:         "/merge-pdf",
    category:    "BusinessApplication",
  },
  "split-pdf": {
    title:       "Split PDF Into Separate Pages Online Free — PDF Page Extractor",
    description: "Extract one page, a range of pages, or every page as separate files from any PDF. Free, instant, no software needed.",
    keywords:    ["split pdf pages online free", "extract pages from pdf free", "split pdf into individual pages", "separate pdf pages online"],
    url:         "/split-pdf",
    category:    "BusinessApplication",
  },
  "rotate-pdf": {
    title:       "Rotate PDF Pages Online Free — Fix Sideways or Upside-Down PDF",
    description: "Fix a PDF where pages are sideways or upside down. Rotate all pages or specific pages by 90°, 180°, or 270°. Instant, free, no account.",
    keywords:    ["rotate pdf pages online free", "fix sideways pdf", "rotate pdf 90 degrees", "turn pdf pages right side up", "pdf rotator free"],
    url:         "/rotate-pdf",
    category:    "BusinessApplication",
  },
  "remove-pdf-pages": {
    title:       "Remove Pages from PDF Online Free — Delete Specific PDF Pages",
    description: "Enter the page numbers you want to delete and download a clean PDF without them. Useful for removing blank pages, covers, or confidential sections.",
    keywords:    ["remove pages from pdf free", "delete pdf pages online", "remove blank pages from pdf", "pdf page remover online"],
    url:         "/remove-pdf-pages",
    category:    "BusinessApplication",
  },
  "watermark-pdf": {
    title:       "Add Watermark to PDF Online Free — Text Stamp on Every Page",
    description: "Stamp a diagonal or horizontal text watermark on every page of your PDF. Customize the text, color, and opacity. Free, instant, no login.",
    keywords:    ["add watermark to pdf free online", "pdf text stamp tool", "stamp confidential on pdf", "pdf watermark online no signup"],
    url:         "/watermark-pdf",
    category:    "BusinessApplication",
  },
  "protect-pdf": {
    title:       "Add Password to PDF Online Free — PDF Password Protection",
    description: "Lock your PDF with a password before sharing confidential documents. Set open password protection instantly in your browser. No signup required.",
    keywords:    ["add password to pdf free online", "protect pdf with password", "lock pdf file online free", "encrypt pdf no software"],
    url:         "/protect-pdf",
    category:    "BusinessApplication",
  },
  "unlock-pdf": {
    title:       "Remove Password from PDF Online Free — Unlock Protected PDF",
    description: "Remove the open password from a PDF you own and download an unlocked copy. Works for PDFs where you know the password. Free and instant.",
    keywords:    ["remove pdf password online free", "unlock pdf file free", "decrypt pdf online", "pdf password remover"],
    url:         "/unlock-pdf",
    category:    "BusinessApplication",
  },
  "add-page-numbers-pdf": {
    title:       "Add Page Numbers to PDF Online Free — Automatic Page Numbering",
    description: "Automatically number every page in your PDF document. Choose position (header or footer), format (1, Page 1, 1/10), and font size. No signup.",
    keywords:    ["add page numbers to pdf free", "pdf page numbering tool online", "number pdf pages automatically", "insert page numbers pdf"],
    url:         "/add-page-numbers-pdf",
    category:    "BusinessApplication",
  },
  "pdf-to-jpg": {
    title:       "Convert PDF to JPG Online Free — Each Page as an Image",
    description: "Export every page of your PDF as a separate JPEG image file. Useful for sharing PDF content as images or extracting diagrams. Free, instant.",
    keywords:    ["pdf to jpg online free", "convert pdf pages to images", "pdf to jpeg converter free", "extract images from pdf pages"],
    url:         "/pdf-to-jpg",
    category:    "BusinessApplication",
  },
  "pdf-to-image": {
    title:       "Convert PDF to Image Online Free — High Resolution PNG or JPG",
    description: "Render PDF pages as high-quality PNG or JPG images at the resolution you need. Useful for thumbnails, presentations, and previews. No signup.",
    keywords:    ["pdf to image converter free", "pdf page to png online", "high resolution pdf to image", "pdf screenshot online free"],
    url:         "/pdf-to-image",
    category:    "BusinessApplication",
  },
  "pdf-to-word": {
    title:       "PDF to Word Converter Online Free — Extract Text as .docx",
    description: "Extract the text content from a PDF into an editable Word (.docx) format. Useful for PDFs without copy-protection. Free, private, no signup.",
    keywords:    ["pdf to word online free", "convert pdf to editable word", "extract pdf text to docx", "pdf word converter no signup"],
    url:         "/pdf-to-word",
    category:    "BusinessApplication",
  },

  // ── Developer & design tools ──────────────────────────────────────────────
  "image-to-text": {
    title:       "Extract Text From Image Online Free — OCR Screenshot to Text",
    description: "Copy text from a screenshot, photo, or scanned document without retyping it. Free browser-based OCR — your image never leaves your device.",
    keywords:    ["extract text from screenshot", "copy text from image online free", "ocr online free no signup", "image to text converter browser"],
    url:         "/image-to-text",
    category:    "BusinessApplication",
  },
  "color-picker": {
    title:       "Get Hex Color Code from Image Online — Free Color Picker Tool",
    description: "Upload any image and click to get the exact hex code for any pixel. Also generates a full color palette of dominant colors. Free for designers.",
    keywords:    ["get hex color from image free", "pick color from photo online", "image color palette generator", "hex code finder from image"],
    url:         "/color-picker",
    category:    "DesignApplication",
  },
  "favicon-generator": {
    title:       "Create a Favicon from Image Online Free — ICO, PNG & Apple Icon",
    description: "Generate a complete favicon set (16×16, 32×32, 180×180 Apple touch) from any image. Download as a ZIP ready to drop into your website's public folder.",
    keywords:    ["create favicon from image free", "favicon generator online", "image to ico file online", "apple touch icon generator", "website favicon maker"],
    url:         "/favicon-generator",
    category:    "DesignApplication",
  },
  "qr-code-generator": {
    title:       "Free QR Code Generator — URL, WiFi, Text, Email & More",
    description: "Create a QR code for a website URL, WiFi network, email, phone number, or plain text. Customize color and download in high resolution. 100% free.",
    keywords:    ["free qr code generator", "create qr code for website free", "wifi qr code generator", "custom qr code color free", "download qr code png"],
    url:         "/qr-code-generator",
    category:    "DesignApplication",
  },
  "json-formatter": {
    title:       "JSON Formatter & Validator Online — Pretty Print & Debug JSON",
    description: "Paste raw JSON to format it with proper indentation and validate for syntax errors. A clean, ad-light tool for developers. Runs entirely in your browser.",
    keywords:    ["json formatter online free", "json prettifier", "validate json online", "format json code", "json beautifier"],
    url:         "/json-formatter",
    category:    "DeveloperApplication",
  },
  "image-to-base64": {
    title:       "Convert Image to Base64 Online Free — Data URI Encoder",
    description: "Encode a JPG, PNG, SVG, or WebP image to a Base64 data URI string for embedding in HTML, CSS, or JSON. Instant, runs in browser, no uploads.",
    keywords:    ["image to base64 encoder online free", "convert image to data uri", "base64 encode image for html", "inline image base64 css"],
    url:         "/image-to-base64",
    category:    "DeveloperApplication",
  },
  "base64-to-image": {
    title:       "Decode Base64 String to Image Online Free — Visual Debugger",
    description: "Paste a Base64-encoded image string and instantly preview and download the decoded image. Useful for debugging API responses and HTML embeds.",
    keywords:    ["decode base64 to image online free", "base64 string to image preview", "visualize base64 image", "base64 decoder image"],
    url:         "/base64-to-image",
    category:    "DeveloperApplication",
  },
  "meme-generator": {
    title:       "Free Online Meme Generator — Add Text to Any Image",
    description: "Upload any image and add top/bottom Impact-font text to make a meme. No watermarks, no sign-up. Download your meme as JPG instantly.",
    keywords:    ["free online meme generator no watermark", "add text to image meme", "make meme from photo online", "meme creator no signup"],
    url:         "/meme-generator",
    category:    "MultimediaApplication",
  },
  "privacy-policy-generator": {
    title:       "Free Privacy Policy Generator — GDPR-Ready for Websites & Apps",
    description: "Generate a professional privacy policy for your website or app in under 60 seconds. Covers data collection, cookies, GDPR, and California CCPA requirements.",
    keywords:    ["free privacy policy generator", "gdpr privacy policy template", "website privacy policy generator", "app privacy policy free", "ccpa compliant privacy policy"],
    url:         "/privacy-policy-generator",
    category:    "BusinessApplication",
  },
  "bulk-image-downloader": {
    title:       "Bulk Image Downloader from URL List — Download & ZIP Online Free",
    description: "Paste a list of image URLs and download all of them as a single ZIP file instantly. Useful for archiving, research, or migrating image collections.",
    keywords:    ["bulk image downloader from url list free", "download multiple images as zip", "batch image downloader online", "url list to zip images"],
    url:         "/bulk-image-downloader",
    category:    "DeveloperApplication",
  },
};

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  imageUrl?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: "ShrinkBox",
      url: "https://shrink-box.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ShrinkBox",
      logo: {
        "@type": "ImageObject",
        url: "https://shrink-box.com/icon.svg",
      },
    },
    ...(imageUrl && { image: [imageUrl] }),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
