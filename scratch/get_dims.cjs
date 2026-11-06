const fs = require('fs');

function getJpegDims(filePath) {
  const buf = fs.readFileSync(filePath);
  let i = 2;
  while (i < buf.length - 8) {
    if (buf[i] === 0xFF && (buf[i+1] === 0xC0 || buf[i+1] === 0xC2)) {
      const height = buf.readUInt16BE(i + 5);
      const width = buf.readUInt16BE(i + 7);
      return { width, height };
    }
    i++;
  }
  return null;
}

console.log('hero-bg:', getJpegDims('public/images/hero-bg.jpg'));
console.log('hero-bg-mobile:', getJpegDims('public/images/hero-bg-mobile.jpg'));

