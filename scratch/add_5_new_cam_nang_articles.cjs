const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsEnJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const newsVi = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnJsonPath, 'utf8'));

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

// 3 authoritative sources for period underwear articles
const sources3Html = `
<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tài liệu y khoa tham khảo (3 nguồn hàng đầu)</h3>
  <ul>
    <li><a href="https://www.statnews.com/2023/08/07/period-products-menstrual-disc-new-study/" rel="nofollow" target="_blank">BMJ Sexual &amp; Reproductive Health &amp; STAT News (2023) – Thử nghiệm lâm sàng đo lường khả năng chứa thực tế của các dòng sản phẩm kinh nguyệt</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">The Conversation – Phân tích y khoa: Lượng máu kinh thực tế và giải pháp bảo vệ không lo tràn</a></li>
    <li><a href="https://www.jeanhailes.org.au/health-a-z/periods/period-products" rel="nofollow" target="_blank">Jean Hailes for Women's Health – Hướng dẫn toàn diện về các loại sản phẩm chăm sóc chu kỳ kinh nguyệt an toàn cho phụ nữ</a></li>
  </ul>
</section>
`;

// Helper for 3 Related Articles Box
function renderRelatedArticlesBox(currentSlug, allArticlesList) {
  const candidates = allArticlesList.filter(a => a.slug !== currentSlug);
  // Pick 3 related articles (prefer pillar or close topic)
  const related = candidates.slice(0, 3);

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
      <p class="text-[11px] text-[#5b5568] line-clamp-2 leading-relaxed">${item.description}</p>
    </a>\n`;
  });
  html += `  </div>
</div>
`;
  return html;
}

// Helper CTA button
const getCtaHtml = (title, desc) => `
<div class="cta">
  <h4 class="text-lg font-bold text-white mb-1">${title}</h4>
  <p class="text-sm text-purple-100 mb-3">${desc}</p>
  <a class="btn" href="/quan-lot-tham-hut">Xem quần kinh nguyệt ANTCARE</a>
  <a class="btn" href="tel:0969032360">Tư vấn miễn phí: 0969 032 360</a>
</div>
`;

// =========================================================================
// BÀI 1: Quần chống trào và quần kinh nguyệt khác nhau thế nào?
// =========================================================================
const content1 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Quần chống trào và quần kinh nguyệt khác nhau thế nào? Đừng nhầm hai loại này</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 7 phút · Thông tin tham khảo y khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> <strong>Quần chống trào</strong> (quần chống tràn) là quần lót có thêm lớp vải chống thấm ở đáy và mép quần để <strong>ngăn máu kinh tràn ra ngoài khi đang dùng băng vệ sinh</strong>; nó không có lõi thấm hút đáng kể, nên <strong>vẫn phải dùng kèm băng</strong>. <strong>Quần kinh nguyệt</strong> (quần nguyệt san) có cấu tạo nhiều lớp gồm lớp thoát ẩm, <strong>lõi thấm hút giữ máu kinh</strong> và lớp chống thấm, được thiết kế để <strong>thay thế băng vệ sinh</strong> khi chọn đúng mức thấm và thay đúng giờ. Nói ngắn gọn: quần chống trào là "áo mưa" cho băng vệ sinh, còn quần kinh nguyệt là "chính chiếc băng" được may vào quần.</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-quan-lot-thuong.jpg" alt="Quần lót chống trào thông thường chỉ có lớp chống thấm" class="w-full h-auto object-cover max-h-[260px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Quần chống trào: chỉ có lớp tráng nhựa chống thấm, bắt buộc phải dùng kèm băng</figcaption>
  </figure>
  <figure class="rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs">
    <img src="/images/products/so-sanh-quan-nguyet-san.jpg" alt="Quần kinh nguyệt ANTCARE có lõi thấm hút nhiều lớp thay thế băng" class="w-full h-auto object-cover max-h-[260px]" loading="lazy" />
    <figcaption class="p-2 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">Quần kinh nguyệt ANTCARE: tích hợp lõi vi sợi thấm hút 35–50ml, mặc trực tiếp</figcaption>
  </figure>
</div>

<h3>Vì sao người mua hay nhầm?</h3>
<p>Trên các sàn thương mại điện tử và mạng xã hội, nhiều sản phẩm được gắn tên "quần kinh nguyệt", "quần nguyệt san" nhưng thực chất chỉ là quần chống trào: đáy có thêm một lớp vải chống thấm, không ghi mức thấm, và hướng dẫn sử dụng vẫn là "dùng kèm băng vệ sinh". Người mua kỳ vọng bỏ được băng, mặc thử thì bị thấm ướt, lem ra ngoài, rồi kết luận "quần kinh nguyệt không dùng được". Thực ra họ chưa từng dùng quần kinh nguyệt đúng nghĩa.</p>

<h3>So sánh cấu tạo giữa 2 loại quần</h3>
<div class="table-scroll">
<table>
  <tr><th>Lớp</th><th>Quần chống trào</th><th>Quần kinh nguyệt (Period Underwear)</th></tr>
  <tr><td>Lớp tiếp xúc da</td><td>Cotton, thun lạnh như quần thường</td><td>Vải sợi tre / than hoạt tính thoát ẩm, kéo chất lỏng xuống nhanh, giữ bề mặt khô</td></tr>
  <tr><td>Lớp thấm hút</td><td><strong>Không có</strong> hoặc rất mỏng (không giữ được dịch)</td><td><strong>Lõi vi sợi nén mật độ cao</strong>, khóa chặt 35–50ml máu kinh</td></tr>
  <tr><td>Lớp chống thấm</td><td>Có màng nilon / TPU ở đáy</td><td>Màng nano TPU thở 1 chiều, chặn 100% nước nhưng thoát hơi ẩm mát mẻ</td></tr>
  <tr><td>Mức thấm công bố</td><td>Thường không có</td><td>Có rõ ràng: thấm nhẹ, vừa, nhiều (ghi bằng ml cụ thể)</td></tr>
  <tr><td>Hướng dẫn sử dụng</td><td>Bắt buộc dùng kèm băng vệ sinh</td><td>Dùng một mình thay thế băng, hoặc làm lớp dự phòng cho cốc, đĩa</td></tr>
</table>
</div>

<h3>So sánh công dụng và chi phí thực tế</h3>
<div class="table-scroll">
<table>
  <tr><th>Tiêu chí</th><th>Quần chống trào</th><th>Quần kinh nguyệt ANTCARE</th></tr>
  <tr><td>Thay được băng vệ sinh?</td><td><strong>Không</strong></td><td><strong>Có</strong>, khi chọn đúng mức thấm và thay đúng giờ</td></tr>
  <tr><td>Giảm rác thải nhựa</td><td>Không, vẫn dùng băng 1 lần</td><td>Có, giặt dùng lại bền bỉ 2–3 năm</td></tr>
  <tr><td>Giảm bí bách, ngứa hăm</td><td>Không, vẫn có băng dán keo và cánh băng</td><td>Có, êm ái như quần lót lụa, không keo, không hằn cộm</td></tr>
  <tr><td>Khả năng chống tràn mép</td><td>Khá (đây là công dụng chính)</td><td>Xuất sắc (nhất là thiết kế dáng boy short ôm đùi)</td></tr>
  <tr><td>Chi phí dài hạn</td><td>Mua quần + mua băng mỗi tháng</td><td>Tiết kiệm hơn 80% chi phí chu kỳ sau 6 tháng</td></tr>
</table>
</div>

<h3>Quần kinh nguyệt thay băng vệ sinh như thế nào?</h3>
<p>Một chiếc quần kinh nguyệt đúng nghĩa giữ máu kinh sâu trong lõi vi sợi, trong khi lớp trên cùng chạm vào da vẫn khô thoáng trong 1–2 giây. Bạn chọn mức thấm theo ngày (nhẹ cho ngày đầu, ngày cuối; nhiều cho ngày giữa và ban đêm), mặc trong thời gian khuyến cáo, rồi thay chiếc khác như thay đồ lót thông thường. Ngày ra rất nhiều, nhiều người thay giữa ngày hoặc kết hợp cốc, đĩa nguyệt san; người rong kinh, cường kinh nên đi khám y khoa. Nhưng với đa số chị em, ở phần lớn các ngày trong chu kỳ, quần kinh nguyệt dùng một mình là hoàn toàn đủ, không cần dán bất kỳ miếng băng nào.</p>

<h3>Vậy quần chống trào có vô dụng không?</h3>
<p>Không. Quần chống trào vẫn hữu ích cho người <strong>vẫn muốn dùng băng vệ sinh</strong> nhưng sợ xô lệch, tràn ra mép hoặc tràn ra sau lưng khi ngủ. Nó rẻ, dễ mua. Vấn đề chỉ là <strong>người bán cần gọi đúng tên</strong>: người mua cần biết mình đang mua lớp bảo hiểm phụ cho băng, không phải sản phẩm có thể bỏ băng vệ sinh.</p>

<h3>Ai nên dùng loại nào?</h3>
<ul>
  <li><strong>Quần chống trào:</strong> Phù hợp người quen dùng băng vệ sinh dày, chỉ muốn chống tràn ban đêm với ngân sách thấp.</li>
  <li><strong>Quần kinh nguyệt:</strong> Phù hợp người muốn bỏ băng hoàn toàn, da nhạy cảm hay bị hăm bí do băng vệ sinh, học sinh sợ lộ viền băng khi đi học, nhân viên văn phòng ngồi lâu, hoặc người dùng cốc/đĩa nguyệt san cần lớp bảo vệ an tâm tuyệt đối.</li>
</ul>

${getCtaHtml(
  'ANTCARE – Quần kinh nguyệt đúng nghĩa, không phải quần chống trào',
  'ANTCARE có cấu tạo 4 lớp bóc tách mỏng 2mm, lõi vi sợi khóa chặt 35–50ml chất lỏng, công bố mức thấm rõ ràng để bạn tự tin mặc thay thế băng vệ sinh suốt cả ngày.'
)}

${renderFaqAccordion([
  {
    q: 'Quần chống trào có thay được băng vệ sinh không?',
    a: '<p>Không. Quần chống trào chỉ có lớp chống thấm để ngăn máu tràn ra ngoài, hoàn toàn không có lõi thấm hút, nên bắt buộc vẫn phải dán kèm băng vệ sinh.</p>'
  },
  {
    q: 'Quần kinh nguyệt có thay hoàn toàn được băng vệ sinh không?',
    a: '<p>Có. Quần kinh nguyệt đúng nghĩa được thiết kế để thay thế hoàn toàn băng vệ sinh khi chọn đúng mức thấm và thời gian thay. Vào những ngày kinh nguyệt ra cực nhiều, bạn có thể thay giữa ngày hoặc mặc kèm cốc nguyệt san để nhân đôi độ bảo vệ.</p>'
  }
])}

<p class="note">Bài viết mang tính tham khảo y khoa. Nếu chu kỳ kinh nguyệt ra máu quá nhiều kéo dài trên 7 ngày hoặc có dấu hiệu chóng mặt, hãy thăm khám bác sĩ chuyên khoa phụ sản.</p>
</div>
`;

// =========================================================================
// BÀI 2: 7 cách nhận biết quần kinh nguyệt thật hay chỉ là quần chống trào khi mua online
// =========================================================================
const content2 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">7 cách nhận biết quần kinh nguyệt thật hay chỉ là quần chống trào khi mua online</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Hướng dẫn mua sắm thông minh</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Một chiếc quần kinh nguyệt đúng nghĩa thường có: (1) mô tả rõ <strong>lõi thấm hút</strong> và số lớp; (2) <strong>mức thấm cụ thể</strong> (thấm nhẹ/vừa/nhiều, tốt nhất ghi bằng ml); (3) hướng dẫn <strong>dùng thay băng vệ sinh</strong> và thời gian thay; (4) hướng dẫn giặt riêng (xả nước lạnh, không nước xả vải); (5) chứng nhận an toàn vải; (6) giá cao hơn quần lót thường rõ rệt; (7) đáy quần dày, đặt tay vào thấy có lõi. Nếu mô tả chỉ nói "chống tràn", "dùng kèm băng", không có mức thấm, đó là quần chống trào.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/minh-hoa-cau-tao-4-lop.jpg" alt="Minh họa cấu trúc 4 lớp công nghệ siêu mỏng 2mm quần kinh nguyệt ANTCARE" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Cấu trúc bóc tách 4 lớp: Tiêu chuẩn vàng nhận biết quần kinh nguyệt thật có lõi vi sợi nén mỏng thấm hút sâu.
  </figcaption>
</figure>

<h3>Checklist 7 điểm vàng khi đọc mô tả sản phẩm online</h3>
<div class="table-scroll">
<table>
  <tr><th>#</th><th>Tiêu chí kiểm tra</th><th>Quần kinh nguyệt thật</th><th>Quần chống trào đội lốt</th></tr>
  <tr><td>1</td><td>Cấu tạo đáy quần</td><td>Mô tả rõ 3–4 lớp: lớp thoát ẩm, lõi vi sợi thấm hút, màng nano chống thấm</td><td>Chỉ ghi chung chung "vải chống thấm", "vải chống tràn"</td></tr>
  <tr><td>2</td><td>Mức thấm công bố</td><td>Có số ml cụ thể (30ml, 40ml, 50ml) hoặc quy đổi số lượng tampon</td><td>Không ghi mức ml, lờ đi dung tích chứa</td></tr>
  <tr><td>3</td><td>Hướng dẫn sử dụng</td><td>Ghi rõ "mặc trực tiếp thay thế băng vệ sinh" và thời gian thay</td><td>Ghi "dùng cùng băng vệ sinh", "chống tràn khi đến tháng"</td></tr>
  <tr><td>4</td><td>Hướng dẫn giặt</td><td>Có quy trình giặt chuẩn: xả nước lạnh, không dùng nước xả vải, phơi khô tự nhiên</td><td>Ghi giặt như quần áo thông thường</td></tr>
  <tr><td>5</td><td>Chứng nhận an toàn</td><td>Cam kết không chứa hóa chất tẩy trắng huỳnh quang, không PFAS, an toàn da liễu</td><td>Thường không có chứng nhận kiểm nghiệm</td></tr>
  <tr><td>6</td><td>Mức giá</td><td>Từ 200.000đ – 450.000đ/chiếc do công nghệ dệt ép nhiệt đa tầng</td><td>Giá rất rẻ chỉ 30.000đ – 60.000đ ngang quần lót chợ</td></tr>
  <tr><td>7</td><td>Đánh giá thực tế</td><td>Khách hàng phản hồi mặc đi làm cả ngày khô thoáng không dùng băng</td><td>Khách hàng phàn nàn "mặc bị ướt sũng vì không thấm được gì"</td></tr>
</table>
</div>

<h3>Những câu hỏi nên hỏi thẳng người bán trước khi bấm đặt hàng</h3>
<ol>
  <li>Quần có lớp lõi thấm hút (absorbent core) chuyên dụng không, hay chỉ may thêm vải nilon chống thấm?</li>
  <li>Mức chứa tối đa của quần là bao nhiêu ml chất lỏng?</li>
  <li>Ngày ra kinh nguyệt trung bình thì quần có thể mặc liên tục trong bao nhiêu tiếng mà không cần dán băng?</li>
  <li>Vải có được kiểm nghiệm an toàn da liễu cho vùng kín nhạy cảm không?</li>
  <li>Sản phẩm giặt được khoảng bao nhiêu lần mà không bị suy giảm khả năng kháng khuẩn và thấm hút?</li>
</ol>

<h3>Cách tự thử nghiệm nhanh tại nhà khi nhận hàng</h3>
<ul>
  <li><strong>Sờ cảm quan vùng đáy:</strong> Quần kinh nguyệt thật có vùng đáy dày dặn, có độ êm đệm của sợi microfiber nén; quần chống trào sờ vào mỏng dính và nghe tiếng sột soạt của màng nilon.</li>
  <li><strong>Thử nghiệm rót nước:</strong> Đặt quần phẳng, rót từ từ 15–20ml nước sạch lên vùng đáy. Quần kinh nguyệt thật sẽ hút cạn chất lỏng trong vòng 2–3 giây, bề mặt sờ tay vào thấy ráo dần và mặt ngoài đáy hoàn toàn khô cong. Quần chống trào sẽ khiến nước đọng vũng trên bề mặt hoặc chảy tràn sang hai bên mép đùi.</li>
</ul>

<h3>Hiểu rõ các mức độ thấm hút để chọn đúng nhu cầu</h3>
<div class="table-scroll">
<table>
  <tr><th>Mức thấm</th><th>Dung tích tương đương</th><th>Thời điểm sử dụng tối ưu</th></tr>
  <tr><td>Thấm nhẹ (Light)</td><td>10–15ml (khoảng 1–2 tampon)</td><td>Ngày đầu, ngày cuối chu kỳ, khí hư nhiều, rỉ dịch nhẹ</td></tr>
  <tr><td>Thấm vừa (Medium)</td><td>20–30ml (khoảng 2–3 tampon)</td><td>Ngày kinh nguyệt thông thường, đi làm công sở, đi học</td></tr>
  <tr><td>Thấm nhiều (Heavy / Overnight)</td><td>35–50ml (khoảng 3–4 tampon)</td><td>Ngày ra nhiều nhất, mặc đi ngủ suốt đêm không lo tràn ga giường</td></tr>
</table>
</div>

<p>Kiểu dáng quần cũng đóng vai trò quyết định: ngay cả khi lõi thấm tốt, nếu quần cắt háng quá cao thì máu vẫn tràn ở mép khi ngủ. Do đó, dáng <a href="/cam-nang/quan-boy-short-ngay-kinh-nguyet" class="text-[#6633B4] font-bold underline">quần boy short</a> luôn là lựa chọn tối ưu nhất.</p>

${getCtaHtml(
  'ANTCARE – Minh bạch cấu tạo và cam kết chuẩn mực',
  'Quần lót thấm hút ANTCARE được kiểm định nghiêm ngặt, bóc tách 4 lớp rõ ràng với sức chứa 35–50ml, đảm bảo bạn đầu tư đúng sản phẩm thay thế băng vệ sinh chất lượng cao.'
)}

${renderFaqAccordion([
  {
    q: 'Làm sao biết quần kinh nguyệt mua online là thật?',
    a: '<p>Kiểm tra kỹ thông tin sản phẩm: có phân loại số lớp, có mức thấm tính bằng ml cụ thể, có cam kết thay thế băng vệ sinh và hướng dẫn giặt xả nước lạnh. Nếu chỉ ghi "chống tràn dùng cùng băng", đó chắc chắn là quần chống trào.</p>'
  },
  {
    q: 'Quần kinh nguyệt giá rẻ vài chục nghìn có tốt không?',
    a: '<p>Không nên mua. Quần kinh nguyệt thật đòi hỏi kỹ thuật dệt ép màng nano TPU thoáng khí và lõi vi sợi kháng khuẩn đắt tiền. Sản phẩm vài chục nghìn chỉ là vải nilon pha thô cứng, gây bí bách và ngứa ngáy vùng kín.</p>'
  }
])}

<p class="note">Bài viết mang tính tham khảo hướng dẫn tiêu dùng an toàn.</p>
</div>
`;

// =========================================================================
// BÀI 3: Các kiểu quần lót nữ phổ biến
// =========================================================================
const content3 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Các kiểu quần lót nữ phổ biến: thong, bikini, cạp cao, boy short, boxer… khác nhau thế nào?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Kiến thức thời trang & sức khỏe</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Có 7 kiểu quần lót nữ phổ biến: <strong>thong</strong> (lọt khe, gần như không che mông), <strong>bikini</strong> (cạp thấp, ống cắt cao), <strong>hipster</strong> (cạp ngang hông), <strong>brief</strong> (cổ điển, che mông đầy đủ), <strong>cạp cao</strong> (cạp đến eo hoặc trên rốn), <strong>boy short</strong> (dáng quần đùi ngắn, ống ngang đùi trên) và <strong>boxer</strong> (ống dài hơn, gần như quần short). Với ngày kinh nguyệt, <strong>boy short</strong> là kiểu cân bằng nhất: vùng đáy rộng, ống ôm đùi chặn tràn ở mép, che mông đầy đủ chống tràn ra sau khi ngủ, mà vẫn gọn dưới quần áo.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/hero-asian-seamless.jpg" alt="Các dáng quần lót nữ và kiểu dáng boy short liền mạch không lộ viền" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Quần lót dáng boy short seamless: Độ che phủ tối đa, không hằn mép háng và bảo vệ toàn diện trong ngày đèn đỏ.
  </figcaption>
</figure>

<h3>Bảng so sánh chi tiết 7 kiểu quần lót nữ phổ biến</h3>
<div class="table-scroll">
<table>
  <tr><th>Kiểu dáng</th><th>Đặc điểm nhận diện</th><th>Ưu điểm nổi bật</th><th>Nhược điểm</th><th>Phù hợp ngày kinh nguyệt?</th></tr>
  <tr><td><strong>Thong (Lọt khe)</strong></td><td>Phía sau chỉ là một sợi dây mảnh hoặc tam giác vải nhỏ</td><td>Tuyệt đối không lộ viền khi mặc quần legging hay váy ôm sát</td><td>Dễ cọ xát gây kích ứng, không giữ được băng</td><td><strong>Không phù hợp</strong></td></tr>
  <tr><td><strong>Bikini</strong></td><td>Cạp thấp dưới hông, ống khoét cao hai bên đùi</td><td>Gọn nhẹ, trẻ trung, thoáng mát</td><td>Đáy quần khá hẹp, dễ xô lệch khi di chuyển</td><td>Chỉ dùng ngày rất ít</td></tr>
  <tr><td><strong>Hipster</strong></td><td>Cạp ngang hông, đường ống cắt vừa phải</td><td>Ôm vừa vặn, thoải mái mặc hàng ngày</td><td>Có thể hằn viền nhẹ dưới đồ bó</td><td>Tạm ổn</td></tr>
  <tr><td><strong>Brief (Tam giác cổ điển)</strong></td><td>Cạp ngang rốn, che phủ 3/4 đến trọn mông</td><td>Độ che phủ tốt, giữ đáy cố định</td><td>Đường may nếp háng có thể gây tức khi ngồi lâu</td><td>Tốt</td></tr>
  <tr><td><strong>Cạp cao (High-waist)</strong></td><td>Cạp ôm chạm eo hoặc phủ qua rốn</td><td>Ôm gọn bụng dưới, nâng đỡ cơ sàn chậu sau sinh</td><td>Hơi nóng vào mùa hè oi bức</td><td>Rất tốt cho ban đêm</td></tr>
  <tr><td><strong>Boy short</strong></td><td>Dáng quần đùi ngắn, ống ôm ngang đùi trên</td><td>Che phủ trọn vẹn, không cứa nếp háng, chống cọ đùi, chống tràn mép xuất sắc</td><td>Có thể thấy đường viền ngang nếu mặc váy voan mỏng</td><td><strong>Tối ưu nhất</strong></td></tr>
  <tr><td><strong>Boxer nữ</strong></td><td>Ống dài gần như quần short thể thao</td><td>Bảo vệ kín đáo, thích hợp mặc ngủ</td><td>Dễ bị cuộn ống khi mặc trong quần jeans chật</td><td>Tốt khi ở nhà / ngủ</td></tr>
</table>
</div>

<h3>Gợi ý chọn kiểu quần lót theo trang phục hàng ngày</h3>
<div class="table-scroll">
<table>
  <tr><th>Trang phục bên ngoài</th><th>Kiểu quần lót khuyến nghị</th></tr>
  <tr><td>Váy bodycon, đầm dạ hội ôm sát</td><td>Quần thong không viền hoặc boy short seamless không đường may</td></tr>
  <tr><td>Váy xòe, chân váy ngắn xếp ly</td><td>Boy short (vừa là quần lót vừa đóng vai trò quần bảo hộ an toàn)</td></tr>
  <tr><td>Quần tây âu công sở, quần jeans</td><td>Hipster, brief hoặc boy short mềm mại</td></tr>
  <tr><td>Áo dài truyền thống</td><td>Boy short cạp cao màu nude/da tiệp màu cơ thể</td></tr>
  <tr><td>Trang phục tập gym, yoga</td><td>Boy short thể thao hoặc brief kháng khuẩn co giãn 4 chiều</td></tr>
</table>
</div>

<h3>Vị trí tràn kinh nguyệt và lý do boy short là "vị cứu tinh"</h3>
<p>Kinh nguyệt rò rỉ ra ngoài thường xảy ra ở 3 vị trí then chốt:</p>
<ul>
  <li><strong>Tràn mép háng:</strong> Xảy ra khi ngồi làm việc lâu, bắt chéo chân hoặc đi bộ nhiều. Quần tam giác có mép viền nằm đúng nếp gấp háng nên máu rất dễ rỉ ra quần ngoài. Boy short đưa mép quần xuống đùi trên nên chặn đứng đường tràn này.</li>
  <li><strong>Tràn ngược ra sau lưng:</strong> Xảy ra khi nằm ngửa lúc ngủ. Dáng boy short cho phép mở rộng dải thấm hút lên tận cạp sau mông.</li>
  <li><strong>Tràn hai bên hông:</strong> Xảy ra khi nằm nghiêng co chân. Thiết kế ôm trọn đùi của boy short giữ quần luôn áp sát cơ thể, không bị xô lệch dù bạn xoay trở mình nhiều lần trong đêm.</li>
</ul>

${getCtaHtml(
  'ANTCARE – Thiết kế dáng Boy Short chuẩn form phụ nữ Việt',
  'Quần nguyệt san ANTCARE định hình theo form boy short ôm trọn vòng mông, loại bỏ hoàn toàn nỗi lo tràn mép và hằn đường may dưới váy ôm.'
)}

${renderFaqAccordion([
  {
    q: 'Quần boy short là gì?',
    a: '<p>Quần boy short là kiểu quần lót nữ lấy cảm hứng từ quần short nam nhưng được may đo tôn đường cong nữ giới. Ống quần ôm ngang đùi trên thay vì cắt vát tam giác ở nếp háng, giúp che trọn mông và không gây hằn tì vết.</p>'
  },
  {
    q: 'Quần boy short và boxer nữ khác nhau thế nào?',
    a: '<p>Boy short có phần ống ngắn hơn, ôm sát ngang đùi trên nên mặc bên trong quần âu hay váy vẫn rất phẳng phiu, gọn gàng. Boxer nữ có ống dài hơn hẳn, phù hợp mặc ngủ ở nhà nhưng dễ bị cuộn ống khi mặc trong đồ ôm.</p>'
  }
])}

<p class="note">Bài viết mang tính tham khảo tổng hợp.</p>
</div>
`;

// =========================================================================
// BÀI 4: Vì sao quần boy short là kiểu quần lót tối ưu cho ngày kinh nguyệt?
// =========================================================================
const content4 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Vì sao quần boy short là kiểu quần lót tối ưu cho ngày kinh nguyệt?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Chuyên sâu giải pháp chống tràn</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Quần boy short là kiểu quần lót tối ưu cho ngày kinh nguyệt vì: (1) <strong>ống ôm ngang đùi</strong> nên mép quần nằm thấp hơn nếp háng, chặn được máu tràn ra mép khi ngồi, khép chân; (2) <strong>vùng đáy rộng và kéo dài về phía sau</strong>, che được vị trí hay tràn khi nằm ngủ; (3) <strong>che mông đầy đủ</strong>, ít xô lệch khi trở mình; (4) <strong>không hằn, không cọ</strong> vùng háng, giảm hăm; (5) chống cọ đùi khi mặc váy. Với quần kinh nguyệt, dáng boy short cho phép bố trí vùng thấm rộng nhất mà vẫn gọn dưới quần áo.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/quan-lot-tham-hut.jpg" alt="Quần lót thấm hút ANTCARE dáng boy short chống tràn toàn diện" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Vùng đáy mở rộng và ống ôm đùi của dáng boy short giúp bảo vệ tối đa 360 độ trong chu kỳ kinh nguyệt.
  </figcaption>
</figure>

<h3>3 vị trí hiểm hóc hay rò rỉ máu kinh và cách boy short hóa giải</h3>
<div class="table-scroll">
<table>
  <tr><th>Vị trí tràn</th><th>Hoàn cảnh xuất hiện</th><th>Quần tam giác thông thường</th><th>Quần kinh nguyệt Boy Short</th></tr>
  <tr><td><strong>Mép nếp háng</strong></td><td>Ngồi làm việc văn phòng, đi xe máy, khép chân</td><td>Viền thun cứa sát nếp háng, băng bị nhăn mép làm máu rỉ thẳng ra ngoài</td><td>Ống quần phủ qua nếp háng, dải chống thấm ôm kín đùi trên chặn đứng rò rỉ</td></tr>
  <tr><td><strong>Đáy sau & rãnh mông</strong></td><td>Nằm ngủ ban đêm, trở mình ngửa - nghiêng</td><td>Vùng đáy ngắn, máu kinh chảy theo rãnh mông làm bẩn ga đệm</td><td>Lõi thấm được kéo dài từ trước ra tận cạp sau lưng, thấm trọn vẹn</td></tr>
  <tr><td><strong>Hai bên cánh hông</strong></td><td>Nằm nghiêng, co chân</td><td>Cắt cao để hở khoảng trống lớn</td><td>Ống ôm liền khối nâng đỡ, không tạo khe hở rò rỉ</td></tr>
</table>
</div>

<h3>5 lý do chị em hiện đại chuyển sang quần boy short ngày đèn đỏ</h3>
<ol>
  <li><strong>Khả năng khóa tràn mép vượt trội:</strong> Ống quần ôm sát đùi trên đóng vai trò như một đê chắn tự nhiên, giữ toàn bộ chất lỏng bên trong phạm vi lõi thấm.</li>
  <li><strong>Diện tích lõi thấm hút rộng gấp 3 lần:</strong> Dáng boy short cung cấp bề mặt đáy lớn nhất trong các dòng đồ lót nữ, cho phép tích hợp lõi vi sợi chứa tới 35–50ml.</li>
  <li><strong>Giấc ngủ ngon không gián đoạn:</strong> Ôm khít cơ thể, không bị xoắn đáy hay lún mông khi trở mình, loại bỏ cảm giác bất an nửa đêm phải thức dậy kiểm tra ga giường.</li>
  <li><strong>Triệt tiêu cọ xát và hăm da:</strong> Không có đường may thô ráp cọ vào nếp gấp bẹn nhạy cảm, đồng thời ngăn hiện tượng rát da do hai đùi ma sát vào nhau khi đi bộ.</li>
  <li><strong>Tâm lý tự do, tự tin 100%:</strong> Khi mặc váy ngắn hay đồng phục, boy short đóng vai trò như chiếc quần bảo hộ kín đáo, giúp phái nữ tự tin sải bước.</li>
</ol>

<h3>Ai là người nên sở hữu ngay quần boy short kinh nguyệt?</h3>
<ul>
  <li><strong>Nữ sinh, sinh viên:</strong> Ngồi học liên tục nhiều giờ trên giảng đường, mặc váy đồng phục sợ sự cố tràn băng khó xử.</li>
  <li><strong>Chị em công sở:</strong> Ngồi máy tính từ 8–10 tiếng mỗi ngày, ít có thời gian chạy vào nhà vệ sinh thay băng.</li>
  <li><strong>Mẹ sau sinh & phụ nữ tiền mãn kinh:</strong> Thường xuyên gặp tình trạng sản dịch nhiều hoặc rỉ tiểu không tự chủ khi hắt hơi, cười lớn.</li>
  <li><strong>Người dùng cốc/đĩa nguyệt san:</strong> Cần một lớp lót dự phòng an tâm tuyệt đối trong những ngày kinh ra nhiều.</li>
</ul>

${getCtaHtml(
  'Trải nghiệm chiếc quần Boy Short kinh nguyệt ANTCARE',
  'Thiết kế thông minh ôm trọn vòng mông, vải modal mềm như lụa, khóa ẩm 35–50ml giúp bạn quên đi nỗi ám ảnh ngày đèn đỏ.'
)}

${renderFaqAccordion([
  {
    q: 'Ngày kinh nguyệt nên mặc quần lót kiểu gì an toàn nhất?',
    a: '<p>Nên ưu tiên kiểu quần có độ che phủ tốt và ôm sát đùi như boy short hoặc cạp cao. Trong đó dáng boy short là hoàn hảo nhất vì khắc phục triệt để điểm yếu tràn ở mép háng của quần tam giác cổ điển.</p>'
  },
  {
    q: 'Ban đêm đến tháng mặc gì để không bị tràn ra ga giường?',
    a: '<p>Lựa chọn tối ưu nhất là một chiếc quần kinh nguyệt dáng boy short thấm nhiều (sức chứa 40–50ml), hoặc kết hợp cốc/đĩa nguyệt san cùng chiếc quần lót thấm hút làm lớp bảo vệ ngoài cùng.</p>'
  }
])}

<p class="note">Bài viết mang tính tham khảo chăm sóc sức khỏe phụ nữ.</p>
</div>
`;

// =========================================================================
// BÀI 5: Cách chọn quần lót nữ đúng
// =========================================================================
const content5 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cách chọn quần lót nữ đúng: size, chất liệu, kiểu dáng và khi nào cần thay mới</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Cẩm nang sức khỏe phụ khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Chọn quần lót nữ theo 5 bước: (1) <strong>đo vòng hông</strong> và chọn size theo bảng của hãng, không mặc quá chật; (2) chọn <strong>chất liệu thoáng</strong>, ít nhất phần đáy là cotton hoặc vải thoát ẩm; (3) chọn <strong>kiểu dáng</strong> theo hoàn cảnh: đi làm, thể thao, ngủ, ngày kinh nguyệt; (4) kiểm tra <strong>đường may, cạp, mép ống</strong> không hằn, không cọ; (5) <strong>thay quần lót định kỳ</strong> khi vải giãn, xù, bạc màu. Với ngày kinh nguyệt, chọn quần kinh nguyệt dáng <strong>boy short</strong> có lõi thấm rõ ràng.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/banner_7.jpg" alt="Chăm sóc sức khỏe phụ nữ qua việc chọn đúng quần lót" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Chọn quần lót đúng chất liệu và kích cỡ là yếu tố cốt lõi bảo vệ hệ vi sinh vùng kín và ngăn ngừa viêm nhiễm phụ khoa.
  </figcaption>
</figure>

<h3>Quy trình 5 bước chọn quần lót nữ chuẩn y khoa</h3>

<h4>Bước 1: Chọn size dựa trên số đo vòng hông thực tế</h4>
<ul>
  <li>Dùng thước dây mềm đo phần nở nhất của mông khi đứng thẳng, thước dây áp sát nhưng không thít chặt vào da.</li>
  <li>Đối chiếu với bảng kích cỡ riêng của từng thương hiệu, không mặc định size S/M/L giữa các hãng giống nhau.</li>
  <li><strong>Dấu hiệu quần bị chật:</strong> Để lại vệt hằn đỏ ở hông, cạp bị cuộn gập xuống bụng dưới, đáy quần cứa vào khe bẹn. Mặc quần chật làm ứ trệ tuần hoàn máu và tạo môi trường yếm khí sinh sôi nấm ngứa.</li>
  <li><strong>Dấu hiệu quần bị rộng:</strong> Đáy quần võng xuống, ống đùi bị hở rộng, quần bị xoắn lệch khi vận động. Với quần kinh nguyệt, quần rộng sẽ làm hở mép khiến chất lỏng dễ rò rỉ.</li>
</ul>

<h4>Bước 2: Ưu tiên chất liệu tự nhiên và thông thoáng</h4>
<div class="table-scroll">
<table>
  <tr><th>Chất liệu</th><th>Đặc tính nổi bật</th><th>Khuyến cáo sử dụng</th></tr>
  <tr><td>Sợi tre (Bamboo) / Modal</td><td>Mềm mượt, kháng khuẩn tự nhiên, hút ẩm gấp 3 lần cotton, mát lạnh</td><td>Rất tốt cho da nhạy cảm và quần kinh nguyệt</td></tr>
  <tr><td>Cotton tự nhiên</td><td>Thấm hút mồ hôi, lành tính, thoáng khí</td><td>Lý tưởng cho quần lót mặc hàng ngày</td></tr>
  <tr><td>Thun lạnh Seamless</td><td>Co giãn 4 chiều, mịn như lụa, không lộ đường may</td><td>Mặc cùng váy ôm bó sát; cần có đáy lót vải thoáng</td></tr>
  <tr><td>Vải ren tổng hợp</td><td>Tăng vẻ quyến rũ, thẩm mỹ cao</td><td>Chỉ mặc dịp đặc biệt, tránh mặc thường xuyên hay đi ngủ</td></tr>
</table>
</div>

<h4>Bước 3: Chọn kiểu dáng tương ứng với từng hoàn cảnh</h4>
<ul>
  <li><strong>Đi làm văn phòng / Đi học:</strong> Hipster hoặc Boy short mềm mại, êm ái khi ngồi ghế lâu.</li>
  <li><strong>Vận động thể thao / Gym:</strong> Brief vải thể thao co giãn hoặc Boy short chống cọ xát cơ đùi.</li>
  <li><strong>Giấc ngủ ban đêm:</strong> Boy short lụa hoặc cạp cao dáng rộng để cơ thể thả lỏng tối đa.</li>
  <li><strong>Ngày kinh nguyệt:</strong> <strong>Quần kinh nguyệt chuyên dụng dáng Boy Short</strong> với lõi thấm hút nhiều lớp tích hợp sẵn.</li>
</ul>

<h4>Bước 4: Kiểm tra kỹ thuật may và nhãn mác</h4>
<ul>
  <li>Đường may vùng đáy phẳng mịn (Flatlock), không có gờ cộm gây trầy xước niêm mạc da.</li>
  <li>Cạp thun mềm mại, đàn hồi tốt, không bị giãn nhão sau vài lần giặt.</li>
  <li>Ưu tiên nhãn ép nhiệt in trực tiếp lên vải thay vì may thẻ mác vải cọ ngứa vào lưng.</li>
</ul>

<h4>Bước 5: Vệ sinh khoa học và thay mới định kỳ</h4>
<ul>
  <li>Thay quần lót tối thiểu 1 lần/ngày; sau khi tập thể dục ra mồ hôi nên thay và vệ sinh ngay.</li>
  <li>Giặt đồ lót bằng nước ấm hoặc nước lạnh cùng xà phòng dịu nhẹ, phơi tại nơi có ánh nắng mặt trời và thông gió tự nhiên.</li>
  <li><strong>Bao lâu nên thay mới:</strong> Nên thay toàn bộ lô quần lót sau mỗi <strong>6 – 12 tháng</strong>. Dù quần trông còn mới nhưng sau 50–100 chu kỳ giặt, sợi vải tích tụ vi khuẩn vô hình và mất dần tính đàn hồi.</li>
</ul>

<h3>6 sai lầm phổ biến chị em cần từ bỏ ngay</h3>
<ol>
  <li>Cố tình mua size nhỏ hơn để ôm bó cho "gọn bụng".</li>
  <li>Mặc quần lọt khe liên tục cả ngày lẫn đêm khiến vi khuẩn từ hậu môn dễ lây lan sang vùng âm đạo.</li>
  <li>Lạm dụng nước xả vải có mùi thơm nồng nặc để giặt đồ lót, dễ gây dị ứng niêm mạc.</li>
  <li>Tiếc của giữ lại quần lót đã ố vàng đáy hoặc sờn rách cạp thun quá lâu.</li>
  <li>Mua nhầm quần chống trào giá rẻ rồi thất vọng vì nghĩ đó là quần kinh nguyệt.</li>
</ol>

${getCtaHtml(
  'Chọn quần kinh nguyệt ANTCARE – Chuẩn form dáng phụ nữ Việt',
  'Thiết kế chuẩn công thái học, chất liệu kháng khuẩn cao cấp bảo vệ an toàn tối đa cho vùng kín của bạn trong mọi chu kỳ.'
)}

${renderFaqAccordion([
  {
    q: 'Quần lót nữ bằng chất liệu nào là tốt nhất cho sức khỏe?',
    a: '<p>Chất liệu tốt nhất cho vùng kín là vải sợi tre hữu cơ hoặc cotton thiên nhiên, đặc biệt ở vùng đáy phải đảm bảo độ thoáng khí tuyệt đối để cân bằng độ pH tự nhiên.</p>'
  },
  {
    q: 'Bao lâu thì chị em phụ nữ nên thay toàn bộ quần lót mới?',
    a: '<p>Theo khuyến cáo của các chuyên gia sản phụ khoa, bạn nên thay mới tủ đồ lót định kỳ từ 6 đến 12 tháng một lần, hoặc ngay khi phát hiện vải bị bai giãn, ố đáy hay sờn rách.</p>'
  }
])}

<p class="note">Bài viết mang tính tham khảo y tế dự phòng. Hãy gặp bác sĩ phụ khoa định kỳ 6 tháng/lần để bảo vệ sức khỏe sinh sản.</p>
</div>
`;

// =========================================================================
// ASSEMBLE 5 NEW ARTICLES
// =========================================================================
const newArticles = [
  {
    id: 7,
    title: 'Quần chống trào và quần kinh nguyệt khác nhau thế nào? Đừng nhầm hai loại này',
    slug: 'phan-biet-quan-chong-trao-va-quan-kinh-nguyet',
    category: 'Cẩm nang',
    date: '29/10/2026',
    author: 'ANTCARE – Kiến chăm tổ',
    image: '/images/products/so-sanh-quan-nguyet-san.jpg',
    description: 'Quần chống trào và quần kinh nguyệt khác nhau thế nào? So sánh cấu tạo, khả năng thấm, có thay được băng vệ sinh không, ai nên dùng loại nào.',
    keywords: 'quần chống trào và quần kinh nguyệt khác nhau thế nào, phân biệt quần chống trào và quần kinh nguyệt',
    content: content1
  },
  {
    id: 8,
    title: '7 cách nhận biết quần kinh nguyệt thật hay chỉ là quần chống trào khi mua online',
    slug: 'cach-nhan-biet-quan-kinh-nguyet-that',
    category: 'Cẩm nang',
    date: '29/10/2026',
    author: 'ANTCARE – Kiến chăm tổ',
    image: '/images/products/minh-hoa-cau-tao-4-lop.jpg',
    description: '7 cách nhận biết quần kinh nguyệt thật hay chỉ là quần chống trào khi mua online: số lớp, mức thấm ml, hướng dẫn sử dụng, chứng nhận, cách tự thử ở nhà.',
    keywords: 'cách nhận biết quần kinh nguyệt, quần nguyệt san thật giả, mua quần kinh nguyệt online',
    content: content2
  },
  {
    id: 9,
    title: 'Các kiểu quần lót nữ phổ biến: thong, bikini, cạp cao, boy short, boxer… khác nhau thế nào?',
    slug: 'cac-kieu-quan-lot-nu',
    category: 'Cẩm nang',
    date: '29/10/2026',
    author: 'ANTCARE – Kiến chăm tổ',
    image: '/images/products/hero-asian-seamless.jpg',
    description: 'Các kiểu quần lót nữ phổ biến: thong, bikini, brief, hipster, cạp cao, boy short, boxer. Đặc điểm, ưu nhược điểm, mặc với trang phục gì và kiểu nào hợp ngày đèn đỏ.',
    keywords: 'các kiểu quần lót nữ, quần boy short, quần lót bikini, quần lót cạp cao',
    content: content3
  },
  {
    id: 10,
    title: 'Vì sao quần boy short là kiểu quần lót tối ưu cho ngày kinh nguyệt?',
    slug: 'quan-boy-short-ngay-kinh-nguyet',
    category: 'Cẩm nang',
    date: '29/10/2026',
    author: 'ANTCARE – Kiến chăm tổ',
    image: '/images/products/quan-lot-tham-hut.jpg',
    description: 'Vì sao quần boy short là kiểu quần lót tối ưu cho ngày kinh nguyệt: chặn tràn ở mép háng, vùng thấm rộng về phía sau, ngủ không lo tràn, chống cọ đùi.',
    keywords: 'quần boy short, quần boy short ngày kinh nguyệt, quần kinh nguyệt boy short, chống tràn ban đêm',
    content: content4
  },
  {
    id: 11,
    title: 'Cách chọn quần lót nữ đúng: size, chất liệu, kiểu dáng và khi nào cần thay mới',
    slug: 'cach-chon-quan-lot-nu',
    category: 'Cẩm nang',
    date: '29/10/2026',
    author: 'ANTCARE – Kiến chăm tổ',
    image: '/images/products/banner_7.jpg',
    description: 'Cách chọn quần lót nữ đúng: size, chất liệu cotton, thun lạnh, modal, đường may, màu sắc, theo dáng người và hoàn cảnh; cách chọn quần kinh nguyệt boy short.',
    keywords: 'cách chọn quần lót nữ, size quần lót nữ, chất liệu quần lót tốt, bao lâu nên thay quần lót',
    content: content5
  }
];

// Append sources & 3 related articles box to each new article
const all11List = [...newsVi.list.filter(x => !newArticles.some(na => na.slug === x.slug)), ...newArticles];

newArticles.forEach(item => {
  item.content += sources3Html + renderRelatedArticlesBox(item.slug, all11List);
});

// Filter out old versions if any, keep existing 6 articles
const existingList = newsVi.list.filter(x => !newArticles.some(na => na.slug === x.slug));

// Combine
newsVi.list = [...existingList, ...newArticles];

// Make sure the pinned article remains first in list and featured!
const pinnedIdx = newsVi.list.findIndex(item => item.slug === 'ngay-kinh-nguyet-nen-dung-gi');
if (pinnedIdx > -1) {
  const [pinned] = newsVi.list.splice(pinnedIdx, 1);
  pinned.isPinned = true;
  newsVi.list.unshift(pinned);
  newsVi.featured = pinned;
}

fs.writeFileSync(newsJsonPath, JSON.stringify(newsVi, null, 2), 'utf8');

// Synchronize with news.en.json
newsEn.list = newsVi.list.map((item, idx) => {
  return {
    ...item,
    content: item.content
  };
});
newsEn.featured = newsVi.featured;

fs.writeFileSync(newsEnJsonPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('✅ Successfully added 5 new articles! Total articles in list:', newsVi.list.length);
console.log('Pinned featured article:', newsVi.featured.slug);

