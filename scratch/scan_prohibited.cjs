const fs = require('fs');

const prohibited = ['100+ lần', '100 lần', 'kháng khuẩn', '100% chống tràn', 'tốt nhất', 'số 1', 'chữa khỏi', 'điều trị són tiểu'];

function checkFile(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`=== Scanning ${file} ===`);
  prohibited.forEach(p => {
    const count = (content.match(new RegExp(p, 'gi')) || []).length;
    if (count > 0) {
      console.log(`  Found "${p}": ${count} times`);
    }
  });
}

checkFile('src/pages/AbsorbentUnderwear.jsx');
checkFile('src/pages/LandingPage.jsx');
checkFile('src/pages/AboutUs.jsx');
checkFile('scripts/prerender.js');

