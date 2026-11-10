const fs = require('fs');
const menu = JSON.parse(fs.readFileSync('src/config/menu.json', 'utf-8'));
const vi = JSON.parse(fs.readFileSync('src/locales/vi/translation.json', 'utf-8'));

console.log('Menu items displayed:');
menu.forEach((item, idx) => {
  const label = vi.menu[item.i18nKey.replace('menu.', '')];
  console.log(`${idx + 1}. ${label} -> ${item.path}`);
});

const topNav = fs.readFileSync('src/components/TopNavBar.jsx', 'utf-8');
console.log('Contains "Nhận thông tin ra mắt" in TopNavBar:', topNav.includes('Nhận thông tin ra mắt'));
console.log('Contains "preorder" in TopNavBar:', topNav.includes('preorder'));

