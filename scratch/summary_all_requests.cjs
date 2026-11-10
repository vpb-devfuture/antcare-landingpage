const fs = require('fs');

function checkFile(name) {
  if (!fs.existsSync(name)) return;
  const content = fs.readFileSync(name, 'utf8');
  const h2s = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`=== ${name} (${content.length} chars, ${h2s.length} H2s) ===`);
  h2s.forEach((h, i) => console.log(`  ${i+1}. ${h.slice(0, 70)}`));
}

checkFile('scratch/request_6.html');
checkFile('scratch/request_7.html');
checkFile('scratch/request_9.html');
checkFile('scratch/user_cam_nang_30.html');

