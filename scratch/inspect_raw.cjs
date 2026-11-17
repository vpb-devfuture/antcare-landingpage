const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

// Find articles
const articleMatches = [...html.matchAll(/<article\s+id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/article>/gi)];
console.log('Found articles count:', articleMatches.length);
articleMatches.forEach((m, idx) => {
  const id = m[1];
  const h2Match = m[2].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'No H2';
  console.log((idx + 1) + '. ID: ' + id + ' | H2: ' + h2);
});

// Check JSON-LD
const scriptMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
console.log('\nJSON-LD scripts found:', scriptMatches.length);
scriptMatches.forEach((s, idx) => {
  try {
    const parsed = JSON.parse(s[1]);
    console.log('Script ' + (idx + 1) + ' keys:', Object.keys(parsed));
    if (parsed['@graph']) {
      console.log('  @graph length:', parsed['@graph'].length);
      parsed['@graph'].forEach((g, gIdx) => {
        console.log('    [' + gIdx + '] type: ' + g['@type'] + ' | name/headline: ' + (g.headline || g.name || g.url));
      });
    } else {
      console.log('  type:', parsed['@type']);
    }
  } catch(e) {
    console.log('Script ' + (idx + 1) + ' JSON parse error:', e.message);
  }
});

