const fs = require('fs');
const code = fs.readFileSync('scratch/add_4_new_articles.cjs', 'utf8');
console.log('Size:', code.length);
console.log('First 500 chars:\n', code.slice(0, 500));
console.log('Check slugs:');
const slugs = [...code.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Found slugs in add_4_new_articles.cjs:', slugs);

