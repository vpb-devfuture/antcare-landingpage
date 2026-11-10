const fs = require('fs');
const content = fs.readFileSync('src/components/TopNavBar.jsx', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('preorder') || l.includes('Nhận thông tin ra mắt') || l.includes('dang-ky')) {
    console.log(i + 1, l.trim());
  }
});

