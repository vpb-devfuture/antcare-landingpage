const fs = require('fs');

async function check() {
  const pages = [
    'https://saalt.com/collections/period-underwear',
    'https://saalt.com/pages/saalt-wear',
    'https://saalt.com/collections/teen',
    'https://saalt.com/pages/our-story',
    'https://saalt.com/pages/impact'
  ];

  for (const page of pages) {
    try {
      const res = await fetch(page);
      const html = await res.text();
      const imgRegex = /https:\/\/[^"'\s)]+\.(jpg|jpeg|png|webp)(\?[^"'\s)]*)?/gi;
      const allUrls = html.match(imgRegex) || [];
      const bannerUrls = allUrls.filter(u => 
        (u.includes('Banner') || u.includes('hero') || u.includes('Desktop') || u.includes('Lifestyle') || u.includes('campaign'))
        && u.includes('cdn/shop')
      );
      console.log(`Page ${page} found ${bannerUrls.length} banner URLs:`);
      [...new Set(bannerUrls)].slice(0, 10).forEach(u => console.log('  ', u));
    } catch (e) {
      console.error(page, e.message);
    }
  }
}

check();

