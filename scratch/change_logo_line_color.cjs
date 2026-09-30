const fs = require('fs');
const PNG = require('pngjs').PNG;

// Orange color of letter T:
const ORANGE_R = 253;
const ORANGE_G = 98;
const ORANGE_B = 0;

/**
 * Recolor hero-logo-text.png (transparent background)
 * @param {boolean} includeDiamond - if true, recolors diamond too. If false, recolors only the line segments.
 */
function recolorHeroLogo(includeDiamond, outPath) {
  const data = fs.readFileSync('public/images/hero-logo-text.png.bak');
  const png = PNG.sync.read(data);

  // Divider Y range in hero-logo-text: 205..245
  // Diamond X bounds: 495..529
  for (let y = 205; y <= 245; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const a = png.data[idx + 3];
      if (a === 0) continue;

      const isDiamond = (x >= 495 && x <= 529);
      if (!includeDiamond && isDiamond) {
        // Leave diamond purple
        continue;
      }

      // Check if it's part of the divider (purple)
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];

      // Purple check
      if (b > r && b > g) {
        png.data[idx] = ORANGE_R;
        png.data[idx + 1] = ORANGE_G;
        png.data[idx + 2] = ORANGE_B;
        // Keep original alpha for perfect anti-aliasing!
      }
    }
  }

  const outBuffer = PNG.sync.write(png);
  fs.writeFileSync(outPath, outBuffer);
  console.log(`Saved: ${outPath}`);
}

/**
 * Recolor logo.png / footer-logo.png (white background)
 * @param {boolean} includeDiamond - if true, recolors diamond too. If false, recolors only the line segments.
 */
function recolorLogo(includeDiamond, outPath) {
  const data = fs.readFileSync('public/images/logo.png.bak');
  const png = PNG.sync.read(data);

  const BG_R = 254;
  const BG_G = 254;
  const BG_B = 254;

  // Divider Y range in logo.png: 225..260
  // Diamond X bounds in logo.png: 445..478
  for (let y = 225; y <= 260; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];

      // Check if it is a purple pixel against white
      // Background is ~254, 254, 254
      // In purple [57, 0, 129], g goes from 254 (bg) down to 0 (solid)
      // and (r+g+b) is distinctly lower than 3*254 = 762
      const total = r + g + b;
      if (total >= 755) continue; // background

      if (b > r && (b - g) > 20) {
        const isDiamond = (x >= 445 && x <= 478);
        if (!includeDiamond && isDiamond) {
          // Leave diamond purple
          continue;
        }

        // Measure opacity against white background
        // g is 0 for solid purple, 254 for white
        const opacity = Math.min(1, Math.max(0, (254 - g) / 254));

        png.data[idx] = Math.round(BG_R - opacity * (BG_R - ORANGE_R));
        png.data[idx + 1] = Math.round(BG_G - opacity * (BG_G - ORANGE_G));
        png.data[idx + 2] = Math.round(BG_B - opacity * (BG_B - ORANGE_B));
      }
    }
  }

  const outBuffer = PNG.sync.write(png);
  fs.writeFileSync(outPath, outBuffer);
  console.log(`Saved: ${outPath}`);
}

// Generate Option 1: Entire divider is orange (both line and diamond)
recolorHeroLogo(true, 'public/images/hero-logo-orange-all.png');
recolorLogo(true, 'public/images/logo-orange-all.png');

// Generate Option 2: Line is orange, diamond remains purple
recolorHeroLogo(false, 'public/images/hero-logo-orange-line.png');
recolorLogo(false, 'public/images/logo-orange-line.png');

// Default active: Option 1 (All Orange Divider) - matches user's request
fs.copyFileSync('public/images/hero-logo-orange-all.png', 'public/images/hero-logo-text.png');
fs.copyFileSync('public/images/logo-orange-all.png', 'public/images/logo.png');
fs.copyFileSync('public/images/logo-orange-all.png', 'public/images/footer-logo.png');
console.log('Successfully updated public/images/logo.png, footer-logo.png, and hero-logo-text.png!');
