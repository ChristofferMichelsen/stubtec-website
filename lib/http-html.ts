import { gzipSync } from 'node:zlib';

export function websiteHtmlResponse(document: string, request: Request): Response {
  const headers = new Headers({
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'public, max-age=0, must-revalidate',
    'X-Content-Type-Options': 'nosniff',
    'Vary': 'Accept-Encoding'
  });
  const encoding = request.headers.get('accept-encoding') || '';
  // Honor explicit gzip;q=0 in addition to browsers' normal gzip support.
  const match = encoding.match(/(?:^|,)[\s]*gzip(?:;q=([0-9.]+))?(?:,|$)/i);
  if (match && (!match[1] || Number(match[1]) > 0)) {
    const zipped = gzipSync(Buffer.from(document, 'utf8'), { level: 6 });
    headers.set('Content-Encoding', 'gzip');
    return new Response(new Uint8Array(zipped), { status: 200, headers });
  }
  return new Response(document, { status: 200, headers });
}
