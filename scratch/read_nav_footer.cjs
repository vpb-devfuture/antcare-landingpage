const fs = require('fs');

console.log('=== TopNavBar.jsx ===');
console.log(fs.readFileSync('src/components/TopNavBar.jsx', 'utf8').slice(0, 1200));

console.log('\n=== Footer.jsx ===');
console.log(fs.readFileSync('src/components/Footer.jsx', 'utf8').slice(0, 1200));

