const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Hướng dẫn chi tiết cách chọn mua máy đo huyết áp, máy đo đường huyết, máy đo SpO2 chuẩn y khoa làm quà tặng thiết thực cho cha mẹ lớn tuổi, tối ưu hóa theo dõi sức khỏe tại nhà.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cẩm Nang Chọn Quà Tặng Thiết Bị Y Tế Gia Đình Cho Cha Mẹ: Mua Đúng Nhu Cầu, Tránh Lãng Phí</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Hướng dẫn chi tiết cách chọn mua máy đo huyết áp, máy đo đường huyết, máy đo SpO2 chuẩn y khoa làm quà tặng thiết thực cho cha mẹ lớn tuổi, tối ưu hóa theo dõi sức khỏe tại nhà.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <h2 style="font-weight: 700; color: #0f172a;">1. Xu hướng quà tặng công nghệ y tế: Món quà hiếu thảo của thời đại mới</h2>
  <p>Thay vì những giỏ hoa quả hay rượu bánh ngoại nhập chỉ mang tính hình thức, ngày càng nhiều gia đình lựa chọn các thiết bị theo dõi y tế làm quà biếu đấng sinh thành trong các dịp sinh nhật, mừng thọ hay lễ Tết. Đây là món quà giúp cha mẹ chủ động lắng nghe cơ thể mình mỗi ngày.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tang-huyet-ap-o-nguoi-cao-tuoi-do-tai-nha-quan-trong-hon-o-phong-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng Huyết Áp Ở Người Cao Tuổi: Vì Sao Đo Tại Nhà Quan Trọng Hơn Ở Phòng Khám?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/ung-dung-cong-nghe-cham-soc-nguoi-cao-tuoi-dinh-vi-den-bao-cao-so" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Ứng Dụng Công Nghệ Chăm Sóc Người Cao Tuổi: Từ Thiết Bị Định Vị Đến Báo Cáo Y Tế Số Sau Mỗi Buổi
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">2. Top 3 thiết bị y tế bắt buộc phải có trong gia đình có người cao tuổi</h2>

  <h3 style="font-weight: 700; color: #0f172a;">2.1. Máy đo huyết áp điện tử bắp tay</h3>
  <ul>
    <li><strong>Tiêu chuẩn chọn mua:</strong> Chọn loại đo bắp tay có chứng nhận lâm sàng (AAMI/ESH). Ưu tiên màn hình LCD cỡ lớn, có đèn nền và cảnh báo rung nhĩ hoặc rối loạn nhịp tim.</li>
    <li><strong>Lưu ý:</strong> Tránh chọn máy đo cổ tay vì người cao tuổi có thành mạch xơ cứng dễ dẫn tới sai lệch chỉ số lên đến 15–20 mmHg.</li>
  </ul>

  <h3 style="font-weight: 700; color: #0f172a;">2.2. Máy đo đường huyết cá nhân</h3>
  <ul>
    <li><strong>Tiêu chuẩn chọn mua:</strong> Chọn dòng máy sử dụng công nghệ que thử tự hút máu cực nhỏ, thời gian đọc kết quả dưới 5 giây, có bộ nhớ lưu trữ ít nhất 100 lần đo và dễ mua que thử thay thế trên thị trường.</li>
  </ul>

  <h3 style="font-weight: 700; color: #0f172a;">2.3. Máy đo nồng độ oxy kẹp ngón tay (SpO2)</h3>
  <ul>
    <li><strong>Tiêu chuẩn chọn mua:</strong> Cần thiết cho người có tiền sử bệnh tim mạch, hen phế quản hoặc COPD. Chọn dòng có sai số không quá ±2% trong dải đo 70% – 100%.</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">3. Sai lầm phổ biến: Mua máy xịn nhưng không ai hướng dẫn sử dụng</h2>
  <p>Rất nhiều thiết bị y tế đắt tiền sau khi mua về bị cất gọn vào ngăn tủ vì người già mắt kém, thao tác ngón tay run rẩy không thể tự cài đặt hoặc không hiểu ý nghĩa của các con số trên màn hình. Giá trị của thiết bị y tế chỉ được phát huy tối đa khi đi kèm với một dịch vụ hỗ trợ theo dõi và quản lý dữ liệu số hóa liên tục.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Tặng máy chưa đủ – Hãy tặng cha mẹ một người đồng hành theo dõi tận tâm!</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Thiết bị chỉ cho ra con số thô. Để những con số ấy biến thành sự an tâm, bố mẹ cần có chuyên viên y tế đến tận nhà đo đạc đúng chuẩn, giải thích kết quả và cảnh báo sớm các bất thường.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ Trợ Lý Theo Dõi Sức Khỏe của ANTCARE – Kiến chăm tổ mang đến sự đồng hành trọn vẹn:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Đo đạc và quản lý nhật ký 5 chỉ số sinh tồn (Huyết áp, Đường huyết, SpO2, Mạch, Nhiệt độ) định kỳ ngay tại nhà.</li>
      <li>Cảnh báo sớm các dấu hiệu bất thường của chỉ số trước khi biến chứng nguy hiểm bùng phát.</li>
      <li>Rà soát hạn dùng của thuốc, xếp thuốc vào khay chia liều và nhắc nhở uống đúng cữ.</li>
      <li>Tư vấn chế độ dinh dưỡng cá nhân hóa, đồng thời lập báo cáo sức khỏe số gửi trực tiếp về điện thoại cho con cái.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Đội ngũ Kiến ANTCARE sở hữu chứng chỉ Sơ cấp cứu và Chăm sóc người cao tuổi chuẩn quốc tế do đối tác Wellbeing đào tạo và cấp bằng.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Trao gửi an tâm – Trọn vẹn hiếu đạo.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp Về Thiết Bị Y Tế Gia Đình</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Máy đo huyết áp điện tử tại nhà dùng bao lâu thì cần hiệu chuẩn lại?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Theo khuyến cáo từ các nhà sản xuất y tế hàng đầu, máy đo huyết áp điện tử nên được kiểm tra độ chính xác và hiệu chuẩn định kỳ sau mỗi 1 đến 2 năm sử dụng, hoặc khi có nghi ngờ kết quả đo sai lệch bất thường so với triệu chứng cơ thể.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người cao tuổi có nên tự thử đường huyết mỗi ngày không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tần suất đo phụ thuộc vào phác đồ điều trị. Nếu bệnh nhân tiêm insulin thì cần đo hằng ngày theo chỉ định. Nếu chỉ dùng thuốc uống ổn định, chỉ cần đo 2–3 lần mỗi tuần (luân phiên lúc đói và sau ăn 2 giờ) để tránh gây đau rát đầu ngón tay cho người cao tuổi.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cẩm Nang Chọn Quà Tặng Thiết Bị Y Tế Gia Đình Cho Cha Mẹ: Mua Đúng Nhu Cầu, Tránh Lãng Phí",
    "description": "Hướng dẫn chi tiết cách chọn mua máy đo huyết áp, máy đo đường huyết, máy đo SpO2 chuẩn y khoa làm quà tặng thiết thực cho cha mẹ lớn tuổi, tối ưu hóa theo dõi sức khỏe tại nhà.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 52,
  slug: 'cam-nang-chon-qua-tang-thiet-bi-y-te-gia-dinh',
  title: 'Cẩm Nang Chọn Quà Tặng Thiết Bị Y Tế Gia Đình Cho Cha Mẹ: Mua Đúng Nhu Cầu, Tránh Lãng Phí',
  category: 'Thiết bị Y tế Gia đình',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cam-nang-chon-qua-tang-thiet-bi-y-te-gia-dinh.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 52 to news.json!');
