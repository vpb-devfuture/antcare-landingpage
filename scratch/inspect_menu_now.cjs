const fs = require('fs');
const menu = JSON.parse(fs.readFileSync('src/config/menu.json', 'utf-8'));
console.log(menu);

