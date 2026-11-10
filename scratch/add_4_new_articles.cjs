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

// Helper CTA button
const getCtaHtml = (title, desc) => `
<div class="cta">
  <h4 class="text-lg font-bold text-white mb-1">${title}</h4>
  <p class="text-sm text-purple-100 mb-3">${desc}</p>
  <a class="btn" href="/quan-lot-tham-hut">Tìm hiểu quần thấm hút ANTCARE</a>
  <a class="btn" href="tel:0969032360">Tư vấn miễn phí: 0969 032 360</a>
</div>
`;

// Helper for 3 Related Articles Box
function renderRelatedArticlesBox(relatedItems) {
  let html = `
<div class="related-articles-box my-8 p-5 bg-[#FAF8FD] rounded-2xl border border-[#E6DFF2]">
  <h4 class="font-bold text-[#6633B4] mb-3.5 flex items-center gap-2 text-sm sm:text-base">
    <span class="material-symbols-outlined text-base text-[#FD711A]">menu_book</span>
    <span>Bài viết tham khảo cùng chuyên mục (3 bài chọn lọc)</span>
  </h4>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
`;
  relatedItems.forEach(item => {
    html += `    <a href="/kinh-nguyet/${item.slug}" class="block p-3.5 rounded-xl bg-white border border-[#E6DFF2]/80 hover:border-[#6633B4] hover:shadow-xs transition-all group">
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
// BÀI 1: Cách giặt quần kinh nguyệt và quần chống són tiểu đúng cách
// -------------------------------------------------------------------------
const faqsArticle1 = [
  {
    q: "Quần kinh nguyệt giặt máy được không?",
    a: "Được, nếu xả nước lạnh trước, cho vào túi giặt, chọn chế độ giặt nhẹ nước lạnh và không dùng nước xả vải, thuốc tẩy. Luôn kiểm tra hướng dẫn của hãng."
  },
  {
    q: "Vì sao không được dùng nước xả vải cho quần kinh nguyệt?",
    a: "Nước xả vải tạo lớp màng trên sợi vải, khiến chất lỏng khó thấm vào lõi mà chảy ra mép quần, làm giảm khả năng chống tràn."
  },
  {
    q: "Quần chống són tiểu bị mùi khai phải làm sao?",
    a: "Xả nước lạnh ngay sau khi thay, giặt trong ngày bằng nước giặt dịu nhẹ, không để quần ẩm qua đêm và phơi đến khi lõi khô hẳn."
  }
];

const contentArticle1 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Chăm sóc & Bảo quản</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cách giặt quần kinh nguyệt và quần chống són tiểu đúng cách: giặt tay, giặt máy, phơi và khử mùi</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 8 phút · Thông tin tham khảo y khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Giặt quần kinh nguyệt và quần chống són tiểu theo 4 bước: (1) <strong>xả bằng nước lạnh</strong> ngay sau khi thay, đến khi nước trong; (2) <strong>giặt tay hoặc giặt máy chế độ nhẹ, nước lạnh</strong>, bột/nước giặt dịu nhẹ, cho vào túi giặt; (3) <strong>không dùng nước xả vải, thuốc tẩy, nước nóng</strong> vì làm giảm khả năng thấm và hỏng lớp chống thấm; (4) <strong>phơi khô tự nhiên</strong>, không sấy nóng, không là (ủi) lên đáy quần. Giặt sau mỗi lần mặc, kể cả khi ra ít.</div>

<div class="defs">
  <strong>Định nghĩa nhanh:</strong>
  <ul>
    <li><strong>Kinh nguyệt (ngày đèn đỏ):</strong> hiện tượng niêm mạc tử cung bong ra và chảy máu qua âm đạo theo chu kỳ, thường 2–7 ngày mỗi tháng. Xem thêm <a href="/kinh-nguyet/kinh-nguyet-la-gi">kinh nguyệt là gì</a>.</li>
    <li><strong>Són tiểu (tiểu không tự chủ):</strong> nước tiểu rỉ ra ngoài ý muốn, hay gặp khi ho, hắt hơi, cười, nâng đồ nặng, hoặc khi buồn tiểu gấp không nhịn kịp.</li>
    <li><strong>Quần kinh nguyệt / quần chống són tiểu:</strong> quần lót có vùng đáy nhiều lớp (thoát ẩm, thấm hút, chống thấm), mặc như quần lót thường, giặt và dùng lại được.</li>
  </ul>
</div>

<h3>Vì sao phải giặt đúng cách?</h3>
<p>Khả năng thấm của quần nằm ở <strong>lõi thấm hút nhiều lớp</strong> và <strong>lớp chống thấm</strong> mỏng ở đáy quần. Nước nóng làm máu kinh đông lại, bám vào sợi vải gây ố và mùi. Nước xả vải phủ một lớp màng lên sợi, khiến chất lỏng khó thấm vào lõi mà chảy tràn ra mép. Sấy nóng và là nóng có thể làm hỏng lớp chống thấm. Giặt sai vài lần là quần bắt đầu tràn, có mùi, và người dùng nghĩ "quần kinh nguyệt không dùng được".</p>

<h3>Bước 1: Xả nước lạnh ngay sau khi thay</h3>
<ol>
  <li>Lộn trái quần (nếu được), xả dưới vòi nước lạnh.</li>
  <li>Bóp nhẹ vùng đáy quần nhiều lần cho đến khi <strong>nước chảy ra trong</strong>.</li>
  <li>Vắt nhẹ, không vặn xoắn mạnh vùng đáy.</li>
  <li>Nếu chưa giặt ngay: treo cho thoáng, không để quần ẩm ướt dồn trong giỏ đồ bẩn nhiều ngày.</li>
</ol>
<p>Với quần chống són tiểu, xả nước lạnh giúp loại bỏ nước tiểu trước khi khô lại gây mùi khai.</p>

<h3>Bước 2a: Giặt tay</h3>
<ol>
  <li>Ngâm quần trong nước lạnh pha nước giặt dịu nhẹ khoảng 20–30 phút.</li>
  <li>Vò nhẹ, chú ý vùng đáy; có thể dùng bàn chải lông mềm với vết bẩn.</li>
  <li>Xả lại bằng nước lạnh đến khi hết bọt.</li>
</ol>

<h3>Bước 2b: Giặt máy</h3>
<ul>
  <li>Cho quần vào <strong>túi giặt</strong> để không bị kéo giãn, xoắn.</li>
  <li>Chọn chế độ <strong>giặt nhẹ (delicate), nước lạnh</strong>; tránh chế độ giặt nóng, giặt "đồ bẩn nhiều".</li>
  <li>Giặt cùng đồ tối màu; tránh giặt chung với đồ có khóa kéo, móc cài.</li>
  <li>Vẫn nên xả nước lạnh trước khi cho vào máy.</li>
</ul>

<h3>Bước 3: Những thứ không nên dùng</h3>
<div class="table-scroll">
<table>
  <tr><th>Không dùng</th><th>Lý do</th></tr>
  <tr><td>Nước xả vải</td><td>Tạo lớp màng trên sợi, giảm khả năng thấm, dễ tràn</td></tr>
  <tr><td>Thuốc tẩy, nước tẩy javel</td><td>Hỏng sợi vải, lớp chống thấm, phai màu</td></tr>
  <tr><td>Nước nóng (để xả máu)</td><td>Làm máu đông, ố vàng, khó sạch</td></tr>
  <tr><td>Máy sấy nhiệt cao</td><td>Có thể làm hỏng lớp chống thấm, giãn chun</td></tr>
  <tr><td>Bàn là (ủi) lên đáy quần</td><td>Có thể làm chảy lớp chống thấm</td></tr>
  <tr><td>Nước giặt có cồn, chất tẩy mạnh</td><td>Làm khô cứng sợi, hỏng chun</td></tr>
</table>
</div>

<h3>Bước 4: Phơi khô</h3>
<ul>
  <li>Phơi nơi thoáng gió, tránh nắng gắt chiếu trực tiếp quá lâu làm phai màu.</li>
  <li>Treo ngược hoặc trải phẳng để vùng đáy khô đều.</li>
  <li>Lõi thấm dày nên khô chậm hơn quần thường; kiểm tra <strong>lõi đã khô hẳn</strong> trước khi cất.</li>
</ul>

<h3>Mẹo phơi mùa nồm ẩm ở miền Bắc</h3>
<ul>
  <li>Vắt kỹ bằng cách cuộn quần trong khăn bông khô rồi ấn nhẹ.</li>
  <li>Phơi gần quạt, trong phòng có máy hút ẩm hoặc điều hòa chế độ khô.</li>
  <li>Có thể sấy ở <strong>nhiệt độ thấp nhất</strong> nếu hãng cho phép.</li>
  <li>Chuẩn bị đủ số quần để luân phiên, không phải mặc quần chưa khô hẳn (dễ gây mùi, nấm).</li>
</ul>

<h3>Xử lý vết ố và mùi</h3>
<ul>
  <li><strong>Vết máu cũ:</strong> ngâm lại trong nước lạnh pha nước giặt, chà nhẹ bằng bàn chải mềm; không tăng nhiệt độ nước.</li>
  <li><strong>Mùi khai (quần chống són tiểu):</strong> xả nước lạnh ngay sau khi thay, giặt đúng ngày, không để quần ẩm qua đêm; phơi khô hẳn.</li>
  <li><strong>Mùi hôi kéo dài dù đã giặt:</strong> thường do quần chưa khô hẳn hoặc giặt bằng nước xả vải lâu ngày; giặt lại kỹ và phơi khô. Nếu mùi vùng kín bất thường (hôi, kèm ngứa, khí hư lạ), nên đi khám.</li>
</ul>

<h3>Bao lâu nên thay quần mới?</h3>
<p>Tuổi thọ phụ thuộc chất lượng và cách giặt. Dấu hiệu nên thay: quần bắt đầu tràn dù dùng đúng mức thấm, lõi thấm bị vón, chun giãn, vải sờn mỏng ở đáy, mùi không hết dù đã giặt đúng cách.</p>

<h3>Cần bao nhiêu chiếc?</h3>
<div class="table-scroll">
<table>
  <tr><th>Người dùng</th><th>Gợi ý số lượng</th></tr>
  <tr><td>Quần kinh nguyệt, chu kỳ 5 ngày</td><td>4–7 chiếc (có cả mức thấm nhẹ và thấm nhiều)</td></tr>
  <tr><td>Quần chống són tiểu dùng hằng ngày</td><td>5–7 chiếc để luân phiên khi chờ khô</td></tr>
  <tr><td>Mùa nồm, phơi lâu khô</td><td>Thêm 1–2 chiếc dự phòng</td></tr>
</table>
</div>

${getCtaHtml(
  'ANTCARE – Kiến chăm tổ',
  'ANTCARE đang phát triển dòng quần lót thấm hút cho ngày đèn đỏ và són tiểu nhẹ, thiết kế cho vóc dáng và khí hậu Việt Nam. Nhận tư vấn và ưu đãi ngay hôm nay.'
)}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp về cách giặt và bảo quản</h3>
${renderFaqAccordion(faqsArticle1)}

<p class="note">Bài viết mang tính tham khảo y khoa. Luôn ưu tiên hướng dẫn giặt in trên nhãn sản phẩm.</p>

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tham khảo</h3>
  <ul>
    <li><a href="https://knix.ca/blogs/resources/how-to-wash-period-underwear" rel="nofollow" target="_blank">Knix – How to wash period underwear (hướng dẫn giặt của thương hiệu đồ lót kinh nguyệt quốc tế)</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">The Conversation &amp; BMJ Sexual &amp; Reproductive Health – Nghiên cứu định lượng máu kinh và chăm sóc vệ sinh</a></li>
    <li><a href="https://www.jeanhailes.org.au/health-a-z/periods/period-products" rel="nofollow" target="_blank">Jean Hailes for Women's Health – Hướng dẫn sử dụng và bảo quản sản phẩm kinh nguyệt an toàn</a></li>
  </ul>
</section>

${renderRelatedArticlesBox([
  {
    slug: 'ngay-kinh-nguyet-nen-dung-gi',
    title: 'Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn',
    desc: 'Băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt.'
  },
  {
    slug: 'quan-kinh-nguyet-co-an-toan-khong',
    title: 'Quần kinh nguyệt có an toàn không? 6 chứng nhận cần kiểm tra',
    desc: 'PFAS, chất kháng khuẩn, OEKO-TEX, QCVN 01:2017/BCT và tem CR.'
  },
  {
    slug: 'hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu',
    title: '30 câu hỏi thường gặp về quần kinh nguyệt & són tiểu',
    desc: 'Hỏi đáp chi tiết về cách dùng, đối tượng, giặt giũ và an toàn.'
  }
])}

</div>
`;

// -------------------------------------------------------------------------
// BÀI 2: Quần kinh nguyệt có an toàn không?
// -------------------------------------------------------------------------
const faqsArticle2 = [
  {
    q: "Quần kinh nguyệt có hại không?",
    a: "Quần kinh nguyệt không có hại khi làm từ vật liệu đã kiểm soát hóa chất (không chủ động thêm PFAS, đạt OEKO-TEX, đáp ứng QCVN 01:2017/BCT) và được thay, giặt, phơi khô đúng cách."
  },
  {
    q: "PFAS trong quần kinh nguyệt là gì?",
    a: "PFAS là nhóm hóa chất chống thấm, chống bám bẩn rất bền, khó phân hủy. Nên chọn quần kinh nguyệt có cam kết không chủ động thêm PFAS và chống thấm bằng lớp màng PUL/TPU."
  },
  {
    q: "Tem CR trên quần lót có ý nghĩa gì?",
    a: "Dấu CR cho biết sản phẩm đã được công bố hợp quy với quy chuẩn kỹ thuật quốc gia, ở đây là QCVN 01:2017/BCT về giới hạn formaldehyt và amin thơm trong sản phẩm dệt may."
  }
];

const contentArticle2 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · An toàn & Chứng nhận</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Quần kinh nguyệt có an toàn không? 6 chứng nhận và thông tin cần kiểm tra trước khi mua</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 9 phút · Thông tin tham khảo y khoa & tiêu chuẩn chất lượng</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Quần kinh nguyệt và quần chống són tiểu <strong>an toàn khi được làm từ vật liệu đã kiểm soát hóa chất</strong> và dùng đúng cách (thay đúng giờ, giặt sạch, phơi khô). Trước khi mua, nên kiểm tra 6 điểm: (1) cam kết <strong>không chứa PFAS</strong>; (2) công bố rõ <strong>chất kháng khuẩn</strong> nếu có (thường là hợp chất bạc); (3) chứng nhận <strong>OEKO-TEX Standard 100</strong> (nhóm tiếp xúc trực tiếp với da) và tra được số chứng nhận; (4) với hàng bán tại Việt Nam: đáp ứng <strong>QCVN 01:2017/BCT</strong> về formaldehyt và amin thơm, có <strong>tem hợp quy CR</strong>; (5) <strong>nhãn tiếng Việt</strong> đầy đủ; (6) <strong>mức thấm ghi bằng ml</strong> kèm phương pháp thử.</div>

<div class="defs">
  <strong>Định nghĩa nhanh:</strong>
  <ul>
    <li><strong>Ngày đèn đỏ:</strong> cách gọi dân gian của những ngày hành kinh.</li>
    <li><strong>Tiểu dầm (đái dầm):</strong> tiểu không tự chủ trong lúc ngủ; phổ biến ở trẻ nhỏ, ở người lớn cần được khám tìm nguyên nhân.</li>
    <li><strong>PFAS:</strong> nhóm hóa chất chống thấm, chống bám bẩn rất bền, khó phân hủy, được gọi là "hóa chất vĩnh cửu".</li>
  </ul>
</div>

<h3>Vì sao người dùng lo ngại về an toàn?</h3>
<p>Quần kinh nguyệt và quần chống són tiểu tiếp xúc trực tiếp với vùng da nhạy cảm nhiều giờ mỗi ngày, trong môi trường ẩm. Năm 2023, Thinx – một thương hiệu quần kinh nguyệt lớn tại Mỹ – đồng ý dàn xếp vụ kiện tập thể (quỹ 4 triệu USD, cộng thêm tối đa 1 triệu USD) liên quan đến cáo buộc sản phẩm có PFAS. Thinx không thừa nhận sai phạm, nhưng cam kết yêu cầu nhà cung cấp xác nhận không chủ động thêm PFAS và công bố rõ việc dùng chất kháng khuẩn. Sự kiện này khiến người tiêu dùng trên toàn thế giới bắt đầu hỏi kỹ hơn về vật liệu.</p>

<h3>1. PFAS: cần sản phẩm "không chủ động thêm PFAS"</h3>
<ul>
  <li>PFAS từng được dùng để tạo tính chống thấm, chống bám bẩn cho vải.</li>
  <li>Quần kinh nguyệt hiện đại có thể đạt chống thấm bằng lớp màng PUL/TPU mà không cần PFAS.</li>
  <li><strong>Nên hỏi:</strong> hãng có cam kết "không chủ động thêm PFAS" (PFAS-free / no intentionally added PFAS) không? Có kết quả thử nghiệm không?</li>
</ul>

<h3>2. Chất kháng khuẩn: cần được công bố rõ</h3>
<ul>
  <li>Nhiều hãng xử lý kháng khuẩn để giảm mùi, thường dùng hợp chất bạc.</li>
  <li>Kháng khuẩn không thay được việc thay quần đúng giờ và giặt sạch.</li>
  <li><strong>Nên hỏi:</strong> dùng chất gì, ở lớp nào, có chứng nhận an toàn không. Người có da nhạy cảm có thể ưu tiên sản phẩm không xử lý kháng khuẩn.</li>
</ul>

<h3>3. OEKO-TEX Standard 100</h3>
<p>OEKO-TEX Standard 100 là chứng nhận quốc tế về giới hạn các chất có hại trong sản phẩm dệt. Chứng nhận chia theo nhóm sản phẩm: nhóm I (đồ cho trẻ dưới 3 tuổi), nhóm II (tiếp xúc trực tiếp với da, như đồ lót), nhóm III (không tiếp xúc trực tiếp với da), nhóm IV (vật liệu trang trí).</p>
<ul>
  <li>Quần lót nên có chứng nhận ít nhất <strong>nhóm II</strong> (hoặc nhóm I – yêu cầu khắt khe nhất).</li>
  <li>Kiểm tra <strong>số chứng nhận</strong> trên nhãn và tra cứu trên website OEKO-TEX để xem chứng nhận còn hiệu lực và áp dụng cho vật liệu nào.</li>
  <li>Lưu ý: chứng nhận có thể chỉ cho một phần vật liệu (ví dụ vải thân) chứ không phải toàn bộ quần.</li>
</ul>

<h3>4. QCVN 01:2017/BCT và tem hợp quy CR (hàng bán tại Việt Nam)</h3>
<p>Quy chuẩn kỹ thuật quốc gia QCVN 01:2017/BCT giới hạn <strong>formaldehyt</strong> và <strong>các amin thơm chuyển hóa từ thuốc nhuộm azo</strong> trong sản phẩm dệt may:</p>
<div class="table-scroll">
<table>
  <tr><th>Nhóm sản phẩm</th><th>Giới hạn formaldehyt</th></tr>
  <tr><td>Sản phẩm cho trẻ em dưới 36 tháng tuổi</td><td>30 mg/kg</td></tr>
  <tr><td>Sản phẩm tiếp xúc trực tiếp với da (như quần lót)</td><td>75 mg/kg</td></tr>
  <tr><td>Sản phẩm không tiếp xúc trực tiếp với da</td><td>300 mg/kg</td></tr>
</table>
</div>
<p>Mỗi amin thơm bị giới hạn ở mức 30 mg/kg. Theo sửa đổi bằng Thông tư 37/2026/TT-BCT (hiệu lực 01/7/2026), sản phẩm phải được <strong>công bố hợp quy, gắn dấu CR và ghi nhãn</strong> trước khi lưu thông. Khi mua quần lót tại Việt Nam, hãy tìm <strong>dấu CR</strong> trên nhãn hoặc bao bì.</p>

<h3>5. Nhãn tiếng Việt đầy đủ</h3>
<p>Hàng bán tại Việt Nam cần có nhãn (hoặc nhãn phụ) tiếng Việt: tên sản phẩm, thành phần vải, xuất xứ, tổ chức chịu trách nhiệm, hướng dẫn sử dụng và bảo quản. Sản phẩm không có nhãn tiếng Việt, không rõ đơn vị chịu trách nhiệm là dấu hiệu cần thận trọng.</p>

<h3>6. Mức thấm ghi bằng ml và phương pháp thử</h3>
<p>Không có tiêu chuẩn thử mức thấm chung cho cả ngành. Hãng minh bạch sẽ ghi số ml cho từng mức thấm và nói rõ cách thử. Mức thấm thử bằng nước thường cao hơn thực tế, vì máu kinh đặc hơn và thấm chậm hơn.</p>

<h3>Checklist mua quần kinh nguyệt, quần chống són tiểu an toàn</h3>
<div class="table-scroll">
<table>
  <tr><th>#</th><th>Tiêu chí kiểm tra</th><th>Yêu cầu đạt chuẩn</th></tr>
  <tr><td>1</td><td>Cam kết không chủ động thêm PFAS</td><td>PFAS-free, màng chống thấm PUL/TPU an toàn</td></tr>
  <tr><td>2</td><td>Công bố rõ chất kháng khuẩn (nếu có)</td><td>Minh bạch hợp chất bạc / ion bạc hoặc không thêm phụ gia độc hại</td></tr>
  <tr><td>3</td><td>OEKO-TEX Standard 100</td><td>Đạt nhóm I hoặc nhóm II, tra cứu được mã chứng chỉ</td></tr>
  <tr><td>4</td><td>Dấu CR, đáp ứng QCVN 01:2017/BCT</td><td>Formaldehyt &lt; 75 mg/kg, amin thơm &lt; 30 mg/kg</td></tr>
  <tr><td>5</td><td>Nhãn tiếng Việt, đơn vị chịu trách nhiệm rõ ràng</td><td>Có đầy đủ pháp nhân phân phối tại Việt Nam</td></tr>
  <tr><td>6</td><td>Mức thấm ghi bằng ml, có phương pháp thử</td><td>Ghi rõ dung tích thấm hút (30ml – 50ml)</td></tr>
  <tr><td>7</td><td>Là quần kinh nguyệt có lõi thấm</td><td>Có lõi thấm đa tầng thay được băng, không phải quần chống trào</td></tr>
</table>
</div>

<h3>Dùng đúng cách cũng là an toàn</h3>
<ul>
  <li>Thay quần đúng thời gian khuyến cáo; không mặc một chiếc quá lâu.</li>
  <li>Giặt sạch sau mỗi lần dùng, phơi khô hẳn lõi thấm (xem <a href="/kinh-nguyet/cach-giat-quan-kinh-nguyet">cách giặt quần kinh nguyệt</a>).</li>
  <li>Ngưng dùng và đi khám nếu ngứa, rát, nổi mẩn, khí hư bất thường.</li>
  <li>Són tiểu nặng, tiểu dầm ở người lớn, kinh nguyệt ra quá nhiều: cần khám để tìm nguyên nhân, không chỉ dùng sản phẩm thấm hút.</li>
</ul>

${getCtaHtml(
  'ANTCARE – Minh bạch thông tin sản phẩm',
  'ANTCARE (Kiến chăm tổ) đang phát triển dòng quần lót thấm hút theo đúng checklist kiểm định khắt khe này, an toàn tuyệt đối cho làn da phụ nữ Việt.'
)}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp về an toàn vật liệu</h3>
${renderFaqAccordion(faqsArticle2)}

<p class="note">Bài viết mang tính tham khảo, không phải tư vấn pháp lý hay y khoa. Quy định có thể được cập nhật; vui lòng đối chiếu văn bản hiện hành.</p>

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tham khảo</h3>
  <ul>
    <li><a href="https://www.personalcareinsights.com/news/thinx-settles-multi-million-dollar-lawsuit-as-period-underwear-customers-voice-forever-chemical-concerns.html" rel="nofollow" target="_blank">Personal Care Insights (2023) – Thinx dàn xếp vụ kiện liên quan PFAS và cam kết vật liệu sạch</a></li>
    <li><a href="https://insights.tuv.com/blog/everything-you-should-know-about-vietnams-new-textile-regulation" rel="nofollow" target="_blank">TÜV Rheinland – Giới hạn formaldehyt, amin thơm theo QCVN 01:2017/BCT</a></li>
    <li><a href="https://wickedfabrics.com.au/sewing-blog/what-is-standard-100-by-oekotex-/" rel="nofollow" target="_blank">OEKO-TEX Standard 100 – Tiêu chuẩn an toàn sản phẩm dệt tiếp xúc trực tiếp với da</a></li>
  </ul>
</section>

${renderRelatedArticlesBox([
  {
    slug: 'cach-giat-quan-kinh-nguyet',
    title: 'Cách giặt quần kinh nguyệt & quần chống són tiểu đúng cách',
    desc: '4 bước xả lạnh, giặt máy túi giặt, không xả vải và phơi nồm.'
  },
  {
    slug: 'hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu',
    title: '30 câu hỏi thường gặp về quần kinh nguyệt & són tiểu',
    desc: 'Giải đáp tường tận mọi thắc mắc về kinh nguyệt và són tiểu.'
  },
  {
    slug: 'quan-kinh-nguyet-mon-do-phai-co',
    title: 'Quần kinh nguyệt: món đồ lót "phải có" của mọi chị em',
    desc: 'Chủ động ngày đèn đỏ không cần băng, nhẹ êm và an toàn.'
  }
])}

</div>
`;

// -------------------------------------------------------------------------
// BÀI 3: 30 câu hỏi thường gặp về quần kinh nguyệt, quần chống són tiểu
// -------------------------------------------------------------------------
const faqsArticle3Group1 = [
  {
    q: "Kinh nguyệt là gì?",
    a: "Kinh nguyệt là hiện tượng lớp niêm mạc tử cung bong ra và chảy máu qua âm đạo theo chu kỳ hằng tháng khi không có thai. Chu kỳ ở người trưởng thành thường 21–35 ngày, hành kinh 2–7 ngày. Xem bài <a href=\"/kinh-nguyet/kinh-nguyet-la-gi\">kinh nguyệt là gì</a>."
  },
  {
    q: "Ngày đèn đỏ là gì?",
    a: "Ngày đèn đỏ là cách gọi dân gian của những ngày hành kinh (đến tháng, ngày dâu)."
  },
  {
    q: "Són tiểu là gì?",
    a: "Són tiểu (tiểu không tự chủ) là tình trạng nước tiểu rỉ ra ngoài ý muốn. Hay gặp nhất là són tiểu khi gắng sức (ho, hắt hơi, cười, nâng đồ nặng, chạy nhảy), són tiểu do buồn tiểu gấp không nhịn kịp, hoặc kết hợp cả hai."
  },
  {
    q: "Tiểu dầm là gì?",
    a: "Tiểu dầm (đái dầm) là tiểu không tự chủ trong lúc ngủ. Tiểu dầm khá phổ biến ở trẻ nhỏ và thường giảm dần theo tuổi; trẻ lớn vẫn tiểu dầm thường xuyên, hoặc người lớn mới bị tiểu dầm, nên đi khám để tìm nguyên nhân."
  },
  {
    q: "Quần kinh nguyệt khác quần chống trào thế nào?",
    a: "Quần kinh nguyệt có lõi thấm hút giữ máu kinh và dùng thay được băng vệ sinh; quần chống trào chỉ có lớp chống thấm để ngăn tràn, vẫn phải dùng kèm băng. Xem bài <a href=\"/kinh-nguyet/phan-biet-quan-chong-trao-va-quan-kinh-nguyet\">phân biệt quần chống trào và quần kinh nguyệt</a>."
  }
];

const faqsArticle3Group2 = [
  {
    q: "Quần kinh nguyệt mặc được bao lâu thì thay?",
    a: "Tùy mức thấm của quần và lượng kinh. Ngày ra ít nhiều người mặc được cả ngày; ngày ra nhiều nên thay sau vài giờ hoặc ngay khi thấy nặng, ẩm. Luôn làm theo hướng dẫn của hãng."
  },
  {
    q: "Mặc quần kinh nguyệt qua đêm được không?",
    a: "Được, nên chọn loại thấm nhiều, dáng boy short hoặc cạp cao có vùng thấm dài về phía sau. Đêm ra rất nhiều có thể kết hợp cốc hoặc đĩa nguyệt san."
  },
  {
    q: "Quần kinh nguyệt có thay hoàn toàn băng vệ sinh được không?",
    a: "Với ngày ra ít đến vừa, quần kinh nguyệt có lõi thấm có thể thay băng vệ sinh. Ngày ra rất nhiều nên thay giữa ngày hoặc kết hợp sản phẩm khác."
  },
  {
    q: "Mặc quần kinh nguyệt có bị ướt, có mùi không?",
    a: "Lớp trên cùng thoát ẩm giúp bề mặt tương đối khô; mùi thường không đáng kể nếu thay đúng giờ. Mùi xuất hiện khi mặc quá lâu, giặt chưa sạch hoặc phơi chưa khô."
  },
  {
    q: "Đang mặc quần kinh nguyệt ở ngoài, thay ra thì cất ở đâu?",
    a: "Mang theo túi chống thấm có khóa kéo (wet bag) để đựng quần đã thay, về nhà xả nước lạnh và giặt ngay."
  },
  {
    q: "Ngày đèn đỏ đi bơi có mặc quần kinh nguyệt được không?",
    a: "Quần kinh nguyệt thông thường không dùng dưới nước. Khi bơi nên dùng tampon, cốc hoặc đĩa nguyệt san; một số hãng có đồ bơi kinh nguyệt chuyên dụng cho ngày ra ít."
  }
];

const faqsArticle3Group3 = [
  {
    q: "Vì sao phụ nữ hay bị són tiểu?",
    a: "Mang thai, sinh con, tuổi mãn kinh (giảm estrogen), tuổi cao, thừa cân, táo bón lâu ngày, ho mạn tính làm yếu cơ sàn chậu, khiến nước tiểu dễ rỉ ra khi gắng sức."
  },
  {
    q: "Són tiểu sau sinh có tự hết không?",
    a: "Nhiều trường hợp cải thiện dần trong những tháng sau sinh, đặc biệt khi tập cơ sàn chậu (bài tập Kegel). Nếu kéo dài hoặc nặng, nên đi khám sản phụ khoa hoặc tiết niệu."
  },
  {
    q: "Quần chống són tiểu dùng cho mức độ nào?",
    a: "Quần chống són tiểu giặt được phù hợp với són tiểu nhẹ đến vừa ở người còn tự sinh hoạt. Són tiểu nặng, tiểu không kiểm soát hoàn toàn hoặc người nằm một chỗ nên dùng bỉm, tã người lớn."
  },
  {
    q: "Người cao tuổi có dùng quần chống són tiểu được không?",
    a: "Được, với người cao tuổi còn tự đi vệ sinh, tự thay quần, chỉ són nhẹ khi ho, hắt hơi hoặc không nhịn kịp. Người lẫn nhiều, không tự thay được nên dùng bỉm, tã và có người chăm sóc."
  },
  {
    q: "Tiểu dầm có dùng quần thấm hút được không?",
    a: "Với tiểu dầm nhẹ, quần thấm hút giặt được có thể giúp ga giường khô hơn. Tiểu dầm lượng nhiều nên dùng tấm lót giường hoặc bỉm đêm. Người lớn bị tiểu dầm cần đi khám."
  },
  {
    q: "Dùng quần kinh nguyệt cho són tiểu được không?",
    a: "Nhiều quần thấm hút dùng được cho cả kinh nguyệt và són tiểu nhẹ, nhưng nước tiểu ra nhanh và nhiều hơn máu kinh, nên cần chọn loại có mức thấm và tốc độ thấm phù hợp."
  },
  {
    q: "Khi nào són tiểu cần đi khám?",
    a: "Khi són tiểu ảnh hưởng sinh hoạt, ngày càng nặng, kèm tiểu buốt, tiểu ra máu, sốt, đau bụng dưới, hoặc xuất hiện đột ngột. Bác sĩ sẽ tìm nguyên nhân và hướng dẫn điều trị."
  }
];

const faqsArticle3Group4 = [
  {
    q: "Học sinh mới có kinh có nên dùng quần kinh nguyệt?",
    a: "Nên. Quần kinh nguyệt không cần đặt vào trong cơ thể, giúp các bạn đỡ lo tràn và lộ băng khi ngồi học, chơi thể thao."
  },
  {
    q: "Phụ nữ sau sinh dùng quần thấm hút được không?",
    a: "Được. Giai đoạn sản dịch không nên đặt sản phẩm vào âm đạo; quần thấm hút hoặc băng vệ sinh là lựa chọn phù hợp, và quần còn giúp với són tiểu sau sinh."
  },
  {
    q: "Tuổi tiền mãn kinh nên dùng gì?",
    a: "Chu kỳ tiền mãn kinh thường thất thường và có thể kèm són tiểu nhẹ; quần thấm hút giúp chủ động khi chưa biết lúc nào có kinh. Ra máu quá nhiều hoặc kéo dài vẫn cần đi khám."
  },
  {
    q: "Ai không nên chỉ dùng quần thấm hút?",
    a: "Người rong kinh, cường kinh, són tiểu nặng, người nằm một chỗ, và người không có điều kiện giặt, phơi khô quần đúng cách."
  }
];

const faqsArticle3Group5 = [
  {
    q: "Quần kinh nguyệt giặt thế nào?",
    a: "Xả nước lạnh đến khi nước trong, giặt tay hoặc giặt máy chế độ nhẹ nước lạnh trong túi giặt, không dùng nước xả vải, thuốc tẩy, và phơi khô tự nhiên. Xem <a href=\"/kinh-nguyet/cach-giat-quan-kinh-nguyet\">hướng dẫn giặt chi tiết</a>."
  },
  {
    q: "Quần kinh nguyệt phơi bao lâu thì khô?",
    a: "Lõi thấm dày nên khô chậm hơn quần thường, nhất là mùa nồm. Hãy kiểm tra lõi đã khô hẳn trước khi cất hoặc mặc lại."
  },
  {
    q: "Cần mua bao nhiêu chiếc quần kinh nguyệt?",
    a: "Thường 4–7 chiếc cho một chu kỳ, gồm cả loại thấm nhẹ và thấm nhiều; thêm 1–2 chiếc dự phòng vào mùa nồm."
  },
  {
    q: "Quần kinh nguyệt dùng được bao lâu?",
    a: "Tùy chất lượng và cách giặt. Nên thay khi quần bắt đầu tràn dù dùng đúng mức thấm, lõi vón, chun giãn hoặc có mùi không hết dù đã giặt đúng cách."
  }
];

const faqsArticle3Group6 = [
  {
    q: "Quần kinh nguyệt có an toàn không?",
    a: "An toàn khi làm từ vật liệu đã kiểm soát hóa chất và dùng đúng cách. Xem <a href=\"/kinh-nguyet/quan-kinh-nguyet-co-an-toan-khong\">6 chứng nhận và thông tin cần kiểm tra</a>."
  },
  {
    q: "Nên chọn quần kinh nguyệt kiểu dáng nào?",
    a: "Boy short là kiểu cân bằng nhất: ống ôm đùi chặn tràn ở mép, vùng thấm rộng về phía sau và vẫn gọn dưới quần áo. Cạp cao phù hợp phụ nữ sau sinh, ban đêm. Xem bài <a href=\"/kinh-nguyet/quan-boy-short-ngay-kinh-nguyet\">vì sao quần boy short tối ưu cho ngày kinh nguyệt</a>."
  },
  {
    q: "Chọn size quần kinh nguyệt thế nào?",
    a: "Đo vòng hông và đối chiếu bảng size của hãng; quần kinh nguyệt nên ôm vừa để mép quần kín, quá rộng sẽ dễ tràn ở mép."
  },
  {
    q: "Làm sao biết quần kinh nguyệt mua online là thật?",
    a: "Kiểm tra mô tả có lõi thấm nhiều lớp, mức thấm ghi bằng ml, hướng dẫn dùng thay băng, hướng dẫn giặt riêng, chứng nhận vải và nhãn tiếng Việt; nếu chỉ ghi \"chống tràn, dùng kèm băng\" thì đó là quần chống trào."
  }
];

const allFaqsArticle3 = [
  ...faqsArticle3Group1,
  ...faqsArticle3Group2,
  ...faqsArticle3Group3,
  ...faqsArticle3Group4,
  ...faqsArticle3Group5,
  ...faqsArticle3Group6
];

const contentArticle3 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Hỏi đáp chuyên sâu</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">30 câu hỏi thường gặp về quần kinh nguyệt, quần chống són tiểu: kinh nguyệt, són tiểu, tiểu dầm và cách dùng</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 15 phút · Thông tin tham khảo y khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> <strong>Quần kinh nguyệt</strong> và <strong>quần chống són tiểu</strong> là quần lót có vùng đáy nhiều lớp (thoát ẩm, thấm hút, chống thấm), mặc như quần lót thường và giặt dùng lại được. Quần kinh nguyệt dùng thay băng vệ sinh cho ngày ra ít đến vừa hoặc làm lớp dự phòng cho cốc, đĩa nguyệt san. Quần chống són tiểu dùng cho són tiểu nhẹ đến vừa ở người còn tự sinh hoạt: phụ nữ sau sinh, tuổi mãn kinh, người cao tuổi. Són tiểu nặng, người nằm một chỗ vẫn nên dùng bỉm, tã. Bài này trả lời 30 câu hỏi phổ biến nhất, chia theo 6 nhóm.</div>

<nav class="toc" aria-label="Nhóm câu hỏi">
  <strong>Mục lục 6 nhóm câu hỏi:</strong>
  <ol>
    <li><a href="#hd-khai-niem">Khái niệm: kinh nguyệt, ngày đèn đỏ, són tiểu, tiểu dầm</a></li>
    <li><a href="#hd-cach-dung">Cách dùng quần kinh nguyệt</a></li>
    <li><a href="#hd-son-tieu">Són tiểu, tiểu dầm và quần chống són tiểu</a></li>
    <li><a href="#hd-doi-tuong">Ai nên dùng, ai không nên</a></li>
    <li><a href="#hd-giat">Giặt và bảo quản</a></li>
    <li><a href="#hd-chon-mua">An toàn và cách chọn mua</a></li>
  </ol>
</nav>

<h3 id="hd-khai-niem">1. Khái niệm: kinh nguyệt, ngày đèn đỏ, són tiểu, tiểu dầm</h3>
${renderFaqAccordion(faqsArticle3Group1)}

<h3 id="hd-cach-dung">2. Cách dùng quần kinh nguyệt</h3>
${renderFaqAccordion(faqsArticle3Group2)}

<h3 id="hd-son-tieu">3. Són tiểu, tiểu dầm và quần chống són tiểu</h3>
${renderFaqAccordion(faqsArticle3Group3)}

<h3 id="hd-doi-tuong">4. Ai nên dùng, ai không nên</h3>
${renderFaqAccordion(faqsArticle3Group4)}

<h3 id="hd-giat">5. Giặt và bảo quản</h3>
${renderFaqAccordion(faqsArticle3Group5)}

<h3 id="hd-chon-mua">6. An toàn và cách chọn mua</h3>
${renderFaqAccordion(faqsArticle3Group6)}

${getCtaHtml(
  'ANTCARE – Kiến chăm tổ',
  'ANTCARE là thương hiệu chăm sóc sức khỏe cho phụ nữ và gia đình Việt, đang phát triển dòng quần lót thấm hút cho ngày đèn đỏ và són tiểu nhẹ. Có câu hỏi chưa có trong bài? Gọi hoặc nhắn Zalo cho chúng tôi.'
)}

<p class="note">Bài viết mang tính tham khảo, không thay thế chẩn đoán và điều trị của bác sĩ.</p>

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tham khảo</h3>
  <ul>
    <li><a href="https://nidirect.gov.uk/conditions/period-problems" rel="nofollow" target="_blank">NHS / NI Direct – Hướng dẫn y khoa về sức khỏe chu kỳ kinh nguyệt và tiểu không tự chủ</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">BMJ Sexual &amp; Reproductive Health – Định lượng máu kinh và giải pháp chống tràn</a></li>
    <li><a href="https://www.jeanhailes.org.au/health-a-z/periods/period-products" rel="nofollow" target="_blank">Jean Hailes for Women's Health – Cẩm nang sản phẩm kinh nguyệt an toàn cho phụ nữ</a></li>
  </ul>
</section>

${renderRelatedArticlesBox([
  {
    slug: 'kinh-nguyet-la-gi',
    title: 'Kinh nguyệt là gì? Cẩm nang chu kỳ & chăm sóc',
    desc: 'Định nghĩa, chu kỳ chuẩn 21-35 ngày, triệu chứng và giải pháp.'
  },
  {
    slug: 'cach-giat-quan-kinh-nguyet',
    title: 'Cách giặt quần kinh nguyệt & quần chống són tiểu',
    desc: 'Hướng dẫn xả lạnh, giặt máy và phơi khô không bị mùi.'
  },
  {
    slug: 'quan-kinh-nguyet-mon-do-phai-co',
    title: 'Quần kinh nguyệt: món đồ lót "phải có" của chị em',
    desc: 'Lợi ích tuyệt vời: tự tin, không lộ viền, tiết kiệm và bảo vệ môi trường.'
  }
])}

</div>
`;

// -------------------------------------------------------------------------
// BÀI 4: Quần kinh nguyệt: món đồ lót "phải có" trong tủ đồ của mọi chị em
// -------------------------------------------------------------------------
const faqsArticle4 = [
  {
    q: "Có nên mua quần kinh nguyệt không?",
    a: "Nên. Quần kinh nguyệt giúp chủ động trong ngày đèn đỏ mà không cần dán băng hay đặt gì vào cơ thể, thoải mái và đỡ bí, kích ứng hơn băng vệ sinh, dùng được cho mọi độ tuổi."
  },
  {
    q: "Quần kinh nguyệt có gây kích ứng da không?",
    a: "Quần kinh nguyệt không có keo dán, cánh băng và có lớp thoát ẩm nên thường đỡ bí, hăm hơn băng vệ sinh; nên chọn loại có chứng nhận vải, không PFAS và thay, giặt đúng cách."
  }
];

const contentArticle4 = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Phong cách sống & Sức khỏe</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Quần kinh nguyệt: món đồ lót "phải có" trong tủ đồ của mọi chị em</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 06/11/2026 · Đọc khoảng 7 phút · Thông tin tham khảo y khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Có. Quần kinh nguyệt nên có trong tủ đồ của mọi chị em, từ học sinh đến phụ nữ trung niên, vì 2 lý do: <strong>(1) chủ động trong ngày đèn đỏ mà không cần dán băng hay đặt gì vào cơ thể</strong>; <strong>(2) thoải mái, nhẹ nhàng, đỡ bí và kích ứng</strong> hơn băng vệ sinh. Chỉ cần 4–7 chiếc là đủ cho cả chu kỳ.</div>

<h3>1. Chủ động ngày đèn đỏ, không cần băng vệ sinh</h3>
<ul>
  <li><strong>Mặc như quần lót thường:</strong> lõi thấm hút và lớp chống thấm đã có sẵn ở đáy quần.</li>
  <li><strong>Không lo "đến bất ngờ":</strong> mặc sẵn vào những ngày sắp có kinh, chu kỳ chưa đều (học sinh) hoặc thất thường (tiền mãn kinh).</li>
  <li><strong>Không cần đặt gì vào cơ thể</strong> như tampon hay cốc nguyệt san.</li>
  <li><strong>Ban đêm an tâm hơn:</strong> dáng boy short ôm đùi, vùng thấm dài về phía sau, ít tràn khi trở mình. Xem thêm <a href="/kinh-nguyet/quan-boy-short-ngay-kinh-nguyet">vì sao quần boy short tối ưu cho ngày kinh nguyệt</a>.</li>
</ul>
<p class="meta">Ngày ra rất nhiều: thay quần giữa ngày hoặc kết hợp cốc/đĩa nguyệt san.</p>

<h3>2. Thoải mái, nhẹ nhàng, đỡ kích ứng</h3>
<ul>
  <li><strong>Không keo dán, không cánh băng</strong> cọ xát vùng háng.</li>
  <li><strong>Lớp trên thoát ẩm</strong> giúp bề mặt khô hơn, đỡ bí, đỡ hăm so với băng để lâu.</li>
  <li><strong>Không xô lệch, không cộm, không lộ viền</strong> dưới váy, quần.</li>
  <li><strong>An toàn:</strong> nằm ngoài cơ thể nên nguy cơ sốc độc tố rất thấp; chọn loại không PFAS, có chứng nhận vải (xem <a href="/kinh-nguyet/quan-kinh-nguyet-co-an-toan-khong">6 điều cần kiểm tra</a>).</li>
</ul>

<h3>Hợp với mọi độ tuổi</h3>
<div class="table-scroll">
<table>
  <tr><th>Đối tượng</th><th>Lợi ích nổi bật</th></tr>
  <tr><td>Học sinh</td><td>Không lo tràn, lộ băng khi ngồi học, mặc váy đồng phục, an tâm vận động</td></tr>
  <tr><td>Sinh viên, phụ nữ trẻ</td><td>Gọn nhẹ đi học, đi làm; ít rác thải, tiết kiệm chi phí lâu dài</td></tr>
  <tr><td>Sau sinh</td><td>Dùng trong giai đoạn sản dịch và khi són tiểu nhẹ sau sinh</td></tr>
  <tr><td>Trung niên</td><td>Chủ động khi chu kỳ thất thường, chống rỉ són tiểu nhẹ khi ho, hắt hơi</td></tr>
</table>
</div>

<h3>So với băng vệ sinh và quần lót thường</h3>
<div class="table-scroll">
<table>
  <tr><th>Tiêu chí so sánh</th><th>Quần lót thường + Băng vệ sinh</th><th>Quần kinh nguyệt công nghệ mới</th></tr>
  <tr><td>Cảm giác mặc</td><td>Bí bách, cộm ngứa, dễ xô lệch khi di chuyển</td><td>Mỏng nhẹ, êm ái như quần lót thông thường</td></tr>
  <tr><td>Kích ứng da</td><td>Dễ hăm đỏ do keo dán và ẩm bí kéo dài</td><td>Đỡ bí tối đa, thoáng khí, không keo dán</td></tr>
  <tr><td>Chống tràn ban đêm</td><td>Dễ tràn ra sau khi nằm ngửa hoặc nằm nghiêng</td><td>Vùng thấm kéo dài lên cạp sau, ôm sát chặn tràn</td></tr>
  <tr><td>Chi phí lâu dài</td><td>Tốn chi phí mua băng vệ sinh hàng tháng</td><td>Giặt và tái sử dụng hơn 100 lần, cực kỳ tiết kiệm</td></tr>
</table>
</div>

<h3>Mua bao nhiêu, chọn thế nào?</h3>
<ul>
  <li><strong>4–7 chiếc</strong>, gồm cả loại thấm nhẹ và thấm nhiều để luân phiên.</li>
  <li><strong>Dáng boy short</strong> chống tràn mép và phía sau tốt nhất.</li>
  <li><strong>Đúng quần kinh nguyệt có lõi thấm</strong>, không phải quần chống trào (xem bài <a href="/kinh-nguyet/phan-biet-quan-chong-trao-va-quan-kinh-nguyet">phân biệt quần chống trào</a>).</li>
  <li><strong>Giặt đúng cách</strong>: xả nước lạnh, không nước xả vải (xem <a href="/kinh-nguyet/cach-giat-quan-kinh-nguyet">hướng dẫn giặt</a>).</li>
</ul>

${getCtaHtml(
  'ANTCARE – Kiến chăm tổ',
  'Quần thấm hút ANTCARE dáng boy short, công nghệ 4 lớp thoáng khí cho ngày đèn đỏ và són tiểu nhẹ. Đăng ký ngay để nhận ưu đãi ra mắt.'
)}

<h3 class="text-lg font-bold text-[#6633B4] mt-8 mb-4">Câu hỏi thường gặp</h3>
${renderFaqAccordion(faqsArticle4)}

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tham khảo</h3>
  <ul>
    <li><a href="https://knix.ca/blogs/resources/how-to-wash-period-underwear" rel="nofollow" target="_blank">Knix – Nghiên cứu hành vi người tiêu dùng chuyển đổi sang đồ lót kinh nguyệt</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">The Conversation – So sánh hiệu quả thực tế của các giải pháp chu kỳ</a></li>
    <li><a href="https://www.jeanhailes.org.au/health-a-z/periods/period-products" rel="nofollow" target="_blank">Jean Hailes for Women's Health – Lựa chọn sản phẩm bảo vệ an toàn cho phụ nữ mọi lứa tuổi</a></li>
  </ul>
</section>

${renderRelatedArticlesBox([
  {
    slug: 'ngay-kinh-nguyet-nen-dung-gi',
    title: 'Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn',
    desc: 'Băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt.'
  },
  {
    slug: 'phan-biet-quan-chong-trao-va-quan-kinh-nguyet',
    title: 'Phân biệt quần chống trào & quần kinh nguyệt',
    desc: 'Đừng nhầm lẫn: so sánh cấu tạo và công năng thực tế.'
  },
  {
    slug: 'quan-boy-short-ngay-kinh-nguyet',
    title: 'Vì sao quần boy short tối ưu cho ngày kinh nguyệt?',
    desc: 'Chặn tràn mép háng, đáy rộng về phía sau, tự tin vận động.'
  }
])}

</div>
`;

// Build new article objects
const article1Obj = {
  id: 13,
  slug: "cach-giat-quan-kinh-nguyet",
  group: "kinh-nguyet",
  oldSlugs: ["kien-thuc/cach-giat-quan-kinh-nguyet", "cam-nang/cach-giat-quan-kinh-nguyet"],
  title: "Cách giặt quần kinh nguyệt và quần chống són tiểu đúng cách: giặt tay, giặt máy, phơi và khử mùi",
  metaTitle: "Cách giặt quần kinh nguyệt, quần chống són tiểu đúng cách: giặt tay, giặt máy, phơi và khử mùi | ANTCARE",
  description: "Cách giặt quần kinh nguyệt, quần chống són tiểu đúng cách: xả nước lạnh, giặt tay hay giặt máy, không dùng nước xả vải, phơi mùa nồm, khử mùi, tẩy vết ố.",
  excerpt: "Giặt quần kinh nguyệt và quần chống són tiểu theo 4 bước: (1) xả bằng nước lạnh ngay sau khi thay; (2) giặt tay hoặc giặt máy chế độ nhẹ nước lạnh, cho vào túi giặt; (3) không dùng nước xả vải, thuốc tẩy, nước nóng; (4) phơi khô tự nhiên, không sấy nóng, không là ủi lên đáy quần.",
  category: "Cẩm nang",
  date: "06/11/2026",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: "cách giặt quần kinh nguyệt, giặt quần nguyệt san, quần chống són tiểu giặt máy được không, cách bảo quản quần thấm hút, quần kinh nguyệt bị mùi",
  image: "/images/products/quan-lot-tham-hut.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: contentArticle1,
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://antcare.vn/kinh-nguyet/cach-giat-quan-kinh-nguyet/#article",
        "mainEntityOfPage": "https://antcare.vn/kinh-nguyet/cach-giat-quan-kinh-nguyet/",
        "headline": "Cách giặt quần kinh nguyệt và quần chống són tiểu đúng cách: giặt tay, giặt máy, phơi và khử mùi",
        "description": "Cách giặt quần kinh nguyệt, quần chống són tiểu đúng cách: xả nước lạnh, giặt tay hay giặt máy, không dùng nước xả vải, phơi mùa nồm, khử mùi, tẩy vết ố.",
        "keywords": "cách giặt quần kinh nguyệt",
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
        "mainEntity": faqsArticle1.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  },
  isPinned: false
};

const article2Obj = {
  id: 14,
  slug: "quan-kinh-nguyet-co-an-toan-khong",
  group: "kinh-nguyet",
  oldSlugs: ["kien-thuc/quan-kinh-nguyet-co-an-toan-khong", "cam-nang/quan-kinh-nguyet-co-an-toan-khong"],
  title: "Quần kinh nguyệt có an toàn không? 6 chứng nhận và thông tin cần kiểm tra trước khi mua",
  metaTitle: "Quần kinh nguyệt có an toàn không? 6 chứng nhận và thông tin cần kiểm tra | ANTCARE",
  description: "Quần kinh nguyệt, quần chống són tiểu có an toàn không? PFAS, chất kháng khuẩn bạc, OEKO-TEX, QCVN 01:2017/BCT, tem CR: cần kiểm tra gì trước khi mua.",
  excerpt: "Quần kinh nguyệt và quần chống són tiểu an toàn khi được làm từ vật liệu đã kiểm soát hóa chất và dùng đúng cách. Trước khi mua, nên kiểm tra 6 điểm: không chứa PFAS, công bố rõ chất kháng khuẩn, OEKO-TEX Standard 100, QCVN 01:2017/BCT và tem CR, nhãn tiếng Việt, mức thấm ghi bằng ml.",
  category: "Cẩm nang",
  date: "06/11/2026",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: "quần kinh nguyệt có an toàn không, quần kinh nguyệt có hại không, PFAS trong quần kinh nguyệt, chứng nhận OEKO-TEX, quần chống són tiểu an toàn, QCVN 01:2017/BCT",
  image: "/images/products/quan-lot-tham-hut.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: contentArticle2,
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-co-an-toan-khong/#article",
        "mainEntityOfPage": "https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-co-an-toan-khong/",
        "headline": "Quần kinh nguyệt có an toàn không? 6 chứng nhận và thông tin cần kiểm tra trước khi mua",
        "description": "Quần kinh nguyệt, quần chống són tiểu có an toàn không? PFAS, chất kháng khuẩn bạc, OEKO-TEX, QCVN 01:2017/BCT, tem CR: cần kiểm tra gì trước khi mua.",
        "keywords": "quần kinh nguyệt có an toàn không",
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
        "mainEntity": faqsArticle2.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  },
  isPinned: false
};

const article3Obj = {
  id: 15,
  slug: "hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu",
  group: "kinh-nguyet",
  oldSlugs: ["kien-thuc/hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu", "cam-nang/hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu"],
  title: "30 câu hỏi thường gặp về quần kinh nguyệt, quần chống són tiểu: kinh nguyệt, són tiểu, tiểu dầm và cách dùng",
  metaTitle: "30 câu hỏi thường gặp về quần kinh nguyệt và quần chống són tiểu | ANTCARE",
  description: "30 câu hỏi thường gặp về kinh nguyệt, ngày đèn đỏ, són tiểu, tiểu dầm và quần thấm hút: cách dùng, mặc qua đêm, ai nên dùng, giặt, an toàn, cách chọn.",
  excerpt: "Quần kinh nguyệt và quần chống són tiểu là quần lót có vùng đáy nhiều lớp (thoát ẩm, thấm hút, chống thấm), mặc như quần lót thường và giặt dùng lại được. Tổng hợp giải đáp chi tiết 30 thắc mắc phổ biến nhất chia theo 6 nhóm chủ đề.",
  category: "Cẩm nang",
  date: "06/11/2026",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: "quần kinh nguyệt có tốt không, quần chống són tiểu có tốt không, són tiểu là gì, tiểu dầm là gì, ngày đèn đỏ mặc gì, quần nguyệt san mặc được bao lâu",
  image: "/images/products/quan-lot-tham-hut.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: contentArticle3,
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://antcare.vn/kinh-nguyet/hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu/#article",
        "mainEntityOfPage": "https://antcare.vn/kinh-nguyet/hoi-dap-quan-kinh-nguyet-quan-chong-son-tieu/",
        "headline": "30 câu hỏi thường gặp về quần kinh nguyệt, quần chống són tiểu: kinh nguyệt, són tiểu, tiểu dầm và cách dùng",
        "description": "30 câu hỏi thường gặp về kinh nguyệt, ngày đèn đỏ, són tiểu, tiểu dầm và quần thấm hút: cách dùng, mặc qua đêm, ai nên dùng, giặt, an toàn, cách chọn.",
        "keywords": "quần kinh nguyệt câu hỏi thường gặp",
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
        "mainEntity": allFaqsArticle3.map(f => ({
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

const article4Obj = {
  id: 16,
  slug: "quan-kinh-nguyet-mon-do-phai-co",
  group: "kinh-nguyet",
  oldSlugs: ["kien-thuc/quan-kinh-nguyet-mon-do-phai-co", "cam-nang/quan-kinh-nguyet-mon-do-phai-co"],
  title: "Quần kinh nguyệt: món đồ lót \"phải có\" trong tủ đồ của mọi chị em",
  metaTitle: "Quần kinh nguyệt: món đồ lót \"phải có\" trong tủ đồ của mọi chị em | ANTCARE",
  description: "Vì sao quần kinh nguyệt là món đồ lót phải có của mọi chị em: chủ động ngày đèn đỏ không cần băng, đỡ kích ứng, thoải mái, an toàn cho mọi độ tuổi.",
  excerpt: "Quần kinh nguyệt nên có trong tủ đồ của mọi chị em, từ học sinh đến phụ nữ trung niên, vì 2 lý do: chủ động trong ngày đèn đỏ mà không cần dán băng hay đặt gì vào cơ thể; thoải mái, nhẹ nhàng, đỡ bí và kích ứng hơn băng vệ sinh.",
  category: "Cẩm nang",
  date: "06/11/2026",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: "quần kinh nguyệt có nên mua không, quần kinh nguyệt có tốt không, đồ lót phải có của con gái, quần lót ngày đèn đỏ",
  image: "/images/products/quan-lot-tham-hut.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: contentArticle4,
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-mon-do-phai-co/#article",
        "mainEntityOfPage": "https://antcare.vn/kinh-nguyet/quan-kinh-nguyet-mon-do-phai-co/",
        "headline": "Quần kinh nguyệt: món đồ lót \"phải có\" trong tủ đồ của mọi chị em",
        "description": "Vì sao quần kinh nguyệt là món đồ lót phải có của mọi chị em: chủ động ngày đèn đỏ không cần băng, đỡ kích ứng, thoải mái, an toàn cho mọi độ tuổi.",
        "keywords": "quần kinh nguyệt có nên mua không",
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
        "mainEntity": faqsArticle4.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  },
  isPinned: false
};

const newArticles = [article1Obj, article2Obj, article3Obj, article4Obj];
const newSlugs = new Set(newArticles.map(a => a.slug));

// Filter out old versions if any exist
newsVi.list = newsVi.list.filter(item => !newSlugs.has(item.slug));

// Append new articles to newsVi.list
newsVi.list.push(...newArticles);

// Save news.json
fs.writeFileSync(newsJsonPath, JSON.stringify(newsVi, null, 2), 'utf8');

// Synchronize news.en.json
newsEn.list = newsVi.list.map(item => ({
  ...item,
  content: item.content
}));
newsEn.featured = newsVi.featured;
fs.writeFileSync(newsEnJsonPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('✅ Successfully added 4 new articles to news.json and news.en.json!');
console.log('Total articles in list:', newsVi.list.length);
newsVi.list.forEach((item, idx) => {
  console.log(`${idx + 1}. [ID: ${item.id}] [${item.category}] /kinh-nguyet/${item.slug}`);
});

