const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\ham_do_mac_bim_skincare_concept_1789442412920.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/ham-do-mac-bim-o-nguoi-cao-tuoi.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

const allArticles = [newsData.featured, ...newsData.list].filter(Boolean);
const maxId = Math.max(...allArticles.map(a => a.id));
const newId = maxId + 1;

// If current featured exists, move it to list if not already in list
if (newsData.featured && newsData.featured.slug !== "ham-do-mac-bim-o-nguoi-cao-tuoi") {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.slug === prevFeatured.slug)) {
    newsData.list.unshift(prevFeatured);
  }
}

// Remove any existing item with same slug to avoid duplicate
newsData.list = newsData.list.filter(item => item.slug !== "ham-do-mac-bim-o-nguoi-cao-tuoi");

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Hăm do mặc bỉm ở người cao tuổi: Nhận biết, xử lý và phòng ngừa</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Da người cao tuổi mỏng hơn, tuần hoàn kém hơn và phục hồi chậm hơn. Một vùng hăm nhỏ bị bỏ qua vài ngày có thể trở thành vết loét mất hàng tháng để lành.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Hăm do mặc bỉm xảy ra khi <strong>da tiếp xúc kéo dài với nước tiểu và phân</strong>, kết hợp với ma sát và môi trường ẩm kín.<br>
      Dấu hiệu sớm: da vùng mặc bỉm <strong>đỏ, hơi sưng, có thể có mụn nhỏ li ti</strong>.<br>
      Xử lý: <strong>thay bỉm thường xuyên hơn, vệ sinh nhẹ nhàng bằng nước ấm hoặc khăn ướt không cồn, để da khô hoàn toàn trước khi mặc bỉm mới, và bôi kem bảo vệ da tạo lớp ngăn ẩm</strong>.<br>
      Cần đưa đi khám nếu: da trợt loét, chảy dịch, có mủ, lan rộng nhanh, hoặc kèm sốt — có thể đã nhiễm khuẩn hoặc nhiễm nấm cần điều trị.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao da người cao tuổi dễ tổn thương hơn</h2>
  <p>Ba thay đổi theo tuổi khiến vùng da mặc bỉm dễ hăm và khó lành:</p>
  <p><strong>Da mỏng đi.</strong> Lớp thượng bì và trung bì đều mỏng hơn, hàng rào bảo vệ da yếu hơn, nên chất kích thích dễ xâm nhập.</p>
  <p><strong>Tuần hoàn kém.</strong> Máu nuôi da giảm, quá trình phục hồi chậm hơn nhiều so với người trẻ. Một vết trợt ở người trẻ lành trong vài ngày có thể mất hàng tuần ở người cao tuổi.</p>
  <p><strong>Da khô hơn.</strong> Tuyến bã nhờn hoạt động kém, da mất độ ẩm tự nhiên, dễ nứt nẻ và tạo đường vào cho vi khuẩn.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nguyên nhân gây hăm</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Nguyên nhân</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Cơ chế</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tiếp xúc nước tiểu kéo dài</td>
          <td style="padding: 0.8rem 1rem;">Amoniac trong nước tiểu làm tăng độ pH da, phá vỡ hàng rào bảo vệ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tiếp xúc với phân</td>
          <td style="padding: 0.8rem 1rem;">Men tiêu hóa trong phân gây kích ứng mạnh, đặc biệt khi kết hợp với nước tiểu</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Ma sát</td>
          <td style="padding: 0.8rem 1rem;">Bỉm cọ vào da khi di chuyển, nhất là khi bỉm bị xoắn hoặc sai size</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Môi trường ẩm kín</td>
          <td style="padding: 0.8rem 1rem;">Nhiệt và ẩm tạo điều kiện cho vi khuẩn và nấm phát triển</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Vệ sinh quá mạnh</td>
          <td style="padding: 0.8rem 1rem;">Chà xát mạnh hoặc dùng xà phòng có tính tẩy làm tổn thương thêm da đã yếu</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nhận biết theo mức độ</h2>
  <p><strong>Mức nhẹ:</strong> da đỏ nhạt, không đau nhiều, không có tổn thương bề mặt. Xử lý tại nhà được nếu can thiệp ngay.</p>
  <p><strong>Mức vừa:</strong> da đỏ rõ, hơi sưng, có thể có mụn nhỏ li ti, người bệnh khó chịu khi chạm vào. Cần tăng cường chăm sóc và theo dõi sát.</p>
  <p><strong>Mức nặng:</strong> da trợt, chảy dịch, có thể có mủ hoặc mảng trắng (dấu hiệu nhiễm nấm). Cần đưa đi khám.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ: khi nào phải đi khám</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Đưa đi khám nếu: da trợt loét hoặc chảy dịch; xuất hiện mủ hoặc mùi hôi bất thường; vùng tổn thương lan rộng nhanh trong 1-2 ngày; có mảng trắng hoặc viền đỏ rõ ranh giới (nghi ngờ nhiễm nấm); kèm sốt; hoặc tình trạng không cải thiện sau 3-5 ngày chăm sóc đúng cách tại nhà.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Quy trình chăm sóc mỗi lần thay bỉm</h2>
  <p>Đây là quy trình quan trọng nhất — làm đúng thì phòng được phần lớn trường hợp hăm.</p>
  <p><strong>Bước 1 — Tháo bỉm nhẹ nhàng.</strong> Không kéo mạnh. Với tã dán, gỡ miếng dán rồi cuộn lại từ từ. Nếu bỉm dính vào da do phân khô, làm ẩm trước bằng nước ấm thay vì kéo.</p>
  <p><strong>Bước 2 — Vệ sinh từ trước ra sau.</strong> Dùng nước ấm hoặc khăn ướt không cồn. Lau nhẹ theo một chiều, không chà tới lui. Với nữ, luôn lau từ trước ra sau để tránh đưa vi khuẩn từ hậu môn vào đường tiết niệu.</p>
  <p><strong>Bước 3 — Để khô hoàn toàn.</strong> Thấm khô bằng khăn mềm, không chà. Nếu có thể, để thoáng khí 10-15 phút. Đây là bước hay bị bỏ qua nhất vì mất thời gian, nhưng lại quan trọng bậc nhất.</p>
  <p><strong>Bước 4 — Bôi kem bảo vệ da.</strong> Bôi lớp mỏng đều ở vùng tiếp xúc với bỉm. Kem tạo lớp ngăn giữa da và ẩm ướt. Không bôi quá dày vì cản khả năng thấm của bỉm.</p>
  <p><strong>Bước 5 — Mặc bỉm mới đúng cách.</strong> Kiểm tra vách chống tràn dựng lên, bỉm không xoắn, độ chặt vừa phải.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phòng ngừa lâu dài</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thay bỉm ngay khi đầy, không để quá 4-6 tiếng kể cả khi chưa đầy
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kiểm tra da mỗi lần thay — phát hiện sớm là yếu tố quyết định
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chọn đúng size để giảm ma sát
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chọn loại có bề mặt thoáng khí nếu da nhạy cảm
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Dùng kem bảo vệ da đều đặn, không đợi có hăm mới bôi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đảm bảo uống đủ nước — nước tiểu cô đặc gây kích ứng mạnh hơn
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Xử lý táo bón, vì phân lỏng hoặc tiêu chảy làm tăng nguy cơ hăm rõ rệt
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về vệ sinh — sai lầm thường gặp</h2>
  <p>Nhiều người chăm sóc nghĩ rằng vệ sinh càng kỹ càng tốt, nên chà mạnh hoặc dùng xà phòng có tính tẩy. Với da người cao tuổi, cách này gây hại nhiều hơn lợi: nó lấy đi lớp dầu tự nhiên và làm tổn thương thêm hàng rào bảo vệ vốn đã yếu.</p>
  <p>Nguyên tắc đúng là <strong>nhẹ nhàng và đủ</strong>: nước ấm hoặc khăn ướt không cồn, lau một chiều, không chà, và quan trọng nhất là để khô hoàn toàn trước khi mặc bỉm mới.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ (Đã cập nhật slogan theo yêu cầu) -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      antcare, để hành trình tuổi già của mỗi người thêm vui khỏe
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Hotline 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Liên hệ ANTCARE
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có thể dùng kem hăm trẻ em cho người lớn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Dùng tạm được nhưng không tối ưu. Kem hăm trẻ em thường tập trung làm dịu và tạo lớp ngăn nhẹ, phù hợp với da trẻ có khả năng phục hồi nhanh. Da người cao tuổi mỏng hơn, khô hơn và phục hồi chậm hơn, nên cần loại có lớp bảo vệ bền hơn và thường có thêm thành phần dưỡng ẩm. Ngoài ra người lớn tiếp xúc với lượng nước tiểu nhiều hơn nên yêu cầu về khả năng ngăn ẩm cao hơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Hăm và loét tì đè khác nhau thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Hai tình trạng khác nhau về nguyên nhân và vị trí. Hăm do ẩm ướt và ma sát, thường xuất hiện ở vùng nếp gấp bẹn, mông, vùng tiếp xúc với bỉm, biểu hiện là mảng đỏ lan rộng, ranh giới không rõ. Loét tì đè do đè ép kéo dài làm thiếu máu nuôi, xuất hiện ở vùng xương nhô như xương cùng, gót chân, mắt cá, ranh giới rõ hơn và tiến triển thành vết loét sâu. Người nằm liệt có thể bị cả hai cùng lúc.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có nên để da thoáng không mặc bỉm một lúc không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và đây là biện pháp hiệu quả. Nếu điều kiện cho phép, để vùng da mặc bỉm thoáng khí 15-30 phút mỗi lần thay, đặc biệt khi đã có dấu hiệu hăm. Có thể trải tấm lót giường bên dưới để không lo bẩn ga. Với người nằm liệt, kết hợp thời gian này với việc thay đổi tư thế để phòng loét tì đè.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Phấn rôm có giúp phòng hăm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không được khuyến nghị. Phấn rôm khi gặp ẩm sẽ vón cục, tạo ma sát và có thể làm nặng thêm tình trạng hăm. Ngoài ra bột phấn có thể bị hít vào đường hô hấp gây kích ứng phổi, đặc biệt nguy hiểm với người cao tuổi có bệnh hô hấp. Thay vào đó nên dùng kem bảo vệ da dạng thuốc mỡ tạo lớp ngăn ẩm.</p>
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
    "headline": "Hăm do mặc bỉm ở người cao tuổi: Nhận biết, xử lý và phòng ngừa",
    "description": "Hăm da do mặc bỉm là biến chứng phổ biến ở người cao tuổi. Nhận biết sớm, phân biệt với loét tì đè, cách xử lý và phòng ngừa hiệu quả.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: newId,
  slug: "ham-do-mac-bim-o-nguoi-cao-tuoi",
  oldSlugs: [
    "kien-thuc/ham-do-mac-bim-o-nguoi-cao-tuoi",
    "tin-tuc/ham-do-mac-bim-o-nguoi-cao-tuoi"
  ],
  title: "Hăm do mặc bỉm ở người cao tuổi: Nhận biết, xử lý và phòng ngừa",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Hăm da do mặc bỉm là biến chứng phổ biến ở người cao tuổi. Nhận biết sớm, phân biệt với loét tì đè, cách xử lý và phòng ngừa hiệu quả.",
  excerpt: "Hăm da do mặc bỉm là biến chứng phổ biến ở người cao tuổi. Nhận biết sớm, phân biệt với loét tì đè, cách xử lý và phòng ngừa hiệu quả.",
  image: "/images/tin-tuc/ham-do-mac-bim-o-nguoi-cao-tuoi.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully added article ${newId} (ham-do-mac-bim-o-nguoi-cao-tuoi) to news.json! Total articles: ${newsData.list.length + 1}`);
