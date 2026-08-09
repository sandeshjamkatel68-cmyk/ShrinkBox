import { NextResponse } from "next/server";

const GONE_HTML = `<!doctype html><html><head><title>410 Gone</title><meta name="robots" content="noindex"></head>
<body style="font-family:system-ui,sans-serif;max-width:520px;margin:15vh auto;text-align:center;color:#16181D">
<p style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#5C6270">410 — Gone</p>
<h1 style="font-size:22px;margin:12px 0">This page was removed</h1>
<p style="color:#5C6270;font-size:14px">ShrinkBox no longer hosts a SaaS-alternatives directory. Try one of the file tools instead.</p>
<p style="margin-top:20px"><a href="/" style="color:#1F35E8">Back to ShrinkBox</a></p>
</body></html>`;

/**
 * The old SaaS-alternatives directory ("/{tool}-alternatives") is permanently
 * retired. 410 tells Google to drop these URLs rather than keep re-crawling
 * a section the helpful-content system already flagged as thin.
 */
export async function GET(_req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  if (slug.endsWith("-alternatives")) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return new NextResponse("Not Found", { status: 404 });
}
