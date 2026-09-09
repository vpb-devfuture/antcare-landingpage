const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured && newsData.featured.id !== 71) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Thay đổi chế độ ăn trong mùa lạnh giúp người cao tuổi tăng sức đề kháng và giảm nguy cơ bệnh hô hấp. Thực phẩm nên ăn thêm và những sai lầm cần tránh.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Dinh dưỡng mùa lạnh cho người cao tuổi: Ăn gì để tăng đề kháng và giữ ấm cơ thể</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Giao mùa là thời điểm nhu cầu dinh dưỡng thay đổi. Những điều chỉnh đơn giản trong bữa ăn có thể giúp cơ thể người cao tuổi chống đỡ bệnh hô hấp tốt hơn mà không cần dùng đến thực phẩm chức năng đắt tiền.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Trong giao mùa và mùa lạnh, người cao tuổi nên tăng cường:
      <strong>protein từ cá, trứng, đậu</strong> (duy trì khối cơ và hệ miễn dịch),
      <strong>thực phẩm giàu vitamin C</strong> như ổi, cam, ớt chuông (hỗ trợ miễn dịch),
      <strong>thực phẩm giàu vitamin D và kẽm</strong>,
      và <strong>các món ăn ấm, dễ tiêu</strong> như cháo, canh, súp.
      Quan trọng nhất: uống đủ 1,5–2 lít nước mỗi ngày dù không cảm thấy khát — cảm giác khát
      giảm đi theo tuổi nhưng nhu cầu nước không giảm.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/vac-xin-mua-thu-dong-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Vắc xin mùa thu đông 2026: Người cao tuổi cần tiêm những loại nào và khi nào
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/benh-ho-hap-giao-mua-thang-9-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bệnh hô hấp giao mùa tháng 9: Những điều gia đình có người cao tuổi cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tại sao dinh dưỡng quan trọng hơn trong mùa lạnh</h2>
  <p>Thời tiết lạnh làm tăng nhu cầu năng lượng để duy trì thân nhiệt, trong khi nhiều người cao tuổi có xu hướng ăn ít hơn khi thời tiết thay đổi. Cộng thêm cảm giác khát giảm đi — người cao tuổi uống ít nước hơn mà không biết — dẫn đến mất nước nhẹ mạn tính, làm suy giảm miễn dịch và làm đặc dịch tiết đường hô hấp.</p>
  <p>Giao mùa cũng là thời điểm nhiều loại vi rút hoạt động mạnh. Hệ miễn dịch cần nguyên liệu từ thực phẩm để hoạt động — protein, vitamin C, vitamin D, kẽm, sắt. Thiếu bất kỳ yếu tố nào trong số này làm giảm khả năng chống lại nhiễm trùng.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm nên tăng cường trong giao mùa</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Protein chất lượng cao</h3>
  <p>Cá là lựa chọn tốt nhất — dễ tiêu, giàu protein và axit béo omega-3 có tác dụng chống viêm. Cá hồi, cá thu, cá trích, hoặc đơn giản hơn là cá thu biển và cá basa đều là nguồn tốt. Ăn cá ít nhất 2–3 lần mỗi tuần.</p>
  <p>Trứng — đặc biệt hữu ích vì dễ chế biến theo nhiều cách, giàu protein, vitamin D và kẽm. Người cao tuổi khỏe mạnh có thể ăn 1 quả trứng mỗi ngày nếu không có chống chỉ định về cholesterol từ bác sĩ.</p>
  <p>Đậu các loại — đậu phụ, đậu đỏ, đậu xanh. Nguồn protein thực vật dễ tiêu, phù hợp với người cao tuổi tiêu hóa kém.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Thực phẩm giàu vitamin C</h3>
  <p>Vitamin C hỗ trợ sản xuất tế bào miễn dịch và rút ngắn thời gian mắc cảm cúm. Nguồn tốt và phổ biến tại Việt Nam: ổi (hàm lượng vitamin C cao hơn cam), ớt chuông, cải xanh, bông cải xanh, cam và bưởi.</p>
  <p>Lưu ý: nấu chín làm mất vitamin C đáng kể. Ăn sống hoặc hấp thay vì luộc lâu để giữ lại nhiều vitamin C hơn.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Gừng, tỏi và hành</h3>
  <p>Ba nguyên liệu này có trong bếp Việt và có bằng chứng về tác dụng kháng khuẩn và hỗ trợ miễn dịch. Gừng có thêm tác dụng giảm buồn nôn và giữ ấm — đặc biệt hữu ích khi thời tiết chuyển lạnh. Dùng như gia vị thường xuyên trong nấu ăn là đủ, không cần dùng dưới dạng thực phẩm chức năng đắt tiền.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Súp và cháo — không chỉ là đồ ăn khi bệnh</h3>
  <p>Các món ăn ấm, nhiều nước như súp xương, cháo cá, canh rau có nhiều ưu điểm với người cao tuổi trong mùa lạnh: giúp tăng lượng nước nạp vào, dễ nuốt với người răng yếu, dễ tiêu, và giữ ấm đường hô hấp. Đây là bữa ăn chính đủ dinh dưỡng, không chỉ dùng khi ốm.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Những sai lầm cần tránh</h2>
  <p><strong>Uống ít nước vì trời lạnh không khát.</strong> Mùa lạnh cơ thể vẫn mất nước qua hơi thở, da và nước tiểu, nhưng cảm giác khát giảm đi. Người cao tuổi cần đặt lịch uống nước chủ động thay vì chờ khát.</p>
  <p><strong>Ăn quá nhiều đồ mặn và chế biến sẵn.</strong> Mùa lạnh nhiều gia đình tăng tiêu thụ đồ hộp, dưa muối, xúc xích — những thứ có hàm lượng muối và chất bảo quản cao. Đây là thói quen làm tăng huyết áp và gây hại cho thận.</p>
  <p><strong>Bỏ bữa hoặc ăn ít vì không đói.</strong> Chán ăn trong mùa lạnh đôi khi là dấu hiệu của bệnh, không phải tự nhiên. Nếu bố mẹ bỏ bữa nhiều hơn bình thường trong hai tuần liên tiếp, đây là điều cần để ý và hỏi thêm.</p>
  <p><strong>Dùng quá nhiều thực phẩm chức năng mà không có chỉ định.</strong> Nhiều loại thực phẩm chức năng có thể tương tác với thuốc điều trị bệnh mạn tính. Trước khi cho bố mẹ dùng bất kỳ sản phẩm nào, nên hỏi bác sĩ điều trị.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Bố mẹ ăn uống và sức khỏe đang thế nào?</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đến tận nhà kiểm tra các chỉ số sức khỏe, quan sát sinh hoạt và gửi báo cáo về cho gia đình. Từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi cần bao nhiêu protein mỗi ngày?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Người cao tuổi cần nhiều protein hơn người trẻ tính theo cân nặng, vì cơ thể hấp thu và sử dụng protein kém hiệu quả hơn. Khuyến nghị chung là khoảng 1,0–1,2g protein/kg thể trọng mỗi ngày, cao hơn mức 0,8g của người trẻ. Với người cao tuổi 50kg, cần khoảng 50–60g protein mỗi ngày — tương đương 2 quả trứng cộng với một miếng cá hoặc thịt 100g và một bát đậu phụ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi có cần uống thêm vitamin D không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nhiều người cao tuổi thiếu vitamin D do ít ra ngoài, da sản xuất vitamin D kém hiệu quả hơn, và chế độ ăn thường không đủ. Thiếu vitamin D liên quan đến yếu cơ, dễ gãy xương và suy giảm miễn dịch. Tuy nhiên, không nên tự uống vitamin D liều cao mà không có chỉ định, vì thừa vitamin D cũng gây hại. Xét nghiệm vitamin D máu và bổ sung theo chỉ định của bác sĩ là cách an toàn nhất.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi có tăng huyết áp thì ăn muối thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Giảm muối xuống dưới 5g/ngày (khoảng 1 thìa cà phê) là khuyến nghị chung cho người tăng huyết áp. Trên thực tế, nguồn muối chính không phải từ muối nêm khi nấu mà từ nước mắm, nước tương, đồ ăn chế biến sẵn, dưa muối và đồ hộp. Người có tăng huyết áp nên hạn chế các nguồn này trước tiên. Với người cao tuổi, việc thay đổi khẩu vị quá đột ngột dễ khiến ăn ít đi — nên điều chỉnh dần dần thay vì giảm muối đột ngột.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Uống nước nóng hay nguội tốt hơn cho người cao tuổi?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cả hai đều được, miễn là uống đủ lượng. Nước ấm hoặc nóng vừa phải dễ uống hơn trong mùa lạnh và giúp giữ ấm đường hô hấp. Tuy nhiên tránh uống nước quá nóng (trên 65°C) vì gây bỏng niêm mạc và liên quan đến tăng nguy cơ ung thư thực quản theo các nghiên cứu dài hạn. Nước có thể pha thêm gừng, chanh hoặc mật ong nếu không có chống chỉ định.</p>
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
    "headline": "Dinh dưỡng mùa lạnh cho người cao tuổi: Ăn gì để tăng đề kháng và giữ ấm cơ thể",
    "description": "Thay đổi chế độ ăn trong mùa lạnh giúp người cao tuổi tăng sức đề kháng và giảm nguy cơ bệnh hô hấp. Thực phẩm nên ăn thêm và những sai lầm cần tránh.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 71,
  slug: 'dinh-duong-mua-lanh-cho-nguoi-cao-tuoi',
  oldSlugs: ['dinh-duong-mua-lanh-cho-nguoi-cao-tuoi'],
  title: 'Dinh dưỡng mùa lạnh cho người cao tuổi: Ăn gì để tăng đề kháng và giữ ấm cơ thể',
  category: 'Sức khỏe người cao tuổi',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/dinh-duong-mua-lanh-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 71 to news.json!');
