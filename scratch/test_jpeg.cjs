const fs = require('fs');
const jpeg = require('jpeg-js');

const raw = fs.readFileSync('public/images/hero-bg.jpg');
const decoded = jpeg.decode(raw, { useTArray: true });
console.log('Decoded desktop:', decoded.width, 'x', decoded.height);

const rawMob = fs.readFileSync('public/images/hero-bg-mobile.jpg');
const decodedMob = jpeg.decode(rawMob, { useTArray: true });
console.log('Decoded mobile:', decodedMob.width, 'x', decodedMob.height);

