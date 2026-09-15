const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\bim_nguoi_lon_guide_1789440664610.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured && newsData.featured.id !== 86) {
  const prevFeatured = { ...newsData.featured, featured: false };
  // Check if not already in list
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Bỉm người lớn: Chọn loại nào theo đúng tình trạng của bố mẹ</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Phần lớn gia đình chọn bỉm theo size và thương hiệu. Nhưng thứ quyết định chọn đúng hay sai lại là tình trạng vận động và mức độ són tiểu của bố mẹ.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Chọn bỉm người lớn theo <strong>4 giai đoạn tình trạng</strong>, không theo size hay thương hiệu:<br>
      <strong>Giai đoạn 1 — són tiểu nhẹ, đi lại bình thường</strong>: dùng miếng lót són tiểu, mỏng, kín đáo.<br>
      <strong>Giai đoạn 2 — cần dùng thường xuyên, còn tự đi lại</strong>: dùng tã quần, mặc như quần lót.<br>
      <strong>Giai đoạn 3 — đi lại khó khăn, cần người hỗ trợ</strong>: dùng tã dán kết hợp tấm lót giường.<br>
      <strong>Giai đoạn 4 — nằm liệt</strong>: dùng tã dán thấm hút cao, tấm lót giường, kèm khăn ướt và kem bảo vệ da.<br>
      Chọn sai giai đoạn gây hai hậu quả: tốn kém không cần thiết, và tăng nguy cơ hăm loét da.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao chọn theo giai đoạn thay vì theo size</h2>
  <p>Khi tìm mua bỉm cho bố mẹ, phần lớn gia đình gặp cùng một tình huống: hàng trăm sản phẩm xếp theo thương hiệu và size, không biết bắt đầu từ đâu. Kết quả thường là mua đại một loại, dùng thấy không ổn, rồi đổi sang loại khác.</p>
  <p>Vấn đề nằm ở chỗ cách bày hàng không khớp với cách người ta gặp vấn đề. Người con không nghĩ "mẹ mình cần size M" — họ nghĩ "mẹ mình thỉnh thoảng bị són, không biết dùng gì".</p>
  <p>Dưới đây là cách ANTCARE — Kiến chăm tổ phân loại, dựa trên tình trạng thực tế chứ không dựa trên thông số sản phẩm.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bốn giai đoạn và sản phẩm phù hợp</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Giai đoạn</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Dấu hiệu nhận biết</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Sản phẩm phù hợp</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1 — Són tiểu nhẹ</td>
          <td style="padding: 0.8rem 1rem;">Đi lại bình thường; thỉnh thoảng són khi ho, cười, hắt hơi hoặc không kịp vào nhà vệ sinh</td>
          <td style="padding: 0.8rem 1rem;">Miếng lót són tiểu, mỏng, dán vào quần lót</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">2 — Dùng thường xuyên</td>
          <td style="padding: 0.8rem 1rem;">Cần dùng hằng ngày nhưng vẫn tự đi lại và tự thay được</td>
          <td style="padding: 0.8rem 1rem;">Tã quần mỏng, mặc như quần lót</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">3 — Đi lại khó khăn</td>
          <td style="padding: 0.8rem 1rem;">Cần người dìu hoặc dùng gậy, khó tự thay</td>
          <td style="padding: 0.8rem 1rem;">Tã dán, kết hợp tấm lót giường</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">4 — Nằm liệt</td>
          <td style="padding: 0.8rem 1rem;">Nằm tại giường phần lớn thời gian</td>
          <td style="padding: 0.8rem 1rem;">Tã dán thấm hút cao + tấm lót giường + khăn ướt + kem bảo vệ da</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giai đoạn 1 — Són tiểu nhẹ</h2>
  <p>Đây là giai đoạn đông người nhất nhưng ít ai nói ra. Són tiểu khi ho, cười, hắt hơi hoặc khi nhịn không kịp là tình trạng rất phổ biến ở phụ nữ lớn tuổi, đặc biệt sau sinh nở nhiều lần và sau mãn kinh.</p>
  <p>Nhiều người ở giai đoạn này dùng tạm băng vệ sinh. Cách này không hiệu quả vì băng vệ sinh được thiết kế để thấm máu kinh — đặc tính khác với nước tiểu về độ loãng và tốc độ. Kết quả là thấm chậm, dễ tràn và có mùi.</p>
  <p>Sản phẩm đúng là <strong>miếng lót són tiểu</strong>: mỏng, dán vào quần lót như băng vệ sinh nhưng có lõi thấm chuyên cho nước tiểu và lớp khử mùi.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Són tiểu không phải chuyện đương nhiên của tuổi già và <strong>nhiều trường hợp điều trị được</strong>. Nguyên nhân có thể là suy yếu cơ sàn chậu, nhiễm trùng tiết niệu, tác dụng phụ của thuốc, hoặc phì đại tuyến tiền liệt ở nam giới. Trước khi coi việc dùng miếng lót là giải pháp lâu dài, gia đình nên đưa bố mẹ đi khám để tìm nguyên nhân. Miếng lót giúp sinh hoạt thoải mái trong lúc điều trị, không thay thế việc khám bệnh.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giai đoạn 2 — Dùng thường xuyên nhưng còn tự chủ</h2>
  <p>Khi tình trạng tiến triển đến mức cần dùng hằng ngày, nhưng người cao tuổi vẫn đi lại tốt và tự thay được, thì <strong>tã quần</strong> là lựa chọn phù hợp.</p>
  <p>Ưu điểm lớn nhất của tã quần không nằm ở kỹ thuật mà ở tâm lý: nó mặc và cởi như quần lót, không có tiếng dán, không lộ dưới quần áo. Với người cao tuổi còn minh mẫn và quan tâm đến thể diện, khác biệt này quyết định việc họ có chịu dùng hay không.</p>
  <p>Khi chọn tã quần cho giai đoạn này, nên ưu tiên loại mỏng thay vì loại thấm hút tối đa. Loại dày quá gây vướng víu và nóng, khiến người dùng bỏ ngang.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giai đoạn 3 — Đi lại khó khăn</h2>
  <p>Khi người cao tuổi cần hỗ trợ để đi lại và khó tự thay, <strong>tã dán</strong> trở nên phù hợp hơn. Tã dán mở hai bên nên thay được khi người bệnh đang nằm hoặc ngồi, không cần đứng lên — việc này giảm nguy cơ ngã trong lúc thay.</p>
  <p>Từ giai đoạn này, nên bắt đầu dùng thêm <strong>tấm lót giường</strong>. Không phải để thay thế bỉm mà để bảo vệ đệm và ga giường khi có sự cố tràn, đồng thời giảm khối lượng giặt giũ cho người chăm sóc.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giai đoạn 4 — Nằm liệt</h2>
  <p>Đây là giai đoạn cần nhiều thứ nhất, và cũng là giai đoạn dễ xảy ra biến chứng nhất.</p>
  <p>Ngoài tã dán thấm hút cao và tấm lót giường, gia đình cần thêm:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Khăn ướt lau người</strong> — vệ sinh mỗi lần thay tã, loại không cồn để tránh làm khô da
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Kem bảo vệ da</strong> — tạo lớp ngăn giữa da và ẩm ướt, phòng hăm và loét
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Găng tay dùng một lần</strong> — vệ sinh cho người chăm sóc
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      <strong>Túi đựng rác</strong> — xử lý tã đã dùng, tránh mùi trong phòng
    </li>
  </ul>

  <p>Ở giai đoạn này, nguy cơ lớn nhất không phải tràn mà là <strong>loét tì đè và hăm da</strong>. Da người cao tuổi mỏng, tuần hoàn kém, tiếp xúc lâu với ẩm ướt sẽ tổn thương rất nhanh. Vì vậy việc thay đúng lịch và vệ sinh sạch quan trọng hơn việc chọn loại tã đắt tiền.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ba sai lầm phổ biến khi chọn bỉm</h2>
  <p><strong>Chọn loại thấm hút cao nhất cho mọi giai đoạn.</strong> Loại dày gây nóng, vướng và tốn kém không cần thiết với người mới ở giai đoạn 1 hoặc 2.</p>
  <p><strong>Chọn size lớn hơn cho thoải mái.</strong> Size rộng làm hở vách chống tràn ở đùi, gây tràn ngay cả khi bỉm chưa đầy. Cần đo vòng hông và chọn đúng size.</p>
  <p><strong>Tiết kiệm bằng cách thay ít lần hơn.</strong> Đây là cách tiết kiệm đắt nhất — chi phí điều trị hăm loét cao hơn nhiều so với tiền bỉm tiết kiệm được, chưa kể người bệnh phải chịu đau.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi tình trạng thay đổi</h2>
  <p>Bốn giai đoạn không cố định. Người ở giai đoạn 3 sau khi phục hồi chức năng tốt có thể quay lại giai đoạn 2. Ngược lại, một đợt bệnh hoặc một cú ngã có thể đẩy nhanh từ giai đoạn 1 sang giai đoạn 3.</p>
  <p>Vì vậy gia đình nên xem lại lựa chọn mỗi khi tình trạng bố mẹ thay đổi rõ rệt, thay vì mua mãi một loại theo thói quen.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ (Đã cập nhật slogan theo yêu cầu) -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      antcare - Kiến chăm tổ, để hành trình tuổi già của mỗi người thêm vui khỏe.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bỉm người lớn và bỉm trẻ em khác nhau thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Khác về ba điểm quan trọng. Thứ nhất, khả năng thấm hút: nước tiểu người lớn nhiều hơn nhiều so với trẻ em nên lõi thấm phải lớn hơn. Thứ hai, kích thước và thiết kế vòng hông phù hợp cơ thể người trưởng thành. Thứ ba, nhiều loại bỉm người lớn có thêm tính năng khử mùi vì nước tiểu người cao tuổi thường có mùi nồng hơn. Dùng bỉm trẻ em cho người lớn dễ bị tràn và không đủ thấm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tã quần và tã dán loại nào tốt hơn?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không loại nào tốt hơn tuyệt đối — chúng phục vụ tình trạng khác nhau. Tã quần mặc như quần lót, phù hợp người còn tự đi lại và tự thay được, giúp giữ sự tự chủ và kín đáo. Tã dán mở hai bên bằng miếng dán, phù hợp người nằm nhiều hoặc cần người khác thay, vì thay được mà không cần người bệnh đứng lên. Chọn theo khả năng vận động, không theo giá.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Một ngày cần thay bỉm mấy lần?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Thông thường 3-5 lần mỗi ngày với người dùng cả ngày, tùy lượng nước uống và khả năng thấm của loại bỉm. Nguyên tắc quan trọng hơn con số: thay ngay khi bỉm đã đầy, không để lâu quá 4-6 tiếng kể cả khi bỉm chưa đầy. Da tiếp xúc lâu với ẩm ướt là nguyên nhân trực tiếp gây hăm và loét, đặc biệt ở người cao tuổi có da mỏng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Dùng bỉm có làm bố mẹ mất khả năng tự chủ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là lo ngại phổ biến nhưng không có cơ sở y học. Bỉm là biện pháp hỗ trợ, không phải nguyên nhân gây mất kiểm soát tiểu tiện. Tuy nhiên, nếu người còn tự đi vệ sinh được mà gia đình cho dùng bỉm để tiện, thì việc ít vận động đi lại có thể làm giảm sức cơ theo thời gian. Vì vậy nguyên tắc là chỉ dùng ở mức tình trạng thực sự cần, và vẫn khuyến khích người cao tuổi tự đi vệ sinh khi còn làm được.</p>
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
    "headline": "Bỉm người lớn: Chọn loại nào theo đúng tình trạng của bố mẹ",
    "description": "Hướng dẫn chọn bỉm người lớn theo 4 giai đoạn tình trạng: són tiểu nhẹ, dùng thường xuyên, đi lại khó khăn, nằm liệt. Chọn đúng giúp tiết kiệm và tránh hăm.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: 86,
  slug: "bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me",
  oldSlugs: [
    "kien-thuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me",
    "tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me"
  ],
  title: "Bỉm người lớn: Chọn loại nào theo đúng tình trạng của bố mẹ",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Hướng dẫn chọn bỉm người lớn theo 4 giai đoạn tình trạng: són tiểu nhẹ, dùng thường xuyên, đi lại khó khăn, nằm liệt. Chọn đúng giúp tiết kiệm và tránh hăm.",
  excerpt: "Hướng dẫn chọn bỉm người lớn theo 4 giai đoạn tình trạng: són tiểu nhẹ, dùng thường xuyên, đi lại khó khăn, nằm liệt. Chọn đúng giúp tiết kiệm và tránh hăm.",
  image: "/images/tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 86 to news.json!');
