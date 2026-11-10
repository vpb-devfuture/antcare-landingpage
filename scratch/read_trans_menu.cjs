const fs = require('fs');
const vi = JSON.parse(fs.readFileSync('src/locales/vi/translation.json', 'utf-8'));
const en = JSON.parse(fs.readFileSync('src/locales/en/translation.json', 'utf-8'));
console.log('VI menu:', vi.menu);
console.log('EN menu:', en.menu);

