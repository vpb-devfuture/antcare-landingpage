const fs = require('fs');

const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '<section className="pt-16 md:pt-[68px] pb-12 sm:pb-16 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">',
  '<section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">'
);

content = content.replace(
  '<div className="max-w-[1360px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 md:py-4">',
  '<div className="max-w-[1360px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 pt-1 pb-2 md:pt-2 md:pb-4">'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully fixed hero top gap in Home.jsx!');

