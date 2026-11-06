const fs = require('fs');
const { PNG } = require('pngjs');

// Load logo_exact.png
const src = PNG.sync.read(fs.readFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/logo_exact.png'));
const w = src.width;
const h = src.height;

// Create mask: 1 = to inpaint (logo + pocket), 0 = known background
const mask = new Uint8Array(w * h);

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = (w * y + x) << 2;
    const r = src.data[idx];
    const g = src.data[idx + 1];
    const b = src.data[idx + 2];
    
    // In this crop (160x120):
    // Ant mascot is around x: 40 to 80, y: 35 to 80
    // "ANTCare" text is around x: 75 to 118, y: 55 to 75
    // Let's detect non-fabric pixels:
    // Typical fabric in this region:
    // r is around 170-195, g is around 155-175, b is around 220-245.
    // Notice fabric has (b - r) around 40 to 65, and (b - g) around 55 to 80.
    // Logo pixels:
    const isDarkPurple = (r < 145 && g < 130 && b > 110); // ant body / "ANT"
    const isOrange = (r > 185 && g < 140 && b < 100);     // "Care" and antennae
    const isWhite = (r > 210 && g > 200 && b > 210 && r > 220); // white cross bag
    const isEyeWhite = (r > 200 && g > 190 && b > 210);
    const isAntennaOrange = (r > 190 && g < 150 && b < 130);
    
    if (x >= 40 && x <= 120 && y >= 30 && y <= 85) {
      if (isDarkPurple || isOrange || isWhite || isEyeWhite || isAntennaOrange) {
        mask[y * w + x] = 1;
      }
    }
  }
}

// Dilate mask by 3 pixels so ant edges/anti-aliasing are 100% covered
const dilatedMask = new Uint8Array(w * h);
const radius = 3;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (mask[y * w + x] === 1) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx*dx + dy*dy <= radius*radius) {
            const ny = y + dy;
            const nx = x + dx;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
              dilatedMask[ny * w + nx] = 1;
            }
          }
        }
      }
    }
  }
}

// Save mask preview to verify
const maskPng = new PNG({ width: w, height: h });
for (let i = 0; i < w * h; i++) {
  const v = dilatedMask[i] ? 255 : 0;
  maskPng.data[i * 4] = v;
  maskPng.data[i * 4 + 1] = v;
  maskPng.data[i * 4 + 2] = v;
  maskPng.data[i * 4 + 3] = 255;
}
fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/mask_preview.png', PNG.sync.write(maskPng));
console.log('Saved mask preview');

