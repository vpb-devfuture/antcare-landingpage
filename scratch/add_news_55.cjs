const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if it exists and hasn't been moved yet
if (newsData.featured && newsData.featured.id !== 55) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Người cao tuổi thường giấu bệnh vì không muốn làm phiền con cái. Nhận biết 9 dấu hiệu âm thầm và cách hỏi thăm để bố mẹ chịu nói thật.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Bố mẹ luôn nói "vẫn khỏe": 9 dấu hiệu người cao tuổi thường giấu con cái</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Câu trả lời "bố mẹ không sao" gần như là phản xạ. Bài viết này chỉ ra những dấu hiệu bạn có thể tự quan sát, và cách hỏi để nhận được câu trả lời thật.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX (AEO Snippet Target) -->
  <div class="answer" style="background: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.4rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem;">Trả lời nhanh</span>
    <p style="margin-bottom: 0;">Người cao tuổi thường giấu tình trạng sức khỏe vì ba lý do chính: <strong>không muốn làm phiền con cái, sợ tốn kém, và sợ mất quyền tự chủ</strong> (lo bị đưa vào viện dưỡng lão hoặc bị cấm làm việc mình thích). Thay vì hỏi "bố mẹ có khỏe không" — câu này gần như luôn nhận được câu trả lời "khỏe" — gia đình nên quan sát các thay đổi cụ thể trong sinh hoạt hằng ngày: ăn uống, giấc ngủ, cân nặng, dáng đi, và mức độ tham gia các hoạt động thường lệ.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao câu hỏi "bố mẹ có khỏe không" hầu như vô dụng</h2>
  <p>Đây là câu hỏi mà mọi người con đều hỏi, và gần như luôn nhận được cùng một câu trả lời. Không phải bố mẹ nói dối. Vấn đề nằm ở chỗ câu hỏi quá rộng, và ở tuổi của họ, "khỏe" được hiểu theo một tiêu chuẩn đã hạ thấp: còn tự đi lại được, còn ăn được, chưa phải nằm viện — thế là khỏe.</p>
  <p>Bên cạnh đó là ba động cơ khiến người cao tuổi chủ động giảm nhẹ tình trạng của mình.</p>
  <p><strong>Không muốn làm phiền.</strong> Người lớn tuổi nhìn thấy con cái bận rộn, và họ hiểu rằng nói ra một triệu chứng nghĩa là con phải xin nghỉ làm, phải đi lại, phải chi tiền. Nhiều người chọn im lặng như một cách thương con.</p>
  <p><strong>Sợ tốn kém.</strong> Tâm lý tiết kiệm ăn sâu ở thế hệ này. Đi khám nghĩa là tốn tiền, mà tiền đó "để dành cho các cháu thì hơn".</p>
  <p><strong>Sợ mất quyền tự chủ.</strong> Đây là lý do ít được nói tới nhưng mạnh nhất. Người cao tuổi lo rằng khai báo bệnh sẽ dẫn tới việc bị con cái quản lý chặt hơn: không cho đi xe máy nữa, không cho ở một mình nữa, hoặc bị bàn chuyện đưa vào viện dưỡng lão. Giữ im lặng là cách họ giữ lại quyền quyết định cuộc sống của mình.</p>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/5-noi-so-vo-hinh-khien-nguoi-cao-tuoi-ngai-di-benh-vien" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 Nỗi Sợ Vô Hình Khiến Người Cao Tuổi Ngại Đi Bệnh Viện: Con Cái Cần Thấu Hiểu Để Đồng Hành Đúng Cách
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/vien-duong-lao-giup-viec-hay-cham-soc-tai-gia" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện Dưỡng Lão, Người Giúp Việc Hay Chăm Sóc Tại Gia Theo Giờ: Đâu Là Lựa Chọn Đúng Cho Bố Mẹ?
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Chín dấu hiệu nên quan sát</h2>
  <p>Vì hỏi trực tiếp ít hiệu quả, cách tốt hơn là quan sát. Những thay đổi dưới đây thường xuất hiện trước khi có triệu chứng rõ ràng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">1. Thay đổi trong việc ăn uống</h3>
  <p>Ăn ít đi, bỏ bữa, hoặc chuyển sang ăn toàn đồ mềm và nhạt. Nguyên nhân có thể đơn giản là răng đau, nhưng cũng có thể là dấu hiệu của vấn đề tiêu hóa, tác dụng phụ của thuốc, hoặc trầm cảm ở người cao tuổi.</p>
  <p>Dấu hiệu dễ nhận: tủ lạnh còn nguyên đồ ăn con mua từ tuần trước; nồi cơm nấu ít hơn hẳn; ông bà nói "ăn rồi" nhưng bát đũa chưa dùng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">2. Sụt cân không chủ đích</h3>
  <p>Quần áo rộng ra, thắt lưng phải thắt sâu thêm một nấc. Đây là dấu hiệu quan trọng và thường bị bỏ qua vì diễn ra từ từ. Nếu bạn chỉ gặp bố mẹ vài tuần một lần, sự thay đổi lại dễ nhận thấy hơn so với người sống cùng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">3. Giấc ngủ thay đổi</h3>
  <p>Khó vào giấc, dậy nhiều lần trong đêm, hoặc ngược lại — ngủ nhiều bất thường vào ban ngày. Ngủ ngày nhiều có thể liên quan đến thiếu oxy khi ngủ, tác dụng của thuốc, hoặc tình trạng trầm cảm.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">4. Dáng đi và thăng bằng</h3>
  <p>Đi chậm hơn, bước ngắn lại, bám vào tường hoặc đồ đạc khi di chuyển, ngần ngại khi bước xuống bậc. Đây là những dấu hiệu cảnh báo nguy cơ té ngã — nguyên nhân hàng đầu gây chấn thương nghiêm trọng ở người cao tuổi Việt Nam.</p>
  <p>Nhiều người cao tuổi đã từng ngã nhưng giấu con, vì sợ bị cấm đi lại. Nếu thấy có vết bầm lạ, hãy hỏi cụ thể chứ đừng bỏ qua.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">5. Thu hẹp hoạt động thường ngày</h3>
  <p>Trước hay đi chợ, đi bộ buổi sáng, sang nhà hàng xóm chơi, giờ ở nhà nhiều hơn. Câu giải thích thường là "ngại đi" hoặc "trời nắng quá". Nhưng việc tự thu hẹp phạm vi sinh hoạt thường phản ánh một khó khăn cụ thể: đau khớp, chóng mặt, sợ ngã, hoặc không tự tin về trí nhớ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">6. Vệ sinh cá nhân và nhà cửa kém đi</h3>
  <p>Quần áo không thay thường xuyên, nhà cửa bừa hơn trước, bát đũa để lâu. Ở người vốn ngăn nắp, đây là dấu hiệu đáng chú ý — có thể do thể lực giảm, do trầm cảm, hoặc do suy giảm nhận thức.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">7. Uống thuốc không đều</h3>
  <p>Kiểm tra vỉ thuốc là cách đơn giản và hiệu quả. Nếu số viên còn lại không khớp với số ngày đã trôi qua, nghĩa là ông bà đang quên uống, hoặc tự ý bỏ thuốc vì cảm thấy đã khỏe, hoặc vì thuốc gây khó chịu.</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">8. Thay đổi tâm trạng và tính cách</h3>
  <p>Ít nói hơn, cáu gắt hơn, hay lo lắng, mất hứng thú với những việc trước đây thích làm. Trầm cảm ở người cao tuổi rất phổ biến nhưng ít được nhận diện, vì thường bị coi là "tính khí người già".</p>

  <h3 style="font-weight: 700; color: #4f2d7f;">9. Trí nhớ và khả năng xử lý việc quen thuộc</h3>
  <p>Như đã nói ở phần câu hỏi thường gặp, quên vặt là bình thường. Điều cần chú ý là khi việc quên bắt đầu ảnh hưởng đến sinh hoạt: nấu món quen mà quên bước, ra khỏi nhà rồi không nhớ đường về, gọi nhầm tên con cháu một cách lặp lại.</p>

  <div class="note" style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #ffffff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span class="lbl" style="font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">Một cách quan sát hiệu quả cho người ở xa</span>
    <p style="margin-bottom: 0;">Gọi video thay vì gọi thoại, và gọi vào giờ sinh hoạt bình thường chứ không phải giờ đã hẹn trước. Qua màn hình bạn thấy được sắc mặt, dáng ngồi, tình trạng nhà cửa — những thứ giọng nói che được nhưng hình ảnh thì không.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Cách hỏi để bố mẹ chịu nói thật</h2>
  <p>Thay đổi cách đặt câu hỏi tạo ra khác biệt lớn.</p>
  <p><strong>Hỏi cụ thể thay vì hỏi chung.</strong> "Mẹ có khỏe không" dễ trả lời qua loa. "Hôm nay mẹ ăn được mấy bát cơm?" thì khó. "Đêm qua bố dậy mấy lần?" cũng vậy.</p>
  <p><strong>Hỏi về gần đây, không hỏi về tổng thể.</strong> "Tuần này mẹ có đi chợ như mọi khi không?" cho thông tin tốt hơn "dạo này mẹ thế nào".</p>
  <p><strong>Đừng phản ứng quá mạnh khi nghe tin xấu.</strong> Nếu lần đầu bố mẹ nói ra một triệu chứng mà bạn hoảng hốt, trách móc, hoặc lập tức đòi đưa đi viện, lần sau họ sẽ không nói nữa. Phản ứng bình tĩnh là điều kiện để có lần sau.</p>
  <p><strong>Cam kết về quyền tự chủ.</strong> Nói rõ rằng việc đi khám không đồng nghĩa với việc bố mẹ sẽ bị cấm đoán điều gì. Với nhiều người cao tuổi, đây chính là nỗi lo lớn nhất đang khiến họ im lặng.</p>
  <p><strong>Hỏi qua người thứ ba.</strong> Bố mẹ thường nói thật với hàng xóm, với bạn cùng tập thể dục, hoặc với người chăm sóc hơn là với con cái — vì với những người này họ không phải giữ hình ảnh của người còn khỏe mạnh.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Khi khoảng cách là trở ngại lớn nhất</h2>
  <p>Với những gia đình có con cái ở tỉnh khác hoặc ở nước ngoài, tất cả những cách quan sát trên đều khó áp dụng. Bạn không nhìn thấy tủ lạnh, không đếm được vỉ thuốc, không quan sát được dáng đi.</p>
  <p>Đó là lý do dịch vụ theo dõi sức khỏe tại nhà tồn tại: không phải để thay thế con cái, mà để làm đôi mắt cho con cái ở xa. Mỗi buổi đến nhà, nhân viên đo các chỉ số, quan sát những thay đổi trong sinh hoạt và gửi báo cáo về gia đình — để câu "bố mẹ vẫn khỏe" được kiểm chứng bằng thông tin cụ thể.</p>

  <!-- CTA DỊCH VỤ TRỢ LÝ THEO DÕI SỨC KHỎE - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #f8fafc; border-left: 4px solid #f97316; padding: 22px; margin: 35px 0; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0f172a; font-size: 1.25rem; font-weight: 700;">Có người quan sát giúp bạn mỗi tuần</h3>
    <p style="margin-bottom: 12px; color: #334155; line-height: 1.6;">Nhân viên ANTCARE đến nhà theo lịch, ghi nhận chỉ số và những thay đổi trong sinh hoạt, gửi báo cáo về cho gia đình. Bạn biết tình trạng thật của bố mẹ, kể cả khi ở xa.</p>
    <p style="margin-bottom: 0; color: #0f172a; font-weight: 500;">
      <strong>Hotline:</strong> <a href="tel:0969032360" style="color: #f97316; text-decoration: none; font-weight: bold;">0969 032 360</a> · <strong>Website:</strong> <a href="https://antcare.vn" target="_blank" rel="noopener noreferrer" style="color: #0284c7; text-decoration: underline;">antcare.vn</a>
    </p>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Vì sao người cao tuổi hay giấu bệnh?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Ba lý do phổ biến nhất là: không muốn con cái lo lắng và tốn thời gian chăm sóc; ngại chi phí khám chữa bệnh; và lo sợ mất quyền tự chủ, ví dụ bị con cái cấm đi lại, cấm làm việc nhà, hoặc bị đưa vào cơ sở dưỡng lão. Ngoài ra, nhiều người còn cho rằng đau nhức, mệt mỏi là chuyện đương nhiên của tuổi già nên không đáng nhắc tới.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên hỏi thăm bố mẹ thế nào để nhận được câu trả lời thật?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Thay vì hỏi chung chung, hãy hỏi về hành vi cụ thể và gần đây: hôm nay mẹ ăn được mấy bát cơm, đêm qua bố ngủ có dậy nhiều lần không, tuần này mẹ có đi chợ như mọi khi không. Câu hỏi cụ thể khó trả lời qua loa hơn, và nếu có thay đổi thì thay đổi sẽ lộ ra trong chi tiết.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Sụt cân ở người già có phải chuyện bình thường không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không. Sụt cân không chủ đích từ 5% trọng lượng cơ thể trở lên trong 6 tháng là dấu hiệu cần được bác sĩ đánh giá. Nguyên nhân có thể từ nhiều phía: vấn đề răng miệng gây khó ăn, tác dụng phụ của thuốc, trầm cảm, rối loạn tiêu hóa, hoặc bệnh lý nghiêm trọng hơn. Cân định kỳ mỗi tuần là cách theo dõi đơn giản nhất.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bố mẹ hay quên có phải dấu hiệu của sa sút trí tuệ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Quên tên người, quên chỗ để đồ rồi nhớ lại sau là hiện tượng lão hóa thông thường. Điều đáng lưu tâm hơn là khi việc quên ảnh hưởng đến sinh hoạt: quên cách nấu món quen thuộc, lạc đường ở nơi rất quen, quên đã uống thuốc rồi lại uống tiếp, hoặc thay đổi tính cách rõ rệt. Những biểu hiện này cần được bác sĩ chuyên khoa đánh giá, không nên tự kết luận.</p>
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
    "headline": "Bố mẹ luôn nói \"vẫn khỏe\": 9 dấu hiệu người cao tuổi thường giấu con cái",
    "description": "Người cao tuổi thường giấu bệnh vì không muốn làm phiền con cái. Nhận biết 9 dấu hiệu âm thầm và cách hỏi thăm để bố mẹ chịu nói thật.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 55,
  slug: 'bo-me-noi-van-khoe-dau-hieu-can-chu-y',
  oldSlugs: ['bo-me-luon-noi-van-khoe-9-dau-hieu-nguoi-cao-tuoi-thuong-giau-con-cai', 'bo-me-noi-van-khoe-dau-hieu-can-chu-y'],
  title: 'Bố mẹ luôn nói "vẫn khỏe": 9 dấu hiệu người cao tuổi thường giấu con cái',
  category: 'Tâm lý Lão khoa & Chăm sóc Gia đình',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/bo-me-noi-van-khoe-dau-hieu-can-chu-y.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 55 to news.json!');
