const https = require('https');
const fs = require('fs');

async function getUrls() {
  try {
    const res = await fetch('https://saalt.com');
    const html = await res.text();
    const matches = html.match(/https:\/\/[^"'\s)]+\.(jpg|jpeg|png|webp)(\?[^"'\s)]*)?/gi) || [];
    const bannerMatches = matches.filter(m => m.includes('cdn/shop') && (m.includes('Banner') || m.includes('hero') || m.includes('files')));
    console.log('Unique Banner Matches:', [...new Set(bannerMatches)].slice(0, 20));
  } catch (e) {
    console.error('Error:', e);
  }
}

getUrls();

