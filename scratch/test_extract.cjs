const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.resolve(__dirname, 'user_kinh_nguyet_lan_dau.html'), 'utf8');

// Find content inside <div class="wrap">
const wrapMatch = raw.match(/<div class="wrap">([\s\S]*?)<\/div>\s*<\/body>/i);
if (!wrapMatch) {
  console.error('Could not find .wrap in raw html');
  process.exit(1);
}

let body = wrapMatch[1];

// Remove <header class="site">...</header>
body = body.replace(/<header class="site">[\s\S]*?<\/header>/i, '');

// Remove SEO-plan section
body = body.replace(/<!-- ===== PHẦN QUẢN TRỊ[\s\S]*?<!-- ===== HẾT PHẦN QUẢN TRỊ ===== -->/i, '');

// Replace full domain links with relative paths
body = body.replace(/https:\/\/antcare\.vn\/kien-thuc\/ngay-kinh-nguyet-nen-dung-gi\/?/g, '/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi');

// Trim whitespace
body = body.trim();

console.log('Extracted body length:', body.length);
console.log('Body starts with:\n', body.slice(0, 300));
console.log('\nBody ends with:\n', body.slice(-300));

// Check if all essential headings are present
const h2s = [...body.matchAll(/<h2[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => `#${m[1]}: ${m[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('\nFound H2s (' + h2s.length + '):');
h2s.forEach(h => console.log(' ', h));

