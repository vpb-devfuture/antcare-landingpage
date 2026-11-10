const fs = require('fs');
const content = fs.readFileSync('src/App.jsx', 'utf8');

const routes = [...content.matchAll(/<Route\s+path=["']([^"']+)["']\s+element=\{([^}]+)\}/g)];
console.log('Total routes defined in App.jsx:', routes.length);

const activeRoutes = routes.filter(r => !r[2].includes('Navigate'));
console.log('\n--- ACTIVE NON-REDIRECT ROUTES ---');
activeRoutes.forEach(r => console.log(`path="${r[1]}" -> ${r[2].trim()}`));

const redirectRoutes = routes.filter(r => r[2].includes('Navigate'));
console.log('\n--- TOTAL REDIRECT ROUTES ---', redirectRoutes.length);
redirectRoutes.slice(0, 10).forEach(r => console.log(`path="${r[1]}" -> ${r[2].trim()}`));

