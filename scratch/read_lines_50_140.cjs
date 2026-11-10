const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
console.log(html.split('\n').slice(50, 140).join('\n'));

