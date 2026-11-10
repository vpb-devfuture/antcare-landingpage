const fs = require('fs');
const sharp = require('sharp');

async function check(name, file) {
  try {
    const meta = await sharp(file).metadata();
    const stat = fs.statSync(file);
    console.log(`${name}: ${meta.width}x${meta.height}, format: ${meta.format}, size: ${(stat.size/1024).toFixed(1)} KB`);
  } catch(e) {
    console.log(`${name}: Error - ${e.message}`);
  }
}

async function run() {
  console.log('=== User Uploaded Images ===');
  await check('Image 1 (Crotch detail)', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.user_uploaded/media_1793905141144_068ac2fb.jpg');
  await check('Image 2 (Beige panty)', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.user_uploaded/media_1793929128452_3d7b7abc.jpg');
  await check('Image 3 (4 Layers)', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.user_uploaded/media_1793930520026_6a44ae32.jpg');

  console.log('\n=== Public Product Images ===');
  await check('quan-lot-tham-hut.jpg', 'public/images/products/quan-lot-tham-hut.jpg');
  await check('minh-hoa-cau-tao-4-lop.jpg', 'public/images/products/minh-hoa-cau-tao-4-lop.jpg');
  await check('hero-absorbent-underwear-vi.jpg', 'public/images/products/hero-absorbent-underwear-vi.jpg');
}

run();

