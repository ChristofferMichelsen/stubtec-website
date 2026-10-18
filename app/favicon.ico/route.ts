import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
export const runtime = 'nodejs';
export async function GET() {
  try {
    const bytes = await readFile(join(process.cwd(), 'public', 'assets', 'favicon.ico'));
    return new Response(new Uint8Array(bytes), { headers: { 'Content-Type': 'image/x-icon', 'Cache-Control': 'public, max-age=86400' } });
  } catch { return new Response('Not found', { status: 404 }); }
}
