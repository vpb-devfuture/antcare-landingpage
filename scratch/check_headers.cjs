const fs = require('fs');

const b1 = fs.readFileSync('public/images/hero-bg.jpg');
console.log('hero-bg header:', b1.slice(0, 8)); // PNG is 89 50 4E 47 0D 0A 1A 0A

const b2 = fs.readFileSync('public/images/hero-bg-mobile.jpg');
console.log('hero-bg-mobile header:', b2.slice(0, 4)); // JPEG is FF D8 FF

