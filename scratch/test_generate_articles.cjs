const fs = require('fs');
const path = require('path');

const articles19to30 = require('./articles_19_to_30_content.cjs');

const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(jsonLdMatch[1]);
const postings = jsonLd['@graph'].filter(item => item['@type'] === 'BlogPosting');

console.log('Postings in JSON-LD:', postings.length);

const domArticles = [...html.matchAll(/<article[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];
console.log('DOM articles parsed:', domArticles.length);

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

function cleanArticleBody(body) {
  let cleaned = body.replace(/^\s*<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();
  for (const [domId, slug] of Object.entries(slugByDomId)) {
    const hashRegex = new RegExp(`href="#${domId}"`, 'g');
    cleaned = cleaned.replace(hashRegex, `href="/kinh-nguyet/${slug}"`);
  }
  cleaned = cleaned.replace(/href="#([a-z0-9\-]+)"/gi, (match, p1) => {
    if (slugByDomId[p1]) return `href="/kinh-nguyet/${slugByDomId[p1]}"`;
    return match;
  });
  return cleaned;
}

// Image assignment map
const imageBySlug = {
  'quan-kinh-nguyet-bi-tran-ban-dem': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-tran-hai-ben': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-tham-duoc-bao-nhieu-ml': '/images/products/minh-hoa-cau-tao-4-lop.jpg',
  'chon-quan-kinh-nguyet-theo-luong-kinh': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-cho-ngay-ra-nhieu': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-hoat-dong-nhu-the-nao': '/images/products/minh-hoa-cau-tao-4-lop.jpg',
  'chat-lieu-quan-kinh-nguyet': '/images/products/minh-hoa-cau-tao-4-lop.jpg',
  'quan-kinh-nguyet-pfas': '/images/products/minh-hoa-cau-tao-4-lop.jpg',
  'oeko-tex-standard-100-la-gi': '/images/products/minh-hoa-cau-tao-4-lop.jpg',
  'quan-kinh-nguyet-duoc-san-xuat-nhu-the-nao': '/images/products/minh-hoa-cau-tao-4-lop.jpg',
  'cach-dung-quan-kinh-nguyet-lan-dau': '/images/products/quan-lot-tham-hut.jpg',
  'bao-lau-thay-quan-kinh-nguyet': '/images/products/quan-lot-tham-hut.jpg',
  'mac-quan-kinh-nguyet-ca-ngay': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-thay-bang-ve-sinh': '/images/products/so-sanh-bang-ve-sinh.jpg',
  'quan-kinh-nguyet-di-lam-di-du-lich': '/images/products/quan-lot-tham-hut.jpg',
  '3-nguyen-tac-giat-quan-kinh-nguyet': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-dung-duoc-bao-lau': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-bi-mui': '/images/products/quan-lot-tham-hut.jpg',
  'day-quan-kinh-nguyet-bi-cung': '/images/products/quan-lot-tham-hut.jpg',
  'quan-lot-co-mui-nuoc-tieu-sau-khi-giat': '/images/products/so-sanh-quan-son-tieu.jpg',
  'son-tieu-khi-ho-hat-hoi-cuoi': '/images/products/so-sanh-quan-son-tieu.jpg',
  'quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong': '/images/products/so-sanh-quan-son-tieu.jpg',
  'son-tieu-tuoi-tien-man-kinh': '/images/products/so-sanh-quan-son-tieu.jpg',
  'kinh-nguyet-tien-man-kinh': '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
  'den-thang-di-boi-duoc-khong': '/images/products/quan-lot-tham-hut.jpg',
  'chuan-bi-cho-con-lan-dau-co-kinh': '/images/products/quan-lot-tham-hut.jpg',
  'mau-sac-mau-kinh-nguyet-noi-gi': '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
  'an-uong-anh-huong-kinh-nguyet': '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
  'quan-kinh-nguyet-tiet-kiem-bao-nhieu': '/images/products/quan-lot-tham-hut.jpg',
  'quan-kinh-nguyet-va-bang-vai': '/images/products/so-sanh-bang-ve-sinh.jpg'
};

const newArticlesVi = [];
const startId = 327;

postings.forEach((p, idx) => {
  const slug = p['@id'].replace('https://antcare.vn/kinh-nguyet/', '').replace(/\/$/, '');
  const id = startId + idx;
  const isTieuSon = ['son-tieu-khi-ho-hat-hoi-cuoi', 'quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong', 'son-tieu-tuoi-tien-man-kinh'].includes(slug);
  const category = isTieuSon ? 'Tiểu són' : 'Kinh nguyệt';
  
  let contentHtml = '';
  if (idx < 18) {
    contentHtml = cleanArticleBody(domArticles[idx][2]);
  } else {
    contentHtml = cleanArticleBody(articles19to30[slug] || '');
  }

  newArticlesVi.push({
    id,
    slug,
    title: p.headline,
    description: p.description,
    category,
    group: 'kinh-nguyet',
    date: '2026-11-09',
    author: 'Đội ngũ y tế & chuyên gia ANTCARE',
    image: imageBySlug[slug] || '/images/products/quan-lot-tham-hut.jpg',
    featured: false,
    content: contentHtml
  });
});

console.log('Total new articles generated:', newArticlesVi.length);
console.log('First article:', newArticlesVi[0].id, newArticlesVi[0].slug, newArticlesVi[0].title);
console.log('19th article:', newArticlesVi[18].id, newArticlesVi[18].slug, newArticlesVi[18].title, 'content length:', newArticlesVi[18].content.length);
console.log('30th article:', newArticlesVi[29].id, newArticlesVi[29].slug, newArticlesVi[29].title, 'content length:', newArticlesVi[29].content.length);

