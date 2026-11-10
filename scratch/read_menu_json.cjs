const fs = require('fs');
console.log(JSON.stringify(JSON.parse(fs.readFileSync('src/config/menu.json', 'utf-8')), null, 2));

