const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_montessori_senior_bright_1789539552031.jpg`;
const imageFileName = 'montessori-cho-nguoi-cao-tuoi.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

fs.copyFileSync(generatedImageSrc, imageDest);
console.log('Copied Montessori bright object image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Shift current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const slug = 'montessori-cho-nguoi-cao-tuoi';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Montessori cho người cao tuổi: vì sao phương pháp này quan trọng hơn bạn nghĩ</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Không phải trò tiêu khiển cho qua ngày. Montessori là cách trả lại cho ông bà thứ mà tuổi già lấy đi nhiều nhất: quyền được tự làm và cảm giác mình còn cần thiết.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      <strong>Montessori cho người cao tuổi</strong> là cách tổ chức môi trường sống và hoạt động hằng ngày sao cho người lớn tuổi tự làm được nhiều nhất có thể, bằng các việc có mục đích rõ ràng và có ý nghĩa với chính họ. Phương pháp này giúp duy trì trí nhớ thủ tục, giảm bồn chồn lo âu ở người sa sút trí tuệ và bảo vệ tự chủ bản thân.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Quy Trình Đưa Người Cao Tuổi Đi Khám Bệnh Tại Hà Nội An Toàn Tuyệt Đối
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/khi-con-o-xa-an-tam-voi-app-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Khi Con Ở Xa: An Tâm Tuyệt Đối Với Hệ Thống Báo Cáo Qua App Của ANTCARE
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/3-dich-vu-cot-loi-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chi Tiết 3 Dịch Vụ Chăm Sóc Người Cao Tuổi Chuẩn Quốc Tế Của ANTCARE
        </a>
      </li>
    </ul>
  </div>

  <p>Trong hầu hết các gia đình Việt, thương một người già thường được thể hiện bằng cách làm thay. Cụ đừng rót nước, để con rót. Bà đừng gấp quần áo, cháu gấp cho. Ông cứ ngồi yên xem tivi, mọi việc có người lo. Đó là tình thương thật, nhưng nếu kéo dài nhiều tháng, nó tạo ra một hệ quả ít ai để ý: người cao tuổi dần mất đi cơ hội sử dụng chính những khả năng còn lại của mình.</p>
  <p>Phương pháp Montessori dành cho người cao tuổi ra đời để trả lời đúng vấn đề đó. Và điều khiến nó đáng chú ý là nó không đòi hỏi thiết bị hiện đại hay chi phí lớn, chỉ đòi hỏi một cách nhìn khác về người già trong nhà.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Montessori cho người cao tuổi là gì</h2>
  <p>Montessori vốn là mô hình giáo dục do bác sĩ Maria Montessori xây dựng đầu thế kỷ 20, dựa trên niềm tin rằng con người học tốt nhất khi được tự làm trong một môi trường đã được chuẩn bị phù hợp. Từ những năm 1990, các nhà tâm lý học lão khoa, tiêu biểu là tiến sĩ Cameron Camp tại Mỹ, đã chuyển hóa nguyên tắc này thành một chương trình hoạt động dành cho người sa sút trí tuệ.</p>

  <div style="border-left: 4px solid #7c4dcc; background: #fcfbfe; padding: 1.2rem 1.5rem; margin: 1.5rem 0; font-size: 1.05rem; font-style: italic; color: #4f2d7f;">
    "Thay vì hỏi người cao tuổi còn làm được gì so với trước kia, ta hỏi môi trường cần thay đổi thế nào để họ làm được nhiều nhất trong hôm nay."
  </div>

  <p>Nói cách khác, khi ông cụ không cài được nút áo, vấn đề không nằm hoàn toàn ở ông cụ. Nó còn nằm ở chiếc áo có hàng nút quá nhỏ. Đổi sang áo nút to, ông tự mặc được, và cảm giác về bản thân ông thay đổi theo.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">5 nguyên tắc nền tảng và ý nghĩa với tuổi già</h2>
  
  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">1. Tôn trọng con người trưởng thành</h3>
  <p>Người cao tuổi đã sống trọn một đời, từng nuôi con, từng làm nghề, từng ra quyết định lớn. Mọi vật liệu và cách nói chuyện phải phản ánh điều đó. Màu sắc nhã, chất liệu thật (gỗ, bèo tây, vải), chủ đề gắn với công việc và ký ức của người lớn.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">2. Tự chủ trong khả năng cho phép</h3>
  <p>Nguyên tắc vàng là không bao giờ làm thay điều mà người cao tuổi còn tự làm được, dù chậm hơn. Chậm không phải vấn đề. Mất khả năng mới là vấn đề.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">3. Môi trường được chuẩn bị sẵn</h3>
  <p>Đồ dùng đặt đúng tầm với, có nhãn chữ to, ánh sáng đủ, nền tương phản với vật dụng để người mắt kém nhìn rõ. Một khay hoạt động đặt cố định ở bàn phòng khách sẽ được dùng thường xuyên hơn hẳn một hộp đồ cất trong tủ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">4. Học qua giác quan và qua lặp lại</h3>
  <p>Ở người suy giảm trí nhớ, trí nhớ thủ tục (ký ức của đôi tay về những việc đã làm hàng nghìn lần) được giữ lại lâu hơn trí nhớ sự kiện. Bà có thể không nhớ hôm nay là thứ mấy, nhưng tay vẫn biết cách gấp chiếc khăn, lăn sợi bèo tây.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">5. Hoạt động phải có mục đích nhìn thấy được</h3>
  <p>Xếp hình rồi tháo ra là bài tập. Xếp khăn để gia đình dùng bữa tối là hoạt động có mục đích. Chuỗi hạt xâu xong để tặng cháu gái là hoạt động có ý nghĩa. Não bộ và cảm xúc phản ứng rất tích cực với các kết quả nhìn thấy được.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bảng so sánh: Chăm sóc thông thường vs Tiếp cận Montessori</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 22%;">Tình huống</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 39%;">Cách chăm sóc quen thuộc (Làm thay)</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 39%;">Cách tiếp cận Montessori (Tự chủ)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Bữa cơm hằng ngày</td>
          <td style="padding: 0.8rem 1rem;">Con cháu dọn sẵn hoàn toàn, mời ông bà chỉ việc ngồi vào ăn.</td>
          <td style="padding: 0.8rem 1rem;">Ông bà phụ xếp bát đũa, gấp khăn ăn, nhặt rau theo khả năng.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Bà quên tên cháu</td>
          <td style="padding: 0.8rem 1rem;">Hỏi lại để bà nhớ, nhắc đi nhắc lại bắt bà trả lời.</td>
          <td style="padding: 0.8rem 1rem;">Chủ động nhắc tên trong câu chuyện, tránh đặt bà vào thế bị kiểm tra.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thời gian rảnh rỗi</td>
          <td style="padding: 0.8rem 1rem;">Bật tivi cho ông ngồi xem thụ động cả ngày.</td>
          <td style="padding: 0.8rem 1rem;">Đặt khay rèn luyện thủ công sẵn, ông tự chọn và bắt đầu khi muốn.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Ông làm đổ nước</td>
          <td style="padding: 0.8rem 1rem;">Cất bình nước đi, từ nay con cháu rót hộ hoàn toàn.</td>
          <td style="padding: 0.8rem 1rem;">Đổi sang bình nhỏ nhẹ hơn có quai để ông tiếp tục tự rót nước.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Kết quả chưa đẹp</td>
          <td style="padding: 0.8rem 1rem;">Lén sửa lại cho gọn gàng sau lưng ông bà.</td>
          <td style="padding: 0.8rem 1rem;">Giữ nguyên thành quả và sử dụng nó thật trong sinh hoạt nhà.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Lộ trình 7 ngày bắt đầu áp dụng tại nhà</h2>
  <ol style="padding-left: 1.5rem; line-height: 1.8;">
    <li><strong>Ngày 1: Quan sát và ghi lại:</strong> Ghi ra 3 việc ông bà tự làm tốt và 3 việc đang phải nhờ người khác.</li>
    <li><strong>Ngày 2: Hỏi về cuộc đời họ:</strong> Tìm hiểu nghề nghiệp và sở thích cũ (may vá thích sợi/vải, buôn bán thích phân loại/đếm).</li>
    <li><strong>Ngày 3: Chọn 1 hoạt động duy nhất:</strong> Bắt đầu bằng việc đơn giản như gấp khăn hoặc đan sợi bèo tây.</li>
    <li><strong>Ngày 4: Chuẩn bị chỗ cố định:</strong> Đặt khay hoạt động ở nơi ánh sáng tốt, dễ nhìn thấy.</li>
    <li><strong>Ngày 5: Mời chứ không yêu cầu:</strong> Nói <em>"Bà giúp con việc này với"</em> thay vì bắt tập.</li>
    <li><strong>Ngày 6: Giảm trợ giúp một bậc:</strong> Rút dần sự can thiệp để ông bà tự làm chủ quy trình.</li>
    <li><strong>Ngày 7: Sử dụng thành quả thực tế:</strong> Mang sản phẩm ông bà làm ra dùng thật trước mặt họ.</li>
  </ol>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Montessori không đảo ngược được tiến trình sa sút trí tuệ và không thay thế điều trị y khoa. Giá trị của nó nằm ở chất lượng từng ngày sống. Nếu người thân có thay đổi đột ngột về trí nhớ hoặc cảm xúc, gia đình vẫn cần đưa đi khám chuyên khoa Lão khoa / Thần kinh.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Bộ dụng cụ rèn luyện Montessori</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Các bảng rèn luyện thủ công từ sợi bèo tây tự nhiên &amp; gỗ cao su bo tròn an toàn, thiết kế riêng cho người cao tuổi Việt Nam.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Hotline 0969 032 360
      </a>
      <a href="https://antcare.vn/san-pham" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Xem bộ dụng cụ rèn luyện
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp (FAQ)</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Montessori cho người cao tuổi có giống Montessori cho trẻ em không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Giống về nguyên tắc tự làm qua giác quan nhưng khác hoàn toàn về nội dung. Trẻ em phát triển kỹ năng mới, còn người cao tuổi giữ lại kỹ năng đang có và khơi gợi trí nhớ thủ tục. Vật liệu phải mang tính người lớn (dụng cụ thật, gỗ thật, sợi bèo tây thật) chứ không dùng đồ chơi màu sặc sỡ của trẻ em.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người thân bị suy giảm trí nhớ nặng có áp dụng được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Được, nhưng cần điều chỉnh độ khó. Chọn hoạt động một bước lặp lại như xếp khăn, lăn sợi, phân loại hạt theo màu và rút thời lượng xuống 5-10 phút. Quan trọng nhất là chấp nhận kết quả không hoàn hảo và không sửa lại trước mặt cụ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Mỗi ngày nên dành bao nhiêu thời gian cho hoạt động Montessori?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Từ 15 đến 30 phút mỗi ngày vào khung giờ cố định ông bà tỉnh táo nhất (thường là giữa buổi sáng) để tạo thói quen đều đặn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Montessori có chữa được bệnh Alzheimer không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không. Montessori không chữa khỏi bệnh nhưng giúp cải thiện chất lượng sống: người cao tuổi ít bồn chồn hơn, giữ sự tự chủ lâu hơn và hòa nhập tốt hơn với gia đình.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <em>Lưu ý: Nội dung bài viết mang tính tham khảo. ANTCARE cung cấp dịch vụ hỗ trợ và bộ dụng cụ rèn luyện phi y tế.</em>
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Montessori cho người cao tuổi: vì sao phương pháp này quan trọng hơn bạn nghĩ",
    "description": "Phương pháp Montessori cho người cao tuổi là gì, vì sao nó giúp ông bà giữ được sự tự chủ và tinh thần tích cực, cùng lộ trình 7 ngày áp dụng ngay tại nhà.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 110,
  slug: slug,
  oldSlugs: [
    slug,
    'cam-nang/montessori-cho-nguoi-cao-tuoi'
  ],
  title: 'Montessori cho người cao tuổi: vì sao phương pháp này quan trọng hơn bạn nghĩ',
  category: 'Rèn luyện trí não',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Phương pháp Montessori cho người cao tuổi là gì, vì sao nó giúp ông bà giữ được sự tự chủ và tinh thần tích cực, cùng lộ trình 7 ngày áp dụng ngay tại nhà.',
  excerpt: 'Phương pháp Montessori cho người cao tuổi là gì, vì sao nó giúp ông bà giữ được sự tự chủ và tinh thần tích cực, cùng lộ trình 7 ngày áp dụng ngay tại nhà.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 110 to news.json as featured!');
