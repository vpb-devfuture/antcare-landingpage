const fs = require('fs');
const code = fs.readFileSync('src/pages/LandingPage.jsx', 'utf8');
console.log('LandingPage length:', code.length);
const matches = [...code.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Section IDs:', matches);

