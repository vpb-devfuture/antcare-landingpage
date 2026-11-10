const fs = require('fs');

const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf-8'));

// Filter out old redirects for underwear that pointed to /quan-lot-tham-hut
const newRedirects = vercelConfig.redirects.map(r => {
  if (r.destination === '/quan-lot-tham-hut') {
    return { ...r, destination: '/' };
  }
  return r;
});

// Add /quan-lot-tham-hut -> /
const hasQuanLot = newRedirects.some(r => r.source === '/quan-lot-tham-hut');
if (!hasQuanLot) {
  newRedirects.push({
    source: '/quan-lot-tham-hut',
    destination: '/',
    permanent: true
  });
  newRedirects.push({
    source: '/quan-lot-tham-hut/',
    destination: '/',
    permanent: true
  });
}

// Add /ve-antcare -> /ve-chung-toi
if (!newRedirects.some(r => r.source === '/ve-antcare')) {
  newRedirects.push({
    source: '/ve-antcare',
    destination: '/ve-chung-toi',
    permanent: true
  });
  newRedirects.push({
    source: '/ve-antcare/',
    destination: '/ve-chung-toi',
    permanent: true
  });
}

// Add /about -> /ve-chung-toi
if (!newRedirects.some(r => r.source === '/about')) {
  newRedirects.push({
    source: '/about',
    destination: '/ve-chung-toi',
    permanent: true
  });
  newRedirects.push({
    source: '/about/',
    destination: '/ve-chung-toi',
    permanent: true
  });
}

// Add /giai-phap-cham-soc -> /cham-soc-nguoi-cao-tuoi
if (!newRedirects.some(r => r.source === '/giai-phap-cham-soc')) {
  newRedirects.push({
    source: '/giai-phap-cham-soc',
    destination: '/cham-soc-nguoi-cao-tuoi',
    permanent: true
  });
  newRedirects.push({
    source: '/giai-phap-cham-soc/',
    destination: '/cham-soc-nguoi-cao-tuoi',
    permanent: true
  });
}

vercelConfig.redirects = newRedirects;

fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2) + '\n');
console.log('Successfully updated vercel.json');

