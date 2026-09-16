const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_busy_board_senior_bright_1789539850581.jpg`;
const imageFileName = 'busy-board-cho-nguoi-lon-tuoi.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

fs.copyFileSync(generatedImageSrc, imageDest);
console.log('Copied Busy Board bright object image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Shift current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const slug = 'busy-board-cho-nguoi-lon-tuoi';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Bảng busy board cho người lớn tuổi tác động đến sức khỏe tinh thần như thế nào</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Một tấm bảng gắn khóa, dây và nút bấm nghe có vẻ đơn giản. Nhưng với người cao tuổi hay bồn chồn, mất ngủ hoặc thu mình, nó chạm đúng vào ba nhu cầu tâm lý mà lời an ủi không chạm tới được.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      <strong>Busy board cho người lớn tuổi</strong> là bảng gắn các chi tiết thao tác được như khóa, chốt, dây buộc, nút bấm, giúp đôi tay có việc làm liên tục. Tác động lên sức khỏe tinh thần đến từ ba cơ chế: chuyển sự bồn chồn thành vận động có đích, tạo lại cảm giác kiểm soát tự chủ, và tạo trạng thái tập trung nhẹ giúp giảm lo âu ở người sa sút trí tuệ.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/montessori-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Montessori cho người cao tuổi: vì sao phương pháp này quan trọng hơn bạn nghĩ
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/dua-nguoi-cao-tuoi-di-kham-benh-can-tro-ly-chuyen-mon" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Quy Trình Đưa Người Cao Tuổi Đi Khám Bệnh Tại Hà Nội An Toàn Tuyệt Đối
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/khi-con-o-xa-an-tam-voi-app-antcare" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Khi Con Ở Xa: An Tâm Tuyệt Đối Với Hệ Thống Báo Cáo Qua App Của ANTCARE
        </a>
      </li>
    </ul>
  </div>

  <p>Nếu trong nhà bạn có người lớn tuổi hay xoắn vạt áo, sờ nắm mép bàn, mở tủ rồi đóng lại, hỏi đi hỏi lại một câu đã được trả lời năm phút trước, thì bạn đang chứng kiến một nhu cầu chưa được đáp ứng chứ không đơn thuần là triệu chứng bệnh. Đôi tay người già vẫn muốn làm việc. Khi không có gì để làm, chúng tự tìm việc, và Busy board ra đời để trả lời chính xác nhu cầu này.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Busy board cho người lớn tuổi là gì</h2>
  <p>Busy board (bảng bận rộn / activity board) là mặt phẳng gắn cố định các chi tiết mô phỏng đúng những việc người cao tuổi đã làm cả đời: cài khóa, xoay chốt cửa, buộc dây, cài nút áo, bật công tắc, lần chuỗi hạt. Bảng dành cho người già hoàn toàn khác bảng trẻ em về bản chất:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Yếu tố</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Bảng cho trẻ em</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Bảng cho người cao tuổi</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Mục tiêu</td>
          <td style="padding: 0.8rem 1rem;">Học kỹ năng mới.</td>
          <td style="padding: 0.8rem 1rem;">Giữ lại kỹ năng đang có, làm dịu bồn chồn.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Hình ảnh</td>
          <td style="padding: 0.8rem 1rem;">Con vật, màu sắc rực rỡ sặc sỡ.</td>
          <td style="padding: 0.8rem 1rem;">Màu nhã trung tính, gần với đồ dùng thật trong nhà.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Kích thước chi tiết</td>
          <td style="padding: 0.8rem 1rem;">Nhỏ, đòi hỏi độ khéo léo trẻ nhỏ.</td>
          <td style="padding: 0.8rem 1rem;">To, dễ nắm, phù hợp tay cứng khớp hoặc run.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Chất liệu</td>
          <td style="padding: 0.8rem 1rem;">Nhựa là chủ yếu.</td>
          <td style="padding: 0.8rem 1rem;">Gỗ cao su, sợi bèo tây tự nhiên, vải, kim loại nhẵn.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">3 cơ chế tác động lên sức khỏe tinh thần</h2>
  
  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Cơ chế 1: Chuyển bồn chồn thành vận động có đích</h3>
  <p>Thay vì xoắn vạt áo hay đi tới đi lui cáu gắt lúc chiều muộn, bàn tay xoay một chiếc chốt hoặc mở một ổ khóa trên bảng. Năng lượng bồn chồn được giải tỏa tự nhiên mà không gây căng thẳng cho người chăm sóc.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Cơ chế 2: Trả lại cảm giác kiểm soát</h3>
  <p>Trên một tấm bảng, khóa mở khi cụ muốn mở, chốt đóng khi cụ muốn đóng. Đây là không gian nhỏ nhưng trọn vẹn quyền tự chủ cho một người đã mất gần hết quyền tự quyết trong sinh hoạt.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Cơ chế 3: Tạo trạng thái tập trung nhẹ</h3>
  <p>Đôi tay làm việc vừa sức giúp chú ý được neo vào hiện tại, giảm lo nghĩ mệt mỏi về bệnh tật hay phiền muộn con cháu.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nhóm chi tiết và khả năng sinh hoạt được duy trì</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 30%;">Nhóm chi tiết</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 30%;">Thao tác</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 40%;">Liên hệ sinh hoạt hằng ngày</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Khóa, chốt, then cài</td>
          <td style="padding: 0.8rem 1rem;">Xoay, gạt, kéo</td>
          <td style="padding: 0.8rem 1rem;">Tự mở cửa, tự đóng cửa sổ, cảm giác an toàn trong nhà.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nút áo, khóa kéo, móc gài</td>
          <td style="padding: 0.8rem 1rem;">Cài, kéo, gài</td>
          <td style="padding: 0.8rem 1rem;">Tự mặc và cởi quần áo hàng ngày.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Dây buộc, dây tết bèo tây</td>
          <td style="padding: 0.8rem 1rem;">Buộc, luồn, tết</td>
          <td style="padding: 0.8rem 1rem;">Tự buộc dây giày, giữ độ khéo léo phối hợp 2 tay.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Khung đan thành phẩm</td>
          <td style="padding: 0.8rem 1rem;">Đan, tết, gập</td>
          <td style="padding: 0.8rem 1rem;">Tạo ra sản phẩm lót ly/giỏ nhỏ hoàn chỉnh để mang tặng.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Danh sách kiểm tra an toàn trước khi mua</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Cạnh và góc bo tròn, không có dằm gỗ. Không có chi tiết rời nhỏ hơn 4cm. Dây buộc không dài quá để tránh quấn tay. Dùng chất liệu tự nhiên không mùi nhựa. Bảng treo tường phải bắt vít chắc chắn, độ cao vừa tầm ngồi của ông bà.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Bảng rèn luyện Busy Board Chuyên Dụng</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Bảng bận rộn kết hợp khung đan sợi bèo tây thủ công: Luyện tập xong là có quà đẹp đem tặng con cháu &amp; hàng xóm.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Hotline 0969 032 360
      </a>
      <a href="https://antcare.vn/san-pham" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Xem bảng busy board ANTCARE
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp (FAQ)</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Busy board có thực sự tốt cho người sa sút trí tuệ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Các hoạt động dùng tay lặp lại giúp giảm biểu hiện bồn chồn và tăng thời gian tham gia ở người sa sút trí tuệ, là công cụ hỗ trợ tinh thần hiệu quả.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bảng cho trẻ em dùng lại cho ông bà được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không nên. Bảng trẻ em có màu sắc sặc sỡ khiến ông bà cảm thấy bị coi như trẻ con, chi tiết nhỏ khó thao tác với tay run/cứng khớp và có nguy cơ mất an toàn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nên treo bảng ở đâu trong nhà?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đặt ở nơi người cao tuổi ngồi nhiều nhất và trong tầm mắt (cạnh ghế phòng khách hoặc đầu giường) ở độ cao vừa tầm tay với khi ngồi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Dùng bảng buổi tối có giúp ông bà ngủ ngon hơn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Khoảng 15 phút thao tác tay nhẹ nhàng trước giờ ngủ tạo nghi thức chuyển trạng thái giúp cơ thể thư giãn và dễ đi vào giấc ngủ hơn.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <em>Lưu ý: Nội dung bài viết mang tính tham khảo. ANTCARE cung cấp dịch vụ hỗ trợ và dụng cụ rèn luyện phi y tế.</em>
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bảng busy board cho người lớn tuổi tác động đến sức khỏe tinh thần như thế nào",
    "description": "Bảng busy board cho người cao tuổi hoạt động thế nào, vì sao nó làm dịu lo âu và bồn chồn ở người sa sút trí tuệ, cách chọn bảng an toàn và dùng đúng 15 phút mỗi ngày.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 111,
  slug: slug,
  oldSlugs: [
    slug,
    'cam-nang/busy-board-cho-nguoi-lon-tuoi'
  ],
  title: 'Bảng busy board cho người lớn tuổi tác động đến sức khỏe tinh thần như thế nào',
  category: 'Rèn luyện trí não',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Bảng busy board cho người cao tuổi hoạt động thế nào, vì sao nó làm dịu lo âu và bồn chồn ở người sa sút trí tuệ, cách chọn bảng an toàn và dùng đúng 15 phút mỗi ngày.',
  excerpt: 'Bảng busy board cho người cao tuổi hoạt động thế nào, vì sao nó làm dịu lo âu và bồn chồn ở người sa sút trí tuệ, cách chọn bảng an toàn và dùng đúng 15 phút mỗi ngày.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 111 to news.json as featured!');
