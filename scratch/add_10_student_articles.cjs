const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');
const rawHtmlPath = path.join(__dirname, 'user_hoc_sinh_raw.html');

const rawHtml = fs.readFileSync(rawHtmlPath, 'utf8');
const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));

// 1. Definition of the 10 articles
const ARTICLES_CONFIG = [
  {
    id: 357,
    rawId: 'kinh-nguyet-tuoi-hoc-sinh',
    slug: 'kinh-nguyet-tuoi-hoc-sinh',
    keyword: 'kinh nguyệt tuổi dậy thì',
    title: 'Kinh nguyệt tuổi học sinh: cẩm nang đầy đủ cho con gái và cha mẹ',
    titleEn: 'Menstruation in School-Age Girls: Complete Guide for Daughters and Parents',
    description: 'Kinh nguyệt tuổi học sinh: bao nhiêu tuổi có kinh, chu kỳ bao nhiêu ngày là bình thường, mỗi ngày thay mấy lần, dấu hiệu cần đi khám và cách chuẩn bị cho con.',
    descriptionEn: 'Menstruation in school-age girls: normal cycle age, cycle duration, daily hygiene, when to see a doctor, and practical tips for parents and daughters.',
    image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
    hasVideo: true,
    faqsEn: [
      {
        q: 'At what age does menstruation usually begin?',
        a: 'Most girls get their first period between ages 10 and 15 (average age 12), usually 2 to 3 years after initial breast development begins.'
      },
      {
        q: 'How long is a normal menstrual cycle during puberty?',
        a: 'During adolescence, cycle lengths ranging from 21 to 45 days are completely normal and may remain irregular for the first 2-3 years.'
      },
      {
        q: 'When should a daughter see a doctor for menstrual concerns?',
        a: 'Consult a physician if she reaches age 15 without a first period, experiences absence of periods for over 90 days, bleeding lasting 7+ days, soaking through pads every 1-2 hours, or pain that forces her to miss school.'
      }
    ]
  },
  {
    id: 358,
    rawId: 'kinh-khong-deu-tuoi-day-thi',
    slug: 'kinh-nguyet-khong-deu-tuoi-day-thi',
    keyword: 'kinh nguyệt không đều tuổi dậy thì',
    title: 'Kinh nguyệt không đều tuổi dậy thì: khi nào bình thường, khi nào cần đi khám?',
    titleEn: 'Irregular Periods in Puberty: When Is It Normal and When to See a Doctor?',
    description: 'Kinh nguyệt không đều tuổi dậy thì có bình thường không? Vì sao 2–3 năm đầu chu kỳ thất thường, khi nào cần đi khám và cách chuẩn bị khi kinh đến bất ngờ.',
    descriptionEn: 'Are irregular periods during puberty normal? Why the first 2-3 years are unpredictable, when medical evaluation is needed, and how to stay prepared.',
    image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'Are irregular cycles normal during puberty?',
        a: 'Yes. During the first 2-3 years after menarche, cycle variations between 21 and 45 days and occasional skipped cycles are standard while hormone systems mature.'
      },
      {
        q: 'How long of an absent period warrants medical evaluation?',
        a: 'An absence of periods for more than 90 days warrants medical review, or sooner if accompanied by rapid weight changes, severe acne, or excess hair growth.'
      },
      {
        q: 'Do teenage irregular cycles impact future fertility?',
        a: 'The vast majority self-regulate naturally. If cycles remain severely irregular after 2-3 years, a doctor can check for conditions like PCOS or thyroid imbalances.'
      }
    ]
  },
  {
    id: 359,
    rawId: 'dau-bung-kinh-hoc-sinh',
    slug: 'dau-bung-kinh-o-hoc-sinh',
    keyword: 'đau bụng kinh ở học sinh',
    title: 'Đau bụng kinh ở học sinh: cách giảm đau ở nhà, ở trường và khi nào cần đi khám',
    titleEn: 'Menstrual Cramps in Students: Pain Relief at Home and School, and When to See a Doctor',
    description: 'Đau bụng kinh ở học sinh: hơn 70% bạn trẻ bị, 1/5 phải nghỉ học. Cách giảm đau ở nhà và ở trường, khi nào cần đi khám, cha mẹ và nhà trường hỗ trợ thế nào.',
    descriptionEn: 'Period pain in students: over 70% experience cramps, 20% miss school. Effective pain relief strategies for school and home, plus red flags requiring medical care.',
    image: '/images/products/hero-asian-seamless.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'Can students take pain relief medication for cramps?',
        a: 'Yes, over-the-counter pain relievers such as paracetamol or ibuprofen are effective when dosed according to age and weight under medical or parental guidance; taking it promptly at onset yields best results.'
      },
      {
        q: 'Is missing school due to menstrual cramps normal?',
        a: 'While relatively common, regularly missing school due to severe pain is not normal and warrants medical evaluation to rule out secondary conditions like endometriosis.'
      },
      {
        q: 'How can a student quickly relieve menstrual cramps at school?',
        a: 'Use a heat pack or warm water bottle on the lower abdomen, sip warm water, rest briefly in the infirmary, and take parent-approved pain medication.'
      }
    ]
  },
  {
    id: 360,
    rawId: 'hoc-sinh-dung-gi',
    slug: 'hoc-sinh-nen-dung-bang-ve-sinh-hay-quan-nguyet-san',
    keyword: 'học sinh nên dùng băng vệ sinh hay quần nguyệt san',
    title: 'Học sinh nên dùng băng vệ sinh, tampon, cốc nguyệt san hay quần nguyệt san?',
    titleEn: 'Should Students Use Pads, Tampons, Menstrual Cups, or Period Underwear?',
    description: 'Học sinh nên dùng băng vệ sinh, tampon, cốc nguyệt san hay quần nguyệt san? So sánh trung thực ưu nhược điểm và vì sao quần nguyệt san hợp với lịch học cả ngày.',
    descriptionEn: 'Should students choose sanitary pads, tampons, cups, or period underwear? An honest comparison of comfort, school convenience, and leakage protection.',
    image: '/images/products/so-sanh-bang-ve-sinh.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'Should school students use period underwear?',
        a: 'Yes. Period underwear is user-friendly, stays securely in place without shifting, avoids mid-day school bathroom changes, and requires no internal insertion.'
      },
      {
        q: 'Can young teens use tampons or menstrual cups?',
        a: 'Yes, once menstruation begins, girls can use small-sized tampons or cups after proper hygiene instruction. However, many find period underwear or pads easier to start with.'
      },
      {
        q: 'What is the best menstrual product for a girl\'s first period?',
        a: 'Sanitary pads or period underwear are easiest for beginners because they require no internal insertion; period underwear also prevents leaks and shifting during class.'
      }
    ]
  },
  {
    id: 361,
    rawId: 'bi-dinh-o-truong',
    slug: 'bi-dinh-kinh-ra-quan-o-truong',
    keyword: 'bị dính kinh ra quần ở trường',
    title: 'Bị dính kinh ra quần ở trường: xử lý từng bước và cách phòng lần sau',
    titleEn: 'Accidental Period Leaks at School: Step-by-Step Response and Prevention',
    description: 'Bị dính kinh ra quần ở trường phải làm sao? Xử lý từng bước trong 5 phút, túi dự phòng nên có trong cặp, cách giặt vết máu và cách phòng bị dính lần sau.',
    descriptionEn: 'What to do when your period stains your uniform at school: a 5-minute emergency action plan, emergency kit essentials, stain removal, and prevention.',
    image: '/images/products/quan-lot-tham-hut.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'What should a student do if her period leaks through her uniform at school?',
        a: 'Stay calm, tie a jacket around the waist, discreetly ask a trusted friend or teacher for support, visit the school nurse or restroom, and call parents for a spare uniform if needed.'
      },
      {
        q: 'What emergency alternative can be used if no pads are available at school?',
        a: 'Fold several layers of clean toilet tissue inside the underwear as a temporary buffer, then promptly visit the school medical room or teacher for a sanitary pad.'
      },
      {
        q: 'How can students prevent accidental period leaks at school?',
        a: 'Track menstrual cycles, carry an emergency pouch in the backpack, wear period underwear on unpredictable cycle days, and take short walking breaks during long sitting sessions.'
      }
    ]
  },
  {
    id: 362,
    rawId: 'hoc-the-duc',
    slug: 'den-thang-co-nen-hoc-the-duc',
    keyword: 'đến tháng có nên học thể dục',
    title: 'Đến tháng có nên học thể dục, chạy nhảy, học bơi không?',
    titleEn: 'Can You Do PE, Running, and Swimming During Your Period?',
    description: 'Đến tháng có nên học thể dục, chạy, nhảy, học bơi không? Lợi ích của vận động, khi nào nên xin nghỉ, dùng sản phẩm gì để không lo tràn và cách xin phép thầy cô.',
    descriptionEn: 'Should students do physical education and swimming during their period? Exercise benefits, when to rest, leakage prevention, and discreet teacher communication.',
    image: '/images/products/underwear_day.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'Is it okay to participate in physical education during your period?',
        a: 'Yes. Light to moderate physical exercise actually relieves menstrual cramps and lifts mood. Rest or take a break only during intense pain, severe dizziness, or heavy bleeding.'
      },
      {
        q: 'What provides the best leak protection for school sports?',
        a: 'Snug boy-short period underwear offers the highest stability and zero shifting during running or jumping; on heavy flow days, combine with a pad for double protection.'
      },
      {
        q: 'Can you swim during your period?',
        a: 'Yes, if using a tampon, menstrual cup, or specialized leak-proof period swimwear; conventional daily period underwear is not designed for swimming.'
      }
    ]
  },
  {
    id: 363,
    rawId: 'noi-tru-ban-dem',
    slug: 'hoc-sinh-noi-tru-di-trai-ngay-kinh-nguyet',
    keyword: 'học sinh nội trú đến tháng',
    title: 'Học sinh nội trú, đi trại, dã ngoại khi đến tháng: ngủ không lo tràn, giặt đồ kín đáo',
    titleEn: 'Boarding Students and School Trips During Periods: Overnight Protection & Discreet Washing',
    description: 'Học sinh ở nội trú, ký túc xá, đi trại, dã ngoại khi đến tháng: ngủ không lo tràn, thay và giặt đồ ở nơi đông người, mang gì theo và vì sao quần nguyệt san tiện nhất.',
    descriptionEn: 'Managing periods in boarding schools, summer camps, and field trips: overnight leak-proof tips, discreet washing in shared dorms, and packing checklists.',
    image: '/images/products/hero-saalt-style-asian.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'What should boarding or camp students pack for their period?',
        a: 'Daytime and overnight period underwear, several spare pads, a waterproof wet bag, compact laundry soap, wet wipes, and familiar pain relief tablets.'
      },
      {
        q: 'How can girls prevent period leaks while sleeping?',
        a: 'Wear overnight boy-short period underwear with extended coverage to the rear waistband; put on a fresh pair right before sleep.'
      },
      {
        q: 'How can boarding students wash period underwear discreetly?',
        a: 'Rinse with cold water while showering, wash with a drop of gentle soap, and hang to dry alongside regular laundry; period underwear looks just like normal briefs.'
      }
    ]
  },
  {
    id: 364,
    rawId: 've-sinh-hoc-sinh',
    slug: 've-sinh-kinh-nguyet-cho-hoc-sinh',
    keyword: 'vệ sinh khi đến tháng cho học sinh',
    title: 'Vệ sinh khi đến tháng cho học sinh: thay băng bao lâu, rửa thế nào, tránh hăm ngứa',
    titleEn: 'Menstrual Hygiene for Students: Changing Frequency, Gentle Cleansing, and Preventing Rashes',
    description: 'Vệ sinh khi đến tháng cho học sinh: bao lâu thay băng, rửa vùng kín đúng cách, có nên dùng dung dịch vệ sinh, xử lý hăm ngứa khi nhà vệ sinh trường bất tiện.',
    descriptionEn: 'School menstrual hygiene: how often to change products, correct cleansing routines, avoiding irritation in substandard school bathrooms, and staying fresh.',
    image: '/images/products/so-sanh-quan-nguyet-san.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'How often should students change sanitary pads?',
        a: 'Every 4 to 6 hours even on lighter days; change sooner on heavy flow days, during hot weather, or immediately following PE class.'
      },
      {
        q: 'Do schoolgirls need intimate wash products?',
        a: 'Not strictly necessary; clean water is generally sufficient. If using a wash, choose a mild, unfragranced, pH-balanced formula for external cleansing only.'
      },
      {
        q: 'What causes vulvar itching during periods?',
        a: 'Usually prolonged pad wear, trapped moisture, friction, or sensitivity to synthetic fragrances and adhesives; see a healthcare professional if itching persists.'
      }
    ]
  },
  {
    id: 365,
    rawId: 'tam-ly-ngay-den-do',
    slug: 'con-gai-ngai-khi-den-thang',
    keyword: 'con gái ngại khi đến tháng',
    title: 'Con gái ngại, xấu hổ khi đến tháng: cha mẹ trò chuyện và hỗ trợ con thế nào?',
    titleEn: 'When Daughters Feel Embarrassed About Their Period: How Parents Can Support with Empathy',
    description: 'Con gái ngại, xấu hổ khi đến tháng, bị bạn trêu, không dám xin phép thầy cô? Cách cha mẹ, kể cả bố, trò chuyện với con, hỗ trợ tâm lý và giúp con tự tin ở trường.',
    descriptionEn: 'Navigating period shame, teasing at school, and awkwardness: compassionate communication advice for parents (including fathers) to empower confident daughters.',
    image: '/images/products/banner_7.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'When should parents talk to daughters about periods?',
        a: 'Around ages 9-10 or when initial breast changes appear, well before menarche occurs, through frequent, brief, positive conversations.'
      },
      {
        q: 'Should fathers discuss menstruation with their daughters?',
        a: 'Absolutely. Fathers can normalize menstruation, help assemble practical hygiene supplies, and connect her with trusted female mentors whenever needed.'
      },
      {
        q: 'What should parents do if their daughter is teased about her period at school?',
        a: 'Listen empathetically, validate her feelings, roleplay calm responses, and contact school staff if bullying or repeated teasing occurs.'
      }
    ]
  },
  {
    id: 366,
    rawId: 'chon-quan-cho-hoc-sinh',
    slug: 'chon-quan-nguyet-san-cho-hoc-sinh',
    keyword: 'quần nguyệt san cho học sinh',
    title: 'Chọn quần nguyệt san cho học sinh: size, mức thấm, số lượng và cách dùng lần đầu',
    titleEn: 'Choosing Period Underwear for Teens: Sizing, Absorbency, Starter Bundles & First Use',
    description: 'Cách chọn quần nguyệt san cho học sinh: size, mức thấm, dáng quần, cần mấy chiếc, giặt phơi thế nào, chi phí so với băng vệ sinh và cách hướng dẫn con dùng lần đầu.',
    descriptionEn: 'How to choose period underwear for teenage girls: sizing chart, absorbency tiers, recommended bundle sizes, washing instructions, and cost comparison.',
    image: '/images/products/minh-hoa-cau-tao-4-lop.jpg',
    hasVideo: false,
    faqsEn: [
      {
        q: 'How many pairs of period underwear should a student own?',
        a: 'For full cycle replacement, around 4-6 daytime pairs and 2 overnight pairs; for hybrid use alongside pads, 3-4 pairs are usually sufficient.'
      },
      {
        q: 'Can a 10-year-old girl wear period underwear?',
        a: 'Yes, provided the size fits properly. Period underwear functions like standard undergarments with no internal insertion, making it safe for all ages post-menarche.'
      },
      {
        q: 'Which absorbency level is best for student period underwear?',
        a: 'Light-to-medium absorbency for school daytime hours (since early adolescent cycles are typically light), plus 1-2 heavy-overnight pairs with extended rear absorption.'
      }
    ]
  }
];

// Internal anchor mapping
const ANCHOR_MAP = {};
ARTICLES_CONFIG.forEach(item => {
  ANCHOR_MAP[`#${item.rawId}`] = `/kinh-nguyet/${item.slug}`;
});

// Sources section
const sourcesMatch = rawHtml.match(/<section class="sources"[\s\S]*?<\/section>/i);
const sourcesHtml = sourcesMatch ? sourcesMatch[0] : '';

// Parse JSON-LD for FAQs
const scriptMatch = rawHtml.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(scriptMatch[1]);
const allFaqsVi = jsonLd['@graph'].find(x => x['@type'] === 'FAQPage').mainEntity;

// Ensure we don't duplicate existing IDs
const existingIds = new Set(news.list.map(a => a.id));
const existingSlugs = new Set(news.list.map(a => a.slug));

const newItemsVi = [];
const newItemsEn = [];

ARTICLES_CONFIG.forEach((cfg, idx) => {
  const articleRegex = new RegExp(`<article\\s+id="${cfg.rawId}"[^>]*>([\\s\\S]*?)<\\/article>`, 'i');
  const match = rawHtml.match(articleRegex);
  if (!match) {
    throw new Error(`Article ${cfg.rawId} not found in rawHtml!`);
  }
  let body = match[1];

  // Rewrite anchor links
  for (const [hash, targetUrl] of Object.entries(ANCHOR_MAP)) {
    body = body.split(`href="${hash}"`).join(`href="${targetUrl}"`);
    body = body.split(`href='${hash}'`).join(`href="${targetUrl}"`);
  }

  // Embed YouTube video in Article 1
  if (cfg.hasVideo) {
    const videoEmbed = `
<div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
  <iframe src="https://www.youtube.com/embed/oCVqSV4JxUU" title="Kinh nguyệt tuổi học sinh - Cẩm nang cho con gái và cha mẹ" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
`;
    if (body.includes('</div>') && body.includes('class="answer"')) {
      const ansEnd = body.indexOf('</div>', body.indexOf('class="answer"')) + 6;
      body = body.slice(0, ansEnd) + '\n' + videoEmbed + body.slice(ansEnd);
    } else {
      body = videoEmbed + body;
    }
  }

  // Append sources
  if (sourcesHtml) {
    body = body + '\n' + sourcesHtml;
  }

  // Vietnamese FAQs for this article
  const itemFaqsVi = allFaqsVi.slice(idx * 3, idx * 3 + 3);

  // Vietnamese schema
  const schemaVi = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": cfg.title,
        "description": cfg.description,
        "datePublished": "2026-11-13T08:00:00+07:00",
        "dateModified": "2026-11-13T08:00:00+07:00",
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
        "mainEntityOfPage": `https://antcare.vn/kinh-nguyet/${cfg.slug}`,
        "keywords": cfg.keyword,
        "image": `https://antcare.vn${cfg.image}`
      },
      {
        "@type": "FAQPage",
        "mainEntity": itemFaqsVi.map(f => ({
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

  // English schema
  const schemaEn = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": cfg.titleEn,
        "description": cfg.descriptionEn,
        "datePublished": "2026-11-13T08:00:00+07:00",
        "dateModified": "2026-11-13T08:00:00+07:00",
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
        "mainEntityOfPage": `https://antcare.vn/kinh-nguyet/${cfg.slug}`,
        "keywords": cfg.keyword,
        "image": `https://antcare.vn${cfg.image}`
      },
      {
        "@type": "FAQPage",
        "mainEntity": cfg.faqsEn.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const itemVi = {
    id: cfg.id,
    slug: cfg.slug,
    title: cfg.title,
    description: cfg.description,
    category: "Kinh nguyệt",
    group: "kinh-nguyet",
    date: "2026-11-13",
    author: "Đội ngũ y tế & chuyên gia ANTCARE",
    image: cfg.image,
    featured: false,
    content: body,
    schema: schemaVi
  };

  const itemEn = {
    id: cfg.id,
    slug: cfg.slug,
    title: cfg.titleEn,
    description: cfg.descriptionEn,
    category: "Menstrual Care",
    group: "kinh-nguyet",
    date: "2026-11-13",
    author: "ANTCARE Medical & Specialist Team",
    image: cfg.image,
    featured: false,
    content: body,
    schema: schemaEn
  };

  newItemsVi.push(itemVi);
  newItemsEn.push(itemEn);
});

// Remove any existing entries with these IDs or slugs
news.list = news.list.filter(a => !newItemsVi.some(n => n.id === a.id || n.slug === a.slug));
newsEn.list = newsEn.list.filter(a => !newItemsEn.some(n => n.id === a.id || n.slug === a.slug));

// Append new items
news.list.push(...newItemsVi);
newsEn.list.push(...newItemsEn);

// Write back files
fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log(`Successfully added ${newItemsVi.length} articles!`);
console.log(`Updated news.json total: ${news.list.length}`);
console.log(`Updated news.en.json total: ${newsEn.list.length}`);

