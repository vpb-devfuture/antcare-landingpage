const fs = require('fs');
const path = require('path');

const generatedImg = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\8717b6f5-da5e-4d53-a0b1-e75447461494\\thay_bim_nam_liet_concept_1789442592182.jpg`;
const targetImg = path.join(__dirname, '../public/images/tin-tuc/thay-bim-cho-nguoi-nam-liet-dung-cach.jpg');

fs.copyFileSync(generatedImg, targetImg);
console.log('Copied image to:', targetImg);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

const allArticles = [newsData.featured, ...newsData.list].filter(Boolean);
const maxId = Math.max(...allArticles.map(a => a.id));
const newId = maxId + 1;

// If current featured exists, move it to list if not already in list
if (newsData.featured && newsData.featured.slug !== "thay-bim-cho-nguoi-nam-liet-dung-cach") {
  const prevFeatured = { ...newsData.featured, featured: false };
  if (!newsData.list.some(item => item.slug === prevFeatured.slug)) {
    newsData.list.unshift(prevFeatured);
  }
}

// Remove any existing item with same slug to avoid duplicate
newsData.list = newsData.list.filter(item => item.slug !== "thay-bim-cho-nguoi-nam-liet-dung-cach");

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Cách thay bỉm cho người nằm liệt đúng cách và an toàn</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Thao tác này lặp lại 4-6 lần mỗi ngày, suốt nhiều tháng. Làm đúng ngay từ đầu giúp bảo vệ da người bệnh và bảo vệ lưng của chính người chăm sóc.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-10">10/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-10">10/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Quy trình thay bỉm cho người nằm liệt gồm 6 bước:<br>
      <strong>chuẩn bị đầy đủ dụng cụ trong tầm tay</strong> (bỉm mới, khăn ướt, kem bảo vệ da, găng tay, túi rác, tấm lót);<br>
      <strong>nâng đầu giường thấp và giải thích cho người bệnh biết trước</strong>;<br>
      <strong>nghiêng người sang một bên</strong>, gỡ miếng dán và cuộn bỉm cũ vào trong;<br>
      <strong>vệ sinh từ trước ra sau, để da khô hoàn toàn</strong>;<br>
      <strong>trải bỉm mới dưới hông khi người vẫn nghiêng</strong>, rồi nghiêng sang bên kia để kéo qua;<br>
      <strong>dán cố định và kiểm tra vách chống tràn</strong>.<br>
      Luôn nghiêng người thay vì nâng hông lên — an toàn hơn cho cả hai bên.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chuẩn bị trước khi bắt đầu</h2>
  <p>Nguyên tắc quan trọng nhất: <strong>chuẩn bị đầy đủ mọi thứ trong tầm tay trước khi bắt đầu</strong>. Không được rời người bệnh giữa chừng để đi lấy đồ — vừa mất vệ sinh vừa nguy hiểm nếu người bệnh cử động.</p>
  <p>Danh sách cần chuẩn bị:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bỉm mới đã mở sẵn bao bì
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khăn ướt không cồn hoặc chậu nước ấm và khăn mềm
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Kem bảo vệ da
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Găng tay dùng một lần
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Túi rác để bỏ bỉm cũ
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tấm lót giường sạch nếu cần thay
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Khăn khô để thấm
    </li>
  </ul>

  <p>Trước khi chạm vào người bệnh, hãy <strong>nói cho họ biết mình sắp làm gì</strong> — kể cả khi người bệnh có vẻ không hiểu hoặc không phản hồi. Đây là vấn đề tôn trọng, và cũng giúp giảm phản xạ co cứng khi bị chạm bất ngờ.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Sáu bước thực hiện</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 1 — Chuẩn bị tư thế</h3>
  <p>Hạ đầu giường xuống thấp hoặc phẳng. Kéo chăn xuống nhưng phủ phần thân trên để giữ ấm và giữ sự riêng tư. Nới lỏng quần áo phần dưới.</p>
  <p>Điều chỉnh độ cao giường nếu có thể — làm việc ở tầm ngang hông của người chăm sóc để không phải cúi lưng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 2 — Nghiêng người sang một bên</h3>
  <p>Đây là kỹ thuật cốt lõi. <strong>Không nâng hông người bệnh lên</strong> — vừa hại lưng người chăm sóc vừa có nguy cơ làm xây xát da vùng xương cùng.</p>
  <p>Cách nghiêng an toàn: gập gối bên xa lại, đặt tay bên xa ngang ngực, rồi dùng vai và hông làm điểm tựa xoay người bệnh nghiêng về phía mình. Dùng gối chèn sau lưng để giữ tư thế nếu làm một mình.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 3 — Tháo bỉm cũ</h3>
  <p>Gỡ miếng dán hai bên. Cuộn bỉm cũ từ ngoài vào trong, để phần bẩn nằm bên trong, rồi đẩy gọn xuống dưới hông. Chưa lấy hẳn ra vội.</p>
  <p>Nếu bỉm dính vào da do phân khô, làm ẩm bằng nước ấm hoặc khăn ướt trước khi gỡ. Kéo mạnh sẽ làm trợt da.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 4 — Vệ sinh</h3>
  <p>Lau từ trước ra sau, theo một chiều, không chà tới lui. Với nữ giới, quy tắc này bắt buộc để tránh đưa vi khuẩn vào đường tiết niệu.</p>
  <p>Vệ sinh kỹ các nếp gấp bẹn — đây là vùng dễ đọng ẩm và hay bị bỏ sót.</p>
  <p><strong>Thấm khô hoàn toàn</strong> bằng khăn mềm. Nếu có điều kiện, để thoáng vài phút. Đây là lúc thuận tiện nhất để kiểm tra da: quan sát vùng xương cùng, hai bên hông, nếp bẹn xem có đỏ hay trợt không.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 5 — Đặt bỉm mới</h3>
  <p>Khi người bệnh vẫn đang nghiêng, trải bỉm mới ra, đặt nửa bỉm dưới hông, phần còn lại gấp gọn và nhét xuống dưới người.</p>
  <p>Bôi kem bảo vệ da trước khi đặt bỉm.</p>
  <p>Nghiêng người bệnh sang bên đối diện, lấy bỉm cũ ra bỏ vào túi rác, rồi kéo phần bỉm mới đã nhét sẵn qua bên này.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 6 — Cố định và kiểm tra</h3>
  <p>Cho người bệnh nằm ngửa lại. Kéo phần trước bỉm lên giữa hai chân, dán hai miếng dán hai bên — miếng dưới dán hướng lên trên, miếng trên dán hướng xuống dưới để ôm sát hông.</p>
  <p>Kiểm tra ba điểm: luồn vừa hai ngón tay ở eo; vách chống tràn hai bên đùi dựng lên ôm sát da; bỉm không xoắn ở đáy.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE — Kiến chăm tổ: bảo vệ lưng người chăm sóc</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Đau lưng là vấn đề rất phổ biến ở người chăm sóc tại nhà, và nó khiến nhiều gia đình không duy trì được việc chăm sóc lâu dài. Ba nguyên tắc: nâng giường lên tầm hông thay vì cúi xuống; <strong>xoay người thay vì nâng</strong>; và gập gối, giữ lưng thẳng khi phải dùng lực. Nếu cảm thấy quá sức, hãy tìm người hỗ trợ thay vì cố làm một mình — người chăm sóc bị chấn thương thì cả gia đình gặp khó khăn.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Những sai lầm thường gặp</h2>
  <p><strong>Kéo mạnh khi bỉm dính vào da.</strong> Làm trợt lớp da vốn đã mỏng. Luôn làm ẩm trước.</p>
  <p><strong>Nâng hông người bệnh lên thay vì nghiêng.</strong> Hại lưng người chăm sóc và tạo lực trượt lên vùng xương cùng — yếu tố góp phần gây loét tì đè.</p>
  <p><strong>Không để da khô trước khi mặc bỉm mới.</strong> Ẩm còn lại là nguyên nhân trực tiếp gây hăm.</p>
  <p><strong>Bôi kem quá dày.</strong> Cản khả năng thấm của bỉm, làm chất lỏng đọng trên bề mặt da.</p>
  <p><strong>Bỏ qua việc kiểm tra da.</strong> Mỗi lần thay bỉm là một cơ hội phát hiện sớm hăm hoặc loét. Bỏ qua bước này khiến vấn đề chỉ được phát hiện khi đã nặng.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Kết hợp với phòng loét tì đè</h2>
  <p>Mỗi lần thay bỉm là dịp thuận tiện để kết hợp thay đổi tư thế — việc cần làm mỗi 2 giờ để phòng loét tì đè. Sau khi thay xong, thay vì cho nằm ngửa như cũ, hãy chuyển sang tư thế nghiêng có gối chèn, luân phiên giữa các bên.</p>
  <p>Cách này giúp người chăm sóc gộp hai việc vào một, giảm số lần phải làm phiền người bệnh trong ngày.</p>

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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Một ngày cần thay bỉm mấy lần cho người nằm liệt?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Thông thường 4-6 lần mỗi ngày, bao gồm ít nhất một lần ban đêm. Cần thay ngay khi có phân, không chờ. Với nước tiểu, thay khi bỉm đã đầy hoặc tối đa sau 4-6 tiếng. Nhiều gia đình cố kéo dài để tiết kiệm hoặc để người bệnh ngủ yên, nhưng đây là nguyên nhân hàng đầu gây hăm và loét — chi phí điều trị cao hơn nhiều so với tiền bỉm tiết kiệm được.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Thay bỉm một mình có được không hay cần hai người?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Với người nhẹ cân và còn cử động được phần nào, một người có thể làm được bằng kỹ thuật nghiêng người. Với người nặng cân, cứng khớp, hoặc có ống thông, vết mổ, nên có hai người để đảm bảo an toàn. Nếu buộc phải làm một mình với người nặng, cần dùng thanh chắn giường làm điểm tựa và tuyệt đối không cố nâng người bệnh lên bằng lưng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có cần đeo găng tay khi thay bỉm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nên đeo, vì hai lý do. Thứ nhất bảo vệ người chăm sóc khỏi tiếp xúc với chất thải và mầm bệnh. Thứ hai bảo vệ người bệnh — tay người chăm sóc có thể mang vi khuẩn từ nơi khác. Sau khi tháo găng vẫn cần rửa tay bằng xà phòng. Với người bệnh có nhiễm trùng hoặc vết thương hở, việc đeo găng là bắt buộc.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Làm sao thay bỉm ban đêm mà không đánh thức người bệnh?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Vài cách giúp giảm gián đoạn giấc ngủ: dùng loại bỉm thấm hút cao dành riêng cho ban đêm để giảm số lần thay; chuẩn bị sẵn mọi thứ trước khi bắt đầu để thao tác nhanh; dùng đèn ngủ ánh sáng dịu thay vì bật đèn trần; giữ nhiệt độ phòng ấm để người bệnh không bị lạnh khi hở người; và thao tác nhẹ nhàng, nói khẽ giải thích trước khi chạm vào.</p>
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
    "headline": "Cách thay bỉm cho người nằm liệt đúng cách và an toàn",
    "description": "Hướng dẫn từng bước thay bỉm cho người nằm liệt tại nhà: chuẩn bị, tư thế nghiêng người an toàn, vệ sinh và những sai lầm cần tránh.",
    "datePublished": "2026-09-10"
  }
  </script>
</article>`;

newsData.featured = {
  id: newId,
  slug: "thay-bim-cho-nguoi-nam-liet-dung-cach",
  oldSlugs: [
    "kien-thuc/thay-bim-cho-nguoi-nam-liet-dung-cach",
    "tin-tuc/thay-bim-cho-nguoi-nam-liet-dung-cach"
  ],
  title: "Cách thay bỉm cho người nằm liệt đúng cách và an toàn",
  category: "Chăm sóc sức khỏe",
  date: "10/09/2026",
  author: {
    name: "ANTCARE – Kiến chăm tổ",
    image: "/images/huyen-trang.jpg",
    description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
  },
  description: "Hướng dẫn từng bước thay bỉm cho người nằm liệt tại nhà: chuẩn bị, tư thế nghiêng người an toàn, vệ sinh và những sai lầm cần tránh.",
  excerpt: "Hướng dẫn từng bước thay bỉm cho người nằm liệt tại nhà: chuẩn bị, tư thế nghiêng người an toàn, vệ sinh và những sai lầm cần tránh.",
  image: "/images/tin-tuc/thay-bim-cho-nguoi-nam-liet-dung-cach.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log(`Successfully added article ${newId} (thay-bim-cho-nguoi-nam-liet-dung-cach) to news.json! Total articles: ${newsData.list.length + 1}`);
