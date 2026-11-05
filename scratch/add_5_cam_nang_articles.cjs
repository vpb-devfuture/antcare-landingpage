const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsEnJsonPath = path.join(__dirname, '..', 'src', 'data', 'news.en.json');

const currentNews = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Common CTA & Footer snippets
const getCtaHtml = (title, desc) => `
<div class="cta">
  <h4 class="text-lg font-bold text-white mb-1">${title}</h4>
  <p class="text-sm text-purple-100 mb-3">${desc}</p>
  <a class="btn" href="/quan-lot-tham-hut">Xem quần nguyệt san ANTCARE</a>
  <a class="btn" href="tel:0969032360">Tư vấn miễn phí: 0969 032 360</a>
</div>
`;

const sourcesHtml = `
<section class="sources" aria-label="Nguồn tham khảo">
  <h3>Nguồn tài liệu y khoa tham khảo</h3>
  <ul>
    <li><a href="https://www.lstmed.ac.uk/node/7251" rel="nofollow" target="_blank">Liverpool School of Tropical Medicine – Tổng quan The Lancet Public Health (2019) về cốc nguyệt san</a></li>
    <li><a href="https://www.statnews.com/2023/08/07/period-products-menstrual-disc-new-study/" rel="nofollow" target="_blank">STAT News &amp; BMJ Sexual &amp; Reproductive Health (2023) – Thử nghiệm khả năng chứa của sản phẩm kinh nguyệt</a></li>
    <li><a href="https://theconversation.edu.au/how-much-period-blood-is-normal-and-which-sanitary-product-holds-the-most-blood-211418" rel="nofollow" target="_blank">The Conversation – Sản phẩm kinh nguyệt nào chứa nhiều máu nhất</a></li>
    <li><a href="https://www.jeanhailes.org.au/health-a-z/periods/period-products" rel="nofollow" target="_blank">Jean Hailes for Women's Health – Các loại sản phẩm kinh nguyệt</a></li>
    <li><a href="https://www.healthychildren.org/English/ages-stages/teen/Pages/Tampon-Safety-and-Toxic-Shock-Syndrome.aspx" rel="nofollow" target="_blank">HealthyChildren.org (Viện Hàn lâm Nhi khoa Hoa Kỳ) – Hội chứng sốc độc tố TSS</a></li>
  </ul>
</section>
`;

// =========================================================================
// ARTICLE 1: Cách dùng cốc nguyệt san cho người mới bắt đầu
// =========================================================================
const content1 = `<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cách dùng cốc nguyệt san cho người mới bắt đầu: gấp, đặt, lấy ra từng bước</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Thông tin tham khảo, không thay thế tư vấn y khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Để dùng cốc nguyệt san: (1) rửa tay, tiệt trùng cốc trước chu kỳ; (2) gấp cốc nhỏ lại (kiểu chữ C, gấp đỉnh hoặc gấp 7); (3) thả lỏng, đưa cốc vào âm đạo hướng <strong>chếch về phía thắt lưng</strong>, không hướng thẳng lên; (4) để cốc tự bung, xoay nhẹ hoặc miết quanh thân cốc để chắc chắn đã kín; (5) đổ cốc theo thời gian hãng khuyến cáo (thường tối đa 12 giờ, ngày nhiều đổ sớm hơn); (6) khi lấy ra, bóp đáy cốc để phá lực hút rồi kéo nhẹ. Vài chu kỳ đầu dễ rò rỉ, nên mặc thêm <strong>quần nguyệt san</strong> làm lớp dự phòng.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Cốc nguyệt san silicone y tế" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Cốc nguyệt san: hứng dịch kinh bằng silicone y tế, an toàn và tái sử dụng bền bỉ nhiều năm.
  </figcaption>
</figure>

<h3>Cốc nguyệt san là gì?</h3>
<p>Cốc nguyệt san là chiếc cốc nhỏ hình chuông, thường làm từ silicone y tế dẻo dai, được gấp lại để đặt vào âm đạo. Khi bung ra, cốc tạo lực hút nhẹ với thành âm đạo và <strong>hứng</strong> máu kinh chứ không hút khô dịch tự nhiên như tampon hay băng vệ sinh. Một chiếc cốc có thể dùng nhiều năm nếu vệ sinh và bảo quản đúng cách. Một tổng quan nghiên cứu đăng trên <em>The Lancet Public Health (2019)</em> với hơn 3.300 phụ nữ cho thấy cốc nguyệt san an toàn, rò rỉ tương đương hoặc ít hơn băng vệ sinh và tampon.</p>

<h3>Trước khi dùng lần đầu</h3>
<ul>
  <li><strong>Chọn đúng size:</strong> Rất quan trọng để không bị rò rỉ (xem bài <a href="/cam-nang/cach-chon-size-va-ve-sinh-coc-nguyet-san" class="text-[#6633B4] font-bold underline">cách chọn size và vệ sinh cốc</a>).</li>
  <li><strong>Tiệt trùng cốc:</strong> Đun trong nồi nước sôi 5–10 phút theo hướng dẫn của nhà sản xuất.</li>
  <li><strong>Tập đặt thử:</strong> Nên thử vào những ngày chưa có kinh hoặc ngày ra ít, ở nhà, lúc tâm trạng thư thả. Có thể làm ướt cốc bằng nước sạch để trơn dễ đưa vào hơn.</li>
</ul>

<h3>4 kiểu gấp cốc nguyệt san phổ biến nhất</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Kiểu gấp</th><th>Cách thực hiện</th><th>Phù hợp nhất với</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Gấp chữ C (gấp đôi)</strong></td><td>Ép dẹt cốc rồi gập đôi theo chiều dọc thành hình chữ C</td><td>Dễ nhớ nhất, nhưng tiết diện đầu cốc hơi to</td></tr>
    <tr><td><strong>Gấp đỉnh (Punch-down)</strong></td><td>Dùng ngón tay ấn một điểm ở mép miệng cốc tụt sâu xuống đáy, rồi bóp hai bên lại</td><td>Đầu cốc cực nhỏ, rất dễ đưa vào, hợp người mới bắt đầu</td></tr>
    <tr><td><strong>Gấp số 7 (Triangle fold)</strong></td><td>Ép dẹt cốc, gập một góc miệng cốc xéo xuống tạo thành hình số 7</td><td>Đầu nhỏ, cốc rất dễ tự bung tròn trong âm đạo</td></tr>
    <tr><td><strong>Gấp chữ S / cánh hoa</strong></td><td>Biến thể của gấp đỉnh, gập mép cốc vào trong theo hình zíc zắc</td><td>Người đã quen dùng, muốn đầu cốc thon gọn tối đa</td></tr>
  </tbody>
</table>
</div>

<h3>Cách đặt cốc nguyệt san vào cơ thể: 6 bước chuẩn y khoa</h3>
<ol>
  <li><strong>Rửa tay thật sạch</strong> bằng xà phòng dịu nhẹ trước khi chạm vào cốc.</li>
  <li><strong>Chọn tư thế thoải mái:</strong> Ngồi xổm, ngồi trên bồn cầu hơi dạng chân, hoặc đứng gác một chân lên thành bồn cầu/bồn tắm.</li>
  <li><strong>Thả lỏng cơ sàn chậu:</strong> Hít thở sâu và đều; căng thẳng lo âu sẽ làm cơ âm đạo siết chặt lại khiến việc đưa vào bị đau.</li>
  <li><strong>Gấp cốc và giữ chặt:</strong> Giữ chặt phần cốc đã gấp, nhẹ nhàng đưa miệng cốc vào cửa âm đạo theo hướng <strong>chếch về phía xương cụt / thắt lưng</strong> (không đưa thẳng đứng lên đỉnh đầu).</li>
  <li><strong>Thả tay để cốc tự bung:</strong> Cốc nguyệt san nằm ở phần thấp của âm đạo, thấp hơn tampon; cuống cốc nằm ngay sát cửa âm đạo.</li>
  <li><strong>Kiểm tra độ bung kín:</strong> Dùng một ngón tay miết nhẹ quanh bầu cốc xem có vết móp nào không; hoặc cầm đáy cốc xoay nhẹ một vòng. Kéo nhẹ cuống cốc xuống, nếu thấy có lực hút giữ lại là cốc đã bám kín khít.</li>
</ol>

<h3>Bao lâu thì cần đổ cốc nguyệt san một lần?</h3>
<p>Hầu hết các hãng sản xuất khuyến cáo thời gian dùng tối đa khoảng 10–12 giờ. Tuy nhiên, thời gian thực tế phụ thuộc hoàn toàn vào lượng kinh nguyệt của bạn: ngày đầu và ngày thứ hai kinh ra nhiều, bạn nên đổ cốc sau 4–6 giờ để tránh tràn; những ngày kinh ít có thể an tâm để suốt 10–12 giờ (cả ngày làm việc hoặc suốt đêm ngon giấc).</p>

<h3>Cách lấy cốc ra nhẹ nhàng, không bị đau</h3>
<ol>
  <li>Rửa tay sạch bằng xà phòng. Ngồi xổm hoặc ngồi sát trên bồn cầu; rặn nhẹ như khi đi vệ sinh để đẩy cốc trượt xuống thấp gần cửa mình.</li>
  <li>Dùng ngón trỏ và ngón cái lần theo cuống cốc lên đến <strong>đáy cốc</strong>, dùng hai ngón tay <strong>bóp nhẹ đáy cốc để triệt tiêu lực hút chân không</strong>. <em>Đây là thao tác quan trọng nhất: nếu kéo thẳng cuống khi chưa phá lực hút sẽ rất đau và có thể gây tổn thương niêm mạc hoặc tuột dây vòng tránh thai.</em></li>
  <li>Kéo cốc ra từ từ theo đường zíc zắc nhẹ, giữ cốc thẳng đứng để máu không bị sánh ra ngoài.</li>
  <li>Đổ kinh dịch vào bồn cầu, tráng sạch cốc bằng nước lạnh rồi nước ấm, sau đó đặt lại.</li>
</ol>

<h3>Những lỗi người mới hay gặp</h3>
<ul>
  <li>Đẩy cốc quá sâu lên sát cổ tử cung như tampon, khiến cốc khó bung và rất khó tháo ra.</li>
  <li>Cốc chưa bung tròn đều, khiến máu rỉ qua khe móp ra ngoài quần lót.</li>
  <li>Kéo giật cuống cốc khi chưa bóp đáy, gây đau buốt.</li>
  <li>Vội vàng cắt cuống cốc quá ngắn ngay lần đầu dùng, khiến các lần sau khó tìm điểm bám để kéo.</li>
</ul>

<h3>Khả năng rò rỉ khi dùng cốc nguyệt san</h3>
<p>Dù cốc nguyệt san có tỷ lệ chống tràn rất cao, <strong>trong 2–3 chu kỳ đầu tiên</strong> hầu hết chị em đều gặp tình trạng rò rỉ do đặt chưa chuẩn góc, cốc chưa bung hết, chọn nhầm size hoặc để cốc quá đầy vào ngày cao điểm. Rò rỉ cũng rất dễ xảy ra khi nằm ngủ nghiêng hoặc khi ho, hắt hơi mạnh. Vì vậy, việc trang bị một giải pháp bảo vệ dự phòng là điều bắt buộc để bạn luôn tự tin.</p>

<h3>Quần nguyệt san là gì, vì sao nên mặc cùng cốc?</h3>
<p><strong>Quần nguyệt san</strong> (quần lót thấm hút kinh nguyệt) là chiếc quần lót có vùng đáy tích hợp đa tầng công nghệ: lớp bề mặt thoáng khí mao dẫn 1 chiều, lõi nén vi sợi thấm hút sâu, và màng nano chống thấm tuyệt đối. Quần mặc như đồ lót bình thường, giặt sạch và tái sử dụng 2–3 năm. Khi kết hợp với cốc nguyệt san, quần đóng vai trò là <strong>tấm khiên bảo vệ kép</strong>: hứng trọn những giọt kinh rò rỉ ngoài ý muốn, bảo vệ 100% trang phục ngoài và ga giường mà không cần dán thêm miếng băng vệ sinh bí bách, ngứa ngáy.</p>

${getCtaHtml(
  'ANTCARE – Quần nguyệt san cao cấp cho phụ nữ Việt',
  'Thiết kế đáy 4 lớp siêu mỏng 2mm thoáng mát, khử mùi 99%. Là lớp giáp bảo vệ dự phòng hoàn hảo khi dùng cốc nguyệt san, tự do vận động và ngủ ngon suốt đêm.'
)}

<dl class="faq">
  <dt>Lần đầu dùng cốc nguyệt san có đau không?</dt>
  <dd>Thường không đau nếu bạn thả lỏng hoàn toàn cơ thể, chọn kiểu gấp đầu thon nhỏ (như Punch-down) và đưa vào đúng hướng chếch về thắt lưng. Cảm giác căng tức hay cộm thường do đặt chưa đủ sâu hoặc chọn size cốc quá lớn/quá cứng.</dd>
  <dt>Đeo cốc nguyệt san đi ngủ qua đêm được không?</dt>
  <dd>Hoàn toàn được, nếu thời gian ngủ không quá 10–12 giờ theo khuyến cáo. Để an tâm không lo tràn nệm khi nằm nghiêng lăn lộn, bạn nên mặc thêm chiếc quần nguyệt san chống tràn đáy mở rộng.</dd>
</dl>
<p class="note">Bài viết mang tính tham khảo kiến thức y khoa. Phụ nữ sau sinh trong 6 tuần đầu, người đang điều trị viêm phụ khoa hoặc đặt vòng tránh thai nên tham khảo ý kiến bác sĩ trước khi sử dụng cốc nguyệt san.</p>

${sourcesHtml}
</div>`;

// =========================================================================
// ARTICLE 2: Cách chọn size cốc nguyệt san và vệ sinh, tiệt trùng
// =========================================================================
const content2 = `<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cách chọn size cốc nguyệt san và vệ sinh, tiệt trùng, bảo quản cốc đúng cách</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Thông tin tham khảo y khoa</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Chọn size cốc nguyệt san dựa vào 4 yếu tố then chốt: <strong>độ cao cổ tử cung</strong> (thấp thì chọn cốc ngắn), <strong>tiền sử sinh thường</strong> (đã sinh thường qua ngả âm đạo thường chọn size lớn hơn), <strong>lượng kinh thực tế</strong> (ra nhiều chọn dung tích lớn) và <strong>độ khỏe cơ sàn chậu</strong> (chơi thể thao chọn cốc cứng hơn, cơ nhạy cảm chọn cốc mềm). Vệ sinh: xả nước lạnh trước rồi rửa nước ấm; tiệt trùng bằng nước sôi 5–10 phút trước và sau mỗi chu kỳ; để khô tự nhiên và bảo quản trong túi vải thoáng khí.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-coc-nguyet-san.jpg" alt="Các kích cỡ size cốc nguyệt san" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Chọn đúng size cốc theo độ cao cổ tử cung và cơ sàn chậu giúp ngăn ngừa 95% nguy cơ rò rỉ.
  </figcaption>
</figure>

<h3>4 yếu tố quyết định cách chọn size cốc nguyệt san</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Yếu tố cơ thể</th><th>Ảnh hưởng thực tế</th><th>Gợi ý chọn size</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Độ cao cổ tử cung</strong></td><td>Cổ tử cung thấp nếu dùng cốc dài sẽ bị lồi cuống ra ngoài gây cộm rát; cổ tử cung cao dùng cốc ngắn sẽ khó với tay lấy ra</td><td>Thấp: Chọn cốc dáng ngắn/bầu tròn; Cao: Chọn cốc thân dài thon</td></tr>
    <tr><td><strong>Tiền sử sinh nở</strong></td><td>Sau sinh nở qua ngả âm đạo tự nhiên, cơ sàn chậu và đường kính âm đạo có xu hướng giãn rộng hơn</td><td>Chưa sinh hoặc sinh mổ: Size S/M; Đã sinh thường: Size L/XL</td></tr>
    <tr><td><strong>Lượng kinh nguyệt</strong></td><td>Lượng kinh ra nhiều khiến cốc nhỏ bị đầy tràn nhanh sau 2–3 giờ</td><td>Kinh ít/vừa: Dung tích 20–25ml; Kinh nhiều: Dung tích 30–35ml</td></tr>
    <tr><td><strong>Sức mạnh cơ sàn chậu</strong></td><td>Người tập gym, yoga, thể thao cơ sàn chậu siết mạnh dễ bóp méo cốc mềm; người bàng quang nhạy cảm dễ bị tức tiểu nếu cốc quá cứng</td><td>Vận động nhiều: Chọn cốc độ cứng vừa/cứng; Nhạy cảm: Chọn cốc silicone mềm dẻo</td></tr>
  </tbody>
</table>
</div>

<h3>Cách tự đo độ cao cổ tử cung tại nhà cực kỳ đơn giản</h3>
<ol>
  <li><strong>Thời điểm đo:</strong> Nên đo vào ngày đầu tiên hoặc ngày thứ hai của kỳ kinh nguyệt, vì lúc này vị trí cổ tử cung sẽ hạ thấp hơn bình thường.</li>
  <li><strong>Vệ sinh:</strong> Rửa tay thật sạch bằng xà phòng, cắt ngắn móng tay để tránh trầy xước niêm mạc.</li>
  <li><strong>Tư thế:</strong> Ngồi xổm hoặc đứng gác một chân lên bồn cầu để mở rộng xương chậu.</li>
  <li><strong>Xác định cổ tử cung:</strong> Đưa ngón tay trỏ hoặc ngón giữa từ từ vào âm đạo cho đến khi đầu ngón tay chạm vào một khối tròn, chắc, hơi trơn bóng và có một lỗ lõm nhỏ ở giữa (cảm giác giống như chạm vào chóp đầu mũi của bạn).</li>
  <li><strong>Đọc kết quả:</strong>
    <ul>
      <li>Ngón tay mới vào <strong>đến đốt thứ nhất (~2–3cm)</strong> đã chạm: Cổ tử cung thấp (Low cervix) → Nên chọn cốc thân ngắn hoặc đĩa nguyệt san.</li>
      <li>Ngón tay vào <strong>đến đốt thứ hai (~4–5cm)</strong>: Cổ tử cung trung bình (Average cervix) → Hợp với hầu hết mọi dòng cốc tiêu chuẩn.</li>
      <li>Ngón tay vào <strong>hết cả ngón tay (>5.5cm)</strong> mới chạm hoặc không chạm tới: Cổ tử cung cao (High cervix) → Nên chọn cốc thân dài, có cuống dài để dễ tháo.</li>
    </ul>
  </li>
</ol>

<h3>Cách vệ sinh cốc nguyệt san hằng ngày trong chu kỳ</h3>
<ul>
  <li><strong>Mỗi lần đổ cốc:</strong> Tráng xả trực tiếp đáy cốc dưới <strong>vòi nước lạnh trước</strong>. <em>Lưu ý: Không dùng nước nóng xả trực tiếp vào máu kinh vì nhiệt độ cao sẽ làm đông vón protein trong máu, khiến cốc bị ố vàng và lưu lại mùi hôi tanh khó sạch.</em> Sau đó mới rửa lại với nước ấm.</li>
  <li>Dùng dung dịch vệ sinh dịu nhẹ có độ pH 4.0–4.5, không chứa dầu và không có hương liệu tổng hợp.</li>
  <li><strong>Vệ sinh các lỗ thông khí:</strong> Bịt kín miệng cốc đầy nước bằng lòng bàn tay rồi bóp chặt đáy cốc để tia nước phụt mạnh qua các lỗ nhỏ quanh vành cốc, thổi bay các cặn dịch đọng.</li>
  <li>Tuyệt đối không dùng cồn 90°, xà phòng rửa chén, nước tẩy Javel, giấm hay tinh dầu để ngâm cốc vì sẽ phá hủy cấu trúc silicone y tế và gây viêm loét âm đạo.</li>
</ul>

<h3>Cách tiệt trùng cốc nguyệt san trước và sau chu kỳ</h3>
<ul>
  <li>Tiệt trùng bắt buộc <strong>trước khi bắt đầu kỳ kinh</strong> và <strong>sau khi kỳ kinh kết thúc</strong>.</li>
  <li><strong>Đun sôi truyền thống:</strong> Cho cốc vào nồi nước ngập sâu, đun sôi sùng sục trong 5–7 phút. Đặt cốc vào bên trong một cái cây đánh trứng bằng inox để cốc không bị chìm chạm đáy nồi gây cháy chảy silicone.</li>
  <li><strong>Dùng lò vi sóng:</strong> Cho cốc vào cốc tiệt trùng silicone chuyên dụng, đổ đầy nước và quay ở mức công suất cao trong 3–5 phút.</li>
  <li><strong>Dùng viên tiệt trùng y tế:</strong> Hòa tan 1 viên tiệt trùng (như Milton) vào nước sạch và ngâm cốc trong 15 phút.</li>
</ul>

<h3>Bảo quản cốc nguyệt san đúng chuẩn</h3>
<ul>
  <li>Sau khi tiệt trùng sạch sẽ, để cốc khô ráo hoàn toàn ở nơi thoáng mát tự nhiên.</li>
  <li>Cất cốc vào túi vải cotton hoặc túi lụa thoáng khí đi kèm. Tuyệt đối không cất cốc vào hộp nhựa kín bưng hay túi nilon vì sẽ giữ lại hơi ẩm tạo điều kiện cho nấm mốc phát triển.</li>
  <li><strong>Khi nào cần thay cốc mới?</strong> Cốc bị rách nứt mép, bề mặt bị nhớt dính dù đã rửa, hoặc cốc có mùi khó chịu dai dẳng sau khi đun sôi. Tuổi thọ trung bình của cốc tốt là từ 3–5 năm.</li>
</ul>

<h3>Quần nguyệt san: "Phao cứu sinh" trong giai đoạn thử size</h3>
<p>Chọn size cốc lần đầu tiên là một trải nghiệm có tỷ lệ thử - sai nhất định. Cốc quá nhỏ sẽ bị rò rỉ viền, cốc quá to lại gây chèn ép bàng quang khiến bạn khó đi tiểu. Trong những chu kỳ đầu tiên làm quen size, việc mặc thêm chiếc <strong>quần nguyệt san thấm hút ANTCARE</strong> bên ngoài sẽ giúp bạn gạt bỏ 100% nỗi sợ lem ố ra váy đầm hay ghế làm việc, tự tin trải nghiệm lối sống văn minh không rác thải.</p>

${getCtaHtml(
  'Tự tin làm quen cốc nguyệt san cùng ANTCARE',
  'Bộ đôi hoàn hảo: Cốc hứng bên trong + Quần nguyệt san mỏng nhẹ 2mm bảo vệ bên ngoài. Tiết kiệm chi phí, thoáng mát, tạm biệt hoàn toàn nỗi lo tràn viền.'
)}

<dl class="faq">
  <dt>Chưa từng sinh con nên chọn cốc nguyệt san size nào?</dt>
  <dd>Nếu bạn dưới 30 tuổi và chưa từng sinh con qua ngả âm đạo, hãy bắt đầu với size nhỏ (thường là Size S hoặc Size 1 theo từng hãng). Kết hợp đo chiều cao cổ tử cung để chọn chiều dài thân cốc phù hợp nhất.</dd>
  <dt>Có cần phải đun sôi tiệt trùng cốc nguyệt san mỗi ngày không?</dt>
  <dd>Không cần thiết. Trong suốt những ngày hành kinh, mỗi lần đổ bạn chỉ cần rửa sạch với nước lạnh và dung dịch vệ sinh dịu nhẹ. Việc đun sôi tiệt trùng chỉ cần thực hiện 2 lần: ngay trước ngày đầu tiên sử dụng và sau khi sạch kinh để cất bảo quản.</dd>
</dl>
<p class="note">Nội dung bài viết mang tính chất hướng dẫn kiến thức sức khỏe phụ khoa thường thức.</p>

${sourcesHtml}
</div>`;

// =========================================================================
// ARTICLE 3: Cách dùng đĩa nguyệt san
// =========================================================================
const content3 = `<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Cẩm nang y tế · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cách dùng đĩa nguyệt san: đặt, gài, tháo ra không đổ cho người mới</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Hướng dẫn chi tiết từng bước</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Cách dùng đĩa nguyệt san: (1) rửa tay, bóp dẹt đĩa thành hình số 8; (2) đưa đĩa vào âm đạo theo hướng <strong>xuống dưới và ra sau</strong> (về phía xương cụt), đẩy đến hết vòm âm đạo; (3) dùng ngón tay <strong>ấn viền trước lên, gài sau xương mu</strong>; (4) thay theo hướng dẫn hãng (thường tối đa 12 giờ); (5) khi tháo, ngồi xổm, móc ngón tay vào viền đĩa (hoặc quai kéo), <strong>giữ đĩa nằm ngang</strong> khi kéo ra để không đổ. Đĩa có thể "tự đổ" một phần khi đi vệ sinh, nên mặc thêm <strong>quần nguyệt san</strong> để phòng rò rỉ.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/so-sanh-dia-nguyet-san.jpg" alt="Đĩa nguyệt san silicone y tế mềm mại" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Đĩa nguyệt san: đặt ở vòm âm đạo sát cổ tử cung, dung tích chứa lớn nhất trong các dòng sản phẩm.
  </figcaption>
</figure>

<h3>Đĩa nguyệt san là gì?</h3>
<p>Đĩa nguyệt san (menstrual disc) là sản phẩm chứa dịch kinh nguyệt có hình đĩa tròn dẹt, cấu tạo gồm một vòng viền silicone y tế đàn hồi và phần lòng đĩa làm từ màng silicone siêu mỏng mềm mại. Không giống cốc nguyệt san nằm ở đoạn dưới âm đạo và giữ vị trí bằng lực hút chân không, đĩa nguyệt san được đặt sâu ở <strong>vòm âm đạo (vaginal fornix), ngay bên dưới cổ tử cung</strong>, và được cố định nhờ cơ chế gài vào gờ sau xương mu của khung chậu.</p>
<p>Theo thử nghiệm lâm sàng công bố trên tạp chí y học <em>BMJ Sexual &amp; Reproductive Health (2023)</em>, <strong>đĩa nguyệt san là sản phẩm có sức chứa dung tích thực tế lớn nhất, đạt trung bình 61ml máu</strong>, cao hơn đáng kể so với cốc (30–40ml), tampon (20–30ml) và băng vệ sinh thông thường.</p>

<h3>Cách đặt đĩa nguyệt san chuẩn xác qua 5 bước</h3>
<ol>
  <li><strong>Vệ sinh sạch sẽ:</strong> Rửa tay thật kỹ bằng xà phòng. Thư giãn cơ thể ở tư thế ngồi trên bồn cầu, ngồi xổm hoặc đứng gác một chân lên cao.</li>
  <li><strong>Bóp dẹt đĩa:</strong> Dùng ngón cái và ngón trỏ bóp chặt hai bên viền đĩa lại ở giữa để tạo thành hình số 8 thuôn dài, thon gọn bằng kích cỡ của một chiếc tampon. Nếu đĩa có quai tháo, hãy hướng quai ra phía ngoài.</li>
  <li><strong>Đưa đĩa vào đúng góc nghiêng:</strong> Hướng miệng đĩa chếch <strong>xuống dưới và ra phía sau về phía xương cụt</strong> (tuyệt đối không đẩy thẳng đứng lên trên). Đẩy đĩa trượt sâu vào trong âm đạo cho đến khi bạn cảm thấy đĩa đã chạm đến đáy vòm âm đạo.</li>
  <li><strong>Gài viền trước vào xương mu:</strong> Đây là bước then chốt nhất! Dùng ngón tay trỏ đẩy mép viền trước của đĩa hất ngược lên trên, gài chặt vào hõm nằm ngay sau xương mu.</li>
  <li><strong>Kiểm tra cảm giác:</strong> Đĩa nguyệt san khi đã gài đúng vị trí sẽ hoàn toàn "vô hình" trong cơ thể, bạn sẽ không cảm thấy cộm, vướng hay đau tức dù đứng lên ngồi xuống hay vận động mạnh.</li>
</ol>

<h3>Cách tháo đĩa nguyệt san khéo léo, không lo đổ máu ra tay</h3>
<ol>
  <li>Ngồi ngay ngắn trên bồn cầu (để nếu có giọt dịch nào rơi ra sẽ rơi thẳng vào lòng bồn cầu).</li>
  <li>Rặn nhẹ cơ sàn chậu như khi đi vệ sinh để mép đĩa nhích xuống gần tầm với của ngón tay.</li>
  <li>Đưa ngón trỏ vào, móc nhẹ đầu ngón tay vào bên dưới mép viền trước của đĩa (hoặc luồn ngón tay vào quai kéo tháo).</li>
  <li>Từ từ kéo đĩa ra ngoài, <strong>chú ý giữ đĩa luôn ở phương nằm ngang</strong> giống như bạn đang bê một chiếc đĩa đựng nước, tránh nghiêng lật làm đổ dịch ra ngoài.</li>
  <li>Đổ dịch kinh vào bồn cầu, rửa sạch đĩa bằng nước lạnh rồi nước ấm và xà phòng dịu nhẹ trước khi đặt lại.</li>
</ol>

<h3>Hiện tượng "đĩa tự đổ" (Auto-dumping) là gì?</h3>
<p>Một điểm rất đặc biệt của đĩa nguyệt san là khi bạn ngồi trên bồn cầu và rặn tiểu tiện hoặc đại tiện, các cơ sàn chậu sẽ tự động co bóp và đẩy nhẹ viền đĩa tuột khỏi xương mu trong tích tắc, giúp một phần dịch kinh tự chảy thẳng vào bồn cầu mà bạn không cần phải dùng tay tháo đĩa ra. Sau khi đi vệ sinh xong, bạn chỉ cần dùng ngón tay ấn nhẹ viền đĩa gài lại sau xương mu là xong. Tuy nhiên, nếu đĩa tự đổ ngoài ý muốn khi bạn chỉ mới hắt hơi hay ho, đó là dấu hiệu đĩa chưa được gài chặt hoặc kích cỡ đĩa hơi lớn so với vòm âm đạo của bạn.</p>

<h3>Quần nguyệt san: Lớp bảo vệ thứ 2 không thể thiếu khi dùng đĩa</h3>
<p>Dù đĩa nguyệt san chứa được dung tích máu rất lớn, thao tác tháo đĩa và hiện tượng tự đổ đôi khi vẫn tiềm ẩn rủi ro rò rỉ rây bẩn. Việc mặc kèm một chiếc <strong>quần lót kinh nguyệt ANTCARE</strong> bên ngoài sẽ đóng vai trò là "chiếc túi khí an toàn" hứng trọn mọi giọt dịch rỉ ra, giúp bạn thoải mái diện mọi trang phục sáng màu đi làm, đi tiệc hay nằm ngủ ngon lành suốt 12 tiếng.</p>

${getCtaHtml(
  'Bộ đôi tự do: Đĩa nguyệt san & Quần lót thấm hút ANTCARE',
  'Màng đáy 4 lớp nén 2mm khóa ẩm tuyệt đối. Trợ thủ bảo vệ toàn diện, cho phụ nữ sự tự tin và lòng kiêu hãnh trọn vẹn trong mọi ngày đèn đỏ.'
)}

<dl class="faq">
  <dt>Đĩa nguyệt san có dùng được khi đang đặt vòng tránh thai (IUD) không?</dt>
  <dd>Đĩa nguyệt san không hoạt động dựa trên lực hút chân không nên có độ an toàn với vòng tránh thai cao hơn so với cốc nguyệt san. Tuy nhiên, bạn vẫn cần cẩn thận khi móc tháo đĩa để tránh ngón tay vướng vào sợi dây vòng thò ra từ cổ tử cung. Tốt nhất hãy tham khảo ý kiến bác sĩ phụ khoa.</dd>
  <dt>Vì sao đĩa nguyệt san bị rò rỉ khi đi tiểu tiện?</dt>
  <dd>Đây chính là hiện tượng "tự đổ" tự nhiên do cơ vùng chậu co thắt khi rặn. Sau khi đi vệ sinh xong, bạn chỉ cần lấy một ngón tay sạch ấn viền trước gài lại vững chắc vào sau xương mu là đĩa sẽ tiếp tục giữ kín dịch hoàn toàn.</dd>
</dl>
<p class="note">Nội dung tổng hợp từ các hướng dẫn chăm sóc sức khỏe phụ khoa lâm sàng.</p>

${sourcesHtml}
</div>`;

// =========================================================================
// ARTICLE 4: Cốc nguyệt san hay đĩa nguyệt san
// =========================================================================
const content4 = `<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · So sánh sản phẩm · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cốc nguyệt san hay đĩa nguyệt san: nên chọn loại nào?</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 7 phút · So sánh toàn diện</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Chọn <strong>cốc nguyệt san</strong> nếu bạn muốn sản phẩm phổ biến, dễ mua, dễ tháo hơn nhờ có cuống dài, dùng lực hút giữ chắc chắn khi vận động thể thao mạnh. Chọn <strong>đĩa nguyệt san</strong> nếu bạn ra kinh rất nhiều (cường kinh), có cổ tử cung thấp, bị đau tức bàng quang với lực hút của cốc, hoặc muốn quan hệ thâm nhập trong ngày đèn đỏ. Cả hai đều cần thời gian làm quen và đều có thể rò rỉ, vì vậy kết hợp cùng <strong>quần nguyệt san</strong> làm lớp dự phòng là công thức tối ưu nhất.</div>

<h3>Bảng so sánh chi tiết: Cốc nguyệt san vs Đĩa nguyệt san</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Tiêu chí so sánh</th><th>Cốc nguyệt san (Menstrual Cup)</th><th>Đĩa nguyệt san (Menstrual Disc)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Cấu tạo hình dáng</strong></td><td>Hình chiếc chuông nhỏ, có cuống cầm ở đáy</td><td>Hình chiếc đĩa tròn dẹt, viền dẻo màng mỏng</td></tr>
    <tr><td><strong>Vị trí đặt trong cơ thể</strong></td><td>Đoạn dưới âm đạo (thấp hơn cổ tử cung)</td><td>Vòm âm đạo (sát cổ tử cung, sau xương mu)</td></tr>
    <tr><td><strong>Cơ chế cố định</strong></td><td>Lực hút chân không bám vào thành âm đạo</td><td>Gài cơ học vào gờ sau xương mu</td></tr>
    <tr><td><strong>Dung tích chứa máu</strong></td><td>Khá cao (25–35ml)</td><td>Cao nhất (50–65ml)</td></tr>
    <tr><td><strong>Độ dễ khi đưa vào</strong></td><td>Trung bình (cần gấp nếp và căn cho cốc bung)</td><td>Dễ hơn (bóp dẹt số 8 đẩy sâu vào trong)</td></tr>
    <tr><td><strong>Độ dễ khi tháo ra</strong></td><td>Dễ hơn (lần theo cuống bóp đáy cốc)</td><td>Khó hơn (dễ sánh đổ dịch ra tay nếu vụng)</td></tr>
    <tr><td><strong>Hiện tượng tự đổ (Auto-dump)</strong></td><td>Hầu như không có</td><td>Có (khi rặn đi vệ sinh nặng/nhẹ)</td></tr>
    <tr><td><strong>Tương thích với vòng tránh thai</strong></td><td>Cần cẩn thận lực hút làm xê dịch vòng</td><td>Ít nguy cơ xê dịch do không có lực hút</td></tr>
    <tr><td><strong>Quan hệ tình dục thâm nhập</strong></td><td>Không thể quan hệ khi đang đeo cốc</td><td>Có thể quan hệ thâm nhập nhẹ nhàng</td></tr>
    <tr><td><strong>Cổ tử cung thấp</strong></td><td>Dễ bị cộm cuống ra ngoài cửa mình</td><td>Rất phù hợp vì nằm gọn ở vòm chậu</td></tr>
    <tr><td><strong>Độ phổ biến tại Việt Nam</strong></td><td>Rất phổ biến, nhiều hãng chính hãng</td><td>Ít nơi bán hơn, chủ yếu hàng xách tay</td></tr>
  </tbody>
</table>
</div>

<h3>Ai nên ưu tiên chọn cốc nguyệt san?</h3>
<ul>
  <li>Người mới bắt đầu chuyển từ băng vệ sinh / tampon sang sản phẩm tái sử dụng văn minh.</li>
  <li>Người thường xuyên tập gym, chạy bộ, bơi lội, nhảy múa cần sản phẩm hút chặt không dịch chuyển.</li>
  <li>Người có chiều cao cổ tử cung từ trung bình đến cao.</li>
  <li>Người thích quy trình tháo rửa gọn gàng, ít dính máu ra tay.</li>
</ul>

<h3>Ai nên ưu tiên chọn đĩa nguyệt san?</h3>
<ul>
  <li>Người bị kinh nguyệt ra nhiều (cường kinh), cốc nguyệt san thông thường bị đầy quá nhanh.</li>
  <li>Người có cổ tử cung thấp, đã từng dùng cốc nguyệt san nhưng bị lồi cuống gây đau rát viền âm hộ.</li>
  <li>Người có cơ địa nhạy cảm, từng dùng cốc nhưng bị tức bụng dưới hoặc khó tiểu do lực hút chân không.</li>
  <li>Các cặp đôi có nhu cầu quan hệ tình dục thoải mái, sạch sẽ ngay trong những ngày dâu rụng.</li>
</ul>

<h3>Lộ trình 3 chu kỳ chuyển đổi thành công từ băng vệ sinh sang cốc / đĩa</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Chu kỳ</th><th>Mục tiêu &amp; Hành động cụ thể</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Chu kỳ 1 (Tập làm quen)</strong></td><td>Chỉ tập đặt và tháo cốc/đĩa tại nhà vào những ngày kinh ít hoặc cuối tuần. Khi đi làm hay ra ngoài, hãy mặc quần nguyệt san để giữ tâm lý hoàn toàn thoải mái, không áp lực.</td></tr>
    <tr><td><strong>Chu kỳ 2 (Thử nghiệm ban ngày)</strong></td><td>Bắt đầu đeo cốc/đĩa cả ngày khi đi làm. Luôn mặc chiếc quần nguyệt san làm lớp khiên bảo vệ dự phòng bên ngoài và ghi chép lại số giờ cốc đầy.</td></tr>
    <tr><td><strong>Chu kỳ 3 (Tự tin tuyệt đối)</strong></td><td>Tự tin dùng sản phẩm cả ngày lẫn đêm khi đi ngủ. Duy trì mặc quần nguyệt san mỏng nhẹ vào những ngày ra nhiều để giấc ngủ sâu trọn vẹn.</td></tr>
  </tbody>
</table>
</div>

<h3>Quần nguyệt san: Mảnh ghép hoàn thiện cho cả người dùng cốc lẫn đĩa</h3>
<p>Dù bạn chọn cốc hay đĩa, thực tế chứng minh không có sản phẩm đặt trong nào cam kết chống rò rỉ 100% trong mọi tư thế nằm và vận động. Kết hợp một sản phẩm hứng bên trong (cốc hoặc đĩa) cùng một chiếc <strong>quần nguyệt san ANTCARE</strong> bên ngoài tạo nên một giải pháp hoàn mỹ: Cốc/đĩa xử lý 95% lượng kinh nguyệt, quần xử lý nốt 5% rò rỉ mép. Bạn hoàn toàn không còn phải tốn tiền mua thêm băng vệ sinh hàng ngày, không còn rác thải nhựa và không bao giờ phải chịu đựng cảm giác ẩm bí ngứa ngáy.</p>

${getCtaHtml(
  'Giải pháp ngày đèn đỏ hoàn hảo cùng ANTCARE',
  'Quần nguyệt san công nghệ vi sợi dệt tổ ong hữu cơ: Thoáng mát, êm dịu cho da nhạy cảm, người bạn đồng hành tin cậy của cốc và đĩa nguyệt san.'
)}

<dl class="faq">
  <dt>Cốc nguyệt san hay đĩa nguyệt san chứa được nhiều dịch hơn?</dt>
  <dd>Thông thường đĩa nguyệt san có dung tích chứa lớn hơn đáng kể (lên đến 50–65ml) nhờ tận dụng toàn bộ không gian của vòm âm đạo; trong khi cốc nguyệt san thường chỉ chứa được khoảng 25–35ml dịch.</dd>
  <dt>Người chưa từng quan hệ tình dục có nên dùng cốc hay đĩa không?</dt>
  <dd>Cả cốc và đĩa nguyệt san đều có thể làm giãn hoặc rách màng trinh khi đưa vào âm đạo. Nếu bạn muốn giữ màng trinh, lựa chọn tối ưu nhất là sử dụng quần lót nguyệt san thấm hút ANTCARE mặc bên ngoài cơ thể.</dd>
</dl>
<p class="note">Nội dung tham khảo kiến thức khoa học sức khỏe phụ nữ từ ANTCARE.</p>

${sourcesHtml}
</div>`;

// =========================================================================
// ARTICLE 5: Cốc, đĩa nguyệt san bị rò rỉ: 10 nguyên nhân & cách khắc phục
// =========================================================================
const content5 = `<div class="article-cam-nang">
<header class="site mb-6">
  <div class="eyebrow">ANTCARE · Khắc phục sự cố · Sức khỏe phụ nữ</div>
  <h1 class="text-2xl sm:text-3xl font-extrabold text-[#6633B4] my-2">Cốc, đĩa nguyệt san bị rò rỉ: 10 nguyên nhân và cách khắc phục</h1>
  <p class="meta text-xs sm:text-sm text-[#5B5568]">Cập nhật 29/10/2026 · Đọc khoảng 8 phút · Hướng dẫn xử lý triệt để</p>
</header>

<div class="answer"><strong>Trả lời nhanh:</strong> Cốc nguyệt san hay rò rỉ vì cốc chưa bung kín khít, chọn sai kích cỡ (size), đặt góc sai hướng, cổ tử cung lệch ra ngoài vành cốc, cốc bị quá đầy hoặc lỗ thông khí bị tắc. Đĩa nguyệt san hay rò rỉ vì chưa gài viền sau xương mu, chưa đẩy vào hết vòm âm đạo, tự đổ khi đi vệ sinh hoặc kích cỡ đĩa không khớp với khung chậu. Hãy đối chiếu 10 nguyên nhân dưới đây để khắc phục, và luôn mặc thêm <strong>quần nguyệt san</strong> làm lớp bảo vệ dự phòng an tâm tuyệt đối.</div>

<figure class="my-6 rounded-2xl overflow-hidden border border-[#E6DFF2] bg-[#FAF8FD] shadow-xs max-w-lg mx-auto">
  <img src="/images/products/minh-hoa-cau-tao-4-lop.jpg" alt="Quần nguyệt san lớp dự phòng chống tràn rò rỉ" class="w-full h-auto object-cover max-h-[360px]" loading="lazy" />
  <figcaption class="p-2.5 text-xs text-[#5B5568] italic text-center bg-[#FAF8FD]">
    Mặc quần nguyệt san làm lớp dự phòng bên ngoài giúp loại bỏ 100% nỗi sợ rò rỉ từ cốc và đĩa.
  </figcaption>
</figure>

<h3>Rò rỉ khi dùng cốc, đĩa nguyệt san có phải chuyện bất thường?</h3>
<p>Câu trả lời là: <strong>Hoàn toàn bình thường</strong>, đặc biệt là trong 2–3 chu kỳ đầu tiên khi cơ thể bạn và đôi bàn tay đang trong giai đoạn làm quen với sản phẩm. Cấu tạo giải phẫu âm đạo của mỗi người phụ nữ là duy nhất. Một vài vệt máu nhỏ dính ở đáy quần ngay sau khi tháo rửa thường chỉ là lượng máu kinh còn sót lại bám dính ở thành âm đạo (residual blood) trôi xuống, chứ không hẳn là cốc hay đĩa bị hở.</p>

<h3>6 nguyên nhân hàng đầu khiến CỐC NGUYỆT SAN bị rò rỉ &amp; Cách xử lý</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Nguyên nhân</th><th>Dấu hiệu nhận biết</th><th>Cách khắc phục triệt để</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1. Cốc chưa bung mở hoàn toàn</strong></td><td>Máu rỉ ra ngay sau khi đặt 15–30 phút dù lượng kinh ít</td><td>Dùng ngón tay miết quanh thân cốc, xoay nhẹ đáy cốc 360 độ hoặc chuyển sang kiểu gấp Punch-down / gấp số 7 để cốc bung nảy tốt hơn.</td></tr>
    <tr><td><strong>2. Chọn nhầm size hoặc độ cứng</strong></td><td>Cốc bị trượt tụt xuống thấp, rỉ liên tục cả ngày</td><td>Nếu cơ sàn chậu khỏe (thường xuyên thể thao), cơ sẽ bóp móp cốc mềm → Đổi sang cốc cứng hơn. Nếu đã sinh thường qua ngả âm đạo → Đổi sang size lớn hơn.</td></tr>
    <tr><td><strong>3. Cổ tử cung nằm ngoài vành cốc</strong></td><td>Khi tháo ra trong lòng cốc hầu như không có máu, nhưng máu lại chảy ướt đẫm ra ngoài</td><td>Cổ tử cung của bạn đang nằm nghiêng cạnh cốc. Hãy hạ thấp cốc xuống gần cửa mình hơn và đưa cốc hướng chếch về phía thắt lưng để miệng cốc ôm trọn cổ tử cung.</td></tr>
    <tr><td><strong>4. Cốc đã bị đầy quá mức</strong></td><td>Chỉ rò rỉ vào cuối ngày hoặc vào ngày kinh cao điểm</td><td>Ghi chép lại chu kỳ để rút ngắn thời gian đổ cốc (thay sau mỗi 4–6 tiếng vào ngày nhiều thay vì chờ 12 tiếng).</td></tr>
    <tr><td><strong>5. Các lỗ thông khí bị tắc</strong></td><td>Cốc khó bung tròn, lực hút chân không rất yếu</td><td>Lỗ thông khí quanh mép vành cốc giúp tạo áp suất chân không. Hãy dùng tăm nhỏ hoặc phụt nước làm sạch thông thoáng các lỗ này sau mỗi lần rửa.</td></tr>
    <tr><td><strong>6. Cắt cuống cốc quá sát gây hở</strong></td><td>Đáy cốc bị thủng vi mô hoặc méo mó</td><td>Cắt tỉa cuống cốc cẩn thận từng đốt một, không cắt phạm sát vào bầu đáy cốc.</td></tr>
  </tbody>
</table>
</div>

<h3>4 nguyên nhân khiến ĐĨA NGUYỆT SAN bị rò rỉ &amp; Cách xử lý</h3>
<div class="table-scroll">
<table>
  <thead>
    <tr><th>Nguyên nhân</th><th>Dấu hiệu nhận biết</th><th>Cách khắc phục triệt để</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>7. Chưa gài viền đĩa sau xương mu</strong></td><td>Đứng dậy thấy cộm rát cửa mình, máu rỉ ngay</td><td>Dùng ngón tay trỏ đẩy mép trước của đĩa hất ngược lên trên, gài chặt vào hõm sau xương mu của khung chậu.</td></tr>
    <tr><td><strong>8. Đẩy đĩa chưa đủ sâu vào vòm chậu</strong></td><td>Đĩa bị xoay ngang hoặc tụt ra ngoài</td><td>Bóp dẹt đĩa số 8, luồn sâu hướng xuống xương cụt cho đến khi chạm hết chiều dài âm đạo trước khi gài mép trước.</td></tr>
    <tr><td><strong>9. Bị tràn khi đi vệ sinh (Auto-dumping)</strong></td><td>Máu rỉ ra sau mỗi lần đi tiểu tiện hoặc đại tiện</td><td>Do cơ rặn làm tuột viền đĩa. Sau khi đi vệ sinh xong, hãy dùng một ngón tay ấn gài lại mép đĩa trước khi đứng dậy.</td></tr>
    <tr><td><strong>10. Kích cỡ đường kính đĩa không phù hợp</strong></td><td>Đĩa hay bị bật tuột khỏi xương mu khi đi đứng</td><td>Thử chuyển sang mẫu đĩa có đường kính và độ dẻo viền phù hợp hơn với vòm âm đạo của bạn.</td></tr>
  </tbody>
</table>
</div>

<h3>Khi nào rò rỉ kinh nguyệt là dấu hiệu cảnh báo bệnh phụ khoa?</h3>
<ul>
  <li>Bạn phải đổ đầy tràn cốc/đĩa dung tích lớn sau mỗi 1–2 giờ liên tục.</li>
  <li>Kỳ kinh kéo dài trên 7 ngày, máu kinh xuất hiện nhiều cục máu đông lớn kèm sắc da nhợt nhạt, mệt mỏi, chóng mặt ngất xỉu (dấu hiệu của cường kinh, u xơ tử cung hoặc lạc nội mạc tử cung).</li>
  <li>Đau bụng dưới dữ dội không đáp ứng thuốc giảm đau hoặc xuất hiện sốt cao đột ngột khi đang đeo sản phẩm đặt trong (nghi ngờ nhiễm trùng hoặc hội chứng sốc độc tố TSS). Hãy tháo sản phẩm ra ngay và đến bệnh viện phụ sản thăm khám.</li>
</ul>

<h3>Tại sao quần nguyệt san là giải pháp dập tắt 100% nỗi sợ rò rỉ?</h3>
<p>Ngay cả những người phụ nữ đã có kinh nghiệm dùng cốc hay đĩa nguyệt san 4–5 năm, rò rỉ vẫn có thể ghé thăm bất chợt trong một đêm ngủ say nằm nghiêng người hay trong một buổi tập yoga gập bụng mạnh. Thay vì sống trong tâm trạng bất an nơm nớp kiểm tra quần, giải pháp thông thái nhất là <strong>mặc chiếc quần nguyệt san ANTCARE làm lớp áo giáp dự phòng</strong>.</p>
<ul>
  <li><strong>Khóa ẩm tuyệt đối:</strong> Thấm hút tức thì mọi giọt kinh rò rỉ, bề mặt tiếp xúc da dệt tổ ong hữu cơ luôn khô ráo 100%.</li>
  <li><strong>Êm ái không cộm:</strong> Độ dày đáy nén chỉ ~2mm, không lộ nếp lằn dưới váy body ôm sát hay quần tây sáng màu.</li>
  <li><strong>Kháng khuẩn khử mùi:</strong> Triệt tiêu 99% mùi hôi tự nhiên của dịch kinh tiếp xúc không khí, không gây hăm đỏ ngứa ngáy như băng dán nilon.</li>
</ul>

${getCtaHtml(
  'Xua tan nỗi lo rò rỉ kinh nguyệt cùng ANTCARE',
  'Đầu tư một lần cho sự tự tin dài lâu. Quần lót nguyệt san ANTCARE ôm sát vòng hông phụ nữ Việt, êm ái, thoáng khí, bảo vệ trọn vẹn 360 độ.'
)}

<dl class="faq">
  <dt>Vì sao cốc nguyệt san bị rò rỉ dù máu trong cốc chưa đầy một nửa?</dt>
  <dd>Nguyên nhân phổ biến nhất là miệng cốc chưa bung mở tròn đều (còn vết móp hở) hoặc cổ tử cung của bạn nằm lệch sang một bên ngoài vành cốc, khiến dòng kinh chảy dọc theo thành âm đạo trôi thẳng ra ngoài mà không rơi vào trong lòng cốc.</dd>
  <dt>Dùng cốc hoặc đĩa nguyệt san có bắt buộc phải mặc thêm quần nguyệt san không?</dt>
  <dd>Không bắt buộc nhưng được các chuyên gia y tế và cộng đồng người dùng khuyến nghị cao nhất, đặc biệt vào 2 ngày đầu chu kỳ và ban đêm khi ngủ. Quần nguyệt san giúp bạn xóa tan hoàn toàn nỗi sợ lem bẩn ra ngoài một cách văn minh, êm ái và không phát sinh rác thải nhựa.</dd>
</dl>
<p class="note">Nội dung bài viết được biên soạn nhằm nâng cao nhận thức chăm sóc sức khỏe kinh nguyệt an toàn cho phụ nữ.</p>

${sourcesHtml}
</div>`;

// Construct new article items
const article1 = {
  id: 2,
  slug: "cach-dung-coc-nguyet-san",
  group: "cam-nang-phu-nu",
  oldSlugs: [
    "kien-thuc/cach-dung-coc-nguyet-san",
    "cam-nang/cach-dung-coc-nguyet-san",
    "news/cach-dung-coc-nguyet-san"
  ],
  title: "Cách dùng cốc nguyệt san cho người mới bắt đầu: gấp, đặt, lấy ra từng bước",
  metaTitle: "Cách dùng cốc nguyệt san cho người mới: gấp, đặt, tháo không đau | ANTCARE",
  description: "Cách dùng cốc nguyệt san cho người mới: 4 kiểu gấp cốc, cách đặt, cách lấy ra không đau, bao lâu đổ cốc một lần, và vì sao nên mặc thêm quần nguyệt san.",
  excerpt: "Để dùng cốc nguyệt san: (1) rửa tay, tiệt trùng cốc trước chu kỳ; (2) gấp cốc nhỏ lại; (3) thả lỏng, đưa cốc vào âm đạo hướng chếch về phía thắt lưng; (4) để cốc tự bung, kiểm tra độ kín; (5) đổ cốc theo thời gian khuyến cáo; (6) khi lấy ra, bóp đáy cốc để phá lực hút rồi kéo nhẹ.",
  category: "Cẩm nang",
  date: "29/10/2026",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  keywords: "cách dùng cốc nguyệt san, cách đặt cốc nguyệt san, cách lấy cốc nguyệt san ra, cốc nguyệt san cho người mới",
  image: "/images/products/so-sanh-coc-nguyet-san.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: content1
};

const article2 = {
  id: 3,
  slug: "cach-chon-size-va-ve-sinh-coc-nguyet-san",
  group: "cam-nang-phu-nu",
  oldSlugs: [
    "kien-thuc/cach-chon-size-va-ve-sinh-coc-nguyet-san",
    "cam-nang/cach-chon-size-va-ve-sinh-coc-nguyet-san",
    "news/cach-chon-size-va-ve-sinh-coc-nguyet-san"
  ],
  title: "Cách chọn size cốc nguyệt san và vệ sinh, tiệt trùng, bảo quản cốc đúng cách",
  metaTitle: "Cách chọn size cốc nguyệt san & cách vệ sinh, tiệt trùng chuẩn y tế | ANTCARE",
  description: "Cách chọn size cốc nguyệt san theo tuổi, sinh nở, độ cao cổ tử cung; cách vệ sinh, tiệt trùng, bảo quản cốc đúng cách và dấu hiệu cần thay cốc mới.",
  excerpt: "Chọn size cốc nguyệt san dựa vào 4 yếu tố: độ cao cổ tử cung, tiền sử sinh nở, lượng kinh và độ khỏe cơ sàn chậu. Hướng dẫn đo cổ tử cung tại nhà, cách rửa nước lạnh tránh ố màu và tiệt trùng đúng cách.",
  category: "Cẩm nang",
  date: "29/10/2026",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  keywords: "cách chọn size cốc nguyệt san, size cốc nguyệt san, cách vệ sinh cốc nguyệt san, tiệt trùng cốc nguyệt san",
  image: "/images/products/so-sanh-coc-nguyet-san.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: content2
};

const article3 = {
  id: 4,
  slug: "cach-dung-dia-nguyet-san",
  group: "cam-nang-phu-nu",
  oldSlugs: [
    "kien-thuc/cach-dung-dia-nguyet-san",
    "cam-nang/cach-dung-dia-nguyet-san",
    "news/cach-dung-dia-nguyet-san"
  ],
  title: "Cách dùng đĩa nguyệt san: đặt, gài, tháo ra không đổ cho người mới",
  metaTitle: "Cách dùng đĩa nguyệt san từng bước: đặt, gài, tháo ra không đổ | ANTCARE",
  description: "Cách dùng đĩa nguyệt san từng bước: bóp hình số 8, đặt vào vòm âm đạo, gài sau xương mu, tháo ra không đổ. Vì sao đĩa hay rò rỉ và nên mặc quần nguyệt san.",
  excerpt: "Cách dùng đĩa nguyệt san: (1) bóp dẹt hình số 8; (2) đẩy vào vòm âm đạo hướng về xương cụt; (3) gài viền trước vào sau xương mu; (4) tháo ra giữ đĩa nằm ngang; (5) hiểu rõ hiện tượng tự đổ khi đi vệ sinh và cách kết hợp quần nguyệt san.",
  category: "Cẩm nang",
  date: "29/10/2026",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  keywords: "cách dùng đĩa nguyệt san, đĩa nguyệt san là gì, cách tháo đĩa nguyệt san, đĩa kinh nguyệt",
  image: "/images/products/so-sanh-dia-nguyet-san.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: content3
};

const article4 = {
  id: 5,
  slug: "coc-nguyet-san-hay-dia-nguyet-san",
  group: "cam-nang-phu-nu",
  oldSlugs: [
    "kien-thuc/coc-nguyet-san-hay-dia-nguyet-san",
    "cam-nang/coc-nguyet-san-hay-dia-nguyet-san",
    "news/coc-nguyet-san-hay-dia-nguyet-san"
  ],
  title: "Cốc nguyệt san hay đĩa nguyệt san: nên chọn loại nào?",
  metaTitle: "Cốc nguyệt san hay đĩa nguyệt san tốt hơn? So sánh chi tiết & cách chọn | ANTCARE",
  description: "Cốc nguyệt san hay đĩa nguyệt san tốt hơn? So sánh dung tích, độ dễ dùng, rò rỉ, vòng tránh thai; ai hợp cốc, ai hợp đĩa và cách kết hợp quần nguyệt san.",
  excerpt: "So sánh chi tiết cốc và đĩa nguyệt san: dung tích, vị trí đặt, cơ chế bám, độ dễ tháo, tương thích vòng tránh thai và quan hệ tình dục. Lộ trình 3 chu kỳ chuyển đổi thành công cùng quần nguyệt san.",
  category: "Cẩm nang",
  date: "29/10/2026",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  keywords: "cốc nguyệt san hay đĩa nguyệt san, so sánh cốc và đĩa nguyệt san, nên dùng cốc hay đĩa",
  image: "/images/products/so-sanh-coc-nguyet-san.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: content4
};

const article5 = {
  id: 6,
  slug: "coc-dia-nguyet-san-bi-ro-ri",
  group: "cam-nang-phu-nu",
  oldSlugs: [
    "kien-thuc/coc-dia-nguyet-san-bi-ro-ri",
    "cam-nang/coc-dia-nguyet-san-bi-ro-ri",
    "news/coc-dia-nguyet-san-bi-ro-ri"
  ],
  title: "Cốc, đĩa nguyệt san bị rò rỉ: 10 nguyên nhân và cách khắc phục",
  metaTitle: "Cốc, đĩa nguyệt san bị rò rỉ: 10 nguyên nhân & cách khắc phục triệt để | ANTCARE",
  description: "Cốc, đĩa nguyệt san bị rò rỉ vì sao? 10 nguyên nhân thường gặp và cách khắc phục từng lỗi; khi nào cần đi khám, và vì sao nên mặc thêm quần nguyệt san.",
  excerpt: "10 nguyên nhân khiến cốc nguyệt san và đĩa nguyệt san bị rò rỉ (chưa bung kín, sai size, cổ tử cung lệch vành, tắc lỗ thông khí, tuột viền xương mu...) và giải pháp khắc phục triệt để từng lỗi.",
  category: "Cẩm nang",
  date: "29/10/2026",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  keywords: "cốc nguyệt san bị rò rỉ, đĩa nguyệt san bị tràn, vì sao cốc nguyệt san bị rỉ, cách khắc phục rò rỉ cốc nguyệt san",
  image: "/images/products/minh-hoa-cau-tao-4-lop.jpg",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/footer-logo.png",
    description: "Góc kiến thức y tế & Cẩm nang chăm sóc sức khỏe phụ nữ ANTCARE"
  },
  content: content5
};

const newArticles = [article1, article2, article3, article4, article5];

// Filter out any duplicates if slug already exists
const existingSlugs = new Set((currentNews.list || []).map(a => a.slug));
const filteredNew = newArticles.filter(a => !existingSlugs.has(a.slug));

// Combine: existing list + new 5 articles
const updatedList = [...(currentNews.list || []), ...filteredNew];

const updatedNewsData = {
  featured: currentNews.featured || updatedList[0],
  list: updatedList
};

fs.writeFileSync(newsJsonPath, JSON.stringify(updatedNewsData, null, 2), 'utf8');

console.log(`Successfully added ${filteredNew.length} articles! Total articles in news.json: ${updatedList.length}`);
