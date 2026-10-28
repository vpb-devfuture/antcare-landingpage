const fs = require('fs');
const path = require('path');

const inputHtmlPath = path.join(__dirname, 'input_benh_vien_tim.html');
const rawHtml = fs.readFileSync(inputHtmlPath, 'utf8');

// 10 Articles configuration
const articlesConfig = [
  {
    num: 1,
    rawId: 'cam-nang-kham-benh-vien-tim-ha-noi',
    slug: 'kinh-nghiem-di-kham-benh-vien-tim-ha-noi',
    keyword: 'kinh nghiệm đi khám Bệnh viện Tim Hà Nội',
    desc: 'Cẩm nang đi khám Bệnh viện Tim Hà Nội 2026: chọn cơ sở 1 hay cơ sở 2 Võ Chí Công, đặt lịch qua 1900 1082 hoặc Zalo, quy trình, nhịn ăn, hồ sơ cần mang.',
    featuredImage: '/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg',
    inlineImage: '/images/tin-tuc/benh-vien-tim-ha-noi-quay-thuoc-cho-kham.jpg',
    inlineAlt: 'Khu vực quầy thuốc và cửa cấp phát thuốc Bệnh viện Tim Hà Nội đông người bệnh chờ',
    inlineCaption: 'Khu tiếp đón, đóng phí và quầy cấp phát thuốc Bệnh viện Tim Hà Nội thường rất đông vào các buổi sáng trong tuần.'
  },
  {
    num: 2,
    rawId: 'benh-vien-tim-co-so-2-vo-chi-cong',
    slug: 'benh-vien-tim-ha-noi-co-so-2-vo-chi-cong',
    keyword: 'Bệnh viện Tim Hà Nội cơ sở 2',
    desc: 'Bệnh viện Tim Hà Nội cơ sở 2 tòa nhà mới 103 Võ Chí Công: quy mô 300 giường, 56 phòng khám, các khoa, thiết bị, cách đi lại và lưu ý khi đến khám.',
    featuredImage: '/images/tin-tuc/benh-vien-tim-ha-noi-co-so-2-vo-chi-cong.jpg',
    inlineImage: '/images/tin-tuc/sieu-am-tim-nguoi-cao-tuoi-benh-vien-tim.jpg',
    inlineAlt: 'Bác sĩ thực hiện siêu âm tim kiểm tra chức năng van tim và cơ tim cho người cao tuổi',
    inlineCaption: 'Hệ thống máy siêu âm tim và thiết bị chẩn đoán hình ảnh thế hệ mới tại Bệnh viện Tim Hà Nội cơ sở 2 Võ Chí Công.'
  },
  {
    num: 3,
    rawId: 'dat-lich-kham-benh-vien-tim',
    slug: 'dat-lich-kham-benh-vien-tim-ha-noi',
    keyword: 'đặt lịch khám Bệnh viện Tim Hà Nội',
    desc: 'Cách đặt lịch khám Bệnh viện Tim Hà Nội: gọi tổng đài 1900 1082, đặt qua ứng dụng của bệnh viện trên Zalo hoặc website. Mẹo đặt lịch và lưu ý khi đến khám.',
    featuredImage: '/images/tin-tuc/dat-lich-kham-benh-vien-tim-qua-zalo.jpg',
    inlineImage: '/images/tin-tuc/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham.jpg',
    inlineAlt: 'Chuẩn bị danh sách triệu chứng và câu hỏi cho bác sĩ trước khi đi khám tim mạch',
    inlineCaption: 'Gia đình nên chuẩn bị sẵn sổ khám, ghi rõ lý do và triệu chứng cần khám trước khi gọi tổng đài đặt lịch.'
  },
  {
    num: 4,
    rawId: 'quy-trinh-kham-benh-vien-tim',
    slug: 'quy-trinh-kham-benh-vien-tim-ha-noi',
    keyword: 'quy trình khám Bệnh viện Tim Hà Nội',
    desc: 'Quy trình khám Bệnh viện Tim Hà Nội từng bước: đăng ký, lấy số, đo huyết áp, khám, cận lâm sàng, đọc kết quả, lấy thuốc. Khác nhau giữa khám BHYT và tự nguyện.',
    featuredImage: '/images/tin-tuc/quy-trinh-dong-hanh-di-kham-antcare.jpg',
    inlineImage: '/images/tin-tuc/benh-vien-tim-ha-noi-phong-dien-tam-do.jpg',
    inlineAlt: 'Người bệnh cao tuổi chờ đến lượt đo điện tim tại phòng điện tâm đồ Bệnh viện Tim Hà Nội',
    inlineCaption: 'Phòng điện tâm đồ (ECG) là một trong những điểm làm cận lâm sàng tập trung đông bệnh nhân nhất trong quy trình khám tim.'
  },
  {
    num: 5,
    rawId: 'benh-vien-tim-dong-meo-tranh-cho',
    slug: 'benh-vien-tim-ha-noi-dong-meo-tranh-cho-lau',
    keyword: 'Bệnh viện Tim Hà Nội đông',
    desc: 'Vì sao Bệnh viện Tim Hà Nội luôn đông và 9 mẹo giúp người bệnh, nhất là người cao tuổi, đỡ chờ lâu: đặt lịch, chọn giờ, chọn cơ sở, chuẩn bị hồ sơ.',
    featuredImage: '/images/tin-tuc/noi-so-nguoi-cao-tuoi-ngai-di-benh-vien.jpg',
    inlineImage: '/images/tin-tuc/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh.jpg',
    inlineAlt: 'Người cao tuổi đi khám bệnh viện một mình đối mặt nhiều nguy cơ mệt mỏi và chờ đợi lâu',
    inlineCaption: 'Chờ đợi kéo dài trong môi trường đông đúc có thể khiến người già mắc bệnh tim dễ tụt huyết áp và kiệt sức.'
  },
  {
    num: 6,
    rawId: 'nhin-an-truoc-khi-kham-tim',
    slug: 'kham-tim-co-can-nhin-an-khong',
    keyword: 'khám tim có cần nhịn ăn không',
    desc: 'Khám tim có cần nhịn ăn không, nhịn bao nhiêu tiếng? Hướng dẫn nhịn ăn trước xét nghiệm máu, siêu âm tim, gắng sức, CT mạch vành và cách uống thuốc buổi sáng.',
    featuredImage: '/images/tin-tuc/lay-mau-xet-nghiem-nhin-an-kham-tim.jpg',
    inlineImage: '/images/tin-tuc/che-do-an-cho-nguoi-benh-tim-mach.jpg',
    inlineAlt: 'Bữa ăn nhẹ giàu dinh dưỡng chuẩn bị sẵn cho người cao tuổi sau khi hoàn thành xét nghiệm máu',
    inlineCaption: 'Nên chuẩn bị sẵn bánh quy hoặc sữa dinh dưỡng để bố mẹ ăn nhẹ ngay sau khi điều dưỡng lấy mẫu máu xong.'
  },
  {
    num: 7,
    rawId: 'ho-so-thuoc-mang-theo-kham-tim',
    slug: 'kham-tim-can-mang-giay-to-ho-so-gi',
    keyword: 'đi khám tim cần mang gì',
    desc: 'Đi khám Bệnh viện Tim Hà Nội cần mang gì: giấy tờ BHYT, giấy chuyển viện, kết quả cũ, danh sách thuốc đang dùng, thuốc chống đông. Checklist in sẵn cho gia đình.',
    featuredImage: '/images/tin-tuc/checklist-dua-bo-me-di-kham-benh-vien.jpg',
    inlineImage: '/images/tin-tuc/quan-ly-thuoc-nguoi-cao-tuoi-nhieu-benh.jpg',
    inlineAlt: 'Hộp phân chia thuốc theo ngày và danh sách thuốc tim mạch đang điều trị của người cao tuổi',
    inlineCaption: 'Mang đầy đủ đơn thuốc cũ và vỏ hộp thuốc giúp bác sĩ tránh nguy cơ tương tác thuốc nguy hiểm.'
  },
  {
    num: 8,
    rawId: 'kham-bhyt-benh-vien-tim',
    slug: 'kham-bhyt-benh-vien-tim-ha-noi',
    keyword: 'khám BHYT Bệnh viện Tim Hà Nội',
    desc: 'Khám bảo hiểm y tế tại Bệnh viện Tim Hà Nội: giấy tờ, giấy chuyển viện, tự đi khám được hưởng bao nhiêu từ 1/7/2026, khi nào nên khám tự nguyện.',
    featuredImage: '/images/tin-tuc/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi.jpg',
    inlineImage: '/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg',
    inlineAlt: 'Xuất trình thẻ căn cước công dân gắn chip hoặc ứng dụng VNeID khi làm thủ tục khám BHYT',
    inlineCaption: 'Sử dụng CCCD gắn chip hoặc VNeID/VssID giúp rút ngắn đáng kể thời gian làm thủ tục tại quầy BHYT.'
  },
  {
    num: 9,
    rawId: 'dua-nguoi-cao-tuoi-kham-tim',
    slug: 'dua-nguoi-cao-tuoi-di-kham-tim-mach',
    keyword: 'đưa người cao tuổi đi khám tim mạch',
    desc: 'Đưa bố mẹ cao tuổi đi khám tim ở Bệnh viện Tim Hà Nội: chuẩn bị, di chuyển an toàn, xử lý mệt, đau ngực khi chờ khám, ghi lời dặn bác sĩ và theo dõi sau khám.',
    featuredImage: '/images/tin-tuc/bac-si-tu-van-kham-tim-mach-nguoi-cao-tuoi.jpg',
    inlineImage: '/images/tin-tuc/cach-do-huyet-ap-tai-nha-cho-nguoi-cao-tuoi.jpg',
    inlineAlt: 'Đo huyết áp và theo dõi nhịp tim cho người già tại nhà sau đợt khám bệnh viện',
    inlineCaption: 'Sau buổi khám, gia đình cần tiếp tục theo dõi sát huyết áp và phản ứng của cơ thể với các loại thuốc tim mới.'
  },
  {
    num: 10,
    rawId: 'dich-vu-di-kham-benh-vien-tim-antcare',
    slug: 'dich-vu-dua-di-kham-benh-vien-tim-ha-noi',
    keyword: 'dịch vụ đưa người già đi khám Bệnh viện Tim Hà Nội',
    desc: 'Dịch vụ đưa bố mẹ đi khám Bệnh viện Tim Hà Nội của ANTCARE: đặt lịch, đón tận nhà, đi cùng cả buổi ở cơ sở 1 hoặc cơ sở 2, báo cáo gia đình. Từ 390.000đ/3 giờ.',
    featuredImage: '/images/tin-tuc/tro-ly-dong-hanh-xe-lan-benh-vien-tim.jpg',
    inlineImage: '/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg',
    inlineAlt: 'Kiến Y tế Antcare tận tình đồng hành cùng người cao tuổi trong suốt buổi khám bệnh',
    inlineCaption: 'Dịch vụ Đồng hành đi khám của ANTCARE giúp bố mẹ yên tâm, con cái đi làm xa không còn lo lắng.'
  }
];

const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

// Internal link replacements for hash links between the 10 articles
const hashReplacements = articlesConfig.map(cfg => ({
  from: new RegExp(`href="#${cfg.rawId}"`, 'g'),
  to: `href="/news/${cfg.slug}"`
}));

// Split by article tags
const articleRegex = /<article\s+id="([^"]+)">([\s\S]*?)<\/article>/gi;
let match;
const parsedArticles = [];
let index = 0;

while ((match = articleRegex.exec(rawHtml)) !== null) {
  const rawId = match[1];
  const articleInnerHtml = match[2];
  const cfg = articlesConfig.find(c => c.rawId === rawId) || articlesConfig[index];

  // Extract H2 for Title
  const h2Match = articleInnerHtml.match(/<h2>([\s\S]*?)<\/h2>/i);
  const title = h2Match ? h2Match[1].trim() : '';

  // Extract answer for excerpt
  const answerMatch = articleInnerHtml.match(/<div class="answer">([\s\S]*?)<\/div>/i);
  let excerpt = cfg.desc;
  if (answerMatch) {
    excerpt = answerMatch[1].replace(/<[^>]+>/g, '').replace(/^Trả lời nhanh:\s*/i, '').trim();
  }

  // Build clean article content HTML
  let content = articleInnerHtml;

  // Replace internal hash links with real links
  hashReplacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  // Replace default homepage link in CTA buttons
  content = content.replace(/href="https:\/\/antcare\.vn\/"/g, 'href="/#giai-phap-cham-soc"');

  // Convert the top h2 to h1 for the article's own page content
  content = content.replace(
    /<h2>([\s\S]*?)<\/h2>/i,
    '<h1>$1</h1>\n<p class="byline">ANTCARE · Cập nhật 28/10/2026 · 6 phút đọc</p>'
  );

  // Insert Inline Image Figure right after the <div class="answer">...</div>
  const figureHtml = `
<figure style="margin: 24px 0;">
  <a href="https://antcare.vn${cfg.inlineImage}" target="_blank" rel="noopener">
    <img src="${cfg.inlineImage}" alt="${cfg.inlineAlt}" width="1200" height="675" loading="lazy" style="width:100%;height:auto;border-radius:12px;border:1px solid #e2d6f5;" />
  </a>
  <figcaption style="text-align: center; font-size: 0.88rem; color: #64748b; margin-top: 8px; font-style: italic;">${cfg.inlineCaption}</figcaption>
</figure>`;

  content = content.replace(/<\/div>\s*(<h3>)/i, `</div>\n${figureHtml}\n\n$1`);

  // New ID: 252 down to 243
  const id = 252 - index;

  const oldSlugs = [
    `kien-thuc/${cfg.slug}`,
    `dong-hanh-di-kham/${cfg.slug}`,
    `dong-hanh-kham-benh/${cfg.slug}`,
    `tin-tuc/${cfg.slug}`,
    `blog/${cfg.slug}`,
    `news/${cfg.slug}`,
    cfg.slug
  ];
  if (rawId !== cfg.slug) {
    oldSlugs.push(rawId);
    oldSlugs.push(`kien-thuc/${rawId}`);
    oldSlugs.push(`dong-hanh-di-kham/${rawId}`);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://antcare.vn/news/${cfg.slug}/`,
    "headline": title,
    "description": cfg.desc,
    "inLanguage": "vi",
    "datePublished": "2026-10-28",
    "dateModified": "2026-10-28",
    "author": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ANTCARE – Kiến chăm tổ",
      "url": "https://antcare.vn/",
      "logo": "https://antcare.vn/logo.png"
    },
    "image": `https://antcare.vn${cfg.featuredImage}`
  };

  parsedArticles.push({
    baiNum: cfg.num,
    id,
    slug: cfg.slug,
    group: "dong-hanh-di-kham",
    oldSlugs,
    title,
    metaTitle: `${title} | ANTCARE`,
    description: cfg.desc,
    excerpt,
    category: "Đồng hành đi khám",
    date: "28/10/2026",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    keywords: cfg.keyword,
    image: cfg.featuredImage,
    inlineImage: cfg.inlineImage,
    author: authorObj,
    content: `<div class="article-dong-hanh-di-kham article-guide">\n${content.trim()}\n</div>`,
    schema
  });

  index++;
}

console.log(`Extracted ${parsedArticles.length} articles.`);
parsedArticles.forEach(a => {
  console.log(`Bài ${a.baiNum} [ID ${a.id}]: ${a.slug}`);
  console.log(`  Featured: ${a.image}`);
  console.log(`  Inline:   ${a.inlineImage}`);
});

// Write to scratch/parsed_benh_vien_tim.json
fs.writeFileSync(path.join(__dirname, 'parsed_benh_vien_tim.json'), JSON.stringify(parsedArticles, null, 2), 'utf8');
console.log('Saved to scratch/parsed_benh_vien_tim.json successfully!');
