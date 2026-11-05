async function searchUnsplash() {
  const query = 'body-positivity-women-underwear';
  try {
    const res = await fetch(`https://unsplash.com/s/photos/${query}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const matches = html.match(/https:\/\/images\.unsplash\.com\/photo-[^"'\s)]+\?auto=format&amp;fit=crop&amp;w=[0-9]+/gi) || [];
    console.log('Unsplash matches:', [...new Set(matches)].slice(0, 8));
  } catch(e) {
    console.error(e);
  }
}
searchUnsplash();

