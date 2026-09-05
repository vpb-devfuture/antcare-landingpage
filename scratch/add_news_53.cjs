const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Té ngã là nguyên nhân hàng đầu gây tàn phế ở người già; cải tạo nhà vệ sinh, hệ thống chiếu sáng và bố trí người chăm sóc tại gia giúp giảm đến 80% rủi ro trượt ngã.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cải Tạo Nhà Ở Chống Trượt Ngã Cho Người Cao Tuổi: Cẩm Nang Bảo Vệ Cha Mẹ Ngay Tại Gia</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Té ngã là nguyên nhân hàng đầu gây tàn phế ở người già; cải tạo nhà vệ sinh, hệ thống chiếu sáng và bố trí người chăm sóc tại gia giúp giảm đến 80% rủi ro trượt ngã.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <h2 style="font-weight: 700; color: #0f172a;">1. Con số báo động về tai nạn trượt ngã ở người cao tuổi</h2>
  <p>Theo Tổ chức Y tế Thế giới (WHO), té ngã là nguyên nhân gây tử vong do chấn thương phổ biến thứ hai trên toàn cầu. Tại Việt Nam, hơn 75% các vụ té ngã ở người già xảy ra ngay tại ngôi nhà thân quen, đặc biệt là trong nhà tắm, bậc thềm cầu thang và lối đi lúc nửa đêm.</p>
  <p>Do tình trạng loãng xương tiến triển, một cú ngã nhẹ ở người già rất dễ dẫn đến gãy cổ xương đùi – biến cố sức khỏe nặng nề buộc bệnh nhân phải nằm liệt giường kéo dài, dẫn đến loét tì đè, viêm phổi ứ đọng và suy kiệt.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/mot-buoi-tro-ly-suc-khoe-antcare-dien-ra-the-nao" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Một buổi Trợ lý sức khỏe của ANTCARE diễn ra thế nào? Mô tả chi tiết từng bước
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/cam-nang-chon-qua-tang-thiet-bi-y-te-gia-dinh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Cẩm Nang Chọn Quà Tặng Thiết Bị Y Tế Gia Đình Cho Cha Mẹ: Mua Đúng Nhu Cầu, Tránh Lãng Phí
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">2. 4 Khu vực then chốt cần cải tạo chống ngã ngay hôm nay</h2>
  <ul>
    <li><strong>Phòng tắm & Nhà vệ sinh:</strong> Lắp đặt tay vịn chịu lực bằng thép không gỉ dọc theo bồn cầu và bồn tắm. Sử dụng thảm cao su chống trượt trên toàn bộ bề mặt gạch men và thay thế bồn cầu bệt bằng loại có chiều cao đạt chuẩn (từ 45–48cm).</li>
    <li><strong>Lối đi ban đêm:</strong> Lắp đặt hệ thống đèn cảm ứng tự động sáng dọc chân tường từ phòng ngủ ra đến nhà vệ sinh để cha mẹ không phải mò mẫm công tắc trong bóng tối khi đi tiểu đêm.</li>
    <li><strong>Loại bỏ vật cản dưới sàn:</strong> Cất gọn toàn bộ dây điện lòng thòng, dỡ bỏ các tấm thảm lau chân trơn trượt không có đế cao su bám dính.</li>
    <li><strong>Tay vịn cầu thang:</strong> Cầu thang bắt buộc phải có tay vịn chắc chắn ở cả hai bên và dán băng nhám phản quang ở mép từng bậc thềm.</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">3. Giải pháp nhân sự: Sự hiện diện của người hỗ trợ an toàn</h2>
  <p>Dù cơ sở vật chất có hoàn thiện đến đâu, sự hiện diện của một người chăm sóc có kỹ năng dìu đỡ đúng giải phẫu học vẫn là yếu tố then chốt nhất giúp đảm bảo an toàn tuyệt đối cho cha mẹ trong từng bước đi thường nhật.</p>

  <!-- CTA DỊCH VỤ AN TÂM CỬA NHÀ - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Bảo vệ an toàn cho cha mẹ trong từng bước đi mỗi ngày!</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Chỉ một phút trượt chân bất cẩn có thể để lại hậu quả nghiêm trọng. Đừng để bố mẹ phải đơn độc xoay xở với sinh hoạt hằng ngày khi con cái bận rộn vắng nhà.</p>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Dịch vụ An Tâm Cửa Nhà của ANTCARE – Kiến chăm tổ mang đến sự an lòng trọn vẹn:</strong></p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li>Túc trực hỗ trợ sinh hoạt thường nhật, phòng ngừa trượt ngã, đảm bảo an toàn tại gia.</li>
      <li>Chuẩn bị bữa ăn theo thực đơn bệnh lý (giảm muối, hạn chế đường, dễ tiêu hóa).</li>
      <li>Nhắc nhở uống thuốc đúng cữ, hỗ trợ vận động nhẹ nhàng và trò chuyện giải tỏa cô đơn.</li>
      <li>Báo cáo tình trạng sinh hoạt mỗi ngày gửi trực tiếp cho con cái qua ứng dụng.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi "Kiến" của ANTCARE đều có chứng chỉ Sơ cấp cứu và chứng chỉ Chăm sóc người cao tuổi do đối tác đào tạo Wellbeing cấp.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Đặt lịch linh hoạt theo giờ hoặc theo ca ngày.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp Về Chống Trượt Ngã Cho Người Cao Tuổi</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nếu người già bị ngã thì người nhà nên làm gì đầu tiên?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tuyệt đối không vội vàng kéo giật bệnh nhân đứng dậy ngay. Hãy kiểm tra xem người già có tỉnh táo không, hỏi vị trí đau (đặc biệt là vùng hông và đầu gối). Nếu nghi ngờ gãy xương hoặc chấn thương cột sống, hãy giữ nguyên tư thế và gọi nhân viên y tế hoặc cấp cứu 115.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Dép đi trong nhà cho người già nên chọn loại nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Nên chọn loại dép có quai hậu ôm sát gót chân, đế cao su có rãnh ma sát sâu chống trượt, chất liệu nhẹ và đế bằng, tuyệt đối không cho người già đi các loại dép xỏ ngón trơn láng hoặc guốc cao gót trong nhà.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cải Tạo Nhà Ở Chống Trượt Ngã Cho Người Cao Tuổi: Cẩm Nang Bảo Vệ Cha Mẹ Ngay Tại Gia",
    "description": "Té ngã là nguyên nhân hàng đầu gây tàn phế ở người già; cải tạo nhà vệ sinh, hệ thống chiếu sáng và bố trí người chăm sóc tại gia giúp giảm đến 80% rủi ro trượt ngã.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 53,
  slug: 'cai-tao-nha-o-chong-truot-nga-cho-nguoi-cao-tuoi',
  title: 'Cải Tạo Nhà Ở Chống Trượt Ngã Cho Người Cao Tuổi: Cẩm Nang Bảo Vệ Cha Mẹ Ngay Tại Gia',
  category: 'An toàn Nhà ở & Lão khoa',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cai-tao-nha-o-chong-truot-nga-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 53 to news.json!');
