import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\6cdd266a-bc89-486a-84ad-260aa8dbf0cd\\.user_uploaded\\media_1787814843826.png';
const publicDir = 'c:\\my-projects\\antcare\\sourcecode\\antcare-landingpage\\public';

// 1. Copy source image to public/antcare-favicon.png
fs.copyFileSync(srcPath, path.join(publicDir, 'antcare-favicon.png'));
console.log('Copied source image to public/antcare-favicon.png');

// Read source PNG
const buffer = fs.readFileSync(srcPath);
const srcPng = PNG.sync.read(buffer);

// Find tight bounding box of ant head content
let minX = srcPng.width, minY = srcPng.height, maxX = 0, maxY = 0;
for (let y = 0; y < srcPng.height; y++) {
  for (let x = 0; x < srcPng.width; x++) {
    const idx = (srcPng.width * y + x) << 2;
    const alpha = srcPng.data[idx + 3];
    if (alpha > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const cw = maxX - minX + 1;
const ch = maxY - minY + 1;
console.log(`Content bounding box: [${minX}, ${minY}, ${maxX}, ${maxY}], width=${cw}, height=${ch}`);

// Bilinear sampling function
function sampleBilinear(src, x, y) {
  if (x < 0 || x >= src.width - 1 || y < 0 || y >= src.height - 1) {
    if (x < -0.5 || x >= src.width - 0.5 || y < -0.5 || y >= src.height - 0.5) {
      return [0, 0, 0, 0];
    }
    const rx = Math.max(0, Math.min(src.width - 1, Math.round(x)));
    const ry = Math.max(0, Math.min(src.height - 1, Math.round(y)));
    const idx = (src.width * ry + rx) << 2;
    return [src.data[idx], src.data[idx+1], src.data[idx+2], src.data[idx+3]];
  }

  const x0 = Math.floor(x);
  const x1 = x0 + 1;
  const y0 = Math.floor(y);
  const y1 = y0 + 1;

  const dx = x - x0;
  const dy = y - y0;

  const i00 = (src.width * y0 + x0) << 2;
  const i10 = (src.width * y0 + x1) << 2;
  const i01 = (src.width * y1 + x0) << 2;
  const i11 = (src.width * y1 + x1) << 2;

  const result = [0, 0, 0, 0];
  for (let c = 0; c < 4; c++) {
    const v0 = src.data[i00 + c] * (1 - dx) + src.data[i10 + c] * dx;
    const v1 = src.data[i01 + c] * (1 - dx) + src.data[i11 + c] * dx;
    result[c] = Math.round(v0 * (1 - dy) + v1 * dy);
  }
  return result;
}

// Generate scaled favicon image
function generateFavicon(targetSize, filename, safeAreaRatio = 0.88) {
  const dstPng = new PNG({ width: targetSize, height: targetSize });
  
  // Fill background with transparent
  dstPng.data.fill(0);

  const scale = Math.min((targetSize * safeAreaRatio) / cw, (targetSize * safeAreaRatio) / ch);
  const scw = cw * scale;
  const sch = ch * scale;

  const offsetX = (targetSize - scw) / 2;
  const offsetY = (targetSize - sch) / 2;

  // Supersampling factor for clean downscaling
  const ss = 2;

  for (let ty = 0; ty < targetSize; ty++) {
    for (let tx = 0; tx < targetSize; tx++) {
      let r = 0, g = 0, b = 0, a = 0;

      for (let ssy = 0; ssy < ss; ssy++) {
        for (let ssx = 0; ssx < ss; ssx++) {
          const subTx = tx + (ssx + 0.5) / ss;
          const subTy = ty + (ssy + 0.5) / ss;

          const sx = minX + (subTx - offsetX) / scale;
          const sy = minY + (subTy - offsetY) / scale;

          const [pr, pg, pb, pa] = sampleBilinear(srcPng, sx, sy);
          
          // Premultiplied alpha accumulation
          r += pr * (pa / 255);
          g += pg * (pa / 255);
          b += pb * (pa / 255);
          a += pa;
        }
      }

      const count = ss * ss;
      const avgA = a / count;
      const dstIdx = (targetSize * ty + tx) << 2;

      if (avgA > 0) {
        dstPng.data[dstIdx] = Math.round((r / count) * (255 / (avgA || 1)));
        dstPng.data[dstIdx + 1] = Math.round((g / count) * (255 / (avgA || 1)));
        dstPng.data[dstIdx + 2] = Math.round((b / count) * (255 / (avgA || 1)));
        dstPng.data[dstIdx + 3] = Math.round(avgA);
      }
    }
  }

  const outBuffer = PNG.sync.write(dstPng);
  const outPath = path.join(publicDir, filename);
  fs.writeFileSync(outPath, outBuffer);
  console.log(`Generated ${filename} (${targetSize}x${targetSize}) -> ${outPath}`);
}

const targets = [
  { size: 48, name: 'favicon-48.png' },
  { size: 96, name: 'favicon-96.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'favicon-192.png' },
  { size: 512, name: 'favicon-512.png' }
];

targets.forEach(t => generateFavicon(t.size, t.name));
console.log('All favicons successfully generated!');
