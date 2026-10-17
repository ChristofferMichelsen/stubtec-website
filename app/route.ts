import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { websiteHtmlResponse } from '../lib/http-html';

export const runtime = 'nodejs';

// The verified source is prepared with inline CSS/JS by the build pipeline.
export async function GET(request: Request) {
  const html = await readFile(join(process.cwd(), 'public', 'index.html'), 'utf8');
  return websiteHtmlResponse(html, request);
}
