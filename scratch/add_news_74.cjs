const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\tieu_duong_purple_uniform_1788920853108.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/che-do-an-cho-nguoi-cao-huyet-ap.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chế độ ăn cho người cao huyết áp: Hướng dẫn thực tế cho bữa ăn hằng ngày</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Thay đổi chế độ ăn có thể giảm huyết áp tâm thu 8–14 mmHg — tương đương một số loại thuốc huyết áp. Không cần ăn nhạt hoàn toàn, chỉ cần ăn đúng.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Người tăng huyết áp nên ăn theo nguyên tắc DASH:
      <strong>tăng rau xanh, trái cây, ngũ cốc nguyên hạt, cá và các loại đậu;
      giảm muối xuống dưới 5g/ngày; hạn chế thịt đỏ, đồ chế biến sẵn và rượu bia</strong>.
      Ba thực phẩm có bằng chứng giảm huyết áp rõ nhất: chuối (kali cao),
      cá béo (omega-3) và các loại đậu (magie và chất xơ).
      Nguồn muối ẩn cần chú ý nhất: nước mắm, nước tương, đồ hộp và dưa muối —
      không phải muối nêm khi nấu.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/tang-huyet-ap-nguoi-cao-tuoi-nhung-dieu-can-biet" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tăng huyết áp ở người cao tuổi: Mục tiêu điều trị và 5 sai lầm phổ biến cần tránh
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dinh-duong-mua-lanh-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dinh dưỡng mùa lạnh cho người cao tuổi: Ăn gì để tăng đề kháng và giữ ấm cơ thể
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tại sao chế độ ăn quan trọng với người tăng huyết áp</h2>
  <p>Tăng huyết áp chịu ảnh hưởng trực tiếp từ những gì chúng ta ăn mỗi ngày — đặc biệt là lượng muối nạp vào, tỷ lệ kali so với natri trong chế độ ăn, và mức độ viêm mạn tính do chế độ ăn không lành mạnh gây ra.</p>
  <p>Chế độ ăn DASH (Dietary Approaches to Stop Hypertension) được nghiên cứu và chứng minh giảm huyết áp tâm thu 8–14 mmHg ở người tăng huyết áp — mức giảm tương đương một số thuốc huyết áp liều thấp. Áp dụng kết hợp với thuốc giúp kiểm soát huyết áp tốt hơn và đôi khi giảm được liều thuốc (luôn theo chỉ định bác sĩ).</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nguyên tắc DASH — thực tế với bữa ăn Việt</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Tăng cường</h3>
  <p><strong>Rau xanh và trái cây</strong> — mục tiêu 4–5 phần mỗi ngày. Một phần rau tươi là một bát nhỏ, một phần trái cây là một quả chuối hoặc một múi bưởi. Rau xanh đậm như rau muống, cải xanh, bó xôi giàu kali — khoáng chất giúp thận thải natri ra ngoài.</p>
  <p><strong>Cá béo</strong> 2–3 lần mỗi tuần. Cá thu, cá hồi, cá trích giàu omega-3 có tác dụng giảm viêm và hỗ trợ hạ huyết áp. Cá basa và cá tra phổ biến hơn tại Việt Nam cũng là nguồn protein tốt dù ít omega-3 hơn cá biển.</p>
  <p><strong>Các loại đậu</strong> — đậu đỏ, đậu đen, đậu xanh, đậu phụ. Giàu magie và chất xơ, hai yếu tố hỗ trợ hạ huyết áp và ổn định mạch máu.</p>
  <p><strong>Ngũ cốc nguyên hạt</strong> — gạo lứt, yến mạch, bánh mì ngũ cốc thay một phần cơm trắng. Chất xơ trong ngũ cốc nguyên hạt giúp giảm hấp thu natri và ổn định đường huyết.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Hạn chế</h3>
  <p><strong>Muối — giới hạn 5g/ngày</strong> (khoảng 1 thìa cà phê). Đây là thay đổi quan trọng nhất và khó nhất với người Việt Nam quen ăn mặn.</p>
  <p>Điểm cần nhớ: <strong>nguồn muối ẩn chiếm phần lớn</strong> — không phải muối nêm khi nấu mà là:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Thực phẩm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Lượng muối ước tính</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1 muỗng canh nước mắm</td>
          <td style="padding: 0.8rem 1rem;">~2,5g muối</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1 muỗng canh nước tương</td>
          <td style="padding: 0.8rem 1rem;">~1g muối</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1 bát phở (nước dùng)</td>
          <td style="padding: 0.8rem 1rem;">~3–4g muối</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1 gói mì tôm</td>
          <td style="padding: 0.8rem 1rem;">~2,5–3g muối</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">100g dưa cải muối</td>
          <td style="padding: 0.8rem 1rem;">~1,5–2g muối</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1 miếng chả lụa (50g)</td>
          <td style="padding: 0.8rem 1rem;">~0,8g muối</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p><strong>Thịt đỏ và thịt chế biến sẵn</strong> — xúc xích, lạp xưởng, thịt hộp. Không chỉ nhiều muối mà còn nhiều chất béo bão hòa làm cứng thành mạch.</p>
  <p><strong>Rượu bia</strong> — giới hạn dưới 1 đơn vị mỗi ngày với phụ nữ, 2 đơn vị với nam giới (1 đơn vị = 1 lon bia 330ml hoặc 1 ly rượu vang 150ml). Uống nhiều hơn mức này làm tăng huyết áp đáng kể.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực phẩm có bằng chứng giảm huyết áp tốt nhất</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Chuối và các quả giàu kali</h3>
  <p>Kali giúp thận thải natri, làm giảm áp lực lên thành mạch. Chuối tiêu, ổi, bơ, khoai lang và đậu đỏ là những nguồn kali tốt và phổ biến tại Việt Nam.</p>
  <p>Lưu ý: người có bệnh thận mạn tính cần hỏi bác sĩ trước khi tăng kali trong chế độ ăn, vì thận yếu có thể không thải kali đủ nhanh.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Củ cải đường</h3>
  <p>Chứa nitrate tự nhiên — cơ thể chuyển hóa thành nitric oxide giúp giãn mạch. Nghiên cứu cho thấy uống nước ép củ cải đường có thể giảm huyết áp tâm thu 3–5 mmHg trong vài giờ. Tại Việt Nam không phổ biến, nhưng rau cải xanh và cải bó xôi cũng chứa nitrate tự nhiên.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sữa ít béo và sữa chua không đường</h3>
  <p>Canxi và protein trong sữa có tác dụng hỗ trợ hạ huyết áp nhẹ. Sữa chua không đường còn có thêm lợi ích cho hệ vi sinh đường ruột, ảnh hưởng gián tiếp đến huyết áp.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thực đơn mẫu trong một ngày</h2>
  <p><strong>Bữa sáng:</strong> Cháo yến mạch nấu với sữa ít béo, ăn cùng một quả chuối. Hoặc: cơm gạo lứt với trứng luộc và rau xào ít muối.</p>
  <p><strong>Bữa trưa:</strong> Cơm gạo lứt, cá thu kho nhạt, canh rau ngót, đậu phụ hấp. Hạn chế nước mắm chấm — thay bằng chanh và ớt.</p>
  <p><strong>Bữa tối:</strong> Cháo đậu đỏ nấu nhạt, hoặc súp cá rau củ. Bữa tối nên nhẹ hơn bữa trưa.</p>
  <p><strong>Bữa phụ:</strong> Ổi, bưởi, hoặc sữa chua không đường.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Thay đổi chế độ ăn là bổ trợ quan trọng nhưng không thay thế thuốc điều trị đã được kê đơn. Không tự ý giảm hoặc ngừng thuốc dù huyết áp có cải thiện sau thay đổi chế độ ăn. Đây là quyết định của bác sĩ điều trị, không phải quyết định của gia đình hay người bệnh.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Năm sai lầm ăn uống phổ biến nhất</h2>
  <p><strong>1. Chỉ giảm muối nêm khi nấu mà bỏ qua muối ẩn.</strong> Như bảng phía trên cho thấy, một bát phở đã gần đủ lượng muối cả ngày.</p>
  <p><strong>2. Kiêng hoàn toàn một số thực phẩm không cần thiết.</strong> Trứng, thịt gà, cơm trắng không phải thực phẩm cần kiêng tuyệt đối — chỉ cần ăn đúng lượng và chế biến đúng cách.</p>
  <p><strong>3. Uống nhiều nước ép đóng hộp thay vì ăn trái cây.</strong> Nước ép đóng hộp thường thêm đường và ít chất xơ. Ăn trái cây nguyên múi tốt hơn uống nước ép.</p>
  <p><strong>4. Ăn nhạt đột ngột khiến ăn ít đi.</strong> Giảm muối quá nhanh làm bữa ăn mất ngon, người cao tuổi dễ bỏ bữa. Giảm dần trong 2–4 tuần giúp vị giác thích nghi và duy trì được lâu dài hơn.</p>
  <p><strong>5. Không tính đến tác dụng của thuốc lên chế độ ăn.</strong> Một số thuốc huyết áp (thuốc lợi tiểu giữ kali) làm tăng kali máu — ăn quá nhiều thực phẩm giàu kali khi dùng thuốc này có thể gây nguy hiểm. Hỏi bác sĩ về loại thuốc đang dùng và những thực phẩm cần chú ý.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Đồng hành chăm sóc sức khỏe bố mẹ</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Nhân viên ANTCARE – Kiến chăm tổ đến tận nhà đo huyết áp định kỳ, ghi nhận chỉ số theo thời gian và gửi báo cáo về cho gia đình. Chi phí từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao huyết áp có được ăn trứng không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Nghiên cứu hiện đại cho thấy trứng không làm tăng huyết áp ở người khỏe mạnh. Người tăng huyết áp đơn thuần (không có rối loạn mỡ máu) có thể ăn 1 quả trứng mỗi ngày. Điều quan trọng hơn là cách chế biến — trứng luộc hoặc hấp tốt hơn trứng chiên nhiều dầu hoặc ốp la. Nếu có kèm rối loạn cholesterol cao, nên hỏi bác sĩ về lượng trứng phù hợp.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Cà phê có làm tăng huyết áp không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cà phê làm tăng huyết áp tạm thời 3–5 mmHg trong 1–3 giờ sau uống ở người chưa quen. Người uống cà phê thường xuyên thường dung nạp được và ít bị ảnh hưởng hơn. Nếu đang điều trị tăng huyết áp, tốt nhất không uống cà phê trước khi đo huyết áp để kết quả chính xác hơn. Giới hạn an toàn chung là dưới 2 ly cà phê mỗi ngày, không uống buổi chiều tối.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tỏi có thực sự giúp hạ huyết áp không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có bằng chứng nhất định. Tỏi chứa allicin có tác dụng giãn mạch nhẹ. Các nghiên cứu tổng hợp cho thấy tỏi có thể giảm huyết áp tâm thu 2–5 mmHg. Đây là tác dụng bổ trợ nhỏ, không thay thế được thuốc hay các thay đổi lối sống lớn hơn. Cách dùng hiệu quả nhất là ăn tỏi tươi hoặc tỏi nghiền — đun nóng phá hủy một phần allicin.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Rau củ nào giúp hạ huyết áp tốt nhất?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Ba nhóm có bằng chứng tốt nhất: rau xanh đậm giàu kali như rau muống, cải bó xôi, rau ngót; củ cải đường chứa nitrate tự nhiên giúp giãn mạch; và hành tỏi chứa quercetin và allicin. Cần ăn đa dạng nhiều loại rau hơn là tập trung vào một loại. Rau luộc hoặc hấp giữ được nhiều kali hơn rau xào nhiều dầu muối.</p>
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
    "headline": "Chế độ ăn cho người cao huyết áp: Hướng dẫn thực tế cho bữa ăn hằng ngày",
    "description": "Hướng dẫn chế độ ăn DASH cho người tăng huyết áp: thực phẩm giảm huyết áp tự nhiên, lượng muối an toàn và 5 sai lầm ăn uống cần tránh.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 74,
  slug: "che-do-an-cho-nguoi-cao-huyet-ap",
  oldSlugs: [
    "che-do-an-cho-nguoi-cao-huyet-ap"
  ],
  title: "Chế độ ăn cho người cao huyết áp: Hướng dẫn thực tế cho bữa ăn hằng ngày",
  category: "Dinh dưỡng theo bệnh",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Hướng dẫn chế độ ăn DASH cho người tăng huyết áp: thực phẩm giảm huyết áp tự nhiên, lượng muối an toàn và 5 sai lầm ăn uống cần tránh.",
  excerpt: "Hướng dẫn chế độ ăn DASH cho người tăng huyết áp: thực phẩm giảm huyết áp tự nhiên, lượng muối an toàn và 5 sai lầm ăn uống cần tránh.",
  image: "/images/tin-tuc/che-do-an-cho-nguoi-cao-huyet-ap.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 74!');
