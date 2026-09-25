const fs = require('fs');

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

const oldUrls = [
  'https://antcare.vn/news/chuan-bi-gi-khi-dua-bo-me-di-kham-benh',
  'https://antcare.vn/news/dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi',
  'https://antcare.vn/news/dich-vu-dong-hanh-kham-benh-la-gi',
  'https://antcare.vn/news/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia'
];

oldUrls.forEach(url => {
  const pattern = new RegExp('\\s*<url>\\s*<loc>' + url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '<\\/loc>[\\s\\S]*?<\\/url>', 'g');
  sitemap = sitemap.replace(pattern, '');
});

// Update checklist lastmod
sitemap = sitemap.replace(
  /(<loc>https:\/\/antcare\.vn\/news\/checklist-dua-bo-me-di-kham-benh-vien<\/loc>\s*<lastmod>)[^<]+(<\/lastmod>)/,
  '$12026-09-25$2'
);

// Add new service URL
const newServiceUrl = 'https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi';
if (!sitemap.includes(newServiceUrl)) {
  const newEntry = `  <url>\n    <loc>${newServiceUrl}</loc>\n    <lastmod>2026-09-25</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  sitemap = sitemap.replace(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${newEntry}`
  );
}

fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
console.log('Sitemap successfully updated.');
