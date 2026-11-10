const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(0, 80).join('\n'));

