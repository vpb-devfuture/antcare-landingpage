const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 57) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Hướng dẫn đo huyết áp tại nhà cho người cao tuổi: tư thế đúng, thời điểm đo, 7 lỗi thường gặp làm sai lệch kết quả và cách đọc chỉ số.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cách đo huyết áp tại nhà đúng chuẩn cho người cao tuổi</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Cùng một người, đo sai cách và đo đúng cách có thể chênh nhau tới 20 mmHg. Đủ để một chỉ số bình thường trông như bệnh, hoặc ngược lại.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Để đo huyết áp tại nhà chính xác: cho người đo <strong>ngồi nghỉ 5 phút</strong> trước khi đo, lưng tựa ghế, <strong>chân đặt phẳng trên sàn không bắt chéo</strong>, <strong>cánh tay đặt ngang mức tim</strong>, vòng bít quấn trên khuỷu tay 2–3 cm và không quấn đè lên áo dày. Không nói chuyện trong lúc đo. Nên đo <strong>2 lần cách nhau 1–2 phút</strong> rồi lấy trung bình, và đo vào cùng khung giờ mỗi ngày.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao đo đúng cách lại quan trọng đến vậy</h2>
  <p>Huyết áp là chỉ số nhạy cảm với hoàn cảnh. Một người vừa leo cầu thang, vừa uống cà phê, hoặc đang bực mình vì chuyện gì đó, chỉ số có thể cao hơn 15–20 mmHg so với lúc bình thường. Cùng người đó, nếu ngồi sai tư thế hoặc quấn vòng bít sai vị trí, kết quả lại lệch thêm một khoảng nữa.</p>
  <p>Hệ quả thực tế: gia đình lo lắng không cần thiết, hoặc ngược lại — bỏ qua một tình trạng thực sự cần can thiệp. Bác sĩ nhận được số liệu sai cũng khó đưa ra quyết định đúng.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-o-nguoi-cao-tuoi-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/cam-nang-chon-qua-tang-thiet-bi-y-te-gia-dinh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cẩm Nang Chọn Quà Tặng Thiết Bị Y Tế Gia Đình Cho Cha Mẹ: Mua Đúng Nhu Cầu, Tránh Lãng Phí
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Chuẩn bị trước khi đo</h2>
  <p>Trong <strong>30 phút trước khi đo</strong>, người được đo không nên: ăn no, uống cà phê hoặc trà đặc, hút thuốc, vận động mạnh, hoặc tắm.</p>
  <p>Ngay <strong>trước khi đo</strong>: đi vệ sinh nếu buồn — bàng quang đầy có thể làm tăng huyết áp đáng kể. Sau đó ngồi nghỉ yên tĩnh 5 phút.</p>
  <p>Năm phút này thường bị bỏ qua nhưng lại là bước quan trọng nhất. Nhiều gia đình lấy máy ra, quấn vào tay và bấm đo ngay — kết quả gần như luôn cao hơn thực tế.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Tư thế đo đúng</h2>
  <p>Ngồi trên ghế có tựa lưng, <strong>lưng tựa vào thành ghế</strong>. Ngồi không tựa lưng làm tăng chỉ số vì cơ thể phải giữ thăng bằng.</p>
  <p><strong>Hai chân đặt phẳng trên sàn, không bắt chéo chân.</strong> Bắt chéo chân có thể làm tăng huyết áp tâm thu vài mmHg.</p>
  <p><strong>Cánh tay đặt trên bàn, ngang mức tim.</strong> Tay để thấp hơn tim làm chỉ số cao giả, tay giơ cao hơn tim làm chỉ số thấp giả. Nếu bàn quá thấp, kê thêm gối hoặc sách dưới cánh tay.</p>
  <p><strong>Không nói chuyện trong khi đo.</strong> Nói chuyện làm tăng chỉ số. Người nhà cũng nên im lặng trong lúc máy đang đo.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Quấn vòng bít cho đúng</h2>
  <p>Vòng bít quấn trực tiếp lên da hoặc lên áo mỏng. Không quấn đè lên áo len, áo khoác dày. Nếu phải xắn tay áo, đảm bảo tay áo xắn lên không siết chặt phía trên cánh tay.</p>
  <p>Mép dưới của vòng bít cách nếp gấp khuỷu tay khoảng <strong>2–3 cm</strong>. Ống dẫn khí nằm dọc theo mặt trong cánh tay, hướng về lòng bàn tay.</p>
  <p>Độ chặt: sau khi quấn xong, có thể luồn vừa <strong>hai ngón tay</strong> vào giữa vòng bít và cánh tay. Quá lỏng cho kết quả cao giả, quá chặt cho kết quả thấp giả.</p>
  <p>Kích cỡ vòng bít cũng ảnh hưởng: người có bắp tay to cần vòng bít cỡ lớn, dùng vòng bít tiêu chuẩn sẽ cho chỉ số cao hơn thực tế.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Bảy lỗi thường gặp</h2>
  <table style="width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.95rem;">
    <thead>
      <tr style="background: #2a1b3d; color: #ffffff;">
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Lỗi</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 600;">Ảnh hưởng đến kết quả</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Không nghỉ 5 phút trước khi đo</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Ngồi không tựa lưng</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bắt chéo chân</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cánh tay để thấp hơn tim</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nói chuyện trong lúc đo</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Vòng bít quấn lỏng hoặc đè lên áo dày</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bàng quang đầy</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cao hơn thực tế</td></tr>
    </tbody>
  </table>

  <p>Điểm đáng chú ý: gần như mọi lỗi đều làm chỉ số <strong>cao hơn</strong> thực tế. Nghĩa là nếu gia đình đang lo lắng vì bố mẹ có chỉ số cao, việc đầu tiên nên làm là kiểm tra lại quy trình đo trước khi kết luận.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Đo mấy lần và lấy số nào</h2>
  <p>Nên đo <strong>2 lần, cách nhau 1–2 phút</strong>, rồi lấy trung bình. Nếu hai lần chênh nhau trên 10 mmHg, đo thêm lần thứ ba và lấy trung bình hai lần cuối.</p>
  <p>Lần đo đầu tiên thường cao hơn các lần sau, vì cơ thể phản ứng với việc vòng bít siết chặt. Đây là hiện tượng bình thường, không phải máy hỏng.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Ghi chép và mang đi khám</h2>
  <p>Mỗi lần đo ghi lại: ngày, giờ, chỉ số tâm thu/tâm trương, mạch, và ghi chú nếu có gì bất thường. Ví dụ một dòng ghi đầy đủ:</p>
  <p style="background: #f8fafc; padding: 12px 16px; border-left: 3px solid #7c4dcc; border-radius: 4px; font-style: italic;">06/09, 7h00 sáng, 138/84, mạch 72, trước khi uống thuốc</p>
  <p>Khi đi khám, mang theo cả cuốn sổ này và cả máy đo. Bác sĩ có thể muốn kiểm tra độ chính xác của máy bằng cách đối chiếu với thiết bị tại phòng khám.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Về máy đo</span>
    <p style="margin-bottom: 0;">Máy đo <strong>bắp tay</strong> cho kết quả ổn định hơn máy cổ tay. Nên chọn máy đã được kiểm định lâm sàng, và mang đi hiệu chuẩn lại sau mỗi 1–2 năm. Thay pin định kỳ, vì pin yếu có thể làm sai lệch kết quả ở một số dòng máy.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Khi nào cần đưa đi khám ngay</h2>
  <p>Không chờ đợi nếu xuất hiện những tình huống sau:</p>
  <ul style="list-style: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Huyết áp trên 180/120 mmHg kèm đau đầu dữ dội, nhìn mờ, đau ngực hoặc khó thở</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Huyết áp tụt dưới 90/60 mmHg kèm chóng mặt, vã mồ hôi, lơ mơ</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Máy báo nhịp tim không đều lặp lại nhiều lần</li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem;">✓ Có dấu hiệu nghi ngờ đột quỵ: méo miệng, yếu một bên người, nói khó — gọi cấp cứu 115 ngay</li>
  </ul>

  <p>Với những gia đình không sống cùng bố mẹ, việc đảm bảo mỗi lần đo đều đúng quy trình là điều rất khó kiểm soát từ xa. Đó là lý do nhiều gia đình chọn có người đến đo theo lịch cố định — vừa đảm bảo kỹ thuật, vừa có chuỗi số liệu đáng tin để mang tới bác sĩ.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Không chắc đang đo đúng cách?</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Nhân viên ANTCARE đo tại nhà theo đúng quy trình, hướng dẫn lại cho gia đình và ghi nhận chỉ số theo thời gian để bạn thấy được xu hướng, không chỉ con số một buổi.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên đo huyết áp vào lúc nào trong ngày?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Thời điểm được khuyến nghị là buổi sáng sau khi ngủ dậy, đã đi vệ sinh, trước khi uống thuốc và trước bữa sáng. Nếu đo hai lần mỗi ngày thì lần thứ hai vào buổi tối trước khi đi ngủ. Điều quan trọng nhất là giữ cố định khung giờ, vì huyết áp dao động tự nhiên trong ngày nên đo giờ khác nhau sẽ không so sánh được.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Vì sao đo ở nhà và đo ở bệnh viện lại cho kết quả khác nhau?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Hiện tượng này gọi là tăng huyết áp áo choàng trắng: nhiều người có huyết áp cao hơn khi đo tại cơ sở y tế do căng thẳng. Ngược lại cũng có trường hợp huyết áp ở nhà cao hơn ở bệnh viện. Đây chính là lý do đo tại nhà có giá trị: nó phản ánh huyết áp trong điều kiện sinh hoạt bình thường. Gia đình nên mang sổ ghi chép khi đi khám để bác sĩ có đủ dữ liệu.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Đo được chỉ số cao thì nên làm gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Nếu chỉ số cao nhưng người bệnh không có triệu chứng, hãy cho nghỉ ngơi 15 phút rồi đo lại. Nhiều trường hợp là do vừa vận động, căng thẳng hoặc đo sai tư thế. Nếu đo lại vẫn cao và lặp lại trong nhiều ngày, cần đưa đi khám. Trường hợp huyết áp trên 180/120 mmHg kèm đau đầu dữ dội, nhìn mờ, đau ngực hoặc khó thở thì cần đến cơ sở y tế ngay, không chờ đợi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có nên tự tăng giảm liều thuốc huyết áp theo chỉ số đo được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tuyệt đối không. Việc điều chỉnh liều thuốc huyết áp phải do bác sĩ quyết định dựa trên toàn bộ tình trạng người bệnh. Tự ý tăng liều có thể gây tụt huyết áp nguy hiểm, tự ý bỏ thuốc khi thấy chỉ số đã bình thường là nguyên nhân phổ biến gây biến chứng. Vai trò của gia đình là ghi chép đầy đủ và mang số liệu đó tới bác sĩ.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cách đo huyết áp tại nhà đúng chuẩn cho người cao tuổi",
    "description": "Hướng dẫn đo huyết áp tại nhà cho người cao tuổi: tư thế đúng, thời điểm đo, 7 lỗi thường gặp làm sai lệch kết quả và cách đọc chỉ số.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 57,
  slug: 'cach-do-huyet-ap-tai-nha-cho-nguoi-cao-tuoi',
  oldSlugs: ['cach-do-huyet-ap-tai-nha-cho-nguoi-cao-tuoi', 'cach-do-huyet-ap-tai-nha-dung-chuan-cho-nguoi-cao-tuoi'],
  title: 'Cách đo huyết áp tại nhà đúng chuẩn cho người cao tuổi',
  category: 'Kỹ năng Chăm sóc & Theo dõi Huyết áp',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cach-do-huyet-ap-tai-nha-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 57 to news.json!');
