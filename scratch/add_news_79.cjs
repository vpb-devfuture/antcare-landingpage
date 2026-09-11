const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\tro_cap_huu_tri_2026_1789120515805.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026.jpg');

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
    <h1 itemprop="headline">Trợ cấp hưu trí xã hội 2026: Ai được hưởng và thủ tục đăng ký thế nào</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Mức trợ cấp vừa tăng từ 01/7/2026, và người đang hưởng được truy lĩnh phần chênh lệch. Nhiều gia đình có bố mẹ đủ điều kiện nhưng chưa làm thủ tục vì không biết.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Hai nhóm được hưởng trợ cấp hưu trí xã hội:
      <strong>công dân từ đủ 75 tuổi trở lên</strong> và <strong>công dân từ đủ 70 đến dưới 75 tuổi thuộc hộ nghèo, hộ cận nghèo</strong>,
      với điều kiện không hưởng lương hưu hoặc trợ cấp BHXH hằng tháng và có văn bản đề nghị.
      Mức trợ cấp là <strong>540.000 đồng/tháng</strong> từ 01/7/2026 theo Nghị định 335/2026/NĐ-CP,
      tăng từ mức 500.000 đồng trước đó. Riêng <strong>Hà Nội và TP.HCM hỗ trợ thêm, nâng lên 650.000 đồng/tháng</strong>.
      Người đang hưởng theo mức cũ được truy lĩnh phần chênh lệch.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/kham-suc-khoe-mien-phi-2026" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Khám sức khỏe miễn phí cho người cao tuổi năm 2026: Lịch khám, địa điểm và thủ tục tham gia
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/bhyt-sang-loc-tang-huyet-ap-tieu-duong-tu-2030" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          BHYT sẽ chi trả phí khám sàng lọc tăng huyết áp và tiểu đường từ 2030: Người cao tuổi được hưởng lợi gì?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Thủ tục khám Bảo hiểm Y tế cho người cao tuổi: 5 lưu ý quan trọng để không mất quyền lợi
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chính sách này là gì</h2>
  <p>Trợ cấp hưu trí xã hội là chế độ an sinh dành cho người cao tuổi không có nguồn thu nhập ổn định từ hệ thống bảo hiểm xã hội. Chế độ này được quy định tại Luật Bảo hiểm xã hội 2024, có hiệu lực từ 01/7/2025.</p>
  <p>Điểm thay đổi lớn nhất so với trước: <strong>độ tuổi được hưởng giảm từ 80 xuống 75</strong>. Theo thống kê của Cục Bảo trợ xã hội, Bộ Y tế, việc giảm độ tuổi này làm tăng thêm khoảng 500 nghìn người được hưởng, nâng tỷ lệ người sau tuổi nghỉ hưu có lương hưu hoặc trợ cấp lên gần 42% vào năm 2025.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ai được hưởng</h2>
  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Nhóm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Điều kiện</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Từ đủ 75 tuổi trở lên</td>
          <td style="padding: 0.8rem 1rem;">Không hưởng lương hưu hoặc trợ cấp BHXH hằng tháng; có văn bản đề nghị</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Từ đủ 70 đến dưới 75 tuổi</td>
          <td style="padding: 0.8rem 1rem;">Thuộc hộ nghèo hoặc hộ cận nghèo; không hưởng lương hưu hoặc trợ cấp BHXH hằng tháng; có văn bản đề nghị</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>Điểm cần lưu ý: <strong>phải có văn bản đề nghị</strong> — trợ cấp không tự động đến với người đủ điều kiện. Đây là lý do nhiều gia đình có bố mẹ đủ tuổi nhưng chưa nhận được đồng nào, vì không ai làm thủ tục.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Mức trợ cấp năm 2026</h2>
  <p>Mức cơ bản theo quy định trung ương đã thay đổi trong năm nay:</p>
  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Thời điểm</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Mức trợ cấp</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Căn cứ</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem;">Từ 01/7/2025</td>
          <td style="padding: 0.8rem 1rem;">500.000 đồng/tháng</td>
          <td style="padding: 0.8rem 1rem;">Nghị định 176/2025/NĐ-CP</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem;">Từ 01/7/2026</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">540.000 đồng/tháng</td>
          <td style="padding: 0.8rem 1rem;">Nghị định 335/2026/NĐ-CP</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>Nghị định 335/2026/NĐ-CP có hiệu lực thi hành từ ngày 05/10/2026, nhưng mức trợ cấp mới được áp dụng và truy lĩnh từ 01/7/2026.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Mức hỗ trợ thêm của một số địa phương</h3>
  <p>UBND cấp tỉnh có thể trình HĐND quyết định hỗ trợ thêm tùy điều kiện ngân sách. Có 5 tỉnh, thành phố đang nâng mức cao hơn mức quy định trung ương:</p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li><strong>Hà Nội và TP.HCM:</strong> 650.000 đồng/tháng</li>
    <li><strong>Hải Phòng và Quảng Ninh:</strong> 700.000 đồng/tháng</li>
    <li><strong>Tuyên Quang:</strong> 530.000 đồng/tháng</li>
  </ul>
  <p>Các mức trên được ghi nhận theo mức áp dụng trước đợt điều chỉnh mới; gia đình nên hỏi UBND phường để biết mức chính xác đang áp dụng tại thời điểm nộp hồ sơ.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">Nếu người cao tuổi đồng thời thuộc đối tượng hưởng trợ cấp xã hội hằng tháng khác, họ được hưởng chế độ trợ cấp <strong>cao hơn</strong>, không phải cộng dồn cả hai. Gia đình nên hỏi rõ điểm này tại UBND phường để tránh hiểu nhầm về số tiền thực nhận.</p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Thủ tục đăng ký</h2>
  <p>Quy trình cơ bản gồm ba bước:</p>
  <p><strong>Bước 1 — Chuẩn bị hồ sơ.</strong> Văn bản đề nghị hưởng trợ cấp hưu trí xã hội theo mẫu, căn cước công dân của người cao tuổi, và giấy tờ chứng minh hộ nghèo hoặc cận nghèo nếu thuộc nhóm 70 đến dưới 75 tuổi. Mẫu đơn lấy tại UBND phường.</p>
  <p><strong>Bước 2 — Nộp tại UBND cấp xã, phường</strong> nơi người cao tuổi thường trú.</p>
  <p><strong>Bước 3 — Chờ quyết định.</strong> Chủ tịch UBND cấp xã là người ban hành quyết định hưởng trợ cấp. Sau khi có quyết định, trợ cấp được chi trả hằng tháng.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Hỗ trợ chi phí mai táng</h2>
  <p>Một quyền lợi ít người biết: người đang hưởng trợ cấp hưu trí xã hội, hoặc người đã có văn bản đề nghị và đủ điều kiện hưởng nhưng chưa có quyết định khi qua đời, được hỗ trợ chi phí mai táng tối thiểu bằng <strong>20 lần mức trợ cấp hưu trí xã hội</strong>.</p>
  <p>Với mức 540.000 đồng, khoản hỗ trợ này tương đương 10,8 triệu đồng. Trường hợp thuộc nhiều diện hỗ trợ mai táng khác nhau với các mức khác nhau thì chỉ được hưởng một mức cao nhất.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Việc gia đình nên làm</h2>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kiểm tra tuổi của bố mẹ — nếu từ 75 trở lên và không có lương hưu, hãy làm thủ tục ngay
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nếu bố mẹ từ 70 đến dưới 75, kiểm tra xem gia đình có thuộc diện hộ nghèo hoặc cận nghèo không
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Gọi hoặc đến UBND phường hỏi mẫu đơn và mức áp dụng tại địa phương
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nếu bố mẹ đã đang hưởng, kiểm tra xem đã được truy lĩnh theo mức mới chưa
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Lưu lại quyết định hưởng trợ cấp cùng các giấy tờ khác trong hồ sơ sức khỏe gia đình
    </li>
  </ul>
  <p>Chính sách có thể tiếp tục thay đổi — hiện đang có thảo luận về việc tiếp tục giữ mốc 75 tuổi hay giảm xuống 70 tuổi. Gia đình nên theo dõi thông tin từ UBND phường hoặc cơ quan bảo hiểm xã hội địa phương.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Đồng hành cùng gia đình bạn</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Ngoài dịch vụ đưa đón khám bệnh và theo dõi sức khỏe tại nhà, ANTCARE hỗ trợ gia đình nắm bắt các chính sách dành cho người cao tuổi. Hotline 0969 032 360.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bố mẹ đang có lương hưu thì có được nhận trợ cấp hưu trí xã hội không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không. Điều kiện bắt buộc là không hưởng lương hưu hoặc trợ cấp bảo hiểm xã hội hằng tháng, trừ một số trường hợp đặc biệt theo quy định. Chính sách này nhằm hỗ trợ người cao tuổi không có nguồn thu nhập ổn định từ hệ thống bảo hiểm xã hội. Nếu bố mẹ đang có lương hưu thì đã thuộc diện được bảo đảm bởi chế độ khác.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nộp hồ sơ ở đâu và cần giấy tờ gì?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nộp tại UBND cấp xã, phường nơi người cao tuổi thường trú. Chủ tịch UBND cấp xã là người ban hành quyết định hưởng trợ cấp. Hồ sơ cơ bản gồm văn bản đề nghị hưởng trợ cấp (theo mẫu), căn cước công dân, và giấy tờ chứng minh hộ nghèo hoặc cận nghèo nếu thuộc nhóm 70 đến dưới 75 tuổi. Nên gọi hoặc đến hỏi trực tiếp UBND phường để được hướng dẫn mẫu đơn hiện hành.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Mức trợ cấp có khác nhau giữa các tỉnh thành không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Mức cơ bản theo quy định trung ương là 540.000 đồng/tháng, nhưng UBND cấp tỉnh có thể trình HĐND quyết định hỗ trợ thêm tùy điều kiện ngân sách địa phương. Hà Nội và TP.HCM đang áp mức 650.000 đồng/tháng, Hải Phòng và Quảng Ninh 700.000 đồng, Tuyên Quang 530.000 đồng theo mức trước đây. Gia đình nên hỏi UBND phường về mức áp dụng cụ thể tại địa phương mình.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người đã đăng ký từ trước có được nhận mức mới không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Người đang hưởng trợ cấp hưu trí xã hội theo Nghị định 176/2025/NĐ-CP được truy lĩnh theo mức mới 540.000 đồng/tháng tính từ 01/7/2026. Nghĩa là phần chênh lệch giữa mức cũ và mức mới sẽ được chi trả bổ sung, không cần làm lại thủ tục.</p>
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
    "headline": "Trợ cấp hưu trí xã hội 2026: Ai được hưởng và thủ tục đăng ký thế nào",
    "description": "Từ 01/7/2026 mức trợ cấp hưu trí xã hội tăng lên 540.000đ/tháng. Hà Nội và TP.HCM hỗ trợ thêm lên 650.000đ. Điều kiện, đối tượng và thủ tục đăng ký.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 79,
  slug: "tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026",
  oldSlugs: [
    "tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026",
    "tro-cap-huu-tri-xa-hoi-2026"
  ],
  title: "Trợ cấp hưu trí xã hội 2026: Ai được hưởng và thủ tục đăng ký thế nào",
  category: "Chính sách người cao tuổi",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Từ 01/7/2026 mức trợ cấp hưu trí xã hội tăng lên 540.000đ/tháng. Hà Nội và TP.HCM hỗ trợ thêm lên 650.000đ. Điều kiện, đối tượng và thủ tục đăng ký.",
  excerpt: "Từ 01/7/2026 mức trợ cấp hưu trí xã hội tăng lên 540.000đ/tháng. Hà Nội và TP.HCM hỗ trợ thêm lên 650.000đ. Điều kiện, đối tượng và thủ tục đăng ký.",
  image: "/images/tin-tuc/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 79!');
