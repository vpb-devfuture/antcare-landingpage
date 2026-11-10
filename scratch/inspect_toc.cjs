const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

const navToc = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/i);
if (navToc) {
  console.log('Found nav:');
  const items = [...navToc[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
  console.log('Nav items count:', items.length);
  items.forEach((item, idx) => {
    console.log(`${idx + 1}: ${item[1].replace(/<[^>]+>/g, '').trim()}`);
  });
}

