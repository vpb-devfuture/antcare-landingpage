const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

const m = html.match(/<div class="seo-plan">([\s\S]*?)<\/div>/i);
if (m) {
  console.log('Found seo plan div:\n', m[1].slice(0, 1500));
} else {
  console.log('No seo-plan found. Let us check first 100 lines of user_cam_nang_30.html:');
  console.log(html.split('\n').slice(0, 50).join('\n'));
}

