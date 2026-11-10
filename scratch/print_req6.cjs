const fs = require('fs');
const req6 = fs.readFileSync('scratch/request_6.html', 'utf8');
const match = req6.match(/<article[^>]*id="[^"]*hoi-dap[^"]*"[^>]*>([\s\S]*?)<\/article>/i);
console.log(match[0].slice(0, 1000));

