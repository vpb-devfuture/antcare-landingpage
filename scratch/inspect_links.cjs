const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

const anchorMatches = [...html.matchAll(/href="([^"]+)"/gi)].map(m => m[1]);
const uniqueAnchors = [...new Set(anchorMatches)];
console.log('Unique hrefs in raw HTML:', uniqueAnchors);

