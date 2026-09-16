const fs = require('fs');
const path = require('path');

// Image copying
const sourceImg = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\.user_uploaded\\media_1789540723314.jpg';
const destImg = path.join(__dirname, '../public/images/tin-tuc/hoat-dong-thu-cong-cho-nguoi-cao-tuoi.jpg');

fs.copyFileSync(sourceImg, destImg);
console.log('Copied user uploaded image to', destImg);

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if present
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Vì sao được tự tay làm ra món quà tặng người thân lại tác động mạnh đến tinh thần người cao tuổi, kèm 8 sản phẩm dễ làm và quy trình 4 bước cho một buổi thành công.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Khi ông bà tự tay làm ra món quà: cách trả lại cảm giác hữu ích ở tuổi già</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Câu nói đau lòng nhất mà con cháu hay nghe là sống thế này chỉ làm khổ các con. Có một cách rất cụ thể để câu đó bớt xuất hiện, và nó bắt đầu từ một cuộn sợi.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- HỘP TRẢ LỜI NHANH (AEO) -->
  <div class="quick-answer" style="background-color: #f4f6f8; padding: 20px; border-left: 4px solid #0056b3; margin-bottom: 25px; border-radius: 0 6px 6px 0;">
    <h2 style="font-size: 1.1rem; margin: 0 0 8px 0; color: #0f172a; font-weight: 700;">Trả lời nhanh</h2>
    <p style="margin: 0; font-size: 1rem; line-height: 1.6; color: #334155;">Cảm giác trở thành gánh nặng là một trong những nguyên nhân tâm lý phổ biến nhất khiến người cao tuổi buồn bã và thu mình. Hoạt động thủ công tạo ra thành phẩm giải quyết vấn đề này trực tiếp hơn lời động viên, vì nó đảo ngược vai trò: từ người nhận sự chăm sóc thành người tạo ra thứ để cho đi. Khi món đồ do ông bà làm được người thân dùng thật, người cao tuổi nhận được bằng chứng cụ thể rằng mình vẫn đóng góp được. Các sản phẩm phù hợp nhất là những thứ làm từ sợi tự nhiên và gỗ, chia được thành nhiều buổi ngắn, và đủ đẹp để đem tặng mà không cần ai sửa lại.</p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan nên đọc:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/montessori-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Montessori Cho Người Cao Tuổi: Vì Sao Phương Pháp Này Quan Trọng Hơn Bạn Nghĩ
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/busy-board-cho-nguoi-lon-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Bảng Busy Board Cho Người Lớn Tuổi Tác Động Đến Sức Khỏe Tinh Thần Như Thế Nào
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/do-choi-ren-luyen-tri-nao-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Kết Hợp Đồ Chơi Và Dụng Cụ Rèn Luyện Trí Não Cho Người Cao Tuổi: Đừng Mua Một Món Rồi Thôi
        </a>
      </li>
    </ul>
  </div>

  <p>Trong các buổi thăm nhà, điều khiến người chăm sóc chuyên nghiệp lo ngại nhất không phải huyết áp hay đường huyết. Đó là khi một cụ ông ngồi im cả buổi chiều, mắt nhìn ra cửa, và lúc con cháu hỏi thăm thì đáp rằng ông chẳng làm được gì nữa, sống chỉ tổ phiền các con.</p>
  <p>Những câu như vậy hiếm khi được xử lý bằng lời an ủi. "Bố đừng nói thế, bố là chỗ dựa của cả nhà." Câu đó đúng về tình cảm nhưng không cung cấp bằng chứng nào. Người cao tuổi nhìn quanh và thấy sự thật là hôm nay mình không làm được việc gì cả.</p>
  <p>Muốn thay đổi cảm giác đó, cần thay đổi bằng chứng.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Cảm giác trở thành gánh nặng: vấn đề ít được gọi tên</h2>
  <p>Trong tâm lý học phát triển, giai đoạn cuối đời thường được mô tả như cuộc đối chiếu giữa sự toàn vẹn và nỗi tuyệt vọng: người cao tuổi nhìn lại và cần thấy rằng cuộc đời mình có ý nghĩa, rằng mình đã và vẫn đang để lại điều gì đó cho người sau. Nhu cầu được truyền lại và được đóng góp này không mất đi theo tuổi tác. Chỉ có cơ hội thực hiện nó là mất dần.</p>
  <p>Điều đáng nói là chính tình thương của gia đình đôi khi làm mất cơ hội đó nhanh nhất. Mỗi lần chúng ta nói bố cứ ngồi nghỉ để con làm, chúng ta rút bớt một việc khỏi danh sách những thứ bố còn đóng góp được. Sau vài năm, danh sách rỗng.</p>

  <blockquote style="margin: 24px 0; padding: 12px 20px; border-left: 4px solid #c8a96b; background-color: #fdfbf7; font-style: italic; color: #4a2385; font-size: 1.1rem;">
    <p style="margin: 0;">Người già không cần được phục vụ nhiều hơn. Họ cần một việc mà nếu không có họ thì không ai làm.</p>
  </blockquote>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao món quà tự làm có sức nặng khác hẳn</h2>

  <h3 style="font-weight: 600; color: #0f172a;">Nó đảo ngược vai trò</h3>
  <p>Trong quan hệ chăm sóc, một chiều luôn rõ ràng: con cháu cho, ông bà nhận. Thuốc men, bữa ăn, tiền bạc, thời gian. Một món quà tự tay làm đảo chiều đó trong khoảnh khắc. Lần này ông bà là người cho, con cháu là người nhận. Trạng thái tâm lý đi kèm hai vai trò này khác nhau rất nhiều.</p>

  <h3 style="font-weight: 600; color: #0f172a;">Nó tạo ra bằng chứng cầm được</h3>
  <p>Trí nhớ có thể phai, nhưng chiếc giỏ đặt trên bàn thì vẫn ở đó. Người cao tuổi không cần nhớ hôm nào đã làm ra nó, chỉ cần nhìn thấy và được nhắc rằng cái này bà làm đấy. Với người suy giảm trí nhớ, vật thể hữu hình là cách lưu giữ thành tựu hiệu quả hơn lời nói.</p>

  <h3 style="font-weight: 600; color: #0f172a;">Nó mở ra một câu chuyện để kể</h3>
  <p>Người cao tuổi thường ngại kể về bệnh tật và cũng ngại bị hỏi về sức khỏe. Nhưng khi có món đồ mình làm, họ có chủ đề chủ động: cái này làm mất ba buổi, chỗ này khó nhất, sợi này đan chặt tay lắm. Câu chuyện đó đưa họ trở lại vị trí người có chuyện để kể thay vì người được hỏi thăm.</p>

  <h3 style="font-weight: 600; color: #0f172a;">Nó kéo theo phản hồi từ bên ngoài</h3>
  <p>Khi con cháu, hàng xóm hay bạn ở câu lạc bộ khen và dùng thật món đồ, người cao tuổi nhận được sự công nhận từ ngoài phạm vi gia đình. Đây là điều mà mọi bài tập tại nhà đều không tạo ra được.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Tám sản phẩm ông bà làm được và tặng được</h2>

  <div style="overflow-x: auto; margin: 25px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #475569;">Bảng: Sản phẩm thủ công phù hợp theo mức độ khéo tay và người nhận gợi ý</caption>
      <thead>
        <tr style="background-color: #f3eefb; border-bottom: 2px solid #e3daf0;">
          <th style="padding: 10px; border: 1px solid #e3daf0;">Sản phẩm</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Thao tác chính</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Độ khó</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Tặng cho</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Lót ly đan sợi bèo</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Luồn, đan xen</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dễ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Con dâu, con rể, khách đến chơi</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Giỏ nhỏ đựng đồ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đan quanh khung</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Trung bình</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cháu, hàng xóm</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Túi đựng điện thoại</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đan phẳng, gập, buộc</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Trung bình</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Con cháu đi làm</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Chuông gió nan tre</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Buộc, treo, cân chỉnh</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Trung bình</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Bạn cùng câu lạc bộ</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Móc khóa gỗ khắc tên</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Chà nhám, lắp ghép</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dễ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cháu đi học</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Khay đựng chìa khóa</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Ghép gỗ, chà nhám</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Khó hơn</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Con trai, con gái</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Vòng tay hạt gỗ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Xâu hạt theo mẫu</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dễ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cháu gái, bạn bè</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thiệp và nhãn quà</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dán, viết, trang trí</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dễ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Kèm theo mọi món quà</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Lưu ý một chi tiết nhỏ nhưng hiệu quả: nên làm thêm nhãn nhỏ ghi dòng chữ "do bà tự tay làm" kèm ngày tháng. Nó biến món đồ thành một kỷ vật, và nhiều gia đình giữ lại rất lâu về sau.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Quy trình bốn bước cho một buổi làm đồ thành công</h2>
  <ol style="line-height: 1.7;">
    <li><strong>Chọn người nhận trước khi bắt đầu.</strong> Đây là bước quan trọng nhất và cũng hay bị bỏ qua nhất. Hãy hỏi bà muốn làm cái này tặng ai. Khi có khuôn mặt cụ thể trong đầu, động lực thay đổi hoàn toàn so với việc làm cho có.</li>
    <li><strong>Chia nhỏ thành các buổi có điểm dừng rõ ràng.</strong> Một chiếc giỏ có thể chia thành ba buổi: chuẩn bị sợi, đan thân, hoàn thiện viền. Mỗi buổi kết thúc bằng việc nhìn thấy sản phẩm tiến lên một bậc.</li>
    <li><strong>Giữ nguyên thành quả, tuyệt đối không sửa.</strong> Nếu mũi đan lệch, để nguyên. Nếu viền không đều, để nguyên. Người nhận sẽ không quan tâm, nhưng người làm thì nhớ rất rõ chuyện bị sửa.</li>
    <li><strong>Tổ chức khoảnh khắc trao quà.</strong> Đừng để món đồ nằm trên bàn rồi ai tiện thì cầm. Hãy gọi cháu đến, để ông bà tự đưa tận tay, và nhắc người nhận nói lời cảm ơn cụ thể. Ba mươi giây này chính là phần mang lại giá trị tinh thần lớn nhất của cả quá trình.</li>
  </ol>

  <!-- LƯU Ý DẶN NGƯỜI NHẬN -->
  <div style="border: 1px dashed #c8a96b; background-color: #fffbf2; padding: 18px 20px; margin: 28px 0; border-radius: 6px;">
    <h3 style="margin-top: 0; font-size: 1.15rem; color: #4a2385; font-weight: 700;">Dặn người nhận một câu trước</h3>
    <p style="margin-bottom: 0; line-height: 1.6; color: #334155;">Hãy nhắn riêng cho người sắp nhận quà: khi nhận, hãy khen một chi tiết cụ thể và kể lại việc sẽ dùng nó thế nào. Ví dụ "cái lót ly này cháu để ở bàn làm việc, sáng nào uống cà phê cũng thấy". Lời khen cụ thể có sức nặng gấp nhiều lần câu "đẹp quá bà ơi".</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Một tình huống quen thuộc</h2>
  <p>Đây là kiểu tình huống mà nhiều gia đình có người cao tuổi ở nhà sẽ thấy quen. Một cụ bà bảy mươi tám tuổi, sau khi ngã và phải hạn chế đi lại, gần như không ra khỏi phòng. Con cháu mua tivi mới, mua sách, mua máy massage. Không thứ nào được dùng quá vài hôm.</p>
  <p>Thay đổi đến khi cô con dâu đặt lên bàn một khung đan cùng cuộn sợi bèo, và nói rằng "cháu Bống sắp sinh nhật, mẹ đan giúp con cái lót ly làm quà cho con bé nhé". Cụ nhận lời vì có người cần, chứ không phải vì muốn tập.</p>
  <p>Điểm đáng chú ý không nằm ở chiếc lót ly. Nó nằm ở chỗ sau khi đứa cháu mang lót ly về phòng và chụp ảnh gửi cho bà, cụ bắt đầu hỏi tuần sau có ai sinh nhật nữa không. Từ đó, việc ngồi vào bàn mỗi sáng không còn cần ai nhắc.</p>
  <p>Cơ chế ở đây rất đơn giản và lặp lại được trong hầu hết gia đình: có người cần, có việc để làm, có kết quả được nhìn thấy.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Kết hợp với dụng cụ rèn luyện hằng ngày</h2>
  <p>Hoạt động tạo thành phẩm nên đi cùng các hoạt động ngắn hằng ngày, chứ không thay thế chúng. Cách phối bốn nhóm hoạt động thành lịch tuần được trình bày trong <a href="/tin-tuc/do-choi-ren-luyen-tri-nao-cho-nguoi-cao-tuoi">bài viết về đồ chơi rèn luyện trí não</a>, còn cơ chế tác động của bảng thao tác lên tinh thần nằm trong <a href="/tin-tuc/busy-board-cho-nguoi-lon-tuoi">bài về busy board cho người lớn tuổi</a>.</p>

  <!-- CTA KHỐI ANTCARE -->
  <aside class="antcare-cta" style="background-color: #6633b4; color: #ffffff; padding: 26px 24px; border-radius: 8px; margin: 35px 0;">
    <h2 style="color: #ffffff; border-top: 0; padding-top: 0; margin: 0 0 12px 0; font-size: 1.35rem; font-weight: 700;">Bộ làm quà ANTCARE: luyện tay và làm ra quà trong cùng một bộ</h2>
    <p style="color: #f0e8ff; line-height: 1.6; margin-bottom: 12px;">Đây chính là ngách mà ANTCARE, thương hiệu Kiến chăm tổ, tập trung. Thị trường có nhiều bảng rèn luyện, nhưng gần như tất cả dừng lại ở chỗ cho tay bận rộn rồi thôi.</p>
    <ul style="padding-left: 20px; color: #f0e8ff; line-height: 1.6; margin-bottom: 18px;">
      <li><strong style="color: #ffffff;">Luyện tập có đích đến.</strong> Mỗi bộ đều kết thúc bằng một sản phẩm hoàn chỉnh như lót ly, giỏ nhỏ, túi đựng, chuông gió hay móc khóa, đủ chỉn chu để ông bà mang tặng mà không cần ai chỉnh sửa.</li>
      <li><strong style="color: #ffffff;">Thiết kế bao dung với đôi tay đã yếu.</strong> Sợi dày, khung định hình sẵn, thao tác lặp lại đơn giản. Nét thô mộc của sợi tự nhiên khiến những mũi đan không đều trở thành đặc trưng của sản phẩm thủ công chứ không phải lỗi.</li>
      <li><strong style="color: #ffffff;">Chất liệu tự nhiên, thân thiện môi trường.</strong> Dây bèo, dây nan và gỗ cao su. Không mùi nhựa, ấm tay, cạnh bo nhẵn và an toàn khi tiếp xúc lâu.</li>
      <li><strong style="color: #ffffff;">Kèm nhãn quà.</strong> Mỗi bộ có nhãn để ghi tên người làm, tên người nhận và ngày tháng, biến sản phẩm thành kỷ vật của gia đình.</li>
    </ul>
    <p style="margin-bottom: 0;">
      <a class="nut" href="tel:0969032360" style="display: inline-block; background-color: #fd711a; color: #ffffff; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin-top: 6px;">Xem bộ làm quà cho ông bà · Hotline 0969 032 360</a>
    </p>
    <p style="font-size: 0.9rem; margin: 12px 0 0 0; color: #d9c9f5;">ANTCARE tư vấn chọn bộ theo khả năng vận động tay và sở thích của từng người.</p>
  </aside>

  <h2 style="font-weight: 700; color: #0f172a;">Một câu hỏi để bắt đầu</h2>
  <p>Nếu bạn muốn thử, đừng bắt đầu bằng việc mua dụng cụ. Hãy bắt đầu bằng một câu hỏi rất đơn giản, hỏi ngay tối nay: "sắp tới nhà mình có ai sinh nhật, bà muốn tự tay làm quà tặng người đó không".</p>
  <p>Nhiều thứ đổi khác bắt đầu từ chỗ có người đang chờ một món quà.</p>

  <!-- FAQ SECTION WITH DETAILS SCHEMA -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin-top: 35px;">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Vì sao cảm giác vô dụng lại phổ biến ở người cao tuổi?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Về hưu, mất dần vai trò trong gia đình, không còn tự đi lại hay tự quản lý tiền bạc, cộng với việc mọi việc đều có người làm thay. Chuỗi thay đổi này khiến người cao tuổi không còn cơ hội đóng góp, trong khi nhu cầu được cần đến vẫn nguyên vẹn. Khi khoảng cách giữa nhu cầu và thực tế kéo dài, nó biểu hiện thành buồn bã, cáu gắt hoặc thu mình.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Tặng quà tự làm có thật sự khác với việc chỉ tập cho vui không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Khác ở chỗ có người nhận. Một bài tập kết thúc khi người cao tuổi làm xong. Một món quà kết thúc khi có ai đó cầm lấy, cảm ơn và mang về dùng. Vòng phản hồi thứ hai mang lại giá trị tinh thần mà bài tập không tạo ra được, vì nó xác nhận rằng công sức của họ có ích với người khác.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Ông bà tay đã run, làm sao ra sản phẩm đẹp được?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Hãy chọn vật liệu và thiết kế bao dung với sai số. Sợi bèo và nan mây dày cho phép mũi đan không đều mà vẫn đẹp, vì nét thô ráp là một phần thẩm mỹ của chất liệu. Ngoài ra nên dùng khung định hình sẵn để người làm chỉ tập trung vào thao tác lặp lại. Điều tuyệt đối tránh là sửa lại sản phẩm sau lưng ông bà.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Một buổi làm đồ nên kéo dài bao lâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Từ hai mươi đến ba mươi phút với người còn tự chủ tốt, mười đến mười lăm phút với người suy giảm trí nhớ rõ rệt. Nên chia một sản phẩm thành nhiều buổi và đánh dấu tiến độ để mỗi buổi đều có cảm giác tiến lên. Quan trọng nhất là dừng lúc còn hứng thú chứ không đợi đến lúc mệt.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Người bị sa sút trí tuệ có làm được không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Được, nếu chọn đúng loại thao tác. Hãy ưu tiên việc một bước lặp lại như luồn sợi qua khung, vê sợi, gắn hạt vào dây. Người chăm sóc lo phần lắp ghép và hoàn thiện, còn ông bà giữ phần thao tác chính. Quan trọng là cả nhà thống nhất rằng đây là sản phẩm của ông bà, và giới thiệu với người nhận đúng như vậy.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên tặng sản phẩm cho ai để tác động tinh thần rõ nhất?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Người mà ông bà quan tâm nhất và có khả năng phản hồi tích cực, thường là cháu nhỏ, con dâu con rể, hàng xóm thân hoặc bạn trong câu lạc bộ. Nên nhắc trước người nhận rằng hãy dùng món đồ và kể lại cho ông bà nghe. Phản hồi cụ thể như "bà ơi cái lót ly cháu để trên bàn làm việc rồi" có sức nặng hơn nhiều so với lời khen chung chung.</p>
      </div>
    </details>
  </section>

  <!-- MIỄN TRỪ TRÁCH NHIỆM Y TẾ -->
  <p style="font-size: 0.85rem; color: #64748b; font-style: italic; border-top: 1px solid #e2e8f0; padding-top: 16px; margin-top: 35px;">
    Bài viết mang tính chất thông tin và chia sẻ kinh nghiệm chăm sóc, không thay thế cho chẩn đoán hay chỉ định của bác sĩ. Khi người thân có dấu hiệu suy giảm trí nhớ, thay đổi hành vi hoặc rối loạn cảm xúc kéo dài, gia đình nên đưa đi khám chuyên khoa Lão khoa hoặc Thần kinh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Khi ông bà tự tay làm ra món quà: cách trả lại cảm giác hữu ích ở tuổi già",
    "description": "Vì sao được tự tay làm ra món quà tặng người thân lại tác động mạnh đến tinh thần người cao tuổi, kèm 8 sản phẩm dễ làm và quy trình 4 bước cho một buổi thành công.",
    "datePublished": "2026-09-16",
    "dateModified": "2026-09-16",
    "author": {
      "@type": "Organization",
      "name": "ANTCARE - Kiến chăm tổ",
      "url": "https://antcare.vn/"
    }
  }
  </script>
</article>`;

newsData.featured = {
  id: 113,
  slug: 'hoat-dong-thu-cong-cho-nguoi-cao-tuoi',
  title: 'Khi ông bà tự tay làm ra món quà: cách trả lại cảm giác hữu ích ở tuổi già',
  category: 'Sức khỏe tinh thần',
  date: '16/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/hoat-dong-thu-cong-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 113 to news.json!');
