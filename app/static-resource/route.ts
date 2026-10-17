import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

/**
 * The current Azure Next.js standalone runtime does not expose the copied
 * public CSS, JS and SVG files directly (404). Serve these known assets through
 * a route handler to preserve the exact ChatGPT Sites design.
 */
const types: Record<string, string> = {
  'styles.css': 'text/css; charset=utf-8',
  'site.js': 'text/javascript; charset=utf-8',
  'assets/christoffer-architecture-review.jpg': 'image/jpeg',
  'assets/diagrams/digital-thread.svg': 'image/svg+xml',
  'assets/diagrams/lifecycle.svg': 'image/svg+xml',
  'assets/diagrams/people-process-tools.svg': 'image/svg+xml',
  'assets/diagrams/conventional-to-aras.svg': 'image/svg+xml',
  'assets/diagrams/aras-framework.svg': 'image/svg+xml',
};

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get('name');
  if (!name || !Object.prototype.hasOwnProperty.call(types, name)) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const content = await readFile(join(process.cwd(), 'public', name));
    return new Response(new Uint8Array(content), {
      status: 200,
      headers: {
        'Content-Type': types[name],
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch {
    return new Response('Asset missing', { status: 404 });
  }
}
