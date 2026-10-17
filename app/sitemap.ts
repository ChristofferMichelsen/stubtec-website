import type { MetadataRoute } from 'next';
const site = 'https://www.stubtec.dk';
const routes = [
  '/', '/aras-innovator', '/plm-arkitektur', '/solidworks-pdm-aras-integration',
  '/plm-study-week', '/aras-quickstart', '/integration-pilot', '/cases',
  '/ressourcer', '/om', '/kontakt', '/privatliv'
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path, idx) => ({
    url: site + path,
    lastModified: new Date('2026-10-17T00:00:00Z'),
    changeFrequency: idx === 0 ? 'monthly' as const : 'yearly' as const,
    priority: idx === 0 ? 1 : idx === 11 ? 0.2 : 0.7
  }));
}
