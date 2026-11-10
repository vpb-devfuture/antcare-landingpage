const fs = require('fs');
const path = require('path');

// Let's create the full data structure for the 30 articles
const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(jsonLdMatch[1]);
const postings = jsonLd['@graph'].filter(item => item['@type'] === 'BlogPosting');

console.log('Postings in JSON-LD:', postings.length);

// Extract the 18 complete article contents from HTML
const domArticles = [...html.matchAll(/<article[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];
console.log('DOM articles count:', domArticles.length);

// Slug mapping helper
const slugByDomId = {
  'tran-ban-dem': 'quan-kinh-nguyet-bi-tran-ban-dem',
  'tran-hai-ben': 'quan-kinh-nguyet-tran-hai-ben',
  'tham-bao-nhieu-ml': 'quan-kinh-nguyet-tham-duoc-bao-nhieu-ml',
  'chon-theo-luong-kinh': 'chon-quan-kinh-nguyet-theo-luong-kinh',
  'ngay-ra-nhieu': 'quan-kinh-nguyet-cho-ngay-ra-nhieu',
  'cau-tao-4-lop': 'quan-kinh-nguyet-hoat-dong-nhu-the-nao',
  'chat-lieu': 'chat-lieu-quan-kinh-nguyet',
  'pfas': 'quan-kinh-nguyet-pfas',
  'oeko-tex': 'oeko-tex-standard-100-la-gi',
  'san-xuat': 'quan-kinh-nguyet-duoc-san-xuat-nhu-the-nao',
  'dung-lan-dau': 'cach-dung-quan-kinh-nguyet-lan-dau',
  'bao-lau-thay': 'bao-lau-thay-quan-kinh-nguyet',
  'mac-ca-ngay': 'mac-quan-kinh-nguyet-ca-ngay',
  'thay-bang-tampon': 'quan-kinh-nguyet-thay-bang-ve-sinh',
  'di-lam-di-xa': 'quan-kinh-nguyet-di-lam-di-du-lich',
  'giat-3-nguyen-tac': '3-nguyen-tac-giat-quan-kinh-nguyet',
  'dung-bao-lau': 'quan-kinh-nguyet-dung-duoc-bao-lau',
  'bi-mui': 'quan-kinh-nguyet-bi-mui',
  'day-cung': 'day-quan-kinh-nguyet-bi-cung',
  'mui-nuoc-tieu': 'quan-lot-co-mui-nuoc-tieu-sau-khi-giat',
  'son-tieu-gang-suc': 'son-tieu-khi-ho-hat-hoi-cuoi',
  'quan-kinh-nguyet-son-tieu': 'quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong',
  'son-tieu-tien-man-kinh': 'son-tieu-tuoi-tien-man-kinh',
  'kinh-nguyet-tien-man-kinh': 'kinh-nguyet-tien-man-kinh',
  'den-thang-di-boi': 'den-thang-di-boi-duoc-khong',
  'lan-dau-co-kinh': 'chuan-bi-cho-con-lan-dau-co-kinh',
  'mau-mau-kinh': 'mau-sac-mau-kinh-nguyet-noi-gi',
  'an-uong-kinh-nguyet': 'an-uong-anh-huong-kinh-nguyet',
  'tiet-kiem-chi-phi': 'quan-kinh-nguyet-tiet-kiem-bao-nhieu',
  'quan-kinh-nguyet-bang-vai': 'quan-kinh-nguyet-va-bang-vai'
};

// Function to clean and rewrite internal anchor links
function cleanArticleBody(body) {
  // Strip H2 at top
  let cleaned = body.replace(/^\s*<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();

  // Replace internal hash links like href="#tran-ban-dem"
  for (const [domId, slug] of Object.entries(slugByDomId)) {
    const hashRegex = new RegExp(`href="#${domId}"`, 'g');
    cleaned = cleaned.replace(hashRegex, `href="/kinh-nguyet/${slug}"`);
  }

  // Also replace any generic #something if matches
  cleaned = cleaned.replace(/href="#([a-z0-9\-]+)"/gi, (match, p1) => {
    if (slugByDomId[p1]) return `href="/kinh-nguyet/${slugByDomId[p1]}"`;
    return match;
  });

  return cleaned;
}

console.log('Script initialized successfully.');

