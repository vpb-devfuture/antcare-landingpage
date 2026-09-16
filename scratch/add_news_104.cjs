const fs = require('fs');
const path = require('path');

const generatedImageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_companion_craft_tea_1789534022115.jpg`;
const imageFileName = 'khong-phai-luc-nao-nguoi-cao-tuoi-cung-can-dieu-duong.jpg';
const imageDest = path.join(__dirname, '../public/images/tin-tuc', imageFileName);

fs.copyFileSync(generatedImageSrc, imageDest);
console.log('Copied object image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Shift current featured to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const slug = 'khong-phai-luc-nao-nguoi-cao-tuoi-cung-can-dieu-duong';
const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Không phải lúc nào người cao tuổi cũng cần điều dưỡng. Có khi họ chỉ cần một người đi cùng.</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Phân biệt sự khác nhau giữa Y tá/Điều dưỡng và Người đồng hành (Companion). Giải pháp chăm sóc tinh thần và an toàn cho người cao tuổi tỉnh táo.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- QUICK ANSWER / AEO BOX -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Khi người cao tuổi vẫn tự sinh hoạt được nhưng gặp rào cản về thể lực và tâm lý cô đơn, thuê điều dưỡng chuyên môn y tế là không cần thiết và tốn kém. Thứ họ cần là một <strong>Bạn đồng hành (Companion)</strong> — một người trẻ trung, am hiểu, cùng đi dạo, uống trà, mua sắm, làm thủ công và hỗ trợ an toàn vận động.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/bo-o-ha-noi-con-cong-tac-5-ngay-ai-dua-bo-di-tai-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bố ở Hà Nội nhưng con đang công tác 5 ngày — ai đưa bố đi tái khám?
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/o-nuoc-ngoai-me-goi-bao-mai-di-kham-nhung-khong-ai-dua-di" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Ở nước ngoài, mẹ gọi bảo mai đi khám nhưng không ai đưa đi?
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/thuyet-phuc-bo-me-chap-nhan-dung-bim" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Làm sao thuyết phục bố mẹ chấp nhận dùng bỉm
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Sự khác biệt giữa Điều dưỡng Y tế và Người đồng hành (Companion)</h2>
  <p>Nhiều gia đình ngần ngại thuê dịch vụ chăm sóc vì nghĩ rằng "bố mẹ chưa đến mức phải có y tá chăm". Đây là sự nhầm lẫn giữa hai nhu cầu hoàn toàn khác nhau:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left; width: 25%;">Tiêu chí</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Điều dưỡng Y tế (Nurse)</th>
          <th style="padding: 0.8rem 1rem; text-align: left; width: 37.5%;">Người đồng hành (Carer/Companion)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Đối tượng phù hợp</td>
          <td style="padding: 0.8rem 1rem;">Bệnh nhân nằm liệt, có vết thương hở, tiêm truyền, đặt xông dạ dày/tiểu.</td>
          <td style="padding: 0.8rem 1rem;">Người già tỉnh táo, đi lại yếu, sợ cô đơn, cần hỗ trợ di chuyển và thủ tục.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nhiệm vụ chính</td>
          <td style="padding: 0.8rem 1rem;">Thực hiện thủ thuật y tế, thay băng, tiêm thuốc, theo dõi chỉ số sinh tồn.</td>
          <td style="padding: 0.8rem 1rem;">Đi dạo, trò chuyện, đi khám, làm đồ thủ công, đảm bảo an toàn té ngã.</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cảm xúc mang lại</td>
          <td style="padding: 0.8rem 1rem;">Cảm giác "mình là bệnh nhân đang điều trị bệnh".</td>
          <td style="padding: 0.8rem 1rem;">Cảm giác "có một người bạn thân thiết đồng hành cuộc sống".</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giá trị tinh thần của sự "Đồng hành"</h2>
  <p>Nỗi sợ lớn nhất của tuổi già không phải là bệnh tật, mà là sự cô lập với xã hội. Một buổi sáng đi dạo công viên, một chuyến thăm bạn cũ hay đơn giản là cùng làm một chiếc lót ly bằng sợi bèo tây sẽ mang lại năng lượng sống tích cực cho người cao tuổi.</p>
  <p>Người đồng hành đóng vai trò là "điểm tựa" vật lý giúp cụ tự tin bước ra khỏi nhà mà không lo ngã, đồng thời là chiếc cầu nối giao tiếp giúp tinh thần cụ luôn minh mẫn.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Lựa chọn đúng hình thức dịch vụ giúp gia đình tiết kiệm chi phí, đồng thời giữ nguyên sự tự chủ và phẩm giá cho bố mẹ. Đừng gán nhãn "bệnh nhân" cho người cao tuổi khi họ chỉ cần một điểm tựa an toàn.
    </p>
  </div>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ</h2>
    <p style="color: #d9ceea; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6; font-weight: 500;">
      Giải pháp Chăm sóc đồng hành (Companionship) chuyên nghiệp cho người cao tuổi tại Hà Nội. Tôn trọng phẩm giá - Tận tụy như người thân.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Dịch vụ Companionship có bao gồm nấu ăn hay dọn dẹp nhà cửa không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Dịch vụ tập trung vào việc chăm sóc và đồng hành cùng người cao tuổi. Nhân sự có thể hỗ trợ hâm nóng thức ăn, chuẩn bị trà bánh nhẹ nhàng nhưng không phải là người giúp việc nhà chuyên sâu.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Chi phí thuê Companion so với Điều dưỡng thế nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Mức giá dịch vụ Companion tối ưu hơn rất nhiều so với Điều dưỡng y tế chuyên trách, phù hợp với các ca đặt linh hoạt theo ca 4-8 tiếng hoặc theo ngày.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <em>Lưu ý: Nội dung bài viết mang tính tham khảo. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế.</em>
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Không Phải Lúc Nào Cũng Cần Điều Dưỡng: Nhu Cầu Đồng Hành Của Người Già",
    "description": "Phân biệt sự khác nhau giữa Y tá/Điều dưỡng và Người đồng hành (Companion). Giải pháp chăm sóc tinh thần và an toàn cho người cao tuổi tỉnh táo.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": { "@type": "Organization", "name": "ANTCARE – Kiến chăm tổ" }
  }
  </script>
</article>`;

newsData.featured = {
  id: 104,
  slug: slug,
  oldSlugs: [
    slug,
    'khong-phai-luc-nao-nguoi-cao-tuoi-cung-can-dieu-duong'
  ],
  title: 'Không phải lúc nào người cao tuổi cũng cần điều dưỡng. Có khi họ chỉ cần một người đi cùng.',
  category: 'Chăm sóc thực tế',
  date: '16/09/2026',
  author: {
    name: 'ANTCARE – Kiến chăm tổ',
    image: '/images/huyen-trang.jpg',
    description: 'Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà'
  },
  description: 'Phân biệt sự khác nhau giữa Y tá/Điều dưỡng và Người đồng hành (Companion). Giải pháp chăm sóc tinh thần và an toàn cho người cao tuổi tỉnh táo.',
  excerpt: 'Phân biệt sự khác nhau giữa Y tá/Điều dưỡng và Người đồng hành (Companion). Giải pháp chăm sóc tinh thần và an toàn cho người cao tuổi tỉnh táo.',
  image: `/images/tin-tuc/${imageFileName}`,
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 104 to news.json as featured!');
