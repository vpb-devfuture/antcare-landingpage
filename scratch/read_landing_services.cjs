const fs = require('fs');
const content = fs.readFileSync('src/pages/LandingPage.jsx', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(580, 750).join('\n'));

