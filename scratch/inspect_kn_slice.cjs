const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf8');

const idx = content.indexOf('const sortedKn');
console.log(content.slice(idx, idx + 600));

