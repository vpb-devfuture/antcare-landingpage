const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 60) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Danh sách câu hỏi cụ thể nên hỏi bác sĩ về chẩn đoán, thuốc, tác dụng phụ và dấu hiệu cần quay lại — giúp tận dụng tối đa 10 phút khám bệnh.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">12 câu hỏi nên hỏi bác sĩ khi đưa người cao tuổi đi khám</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Thời gian ngồi trước bác sĩ thường chỉ 5–10 phút. Biết trước mình cần hỏi gì là cách duy nhất để không ra về với một tờ đơn thuốc mà không hiểu gì thêm.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Bốn nhóm câu hỏi quan trọng nhất khi đưa người cao tuổi đi khám là: <strong>về chẩn đoán</strong> (bệnh gì, mức độ ra sao, nguyên nhân), <strong>về thuốc</strong> (uống thế nào, tác dụng phụ nào cần chú ý, có tương tác với thuốc đang dùng không), <strong>về sinh hoạt</strong> (ăn uống, vận động cần thay đổi gì), và <strong>về theo dõi</strong> (khi nào tái khám, dấu hiệu nào cần quay lại ngay). Nên ghi 3–5 câu quan trọng nhất ra giấy trước khi vào phòng khám.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao cần chuẩn bị câu hỏi từ trước</h2>
  <p>Trong phòng khám, ba yếu tố cùng lúc làm giảm khả năng hỏi han của gia đình: thời gian ngắn, áp lực từ hàng người đang chờ bên ngoài, và tâm lý ngại làm phiền bác sĩ.</p>
  <p>Kết quả là nhiều gia đình ra về với một tờ đơn thuốc, một lịch tái khám, và một loạt câu hỏi chưa được hỏi — những câu mà đến tối về nhà mới nhớ ra.</p>
  <p>Cách khắc phục đơn giản: viết ra giấy trước khi vào. Tờ giấy đó cũng là tín hiệu cho bác sĩ rằng gia đình có chuẩn bị và thực sự muốn hiểu, thường nhận lại được sự giải thích kỹ hơn.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/chuan-bi-gi-khi-dua-bo-me-di-kham-benh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/5-noi-so-vo-hinh-khien-nguoi-cao-tuoi-ngai-di-benh-vien" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 1: Về chẩn đoán</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">1. Bố mẹ tôi đang bị bệnh gì, và bác sĩ dựa vào đâu để kết luận?</h3>
  <p>Câu hỏi này giúp bạn hiểu chẩn đoán là chắc chắn hay còn là nghi ngờ đang cần thêm xét nghiệm để khẳng định. Hai tình huống này dẫn tới cách theo dõi rất khác nhau.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">2. Tình trạng này ở mức độ nào?</h3>
  <p>Nhiều bệnh có phân độ — tăng huyết áp độ 1 hay độ 2, thoái hóa khớp giai đoạn nào. Biết mức độ giúp gia đình hiểu tính cấp thiết và không hoang mang quá mức, cũng không chủ quan.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">3. Nguyên nhân do đâu, và có liên quan đến bệnh nền sẵn có không?</h3>
  <p>Người cao tuổi thường có nhiều bệnh cùng lúc. Hiểu được mối liên hệ giữa chúng giúp gia đình chăm sóc đúng hướng thay vì xử lý rời rạc từng triệu chứng.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 2: Về thuốc</h2>
  <p>Đây là nhóm câu hỏi quan trọng nhất với người cao tuổi, vì họ thường dùng nhiều loại thuốc cùng lúc và nguy cơ tương tác thuốc cao hơn hẳn người trẻ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">4. Thuốc này uống thế nào, trước hay sau ăn, mấy lần một ngày?</h3>
  <p>Hỏi cụ thể chứ đừng chỉ đọc trên đơn. Nhiều đơn thuốc viết tắt hoặc chữ khó đọc. Nhắc lại để xác nhận là cách chắc chắn nhất.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">5. Uống trong bao lâu, và có phải uống lâu dài không?</h3>
  <p>Phân biệt thuốc điều trị đợt cấp với thuốc phải duy trì lâu dài là điều cực kỳ quan trọng. Rất nhiều người cao tuổi tự ý bỏ thuốc huyết áp khi thấy chỉ số đã bình thường, vì không được giải thích rằng đây là thuốc phải dùng liên tục.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">6. Thuốc này có tác dụng phụ nào cần chú ý?</h3>
  <p>Hỏi cụ thể: tác dụng phụ nào là bình thường và sẽ hết, tác dụng phụ nào là dấu hiệu phải ngừng thuốc và liên hệ bác sĩ ngay.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">7. Có tương tác gì với các thuốc bố mẹ đang dùng không?</h3>
  <p>Để hỏi được câu này, bạn phải mang theo tất cả thuốc đang dùng — bao gồm cả thuốc mua ngoài, thực phẩm chức năng và thuốc đông y. Nhiều người bỏ qua nhóm sau, nhưng chúng vẫn có thể tương tác với thuốc tây.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">8. Nếu quên một liều thì xử lý thế nào?</h3>
  <p>Người cao tuổi quên thuốc là chuyện thường xuyên. Biết trước cách xử lý giúp gia đình không hoảng và cũng không uống bù sai cách — uống bù gấp đôi liều là sai lầm nguy hiểm với một số loại thuốc.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 3: Về sinh hoạt hằng ngày</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">9. Bố mẹ tôi cần thay đổi gì trong ăn uống?</h3>
  <p>Hỏi cụ thể thay vì nhận lời khuyên chung chung. "Ăn nhạt" là bao nhiêu muối một ngày? "Kiêng đồ ngọt" có bao gồm hoa quả không? Người cao tuổi cần hướng dẫn cụ thể mới áp dụng được.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">10. Có nên hạn chế vận động không, hay ngược lại?</h3>
  <p>Nhiều gia đình mặc định rằng người bệnh thì phải nghỉ ngơi, nhưng với phần lớn bệnh mạn tính ở người cao tuổi, nằm nhiều lại làm tình trạng xấu đi. Hỏi rõ mức độ vận động được khuyến nghị và những động tác cần tránh.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Nhóm 4: Về theo dõi và tái khám</h2>

  <h3 style="font-weight: 700; color: #4f2d7f;">11. Khi nào cần tái khám, và cần làm gì trước khi tái khám?</h3>
  <p>Hỏi luôn xem lần tái khám có cần xét nghiệm gì không, có phải nhịn ăn không, và cần theo dõi ghi chép gì ở nhà trong thời gian này.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">12. Dấu hiệu nào là dấu hiệu phải quay lại ngay, không chờ đến lịch hẹn?</h3>
  <p>Đây là câu hỏi quan trọng nhất trong cả danh sách, và cũng là câu hay bị bỏ quên nhất. Biết ranh giới giữa "theo dõi tiếp ở nhà" và "phải đi viện ngay" giúp gia đình tránh được cả hai sai lầm: đi viện không cần thiết, và chậm trễ khi thực sự cần.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Một câu nên hỏi khi kết thúc</span>
    <p style="margin-bottom: 0;">"Bác sĩ cho em nhắc lại xem em hiểu đúng chưa ạ" — rồi tóm tắt lại chẩn đoán, cách dùng thuốc và lịch tái khám. Chỉ mất 30 giây nhưng phát hiện được ngay những chỗ hiểu sai, trước khi ra khỏi phòng.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Cách ghi chép trong lúc khám</h2>
  <p>Ghi ngay tại chỗ, không dựa vào trí nhớ. Sau một buổi sáng chờ đợi mệt mỏi, khả năng nhớ chính xác liều thuốc và các dặn dò giảm đi rất nhiều.</p>
  <p>Bốn thứ tối thiểu cần ghi lại:</p>

  <table style="width: 100%; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.95rem;">
    <thead>
      <tr style="background: #efe7fb; color: #2a1b3d;">
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 700; color: #2a1b3d; background: #efe7fb;">Nội dung</th>
        <th style="padding: 0.7rem 0.85rem; text-align: left; font-weight: 700; color: #2a1b3d; background: #efe7fb;">Vì sao cần</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Chẩn đoán</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Để tra cứu thêm và thông báo cho người thân khác</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tên thuốc, liều, cách uống</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tránh uống sai, tránh nhầm với thuốc cũ</td></tr>
      <tr><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Lịch tái khám</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Đặt nhắc nhở ngay để không bỏ lỡ</td></tr>
      <tr style="background: #fcfbfe;"><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Dấu hiệu cần quay lại ngay</td><td style="padding: 0.7rem 0.85rem; border-bottom: 1px solid #e3dcee;">Ranh giới xử lý tại nhà và đi viện</td></tr>
    </tbody>
  </table>

  <p>Nếu muốn ghi âm để nghe lại, cần xin phép bác sĩ trước. Cách đơn giản hơn là chụp ảnh sổ khám và đơn thuốc ngay khi ra khỏi phòng, rồi ghi chú bổ sung bằng giọng nói trên điện thoại khi ký ức còn tươi.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Để bố mẹ tự nói với bác sĩ</h2>
  <p>Một thói quen phổ biến của người con đi cùng là trả lời thay bố mẹ. Xuất phát từ thiện ý — sợ bố mẹ nói lâu, sợ bác sĩ sốt ruột — nhưng nó gây hai bất lợi.</p>
  <p>Thứ nhất, bác sĩ mất đi thông tin trực tiếp: cách người bệnh mô tả triệu chứng, giọng nói, mức độ tỉnh táo, đều là dữ liệu lâm sàng.</p>
  <p>Thứ hai, người cao tuổi cảm thấy mình bị gạt ra khỏi cuộc trò chuyện về chính sức khỏe của mình. Cảm giác đó làm giảm sự hợp tác trong điều trị về sau.</p>
  <p>Vai trò tốt nhất của người đi cùng là <strong>bổ sung và ghi chép</strong>, không phải nói thay.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Khi người đi cùng không phải là con cái</h2>
  <p>Với nhiều gia đình, người đưa bố mẹ đi khám là người giúp việc, họ hàng, hoặc nhân viên dịch vụ. Khi đó, danh sách câu hỏi và việc ghi chép càng trở nên quan trọng — vì đó là cầu nối duy nhất đưa thông tin về cho người con đang ở xa.</p>
  <p>Trong trường hợp này, gia đình nên gửi trước danh sách câu hỏi cho người đi cùng, và yêu cầu họ ghi lại đầy đủ theo bốn mục trong bảng phía trên. Một buổi khám được ghi chép tử tế có giá trị hơn nhiều so với một cuộc gọi tường thuật lại theo trí nhớ.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHKHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Có người ghi lại đầy đủ lời bác sĩ dặn</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Nhân viên ANTCARE đi cùng, ghi chép chẩn đoán, đơn thuốc, lịch tái khám và các dặn dò của bác sĩ, gửi lại cho gia đình sau buổi khám.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên hỏi bác sĩ bao nhiêu câu là hợp lý?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Thực tế thời gian khám ở bệnh viện công thường chỉ 5–10 phút, nên 3–5 câu là hợp lý. Nếu có nhiều thắc mắc hơn, hãy xếp theo thứ tự ưu tiên và hỏi những câu quan trọng nhất trước. Ghi câu hỏi ra giấy giúp không bị quên và cũng cho bác sĩ thấy bạn đã chuẩn bị, thường nhận được câu trả lời kỹ hơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bác sĩ nói nhanh quá không kịp ghi thì làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Bạn hoàn toàn có thể xin bác sĩ nói lại hoặc nhắc lại để xác nhận: "Bác sĩ cho em nhắc lại xem em hiểu đúng chưa ạ". Cách này vừa lịch sự vừa hiệu quả. Nếu muốn ghi âm, cần xin phép trước. Trường hợp không kịp ghi, hãy chụp ảnh đơn thuốc và sổ khám để đọc lại sau.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có nên hỏi về chi phí điều trị không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có, và nên hỏi sớm. Chi phí ảnh hưởng trực tiếp đến khả năng tuân thủ điều trị, đặc biệt với các bệnh mạn tính phải dùng thuốc lâu dài. Bạn có thể hỏi thuốc nào được bảo hiểm chi trả, có loại thay thế rẻ hơn không, và tổng chi phí dự kiến cho một tháng điều trị.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nếu không đồng ý với chẩn đoán thì nên làm gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Bạn có quyền hỏi thêm về cơ sở của chẩn đoán và về các khả năng khác đã được cân nhắc. Nếu vẫn còn băn khoăn với một chẩn đoán quan trọng, việc đi khám thêm ở cơ sở khác để có ý kiến thứ hai là hoàn toàn bình thường và được khuyến khích trong y khoa. Nên mang theo đầy đủ kết quả đã có để tránh phải làm lại các xét nghiệm.</p>
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
    "headline": "12 câu hỏi nên hỏi bác sĩ khi đưa người cao tuổi đi khám",
    "description": "Danh sách câu hỏi cụ thể nên hỏi bác sĩ về chẩn đoán, thuốc, tác dụng phụ và dấu hiệu cần quay lại — giúp tận dụng tối đa 10 phút khám bệnh.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 60,
  slug: 'cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham',
  oldSlugs: ['cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham', '12-cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham'],
  title: '12 câu hỏi nên hỏi bác sĩ khi đưa người cao tuổi đi khám',
  category: 'Đồng hành Khám bệnh & Lão khoa',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 60 to news.json!');
