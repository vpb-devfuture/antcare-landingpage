const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

// Find table in seo-plan
const tableMatch = html.match(/<table[\s\S]*?<\/table>/i);
if (tableMatch) {
  console.log(tableMatch[0]);
} else {
  console.log('No table found');
}
