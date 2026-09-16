const fs = require('fs');
const path = require('path');
const https = require('https');

const imageUrl = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80';
const imageFileName = 'o-nuoc-ngoai-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading main article image...');
  await downloadImage(imageUrl, imageDest);
  console.log('Downloaded image to:', imageDest);

  const newsJsonPath = path.join(__dirname, '../src/data/news.json');
  const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

  // Shift current featured to list
  if (newsData.featured) {
    const prevFeatured = { ...newsData.featured, featured: false };
    newsData.list.unshift(prevFeatured);
  }

  const slug = 'o-nuoc-ngoai-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di';
  const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Ở nước ngoài, mẹ gọi bảo mai đi khám nhưng không ai đưa đi?</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Hướng dẫn cách xử lý an toàn, tinh tế khi bạn đang ở nước ngoài mà bố mẹ ở Việt Nam cần người đưa đi khám bệnh gấp.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Khi con cái ở nước ngoài và bố mẹ cần đi khám gấp, giải pháp không phải là nhờ vả hàng xóm hay đặt xe công nghệ đơn thuần. Bố mẹ lớn tuổi cần một <strong>Trợ lý đồng hành (Carer/Companion)</strong> – người không chỉ đặt xe mà còn túc trực che chắn, hỗ trợ làm thủ tục khám, lấy thuốc và báo cáo tình hình trực tiếp cho con qua nhật ký online.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/thuyet-phuc-bo-me-chap-nhan-dung-bim" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Làm sao thuyết phục bố mẹ chấp nhận dùng bỉm
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/bo-cham-soc-nguoi-nam-liet-tai-nha-gom-nhung-gi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bộ chăm sóc người nằm liệt tại nhà gồm những gì
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/cham-soc-nguoi-sau-dot-quy-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chăm sóc người sau đột quỵ tại nhà: Những điều gia đình cần biết
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bất an lớn nhất của con cái khi ở xa</h2>
  <p>Khoảng cách múi giờ và địa lý khiến những cuộc gọi từ Việt Nam trở thành áp lực tâm lý cực lớn. Khi mẹ gọi sang thông báo: <em>"Mai mẹ thấy đau ngực/chóng mặt, chắc phải đi khám"</em>, phản ứng đầu tiên của người con ở xa là hoảng loạn:</p>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hàng xóm hay họ hàng cũng có công việc riêng, không thể nhờ vả mãi.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đặt Grab cho mẹ tự đi thì sợ mẹ bị ngã, nhầm lẫn phòng khám hoặc bị đẩy đưa ở bệnh viện công.
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thuê giúp việc theo giờ thì họ không có kỹ năng giao tiếp y tế hay nhẫn nại khi làm thủ tục.
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">4 việc cần làm ngay khi tiếp nhận cuộc gọi từ bố mẹ</h2>
  
  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 35%;">Bước xử lý</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Hành động cụ thể</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">1. Giữ bình tĩnh &amp; đánh giá mức độ khẩn cấp</td>
          <td style="padding: 0.8rem 1rem;">Hỏi rõ triệu chứng của mẹ. Nếu là cấp cứu y tế, hướng dẫn mẹ hoặc gọi ngay 115. Nếu là khám tổng quát/tái khám, lên lịch hẹn trong ngày.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">2. Không tự đặt áp lực "phải có mặt bằng mọi giá"</td>
          <td style="padding: 0.8rem 1rem;">Việc bạn cuống cuồng bay về không giải quyết được ca khám vào sáng mai. Điều cần thiết là một sự trợ giúp uy tín tại chỗ.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">3. Ủy quyền Dịch vụ Đồng hành Chuyên nghiệp</td>
          <td style="padding: 0.8rem 1rem;">Đặt dịch vụ Carer theo ca 4-8 tiếng để có người đến tận nhà đưa mẹ đi, cầm đồ đạc, dìu đi lại và kê ghế cho mẹ ngồi chờ.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">4. Yêu cầu Báo cáo thời gian thực (Real-time Report)</td>
          <td style="padding: 0.8rem 1rem;">Người đồng hành sẽ cập nhật kết quả khám, đơn thuốc và lời dặn của bác sĩ qua Zalo/WhatsApp cho bạn ngay sau ca khám.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Khoảng cách địa lý không làm giảm trách nhiệm hay tình yêu thương, nhưng việc sử dụng dịch vụ đồng hành chuyên nghiệp sẽ giúp bạn chăm sóc bố mẹ chu đáo nhất mà không gây xáo trộn cuộc sống hay tâm lý của cả hai bên.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Dịch vụ Trợ lý đồng hành &amp; Chăm sóc người cao tuổi tận tâm tại Hà Nội. Giúp bạn an tâm công tác dù ở bất kỳ đâu trên thế giới.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Hotline 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Liên hệ ANTCARE ngay
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp (FAQ)</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người đồng hành của ANTCARE có hỗ trợ nghe lời dặn bác sĩ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Trợ lý đồng hành sẽ đi cùng bố mẹ vào phòng khám (khi được cho phép), ghi chép cẩn thận lời dặn của bác sĩ về đơn thuốc, chế độ ăn uống và chụp ảnh gửi trực tiếp cho gia đình.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tôi ở nước ngoài thì thanh toán chi phí như thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">ANTCARE hỗ trợ thanh toán linh hoạt qua chuyển khoản ngân hàng quốc tế, thẻ tín dụng hoặc chuyển khoản nội địa nhanh chóng.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <em>Lưu ý: Nội dung bài viết mang tính tham khảo. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thay thế cho chẩn đoán hay điều trị y khoa.</em>
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ở Nước Ngoài, Mẹ Gọi Bảo Mai Đi Khám Nhưng Không Ai Đưa Đi?",
    "description": "Hướng dẫn cách xử lý an toàn, tinh tế khi bạn đang ở nước ngoài mà bố mẹ ở Việt Nam cần người đưa đi khám bệnh gấp.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

  newsData.featured = {
    id: 102,
    slug: slug,
    oldSlugs: [
      slug,
      'o-nuoc-ngaoi-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di'
    ],
    title: 'Ở nước ngoài, mẹ gọi bảo mai đi khám nhưng không ai đưa đi?',
    category: 'Giải pháp gia đình',
    date: '16/09/2026',
    author: {
      name: 'ANTCARE – Kiến chăm tổ',
      image: '/images/huyen-trang.jpg',
      description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
    },
    description: 'Hướng dẫn cách xử lý an toàn, tinh tế khi bạn đang ở nước ngoài mà bố mẹ ở Việt Nam cần người đưa đi khám bệnh gấp.',
    excerpt: 'Hướng dẫn cách xử lý an toàn, tinh tế khi bạn đang ở nước ngoài mà bố mẹ ở Việt Nam cần người đưa đi khám bệnh gấp.',
    image: `/images/tin-tuc/${imageFileName}`,
    featured: true,
    content: articleContent
  };

  fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
  console.log('Successfully added article 102 to news.json as featured!');
}

run().catch(console.error);
