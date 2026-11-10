const fs = require('fs');
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf-8');
const exact1 = sitemap.includes('<loc>https://antcare.vn/quan-lot-tham-hut</loc>');
const exact2 = sitemap.includes('<loc>https://antcare.vn/quan-lot-tham-hut/</loc>');
console.log('exact /quan-lot-tham-hut in sitemap:', exact1, exact2);

