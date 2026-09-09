const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8066d9df-345d-4af8-ba9b-9cc4a50209fd\\tieu_duong_purple_uniform_1788920853108.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/che-do-an-cho-nguoi-tieu-duong-type-2.jpg');

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
    <h1 itemprop="headline">Chế độ ăn cho người tiểu đường type 2: Hướng dẫn thực tế cho bữa ăn Việt Nam</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Người tiểu đường không cần ăn kiêng khắc khổ hay mua thực phẩm đặc biệt đắt tiền. Điều quan trọng là hiểu đúng nguyên lý và áp dụng vào bữa ăn hằng ngày.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Nguyên tắc ăn uống cho người tiểu đường type 2:
      <strong>kiểm soát lượng tinh bột và chọn tinh bột hấp thu chậm</strong> (gạo lứt, khoai lang, yến mạch thay một phần cơm trắng),
      <strong>tăng rau xanh và protein để làm chậm hấp thu đường</strong>,
      <strong>ăn đúng giờ và không bỏ bữa</strong> (đặc biệt khi dùng thuốc),
      và <strong>hạn chế đường thêm vào, nước ngọt và trái cây có chỉ số đường huyết cao</strong>.
      Mục tiêu không phải loại bỏ tinh bột mà là kiểm soát lượng và chọn đúng loại.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/tieu-duong-nguoi-cao-tuoi-dau-hieu-va-quan-ly" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Tiểu đường ở người cao tuổi: 6 dấu hiệu dễ bỏ qua và cách quản lý hiệu quả tại nhà
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/che-do-an-cho-nguoi-cao-huyet-ap" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chế độ ăn cho người cao huyết áp: Hướng dẫn thực tế cho bữa ăn hằng ngày
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          BHYT sẽ chi trả sàng lọc tăng huyết áp và tiểu đường: Lộ trình và ý nghĩa thực tế
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nguyên lý cơ bản — cần hiểu đúng trước khi ăn đúng</h2>
  <p>Tiểu đường type 2 xảy ra khi cơ thể không sử dụng insulin hiệu quả (đề kháng insulin) và/hoặc sản xuất không đủ insulin. Đường từ thức ăn không vào được tế bào mà tích lũy trong máu.</p>
  <p>Chế độ ăn ảnh hưởng đến đường huyết qua hai cơ chế chính:</p>
  <p><strong>Lượng tinh bột (carbohydrate)</strong> — tinh bột được tiêu hóa thành đường glucose. Ăn nhiều tinh bột = đường huyết tăng cao. Đây là yếu tố quan trọng nhất cần kiểm soát.</p>
  <p><strong>Tốc độ hấp thu tinh bột (chỉ số đường huyết — GI)</strong> — tinh bột hấp thu chậm làm đường huyết tăng từ từ, ổn định hơn. Tinh bột hấp thu nhanh làm đường huyết tăng đột ngột rồi tụt nhanh.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phương pháp đĩa ăn — đơn giản và thực tế nhất</h2>
  <p>Không cần đếm calo hay cân đong từng thứ. Phương pháp đĩa ăn chia một bữa như sau:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Phần đĩa</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Thực phẩm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Ví dụ bữa Việt</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">½ đĩa — rau xanh</td>
          <td style="padding: 0.8rem 1rem;">Rau không có tinh bột</td>
          <td style="padding: 0.8rem 1rem;">Rau muống luộc, canh rau ngót, dưa leo</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">¼ đĩa — protein</td>
          <td style="padding: 0.8rem 1rem;">Cá, thịt nạc, trứng, đậu phụ</td>
          <td style="padding: 0.8rem 1rem;">Cá kho, thịt gà luộc, đậu phụ hấp</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">¼ đĩa — tinh bột</td>
          <td style="padding: 0.8rem 1rem;">Tinh bột hấp thu chậm</td>
          <td style="padding: 0.8rem 1rem;">½ chén cơm gạo lứt hoặc khoai lang</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Nguyên tắc quan trọng: ăn rau trước, rồi protein, cuối cùng mới ăn tinh bột. Thứ tự này làm chậm hấp thu đường đáng kể.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Tinh bột — không phải kẻ thù, nhưng cần chọn đúng</h2>
  <p><strong>Ưu tiên (hấp thu chậm, GI thấp):</strong></p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Gạo lứt — GI khoảng 50–55 (cơm trắng: 72–83)</li>
    <li>Khoai lang luộc — GI khoảng 44–60</li>
    <li>Yến mạch — GI khoảng 40–60</li>
    <li>Cơm trắng ăn nguội — GI thấp hơn cơm nóng vì tinh bột thoái hóa</li>
    <li>Bánh mì nguyên cám — GI thấp hơn bánh mì trắng</li>
  </ul>

  <p><strong>Hạn chế (hấp thu nhanh, GI cao):</strong></p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Cơm trắng nhiều, đặc biệt cơm mới nấu nóng</li>
    <li>Xôi, bánh cuốn, bánh gạo</li>
    <li>Mì ăn liền, bánh mì trắng</li>
    <li>Khoai tây nghiền, khoai tây chiên</li>
    <li>Đường, mật ong, nước ngọt — tăng đường huyết nhanh nhất</li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Protein — người bạn đồng hành quan trọng trong bữa ăn</h2>
  <p>Protein không làm tăng đường huyết trực tiếp và giúp làm chậm hấp thu tinh bột trong cùng bữa ăn. Người tiểu đường cần đủ protein để duy trì khối cơ — đặc biệt quan trọng vì bệnh tiểu đường làm tăng tốc độ mất cơ.</p>
  <p>Nguồn protein tốt cho người tiểu đường: cá (đặc biệt cá béo), thịt gà không da, trứng, đậu phụ và các loại đậu, sữa chua không đường, phô mai tươi ít muối.</p>
  <p>Hạn chế thịt đỏ nhiều lần trong tuần và tránh hoàn toàn thịt chế biến sẵn (xúc xích, lạp xưởng, thịt hộp) — các loại này làm tăng viêm và liên quan đến tiến triển biến chứng tiểu đường.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Rau xanh — ăn nhiều càng tốt</h2>
  <p>Hầu hết rau xanh không có tinh bột (trừ khoai, bắp, đậu Hà Lan) có thể ăn thoải mái. Chất xơ trong rau làm chậm hấp thu đường, tạo cảm giác no, và có lợi cho hệ vi sinh đường ruột ảnh hưởng đến độ nhạy insulin.</p>
  <p>Mục tiêu: ít nhất 3–5 phần rau mỗi ngày. Đa dạng màu sắc — rau xanh đậm, rau màu đỏ cam, dưa leo, giá đỗ — để cung cấp đủ các vitamin và khoáng chất khác nhau.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thời điểm ăn và tần suất bữa ăn</h2>
  <p><strong>Không bỏ bữa</strong> — đặc biệt quan trọng với người đang dùng thuốc tiểu đường. Bỏ bữa khi đang uống thuốc hạ đường huyết có thể gây hạ đường huyết nguy hiểm.</p>
  <p><strong>Ăn đúng giờ</strong> và cách nhau không quá 4–5 tiếng trong ngày, kể cả bữa phụ. Khoảng cách dài giữa các bữa làm đường huyết dao động lớn hơn.</p>
  <p><strong>Bữa tối không nên ăn muộn</strong> và không nên ăn nhiều tinh bột vào ban đêm vì hoạt động thể chất ít, đường huyết dễ tăng cao và ở mức cao kéo dài qua đêm.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý về việc theo dõi đường huyết</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Chế độ ăn tốt nhất là chế độ ăn phù hợp với chỉ số đường huyết của từng người. Ghi lại đường huyết trước và 2 giờ sau bữa ăn (đường huyết sau ăn mục tiêu dưới 10 mmol/L) giúp biết thực phẩm nào làm đường huyết tăng cao với cơ thể của bạn — vì phản ứng đường huyết với cùng một thực phẩm có thể khác nhau giữa các người.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Những thứ cần tránh hoàn toàn</h2>

  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Nước ngọt, nước trái cây đóng hộp, trà sữa — lượng đường rất cao, không có chất xơ</li>
    <li>Bánh kẹo ngọt, kem, chè — đường thêm vào trực tiếp</li>
    <li>Rượu uống lúc đói — nguy cơ hạ đường huyết</li>
    <li>Bỏ bữa rồi ăn bù nhiều một lần — gây đường huyết dao động lớn</li>
    <li>Tự ý dùng các loại thảo dược "hạ đường huyết" không rõ nguồn gốc — có thể tương tác nguy hiểm với thuốc điều trị</li>
  </ul>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Theo dõi đường huyết và sức khỏe tại nhà</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Nhân viên ANTCARE – Kiến chăm tổ đến tận nhà theo dõi các chỉ số sức khỏe định kỳ, nhắc lịch uống thuốc và gửi báo cáo về gia đình. Phù hợp với người cao tuổi sống một mình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người tiểu đường có ăn cơm được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, nhưng cần kiểm soát lượng. Cơm trắng có chỉ số đường huyết cao, nhưng hoàn toàn có thể ăn nếu giữ khẩu phần vừa phải (1/2 chén cơm mỗi bữa) và ăn cùng với rau và protein. Ăn cơm cùng rau và cá làm chậm hấp thu đường đáng kể so với ăn cơm đơn thuần. Thay một phần cơm trắng bằng gạo lứt hoặc khoai lang tốt hơn nhưng không bắt buộc nếu khó thực hiện.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người tiểu đường có ăn trái cây không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, nhưng chọn loại và lượng phù hợp. Trái cây có đường tự nhiên, nhưng cũng chứa chất xơ và vitamin có lợi. Ưu tiên trái cây có chỉ số đường huyết thấp: ổi, bưởi, táo, lê, cam — ăn cả múi thay vì ép nước. Hạn chế: vải, nhãn, xoài chín, dưa hấu, chuối chín vì đường huyết tăng nhanh hơn. Ăn khoảng 1–2 phần trái cây mỗi ngày, không ăn trái cây một mình mà nên ăn sau bữa chính.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người tiểu đường có dùng đường ăn kiêng được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Chất tạo ngọt không calo (stevia, erythritol, sucralose) thường được coi là an toàn cho người tiểu đường vì không làm tăng đường huyết trực tiếp. Tuy nhiên nghiên cứu cho thấy dùng nhiều chất tạo ngọt có thể duy trì thói quen thèm ngọt và ảnh hưởng đến hệ vi sinh đường ruột về lâu dài. Dùng ít và thỉnh thoảng là được, không dùng như thay thế hoàn toàn đường.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Uống rượu bia có ảnh hưởng đến đường huyết không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, theo cả hai chiều. Rượu có thể làm hạ đường huyết nguy hiểm, đặc biệt khi uống lúc đói hoặc đang dùng thuốc tiểu đường. Đồng thời bia và rượu ngọt chứa carbohydrate làm tăng đường huyết tạm thời. Người tiểu đường không nên uống rượu lúc đói, không uống nhiều hơn 1 đơn vị mỗi ngày, và luôn ăn nhẹ khi uống. Nhiều bác sĩ khuyên không uống rượu bia với người tiểu đường.</p>
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
    "headline": "Chế độ ăn cho người tiểu đường type 2: Hướng dẫn thực tế cho bữa ăn Việt Nam",
    "description": "Chế độ ăn kiểm soát đường huyết cho người tiểu đường type 2: chỉ số GI, phương pháp đĩa ăn, thực phẩm nên và không nên ăn trong bữa ăn Việt Nam hằng ngày.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 76,
  slug: "che-do-an-cho-nguoi-tieu-duong-type-2",
  oldSlugs: [
    "che-do-an-cho-nguoi-tieu-duong-type-2"
  ],
  title: "Chế độ ăn cho người tiểu đường type 2: Hướng dẫn thực tế cho bữa ăn Việt Nam",
  category: "Dinh dưỡng theo bệnh",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Chế độ ăn kiểm soát đường huyết cho người tiểu đường type 2: chỉ số GI, phương pháp đĩa ăn, thực phẩm nên và không nên ăn trong bữa ăn Việt Nam hằng ngày.",
  excerpt: "Chế độ ăn kiểm soát đường huyết cho người tiểu đường type 2: chỉ số GI, phương pháp đĩa ăn, thực phẩm nên và không nên ăn trong bữa ăn Việt Nam hằng ngày.",
  image: "/images/tin-tuc/che-do-an-cho-nguoi-tieu-duong-type-2.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 76!');
