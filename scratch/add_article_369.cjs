const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');
const rawHtmlPath = path.join(__dirname, 'user_nen_chon_coc.html');

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
body = body.replace(/https:\/\/antcare\.vn\/kien-thuc\/coc-nguyet-san-va-quan-nguyet-san\/?/g, '/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san');

// Transform TOC into collapsible accordion (without open attribute)
body = body.replace(/<nav class="toc"([^>]*)>\s*(?:<strong>([\s\S]*?)<\/strong>)?\s*(<ol[\s\S]*?<\/ol>)\s*<\/nav>/gi, (match, navAttrs, strongText, olList) => {
  const title = (strongText || 'Mục lục nội dung bài viết').replace(/<[^>]+>/g, '').trim();
  return `<details class="toc-accordion" style="background: #faf8fd; border: 1px solid #e6dff2; border-radius: 12px; padding: 12px 18px; margin: 20px 0;">
  <summary style="font-weight: 700; color: #6633B4; cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none;">
    <span style="display: flex; align-items: center; gap: 8px;">
      <span>📑</span>
      <span>${title || 'Mục lục nội dung bài viết'}</span>
    </span>
    <span style="font-size: 0.82rem; color: #FD711A; font-weight: 600;">Xem chi tiết ▾</span>
  </summary>
  <nav class="toc" ${navAttrs} style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed #e6dff2; background: transparent; border: none; padding-left: 0; padding-right: 0; margin-bottom: 0;">
    ${olList}
  </nav>
</details>`;
});

// Format keywords at bottom
const KEYWORDS = 'nên chọn cốc nguyệt san nào, cốc nguyệt san loại nào tốt, các hãng cốc nguyệt san ở Việt Nam, so sánh cốc nguyệt san, BeUcup, Lincup, Claricup, cách chọn size cốc nguyệt san, giá cốc nguyệt san, quần nguyệt san';
const keywordsFooter = `\n\n<div class="article-keywords" style="margin-top: 32px; padding-top: 16px; border-top: 1px dashed #e6dff2; font-size: 0.85rem; color: #6b7280; line-height: 1.6;">
  <strong>🏷️ Từ khóa liên quan:</strong> ${KEYWORDS}
</div>\n`;

if (body.includes('<section class="sources"')) {
  const idx = body.indexOf('<section class="sources"');
  body = body.slice(0, idx) + keywordsFooter + '\n' + body.slice(idx);
} else {
  body = body + keywordsFooter;
}

body = body.trim();

// 2. Extract FAQs from JSON-LD
const scriptMatch = rawHtml.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(scriptMatch[1]);
const faqsVi = jsonLd['@graph'].find(g => g['@type'] === 'FAQPage').mainEntity;

// 3. Define English FAQs
const faqsEn = [
  {
    name: 'Which menstrual cup is the absolute best?',
    acceptedAnswer: {
      text: 'There is no single best cup for everyone. The best cup is one that fits your anatomy: cervix height (determines cup length), menstrual flow (capacity), age/delivery history (diameter), firmness, and medical-grade silicone.'
    }
  },
  {
    name: 'What menstrual cup brands are available in Vietnam?',
    acceptedAnswer: {
      text: 'Popular brands include BeUcup (made in Vietnam), Lincup (Vietnamese brand made in USA), Claricup, SiBell, Liberty Cup (France), Ovacup (USA), Lunette (Finland), Facelle (Germany), and several others.'
    }
  },
  {
    name: 'How much does a menstrual cup cost?',
    acceptedAnswer: {
      text: 'Established brand cups typically range from 340,000 VND to 750,000 VND (as of November 2026), lasting several years with proper care.'
    }
  },
  {
    name: 'How do I determine which cup size fits me?',
    acceptedAnswer: {
      text: 'Measure cervix height during your period: first knuckle reached indicates low cervix (short cup), second knuckle indicates medium cervix, past second knuckle indicates high cervix (long cup). Pair with flow volume and childbearing history.'
    }
  },
  {
    name: 'What is the difference between BeUcup and Lincup?',
    acceptedAnswer: {
      text: 'BeUcup is made in Vietnam with soft medical silicone and a single 40ml universal size. Lincup is a Vietnamese brand produced in the USA offering multiple sizes with a comparatively longer body.'
    }
  },
  {
    name: 'Can teenagers or virgins use menstrual cups?',
    acceptedAnswer: {
      text: 'Yes, using the smallest XS/S size and softest silicone. However, period underwear and pads are often easier starter choices for young beginners.'
    }
  },
  {
    name: 'Does "FDA approved" on menstrual cup advertising mean it is certified?',
    acceptedAnswer: {
      text: 'In the USA, menstrual cups are Class II medical devices, largely 510(k) exempt. "FDA" claims often mean establishment registration rather than product-specific endorsements. Verify official documentation.'
    }
  },
  {
    name: 'Are silver nano-coated cups better?',
    acceptedAnswer: {
      text: 'There is currently no robust clinical evidence that nano-silver coatings provide benefits over standard regular washing and end-of-cycle sterilization.'
    }
  },
  {
    name: 'How can I avoid counterfeit menstrual cups?',
    acceptedAnswer: {
      text: 'Purchase exclusively from official brand mall stores, authorized distributors, or major pharmacy chains. Check packaging batch codes and avoid suspiciously cheap unbranded items.'
    }
  },
  {
    name: 'Do you still need period underwear if you have a menstrual cup?',
    acceptedAnswer: {
      text: 'Highly recommended. Period underwear catches spotting during insertion/removal, prevents leaks from sudden overflow or shifting, and acts as standalone protection on light days or postpartum/IUD recovery.'
    }
  },
  {
    name: 'What absorbency of period underwear should be paired with a cup?',
    acceptedAnswer: {
      text: 'Light-to-moderate absorbency for daytime backup since the cup collects most flow. Choose moderate-to-heavy absorbency with extended rear coverage for overnight wear or high-flow days.'
    }
  }
];

// 4. Build Vietnamese and English items
const ARTICLE_ID = 369;
const SLUG = 'nen-chon-coc-nguyet-san-nao';
const TITLE_VI = 'Nên chọn cốc nguyệt san nào? So sánh các hãng cốc nguyệt san ở Việt Nam và vì sao nên dùng kèm quần nguyệt san';
const TITLE_EN = 'Which Menstrual Cup Should You Choose? Comparison of Popular Brands & Why Period Underwear Is Essential';
const DESC_VI = 'Cách chọn cốc nguyệt san theo cổ tử cung, lượng kinh, độ mềm; so sánh BeUcup, Lincup, Claricup, SiBell, Ovacup, Lunette và vì sao nên dùng kèm quần nguyệt san.';
const DESC_EN = 'How to choose a menstrual cup by cervix height, flow, and firmness; comparison of popular brands (BeUcup, Lincup, Claricup, Lunette), and why period underwear is an essential backup.';
const IMAGE = '/images/products/so-sanh-coc-nguyet-san.jpg';

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

// 5. Update article 304 to link back to this new article
const art304 = news.list.find(a => a.id === 304);
if (art304 && !art304.content.includes('/kinh-nguyet/nen-chon-coc-nguyet-san-nao')) {
  const targetText = '4 yếu tố quyết định cách chọn size cốc nguyệt san</h3>';
  const linkAddition = `\n  <div class="my-4 p-4 bg-purple-50 rounded-xl border border-purple-200 text-sm">💡 <em>Xem thêm: <a href="/kinh-nguyet/nen-chon-coc-nguyet-san-nao#bang-so-sanh" class="font-bold text-[#6633B4] hover:underline">Bảng so sánh chi tiết các hãng cốc nguyệt san phổ biến tại Việt Nam (BeUcup, Lincup, Claricup, SiBell...)</a></em></div>`;
  art304.content = art304.content.replace(targetText, targetText + linkAddition);
}

const art304En = newsEn.list.find(a => a.id === 304);
if (art304En && !art304En.content.includes('/kinh-nguyet/nen-chon-coc-nguyet-san-nao')) {
  const targetText = '4 yếu tố quyết định cách chọn size cốc nguyệt san</h3>';
  const linkAddition = `\n  <div class="my-4 p-4 bg-purple-50 rounded-xl border border-purple-200 text-sm">💡 <em>Further reading: <a href="/kinh-nguyet/nen-chon-coc-nguyet-san-nao#bang-so-sanh" class="font-bold text-[#6633B4] hover:underline">Comparison Table of Popular Menstrual Cup Brands in Vietnam (BeUcup, Lincup, Claricup, SiBell...)</a></em></div>`;
  art304En.content = art304En.content.replace(targetText, targetText + linkAddition);
}

// Append new article
news.list.push(itemVi);
newsEn.list.push(itemEn);

// Save files
fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('Successfully added article 369!');
console.log('news.json count:', news.list.length);
console.log('news.en.json count:', newsEn.list.length);

