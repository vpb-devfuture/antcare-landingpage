import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const article15 = {
  "id": 15,
  "category": "Tri ân khách hàng",
  "date": "14 Tháng 8, 2026",
  "title": "Chương Trình Tri Ân Mùa Lễ Vu Lan Báo Hiếu: Ưu Đãi Đặc Biệt Dịch Vụ Chăm Sóc Người Cao Tuổi Tại Nhà",
  "description": "Nhân dịp Mùa Lễ Vu Lan Báo Hiếu, ANTCARE ra mắt 3 gói trải nghiệm chăm sóc và đồng hành cùng bố mẹ tại nhà chỉ từ 299.000đ/buổi. Quà tặng thiệp viết tay & hoa tươi tri ân. Áp dụng đến 15/09/2026.",
  "image": "/images/uu-dai-vu-lan-bao-hieu.png",
  "author": {
    "name": "Nguyễn Kim Thanh",
    "image": "/images/huyen-trang.jpg",
    "description": "Người sáng lập ANTCARE"
  },
  "slug": "uu-dai-vu-lan-bao-hieu-tri-an-cha-me",
  "content": `<p class="ant-sapo">Vu Lan Báo Hiếu là dịp đặc biệt để những người con bày tỏ lòng hiếu kính và sự quan tâm sâu sắc tới Đấng Sinh Thành. Đồng hành cùng hàng ngàn gia đình Việt, ANTCARE trân trọng gửi tới quý khách hàng chương trình tri ân <strong>"Vu Lan Trọn Đạo Hiếu — Giữ Trọn Yêu Thương"</strong> với 3 gói trải nghiệm chăm sóc sức khỏe tại nhà đặc biệt chỉ từ <strong>299.000đ/buổi</strong>.</p>

<div style="background-color: #fdf4ff; border: 1px solid #f5d0fe; border-left: 4px solid #68259E; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #68259E; font-size: 0.95rem; display: block; margin-bottom: 8px;">🪷 Thông tin chương trình ưu đãi Vu Lan 2026:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #4a154b; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;"><strong>Thời gian áp dụng:</strong> Đến hết ngày <strong>15/09/2026</strong></li>
    <li style="margin-bottom: 6px;"><strong>Đối tượng áp dụng:</strong> Tất cả khách hàng đăng ký chăm sóc cho ông bà, bố mẹ</li>
    <li style="margin-bottom: 0;"><strong>Quà tặng tri ân đặc biệt:</strong> Thiệp viết tay theo tâm sự riêng của con + Hoa tươi trao tận tay bố mẹ</li>
  </ul>
</div>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 25px;">
  <img style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" src="/images/huyen-trang.jpg" alt="Ảnh chân dung Nguyễn Kim Thanh, người sáng lập ANTCARE">
  <div>
    <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 2px;"><a href="/#cau-chuyen-cua-ant" style="color: #111827; text-decoration: none;">Nguyễn Kim Thanh</a></div>
    <div style="color: #68259E; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Người sáng lập ANTCARE · Chứng nhận Sơ cấp cứu gia đình · Chứng nhận Sơ cấp cứu cho người cao tuổi</div>
    <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 6px; line-height: 1.5;">"Món quà quý giá nhất đối với cha mẹ khi về già không phải là những món đồ đắt tiền, mà là sự lắng nghe, đồng hành và sự an tâm về sức khỏe mỗi ngày. Mùa Vu Lan năm nay, ANTCARE mong muốn trở thành cánh tay nối dài giúp các con gửi gắm trọn vẹn tình yêu thương tới bố mẹ."</p>
    <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">Xuất bản 14/08/2026 · Cập nhật 14/08/2026</p>
  </div>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Bảng Chi Tiết 3 Gói Trải Nghiệm Ưu Đãi Mùa Vu Lan</h2>

<p>ANTCARE thiết kế 3 gói dịch vụ linh hoạt, đáp ứng trọn vẹn từng nhu cầu thăm dò, đánh giá diện rộng đến theo dõi chuyên sâu cho bố mẹ:</p>

<div style="overflow-x: auto; margin-bottom: 30px;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; border: 1px solid #e5e7eb; border-radius: 8px;">
    <thead>
      <tr style="background-color: #68259E; color: white;">
        <th style="padding: 12px; text-align: left; width: 28%;">Gói dịch vụ</th>
        <th style="padding: 12px; text-align: left; width: 22%;">Chi phí ưu đãi</th>
        <th style="padding: 12px; text-align: left; width: 50%;">Nội dung chi tiết</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 14px; vertical-align: top;">
          <strong style="color: #68259E; font-size: 1rem;">Gói 1 — "CHẠM"</strong><br>
          <em style="color: #6b7280; font-size: 0.85rem;">Món quà mở đầu, dành cho người con còn đang thăm dò</em>
        </td>
        <td style="padding: 14px; vertical-align: top;">
          <strong style="color: #E86A17; font-size: 1.1rem;">299.000đ</strong><br>
          <span style="text-decoration: line-through; color: #9ca3af; font-size: 0.85rem;">Giá gốc: 495.000đ</span>
        </td>
        <td style="padding: 14px; vertical-align: top;">
          <ul style="margin: 0; padding-left: 18px; color: #374151; line-height: 1.6;">
            <li>1 buổi Trợ lý sức khỏe tại nhà (~80 phút)</li>
            <li>Đo và ghi 5 chỉ số nền: huyết áp, nhịp tim, nhiệt độ, SpO2, đường huyết</li>
            <li>15 phút bài tập Active Ageing phù hợp thể trạng</li>
            <li>Kiểm góc thuốc: đối chiếu hạn dùng, sắp lại theo buổi</li>
            <li><strong>Thiệp viết tay theo lời của người con + 1 bông hoa</strong></li>
            <li>Báo cáo sau buổi gửi cho người con qua Zalo, kèm ảnh khoảnh khắc trao quà</li>
          </ul>
        </td>
      </tr>

      <tr style="border-bottom: 1px solid #e5e7eb; background-color: #fffbeb;">
        <td style="padding: 14px; vertical-align: top;">
          <strong style="color: #68259E; font-size: 1rem;">Gói 2 — "AN TÂM"</strong> ⭐<br>
          <span style="background-color: #f59e0b; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; display: inline-block; margin-top: 4px;">GÓI ĐƯỢC CHỌN NHIỀU NHẤT</span>
        </td>
        <td style="padding: 14px; vertical-align: top;">
          <strong style="color: #E86A17; font-size: 1.1rem;">690.000đ</strong><br>
          <span style="text-decoration: line-through; color: #9ca3af; font-size: 0.85rem;">Giá gốc: 1.090.000đ</span>
        </td>
        <td style="padding: 14px; vertical-align: top;">
          <ul style="margin: 0; padding-left: 18px; color: #374151; line-height: 1.6;">
            <li><strong>Toàn bộ nội dung gói Chạm</strong></li>
            <li><strong>Hồ sơ sức khỏe đầu tiên của bố mẹ</strong> — cuốn hồ sơ in: chỉ số nền, danh mục thuốc đang dùng, tiền sử, đánh giá nguy cơ ngã, thông tin liên hệ khẩn cấp</li>
            <li><strong>Audit an toàn nhà ở 15 điểm</strong> + khắc phục ngay các điểm trong khả năng (kê lại thảm, dán chống trượt, đổi vị trí đồ hay dùng xuống thấp)</li>
            <li><strong>Bảng thuốc tuần in A4</strong> dán tủ lạnh</li>
            <li>Báo cáo an toàn nhà ở gửi người con, có ảnh trước/sau</li>
          </ul>
        </td>
      </tr>

      <tr>
        <td style="padding: 14px; vertical-align: top;">
          <strong style="color: #68259E; font-size: 1rem;">Gói 3 — "TRỌN VẸN"</strong><br>
          <em style="color: #6b7280; font-size: 0.85rem;">Theo dõi chuyên sâu &amp; đọc kết quả 2 buổi</em>
        </td>
        <td style="padding: 14px; vertical-align: top;">
          <strong style="color: #E86A17; font-size: 1.1rem;">1.290.000đ</strong><br>
          <span style="text-decoration: line-through; color: #9ca3af; font-size: 0.85rem;">Giá gốc: 1.980.000đ</span>
        </td>
        <td style="padding: 14px; vertical-align: top;">
          <ul style="margin: 0; padding-left: 18px; color: #374151; line-height: 1.6;">
            <li><strong>Toàn bộ nội dung gói An tâm</strong></li>
            <li>Buổi thăm thứ hai sau 2 tuần để <strong>đo lại và so sánh với chỉ số nền</strong></li>
            <li>1 cuộc gọi tư vấn 20 phút với người con, đọc kết quả hai buổi</li>
            <li>Ưu tiên xét chuyển tiếp sang gói Quan tâm/Chăm sóc với mức giá thành viên</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<figure style="text-align: center; margin: 28px 0;">
  <img src="/images/uu-dai-vu-lan-bao-hieu-body.png" alt="Trợ lý sức khỏe ANTCARE đo chỉ số sức khỏe và chăm sóc người cao tuổi nhân dịp Mùa Lễ Vu Lan" style="width: 100%; max-height: 520px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;" />
  <figcaption style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Trợ lý sức khỏe ANTCARE hỗ trợ kiểm tra chỉ số sức khỏe và lập hồ sơ an toàn cho người cao tuổi tại nhà (Ảnh minh họa)</figcaption>
</figure>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vì Sao Hàng Trăm Gia Đình Chọn ANTCARE Làm Món Quà Vu Lan?</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 25px;">
  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
    <h4 style="color: #68259E; margin-top: 0; margin-bottom: 8px; font-size: 1rem;">🪷 Sự Thấu Hiểu &amp; Tận Tâm</h4>
    <p style="margin: 0; color: #4b5563; font-size: 0.9rem;">Mỗi lần Kiến ghé thăm không chỉ để theo dõi chỉ số y tế, mà còn cùng trò chuyện, nhắc uống thuốc và tập luyện rèn luyện trí não, thể chất cùng ông bà.</p>
  </div>
  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
    <h4 style="color: #68259E; margin-top: 0; margin-bottom: 8px; font-size: 1rem;">📋 Báo Cáo Minh Bạch Cho Con</h4>
    <p style="margin: 0; color: #4b5563; font-size: 0.9rem;">Toàn bộ chỉ số, hình ảnh khoảnh khắc trao quà và tình hình sức khỏe đều được tổng hợp gửi cho người con qua Zalo ngay sau buổi thăm.</p>
  </div>
  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
    <h4 style="color: #68259E; margin-top: 0; margin-bottom: 8px; font-size: 1rem;">💌 Món Quà Đong Đầy Cảm Xúc</h4>
    <p style="margin: 0; color: #4b5563; font-size: 0.9rem;">Đội ngũ Kiến mang theo tấm thiệp viết tay theo lời tâm sự riêng của con kèm đóa hoa tươi thắm kính tặng bố mẹ nhân ngày lễ Vu Lan.</p>
  </div>
</div>

<div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 25px; margin-top: 30px; margin-bottom: 30px;">
  <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #92400e; font-weight: 600;">Đăng ký nhận ưu đãi Mùa Lễ Vu Lan cho Bố Mẹ ngay hôm nay</h3>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Số lượng suất phục vụ chất lượng cao trong mỗi ngày có hạn. Gia đình vui lòng đăng ký sớm để ANTCARE chuẩn bị chu đáo nhất cho bố mẹ!</p>
  <div style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px dashed #f59e0b;">
    <p style="margin: 0; font-weight: 500;">👉 <a href="/#thong-tin-lien-he" style="color: #d97706; font-weight: bold;">Đăng ký tư vấn trực tiếp</a> · Hotline: <a href="tel:0969032360" style="color: #d97706; font-weight: bold;">0969 032 360</a></p>
  </div>
</div>`
};

newsData.list = newsData.list.filter(item => item.id !== 15);
newsData.list.unshift(article15);

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully published Vu Lan promotion Article #15 to news.json!');
