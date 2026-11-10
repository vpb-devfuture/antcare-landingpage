const fs = require('fs');
const appJsx = fs.readFileSync('src/App.jsx', 'utf8');

const redirects = [...appJsx.matchAll(/<Route path="([^"]+)" element={<Navigate to="([^"]+)" replace \/>} \/>/g)];
console.log('Total root redirects in App.jsx:', redirects.length);
redirects.slice(-10).forEach(r => console.log(r[1], '->', r[2]));

