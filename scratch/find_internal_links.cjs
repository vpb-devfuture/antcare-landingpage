const fs = require('fs');
const path = require('path');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        walkDir(fullPath, fileList);
      }
    } else {
      if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.json') || fullPath.endsWith('.html') || fullPath.endsWith('.txt')) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const allFiles = walkDir('src');
console.log('Total files checked:', allFiles.length);

const matches = [];
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  if (content.includes('/quan-lot-tham-hut')) {
    matches.push(file);
  }
}

console.log('Files containing /quan-lot-tham-hut:', matches);

