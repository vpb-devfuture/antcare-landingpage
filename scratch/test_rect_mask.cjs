const fs = require('fs');
const { PNG } = require('pngjs');

const img = PNG.sync.read(fs.readFileSync('scratch/logo_close_up.png'));
const w = img.width, h = img.height;

const mask = new Uint8Array(w * h);

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    // Ant body & head
    if (x >= 40 && x <= 75 && y >= 54 && y <= 86) {
      mask[y * w + x] = 1;
    }
    // Ant antennae
    if (x >= 58 && x <= 70 && y >= 50 && y <= 55) {
      mask[y * w + x] = 1;
    }
    // ANTCare text
    if (x >= 71 && x <= 111 && y >= 64 && y <= 82) {
      mask[y * w + x] = 1;
    }
  }
}

// 1px feather/dilation
const dilated = new Uint8Array(w * h);
for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {
    let hit = false;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (mask[(y + dy) * w + (x + dx)] === 1) {
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    if (hit && x <= 111) {
      dilated[y * w + x] = 1;
    }
  }
}

const vis = new PNG({ width: w, height: h });
for (let i = 0; i < w * h; i++) {
  if (dilated[i] === 1) {
    vis.data[i*4] = 255;
    vis.data[i*4+1] = 0;
    vis.data[i*4+2] = 0;
    vis.data[i*4+3] = 255;
  } else {
    vis.data[i*4] = img.data[i*4];
    vis.data[i*4+1] = img.data[i*4+1];
    vis.data[i*4+2] = img.data[i*4+2];
    vis.data[i*4+3] = 255;
  }
}
fs.writeFileSync('scratch/mask_rect_test.png', PNG.sync.write(vis));
console.log('Saved scratch/mask_rect_test.png');

