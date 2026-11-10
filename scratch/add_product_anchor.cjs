const fs = require('fs');

// 1. Update src/pages/Home.jsx
let homeContent = fs.readFileSync('src/pages/Home.jsx', 'utf-8');
homeContent = homeContent.replace(
  '<section id="quan-kinh-nguyet" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5]">',
  '<section id="quan-kinh-nguyet" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5] scroll-mt-16 relative">\n        <div id="quan-lot-tham-hut" className="absolute -top-20"></div>'
);
fs.writeFileSync('src/pages/Home.jsx', homeContent);
console.log('Updated src/pages/Home.jsx with #quan-lot-tham-hut anchor');

// 2. Update scripts/prerender.js
let prerenderContent = fs.readFileSync('scripts/prerender.js', 'utf-8');
prerenderContent = prerenderContent.replace(
  '<section id="quan-kinh-nguyet" class="py-10 border-t border-[#E8DFD5]">',
  '<section id="quan-kinh-nguyet" class="py-10 border-t border-[#E8DFD5] relative">\n        <div id="quan-lot-tham-hut" class="absolute -top-20"></div>'
);
fs.writeFileSync('scripts/prerender.js', prerenderContent);
console.log('Updated scripts/prerender.js with #quan-lot-tham-hut anchor');

