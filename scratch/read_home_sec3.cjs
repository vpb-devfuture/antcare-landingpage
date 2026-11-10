const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(208, 220).join('\n'));

