import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.stubtec.dk/sitemap.xml',
    host: 'https://www.stubtec.dk'
  };
}
