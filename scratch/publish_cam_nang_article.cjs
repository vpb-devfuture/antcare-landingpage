const fs = require('fs');
const path = require('path');

const contentHtml = `<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Góc kiến thức · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Ngày kinh nguyệt nên dùng gì? So sánh băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san và quần kinh nguyệt</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 15 phút · Thông tin tham khảo, không thay thế tư vấn của bác sĩ</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Có 5 lựa chọn phổ biến trong ngày kinh nguyệt: <strong>băng vệ sinh</strong> (dán trong quần lót, dùng một lần), <strong>tampon</strong> (nút bông đặt trong âm đạo, dùng một lần), <strong>cốc nguyệt san</strong> (cốc silicone hứng kinh, tái sử dụng), <strong>đĩa nguyệt san</strong> (đĩa mềm đặt sâu ở vòm âm đạo) và <strong>quần kinh nguyệt</strong> (quần lót có lớp thấm hút và chống thấm, giặt và dùng lại). Cốc và đĩa giữ được nhiều máu nhất nhưng phải đặt vào trong và khó làm quen. Tampon cần thay mỗi 4–8 giờ vì nguy cơ sốc độc tố. Băng vệ sinh dễ dùng nhưng bí, dễ xô lệch và tạo nhiều rác thải. <strong>Quần kinh nguyệt là lựa chọn nền tảng cân bằng nhất cho đa số chị em</strong>: không phải đặt vào trong, mặc như quần lót bình thường, tái sử dụng được, và là lớp dự phòng tốt nhất cho mọi sản phẩm khác vào những ngày ra nhiều.</div>

<nav class="toc" aria-label="Mục lục">
  <strong>Mục lục bài viết</strong>
  <ol>
    <li><a href="#bang-so-sanh">Bảng so sánh nhanh 5 lựa chọn</a></li>
    <li><a href="#bang-ve-sinh">1. Băng vệ sinh: lựa chọn quen thuộc nhất</a></li>
    <li><a href="#tampon">2. Tampon: gọn nhẹ nhưng phải thay đúng giờ</a></li>
    <li><a href="#coc-nguyet-san">3. Cốc nguyệt san: tiết kiệm, ít rác thải nhưng cần làm quen</a></li>
    <li><a href="#dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất nhưng khó dùng nhất</a></li>
    <li><a href="#quan-kinh-nguyet">5. Quần kinh nguyệt: mặc như quần lót, thấm như băng</a></li>
    <li><a href="#vi-sao-quan-kinh-nguyet">Vì sao quần kinh nguyệt là lựa chọn tối ưu cho đa số</a></li>
    <li><a href="#ngay-nhieu">Ngày ra nhiều dùng gì để không tràn?</a></li>
    <li><a href="#theo-doi-tuong">Chọn theo từng đối tượng và hoàn cảnh</a></li>
    <li><a href="#cach-chon-quan">Cách chọn quần kinh nguyệt tốt</a></li>
    <li><a href="#faq">Câu hỏi thường gặp</a></li>
  </ol>
</nav>

<p>Mỗi tháng, người có kinh nguyệt trải qua khoảng 3–7 ngày "đèn đỏ". Nếu tính từ tuổi dậy thì đến mãn kinh, đó là hàng nghìn ngày trong đời. Vậy mà rất nhiều chị em vẫn dùng một loại sản phẩm duy nhất từ khi mới có kinh, chỉ vì quen, mà chưa từng thử so sánh xem loại nào thực sự hợp với cơ thể và lối sống của mình. Bài viết này giải thích từng lựa chọn: <strong>là gì, dùng thế nào, ưu điểm, nhược điểm, ai nên dùng và ai không nên dùng</strong>, để bạn tự chọn đúng.</p>

<!-- =============================== BẢNG SO SÁNH =============================== -->
<h2 id="bang-so-sanh">Bảng so sánh nhanh 5 lựa chọn trong ngày kinh nguyệt</h2>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Tiêu chí</th><th>Băng vệ sinh</th><th>Tampon</th><th>Cốc nguyệt san</th><th>Đĩa nguyệt san</th><th>Quần kinh nguyệt</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Vị trí</strong></td><td>Ngoài cơ thể</td><td>Trong âm đạo</td><td>Trong âm đạo (phần dưới)</td><td>Trong âm đạo (vòm, sát cổ tử cung)</td><td>Ngoài cơ thể</td></tr>
    <tr><td><strong>Dùng lại</strong></td><td>Không</td><td>Không</td><td>Có, nhiều năm</td><td>Có (loại silicone) hoặc dùng 1 lần</td><td>Có, giặt và dùng lại</td></tr>
    <tr><td><strong>Thời gian dùng mỗi lần</strong></td><td>Thay mỗi 4–6 giờ hoặc khi đầy</td><td>Thay mỗi 4–8 giờ, tối đa 8 giờ</td><td>Theo hướng dẫn hãng, thường tối đa 12 giờ</td><td>Theo hướng dẫn hãng, thường tối đa 12 giờ</td><td>Tùy mức thấm, thường cả ngày với ngày ít</td></tr>
    <tr><td><strong>Khả năng chứa</strong></td><td>Trung bình</td><td>Trung bình</td><td>Khá cao</td><td>Cao nhất</td><td>Từ thấp đến trung bình, tùy mẫu</td></tr>
    <tr><td><strong>Độ dễ làm quen</strong></td><td>Rất dễ</td><td>Trung bình</td><td>Khó lúc đầu</td><td>Khó lúc đầu</td><td>Rất dễ</td></tr>
    <tr><td><strong>Cảm giác</strong></td><td>Bí, cộm, dễ xô lệch</td><td>Không cảm nhận nếu đặt đúng</td><td>Không cảm nhận nếu đặt đúng</td><td>Không cảm nhận nếu đặt đúng</td><td>Như quần lót thường</td></tr>
    <tr><td><strong>Nguy cơ sốc độc tố (TSS)</strong></td><td>Rất thấp</td><td>Có, phải thay đúng giờ</td><td>Hiếm</td><td>Hiếm</td><td>Rất thấp</td></tr>
    <tr><td><strong>Rác thải</strong></td><td>Nhiều</td><td>Nhiều</td><td>Rất ít</td><td>Ít (loại dùng lại)</td><td>Rất ít</td></tr>
    <tr><td><strong>Bơi lội</strong></td><td>Không</td><td>Có</td><td>Có</td><td>Có</td><td>Không (trừ đồ bơi chuyên dụng)</td></tr>
    <tr><td><strong>Dùng làm lớp dự phòng</strong></td><td>Được</td><td>Không</td><td>Không</td><td>Không</td><td><strong>Tốt nhất</strong></td></tr>
  </tbody>
</table>
</div>
<p class="meta">Khả năng chứa thay đổi nhiều giữa các mẫu trong cùng một loại. Thời gian thay luôn làm theo hướng dẫn của nhà sản xuất.</p>

<!-- =============================== BĂNG VỆ SINH =============================== -->
<h2 id="bang-ve-sinh">1. Băng vệ sinh: lựa chọn quen thuộc nhất</h2>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-bang-ve-sinh.jpg" alt="Băng vệ sinh truyền thống" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Băng vệ sinh: quen thuộc, dễ mua nhưng bí bách và dễ tràn viền khi nằm nghiêng.
  </figcaption>
</figure>

<h3>Băng vệ sinh là gì?</h3>
<p>Băng vệ sinh là miếng thấm hút dùng một lần, có lớp keo dán vào đáy quần lót. Cấu tạo thường gồm lớp bề mặt tiếp xúc da, lõi thấm (bông, giấy, hạt siêu thấm), và lớp đáy chống thấm. Có nhiều loại: hàng ngày, siêu mỏng, có cánh, ban đêm dài 29–42 cm.</p>

<h3>Cách dùng băng vệ sinh</h3>
<ol>
  <li>Rửa tay, bóc lớp giấy bảo vệ, dán băng vào giữa đáy quần lót; gấp cánh ôm quanh đáy quần.</li>
  <li>Thay băng mỗi 4–6 giờ, hoặc sớm hơn khi băng đầy, ẩm.</li>
  <li>Cuộn băng đã dùng trong giấy, bỏ vào thùng rác; không xả xuống bồn cầu.</li>
</ol>

<div class="pc">
  <div class="pros">
    <h4>Ưu điểm</h4>
    <ul>
      <li>Dễ dùng nhất, không cần học cách đặt</li>
      <li>Bán ở mọi nơi, giá rẻ mỗi miếng</li>
      <li>Nhiều kích cỡ cho ngày ít, ngày nhiều, ban đêm</li>
      <li>Không đặt vào trong cơ thể</li>
    </ul>
  </div>
  <div class="cons">
    <h4>Nhược điểm</h4>
    <ul>
      <li>Bí, ẩm, dễ gây hăm, kích ứng, nhất là mùa hè nóng ẩm</li>
      <li>Dễ xô lệch, tràn mép khi ngủ, vận động mạnh</li>
      <li>Cộm, lộ viền dưới váy ôm hoặc quần sáng màu</li>
      <li>Có mùi khó chịu khi máu tiếp xúc với không khí</li>
      <li>Tạo lượng rác thải nhựa lớn ra môi trường</li>
    </ul>
  </div>
</div>

<h3>Ai nên dùng băng vệ sinh?</h3>
<ul>
  <li>Bạn gái mới có kinh, người chưa quen sản phẩm đặt trong.</li>
  <li>Phụ nữ sau sinh trong giai đoạn sản dịch.</li>
  <li>Người cần lớp dự phòng tạm thời khi chưa có quần kinh nguyệt.</li>
</ul>

<h3>Ai không nên dùng (hoặc nên hạn chế)?</h3>
<ul>
  <li>Người da nhạy cảm, hay bị hăm, ngứa rát, kích ứng với băng vệ sinh.</li>
  <li>Người vận động nhiều, tập gym, yoga, chơi thể thao, đi bơi.</li>
  <li>Người muốn giảm rác thải nhựa và bảo vệ môi trường.</li>
</ul>

<!-- =============================== TAMPON =============================== -->
<h2 id="tampon">2. Tampon: gọn nhẹ nhưng phải thay đúng giờ</h2>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-tampon.jpg" alt="Tampon nút bông đặt trong âm đạo" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Tampon: gọn gàng cho thể thao nhưng bắt buộc phải thay đúng giờ vì nguy cơ sốc độc tố (TSS).
  </figcaption>
</figure>

<h3>Tampon là gì?</h3>
<p>Tampon là nút bông (hoặc bông pha sợi tổng hợp) hình trụ, đặt vào trong âm đạo để thấm máu kinh trước khi chảy ra ngoài. Có loại dùng ống đẩy (applicator) và loại đẩy bằng ngón tay; có nhiều mức thấm: nhỏ, thường, lớn, siêu lớn.</p>

<h3>Cách dùng tampon</h3>
<ol>
  <li>Rửa tay sạch; ngồi xổm, đứng gác một chân hoặc ngồi bồn cầu cho thoải mái.</li>
  <li>Đẩy tampon vào âm đạo hướng chếch về phía thắt lưng, đến khi không còn cảm giác cộm; sợi dây kéo để ngoài.</li>
  <li>Thay mỗi 4–8 giờ; kéo nhẹ dây để lấy ra.</li>
  <li>Dùng loại có độ thấm thấp nhất đủ cho lượng kinh; không dùng khi không có kinh.</li>
</ol>

<div class="pc">
  <div class="pros">
    <h4>Ưu điểm</h4>
    <ul>
      <li>Gọn gàng, không cộm, không lộ viền dưới trang phục bó sát</li>
      <li>Đi bơi, chơi thể thao, vận động mạnh được</li>
      <li>Không có cảm giác vướng víu nếu đặt đúng vị trí</li>
    </ul>
  </div>
  <div class="cons">
    <h4>Nhược điểm</h4>
    <ul>
      <li>Nguy cơ <strong>hội chứng sốc độc tố (TSS)</strong> nếu để quá lâu hoặc dùng độ thấm quá cao</li>
      <li>Có thể gây khô rát niêm mạc âm đạo, đau khi rút vào ngày kinh ít</li>
      <li>Không an toàn để ngủ qua đêm dài trên 8 giờ</li>
      <li>Dùng một lần, rác thải nhiều</li>
      <li>Nhiều chị em lần đầu sử dụng thấy ngại và khó đưa vào</li>
    </ul>
  </div>
</div>

<p><strong>Dấu hiệu TSS cần đi khám cấp cứu ngay:</strong> Sốt cao đột ngột, nôn mửa, tiêu chảy, phát ban đỏ giống cháy nắng, chóng mặt ngất xỉu, lú lẫn khi đang dùng tampon (hoặc sản phẩm đặt trong). Hãy lấy tampon ra ngay lập tức và đến bệnh viện gần nhất.</p>

<h3>Ai nên dùng tampon?</h3>
<ul>
  <li>Người hay bơi lội, chơi thể thao, cần sự gọn nhẹ trong vài giờ.</li>
  <li>Người đã quen thao tác đặt sản phẩm vào trong và luôn ghi nhớ thay đúng giờ.</li>
</ul>

<h3>Ai không nên dùng tampon?</h3>
<ul>
  <li>Người có tiền sử hội chứng sốc độc tố (TSS).</li>
  <li>Phụ nữ sau sinh trong giai đoạn sản dịch, người sau phẫu thuật phụ khoa.</li>
  <li>Người hay quên thay, người cần ngủ qua đêm dài trên 8 tiếng.</li>
  <li>Người đang bị viêm nhiễm phụ khoa hoặc đau rát âm đạo.</li>
</ul>

<!-- =============================== CỐC NGUYỆT SAN =============================== -->
<h2 id="coc-nguyet-san">3. Cốc nguyệt san: tiết kiệm, ít rác thải nhưng cần làm quen</h2>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Cốc nguyệt san silicone y tế" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Cốc nguyệt san: tiết kiệm, thân thiện môi trường nhưng có rào cản thao tác đặt và tháo.
  </figcaption>
</figure>

<h3>Cốc nguyệt san là gì?</h3>
<p>Cốc nguyệt san (menstrual cup) là cốc nhỏ hình chuông làm từ silicone y tế (hoặc TPE), gấp lại để đặt vào âm đạo. Khi mở ra, cốc bung tròn tạo lực hút nhẹ với thành âm đạo để <strong>hứng</strong> dịch kinh thay vì thấm hút. Một chiếc cốc có thể dùng bền bỉ từ 3–5 năm nếu tiệt trùng và bảo quản tốt.</p>

<h3>Cách dùng cốc nguyệt san</h3>
<ol>
  <li>Tiệt trùng cốc trước chu kỳ (đun sôi trong nước 5–10 phút); rửa tay sạch bằng xà phòng dịu nhẹ.</li>
  <li>Gấp cốc (kiểu chữ C, chữ V hoặc gấp đỉnh), nhẹ nhàng đưa vào âm đạo, buông tay để cốc tự bung; xoay nhẹ đáy cốc để kiểm tra độ kín khít.</li>
  <li>Đổ cốc theo thời gian hãng khuyến cáo (thường tối đa 10–12 giờ) hoặc sớm hơn vào ngày ra nhiều.</li>
  <li>Lấy ra: bóp nhẹ đáy cốc để triệt tiêu lực hút chân không, kéo nhẹ nhàng theo đường dích dắc, đổ kinh dịch, rửa sạch với nước rồi đặt lại.</li>
</ol>

<div class="pc">
  <div class="pros">
    <h4>Ưu điểm</h4>
    <ul>
      <li>Dùng lại nhiều năm, chi phí dài hạn cực kỳ tiết kiệm</li>
      <li>Gần như không phát sinh rác thải ra môi trường</li>
      <li>Chứa được khá nhiều, thời gian giữa hai lần đổ dài (lên đến 12 tiếng)</li>
      <li>Bơi lội, yoga, chạy bộ hoàn toàn thoải mái</li>
      <li>Tổng quan Lancet Public Health (2019) trên 3.300 người: An toàn, rò rỉ tương đương hoặc ít hơn băng vệ sinh và tampon</li>
    </ul>
  </div>
  <div class="cons">
    <h4>Nhược điểm</h4>
    <ul>
      <li>Cần thời gian làm quen và thực hành; vài chu kỳ đầu rất dễ bị rò rỉ</li>
      <li>Bất tiện khi cần đổ và vệ sinh cốc ở nhà vệ sinh công cộng không có bồn rửa riêng</li>
      <li>Phải chọn đúng kích cỡ (size) theo độ tuổi, chiều cao cổ tử cung và tiền sử sinh nở</li>
      <li>Có nguy cơ làm xê dịch vòng tránh thai (IUD) do lực hút khi tháo</li>
      <li>Ngày ra nhiều vẫn có thể bị tràn, đa số chị em vẫn cần quần lót dự phòng</li>
    </ul>
  </div>
</div>

<h3>Ai nên dùng cốc nguyệt san?</h3>
<ul>
  <li>Người muốn sống xanh, giảm rác thải, sẵn sàng kiên nhẫn làm quen trong 2–3 chu kỳ đầu.</li>
  <li>Người hay đi bơi, leo núi, chơi thể thao cường độ cao.</li>
  <li>Người có điều kiện vệ sinh thuận lợi (ở nhà hoặc văn phòng có bồn rửa khép kín).</li>
</ul>

<h3>Ai không nên dùng cốc nguyệt san?</h3>
<ul>
  <li>Người chưa từng quan hệ tình dục (nếu muốn giữ màng trinh).</li>
  <li>Người dị ứng với silicone y tế hoặc chất liệu làm cốc.</li>
  <li>Phụ nữ mới sinh con trong giai đoạn sản dịch.</li>
  <li>Người đang đặt vòng tránh thai (cần tham khảo ý kiến bác sĩ phụ khoa).</li>
  <li>Người có cấu trúc âm đạo thấp, sa tạng chậu, hoặc đang điều trị viêm nhiễm âm đạo.</li>
</ul>

<!-- =============================== ĐĨA NGUYỆT SAN =============================== -->
<h2 id="dia-nguyet-san">4. Đĩa nguyệt san: chứa nhiều nhất nhưng khó dùng nhất</h2>
<h3>Đĩa nguyệt san là gì?</h3>
<p>Đĩa nguyệt san (menstrual disc) là đĩa mềm, dẹt, có viền dẻo và lòng màng mỏng, đặt sâu ở <strong>vòm âm đạo (fornix), ngay dưới cổ tử cung</strong>. Khác với cốc, đĩa không hoạt động dựa trên lực hút chân không mà nằm "gác" vững chắc sau xương mu. Có loại silicone tái sử dụng và loại dùng một lần.</p>
<p>Trong một nghiên cứu đăng trên tạp chí y khoa <em>BMJ Sexual &amp; Reproductive Health (2023)</em> thử nghiệm 21 sản phẩm bằng máu thật: <strong>Đĩa nguyệt san giữ được nhiều máu nhất, trung bình khoảng 61 ml</strong>; trong khi tampon, băng vệ sinh và cốc nguyệt san dao động từ 20–50 ml.</p>

<h3>Cách dùng đĩa nguyệt san</h3>
<ol>
  <li>Rửa tay sạch; bóp dẹt hai bên viền đĩa thành hình số 8 thon gọn.</li>
  <li>Đưa đĩa vào âm đạo hướng chếch xuống và ra sau về phía xương cụt, đẩy sâu vào vòm âm đạo; dùng ngón tay ấn mép trước của đĩa gác lên phía sau xương mu.</li>
  <li>Thời gian dùng tối đa 12 giờ theo khuyến cáo.</li>
  <li>Lấy ra: móc ngón tay vào mép viền (hoặc quai tháo), giữ đĩa nằm ngang khi kéo ra để hạn chế đổ máu ra tay.</li>
</ol>

<div class="pc">
  <div class="pros">
    <h4>Ưu điểm</h4>
    <ul>
      <li>Dung tích chứa lớn nhất trong tất cả các dòng sản phẩm kinh nguyệt</li>
      <li>Không dùng lực hút chân không, ít nguy cơ xê dịch vòng tránh thai hơn cốc</li>
      <li>Một số mẫu thiết kế có thể quan hệ tình dục thâm nhập trong ngày đèn đỏ mà không tràn</li>
      <li>Phiên bản silicone y tế có thể tái sử dụng nhiều năm</li>
    </ul>
  </div>
  <div class="cons">
    <h4>Nhược điểm</h4>
    <ul>
      <li>Khó đặt đúng vị trí và khó tháo nhất; khi lấy ra rất dễ bị đổ, dính máu ra tay</li>
      <li>Có hiện tượng "tự đổ" ngoài ý muốn khi đi tiểu hoặc rặn mạnh</li>
      <li>Không phù hợp với mọi cấu trúc giải phẫu vòm âm đạo</li>
      <li>Khá hiếm nơi phân phối chính hãng tại Việt Nam, giá thành cao</li>
      <li>Những ngày kinh ra nhiều vẫn cần có quần nguyệt san làm lớp dự phòng</li>
    </ul>
  </div>
</div>

<h3>Ai nên dùng đĩa nguyệt san?</h3>
<ul>
  <li>Người bị rong kinh, kinh nguyệt ra nhiều (cường kinh) và đã rất thành thạo các sản phẩm đặt trong.</li>
  <li>Người dùng cốc nguyệt san bị đau tức do lực hút hoặc do cấu tạo cổ tử cung thấp.</li>
</ul>

<h3>Ai không nên dùng đĩa nguyệt san?</h3>
<ul>
  <li>Người mới bắt đầu, bạn gái trẻ chưa quen thao tác đưa tay vào âm đạo.</li>
  <li>Phụ nữ sau sinh chưa phục hồi hoàn toàn sàn chậu.</li>
  <li>Người đang bị viêm phụ khoa hoặc người sợ nhìn thấy máu khi tháo rửa.</li>
</ul>

<!-- =============================== QUẦN KINH NGUYỆT =============================== -->
<h2 id="quan-kinh-nguyet">5. Quần kinh nguyệt: mặc như quần lót, thấm như băng vệ sinh</h2>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-xl mx-auto">
  <img src="/images/products/minh-hoa-cau-tao-4-lop.jpg" alt="Minh họa bóc tách cấu tạo 4 lớp công nghệ siêu mỏng 2mm quần kinh nguyệt ANTCARE" class="w-full h-auto object-cover" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Cấu tạo 4 lớp bóc tách siêu mỏng ~2mm của quần kinh nguyệt ANTCARE: thấm sâu, khóa ẩm, chống thấm tuyệt đối.
  </figcaption>
</figure>

<h3>Quần kinh nguyệt là gì?</h3>
<p>Quần kinh nguyệt (còn gọi là quần nguyệt san, period underwear, quần lót thấm hút) là chiếc quần lót thời trang được tích hợp <strong>vùng đáy đa tầng công nghệ cao</strong>: lớp mặt trên cùng dệt tổ ong khô thoáng 1 chiều; lõi vi sợi nén mật độ cao khóa chặt 35–50ml chất lỏng; màng nano TPU thoáng khí chống thấm tuyệt đối không cho dịch rỉ ra ngoài. Quần mặc như đồ lót bình thường, mặc xong xả nước lạnh, giặt sạch và tái sử dụng bền bỉ 2–3 năm.</p>

<h3>Cách dùng quần kinh nguyệt</h3>
<ol>
  <li><strong>Chọn mức thấm theo ngày:</strong> Dùng loại thấm nhẹ cho ngày đầu hoặc ngày cuối chu kỳ; dùng loại thấm vừa đến thấm nhiều cho ngày cao điểm và ban đêm.</li>
  <li><strong>Mặc trực tiếp:</strong> Mặc như quần lót thông thường, không cần dán băng, không cần đặt bất cứ dụng cụ nào vào cơ thể.</li>
  <li><strong>Thời gian thay:</strong> Thay khi cảm thấy quần nặng ẩm, hoặc thay sau 6–10 tiếng tùy lượng kinh thực tế của bạn.</li>
  <li><strong>Cách giặt đúng chuẩn:</strong> Xả trực tiếp đáy quần dưới vòi nước lạnh cho trôi sạch dịch đỏ, sau đó giặt tay hoặc cho vào túi giặt máy với xà phòng dịu nhẹ. <em>Không dùng nước xả vải mềm vải (làm giảm độ hút) và không sấy nóng. Phơi khô tự nhiên dưới ánh nắng.</em></li>
  <li><strong>Số lượng nên có:</strong> Một bộ từ 4–6 chiếc là đủ luân phiên giặt phơi cho trọn vẹn cả chu kỳ kinh nguyệt.</li>
</ol>

<div class="pc">
  <div class="pros">
    <h4>Ưu điểm</h4>
    <ul>
      <li><strong>Dễ dùng nhất:</strong> Mặc vào là xong, không cần học kỹ thuật, không xâm lấn cơ thể</li>
      <li><strong>Cực kỳ êm ái:</strong> Không cộm, không sột soạt, không xô lệch hay hằn ngứa viền bẹn</li>
      <li><strong>An toàn tuyệt đối:</strong> Nguy cơ sốc độc tố (TSS) bằng 0 vì hoàn toàn ở bên ngoài cơ thể</li>
      <li><strong>Ngủ ngon giấc:</strong> Thiết kế đáy mở rộng chống tràn 360°, thoải mái lật người, nằm nghiêng</li>
      <li><strong>Bền vững &amp; Tiết kiệm:</strong> Tái sử dụng hàng trăm lần, tiết kiệm 80% chi phí mua băng dùng 1 lần</li>
      <li><strong>Linh hoạt số 1:</strong> Mặc độc lập những ngày vừa, hoặc làm lớp giáp dự phòng chống tràn cho cốc/tampon ngày nhiều</li>
      <li>Đa năng: Hỗ trợ kiểm soát cả dịch tiết hàng ngày và tình trạng són tiểu nhẹ sau sinh</li>
    </ul>
  </div>
  <div class="cons">
    <h4>Nhược điểm</h4>
    <ul>
      <li>Cần giặt giũ và phơi khô sau khi sử dụng (mùa nồm miền Bắc cần nơi thoáng gió)</li>
      <li>Nếu cần thay quần tại trường học hay công sở, bạn cần mang theo một túi zip chống thấm nhỏ</li>
      <li>Chi phí đầu tư mua ban đầu cao hơn một gói băng vệ sinh vài chục nghìn</li>
      <li>Chất lượng vải trên thị trường rất khác nhau; cần chọn thương hiệu uy tín kiểm định không PFAS và không chất huỳnh quang tẩy trắng</li>
    </ul>
  </div>
</div>

<p class="verdict"><strong>Góc nhìn y khoa thực tế:</strong> Khả năng chứa trên bao bì thường thử bằng nước, trong khi máu kinh đặc dính hơn. Vì vậy, giá trị lớn nhất của quần kinh nguyệt không nằm ở việc "chứa nhiều lít nước", mà ở <strong>sự tự do, êm ái, an toàn sức khỏe vùng kín và khả năng làm lớp khiên bảo vệ hoàn hảo</strong> cho mọi tình huống.</p>

<h3>Ai nên dùng quần kinh nguyệt?</h3>
<ul>
  <li>Hầu hết mọi phụ nữ ở mọi độ tuổi, từ tuổi dậy thì đến tiền mãn kinh.</li>
  <li>Học sinh, sinh viên, bạn gái trẻ chưa từng quan hệ, e ngại sản phẩm đưa vào âm đạo.</li>
  <li>Chị em làm việc văn phòng, mẹ sau sinh, phụ nữ bị hăm ngứa, viêm nhiễm dị ứng với băng vệ sinh.</li>
  <li>Người đang dùng cốc nguyệt san hoặc tampon nhưng luôn nơm nớp lo tràn mép làm bẩn quần áo, ga giường.</li>
</ul>

<h3>Ai không nên chỉ dùng mỗi quần kinh nguyệt?</h3>
<ul>
  <li>Người bị rong kinh, cường kinh nặng ra ồ ạt từng cục máu đông lớn: Cần phối hợp quần lót với cốc nguyệt san hoặc băng dày và <strong>phải đi khám chuyên khoa phụ sản</strong>.</li>
  <li>Người đi bơi dưới nước (quần thấm hút thông thường sẽ hút nước hồ bơi).</li>
</ul>

<!-- =============================== VÌ SAO TỐI ƯU =============================== -->
<h2 id="vi-sao-quan-kinh-nguyet">Vì sao quần kinh nguyệt là lựa chọn tối ưu cho đa số chị em?</h2>
<div class="verdict"><strong>Kết luận:</strong> Không có sản phẩm nào hoàn hảo cho tất cả mọi người. Nhưng nếu cần chọn <strong>một giải pháp nền tảng vững chắc nhất</strong>, phù hợp với số đông phụ nữ Á Đông, quần kinh nguyệt chính là chiếc chìa khóa cân bằng nhất.</div>

<h3>1. Cốc, đĩa, tampon đều cần "lớp dự phòng" và quần kinh nguyệt là lớp dự phòng số 1</h3>
<p>Dù là cốc hay đĩa nguyệt san dung tích lớn, chỉ cần một lần đặt hơi lệch, hay cơ âm đạo co bóp khi ho, rặn cũng có thể khiến một dòng kinh nhỏ rò rỉ ra ngoài. Vì vậy, 90% chị em dùng cốc vẫn phải dán kèm một miếng băng vệ sinh hàng ngày. Thay thế miếng băng bí bách đó bằng chiếc quần kinh nguyệt mỏng nhẹ giúp bạn vừa được bảo vệ 2 lớp tuyệt đối, vừa không lo cọ xát ngứa ngáy hay xả rác.</p>

<h3>2. Không phải đặt bất cứ dị vật nào vào cơ thể</h3>
<p>Tâm lý ngại ngùng, sợ đau rát khi đưa dị vật vào vùng kín là rào cản rất lớn của phụ nữ Việt Nam. Quần kinh nguyệt xóa bỏ hoàn toàn rào cản này: mặc vào tự nhiên như chiếc quần lót lụa hàng ngày.</p>

<h3>3. Loại bỏ triệt để nguy cơ sốc độc tố (TSS)</h3>
<p>Hội chứng sốc độc tố do độc tố vi khuẩn tụ cầu phát triển trong môi trường âm đạo bị ứ đọng sản phẩm thấm hút là nỗi ám ảnh có thật của tampon. Quần kinh nguyệt nằm bên ngoài da, thông thoáng mao dẫn 1 chiều nên hoàn toàn không có nguy cơ y khoa này.</p>

<h3>4. Tạm biệt cảm giác bí cộm và hăm ngứa</h3>
<p>Băng vệ sinh với mặt đáy nilon bít bùng và cánh dán cọ vào bẹn là thủ phạm số 1 gây viêm đỏ, hăm ngứa trong những ngày hè. Quần nguyệt san sử dụng vải sợi tre và màng thở nano giải phóng hơi ẩm liên tục, cho cảm giác "nhẹ tênh như không đến tháng".</p>

<h3>5. Linh hoạt phối hợp theo từng ngày trong chu kỳ</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Giai đoạn chu kỳ</th><th>Cách sử dụng quần kinh nguyệt thông minh</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Ngày đầu &amp; Ngày cuối (kinh ít, ra lấm tấm)</strong></td><td>Mặc 1 chiếc quần nguyệt san mỏng nhẹ từ sáng đến tối, tạm biệt băng vệ sinh hàng ngày</td></tr>
    <tr><td><strong>Ngày giữa (kinh ra vừa)</strong></td><td>Mặc quần thấm vừa, thay 1 chiếc mới vào giữa ngày nếu cần</td></tr>
    <tr><td><strong>Ngày cao điểm (kinh ra nhiều)</strong></td><td>Kết hợp: Đặt cốc nguyệt san hoặc tampon bên trong + Mặc quần nguyệt san bên ngoài làm tấm khiên chống rò rỉ</td></tr>
    <tr><td><strong>Ban đêm khi đi ngủ</strong></td><td>Mặc quần nguyệt san dáng boy-short hoặc cạp cao đáy dài, tự do nằm nghiêng lăn lộn không sợ bẩn ga nệm</td></tr>
    <tr><td><strong>Những ngày chờ đón dâu</strong></td><td>Mặc sẵn quần lót thấm hút, đón kỳ kinh bất ngờ ghé thăm mà không bao giờ bị bối rối nơi công sở</td></tr>
  </tbody>
</table>
</div>

<!-- =============================== NGÀY NHIỀU =============================== -->
<h2 id="ngay-nhieu">Ngày ra nhiều dùng gì để không tràn?</h2>
<p>Vào những ngày cao điểm (thường là ngày thứ 2 và thứ 3), gần như bất kỳ sản phẩm đơn lẻ nào cũng có nguy cơ quá tải. Bí quyết của phụ nữ hiện đại là <strong>chiến thuật kết hợp thông minh</strong>:</p>

<div class="table-scroll">
<table>
  <thead>
    <tr><th>Công thức kết hợp</th><th>Lợi ích vượt trội</th><th>Phù hợp nhất với</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Cốc / Đĩa nguyệt san + Quần kinh nguyệt</strong></td><td>An tâm 100%, bảo vệ kép bên trong và bên ngoài, ngủ ngon giấc 8–10 tiếng</td><td>Người kinh ra nhiều, đã quen dùng cốc/đĩa</td></tr>
    <tr><td><strong>Quần kinh nguyệt thấm nhiều + Thay giữa ngày</strong></td><td>Êm thoáng tối đa, không cần cho vật lạ vào cơ thể</td><td>Người không thích hoặc không dùng được sản phẩm đặt trong</td></tr>
    <tr><td><strong>Tampon + Quần kinh nguyệt</strong></td><td>Gọn gàng năng động cho cả ngày làm việc, không sợ vệt ố bất ngờ</td><td>Chị em công sở, vận động viên</td></tr>
  </tbody>
</table>
</div>

<p><strong>Dấu hiệu cảnh báo cần đi khám phụ khoa:</strong> Nếu bạn mất trên 80ml máu mỗi chu kỳ (phải thay ướt đẫm sản phẩm sau mỗi 1–2 giờ liên tục, kinh nguyệt kéo dài trên 7 ngày, xuất hiện nhiều cục máu đông to như quả trứng gà, người mệt mỏi, da xanh xao ngất xỉu), đây là dấu hiệu của cường kinh/rong kinh bệnh lý (u xơ tử cung, polyp nội mạc, lạc nội mạc tử cung...). Bạn nên đến các bệnh viện chuyên khoa phụ sản để được siêu âm và điều trị kịp thời.</p>

<!-- =============================== THEO ĐỐI TƯỢNG =============================== -->
<h2 id="theo-doi-tuong">Chọn sản phẩm theo từng đối tượng và hoàn cảnh</h2>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Đối tượng / Hoàn cảnh</th><th>Gợi ý ưu tiên số 1</th><th>Gợi ý kết hợp bổ trợ</th><th>Lưu ý quan trọng</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Bạn gái tuổi dậy thì, học sinh</strong></td><td>Quần kinh nguyệt</td><td>Băng vệ sinh mỏng</td><td>Không đau rát, tự tin ngồi học và chạy nhảy không lo cộm lộ</td></tr>
    <tr><td><strong>Nữ nhân viên văn phòng</strong></td><td>Quần kinh nguyệt</td><td>Cốc nguyệt san + Quần</td><td>Trang bị sẵn túi zip nhỏ để đổi quần nếu ngồi làm việc trên 8 tiếng</td></tr>
    <tr><td><strong>Người tập gym, yoga, chạy bộ</strong></td><td>Cốc nguyệt san / Quần nguyệt san thể thao</td><td>Tampon</td><td>Co giãn 4 chiều, thấm mồ hôi và dịch kinh tức thì</td></tr>
    <tr><td><strong>Đi bơi, đi biển</strong></td><td>Cốc nguyệt san, đĩa nguyệt san</td><td>Tampon</td><td>Không mặc quần lót thường hay BVS khi xuống nước</td></tr>
    <tr><td><strong>Ban đêm ngủ sâu</strong></td><td>Quần kinh nguyệt cạp cao</td><td>Cốc + Quần kinh nguyệt</td><td>Thiết kế đáy dài sau mông ngăn tràn ngược khi nằm ngửa</td></tr>
    <tr><td><strong>Mẹ sau sinh (sản dịch)</strong></td><td>Quần lót thấm hút y tế</td><td>Băng vệ sinh sản phụ</td><td>Tuyệt đối không dùng tampon hay cốc khi cổ tử cung chưa đóng</td></tr>
    <tr><td><strong>Tiền mãn kinh, són tiểu nhẹ</strong></td><td>Quần thấm hút đa năng ANTCARE</td><td>—</td><td>Vừa chống tràn kinh nguyệt thất thường, vừa khóa ẩm nước tiểu són</td></tr>
    <tr><td><strong>Chị em đang đặt vòng tránh thai</strong></td><td>Quần kinh nguyệt, băng vệ sinh</td><td>Tampon</td><td>Thận trọng khi tháo cốc nguyệt san vì có thể làm tuột dây vòng</td></tr>
  </tbody>
</table>
</div>

<!-- =============================== CÁCH CHỌN QUẦN =============================== -->
<h2 id="cach-chon-quan">Cách chọn quần kinh nguyệt tốt: 7 tiêu chí vàng</h2>
<ol>
  <li><strong>Công bố dung tích thấm hút rõ ràng:</strong> Nhãn hàng minh bạch ghi rõ sức chứa 30ml, 40ml hay 50ml để chị em chọn đúng nhu cầu.</li>
  <li><strong>Bản đáy mở rộng chống tràn:</strong> Đặc biệt vùng đáy phía sau phải kéo cao qua mông để bảo vệ toàn diện khi nằm ngủ.</li>
  <li><strong>Vật liệu an toàn chuẩn y tế:</strong> Không chứa chất độc hại PFAS, không hóa chất tẩy trắng huỳnh quang, vải sợi tre hữu cơ kháng khuẩn tự nhiên.</li>
  <li><strong>Độ mỏng tối ưu (~2mm):</strong> Đáy quần ứng dụng công nghệ ép vi sợi nén để không bị dày cộm như tã bỉm.</li>
  <li><strong>Chọn đúng kích cỡ (Size):</strong> Quần lót thấm hút cần ôm sát vừa vặn viền đùi và vòng eo để ngăn chất lỏng len lỏi ra mép.</li>
  <li><strong>Dễ giặt xả và nhanh khô:</strong> Sợi vải cao cấp không bám dính vết ố máu đông, mau khô trong điều kiện khí hậu Việt Nam.</li>
  <li><strong>Chính sách đổi trả minh bạch:</strong> Hỗ trợ tư vấn size chu đáo và chính sách đổi size an tâm.</li>
</ol>

<div class="cta">
  <h4 class="text-lg font-bold text-white mb-1">Quần lót thấm hút nguyệt san ANTCARE</h4>
  <p class="text-sm text-purple-100 mb-3">Công nghệ 4 lớp vi sợi nén mỏng 2mm dành riêng cho vóc dáng phụ nữ Việt. Khóa chặt 35–50ml chất lỏng, khử mùi 99%, nhẹ tênh như không đến tháng.</p>
  <a class="btn" href="/quan-lot-tham-hut">Khám phá Quần kinh nguyệt ANTCARE</a>
  <a class="btn" href="tel:0969032360">Tư vấn miễn phí: 0969 032 360</a>
</div>

<!-- =============================== FAQ =============================== -->
<h2 id="faq">Câu hỏi thường gặp về sản phẩm ngày kinh nguyệt (FAQ)</h2>
<dl class="faq">
  <dt>1. Ngày kinh nguyệt nên dùng gì là tốt nhất?</dt>
  <dd>Không có một sản phẩm tốt nhất cho tất cả mọi người. Với đa số chị em, quần kinh nguyệt là lựa chọn nền tảng cân bằng nhất: không phải đặt vào trong cơ thể, dễ dùng, thoải mái, tái sử dụng được và kết hợp được với mọi sản phẩm khác. Ngày ra nhiều có thể dùng quần loại thấm nhiều và thay giữa ngày, hoặc dùng quần làm lớp dự phòng cho cốc, đĩa hay tampon.</dd>
  
  <dt>2. Quần kinh nguyệt có thay được hoàn toàn băng vệ sinh không?</dt>
  <dd>Với ngày ra ít đến vừa, quần kinh nguyệt có thể thay thế hoàn toàn băng vệ sinh nếu chọn đúng mức thấm và thay sau 6–8 giờ. Với ngày ra rất nhiều, bạn nên mang thêm một chiếc dự phòng để thay giữa ngày hoặc kết hợp cùng cốc/tampon để an tâm tuyệt đối.</dd>
  
  <dt>3. Quần kinh nguyệt mặc được bao lâu trong một ngày?</dt>
  <dd>Tùy theo mức thấm của từng mẫu và lượng kinh nguyệt của bạn. Vào ngày ra ít hoặc vừa, nhiều người có thể mặc cả ngày hoặc suốt đêm ngon giấc (8–10 tiếng); vào ngày cao điểm nên thay sau 4–6 tiếng hoặc ngay khi thấy nặng đáy. Luôn làm theo hướng dẫn từ nhà sản xuất.</dd>
  
  <dt>4. Cốc nguyệt san có thực sự an toàn không?</dt>
  <dd>Tổng quan y khoa đăng trên tạp chí The Lancet Public Health (2019) với hơn 3.300 phụ nữ khẳng định cốc nguyệt san an toàn và có tỷ lệ rò rỉ tương đương hoặc ít hơn băng vệ sinh, tampon. Tuy nhiên, bạn bắt buộc phải tiệt trùng đúng cách, đổ cốc đúng giờ, và người đang đặt vòng tránh thai nên hỏi ý kiến bác sĩ phụ khoa trước khi dùng.</dd>
  
  <dt>5. Đĩa nguyệt san khác cốc nguyệt san ở điểm nào?</dt>
  <dd>Cốc nguyệt san đặt ở đoạn dưới âm đạo và cố định bằng lực hút chân không; trong khi đĩa nguyệt san nằm sâu hơn ở vòm âm đạo sát cổ tử cung và gác sau xương mu, không dùng lực hút. Đĩa chứa được nhiều dịch hơn và có thể quan hệ thâm nhập, nhưng thao tác tháo ra khó hơn và dễ làm đổ dịch ra tay.</dd>
  
  <dt>6. Đeo tampon bao lâu thì bắt buộc phải thay?</dt>
  <dd>Nên thay tampon mỗi 4–8 giờ, chọn loại có độ thấm hút vừa đủ với lượng kinh, và tuyệt đối không để tampon trong âm đạo qua đêm quá 8 giờ để phòng tránh hội chứng sốc độc tố (TSS) nguy hiểm.</dd>
  
  <dt>7. Bạn gái mới bước vào tuổi dậy thì nên dùng sản phẩm nào?</dt>
  <dd>Băng vệ sinh và quần kinh nguyệt là 2 lựa chọn lý tưởng nhất vì không xâm lấn vào trong cơ thể. Quần kinh nguyệt giúp các bạn gái tuổi teen xua tan nỗi sợ bị tràn mép, lộ viền băng khi ngồi học tại trường hay tham gia thể thao.</dd>
  
  <dt>8. Sau khi sinh con có dùng được cốc nguyệt san hay tampon không?</dt>
  <dd>Trong giai đoạn sản dịch 6 tuần đầu sau sinh, tuyệt đối không đưa bất kỳ vật gì vào âm đạo để tránh nhiễm trùng tử cung. Hãy sử dụng quần lót thấm hút chuyên dụng hoặc băng vệ sinh sản phụ, và chỉ dùng cốc/tampon khi bác sĩ phụ khoa đã khám và đồng ý.</dd>
  
  <dt>9. Ngày đèn đỏ đi bơi nên dùng gì?</dt>
  <dd>Khi đi bơi, bạn nên dùng cốc nguyệt san, đĩa nguyệt san hoặc tampon vì chúng hứng dịch ngay bên trong âm đạo. Băng vệ sinh và quần kinh nguyệt thông thường không dùng được dưới nước vì sẽ hút nước hồ bơi.</dd>
  
  <dt>10. Ban đêm ngủ nên dùng gì để không lo tràn giường?</dt>
  <dd>Lựa chọn tối ưu là quần kinh nguyệt bản cạp cao chống tràn 360° với vùng thấm kéo dài hết bờ mông. Nếu ngày ra cực nhiều, hãy kết hợp cốc nguyệt san bên trong và quần kinh nguyệt bên ngoài để ngủ trọn giấc mà không phải thức dậy giữa đêm.</dd>
</dl>

<p class="note">Bài viết mang tính chất tham khảo kiến thức khoa học, không thay thế cho chẩn đoán và điều trị y khoa. Nếu kinh nguyệt ra nhiều bất thường, rong kinh kéo dài hoặc có các triệu chứng đau bụng dữ dội, hãy đến cơ sở y tế chuyên khoa phụ sản để được thăm khám.</p>

<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tài liệu y khoa tham khảo</h3>
  <ul>
    <li><a href="https://www.lstmed.ac.uk/node/7251" rel="nofollow" target="_blank">Liverpool School of Tropical Medicine – Tổng quan The Lancet Public Health (2019) về độ an toàn của cốc nguyệt san</a></li>
    <li><a href="https://www.statnews.com/2023/08/07/period-products-menstrual-disc-new-study/" rel="nofollow" target="_blank">STAT News &amp; BMJ Sexual &amp; Reproductive Health (2023) – Thử nghiệm khả năng chứa của 21 sản phẩm kinh nguyệt</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">The Conversation – Dung tích kinh nguyệt bình thường và so sánh các dòng sản phẩm</a></li>
    <li><a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/Tampon-Safety-and-Toxic-Shock-Syndrome.aspx" rel="nofollow" target="_blank">Viện Hàn lâm Nhi khoa Hoa Kỳ (AAP / HealthyChildren.org) – Hướng dẫn sử dụng tampon an toàn &amp; phòng ngừa TSS</a></li>
    <li><a href="https://www.jeanhailes.org.au/health-a-z/periods/period-products" rel="nofollow" target="_blank">Jean Hailes for Women's Health – Cẩm nang toàn diện về sản phẩm ngày kinh nguyệt</a></li>
  </ul>
</section>
</div>`;

const articleData = {
  id: 1,
  slug: "ngay-kinh-nguyet-nen-dung-gi",
  group: "cam-nang-phu-nu",
  oldSlugs: [
    "kien-thuc/ngay-kinh-nguyet-nen-dung-gi",
    "cam-nang/ngay-kinh-nguyet-nen-dung-gi",
    "news/ngay-kinh-nguyet-nen-dung-gi",
    "den-thang-nen-dung-gi",
    "so-sanh-bang-ve-sinh-tampon-coc-nguyet-san-quan-kinh-nguyet"
  ],
  title: "Ngày kinh nguyệt nên dùng gì? So sánh băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt",
  metaTitle: "Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn phổ biến nhất | ANTCARE",
  description: "Đến tháng nên dùng gì: băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san hay quần kinh nguyệt? Cách dùng, ưu nhược điểm, ai nên và không nên dùng.",
  excerpt: "Có 5 lựa chọn phổ biến trong ngày kinh nguyệt: băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san và quần kinh nguyệt. Cốc và đĩa giữ được nhiều máu nhất nhưng phải đặt vào trong và khó làm quen. Tampon cần thay mỗi 4–8 giờ vì nguy cơ sốc độc tố. Băng vệ sinh dễ dùng nhưng bí, dễ xô lệch. Quần kinh nguyệt là lựa chọn nền tảng cân bằng nhất: không phải đặt vào trong, mặc như quần lót bình thường, tái sử dụng được, và là lớp dự phòng tốt nhất cho mọi sản phẩm khác.",
  category: "Cẩm nang",
  date: "29/10/2026",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  keywords: "ngày kinh nguyệt nên dùng gì, đến tháng dùng gì, băng vệ sinh hay tampon, cốc nguyệt san, đĩa nguyệt san, quần kinh nguyệt, quần nguyệt san, quần lót kinh nguyệt, so sánh sản phẩm kinh nguyệt",
  image: "/images/products/quan-lot-tham-hut.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: contentHtml,
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
        "@type": "Article",
        "@id": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi/#article",
        "mainEntityOfPage": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi",
        "headline": "Ngày kinh nguyệt nên dùng gì? So sánh băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt",
        "description": "Định nghĩa, cách dùng, ưu điểm, nhược điểm, ai nên và không nên dùng băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san và quần kinh nguyệt.",
        "keywords": "ngày kinh nguyệt nên dùng gì, đến tháng dùng gì, băng vệ sinh, tampon, cốc nguyệt san, đĩa nguyệt san, quần kinh nguyệt, quần nguyệt san",
        "inLanguage": "vi",
        "datePublished": "2026-10-29",
        "dateModified": "2026-10-29",
        "author": { "@id": "https://antcare.vn/#org" },
        "publisher": { "@id": "https://antcare.vn/#org" },
        "about": [
          { "@type": "Thing", "name": "Băng vệ sinh" },
          { "@type": "Thing", "name": "Tampon" },
          { "@type": "Thing", "name": "Cốc nguyệt san" },
          { "@type": "Thing", "name": "Đĩa nguyệt san" },
          { "@type": "Thing", "name": "Quần kinh nguyệt" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "5 lựa chọn phổ biến trong ngày kinh nguyệt",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Băng vệ sinh", "url": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi/#bang-ve-sinh" },
          { "@type": "ListItem", "position": 2, "name": "Tampon", "url": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi/#tampon" },
          { "@type": "ListItem", "position": 3, "name": "Cốc nguyệt san", "url": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi/#coc-nguyet-san" },
          { "@type": "ListItem", "position": 4, "name": "Đĩa nguyệt san", "url": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi/#dia-nguyet-san" },
          { "@type": "ListItem", "position": 5, "name": "Quần kinh nguyệt", "url": "https://antcare.vn/cam-nang/ngay-kinh-nguyet-nen-dung-gi/#quan-kinh-nguyet" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ngày kinh nguyệt nên dùng gì là tốt nhất?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Không có một sản phẩm tốt nhất cho mọi người. Với đa số chị em, quần kinh nguyệt là lựa chọn nền tảng cân bằng nhất: không phải đặt vào trong cơ thể, dễ dùng, thoải mái, tái sử dụng được và kết hợp được với mọi sản phẩm khác."
            }
          },
          {
            "@type": "Question",
            "name": "Quần kinh nguyệt có thay được băng vệ sinh không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với ngày ra ít đến vừa, quần kinh nguyệt có thể thay băng vệ sinh nếu chọn đúng mức thấm và thay đúng giờ. Với ngày ra rất nhiều, nên thay quần thường xuyên hơn hoặc kết hợp với cốc, đĩa nguyệt san hay băng vệ sinh để tránh tràn."
            }
          },
          {
            "@type": "Question",
            "name": "Quần kinh nguyệt mặc được bao lâu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tùy mức thấm của từng mẫu và lượng kinh. Ngày ra ít, nhiều người mặc được cả ngày hoặc cả đêm; ngày ra nhiều nên thay sau vài giờ hoặc ngay khi thấy nặng, ẩm."
            }
          },
          {
            "@type": "Question",
            "name": "Cốc nguyệt san có an toàn không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Một tổng quan trên Lancet Public Health năm 2019 với hơn 3.300 người cho thấy cốc nguyệt san an toàn và rò rỉ tương đương hoặc ít hơn băng vệ sinh, tampon."
            }
          },
          {
            "@type": "Question",
            "name": "Đĩa nguyệt san khác cốc nguyệt san thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cốc nguyệt san đặt ở phần dưới âm đạo và giữ bằng lực hút; đĩa nguyệt san nằm sâu hơn, ở vòm âm đạo sát cổ tử cung, không dùng lực hút. Đĩa thường chứa được nhiều hơn và có thể dùng khi quan hệ, nhưng khó tháo hơn và dễ đổ khi lấy ra."
            }
          },
          {
            "@type": "Question",
            "name": "Đeo tampon bao lâu thì phải thay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nên thay tampon mỗi 4–8 giờ, dùng loại có độ thấm thấp nhất đủ cho lượng kinh, và không để qua đêm quá 8 giờ để giảm nguy cơ hội chứng sốc độc tố (TSS)."
            }
          },
          {
            "@type": "Question",
            "name": "Học sinh mới có kinh nên dùng gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với bạn gái mới có kinh, băng vệ sinh và quần kinh nguyệt là lựa chọn dễ bắt đầu nhất vì không cần đặt vào trong cơ thể. Quần kinh nguyệt giúp các bạn đỡ lo bị tràn, lộ băng khi ngồi học hay chơi thể thao."
            }
          },
          {
            "@type": "Question",
            "name": "Sau sinh có dùng cốc nguyệt san hay tampon được không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Giai đoạn sản dịch sau sinh không nên đặt bất cứ sản phẩm nào vào âm đạo. Nên dùng băng vệ sinh hoặc quần thấm hút, và chỉ quay lại dùng cốc, đĩa, tampon khi bác sĩ đồng ý."
            }
          },
          {
            "@type": "Question",
            "name": "Ngày đèn đỏ đi bơi nên dùng gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Khi bơi nên dùng tampon, cốc hoặc đĩa nguyệt san vì băng vệ sinh và quần kinh nguyệt thông thường không dùng được dưới nước."
            }
          },
          {
            "@type": "Question",
            "name": "Ban đêm đến tháng nên dùng gì để không tràn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ban đêm nhiều người chọn quần kinh nguyệt loại thấm nhiều hoặc băng vệ sinh ban đêm. Ngày ra rất nhiều có thể kết hợp cốc hoặc đĩa với quần kinh nguyệt làm lớp dự phòng."
            }
          }
        ]
      }
    ]
  }
};

const newNewsData = {
  featured: articleData,
  list: [articleData]
};

// Write fresh news.json
fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'news.json'),
  JSON.stringify(newNewsData, null, 2),
  'utf8'
);

// Also prepare English version
const enArticleData = {
  ...articleData,
  title: "What Period Products Should You Use? Comparing Pads, Tampons, Menstrual Cups, Discs, and Period Underwear",
  metaTitle: "What Period Products Should You Use? Comparing 5 Popular Options | ANTCARE",
  description: "Comparing pads, tampons, menstrual cups, discs, and period underwear: how to use, pros & cons, who should and shouldn't use each.",
  excerpt: "There are 5 popular options for your period: pads, tampons, menstrual cups, menstrual discs, and period underwear. Period underwear is the most balanced foundational choice: external, comfortable, reusable, and the best backup layer for all other options.",
  category: "Care Guide",
  keywords: "period products, pads or tampons, menstrual cup, menstrual disc, period underwear, period panties, leakproof underwear"
};

const newNewsEnData = {
  featured: enArticleData,
  list: [enArticleData]
};

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'news.en.json'),
  JSON.stringify(newNewsEnData, null, 2),
  'utf8'
);

console.log('Successfully published article to news.json and news.en.json!');

