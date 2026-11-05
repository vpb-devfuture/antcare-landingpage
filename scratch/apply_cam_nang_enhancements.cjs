const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsEnJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Helper: FAQ Accordion with bold questions, numbers, clean toggle
function renderFaqAccordion(faqs) {
  let html = '<div class="faq-accordion space-y-3 my-6">\n';
  faqs.forEach((faq, idx) => {
    // Keep first 1 item open for preview, or close all so it's clean and compact
    html += `  <details class="faq-item group">
    <summary class="faq-question">
      <span class="faq-q-text">
        <span class="faq-badge">${idx + 1}</span>
        <strong class="faq-title">${faq.q}</strong>
      </span>
      <span class="faq-arrow material-symbols-outlined">expand_more</span>
    </summary>
    <div class="faq-answer">
      ${faq.a}
    </div>
  </details>\n`;
  });
  html += '</div>';
  return html;
}

// 3 authoritative sources
const sources3Html = `
<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tài liệu y khoa tham khảo (3 nguồn hàng đầu)</h3>
  <ul>
    <li><a href="https://www.lstmed.ac.uk/node/7251" rel="nofollow" target="_blank">The Lancet Public Health (2019) – Tổng quan nghiên cứu trên 3.300 phụ nữ về độ an toàn của cốc nguyệt san</a></li>
    <li><a href="https://www.statnews.com/2023/08/07/period-products-menstrual-disc-new-study/" rel="nofollow" target="_blank">BMJ Sexual &amp; Reproductive Health (2023) – Thử nghiệm lâm sàng đo sức chứa thực tế của 21 dòng sản phẩm kinh nguyệt</a></li>
    <li><a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/Tampon-Safety-and-Toxic-Shock-Syndrome.aspx" rel="nofollow" target="_blank">Viện Hàn lâm Nhi khoa Hoa Kỳ (AAP / HealthyChildren.org) – Hướng dẫn an toàn sản phẩm kinh nguyệt &amp; phòng ngừa TSS</a></li>
  </ul>
</section>
`;

// 3 Related Articles Box for bottom of articles
function renderRelatedArticlesBox(currentSlug) {
  const allArticles = [
    { slug: 'ngay-kinh-nguyet-nen-dung-gi', title: 'Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn', desc: 'Băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt.' },
    { slug: 'cach-dung-coc-nguyet-san', title: 'Cách dùng cốc nguyệt san cho người mới bắt đầu', desc: '4 kiểu gấp cốc, cách đặt và lấy ra không đau.' },
    { slug: 'cach-chon-size-va-ve-sinh-coc-nguyet-san', title: 'Cách chọn size cốc nguyệt san & vệ sinh chuẩn', desc: 'Đo cổ tử cung tại nhà, tiệt trùng và bảo quản.' },
    { slug: 'cach-dung-dia-nguyet-san', title: 'Cách dùng đĩa nguyệt san: đặt, gài, tháo không đổ', desc: 'Gài sau xương mu, cơ chế tự đổ và lớp dự phòng.' },
    { slug: 'coc-nguyet-san-hay-dia-nguyet-san', title: 'Cốc nguyệt san hay đĩa nguyệt san: nên chọn loại nào?', desc: 'So sánh chi tiết 11 tiêu chí dung tích, quan hệ...' },
    { slug: 'coc-dia-nguyet-san-bi-ro-ri', title: 'Cốc, đĩa nguyệt san bị rò rỉ: 10 nguyên nhân & xử lý', desc: 'Khắc phục triệt để mọi lỗi rò rỉ khi dùng cốc, đĩa.' }
  ];

  const related = allArticles.filter(a => a.slug !== currentSlug).slice(0, 3);

  let html = `
<div class="related-articles-box my-8 p-5 bg-[#FAF8FD] rounded-2xl border border-[#E6DFF2]">
  <h4 class="font-bold text-[#6633B4] mb-3.5 flex items-center gap-2 text-sm sm:text-base">
    <span class="material-symbols-outlined text-base text-[#FD711A]">menu_book</span>
    <span>Bài viết tham khảo cùng chuyên mục (3 bài chọn lọc)</span>
  </h4>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
`;
  related.forEach(item => {
    html += `    <a href="/cam-nang/${item.slug}" class="block p-3.5 rounded-xl bg-white border border-[#E6DFF2]/80 hover:border-[#6633B4] hover:shadow-xs transition-all group">
      <h5 class="font-bold text-xs sm:text-[13px] text-[#1f1a2b] group-hover:text-[#6633B4] line-clamp-2 mb-1.5 leading-snug">${item.title}</h5>
      <p class="text-[11px] text-[#5b5568] line-clamp-2 leading-relaxed">${item.desc}</p>
    </a>\n`;
  });
  html += `  </div>
</div>
`;
  return html;
}

// Process each article
newsData.list = newsData.list.map(article => {
  let content = article.content;

  // 1. Convert <dl class="faq"> or any existing FAQ definition list to Accordion
  const faqRegex = /<dl class="faq">([\s\S]*?)<\/dl>/;
  const match = content.match(faqRegex);
  if (match) {
    const dldtRegex = /<dt>([\s\S]*?)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/g;
    const faqs = [];
    let m;
    while ((m = dldtRegex.exec(match[1])) !== null) {
      faqs.push({
        q: m[1].replace(/<[^>]+>/g, '').trim(),
        a: m[2].trim()
      });
    }
    if (faqs.length > 0) {
      content = content.replace(faqRegex, renderFaqAccordion(faqs));
    }
  }

  // 2. Replace sources section with exactly 3 top sources + 3 related articles box
  const sourcesRegex = /<section class="sources"[\s\S]*?<\/section>/;
  if (sourcesRegex.test(content)) {
    content = content.replace(sourcesRegex, sources3Html + renderRelatedArticlesBox(article.slug));
  } else if (!content.includes('related-articles-box')) {
    content += sources3Html + renderRelatedArticlesBox(article.slug);
  }

  // 3. Add illustrations per article slug:
  if (article.slug === 'ngay-kinh-nguyet-nen-dung-gi') {
    // 3a. Add Đĩa nguyệt san image in Section 4
    if (!content.includes('so-sanh-dia-nguyet-san.jpg')) {
      content = content.replace(
        '<h2 id="dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất nhưng khó dùng nhất</h2>',
        `<h2 id="dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất nhưng khó dùng nhất</h2>
<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san silicone y tế mềm mại cao cấp" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Đĩa nguyệt san silicone y tế: vành silicon đàn hồi, thân màng mỏng đặt tại vòm âm đạo, chứa tới 50–70ml.
  </figcaption>
</figure>`
      );
    }

    // 3b. Collapsible TOC in Article 1
    content = content.replace(
      /<nav class="toc" aria-label="Mục lục">([\s\S]*?)<\/nav>/,
      `<nav class="toc" aria-label="Mục lục">
  <details class="toc-accordion" open>
    <summary class="font-bold text-[#6633B4] cursor-pointer flex items-center justify-between text-sm sm:text-base select-none">
      <span class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-base">format_list_bulleted</span>
        <span>Mục lục bài viết (3 nhóm nội dung chính)</span>
      </span>
      <span class="text-xs text-[#FD711A] font-medium flex items-center gap-1">
        Thu gọn / Mở rộng <span class="material-symbols-outlined text-sm">unfold_more</span>
      </span>
    </summary>
    <ol class="mt-3 text-xs sm:text-sm space-y-1 pl-4">
      <li><a href="#bang-so-sanh">1. Bảng so sánh 5 dụng cụ: Băng vệ sinh, Tampon, Cốc, Đĩa, Quần</a></li>
      <li><a href="#vi-sao-quan-kinh-nguyet">2. Đánh giá chi tiết ưu nhược điểm &amp; giải pháp tối ưu</a></li>
      <li><a href="#faq">3. Hướng dẫn chọn theo nhu cầu &amp; Câu hỏi thường gặp</a></li>
    </ol>
  </details>
</nav>`
    );
  }

  if (article.slug === 'cach-dung-coc-nguyet-san') {
    if (!content.includes('so-sanh-coc-nguyet-san.jpg')) {
      content = content.replace(
        '<div class="answer">',
        `<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Cốc nguyệt san silicone y tế" class="w-full h-auto object-cover max-h-[340px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Cốc nguyệt san silicone y tế: thiết kế hình chuông tạo giác hút ôm khít thành âm đạo.
  </figcaption>
</figure>
<div class="answer">`
      );
    }
  }

  if (article.slug === 'cach-chon-size-va-ve-sinh-coc-nguyet-san') {
    if (!content.includes('so-sanh-coc-nguyet-san.jpg')) {
      content = content.replace(
        '<div class="answer">',
        `<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Các kích thước cốc nguyệt san" class="w-full h-auto object-cover max-h-[340px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Lựa chọn size cốc nguyệt san phụ thuộc vào độ cao cổ tử cung, lượng kinh và thể trạng cơ sàn chậu.
  </figcaption>
</figure>
<div class="answer">`
      );
    }
  }

  if (article.slug === 'cach-dung-dia-nguyet-san') {
    if (!content.includes('so-sanh-dia-nguyet-san.jpg')) {
      content = content.replace(
        '<div class="answer">',
        `<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san silicone y tế cao cấp" class="w-full h-auto object-cover max-h-[340px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Đĩa nguyệt san y tế: vành tròn dẹp tự định vị sau xương mu, không tạo lực hút chân không.
  </figcaption>
</figure>
<div class="answer">`
      );
    }
  }

  if (article.slug === 'coc-nguyet-san-hay-dia-nguyet-san') {
    if (!content.includes('so-sanh-dia-nguyet-san.jpg')) {
      content = content.replace(
        '<h3>Bảng so sánh chi tiết: Cốc nguyệt san vs Đĩa nguyệt san</h3>',
        `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Cốc nguyệt san silicone y tế" class="w-full h-auto object-cover max-h-[260px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Cốc nguyệt san: bám bằng lực hút chân không ở âm đạo</figcaption>
  </figure>
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san silicone y tế" class="w-full h-auto object-cover max-h-[260px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Đĩa nguyệt san: gài tự nhiên sau xương mu ở vòm âm đạo</figcaption>
  </figure>
</div>
<h3>Bảng so sánh chi tiết: Cốc nguyệt san vs Đĩa nguyệt san</h3>`
      );
    }
  }

  if (article.slug === 'coc-dia-nguyet-san-bi-ro-ri') {
    if (!content.includes('so-sanh-dia-nguyet-san.jpg')) {
      content = content.replace(
        '<div class="answer">',
        `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Cốc nguyệt san chống tràn" class="w-full h-auto object-cover max-h-[240px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Cốc nguyệt san: cần bung mở hoàn toàn để không rò</figcaption>
  </figure>
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san chống tràn" class="w-full h-auto object-cover max-h-[240px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Đĩa nguyệt san: phải gài chuẩn vành trước sau xương mu</figcaption>
  </figure>
</div>
<div class="answer">`
      );
    }
  }

  return {
    ...article,
    content
  };
});

newsData.featured = newsData.list[0];

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');

// Also update news.en.json
const enNewsData = JSON.parse(fs.readFileSync(newsEnJsonPath, 'utf8'));
enNewsData.list = enNewsData.list.map((article, idx) => {
  return {
    ...article,
    content: newsData.list[idx]?.content || article.content
  };
});
enNewsData.featured = enNewsData.list[0];
fs.writeFileSync(newsEnJsonPath, JSON.stringify(enNewsData, null, 2), 'utf8');

console.log('✅ Updated all articles successfully:');
console.log('- Menstrual disc illustration embedded across all relevant articles');
console.log('- FAQs transformed into interactive click-to-expand accordions with bold questions');
console.log('- Sources and related reference articles cleanly capped at 3 items');

