const fs = require('fs');
const path = require('path');

const inputHtmlPath = path.join(__dirname, 'input_dai_hoc_y.html');
const rawHtml = fs.readFileSync(inputHtmlPath, 'utf8');

// 10 Articles configuration
const articlesConfig = [
  {
    num: 1,
    rawId: 'kinh-nghiem-kham-dai-hoc-y',
    slug: 'kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi',
    keyword: 'kinh nghiệm đi khám Bệnh viện Đại học Y Hà Nội',
    desc: 'Kinh nghiệm đi khám Bệnh viện Đại học Y Hà Nội 2026: 4 khu khám khác nhau, đặt lịch qua 1900 6422, giờ đông, gửi xe, giấy tờ và dịch vụ đồng hành khám bệnh.',
    featuredImage: '/images/tin-tuc/benh-vien-dai-hoc-y-ha-noi-cong-chinh.jpg',
    inlineImage: '/images/tin-tuc/nha-a2-khoa-kham-benh-dai-hoc-y.jpg',
    inlineAlt: 'Khu vực tiếp nhận người bệnh và đăng ký khám tại Khoa Khám bệnh nhà A2',
    inlineCaption: 'Khu tiếp đón và lấy số khám tại sảnh tầng 1 nhà A2 Bệnh viện Đại học Y Hà Nội.'
  },
  {
    num: 2,
    rawId: '4-khu-kham-dai-hoc-y',
    slug: '4-khu-kham-benh-vien-dai-hoc-y-ha-noi',
    keyword: 'khu khám Bệnh viện Đại học Y Hà Nội',
    desc: 'So sánh 4 khu khám ở Bệnh viện Đại học Y Hà Nội: Khoa Khám bệnh tầng 1 A2, khám theo yêu cầu tầng 3 A2, Trung tâm Y khoa số 1 nhà A5, khám sức khỏe doanh nghiệp.',
    featuredImage: '/images/tin-tuc/benh-vien-nguoi-cao-tuoi.jpg',
    inlineImage: '/images/tin-tuc/kham-chuyen-gia-trung-tam-y-khoa-so-1.jpg',
    inlineAlt: 'Phòng khám chuyên gia tại Trung tâm Y khoa số 1 Tôn Thất Tùng nhà A5',
    inlineCaption: 'Trung tâm Y khoa số 1 (nhà A5) là khu khám chuyên gia độc lập với quy trình khép kín.'
  },
  {
    num: 3,
    rawId: 'khoa-kham-benh-a2',
    slug: 'kham-bhyt-benh-vien-dai-hoc-y-ha-noi',
    keyword: 'khám BHYT Bệnh viện Đại học Y Hà Nội',
    desc: 'Khám BHYT tại Khoa Khám bệnh tầng 1 nhà A2 Bệnh viện Đại học Y Hà Nội: giấy tờ, giấy chuyển viện, quy trình từng bước, các phòng khám, mẹo đỡ chờ.',
    featuredImage: '/images/tin-tuc/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi.jpg',
    inlineImage: '/images/tin-tuc/bao-hiem-y-te-nguoi-cao-tuoi-2026.jpg',
    inlineAlt: 'Xuất trình thẻ căn cước công dân gắn chip hoặc VNeID/VssID khi làm thủ tục khám BHYT',
    inlineCaption: 'Sử dụng CCCD gắn chip hoặc thẻ BHYT tích hợp VNeID giúp giảm thời gian chờ đợi tại quầy làm thủ tục BHYT tầng 1 nhà A2.'
  },
  {
    num: 4,
    rawId: 'kham-theo-yeu-cau-a2',
    slug: 'kham-theo-yeu-cau-benh-vien-dai-hoc-y-ha-noi',
    keyword: 'khám theo yêu cầu Bệnh viện Đại học Y Hà Nội',
    desc: 'Khám theo yêu cầu tầng 3 nhà A2 Bệnh viện Đại học Y Hà Nội: đường đi, giờ khám sáng, chọn bác sĩ, đặt lịch, quy trình và lưu ý xét nghiệm ở tầng dưới.',
    featuredImage: '/images/tin-tuc/dua-bo-me-di-kham-benh-vien-ha-noi.jpg',
    inlineImage: '/images/tin-tuc/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham.jpg',
    inlineAlt: 'Bác sĩ chuyên khoa giải thích kết quả và dặn dò người bệnh tại khoa khám theo yêu cầu',
    inlineCaption: 'Khám theo yêu cầu tại tầng 3 nhà A2 giúp người bệnh chủ động chọn bác sĩ và tiết kiệm thời gian.'
  },
  {
    num: 5,
    rawId: 'trung-tam-y-khoa-so-1',
    slug: 'trung-tam-y-khoa-so-1-ton-that-tung',
    keyword: 'Trung tâm Y khoa số 1 Tôn Thất Tùng',
    desc: 'Trung tâm Y khoa số 1 Tôn Thất Tùng (nhà A5) Bệnh viện Đại học Y Hà Nội: khám với giáo sư, phó giáo sư, cách đặt hẹn, giờ khám sáng, quy trình và lưu ý.',
    featuredImage: '/images/tin-tuc/bac-si-tu-van-kham-tim-mach-nguoi-cao-tuoi.jpg',
    inlineImage: '/images/tin-tuc/dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon.jpg',
    inlineAlt: 'Trợ lý y tế chuyên môn đồng hành hỗ trợ người bệnh trong suốt buổi khám chuyên gia',
    inlineCaption: 'Khám chuyên gia tại Trung tâm Y khoa số 1 đòi hỏi đặt hẹn trước và chuẩn bị hồ sơ bệnh án kỹ lưỡng.'
  },
  {
    num: 6,
    rawId: 'kham-suc-khoe-doanh-nghiep',
    slug: 'kham-suc-khoe-doanh-nghiep-dai-hoc-y-ha-noi',
    keyword: 'khám sức khỏe định kỳ Bệnh viện Đại học Y Hà Nội',
    desc: 'Khám sức khỏe định kỳ cho cơ quan, doanh nghiệp tại Bệnh viện Đại học Y Hà Nội (tầng 3 nhà A5): đăng ký, quy trình, chuẩn bị; khám tổng quát cá nhân ở đâu.',
    featuredImage: '/images/tin-tuc/kham-suc-khoe-doanh-nghiep-dai-hoc-y.jpg',
    inlineImage: '/images/tin-tuc/kham-suc-khoe-dinh-ky-mien-phi-nguoi-cao-tuoi-2026.jpg',
    inlineAlt: 'Khám sức khỏe tổng quát định kỳ và đo các chỉ số sinh hiệu cho người lao động',
    inlineCaption: 'Khu vực khám sức khỏe cơ quan, doanh nghiệp tại tầng 3 nhà A5 Bệnh viện Đại học Y Hà Nội.'
  },
  {
    num: 7,
    rawId: 'dat-lich-dai-hoc-y',
    slug: 'dat-lich-kham-benh-vien-dai-hoc-y-ha-noi',
    keyword: 'đặt lịch khám Bệnh viện Đại học Y Hà Nội',
    desc: 'Cách đặt lịch, lấy số khám Bệnh viện Đại học Y Hà Nội: tổng đài 1900 6422, ứng dụng BV Đại Học Y Hà Nội, lấy số trực tiếp. Đặt cho từng khu khám và mẹo.',
    featuredImage: '/images/tin-tuc/dat-lich-kham-app-benh-vien-dai-hoc-y.jpg',
    inlineImage: '/images/tin-tuc/dat-lich-kham-benh-vien-tim-qua-zalo.jpg',
    inlineAlt: 'Đặt hẹn khám trước qua điện thoại và tổng đài 1900 6422',
    inlineCaption: 'Đặt lịch trước qua tổng đài hoặc ứng dụng giúp người bệnh được tiếp đón theo khung giờ và giảm thời gian chờ đợi.'
  },
  {
    num: 8,
    rawId: 'luu-y-kham-dai-hoc-y',
    slug: 'luu-y-khi-di-kham-benh-vien-dai-hoc-y-ha-noi',
    keyword: 'lưu ý khi đi khám Bệnh viện Đại học Y Hà Nội',
    desc: '12 lưu ý khi đi khám Bệnh viện Đại học Y Hà Nội: giờ đông, gửi xe, nhịn ăn, nội soi gây mê, giấy tờ, thanh toán, cò mồi, mất đồ, lịch bác sĩ thay đổi.',
    featuredImage: '/images/tin-tuc/checklist-dua-bo-me-di-kham-benh-vien.jpg',
    inlineImage: '/images/tin-tuc/lay-mau-xet-nghiem-nhin-an-kham-tim.jpg',
    inlineAlt: 'Lấy mẫu xét nghiệm máu buổi sáng lúc đói',
    inlineCaption: 'Nên nhịn ăn sáng khi có chỉ định xét nghiệm máu hoặc nội soi dạ dày, đại tràng.'
  },
  {
    num: 9,
    rawId: 'nguoi-cao-tuoi-kham-dai-hoc-y',
    slug: 'dua-nguoi-cao-tuoi-di-kham-dai-hoc-y-ha-noi',
    keyword: 'đưa người cao tuổi đi khám Bệnh viện Đại học Y Hà Nội',
    desc: 'Đưa bố mẹ cao tuổi đi khám Bệnh viện Đại học Y Hà Nội: chọn khu khám, hạn chế đi lại giữa nhà A2 và A5, xe lăn, nhịn ăn, nội soi, ghi lời dặn bác sĩ.',
    featuredImage: '/images/tin-tuc/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh.jpg',
    inlineImage: '/images/tin-tuc/dua-bo-me-di-kham-benh.jpg',
    inlineAlt: 'Đồng hành cùng người cao tuổi di chuyển an toàn trong bệnh viện',
    inlineCaption: 'Người cao tuổi đi khám tại các bệnh viện lớn cần người hỗ trợ làm thủ tục và di chuyển giữa các khoa.'
  },
  {
    num: 10,
    rawId: 'dich-vu-dong-hanh-dai-hoc-y',
    slug: 'dich-vu-dong-hanh-kham-benh-dai-hoc-y-ha-noi',
    keyword: 'dịch vụ đồng hành khám bệnh Hà Nội',
    desc: 'Dịch vụ đồng hành khám bệnh, đi khám cùng tại Hà Nội của ANTCARE ở Bệnh viện Đại học Y Hà Nội: đặt lịch, đón tận nhà, đúng khu khám, báo cáo gia đình. Từ 390.000đ.',
    featuredImage: '/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg',
    inlineImage: '/images/tin-tuc/quy-trinh-dong-hanh-di-kham-antcare.jpg',
    inlineAlt: 'Quy trình dịch vụ đồng hành đi khám cùng người cao tuổi của ANTCARE',
    inlineCaption: 'Trợ lý Kiến Y tế ANTCARE đưa đón tận nhà, túc trực làm thủ tục và hỗ trợ suốt buổi khám.'
  }
];

// Hash replacements for cross-article internal links
const hashReplacements = [
  { from: /href="#kinh-nghiem-kham-dai-hoc-y"/g, to: 'href="/news/kinh-nghiem-di-kham-benh-vien-dai-hoc-y-ha-noi"' },
  { from: /href="#4-khu-kham-dai-hoc-y"/g, to: 'href="/news/4-khu-kham-benh-vien-dai-hoc-y-ha-noi"' },
  { from: /href="#khoa-kham-benh-a2"/g, to: 'href="/news/kham-bhyt-benh-vien-dai-hoc-y-ha-noi"' },
  { from: /href="#kham-theo-yeu-cau-a2"/g, to: 'href="/news/kham-theo-yeu-cau-benh-vien-dai-hoc-y-ha-noi"' },
  { from: /href="#trung-tam-y-khoa-so-1"/g, to: 'href="/news/trung-tam-y-khoa-so-1-ton-that-tung"' },
  { from: /href="#kham-suc-khoe-doanh-nghiep"/g, to: 'href="/news/kham-suc-khoe-doanh-nghiep-dai-hoc-y-ha-noi"' },
  { from: /href="#dat-lich-dai-hoc-y"/g, to: 'href="/news/dat-lich-kham-benh-vien-dai-hoc-y-ha-noi"' },
  { from: /href="#luu-y-kham-dai-hoc-y"/g, to: 'href="/news/luu-y-khi-di-kham-benh-vien-dai-hoc-y-ha-noi"' },
  { from: /href="#nguoi-cao-tuoi-kham-dai-hoc-y"/g, to: 'href="/news/dua-nguoi-cao-tuoi-di-kham-dai-hoc-y-ha-noi"' },
  { from: /href="#dich-vu-dong-hanh-dai-hoc-y"/g, to: 'href="/news/dich-vu-dong-hanh-kham-benh-dai-hoc-y-ha-noi"' }
];

const authorObj = {
  name: "ANTCARE – Kiến chăm tổ",
  image: "/images/huyen-trang.jpg",
  description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà Hà Nội"
};

// Regex to extract each <article id="..."> ... </article>
const articleRegex = /<article\s+id="([^"]+)">([\s\S]*?)<\/article>/gi;
let match;
const parsedArticles = [];
let index = 0;

while ((match = articleRegex.exec(rawHtml)) !== null) {
  const rawId = match[1];
  let articleInnerHtml = match[2];
  const config = articlesConfig[index];

  if (!config) {
    console.error(`Missing config for article index ${index}, rawId: ${rawId}`);
    continue;
  }

  // Extract H2 for Title
  const h2Match = articleInnerHtml.match(/<h2>([\s\S]*?)<\/h2>/i);
  const title = h2Match ? h2Match[1].trim() : '';

  // Extract meta keywords
  const metaMatch = articleInnerHtml.match(/<p class="meta">([\s\S]*?)<\/p>/i);
  let keywords = config.keyword;
  if (metaMatch) {
    const kMatch = metaMatch[1].match(/Từ khóa:\s*(.*?)$/i);
    if (kMatch) keywords = kMatch[1].trim();
  }

  // Extract quick answer for excerpt
  const answerMatch = articleInnerHtml.match(/<div class="answer">([\s\S]*?)<\/div>/i);
  let excerpt = config.desc;
  if (answerMatch) {
    excerpt = answerMatch[1].replace(/<[^>]+>/g, '').replace(/^Trả lời nhanh:\s*/i, '').trim();
  }

  // Replace internal cross-article hash links
  hashReplacements.forEach(({ from, to }) => {
    articleInnerHtml = articleInnerHtml.replace(from, to);
  });

  // Replace generic service links inside CTA
  articleInnerHtml = articleInnerHtml.replace(/href="https:\/\/antcare\.vn\/"/g, 'href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi"');

  // Insert Inline Image after the answer block
  const inlineImgHtml = `
<figure class="article-inline-image my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
  <img src="${config.inlineImage}" alt="${config.inlineAlt}" class="w-full h-auto object-cover max-h-[460px] rounded-t-2xl" loading="lazy" />
  <figcaption class="p-3 text-xs sm:text-sm text-[#5B5568] italic text-center bg-[#FAF8FD] border-t border-[#E6DFF2]/60">
    ${config.inlineCaption}
  </figcaption>
</figure>
`;
  if (articleInnerHtml.includes('</div>')) {
    articleInnerHtml = articleInnerHtml.replace(/<\/div>/i, `</div>\n${inlineImgHtml}`);
  } else {
    articleInnerHtml = inlineImgHtml + articleInnerHtml;
  }

  // Wrap in standard container and clean up
  const content = `<div class="article-dai-hoc-y">\n${articleInnerHtml.trim()}\n</div>`;

  // ID allocation: 262 down to 253 (so article 1 is ID 262, displayed first)
  const id = 262 - index;

  const oldSlugs = [
    `kien-thuc/${config.slug}`,
    `tin-tuc/${config.slug}`,
    `blog/${config.slug}`,
    `news/${config.slug}`,
    config.slug
  ];
  if (config.rawId !== config.slug) {
    oldSlugs.push(config.rawId);
    oldSlugs.push(`kien-thuc/${config.rawId}`);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://antcare.vn/news/${config.slug}/`,
    "headline": title,
    "description": config.desc || excerpt,
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
    "image": config.featuredImage
  };

  parsedArticles.push({
    baiNum: config.num,
    id,
    slug: config.slug,
    group: "dai-hoc-y-ha-noi",
    oldSlugs,
    title,
    metaTitle: `${title} | ANTCARE`,
    description: config.desc || excerpt,
    excerpt,
    category: "Bệnh viện Đại học Y Hà Nội",
    date: "28/10/2026",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    keywords,
    image: config.featuredImage,
    author: authorObj,
    content,
    schema
  });

  index++;
}

console.log(`Extracted ${parsedArticles.length} articles.`);
parsedArticles.forEach(a => {
  console.log(`Bài ${a.baiNum} [ID ${a.id}]: ${a.slug} | Image: ${a.image}`);
});

fs.writeFileSync(path.join(__dirname, 'parsed_dai_hoc_y.json'), JSON.stringify(parsedArticles, null, 2), 'utf8');
console.log('Saved parsed articles to scratch/parsed_dai_hoc_y.json');
