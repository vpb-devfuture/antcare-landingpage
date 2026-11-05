async function fetchModibodi() {
  const urls = [
    'https://www.modibodi.com/collections/teen',
    'https://www.modibodi.com/collections/all-period-underwear',
    'https://knixteen.com/collections/all'
  ];

  for (const u of urls) {
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const imgs = html.match(/https:\/\/[^"'\s)]+\.(jpg|jpeg|png|webp)(\?[^"'\s)]*)?/gi) || [];
      const banners = imgs.filter(i => (i.includes('banner') || i.includes('hero') || i.includes('campaign') || i.includes('lifestyle')) && (i.includes('cdn') || i.includes('shopify')));
      console.log(u, 'found:', [...new Set(banners)].slice(0, 5));
    } catch(e) {
      console.error(u, e.message);
    }
  }
}
fetchModibodi();

