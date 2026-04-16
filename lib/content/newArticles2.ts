/**
 * Full article content for the 22 new blog posts (batch 2: 11 articles).
 */
export const NEW_ARTICLES_2: Record<string, { intro: string; sections: { h2: string; body: string }[]; cta: { label: string; href: string } }> = {

  "core-web-vitals-images": {
    intro: `Google's Core Web Vitals are now a confirmed ranking factor. The three metrics — Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) — determine how Google perceives your site's user experience. Images directly affect at least two of these metrics, and unoptimized images are the #1 reason most sites fail their Core Web Vitals assessment.`,
    sections: [
      {
        h2: "How images affect LCP (Largest Contentful Paint)",
        body: `LCP measures how quickly the largest visible element loads. On most pages, the largest element is an image — a hero banner, featured photo, or product image.

Google's target: LCP under 2.5 seconds.

A 3MB uncompressed hero image on a typical mobile connection (10 Mbps) takes approximately 2.4 seconds just to download — before any rendering. Add server response time, CSS parsing, and JavaScript execution, and you're easily over 4 seconds.

The fix: Compress all above-the-fold images to under 200KB. Use WebP format. Serve correctly sized images (don't serve a 4000px image in a 800px container). Use loading="eager" for the LCP image only; use loading="lazy" for everything else.`,
      },
      {
        h2: "How images cause CLS (Cumulative Layout Shift)",
        body: `CLS measures visual stability — whether page elements shift around as the page loads. Images without explicit width and height attributes are a major CLS offender.

What happens: The browser doesn't know the image dimensions until it downloads. It reserves zero space, then the image loads and pushes all surrounding content down. The user clicks on a button that suddenly moves, leading to frustration and accidental clicks.

The fix: Always include width and height attributes on img tags. Use CSS aspect-ratio for responsive images. The browser then reserves the correct space before the image loads, preventing layout shift.`,
      },
      {
        h2: "Practical image optimization checklist",
        body: `For every image on your website:

1. Resize to display dimensions (don't serve a 4000px image in a 800px slot)
2. Compress using MozJPEG or WebP (shrink-box.com/compress-image)
3. Convert to WebP format (shrink-box.com/convert-jpg-to-webp) — 25–35% smaller than JPG
4. Add width and height attributes to prevent CLS
5. Use loading="lazy" for below-the-fold images
6. Use loading="eager" for the hero/LCP image only
7. Serve responsive images with srcset for different screen sizes

Follow this checklist and most sites will pass Core Web Vitals within a week.`,
      },
    ],
    cta: { label: "Compress images for web performance", href: "/compress-image" },
  },

  "whatsapp-image-compression-guide": {
    intro: `WhatsApp automatically compresses every image you send. A 5MB photo becomes a blurry 100KB version. Here's why WhatsApp does this, and three methods to send full-quality photos without compression.`,
    sections: [
      {
        h2: "Why WhatsApp compresses images",
        body: `WhatsApp compresses images to reduce data usage and speed up delivery, especially for users on slow mobile connections. The compression is aggressive — typically reducing images to 100–200KB and lowering resolution to about 1600px on the longest side.

For casual texting this is fine, but for sharing product photos, professional work, or high-quality images, the quality loss is very noticeable.`,
      },
      {
        h2: "Method 1: Send as a Document (best method)",
        body: `The single best trick for WhatsApp image quality:

1. Open a chat
2. Tap the attachment icon (📎)
3. Choose "Document" instead of "Gallery" or "Camera"
4. Navigate to your photo and select it
5. Send

When you send an image as a Document, WhatsApp does NOT compress it. The recipient gets the full-resolution, full-quality original. The only downside is that the image won't show as an inline preview — it appears as a downloadable file.`,
      },
      {
        h2: "Method 2: Pre-compress to 1MB",
        body: `If you want the image to show as an inline preview (not a document attachment), pre-compress it to balance quality and size:

1. Go to shrink-box.com/compress-image
2. Upload your photo
3. Select Low compression (88% quality)
4. Download the compressed version
5. Send via WhatsApp Gallery as normal

By compressing to about 1MB yourself first, WhatsApp's re-compression has less work to do, and the final quality is noticeably better than sending the uncompressed 5MB original.`,
      },
      {
        h2: "Method 3: Use HD Quality mode",
        body: `WhatsApp added an HD Quality option in 2023:

1. Select the photo to send
2. Before sending, look for the HD icon at the top of the preview
3. Tap it and select "HD Quality"
4. Send

HD Quality reduces compression significantly, though it's still not truly lossless. For most casual sharing, HD mode provides good enough quality. For truly full-resolution delivery, Method 1 (send as Document) remains the best option.`,
      },
    ],
    cta: { label: "Compress images for WhatsApp", href: "/compress-image" },
  },

  "send-large-pdf-via-email": {
    intro: `Need to send a large PDF but hit the email size limit? Gmail caps at 25MB, Outlook at 20MB, and many corporate servers at 10MB. Here are five reliable methods to share large PDFs by email — each with different tradeoffs.`,
    sections: [
      {
        h2: "Method 1: Compress the PDF (try this first)",
        body: `The simplest fix: shrink the PDF itself. Go to shrink-box.com/compress-pdf and upload your file. For text-heavy documents, expect 20–40% reduction. For presentation PDFs with images, expect 30–50%.

If the compressed file is under your email limit, just attach and send. Done.`,
      },
      {
        h2: "Method 2: Google Drive link",
        body: `Upload the PDF to Google Drive, then share a link in your email:

1. Go to drive.google.com
2. Upload your PDF
3. Right click → Share → Change to "Anyone with the link"
4. Copy the link
5. Paste in your email

Advantages: No size limit. Recipient doesn't need a Google account. You can revoke access later.
Disadvantages: Requires internet access to view. Some corporate firewalls may block Drive links.`,
      },
      {
        h2: "Method 3: Split into parts",
        body: `Use shrink-box.com/split-pdf to break the PDF into smaller files:

1. Upload the original PDF
2. Split by page ranges (e.g., pages 1–10, 11–20, 21–30)
3. Attach each part in the same email or separate emails

Name files clearly: "Report_Part1_Pages1-10.pdf", "Report_Part2_Pages11-20.pdf"`,
      },
      {
        h2: "Method 4: WeTransfer or similar",
        body: `WeTransfer (wetransfer.com) lets you send files up to 2GB for free. Enter the recipient's email, upload the PDF, and they receive a download link. Files expire after 7 days on the free plan.

Alternatives: Dropbox Transfer (100MB free), OneDrive (via sharing link).`,
      },
      {
        h2: "Method 5: ZIP compression",
        body: `For PDFs that are already text-optimized but still large, ZIP compression can squeeze out another 10–20%:

Windows: Right-click the PDF → Send to → Compressed (zipped) folder
Mac: Right-click → Compress

This rarely helps much for image-heavy PDFs (images are already compressed internally), but it can make a difference for text-heavy documents that are right at the email size limit.`,
      },
    ],
    cta: { label: "Compress PDF for email", href: "/compress-pdf" },
  },

  "qr-code-for-business-card": {
    intro: `A QR code on your business card lets people visit your website, LinkedIn profile, or portfolio instantly — just by pointing their phone camera at the card. No typing URLs. No searching your name. Here's how to create a professional QR code for your business card in 30 seconds, completely free.`,
    sections: [
      {
        h2: "What to link your QR code to",
        body: `The most effective QR code destinations for business cards:

1. Your website or portfolio — Best for freelancers, agencies, and businesses
2. LinkedIn profile — Best for corporate professionals and job seekers
3. A digital vCard — Downloads your contact info directly to their phone
4. A Linktree or similar — Links to multiple destinations at once

Choose one primary destination. If you want to link to multiple things, use a link-in-bio page that contains all your links.`,
      },
      {
        h2: "How to generate a QR code",
        body: `1. Go to shrink-box.com/qr-code-generator
2. Enter your URL (website, LinkedIn profile, etc.)
3. Click Generate
4. Download the QR code as a PNG image

The generated QR code is high-resolution and works at any print size. For a business card, the QR code should be at least 0.8 inches × 0.8 inches (about 2cm × 2cm) to be easily scannable.`,
      },
      {
        h2: "Design tips for QR codes on business cards",
        body: `Placement: Bottom-right corner or center-back of the card works best. Ensure there's white space (quiet zone) around the QR code — at least 2–3mm on each side.

Size: Minimum 0.8 inches (20mm) square. Larger is better for reliability.

Color: Black on white provides the best scan reliability. Dark colors on light backgrounds also work. Avoid light-on-dark — many phone cameras struggle with inverted QR codes.

Test before printing: Always test your QR code with your phone camera before sending the design to print. Scan from 6 inches and 12 inches to verify.`,
      },
    ],
    cta: { label: "Generate a QR code free", href: "/qr-code-generator" },
  },

  "batch-convert-images": {
    intro: `Converting images one by one is tedious. Whether you're switching a folder of JPGs to WebP for your website, or converting screenshots from PNG to JPG for a presentation, you need a way to batch convert multiple images at once. Here's how — free, no software needed.`,
    sections: [
      {
        h2: "Method 1: Bulk convert with ShrinkBox",
        body: `ShrinkBox's bulk compress tool handles up to 10 images at once at shrink-box.com/bulk-compress.

For format conversion, use the individual conversion tools but process multiple images in sequence:
- JPG to WebP: shrink-box.com/convert-jpg-to-webp
- PNG to JPG: shrink-box.com/convert-png-to-jpg
- PNG to WebP: shrink-box.com/convert-png-to-webp
- WebP to JPG: shrink-box.com/convert-webp-to-jpg

Upload, convert, download. Repeat. Each conversion takes 2–3 seconds per image.`,
      },
      {
        h2: "When to convert to which format",
        body: `JPG → WebP: When optimizing a website. WebP is 25–35% smaller. Do this for all website photos.

PNG → JPG: When PNG photos are wasting space. PNG photos are 3–5x larger than JPG with no visual benefit for photos.

PNG → WebP: When you need transparency support with smaller file sizes. WebP supports transparency like PNG but at much smaller sizes.

HEIC → JPG: When sharing iPhone photos with Windows or Android users, or uploading to websites that don't accept HEIC.

SVG → PNG: When you need a raster version of a vector logo for contexts that don't support SVG.`,
      },
      {
        h2: "Naming your converted files",
        body: `Keep your files organized when batch converting:

Original: photo-01.jpg → Converted: photo-01.webp
Use consistent naming so you can track which files have been converted.

If converting for a website, use lowercase names with hyphens (not spaces or underscores): hero-banner.webp, product-shot-01.webp. This follows web URL best practices and avoids encoding issues.`,
      },
    ],
    cta: { label: "Convert images now", href: "/convert-jpg-to-webp" },
  },

  "how-to-make-meme-online": {
    intro: `Memes are the universal language of the internet. Whether you want to make your team laugh on Slack, go viral on Twitter, or create marketing content, knowing how to quickly make a custom meme is a useful skill. Here's how to do it in under a minute — no Photoshop, no app download, no watermarks.`,
    sections: [
      {
        h2: "How to create a meme online (step by step)",
        body: `1. Go to shrink-box.com/meme-generator
2. Upload your image (any JPG, PNG, or WebP)
3. Add your top text and bottom text
4. Adjust font size if needed
5. Click Generate
6. Download your meme — no watermark added

The entire process takes about 30 seconds. The meme is saved as a standard JPG file you can share anywhere: WhatsApp, Twitter, Instagram, Slack, Discord, Reddit.`,
      },
      {
        h2: "Tips for making good memes",
        body: `Keep text short: The best memes have 5–10 words total. If you need a paragraph to explain the joke, it won't work as a meme.

Use high-contrast text: White text with a black outline is readable on any background. This is the classic meme text format — it works because your brain can read it instantly against any image.

Match the format to the platform: Square images work best on Instagram. Landscape images work better on Twitter. Vertical images are ideal for WhatsApp and Stories.

Don't over-explain: Memes work because the audience fills in context. Leave room for interpretation.`,
      },
    ],
    cta: { label: "Make a meme now", href: "/meme-generator" },
  },

  "linkedin-image-size-guide-2026": {
    intro: `LinkedIn is a professional platform where image quality matters. A pixelated profile photo, a cropped banner, or a badly-sized post image sends the wrong signal. Here are the exact LinkedIn image dimensions for every format in 2026.`,
    sections: [
      {
        h2: "LinkedIn profile and cover images",
        body: `Profile photo: 400 × 400 pixels (displayed as a circle, so keep the subject centered and within the inner 80% of the image)

Background/cover image: 1584 × 396 pixels (4:1 ratio) — this is the banner at the top of your profile

Company logo: 300 × 300 pixels
Company cover image: 1128 × 191 pixels

Profile photos are displayed very small in feeds (about 48px), so use a clear headshot with good lighting and a simple background. Avoid group photos or images with text.`,
      },
      {
        h2: "LinkedIn post and article images",
        body: `Single image post: 1200 × 627 pixels (1.91:1 ratio) — same aspect ratio as Facebook link previews
Article cover image: 1200 × 644 pixels
Video thumbnail: 1200 × 627 pixels
Carousel slides: 1080 × 1080 pixels (square) or 1080 × 1350 pixels (portrait)

For maximum engagement, use 1200 × 627 for link posts and 1080 × 1350 (portrait) for carousel slides — the taller format takes up more feed space and gets more attention.`,
      },
      {
        h2: "How to resize images for LinkedIn",
        body: `Use ShrinkBox's Social Media Resizer (shrink-box.com/social-media-resizer) to automatically crop and resize images to LinkedIn dimensions. Or use the Resize tool (shrink-box.com/resize-image) with custom dimensions.

After resizing, compress the image at shrink-box.com/compress-image using Low compression (88% quality). LinkedIn re-compresses images on upload, so starting with a well-compressed but high-quality original gives the best results.

File size: Keep images under 2MB for fastest upload and best quality after LinkedIn's processing.`,
      },
    ],
    cta: { label: "Resize for LinkedIn", href: "/social-media-resizer" },
  },

  "reduce-photo-size-iphone": {
    intro: `iPhone photos are large. A single photo from a modern iPhone is typically 3–8MB. That's because the camera captures at 12MP or 48MP resolution with rich color data. If you need to send photos by email, upload to a website, or just free up storage — here are three free methods to reduce photo file size on your iPhone.`,
    sections: [
      {
        h2: "Method 1: Use a free online compressor",
        body: `The fastest method that works without installing any app:

1. Open Safari on your iPhone
2. Go to shrink-box.com/compress-image
3. Tap the upload area
4. Select photos from your Camera Roll
5. Choose Medium compression
6. Download the compressed versions

A 5MB iPhone photo will typically compress to 300–600KB at Medium quality — small enough for email and web uploads with no visible quality difference. Save the compressed versions to your Files app for easy sharing.`,
      },
      {
        h2: "Method 2: Change iPhone camera format to JPG",
        body: `By default, iPhones save photos in HEIC format. While HEIC is more efficient, JPG is more compatible and sometimes smaller after compression:

Settings → Camera → Formats → "Most Compatible"

This makes your iPhone save all new photos as JPG instead of HEIC. Photos will be slightly larger on your phone but much easier to share and upload to websites.`,
      },
      {
        h2: "Method 3: Use the Shortcuts app",
        body: `For regular batch compression, create an iPhone Shortcut:

1. Open the Shortcuts app
2. Create a new shortcut
3. Add: "Select Photos" → "Convert Image" (to JPEG, quality 80%) → "Save to Photo Album"
4. Run the shortcut whenever you need to compress photos

This processes multiple photos at once directly on your iPhone. The quality at 80% is visually indistinguishable from the original for most photos.

Note: This creates new compressed copies — your originals remain untouched.`,
      },
    ],
    cta: { label: "Compress iPhone photos online", href: "/compress-image" },
  },

  "svg-vs-png": {
    intro: `SVG and PNG are both used for logos, icons, and graphics — but they work in fundamentally different ways. SVG is a vector format (based on math), while PNG is a raster format (based on pixels). Choosing the wrong one can mean blurry logos, oversized files, or compatibility headaches. Here's when to use each.`,
    sections: [
      {
        h2: "SVG: when to use vector graphics",
        body: `SVG (Scalable Vector Graphics) defines images using mathematical paths and shapes. This means SVGs can be scaled to any size without losing quality — they look perfect at 16px and 16,000px.

Use SVG for:
- Logos on websites (scale perfectly on any screen)
- Icons and UI elements (crisp at any resolution)
- Illustrations with flat colors and clean shapes
- Animated graphics and interactive elements (SVG supports CSS animations)

Advantages: Infinitely scalable, tiny file size for simple graphics, can be styled with CSS, accessible text content.

Limitations: Not suitable for photographs. Complex illustrations can have larger file sizes than PNG. Not supported by email clients or all social media platforms.`,
      },
      {
        h2: "PNG: when to use raster graphics",
        body: `PNG (Portable Network Graphics) stores images as a grid of pixels. Each pixel has a fixed color value. PNGs support full transparency but cannot be scaled up without becoming blurry.

Use PNG for:
- Screenshots of software interfaces
- Photos or images that need transparent backgrounds
- Complex illustrations with many colors and gradients
- Any image that will be shared via email or social media
- Images for contexts that don't support SVG (email newsletters, PDF documents)

Advantages: Universal compatibility, supports transparency, lossless quality, works everywhere.

Limitations: Cannot be scaled up. File sizes can be large for photos. Not ideal for simple graphics where SVG would be much smaller.`,
      },
      {
        h2: "Quick decision: SVG or PNG?",
        body: `Logo for your website? → SVG (scalable, tiny file size)
Logo for email signature? → PNG (email clients don't support SVG)
Icon set for a web app? → SVG (scalable, can be styled with CSS)
Screenshot for documentation? → PNG (pixel-perfect reproduction)
Photo with transparent background? → PNG (photographs can't be vectorized)
Simple illustration for web? → SVG (smaller file, scalable)
Social media graphic? → PNG (universal support)

When in doubt: If the image was created in a design tool like Figma, Illustrator, or Sketch, export both SVG and PNG. Use SVG for web, PNG for everything else.

Need to convert? Use shrink-box.com/svg-to-png to convert SVG files to PNG at any resolution you need.`,
      },
    ],
    cta: { label: "Convert SVG to PNG", href: "/svg-to-png" },
  },

  "extract-text-from-image": {
    intro: `Need to copy text from a screenshot, photo, or scanned document? Manually retyping text is slow and error-prone. OCR (Optical Character Recognition) technology can extract text from images automatically — and the best part is you can do it free online without installing any software.`,
    sections: [
      {
        h2: "How to extract text from an image (step by step)",
        body: `1. Go to shrink-box.com/image-to-text
2. Upload your image (JPG, PNG, or WebP)
3. Wait for OCR processing (typically 3–10 seconds)
4. Copy the extracted text

The tool uses Tesseract.js, a powerful open-source OCR engine that runs entirely in your browser. Your image is never uploaded to any server — processing happens locally on your device.`,
      },
      {
        h2: "Tips for better OCR accuracy",
        body: `Image quality matters. For the best text extraction results:

1. Use high resolution images — at least 300 DPI for scanned documents
2. Ensure good contrast — dark text on a light background gives the best results
3. Straighten the image — text at an angle is harder for OCR to read
4. Crop to the text area — removing unnecessary background reduces errors
5. Avoid text over images — text overlaid on photos is harder to extract than text on a plain background

OCR works best with: printed text, screenshots, typed documents, and clearly legible handwriting.
OCR struggles with: heavily stylized fonts, very small text, low contrast images, and cursive handwriting.`,
      },
      {
        h2: "Common use cases for image OCR",
        body: `Research: Extract quotes from book photos or journal screenshots for papers.
Data entry: Pull text from invoices, receipts, and forms instead of retyping.
Translation: Extract foreign language text from images, then paste into Google Translate.
Accessibility: Convert image-based content into searchable, accessible text.
Note-taking: Digitize handwritten notes or whiteboard photos.
Programming: Copy code from tutorial screenshots instead of retyping.`,
      },
    ],
    cta: { label: "Extract text from image", href: "/image-to-text" },
  },

  "best-image-size-for-website": {
    intro: `Using the wrong image size on your website wastes bandwidth, slows page loads, and hurts your Google ranking. But "the right size" depends on where the image appears, what device the visitor uses, and what format you choose. Here's the complete guide to image sizing for websites in 2026.`,
    sections: [
      {
        h2: "Recommended image dimensions by context",
        body: `Hero/banner images: 1600 × 900px (16:9 ratio) — serves most desktop screens well
Blog featured images: 1200 × 630px (1.91:1 ratio) — also works as social sharing image
In-content images: 800px wide (height varies) — matches most content area widths
Thumbnails: 400 × 300px or 400 × 400px
Product images: 1000 × 1000px (square) — allows for zoom functionality
Background images: 1920 × 1080px maximum

These dimensions represent the MAXIMUM you should serve. Using responsive images (srcset) to serve smaller versions to mobile devices is the best practice.`,
      },
      {
        h2: "Target file sizes",
        body: `Hero images: 100–300KB (compressed WebP or JPEG)
Blog images: 50–150KB
Thumbnails: 10–30KB
Product images: 50–200KB
Background/decorative: 100–250KB

Total per page: Aim for under 1MB total image weight. Pages with over 2MB of images typically fail Core Web Vitals on mobile.

Use shrink-box.com/compress-image to hit these targets. Medium compression (78% quality) achieves these sizes for most images.`,
      },
      {
        h2: "Best image format for websites in 2026",
        body: `WebP: The best default for most web images. 25–35% smaller than JPEG, supports transparency. 97%+ browser support.

JPEG: Use for email newsletters and contexts where maximum compatibility is needed.

PNG: Use only when you need lossless quality (screenshots, text overlays) and can't use WebP.

AVIF: Newer format, 20% smaller than WebP. Browser support at ~85% — emerging standard but not widely adopted yet.

Convert your images to WebP at shrink-box.com/convert-jpg-to-webp for the best balance of quality, size, and compatibility.`,
      },
    ],
    cta: { label: "Optimize images for your website", href: "/compress-image" },
  },

  "compress-image-without-losing-quality": {
    intro: `Modern compression algorithms can reduce image file sizes by 40–70% with zero visible quality difference. The key is understanding that "quality loss" in compression is not the same as "visible quality loss." Here's the technique professionals use — step by step, free tools only.`,
    sections: [
      {
        h2: "The science: visible vs. mathematical quality loss",
        body: `Every lossy compression algorithm (JPEG, WebP) technically removes data from the image. But the data it removes is specifically chosen to be invisible to the human eye — subtle color variations in complex areas, fine noise patterns, and high-frequency detail that's below your visual perception threshold.

At 80–90% quality, the removed data is genuinely invisible at normal viewing distances and screen sizes. You'd need to zoom to 400%+ and compare pixel-by-pixel to find differences. For any practical purpose — web, email, print at normal sizes — the quality is identical.`,
      },
      {
        h2: "Step-by-step compression without visible quality loss",
        body: `1. Go to shrink-box.com/compress-image
2. Upload your JPG, PNG, or WebP image
3. Select "Low" compression (88% quality) for zero visible loss
4. Or select "Medium" (78% quality) for maximum size reduction with negligible quality difference
5. Click Compress
6. Download and compare with the original at 100% zoom

Expected results:
- Low compression: 20–40% smaller, absolutely no visible difference
- Medium compression: 40–65% smaller, difference only visible at extreme zoom

For most purposes, Medium is the sweet spot. Use Low only when quality is mission-critical (print, portfolio pieces).`,
      },
      {
        h2: "Additional size reduction: Convert to WebP",
        body: `After compressing as JPEG, converting to WebP gives you another 25–35% reduction at the same visual quality. This is because WebP uses a more modern compression algorithm.

Step 1: Compress at shrink-box.com/compress-image
Step 2: Convert at shrink-box.com/convert-jpg-to-webp

Combined: A 4MB original photo → ~1.5MB after JPEG compression → ~1MB as WebP. That's a 75% reduction with no visible quality difference. All major browsers support WebP.`,
      },
    ],
    cta: { label: "Compress images without quality loss", href: "/compress-image" },
  },
};
