const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(950, 1020).join('\n'));

