const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Nhiều bố mẹ từ chối nhận sự giúp đỡ hoặc từ chối người chăm sóc vì tự ái hoặc sợ phiền con cháu. Hướng dẫn cách tiếp cận cuộc trò chuyện khó này để cả hai bên đều được tôn trọng.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cách nói chuyện với bố mẹ cao tuổi về việc cần người chăm sóc mà không gây xung đột</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Nhiều bố mẹ từ chối nhận sự giúp đỡ hoặc từ chối người chăm sóc vì tự ái hoặc sợ phiền con cháu. Hướng dẫn cách tiếp cận cuộc trò chuyện khó này để cả hai bên đều được tôn trọng.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-05">05/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-05">05/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <p class="article-summary"><strong>'Bố mẹ vẫn tự lo được, không cần ai.' Câu này quen không? Rất nhiều gia đình gặp tình huống này khi đề nghị thuê người chăm sóc hoặc dùng dịch vụ hỗ trợ. Bố mẹ từ chối không phải vì không cần — mà vì sợ mất đi cảm giác tự chủ, sợ trở thành gánh nặng, hoặc đơn giản là chưa sẵn sàng thừa nhận mình cần giúp đỡ. Cách tiếp cận cuộc trò chuyện quyết định nhiều hơn nội dung của nó.</strong></p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/sandwich-generation-ap-luc-kiet-que-cua-the-he-kep-giua" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Sandwich Generation: Áp Lực Kiệt Quệ Của Thế Hệ "Kẹp Giữa" Vừa Nuôi Con Vừa Chăm Bố Mẹ Già
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/tai-sao-nen-chon-dich-vu-tro-ly-suc-khoe-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Vì sao nên chọn dịch vụ Trợ lý sức khỏe của ANTCARE – Kiến chăm tổ thay vì các lựa chọn khác?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/tro-ly-suc-khoe-cho-bo-me-song-mot-minh-ha-noi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố mẹ sống một mình ở Hà Nội: dịch vụ Trợ lý sức khỏe của ANTCARE giải quyết những nỗi lo nào?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao bố mẹ từ chối nhận sự giúp đỡ?</h2>
  <p>Hiểu được lý do mới tìm được cách tiếp cận đúng. Có bốn lý do phổ biến nhất:</p>
  <ul>
    <li><strong>Sợ mất tự chủ.</strong> Nhận người chăm sóc đồng nghĩa với thừa nhận mình không còn tự lo được — điều này đụng chạm vào lòng tự trọng của người đã cả đời tự chăm lo cho gia đình.</li>
    <li><strong>Không muốn là gánh nặng.</strong> Nhiều bác nói "vẫn ổn" không phải vì thật sự ổn, mà vì không muốn con cái tốn tiền và lo lắng.</li>
    <li><strong>Chưa tin vào người lạ.</strong> Cho phép người lạ vào nhà là quyết định lớn với người cao tuổi — đặc biệt khi chưa biết gì về người đó.</li>
    <li><strong>Văn hóa "chịu đựng".</strong> Thế hệ bố mẹ lớn lên trong hoàn cảnh khó khăn, quen tự lo và ít khi nhờ người.</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Năm sai lầm thường gặp khi đề xuất với bố mẹ</h2>
  <ol>
    <li><strong>Nói khi bố mẹ đang mệt hoặc không khỏe.</strong> Lúc đó bác dễ phòng thủ và cảm thấy bị tấn công.</li>
    <li><strong>Đưa ra quyết định thay vì hỏi ý kiến.</strong> "Con đã thuê người đến chăm bố mẹ rồi" sẽ gặp phản ứng ngay lập tức.</li>
    <li><strong>Nhấn mạnh vào yếu kém của bố mẹ.</strong> "Bố mẹ già rồi, không tự lo được" là câu đúng nhưng không ai muốn nghe.</li>
    <li><strong>Đưa ra quá nhiều thông tin một lúc.</strong> Giới thiệu dịch vụ, giải thích giá, kể về chứng chỉ — bác sẽ choáng ngợp và nói không.</li>
    <li><strong>Hỏi ý kiến tất cả anh chị em trong cùng một cuộc trò chuyện.</strong> Bác cảm thấy bị "bao vây".</li>
  </ol>

  <h2 style="font-weight: 700; color: #0f172a;">Cách tiếp cận hiệu quả hơn</h2>

  <h3 style="font-weight: 700; color: #0f172a;">Bắt đầu từ nỗi lo của con, không phải từ vấn đề của bác</h3>
  <p>Thay vì: <em>"Bố mẹ cần người chăm sóc"</em></p>
  <p>Thử: <em>"Con hay lo lắng lắm bố ơi. Hôm qua con đang họp mà cứ nghĩ không biết hôm nay bố ăn được không, có ai ở nhà với bố không. Con muốn an tâm hơn một chút."</em></p>
  <p>Câu sau nói về cảm xúc của con — không ai có thể phản bác cảm xúc đó.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Đề xuất thử nghiệm, không phải cam kết dài hạn</h3>
  <p>Thay vì: <em>"Con muốn thuê người đến chăm bố mẹ"</em></p>
  <p>Thử: <em>"Có dịch vụ cho thử một buổi xem bố có thích không, hoàn toàn không phải cam kết gì. Nếu không hợp thì thôi."</em></p>
  <p>Một buổi thử nghiệm hạ rào cản gần như về 0.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Đặt bác vào vị trí người quyết định</h3>
  <p>Thay vì thông báo, hỏi ý kiến: <em>"Bố thấy người như thế nào thì bố sẽ thoải mái? Bố muốn người đến lúc mấy giờ? Bố muốn làm gì trong buổi đó?"</em> Khi bác là người quyết định các điều kiện, bác ít có lý do để từ chối hơn.</p>

  <h3 style="font-weight: 700; color: #0f172a;">Nhờ người bác tin cậy nói giúp</h3>
  <p>Đôi khi con cái không phải người có ảnh hưởng nhất. Bác của bố mẹ, người bạn thân, bác sĩ quen — lời từ họ có thể hiệu quả hơn nhiều lần con nói.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Sau khi bác đồng ý thử: điều quan trọng nhất</h2>
  <p>Đừng biến mất. Hỏi bác sau buổi đầu tiên cảm thấy thế nào — Kiến có làm bác thoải mái không, có điều gì muốn thay đổi không. Sự quan tâm liên tục của con cái là thứ giúp bác tiếp tục sử dụng dịch vụ, không phải bản thân dịch vụ đó.</p>

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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bố mẹ không chịu nhận người chăm sóc phải làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Bốn cách: nói từ nỗi lo của con; đề xuất thử một buổi không cam kết; để bác quyết định các điều kiện; nhờ người bác tin cậy nói giúp.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Tại sao người cao tuổi hay từ chối nhận sự giúp đỡ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Bốn lý do: sợ mất tự chủ; không muốn là gánh nặng; chưa tin người lạ; văn hóa quen tự lo. Hiểu lý do mới tìm được cách tiếp cận đúng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên nói chuyện với bố mẹ về dịch vụ chăm sóc vào lúc nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Khi bác đang khỏe, thoải mái, không bận. Tránh lúc bác mệt. Nói chuyện riêng với từng người — không đưa ra trong cuộc họp đông người.</p>
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
    "headline": "Cách nói chuyện với bố mẹ cao tuổi về việc cần người chăm sóc mà không gây xung đột",
    "description": "Nhiều bố mẹ từ chối nhận sự giúp đỡ hoặc từ chối người chăm sóc vì tự ái hoặc sợ phiền con cháu. Hướng dẫn cách tiếp cận cuộc trò chuyện khó này để cả hai bên đều được tôn trọng.",
    "datePublished": "2026-09-05"
  }
  </script>
</article>`;

newsData.featured = {
  id: 48,
  slug: 'cach-noi-chuyen-voi-bo-me-ve-viec-can-nguoi-cham-soc',
  title: 'Cách nói chuyện với bố mẹ cao tuổi về việc cần người chăm sóc mà không gây xung đột',
  category: 'Tâm lý & Gia đình',
  date: '05/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/cach-noi-chuyen-voi-bo-me-ve-viec-can-nguoi-cham-soc.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 48 to news.json!');
