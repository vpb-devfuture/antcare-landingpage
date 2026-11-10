const fs = require('fs');
const prerender = fs.readFileSync('scripts/prerender.js', 'utf8');
console.log(prerender.split('\n').slice(160, 260).join('\n'));

