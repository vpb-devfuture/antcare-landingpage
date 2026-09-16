const fs = require('fs');
const path = require('path');

// Image copying
const sourceImg = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\31bc79a6-93a2-4f3d-bbae-fdda951737c4\\antcare_weekly_brain_schedule_bright_1789540097788.jpg';
const destImg = path.join(__dirname, '../public/images/tin-tuc/do-choi-ren-luyen-tri-nao-cho-nguoi-cao-tuoi.jpg');

fs.copyFileSync(sourceImg, destImg);
console.log('Copied image to', destImg);

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list if present
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Cách phối hợp bảng busy board, bộ đan sợi, trò chơi trí nhớ và hoạt động giác quan thành một lịch tuần cho người cao tuổi, kèm bảng theo dõi năm chỉ số tại nhà.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Kết hợp đồ chơi và dụng cụ rèn luyện trí não cho người cao tuổi: đừng mua một món rồi thôi</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Một món đồ dù tốt đến mấy cũng hết hấp dẫn sau hai tuần. Điều tạo ra thay đổi thật là một thực đơn hoạt động luân phiên, đủ bốn nhóm và lặp lại đều đặn.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-16">16/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-16">16/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- HỘP TRẢ LỜI NHANH (AEO) -->
  <div class="quick-answer" style="background-color: #f4f6f8; padding: 20px; border-left: 4px solid #0056b3; margin-bottom: 25px; border-radius: 0 6px 6px 0;">
    <h2 style="font-size: 1.1rem; margin: 0 0 8px 0; color: #0f172a; font-weight: 700;">Trả lời nhanh</h2>
    <p style="margin: 0; font-size: 1rem; line-height: 1.6; color: #334155;">Để rèn luyện trí não cho người cao tuổi hiệu quả, nên phối hợp bốn nhóm hoạt động thay vì chỉ dùng một món: vận động tinh của bàn tay, nhận thức và trí nhớ, kích thích giác quan, và hoạt động tạo ra thành phẩm. Cách làm thực tế là xây một lịch tuần luân phiên, mỗi ngày khoảng hai mươi phút, giữ cố định khung giờ và xoay vòng dụng cụ hai tuần một lần để tránh nhàm chán. Nhóm thứ tư là nhóm quan trọng nhất về mặt tinh thần, vì nó cho người cao tuổi một kết quả nhìn thấy được và một món quà để mang tặng.</p>
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

  <p>Cảnh thường gặp trong nhiều gia đình: con cháu thấy mẹ hay quên, đặt mua một bộ xếp hình gỗ và một tấm bảng rèn luyện. Tuần đầu bà hào hứng. Tuần thứ hai bà làm cho có. Sang tuần thứ ba, bộ đồ nằm im trong tủ và cả nhà kết luận mẹ không thích cái này.</p>
  <p>Thực ra vấn đề không nằm ở món đồ. Nó nằm ở chỗ chúng ta mong một món đồ làm thay công việc của cả một thói quen.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Vì sao một món đồ không bao giờ đủ</h2>
  <p>Các hoạt động hỗ trợ người cao tuổi tác động lên nhiều hệ thống khác nhau. Một tấm bảng thao tác rất tốt cho bàn tay và cho sự bình tâm, nhưng gần như không đụng đến trí nhớ dài hạn hay khả năng ngôn ngữ. Một trò chơi trí nhớ lại kích hoạt nhận thức nhưng không cho đôi tay việc gì làm và không tạo ra kết quả cầm nắm được.</p>
  <p>Thêm vào đó là yếu tố quen nhàm. Bộ não phản ứng mạnh với cái mới và giảm dần đáp ứng với thứ lặp lại y hệt. Đây là lý do một tấm bảng dùng nguyên vẹn suốt ba tháng sẽ bị bỏ, trong khi cũng tấm bảng đó nếu được xoay vòng module và ghép với hoạt động khác thì vẫn được dùng đều.</p>

  <blockquote style="margin: 24px 0; padding: 12px 20px; border-left: 4px solid #c8a96b; background-color: #fdfbf7; font-style: italic; color: #4a2385; font-size: 1.1rem;">
    <p style="margin: 0;">Đừng nghĩ theo kiểu mua gì cho mẹ. Hãy nghĩ theo kiểu tuần này mẹ sẽ làm những việc gì.</p>
  </blockquote>

  <h2 style="font-weight: 700; color: #0f172a;">Bốn nhóm hoạt động cần có mặt</h2>

  <h3 style="font-weight: 600; color: #0f172a;">Nhóm 1: Vận động tinh của bàn tay</h3>
  <p>Gồm các thao tác cài, buộc, xoay, véo, luồn. Đây là nền tảng cho việc tự mặc quần áo, tự ăn uống và tự vệ sinh cá nhân. Dụng cụ tiêu biểu là bảng busy board, khung cài nút, bộ dây tết. Nhóm này nên có mặt gần như mỗi ngày vì nó gắn trực tiếp với khả năng tự phục vụ.</p>

  <h3 style="font-weight: 600; color: #0f172a;">Nhóm 2: Nhận thức và trí nhớ</h3>
  <p>Gồm phân loại, ghép đôi, sắp xếp theo thứ tự, gọi tên, kể chuyện theo ảnh. Với người có suy giảm trí nhớ, nguyên tắc quan trọng là biến câu hỏi kiểm tra thành lời mời hành động. Thay vì hỏi bà còn nhớ đây là ai không, hãy nói mình xếp ảnh này theo năm giúp con nhé.</p>

  <h3 style="font-weight: 600; color: #0f172a;">Nhóm 3: Kích thích giác quan</h3>
  <p>Gồm chạm vào các bề mặt khác nhau, ngửi hương liệu quen thuộc, nghe nhạc thời trẻ, cảm nhận nhiệt độ và trọng lượng. Nhóm này đặc biệt giá trị ở giai đoạn muộn của sa sút trí tuệ, khi nhiều khả năng khác đã giảm nhưng cảm nhận giác quan vẫn còn. Sợi bèo, nan mây và gỗ thật cho trải nghiệm chạm phong phú hơn nhựa rất nhiều.</p>

  <h3 style="font-weight: 600; color: #0f172a;">Nhóm 4: Hoạt động tạo ra thành phẩm</h3>
  <p>Gồm đan, tết, ghép, trang trí, đóng gói. Đây là nhóm có tác động tinh thần mạnh nhất, vì nó kết thúc bằng một vật thật mà người cao tuổi có thể giữ, dùng hoặc mang tặng.</p>

  <div style="overflow-x: auto; margin: 25px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #475569;">Bảng 1: Bốn nhóm hoạt động rèn luyện trí não và vai trò của từng nhóm</caption>
      <thead>
        <tr style="background-color: #f3eefb; border-bottom: 2px solid #e3daf0;">
          <th style="padding: 10px; border: 1px solid #e3daf0;">Nhóm</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Dụng cụ tiêu biểu</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Giá trị chính</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Tần suất gợi ý</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Vận động tinh</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Busy board, khung cài nút, dây tết</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Giữ khả năng tự phục vụ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">5 đến 6 buổi mỗi tuần</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Nhận thức, trí nhớ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Ảnh gia đình, bộ phân loại, cờ đơn giản</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Duy trì ngôn ngữ và sự chú ý</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">3 buổi mỗi tuần</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Giác quan</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Sợi tự nhiên, gỗ, hương liệu, nhạc xưa</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Xoa dịu, giảm bồn chồn</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Hằng ngày, xen kẽ tự do</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Tạo thành phẩm</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Khung đan sợi, bộ ghép gỗ, bộ trang trí</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cảm giác hữu ích và tự hào</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">2 đến 3 buổi mỗi tuần</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Lịch tuần mẫu cho người cao tuổi tại nhà</h2>
  <p>Đây là khung tham khảo cho người suy giảm trí nhớ nhẹ đến trung bình, mỗi buổi khoảng hai mươi phút vào giữa buổi sáng. Gia đình nên điều chỉnh theo nếp sinh hoạt thật của mình.</p>

  <div style="overflow-x: auto; margin: 25px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <caption style="text-align: left; font-weight: bold; margin-bottom: 8px; color: #475569;">Bảng 2: Lịch hoạt động rèn luyện trí não mẫu trong một tuần</caption>
      <thead>
        <tr style="background-color: #f3eefb; border-bottom: 2px solid #e3daf0;">
          <th style="padding: 10px; border: 1px solid #e3daf0;">Ngày</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Hoạt động chính</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Nhóm</th>
          <th style="padding: 10px; border: 1px solid #e3daf0;">Kết thúc bằng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thứ hai</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Bảng thao tác, phần khóa và dây</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Vận động tinh</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cất bảng về đúng chỗ cùng nhau</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thứ ba</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đan sợi bèo làm lót ly, phần một</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Tạo thành phẩm</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đánh dấu tiến độ trên sản phẩm</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thứ tư</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Xếp ảnh gia đình theo thời gian, kể chuyện</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Nhận thức</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dán một ảnh vào sổ chung</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thứ năm</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Đan sợi bèo, phần hai và hoàn thiện</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Tạo thành phẩm</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Dùng ngay lót ly trong bữa trà chiều</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thứ sáu</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Bảng thao tác, phần nút bấm và cài nút áo</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Vận động tinh</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Tự cài nút áo khoác trước khi ra ngoài</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Thứ bảy</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Cùng cháu làm một món quà nhỏ</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Tạo thành phẩm &amp; giao tiếp</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Gói quà và viết tên người nhận</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #e3daf0; font-weight: 600;">Chủ nhật</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Nghỉ, nghe nhạc xưa, xoa bóp tay</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Giác quan</td>
          <td style="padding: 10px; border: 1px solid #e3daf0;">Không yêu cầu kết quả</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Hãy chú ý cột cuối cùng. Mỗi buổi đều có một điểm kết thúc rõ ràng. Đây là chi tiết nhỏ nhưng tạo khác biệt lớn, vì nó cho người cao tuổi cảm giác đã xong việc thay vì cảm giác bị cắt ngang.</p>

  <h2 style="font-weight: 700; color: #0f172a;">Bốn nguyên tắc phối hợp để không nhàm chán</h2>
  <ul style="line-height: 1.7;">
    <li><strong>Xoay vòng hai tuần một lần.</strong> Cất bớt một vài module hoặc bộ dụng cụ, đưa ra thứ khác. Sau hai tuần đảo lại. Món đồ cũ quay về sẽ được đón nhận gần như mới.</li>
    <li><strong>Giữ độ khó ở mức vừa tầm với.</strong> Đủ khó để phải tập trung, đủ dễ để hoàn thành. Khi ông bà thành thạo, đừng tăng số lượng, hãy tăng độ tinh của cùng một việc.</li>
    <li><strong>Dừng khi đang vui.</strong> Kết thúc lúc còn hứng thú là cách bảo đảm ngày mai dễ bắt đầu. Làm đến lúc mệt là cách nhanh nhất để mất một thói quen.</li>
    <li><strong>Neo vào cuộc đời họ.</strong> Người từng làm thợ may cần sợi và vải. Người từng buôn bán cần đếm và phân loại. Người từng làm ruộng cần vật liệu thô ráp và việc tay chân. Hoạt động càng gần nghề cũ càng ít bị từ chối.</li>
  </ul>

  <!-- LƯU Ý THEO DÕI NĂM CHỈ SỐ -->
  <div style="border: 1px dashed #c8a96b; background-color: #fffbf2; padding: 18px 20px; margin: 28px 0; border-radius: 6px;">
    <h3 style="margin-top: 0; font-size: 1.15rem; color: #4a2385; font-weight: 700;">Theo dõi năm chỉ số tại nhà</h3>
    <p style="margin-bottom: 0; line-height: 1.6; color: #334155;">Mỗi ngày ghi vài dòng vào một cuốn sổ nhỏ: thời gian tham gia, số lần cần trợ giúp, tâm trạng trong và sau buổi, mức độ bồn chồn chiều tối, và giấc ngủ đêm đó. Sau bốn tuần bạn sẽ thấy rõ hoạt động nào hợp, khung giờ nào tốt nhất. Cuốn sổ này cũng là thứ đáng mang theo khi đưa ông bà đi khám.</p>
  </div>

  <h2 style="font-weight: 700; color: #0f172a;">Gắn hoạt động vào lịch chăm sóc chung</h2>
  <p>Nhiều gia đình bỏ cuộc không phải vì phương pháp sai mà vì không ai có mặt vào đúng khung giờ đó. Nếu con cháu đi làm cả ngày, hãy tính tới hai cách. Thứ nhất, thiết kế hoạt động ông bà tự làm an toàn một mình, đặt sẵn trên khay cố định. Thứ hai, lồng hoạt động vào các buổi có người trợ giúp đến nhà.</p>

  <!-- CTA KHỐI ANTCARE -->
  <aside class="antcare-cta" style="background-color: #6633b4; color: #ffffff; padding: 26px 24px; border-radius: 8px; margin: 35px 0;">
    <h2 style="color: #ffffff; border-top: 0; padding-top: 0; margin: 0 0 12px 0; font-size: 1.35rem; font-weight: 700;">Bộ dụng cụ ANTCARE: đủ bốn nhóm trong một giải pháp</h2>
    <p style="color: #f0e8ff; line-height: 1.6; margin-bottom: 12px;">ANTCARE, thương hiệu Kiến chăm tổ, không bán từng món rời rạc mà thiết kế theo hướng một bộ phủ đủ bốn nhóm hoạt động ở trên.</p>
    <ul style="padding-left: 20px; color: #f0e8ff; line-height: 1.6; margin-bottom: 18px;">
      <li><strong style="color: #ffffff;">Có phần tạo thành phẩm, không chỉ luyện tay.</strong> Sau mỗi vài buổi, ông bà cầm trên tay một chiếc lót ly, một chiếc giỏ nhỏ do chính mình làm ra để mang tặng con cháu.</li>
      <li><strong style="color: #ffffff;">Vật liệu tự nhiên cho trải nghiệm chạm thật.</strong> Dây bèo, dây nan và gỗ cao su mang lại cảm giác ấm và xúc giác phong phú.</li>
      <li><strong style="color: #ffffff;">Module xoay vòng được.</strong> Tháo lắp linh hoạt giúp gia đình duy trì sự mới mẻ.</li>
      <li><strong style="color: #ffffff;">Kèm gợi ý lịch tuần.</strong> Hướng dẫn chi tiết từng ngày để gia đình bắt đầu dễ dàng.</li>
    </ul>
    <p style="margin-bottom: 0;">
      <a class="nut" href="tel:0969032360" style="display: inline-block; background-color: #fd711a; color: #ffffff; font-weight: 600; font-size: 1rem; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin-top: 6px;">Nhận tư vấn bộ phù hợp với ông bà · Hotline 0969 032 360</a>
    </p>
    <p style="font-size: 0.9rem; margin: 12px 0 0 0; color: #d9c9f5;">ANTCARE cũng cung cấp dịch vụ Trợ lý sức khỏe tại nhà, có thể lồng ghép hoạt động rèn luyện trí não này vào mỗi buổi chăm sóc.</p>
  </aside>

  <h2 style="font-weight: 700; color: #0f172a;">Điều cần nhớ</h2>
  <p>Đừng hỏi món nào tốt nhất. Hãy hỏi tuần này ông bà sẽ làm gì, vào lúc nào, cùng với ai, và cuối buổi sẽ có gì trong tay. Khi trả lời được bốn câu đó, việc chọn dụng cụ trở nên đơn giản, và điều quan trọng hơn là thói quen sẽ trụ lại được quá tuần thứ ba.</p>

  <!-- FAQ SECTION WITH DETAILS SCHEMA -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin-top: 35px;">
    <h2 style="font-weight: 700; color: #0f172a;">Câu Hỏi Thường Gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Mỗi tuần nên cho ông bà hoạt động mấy buổi?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Năm đến sáu buổi mỗi tuần, mỗi buổi khoảng hai mươi phút, là mức nhiều gia đình duy trì được lâu dài. Đều đặn quan trọng hơn cường độ. Một buổi ngắn mỗi ngày tốt hơn hẳn một buổi dài vào cuối tuần, vì nhịp lặp lại hằng ngày giúp người cao tuổi hình thành thói quen và giảm cảm giác bất định.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Trò chơi ô chữ và sudoku có đủ để rèn trí não không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Không đủ nếu dùng một mình. Các trò này chủ yếu tác động lên nhóm nhận thức, trong khi người cao tuổi còn cần vận động bàn tay, kích thích giác quan và cảm giác hoàn thành công việc. Ngoài ra, ô chữ và sudoku dễ trở thành bài kiểm tra khiến người có suy giảm trí nhớ cảm thấy thất bại, nên cần chọn độ khó rất cẩn thận.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Làm sao biết độ khó đã phù hợp?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Quan sát tỷ lệ hoàn thành. Nếu ông bà làm xong gần như mọi lần mà vẫn phải tập trung, độ khó đang đúng. Nếu làm xong quá nhanh và tỏ ra hờ hững, hoạt động đang quá dễ. Nếu bỏ dở, đẩy ra xa, đổi chủ đề hoặc tỏ ra khó chịu, hoạt động đang quá khó và cần chia nhỏ bước lại.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Nên theo dõi những gì để biết có tiến triển?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Năm chỉ số dễ ghi tại nhà: thời gian tham gia mỗi buổi, số lần cần người khác trợ giúp, tâm trạng trong và sau hoạt động, mức độ bồn chồn vào buổi chiều, và chất lượng giấc ngủ đêm đó. Ghi vài dòng mỗi ngày trong bốn tuần sẽ cho bức tranh rõ hơn nhiều so với cảm nhận chung chung, và rất hữu ích khi trao đổi với bác sĩ.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Ông bà không chịu tham gia thì phải làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Thường có ba nguyên nhân. Một là hoạt động trông giống đồ trẻ con nên bị coi là hạ thấp. Hai là hoạt động không liên quan đến cuộc đời họ, ví dụ đưa bộ xếp hình cho người cả đời làm nghề may. Ba là cách mời mang tính ra lệnh hoặc chữa bệnh. Hãy đổi sang việc gắn với nghề cũ hoặc sở thích cũ, và mời theo kiểu nhờ giúp một tay.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #0f172a;">Có nên cho ông bà dùng máy tính bảng và ứng dụng luyện trí nhớ không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #334155; line-height: 1.6;">
        <p itemprop="text">Có thể dùng như một phần nhỏ, nhưng không nên là phần chính. Màn hình không mang lại cảm giác chạm của vật liệu thật, không tạo ra sản phẩm cầm được và với nhiều người cao tuổi thì thao tác trên màn hình cảm ứng lại là rào cản gây thêm bực bội. Hoạt động dùng tay với vật thật nhìn chung dễ duy trì hơn.</p>
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
    "headline": "Kết hợp đồ chơi và dụng cụ rèn luyện trí não cho người cao tuổi: đừng mua một món rồi thôi",
    "description": "Cách phối hợp bảng busy board, bộ đan sợi, trò chơi trí nhớ và hoạt động giác quan thành một lịch tuần cho người cao tuổi, kèm bảng theo dõi năm chỉ số tại nhà.",
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
  id: 112,
  slug: 'do-choi-ren-luyen-tri-nao-cho-nguoi-cao-tuoi',
  title: 'Kết hợp đồ chơi và dụng cụ rèn luyện trí não cho người cao tuổi: đừng mua một món rồi thôi',
  category: 'Dụng cụ và hoạt động',
  date: '16/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/do-choi-ren-luyen-tri-nao-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 112 to news.json!');
