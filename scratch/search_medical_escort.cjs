const fs = require('fs');
const content = fs.readFileSync('src/pages/MedicalEscortService.jsx', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<h1') || l.includes('breadcrumb') || l.includes('Đặt lịch') || l.includes('#dich-vu') || l.includes('#bang-gia')) {
    console.log(i + 1, l.trim());
  }
});

