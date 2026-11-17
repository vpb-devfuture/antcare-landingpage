const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.resolve(__dirname, 'user_nen_chon_coc.html'), 'utf8');

const titleMatch = raw.match(/<title>([^<]+)<\/title>/i);
const descMatch = raw.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
const keywordsMatch = raw.match(/<meta\s+name="keywords"\s+content="([^"]+)"/i);
const canonicalMatch = raw.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);

console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');
console.log('Description:', descMatch ? descMatch[1] : 'N/A');
console.log('Keywords:', keywordsMatch ? keywordsMatch[1] : 'N/A');
console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'N/A');

const scriptMatch = raw.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (scriptMatch) {
  const jsonLd = JSON.parse(scriptMatch[1]);
  console.log('JSON-LD Graph types:', jsonLd['@graph'].map(g => g['@type']));
  const faqPage = jsonLd['@graph'].find(g => g['@type'] === 'FAQPage');
  if (faqPage) {
    console.log('FAQs count in JSON-LD:', faqPage.mainEntity.length);
    faqPage.mainEntity.forEach((f, i) => console.log(`  ${i+1}. ${f.name}`));
  }
}

