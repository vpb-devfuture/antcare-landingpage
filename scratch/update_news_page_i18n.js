import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsJsxPath = path.join(__dirname, '../src/pages/News.jsx');
let content = fs.readFileSync(newsJsxPath, 'utf8');

content = content.replace(
  "import React, { useEffect, useState } from 'react';",
  "import React, { useEffect, useState } from 'react';\nimport { useAppTranslation } from '../utils/i18nHelper';"
);

content = content.replace(
  "const News = () => {",
  "const News = () => {\n  const { t, isEn, tr } = useAppTranslation();"
);

const replacements = [
  ["const categories = ['Tất cả', 'An toàn nhà ở', 'Tri ân khách hàng', 'Chăm sóc sức khỏe', 'Sữa', 'Tin tức'];", 
   "const categories = ['Tất cả', 'An toàn nhà ở', 'Tri ân khách hàng', 'Chăm sóc sức khỏe', 'Sữa', 'Tin tức'];\n  const getCategoryLabel = (cat) => {\n    if (!isEn) return cat;\n    const map = { 'Tất cả': 'All', 'An toàn nhà ở': 'Home Safety', 'Tri ân khách hàng': 'Customer Appreciation', 'Chăm sóc sức khỏe': 'Healthcare', 'Sữa': 'Nutrition & Milk', 'Tin tức': 'News & Updates' };\n    return map[cat] || cat;\n  };"],
  ['{cat}', '{getCategoryLabel(cat)}'],
  ['Tất cả bài viết', '{tr("Tất cả bài viết", "All Articles")}'],
  ['Xem chi tiết bài viết', '{tr("Xem chi tiết bài viết", "Read full article")}'],
  ['Trang', '{tr("Trang", "Page")}']
];

replacements.forEach(([from, to]) => {
  content = content.replaceAll(from, to);
});

fs.writeFileSync(newsJsxPath, content, 'utf8');
console.log('Successfully updated News.jsx with i18n translations!');
