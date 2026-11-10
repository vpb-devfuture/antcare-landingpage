const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('scratch/user_menstrual_diseases.html', 'utf8');

// Parse ld+json
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
let jsonLdGraph = [];
if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    jsonLdGraph = parsed['@graph'] || [];
  } catch (err) {
    console.error('Error parsing JSON-LD:', err);
  }
}

const blogPostings = jsonLdGraph.filter(item => item['@type'] === 'BlogPosting');
const faqPage = jsonLdGraph.find(item => item['@type'] === 'FAQPage');
const faqs = faqPage?.mainEntity || [];

console.log('Found blog postings:', blogPostings.length);
console.log('Found FAQs in graph:', faqs.length);

// 10 Articles specification based on SEO plan
const articleSpecs = [
  {
    htmlId: 'dau-bung-kinh',
    slug: 'dau-bung-kinh-nguyen-nhan-cach-giam',
    image: '/images/products/quan-lot-tham-hut.jpg',
    faqIndices: [0, 1, 2] // First 3 FAQs
  },
  {
    htmlId: 'hoi-chung-tien-kinh-nguyet',
    slug: 'hoi-chung-tien-kinh-nguyet-pms-pmdd',
    image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
    faqIndices: [3, 4, 5]
  },
  {
    htmlId: 'cuong-kinh-rong-kinh',
    slug: 'rong-kinh-cuong-kinh-thieu-mau',
    image: '/images/products/so-sanh-quan-nguyet-san.jpg',
    faqIndices: [6, 7, 8]
  },
  {
    htmlId: 'buong-trung-da-nang',
    slug: 'kinh-nguyet-khong-deu-buong-trung-da-nang',
    image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
    faqIndices: [9, 10, 11]
  },
  {
    htmlId: 'lac-noi-mac-tu-cung',
    slug: 'lac-noi-mac-tu-cung-dau-bung-kinh',
    image: '/images/products/hero-asian-seamless.jpg',
    faqIndices: [12, 13, 14]
  },
  {
    htmlId: 'u-xo-tu-cung',
    slug: 'u-xo-tu-cung-kinh-nguyet-ra-nhieu',
    image: '/images/products/so-sanh-quan-nguyet-san.jpg',
    faqIndices: [15, 16, 17]
  },
  {
    htmlId: 'viem-nhiem-phu-khoa-ky-kinh',
    slug: 'viem-am-dao-nam-am-dao-sau-ky-kinh',
    image: '/images/products/minh-hoa-cau-tao-4-lop.jpg',
    faqIndices: [18, 19, 20]
  },
  {
    htmlId: 'dau-nua-dau-kinh-nguyet',
    slug: 'dau-nua-dau-khi-den-thang',
    image: '/images/products/hero-saalt-style-asian.jpg',
    faqIndices: [21, 22, 23]
  },
  {
    htmlId: 'hoi-chung-soc-doc-to',
    slug: 'hoi-chung-soc-doc-to-tss-tampon',
    image: '/images/products/so-sanh-tampon.jpg',
    faqIndices: [24, 25, 26]
  },
  {
    htmlId: 'ham-kich-ung-bang-ve-sinh',
    slug: 'ham-ngua-kich-ung-do-bang-ve-sinh',
    image: '/images/products/so-sanh-bang-ve-sinh.jpg',
    faqIndices: [27, 28, 29]
  }
];

// Link mapping for internal anchor links inside articles
const linkReplacements = {
  '#dau-bung-kinh': '/kinh-nguyet/dau-bung-kinh-nguyen-nhan-cach-giam',
  '#hoi-chung-tien-kinh-nguyet': '/kinh-nguyet/hoi-chung-tien-kinh-nguyet-pms-pmdd',
  '#cuong-kinh-rong-kinh': '/kinh-nguyet/rong-kinh-cuong-kinh-thieu-mau',
  '#buong-trung-da-nang': '/kinh-nguyet/kinh-nguyet-khong-deu-buong-trung-da-nang',
  '#lac-noi-mac-tu-cung': '/kinh-nguyet/lac-noi-mac-tu-cung-dau-bung-kinh',
  '#u-xo-tu-cung': '/kinh-nguyet/u-xo-tu-cung-kinh-nguyet-ra-nhieu',
  '#viem-nhiem-phu-khoa-ky-kinh': '/kinh-nguyet/viem-am-dao-nam-am-dao-sau-ky-kinh',
  '#dau-nua-dau-kinh-nguyet': '/kinh-nguyet/dau-nua-dau-khi-den-thang',
  '#hoi-chung-soc-doc-to': '/kinh-nguyet/hoi-chung-soc-doc-to-tss-tampon',
  '#ham-kich-ung-bang-ve-sinh': '/kinh-nguyet/ham-ngua-kich-ung-do-bang-ve-sinh',
  'https://antcare.vn/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi': '/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi',
  'https://antcare.vn/quan-lot-tham-hut': '/quan-lot-tham-hut'
};

// Extract each article's inner HTML
const articlesData = [];

articleSpecs.forEach((spec, idx) => {
  const regex = new RegExp(`<article id="${spec.htmlId}">([\\s\\S]*?)<\\/article>`, 'i');
  const match = html.match(regex);
  if (!match) {
    console.error(`Article #${idx + 1} (${spec.htmlId}) NOT found in HTML!`);
    return;
  }

  let body = match[1].trim();

  // Extract title from <h2>
  const h2Match = body.match(/<h2>([\s\S]*?)<\/h2>/i);
  const title = h2Match ? h2Match[1].trim() : '';

  // Remove the initial <h2> from body (since NewsDetail will display the H1 title prominently)
  let cleanContent = body.replace(/<h2>[\s\S]*?<\/h2>/i, '').trim();

  // Replace internal hash links with absolute path
  for (const [targetHash, realUrl] of Object.entries(linkReplacements)) {
    cleanContent = cleanContent.split(targetHash).join(realUrl);
  }

  // Find corresponding BlogPosting in ld+json
  const posting = blogPostings.find(p => p['@id'] && p['@id'].includes(spec.slug)) || blogPostings[idx] || {};

  const headline = posting.headline || title;
  const description = posting.description || '';
  const keywords = posting.keywords || '';

  // Extract specific FAQs for this article
  const articleFaqs = spec.faqIndices.map(i => faqs[i]).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://antcare.vn/kinh-nguyet/${spec.slug}/#article`,
        "mainEntityOfPage": `https://antcare.vn/kinh-nguyet/${spec.slug}`,
        "headline": headline,
        "description": description,
        "keywords": keywords,
        "inLanguage": "vi",
        "datePublished": "2026-11-07",
        "dateModified": "2026-11-07",
        "image": spec.image.startsWith('http') ? spec.image : `https://antcare.vn${spec.image}`,
        "author": {
          "@type": "Organization",
          "name": "ANTCARE – Kiến chăm tổ",
          "url": "https://antcare.vn/",
          "telephone": "+84969032360"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANTCARE – Kiến chăm tổ",
          "url": "https://antcare.vn/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://antcare.vn/logo.png"
          }
        }
      },
      ...(articleFaqs.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `https://antcare.vn/kinh-nguyet/${spec.slug}/#faq`,
        "mainEntity": articleFaqs
      }] : [])
    ]
  };

  articlesData.push({
    id: 317 + idx,
    slug: spec.slug,
    group: 'kinh-nguyet',
    oldSlugs: [
      `kien-thuc/${spec.slug}`,
      `kinh-nguyet/${spec.slug}`,
      `cam-nang/${spec.slug}`,
      spec.slug
    ],
    title: headline,
    metaTitle: `${headline} | ANTCARE`,
    description: description,
    excerpt: description,
    category: 'Kinh nguyệt',
    date: '07/11/2026',
    datePublished: '2026-11-07',
    dateModified: '2026-11-07',
    keywords: keywords,
    image: spec.image,
    author: 'ANTCARE – Kiến chăm tổ',
    content: cleanContent,
    schema: schema,
    isPinned: false
  });
});

console.log('Successfully prepared', articlesData.length, 'Cẩm nang articles:');
articlesData.forEach(a => console.log(` - ID ${a.id}: ${a.slug} | ${a.title.slice(0, 45)}...`));

// Update news.json
const newsVi = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

// Filter out any older duplicate slugs
const newSlugs = new Set(articlesData.map(a => a.slug));
const filteredViList = (newsVi.list || []).filter(item => !newSlugs.has(item.slug) && (item.id < 317 || item.id > 326));

// Append new articles
const updatedViList = [...filteredViList, ...articlesData];

newsVi.list = updatedViList;
fs.writeFileSync('src/data/news.json', JSON.stringify(newsVi, null, 2), 'utf8');
console.log('✅ Updated src/data/news.json (Total articles:', updatedViList.length, ')');

// Update news.en.json with matched items
const newsEn = JSON.parse(fs.readFileSync('src/data/news.en.json', 'utf8'));
const filteredEnList = (newsEn.list || []).filter(item => !newSlugs.has(item.slug) && (item.id < 317 || item.id > 326));

// English translations for title and description
const enMeta = [
  {
    title: "Period Cramps (Dysmenorrhea): Causes, When to Worry, and 8 Home Remedies",
    description: "What are menstrual cramps, causes, normal vs secondary dysmenorrhea, when to see a doctor, 8 home relief methods, and comfortable underwear tips."
  },
  {
    title: "Premenstrual Syndrome (PMS) & PMDD: Why Irritability and Fatigue Happen Before Periods?",
    description: "Premenstrual syndrome (PMS) and PMDD: symptoms, causes, lifestyle remedies, when to consult a gynecologist, and preparation for sudden bleeding."
  },
  {
    title: "Heavy Menstrual Bleeding & Menorrhagia: How Much is Too Much and Anemia Risk",
    description: "Menorrhagia and heavy menstrual bleeding: signs of excessive flow, anemia risks, common causes, clinical guidelines, and absorbent underwear solutions."
  },
  {
    title: "Irregular Periods & Polycystic Ovary Syndrome (PCOS): 70% of Women Are Undiagnosed",
    description: "What causes irregular menstrual cycles? PCOS affects 10-13% of reproductive-age women, with 70% undiagnosed. Symptoms, hormonal care, and leak protection."
  },
  {
    title: "Endometriosis: Severe Period Pain is Never 'Just Normal'",
    description: "Endometriosis affects ~10% of women worldwide, often taking 4-12 years to diagnose. Symptoms, diagnosis, management, and leak protection for heavy pain days."
  },
  {
    title: "Uterine Fibroids: Common Cause of Heavy Menstrual Flow in Women Aged 30–50",
    description: "Uterine fibroids affect ~1/3 of women aged 30-50; causes heavy periods, pelvic pressure, frequent urination, and anemia. Diagnosis and care tips."
  },
  {
    title: "Vaginal Infections & Yeast Before and After Periods: Causes and Prevention",
    description: "Why itching, yeast, and bacterial vaginosis occur around menstrual cycles. Causes, prevention, proper hygiene, and breathable period underwear."
  },
  {
    title: "Menstrual Migraine & Headaches: Causes and Relief Before & During Periods",
    description: "Why headaches and migraines occur around menstruation due to estrogen drops. Relief strategies, lifestyle tips, and when to seek medical help."
  },
  {
    title: "Toxic Shock Syndrome (TSS): Rare but Life-Threatening – What Tampon & Cup Users Must Know",
    description: "What is Toxic Shock Syndrome (TSS), how it relates to tampons and menstrual cups, emergency symptoms, prevention tips, and safe external alternatives."
  },
  {
    title: "Chafing, Itching & Skin Irritation from Sanitary Pads: Causes and Gentle Alternatives",
    description: "Why disposable sanitary pads cause friction, chafing, and allergic contact dermatitis. How to soothe irritated skin and switch to gentle absorbent underwear."
  }
];

const articlesEnData = articlesData.map((item, idx) => {
  const enInfo = enMeta[idx] || {};
  return {
    ...item,
    title: enInfo.title || item.title,
    metaTitle: `${enInfo.title || item.title} | ANTCARE`,
    description: enInfo.description || item.description,
    excerpt: enInfo.description || item.description
  };
});

const updatedEnList = [...filteredEnList, ...articlesEnData];
newsEn.list = updatedEnList;
fs.writeFileSync('src/data/news.en.json', JSON.stringify(newsEn, null, 2), 'utf8');
console.log('✅ Updated src/data/news.en.json (Total articles:', updatedEnList.length, ')');

