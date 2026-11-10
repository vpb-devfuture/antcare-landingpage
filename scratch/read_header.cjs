const fs = require('fs');
const header = fs.readFileSync('src/components/Header.jsx', 'utf8');
console.log('Header length:', header.length);
console.log(header.slice(0, 1500));

