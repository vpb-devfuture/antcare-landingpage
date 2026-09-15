const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\ta_quan_vs_ta_dan_comparison_1789442017845.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured && newsData.featured.id !== 89) {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Tã quần hay tã dán: Chọn loại nào cho bố mẹ</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Đây là câu hỏi được hỏi nhiều nhất khi gia đình bắt đầu mua bỉm cho người lớn. Câu trả lời không nằm ở giá hay thương hiệu mà ở khả năng vận động.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Chọn theo <strong>khả năng vận động</strong>, không theo giá:<br>
      <strong>Tã quần</strong> mặc và cởi như quần lót, phù hợp người <strong>còn tự đi lại và tự thay được</strong> — giữ được sự tự chủ và kín đáo dưới quần áo.<br>
      <strong>Tã dán</strong> mở hai bên bằng miếng dán, thay được khi người dùng đang nằm hoặc ngồi, phù hợp người <strong>đi lại khó khăn hoặc nằm nhiều, cần người khác hỗ trợ thay</strong>.<br>
      Nhiều gia đình dùng kết hợp: tã quần ban ngày khi có người dìu đi lại, tã dán ban đêm để thay không cần đánh thức.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khác biệt về thiết kế</h2>
  <p><strong>Tã quần</strong> có dạng khép kín như quần lót, mặc bằng cách xỏ chân vào và kéo lên. Hai bên hông là chun co giãn liền, không có miếng dán. Khi thay, xé rách hai bên theo đường xé sẵn rồi kéo xuống.</p>
  <p><strong>Tã dán</strong> ở dạng mở, trải phẳng ra được. Cố định bằng miếng dán ở hai bên hông, điều chỉnh được độ chặt. Khi thay, chỉ cần gỡ miếng dán.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">So sánh theo tình huống sử dụng</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Tình huống</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Tã quần</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Tã dán</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Người còn tự đi lại</td>
          <td style="padding: 0.8rem 1rem;">Rất phù hợp</td>
          <td style="padding: 0.8rem 1rem;">Kém tiện</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Người tự thay được</td>
          <td style="padding: 0.8rem 1rem;">Rất phù hợp</td>
          <td style="padding: 0.8rem 1rem;">Khó tự làm</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Người nằm nhiều</td>
          <td style="padding: 0.8rem 1rem;">Khó thay</td>
          <td style="padding: 0.8rem 1rem;">Rất phù hợp</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Cần người khác hỗ trợ thay</td>
          <td style="padding: 0.8rem 1rem;">Vất vả hơn</td>
          <td style="padding: 0.8rem 1rem;">Dễ hơn nhiều</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Thay ban đêm không muốn đánh thức</td>
          <td style="padding: 0.8rem 1rem;">Phải nâng người dậy</td>
          <td style="padding: 0.8rem 1rem;">Thay khi đang nằm</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Kín đáo dưới quần áo</td>
          <td style="padding: 0.8rem 1rem;">Tốt hơn</td>
          <td style="padding: 0.8rem 1rem;">Có thể lộ đường viền</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Điều chỉnh độ chặt</td>
          <td style="padding: 0.8rem 1rem;">Không điều chỉnh được</td>
          <td style="padding: 0.8rem 1rem;">Điều chỉnh được bằng miếng dán</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Yếu tố tâm lý — thường quyết định nhiều hơn kỹ thuật</h2>
  <p>Với người cao tuổi còn minh mẫn, việc bắt đầu dùng bỉm là một bước chuyển tâm lý khó khăn. Nhiều người từ chối vì cảm thấy đó là dấu hiệu mình đã mất tự chủ.</p>
  <p>Trong tình huống này, tã quần có lợi thế rõ rệt: nó mặc như quần lót, không có tiếng dán, không lộ dưới quần áo. Nhiều người chấp nhận tã quần trong khi kiên quyết từ chối tã dán — dù về mặt chức năng cả hai đều là bỉm.</p>
  <p>Vì vậy nếu bố mẹ đang ở ranh giới giữa hai loại, mà việc thuyết phục là trở ngại chính, hãy bắt đầu bằng tã quần.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ: cách dùng kết hợp</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Nhiều gia đình tìm ra giải pháp tốt nhất là dùng cả hai loại: <strong>tã quần ban ngày</strong> khi người cao tuổi còn ngồi dậy và di chuyển trong nhà, và <strong>tã dán ban đêm</strong> với khả năng thấm hút cao hơn, thay được mà không cần đánh thức người bệnh dậy. Cách này tối ưu cả về chi phí lẫn sự thoải mái.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chọn size đúng — quan trọng hơn chọn loại</h2>
  <p>Sai lầm phổ biến nhất không phải chọn nhầm loại mà là <strong>chọn size quá rộng</strong>. Nhiều gia đình nghĩ rộng hơn thì thoải mái hơn, nhưng thực tế:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Size rộng làm hở vách chống tràn ở đùi — gây tràn ngay cả khi bỉm chưa đầy
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tã quần size rộng dễ bị tụt khi đi lại
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tã dán size rộng phải dán chồng nhiều, gây cộm và khó chịu
    </li>
  </ul>

  <p>Cách đo đúng: dùng thước dây đo <strong>vòng hông</strong> tại chỗ rộng nhất, rồi đối chiếu bảng size của nhà sản xuất. Lưu ý bảng size khác nhau giữa các hãng nên phải xem bảng của đúng hãng định mua.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào cần chuyển từ tã quần sang tã dán</h2>
  <p>Đây là bước chuyển thường diễn ra dần dần. Các dấu hiệu cho thấy đã đến lúc:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bố mẹ không tự thay được nữa, phải nhờ người khác
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Việc đứng lên để thay gây mệt hoặc có nguy cơ ngã
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thời gian nằm trong ngày nhiều hơn thời gian ngồi và đi lại
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Cần thay ban đêm nhiều lần, việc đánh thức dậy gây mất ngủ
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Lượng nước tiểu tăng, cần loại thấm hút cao hơn mà tã quần không đáp ứng đủ
    </li>
  </ul>

  <p>Không cần chuyển đột ngột. Có thể thử tã dán ban đêm trước, giữ tã quần ban ngày, rồi chuyển dần khi tình trạng thay đổi.</p>

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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tã quần có đắt hơn tã dán không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Thông thường tã quần có giá nhỉnh hơn tã dán cùng mức thấm hút, do quy trình sản xuất phức tạp hơn. Tuy nhiên chênh lệch không lớn và không nên là yếu tố quyết định. Chọn sai loại gây tốn kém hơn nhiều: dùng tã dán cho người còn đi lại khiến họ khó tự thay, dễ tự bỏ không dùng; dùng tã quần cho người nằm liệt khiến việc thay rất khó khăn và có nguy cơ làm tổn thương da khi kéo.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người nằm liệt có dùng tã quần được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Về mặt kỹ thuật là được nhưng rất bất tiện và không nên. Để thay tã quần cho người nằm, người chăm sóc phải nâng hông người bệnh lên, kéo tã cũ xuống rồi kéo tã mới lên — thao tác này vừa khó vừa có nguy cơ làm xây xát da, đặc biệt ở vùng xương cùng vốn đã dễ loét. Tã dán thay được bằng cách nghiêng người sang bên, an toàn và nhanh hơn nhiều.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có loại nào dùng được cho cả hai tình huống không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có loại tã dán thiết kế mỏng nhẹ hơn để người còn đi lại dùng được, nhưng nhìn chung mỗi loại vẫn tối ưu cho một tình huống. Nhiều gia đình chọn cách dùng kết hợp thay vì tìm loại đa năng: tã quần ban ngày, tã dán ban đêm. Cách này vừa giữ được sự thoải mái ban ngày vừa thuận tiện khi thay ban đêm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Tã quần có bị tụt khi đi lại không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nếu chọn đúng size thì không. Tã quần có chun co giãn ở eo và đùi giữ cố định như quần lót. Nguyên nhân phổ biến khiến tã quần bị tụt là chọn size quá rộng — nhiều gia đình chọn rộng hơn để bố mẹ thoải mái, nhưng điều này vừa gây tụt vừa gây tràn do hở vách chống tràn ở đùi. Cần đo vòng hông và chọn đúng theo bảng size của nhà sản xuất.</p>
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
    "headline": "Tã quần hay tã dán: Chọn loại nào cho bố mẹ",
    "description": "So sánh tã quần và tã dán người lớn: khác biệt về thiết kế, tình huống phù hợp, ưu nhược điểm và cách chọn theo khả năng vận động của người dùng.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: 89,
  slug: "ta-quan-hay-ta-dan-chon-loai-nao",
  oldSlugs: [
    "kien-thuc/ta-quan-hay-ta-dan-chon-loai-nao",
    "tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao"
  ],
  title: "Tã quần hay tã dán: Chọn loại nào cho bố mẹ",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "So sánh tã quần và tã dán người lớn: khác biệt về thiết kế, tình huống phù hợp, ưu nhược điểm và cách chọn theo khả năng vận động của người dùng.",
  excerpt: "So sánh tã quần và tã dán người lớn: khác biệt về thiết kế, tình huống phù hợp, ưu nhược điểm và cách chọn theo khả năng vận động của người dùng.",
  image: "/images/tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 89 to news.json!');
