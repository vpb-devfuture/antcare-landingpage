const fs = require('fs');
const nav = fs.readFileSync('src/components/TopNavBar.jsx', 'utf8');

// Look for right-side buttons (e.g. Hotline, Consult, etc.)
const rightSide = nav.slice(nav.lastIndexOf('flex items-center'));
console.log('Right side of TopNavBar:');
console.log(nav.slice(3000, 4800));

