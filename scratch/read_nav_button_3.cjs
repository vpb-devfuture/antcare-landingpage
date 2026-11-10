const fs = require('fs');
const nav = fs.readFileSync('src/components/TopNavBar.jsx', 'utf8');
console.log(nav.slice(6500));

