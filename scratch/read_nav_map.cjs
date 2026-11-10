const fs = require('fs');
const nav = fs.readFileSync('src/components/TopNavBar.jsx', 'utf8');
const lines = nav.split('\n');
console.log(lines.slice(110, 175).join('\n'));

