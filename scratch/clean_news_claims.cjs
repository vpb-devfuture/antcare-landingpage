const fs = require('fs');

function cleanNews(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace links to /quan-lot-tham-hut
  content = content.replace(/href=\\"https:\/\/antcare\.vn\/quan-lot-tham-hut([#\\"])/g, 'href=\\"https://antcare.vn/$1');
  content = content.replace(/href=\\"\/quan-lot-tham-hut([#\\"])/g, 'href=\\"/$1');

  // Replace prohibited product marketing claims in underwear context
  content = content.replace(/100% chống tràn/g, 'chống tràn hiệu quả');
  content = content.replace(/100\+ lần/g, 'nhiều lần');
  content = content.replace(/giặt và dùng lại 100 lần/g, 'giặt và dùng lại nhiều lần');
  content = content.replace(/dùng lại 100 lần/g, 'dùng lại nhiều lần');
  content = content.replace(/4 lớp kháng khuẩn/g, 'cấu tạo 4 lớp chuyên dụng');
  content = content.replace(/lớp kháng khuẩn/g, 'lớp tiếp xúc thoáng khí');
  content = content.replace(/vải kháng khuẩn/g, 'vải dệt thoáng khí an toàn');
  content = content.replace(/tính năng kháng khuẩn/g, 'tính năng thoáng khí');
  content = content.replace(/khả năng kháng khuẩn/g, 'độ sạch thoáng');

  fs.writeFileSync(filePath, content);
  console.log('Cleaned', filePath);
}

cleanNews('src/data/news.json');
cleanNews('src/data/news.en.json');

