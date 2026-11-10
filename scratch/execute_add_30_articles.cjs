const fs = require('fs');
const path = require('path');

const articles19to30 = require('./articles_19_to_30_content.cjs');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsEnJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const newsVi = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnJsonPath, 'utf8'));

const html = fs.readFileSync('scratch/user_cam_nang_30.html', 'utf8');
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(jsonLdMatch[1]);
const postings = jsonLd['@graph'].filter(item => item['@type'] === 'BlogPosting');

const domArticles = [...html.matchAll(/<article[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/gi)];

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

const enTranslations = {
  'quan-kinh-nguyet-bi-tran-ban-dem': {
    title: 'Overnight Period Underwear Leaking: 7 Causes & How to Fix',
    desc: 'Why does period underwear leak overnight? 7 common causes (short gusset, incorrect absorbency, sleeping postures) and tailored solutions.'
  },
  'quan-kinh-nguyet-tran-hai-ben': {
    title: 'Side Leaks in Period Underwear: Causes and Choosing Anti-Side-Leak Panties',
    desc: 'Period underwear side leaks around the leg cuffs: why they happen during prolonged sitting or sleeping on your side, and key design features to stop them.'
  },
  'quan-kinh-nguyet-tham-duoc-bao-nhieu-ml': {
    title: 'How Many mL Does Period Underwear Absorb? Compared to Your Real Flow',
    desc: 'How many milliliters can period underwear hold? Compare with average menstrual flow (30-40ml per cycle), capacity by style, and reading specs accurately.'
  },
  'chon-quan-kinh-nguyet-theo-luong-kinh': {
    title: 'Choosing Period Underwear by Flow: Light, Medium, Heavy, and Overnight',
    desc: 'How to pick period underwear based on flow: light, moderate, heavy, and overnight. Quick selection chart and ideal starter kit.'
  },
  'quan-kinh-nguyet-cho-ngay-ra-nhieu': {
    title: 'Period Underwear for Heavy Flow Days: Selection and Worry-Free Tips',
    desc: 'What to look for in heavy flow period panties, wearing alone vs backup with cups/tampons, change intervals, and when heavy bleeding needs medical check.'
  },
  'quan-kinh-nguyet-hoat-dong-nhu-the-nao': {
    title: 'How Period Underwear Works: Explaining the 4-Layer Gusset Technology',
    desc: 'How period underwear functions: breakdown of the 4-layer absorbent gusset (top stay-dry, core lock, nano-waterproof barrier, outer shell).'
  },
  'chat-lieu-quan-kinh-nguyet': {
    title: 'Period Underwear Materials: Cotton, Bamboo, Modal, or Nylon – Which is Best?',
    desc: 'Comparing period panty fabrics: organic cotton, bamboo fiber, modal, nylon/spandex, microfiber, and TPU. Pros and cons for sensitive skin and humid climates.'
  },
  'quan-kinh-nguyet-pfas': {
    title: 'PFAS in Period Underwear: What Are "Forever Chemicals" and How to Choose Safe Brands',
    desc: 'What are PFAS, why are they called forever chemicals, and are they in period panties? The Thinx lawsuit, how to verify PFAS-free, and questions for brands.'
  },
  'oeko-tex-standard-100-la-gi': {
    title: 'What is OEKO-TEX Standard 100? How to Verify Certification on Underwear',
    desc: 'OEKO-TEX Standard 100 explained: Classes I-IV, toxic substances tested, and how to verify authenticity codes on absorbent underwear.'
  },
  'quan-kinh-nguyet-duoc-san-xuat-nhu-the-nao': {
    title: 'How Period Underwear is Manufactured: From Fiber to Leakproof Panties',
    desc: 'Step-by-step period underwear manufacturing: safe fabric selection, absorbent core bonding, ultrasonic welding, leak tests, and wash testing.'
  },
  'cach-dung-quan-kinh-nguyet-lan-dau': {
    title: 'First Time Using Period Underwear: Step-by-Step Beginner Guide',
    desc: 'First-time user guide for period panties: choosing absorbency, wear time, cold rinse, washing, drying, and common beginner mistakes.'
  },
  'bao-lau-thay-quan-kinh-nguyet': {
    title: 'How Often Should You Change Period Underwear? Time Schedule by Flow',
    desc: 'How many hours can you wear period underwear? Time guidelines for heavy, moderate, and light days, and physical signs it is time to change.'
  },
  'mac-quan-kinh-nguyet-ca-ngay': {
    title: 'Can You Wear Period Underwear All Day? Conditions and Important Notes',
    desc: 'Can you wear one pair for 10-12 hours straight? Depending on absorbency and flow, hygiene tips, and staying comfortable all day at school or work.'
  },
  'quan-kinh-nguyet-thay-bang-ve-sinh': {
    title: 'Can Period Underwear Replace Pads and Tampons Completely?',
    desc: 'Can you completely ditch disposable sanitary pads? Flow evaluation, lifestyle scenarios, cost savings, and combining with cups.'
  },
  'quan-kinh-nguyet-di-lam-di-du-lich': {
    title: 'Period Underwear for Work, Flights, and Travel: Practical Advice',
    desc: 'Wearing absorbent underwear on long office days, long-haul flights, and travel: packing wet bags, changing on the go, and seamless outfit styling.'
  },
  '3-nguyen-tac-giat-quan-kinh-nguyet': {
    title: '3 Core Washing Rules to Make Period Underwear Last 2–3 Years',
    desc: 'The only 3 washing rules you need: cold water rinse, no fabric softener, no high-heat drying. Step-by-step machine and hand wash.'
  },
  'quan-kinh-nguyet-dung-duoc-bao-lau': {
    title: 'How Long Does Period Underwear Last and How Many Washes Can It Handle?',
    desc: 'Expected lifespan of period underwear: 50-100+ washes (2-3 years). Factors affecting durability, signs of TPU wear, and proper storage.'
  },
  'quan-kinh-nguyet-bi-mui': {
    title: 'Period Underwear Odor: Causes, Prevention, and When to See a Doctor',
    desc: 'Why does period underwear smell? Wearing too long, dried blood in core, washing mistakes, and distinguishing normal odor from bacterial vaginosis.'
  },
  'day-quan-kinh-nguyet-bi-cung': {
    title: 'Stiff or Rough Period Underwear Gusset: Causes and How to Restore Softness',
    desc: 'Gusset stiff after washing? Caused by detergent buildup, fabric softener, hard water minerals, or excessive heat. Dilute vinegar soak guide.'
  },
  'quan-lot-co-mui-nuoc-tieu-sau-khi-giat': {
    title: 'Underwear Still Smells Like Urine After Washing: Causes and Total Odor Removal',
    desc: 'Why urine smell lingers in cloth fibers: uric acid crystal binding, oxygen bleach and vinegar soak solutions, and UTI health warning signs.'
  },
  'son-tieu-khi-ho-hat-hoi-cuoi': {
    title: 'Leaking Urine When Coughing, Sneezing, or Laughing: Causes & Solutions',
    desc: 'Stress urinary incontinence (SUI) explained: why abdominal pressure causes leaks, pelvic floor muscle weakness, Kegel routine, and absorbent underwear.'
  },
  'quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong': {
    title: 'Can You Use Period Underwear for Bladder Leaks and Incontinence?',
    desc: 'Period underwear for incontinence: differences in viscosity between blood and urine, fast-wicking capabilities, odor lock, and limits.'
  },
  'son-tieu-tuoi-tien-man-kinh': {
    title: 'Bladder Leaks in Perimenopause: Why Estrogen Decline Causes Leaks & Care Tips',
    desc: 'Why dropping estrogen levels thin the urethral lining and cause leaks in women aged 40-55. Lifestyle adaptations, Kegel, and discreet leak protection.'
  },
  'kinh-nguyet-tien-man-kinh': {
    title: 'Irregular Periods in Perimenopause: Flooding, Spotting, and How to Manage',
    desc: 'Managing erratic perimenopausal cycles: unpredictable flow, short cycles, heavy flooding, red flags for uterine health, and backup protection.'
  },
  'den-thang-di-boi-duoc-khong': {
    title: 'Can You Swim on Your Period? Period Underwear vs Period Swimwear',
    desc: 'Swimming during menstruation: why regular period underwear absorbs pool water like a sponge, period swimwear vs menstrual cups, and beach tips.'
  },
  'chuan-bi-cho-con-lan-dau-co-kinh': {
    title: 'First Period at School: A Parent’s Compassionate Guide for Teen Daughters',
    desc: 'Preparing teen girls for menarche: physical signs, puberty discussions, school emergency kits, and why boy-short period panties prevent embarrassment.'
  },
  'mau-sac-mau-kinh-nguyet-noi-gi': {
    title: 'What Your Period Blood Color Means: Bright Red, Dark Red, Brown, Pink, or Gray',
    desc: 'Decoding menstrual blood colors: oxidation vs fresh bleeding, blood clots, hormonal indicators, and signs of vaginal infection requiring a clinic visit.'
  },
  'an-uong-anh-huong-kinh-nguyet': {
    title: 'How Diet Affects Your Menstrual Cycle: Best Foods to Eat & What to Avoid',
    desc: 'Nutrition and hormonal balance: iron for heavy flow, magnesium and omega-3 for cramps, reducing salt and caffeine to prevent bloating and irritability.'
  },
  'quan-kinh-nguyet-tiet-kiem-bao-nhieu': {
    title: 'How Much Money and Plastic Waste Does Period Underwear Actually Save?',
    desc: 'Financial and ecological breakdown: saving millions of VND and cutting 10,000+ single-use pads across a lifetime. Fast payback in 6-8 months.'
  },
  'quan-kinh-nguyet-va-bang-vai': {
    title: 'Period Underwear vs Reusable Cloth Pads: Which One Should You Choose?',
    desc: 'Comparing washable period panties with reusable cloth pads: fit security, comfort, public restroom convenience, laundry, and hybrid day/night routines.'
  }
};

const startId = 327;
const newItemsVi = [];
const newItemsEn = [];

postings.forEach((p, idx) => {
  const slug = p['@id'].replace('https://antcare.vn/kinh-nguyet/', '').replace(/\/$/, '');
  const id = startId + idx;
  const isTieuSon = ['son-tieu-khi-ho-hat-hoi-cuoi', 'quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong', 'son-tieu-tuoi-tien-man-kinh'].includes(slug);
  const categoryVi = isTieuSon ? 'Tiểu són' : 'Kinh nguyệt';
  const categoryEn = isTieuSon ? 'Incontinence' : 'Menstrual Care';

  let contentHtml = '';
  if (idx < 18) {
    contentHtml = cleanArticleBody(domArticles[idx][2]);
  } else {
    contentHtml = cleanArticleBody(articles19to30[slug] || '');
  }

  const image = imageBySlug[slug] || '/images/products/quan-lot-tham-hut.jpg';
  const enMeta = enTranslations[slug] || { title: p.headline, desc: p.description };

  newItemsVi.push({
    id,
    slug,
    title: p.headline,
    description: p.description,
    category: categoryVi,
    group: 'kinh-nguyet',
    date: '2026-11-09',
    author: 'Đội ngũ y tế & chuyên gia ANTCARE',
    image,
    featured: false,
    content: contentHtml
  });

  // For EN, keep the same structure with translated metadata and note
  newItemsEn.push({
    id,
    slug,
    title: enMeta.title,
    description: enMeta.desc,
    category: categoryEn,
    group: 'kinh-nguyet',
    date: '2026-11-09',
    author: 'ANTCARE Medical & Specialist Team',
    image,
    featured: false,
    content: contentHtml
  });
});

console.log(`Prepared ${newItemsVi.length} VI articles and ${newItemsEn.length} EN articles.`);

// Filter out any prior duplicate slugs if any exist
const newSlugsSet = new Set(newItemsVi.map(n => n.slug));
newsVi.list = newsVi.list.filter(n => !newSlugsSet.has(n.slug));
newsEn.list = newsEn.list.filter(n => !newSlugsSet.has(n.slug));

// Append
newsVi.list.push(...newItemsVi);
newsEn.list.push(...newItemsEn);

// Save files
fs.writeFileSync(newsJsonPath, JSON.stringify(newsVi, null, 2), 'utf8');
fs.writeFileSync(newsEnJsonPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('Successfully saved news.json and news.en.json!');
console.log('Final news.json list count:', newsVi.list.length);
console.log('Final news.en.json list count:', newsEn.list.length);
console.log('Highest ID:', Math.max(...newsVi.list.map(n => n.id)));

