const fs = require('fs');

const path = 'scripts/prerender.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /h1Title: 'ANTCARE – Đồ lót chức năng cho phụ nữ và người cao tuổi: quần kinh nguyệt và quần chống són tiểu'/g,
  "h1Title: 'ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu'"
);

content = content.replace(
  /<h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-\[#1C1917\] leading-tight tracking-tight">\s*ANTCARE – Đồ lót chức năng cho phụ nữ và người cao tuổi: quần kinh nguyệt và quần chống són tiểu\s*<\/h1>/g,
  `<h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1917] leading-tight tracking-tight">
          ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu
        </h1>`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated scripts/prerender.js H1 title');

