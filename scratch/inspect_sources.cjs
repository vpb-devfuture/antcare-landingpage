const fs = require('fs');
const html = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

const secMatch = html.match(/<section class="sources">([\s\S]*?)<\/section>/i);
if (secMatch) {
  console.log('Section sources:\n', secMatch[0]);
}

