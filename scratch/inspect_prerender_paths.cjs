const fs = require('fs');
const prerender = fs.readFileSync('scripts/prerender.js', 'utf8');

const matches = [...prerender.matchAll(/(path:\s*['"][^'"]+['"]|outputPath|renderPage|writeFileSync)/g)].map(m => m[0]);
console.log('Matches count:', matches.length);
console.log('Sample matches:', matches.slice(0, 30));

const paths = [...prerender.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('\nPaths configured in prerender.js:');
paths.forEach(p => console.log(' -', p));

