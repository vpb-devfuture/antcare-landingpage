const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');
const rawHtmlPath = path.join(__dirname, 'user_kinh_nguyet_lan_dau.html');

const rawHtml = fs.readFileSync(rawHtmlPath, 'utf8');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));

// 1. Extract content from rawHtml
const wrapMatch = rawHtml.match(/<div class="wrap">([\s\S]*?)<\/div>\s*<\/body>/i);
if (!wrapMatch) {
  throw new Error('Could not find .wrap in rawHtml');
}
let body = wrapMatch[1];
body = body.replace(/<header class="site">[\s\S]*?<\/header>/i, '');
body = body.replace(/<!-- ===== PHẦN QUẢN TRỊ[\s\S]*?<!-- ===== HẾT PHẦN QUẢN TRỊ ===== -->/i, '');
body = body.replace(/https:\/\/antcare\.vn\/kien-thuc\/ngay-kinh-nguyet-nen-dung-gi\/?/g, '/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi');
body = body.trim();

// Prepend keywords meta
const metaP = `<p class="meta">Từ khóa: kinh nguyệt lần đầu, có kinh lần đầu, bé gái có kinh lần đầu, dấu hiệu sắp có kinh, bé mới có kinh nên dùng gì, bộ kit kinh nguyệt, quần kinh nguyệt cho bé, quần nguyệt san học sinh · Cập nhật 16/11/2026</p>\n\n`;
body = metaP + body;

// 2. Extract FAQs from JSON-LD
const scriptMatch = rawHtml.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(scriptMatch[1]);
const faqsVi = jsonLd['@graph'].find(g => g['@type'] === 'FAQPage').mainEntity;

// 3. Define English FAQs
const faqsEn = [
  {
    name: 'At what age do girls typically have their first period?',
    acceptedAnswer: {
      text: 'Most girls experience menarche between ages 12 and 13, but the normal window ranges from 8 to 15. Periods usually arrive 2 to 3 years after initial breast budding. If periods start before age 8 or have not begun by age 15, consult a healthcare provider.'
    }
  },
  {
    name: 'What are the early signs that a first period is coming?',
    acceptedAnswer: {
      text: 'Common signs include breast development for about 2 years, a rapid height growth spurt that begins to slow down, pubic and underarm hair growth, vaginal discharge (clear or white mucus) on underwear, acne, and mood swings.'
    }
  },
  {
    name: 'Is brown blood normal for a first period?',
    acceptedAnswer: {
      text: 'Yes, it is completely normal. The first cycle is often very light, and slow-moving blood oxidizes into a brown, dark brown, or nearly black shade before exiting.'
    }
  },
  {
    name: 'How many days does a first period usually last?',
    acceptedAnswer: {
      text: 'Typically 2 to 7 days. First periods may be brief, lasting only 1 to 2 days. If bleeding persists beyond 7 days, medical evaluation is recommended.'
    }
  },
  {
    name: 'Is it normal to have a first period and then skip the following month?',
    acceptedAnswer: {
      text: 'Yes. In the first 2 to 3 years after menarche, cycles are frequently irregular and may occur every few months. Many early cycles are anovulatory (without egg release). If absence of periods exceeds 90 days, consult a physician.'
    }
  },
  {
    name: 'Should a beginner use sanitary pads or period underwear?',
    acceptedAnswer: {
      text: 'Both are well-suited because neither requires internal insertion. Period underwear is particularly advantageous for young girls because it can be worn preemptively without predicting the exact day, stays securely in place without shifting during sports or sleep, and rarely requires school bathroom changes.'
    }
  },
  {
    name: 'Can school students use tampons or menstrual cups?',
    acceptedAnswer: {
      text: 'According to the American Academy of Pediatrics, girls can use tampons from early cycles if desired, provided they change them every 4 to 8 hours and use the lowest absorbency required. Small-sized menstrual cups also exist, but are typically explored when girls are older and comfortable with their anatomy.'
    }
  },
  {
    name: 'What should be included in a girl\'s first period kit?',
    acceptedAnswer: {
      text: 'A discreet school pouch should contain: 1 clean pair of period underwear, 2–3 sanitary pads, a zip bag for used items, wet/dry wipes, 1 spare regular undergarment, and emergency parent contact card. At home, maintain 5–7 pairs of period underwear across absorbency levels, day/night pads, a waterproof mattress protector, a warm compress, and a cycle tracker.'
    }
  },
  {
    name: 'How many pairs of period underwear does a girl need?',
    acceptedAnswer: {
      text: 'Usually 5 to 7 pairs are ideal to maintain a daily rotation: 3–4 light-to-moderate absorbency pairs for daytime school wear, and 2–3 heavy-overnight pairs with extended coverage.'
    }
  },
  {
    name: 'When should parents take their daughter to see a doctor for menstrual concerns?',
    acceptedAnswer: {
      text: 'Seek medical care if periods start before age 8, haven\'t started by age 15, disappear for over 90 days, soak through products every 1–2 hours, last longer than 7 days, cause severe debilitating cramps leading to school absence, or accompany extreme fatigue and pallor.'
    }
  },
  {
    name: 'When and how should parents talk to daughters about menstruation?',
    acceptedAnswer: {
      text: 'Initiate open conversations around ages 8–9 or when early breast buds appear, well before menarche. Keep chats short, positive, and natural, using correct anatomical terms and demonstrating products hands-on.'
    }
  },
  {
    name: 'What should a student do if she leaks through her uniform at school?',
    acceptedAnswer: {
      text: 'Calmly excuse herself to the restroom, use the emergency kit in her backpack to change into fresh period underwear or apply a pad, place soiled items in a zip bag, and tie a jacket around her waist if stained. She can also ask trusted friends, school nurses, or teachers for assistance.'
    }
  }
];

// 4. Build Vietnamese and English items
const ARTICLE_ID = 367;
const SLUG = 'kinh-nguyet-lan-dau';
const TITLE_VI = 'Kinh nguyệt lần đầu ở bé gái: dấu hiệu, đặc điểm, điều cần lưu tâm, nên dùng gì và cách chuẩn bị bộ kit';
const TITLE_EN = 'First Period (Menarche) in Girls: Signs, Characteristics, Hygiene Kits & Essential Guide for Parents';
const DESC_VI = 'Bé gái có kinh lần đầu khi nào, dấu hiệu, kỳ đầu trông ra sao, khi nào cần đi khám, nên dùng gì và cách chuẩn bị bộ kit kinh nguyệt đầu tiên cho con.';
const DESC_EN = 'When girls get their first period, early signs, what the first cycle looks like, when to see a doctor, product choices, and how to prepare a first period kit.';
const IMAGE = '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg';
const KEYWORDS = 'kinh nguyệt lần đầu, có kinh lần đầu, bé gái có kinh lần đầu, dấu hiệu sắp có kinh, bé mới có kinh nên dùng gì, bộ kit kinh nguyệt, quần kinh nguyệt cho bé, quần nguyệt san học sinh';

const schemaVi = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": TITLE_VI,
      "description": DESC_VI,
      "datePublished": "2026-11-16T08:00:00+07:00",
      "dateModified": "2026-11-16T08:00:00+07:00",
      "author": {
        "@type": "Organization",
        "name": "ANTCARE",
        "url": "https://antcare.vn"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ANTCARE",
        "url": "https://antcare.vn",
        "logo": {
          "@type": "ImageObject",
          "url": "https://antcare.vn/images/footer-logo.png"
        }
      },
      "mainEntityOfPage": `https://antcare.vn/kinh-nguyet/${SLUG}`,
      "keywords": KEYWORDS,
      "image": `https://antcare.vn${IMAGE}`
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqsVi.map(f => ({
        "@type": "Question",
        "name": f.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.acceptedAnswer.text
        }
      }))
    }
  ]
};

const schemaEn = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": TITLE_EN,
      "description": DESC_EN,
      "datePublished": "2026-11-16T08:00:00+07:00",
      "dateModified": "2026-11-16T08:00:00+07:00",
      "author": {
        "@type": "Organization",
        "name": "ANTCARE",
        "url": "https://antcare.vn"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ANTCARE",
        "url": "https://antcare.vn",
        "logo": {
          "@type": "ImageObject",
          "url": "https://antcare.vn/images/footer-logo.png"
        }
      },
      "mainEntityOfPage": `https://antcare.vn/kinh-nguyet/${SLUG}`,
      "keywords": KEYWORDS,
      "image": `https://antcare.vn${IMAGE}`
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqsEn.map(f => ({
        "@type": "Question",
        "name": f.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.acceptedAnswer.text
        }
      }))
    }
  ]
};

const itemVi = {
  id: ARTICLE_ID,
  slug: SLUG,
  title: TITLE_VI,
  description: DESC_VI,
  category: "Kinh nguyệt",
  group: "kinh-nguyet",
  date: "2026-11-16",
  author: "Đội ngũ y tế & chuyên gia ANTCARE",
  image: IMAGE,
  featured: false,
  content: body,
  schema: schemaVi
};

const itemEn = {
  id: ARTICLE_ID,
  slug: SLUG,
  title: TITLE_EN,
  description: DESC_EN,
  category: "Menstrual Care",
  group: "kinh-nguyet",
  date: "2026-11-16",
  author: "ANTCARE Medical & Specialist Team",
  image: IMAGE,
  featured: false,
  content: body,
  schema: schemaEn
};

// Remove if already exists (prevent duplicate)
news.list = news.list.filter(a => a.id !== ARTICLE_ID && a.slug !== SLUG);
newsEn.list = newsEn.list.filter(a => a.id !== ARTICLE_ID && a.slug !== SLUG);

// 5. Update article 301 to link to this new article
const art301 = news.list.find(a => a.id === 301);
if (art301 && !art301.content.includes('/kinh-nguyet/kinh-nguyet-lan-dau')) {
  const targetText = 'Không đau rát, tự tin ngồi học và chạy nhảy không lo cộm lộ</td></tr>';
  const linkAddition = `\n    <tr><td colspan="4" class="p-3 bg-purple-50 text-sm">💡 <em>Xem thêm cẩm nang chuyên sâu: <a href="/kinh-nguyet/kinh-nguyet-lan-dau" class="font-bold text-[#6633B4] hover:underline">Kinh nguyệt lần đầu ở bé gái: dấu hiệu, nên dùng gì và cách chuẩn bị bộ kit</a></em></td></tr>`;
  art301.content = art301.content.replace(targetText, targetText + linkAddition);
}

const art301En = newsEn.list.find(a => a.id === 301);
if (art301En && !art301En.content.includes('/kinh-nguyet/kinh-nguyet-lan-dau')) {
  const targetText = 'Không đau rát, tự tin ngồi học và chạy nhảy không lo cộm lộ</td></tr>';
  const linkAddition = `\n    <tr><td colspan="4" class="p-3 bg-purple-50 text-sm">💡 <em>Further reading: <a href="/kinh-nguyet/kinh-nguyet-lan-dau" class="font-bold text-[#6633B4] hover:underline">First Period (Menarche) in Girls: Signs, Hygiene Kits & Essential Guide for Parents</a></em></td></tr>`;
  art301En.content = art301En.content.replace(targetText, targetText + linkAddition);
}

// Append new article
news.list.push(itemVi);
newsEn.list.push(itemEn);

// Save files
fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('Successfully added article 367!');
console.log('news.json count:', news.list.length);
console.log('news.en.json count:', newsEn.list.length);

