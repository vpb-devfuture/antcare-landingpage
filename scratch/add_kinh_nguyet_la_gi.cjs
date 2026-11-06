const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsEnJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const newsVi = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnJsonPath, 'utf8'));

// 1. Helper: render interactive FAQ Accordion
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

// 2. Sources: 3 top authoritative medical sources
const sources3Html = `
<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tài liệu y khoa tham khảo (3 nguồn hàng đầu)</h3>
  <ul>
    <li><a href="https://nidirect.gov.uk/conditions/period-problems" rel="nofollow" target="_blank">Cơ quan Dịch vụ Y tế Quốc gia Anh (NHS / NI Direct) – Hướng dẫn y khoa về chu kỳ, kinh nguyệt nhiều, đau bụng kinh &amp; hội chứng tiền kinh nguyệt (PMS)</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">The Conversation &amp; BMJ Sexual &amp; Reproductive Health – Nghiên cứu định lượng máu kinh bình thường và ngưỡng cảnh báo cường kinh 80ml</a></li>
    <li><a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/Tampon-Safety-and-Toxic-Shock-Syndrome.aspx" rel="nofollow" target="_blank">Viện Hàn lâm Nhi khoa Hoa Kỳ (AAP / HealthyChildren.org) – Hướng dẫn chăm sóc sức khỏe chu kỳ kinh nguyệt và an toàn vệ sinh phụ nữ</a></li>
  </ul>
</section>
`;

// 3. 3 Related Articles Box
function renderRelatedArticlesBox() {
  const related = [
    {
      slug: 'ngay-kinh-nguyet-nen-dung-gi',
      title: 'Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn',
      desc: 'Băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt.'
    },
    {
      slug: 'phan-biet-quan-chong-trao-va-quan-kinh-nguyet',
      title: 'Quần chống trào và quần kinh nguyệt khác nhau thế nào?',
      desc: 'Đừng nhầm hai loại này: so sánh cấu tạo và khả năng thấm hút.'
    },
    {
      slug: 'quan-boy-short-ngay-kinh-nguyet',
      title: 'Vì sao quần boy short là kiểu quần lót tối ưu cho ngày kinh nguyệt?',
      desc: 'Chặn tràn mép háng, vùng đáy rộng về phía sau, ngủ không lo tràn.'
    }
  ];

  let html = `
<div class="related-articles-box my-8 p-5 bg-[#FAF8FD] rounded-2xl border border-[#E6DFF2]">
  <h4 class="font-bold text-[#6633B4] mb-3.5 flex items-center gap-2 text-sm sm:text-base">
    <span class="material-symbols-outlined text-base text-[#FD711A]">menu_book</span>
    <span>Bài viết tham khảo cùng chuyên mục (3 bài chọn lọc)</span>
  </h4>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
`;
  related.forEach(item => {
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

// 4. Build article content
const articleContent = `
<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Góc kiến thức · Kinh nguyệt</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Kinh nguyệt là gì? Cẩm nang đầy đủ về chu kỳ, triệu chứng, cách chăm sóc và ngày đèn đỏ nên dùng gì</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 05/11/2026 · Đọc khoảng 18 phút · Thông tin tham khảo, không thay thế tư vấn của bác sĩ</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> <strong>Kinh nguyệt</strong> là hiện tượng lớp niêm mạc tử cung bong ra và chảy máu qua âm đạo theo chu kỳ hằng tháng khi không có thai. Ở người trưởng thành, <strong>một chu kỳ thường dài khoảng 21–35 ngày</strong> (trung bình 28 ngày), <strong>số ngày hành kinh thường 2–7 ngày</strong>. Trước và trong kỳ kinh có thể có đau bụng dưới, đau lưng, căng tức ngực, đầy hơi, mệt mỏi, thay đổi tâm trạng. Chăm sóc tốt gồm: vệ sinh đúng cách, thay sản phẩm kinh nguyệt đúng giờ, ăn đủ sắt và uống đủ nước, vận động nhẹ, chườm ấm khi đau, ngủ đủ và theo dõi chu kỳ. Nên đi khám khi kinh ra rất nhiều, kéo dài trên 7 ngày, đau dữ dội, mất kinh nhiều tháng hoặc ra máu bất thường.</div>

<nav class="toc" aria-label="Mục lục">
  <details class="toc-accordion" open>
    <summary class="font-bold text-[#6633B4] cursor-pointer flex items-center justify-between text-sm sm:text-base select-none">
      <span class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-base">format_list_bulleted</span>
        <span>Mục lục cẩm nang kinh nguyệt (11 phần chính)</span>
      </span>
      <span class="text-xs text-[#FD711A] font-medium flex items-center gap-1">
        Thu gọn / Mở rộng <span class="material-symbols-outlined text-sm">unfold_more</span>
      </span>
    </summary>
    <ol class="mt-3 text-xs sm:text-sm space-y-1 pl-4">
      <li><a href="#kinh-nguyet-la-gi">1. Kinh nguyệt là gì?</a></li>
      <li><a href="#chu-ky-kinh-nguyet">2. Chu kỳ kinh nguyệt: 4 giai đoạn</a></li>
      <li><a href="#binh-thuong">3. Thế nào là kinh nguyệt bình thường?</a></li>
      <li><a href="#cach-tinh-chu-ky">4. Cách tính và theo dõi chu kỳ kinh nguyệt</a></li>
      <li><a href="#trieu-chung">5. Triệu chứng trước và trong kỳ kinh</a></li>
      <li><a href="#dau-bung-kinh">6. Đau bụng kinh: nguyên nhân và cách giảm</a></li>
      <li><a href="#cham-soc">7. Cách chăm sóc cơ thể trong ngày đèn đỏ</a></li>
      <li><a href="#quan-niem-sai">8. Những quan niệm sai về kinh nguyệt</a></li>
      <li><a href="#bat-thuong">9. Dấu hiệu kinh nguyệt bất thường cần đi khám</a></li>
      <li><a href="#theo-giai-doan-cuoc-doi">10. Kinh nguyệt qua các giai đoạn cuộc đời</a></li>
      <li><a href="#nen-dung-gi">11. Ngày kinh nguyệt nên dùng gì?</a></li>
      <li><a href="#faq">12. Câu hỏi thường gặp</a></li>
    </ol>
  </details>
</nav>

<!-- =============================== 1 =============================== -->
<h2 id="kinh-nguyet-la-gi">1. Kinh nguyệt là gì?</h2>
<p>Kinh nguyệt (còn gọi là hành kinh, "đến tháng", "ngày đèn đỏ", "ngày dâu") là hiện tượng chảy máu sinh lý từ tử cung ra ngoài qua âm đạo, lặp lại khoảng mỗi tháng một lần ở người có tử cung, từ tuổi dậy thì đến tuổi mãn kinh.</p>
<p>Mỗi tháng, dưới tác động của hai nội tiết tố chính là <strong>estrogen</strong> và <strong>progesterone</strong>, lớp niêm mạc bên trong tử cung dày lên để chuẩn bị đón trứng đã thụ tinh làm tổ. Nếu không có thai, nồng độ nội tiết tố giảm xuống, lớp niêm mạc này bong ra. Máu kinh vì vậy không chỉ là máu mà gồm máu, mảnh niêm mạc tử cung và dịch tiết âm đạo. Đó cũng là lý do máu kinh có thể đặc hơn, sẫm màu hơn hoặc có những cục nhỏ.</p>
<p>Kinh nguyệt đều đặn là một "dấu hiệu sinh tồn" của sức khỏe sinh sản. Những thay đổi lớn về chu kỳ, lượng máu hay mức độ đau có thể là tín hiệu sớm của rối loạn nội tiết, bệnh phụ khoa, thiếu máu, căng thẳng hoặc thay đổi cân nặng.</p>

<!-- =============================== 2 =============================== -->
<h2 id="chu-ky-kinh-nguyet">2. Chu kỳ kinh nguyệt diễn ra như thế nào? 4 giai đoạn</h2>
<p><strong>Chu kỳ kinh nguyệt</strong> được tính từ <strong>ngày đầu tiên có kinh</strong> của kỳ này đến <strong>ngày trước ngày đầu tiên có kinh</strong> của kỳ sau. Một chu kỳ gồm 4 giai đoạn nối tiếp nhau:</p>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-xl mx-auto">
  <img src="/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg" alt="Sơ đồ 4 giai đoạn của chu kỳ kinh nguyệt 28 ngày" class="w-full h-auto object-cover max-h-[380px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Sơ đồ 4 giai đoạn chu kỳ kinh nguyệt 28 ngày: Hành kinh (ngày 1–5), Pha nang noãn (ngày 1–13), Rụng trứng (ngày 14) và Pha hoàng thể (ngày 15–28).
  </figcaption>
</figure>

<div class="table-scroll">
<table>
  <tr><th>Giai đoạn</th><th>Thời điểm (chu kỳ 28 ngày)</th><th>Điều gì xảy ra</th><th>Cơ thể có thể cảm thấy</th></tr>
  <tr><td><strong>1. Hành kinh</strong></td><td>Ngày 1–5</td><td>Niêm mạc tử cung bong ra, chảy máu kinh</td><td>Đau bụng dưới, đau lưng, mệt, tâm trạng thất thường</td></tr>
  <tr><td><strong>2. Pha nang noãn</strong></td><td>Ngày 1–13</td><td>Estrogen tăng dần, nang trứng phát triển, niêm mạc dày lên</td><td>Sau khi hết kinh: nhiều năng lượng, da đẹp hơn</td></tr>
  <tr><td><strong>3. Rụng trứng</strong></td><td>Khoảng ngày 14</td><td>Trứng trưởng thành rời buồng trứng</td><td>Dịch âm đạo trong, dai như lòng trắng trứng; có thể đau nhẹ một bên bụng dưới</td></tr>
  <tr><td><strong>4. Pha hoàng thể</strong></td><td>Ngày 15–28</td><td>Progesterone tăng để duy trì niêm mạc; nếu không có thai, nội tiết giảm và kỳ kinh mới bắt đầu</td><td>Hội chứng tiền kinh nguyệt: căng ngực, đầy hơi, nổi mụn, cáu gắt</td></tr>
</table>
</div>
<p class="meta">Mốc ngày mang tính minh họa cho chu kỳ 28 ngày. Với chu kỳ dài hoặc ngắn hơn, pha nang noãn thay đổi nhiều nhất; ngày rụng trứng thường cách kỳ kinh sau khoảng 14 ngày.</p>

<!-- =============================== 3 =============================== -->
<h2 id="binh-thuong">3. Thế nào là kinh nguyệt bình thường?</h2>
<div class="table-scroll">
<table>
  <tr><th>Tiêu chí</th><th>Thường được coi là bình thường</th><th>Cần lưu ý</th></tr>
  <tr><td>Độ dài chu kỳ</td><td>Khoảng 21–35 ngày ở người trưởng thành (một số tài liệu chấp nhận đến 40 ngày); tuổi dậy thì có thể dao động rộng hơn</td><td>Dưới 21 ngày, trên 35–40 ngày, hoặc chênh lệch nhiều giữa các tháng</td></tr>
  <tr><td>Số ngày hành kinh</td><td>2–7 ngày (trung bình khoảng 5 ngày)</td><td>Trên 7 ngày</td></tr>
  <tr><td>Lượng máu</td><td>Ra nhiều nhất trong 1–2 ngày đầu rồi giảm dần</td><td>Mất trên 80 ml mỗi kỳ; phải thay băng mỗi 1–2 giờ; tràn ra quần áo, ga giường thường xuyên</td></tr>
  <tr><td>Màu sắc</td><td>Đỏ tươi đến đỏ sẫm, nâu vào ngày cuối</td><td>Có mùi hôi bất thường, kèm sốt, đau</td></tr>
  <tr><td>Cục máu đông</td><td>Cục nhỏ (nhỏ hơn đồng xu) thỉnh thoảng</td><td>Cục to, thường xuyên</td></tr>
  <tr><td>Đau bụng</td><td>Đau âm ỉ, giảm khi chườm ấm hoặc thuốc giảm đau thông thường</td><td>Đau dữ dội, phải nghỉ học, nghỉ làm, không giảm khi dùng thuốc</td></tr>
</table>
</div>
<p>Mỗi người có một "bình thường" riêng. Điều quan trọng là <strong>chu kỳ của bạn có ổn định so với chính bạn không</strong>, và có thay đổi đột ngột hay không.</p>

<!-- =============================== 4 =============================== -->
<h2 id="cach-tinh-chu-ky">4. Cách tính và theo dõi chu kỳ kinh nguyệt</h2>
<ol>
  <li><strong>Ghi ngày đầu tiên có kinh</strong> (ngày có máu đỏ, không tính ngày chỉ ra lấm tấm) của mỗi kỳ.</li>
  <li><strong>Đếm số ngày</strong> từ ngày đầu có kinh kỳ này đến ngày trước ngày đầu có kinh kỳ sau: đó là độ dài chu kỳ.</li>
  <li><strong>Theo dõi ít nhất 3–6 tháng</strong> để biết chu kỳ trung bình và mức dao động.</li>
  <li><strong>Ghi thêm:</strong> số ngày hành kinh, ngày ra nhiều nhất, số lần thay sản phẩm mỗi ngày, mức đau (thang 0–10), triệu chứng đi kèm.</li>
</ol>
<p><strong>Ví dụ:</strong> có kinh ngày 3/10 và kỳ sau bắt đầu ngày 31/10, chu kỳ dài 28 ngày. Kỳ tiếp theo dự kiến khoảng 28/11.</p>
<p>Có thể dùng lịch giấy, ghi chú điện thoại hoặc ứng dụng theo dõi chu kỳ. Nhật ký này rất hữu ích khi đi khám, vì bác sĩ thường hỏi chính những thông tin trên.</p>

<!-- =============================== 5 =============================== -->
<h2 id="trieu-chung">5. Triệu chứng trước và trong kỳ kinh nguyệt</h2>
<h3>Dấu hiệu sắp có kinh và hội chứng tiền kinh nguyệt (PMS)</h3>
<p>Khoảng 1–2 tuần trước kỳ kinh, nhiều người có các triệu chứng của <strong>hội chứng tiền kinh nguyệt</strong>, liên quan đến thay đổi nội tiết tố. Triệu chứng thường tăng dần trong những ngày trước kỳ kinh và giảm khi kinh bắt đầu. Không phải ai cũng gặp.</p>
<div class="pc">
  <div><h4>Triệu chứng cơ thể</h4><ul><li>Căng tức, đau ngực</li><li>Đầy hơi, chướng bụng, giữ nước</li><li>Nổi mụn</li><li>Đau đầu, đau lưng</li><li>Mệt mỏi, buồn ngủ hoặc khó ngủ</li><li>Thèm ăn ngọt, mặn</li></ul></div>
  <div><h4>Triệu chứng tâm lý</h4><ul><li>Dễ cáu gắt, nhạy cảm</li><li>Thay đổi tâm trạng nhanh</li><li>Buồn bã, lo âu</li><li>Khó tập trung</li></ul></div>
</div>
<p>Khi các triệu chứng tâm lý nặng đến mức ảnh hưởng công việc, học tập, các mối quan hệ (ví dụ trầm cảm, lo âu rõ rệt theo chu kỳ), đó có thể là <strong>rối loạn khí sắc tiền kinh nguyệt (PMDD)</strong> và nên đi khám chuyên khoa.</p>
<h3>Triệu chứng trong những ngày hành kinh</h3>
<ul>
  <li>Đau quặn hoặc âm ỉ bụng dưới, có thể lan ra lưng, đùi.</li>
  <li>Đau lưng, mỏi người.</li>
  <li>Rối loạn tiêu hóa: đi ngoài lỏng, buồn nôn.</li>
  <li>Mệt mỏi, chóng mặt nhẹ, nhất là những ngày ra nhiều.</li>
  <li>Da vùng kín dễ ẩm, hăm, kích ứng khi dùng sản phẩm kinh nguyệt không phù hợp hoặc thay không đúng giờ.</li>
</ul>

<!-- =============================== 6 =============================== -->
<h2 id="dau-bung-kinh">6. Đau bụng kinh: nguyên nhân và cách giảm</h2>
<p>Đau bụng kinh xảy ra do tử cung co bóp để đẩy lớp niêm mạc ra ngoài. Có hai loại:</p>
<ul>
  <li><strong>Đau bụng kinh nguyên phát:</strong> không do bệnh lý, thường bắt đầu từ tuổi dậy thì, đau nhiều nhất ngày 1–2 rồi giảm dần.</li>
  <li><strong>Đau bụng kinh thứ phát:</strong> do bệnh lý như lạc nội mạc tử cung, u xơ tử cung, viêm vùng chậu… thường xuất hiện muộn hơn, đau tăng dần theo thời gian, có thể đau cả ngoài kỳ kinh hoặc khi quan hệ.</li>
</ul>
<h3>8 cách giảm đau bụng kinh tại nhà</h3>
<ol>
  <li><strong>Chườm ấm</strong> bụng dưới, lưng bằng túi chườm, chai nước ấm.</li>
  <li><strong>Vận động nhẹ:</strong> đi bộ, yoga, giãn cơ giúp giảm co thắt.</li>
  <li><strong>Tắm nước ấm</strong>, ngâm chân nước ấm.</li>
  <li><strong>Xoa bóp</strong> nhẹ nhàng vùng bụng dưới theo chiều kim đồng hồ.</li>
  <li><strong>Uống đủ nước</strong>, hạn chế đồ uống có cồn, nhiều cà phê.</li>
  <li><strong>Ngủ đủ</strong>, giảm căng thẳng.</li>
  <li><strong>Mặc đồ thoải mái</strong>, tránh quần cạp quá chật ép bụng.</li>
  <li><strong>Thuốc giảm đau không kê đơn</strong> như paracetamol hoặc ibuprofen theo đúng liều trên hướng dẫn. Người đau dạ dày, hen, bệnh thận, đang mang thai hoặc dùng thuốc khác nên hỏi dược sĩ, bác sĩ trước.</li>
</ol>
<p>Nếu đau đến mức phải nghỉ học, nghỉ làm, uống thuốc không đỡ, hoặc đau ngày càng tăng qua các tháng, hãy đi khám phụ khoa. Bác sĩ có thể chỉ định siêu âm, và có nhiều phương pháp điều trị hiệu quả.</p>

<!-- =============================== 7 =============================== -->
<h2 id="cham-soc">7. Cách chăm sóc cơ thể trong ngày đèn đỏ</h2>
<h3>1. Vệ sinh vùng kín đúng cách</h3>
<ul>
  <li>Rửa vùng kín bằng nước sạch 2–3 lần mỗi ngày; nếu dùng dung dịch vệ sinh, chọn loại dịu nhẹ, chỉ dùng bên ngoài.</li>
  <li><strong>Không thụt rửa sâu</strong> trong âm đạo; âm đạo có cơ chế tự làm sạch.</li>
  <li>Lau từ trước ra sau sau khi đi vệ sinh.</li>
  <li><strong>Thay sản phẩm kinh nguyệt đúng giờ:</strong> băng vệ sinh khoảng 4–6 giờ hoặc khi đầy; tampon 4–8 giờ, không quá 8 giờ; cốc, đĩa và quần kinh nguyệt theo hướng dẫn của nhà sản xuất.</li>
  <li>Rửa tay trước và sau khi thay sản phẩm.</li>
  <li>Mặc quần lót thoáng, thay hằng ngày; giặt sạch, phơi nơi thoáng.</li>
</ul>
<h3>2. Dinh dưỡng</h3>
<div class="table-scroll">
<table>
  <tr><th>Nên ưu tiên</th><th>Vì sao</th></tr>
  <tr><td>Thực phẩm giàu sắt: thịt đỏ, gan, trứng, đậu, rau xanh đậm</td><td>Bù lượng sắt mất qua máu kinh, phòng thiếu máu</td></tr>
  <tr><td>Vitamin C: cam, ổi, kiwi</td><td>Giúp hấp thu sắt tốt hơn</td></tr>
  <tr><td>Cá, các loại hạt</td><td>Cung cấp chất béo tốt, magie</td></tr>
  <tr><td>Nước, canh, nước ấm</td><td>Giảm đầy hơi, mệt mỏi</td></tr>
  <tr><th>Nên hạn chế</th><th>Vì sao</th></tr>
  <tr><td>Đồ quá mặn, đồ ăn nhanh</td><td>Làm tăng giữ nước, đầy hơi</td></tr>
  <tr><td>Rượu bia, nhiều cà phê</td><td>Có thể làm đau ngực, đau đầu, khó ngủ nặng hơn</td></tr>
  <tr><td>Quá nhiều đồ ngọt</td><td>Năng lượng lên xuống thất thường, dễ mệt</td></tr>
</table>
</div>
<h3>3. Vận động và nghỉ ngơi</h3>
<p>Không cần kiêng vận động trong ngày đèn đỏ. Đi bộ, yoga, đạp xe nhẹ, bơi (khi dùng tampon, cốc hoặc đĩa) đều giúp giảm đau và cải thiện tâm trạng. Những ngày ra nhiều, mệt, hãy giảm cường độ và ngủ đủ 7–8 tiếng.</p>
<h3>4. Chăm sóc tâm lý</h3>
<p>Thay đổi tâm trạng trước và trong kỳ kinh là phổ biến. Dành thời gian nghỉ, chia sẻ với người thân, giảm bớt việc không cần thiết trong những ngày mệt nhất. Nếu buồn bã, lo âu kéo dài hoặc nghiêm trọng, hãy tìm sự hỗ trợ của chuyên gia.</p>
<h3>5. Chọn sản phẩm kinh nguyệt phù hợp</h3>
<p>Sản phẩm kinh nguyệt ảnh hưởng trực tiếp đến cảm giác thoải mái, nguy cơ hăm, kích ứng và sự tự tin trong ngày đèn đỏ. Xem phần <a href="#nen-dung-gi" class="text-[#6633B4] font-bold underline">ngày kinh nguyệt nên dùng gì</a> ở dưới.</p>

<!-- =============================== 8 =============================== -->
<h2 id="quan-niem-sai">8. Những quan niệm sai về kinh nguyệt</h2>
<div class="table-scroll">
<table>
  <tr><th>Quan niệm</th><th>Sự thật</th></tr>
  <tr><td>"Đến tháng không được gội đầu, tắm"</td><td>Tắm, gội bằng nước ấm, lau khô nhanh là bình thường và giúp sạch sẽ, dễ chịu hơn. Chỉ nên tránh để lạnh, ngồi lâu khi tóc ướt.</td></tr>
  <tr><td>"Đến tháng không được tập thể dục"</td><td>Vận động nhẹ đến vừa giúp giảm đau, giảm căng thẳng. Hãy nghe cơ thể và điều chỉnh cường độ.</td></tr>
  <tr><td>"Máu kinh là máu bẩn, phải xả hết"</td><td>Máu kinh là máu và mô niêm mạc bình thường, không phải "máu độc". Ra quá nhiều là dấu hiệu cần đi khám, không phải để "xả độc".</td></tr>
  <tr><td>"Kinh nguyệt có cục máu là bệnh"</td><td>Cục máu nhỏ thỉnh thoảng là bình thường; cục to, thường xuyên mới cần khám.</td></tr>
  <tr><td>"Đau bụng kinh nhiều là bình thường, phải chịu"</td><td>Đau dữ dội ảnh hưởng sinh hoạt không nên chịu đựng; có thể do bệnh lý như lạc nội mạc tử cung và có cách điều trị.</td></tr>
  <tr><td>"Đang có kinh thì không thể mang thai"</td><td>Khả năng thấp nhưng không phải bằng không, nhất là người có chu kỳ ngắn.</td></tr>
</table>
</div>

<!-- =============================== 9 =============================== -->
<h2 id="bat-thuong">9. Dấu hiệu kinh nguyệt bất thường cần đi khám</h2>
<ul>
  <li><strong>Ra nhiều (cường kinh):</strong> phải thay băng, tampon mỗi 1–2 giờ, dùng 2 sản phẩm cùng lúc, tràn ra quần áo thường xuyên, có cục máu đông lớn.</li>
  <li><strong>Kéo dài (rong kinh):</strong> hành kinh trên 7 ngày.</li>
  <li><strong>Đau dữ dội</strong>, đau tăng dần theo tháng, đau khi quan hệ, đau ngoài kỳ kinh.</li>
  <li><strong>Kinh nguyệt không đều:</strong> chu kỳ dưới 21 ngày hoặc trên 35–40 ngày kéo dài, hoặc thay đổi thất thường.</li>
  <li><strong>Mất kinh</strong> 3 tháng trở lên khi không mang thai, không cho con bú.</li>
  <li><strong>Ra máu bất thường:</strong> giữa hai kỳ kinh, sau quan hệ, hoặc sau mãn kinh trên 1 năm.</li>
  <li><strong>Dấu hiệu thiếu máu:</strong> mệt, chóng mặt, khó thở khi gắng sức, da xanh.</li>
  <li><strong>Sốt, khí hư hôi, đau bụng dưới</strong> kèm ra máu.</li>
  <li><strong>Đang dùng tampon, cốc, đĩa</strong> mà sốt cao đột ngột, nôn, tiêu chảy, phát ban giống cháy nắng, chóng mặt: lấy sản phẩm ra và đi cấp cứu ngay (nghi hội chứng sốc độc tố TSS).</li>
</ul>
<p>Mang theo nhật ký chu kỳ (ngày có kinh, số ngày, số lần thay sản phẩm, mức đau) khi đi khám sẽ giúp bác sĩ chẩn đoán nhanh hơn.</p>

<!-- =============================== 10 =============================== -->
<h2 id="theo-giai-doan-cuoc-doi">10. Kinh nguyệt qua các giai đoạn cuộc đời</h2>
<div class="table-scroll">
<table>
  <tr><th>Giai đoạn</th><th>Đặc điểm</th><th>Lưu ý</th></tr>
  <tr><td><strong>Tuổi dậy thì</strong></td><td>Kỳ kinh đầu tiên thường đến trong khoảng 10–15 tuổi, phần lớn khoảng 12–13 tuổi; 1–2 năm đầu chu kỳ thường chưa đều</td><td>Chuẩn bị trước cho con kiến thức và sản phẩm; nên khám nếu có kinh trước 8 tuổi hoặc đến 15 tuổi vẫn chưa có kinh</td></tr>
  <tr><td><strong>Tuổi sinh sản</strong></td><td>Chu kỳ ổn định nhất</td><td>Theo dõi thay đổi bất thường; khám phụ khoa định kỳ</td></tr>
  <tr><td><strong>Sau sinh</strong></td><td>Sản dịch kéo dài vài tuần; kinh nguyệt quay lại sớm hay muộn tùy việc cho con bú</td><td>Không đặt sản phẩm vào âm đạo trong giai đoạn sản dịch; dùng băng hoặc quần thấm hút</td></tr>
  <tr><td><strong>Tiền mãn kinh</strong></td><td>Chu kỳ thất thường, có tháng ra nhiều, có tháng mất kinh; bốc hỏa, mất ngủ</td><td>Ra máu quá nhiều, kéo dài vẫn cần khám; có thể kèm són tiểu nhẹ</td></tr>
  <tr><td><strong>Mãn kinh</strong></td><td>Hết kinh liên tục 12 tháng</td><td>Mọi trường hợp ra máu sau mãn kinh đều cần đi khám</td></tr>
</table>
</div>

<!-- =============================== 11 =============================== -->
<h2 id="nen-dung-gi">11. Ngày kinh nguyệt nên dùng gì?</h2>
<p>Hiện nay có 5 lựa chọn phổ biến: <strong>băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san và quần kinh nguyệt</strong>. Mỗi loại có ưu nhược điểm riêng; bảng dưới đây tóm tắt để bạn chọn nhanh. Xem bài phân tích chi tiết: <a href="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" class="text-[#6633B4] font-bold underline">Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn phổ biến nhất</a>.</p>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-xl mx-auto">
  <img src="/images/products/so-sanh-quan-nguyet-san.jpg" alt="Quần kinh nguyệt ANTCARE giải pháp êm ái cho ngày đèn đỏ" class="w-full h-auto object-cover max-h-[340px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Quần kinh nguyệt công nghệ 4 lớp: Lựa chọn êm ái, thoáng khí và có thể tái sử dụng bền bỉ.
  </figcaption>
</figure>

<div class="table-scroll">
<table>
  <tr><th>Sản phẩm</th><th>Là gì</th><th>Ưu điểm chính</th><th>Hạn chế chính</th><th>Phù hợp nhất với</th></tr>
  <tr><td><strong>Băng vệ sinh</strong></td><td>Miếng thấm dùng một lần, dán vào quần lót</td><td>Dễ dùng nhất, bán ở mọi nơi</td><td>Bí, dễ hăm, xô lệch, nhiều rác thải</td><td>Người mới có kinh, sau sinh</td></tr>
  <tr><td><strong>Tampon</strong></td><td>Nút bông đặt trong âm đạo</td><td>Gọn, đi bơi được</td><td>Phải thay mỗi 4–8 giờ; nguy cơ sốc độc tố nếu để lâu</td><td>Người hay bơi, chơi thể thao</td></tr>
  <tr><td><strong>Cốc nguyệt san</strong></td><td>Cốc silicone hứng máu kinh trong âm đạo</td><td>Dùng lại nhiều năm, ít rác thải</td><td>Cần làm quen; vài chu kỳ đầu dễ rò rỉ</td><td>Người muốn tiết kiệm, ít rác thải</td></tr>
  <tr><td><strong>Đĩa nguyệt san</strong></td><td>Đĩa mềm đặt ở vòm âm đạo</td><td>Chứa nhiều nhất</td><td>Khó đặt, khó tháo, dễ đổ</td><td>Người ra nhiều, đã quen sản phẩm đặt trong</td></tr>
  <tr><td><strong>Quần kinh nguyệt</strong></td><td>Quần lót có lõi thấm hút và lớp chống thấm</td><td>Mặc như quần lót, không đặt vào trong, thoải mái, dùng lại</td><td>Ngày ra rất nhiều cần thay giữa ngày hoặc kết hợp</td><td>Hầu hết chị em; lớp dự phòng cho cốc, đĩa, tampon</td></tr>
</table>
</div>

<h3>Vì sao quần kinh nguyệt là lựa chọn nền tảng cho đa số chị em?</h3>
<ul>
  <li><strong>Không phải đặt gì vào cơ thể:</strong> dùng được cho học sinh mới có kinh, phụ nữ sau sinh, người không quen sản phẩm đặt trong.</li>
  <li><strong>Thoải mái hơn băng vệ sinh:</strong> không keo dán, không cánh băng cọ xát, ít xô lệch, đỡ bí và hăm.</li>
  <li><strong>Lớp dự phòng tốt nhất:</strong> cốc, đĩa, tampon đều có thể rò rỉ vào ngày nhiều; mặc quần kinh nguyệt thay vì dán thêm băng.</li>
  <li><strong>Nguy cơ sốc độc tố rất thấp</strong> vì sản phẩm nằm ngoài cơ thể.</li>
  <li><strong>Tái sử dụng</strong>, tiết kiệm dài hạn và giảm rác thải ra môi trường.</li>
  <li><strong>Linh hoạt theo chu kỳ:</strong> thấm nhẹ cho ngày đầu, cuối; thấm nhiều cho ngày giữa và ban đêm; kết hợp cốc, đĩa vào ngày ra nhiều nhất.</li>
</ul>
<p>Lưu ý: hãy chọn <a href="/kinh-nguyet/phan-biet-quan-chong-trao-va-quan-kinh-nguyet" class="text-[#6633B4] font-bold underline">quần kinh nguyệt đúng nghĩa</a> (có lõi thấm hút, ghi rõ mức thấm), không nhầm với quần chống trào chỉ có lớp chống thấm và vẫn phải dùng kèm băng. Dáng boy short có vùng thấm rộng và ống ôm đùi giúp chặn tràn ở mép và phía sau khi ngủ.</p>

<h3>Ngày ra nhiều dùng gì để không tràn?</h3>
<div class="table-scroll">
<table>
  <tr><th>Cách kết hợp</th><th>Phù hợp với</th></tr>
  <tr><td>Quần kinh nguyệt thấm nhiều, thay giữa ngày</td><td>Người không muốn dùng sản phẩm đặt trong cơ thể</td></tr>
  <tr><td>Cốc hoặc đĩa nguyệt san + quần kinh nguyệt</td><td>Người ra nhiều, đã quen sản phẩm đặt trong</td></tr>
  <tr><td>Tampon + quần kinh nguyệt</td><td>Ban ngày, cần gọn nhẹ; nhớ thay tampon đúng giờ</td></tr>
</table>
</div>
<p>Nếu phải thay sản phẩm mỗi 1–2 giờ hoặc ra cục máu đông lớn thường xuyên, hãy đi khám vì đó có thể là cường kinh.</p>

<div class="cta">
  <h4>Quần kinh nguyệt ANTCARE</h4>
  <p>ANTCARE (Kiến chăm tổ) là thương hiệu chăm sóc sức khỏe cho phụ nữ và gia đình Việt. Quần kinh nguyệt ANTCARE có lõi thấm hút nhiều lớp và lớp chống thấm, dáng ôm vừa, thoáng, dễ giặt, nhanh khô: mặc thay băng vệ sinh ngày ít đến vừa, làm lớp dự phòng cho cốc, đĩa ngày nhiều.</p>
  <a class="btn" href="/quan-lot-tham-hut">Khám phá quần kinh nguyệt ANTCARE</a>
  <a class="btn" href="tel:0969032360">Tư vấn miễn phí: 0969 032 360</a>
</div>

<!-- =============================== FAQ =============================== -->
<h2 id="faq">12. Câu hỏi thường gặp về kinh nguyệt</h2>
${renderFaqAccordion([
  {
    q: 'Kinh nguyệt là gì?',
    a: '<p>Kinh nguyệt là hiện tượng lớp niêm mạc tử cung bong ra và chảy máu qua âm đạo theo chu kỳ hằng tháng khi không có thai, diễn ra từ tuổi dậy thì đến tuổi mãn kinh.</p>'
  },
  {
    q: 'Chu kỳ kinh nguyệt bao nhiêu ngày là bình thường?',
    a: '<p>Ở người trưởng thành, chu kỳ kinh nguyệt thường dài khoảng 21–35 ngày, trung bình 28 ngày; số ngày hành kinh thường từ 2 đến 7 ngày. Tuổi dậy thì và tiền mãn kinh chu kỳ có thể dao động nhiều hơn.</p>'
  },
  {
    q: 'Cách tính chu kỳ kinh nguyệt như thế nào?',
    a: '<p>Đếm từ ngày đầu tiên có kinh của kỳ này đến ngày trước ngày đầu tiên có kinh của kỳ sau. Nên theo dõi ít nhất 3–6 tháng để biết chu kỳ trung bình của mình.</p>'
  },
  {
    q: 'Dấu hiệu sắp có kinh là gì?',
    a: '<p>Khoảng 1–2 tuần trước kỳ kinh có thể căng tức ngực, đầy hơi, nổi mụn, đau lưng, mệt mỏi, thèm ăn, dễ cáu gắt hoặc thay đổi tâm trạng. Đây là hội chứng tiền kinh nguyệt (PMS) và không phải ai cũng gặp.</p>'
  },
  {
    q: 'Làm sao để giảm đau bụng kinh?',
    a: '<p>Chườm ấm bụng dưới, vận động nhẹ, tắm nước ấm, xoa bóp bụng, uống đủ nước, ngủ đủ và có thể dùng thuốc giảm đau không kê đơn như paracetamol hoặc ibuprofen theo hướng dẫn. Đau dữ dội, không đỡ khi dùng thuốc cần đi khám.</p>'
  },
  {
    q: 'Đến tháng có nên gội đầu, tắm không?',
    a: '<p>Có. Tắm, gội bằng nước ấm và lau khô nhanh là bình thường, giúp sạch sẽ và dễ chịu hơn; chỉ nên tránh để cơ thể bị lạnh hoặc để tóc ướt lâu.</p>'
  },
  {
    q: 'Đến tháng nên ăn gì?',
    a: '<p>Nên ăn thực phẩm giàu sắt như thịt đỏ, trứng, đậu, rau xanh đậm, kết hợp trái cây giàu vitamin C, uống đủ nước; hạn chế đồ quá mặn, rượu bia và nhiều cà phê.</p>'
  },
  {
    q: 'Kinh nguyệt ra cục máu đông có sao không?',
    a: '<p>Cục máu nhỏ thỉnh thoảng xuất hiện là bình thường. Nếu thường xuyên ra cục máu to, kèm ra rất nhiều máu, mệt, chóng mặt thì nên đi khám phụ khoa.</p>'
  },
  {
    q: 'Khi nào kinh nguyệt bất thường cần đi khám?',
    a: '<p>Nên đi khám khi phải thay băng mỗi 1–2 giờ, hành kinh trên 7 ngày, đau dữ dội, chu kỳ dưới 21 ngày hoặc trên 35–40 ngày kéo dài, mất kinh từ 3 tháng trở lên khi không mang thai, ra máu giữa kỳ, sau quan hệ hoặc sau mãn kinh.</p>'
  },
  {
    q: 'Ngày kinh nguyệt nên dùng gì?',
    a: '<p>Có 5 lựa chọn phổ biến: băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san và quần kinh nguyệt. Với đa số chị em, quần kinh nguyệt là lựa chọn nền tảng thoải mái, không phải đặt vào trong cơ thể và dùng lại được; ngày ra nhiều có thể thay giữa ngày hoặc kết hợp với cốc, đĩa nguyệt san.</p>'
  }
])}

<p class="note">Bài viết mang tính tham khảo y khoa, không thay thế chẩn đoán và điều trị của bác sĩ. Khi có dấu hiệu bất thường, hãy đi khám phụ khoa.</p>

${sources3Html}

${renderRelatedArticlesBox()}
</div>
`;

// 5. Assemble Article Object
const newArticle = {
  id: 12,
  slug: 'kinh-nguyet-la-gi',
  group: 'cam-nang-phu-nu',
  title: 'Kinh nguyệt là gì? Cẩm nang đầy đủ về chu kỳ, triệu chứng, cách chăm sóc và ngày đèn đỏ nên dùng gì',
  metaTitle: 'Kinh nguyệt là gì? Chu kỳ, triệu chứng, cách chăm sóc và nên dùng gì | ANTCARE',
  description: 'Kinh nguyệt là gì, chu kỳ bao nhiêu ngày là bình thường, triệu chứng, cách chăm sóc, giảm đau bụng kinh, dấu hiệu bất thường và ngày đèn đỏ nên dùng gì.',
  excerpt: 'Kinh nguyệt là gì, chu kỳ bao nhiêu ngày là bình thường, triệu chứng, cách chăm sóc, giảm đau bụng kinh, dấu hiệu bất thường và ngày đèn đỏ nên dùng gì.',
  category: 'Kinh nguyệt',
  date: '05/11/2026',
  datePublished: '2026-11-05',
  dateModified: '2026-11-05',
  keywords: 'kinh nguyệt là gì, chu kỳ kinh nguyệt, chu kỳ kinh nguyệt bao nhiêu ngày là bình thường, triệu chứng kinh nguyệt, đau bụng kinh, hội chứng tiền kinh nguyệt, cách chăm sóc khi đến tháng, kinh nguyệt không đều, ngày kinh nguyệt nên dùng gì',
  image: '/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg',
  author: 'ANTCARE – Kiến chăm tổ',
  content: articleContent,
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://antcare.vn/#org",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn/",
        "telephone": "+84969032360",
        "logo": "https://antcare.vn/logo.png"
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://antcare.vn/kinh-nguyet/kinh-nguyet-la-gi#webpage",
        "url": "https://antcare.vn/kinh-nguyet/kinh-nguyet-la-gi",
        "name": "Kinh nguyệt là gì? Chu kỳ, triệu chứng, cách chăm sóc và nên dùng gì",
        "inLanguage": "vi",
        "about": {
          "@type": "MedicalCondition",
          "name": "Kinh nguyệt",
          "alternateName": [
            "Hành kinh",
            "Chu kỳ kinh nguyệt",
            "Menstruation"
          ]
        },
        "audience": {
          "@type": "PeopleAudience",
          "audienceType": "Phụ nữ, bạn gái tuổi dậy thì và gia đình"
        },
        "lastReviewed": "2026-11-05"
      },
      {
        "@type": "Article",
        "@id": "https://antcare.vn/kinh-nguyet/kinh-nguyet-la-gi#article",
        "mainEntityOfPage": "https://antcare.vn/kinh-nguyet/kinh-nguyet-la-gi",
        "isPartOf": {
          "@id": "https://antcare.vn/kinh-nguyet/kinh-nguyet-la-gi#webpage"
        },
        "headline": "Kinh nguyệt là gì? Cẩm nang đầy đủ về chu kỳ, triệu chứng, cách chăm sóc và ngày đèn đỏ nên dùng gì",
        "description": "Kinh nguyệt là gì, chu kỳ bao nhiêu ngày là bình thường, triệu chứng, cách chăm sóc, giảm đau bụng kinh, dấu hiệu bất thường và ngày đèn đỏ nên dùng gì.",
        "keywords": "kinh nguyệt là gì, chu kỳ kinh nguyệt, chu kỳ kinh nguyệt bao nhiêu ngày là bình thường, triệu chứng kinh nguyệt, đau bụng kinh, hội chứng tiền kinh nguyệt, cách chăm sóc khi đến tháng, kinh nguyệt không đều, ngày kinh nguyệt nên dùng gì",
        "inLanguage": "vi",
        "datePublished": "2026-11-05",
        "dateModified": "2026-11-05",
        "image": "https://antcare.vn/images/products/so-do-4-giai-doan-chu-ky-kinh-nguyet.jpg",
        "author": {
          "@id": "https://antcare.vn/#org"
        },
        "publisher": {
          "@id": "https://antcare.vn/#org"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://antcare.vn/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kinh nguyệt",
            "item": "https://antcare.vn/kinh-nguyet"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Kinh nguyệt là gì",
            "item": "https://antcare.vn/kinh-nguyet/kinh-nguyet-la-gi"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Kinh nguyệt là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kinh nguyệt là hiện tượng lớp niêm mạc tử cung bong ra và chảy máu qua âm đạo theo chu kỳ hằng tháng khi không có thai, diễn ra từ tuổi dậy thì đến tuổi mãn kinh."
            }
          },
          {
            "@type": "Question",
            "name": "Chu kỳ kinh nguyệt bao nhiêu ngày là bình thường?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ở người trưởng thành, chu kỳ kinh nguyệt thường dài khoảng 21–35 ngày, trung bình 28 ngày; số ngày hành kinh thường từ 2 đến 7 ngày. Tuổi dậy thì và tiền mãn kinh chu kỳ có thể dao động nhiều hơn."
            }
          },
          {
            "@type": "Question",
            "name": "Cách tính chu kỳ kinh nguyệt như thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Đếm từ ngày đầu tiên có kinh của kỳ này đến ngày trước ngày đầu tiên có kinh của kỳ sau. Nên theo dõi ít nhất 3–6 tháng để biết chu kỳ trung bình của mình."
            }
          },
          {
            "@type": "Question",
            "name": "Dấu hiệu sắp có kinh là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Khoảng 1–2 tuần trước kỳ kinh có thể căng tức ngực, đầy hơi, nổi mụn, đau lưng, mệt mỏi, thèm ăn, dễ cáu gắt hoặc thay đổi tâm trạng. Đây là hội chứng tiền kinh nguyệt và không phải ai cũng gặp."
            }
          },
          {
            "@type": "Question",
            "name": "Làm sao để giảm đau bụng kinh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chườm ấm bụng dưới, vận động nhẹ, tắm nước ấm, xoa bóp bụng, uống đủ nước, ngủ đủ và có thể dùng thuốc giảm đau không kê đơn như paracetamol hoặc ibuprofen theo hướng dẫn. Đau dữ dội, không đỡ khi dùng thuốc cần đi khám."
            }
          },
          {
            "@type": "Question",
            "name": "Đến tháng có nên gội đầu, tắm không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có. Tắm, gội bằng nước ấm và lau khô nhanh là bình thường, giúp sạch sẽ và dễ chịu hơn; chỉ nên tránh để cơ thể bị lạnh."
            }
          },
          {
            "@type": "Question",
            "name": "Đến tháng nên ăn gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nên ăn thực phẩm giàu sắt như thịt đỏ, trứng, đậu, rau xanh đậm, kết hợp trái cây giàu vitamin C, uống đủ nước; hạn chế đồ quá mặn, rượu bia và nhiều cà phê."
            }
          },
          {
            "@type": "Question",
            "name": "Kinh nguyệt ra cục máu đông có sao không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cục máu nhỏ thỉnh thoảng xuất hiện là bình thường. Nếu thường xuyên ra cục máu to, kèm ra rất nhiều máu, mệt, chóng mặt thì nên đi khám."
            }
          },
          {
            "@type": "Question",
            "name": "Khi nào kinh nguyệt bất thường cần đi khám?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nên đi khám khi phải thay băng mỗi 1–2 giờ, hành kinh trên 7 ngày, đau dữ dội, chu kỳ dưới 21 ngày hoặc trên 35–40 ngày kéo dài, mất kinh từ 3 tháng trở lên khi không mang thai, ra máu giữa kỳ, sau quan hệ hoặc sau mãn kinh."
            }
          },
          {
            "@type": "Question",
            "name": "Ngày kinh nguyệt nên dùng gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có 5 lựa chọn phổ biến: băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san và quần kinh nguyệt. Với đa số chị em, quần kinh nguyệt là lựa chọn nền tảng thoải mái, không phải đặt vào trong cơ thể và dùng lại được; ngày ra nhiều có thể thay giữa ngày hoặc kết hợp với cốc, đĩa nguyệt san."
            }
          }
        ]
      }
    ]
  }
};

// Filter out old version if it exists
newsVi.list = newsVi.list.filter(item => item.slug !== 'kinh-nguyet-la-gi');

// Insert newArticle right after the pinned article (at index 1) so it has high visibility as pillar
const pinnedItem = newsVi.list.find(x => x.isPinned);
const otherItems = newsVi.list.filter(x => !x.isPinned);

newsVi.list = [
  pinnedItem,
  newArticle,
  ...otherItems
];

// Save news.json
fs.writeFileSync(newsJsonPath, JSON.stringify(newsVi, null, 2), 'utf8');

// Synchronize news.en.json
newsEn.list = newsVi.list.map((item, idx) => {
  return {
    ...item,
    content: item.content
  };
});
newsEn.featured = newsVi.featured;
fs.writeFileSync(newsEnJsonPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('✅ Successfully added kinh-nguyet-la-gi! Total articles in list:', newsVi.list.length);
console.log('Article order:');
newsVi.list.forEach((x, i) => console.log(i + 1, x.slug, x.title));

