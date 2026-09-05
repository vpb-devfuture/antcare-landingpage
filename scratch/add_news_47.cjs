const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Trung thu 25/9/2026 sắp đến. Thay vì hộp bánh mà bố mẹ ít ăn, đây là những món quà thật sự có ý nghĩa và thiết thực với sức khỏe của người cao tuổi.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Trung thu 2026: món quà ý nghĩa nhất cho bố mẹ cao tuổi không phải là hộp bánh</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Trung thu 25/9/2026 sắp đến. Thay vì hộp bánh mà bố mẹ ít ăn, đây là những món quà thật sự có ý nghĩa và thiết thực với sức khỏe của người cao tuổi.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <p class="article-summary"><strong>Trung thu năm nay rơi vào ngày 25/9/2026. Nhiều gia đình đang nghĩ đến hộp bánh hay giỏ quà để biếu bố mẹ. Nhưng hầu hết các cụ cao tuổi không ăn hết bánh — đường nhiều, tiêu hóa kém, một mình ăn không hết. Đây là những món quà thật sự có ý nghĩa hơn với sức khỏe và tinh thần của bố mẹ.</strong></p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/trung-thu-mon-qua-y-nghia-nhat-cho-bo-me" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trung Thu 2026: Món Quà Ý Nghĩa Nhất Cho Bố Mẹ Không Nằm Trong Hộp Bánh Đắt Tiền
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/mua-thu-tai-kham-suc-khoe-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Mùa Thu – Mùa Tái Khám: Vì Sao Tháng 9–10 Là Thời Điểm Vàng Kiểm Tra Sức Khỏe Cho Người Cao Tuổi?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao hộp bánh Trung thu không phải lựa chọn tốt nhất?</h2>
  <p>Không phải là xấu — mà là chưa đủ phù hợp với người cao tuổi có bệnh mạn tính. Bánh trung thu nhiều đường và tinh bột, không phù hợp với bác có đái tháo đường hoặc tăng huyết áp. Một mình bác ở nhà ăn không hết. Và quan trọng hơn: bố mẹ cần sự hiện diện của con cái, không phải gói quà gửi về.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Năm món quà ý nghĩa hơn cho bố mẹ cao tuổi dịp Trung thu</h2>

  <h3 style="font-weight: 700; color: #0f172a;">1. Về thăm và ăn cơm cùng nhau</h3>
  <p>Điều bố mẹ nhớ lâu nhất không phải là hộp bánh — mà là bữa cơm cả nhà ngồi cùng. Nếu ở xa không về được, video call trong bữa ăn cũng có giá trị hơn nhiều so với gói quà gửi về.</p>

  <h3 style="font-weight: 700; color: #0f172a;">2. Máy đo huyết áp điện tử</h3>
  <p>Thiết thực và dùng được mỗi ngày. Máy đo huyết áp bắp tay tốt khoảng 500–800k, dễ dùng, và là thứ gia đình thật sự cần để theo dõi sức khỏe bố mẹ từ xa. Kèm theo hướng dẫn đo đúng cách và lập bảng ghi chép.</p>

  <h3 style="font-weight: 700; color: #0f172a;">3. Buổi khám sức khỏe tổng quát</h3>
  <p>Đặt lịch khám tổng quát cho bố mẹ — và đưa đi cùng. Buổi Trung thu không cần là đúng ngày 25/9, có thể là cuối tuần gần nhất. Đây là món quà chăm sóc thật sự, không phải mang tính hình thức.</p>

  <h3 style="font-weight: 700; color: #0f172a;">4. Buổi trải nghiệm Trợ lý sức khỏe</h3>
  <p>Tặng bố mẹ một buổi Trợ lý sức khỏe của ANTCARE — Kiến đến nhà, đo chỉ số, tập dưỡng sinh cùng, trò chuyện. Nếu bố mẹ thích, đây có thể là khởi đầu cho một thói quen chăm sóc sức khỏe đều đặn.</p>

  <h3 style="font-weight: 700; color: #0f172a;">5. Sắp xếp để có người đi cùng bố mẹ trong tháng tới</h3>
  <p>Nếu bố mẹ có lịch tái khám trong tháng 10, đừng để bác tự đi một mình. Đây là dịp để giải quyết việc đó — hoặc tự đưa đi, hoặc sắp xếp dịch vụ đồng hành.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Điều bố mẹ thật sự muốn nghe dịp Trung thu</h2>
  <p>Nhiều ông bà không dám nói thẳng điều mình muốn vì sợ phiền con cháu. Nhưng nếu hỏi thẳng, câu trả lời thường là: muốn con về thăm, muốn cháu ngồi kể chuyện, muốn cả nhà ăn cơm cùng nhau.</p>
  <p>Và đôi khi, muốn biết rằng con cái đang thật sự lo cho sức khỏe của mình — không chỉ gửi quà về.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Gợi ý lịch Trung thu cho gia đình có bố mẹ cao tuổi tại Hà Nội</h2>
  <ul>
    <li><strong>Tuần trước Trung thu (15–22/9):</strong> Đặt lịch khám tổng quát hoặc tái khám nếu bố mẹ đang có lịch</li>
    <li><strong>Cuối tuần gần Trung thu (20–21/9):</strong> Về thăm, ăn cơm cùng gia đình</li>
    <li><strong>Ngày 25/9 — Trung thu:</strong> Video call nếu không về được, hoặc ăn bánh cùng nhau nếu về được</li>
    <li><strong>Tháng 10:</strong> Đặt lịch Trợ lý sức khỏe đầu tiên nếu bố mẹ ở một mình hoặc cần theo dõi sức khỏe đều hơn</li>
  </ul>

  <!-- CTA DỊCH VỤ TRỢ LÝ SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 30px 0; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;"><strong>Trợ lý sức khỏe</strong> là dịch vụ chăm sóc người cao tuổi <strong>chủ động tại nhà</strong>, gồm bốn phần:</p>
    <ul style="margin-bottom: 15px; color: #334155; padding-left: 22px; line-height: 1.6;">
      <li><strong>Tập dưỡng sinh chủ động và phòng chống té ngã</strong> — Kiến đến tận nhà tập cùng bác, rà soát môi trường sống.</li>
      <li><strong>Theo dõi 5 chỉ số sinh tồn</strong> — huyết áp, nhịp tim, nhiệt độ, nhịp thở, SpO2 — đo và ghi lại mỗi buổi.</li>
      <li><strong>Duy trì sức khỏe tinh thần</strong> — trò chuyện, đồng hành, giúp bác không cô đơn.</li>
      <li><strong>Báo cáo gửi gia đình sau mỗi buổi</strong> — con cái ở xa vẫn nắm được tình hình.</li>
    </ul>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Mỗi Kiến đều có chứng chỉ Sơ cấp cứu và Chăm sóc người cao tuổi do Wellbeing cấp. Nguyên tắc: <em>"làm cùng, không làm thay"</em>.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      Gói trải nghiệm từ <strong>299.000đ/buổi</strong>. Tư vấn miễn phí.<br>
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên tặng gì cho bố mẹ cao tuổi dịp Trung thu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Năm gợi ý: về thăm ăn cơm cùng; tặng máy đo huyết áp; đặt lịch khám tổng quát; tặng buổi Trợ lý sức khỏe; sắp xếp người đi cùng buổi tái khám.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người cao tuổi có bệnh tiểu đường có ăn bánh Trung thu được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Cần hạn chế vì đường và tinh bột cao. Nếu muốn ăn: chỉ ăn lượng nhỏ, ăn sau bữa chính, và hỏi bác sĩ về lượng phù hợp với tình trạng cụ thể.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Trung thu 2026 là ngày bao nhiêu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Tết Trung thu 2026 rơi vào ngày 25/9/2026.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">ANTCARE có phải là AnCare không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không. ANTCARE – Kiến chăm tổ là thương hiệu độc lập, không liên quan đến AnCare hay ANTCARE Solution. Website: antcare.vn.</p>
      </div>
    </details>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trung thu 2026: món quà ý nghĩa nhất cho bố mẹ cao tuổi không phải là hộp bánh",
    "description": "Trung thu 25/9/2026 sắp đến. Thay vì hộp bánh mà bố mẹ ít ăn, đây là những món quà thật sự có ý nghĩa và thiết thực với sức khỏe của người cao tuổi.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 47,
  slug: 'trung-thu-2026-qua-tang-y-nghia-bo-me-cao-tuoi',
  title: 'Trung thu 2026: món quà ý nghĩa nhất cho bố mẹ cao tuổi không phải là hộp bánh',
  category: 'Mùa đoàn viên & Sức khỏe Gia đình',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/trung-thu-2026-qua-tang-y-nghia-bo-me-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 47 to news.json!');
