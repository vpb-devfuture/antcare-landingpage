const fs = require('fs');
const content = fs.readFileSync('src/pages/MedicalEscortService.jsx', 'utf-8');
const lines = content.split('\n');
console.log('=== Lines 170-220 ===');
console.log(lines.slice(170, 220).join('\n'));
console.log('=== Lines 435-460 ===');
console.log(lines.slice(435, 460).join('\n'));
console.log('=== Lines 700-740 ===');
console.log(lines.slice(700, 740).join('\n'));

