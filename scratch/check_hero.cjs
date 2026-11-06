const fs = require('fs');

// We can copy to artifacts so we can also view it if needed!
fs.copyFileSync('public/images/hero-bg.jpg', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/current_hero_bg.jpg');
fs.copyFileSync('public/images/hero-bg-mobile.jpg', 'C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/current_hero_bg_mobile.jpg');

console.log('Copied to artifacts for inspection');

