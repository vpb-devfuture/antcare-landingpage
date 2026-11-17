const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

const articleMatches = [...html.matchAll(/<article\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];
articleMatches.forEach((m, idx) => {
  const rawId = m[1];
  const body = m[2];
  const h2 = (body.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || ['', ''])[1].replace(/<[^>]+>/g, '').trim();
  const firstP = (body.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || ['', ''])[1].replace(/<[^>]+>/g, '').trim();
  console.log(`\n=== Article ${idx + 1}: ${rawId} ===`);
  console.log(`H2: ${h2}`);
  console.log(`Length: ${body.length} chars`);
  console.log(`First P: ${firstP.slice(0, 100)}...`);
  // Check headings
  const headings = [...body.matchAll(/<(h[2-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => `${h[1].toUpperCase()}: ${h[2].replace(/<[^>]+>/g, '').trim()}`);
  console.log('Headings:', headings);
});

