const fs = require('fs');
const content = fs.readFileSync('src/components/TopNavBar.jsx', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(175, 230).join('\n'));

