const fs = require('fs');

const menuPath = 'src/config/menu.json';
const menu = JSON.parse(fs.readFileSync(menuPath, 'utf-8'));

// Find products item and remove children
const productsItem = menu.find(item => item.id === 'products');
if (productsItem) {
  delete productsItem.children;
  productsItem.path = '/#quan-lot-tham-hut';
}

fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2) + '\n');
console.log('Successfully removed children from products tab in menu.json');

