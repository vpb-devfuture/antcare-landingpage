const fs = require('fs');

// 1. VI
const viPath = 'src/locales/vi/translation.json';
const vi = JSON.parse(fs.readFileSync(viPath, 'utf-8'));
vi.menu.elderly_care = 'Dịch vụ';
fs.writeFileSync(viPath, JSON.stringify(vi, null, 2) + '\n');
console.log('Updated vi/translation.json: elderly_care = Dịch vụ');

// 2. EN
const enPath = 'src/locales/en/translation.json';
const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
en.menu.elderly_care = 'Services';
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n');
console.log('Updated en/translation.json: elderly_care = Services');

