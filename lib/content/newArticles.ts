/**
 * Full article content for the 22 new blog posts (batch 1: 11 articles).
 * Keyed by slug. Merged into the main ARTICLES object in blog/[slug]/page.tsx.
 */
export const NEW_ARTICLES_1: Record<string, { intro: string; sections: { h2: string; body: string }[]; cta: { label: string; href: string } }> = {

  "compress-images-for-wordpress": {
    intro: `WordPress powers over 40% of the web, but most WordPress sites are slower than they should be — and images are the #1 reason. Unoptimized images inflate page load times, hurt your Google rankings, and increase bounce rates. The worst part? Most WordPress image optimization plugins add complexity, slow down your dashboard, and sometimes even break your site.

The better approach: compress your images before uploading them to WordPress. No plugins. No server-side processing. Just smaller, faster-loading images from the start.`,
    sections: [
      {
        h2: "Why WordPress images need compression",
        body: `Google's Core Web Vitals scoring includes Largest Contentful Paint (LCP) — how quickly the biggest visible element loads. On most WordPress sites, that element is the featured image or hero banner. An uncompressed 4MB hero image can add 3–5 seconds to your page load time on mobile.

The consequences are real:
- Pages loading over 3 seconds lose 53% of mobile visitors (Google data)
- Page speed is a confirmed ranking factor since 2018
- Core Web Vitals became a ranking signal in 2021

Most WordPress themes display images at 800–1200px wide. Uploading a 4000px wide photo from your camera is wasting bandwidth on pixels nobody will ever see.`,
      },
      {
        h2: "Step 1: Resize images before uploading",
        body: `Before compressing, resize your images to the actual display size. For most WordPress themes:
- Blog featured images: 1200px wide
- In-content images: 800px wide
- Full-width hero images: 1600px wide

Use ShrinkBox's Resize tool (shrink-box.com/resize-image) to set the correct width. Choose "Fit inside" mode to preserve aspect ratio. This alone can reduce file size by 60–80%.`,
      },
      {
        h2: "Step 2: Compress with the right quality",
        body: `After resizing, compress the image. Go to shrink-box.com/compress-image, upload your resized image, and select Medium compression (78% quality). This uses MozJPEG encoding — the same technology used by Facebook and major CDNs.

Expected results:
- A 1200px wide blog photo: 80–200 KB after compression
- A 1600px hero image: 150–400 KB
- Screenshots and graphics: 50–150 KB

These sizes are ideal for WordPress. Your pages will load in under 2 seconds on most connections.`,
      },
      {
        h2: "Step 3: Use WebP format for maximum performance",
        body: `WebP is 25–35% smaller than JPEG at the same visual quality. Most modern WordPress themes support WebP natively, and WordPress 5.8+ added built-in WebP support.

Convert your images to WebP at shrink-box.com/convert-jpg-to-webp before uploading. This gives you the smallest possible file size while maintaining excellent visual quality.

If you need to support very old browsers, upload both a JPG fallback and a WebP version. WordPress will serve the right format automatically.`,
      },
      {
        h2: "Why this approach beats WordPress plugins",
        body: `WordPress compression plugins like Smush, ShortPixel, and Imagify work — but they have downsides:

1. Server load: They process images on your WordPress server, slowing down your dashboard
2. Monthly limits: Free tiers typically cap at 50–100 images per month
3. Database bloat: They add entries to your database for every image
4. Plugin conflicts: They can conflict with caching plugins and CDNs
5. Dependency: If you deactivate the plugin, your original uncompressed images may reappear

Compressing before upload avoids all of these issues. Your WordPress install stays lean, your server stays fast, and you have full control over quality settings.`,
      },
    ],
    cta: { label: "Compress images for WordPress", href: "/compress-image" },
  },

  "compress-pdf-to-1mb": {
    intro: `Many online forms, government portals, and job application systems require PDFs under 1MB. University submission systems often cap at 2MB. If your PDF is over the limit, you need to compress it — but without destroying the content quality. Here are three methods that actually work, starting with the fastest.`,
    sections: [
      {
        h2: "Method 1: Online compression (fastest)",
        body: `Go to shrink-box.com/compress-pdf and upload your PDF. The tool strips unnecessary metadata, optimizes the internal file structure, and applies object stream compression.

For text-heavy PDFs (Word documents, reports, presentations): expect 20–50% size reduction. A 3MB report will typically compress to 1.5–2MB.

For image-heavy PDFs (scanned documents, photo portfolios): metadata stripping alone may not be enough — see Method 2.`,
      },
      {
        h2: "Method 2: Re-export from the source application",
        body: `If you have the original file (Word, PowerPoint, Google Docs), re-exporting with compression settings is often the most effective approach:

Microsoft Word: File → Save As → PDF → Options → "Minimum size (publishing online)"
PowerPoint: File → Export → Create PDF → "Minimum size"
Google Docs: File → Download → PDF (already well-optimized)

This can reduce a 10MB PowerPoint-to-PDF from 10MB to 2–3MB. Combined with online compression afterward, you can often get under 1MB.`,
      },
      {
        h2: "Method 3: Reduce image resolution inside the PDF",
        body: `If your PDF contains high-resolution images (common in scanned documents and photo-heavy reports), the images are the main source of file size. Options:

1. Re-scan at lower resolution: 150 DPI is sufficient for screen viewing. 300 DPI is only needed for print.
2. Use Adobe Acrobat's PDF Optimizer: Tools → Optimize PDF → allows you to downscale images to 150 DPI.
3. Print to PDF: On Windows or Mac, "print" the PDF to a new PDF file. This often re-encodes images at screen resolution, dramatically reducing size.`,
      },
      {
        h2: "What if my PDF is still too large?",
        body: `If compression alone doesn't get you under 1MB, consider:

Split the PDF: Use shrink-box.com/split-pdf to extract only the pages you need. Many forms only require specific sections.

Remove unnecessary pages: Use shrink-box.com/remove-pdf-pages to delete blank pages, cover sheets, or appendices that aren't required.

Convert to grayscale: If color isn't essential, converting images to grayscale can reduce size by another 30–50%.`,
      },
    ],
    cta: { label: "Compress PDF to 1MB", href: "/compress-pdf" },
  },

  "instagram-image-size-guide-2026": {
    intro: `Posting the wrong image size on Instagram means your photos get cropped, stretched, or compressed in ways that make them look terrible. Instagram has specific dimension requirements for every format — feed posts, Stories, Reels, profile photos, and more. Here are the exact sizes you need in 2026.`,
    sections: [
      {
        h2: "Instagram feed post sizes",
        body: `Square post: 1080 × 1080 pixels (1:1 ratio) — still the most common and reliable format
Portrait post: 1080 × 1350 pixels (4:5 ratio) — takes up more screen space in the feed, gets more engagement
Landscape post: 1080 × 566 pixels (1.91:1 ratio) — least recommended, takes up the least feed space

Best practice: Use portrait (1080 × 1350) for maximum screen real estate. File size should be under 1MB for best quality after Instagram's compression.`,
      },
      {
        h2: "Instagram Stories and Reels sizes",
        body: `Stories: 1080 × 1920 pixels (9:16 ratio) — full vertical screen
Reels: 1080 × 1920 pixels (9:16 ratio) — same as Stories
Reels cover image: 1080 × 1920 pixels

Stories and Reels are always full-screen vertical. Any other ratio will result in letterboxing (black bars) or cropping. Always design for 9:16 vertical.`,
      },
      {
        h2: "Instagram profile and other sizes",
        body: `Profile photo: 320 × 320 pixels minimum (displayed as a circle, so keep the subject centered)
Carousel post: 1080 × 1080 or 1080 × 1350 (all slides must be the same ratio)
Instagram ads: Same as feed posts, with 1080 × 1080 or 1080 × 1350 recommended

Profile photos are displayed very small — about 110px in the feed — so use a clear, high-contrast image. Logos work better than detailed photos.`,
      },
      {
        h2: "How to resize images for Instagram",
        body: `Use ShrinkBox's Social Media Resizer (shrink-box.com/social-media-resizer) to automatically crop and resize images to perfect Instagram dimensions. Select "Instagram Feed Portrait" or "Instagram Story" and upload your image.

After resizing, compress the image at shrink-box.com/compress-image using Medium compression. This keeps the file under 500KB — small enough that Instagram's re-compression has minimal impact on quality.`,
      },
      {
        h2: "Tips for best Instagram image quality",
        body: `1. Always upload at 1080px width minimum — Instagram will downscale anything larger, but upscale anything smaller (which looks blurry)
2. Use JPG format for photos, PNG for graphics with text
3. Compress before uploading — Instagram compresses everything, but starting with a smaller file means less quality loss
4. Avoid heavy filters in editing apps before uploading — Instagram applies its own compression which can amplify filter artifacts
5. Upload from the Instagram app, not the web browser — the app handles compression more gracefully`,
      },
    ],
    cta: { label: "Resize for Instagram", href: "/social-media-resizer" },
  },

  "heic-vs-jpg": {
    intro: `If you own an iPhone, your photos are likely saved in HEIC format — not JPG. Apple switched to HEIC as the default photo format starting with iOS 11 because it produces smaller files at the same quality. But HEIC causes real problems: Windows can't open it by default, many websites reject it, and most image editors don't support it. Here's everything you need to know.`,
    sections: [
      {
        h2: "What is HEIC?",
        body: `HEIC (High Efficiency Image Container) is an image format based on the HEVC (H.265) video codec. It was developed as part of the MPEG standard and adopted by Apple in 2017.

Key advantages of HEIC over JPG:
- 40–50% smaller file sizes at equal quality
- Supports 16-bit color (JPG only supports 8-bit)
- Supports transparency (like PNG)
- Can store multiple images in one file (Live Photos, burst shots)
- Stores depth map data for Portrait mode photos`,
      },
      {
        h2: "Why HEIC causes problems",
        body: `Despite being technically superior, HEIC has a major compatibility problem:

- Windows 10/11: Cannot open HEIC without installing a codec from the Microsoft Store
- Most websites: Reject HEIC uploads (WordPress, most CMS platforms, social media upload forms)
- Older software: Photoshop versions before CC 2020 don't support HEIC
- Email: HEIC files may not preview correctly in many email clients
- Android: Limited native support until Android 10

If you need to share photos with non-Apple users, print photos, upload to websites, or use older software — you need to convert HEIC to JPG first.`,
      },
      {
        h2: "How to convert HEIC to JPG",
        body: `The fastest free method: go to shrink-box.com/heic-to-jpg, upload your HEIC file, and download the JPG version. The conversion preserves full image quality and takes seconds.

On iPhone: You can change the default camera format to JPG in Settings → Camera → Formats → Most Compatible. This makes the iPhone save new photos as JPG instead of HEIC. Existing photos remain in HEIC.

On Mac: Open the HEIC file in Preview → File → Export → choose JPEG → Save.`,
      },
      {
        h2: "Should you switch your iPhone to JPG?",
        body: `It depends on your priorities:

Keep HEIC if: You primarily share photos within the Apple ecosystem, want to save storage space on your phone, and rarely upload to websites.

Switch to JPG if: You frequently share photos with Windows users, upload to websites or CMS platforms, or print photos at local shops.

A good middle ground: Keep HEIC as default (smaller files, better quality) and convert to JPG only when you need to share or upload. This gives you the best of both worlds.`,
      },
    ],
    cta: { label: "Convert HEIC to JPG", href: "/heic-to-jpg" },
  },

  "pdf-too-large-to-email": {
    intro: `You've hit "Send" and got the dreaded error: "Attachment too large." Gmail caps at 25MB, Outlook at 20MB, and many corporate servers at 10MB. Your PDF is 30MB and you need to send it now. Here's exactly what to do.`,
    sections: [
      {
        h2: "Why your PDF is so large",
        body: `Most oversized PDFs fall into one of three categories:

1. Image-heavy documents: Presentations exported from PowerPoint, photo-heavy reports, scanned documents. The high-resolution images embedded inside are the main size driver.

2. Metadata bloat: PDFs from Adobe InDesign, Illustrator, or complex Word documents often carry hidden metadata — font subsets, color profiles, annotations, form fields, and thumbnail previews that can add megabytes.

3. Unoptimized exports: Many applications export PDFs without compression. A 10-slide PowerPoint with photos can export as a 50MB PDF because each slide image is at full camera resolution.`,
      },
      {
        h2: "Quick fix: Compress the PDF online",
        body: `The fastest solution: upload your PDF to shrink-box.com/compress-pdf. The tool strips metadata, removes duplicate resources, and applies object stream compression.

Results vary by content type:
- Text-heavy documents: 20–40% reduction (a 5MB doc → 3MB)
- Presentation PDFs: 30–50% reduction (a 20MB presentation → 10–14MB)
- Scanned documents: 10–20% reduction (limited because images are already compressed)

If compression alone gets you under the email limit, you're done. If not, continue to the next methods.`,
      },
      {
        h2: "Split the PDF into parts",
        body: `If your PDF is too large even after compression, split it into smaller parts:

1. Go to shrink-box.com/split-pdf
2. Upload your PDF
3. Choose which pages to extract
4. Download the smaller PDFs
5. Send each part in a separate email

Subject line example: "Contract — Part 1 of 3 (Pages 1–10)"

This is especially useful for scanned documents where individual pages are inherently large.`,
      },
      {
        h2: "Use a cloud link instead",
        body: `For very large PDFs (50MB+), the best solution is to skip email attachments entirely:

1. Upload the PDF to Google Drive, Dropbox, or OneDrive
2. Generate a sharing link
3. Paste the link in your email

Google Drive: Upload → Right-click → Share → Copy link
Dropbox: Upload → Share → Copy link
OneDrive: Upload → Share → Copy link

This bypasses all size limits and the recipient gets the full-quality file.`,
      },
    ],
    cta: { label: "Compress PDF for email", href: "/compress-pdf" },
  },

  "make-image-under-100kb": {
    intro: `Many upload forms — for job applications, government IDs, passport photos, university submissions, and online registrations — require images under 100KB. Your 3MB smartphone photo is 30x too large. Here's how to get it under 100KB without making it look terrible.`,
    sections: [
      {
        h2: "Step 1: Resize first, compress second",
        body: `The biggest file size reduction comes from resizing, not compression. Most forms that require 100KB also specify maximum dimensions (e.g., 600×600px or 800×600px).

Go to shrink-box.com/resize-image:
- Set the width to match the form's requirements (typically 300–800px)
- Choose "Fit inside" mode
- Download the resized image

A 4000×3000px photo resized to 600×450px is already 85% smaller before any compression.`,
      },
      {
        h2: "Step 2: Use the Compress to KB tool",
        body: `ShrinkBox has a specific tool for this exact use case. Go to shrink-box.com/compress-image-to-size:

1. Upload your (already resized) image
2. Enter "100" as the target size in KB
3. Click Compress
4. Download the result

The tool automatically adjusts quality settings to hit your exact target file size. If 100KB isn't achievable at acceptable quality (rare after resizing), it will get as close as possible.`,
      },
      {
        h2: "What if it still looks bad?",
        body: `If 100KB makes your image look too compressed:

1. Check if the form accepts PNG — PNG can sometimes be smaller than heavily compressed JPG for simple images
2. Try WebP if the form accepts it — WebP achieves better quality at small sizes
3. Resize to slightly smaller dimensions — going from 600px to 500px wide can make a meaningful difference
4. Crop unnecessary background — removing empty space from the image reduces the data the compressor needs to encode`,
      },
    ],
    cta: { label: "Compress to exact KB size", href: "/compress-image-to-size" },
  },

  "tinypng-alternative": {
    intro: `TinyPNG is one of the most well-known image compression tools on the web. But it has real limitations: the free tier caps you at 20 images per month, only supports PNG and JPEG (no WebP conversion), and doesn't offer PDF tools, resizing, or any other utilities. If you're looking for a TinyPNG alternative that does more without limits, here are the best options.`,
    sections: [
      {
        h2: "TinyPNG limitations in 2026",
        body: `TinyPNG's free tier:
- 20 images per month (resets monthly)
- Maximum 5MB per image
- No WebP output
- No resizing or cropping
- No PDF tools
- No batch download as ZIP
- API limited to 500 images/month on free key

For a blogger publishing 3 posts per week with 5 images each, that's 60 images per month — 3× the free limit. For a web developer optimizing a full site, the limit is hit in minutes.`,
      },
      {
        h2: "ShrinkBox — best free all-in-one alternative",
        body: `ShrinkBox (shrink-box.com) matches TinyPNG's compression quality using the same MozJPEG technology, with significant advantages:

- No monthly image limit
- No signup required
- Supports JPG, PNG, and WebP compression
- Format conversion (JPG ↔ PNG ↔ WebP)
- Bulk compress up to 10 images at once
- Resize, crop, and watermark tools
- Full PDF toolkit (compress, merge, split, protect, etc.)
- Developer tools (QR codes, favicons, JSON formatter, OCR)
- Files deleted immediately after processing

Compression quality is comparable: both use MozJPEG for JPEG and similar PNG optimization. File size results are within 5% of each other in most tests.`,
      },
      {
        h2: "Other TinyPNG alternatives worth considering",
        body: `Squoosh (by Google): Best for comparing compression algorithms side-by-side. Single image at a time, no batch processing. Good for learning, impractical for production use.

ShortPixel: Good WordPress plugin with a free tier of 100 images/month. Better for WordPress-integrated workflows than standalone use.

Compressor.io: Clean interface, supports multiple formats. Limited to single images, no PDF tools.

For most users who need a fast, free, no-limits alternative to TinyPNG with additional tools — ShrinkBox is the most practical choice.`,
      },
    ],
    cta: { label: "Try ShrinkBox free", href: "/compress-image" },
  },

  "smallpdf-alternative": {
    intro: `Smallpdf is popular for a reason — it has a clean interface and reliable PDF tools. But the free tier is severely limited: 2 tasks per hour, mandatory account creation for most features, and a subscription cost of $12/month for unlimited use. If you need a free Smallpdf alternative without these restrictions, here are the best options in 2026.`,
    sections: [
      {
        h2: "Why people switch from Smallpdf",
        body: `Smallpdf's limitations on the free tier:
- 2 tasks per hour (try to do a third and you're locked out)
- Account required for most tools
- Compressed/converted files expire after 1 hour
- Some tools are Pro-only (PDF editor, e-sign)
- Ads on free tier

For someone who needs to compress 5 PDFs for a meeting, the 2-task limit means waiting 2.5 hours. That's not practical.`,
      },
      {
        h2: "ShrinkBox — unlimited PDF tools, no signup",
        body: `ShrinkBox (shrink-box.com) offers 15+ PDF tools with no account required and no task limits:

Available tools: Compress PDF, Merge PDF, Split PDF, Rotate PDF, Remove Pages, Watermark PDF, Protect PDF (password), Unlock PDF, Add Page Numbers, PDF to JPG, PDF to Word, JPG/PNG/WebP to PDF.

Plus 15+ image tools (compression, conversion, resizing, cropping) that Smallpdf doesn't offer at all.

Key differences:
- No task limit
- No account needed
- Files deleted immediately (not after 1 hour)
- Completely free — no Pro tier needed for basic tools`,
      },
      {
        h2: "Other Smallpdf alternatives",
        body: `PDF24: Both web-based and desktop app. No limits on either version. Desktop version is ideal for heavy users who process many PDFs. Interface is functional but not modern.

iLovePDF: More generous free tier than Smallpdf. Daily task limits instead of hourly. Some tools require account. Can feel cluttered with ads.

Adobe Acrobat Online: Limited free tools, but high quality. Best for users already in the Adobe ecosystem.

For quick, unlimited, signup-free PDF work — ShrinkBox or PDF24 are the strongest free alternatives.`,
      },
    ],
    cta: { label: "Try ShrinkBox PDF tools", href: "/compress-pdf" },
  },

  "convert-heic-to-jpg-windows": {
    intro: `You've transferred photos from your iPhone to your Windows PC and they won't open. The files end in .heic and Windows shows a blank icon or an error. Here are three ways to convert HEIC to JPG on Windows — the easiest takes under 10 seconds and requires no software installation.`,
    sections: [
      {
        h2: "Method 1: Free online converter (fastest)",
        body: `The fastest method requires nothing but a web browser:

1. Go to shrink-box.com/heic-to-jpg
2. Upload your HEIC file (drag and drop or click to browse)
3. Wait 2–3 seconds for conversion
4. Download the JPG file

This works on any Windows version. No software to install, no Microsoft Store codec needed. The conversion preserves full image quality — the JPG output is visually identical to the HEIC original.`,
      },
      {
        h2: "Method 2: Install the HEIF Image Extensions codec",
        body: `Microsoft offers a free HEIF codec that lets Windows open HEIC files natively:

1. Open the Microsoft Store
2. Search for "HEIF Image Extensions"
3. Install the free extension (Note: the related "HEVC Video Extensions" costs $0.99)
4. Restart Windows Explorer

After installation, Windows Photos can open HEIC files directly. You can then save as JPG using File → Save As → JPEG.

Downside: This only helps for viewing on your PC. If you need to upload HEIC files to websites, you still need to convert to JPG first.`,
      },
      {
        h2: "Method 3: Change your iPhone settings",
        body: `To prevent HEIC files in the future, change your iPhone's transfer settings:

Option A — Change camera format: Settings → Camera → Formats → "Most Compatible." Now all new photos save as JPG. Existing HEIC photos remain unchanged.

Option B — Auto-convert on transfer: Settings → Photos → "Automatic" under Transfer to Mac or PC. This makes the iPhone convert HEIC to JPG automatically when transferring via USB cable. Note: this doesn't work for AirDrop or cloud transfers.`,
      },
    ],
    cta: { label: "Convert HEIC to JPG online", href: "/heic-to-jpg" },
  },

  "how-to-merge-pdf-on-phone": {
    intro: `Need to combine two or more PDF files and only have your phone? Whether you're on Android or iPhone, you can merge PDFs directly in your mobile browser — no app download required. Here's how.`,
    sections: [
      {
        h2: "Merge PDFs on any phone (browser method)",
        body: `This works on both Android and iPhone using any browser:

1. Open your browser (Chrome, Safari, Firefox)
2. Go to shrink-box.com/merge-pdf
3. Tap the upload area
4. Select your PDF files from your phone's file browser
5. Arrange the order using the up/down buttons
6. Tap "Merge PDFs"
7. Download the merged file

The merged PDF saves to your Downloads folder. From there you can share it via email, WhatsApp, or any other app.`,
      },
      {
        h2: "Tips for merging PDFs on mobile",
        body: `Know where your PDFs are stored: On iPhone, check the Files app → iCloud Drive or On My iPhone. On Android, check Downloads, Documents, or your file manager.

File size matters: If you're combining large PDFs (10MB+ each), make sure you're on WiFi. Mobile data uploads can be slow for large files.

Order matters: The merge tool combines files in the order shown. Drag to rearrange before merging. If you upload files in alphabetical order, they'll usually appear correctly.`,
      },
      {
        h2: "Alternative: Use the Files app (iPhone only)",
        body: `iPhone users have a built-in option:

1. Open the Files app
2. Select the PDFs you want to merge (long press → Select → choose multiple)
3. Tap the three-dot menu (⋯)
4. Choose "Create PDF"

This creates a new PDF with all selected files combined. However, this method doesn't let you control page order as precisely as the online tool. For more control over page arrangement, the browser method is better.`,
      },
    ],
    cta: { label: "Merge PDFs on your phone", href: "/merge-pdf" },
  },

  "create-favicon-for-website": {
    intro: `A favicon is the small icon displayed in your browser tab, bookmarks, and search results. It's one of the first things that signals professionalism and brand identity. A missing or broken favicon makes your site look unfinished. Here's how to create a professional favicon in all required sizes — for free.`,
    sections: [
      {
        h2: "What sizes do you need?",
        body: `Modern browsers and platforms require favicons in multiple sizes:

- 16×16px: Browser tab icon (the most common)
- 32×32px: Browser tab on high-DPI displays
- 48×48px: Windows taskbar
- 180×180px: Apple Touch icon (iOS home screen)
- 192×192px: Android Chrome
- 512×512px: Progressive Web App (PWA) splash screen

If you only provide one size, browsers will scale it up or down — which often looks blurry. Providing all sizes ensures your icon looks crisp everywhere.`,
      },
      {
        h2: "How to create a favicon from any image",
        body: `1. Go to shrink-box.com/favicon-generator
2. Upload your logo or icon image (PNG recommended, at least 512×512px)
3. The tool generates favicons in all standard sizes automatically
4. Download the generated files

The output includes .ico format (for legacy browser support) and .png files in all the sizes listed above. Simply place them in your website's public folder and add the appropriate link tags to your HTML head.`,
      },
      {
        h2: "Design tips for effective favicons",
        body: `Keep it simple: Favicons are displayed at 16×16 pixels. Complex logos with fine details will be unreadable. Use a simplified version — just a letter, symbol, or icon.

Use high contrast: Your favicon should be recognizable at a glance against any browser theme (light or dark). Bold colors and clear shapes work best.

Test at small sizes: View your favicon at 16×16 pixels before committing. If you can't tell what it is, simplify further.

Use transparency: PNG favicons support transparent backgrounds, which looks cleaner than a white or colored square in most browser tabs.`,
      },
      {
        h2: "How to add a favicon to your website",
        body: `Add these lines to your HTML <head> section:

<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

For Next.js: Place files in the /public folder and Next.js will serve them automatically.
For WordPress: Go to Appearance → Customize → Site Identity → Site Icon.`,
      },
    ],
    cta: { label: "Generate favicons now", href: "/favicon-generator" },
  },
};
