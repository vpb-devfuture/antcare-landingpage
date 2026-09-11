const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\quan_ly_thuoc_nguoi_cao_tuoi_1789121976757.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/quan-ly-nhieu-loai-thuoc-cho-nguoi-cao-tuoi.jpg');

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
    <h1 itemprop="headline">Quản lý nhiều loại thuốc cho người cao tuổi: Cách tránh nhầm lẫn và tương tác nguy hiểm</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Người cao tuổi Việt Nam trung bình dùng 3-5 loại thuốc mỗi ngày, nhiều người còn hơn. Càng nhiều thuốc, nguy cơ nhầm lẫn và tương tác càng cao — nhưng phần lớn phòng tránh được.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Bốn việc gia đình cần làm để quản lý thuốc an toàn cho người cao tuổi:
      <strong>lập danh sách đầy đủ mọi thứ đang dùng</strong> (kể cả thực phẩm chức năng, thuốc đông y,
      thuốc mua ngoài), <strong>dùng hộp chia thuốc theo ngày trong tuần</strong>,
      <strong>mang toàn bộ thuốc đi khám để bác sĩ rà soát mỗi 6-12 tháng</strong>, và
      <strong>bỏ ngay thuốc cũ không còn dùng ra khỏi tủ</strong> để tránh uống nhầm.
      Dùng từ 5 loại thuốc trở lên làm tăng rõ rệt nguy cơ tương tác thuốc,
      tác dụng phụ và té ngã.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/loang-xuong-o-nguoi-cao-tuoi-phong-ngua" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Loãng xương ở người cao tuổi: Nhận biết, phòng ngừa và giảm nguy cơ gãy xương
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao dùng nhiều thuốc là vấn đề</h2>
  <p>Người cao tuổi thường có nhiều bệnh mạn tính cùng lúc — tăng huyết áp, đái tháo đường, đau khớp, mỡ máu — và mỗi bệnh cần thuốc riêng. Kết quả là nhiều người dùng 5-10 loại thuốc mỗi ngày.</p>
  <p>Ba vấn đề phát sinh:</p>
  <p><strong>Tương tác thuốc.</strong> Càng nhiều thuốc, khả năng hai loại ảnh hưởng lẫn nhau càng cao. Một thuốc có thể làm tăng hoặc giảm tác dụng của thuốc khác.</p>
  <p><strong>Tác dụng phụ chồng chất.</strong> Nhiều thuốc cùng gây chóng mặt sẽ làm tăng nguy cơ ngã hơn hẳn một thuốc đơn lẻ.</p>
  <p><strong>Nhầm lẫn khi uống.</strong> Nhiều viên thuốc trông giống nhau, nhiều lịch uống khác nhau — sáng, tối, trước ăn, sau ăn. Người cao tuổi có giảm trí nhớ nhẹ rất dễ uống nhầm hoặc quên.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bước 1 — Lập danh sách thuốc đầy đủ</h2>
  <p>Đây là việc nền tảng và nhiều gia đình chưa làm. Danh sách cần có <strong>mọi thứ người bệnh đưa vào cơ thể có tác dụng dược lý</strong>, không chỉ thuốc có đơn:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thuốc theo đơn của bác sĩ
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thuốc mua tự do ở nhà thuốc (giảm đau, cảm cúm, tiêu hóa)
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thực phẩm chức năng, vitamin, khoáng chất bổ sung
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thuốc đông y, thuốc nam, cao đơn hoàn tán
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thuốc bôi ngoài da, thuốc nhỏ mắt
    </li>
  </ul>

  <p>Với mỗi loại, ghi: tên thuốc, hàm lượng, liều dùng, thời điểm uống trong ngày, và bác sĩ nào kê.</p>
  <p>Cách nhanh nhất: chụp ảnh vỏ hộp và vỉ của tất cả các thuốc, lưu vào một album trên điện thoại. Chia sẻ album này với các anh chị em trong nhà.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bước 2 — Dùng hộp chia thuốc</h2>
  <p>Hộp chia thuốc theo 7 ngày trong tuần, mỗi ngày có ngăn sáng, trưa, tối — giá rẻ và giải quyết được phần lớn vấn đề nhầm lẫn.</p>
  <p>Cách dùng hiệu quả: chia thuốc cho cả tuần vào một buổi cố định (ví dụ sáng Chủ nhật). Việc này cũng giúp phát hiện sớm nếu thuốc sắp hết.</p>
  <p>Với người ở xa, hộp chia thuốc còn có một lợi ích khác: khi gọi video, bảo bố mẹ mở hộp ra là bạn thấy ngay các ngăn nào còn thuốc — biết được có uống đủ không mà không cần hỏi.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bước 3 — Rà soát định kỳ với bác sĩ</h2>
  <p>Mỗi 6-12 tháng, mang <strong>toàn bộ thuốc</strong> (cả vỏ hộp và vỉ) đến bác sĩ để rà soát. Đây là việc rất ít gia đình làm nhưng có giá trị lớn.</p>
  <p>Ba câu nên hỏi bác sĩ trong buổi rà soát:</p>
  <ul style="list-style-type: disc; margin: 1rem 0 1.5rem 1.5rem; color: #241c2e;">
    <li>Trong số này, thuốc nào còn thực sự cần thiết?</li>
    <li>Có thuốc nào tương tác với nhau không?</li>
    <li>Có thuốc nào có thể gây chóng mặt hoặc tăng nguy cơ ngã không?</li>
  </ul>
  <p>Câu hỏi đầu tiên đặc biệt quan trọng. Thuốc thường được thêm vào theo thời gian nhưng ít khi được xem lại có còn cần hay không.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Sau mỗi lần khám có đơn thuốc mới, việc quan trọng nhất là <strong>bỏ thuốc cũ không còn dùng ra khỏi tủ ngay</strong>. Để lẫn thuốc cũ và thuốc mới trong cùng một chỗ là nguyên nhân phổ biến nhất khiến người cao tuổi uống nhầm — đặc biệt khi hai loại có vỏ hộp giống nhau hoặc tên gần giống nhau.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nhóm thuốc cần thận trọng đặc biệt ở người cao tuổi</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Nhóm thuốc</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Vấn đề cần chú ý</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc ngủ, thuốc an thần</td>
          <td style="padding: 0.8rem 1rem;">Tăng nguy cơ ngã, lú lẫn, suy giảm nhận thức</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc kháng viêm không steroid (NSAID)</td>
          <td style="padding: 0.8rem 1rem;">Loét dạ dày, ảnh hưởng thận, tăng huyết áp</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc huyết áp và lợi tiểu</td>
          <td style="padding: 0.8rem 1rem;">Hạ huyết áp tư thế gây chóng mặt khi đứng dậy</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc kháng đông</td>
          <td style="padding: 0.8rem 1rem;">Nguy cơ chảy máu; tương tác với nhiều thực phẩm và thuốc</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thuốc tiểu đường</td>
          <td style="padding: 0.8rem 1rem;">Hạ đường huyết, đặc biệt nếu bỏ bữa</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu có thể do tác dụng phụ của thuốc</h2>
  <p>Khi người cao tuổi xuất hiện triệu chứng mới, nhiều gia đình cho rằng đó là bệnh mới hoặc do tuổi tác. Nhưng tác dụng phụ của thuốc là nguyên nhân cần loại trừ trước tiên — đặc biệt nếu triệu chứng xuất hiện sau khi bắt đầu một thuốc mới.</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chóng mặt, choáng váng khi đứng dậy
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Lú lẫn, hay quên hơn thường ngày
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ngủ nhiều bất thường hoặc mất ngủ mới xuất hiện
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chán ăn, buồn nôn, thay đổi vị giác
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Táo bón hoặc tiêu chảy mới xuất hiện
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Ngã không rõ nguyên nhân
    </li>
  </ul>

  <p>Khi gặp các dấu hiệu này, hãy báo với bác sĩ kèm thông tin về thời điểm bắt đầu thuốc mới — đừng tự ngừng thuốc trước khi hỏi ý kiến.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Hỗ trợ theo dõi việc dùng thuốc</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Nhân viên ANTCARE kiểm tra vỉ thuốc còn lại, nhắc lịch uống và ghi nhận vào báo cáo gửi gia đình. Phù hợp với người cao tuổi sống một mình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bố mẹ quên uống thuốc thì có nên uống bù không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tùy loại thuốc, và cách xử lý khác nhau nên không có quy tắc chung. Với phần lớn thuốc, nếu nhớ ra gần với giờ uống thì uống ngay; nếu đã gần đến liều tiếp theo thì bỏ qua liều đã quên và uống liều tiếp theo như bình thường. Tuyệt đối không uống gấp đôi để bù. Gia đình nên hỏi bác sĩ hoặc dược sĩ cách xử lý cụ thể cho từng loại thuốc bố mẹ đang dùng và ghi lại.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Thuốc đông y và thực phẩm chức năng có tương tác với thuốc tây không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, và đây là điểm thường bị bỏ qua. Nhiều thảo dược và thực phẩm chức năng có thể tương tác với thuốc điều trị. Ví dụ: một số loại làm tăng hoặc giảm tác dụng của thuốc kháng đông, thuốc huyết áp hoặc thuốc tiểu đường. Vì vậy khi đi khám, cần mang theo và khai báo đầy đủ tất cả những gì người bệnh đang dùng, không chỉ thuốc tây có đơn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có thể tự bỏ bớt thuốc khi thấy đỡ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không nên tự ý. Nhiều thuốc điều trị bệnh mạn tính phải dùng liên tục dù không còn triệu chứng — thuốc huyết áp là ví dụ điển hình. Ngừng đột ngột một số thuốc còn nguy hiểm hơn, ví dụ ngừng đột ngột thuốc chẹn beta có thể gây tăng nhịp tim và huyết áp phản ứng. Tuy nhiên, việc giảm bớt thuốc không cần thiết là hợp lý — nhưng phải do bác sĩ đánh giá và quyết định.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nên bảo quản thuốc thế nào ở nhà?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Không để trong phòng tắm vì độ ẩm cao làm hỏng thuốc. Không để trong tủ lạnh trừ khi hướng dẫn ghi rõ. Giữ thuốc trong bao bì gốc có nhãn và hạn sử dụng — không đổ chung nhiều loại vào một lọ. Kiểm tra hạn sử dụng mỗi 3-6 tháng và bỏ thuốc hết hạn.</p>
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
    "headline": "Quản lý nhiều loại thuốc cho người cao tuổi: Cách tránh nhầm lẫn và tương tác nguy hiểm",
    "description": "Người cao tuổi dùng nhiều thuốc cùng lúc có nguy cơ tương tác và nhầm lẫn cao. Cách lập danh sách thuốc, dùng hộp chia thuốc và rà soát định kỳ với bác sĩ.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 84,
  slug: "quan-ly-nhieu-loai-thuoc-cho-nguoi-cao-tuoi",
  oldSlugs: [
    "quan-ly-nhieu-loai-thuoc-cho-nguoi-cao-tuoi",
    "quan-ly-thuoc-nguoi-cao-tuoi"
  ],
  title: "Quản lý nhiều loại thuốc cho người cao tuổi: Cách tránh nhầm lẫn và tương tác nguy hiểm",
  category: "Chăm sóc thực tế",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Người cao tuổi dùng nhiều thuốc cùng lúc có nguy cơ tương tác và nhầm lẫn cao. Cách lập danh sách thuốc, dùng hộp chia thuốc và rà soát định kỳ với bác sĩ.",
  excerpt: "Người cao tuổi dùng nhiều thuốc cùng lúc có nguy cơ tương tác và nhầm lẫn cao. Cách lập danh sách thuốc, dùng hộp chia thuốc và rà soát định kỳ với bác sĩ.",
  image: "/images/tin-tuc/quan-ly-nhieu-loai-thuoc-cho-nguoi-cao-tuoi.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 84!');
