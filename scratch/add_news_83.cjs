const fs = require('fs');
const path = require('path');

// 1. Update article 82 image to version without people
const img82Src = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\tram_cam_nguoi_cao_tuoi_v2_1789121745449.jpg`;
const img82Dest = path.join(__dirname, '../public/images/tin-tuc/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro.jpg');
fs.copyFileSync(img82Src, img82Dest);
console.log('Updated Article 82 image (no people) at:', img82Dest);

// 2. Add Article 83 image (no people)
const img83Src = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\loang_xuong_nguoi_cao_tuoi_v2_1789121803019.jpg`;
const img83Dest = path.join(__dirname, '../public/images/tin-tuc/loang-xuong-o-nguoi-cao-tuoi-phong-ngua.jpg');
fs.copyFileSync(img83Src, img83Dest);
console.log('Copied Article 83 image to:', img83Dest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Loãng xương ở người cao tuổi: Nhận biết, phòng ngừa và giảm nguy cơ gãy xương</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Loãng xương không đau, không có triệu chứng, cho đến ngày xảy ra một cú ngã và gãy xương. Với người cao tuổi, đó thường là bước ngoặt thay đổi toàn bộ cuộc sống.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Loãng xương làm xương giòn và dễ gãy, thường không có triệu chứng cho đến khi gãy xương.
      Ba vị trí gãy phổ biến nhất ở người cao tuổi là <strong>cổ xương đùi, cột sống và cổ tay</strong>.
      Nhóm cần đo mật độ xương (DEXA): <strong>phụ nữ từ 65 tuổi, nam giới từ 70 tuổi</strong>,
      hoặc sớm hơn nếu có yếu tố nguy cơ như từng gãy xương sau tuổi 50, dùng corticosteroid kéo dài,
      gầy, hút thuốc, hoặc có tiền sử gia đình.
      Phòng ngừa gồm ba trụ cột: <strong>đủ canxi và vitamin D, vận động chịu trọng lực,
      và phòng ngã trong nhà</strong>.
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
        <a href="/news/tram-cam-o-nguoi-cao-tuoi-nhan-biet-va-ho-tro" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trầm cảm ở người cao tuổi: Dấu hiệu nhận biết và cách gia đình hỗ trợ đúng cách
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Loãng xương là gì và vì sao nguy hiểm</h2>
  <p>Xương là mô sống, liên tục được phá hủy và tái tạo. Sau khoảng 30-35 tuổi, tốc độ phá hủy bắt đầu vượt tốc độ tái tạo, và mật độ xương giảm dần. Ở phụ nữ, quá trình này tăng tốc mạnh sau mãn kinh do giảm estrogen.</p>
  <p>Điểm nguy hiểm: loãng xương <strong>không gây đau và không có triệu chứng</strong> cho đến khi xảy ra gãy xương. Nhiều người chỉ biết mình bị loãng xương sau khi đã gãy xương một lần.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ba vị trí gãy xương phổ biến nhất</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Vị trí</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Hoàn cảnh thường gặp</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Hậu quả</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cổ xương đùi</td>
          <td style="padding: 0.8rem 1rem;">Ngã từ tư thế đứng</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #c2410c;">Nghiêm trọng nhất — cần phẫu thuật, nằm lâu, nhiều biến chứng</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cột sống</td>
          <td style="padding: 0.8rem 1rem;">Có thể xảy ra chỉ do cúi người hoặc nâng vật nặng</td>
          <td style="padding: 0.8rem 1rem;">Đau lưng mạn tính, gù lưng, giảm chiều cao</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cổ tay</td>
          <td style="padding: 0.8rem 1rem;">Ngã chống tay xuống đất</td>
          <td style="padding: 0.8rem 1rem;">Ảnh hưởng sinh hoạt, thường là dấu hiệu cảnh báo đầu tiên</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Gãy xương cổ tay ở người trên 50 tuổi sau một cú ngã nhẹ thường là <strong>dấu hiệu cảnh báo</strong> rằng mật độ xương đã giảm. Đây là thời điểm nên đo mật độ xương, chứ không phải chờ đến khi gãy cổ xương đùi.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ai cần đo mật độ xương</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Phụ nữ từ 65 tuổi trở lên
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nam giới từ 70 tuổi trở lên
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Phụ nữ sau mãn kinh dưới 65 tuổi có yếu tố nguy cơ
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người đã từng gãy xương sau tuổi 50 do chấn thương nhẹ
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người dùng corticosteroid kéo dài trên 3 tháng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người gầy, chỉ số BMI thấp
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người có tiền sử gia đình bị loãng xương hoặc gãy cổ xương đùi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người hút thuốc lá hoặc uống rượu nhiều
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người giảm chiều cao trên 3cm so với thời trẻ, hoặc lưng gù rõ
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ba trụ cột phòng ngừa</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Trụ cột 1 — Đủ canxi và vitamin D</h3>
  <p>Nhu cầu canxi ở người cao tuổi khoảng 1.000-1.200mg mỗi ngày. Nguồn thực phẩm phổ biến tại Việt Nam:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Thực phẩm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Canxi ước tính</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cá nhỏ ăn cả xương (cá cơm, cá mòi) — 100g</td>
          <td style="padding: 0.8rem 1rem;">300-500mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Sữa tươi — 1 ly 200ml</td>
          <td style="padding: 0.8rem 1rem;">240mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Đậu phụ — 100g</td>
          <td style="padding: 0.8rem 1rem;">100-130mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Rau cải xanh luộc — 100g</td>
          <td style="padding: 0.8rem 1rem;">100mg</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Sữa chua — 1 hộp</td>
          <td style="padding: 0.8rem 1rem;">150-200mg</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Vitamin D cần thiết để hấp thu canxi. Nguồn chính là tổng hợp qua da khi tiếp xúc ánh nắng — khoảng 15-20 phút mỗi ngày vào buổi sáng sớm hoặc chiều muộn. Người cao tuổi ở nhiều trong nhà thường thiếu vitamin D và cần bổ sung theo chỉ định bác sĩ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Trụ cột 2 — Vận động chịu trọng lực</h3>
  <p>Xương chỉ xây dựng mật độ khi chịu lực. Điều này có nghĩa là bơi lội — dù tốt cho tim mạch và khớp — không giúp nhiều cho mật độ xương vì nước nâng đỡ trọng lượng cơ thể.</p>
  <p>Các hoạt động có ích: đi bộ, đi bộ nhanh, leo cầu thang nhẹ, tập với dây kháng lực, bài tập sức mạnh cơ chân. Mục tiêu 30 phút mỗi ngày, ít nhất 5 ngày mỗi tuần.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Trụ cột 3 — Phòng ngã</h3>
  <p>Đây là trụ cột quan trọng nhất với người đã bị loãng xương. Xương yếu chỉ gây hậu quả khi có va chạm — nên ngăn được cú ngã là ngăn được phần lớn nguy cơ.</p>
  <p>Các biện pháp trong nhà: lắp tay vịn phòng tắm và cầu thang, dùng thảm chống trượt, đảm bảo đủ ánh sáng đặc biệt ban đêm, dọn dẹp vật cản trên lối đi, đi dép có đế bám.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Rà soát thuốc đang dùng cũng là biện pháp phòng ngã quan trọng. Một số thuốc gây chóng mặt hoặc hạ huyết áp tư thế — thuốc ngủ, thuốc an thần, thuốc huyết áp, thuốc lợi tiểu. Người cao tuổi dùng từ 4 loại thuốc trở lên có nguy cơ ngã cao hơn rõ rệt. Nên mang toàn bộ thuốc đến bác sĩ rà soát định kỳ mỗi 6-12 tháng.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về thuốc điều trị loãng xương</h2>
  <p>Khi mật độ xương đã giảm đến mức loãng xương, bác sĩ có thể chỉ định thuốc điều trị. Có nhiều nhóm thuốc với cơ chế và cách dùng khác nhau — một số uống hằng tuần, một số tiêm định kỳ.</p>
  <p>Điểm gia đình cần lưu ý: các thuốc này có hướng dẫn sử dụng nghiêm ngặt (ví dụ phải uống lúc bụng đói với nhiều nước và không nằm trong 30 phút sau khi uống), và cần tuân thủ đúng để có hiệu quả. Đây là loại thuốc rất hay bị dùng sai cách ở người cao tuổi sống một mình.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Rà soát an toàn nhà cửa</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Với người loãng xương, một cú ngã có thể thay đổi cả cuộc sống. Dịch vụ An tâm nhà cửa rà soát và xử lý các điểm rủi ro trong nhà. Từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Đo mật độ xương ở đâu và chi phí bao nhiêu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đo mật độ xương bằng phương pháp DEXA có tại các bệnh viện lớn và một số phòng khám chuyên khoa cơ xương khớp. Kỹ thuật này nhanh, không đau, thời gian đo khoảng 10-15 phút. Chi phí dao động tùy cơ sở và có thể được BHYT chi trả một phần khi có chỉ định của bác sĩ. Gia đình nên hỏi trực tiếp cơ sở y tế về chi phí và điều kiện thanh toán bảo hiểm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Uống canxi có đủ để phòng loãng xương không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không đủ nếu chỉ uống canxi đơn thuần. Canxi cần vitamin D để hấp thu, và cần vận động chịu trọng lực để xương thực sự sử dụng canxi xây dựng mật độ. Ngoài ra bổ sung canxi quá nhiều (trên 1.500mg mỗi ngày) có thể tăng nguy cơ sỏi thận. Ưu tiên canxi từ thực phẩm và chỉ bổ sung viên uống khi bác sĩ chỉ định.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người đã bị loãng xương có nên tập thể dục không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, nhưng cần chọn bài phù hợp. Vận động giúp duy trì mật độ xương và quan trọng hơn là giữ sức cơ, thăng bằng để giảm nguy cơ ngã. Nên ưu tiên đi bộ, tập thăng bằng, bài tập sức mạnh nhẹ. Cần tránh: các động tác cúi gập người về phía trước quá mức, xoay vặn cột sống mạnh, và các môn có nguy cơ va chạm hoặc ngã. Người loãng xương nặng nên được kỹ thuật viên vật lý trị liệu hướng dẫn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Gãy cổ xương đùi ở người cao tuổi nguy hiểm đến mức nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là loại gãy xương nghiêm trọng nhất ở người cao tuổi. Phần lớn cần phẫu thuật, và quá trình phục hồi kéo dài. Nguy hiểm chính không đến từ bản thân vết gãy mà từ biến chứng của việc nằm lâu: viêm phổi, loét tì đè, huyết khối tĩnh mạch, mất khối cơ nhanh. Nhiều người cao tuổi sau gãy cổ xương đùi không lấy lại được khả năng đi lại như trước. Đây là lý do phòng ngã quan trọng đến vậy.</p>
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
    "headline": "Loãng xương ở người cao tuổi: Nhận biết, phòng ngừa và giảm nguy cơ gãy xương",
    "description": "Loãng xương diễn tiến âm thầm cho đến khi gãy xương. Ai cần đo mật độ xương, cách bổ sung canxi đúng và biện pháp giảm nguy cơ gãy xương ở người cao tuổi.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 83,
  slug: "loang-xuong-o-nguoi-cao-tuoi-phong-ngua",
  oldSlugs: [
    "loang-xuong-o-nguoi-cao-tuoi-phong-ngua",
    "loang-xuong-o-nguoi-cao-tuoi"
  ],
  title: "Loãng xương ở người cao tuổi: Nhận biết, phòng ngừa và giảm nguy cơ gãy xương",
  category: "Sức khỏe người cao tuổi",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Loãng xương diễn tiến âm thầm cho đến khi gãy xương. Ai cần đo mật độ xương, cách bổ sung canxi đúng và biện pháp giảm nguy cơ gãy xương ở người cao tuổi.",
  excerpt: "Loãng xương diễn tiến âm thầm cho đến khi gãy xương. Ai cần đo mật độ xương, cách bổ sung canxi đúng và biện pháp giảm nguy cơ gãy xương ở người cao tuổi.",
  image: "/images/tin-tuc/loang-xuong-o-nguoi-cao-tuoi-phong-ngua.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 83 and updated article 82 image!');
