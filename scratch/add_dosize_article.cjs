const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\cach_do_size_bim_concept_1789442159386.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/cach-do-size-bim-nguoi-lon.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured && newsData.featured.id !== 90) {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.id === prevFeatured.id)) {
    newsData.list.unshift(prevFeatured);
  }
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cách đo và chọn size bỉm người lớn chuẩn xác</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Chọn sai size là nguyên nhân số một gây tràn — nhiều hơn cả việc chọn sai loại hay dùng sản phẩm kém chất lượng.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Đo <strong>vòng hông tại chỗ rộng nhất</strong> bằng thước dây, đo khi người mặc quần áo mỏng, thước ôm sát nhưng không siết.<br>
      Đối chiếu số đo với bảng size của <strong>đúng hãng định mua</strong> — bảng size khác nhau giữa các hãng.<br>
      Khi số đo nằm giữa hai size, <strong>chọn size nhỏ hơn</strong> nếu người dùng gầy và size lớn hơn nếu bụng to.<br>
      Không chọn rộng hơn để cho thoải mái: size rộng làm hở vách chống tràn ở đùi và gây tràn ngay cả khi bỉm chưa đầy.<br>
      Kiểm tra sau khi mặc: <strong>luồn vừa hai ngón tay</strong> giữa bỉm và da là vừa.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao size quan trọng hơn thương hiệu</h2>
  <p>Nhiều gia đình chuyển đổi liên tục giữa các thương hiệu vì "loại nào cũng bị tràn". Trong phần lớn trường hợp, nguyên nhân không nằm ở sản phẩm mà ở size.</p>
  <p>Bỉm người lớn có <strong>vách chống tràn</strong> ở hai bên đùi — hai dải chun dựng lên tạo thành rào chắn. Vách này chỉ hoạt động khi ôm sát vào da. Nếu bỉm rộng, vách bị hở hoặc gấp vào trong, và chất lỏng chảy ra ngoài theo khe hở đó ngay cả khi lõi thấm chưa đầy.</p>
  <p>Nghĩa là: mua loại đắt tiền thấm hút cao nhưng sai size vẫn tràn, còn loại phổ thông đúng size thì không.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Cách đo vòng hông</h2>
  <p>Chuẩn bị một thước dây may. Nếu không có, dùng một sợi dây rồi đo lại bằng thước kẻ.</p>

  <p><strong>Với người còn đứng được:</strong> cho đứng thẳng, hai chân khép tự nhiên, mặc quần áo mỏng. Vòng thước quanh phần rộng nhất của hông và mông. Thước ôm sát nhưng không siết vào da.</p>
  <p><strong>Với người nằm liệt:</strong> cho nằm ngửa, nghiêng nhẹ sang một bên để luồn thước xuống dưới hông, rồi đưa về vị trí và đọc số đo. Nên có hai người để thao tác an toàn.</p>
  <p><strong>Với người có bụng lớn:</strong> đo thêm vòng bụng ngang rốn. Lấy số lớn hơn trong hai số đo để chọn size.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bảng size tham khảo</h2>
  <p>Các hãng công bố khoảng vòng hông khác nhau. Dưới đây là khoảng phổ biến, nhưng <strong>luôn phải kiểm tra bảng của đúng hãng định mua</strong>:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Size</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Khoảng vòng hông phổ biến</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Thể trạng tham khảo</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">S</td>
          <td style="padding: 0.8rem 1rem;">Khoảng 50-80 cm</td>
          <td style="padding: 0.8rem 1rem;">Người gầy, nhỏ người</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">M</td>
          <td style="padding: 0.8rem 1rem;">Khoảng 60-105 cm</td>
          <td style="padding: 0.8rem 1rem;">Thể trạng trung bình</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">M/L</td>
          <td style="padding: 0.8rem 1rem;">Khoảng 70-120 cm</td>
          <td style="padding: 0.8rem 1rem;">Trung bình đến hơi đầy đặn</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">L</td>
          <td style="padding: 0.8rem 1rem;">Khoảng 85-125 cm</td>
          <td style="padding: 0.8rem 1rem;">Đầy đặn</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">L/XL</td>
          <td style="padding: 0.8rem 1rem;">Khoảng 110-145 cm</td>
          <td style="padding: 0.8rem 1rem;">Người to, bụng lớn</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Lưu ý các khoảng này chồng lấn nhau khá nhiều — đó là lý do phải xem bảng của từng hãng thay vì dựa vào chữ cái size.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ khuyên</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Lần đầu mua cho bố mẹ, nên <strong>mua gói nhỏ nhất để thử trước</strong>, kể cả khi mua gói lớn rẻ hơn tính theo miếng. Thử một gói 10 miếng để kiểm tra size và độ phù hợp, rồi mới mua số lượng. Mua ngay thùng lớn rồi phát hiện sai size là lãng phí lớn hơn nhiều so với chênh lệch giá.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Kiểm tra sau khi mặc</h2>
  <p>Ba điểm cần kiểm tra mỗi lần thay, đặc biệt trong những lần đầu dùng loại mới:</p>

  <p><strong>Vùng eo:</strong> luồn được vừa hai ngón tay giữa bỉm và da là vừa. Chật hơn gây hằn đỏ, rộng hơn dễ tụt và tràn.</p>

  <p><strong>Vách chống tràn ở đùi:</strong> dùng ngón tay vuốt dọc hai bên đùi để đảm bảo vách dựng lên và ôm sát da, không bị gấp vào trong. Đây là bước hay bị bỏ qua nhất và cũng là nguyên nhân tràn phổ biến nhất.</p>

  <p><strong>Đáy bỉm:</strong> không bị xoắn hoặc dồn cục. Nếu bị, tháo ra và mặc lại thay vì kéo chỉnh — kéo chỉnh dễ làm xây xát da.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dấu hiệu cần đổi size</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Có vết hằn đỏ rõ ở eo hoặc đùi sau khi tháo bỉm — size quá chật
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tràn ở hai bên đùi dù lõi thấm chưa đầy — size quá rộng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tã quần bị tụt khi đi lại — size quá rộng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tã dán phải dán chồng lên nhau nhiều — size quá rộng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bố mẹ sụt hoặc tăng cân đáng kể — cần đo lại vòng hông
    </li>
  </ul>

  <p>Điểm cuối cùng đáng chú ý: người cao tuổi nằm liệt thường sụt cân theo thời gian. Nên đo lại vòng hông mỗi 2-3 tháng thay vì mua mãi một size theo thói quen.</p>

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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Đo vòng hông ở vị trí nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đo vòng quanh phần rộng nhất của hông và mông, thường ngang mấu chuyển lớn của xương đùi — vị trí nhô ra ở hai bên hông. Với người có bụng lớn, nên đo cả vòng bụng ngang rốn và lấy số lớn hơn trong hai số đo để chọn size. Đo khi người đứng thẳng nếu còn đứng được; nếu nằm liệt thì đo khi nằm ngửa, luồn thước dưới hông.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Số đo nằm giữa hai size thì chọn size nào?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Cân nhắc theo thể trạng. Người gầy, ít mỡ bụng thì chọn size nhỏ hơn để bỉm ôm sát, tránh hở vách chống tràn. Người có bụng to thì chọn size lớn hơn để không bị siết bụng gây khó chịu và hằn da. Nếu vẫn phân vân, có thể mua gói nhỏ của cả hai size để thử trước khi mua số lượng lớn.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Bảng size của các hãng có giống nhau không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không. Size M của hãng này có thể tương đương size L của hãng khác. Vì vậy không nên dựa vào chữ cái size mà phải xem khoảng vòng hông tính bằng cm mà nhà sản xuất công bố trên bao bì. Khi đổi sang hãng khác, cần kiểm tra lại bảng size chứ không mua theo size cũ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Làm sao biết bỉm đã mặc vừa hay chưa?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Sau khi mặc, kiểm tra ba điểm: luồn được vừa hai ngón tay giữa bỉm và vùng eo là vừa; vách chống tràn ở hai bên đùi phải dựng lên và ôm sát vào da, không bị gấp vào trong; và bỉm không bị xoắn hoặc dồn cục ở đáy. Nếu thấy hằn đỏ trên da sau khi tháo ra, đó là dấu hiệu bỉm quá chật.</p>
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
    "headline": "Cách đo và chọn size bỉm người lớn chuẩn xác",
    "description": "Hướng dẫn đo vòng hông và chọn size bỉm người lớn đúng cách. Vì sao chọn size rộng gây tràn và các lỗi thường gặp khi chọn size.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: 90,
  slug: "cach-do-size-bim-nguoi-lon",
  oldSlugs: [
    "kien-thuc/cach-do-size-bim-nguoi-lon",
    "tin-tuc/cach-do-size-bim-nguoi-lon"
  ],
  title: "Cách đo và chọn size bỉm người lớn chuẩn xác",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Hướng dẫn đo vòng hông và chọn size bỉm người lớn đúng cách. Vì sao chọn size rộng gây tràn và các lỗi thường gặp khi chọn size.",
  excerpt: "Hướng dẫn đo vòng hông và chọn size bỉm người lớn đúng cách. Vì sao chọn size rộng gây tràn và các lỗi thường gặp khi chọn size.",
  image: "/images/tin-tuc/cach-do-size-bim-nguoi-lon.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added article 90 to news.json!');
