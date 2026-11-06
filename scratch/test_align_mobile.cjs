const fs = require('fs');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

// 1. Read clean original mobile image from git HEAD (restore fresh)
const rawOrig = fs.readFileSync('scratch/mobile_chest_original.png'); // Wait, read public/images/hero-bg-mobile.jpg
// Let's restore hero-bg-mobile.jpg fresh first

