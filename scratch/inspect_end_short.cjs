const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
console.log('Length:', html.length);
console.log('Last 200 chars:', JSON.stringify(html.slice(-200)));

