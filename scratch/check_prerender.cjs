const fs = require('fs');
const content = fs.readFileSync('scripts/prerender.js', 'utf8');
console.log('Size:', content.length);
console.log(content.slice(0, 1000));

