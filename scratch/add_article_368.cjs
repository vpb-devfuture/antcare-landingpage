const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');
const rawHtmlPath = path.join(__dirname, 'user_coc_nguyet_san.html');

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
body = body.replace(/https:\/\/antcare\.vn\/kien-thuc\/cach-dung-coc-nguyet-san\/?/g, '/kinh-nguyet/cach-dung-coc-nguyet-san');
body = body.replace(/https:\/\/antcare\.vn\/kien-thuc\/cach-chon-size-va-ve-sinh-coc-nguyet-san\/?/g, '/kinh-nguyet/cach-chon-size-va-ve-sinh-coc-nguyet-san');
body = body.trim();

// Prepend keywords meta
const metaP = `<p class="meta">Từ khóa: cốc nguyệt san, cốc nguyệt san có tốt không, cốc nguyệt san để được bao lâu, dùng cốc nguyệt san 24/24, cốc nguyệt san bị rò rỉ, quần nguyệt san, quần nguyệt san dùng kèm cốc, bộ kit ngày đèn đỏ · Cập nhật 16/11/2026</p>\n\n`;
body = metaP + body;

// 2. Extract FAQs from JSON-LD
const scriptMatch = rawHtml.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(scriptMatch[1]);
const faqsVi = jsonLd['@graph'].find(g => g['@type'] === 'FAQPage').mainEntity;

// 3. Define English FAQs
const faqsEn = [
  {
    name: 'How long can a menstrual cup be kept in place?',
    acceptedAnswer: {
      text: 'Most manufacturers permit wearing a menstrual cup for up to 12 hours before emptying and washing. On heavy flow days, empty earlier (e.g., every 4 to 6 hours). Always follow the manufacturer guidelines.'
    }
  },
  {
    name: 'Can you wear a menstrual cup 24/7 during your period?',
    acceptedAnswer: {
      text: 'Yes, during active menstruation you can use a cup day and night, provided you remove, empty, and cleanse it at least every 12 hours. Do not wear a cup continuously without removal, and avoid wearing it when not menstruating.'
    }
  },
  {
    name: 'Do you need to wear period underwear if you already use a menstrual cup?',
    acceptedAnswer: {
      text: 'Not strictly mandatory, but highly recommended. Period underwear catches residual spotting during insertion and removal, safeguards against unexpected cup overflow or shifting, and serves as standalone protection on light start/end days.'
    }
  },
  {
    name: 'Why do menstrual cups leak?',
    acceptedAnswer: {
      text: 'Common causes include full capacity, incorrect sizing, incomplete unfolding/seal failure, positioning off-center from the cervix, tilted angles, shifting after bowel movements or high-impact exercise, and blocked air holes.'
    }
  },
  {
    name: 'How long does it take to get used to using a menstrual cup?',
    acceptedAnswer: {
      text: 'According to the Cleveland Clinic, most users require about 3 menstrual cycles. A 2019 Lancet review noted a learning phase of 2 to 5 months. Period underwear provides essential peace of mind during this transition.'
    }
  },
  {
    name: 'Can you sleep while wearing a menstrual cup?',
    acceptedAnswer: {
      text: 'Yes, provided you empty the cup right before bed and do not exceed the manufacturer time limit. On heaviest nights, pair with overnight period underwear featuring extended rear coverage.'
    }
  },
  {
    name: 'Can you use a menstrual cup postpartum?',
    acceptedAnswer: {
      text: 'Do not insert menstrual cups during postpartum lochia. Resume cup usage only after physician clearance. Postpartum pelvic floor laxity may also cause shifting or mild stress urinary leakage, making absorbent underwear ideal.'
    }
  },
  {
    name: 'Can you use a menstrual cup with an IUD (Intrauterine Device)?',
    acceptedAnswer: {
      text: 'Evidence is mixed, but reports exist of IUD displacement during cup removal, particularly within the first 3 months post-insertion. Consult your gynecologist, always release the suction seal fully before removal, and regularly check IUD strings.'
    }
  },
  {
    name: 'Does a menstrual cup prevent bladder leaks or urinary incontinence?',
    acceptedAnswer: {
      text: 'No. Menstrual cups only collect menstrual fluid in the vaginal canal; they do not block urethral urine leakage. For sneezing or coughing leaks, wear dual-absorbent underwear and consult a pelvic floor specialist.'
    }
  },
  {
    name: 'What belongs in a period kit for menstrual cup users?',
    acceptedAnswer: {
      text: 'At home: properly sized cup, breathable storage case, sterilizer, 3-4 daytime period underwear, 2 overnight period underwear, and unfragranced wash. In your bag: 1 clean pair of period underwear, a small water bottle for rinsing, wipes, zip pouch, and 1-2 spare pads.'
    }
  },
  {
    name: 'What absorbency level of period underwear is best as a cup backup?',
    acceptedAnswer: {
      text: 'For daytime backup, light to moderate absorbency is sufficient since the cup collects most fluid. For overnight wear, heavy flow days, or beginners, select moderate to heavy absorbency with full front-to-back coverage.'
    }
  }
];

// 4. Build Vietnamese and English items
const ARTICLE_ID = 368;
const SLUG = 'coc-nguyet-san-va-quan-nguyet-san';
const TITLE_VI = 'Cốc nguyệt san: tiện dụng thế nào, có nên dùng 24/24 và vì sao vẫn cần thêm quần nguyệt san trong bộ kit';
const TITLE_EN = 'Menstrual Cups: Convenience, 24/7 Wear Safety & Why Period Underwear Is an Essential Backup';
const DESC_VI = 'Cốc nguyệt san tiện thế nào, có nên dùng 24/24 không, vì sao vẫn nên có quần nguyệt san làm lớp chống thấm và 10 trường hợp đặc biệt cần dùng thêm.';
const DESC_EN = 'Menstrual cup benefits, 24/7 wear safety guidelines, why period underwear is the ultimate leakproof backup, and 10 specific situations requiring dual protection.';
const IMAGE = '/images/products/so-sanh-coc-nguyet-san.jpg';
const KEYWORDS = 'cốc nguyệt san, cốc nguyệt san có tốt không, cốc nguyệt san để được bao lâu, dùng cốc nguyệt san 24/24, cốc nguyệt san bị rò rỉ, quần nguyệt san, quần nguyệt san dùng kèm cốc, bộ kit ngày đèn đỏ';

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

// 5. Update article 307 to link back to this new article
const art307 = news.list.find(a => a.id === 307);
if (art307 && !art307.content.includes('/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san')) {
  const targetText = 'Tại sao quần nguyệt san là giải pháp dập tắt 100% nỗi sợ rò rỉ?</h3>';
  const linkAddition = `\n  <div class="my-4 p-4 bg-purple-50 rounded-xl border border-purple-200 text-sm">💡 <em>Xem thêm phân tích chi tiết: <a href="/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san#truong-hop" class="font-bold text-[#6633B4] hover:underline">10 trường hợp người dùng cốc nguyệt san bắt buộc cần thêm quần nguyệt san chống thấm</a></em></div>`;
  art307.content = art307.content.replace(targetText, targetText + linkAddition);
}

const art307En = newsEn.list.find(a => a.id === 307);
if (art307En && !art307En.content.includes('/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san')) {
  const targetText = 'Tại sao quần nguyệt san là giải pháp dập tắt 100% nỗi sợ rò rỉ?</h3>';
  const linkAddition = `\n  <div class="my-4 p-4 bg-purple-50 rounded-xl border border-purple-200 text-sm">💡 <em>Further reading: <a href="/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san#truong-hop" class="font-bold text-[#6633B4] hover:underline">10 Situations Where Menstrual Cup Users Need Leakproof Period Underwear</a></em></div>`;
  art307En.content = art307En.content.replace(targetText, targetText + linkAddition);
}

// Append new article
news.list.push(itemVi);
newsEn.list.push(itemEn);

// Save files
fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('Successfully added article 368!');
console.log('news.json count:', news.list.length);
console.log('news.en.json count:', newsEn.list.length);

