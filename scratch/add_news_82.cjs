const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\tram_cam_nguoi_cao_tuoi_1789121587267.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Trầm cảm ở người cao tuổi: Dấu hiệu nhận biết và cách gia đình hỗ trợ đúng cách</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Không phải cứ già là buồn. Trầm cảm ở tuổi cao là bệnh có thể điều trị, nhưng thường bị bỏ qua vì bị nhầm với tính khí thay đổi theo tuổi tác.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Trầm cảm ở người cao tuổi thường biểu hiện khác với người trẻ:
      <strong>ít khi nói ra cảm giác buồn, thay vào đó là than phiền về cơ thể</strong>
      (đau nhức không rõ nguyên nhân, mệt mỏi, mất ngủ, chán ăn),
      <strong>rút lui khỏi hoạt động xã hội</strong>, và <strong>giảm hứng thú với những việc trước đây yêu thích</strong>.
      Đây là bệnh có thể điều trị, không phải chuyện đương nhiên của tuổi già.
      Nếu các biểu hiện kéo dài trên 2 tuần và ảnh hưởng đến sinh hoạt,
      gia đình nên đưa người thân đi khám chuyên khoa tâm thần hoặc lão khoa.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trợ cấp hưu trí xã hội 2026: Ai được hưởng và thủ tục đăng ký thế nào
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao trầm cảm ở người cao tuổi hay bị bỏ sót</h2>
  <p>Có ba lý do khiến tình trạng này thường không được nhận ra:</p>
  <p><strong>Bị coi là bình thường của tuổi già.</strong> Cả gia đình lẫn bản thân người bệnh đều cho rằng người già thì hay buồn, hay cáu, ít nói — nên không ai nghĩ đến việc đi khám.</p>
  <p><strong>Biểu hiện qua cơ thể nhiều hơn qua cảm xúc.</strong> Người cao tuổi Việt Nam hiếm khi nói "tôi buồn" hay "tôi chán sống". Thay vào đó họ than đau lưng, đau đầu, mệt mỏi, mất ngủ, ăn không ngon — những triệu chứng dễ được quy cho bệnh thể chất.</p>
  <p><strong>Có nhiều bệnh nền cùng lúc.</strong> Khi người bệnh có sẵn tăng huyết áp, đau khớp, tiểu đường, các triệu chứng của trầm cảm dễ bị lẫn vào và bỏ qua.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu cần chú ý</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Về cảm xúc và hành vi</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Mất hứng thú với những việc trước đây yêu thích — không còn muốn đi chùa, gặp bạn, chăm cây
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Rút lui khỏi các hoạt động xã hội vẫn tham gia đều đặn
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hay cáu gắt, bực bội, hoặc ngược lại — trở nên thờ ơ, ít phản ứng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hay nói về việc mình là gánh nặng cho con cháu
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Lo lắng quá mức về những chuyện nhỏ
    </li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Về cơ thể</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Mất ngủ, đặc biệt thức dậy rất sớm và không ngủ lại được
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chán ăn, sụt cân không chủ đích
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Mệt mỏi kéo dài không giải thích được bằng bệnh thể chất
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đau nhức nhiều nơi mà khám không tìm ra nguyên nhân rõ ràng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chậm chạp trong vận động và suy nghĩ
    </li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Về nhận thức</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khó tập trung, khó ra quyết định ngay cả với việc đơn giản
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Than phiền về trí nhớ kém
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nói về bản thân một cách rất tiêu cực
    </li>
  </ul>

  <p>Nếu các biểu hiện trên kéo dài <strong>trên hai tuần</strong> và ảnh hưởng đến sinh hoạt hằng ngày, đây là lúc cần đưa đi khám.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Nếu người thân nói những điều cho thấy họ không còn muốn sống, hoặc cảm thấy cuộc sống không còn ý nghĩa, đây là tình huống cần được hỗ trợ chuyên môn ngay, không nên chờ đợi hay tự xử lý trong gia đình. Hãy đưa người thân đến cơ sở y tế có chuyên khoa tâm thần, hoặc liên hệ đường dây nóng hỗ trợ tâm lý để được hướng dẫn. Trong lúc chờ, điều quan trọng nhất là không để người thân ở một mình và lắng nghe họ mà không phán xét.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Yếu tố làm tăng nguy cơ ở người cao tuổi</h2>
  <p>Hiểu các yếu tố này giúp gia đình chủ động hơn:</p>
  <p><strong>Mất mát.</strong> Mất bạn đời, bạn bè qua đời, mất vai trò xã hội sau khi nghỉ hưu.</p>
  <p><strong>Cô đơn và cách ly xã hội.</strong> Đặc biệt với người sống một mình hoặc con cái ở xa. Đây là yếu tố có ảnh hưởng rất lớn nhưng thường bị đánh giá thấp.</p>
  <p><strong>Bệnh mạn tính và đau kéo dài.</strong> Đau khớp, bệnh tim, ung thư, và các bệnh làm giảm khả năng tự chăm sóc bản thân.</p>
  <p><strong>Suy giảm thính lực và thị lực.</strong> Nghe kém khiến người cao tuổi khó tham gia trò chuyện, dần dần tự rút lui khỏi các cuộc gặp gỡ.</p>
  <p><strong>Tác dụng phụ của thuốc.</strong> Một số thuốc điều trị huyết áp, corticosteroid, và một số thuốc khác có thể góp phần gây trầm cảm.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Gia đình có thể làm gì</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Điều nên làm</h3>
  <p><strong>Lắng nghe mà không vội khuyên.</strong> Điều người bệnh cần trước hết là cảm giác được hiểu, không phải lời khuyên phải vui lên.</p>
  <p><strong>Duy trì liên lạc đều đặn.</strong> Gọi điện thường xuyên vào giờ cố định tạo ra nhịp sinh hoạt để trông đợi.</p>
  <p><strong>Giữ họ tham gia hoạt động.</strong> Rủ đi cùng thay vì để họ tự quyết định đi hay không — người trầm cảm thường không có động lực khởi xướng.</p>
  <p><strong>Khuyến khích vận động.</strong> Đi bộ 20-30 phút mỗi ngày có bằng chứng cải thiện tâm trạng ở người cao tuổi.</p>
  <p><strong>Đưa đi khám như một việc bình thường.</strong> Đóng khung là kiểm tra sức khỏe tổng quát, không phải "đi khám tâm thần" — cách nói này quan trọng với thế hệ còn e ngại về sức khỏe tinh thần.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Điều nên tránh</h3>
  <p>Nói những câu phủ nhận cảm xúc: "có gì đâu mà buồn", "sướng thế còn kêu", "cố lên là được". Ép buộc phải vui vẻ. Bỏ qua vì nghĩ rồi sẽ tự hết. Và quan trọng nhất — đừng chờ đến khi tình trạng nặng mới đưa đi khám.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Điều trị và tiên lượng</h2>
  <p>Trầm cảm ở người cao tuổi đáp ứng tốt với điều trị. Phác đồ thường kết hợp thuốc và liệu pháp tâm lý, cùng với việc xử lý các yếu tố thể chất góp phần gây ra tình trạng.</p>
  <p>Điều gia đình cần biết: thuốc chống trầm cảm cần thời gian 4-6 tuần mới thấy hiệu quả rõ, và không được tự ý ngừng khi thấy đỡ. Đây là hai lý do phổ biến khiến việc điều trị thất bại — bỏ dở vì tưởng thuốc không tác dụng, hoặc ngừng sớm khi thấy khá lên.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Đồng hành cùng người cao tuổi</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Sự cô đơn là một trong những yếu tố góp phần vào trầm cảm ở tuổi già. Dịch vụ theo dõi sức khỏe tại nhà của ANTCARE mang đến sự hiện diện đều đặn và quan tâm thực chất.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Gọi 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Nhận tư vấn miễn phí
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Trầm cảm và sa sút trí tuệ ở người cao tuổi khác nhau thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Hai tình trạng này dễ nhầm lẫn vì đều gây giảm trí nhớ và tập trung. Khác biệt: trầm cảm thường khởi phát tương đối nhanh (vài tuần đến vài tháng) và người bệnh hay than phiền về trí nhớ kém của mình, trong khi sa sút trí tuệ tiến triển chậm trong nhiều năm và người bệnh thường không nhận ra hoặc giảm nhẹ vấn đề. Ngoài ra, trầm cảm có thể gây suy giảm nhận thức tạm thời và cải thiện khi được điều trị. Chỉ bác sĩ chuyên khoa mới phân biệt chính xác.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi có nên dùng thuốc chống trầm cảm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, khi bác sĩ chỉ định. Trầm cảm ở người cao tuổi đáp ứng tốt với điều trị. Tuy nhiên việc dùng thuốc cần thận trọng hơn ở người cao tuổi do tương tác với các thuốc khác đang dùng và tác dụng phụ như chóng mặt làm tăng nguy cơ ngã. Bác sĩ thường bắt đầu với liều thấp và tăng dần. Không tự ý mua thuốc chống trầm cảm hoặc dùng đơn của người khác.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Ngoài thuốc còn cách nào giúp người cao tuổi bị trầm cảm?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có nhiều biện pháp bổ trợ có bằng chứng: liệu pháp tâm lý (đặc biệt liệu pháp nhận thức hành vi), vận động thể chất đều đặn, duy trì kết nối xã hội, tiếp xúc ánh sáng tự nhiên, và giữ nếp sinh hoạt đều đặn. Ngoài ra cần kiểm tra và điều trị các bệnh thể chất góp phần gây trầm cảm như suy giáp, thiếu vitamin B12, đau mạn tính, hoặc tác dụng phụ của thuốc đang dùng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Gia đình nên nói gì khi bố mẹ có dấu hiệu trầm cảm?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nên lắng nghe mà không vội khuyên nhủ hay phủ nhận cảm xúc của họ. Tránh những câu như "có gì đâu mà buồn" hay "cố lên là được" — chúng khiến người bệnh cảm thấy không được hiểu. Thay vào đó, thừa nhận điều họ đang trải qua là thật và khó khăn, rồi nhẹ nhàng đề xuất đi khám như một việc chăm sóc sức khỏe bình thường, tương tự như khám huyết áp hay tiểu đường.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE – Kiến chăm tổ cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trầm cảm ở người cao tuổi: Dấu hiệu nhận biết và cách gia đình hỗ trợ đúng cách",
    "description": "Trầm cảm ở người cao tuổi thường bị nhầm với tính khí tuổi già. Nhận biết dấu hiệu, phân biệt với sa sút trí tuệ và cách gia đình đồng hành đúng cách.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 82,
  slug: "tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro",
  oldSlugs: [
    "tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro",
    "tram-cam-o-nguoi-cao-tuoi"
  ],
  title: "Trầm cảm ở người cao tuổi: Dấu hiệu nhận biết và cách gia đình hỗ trợ đúng cách",
  category: "Sức khỏe tinh thần",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Trầm cảm ở người cao tuổi thường bị nhầm với tính khí tuổi già. Nhận biết dấu hiệu, phân biệt với sa sút trí tuệ và cách gia đình đồng hành đúng cách.",
  excerpt: "Trầm cảm ở người cao tuổi thường bị nhầm với tính khí tuổi già. Nhận biết dấu hiệu, phân biệt với sa sút trí tuệ và cách gia đình đồng hành đúng cách.",
  image: "/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 82!');
