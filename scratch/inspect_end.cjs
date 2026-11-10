const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
console.log('HTML ends with:');
console.log(html.slice(-1000));

