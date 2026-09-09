const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 64) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Tháng 9 là thời điểm bệnh hô hấp tăng mạnh tại Hà Nội. Những dấu hiệu cần đưa người cao tuổi đi khám ngay và cách phòng ngừa hiệu quả.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Cuối tháng 8 sang tháng 9, thời tiết Hà Nội thay đổi thất thường — đây là giai đoạn bệnh hô hấp tăng cao nhất trong năm, và người cao tuổi là nhóm dễ diễn tiến nặng nhất.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Trong giai đoạn giao mùa tháng 8–9, các bệnh hô hấp phổ biến ở người cao tuổi gồm
      <strong>cúm mùa, viêm phổi, hen suyễn bùng phát và Covid-19</strong>.
      Người cao tuổi có bệnh nền tim mạch, đái tháo đường hoặc bệnh phổi mạn tính thuộc nhóm
      nguy cơ cao diễn tiến nặng. Cần đưa đi khám ngay khi xuất hiện:
      sốt trên 38,5°C kéo dài hơn 2 ngày, khó thở khi nghỉ ngơi, môi tím tái,
      hoặc lú lẫn bất thường.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/dich-vu-dong-hanh-kham-benh-la-gi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dịch vụ đồng hành khám bệnh là gì và khi nào gia đình nên dùng
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          7 rủi ro khi để người cao tuổi đi khám bệnh một mình
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tháng 9 — thời điểm nguy cơ cao nhất trong năm với người cao tuổi</h2>
  <p>Theo CDC Hà Nội, cuối tháng 7 đến tháng 9 hằng năm là giai đoạn nhiều loại virus đường hô hấp lưu hành đồng thời — cúm A, cúm B, Adenovirus, và Covid-19 cùng hoạt động trong cộng đồng. Thời tiết chuyển từ nóng sang mát, độ ẩm cao, biên độ nhiệt ngày đêm chênh lớn tạo điều kiện thuận lợi cho các virus này sinh sôi và lây lan.</p>
  <p>Với người cao tuổi, đây là giai đoạn đặc biệt cần chú ý vì ba lý do cụ thể: sức đề kháng giảm theo tuổi, nhiều người có bệnh nền làm tăng nguy cơ biến chứng, và triệu chứng thường mờ nhạt hơn nên dễ phát hiện muộn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bốn bệnh hô hấp phổ biến nhất giao mùa tháng 9</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">1. Cúm mùa</h3>
  <p>Cúm mùa do virus influenza gây ra, lây qua đường hô hấp khi ho, hắt hơi hoặc tiếp xúc bề mặt nhiễm virus. Ở người cao tuổi, cúm có thể diễn tiến nhanh thành viêm phổi — biến chứng nghiêm trọng nhất và là nguyên nhân tử vong hàng đầu liên quan đến cúm.</p>
  <p>Dấu hiệu nhận biết: sốt cao đột ngột, đau nhức toàn thân, đau đầu, mệt lả, ho khan. Ở người cao tuổi, sốt có thể không cao rõ ràng nhưng vẫn có thể diễn tiến nặng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">2. Viêm phổi</h3>
  <p>Viêm phổi ở người cao tuổi có thể do cúm biến chứng, do vi khuẩn phế cầu, hoặc do các tác nhân khác. Đây là bệnh nghiêm trọng với tỷ lệ nhập viện và tử vong cao ở nhóm từ 70 tuổi trở lên, đặc biệt người có bệnh tim mạch hoặc bệnh phổi mạn tính.</p>
  <p>Dấu hiệu đặc trưng: sốt, ho có đờm, đau ngực khi thở sâu, khó thở, mệt nhiều. Tuy nhiên ở người cao tuổi triệu chứng thường không điển hình: có thể chỉ lú lẫn hơn thường ngày, ăn kém, mệt bất thường mà không sốt rõ ràng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">3. Hen suyễn bùng phát</h3>
  <p>Nhiễm virus đường hô hấp là tác nhân phổ biến nhất gây bùng phát hen suyễn. Tháng 9 là thời điểm hen suyễn hay bùng phát nhất trong năm. Người cao tuổi có hen suyễn cần chuẩn bị sẵn thuốc cắt cơn và biết rõ khi nào cần đến cơ sở y tế.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">4. Đợt cấp bệnh phổi tắc nghẽn mạn tính (COPD)</h3>
  <p>Người cao tuổi có tiền sử hút thuốc hoặc tiếp xúc khói bụi lâu dài thường có COPD — nhiều người không biết mình mắc bệnh. Giao mùa là thời điểm hay xảy ra đợt cấp: ho tăng, đờm đặc và nhiều hơn, khó thở tăng. Đợt cấp COPD cần được điều trị sớm để tránh suy hô hấp.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu cần đưa đi khám trong ngày</h2>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Sốt trên 38,5°C kéo dài hơn 2 ngày không hạ dù đã dùng hạ sốt
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Ho tăng nhiều, đờm đổi màu vàng hoặc xanh
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Khó thở khi vận động nhẹ hoặc khi leo một tầng cầu thang
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      SpO2 dưới 94% nếu có máy đo tại nhà
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Mệt lả, không muốn dậy khỏi giường hơn một ngày
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Ăn kém đột ngột kèm theo lú lẫn hơn thường ngày
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Đặc điểm quan trọng cần nhớ</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Ở người cao tuổi, nhiễm trùng hô hấp nặng đôi khi <strong>không sốt cao</strong>. Lú lẫn đột ngột, mệt bất thường, ăn kém, hoặc thay đổi hành vi có thể là dấu hiệu duy nhất của viêm phổi hoặc nhiễm trùng nặng. Gia đình không nên chỉ dựa vào nhiệt kế để đánh giá mức độ bệnh.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phòng ngừa cho người cao tuổi trong giai đoạn giao mùa</h2>
  <p><strong>Tiêm vắc xin cúm hằng năm</strong> là biện pháp hiệu quả nhất. Thời điểm lý tưởng là tháng 9–10, trước khi mùa dịch bắt đầu cao điểm. Người trên 65 tuổi nên tiêm cúm kết hợp với vắc xin phế cầu nếu chưa tiêm.</p>
  <p><strong>Giữ ấm vùng cổ ngực</strong> khi ra ngoài buổi sáng sớm và tối. Biên độ nhiệt ngày đêm tháng 9 tại Hà Nội có thể chênh 8–10 độ, đây là yếu tố kích hoạt cơn hen và làm suy giảm sức đề kháng đường hô hấp.</p>
  <p><strong>Hạn chế đến nơi đông người</strong> khi trong nhà có người đang bị cúm hoặc ho sốt. Đeo khẩu trang khi đến bệnh viện, siêu thị hoặc phương tiện công cộng.</p>
  <p><strong>Duy trì độ ẩm phòng ngủ</strong> trong khoảng 50–60%. Phòng quá khô khiến niêm mạc đường hô hấp mất đi lớp bảo vệ tự nhiên, tạo điều kiện cho virus xâm nhập.</p>
  <p><strong>Đảm bảo uống đủ nước</strong> — người cao tuổi thường ít cảm thấy khát nên dễ thiếu nước mà không biết. Dịch nhầy đường hô hấp loãng hơn khi đủ nước, giúp tống dịch tiết ra ngoài hiệu quả hơn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi người cao tuổi sống một mình hoặc con cái ở xa</h2>
  <p>Giao mùa là thời điểm gia đình nên tăng tần suất liên lạc với bố mẹ. Thay vì hỏi chung "bố mẹ có khỏe không", hỏi cụ thể hơn: hôm nay ăn được mấy bát, đêm qua có ho nhiều không, sáng nay thấy người thế nào.</p>
  <p>Với người cao tuổi có bệnh nền hô hấp, tim mạch hoặc đái tháo đường, giai đoạn này nên có lịch đo SpO2 và huyết áp định kỳ tại nhà — hai chỉ số này thay đổi sớm nhất khi có vấn đề hô hấp hoặc tim mạch, và có thể phát hiện nguy cơ trước khi triệu chứng rõ ràng.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ có lịch khám hô hấp sắp tới?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón tận nhà, làm thủ tục và ghi lại đầy đủ kết quả khám gửi về cho gia đình. Từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Vì sao người cao tuổi dễ bị bệnh hô hấp nặng hơn người trẻ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Hệ miễn dịch suy giảm theo tuổi khiến cơ thể phản ứng chậm hơn với tác nhân gây bệnh. Phổi của người cao tuổi cũng kém đàn hồi hơn, dung tích phổi giảm, và phản xạ ho để tống dịch tiết ra ngoài yếu đi. Nếu có thêm bệnh nền như tăng huyết áp, đái tháo đường hay suy tim, nguy cơ viêm phổi và suy hô hấp tăng cao rõ rệt so với người trẻ cùng bị cúm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Hen suyễn ở người cao tuổi có khác với người trẻ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Ở người cao tuổi, hen suyễn thường ít có cơn khò khè điển hình, thay vào đó chủ yếu biểu hiện bằng khó thở, ho khan kéo dài hoặc tức ngực khi thay đổi thời tiết. Vì triệu chứng không điển hình nên dễ bị bỏ qua hoặc nhầm với suy tim. Giao mùa tháng 8-9 là thời điểm hen suyễn hay bùng phát nhất do nhiễm virus đường hô hấp tăng cao trong cộng đồng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tiêm vắc xin cúm có cần thiết cho người cao tuổi không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và đây là biện pháp phòng ngừa hiệu quả nhất. Người từ 65 tuổi trở lên được khuyến nghị tiêm cúm hằng năm vào đầu mùa thu. Tiêm vắc xin không ngăn được 100% ca nhiễm nhưng giảm đáng kể nguy cơ biến chứng nặng và nhập viện. Người có bệnh nền tim mạch, đái tháo đường hoặc bệnh phổi mạn tính được ưu tiên tiêm sớm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Dấu hiệu nào của bệnh hô hấp cần đưa người cao tuổi đi cấp cứu ngay?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cần gọi cấp cứu 115 hoặc đưa đến bệnh viện ngay khi xuất hiện: khó thở nặng không thể nói thành câu, môi hoặc đầu ngón tay tím tái, nhịp thở trên 30 lần/phút khi nghỉ, SpO2 dưới 92% nếu có máy đo, lú lẫn hoặc mất ý thức, sốt cao kèm rét run mạnh. Những dấu hiệu này cho thấy có thể đang thiếu oxy và cần can thiệp y tế khẩn cấp.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết",
    "description": "Tháng 9 là thời điểm bệnh hô hấp tăng mạnh tại Hà Nội. Những dấu hiệu cần đưa người cao tuổi đi khám ngay và cách phòng ngừa hiệu quả.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 64,
  slug: 'benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi',
  oldSlugs: ['benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi'],
  title: 'Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết',
  category: 'Chăm sóc sức khỏe',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 64 to news.json!');
