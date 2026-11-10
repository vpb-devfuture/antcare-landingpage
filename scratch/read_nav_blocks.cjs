const fs = require('fs');
const content = fs.readFileSync('src/components/TopNavBar.jsx', 'utf-8');
const lines = content.split('\n');
console.log('=== Lines 160-220 ===');
console.log(lines.slice(160, 220).join('\n'));
console.log('=== Lines 270-310 ===');
console.log(lines.slice(270, 310).join('\n'));

