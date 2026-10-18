export function GET() {
  return Response.json({
    name: 'StubTEC PLM', short_name: 'StubTEC',
    icons: [
      { src: '/static-resource?name=assets/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/static-resource?name=assets/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    theme_color: '#0b0f14', background_color: '#0b0f14', display: 'standalone'
  }, { headers: { 'Content-Type': 'application/manifest+json' } });
}
