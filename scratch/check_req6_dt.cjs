const fs = require('fs');
const req6 = fs.readFileSync('scratch/request_6.html', 'utf8');
const match = req6.match(/<article id="hoi-dap-quan-tham-hut">([\s\S]*?)<\/article>/i);
console.log('Length:', match[1].length);
// Check questions in dl or headings
const dts = [...match[1].matchAll(/<dt[^>]*>([\s\S]*?)<\/dt>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('DT questions count:', dts.length);
dts.forEach((dt, i) => console.log(`${i+1}. ${dt}`));

