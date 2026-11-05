async function checkKnix() {
  try {
    const res = await fetch('https://knix.com/collections/leakproof-underwear');
    const html = await res.text();
    const imgs = html.match(/https:\/\/[^"'\s)]+\.(jpg|jpeg|png|webp)(\?[^"'\s)]*)?/gi) || [];
    const heroImgs = imgs.filter(u => u.includes('cdn/shop') && (u.includes('hero') || u.includes('banner') || u.includes('Desktop') || u.includes('collection')));
    console.log('Knix hero images:', [...new Set(heroImgs)].slice(0, 10));
  } catch(e) {
    console.error(e);
  }
}
checkKnix();

