import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Serve the captured ChatGPT Site exactly, including its own CSS and JavaScript.
// Azure's existing Next.js standalone deployment copies public/ alongside server.js.
export const runtime = 'nodejs';
export async function GET() {
  const html = await readFile(join(process.cwd(), 'public', 'index.html'), 'utf8');
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
