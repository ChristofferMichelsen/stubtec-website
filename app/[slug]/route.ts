
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { marketingPages } from '../../lib/marketing-pages';
import { websiteHtmlResponse } from '../../lib/http-html';

export const runtime = 'nodejs';
const origin = 'https://www.stubtec.dk';
const image = origin + '/static-resource?name=assets/christoffer-architecture-review.jpg';

function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function getHeader() {
  return `
    <a class="skip-link" href="#main">Spring til indhold</a>
    <header class="site-header" data-header>
      <div class="header-inner shell">
        <a class="brand" href="/" aria-label="StubTEC PLM, gå til forsiden">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span>Stub<span>TEC</span></span>
        </a>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="sr-only" data-menu-label>Åbn menu</span><span></span><span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primær navigation">
          <a href="/plm-arkitektur">PLM-arkitektur</a>
          <a href="/aras-innovator">Aras Innovator</a>
          <a href="/solidworks-pdm-aras-integration">Integration</a>
          <a href="/cases">Cases</a>
          <a href="/plm-study-week">Study Week</a>
          <a class="nav-cta" href="/kontakt">Kontakt ↗</a>
        </nav>
      </div>
    </header>
  `;
}

function getFooter() {
  return `
    <footer class="site-footer"><div class="shell footer-grid">
      <a class="brand footer-brand" href="/"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>Stub<span>TEC</span></span></a>
      <p>PLM-arkitektur, Aras Innovator og integration fra Fredensborg, Danmark.</p>
      <div>
        <a href="/aras-innovator">Aras</a>
        <a href="/plm-arkitektur">PLM</a>
        <a href="/ressourcer">Diagrammer</a>
        <a href="/om">Om</a>
        <a href="/privatliv">Privatliv</a>
        <a href="/kontakt">Kontakt</a>
      </div>
      <small>© ${new Date().getFullYear()} StubTEC PLM ApS</small>
    </div></footer>
  `;
}

export async function GET(_request: Request, context: {params: Promise<{slug: string}>}) {
  const { slug } = await context.params;
  const page = Object.prototype.hasOwnProperty.call(marketingPages, slug) ? marketingPages[slug] : null;
  if (!page) return new Response('Ikke fundet', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

  const canonical = origin + '/' + page.slug;
  const [baseCss, marketingCss, script] = await Promise.all([
    readFile(join(process.cwd(), 'public/styles.css'), 'utf8'),
    readFile(join(process.cwd(), 'public/marketing.css'), 'utf8'),
    readFile(join(process.cwd(), 'public/site.js'), 'utf8')
  ]);
  const jsonLd = JSON.stringify([
    {
      '@context':'https://schema.org', '@type':'ProfessionalService', '@id':origin + '/#organization',
      name:'StubTEC PLM ApS', url:origin + '/', description:'PLM-arkitektur, Aras Innovator og CAD/PDM–ERP-integration',
      areaServed:{ '@type':'Country', name:'Danmark' },
      email:'csm@stubtec.dk', address:{ '@type':'PostalAddress', addressLocality:'Fredensborg', addressCountry:'DK' }
    },
    {
      '@context':'https://schema.org', '@type':'WebPage', '@id':canonical + '#webpage',
      url:canonical, name:page.title, description:page.description, inLanguage:'da-DK',
      isPartOf:{'@type':'WebSite', url:origin + '/',name:'StubTEC PLM'}
    }
  ]).replaceAll('<','\\u003c');
  const document = `<!doctype html>
<html lang="da">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0b0f14">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="da-DK" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="da_DK">
  <meta property="og:site_name" content="StubTEC PLM">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:alt" content="StubTEC PLM – arkitektur, engineering og produktdata">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(page.title)}">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230b0f14'/%3E%3Cpath d='M15 19h34M15 32h25M15 45h34' fill='none' stroke='%23e23b43' stroke-width='6' stroke-linecap='round'/%3E%3C/svg%3E">
  <style>${baseCss}
${marketingCss}</style>
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body class="seo-page">
  ${getHeader()}
  <main id="main">
    <section class="page-hero"><div class="shell">
      <p class="eyebrow">${escapeHtml(page.label)}</p>
      <h1>${escapeHtml(page.headline)}</h1>
      <p class="page-hero-intro">${escapeHtml(page.intro)}</p>
      <div class="page-hero-actions">
        <a class="button button-primary" href="/kontakt">Kontakt StubTEC ↗</a>
        <a class="text-link light" href="/">Tilbage til forsiden ↗</a>
      </div>
    </div></section>
    ${page.body}
    <nav class="related-nav shell" aria-label="Relaterede ydelser">
      <p class="eyebrow dark">UDFORSK MERE</p>
      <div><a href="/plm-arkitektur">PLM-arkitektur ↗</a><a href="/aras-innovator">Aras Innovator ↗</a><a href="/solidworks-pdm-aras-integration">PDM-integration ↗</a><a href="/plm-study-week">Study Week ↗</a><a href="/cases">Cases ↗</a></div>
    </nav>
  </main>
  ${getFooter()}
  <script>${script}</script>
</body>
</html>`;

  return websiteHtmlResponse(document, _request);
}
