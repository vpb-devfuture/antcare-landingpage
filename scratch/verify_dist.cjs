const fs = require('fs');

const file = 'dist/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html';
if (!fs.existsSync(file)) {
  console.error('File not found:', file);
  process.exit(1);
}

const html = fs.readFileSync(file, 'utf8');

console.log('=== VERIFYING DIST SERVICE PAGE ===');
const titleMatch = html.match(/<title>[\s\S]*?<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[0] : 'MISSING');

const descMatch = html.match(/<meta name="description"[\s\S]*?>/i);
console.log('Description:', descMatch ? descMatch[0] : 'MISSING');

const canonicalMatch = html.match(/<link rel="canonical"[\s\S]*?>/i);
console.log('Canonical:', canonicalMatch ? canonicalMatch[0] : 'MISSING');

const h1Match = html.match(/<h1[\s\S]*?<\/h1>/i);
console.log('H1:', h1Match ? h1Match[0] : 'MISSING');

// Check H1 count (must be exactly 1)
const allH1s = html.match(/<h1[\s\S]*?<\/h1>/gi);
console.log('Total H1 count:', allH1s ? allH1s.length : 0);

// Check JSON-LD
const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
console.log('JSON-LD scripts found:', jsonLdMatches ? jsonLdMatches.length : 0);
if (jsonLdMatches) {
  jsonLdMatches.forEach((script, idx) => {
    const raw = script.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '');
    try {
      const parsed = JSON.parse(raw);
      console.log(`Script ${idx + 1} valid JSON! Types:`, parsed['@type'] || (parsed['@graph'] && parsed['@graph'].map(g => g['@type'])));
    } catch (e) {
      console.error(`Script ${idx + 1} invalid JSON:`, e.message);
    }
  });
}
