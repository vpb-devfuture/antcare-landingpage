const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(120, 200).join('\n'));

