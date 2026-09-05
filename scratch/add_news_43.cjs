const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Thay cho những hộp bánh nướng bánh dẻo chứa quá nhiều đường béo, giải pháp theo dõi sức khỏe chủ động và sự đồng hành y tế tận tâm mới là món quà báo hiếu trọn vẹn nhất mùa đoàn viên.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Trung Thu 2026: Món Quà Ý Nghĩa Nhất Cho Bố Mẹ Không Nằm Trong Hộp Bánh Đắt Tiền</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Thay cho những hộp bánh nướng bánh dẻo chứa quá nhiều đường béo, giải pháp theo dõi sức khỏe chủ động và sự đồng hành y tế tận tâm mới là món quà báo hiếu trọn vẹn nhất mùa đoàn viên.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Cập nhật: <time datetime="2026-09-05" itemprop="datePublished">05/09/2026</time> | Chuyên mục: Mùa đoàn viên & Sức khỏe Gia đình</div>
  </header>

  <h2>1. Nỗi niềm khó nói sau những hộp bánh Trung thu hảo hạng</h2>
  <p>Mỗi mùa trăng rằm, con cái thường biếu tặng những hộp bánh sang trọng giá hàng triệu đồng. Tuy nhiên, một góc bánh nướng thập cẩm nhỏ có thể chứa đến 200–250 kcal cùng hàm lượng đường và muối rất cao, khiến chỉ số đường huyết và huyết áp của bố mẹ tăng vọt mất kiểm soát suốt nhiều ngày sau đó.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/mua-thu-tai-kham-suc-khoe-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/sandwich-generation-ap-luc-kiet-que-cua-the-he-kep-giua" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Sandwich Generation: Áp Lực Kiệt Quệ Của Thế Hệ "Kẹp Giữa" Vừa Nuôi Con Vừa Chăm Bố Mẹ Già
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/dai-thao-duong-o-nguoi-cao-tuoi-nhung-dieu-con-cai-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Đái Tháo Đường Ở Người Cao Tuổi: Những Điều Con Cái Cần Biết Để Chăm Sóc Đúng
        </a>
      </li>
    </ul>
  </div>

  <h2>2. Biếu sức khỏe bền vững – Món quà đoàn viên ý nghĩa nhất</h2>
  <p>Ở tuổi xế chiều, điều cha mẹ trân quý nhất không phải là của ngon vật lạ mà là một cơ thể khỏe mạnh, ít đau ốm để cùng sum vầy bên cháu con. Thay vì hộp bánh hình thức, trao tặng một gói chăm sóc theo dõi sức khỏe chuyên nghiệp là cách biểu đạt lòng hiếu thảo thiết thực và tinh tế nhất.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 30px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem;">Trung thu này, tặng bố mẹ giải pháp chăm sóc sức khỏe chủ động dài lâu!</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Bánh Trung thu ăn rồi cũng hết, nhưng một kế hoạch theo dõi y tế bài bản sẽ bảo vệ bình an của cha mẹ suốt 365 ngày. Dù bạn ở xa hay bận rộn, sức khỏe của bố mẹ vẫn luôn được kiểm soát chặt chẽ.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ Trợ Lý Theo Dõi Sức Khỏe của ANTCARE – Kiến chăm tổ mang đến sự tận tâm chuyên nghiệp:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Đo đạc và quản lý nhật ký 5 chỉ số sinh tồn (Huyết áp, Đường huyết, SpO2, Mạch, Nhiệt độ) định kỳ ngay tại nhà.</li>
      <li>Cảnh báo sớm các dấu hiệu bất thường của chỉ số trước khi biến chứng nguy hiểm bùng phát.</li>
      <li>Rà soát hạn dùng của thuốc, xếp thuốc vào khay chia liều và nhắc nhở uống đúng cữ.</li>
      <li>Tư vấn chế độ dinh dưỡng cá nhân hóa, đồng thời lập báo cáo sức khỏe số gửi trực tiếp về điện thoại cho con cái.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Đội ngũ Kiến ANTCARE sở hữu chứng chỉ Sơ cấp cứu và Chăm sóc người cao tuổi chuẩn quốc tế do đối tác Wellbeing đào tạo và cấp bằng.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm quà tặng từ <strong>299.000đ/buổi</strong>. Trao gửi an tâm – Trọn vẹn hiếu đạo.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2>Câu Hỏi Thường Gặp Về Quà Tặng Sức Khỏe Cho Bố Mẹ</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nếu vẫn muốn biếu bánh Trung thu thì nên lưu ý gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Hãy chọn các dòng bánh ăn kiêng dùng đường tự nhiên Isomalt, nhân hạt dinh dưỡng. Dặn bố mẹ chỉ ăn 1/8 chiếc bánh vào bữa xế kèm nước trà xanh, tránh ăn vào buổi tối để không gây quá tải đường huyết ban đêm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">ANTCARE có hỗ trợ gói quà tặng sức khỏe dành riêng cho cha mẹ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có. ANTCARE có gói Trợ lý theo dõi sức khỏe được đóng gói dạng quà tặng cao cấp, trao kèm thiệp chúc mừng cá nhân hóa đến tận tay bố mẹ theo lịch hẹn của con cái.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trung Thu 2026: Món Quà Ý Nghĩa Nhất Cho Bố Mẹ Không Nằm Trong Hộp Bánh Đắt Tiền",
    "description": "Thay cho những hộp bánh nướng bánh dẻo chứa quá nhiều đường béo, giải pháp theo dõi sức khỏe chủ động và sự đồng hành y tế tận tâm mới là món quà báo hiếu trọn vẹn nhất mùa đoàn viên.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 43,
  slug: 'trung-thu-mon-qua-y-nghia-nhat-cho-bo-me',
  title: 'Trung Thu 2026: Món Quà Ý Nghĩa Nhất Cho Bố Mẹ Không Nằm Trong Hộp Bánh Đắt Tiền',
  category: 'Mùa đoàn viên & Sức khỏe Gia đình',
  date: '05/09/2026',
  author: 'ANTCARE Team',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/trung-thu-mon-qua-y-nghia-cho-bo-me.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 43 to news.json!');
