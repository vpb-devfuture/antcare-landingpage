const fs = require('fs');
const path = require('path');

// Image copying
const sourceImg = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_montessori_buying_guide_bright_1789540977573.jpg';
const destImg = path.join(__dirname, '../public/images/tin-tuc/chon-mua-bang-montessori-cho-nguoi-cao-tuoi.jpg');

fs.copyFileSync(sourceImg, destImg);
console.log('Copied generated image to', destImg);

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if present
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Hướng dẫn chọn bảng rèn luyện Montessori cho ông bà: 6 tiêu chí bắt buộc, so sánh chất liệu tự nhiên với nhựa, checklist kiểm tra khi nhận hàng và cách bảo quản.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Chọn mua bảng rèn luyện Montessori cho người cao tuổi: 6 tiêu chí và câu chuyện chất liệu</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Một tấm bảng sai thiết kế sẽ bị ông bà từ chối ngay ngày đầu. Đây là các tiêu chí cần kiểm tra trước khi đặt hàng, và lý do vì sao chất liệu lại quan trọng hơn bạn nghĩ.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- HỘP TRẢ LỜI NHANH (AEO) -->
  <div class="quick-answer" style="background-color: #f4f6f8; padding: 20px; border-left: 4px solid #0056b3; margin-bottom: 25px; border-radius: 0 6px 6px 0;">
    <h2 style="font-size: 1.1rem; margin: 0 0 8px 0; color: #0f172a; font-weight: 700;">Trả lời nhanh</h2>
    <p style="margin: 0; font-size: 1rem; line-height: 1.6; color: #334155;">Khi chọn bảng rèn luyện Montessori cho người cao tuổi, hãy kiểm tra sáu điểm: thiết kế dành cho người lớn chứ không phải trẻ em, kích thước chi tiết đủ to cho tay cứng khớp, độ an toàn về cạnh và chi tiết rời, chất liệu tự nhiên không mùi, khả năng xoay vòng module để tránh nhàm chán, và quan trọng nhất là có tạo ra được thành phẩm để mang tặng hay không. Vật liệu tự nhiên như dây bèo, dây nan và gỗ cao su vượt trội so với nhựa về trải nghiệm chạm, độ an toàn khi tiếp xúc lâu và cảm giác trân trọng mà người cao tuổi dành cho món đồ.</p>
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
        <a href="/tin-tuc/hoat-dong-thu-cong-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Khi Ông Bà Tự Tay Làm Ra Món Quà: Cách Trả Lại Cảm Giác Hữu Ích Ở Tuổi Già
        </a>
      </li>
    </ul>
  </div>

  <p>Trên các sàn thương mại điện tử, gõ tìm bảng rèn luyện cho người già thì phần lớn kết quả trả về là bảng dành cho trẻ mẫu giáo, chỉ được đổi tên mô tả. Màu sắc rực rỡ, hình con vật, chi tiết bé xíu.</p>
  <p>Hậu quả rất dễ đoán. Bảng được mang về, ông bà nhìn một lượt, nói ngắn gọn rằng thôi để cho cháu chơi, và món đồ được cất đi. Không phải vì họ không cần vận động tay, mà vì họ vừa nhận được một thông điệp rằng trong mắt con cháu, mình đã thành trẻ con.</p>
  <p>Dưới đây là các tiêu chí giúp bạn tránh tình huống đó.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Sáu tiêu chí cần kiểm tra trước khi đặt hàng</h2>

  <h3 style="font-weight: 600; color: #0f172a;">1. Thiết kế dành cho người trưởng thành</h3>
  <p>Kiểm tra bằng một câu hỏi đơn giản: nếu đặt tấm bảng này ở phòng khách, nó có trông như một món đồ trang trí gỗ bình thường không, hay ngay lập tức lộ ra là đồ chơi trẻ em. Màu nên trung tính, chủ đề nên gắn với đồ vật thật trong nhà, tuyệt đối tránh hình vẽ nhân vật hoạt hình.</p>

  <h3 style="font-weight: 600; color: #0f172a;">2. Kích thước chi tiết phù hợp với bàn tay đã yếu</h3>
  <p>Người cao tuổi thường bị cứng khớp, giảm lực bóp, đôi khi run tay. Núm xoay quá nhỏ, dây quá mảnh, khóa quá cứng sẽ tạo trải nghiệm thất bại ngay lần đầu. Hãy chọn chi tiết to, dễ nắm và khóa chốt vận hành nhẹ tay.</p>

  <h3 style="font-weight: 600; color: #0f172a;">3. An toàn ở mức cao hơn bảng thông thường</h3>
  <p>Cạnh và góc phải bo tròn, bề mặt không dằm. Hạn chế tối đa chi tiết rời, và nếu có thì phải đủ lớn để không thể nuốt được. Dây trên bảng không được dài tới mức quấn quanh cổ tay hay cổ. Nếu bảng treo tường, phải bắt vít chắc chắn vào tường chứ không dùng băng dính.</p>

  <h3 style="font-weight: 600; color: #0f172a;">4. Chất liệu tự nhiên và không mùi</h3>
  <p>Đây là phần được phân tích kỹ ở mục dưới. Nguyên tắc ngắn gọn: mở hộp ra mà thấy mùi nhựa hoặc mùi sơn nồng thì không nên dùng cho người cao tuổi, đặc biệt người có bệnh hô hấp.</p>

  <h3 style="font-weight: 600; color: #0f172a;">5. Có thể xoay vòng và thay đổi</h3>
  <p>Một tấm bảng cố định hoàn toàn sẽ hết mới sau vài tuần. Bảng có module tháo lắp cho phép gia đình cất bớt rồi đưa ra lại sau hai tuần, giúp duy trì hứng thú mà không phải mua thêm.</p>

  <h3 style="font-weight: 600; color: #0f172a;">6. Có tạo ra thành phẩm hay không</h3>
  <p>Đây là tiêu chí quan trọng nhất và cũng là thứ ít bảng trên thị trường đáp ứng. Hãy hỏi người bán một câu: sau khi dùng bảng này ba buổi, ông bà có cầm được cái gì trên tay không. Nếu câu trả lời là không, tấm bảng đó chỉ giải quyết được nửa vấn đề.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Câu chuyện chất liệu: vì sao tự nhiên lại khác</h2>
  <p>Với người cao tuổi, đặc biệt người có suy giảm nhận thức, xúc giác là một trong những kênh tiếp nhận còn giữ lại tốt nhất. Một vật liệu cho phản hồi chạm phong phú sẽ mang lại nhiều hơn hẳn một vật liệu trơn nhẵn đồng đều.</p>

  <div style="overflow-x: auto; margin: 25px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #475569;">Bảng 1: Đặc tính của ba vật liệu tự nhiên thường dùng trong bảng Montessori</caption>
      <thead>
        <tr style="background-color: #f3eefb; border-bottom: 2px solid #e3daf0;">
          <th style="padding: 10px; border: 1px solid #e3daf0;">Vật liệu</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Cảm giác khi chạm</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Phù hợp làm gì</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Ưu điểm với người cao tuổi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Dây bèo</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Mềm, hơi xốp, bám tay, có vân sợi rõ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đan lót ly, giỏ, túi, thảm nhỏ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Sợi to nên dễ thao tác, mũi đan không đều vẫn ra sản phẩm đẹp</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Dây nan, mây tre</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dai, hơi cứng, mát tay, bề mặt nhẵn có gân</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Khung giỏ, viền, chuông gió, tay cầm</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Giữ được hình dáng, cho sản phẩm dáng chắc chắn và bền</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Gỗ cao su</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Ấm, thớ mịn, nặng vừa phải</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Nền bảng, khay, module khóa chốt, móc khóa</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Chắc, chà nhẵn và bo tròn dễ, tạo cảm giác món đồ thật</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-weight: 600; color: #0f172a;">So sánh trực tiếp với nhựa</h3>

  <div style="overflow-x: auto; margin: 25px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #475569;">Bảng 2: Vật liệu tự nhiên so với nhựa trong bối cảnh dùng cho người cao tuổi</caption>
      <thead>
        <tr style="background-color: #f3eefb; border-bottom: 2px solid #e3daf0;">
          <th style="padding: 10px; border: 1px solid #e3daf0;">Khía cạnh</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Nhựa</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Sợi tự nhiên và gỗ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Phản hồi xúc giác</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đồng đều, ít thông tin</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đa dạng vân, nhiệt độ và độ nhám</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Mùi khi dùng lâu</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Thường có mùi nhựa, nhất là khi nóng</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Không mùi hoặc mùi gỗ nhẹ</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Cảm nhận về giá trị</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dễ bị xem là đồ chơi</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Được xem là đồ thủ công, đáng giữ gìn</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Làm ra thành phẩm để tặng</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Khó, sản phẩm nhựa ít giá trị quà tặng</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Thuận lợi, sản phẩm thủ công có giá trị tặng cao</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Môi trường</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Khó phân hủy</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Vật liệu tái tạo, phân hủy tự nhiên</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Độ bền va đập</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cao</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Trung bình, cần để nơi khô ráo</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Nhựa không phải lựa chọn sai trong mọi trường hợp. Nhưng với mục tiêu vừa rèn luyện vừa tạo ra món quà mang tặng được, vật liệu tự nhiên gần như không có đối thủ.</p>

  <!-- LƯU Ý LỚP HOÀN THIỆN -->
  <div style="border: 1px dashed #c8a96b; background-color: #fffbf2; padding: 18px 20px; margin: 28px 0; border-radius: 6px;">
    <h3 style="margin-top: 0; font-size: 1.15rem; color: #4a2385; font-weight: 700;">Một chi tiết hay bị bỏ qua</h3>
    <p style="margin-bottom: 0; line-height: 1.6; color: #334155;">Hãy hỏi người bán về lớp hoàn thiện bề mặt. Gỗ nên được xử lý bằng dầu tự nhiên hoặc sơn gốc nước không mùi. Đây là phần tiếp xúc trực tiếp với tay người cao tuổi hằng ngày, đôi khi cả với miệng ở người có thói quen đưa tay lên mặt.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Kiểm tra khi nhận hàng</h2>
  <ul style="line-height: 1.7;">
    <li>Vuốt tay dọc toàn bộ cạnh và mặt sau, xem có dằm hoặc cạnh sắc không.</li>
    <li>Ngửi thử trong hộp kín vừa mở, nếu có mùi nồng thì để thoáng vài ngày trước khi dùng.</li>
    <li>Kéo thử từng chi tiết, mọi thứ phải gắn chắc và không tháo rời được bằng tay.</li>
    <li>Thử thao tác từng module bằng một tay, vì nhiều người cao tuổi chỉ dùng thuận một bên.</li>
    <li>Đo chiều cao treo khi ông bà ngồi, tay với tới thoải mái mà không phải nhoài người.</li>
    <li>Kiểm tra dây có đủ ngắn để an toàn không.</li>
    <li>Kiểm tra bộ vật liệu đi kèm còn đủ để làm ít nhất một sản phẩm hoàn chỉnh.</li>
  </ul>

  <h2 style="font-weight: 700; color: #0f172a;">Cách tặng để ông bà không thấy bị dán nhãn</h2>
  <p>Đây là phần nhiều gia đình làm hỏng vào phút chót. Cùng một món đồ, hai cách giới thiệu cho hai kết quả trái ngược.</p>

  <div style="overflow-x: auto; margin: 25px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #475569;">Bảng 3: Gợi ý cách nói khi trao bảng rèn luyện cho ông bà</caption>
      <thead>
        <tr style="background-color: #f3eefb; border-bottom: 2px solid #e3daf0;">
          <th style="padding: 10px; border: 1px solid #e3daf0;">Nên tránh</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Nên dùng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0;">"Con mua cái này cho bố tập, kẻo lẫn mất"</td>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">"Con mua bộ đan này, bố làm giúp con cái giỏ để đựng chìa khóa nhé"</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0;">"Bác sĩ bảo mẹ phải vận động tay"</td>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">"Sắp sinh nhật cháu Bống, mẹ làm quà tặng nó nhé"</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0;">"Mẹ cứ chơi đi cho đỡ buồn"</td>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">"Mẹ chỉ con cách đan với, con vụng lắm"</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Cột bên phải hiệu quả hơn vì nó đặt người cao tuổi vào vai người giúp đỡ và người tạo ra giá trị.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Bảo quản để dùng được lâu</h2>
  <ul style="line-height: 1.7;">
    <li>Để nơi khô ráo, tránh kê sát tường ẩm hoặc gần nhà tắm, vì sợi tự nhiên hút ẩm.</li>
    <li>Không phơi trực tiếp dưới nắng gắt kéo dài, sợi sẽ giòn và bạc màu.</li>
    <li>Lau bằng khăn khô hoặc khăn ẩm vắt kiệt, không ngâm nước và không dùng hóa chất tẩy.</li>
    <li>Mỗi vài tháng kiểm tra lại các vít và chi tiết gắn, siết lại nếu lỏng.</li>
    <li>Sản phẩm ông bà làm ra nên được cất hoặc trưng bày ở nơi dễ thấy, vì bản thân việc nhìn thấy chúng đã là một lời nhắc tích cực mỗi ngày.</li>
  </ul>

  <!-- CTA KHỐI ANTCARE -->
  <aside class="antcare-cta" style="background-color: #6633b4; color: #ffffff; padding: 26px 24px; border-radius: 8px; margin: 35px 0;">
    <h2 style="color: #ffffff; border-top: 0; padding-top: 0; margin: 0 0 12px 0; font-size: 1.35rem; font-weight: 700;">Bảng và bộ dụng cụ ANTCARE</h2>
    <p style="color: #f0e8ff; line-height: 1.6; margin-bottom: 12px;">ANTCARE, thương hiệu Kiến chăm tổ, làm sản phẩm cho đúng một nhóm người dùng: người cao tuổi Việt Nam và gia đình đang chăm sóc họ. Toàn bộ thiết kế xuất phát từ các tiêu chí ở trên.</p>
    <ul style="padding-left: 20px; color: #f0e8ff; line-height: 1.6; margin-bottom: 18px;">
      <li><strong style="color: #ffffff;">Không chỉ là bảng rèn luyện.</strong> Mỗi bộ đều có phần tạo thành phẩm, để ông bà làm ra lót ly, giỏ nhỏ, túi đựng hay móc khóa hoàn chỉnh mang tặng con cháu.</li>
      <li><strong style="color: #ffffff;">Chất liệu tự nhiên, thân thiện môi trường.</strong> Dây bèo, dây nan và gỗ cao su. Cạnh bo tròn, bề mặt chà nhẵn, hoàn thiện không mùi.</li>
      <li><strong style="color: #ffffff;">Dáng vẻ của đồ dùng người lớn.</strong> Màu trang nhã, chi tiết to vừa tay, không hình ảnh trẻ con, đặt ở phòng khách vẫn hợp.</li>
      <li><strong style="color: #ffffff;">Module thay đổi được.</strong> Gia đình xoay vòng các phần để giữ sự mới mẻ.</li>
      <li><strong style="color: #ffffff;">Tư vấn theo từng trường hợp.</strong> ANTCARE hỏi về khả năng vận động tay, thị lực và sở thích trước khi gợi ý mẫu.</li>
    </ul>
    <p style="margin-bottom: 0;">
      <a class="nut" href="tel:0969032360" style="display: inline-block; background-color: #fd711a; color: #ffffff; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin-top: 6px;">Đặt tư vấn và xem mẫu · Hotline 0969 032 360</a>
    </p>
    <p style="font-size: 0.9rem; margin: 12px 0 0 0; color: #d9c9f5;">Bên cạnh bộ dụng cụ, ANTCARE cung cấp dịch vụ chăm sóc người cao tuổi tại nhà gồm đồng hành đi khám, trợ lý theo dõi sức khỏe và an tâm cửa nhà.</p>
  </aside>

  <h2 style="font-weight: 700; color: #0f172a;">Tóm tắt để quyết định nhanh</h2>
  <p>Nếu chỉ nhớ được ba điều trước khi đặt hàng, hãy nhớ ba điều này. Bảng phải trông như đồ của người lớn. Chi tiết phải đủ to cho đôi tay đã yếu. Và cuối mỗi vài buổi, ông bà phải cầm được một thứ gì đó trên tay để mang tặng.</p>
  <p>Hai điều đầu quyết định việc tấm bảng có được dùng hay không. Điều thứ ba quyết định việc nó có thay đổi được điều gì trong lòng người dùng nó hay không.</p>

  <!-- FAQ SECTION WITH DETAILS SCHEMA -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin-top: 35px;">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bảng Montessori cho người cao tuổi nên có bao nhiêu chi tiết?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Với người còn tự chủ tốt hoặc suy giảm nhẹ, khoảng sáu đến tám module là hợp lý. Với người sa sút trí tuệ trung bình đến nặng, nên giảm còn ba đến bốn module với chi tiết to hơn. Bảng quá nhiều chi tiết gây quá tải thị giác, khiến người cao tuổi không biết bắt đầu từ đâu và thường dẫn tới việc bỏ không dùng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Vì sao nên chọn chất liệu tự nhiên thay vì nhựa?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có bốn lý do. Sợi tự nhiên và gỗ cho phản hồi xúc giác phong phú hơn, điều rất quan trọng với người mà giác quan là kênh tiếp nhận chính. Chúng không có mùi nhựa gây khó chịu khi dùng lâu và gần mặt. Chúng tạo cảm giác món đồ thật, đáng trân trọng, thay vì cảm giác đồ chơi trẻ con. Và chúng là vật liệu tái tạo được, thân thiện với môi trường.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Dây bèo là gì, có bền không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Dây bèo được làm từ thân cây lục bình phơi khô và bện lại, là vật liệu thủ công truyền thống của nhiều làng nghề Việt Nam, thường dùng làm giỏ, thảm và đồ trang trí. Sợi dai, nhẹ, bám tay và dùng được nhiều năm nếu để nơi khô ráo. Với hoạt động đan cho người cao tuổi, ưu điểm lớn nhất của nó là sợi to nên thao tác dễ và mũi đan không đều vẫn cho ra sản phẩm đẹp.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Gỗ cao su có an toàn không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Gỗ cao su là loại gỗ được lấy từ cây cao su đã hết chu kỳ khai thác mủ, nên thuộc nhóm vật liệu tận dụng thay vì khai thác rừng tự nhiên. Gỗ có thớ mịn, nhẹ, dễ chà nhẵn và bo tròn cạnh. Khi mua, hãy hỏi rõ loại sơn hoặc dầu hoàn thiện được dùng và ưu tiên loại gốc tự nhiên, không mùi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên mua bảng may sẵn hay đặt làm theo yêu cầu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Bảng may sẵn phù hợp khi ông bà còn tự chủ tốt và bạn muốn thử trước. Đặt làm theo yêu cầu đáng cân nhắc khi người dùng có đặc điểm riêng cần tính đến, chẳng hạn chỉ dùng được một tay sau tai biến, thị lực kém cần độ tương phản cao, hoặc từng làm một nghề đặc thù mà bạn muốn đưa vào chủ đề của bảng.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Bảng rèn luyện có phải món quà phù hợp để biếu ông bà không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Phù hợp nếu bạn giới thiệu đúng cách. Đừng nói đây là đồ tập cho người lẫn, vì cách nói đó khiến người nhận thấy mình bị dán nhãn. Hãy giới thiệu như một bộ dụng cụ làm đồ thủ công, và lý tưởng nhất là mở hộp cùng nhau rồi cùng làm sản phẩm đầu tiên ngay hôm đó.</p>
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
    "headline": "Chọn mua bảng rèn luyện Montessori cho người cao tuổi: 6 tiêu chí và câu chuyện chất liệu",
    "description": "Hướng dẫn chọn bảng rèn luyện Montessori cho ông bà: 6 tiêu chí bắt buộc, so sánh chất liệu tự nhiên với nhựa, checklist kiểm tra khi nhận hàng và cách bảo quản.",
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
  id: 114,
  slug: 'chon-mua-bang-montessori-cho-nguoi-cao-tuoi',
  title: 'Chọn mua bảng rèn luyện Montessori cho người cao tuổi: 6 tiêu chí và câu chuyện chất liệu',
  category: 'Hướng dẫn chọn mua',
  date: '16/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/chon-mua-bang-montessori-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 114 to news.json!');
