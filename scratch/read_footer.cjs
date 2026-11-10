const fs = require('fs');
const content = fs.readFileSync('src/components/Footer.jsx', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(0, 100).join('\n'));

