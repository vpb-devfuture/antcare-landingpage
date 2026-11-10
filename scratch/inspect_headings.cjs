const fs = require('fs');
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');

const allH2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
console.log('Total H2 count:', allH2.length);
allH2.forEach((m, idx) => {
  console.log(`${idx + 1}: ${m[0].slice(0, 100)}`);
});

const allH3 = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
console.log('Total H3 count:', allH3.length);
allH3.slice(0, 15).forEach((m, idx) => {
  console.log(`H3 ${idx + 1}: ${m[0].slice(0, 100)}`);
});

