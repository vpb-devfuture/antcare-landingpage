const fs = require('fs');
const content = fs.readFileSync('src/services/apiService.js', 'utf-8');
console.log(content.slice(0, 500));

