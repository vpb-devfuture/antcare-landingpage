const fs = require('fs');
const content = fs.readFileSync('src/pages/MedicalEscortService.jsx', 'utf-8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
console.log(lines.slice(0, 100).join('\n'));

