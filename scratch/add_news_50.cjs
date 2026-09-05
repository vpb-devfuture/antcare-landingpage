const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Đột quỵ buổi sáng ở người cao tuổi thường bùng phát từ 4h đến 8h do biến đổi huyết áp và máu tăng đông; nắm vững quy tắc 3 phút thức giấc và theo dõi sinh hiệu là chìa khóa phòng ngừa tử vong.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Đột Quỵ Buổi Sáng Ở Người Cao Tuổi: Vì Sao Xảy Ra Nhiều Nhất Và Quy Tắc 3 Phút Cứu Mạng</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Đột quỵ buổi sáng ở người cao tuổi thường bùng phát từ 4h đến 8h do biến đổi huyết áp và máu tăng đông; nắm vững quy tắc 3 phút thức giấc và theo dõi sinh hiệu là chìa khóa phòng ngừa tử vong.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <h2 style="font-weight: 700; color: #0f172a;">1. Bí mật khung giờ tử thần: 4h00 – 8h00 sáng</h2>
  <p>Hơn 60% các ca tai biến mạch máu não xảy ra vào thời điểm sáng sớm. Theo giải phẫu bệnh lão khoa, khi cơ thể chuyển từ trạng thái ngủ sâu sang thức giấc, hệ thần kinh giao cảm bị kích thích mạnh, giải phóng hormone gây co mạch và tăng nhịp tim. Đồng thời, sau một đêm dài không uống nước, máu trở nên cô đặc, độ kết dính tiểu cầu tăng cao cực độ, dễ dàng bít tắc những đoạn mạch não đã xơ vữa từ trước.</p>

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
        <a href="/tin-tuc/mua-thu-tai-kham-suc-khoe-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">2. Quy tắc vàng "3 phút trên giường" ngăn ngừa đột quỵ</h2>
  <p>Người cao tuổi tuyệt đối không nên bật dậy ngay khỏi giường sau khi mở mắt. Hãy hướng dẫn cha mẹ thực hiện nguyên tắc 3 phút đơn giản nhưng cứu mạng:</p>
  <ol>
    <li><strong>Phút thứ 1:</strong> Nằm yên trên giường, chớp mắt nhẹ nhàng, cử động các ngón tay và ngón chân để đánh thức tuần hoàn máu.</li>
    <li><strong>Phút thứ 2:</strong> Ngồi dậy từ từ, đặt hai chân buông thõng xuống mép giường, thở sâu để huyết áp và tuần hoàn não thích nghi với tư thế đứng.</li>
    <li><strong>Phút thứ 3:</strong> Đứng dậy chậm rãi, với tay lấy một cốc nước ấm (khoảng 150ml) để làm loãng máu trước khi bước vào phòng vệ sinh.</li>
  </ol>

  <h2 style="font-weight: 700; color: #0f172a;">3. Nhận diện sớm dấu hiệu đột quỵ bằng quy tắc FAST</h2>
  <ul>
    <li><strong>F (Face - Mặt):</strong> Mặt mất cân đối, một bên khóe miệng bị xệ xuống khi cười hoặc nói.</li>
    <li><strong>A (Arm - Tay):</strong> Yếu liệt một bên tay hoặc chân, không thể giơ đều hai tay qua đầu.</li>
    <li><strong>S (Speech - Giọng nói):</strong> Nói ngọng, phát âm khó khăn hoặc không hiểu được lời người khác nói.</li>
    <li><strong>T (Time - Thời gian):</strong> Gọi cấp cứu y tế ngay lập tức; giờ vàng cấp cứu tiêu sợi huyết là trong vòng 3 đến 4.5 giờ đầu tiên.</li>
  </ul>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Chủ động kiểm soát chỉ số sinh tồn – Chặn đứng nguy cơ đột quỵ từ sớm!</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Đột quỵ không đến ngẫu nhiên mà luôn có những cảnh báo thầm lặng qua sự biến thiên thất thường của huyết áp và nhịp tim. Một quy trình theo dõi y tế chặt chẽ ngay tại nhà là lá chắn an toàn nhất cho cha mẹ.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ Trợ Lý Theo Dõi Sức Khỏe của ANTCARE – Kiến chăm tổ mang đến sự tận tâm chuyên nghiệp:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Đo đạc và quản lý nhật ký 5 chỉ số sinh tồn (Huyết áp, Đường huyết, SpO2, Mạch, Nhiệt độ) định kỳ ngay tại nhà.</li>
      <li>Cảnh báo sớm các dấu hiệu bất thường của chỉ số trước khi biến chứng nguy hiểm bùng phát.</li>
      <li>Rà soát hạn dùng của thuốc, xếp thuốc vào khay chia liều và nhắc nhở uống đúng cữ.</li>
      <li>Tư vấn chế độ dinh dưỡng cá nhân hóa, đồng thời lập báo cáo sức khỏe số gửi trực tiếp về điện thoại cho con cái.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Đội ngũ Kiến ANTCARE sở hữu chứng chỉ Sơ cấp cứu và Chăm sóc người cao tuổi chuẩn quốc tế do đối tác Wellbeing đào tạo và cấp bằng.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Đồng hành an tâm – Phòng ngừa tai biến từ gốc.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp Về Phòng Ngừa Đột Quỵ Ở Người Cao Tuổi</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có nên chích máu đầu ngón tay khi nghi ngờ người thân bị đột quỵ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tuyệt đối không. Đây là quan niệm dân gian sai lầm và vô cùng nguy hiểm. Chích máu gây đau làm huyết áp tăng vọt thêm và làm mất đi thời gian vàng cấp cứu. Hãy đặt bệnh nhân nằm nghiêng an toàn, nới lỏng cổ áo và gọi xe cấp cứu 115 ngay.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Làm sao phát hiện cơn tai biến thoáng qua (TIA)?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cơn thiếu máu não thoáng qua có các biểu hiện như hoa mắt đột ngột, rơi đũa khi ăn, tê nửa người nhưng tự hết sau vài phút đến vài giờ. Đây là dấu hiệu cảnh báo trước của một cơn đột quỵ thực sự trong vòng 48 giờ tới, gia đình cần đưa bác đến bệnh viện kiểm tra ngay.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Đột Quỵ Buổi Sáng Ở Người Cao Tuổi: Vì Sao Xảy Ra Nhiều Nhất Và Quy Tắc 3 Phút Cứu Mạng",
    "description": "Đột quỵ buổi sáng ở người cao tuổi thường bùng phát từ 4h đến 8h do biến đổi huyết áp và máu tăng đông; nắm vững quy tắc 3 phút thức giấc và theo dõi sinh hiệu là chìa khóa phòng ngừa tử vong.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 50,
  slug: 'dot-quy-buoi-sang-nguoi-cao-tuoi-quy-tac-3-phut',
  title: 'Đột Quỵ Buổi Sáng Ở Người Cao Tuổi: Vì Sao Xảy Ra Nhiều Nhất Và Quy Tắc 3 Phút Cứu Mạng',
  category: 'Cấp cứu & Phòng ngừa Đột quỵ',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/dot-quy-buoi-sang-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 50 to news.json!');
