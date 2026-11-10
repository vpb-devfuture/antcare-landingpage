const fs = require('fs');
const prerender = fs.readFileSync('scripts/prerender.js', 'utf8');
console.log(prerender.split('\n').slice(50, 160).join('\n'));

