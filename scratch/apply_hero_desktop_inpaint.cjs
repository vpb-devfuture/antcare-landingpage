const fs = require('fs');
const { PNG } = require('pngjs');

// Load full desktop image
const fullPng = PNG.sync.read(fs.readFileSync('public/images/hero-bg.jpg'));

// Load perfected inpaint patch
const patch = PNG.sync.read(fs.readFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/inpaint_perfect.png'));

const startX = 950;
const startY = 490;

for (let y = 0; y < patch.height; y++) {
  for (let x = 0; x < patch.width; x++) {
    const patchIdx = (patch.width * y + x) << 2;
    const fullIdx = (fullPng.width * (startY + y) + (startX + x)) << 2;
    fullPng.data[fullIdx] = patch.data[patchIdx];
    fullPng.data[fullIdx + 1] = patch.data[patchIdx + 1];
    fullPng.data[fullIdx + 2] = patch.data[patchIdx + 2];
    fullPng.data[fullIdx + 3] = patch.data[patchIdx + 3];
  }
}

fs.writeFileSync('public/images/hero-bg.jpg', PNG.sync.write(fullPng));
console.log('Successfully updated public/images/hero-bg.jpg without logo!');

