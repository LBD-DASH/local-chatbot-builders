import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../lib/url';

export const GET: APIRoute = async ({ site }) => {
  const trades = await getCollection('trades');
  const day = (d: Date) => d.toISOString().slice(0, 10);
  const urls = [
    { loc: absUrl('', site) },
    { loc: absUrl('services/', site) },
    ...trades.map((t) => ({ loc: absUrl(`trades/${t.id}/`, site), lastmod: day(t.data.lastUpdated) })),
    { loc: absUrl('faq/', site) },
    { loc: absUrl('request-a-quote/', site) },
    { loc: absUrl('about/', site) },
    { loc: absUrl('privacy/', site) },
    { loc: absUrl('disclosure/', site) },
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u: any) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
