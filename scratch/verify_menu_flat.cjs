const fs = require('fs');
const menu = JSON.parse(fs.readFileSync('src/config/menu.json', 'utf-8'));
const vi = JSON.parse(fs.readFileSync('src/locales/vi/translation.json', 'utf-8'));

console.log('=== VERIFY MENU STRUCTURE ===');
menu.forEach((item, i) => {
  const title = vi.menu[item.i18nKey.replace('menu.', '')];
  const hasChildren = item.children && item.children.length > 0;
  console.log(`${i + 1}. [${title}] path: ${item.path} | dropdown: ${hasChildren ? item.children.map(c => vi.menu[c.i18nKey.replace('menu.', '')]).join(', ') : 'NONE (Đơn tab)'}`);
});

