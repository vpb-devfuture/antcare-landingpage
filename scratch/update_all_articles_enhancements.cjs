const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsEnJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Common helper to convert FAQ array to interactive Accordion
function renderFaqAccordion(faqs) {
  let html = '<div class="faq-accordion space-y-3 my-6">\n';
  faqs.forEach((faq, idx) => {
    html += `  <details class="faq-item group" ${idx === 0 ? 'open' : ''}>
    <summary class="faq-question">
      <span class="flex items-center gap-2.5">
        <span class="w-6 h-6 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold flex items-center justify-center shrink-0">${idx + 1}</span>
        <strong>${faq.q}</strong>
      </span>
      <span class="material-symbols-outlined text-lg transition-transform duration-200 group-open:rotate-180 text-[#6633B4]">expand_more</span>
    </summary>
    <div class="faq-answer">
      ${faq.a}
    </div>
  </details>\n`;
  });
  html += '</div>';
  return html;
}

// Common 3-source reference list (top 3 authoritative medical sources)
const sources3Html = `
<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tài liệu y khoa tham khảo (3 nguồn hàng đầu)</h3>
  <ul>
    <li><a href="https://www.lstmed.ac.uk/node/7251" rel="nofollow" target="_blank">The Lancet Public Health (2019) – Tổng quan nghiên cứu trên 3.300 phụ nữ về độ an toàn của cốc nguyệt san</a></li>
    <li><a href="https://www.statnews.com/2023/08/07/period-products-menstrual-disc-new-study/" rel="nofollow" target="_blank">BMJ Sexual &amp; Reproductive Health (2023) – Thử nghiệm lâm sàng đo sức chứa thực tế của 21 dòng sản phẩm kinh nguyệt</a></li>
    <li><a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/Tampon-Safety-and-Toxic-Shock-Syndrome.aspx" rel="nofollow" target="_blank">Viện Hàn lâm Nhi khoa Hoa Kỳ (AAP / HealthyChildren.org) – Hướng dẫn sử dụng sản phẩm kinh nguyệt an toàn &amp; phòng ngừa TSS</a></li>
  </ul>
</section>
`;

// 3 Related Articles Box for bottom of articles
function renderRelatedArticlesBox(currentSlug) {
  const allOtherArticles = [
    { slug: 'ngay-kinh-nguyet-nen-dung-gi', title: 'Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn', desc: 'Băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt.' },
    { slug: 'cach-dung-coc-nguyet-san', title: 'Cách dùng cốc nguyệt san cho người mới bắt đầu', desc: '4 kiểu gấp cốc, cách đặt và lấy ra không đau.' },
    { slug: 'cach-chon-size-va-ve-sinh-coc-nguyet-san', title: 'Cách chọn size cốc nguyệt san & vệ sinh chuẩn', desc: 'Đo cổ tử cung tại nhà, tiệt trùng và bảo quản.' },
    { slug: 'cach-dung-dia-nguyet-san', title: 'Cách dùng đĩa nguyệt san: đặt, gài, tháo không đổ', desc: 'Gài sau xương mu, cơ chế tự đổ và lớp dự phòng.' },
    { slug: 'coc-nguyet-san-hay-dia-nguyet-san', title: 'Cốc nguyệt san hay đĩa nguyệt san: nên chọn loại nào?', desc: 'So sánh chi tiết 11 tiêu chí dung tích, quan hệ...' },
    { slug: 'coc-dia-nguyet-san-bi-ro-ri', title: 'Cốc, đĩa nguyệt san bị rò rỉ: 10 nguyên nhân & xử lý', desc: 'Khắc phục triệt để mọi lỗi rò rỉ khi dùng cốc, đĩa.' }
  ].filter(a => a.slug !== currentSlug).slice(0, 3);

  let html = `
<div class="related-articles-box my-8 p-5 bg-[#FAF8FD] rounded-2xl border border-[#E6DFF2]">
  <h4 class="font-bold text-[#6633B4] mb-3.5 flex items-center gap-2 text-sm sm:text-base">
    <span class="material-symbols-outlined text-base text-[#FD711A]">menu_book</span>
    <span>Bài viết tham khảo cùng chuyên mục (3 bài gợi ý)</span>
  </h4>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
`;
  allOtherArticles.forEach(item => {
    html += `    <a href="/cam-nang/${item.slug}" class="block p-3 rounded-xl bg-white border border-[#E6DFF2]/80 hover:border-[#6633B4] hover:shadow-xs transition-all group">
      <h5 class="font-bold text-xs sm:text-[13px] text-[#1f1a2b] group-hover:text-[#6633B4] line-clamp-2 mb-1 leading-snug">${item.title}</h5>
      <p class="text-[11px] text-[#5b5568] line-clamp-1">${item.desc}</p>
    </a>\n`;
  });
  html += `  </div>
</div>
`;
  return html;
}

// Update each article
newsData.list = newsData.list.map(article => {
  let content = article.content;

  // 1. Convert <dl class="faq"> to interactive Accordion
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

  // 2. Replace sources with 3 top sources
  const sourcesRegex = /<section class="sources"[\s\S]*?<\/section>/;
  if (sourcesRegex.test(content)) {
    content = content.replace(sourcesRegex, sources3Html + renderRelatedArticlesBox(article.slug));
  } else {
    content += renderRelatedArticlesBox(article.slug);
  }

  // 3. For article 0 (ngay-kinh-nguyet-nen-dung-gi), ensure ĐĨA NGUYỆT SAN has image
  if (article.slug === 'ngay-kinh-nguyet-nen-dung-gi') {
    // Add disc image under Section 4 if not present
    if (!content.includes('so-sanh-dia-nguyet-san.jpg')) {
      content = content.replace(
        '<h2 id="dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất nhưng khó dùng nhất</h2>',
        `<h2 id="dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất nhưng khó dùng nhất</h2>
<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san silicone y tế cao cấp" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Đĩa nguyệt san: đĩa mềm dẹt đặt ở vòm âm đạo, dung tích chứa lớn nhất trong các sản phẩm kinh nguyệt.
  </figcaption>
</figure>`
      );
    }
    // Also make TOC in article 1 collapsible with <details>
    content = content.replace(
      /<nav class="toc" aria-label="Mục lục">([\s\S]*?)<\/nav>/,
      `<nav class="toc" aria-label="Mục lục">
  <details class="toc-accordion" open>
    <summary class="font-bold text-[#6633B4] cursor-pointer flex items-center justify-between text-sm sm:text-base select-none">
      <span>Mục lục nội dung bài viết</span>
      <span class="text-xs text-[#FD711A] font-medium flex items-center gap-1">
        Thu gọn / Mở rộng <span class="material-symbols-outlined text-sm">unfold_more</span>
      </span>
    </summary>
    <ol class="mt-3 text-xs sm:text-sm space-y-1">
      <li><a href="#bang-so-sanh">Bảng so sánh nhanh 5 lựa chọn</a></li>
      <li><a href="#bang-ve-sinh">1. Băng vệ sinh: quen thuộc nhất</a></li>
      <li><a href="#tampon">2. Tampon: gọn nhẹ nhưng cần thay đúng giờ</a></li>
      <li><a href="#coc-nguyet-san">3. Cốc nguyệt san: tiết kiệm, ít rác thải</a></li>
      <li><a href="#dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất</a></li>
      <li><a href="#quan-kinh-nguyet">5. Quần kinh nguyệt: êm ái như quần lót thường</a></li>
      <li><a href="#vi-sao-quan-kinh-nguyet">Vì sao quần kinh nguyệt là lựa chọn tối ưu</a></li>
      <li><a href="#ngay-nhieu">Ngày ra nhiều dùng gì để không tràn?</a></li>
      <li><a href="#theo-doi-tuong">Chọn theo từng đối tượng &amp; hoàn cảnh</a></li>
      <li><a href="#cach-chon-quan">7 tiêu chí chọn quần kinh nguyệt tốt</a></li>
      <li><a href="#faq">Câu hỏi thường gặp (FAQ)</a></li>
    </ol>
  </details>
</nav>`
    );
  }

  // 4. For article 4 (coc-nguyet-san-hay-dia-nguyet-san), add comparison images
  if (article.slug === 'coc-nguyet-san-hay-dia-nguyet-san') {
    if (!content.includes('so-sanh-dia-nguyet-san.jpg')) {
      content = content.replace(
        '<h3>Bảng so sánh chi tiết: Cốc nguyệt san vs Đĩa nguyệt san</h3>',
        `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Cốc nguyệt san silicone y tế" class="w-full h-auto object-cover max-h-[260px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Cốc nguyệt san: giữ bằng lực hút</figcaption>
  </figure>
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san silicone cao cấp" class="w-full h-auto object-cover max-h-[260px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Đĩa nguyệt san: gài sau xương mu</figcaption>
  </figure>
</div>
<h3>Bảng so sánh chi tiết: Cốc nguyệt san vs Đĩa nguyệt san</h3>`
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

// Update news.en.json with the new contents
const enNewsData = JSON.parse(fs.readFileSync(newsEnJsonPath, 'utf8'));
enNewsData.list = enNewsData.list.map((article, idx) => {
  return {
    ...article,
    content: newsData.list[idx]?.content || article.content
  };
});
enNewsData.featured = enNewsData.list[0];
fs.writeFileSync(newsEnJsonPath, JSON.stringify(enNewsData, null, 2), 'utf8');

console.log('Successfully enhanced all 6 articles with images, interactive accordion FAQs, and compact 3-item references!');

