const fs = require('fs');

const newsData = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

// 1. Merged content for Article 129 (checklist-dua-bo-me-di-kham-benh-vien)
const mergedContent129 = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Checklist chuẩn bị đưa bố mẹ đi khám ở bệnh viện lớn | ANTCARE</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Cần mang giấy tờ gì, nhịn ăn thế nào, nên hỏi bác sĩ câu gì? Hướng dẫn đầy đủ trước, trong và sau khi đưa người cao tuổi đi khám tại các bệnh viện lớn.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-21">21/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-25">25/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <figure style="margin: 20px 0;">
    <img src="/images/tin-tuc/checklist-dua-bo-me-di-kham-benh-vien.jpg" alt="Checklist danh mục chuẩn bị đưa bố mẹ đi khám bệnh tại bệnh viện lớn" width="1200" height="675" loading="eager" style="width:100%; height:auto; border-radius:12px; display:block; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
    <figcaption style="font-size: 0.9rem; color: #64748b; text-align: center; margin-top: 8px; font-style: italic;">Chuẩn bị chu đáo giấy tờ và thông tin giúp buổi khám bệnh của bố mẹ diễn ra nhẹ nhàng, nhanh chóng và chính xác.</figcaption>
  </figure>

  <div class="article-body">
    <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
      Đưa bố mẹ lớn tuổi đi khám ở các bệnh viện tuyến trung ương như Bạch Mai, Đại học Y hay Lão khoa Trung ương là nỗi lo lắng của nhiều người con. Sự đông đúc, thời gian chờ đợi kéo dài và hàng loạt thủ tục hành chính có thể khiến người già mệt mỏi, hoa mắt chóng mặt. Dưới đây là <strong>bản checklist chi tiết từng bước</strong> được đúc kết từ kinh nghiệm thực tế của đội ngũ Kiến Y tế ANTCARE.
    </p>

    <!-- Mục 1: Giấy tờ -->
    <h2 id="giay-to-can-mang" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">
      1. Nhóm giấy tờ bắt buộc & mẹo lưu trữ
    </h2>
    <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
      Thiếu một tờ giấy tờ có thể khiến gia đình mất thêm hàng giờ đi lại hoặc không được hưởng bảo hiểm y tế đúng tuyến. Hãy chuẩn bị sẵn một túi hồ sơ trong suốt gồm:
    </p>

    <div style="overflow-x: auto; margin: 20px 0;">
      <table style="width: 100%; border-collapse: collapse; font-size: 1rem; border: 1px solid #cbd5e1; border-radius: 8px;">
        <thead>
          <tr style="background-color: #f1f5f9; color: #0f172a;">
            <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left; font-weight: 700;">Loại giấy tờ</th>
            <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left; font-weight: 700;">Mục đích & Lưu ý quan trọng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #334155;">Căn cước công dân (CCCD)</td>
            <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">Bắt buộc. Hiện hầu hết bệnh viện lớn tại Hà Nội đã tích hợp dữ liệu dân cư trên CCCD gắn chíp nên chỉ cần xuất trình căn cước.</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #334155;">Thẻ Bảo hiểm y tế (BHYT)</td>
            <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">Bản thẻ giấy hoặc dùng ảnh thẻ số trên ứng dụng VssID / VNeID mức 2 trên điện thoại.</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #334155;">Giấy chuyển tuyến / Hẹn khám</td>
            <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">Cần thiết nếu khám trái tuyến để được bảo hiểm thanh toán mức tối đa, hoặc giấy hẹn tái khám từ lần khám trước.</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #334155;">Sổ khám bệnh cũ & Kết quả cận lâm sàng</td>
            <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">Giúp bác sĩ nắm tiến trình diễn biến bệnh và tránh phải làm lại các xét nghiệm máu, siêu âm, chụp X-quang không cần thiết.</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #334155;">Danh sách / vỏ thuốc đang dùng</td>
            <td style="padding: 12px; border: 1px solid #cbd5e1; color: #334155;">Mang theo hộp chia thuốc hoặc chụp ảnh rõ ràng tên, hàm lượng các thuốc mạn tính đang uống (huyết áp, tim mạch, đái tháo đường...).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background-color: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 16px; margin: 20px 0;">
      <p style="margin: 0; color: #581c87; font-weight: 600; font-size: 1rem;">
        💡 <strong>Mẹo số hóa:</strong> Hãy dùng điện thoại chụp lại toàn bộ giấy tờ, thẻ BHYT và các đơn thuốc lưu vào một album ảnh riêng. Trong trường hợp để quên bản cứng, hình ảnh sắc nét trên điện thoại vẫn giúp xử lý được nhiều tình huống khẩn cấp.
      </p>
    </div>

    <!-- Mục 2: Đồ dùng cá nhân & Hậu cần -->
    <h2 id="do-dung-hau-can" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">
      2. Đồ dùng cá nhân & công tác hậu cần thiết yếu
    </h2>
    <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
      Người cao tuổi có sức đề kháng yếu và rất nhạy cảm với sự thay đổi môi trường. Gia đình nên chuẩn bị sẵn những món đồ sau trong ba lô:
    </p>

    <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
      <li><strong>Áo khoác mỏng hoặc khăn choàng nhẹ:</strong> Khu vực phòng khám, chụp chiếu và phòng xét nghiệm thường bật điều hòa rất lạnh, dễ khiến người già bị nhiễm lạnh hoặc co thắt mạch máu.</li>
      <li><strong>Bình nước ấm cá nhân:</strong> Giữ ấm cổ họng và uống nước từng ngụm nhỏ trong thời gian chờ đợi.</li>
      <li><strong>Đồ ăn nhẹ hoặc sữa:</strong> Nếu phải nhịn đói để lấy máu xét nghiệm hoặc nội soi, hãy chuẩn bị sẵn hộp sữa ấm, bánh quy mềm hoặc kẹo gừng để ông bà ăn ngay sau khi lấy máu xong, phòng ngừa tụt đường huyết đột ngột.</li>
      <li><strong>Kính lão & máy trợ thính (nếu có):</strong> Để ông bà có thể đọc số thứ tự hiển thị trên bảng điện tử và nghe rõ khi bác sĩ gọi tên vào phòng khám.</li>
      <li><strong>Tã dán/bỉm dự phòng hoặc tấm lót:</strong> Cần thiết với người cao tuổi đi lại khó khăn, tiểu không tự chủ hoặc có vấn đề về tiết niệu.</li>
      <li><strong>Trang phục rộng rãi, giày chống trơn:</strong> Ưu tiên áo cài cúc tay rộng để tiện kéo lên đo huyết áp và lấy máu; đi giày bệt hoặc dép có độ ma sát tốt để tránh trơn trượt trên sàn gạch hoa bệnh viện.</li>
    </ul>

    <!-- Mục 3: Kinh nghiệm tại các bệnh viện lớn ở Hà Nội -->
    <h2 id="kinh-nghiem-benh-vien-ha-noi" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">
      3. Kinh nghiệm đặt lịch & đi khám tại các bệnh viện lớn ở Hà Nội
    </h2>
    <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
      Mỗi bệnh viện lớn ở Hà Nội có quy trình và thời gian biểu khác nhau. Nắm trước những điểm này sẽ giúp tiết kiệm từ 1 đến 2 giờ đồng hồ:
    </p>

    <div style="margin: 20px 0; display: flex; flex-direction: column; gap: 16px;">
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <h3 style="color: #1e3a8a; font-size: 1.15rem; font-weight: 700; margin-top: 0; margin-bottom: 8px;">
          🏥 Bệnh viện Đại học Y Hà Nội (1 Tôn Thất Tùng, Đống Đa)
        </h3>
        <p style="margin: 0; color: #334155; font-size: 1rem; line-height: 1.65;">
          Nên đặt lịch trước qua tổng đài <strong>1900 6422</strong> hoặc ứng dụng bệnh viện trước 1–2 ngày. Khung giờ khám lý tưởng là 7h30 – 9h00 sáng. Quầy lấy số và làm thủ tục nằm tại tầng 1 nhà A5 (Khu khám theo yêu cầu) hoặc nhà A2. Thời gian chờ có kết quả xét nghiệm thông thường từ 1.5 – 2 tiếng.
        </p>
      </div>

      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <h3 style="color: #1e3a8a; font-size: 1.15rem; font-weight: 700; margin-top: 0; margin-bottom: 8px;">
          🏥 Bệnh viện Bạch Mai (78 Giải Phóng, Đống Đa)
        </h3>
        <p style="margin: 0; color: #334155; font-size: 1rem; line-height: 1.65;">
          Nên đưa bố mẹ có mặt từ 6h30 sáng nếu khám tại Khoa Khám bệnh theo yêu cầu (Cổng số 1, đường Giải Phóng) để lấy số thứ tự sớm. Nếu khám BHYT, lấy số tại quầy đăng ký tòa nhà 4 tầng. Khuôn viên bệnh viện rất rộng, gia đình nên chủ động liên hệ nhân viên sảnh mượn xe lăn đẩy ông bà và chuẩn bị sẵn tiền mặt nhỏ.
        </p>
      </div>

      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
        <h3 style="color: #1e3a8a; font-size: 1.15rem; font-weight: 700; margin-top: 0; margin-bottom: 8px;">
          🏥 Bệnh viện Lão khoa Trung ương (1A Phương Mai, Đống Đa)
        </h3>
        <p style="margin: 0; color: #334155; font-size: 1rem; line-height: 1.65;">
          Bệnh viện chuyên khoa tuyến cuối dành riêng cho người cao tuổi, có hệ thống hành lang tay vịn, xe đẩy hỗ trợ sẵn sàng tại sảnh tầng 1. Nên gọi điện đặt lịch trước qua hotline bệnh viện. Các chuyên khoa mũi nhọn thường khám: Tim mạch, Thần kinh - Sa sút trí tuệ, Cơ xương khớp và Nội tiết.
        </p>
      </div>
    </div>

    <!-- Mục 4: Những câu nên hỏi bác sĩ -->
    <h2 id="nhung-cau-hoi-bac-si" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">
      4. Những câu hỏi cốt lõi nên trao đổi với bác sĩ
    </h2>
    <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
      Thời gian gặp bác sĩ thường chỉ kéo dài từ 5 đến 10 phút. Hãy chuẩn bị sổ tay hoặc ghi chú trong điện thoại 5 câu hỏi trọng tâm sau:
    </p>

    <ol style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
      <li>Bác nhà tôi mắc bệnh gì, mức độ kiểm soát các chỉ số hiện tại ra sao?</li>
      <li>Đơn thuốc mới uống như thế nào, có tương tác bất lợi với các thuốc mạn tính đang dùng không?</li>
      <li>Chế độ dinh dưỡng và vận động hàng ngày cần kiêng cữ hay bổ sung gì đặc biệt?</li>
      <li>Những dấu hiệu cảnh báo bất thường nào (đau tức ngực, khó thở, chóng mặt, tụt huyết áp...) cần đưa đi viện cấp cứu ngay?</li>
      <li>Lịch tái khám chính xác là khi nào và cần chuẩn bị gì cho đợt khám sau?</li>
    </ol>

    <!-- Mục 5: Sau khi khám xong -->
    <h2 id="sau-khi-kham-xong" style="color: #6633B4; font-size: 1.45rem; margin-top: 34px; border-left: 5px solid #FD711A; padding-left: 12px; font-weight: 700;">
      5. Các bước chăm sóc sau khi khám về nhà
    </h2>
    <p style="font-size: 1.05rem; line-height: 1.75; color: #222; margin: 16px 0;">
      Sau buổi khám căng thẳng, đưa ông bà về nhà nghỉ ngơi và ăn uống nhẹ nhàng. Con cháu cần:
    </p>
    <ul style="margin: 16px 0; padding-left: 24px; color: #222; font-size: 1.05rem; line-height: 1.8;">
      <li>Chụp ảnh đơn thuốc và kết luận khám gửi vào nhóm gia đình để mọi người cùng nắm.</li>
      <li>Xếp các loại thuốc mới vào hộp chia thuốc theo từng buổi (sáng - trưa - tối) để tránh uống nhầm hoặc quên liều.</li>
      <li>Cài đặt báo thức hoặc nhắc lịch uống thuốc trên điện thoại.</li>
      <li>Theo dõi sát tình trạng sức khỏe và phản ứng của cơ thể trong 3 ngày đầu khi bắt đầu dùng đơn thuốc mới.</li>
    </ul>

    <!-- Internal Link Callout tới Dịch Vụ Mới -->
    <div style="background-color: #fffbeb; border: 1.5px solid #fde68a; border-radius: 12px; padding: 22px; margin: 35px 0;">
      <h3 style="margin: 0 0 10px 0; font-size: 1.25rem; color: #92400e; font-weight: 700;">
        Bố mẹ sắp có lịch khám mà bạn bận công tác hoặc ở xa?
      </h3>
      <p style="color: #451a03; font-size: 1.05rem; line-height: 1.7; margin-bottom: 15px;">
        Nếu bạn không thể thu xếp thời gian, hãy tham khảo <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700; text-decoration: underline;">dịch vụ đưa người cao tuổi đi khám tại Hà Nội</a> của ANTCARE. Đội ngũ <strong>Kiến Y tế đồng hành đi khám</strong> có nền tảng điều dưỡng và chứng chỉ sơ cấp cứu, sẽ đón ông bà tận nhà, lo toàn bộ thủ tục lấy số, BHYT, đi cùng vào phòng khám, ghi chép lời dặn và báo cáo chi tiết cho gia đình.
      </p>
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
        <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="display: inline-block; padding: 10px 20px; background-color: #FD711A; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 999px; font-size: 0.95rem; box-shadow: 0 4px 10px rgba(253, 113, 26, 0.3);">
          Xem chi tiết gói dịch vụ khám bệnh
        </a>
        <a href="tel:0969032360" style="display: inline-block; padding: 10px 20px; background-color: #6633B4; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 999px; font-size: 0.95rem;">
          📞 Hotline: 0969 032 360
        </a>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 id="faq" style="color: #6633B4; font-size: 1.45rem; font-weight: 700; margin-bottom: 1.25rem; border-left: 5px solid #FD711A; padding-left: 12px;">Câu hỏi thường gặp</h2>
    
    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Người già đi khám nên đi lúc mấy giờ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Nên đến sớm từ đầu giờ sáng (khoảng 6h30 - 7h00), đặc biệt nếu cần xét nghiệm máu lúc đói để ông bà không bị mệt vì nhịn ăn lâu.</p>
      </div>
    </details>
    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Có cần mang theo thuốc đang uống không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Rất cần. Mang theo vỏ thuốc hoặc hộp chia thuốc để bác sĩ đối chiếu, tránh kê trùng nhóm hoạt chất hoặc tương tác bất lợi giữa các bệnh.</p>
      </div>
    </details>
    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 14px 18px; background: #fff; border: 1px solid #e2d6f5; border-radius: 10px;">
      <summary itemprop="name" style="font-weight: 700; cursor: pointer; color: #6633B4; font-size: 1.05rem;">Nếu bố mẹ hay quên lời bác sĩ dặn thì sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 10px; color: #334155; line-height: 1.65; font-size: 1rem;">
        <p itemprop="text">Người đi cùng hãy ghi chép cẩn thận vào sổ tay hoặc xin phép bác sĩ ghi âm lời dặn, sau đó tổng hợp lại và gửi cho các thành viên trong gia đình.</p>
      </div>
    </details>
  </section>

  <p class="note" style="font-size: 0.9rem; color: #64748b; border-top: 1px solid #e2d6f5; margin-top: 30px; padding-top: 16px; line-height: 1.6;">
    <strong>Lưu ý y tế (YMYL):</strong> Nội dung trên website mang tính chất tham khảo, hỗ trợ chăm sóc sức khỏe gia đình; không thay thế chẩn đoán, điều trị chuyên khoa của bác sĩ. Khi có tình huống khẩn cấp, vui lòng liên hệ ngay cơ sở y tế gần nhất hoặc gọi 115.
  </p>

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Checklist chuẩn bị đưa bố mẹ đi khám ở bệnh viện lớn | ANTCARE",
  "description": "Cần mang giấy tờ gì, nhịn ăn thế nào, nên hỏi bác sĩ câu gì? Checklist đầy đủ trước, trong và sau khi đưa người cao tuổi đi khám.",
  "inLanguage": "vi-VN",
  "datePublished": "2026-09-21",
  "dateModified": "2026-09-25",
  "mainEntityOfPage": "https://antcare.vn/news/checklist-dua-bo-me-di-kham-benh-vien",
  "image": "https://antcare.vn/images/tin-tuc/checklist-dua-bo-me-di-kham-benh-vien.jpg",
  "author": {
    "@type": "Organization",
    "name": "ANTCARE – Kiến chăm tổ",
    "url": "https://antcare.vn",
    "telephone": "+84969032360"
  }
}
</script>
</article>`;

// Find and update article 129
const art129 = newsData.list.find(n => n.id === 129);
if (art129) {
  art129.content = mergedContent129;
  art129.dateModified = '2026-09-25';
  console.log('Article 129 updated with merged content.');
}

// 2. Replace old redirected URLs in all articles' content
const urlReplacements = [
  {
    from: /\/news\/chuan-bi-gi-khi-dua-bo-me-di-kham-benh/g,
    to: '/news/checklist-dua-bo-me-di-kham-benh-vien'
  },
  {
    from: /\/news\/dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi/g,
    to: '/news/checklist-dua-bo-me-di-kham-benh-vien'
  },
  {
    from: /\/news\/dich-vu-dong-hanh-kham-benh-la-gi/g,
    to: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  },
  {
    from: /\/news\/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia/g,
    to: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
  }
];

let replacedCount = 0;
newsData.list.forEach(art => {
  if (art.content) {
    urlReplacements.forEach(({ from, to }) => {
      if (from.test(art.content)) {
        art.content = art.content.replace(from, to);
        replacedCount++;
      }
    });
  }
});
console.log('Updated', replacedCount, 'internal link references to new targets.');

// 3. Add internal links to priority articles as requested in Phần C
const priorityAdditions = [
  {
    id: 62, // rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh
    anchor: 'dịch vụ đưa người cao tuổi đi khám tại Hà Nội',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #faf5ff; border-left: 4px solid #6633B4; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      💡 Để loại bỏ các rủi ro nguy hiểm khi ông bà đi khám một mình, gia đình có thể tham khảo <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700; text-decoration: underline;">dịch vụ đưa người cao tuổi đi khám tại Hà Nội</a> của ANTCARE. Chuyên viên Kiến Y tế có nghiệp vụ điều dưỡng sẽ đưa đón tận nhà, làm trọn thủ tục BHYT và theo sát ông bà suốt buổi khám.
    </p>`
  },
  {
    id: 60, // cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham
    anchor: 'Kiến Y tế đồng hành đi khám',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #fff7ed; border-left: 4px solid #FD711A; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      👉 Khi con cháu bận rộn không thể trực tiếp ghi chép lời dặn chuyên khoa, đội ngũ <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700; text-decoration: underline;">Kiến Y tế đồng hành đi khám</a> của ANTCARE sẽ thay gia đình vào phòng khám, trao đổi rõ ràng với bác sĩ và gửi báo cáo chi tiết về nhà.
    </p>`
  },
  {
    id: 61, // thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi
    anchor: 'đưa bố mẹ đi khám',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #faf5ff; border-left: 4px solid #6633B4; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      🏥 Để không phải lo lắng về khâu thủ tục chuyển tuyến hay xếp hàng lấy số BHYT khi <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700; text-decoration: underline;">đưa bố mẹ đi khám</a>, bạn có thể lựa chọn dịch vụ hỗ trợ đồng hành y tế chuyên nghiệp của ANTCARE tại các bệnh viện Hà Nội.
    </p>`
  },
  {
    id: 102, // o-nuoc-ngoai-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di
    anchor: 'dịch vụ đưa người cao tuổi đi khám tại Hà Nội',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #faf5ff; border-left: 4px solid #6633B4; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      ❤️ Ở xa nửa vòng trái đất vẫn có thể an tâm chăm sóc bố mẹ với <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700; text-decoration: underline;">dịch vụ đưa người cao tuổi đi khám tại Hà Nội</a> từ ANTCARE. Nhận cập nhật liên tục qua Zalo và nhận toàn bộ hồ sơ kết quả ngay sau buổi khám.
    </p>`
  },
  {
    id: 103, // bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham
    anchor: 'Kiến Y tế đồng hành đi khám',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #fff7ed; border-left: 4px solid #FD711A; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      💼 Dù bạn đang đi công tác xa, chỉ cần một cuộc gọi đến hotline 0969 032 360, chuyên viên <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700; text-decoration: underline;">Kiến Y tế đồng hành đi khám</a> sẽ có mặt đúng giờ, đưa bố đi tái khám và đưa về nhà an toàn.
    </p>`
  },
  {
    id: 109, // dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon
    anchor: 'dịch vụ đưa người cao tuổi đi khám tại Hà Nội',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #faf5ff; border-left: 4px solid #6633B4; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      🔍 Xem chi tiết quy trình 4 bước và bảng giá minh bạch của <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #6633B4; font-weight: 700; text-decoration: underline;">dịch vụ đưa người cao tuổi đi khám tại Hà Nội</a> để chuẩn bị phương án tốt nhất cho người thân của bạn.
    </p>`
  },
  {
    id: 58, // cham-soc-bo-me-tu-xa
    anchor: 'đưa bố mẹ đi khám',
    callout: `<p style="margin: 20px 0; padding: 14px 18px; background: #fff7ed; border-left: 4px solid #FD711A; border-radius: 0 10px 10px 0; font-size: 1rem; color: #334155;">
      🏠 Một trong những khó khăn lớn nhất của người con ở xa là việc <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" style="color: #FD711A; font-weight: 700; text-decoration: underline;">đưa bố mẹ đi khám</a> định kỳ. ANTCARE mang đến giải pháp trợ lý sức khỏe và người đồng hành y tế thay bạn chăm sóc bố mẹ chu đáo tại Hà Nội.
    </p>`
  }
];

priorityAdditions.forEach(({ id, anchor, callout }) => {
  const art = newsData.list.find(n => n.id === id);
  if (art && art.content) {
    if (!art.content.includes('/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi')) {
      // Insert callout right before </article> or before the last section
      if (art.content.includes('</article>')) {
        art.content = art.content.replace('</article>', `${callout}\n</article>`);
      } else {
        art.content += `\n${callout}`;
      }
      console.log(`Added internal link to article ID ${id} (${art.slug}) with anchor: "${anchor}"`);
    } else {
      console.log(`Article ID ${id} already contains link.`);
    }
  }
});

// Also remove the 4 old articles from data.list so they don't appear as duplicate listings in the news feed
const duplicateIds = [59, 27, 63, 126];
newsData.list = newsData.list.filter(n => !duplicateIds.includes(n.id));
console.log('Removed 4 duplicate articles from news feed listing (preserved via 301 redirects).');

fs.writeFileSync('src/data/news.json', JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully saved src/data/news.json');
