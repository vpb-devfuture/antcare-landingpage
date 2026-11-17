const fs = require('fs');

const rawHtml = fs.readFileSync('scratch/user_hoc_sinh_raw.html', 'utf8');

// 1. Slugs & SEO metadata mapping from the SEO Plan
const SEO_PLAN = [
  {
    rawId: 'kinh-nguyet-tuoi-hoc-sinh',
    slug: 'kinh-nguyet-tuoi-hoc-sinh',
    keyword: 'kinh nguyệt tuổi dậy thì',
    title: 'Kinh nguyệt tuổi học sinh: cẩm nang đầy đủ cho con gái và cha mẹ',
    titleEn: 'Menstruation in School-Age Girls: Complete Guide for Daughters and Parents',
    description: 'Kinh nguyệt tuổi học sinh: bao nhiêu tuổi có kinh, chu kỳ bao nhiêu ngày là bình thường, mỗi ngày thay mấy lần, dấu hiệu cần đi khám và cách chuẩn bị cho con.',
    descriptionEn: 'Menstruation in school-age girls: normal cycle age, cycle duration, daily hygiene, when to see a doctor, and practical tips for parents and daughters.',
    image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg'
  },
  {
    rawId: 'kinh-khong-deu-tuoi-day-thi',
    slug: 'kinh-nguyet-khong-deu-tuoi-day-thi',
    keyword: 'kinh nguyệt không đều tuổi dậy thì',
    title: 'Kinh nguyệt không đều tuổi dậy thì: khi nào bình thường, khi nào cần đi khám?',
    titleEn: 'Irregular Periods in Puberty: When Is It Normal and When to See a Doctor?',
    description: 'Kinh nguyệt không đều tuổi dậy thì có bình thường không? Vì sao 2–3 năm đầu chu kỳ thất thường, khi nào cần đi khám và cách chuẩn bị khi kinh đến bất ngờ.',
    descriptionEn: 'Are irregular periods during puberty normal? Why the first 2-3 years are unpredictable, when medical evaluation is needed, and how to stay prepared.',
    image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg'
  },
  {
    rawId: 'dau-bung-kinh-hoc-sinh',
    slug: 'dau-bung-kinh-o-hoc-sinh',
    keyword: 'đau bụng kinh ở học sinh',
    title: 'Đau bụng kinh ở học sinh: cách giảm đau ở nhà, ở trường và khi nào cần đi khám',
    titleEn: 'Menstrual Cramps in Students: Pain Relief at Home and School, and When to See a Doctor',
    description: 'Đau bụng kinh ở học sinh: hơn 70% bạn trẻ bị, 1/5 phải nghỉ học. Cách giảm đau ở nhà và ở trường, khi nào cần đi khám, cha mẹ và nhà trường hỗ trợ thế nào.',
    descriptionEn: 'Period pain in students: over 70% experience cramps, 20% miss school. Effective pain relief strategies for school and home, plus red flags requiring medical care.',
    image: '/images/products/hero-asian-seamless.jpg'
  },
  {
    rawId: 'hoc-sinh-dung-gi',
    slug: 'hoc-sinh-nen-dung-bang-ve-sinh-hay-quan-nguyet-san',
    keyword: 'học sinh nên dùng băng vệ sinh hay quần nguyệt san',
    title: 'Học sinh nên dùng băng vệ sinh, tampon, cốc nguyệt san hay quần nguyệt san?',
    titleEn: 'Should Students Use Pads, Tampons, Menstrual Cups, or Period Underwear?',
    description: 'Học sinh nên dùng băng vệ sinh, tampon, cốc nguyệt san hay quần nguyệt san? So sánh trung thực ưu nhược điểm và vì sao quần nguyệt san hợp với lịch học cả ngày.',
    descriptionEn: 'Should students choose sanitary pads, tampons, cups, or period underwear? An honest comparison of comfort, school convenience, and leakage protection.',
    image: '/images/products/so-sanh-bang-ve-sinh.jpg'
  },
  {
    rawId: 'bi-dinh-o-truong',
    slug: 'bi-dinh-kinh-ra-quan-o-truong',
    keyword: 'bị dính kinh ra quần ở trường',
    title: 'Bị dính kinh ra quần ở trường: xử lý từng bước và cách phòng lần sau',
    titleEn: 'Accidental Period Leaks at School: Step-by-Step Response and Prevention',
    description: 'Bị dính kinh ra quần ở trường phải làm sao? Xử lý từng bước trong 5 phút, túi dự phòng nên có trong cặp, cách giặt vết máu và cách phòng bị dính lần sau.',
    descriptionEn: 'What to do when your period stains your uniform at school: a 5-minute emergency action plan, emergency kit essentials, stain removal, and prevention.',
    image: '/images/products/quan-lot-tham-hut.jpg'
  },
  {
    rawId: 'hoc-the-duc',
    slug: 'den-thang-co-nen-hoc-the-duc',
    keyword: 'đến tháng có nên học thể dục',
    title: 'Đến tháng có nên học thể dục, chạy nhảy, học bơi không?',
    titleEn: 'Can You Do PE, Running, and Swimming During Your Period?',
    description: 'Đến tháng có nên học thể dục, chạy, nhảy, học bơi không? Lợi ích của vận động, khi nào nên xin nghỉ, dùng sản phẩm gì để không lo tràn và cách xin phép thầy cô.',
    descriptionEn: 'Should students do physical education and swimming during their period? Exercise benefits, when to rest, leakage prevention, and discreet teacher communication.',
    image: '/images/products/underwear_day.jpg'
  },
  {
    rawId: 'noi-tru-ban-dem',
    slug: 'hoc-sinh-noi-tru-di-trai-ngay-kinh-nguyet',
    keyword: 'học sinh nội trú đến tháng',
    title: 'Học sinh nội trú, đi trại, dã ngoại khi đến tháng: ngủ không lo tràn, giặt đồ kín đáo',
    titleEn: 'Boarding Students and School Trips During Periods: Overnight Protection & Discreet Washing',
    description: 'Học sinh ở nội trú, ký túc xá, đi trại, dã ngoại khi đến tháng: ngủ không lo tràn, thay và giặt đồ ở nơi đông người, mang gì theo và vì sao quần nguyệt san tiện nhất.',
    descriptionEn: 'Managing periods in boarding schools, summer camps, and field trips: overnight leak-proof tips, discreet washing in shared dorms, and packing checklists.',
    image: '/images/products/hero-saalt-style-asian.jpg'
  },
  {
    rawId: 've-sinh-hoc-sinh',
    slug: 've-sinh-kinh-nguyet-cho-hoc-sinh',
    keyword: 'vệ sinh khi đến tháng cho học sinh',
    title: 'Vệ sinh khi đến tháng cho học sinh: thay băng bao lâu, rửa thế nào, tránh hăm ngứa',
    titleEn: 'Menstrual Hygiene for Students: Changing Frequency, Gentle Cleansing, and Preventing Rashes',
    description: 'Vệ sinh khi đến tháng cho học sinh: bao lâu thay băng, rửa vùng kín đúng cách, có nên dùng dung dịch vệ sinh, xử lý hăm ngứa khi nhà vệ sinh trường bất tiện.',
    descriptionEn: 'School menstrual hygiene: how often to change products, correct cleansing routines, avoiding irritation in substandard school bathrooms, and staying fresh.',
    image: '/images/products/so-sanh-quan-nguyet-san.jpg'
  },
  {
    rawId: 'tam-ly-ngay-den-do',
    slug: 'con-gai-ngai-khi-den-thang',
    keyword: 'con gái ngại khi đến tháng',
    title: 'Con gái ngại, xấu hổ khi đến tháng: cha mẹ trò chuyện và hỗ trợ con thế nào?',
    titleEn: 'When Daughters Feel Embarrassed About Their Period: How Parents Can Support with Empathy',
    description: 'Con gái ngại, xấu hổ khi đến tháng, bị bạn trêu, không dám xin phép thầy cô? Cách cha mẹ, kể cả bố, trò chuyện với con, hỗ trợ tâm lý và giúp con tự tin ở trường.',
    descriptionEn: 'Navigating period shame, teasing at school, and awkwardness: compassionate communication advice for parents (including fathers) to empower confident daughters.',
    image: '/images/products/banner_7.jpg'
  },
  {
    rawId: 'chon-quan-cho-hoc-sinh',
    slug: 'chon-quan-nguyet-san-cho-hoc-sinh',
    keyword: 'quần nguyệt san cho học sinh',
    title: 'Chọn quần nguyệt san cho học sinh: size, mức thấm, số lượng và cách dùng lần đầu',
    titleEn: 'Choosing Period Underwear for Teens: Sizing, Absorbency, Starter Bundles & First Use',
    description: 'Cách chọn quần nguyệt san cho học sinh: size, mức thấm, dáng quần, cần mấy chiếc, giặt phơi thế nào, chi phí so với băng vệ sinh và cách hướng dẫn con dùng lần đầu.',
    descriptionEn: 'How to choose period underwear for teenage girls: sizing chart, absorbency tiers, recommended bundle sizes, washing instructions, and cost comparison.',
    image: '/images/products/minh-hoa-cau-tao-4-lop.jpg'
  }
];

// Map internal anchors
const ANCHOR_MAP = {};
SEO_PLAN.forEach(item => {
  ANCHOR_MAP[`#${item.rawId}`] = `/kinh-nguyet/${item.slug}`;
});

// Sources section
const sourcesMatch = rawHtml.match(/<section class="sources"[\s\S]*?<\/section>/i);
const sourcesHtml = sourcesMatch ? sourcesMatch[0] : '';

// Parse JSON-LD for FAQs
const scriptMatch = rawHtml.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = JSON.parse(scriptMatch[1]);
const allFaqs = jsonLd['@graph'].find(x => x['@type'] === 'FAQPage').mainEntity;

console.log('Total FAQs in JSON-LD:', allFaqs.length);

SEO_PLAN.forEach((meta, idx) => {
  const articleRegex = new RegExp(`<article\\s+id="${meta.rawId}"[^>]*>([\\s\\S]*?)<\\/article>`, 'i');
  const match = rawHtml.match(articleRegex);
  if (!match) {
    console.error(`ERROR: Article ${meta.rawId} not found!`);
    return;
  }
  let body = match[1];

  // Rewrite anchor links
  for (const [hash, targetUrl] of Object.entries(ANCHOR_MAP)) {
    body = body.split(`href="${hash}"`).join(`href="${targetUrl}"`);
    body = body.split(`href='${hash}'`).join(`href="${targetUrl}"`);
  }

  // Embed YouTube video in Article 1
  if (meta.slug === 'kinh-nguyet-tuoi-hoc-sinh') {
    const videoEmbed = `
<div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
  <iframe src="https://www.youtube.com/embed/oCVqSV4JxUU" title="Kinh nguyệt tuổi học sinh - Cẩm nang cho con gái và cha mẹ" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
`;
    // Place video after .answer box
    if (body.includes('</div>') && body.includes('class="answer"')) {
      const ansEnd = body.indexOf('</div>', body.indexOf('class="answer"')) + 6;
      body = body.slice(0, ansEnd) + '\n' + videoEmbed + body.slice(ansEnd);
    } else {
      body = videoEmbed + body;
    }
  }

  // Append sourcesHtml
  if (sourcesHtml) {
    body = body + '\n' + sourcesHtml;
  }

  // Get the 3 FAQs for this article (index 3*idx to 3*idx + 3)
  const itemFaqs = allFaqs.slice(idx * 3, idx * 3 + 3);

  console.log(`[OK] Article ${idx + 1}: ${meta.slug}`);
  console.log(`     Title: ${meta.title}`);
  console.log(`     Content length: ${body.length}`);
  console.log(`     FAQs: ${itemFaqs.map(f => f.name).join(' | ')}`);
});

