const fs = require('fs');
const path = require('path');

const newsJsonBakPath = path.join(__dirname, '..', 'src', 'data', 'news.json.bak');
const newsJsonCurrentPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsJsonEnPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const bakData = JSON.parse(fs.readFileSync(newsJsonBakPath, 'utf8'));
const currentData = JSON.parse(fs.readFileSync(newsJsonCurrentPath, 'utf8'));

console.log('Restoring 253 base articles from bakData...');
console.log('Current menstrual/absorbent articles count:', currentData.list.length);

// 1. Extract 16 Cẩm nang articles from current news.json and ensure group: 'kinh-nguyet'
const camNangArticles = currentData.list.map((item, idx) => {
  return {
    ...item,
    id: 301 + idx, // unique ID range 301..316
    group: 'kinh-nguyet'
  };
});

// Helper for FAQ Accordion
function renderFaqAccordion(faqs) {
  let html = '<div class="faq-accordion space-y-3 my-6">\n';
  faqs.forEach((faq, idx) => {
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

// Helper CTA for Medical Escort
const getMedicalCtaHtml = (title, desc) => `
<div class="cta">
  <h4 class="text-lg font-bold text-white mb-1">${title || 'Đồng hành đi khám – ANTCARE'}</h4>
  <p class="text-sm text-purple-100 mb-3">${desc || 'Đón tại nhà, đi khám cùng tại Hà Nội và các tỉnh miền Bắc. Từ 390.000đ/3 giờ; đặt trước ít nhất 1 ngày; nhận thanh toán từ nước ngoài.'}</p>
  <a class="btn" href="https://antcare.vn/">Đặt lịch đồng hành khám bệnh</a>
  <a class="btn" href="tel:0969032360">Gọi 0969 032 360</a>
</div>
`;

// Helper for 3 Related Articles Box in News
function renderNewsRelatedBox(relatedItems) {
  let html = `
<div class="related-articles-box my-8 p-5 bg-[#FAF8FD] rounded-2xl border border-[#E6DFF2]">
  <h4 class="font-bold text-[#6633B4] mb-3.5 flex items-center gap-2 text-sm sm:text-base">
    <span class="material-symbols-outlined text-base text-[#FD711A]">newspaper</span>
    <span>Tin tức &amp; cẩm nang đưa bố mẹ đi khám cùng chuyên mục</span>
  </h4>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
`;
  relatedItems.forEach(item => {
    html += `    <a href="/news/${item.slug}" class="block p-3.5 rounded-xl bg-white border border-[#E6DFF2]/80 hover:border-[#6633B4] hover:shadow-xs transition-all group">
      <h5 class="font-bold text-xs sm:text-[13px] text-[#1f1a2b] group-hover:text-[#6633B4] line-clamp-2 mb-1.5 leading-snug">${item.title}</h5>
      <p class="text-[11px] text-[#5b5568] line-clamp-2 leading-relaxed">${item.desc}</p>
    </a>\n`;
  });
  html += `  </div>
</div>
`;
  return html;
}

// -------------------------------------------------------------------------
// 10 BÀI BÁO Y TẾ MỚI THÁNG 11/2026
// -------------------------------------------------------------------------

// BÀI 1: Cúm A ở người cao tuổi
const faqsNews1 = [
  {
    q: "Người cao tuổi bị cúm A khi nào cần đi viện?",
    a: "Cần đi khám ngay khi sốt không giảm, khó thở, đau tức ngực, lơ mơ, mệt lả hoặc triệu chứng đỡ rồi nặng lên; người trên 65 tuổi có bệnh nền nên đi khám sớm từ những ngày đầu."
  },
  {
    q: "Bị cúm A có nên tự uống kháng sinh không?",
    a: "Không. Kháng sinh không diệt virus cúm, chỉ dùng khi bác sĩ xác định có bội nhiễm vi khuẩn; thuốc kháng virus cũng cần bác sĩ chỉ định."
  }
];

const contentNews1 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cúm A tăng mạnh, nhiều người cao tuổi nhập viện: khi nào cần đưa bố mẹ đi khám ngay?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Thông tin y tế tham khảo</p>
</header>

<div class="news"><strong>Tin mới:</strong> Cuối tháng 10/2026, Khoa Nội nhiễm Bệnh viện Thống Nhất cho biết đã điều trị nội trú 49 ca cúm A trong tháng 9–10; riêng ngày 30/10 có 16 người nằm viện, 4 người phải thở oxy, phần lớn là người cao tuổi có bệnh nền (VietNamNet, 31/10/2026). Hà Nội ghi nhận cúm A gia tăng khi giao mùa, nhiều ca nhập viện vì viêm phổi, suy hô hấp (Hànộimới, 26/10/2026).</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Người cao tuổi bị cúm cần đi khám <strong>ngay</strong> khi có một trong các dấu hiệu: sốt không giảm, khó thở hoặc thở nhanh, đau tức ngực, lơ mơ hoặc lú lẫn, mệt lả, bỏ ăn, triệu chứng đỡ rồi đột ngột nặng lên. Người trên 65 tuổi có bệnh nền (tim mạch, tiểu đường, bệnh phổi, bệnh thận) nên đi khám sớm ngay từ những ngày đầu thay vì chờ. Không tự dùng kháng sinh hay thuốc kháng virus khi chưa có chỉ định của bác sĩ.</div>

<h3>Vì sao cúm A nguy hiểm với người cao tuổi?</h3>
<p>Ở người trẻ khỏe, cúm thường tự khỏi sau vài ngày. Nhưng ở người cao tuổi, đặc biệt người có bệnh nền, cúm dễ biến chứng viêm phổi, suy hô hấp và làm bệnh nền nặng lên. Ba bệnh nhân 71–82 tuổi tại Bệnh viện Thống Nhất đều từng mổ bắc cầu mạch vành, tăng huyết áp hoặc bệnh thận mạn, và đều chuyển nặng chỉ sau 2–4 ngày. Bác sĩ cũng cảnh báo trong tuần đầu bị cúm, người cao tuổi có bệnh nền tăng nguy cơ biến cố tim mạch như nhồi máu cơ tim.</p>
<p>Một điểm chung của ba bệnh nhân: <strong>chưa tiêm vắc xin cúm</strong>.</p>

<h3>Những sai lầm khiến cúm ở người già chuyển nặng</h3>
<div class="table-scroll">
<table>
  <tr><th>Sai lầm phổ biến</th><th>Hậu quả nguy hiểm</th></tr>
  <tr><td>Tự test nhanh tại nhà rồi tự mua kháng sinh, thuốc kháng virus</td><td>Kháng sinh không diệt virus cúm; dùng sai gây kháng thuốc, bỏ lỡ điều trị đúng</td></tr>
  <tr><td>"Chờ thêm vài hôm xem sao" vì triệu chứng ban đầu nhẹ</td><td>Người già thường có triệu chứng mờ nhạt, khi phát hiện đã viêm phổi nặng</td></tr>
  <tr><td>Con cái bận, để bố mẹ tự đi khám khi đang sốt, mệt</td><td>Nguy cơ ngã, choáng khi chờ đợi xếp hàng; kể bệnh không đầy đủ</td></tr>
  <tr><td>Bỏ qua tiêm vắc xin cúm hằng năm</td><td>Mất lớp bảo vệ quan trọng nhất theo khuyến cáo của chuyên gia y tế</td></tr>
</table>
</div>

<h3>Gia đình nên làm gì ngay bây giờ?</h3>
<ol>
  <li><strong>Hỏi bác sĩ về tiêm vắc xin cúm</strong> cho bố mẹ nếu chưa tiêm năm nay. Chuyên gia Viện Vệ sinh Dịch tễ Trung ương nhấn mạnh ưu tiên hàng đầu là tăng tỷ lệ tiêm vắc xin cúm hằng năm.</li>
  <li><strong>Theo dõi sát</strong> khi bố mẹ có sốt, ho, đau mỏi: đo nhiệt độ, SpO2 (nếu có máy), ghi lại diễn biến.</li>
  <li><strong>Đi khám sớm</strong> nếu bố mẹ trên 65 tuổi có bệnh nền, hoặc có dấu hiệu nặng nêu trên.</li>
  <li><strong>Mang theo thuốc đang dùng</strong> để bác sĩ kê thuốc phù hợp, tránh tương tác.</li>
  <li><strong>Hạn chế nơi đông người</strong>, đeo khẩu trang, rửa tay thường xuyên.</li>
</ol>
<p><strong>Cấp cứu:</strong> khó thở nặng, tím tái, lơ mơ, đau ngực dữ dội → gọi <strong>115</strong>. Dịch vụ đồng hành không thay thế cấp cứu.</p>

<h3>Con bận, ai đưa bố mẹ đi khám, đi tiêm?</h3>
<p>Mùa cúm cũng là mùa bệnh viện đông. Người già đang sốt, mệt mà phải tự xếp hàng, đi lại nhiều tầng là điều không nên. Dịch vụ <strong>Đồng hành đi khám</strong> của ANTCARE đón bố mẹ tại nhà, đưa đến bệnh viện hoặc điểm tiêm, làm thủ tục, để bố mẹ được ngồi nghỉ, ghi lại chẩn đoán, đơn thuốc và gửi cho gia đình.</p>

<h3>Câu hỏi nên hỏi bác sĩ khi bố mẹ bị cúm</h3>
<ol>
  <li>Bố mẹ có cần dùng thuốc kháng virus không, dùng trong bao lâu?</li>
  <li>Thuốc huyết áp, tiểu đường, chống đông đang dùng có cần điều chỉnh không?</li>
  <li>Dấu hiệu nào cần quay lại viện ngay?</li>
  <li>Khi nào nên tiêm vắc xin cúm, có tiêm cùng vắc xin phế cầu được không?</li>
  <li>Bao lâu thì tái khám nếu đang có bệnh nền tim, phổi?</li>
</ol>

${getMedicalCtaHtml('Đồng hành đi khám – ANTCARE', 'Đón tại nhà, đi khám cùng tại Hà Nội và các tỉnh miền Bắc. Từ 390.000đ/3 giờ; đặt trước ít nhất 1 ngày; nhận thanh toán từ nước ngoài.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews1)}

<p class="note">Bài viết tổng hợp từ báo chí và khuyến cáo y khoa, mang tính tham khảo, không thay thế chẩn đoán của bác sĩ.</p>

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tham khảo</h3>
  <ul>
    <li><a href="https://vietnamnet.vn/bac-si-canh-bao-nhieu-nguoi-cao-tuoi-mac-cum-a-nguy-kich-vi-nguyen-nhan-it-ngo-2570020.html" rel="nofollow" target="_blank">VietNamNet (31/10/2026) – Nhiều người cao tuổi mắc cúm A nguy kịch</a></li>
    <li><a href="https://hanoionline.vn/cum-a-tang-khi-giao-mua-canh-bao-nguy-co-bien-chung-nang-246261026170214048.htm" rel="nofollow" target="_blank">Hànộimới (26/10/2026) – Cúm A tăng khi giao mùa</a></li>
    <li><a href="https://suckhoedoisong.vn/viet-nam-gia-hoa-nhanh-vi-sao-nguoi-cao-tuoi-can-bao-ve-tot-hon-truoc-cum-169261103173619367.htm" rel="nofollow" target="_blank">Sức khỏe &amp; Đời sống (4/11/2026) – Bảo vệ người cao tuổi trước bệnh cúm</a></li>
  </ul>
</section>

${renderNewsRelatedBox([
  {
    slug: 'mua-lanh-dot-quy-nguoi-cao-tuoi-kham-truoc',
    title: 'Mùa lạnh sắp đến: đưa bố mẹ đi khám phòng đột quỵ',
    desc: 'Kiểm soát huyết áp, chuẩn bị thuốc trước khi đón các đợt rét đậm.'
  },
  {
    slug: 'kham-suc-khoe-mien-phi-ha-noi-nguoi-cao-tuoi',
    title: 'Hà Nội khám sức khỏe miễn phí toàn dân tháng 11',
    desc: 'Lịch khám tại trạm y tế phường xã và các bước chuẩn bị.'
  },
  {
    slug: 'gia-hoa-dan-so-ai-dua-bo-me-di-kham',
    title: 'Con cái đi làm, ở xa: ai đưa bố mẹ đi khám?',
    desc: 'So sánh các phương án chăm sóc và dịch vụ đồng hành y tế.'
  }
])}

</div>
`;

// Helper builder for a news article
function buildNewsArticle({ id, slug, title, metaTitle, description, excerpt, keywords, image, content, faqs }) {
  return {
    id,
    slug,
    group: "news",
    oldSlugs: [`kien-thuc/${slug}`, `tin-tuc/${slug}`],
    title,
    metaTitle: metaTitle || `${title} | ANTCARE`,
    description,
    excerpt,
    category: "Tin tức",
    date: "06/11/2026",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
    keywords,
    image: image || "/images/dong-hanh-kham-benh.jpg",
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
    },
    content,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `https://antcare.vn/news/${slug}/#article`,
          "mainEntityOfPage": `https://antcare.vn/news/${slug}/`,
          "headline": title,
          "description": description,
          "keywords": keywords,
          "inLanguage": "vi-VN",
          "datePublished": "2026-11-06",
          "dateModified": "2026-11-06",
          "author": {
            "@type": "Organization",
            "name": "ANTCARE – Kiến chăm tổ",
            "url": "https://antcare.vn/"
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
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a.replace(/<[^>]+>/g, '')
            }
          }))
        }
      ]
    },
    isPinned: false
  };
}

// BÀI 2: Sốt xuất huyết
const faqsNews2 = [
  {
    q: "Người già bị sốt xuất huyết có nguy hiểm không?",
    a: "Có thể nguy hiểm hơn người trẻ vì người già thường có bệnh nền và dùng thuốc chống đông, dễ biến chứng chảy máu, sốc. Cần đi khám, xét nghiệm sớm và tái khám theo hẹn."
  },
  {
    q: "Hết sốt có phải đã khỏi sốt xuất huyết không?",
    a: "Chưa chắc. Từ ngày thứ 3 đến ngày thứ 7 là giai đoạn dễ biến chứng dù đã hạ sốt, nên vẫn cần theo dõi và tái khám theo chỉ định."
  }
];

const contentNews2 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Hà Nội cao điểm sốt xuất huyết: người cao tuổi có bệnh nền cần đi khám sớm thế nào?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Thông tin y tế tham khảo</p>
</header>

<div class="news"><strong>Tin mới:</strong> Tuần gần nhất của tháng 10/2026, Hà Nội ghi nhận 429 ca sốt xuất huyết, còn 29 ổ dịch hoạt động; cùng tuần có 153 ca tay chân miệng và 4 ca sởi (Hànộimới, 26/10/2026). CDC Hà Nội cho biết cao điểm sốt xuất huyết kéo dài từ tháng 9 đến tháng 11.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Người cao tuổi bị sốt (đặc biệt sốt cao đột ngột, đau đầu, đau mỏi cơ khớp) trong mùa sốt xuất huyết nên <strong>đi khám và xét nghiệm máu sớm</strong>, không tự điều trị ở nhà. Đi khám ngay khi có dấu hiệu cảnh báo: đau bụng, nôn nhiều, chảy máu chân răng, chảy máu mũi, chấm xuất huyết dưới da, đi ngoài phân đen, mệt lả, lơ mơ, chân tay lạnh, tiểu ít. Người dùng thuốc chống đông, thuốc chống kết tập tiểu cầu cần báo ngay cho bác sĩ.</div>

<h3>Vì sao người cao tuổi dễ biến chứng sốt xuất huyết?</h3>
<ul>
  <li><strong>Nhiều bệnh nền:</strong> tăng huyết áp, tim mạch, tiểu đường, bệnh thận khiến việc bù dịch, điều trị phức tạp hơn.</li>
  <li><strong>Đang dùng thuốc chống đông, aspirin:</strong> tăng nguy cơ chảy máu khi tiểu cầu giảm.</li>
  <li><strong>Triệu chứng không điển hình:</strong> có khi chỉ mệt, chán ăn, dễ nhầm với cảm cúm thông thường.</li>
  <li><strong>Tự dùng thuốc hạ sốt sai:</strong> các thuốc nhóm aspirin, ibuprofen có thể làm tăng nguy cơ xuất huyết; chỉ dùng thuốc hạ sốt paracetamol theo hướng dẫn của nhân viên y tế.</li>
</ul>

<h3>Lộ trình theo dõi khi người già bị sốt trong mùa dịch</h3>
<div class="table-scroll">
<table>
  <tr><th>Thời điểm</th><th>Việc nên làm</th></tr>
  <tr><td>Ngày 1–2 sốt</td><td>Đi khám, xét nghiệm máu theo chỉ định; báo bác sĩ thuốc đang dùng</td></tr>
  <tr><td>Ngày 3–7 (giai đoạn nguy hiểm)</td><td>Theo dõi sát dù đã hạ sốt; tái khám, xét nghiệm lại theo hẹn; uống đủ nước theo hướng dẫn</td></tr>
  <tr><td>Bất kỳ lúc nào có dấu hiệu cảnh báo</td><td>Đến bệnh viện ngay; nặng gọi 115</td></tr>
</table>
</div>
<p>Điểm dễ bị bỏ qua: <strong>hết sốt chưa chắc đã khỏi</strong>. Giai đoạn từ ngày thứ 3 đến ngày thứ 7 là lúc dễ xảy ra biến chứng hạ tiểu cầu, thoát huyết tương, nên tái khám đúng hẹn rất quan trọng.</p>

${getMedicalCtaHtml('Đồng hành đi khám – ANTCARE', 'Đi khám cùng bố mẹ tại Hà Nội, từ 390.000đ/3 giờ. Đặt trước ít nhất 1 ngày; trường hợp cấp cứu gọi 115.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews2)}

${renderNewsRelatedBox([
  {
    slug: 'cum-a-nguoi-cao-tuoi-khi-nao-di-kham',
    title: 'Cúm A tăng mạnh: khi nào cần đưa bố mẹ đi viện ngay?',
    desc: 'Phân biệt sốt do cúm và các dấu hiệu cảnh báo viêm phổi.'
  },
  {
    slug: 'kham-suc-khoe-mien-phi-ha-noi-nguoi-cao-tuoi',
    title: 'Hà Nội khám sức khỏe miễn phí toàn dân',
    desc: 'Quy trình và danh sách giấy tờ cần mang khi đi khám.'
  },
  {
    slug: 'so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi',
    title: 'Sổ sức khỏe điện tử VNeID cho người cao tuổi',
    desc: 'Cách dùng ứng dụng VNeID khi đi khám bệnh tại bệnh viện.'
  }
])}
</div>
`;

// BÀI 3: Khám sức khỏe miễn phí Hà Nội
const faqsNews3 = [
  {
    q: "Người cao tuổi ở Hà Nội khám sức khỏe miễn phí ở đâu?",
    a: "Chủ yếu qua trạm y tế phường, xã phối hợp với bệnh viện, theo lịch của từng khu dân cư; nên hỏi trạm y tế hoặc tổ dân phố để biết lịch cụ thể."
  },
  {
    q: "Khám sức khỏe miễn phí có kết quả bất thường thì làm gì?",
    a: "Nên đi khám chuyên khoa và xét nghiệm tiếp theo hướng dẫn, mang theo phiếu kết quả; không nên dừng lại ở phiếu khám sàng lọc."
  }
];

const contentNews3 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Hà Nội khám sức khỏe miễn phí toàn dân trong tháng 11: đừng để bố mẹ lỡ lượt khám</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Thông tin y tế tham khảo</p>
</header>

<div class="news"><strong>Tin mới:</strong> Hà Nội đặt mục tiêu hoàn thành khám sức khỏe toàn dân trong tháng 11/2026 (Hànộimới, 5/11/2026). Đến 28/9/2026, toàn thành phố mới khám được khoảng 37% đối tượng; nhóm học sinh đạt gần 98% nhưng người trưởng thành và người trong độ tuổi lao động còn chậm (Việt Báo, 17/10/2026). Theo chính sách chung, từ năm 2026 người cao tuổi được khám sức khỏe định kỳ miễn phí ít nhất mỗi năm một lần.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Người dân Hà Nội, trong đó có người cao tuổi, được khám sức khỏe định kỳ hoặc sàng lọc miễn phí năm 2026, chủ yếu qua <strong>trạm y tế phường, xã</strong> phối hợp với bệnh viện. Gia đình nên: (1) liên hệ trạm y tế hoặc tổ dân phố để biết lịch khám của khu dân cư; (2) chuẩn bị căn cước/VNeID, kết quả khám cũ, danh sách thuốc; (3) nếu kết quả có bất thường, <strong>đưa bố mẹ đi khám chuyên khoa</strong> theo hướng dẫn, đừng dừng ở phiếu kết quả.</div>

<h3>Sau khám: kết quả bất thường thì làm gì?</h3>
<div class="table-scroll">
<table>
  <tr><th>Kết quả hay gặp</th><th>Bước tiếp theo nên làm</th></tr>
  <tr><td>Huyết áp cao</td><td>Đo lại tại nhà nhiều ngày; khám tim mạch hoặc nội khoa</td></tr>
  <tr><td>Đường huyết cao</td><td>Xét nghiệm HbA1c, khám nội tiết chuyên sâu</td></tr>
  <tr><td>Mỡ máu, men gan, chức năng thận bất thường</td><td>Khám nội khoa, xét nghiệm lại theo chỉ định</td></tr>
  <tr><td>Phát hiện khối u, nốt bất thường trên siêu âm, X-quang</td><td>Khám chuyên khoa ung bướu sớm, không trì hoãn</td></tr>
</table>
</div>

${getMedicalCtaHtml('Đừng để bố mẹ lỡ lượt khám năm nay', 'Đồng hành đi khám của ANTCARE tại Hà Nội từ 390.000đ/3 giờ; Trợ lý Sức khỏe từ 990.000đ/tháng.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews3)}

${renderNewsRelatedBox([
  {
    slug: 'so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi',
    title: 'Sổ sức khỏe điện tử trên VNeID',
    desc: 'Liên thông kết quả khám sức khỏe vào hồ sơ điện tử.'
  },
  {
    slug: 'dang-ky-kham-bhyt-ban-dau-ha-noi-nguoi-cao-tuoi',
    title: 'Danh sách đăng ký BHYT ban đầu Hà Nội',
    desc: 'Lựa chọn nơi khám thuận tiện, gần nhà cho người cao tuổi.'
  },
  {
    slug: 'benh-vien-tim-ha-noi-co-so-2-dua-bo-me-di-kham',
    title: 'Bệnh viện Tim Hà Nội chuyển về Võ Chí Công',
    desc: 'Cơ sở 2 mới to đẹp, những lưu ý khi đưa bố mẹ đi khám tim.'
  }
])}
</div>
`;

// BÀI 4: Sổ sức khỏe điện tử VNeID
const faqsNews4 = [
  {
    q: "Sổ sức khỏe điện tử trên VNeID là gì?",
    a: "Là hồ sơ lưu thông tin khám chữa bệnh, khám sức khỏe định kỳ, sàng lọc của mỗi người, xem được trên ứng dụng VNeID; Hà Nội đặt mục tiêu mỗi người dân có một sổ từ 15/10/2026."
  },
  {
    q: "Đi khám có cần mang sổ sức khỏe giấy không?",
    a: "Nên mang căn cước hoặc VNeID và hồ sơ, kết quả cũ quan trọng để dự phòng, vì không phải dữ liệu nào cũng đã được liên thông đầy đủ."
  }
];

const contentNews4 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Sổ sức khỏe điện tử trên VNeID: con cái nên làm gì để bố mẹ dùng được khi đi khám?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Thông tin chuyển đổi số y tế</p>
</header>

<div class="news"><strong>Tin mới:</strong> Theo Kế hoạch 296/KH-UBND (30/7/2026), Hà Nội đặt mục tiêu đến ngày 15/10/2026 mỗi người dân có một Sổ sức khỏe điện tử trên VNeID; dữ liệu khám chữa bệnh, khám sức khỏe định kỳ, sàng lọc sẽ được liên thông về hồ sơ sức khỏe điện tử (An ninh Thủ đô). Thành phố cũng yêu cầu cập nhật hồ sơ sức khỏe điện tử song song với đợt khám sức khỏe toàn dân.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Sổ sức khỏe điện tử trên VNeID là nơi lưu thông tin khám chữa bệnh, khám sức khỏe của mỗi người, xem được trên ứng dụng VNeID. Với bố mẹ cao tuổi, con cái nên: (1) giúp bố mẹ kích hoạt VNeID mức 2 và kiểm tra mục sổ sức khỏe; (2) kiểm tra thông tin đã cập nhật sau mỗi lần khám; (3) vẫn mang theo căn cước và giấy tờ, hồ sơ cũ khi đi khám, vì không phải lần khám nào cũng đã liên thông đầy đủ.</div>

<h3>Checklist cho con cái</h3>
<ol>
  <li>Kiểm tra bố mẹ đã có tài khoản VNeID mức 2, đăng nhập được.</li>
  <li>Mở mục sổ sức khỏe điện tử, xem thông tin cơ bản và lần khám gần nhất.</li>
  <li>Tích hợp thẻ BHYT vào VNeID để đi khám không cần thẻ giấy.</li>
  <li>Chụp ảnh lưu kết quả các lần khám quan trọng vào thư mục chung của gia đình (dự phòng).</li>
  <li>Ghi lại tài khoản, cách đăng nhập ở nơi an toàn; dặn bố mẹ không cung cấp mã OTP cho người lạ.</li>
</ol>

${getMedicalCtaHtml('Đồng hành đi khám – ANTCARE', 'Kiến Y tế hỗ trợ thủ tục, VNeID, BHYT cho bố mẹ khi đi khám tại Hà Nội. Từ 390.000đ/3 giờ.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews4)}

${renderNewsRelatedBox([
  {
    slug: 'dang-ky-kham-bhyt-ban-dau-ha-noi-nguoi-cao-tuoi',
    title: 'Danh sách đăng ký BHYT ban đầu Hà Nội',
    desc: 'Lựa chọn nơi đăng ký BHYT phù hợp cho bố mẹ.'
  },
  {
    slug: 'kham-suc-khoe-mien-phi-ha-noi-nguoi-cao-tuoi',
    title: 'Khám sức khỏe toàn dân miễn phí tháng 11',
    desc: 'Cập nhật sổ sức khỏe điện tử từ đợt khám toàn dân.'
  },
  {
    slug: 'an-toan-nguoi-benh-tai-nhap-vien-nguoi-cao-tuoi',
    title: 'Bộ Y tế đo tái nhập viện trong 30 ngày',
    desc: 'Chăm sóc sau xuất viện để bố mẹ không phải quay lại viện.'
  }
])}
</div>
`;

// BÀI 5: Đăng ký BHYT ban đầu
const faqsNews5 = [
  {
    q: "Khi nào được đổi nơi đăng ký khám chữa bệnh BHYT ban đầu?",
    a: "Trong 15 ngày đầu của mỗi quý, tức hạn chót các ngày 15/1, 15/4, 15/7 và 15/10."
  },
  {
    q: "Nên chọn nơi khám BHYT ban đầu nào cho người cao tuổi?",
    a: "Nên chọn nơi gần nhà, có chuyên khoa bố mẹ thường khám, còn chỉ tiêu nhận thẻ và có điều kiện hỗ trợ người già như thang máy, xe lăn."
  }
];

const contentNews5 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Danh sách nơi khám BHYT ban đầu Hà Nội từ 15/10/2026: chọn nơi đăng ký nào cho bố mẹ cao tuổi?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Hướng dẫn thủ tục BHYT</p>
</header>

<div class="news"><strong>Tin mới:</strong> Danh sách cơ sở nhận đăng ký khám chữa bệnh BHYT ban đầu tại Hà Nội được cập nhật áp dụng từ 15/10/2026, căn cứ số thẻ đã đăng ký đến 14/10/2026 theo thông báo của BHXH Hà Nội. Cơ sở đã đủ số thẻ sẽ không nhận đăng ký mới; một số trạm y tế, phòng khám đã dừng khám BHYT từ giữa năm 2026.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Người tham gia BHYT được đổi nơi đăng ký khám chữa bệnh ban đầu vào <strong>15 ngày đầu mỗi quý</strong> (hạn 15/1, 15/4, 15/7, 15/10). Với bố mẹ cao tuổi, nên chọn nơi <strong>gần nhà, dễ đi lại</strong>, có chuyên khoa bố mẹ hay khám (nội, tim mạch, nội tiết) và <strong>còn chỉ tiêu nhận thẻ</strong>. Lần đổi gần nhất là trong 15 ngày đầu tháng 1/2027. Kiểm tra danh sách chính thức của BHXH Hà Nội trước khi đăng ký.</div>

<h3>Tiêu chí chọn nơi đăng ký cho bố mẹ</h3>
<div class="table-scroll">
<table>
  <tr><th>Tiêu chí</th><th>Câu hỏi nên tự hỏi</th></tr>
  <tr><td>Khoảng cách</td><td>Bố mẹ đi taxi, xe ôm mất bao lâu? Có cần qua đường đông?</td></tr>
  <tr><td>Chuyên khoa</td><td>Có khám nội, tim mạch, nội tiết, cơ xương khớp không?</td></tr>
  <tr><td>Chỉ tiêu thẻ</td><td>Cơ sở còn nhận đăng ký mới không (theo danh sách BHXH)?</td></tr>
  <tr><td>Cơ sở vật chất</td><td>Có thang máy, xe lăn, khu chờ cho người già không?</td></tr>
  <tr><td>Thói quen</td><td>Bố mẹ đã quen bác sĩ ở đâu chưa?</td></tr>
</table>
</div>

${getMedicalCtaHtml('Đồng hành đi khám – ANTCARE', 'Lo thủ tục BHYT, đi khám cùng bố mẹ tại Hà Nội và các tỉnh miền Bắc. Từ 390.000đ/3 giờ.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews5)}

${renderNewsRelatedBox([
  {
    slug: 'so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi',
    title: 'Sổ sức khỏe điện tử trên VNeID',
    desc: 'Tích hợp thẻ BHYT để đi khám không cần thẻ giấy.'
  },
  {
    slug: 'benh-vien-tim-ha-noi-co-so-2-dua-bo-me-di-kham',
    title: 'Bệnh viện Tim Hà Nội cơ sở 2 Võ Chí Công',
    desc: 'Lưu ý chuyển viện và khám tim tại cơ sở mới.'
  },
  {
    slug: 'quan-ly-tang-huyet-ap-tieu-duong-nguoi-cao-tuoi',
    title: 'Quản lý tăng huyết áp, tiểu đường',
    desc: 'Tái khám định kỳ và nhận thuốc BHYT đều đặn.'
  }
])}
</div>
`;

// BÀI 6: Bệnh viện Tim cơ sở 2
const faqsNews6 = [
  {
    q: "Bệnh viện Tim Hà Nội cơ sở 2 còn khám ở Lạc Long Quân không?",
    a: "Không. Từ 20/10/2026, cơ sở 2 khám tại tòa nhà mới số 103 Võ Chí Công; 695 Lạc Long Quân chỉ là địa điểm tạm từ 9/2024."
  },
  {
    q: "Đặt lịch khám Bệnh viện Tim Hà Nội bằng cách nào?",
    a: "Gọi tổng đài 1900 1082, đặt qua ứng dụng của bệnh viện trên Zalo hoặc qua website benhvientimhanoi.vn."
  }
];

const contentNews6 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Bệnh viện Tim Hà Nội cơ sở 2 chuyển về Võ Chí Công: lưu ý khi đưa bố mẹ đi khám tim</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Cẩm nang đi khám bệnh viện</p>
</header>

<div class="news"><strong>Tin mới:</strong> Ngày 20/10/2026, Bệnh viện Tim Hà Nội cơ sở 2 chính thức hoạt động tại tòa nhà mới số 103 Võ Chí Công (12 tầng nổi, 2 tầng hầm, 56 phòng khám, 300 giường), thay cho địa điểm khám tạm 695 Lạc Long Quân dùng từ 9/2024. Từ 2/10/2026, bệnh viện tổ chức lại cơ cấu sau sáp nhập Trung tâm Y tế Công nghiệp Hà Nội.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Từ 20/10/2026, người bệnh khám tại cơ sở 2 Bệnh viện Tim Hà Nội đến thẳng <strong>103 Võ Chí Công</strong>, không còn khám ở 695 Lạc Long Quân. Cơ sở 1 vẫn ở <strong>92 Trần Hưng Đạo</strong>. Trước khi đi, gọi tổng đài <strong>1900 1082</strong> hoặc đặt lịch qua Zalo của bệnh viện để biết chuyên khoa mình cần khám ở cơ sở nào, nhịn ăn nếu có xét nghiệm máu, mang theo kết quả cũ và toàn bộ thuốc đang dùng.</div>

<h3>Checklist trước khi đưa bố mẹ đến cơ sở mới</h3>
<ol>
  <li>Gọi 1900 1082 xác nhận chuyên khoa ở cơ sở 1 hay cơ sở 2.</li>
  <li>Đặt lịch trước (tổng đài hoặc Zalo của bệnh viện).</li>
  <li>Hỏi về nhịn ăn và cách dùng thuốc huyết áp, tiểu đường buổi sáng.</li>
  <li>Mang căn cước/VNeID, giấy chuyển viện hoặc giấy hẹn, kết quả cũ, giấy tờ đặt stent, thay van (nếu có).</li>
  <li>Mang toàn bộ thuốc đang dùng hoặc danh sách thuốc.</li>
  <li>Đi taxi đến thẳng sảnh; dự trù thời gian vì giờ cao điểm khu Võ Chí Công có thể đông.</li>
</ol>

${getMedicalCtaHtml('Đi khám tim cùng bố mẹ – ANTCARE', 'Đồng hành đi khám tại Bệnh viện Tim Hà Nội cả hai cơ sở. Từ 390.000đ/3 giờ; khám nhiều cận lâm sàng thường hợp gói 4–6 giờ.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews6)}

${renderNewsRelatedBox([
  {
    slug: 'mua-lanh-dot-quy-nguoi-cao-tuoi-kham-truoc',
    title: 'Mùa lạnh sắp đến: phòng ngừa đột quỵ & tim mạch',
    desc: 'Khám tim mạch và kiểm soát huyết áp trước mùa đông rét đậm.'
  },
  {
    slug: 'dang-ky-kham-bhyt-ban-dau-ha-noi-nguoi-cao-tuoi',
    title: 'Đăng ký BHYT ban đầu tại Hà Nội',
    desc: 'Thủ tục chuyển viện BHYT lên tuyến tim mạch.'
  },
  {
    slug: 'an-toan-nguoi-benh-tai-nhap-vien-nguoi-cao-tuoi',
    title: 'Phòng tái nhập viện ở người bệnh tim mạch',
    desc: 'Theo dõi thuốc và chế độ ăn nhạt sau xuất viện.'
  }
])}
</div>
`;

// BÀI 7: Tái nhập viện trong 30 ngày
const faqsNews7 = [
  {
    q: "Làm sao giảm nguy cơ người già phải nhập viện lại sau khi ra viện?",
    a: "Hiểu rõ giấy ra viện và đơn thuốc mới, cất riêng thuốc đã ngừng, theo dõi dấu hiệu cảnh báo hằng ngày, phòng ngã, ăn uống đủ và tái khám đúng hẹn; có người theo dõi chuyên môn trong 2–4 tuần đầu càng tốt."
  },
  {
    q: "Quyết định 3327/QĐ-BYT là gì?",
    a: "Là quyết định của Bộ Y tế về chương trình hành động quốc gia nâng cao chất lượng khám chữa bệnh và an toàn người bệnh giai đoạn 2026–2035, tầm nhìn 2045, với các chỉ số như trải nghiệm người bệnh và tái nhập viện trong 30 ngày."
  }
];

const contentNews7 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Bộ Y tế đo "tái nhập viện trong 30 ngày": gia đình làm gì để bố mẹ không phải quay lại viện?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Quản lý chất lượng & an toàn người bệnh</p>
</header>

<div class="news"><strong>Tin mới:</strong> Bộ Y tế ban hành Quyết định 3327/QĐ-BYT về chương trình hành động quốc gia nâng cao chất lượng khám chữa bệnh và an toàn người bệnh giai đoạn 2026–2035, tầm nhìn 2045. Chương trình đặt các chỉ số theo dõi như tỷ lệ người bệnh và người nhà đánh giá trải nghiệm tốt, tỷ lệ tái nhập viện không theo kế hoạch trong vòng 30 ngày sau ra viện.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Những tuần đầu sau ra viện là giai đoạn người cao tuổi dễ phải nhập viện lại, do thuốc thay đổi, cơ thể còn yếu, dễ ngã, dễ mất nước và bỏ lỡ tái khám. Để giảm nguy cơ, gia đình nên: (1) hiểu rõ giấy ra viện và đơn thuốc mới; (2) cất riêng thuốc đã ngừng; (3) theo dõi các dấu hiệu cảnh báo hằng ngày; (4) <strong>tái khám đúng hẹn</strong>; (5) có người theo dõi chuyên môn ghé nhà trong 2–4 tuần đầu.</div>

<h3>5 nguyên nhân hay gặp khiến người già phải nhập viện lại</h3>
<div class="table-scroll">
<table>
  <tr><th>Nguyên nhân</th><th>Cách phòng tránh</th></tr>
  <tr><td>Uống nhầm thuốc cũ và mới, uống trùng</td><td>Lập lại danh sách thuốc, chia hộp thuốc theo ngày, cất thuốc đã ngừng</td></tr>
  <tr><td>Bỏ lỡ lịch tái khám</td><td>Ghi lịch vào điện thoại cả nhà; sắp xếp người đưa đi trước</td></tr>
  <tr><td>Té ngã do còn yếu</td><td>Dọn lối đi, đèn ngủ, tay vịn nhà tắm; đứng dậy từ từ</td></tr>
  <tr><td>Mất nước, ăn kém</td><td>Chia nhỏ bữa, theo dõi lượng ăn uống theo hướng dẫn</td></tr>
  <tr><td>Dấu hiệu nặng lên không được phát hiện</td><td>Theo dõi nhiệt độ, huyết áp, nhịp thở, tinh thần hằng ngày</td></tr>
</table>
</div>

${getMedicalCtaHtml('Về nhà rồi, vẫn có người theo dõi', 'ANTCARE phục vụ Hà Nội và các tỉnh miền Bắc. Đặt trước ít nhất 1 ngày; nhận thanh toán từ nước ngoài.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews7)}

${renderNewsRelatedBox([
  {
    slug: 'quan-ly-tang-huyet-ap-tieu-duong-nguoi-cao-tuoi',
    title: 'Quản lý bệnh mạn tính sau ra viện',
    desc: 'Duy trì huyết áp, đường huyết ổn định tại nhà.'
  },
  {
    slug: 'gia-hoa-dan-so-ai-dua-bo-me-di-kham',
    title: 'Ai đưa bố mẹ đi tái khám khi con cái đi làm?',
    desc: 'Giải pháp đồng hành y tế chia sẻ gánh nặng gia đình.'
  },
  {
    slug: 'cum-a-nguoi-cao-tuoi-khi-nao-di-kham',
    title: 'Phòng ngừa nhiễm trùng hô hấp sau ra viện',
    desc: 'Bảo vệ người già trước nguy cơ cúm và bội nhiễm.'
  }
])}
</div>
`;

// BÀI 8: Quản lý tăng huyết áp, tiểu đường Bệnh viện Đức Giang
const faqsNews8 = [
  {
    q: "Người cao tuổi bị tăng huyết áp, tiểu đường bao lâu tái khám một lần?",
    a: "Theo hẹn của bác sĩ điều trị, thường từ hằng tháng đến vài tháng một lần; giữa các lần khám nên đo chỉ số tại nhà và ghi sổ."
  },
  {
    q: "Huyết áp ổn có được tự ngừng thuốc không?",
    a: "Không. Huyết áp ổn thường là nhờ thuốc; tự ngừng có thể làm huyết áp tăng trở lại. Mọi điều chỉnh thuốc cần bác sĩ quyết định."
  }
];

const contentNews8 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Bệnh viện Đức Giang triển khai mô hình quản lý tăng huyết áp, tiểu đường: vì sao tái khám đều quan trọng?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Quản lý bệnh không lây nhiễm</p>
</header>

<div class="news"><strong>Tin mới:</strong> Bệnh viện Đa khoa Đức Giang phối hợp Trường Đại học Y tế công cộng triển khai chương trình kiểm soát tăng huyết áp và đái tháo đường, đồng thời ra mắt góc tư vấn "Ngày đầu tiên" nhằm quản lý, điều trị tốt hơn hai bệnh này (Hànộimới, 6/11/2026). Theo số liệu được nêu tại một hội thảo y khoa, người từ 60 tuổi chiếm khoảng 42% số người mắc đái tháo đường và 59% số người bệnh tim mạch.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Tăng huyết áp và tiểu đường là bệnh mạn tính, cần điều trị và theo dõi lâu dài. Người cao tuổi nên: tái khám đúng hẹn để bác sĩ điều chỉnh thuốc; đo huyết áp, đường huyết tại nhà và ghi sổ; không tự ngừng thuốc khi "thấy khỏe"; khám biến chứng định kỳ (mắt, thận, tim, bàn chân). Gia đình có thể hỗ trợ bằng cách nhắc lịch, đưa đi tái khám và theo dõi chỉ số giữa các lần khám.</div>

<h3>Lịch theo dõi tham khảo</h3>
<div class="table-scroll">
<table>
  <tr><th>Nội dung</th><th>Tần suất khuyến nghị</th></tr>
  <tr><td>Đo huyết áp tại nhà</td><td>Sáng và tối hằng ngày, ghi sổ theo dõi</td></tr>
  <tr><td>Đo đường huyết tại nhà</td><td>Theo chỉ định, nhất là người tiêm insulin</td></tr>
  <tr><td>Tái khám, lấy thuốc</td><td>Theo hẹn của bác sĩ (thường hằng tháng)</td></tr>
  <tr><td>Xét nghiệm HbA1c (tiểu đường)</td><td>3–6 tháng một lần theo chỉ định</td></tr>
  <tr><td>Khám biến chứng mắt, thận, bàn chân</td><td>Định kỳ 6–12 tháng một lần</td></tr>
</table>
</div>

${getMedicalCtaHtml('Quản lý bệnh mạn tính cùng ANTCARE', 'Kết hợp Trợ lý Sức khỏe và Đồng hành đi khám để bố mẹ không bỏ lỡ lần tái khám nào.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews8)}

${renderNewsRelatedBox([
  {
    slug: 'mua-lanh-dot-quy-nguoi-cao-tuoi-kham-truoc',
    title: 'Mùa lạnh: kiểm soát huyết áp phòng đột quỵ',
    desc: 'Huyết áp dễ tăng vọt khi trời chuyển lạnh đột ngột.'
  },
  {
    slug: 'dang-ky-kham-bhyt-ban-dau-ha-noi-nguoi-cao-tuoi',
    title: 'Nhận thuốc mạn tính BHYT thuận tiện',
    desc: 'Đăng ký nơi khám BHYT gần nhà để lĩnh thuốc đều.'
  },
  {
    slug: 'an-toan-nguoi-benh-tai-nhap-vien-nguoi-cao-tuoi',
    title: 'Tránh nhập viện lại do quên thuốc mạn tính',
    desc: 'Hộp chia thuốc và theo dõi chỉ số sức khỏe tại nhà.'
  }
])}
</div>
`;

// BÀI 9: Già hóa dân số
const faqsNews9 = [
  {
    q: "Người cao tuổi chiếm bao nhiêu phần trăm dân số Việt Nam?",
    a: "Người từ 60 tuổi chiếm khoảng 15% dân số và được dự báo vượt 20% vào năm 2036, theo số liệu nêu tại hội thảo của Hội Lão khoa Việt Nam đầu tháng 11/2026."
  },
  {
    q: "Con đi làm thì ai đưa bố mẹ đi khám?",
    a: "Có thể nhờ người thân, giúp việc hoặc dùng dịch vụ đồng hành khám bệnh; với tái khám định kỳ, dịch vụ đồng hành giúp bố mẹ có người hiểu quy trình y tế đi cùng và gia đình nhận báo cáo đầy đủ."
  }
];

const contentNews9 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Việt Nam già hóa nhanh: con cái đi làm, ở xa, ai đưa bố mẹ đi khám?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Đời sống & Chăm sóc gia đình</p>
</header>

<div class="news"><strong>Tin mới:</strong> Người từ 60 tuổi hiện chiếm khoảng 15% dân số Việt Nam và được dự báo vượt 20% vào năm 2036. Nhóm này chiếm khoảng 59% người bệnh tim mạch, 55% ca đột quỵ, 66% ca bệnh phổi tắc nghẽn mạn tính và 42% người mắc đái tháo đường, theo số liệu nêu tại hội thảo của Hội Lão khoa Việt Nam.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Khi bố mẹ mắc nhiều bệnh mạn tính, số lần đi khám, tái khám mỗi năm rất lớn, trong khi con cái đi làm giờ hành chính hoặc sống xa. Các lựa chọn phổ biến: con xin nghỉ làm, nhờ người thân, nhờ giúp việc, để bố mẹ tự đi, hoặc dùng <strong>dịch vụ đồng hành khám bệnh</strong>. Với lịch tái khám định kỳ, dịch vụ đồng hành là cách bền vững: có người hiểu quy trình y tế đi cùng từ lúc đón đến lúc về, gia đình nhận báo cáo đầy đủ.</div>

<h3>So sánh các cách lo cho bố mẹ đi khám</h3>
<div class="table-scroll">
<table>
  <tr><th>Phương án</th><th>Ưu điểm / Phù hợp khi</th><th>Hạn chế</th></tr>
  <tr><td>Con xin nghỉ làm</td><td>Khám lần đầu, cần quyết định phẫu thuật lớn</td><td>Khó xin nghỉ nhiều lần với lịch tái khám định kỳ</td></tr>
  <tr><td>Nhờ người thân</td><td>Giải quyết tình thế đột xuất</td><td>Ngại làm phiền, người thân cũng bận công việc</td></tr>
  <tr><td>Nhờ người giúp việc</td><td>Khám gần nhà, đơn giản</td><td>Ít hiểu biết chuyên môn y tế, khó ghi chép đủ lời dặn</td></tr>
  <tr><td>Bố mẹ tự đi</td><td>Bố mẹ còn khỏe, minh mẫn</td><td>Dễ mệt mỏi, bỏ sót lời dặn bác sĩ, rủi ro té ngã</td></tr>
  <tr><td><strong>Dịch vụ đồng hành y tế</strong></td><td>Tái khám định kỳ, con bận rộn hoặc ở xa</td><td>Có chi phí dịch vụ, cần đặt lịch trước</td></tr>
</table>
</div>

${getMedicalCtaHtml('Bảng giá Đồng hành đi khám', '390.000đ/3 giờ · 490.000đ/4 giờ · 690.000đ/6 giờ · 790.000đ/8 giờ. Phục vụ chu đáo tại Hà Nội.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews9)}

${renderNewsRelatedBox([
  {
    slug: 'cum-a-nguoi-cao-tuoi-khi-nao-di-kham',
    title: 'Cúm A bùng phát mùa giao mùa',
    desc: 'Bảo vệ người cao tuổi có bệnh nền trước biến chứng suy hô hấp.'
  },
  {
    slug: 'mua-lanh-dot-quy-nguoi-cao-tuoi-kham-truoc',
    title: 'Phòng đột quỵ mùa lạnh ở người cao tuổi',
    desc: 'Tái khám tim mạch trước khi bước vào đợt rét mùa đông.'
  },
  {
    slug: 'quan-ly-tang-huyet-ap-tieu-duong-nguoi-cao-tuoi',
    title: 'Quản lý tăng huyết áp và tiểu đường',
    desc: 'Lên lịch tái khám định kỳ hàng tháng cho bố mẹ.'
  }
])}
</div>
`;

// BÀI 10: Mùa lạnh đột quỵ
const faqsNews10 = [
  {
    q: "Vì sao trời lạnh dễ bị đột quỵ?",
    a: "Nhiệt độ giảm đột ngột làm co mạch và tăng huyết áp, nhất là ở người cao tuổi có tăng huyết áp, bệnh tim mạch, từ đó tăng nguy cơ đột quỵ."
  },
  {
    q: "Dấu hiệu đột quỵ là gì?",
    a: "Méo miệng, yếu hoặc tê tay chân một bên, nói khó, mất thăng bằng, nhìn mờ đột ngột. Khi gặp các dấu hiệu này cần gọi 115 ngay và ghi lại thời điểm bắt đầu."
  }
];

const contentNews10 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Kiến chăm tổ · Tin y tế &amp; lời khuyên · Hà Nội</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Mùa lạnh sắp đến: đưa bố mẹ đi khám tim mạch, huyết áp trước để phòng đột quỵ</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Phòng ngừa tai biến mạch máu não</p>
</header>

<div class="news"><strong>Bối cảnh:</strong> Mùa đông năm trước, Khoa Đột quỵ Bệnh viện Trung ương Quân đội 108 từng quá tải bệnh nhân đột quỵ não khi trời rét, nhiều ca nặng có tăng huyết áp nhưng không tuân thủ điều trị (Hànộimới, 1/2026). Sở Y tế Hà Nội khi đó khuyến cáo người cao tuổi và người có bệnh tim mạch, tăng huyết áp hạn chế ra ngoài lúc rét đậm, giữ ấm và không tắm muộn sau 22 giờ. Hiện người từ 60 tuổi chiếm khoảng 55% số ca đột quỵ.</div>

<div class="answer"><strong>Trả lời nhanh:</strong> Trời lạnh làm mạch máu co lại, huyết áp dễ tăng đột ngột, làm tăng nguy cơ đột quỵ và biến cố tim mạch, nhất là ở người cao tuổi có tăng huyết áp. Trước mùa lạnh, nên: <strong>đưa bố mẹ tái khám</strong> để bác sĩ kiểm tra huyết áp, điều chỉnh thuốc; đo huyết áp tại nhà đều đặn; giữ ấm đầu, cổ, ngực; tránh ra ngoài đột ngột lúc sáng sớm; và nhớ dấu hiệu đột quỵ: <strong>méo miệng, yếu tay chân một bên, nói khó, mất thăng bằng, nhìn mờ đột ngột → gọi 115 ngay</strong>.</div>

<h3>Nhận biết đột quỵ và xử trí cấp bách (Quy tắc F.A.S.T)</h3>
<div class="table-scroll">
<table>
  <tr><th>Dấu hiệu nhận biết</th><th>Hành động tức thì</th></tr>
  <tr><td>Méo miệng, nụ cười bị lệch một bên</td><td rowspan="5"><strong>Gọi 115 ngay lập tức</strong>. Ghi nhớ thời điểm bắt đầu khởi phát triệu chứng. Tuyệt đối không cạo gió, chích máu đầu ngón tay hay cho uống bất kỳ thuốc gì trước khi bác sĩ thăm khám.</td></tr>
  <tr><td>Yếu, tê liệt tay hoặc chân một bên cơ thể</td></tr>
  <tr><td>Nói khó, nói ngọng, không diễn đạt được câu</td></tr>
  <tr><td>Mất thăng bằng, chóng mặt, hoa mắt đột ngột</td></tr>
  <tr><td>Nhìn mờ hoặc mất thị lực một mắt đột ngột</td></tr>
</table>
</div>

${getMedicalCtaHtml('Đặt lịch khám trước mùa lạnh cho bố mẹ', 'Phục vụ Hà Nội và các tỉnh miền Bắc; đặt trước ít nhất 1 ngày. Cấp cứu gọi 115.')}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsNews10)}

${renderNewsRelatedBox([
  {
    slug: 'benh-vien-tim-ha-noi-co-so-2-dua-bo-me-di-kham',
    title: 'Khám tim mạch Bệnh viện Tim cơ sở 2',
    desc: 'Chuyển về 103 Võ Chí Công với cơ sở vật chất hiện đại.'
  },
  {
    slug: 'cum-a-nguoi-cao-tuoi-khi-nao-di-kham',
    title: 'Cúm A và nguy cơ biến chứng tim mạch',
    desc: 'Virus cúm làm tăng gánh nặng lên hệ tim mạch của người cao tuổi.'
  },
  {
    slug: 'quan-ly-tang-huyet-ap-tieu-duong-nguoi-cao-tuoi',
    title: 'Quản lý huyết áp mùa lạnh tại nhà',
    desc: 'Lưu ý đo huyết áp đều đặn mỗi sáng và tối.'
  }
])}
</div>
`;

// Build the 10 articles
const news10Articles = [
  buildNewsArticle({
    id: 263,
    slug: 'cum-a-nguoi-cao-tuoi-khi-nao-di-kham',
    title: 'Cúm A tăng mạnh, nhiều người cao tuổi nhập viện: khi nào cần đưa bố mẹ đi khám ngay?',
    metaTitle: 'Cúm A ở người cao tuổi: khi nào cần đi viện ngay? | ANTCARE',
    description: 'Cúm A tăng mạnh cuối 2026, nhiều người cao tuổi nhập viện vì viêm phổi, suy hô hấp. Dấu hiệu cần đưa bố mẹ đi khám ngay và vì sao không nên tự dùng thuốc.',
    excerpt: 'Người cao tuổi bị cúm cần đi khám ngay khi có một trong các dấu hiệu: sốt không giảm, khó thở hoặc thở nhanh, đau tức ngực, lơ mơ hoặc lú lẫn, mệt lả, bỏ ăn. Người trên 65 tuổi có bệnh nền nên đi khám sớm từ những ngày đầu.',
    keywords: 'cúm A ở người cao tuổi, người già bị cúm A, cúm A khi nào cần nhập viện, dịch vụ đồng hành khám bệnh Hà Nội',
    image: '/images/kham-suc-khoe-mien-phi-2026.jpg',
    content: contentNews1,
    faqs: faqsNews1
  }),
  buildNewsArticle({
    id: 264,
    slug: 'sot-xuat-huyet-nguoi-cao-tuoi-ha-noi',
    title: 'Hà Nội cao điểm sốt xuất huyết: người cao tuổi có bệnh nền cần đi khám sớm thế nào?',
    metaTitle: 'Hà Nội cao điểm sốt xuất huyết: người cao tuổi cần đi khám sớm | ANTCARE',
    description: 'Hà Nội vào cao điểm sốt xuất huyết tháng 9–11/2026 với hàng trăm ca mỗi tuần. Vì sao người cao tuổi dễ biến chứng, dấu hiệu cần đi khám và theo dõi.',
    excerpt: 'Người cao tuổi bị sốt trong mùa sốt xuất huyết nên đi khám và xét nghiệm máu sớm, không tự điều trị ở nhà. Cảnh giác với giai đoạn từ ngày 3–7 dù đã hạ sốt vẫn có thể biến chứng nguy hiểm.',
    keywords: 'sốt xuất huyết người cao tuổi, sốt xuất huyết Hà Nội 2026, dấu hiệu sốt xuất huyết nặng, đưa người già đi khám',
    image: '/images/checklist-dua-bo-me-di-kham-benh-vien.jpg',
    content: contentNews2,
    faqs: faqsNews2
  }),
  buildNewsArticle({
    id: 265,
    slug: 'kham-suc-khoe-mien-phi-ha-noi-nguoi-cao-tuoi',
    title: 'Hà Nội khám sức khỏe miễn phí toàn dân trong tháng 11: đừng để bố mẹ lỡ lượt khám',
    metaTitle: 'Hà Nội khám sức khỏe miễn phí toàn dân tháng 11/2026 cho người cao tuổi | ANTCARE',
    description: 'Hà Nội quyết tâm hoàn thành khám sức khỏe miễn phí toàn dân trong tháng 11/2026. Người cao tuổi đi khám ở đâu, cần mang gì, kết quả bất thường thì làm gì.',
    excerpt: 'Người dân Hà Nội, trong đó có người cao tuổi, được khám sức khỏe định kỳ hoặc sàng lọc miễn phí năm 2026 qua trạm y tế phường, xã phối hợp với bệnh viện.',
    keywords: 'khám sức khỏe miễn phí Hà Nội 2026, khám sức khỏe định kỳ miễn phí người cao tuổi, khám sức khỏe toàn dân, đưa bố mẹ đi khám',
    image: '/images/kham-suc-khoe-mien-phi-2026.jpg',
    content: contentNews3,
    faqs: faqsNews3
  }),
  buildNewsArticle({
    id: 266,
    slug: 'so-suc-khoe-dien-tu-vneid-nguoi-cao-tuoi',
    title: 'Sổ sức khỏe điện tử trên VNeID: con cái nên làm gì để bố mẹ dùng được khi đi khám?',
    metaTitle: 'Sổ sức khỏe điện tử trên VNeID cho người cao tuổi khi đi khám | ANTCARE',
    description: 'Hà Nội đặt mục tiêu mỗi người dân có Sổ sức khỏe điện tử trên VNeID từ 15/10/2026. Con cái cần làm gì để bố mẹ dùng sổ khi đi khám, theo dõi bệnh.',
    excerpt: 'Sổ sức khỏe điện tử trên VNeID lưu trữ thông tin khám chữa bệnh và khám định kỳ. Checklist con cái cần làm: kích hoạt VNeID mức 2, tích hợp BHYT và dự phòng giấy tờ.',
    keywords: 'sổ sức khỏe điện tử VNeID, hồ sơ sức khỏe điện tử Hà Nội, cách xem sổ sức khỏe điện tử, đi khám bằng VNeID',
    image: '/images/tro-ly-theo-doi-suc-khoe-tai-nha-nguoi-cao-tuoi.jpg',
    content: contentNews4,
    faqs: faqsNews4
  }),
  buildNewsArticle({
    id: 267,
    slug: 'dang-ky-kham-bhyt-ban-dau-ha-noi-nguoi-cao-tuoi',
    title: 'Danh sách nơi khám BHYT ban đầu Hà Nội từ 15/10/2026: chọn nơi đăng ký nào cho bố mẹ cao tuổi?',
    metaTitle: 'Danh sách nơi đăng ký khám BHYT ban đầu Hà Nội từ 15/10/2026 | ANTCARE',
    description: 'Danh sách nơi đăng ký khám chữa bệnh BHYT ban đầu Hà Nội áp dụng từ 15/10/2026. Chọn nơi đăng ký nào cho bố mẹ cao tuổi, khi nào được đổi, lưu ý gì.',
    excerpt: 'Người tham gia BHYT được đổi nơi đăng ký khám chữa bệnh ban đầu vào 15 ngày đầu mỗi quý. Hướng dẫn chọn nơi gần nhà, có chuyên khoa phù hợp và còn chỉ tiêu nhận thẻ.',
    keywords: 'đăng ký khám chữa bệnh BHYT ban đầu Hà Nội, đổi nơi khám BHYT ban đầu, nơi khám BHYT cho người cao tuổi, khám BHYT Hà Nội',
    image: '/images/thu-tuc-bhyt.jpg',
    content: contentNews5,
    faqs: faqsNews5
  }),
  buildNewsArticle({
    id: 268,
    slug: 'benh-vien-tim-ha-noi-co-so-2-dua-bo-me-di-kham',
    title: 'Bệnh viện Tim Hà Nội cơ sở 2 chuyển về Võ Chí Công: lưu ý khi đưa bố mẹ đi khám tim',
    metaTitle: 'Bệnh viện Tim Hà Nội cơ sở 2 chuyển về 103 Võ Chí Công | ANTCARE',
    description: 'Bệnh viện Tim Hà Nội cơ sở 2 chuyển về tòa nhà mới 103 Võ Chí Công từ 20/10/2026. Gia đình cần biết gì khi đưa bố mẹ đi khám tim ở cơ sở mới.',
    excerpt: 'Từ 20/10/2026, cơ sở 2 Bệnh viện Tim Hà Nội chuyển hẳn về 103 Võ Chí Công, không còn khám ở Lạc Long Quân. Hướng dẫn đặt lịch 1900 1082 và kinh nghiệm đi khám tim mùa lạnh.',
    keywords: 'Bệnh viện Tim Hà Nội cơ sở 2 Võ Chí Công, khám tim cho người già Hà Nội, đưa bố mẹ đi khám Bệnh viện Tim, dịch vụ đi khám cùng',
    image: '/images/benh-vien-nguoi-cao-tuoi.jpg',
    content: contentNews6,
    faqs: faqsNews6
  }),
  buildNewsArticle({
    id: 269,
    slug: 'an-toan-nguoi-benh-tai-nhap-vien-nguoi-cao-tuoi',
    title: 'Bộ Y tế đo "tái nhập viện trong 30 ngày": gia đình làm gì để bố mẹ không phải quay lại viện?',
    metaTitle: 'Phòng ngừa tái nhập viện trong 30 ngày ở người cao tuổi | ANTCARE',
    description: 'Bộ Y tế đưa chỉ số tái nhập viện trong 30 ngày vào chương trình chất lượng khám chữa bệnh 2026–2035. Gia đình làm gì để bố mẹ không phải nhập viện lại.',
    excerpt: 'Bộ Y tế ban hành Quyết định 3327/QĐ-BYT với chỉ số tái nhập viện 30 ngày. 5 nguyên nhân hay gặp khiến người già phải quay lại viện và cách phòng tránh hiệu quả.',
    keywords: 'tái nhập viện ở người cao tuổi, chăm sóc sau xuất viện, an toàn người bệnh, trải nghiệm người bệnh, tái khám sau xuất viện',
    image: '/images/dong-hanh-tai-kham-benh-man-tinh-nguoi-cao-tuoi.jpg',
    content: contentNews7,
    faqs: faqsNews7
  }),
  buildNewsArticle({
    id: 270,
    slug: 'quan-ly-tang-huyet-ap-tieu-duong-nguoi-cao-tuoi',
    title: 'Bệnh viện Đức Giang triển khai mô hình quản lý tăng huyết áp, tiểu đường: vì sao tái khám đều quan trọng?',
    metaTitle: 'Mô hình quản lý tăng huyết áp, tiểu đường Bệnh viện Đức Giang | ANTCARE',
    description: 'Bệnh viện Đức Giang triển khai mô hình tư vấn, quản lý tăng huyết áp và đái tháo đường (11/2026). Vì sao người cao tuổi cần tái khám đều và gia đình hỗ trợ thế nào.',
    excerpt: 'Tăng huyết áp và tiểu đường cần điều trị và theo dõi liên tục. Hướng dẫn đo chỉ số tại nhà, lập lịch tái khám và không tự ngừng thuốc khi thấy khỏe.',
    keywords: 'quản lý tăng huyết áp tiểu đường người cao tuổi, tái khám định kỳ, bệnh mạn tính người già, đi khám cùng bố mẹ Hà Nội',
    image: '/images/bo-thiet-bi-cham-soc-suc-khoe-antcare.jpg',
    content: contentNews8,
    faqs: faqsNews8
  }),
  buildNewsArticle({
    id: 271,
    slug: 'gia-hoa-dan-so-ai-dua-bo-me-di-kham',
    title: 'Việt Nam già hóa nhanh: con cái đi làm, ở xa, ai đưa bố mẹ đi khám?',
    metaTitle: 'Việt Nam già hóa nhanh: ai đưa bố mẹ đi khám khi con bận rộn? | ANTCARE',
    description: 'Người từ 60 tuổi chiếm khoảng 15% dân số Việt Nam và sẽ vượt 20% năm 2036. Con cái đi làm, ở xa: ai đưa bố mẹ đi khám? Các lựa chọn và dịch vụ đồng hành khám bệnh.',
    excerpt: 'Người cao tuổi mắc nhiều bệnh mạn tính với số lần đi khám dày đặc mỗi năm. Phân tích ưu nhược điểm các giải pháp: con nghỉ làm, nhờ người thân, giúp việc hay dịch vụ đồng hành y tế.',
    keywords: 'già hóa dân số Việt Nam, chăm sóc bố mẹ già khi con đi làm, dịch vụ đưa người già đi khám, đi khám cùng tại Hà Nội',
    image: '/images/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia.jpg',
    content: contentNews9,
    faqs: faqsNews9
  }),
  buildNewsArticle({
    id: 272,
    slug: 'mua-lanh-dot-quy-nguoi-cao-tuoi-kham-truoc',
    title: 'Mùa lạnh sắp đến: đưa bố mẹ đi khám tim mạch, huyết áp trước để phòng đột quỵ',
    metaTitle: 'Phòng đột quỵ mùa lạnh ở người cao tuổi: khám tim mạch, huyết áp sớm | ANTCARE',
    description: 'Mùa lạnh 2026 đang đến, đột quỵ và biến cố tim mạch thường tăng khi trời rét. Người cao tuổi nên tái khám, kiểm soát huyết áp trước mùa đông thế nào.',
    excerpt: 'Trời lạnh làm co mạch và tăng huyết áp vọt, làm tăng nguy cơ đột quỵ ở người già. Checklist khám trước mùa đông, dấu hiệu đột quỵ méo miệng - yếu tay chân - nói khó gọi 115 ngay.',
    keywords: 'đột quỵ mùa lạnh người cao tuổi, phòng đột quỵ khi trời lạnh, dấu hiệu đột quỵ, khám huyết áp trước mùa đông',
    image: '/images/nghi-ngo-dot-quy-o-nguoi-cao-tuoi.jpg',
    content: contentNews10,
    faqs: faqsNews10
  })
];

// -------------------------------------------------------------------------
// MERGE ALL ARTICLES
// -------------------------------------------------------------------------
// 1. Base 253 articles from bakData
const baseArticles = bakData.list;

// Remove any duplicate slugs from baseArticles just in case
const newsSlugs = new Set(news10Articles.map(a => a.slug));
const camNangSlugs = new Set(camNangArticles.map(a => a.slug));

const cleanBaseArticles = baseArticles.filter(item => !newsSlugs.has(item.slug) && !camNangSlugs.has(item.slug));

// Combine:
// New 10 articles first (newest), then camNangArticles, then cleanBaseArticles
const mergedList = [
  ...news10Articles,
  ...camNangArticles,
  ...cleanBaseArticles
];

const finalNewsVi = {
  featured: bakData.featured, // original featured article
  list: mergedList
};

fs.writeFileSync(newsJsonCurrentPath, JSON.stringify(finalNewsVi, null, 2), 'utf8');

// Sync to news.en.json
const finalNewsEn = {
  featured: bakData.featured,
  list: mergedList.map(item => ({
    ...item,
    content: item.content
  }))
};
fs.writeFileSync(newsJsonEnPath, JSON.stringify(finalNewsEn, null, 2), 'utf8');

console.log('✅ Successfully merged all articles!');
console.log('Total articles in news.json:', finalNewsVi.list.length);
console.log('10 New medical news articles added:', news10Articles.length);
console.log('16 Menstrual & absorbent articles retained:', camNangArticles.length);
console.log('Base medical escort & elder care articles restored:', cleanBaseArticles.length);

