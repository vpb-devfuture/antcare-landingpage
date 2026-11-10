const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf-8');
const lines = content.split('\n');
console.log('Total lines in prerender.js:', lines.length);
console.log(lines.slice(0, 100).join('\n'));

