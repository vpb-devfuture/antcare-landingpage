const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

function getInfo(name, path) {
  try {
    const buf = fs.readFileSync(path);
    const stat = fs.statSync(path);
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      const dec = jpeg.decode(buf, { useTArray: true, formatAsRGBA: false });
      console.log(`${name}: JPEG ${dec.width}x${dec.height}, ${(stat.size/1024).toFixed(1)} KB`);
    } else if (buf[0] === 0x89 && buf[1] === 0x50) {
      const png = PNG.sync.read(buf);
      console.log(`${name}: PNG ${png.width}x${png.height}, ${(stat.size/1024).toFixed(1)} KB`);
    } else {
      console.log(`${name}: Unknown header [${buf[0]}, ${buf[1]}], ${(stat.size/1024).toFixed(1)} KB`);
    }
  } catch(e) {
    console.log(`${name}: Error - ${e.message}`);
  }
}

console.log('=== User Uploaded Images ===');
getInfo('Image 1 (Crotch detail)', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.user_uploaded/media_1793905141144_068ac2fb.jpg');
getInfo('Image 2 (Beige panty)', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.user_uploaded/media_1793929128452_3d7b7abc.jpg');
getInfo('Image 3 (4 Layers)', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.user_uploaded/media_1793930520026_6a44ae32.jpg');

console.log('\n=== Public Product Images ===');
getInfo('quan-lot-tham-hut.jpg', 'public/images/products/quan-lot-tham-hut.jpg');
getInfo('minh-hoa-cau-tao-4-lop.jpg', 'public/images/products/minh-hoa-cau-tao-4-lop.jpg');
getInfo('hero-absorbent-underwear-vi.jpg', 'public/images/products/hero-absorbent-underwear-vi.jpg');

