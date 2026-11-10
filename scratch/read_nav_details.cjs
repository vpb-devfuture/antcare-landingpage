const fs = require('fs');
const content = fs.readFileSync('src/components/TopNavBar.jsx', 'utf8');
console.log(content.slice(1200, 3500));

