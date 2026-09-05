const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Nhận diện 5 rào cản tâm lý khiến cha mẹ giấu bệnh và ngại đến bệnh viện, cùng giải pháp đồng hành y tế chuyên nghiệp giúp buổi khám bệnh trở nên nhẹ nhàng, an tâm.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Nhận diện 5 rào cản tâm lý khiến cha mẹ giấu bệnh và ngại đến bệnh viện, cùng giải pháp đồng hành y tế chuyên nghiệp giúp buổi khám bệnh trở nên nhẹ nhàng, an tâm.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <h2 style="font-weight: 700; color: #0f172a;">1. Vì sao cha mẹ thường nói dối "bố/mẹ không sao, khỏi rồi"?</h2>
  <p>Nhiều người con chỉ phát hiện bệnh của cha mẹ khi tình trạng đã chuyển biến nặng nề phải nhập viện cấp cứu. Không phải người già không biết mình ốm, mà đằng sau sự từ chối đi khám là những rào cản tâm lý rất sâu kín mà người trẻ bận rộn thường vô tình bỏ qua.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/cach-noi-chuyen-voi-bo-me-ve-viec-can-nguoi-cham-soc" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cách nói chuyện với bố mẹ cao tuổi về việc cần người chăm sóc mà không gây xung đột
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/mua-thu-tai-kham-suc-khoe-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/vien-duong-lao-giup-viec-hay-cham-soc-tai-gia" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện Dưỡng Lão, Người Giúp Việc Hay Chăm Sóc Tại Gia Theo Giờ: Đâu Là Lựa Chọn Đúng Cho Bố Mẹ?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">2. 5 Nỗi sợ điển hình của người cao tuổi trước cổng bệnh viện</h2>
  <ol>
    <li><strong>Sợ làm phiền công việc của con cái:</strong> Thấy con cái đi làm từ sáng sớm đến tối mịt, cha mẹ sợ mình đi khám sẽ khiến con phải xin nghỉ làm, ảnh hưởng đến sự nghiệp và thu nhập.</li>
    <li><strong>Sợ phát hiện ra bệnh nan y:</strong> Tâm lý "không khám thì không có bệnh, khám ra bệnh lại lo nghĩ thêm" khiến nhiều cụ chọn cách né tránh thực tế.</li>
    <li><strong>Sợ thủ tục rườm rà và công nghệ số:</strong> Việc quét mã QR, đăng ký thẻ khám bệnh điện tử, di chuyển giữa các tòa nhà khám bệnh đông đúc khiến người già cảm thấy bất lực, lạc lõng.</li>
    <li><strong>Sợ bị bác sĩ gắt gỏng hoặc không kịp hỏi bệnh:</strong> Phòng khám quá tải khiến thời gian thăm khám diễn ra nhanh, người già phản xạ chậm thường quên mất những triệu chứng muốn hỏi.</li>
    <li><strong>Sợ tốn kém tài chính:</strong> Lo sợ các xét nghiệm đắt tiền và tiền thuốc sẽ thâm hụt tiền tiết kiệm hoặc gánh nặng lên vai con cháu.</li>
  </ol>

  <h2 style="font-weight: 700; color: #0f172a;">3. Nghệ thuật thuyết phục và giải pháp đồng hành thảnh thơi</h2>
  <p>Thay vì thúc ép gay gắt, hãy nhấn mạnh rằng: "Khám sớm để uống thuốc nhẹ nhàng, giúp bố mẹ sống vui khỏe lâu dài cùng các cháu". Khi đưa cha mẹ đi khám, hãy chuẩn bị trước danh sách câu hỏi cần gặp bác sĩ ra giấy để không bị bỏ sót thông tin quan trọng.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Không thu xếp được thời gian đưa bố mẹ đi khám?</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Chọn đúng bệnh viện mới là nửa việc. Nửa còn lại là có người đi cùng bác suốt buổi — biết đường trong bệnh viện, biết đỡ dìu đúng cách, và ghi lại đầy đủ lời bác sĩ dặn.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ Đồng hành khám bệnh của ANTCARE – Kiến chăm tổ gồm năm phần:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Đo 5 chỉ số sinh tồn tại nhà trước khi đi.</li>
      <li>Đưa đón tận nhà chu đáo, an toàn.</li>
      <li>Hỗ trợ toàn bộ thủ tục khám, xét nghiệm, lấy kết quả.</li>
      <li>Ghi chép đầy đủ lời bác sĩ dặn gửi lại cho gia đình.</li>
      <li>Định vị theo dõi suốt buổi giúp con cái an tâm tuyệt đối.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi "Kiến" của ANTCARE (áo tím đồng phục) đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Tư vấn miễn phí — kể cả tư vấn nên đưa bác đi khám ở đâu.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp Về Tâm Lý Người Già Đi Khám Bệnh</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người nhà không đi cùng thì nhân viên ANTCARE có thể tự quyết định làm thủ thuật không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không. Nhân viên ANTCARE đóng vai trò đồng hành hỗ trợ di chuyển và ghi chép. Trong các tình huống phát sinh chỉ định can thiệp thủ thuật hoặc nhập viện, nhân viên sẽ kết nối điện thoại trực tiếp để gia đình trao đổi với bác sĩ điều trị trước khi ra quyết định.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nếu bác bị lãng tai thì việc đi khám bệnh giải quyết thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Nhân viên đồng hành của ANTCARE sẽ vào tận phòng khám cùng bác, truyền đạt lại các câu hỏi của bác sĩ bằng cử chỉ hoặc chữ viết to rõ ràng, đồng thời ghi âm và ghi chép toàn bộ căn dặn để người nhà đọc lại sau đó.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách",
    "description": "Nhận diện 5 rào cản tâm lý khiến cha mẹ giấu bệnh và ngại đến bệnh viện, cùng giải pháp đồng hành y tế chuyên nghiệp giúp buổi khám bệnh trở nên nhẹ nhàng, an tâm.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 51,
  slug: '5-noi-so-vo-hinh-khien-nguoi-cao-tuoi-ngai-di-benh-vien',
  title: '5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách',
  category: 'Tâm lý Lão khoa & Chăm sóc Gia đình',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/noi-so-nguoi-cao-tuoi-ngai-di-benh-vien.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 51 to news.json!');
