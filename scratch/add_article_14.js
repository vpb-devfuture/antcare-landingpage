import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const article14 = {
  "id": 14,
  "category": "Chăm sóc sức khỏe",
  "date": "13 Tháng 8, 2026",
  "title": "Phòng Chống Té Ngã Cho Người Cao Tuổi Tại Nhà: Rà Soát Nguy Cơ Và 3 Việc Cần Làm Ngay",
  "description": "Hướng dẫn phòng chống té ngã cho người cao tuổi tại nhà: rà soát nguy cơ, cải tạo không gian sống và duy trì vận động, dựa trên bằng chứng của WHO, CDC và Cochrane.",
  "image": "/images/phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha.png",
  "author": {
    "name": "Nguyễn Kim Thanh",
    "image": "/images/huyen-trang.jpg",
    "description": "Người sáng lập ANTCARE"
  },
  "slug": "phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha",
  "content": `<p class="ant-sapo">Phần lớn các cú ngã ở người cao tuổi không phải là chuyện tất yếu của tuổi già. Bài viết hướng dẫn cách rà soát nguy cơ trong nhà, ba việc cải tạo nên làm ngay, và vì sao vận động lại quan trọng hơn cả việc mua thêm dụng cụ.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">3 Bài Tập Chống Té Ngã Cho Người Cao Tuổi, Tập Tại Nhà Với Một Chiếc Ghế</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/huong-dan-chon-gay-chong-xe-day-xe-lan-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Chọn Gậy Chống, Xe Đẩy Hay Xe Lăn Cho Người Cao Tuổi: Phân Biệt Theo Khả Năng Đi Lại</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/trao-luu-chup-anh-mua-thu-ha-noi-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Trào Lưu Chụp Ảnh Mùa Thu Hà Nội: Bí Quyết Giúp Người Cao Tuổi Sống Vui Khỏe</a></li>
  </ul>
</div>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 25px;">
  <img style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" src="/images/huyen-trang.jpg" alt="Ảnh chân dung Nguyễn Kim Thanh, người sáng lập ANTCARE">
  <div>
    <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 2px;"><a href="/#cau-chuyen-cua-ant" style="color: #111827; text-decoration: none;">Nguyễn Kim Thanh</a></div>
    <div style="color: #68259E; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Người sáng lập ANTCARE · Chứng nhận Sơ cấp cứu gia đình · Chứng nhận Sơ cấp cứu cho người cao tuổi</div>
    <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 6px; line-height: 1.5;">Tôi xây dựng quy trình rà soát an toàn nhà ở của ANTCARE — bảng kiểm 15 điểm mà đội ngũ dùng khi đến từng gia đình. Bài viết này tổng hợp các khuyến nghị đã được kiểm chứng của WHO, CDC và các tổng quan hệ thống Cochrane, đặt cạnh những gì chúng tôi thực sự làm khi đứng trong nhà của một người cao tuổi.</p>
    <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">Xuất bản 13/08/2026 · Cập nhật 13/08/2026</p>
  </div>
</div>

<div style="background-color: #f0fdf4; padding: 16px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
  <span style="color: #166534; font-weight: bold; font-size: 1rem; display: block; margin-bottom: 6px;">💡 Trả lời nhanh cho bạn:</span>
  <p style="color: #14532d; font-size: 0.95rem; margin: 0; line-height: 1.6;">Để giảm nguy cơ té ngã cho người cao tuổi tại nhà, cần làm đồng thời ba việc: rà soát và xử lý các nguy cơ trong không gian sống, duy trì tập luyện thăng bằng và sức mạnh chân đều đặn, và cùng bác sĩ xem lại các thuốc đang dùng có gây chóng mặt hay không. Trong ba việc đó, tập luyện là biện pháp có bằng chứng mạnh nhất.</p>
  <ul style="margin-top: 10px; margin-bottom: 0; color: #166534; font-size: 0.9rem; padding-left: 20px;">
    <li><strong>Cải tạo không gian sống:</strong> cố định mép thảm, tăng sáng lối đi ban đêm, lắp thanh vịn nhà tắm.</li>
    <li><strong>Duy trì vận động:</strong> các chương trình tập thăng bằng và sức mạnh làm giảm rõ rệt tỷ lệ té ngã.</li>
    <li><strong>Rà soát thuốc:</strong> một số thuốc gây chóng mặt hoặc hạ huyết áp khi đứng lên — cần bác sĩ xem lại, không tự bỏ thuốc.</li>
  </ul>
</div>

<p>Nhiều gia đình mặc định rằng ngã là chuyện khó tránh khi tuổi cao. Nhưng nghiên cứu về phòng chống té ngã cho thấy phần lớn các yếu tố dẫn tới ngã đều <em>có thể thay đổi được</em>. Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh Hoa Kỳ (CDC) xác định các yếu tố nguy cơ quan trọng và có thể can thiệp gồm: yếu cơ, vấn đề về dáng đi và thăng bằng, việc dùng thuốc tác động lên thần kinh, thị lực kém, và các nguy cơ trong môi trường sống.</p>

<p>Về quy mô vấn đề: các nghiên cứu trên người từ 65 tuổi sống tại cộng đồng cho thấy khoảng 28–35% bị ngã mỗi năm, và tần suất tăng lên theo tuổi cùng mức độ suy yếu. Nói cách khác, trong ba người cao tuổi quanh ta, mỗi năm có khoảng một người ngã.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vì sao không nên xử lý bằng cách bắt bố mẹ đi lại ít hơn?</h2>

<p>Đây là phản xạ đầu tiên của rất nhiều gia đình sau khi bố mẹ ngã một lần: giữ bố mẹ ngồi yên cho an toàn. Cách này làm vấn đề nặng thêm. Ít vận động dẫn tới yếu cơ và giảm khả năng thăng bằng — mà đó chính là hai yếu tố nguy cơ hàng đầu. Nỗi sợ ngã tự nó cũng là một yếu tố dự báo té ngã.</p>

<p>Bằng chứng đi theo hướng ngược lại. Tổng quan hệ thống Cochrane trên 59 thử nghiệm với gần 13.000 người tham gia cho thấy tập luyện làm giảm tỷ lệ té ngã khoảng 23%, với mức độ tin cậy cao. Các chương trình kết hợp nhiều loại bài tập — thường là bài tập thăng bằng và chức năng cộng với bài tập sức mạnh — cho thấy mức giảm tỷ lệ té ngã tới khoảng 34%.</p>

<p>Chi tiết hơn về từng bài tập cụ thể, mời đọc bài <a href="/news/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Bài tập chống té ngã cho người cao tuổi</a>.</p>

<figure style="text-align: center; margin: 28px 0;">
  <img src="/images/phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha-body.png" alt="Rà soát an toàn thảm trải sàn và ánh sáng lối đi phòng chống té ngã cho người cao tuổi" style="width: 100%; max-height: 520px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;" />
  <figcaption style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Rà soát và cải tạo không gian sống an toàn cho người cao tuổi tại nhà (Ảnh minh họa)</figcaption>
</figure>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">3 bước cải tạo không gian sống an toàn hơn</h2>

<p>Cải tạo môi trường là việc gia đình có thể làm ngay trong một buổi chiều, không tốn nhiều tiền. Ba nhóm việc sau nên làm theo thứ tự này:</p>

<ol style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px 20px 20px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 12px;"><strong>Dọn các nguy cơ vấp trên sàn:</strong> Cất gọn dây điện sát tường, dọn các món đồ nhỏ trên lối đi. Cố định mép thảm bằng băng dính hai mặt hoặc thay bằng thảm có lớp chống trượt. Chú ý ngưỡng cửa và mép chuyển giữa hai loại sàn — đây là chỗ hay bị bỏ qua.</li>
  <li style="margin-bottom: 12px;"><strong>Tăng ánh sáng, đặc biệt là lối đi ban đêm:</strong> Thị lực giảm theo tuổi và mắt người cao tuổi cần nhiều thời gian hơn để thích nghi với thay đổi độ sáng. Ưu tiên tuyến đường từ giường ngủ đến nhà vệ sinh: đèn cảm ứng tự sáng, hoặc đèn ngủ chân tường. Đặt công tắc hoặc đèn pin trong tầm tay ngay cạnh giường.</li>
  <li style="margin-bottom: 0;"><strong>Lắp thanh vịn và chống trượt ở phòng tắm:</strong> Đây là khu vực có mặt sàn ướt và nhiều động tác đứng lên ngồi xuống. Lắp thanh vịn cố định vào tường chắc chắn ở cạnh bồn cầu và trong khu vực vòi sen — không dùng loại hít chân không thay cho thanh vịn bắt vít. Thêm ghế tắm nếu bác không đứng lâu được.</li>
</ol>

<p>Việc cải tạo nhà ở kết hợp với thay đổi thói quen theo hướng dẫn của chuyên gia hoạt động trị liệu là một trong những can thiệp được ghi nhận có hiệu quả giảm té ngã, cùng với các chương trình tập luyện tại nhà và tập theo nhóm.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Những yếu tố nào làm tăng nguy cơ té ngã?</h2>

<p>Bảng dưới liệt kê các yếu tố nguy cơ có thể can thiệp được và hướng xử lý tương ứng. Bảng này để gia đình biết cần lưu ý điều gì và cần hỏi bác sĩ về điều gì — <strong style="color: #dc2626;">không phải để tự đánh giá mức độ nguy cơ</strong>. Việc lượng giá nguy cơ té ngã cần do bác sĩ hoặc nhân viên y tế có chuyên môn thực hiện.</p>

<div style="overflow-x: auto; margin-bottom: 25px;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <caption style="caption-side: bottom; font-style: italic; color: #666; margin-top: 8px; font-size: 13px;">Các yếu tố nguy cơ té ngã có thể can thiệp, theo phân loại của CDC.</caption>
    <thead>
      <tr style="background-color: #68259E; color: white;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Yếu tố</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Biểu hiện gia đình có thể quan sát</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Hướng xử lý</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Yếu cơ, nhất là cơ đùi</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Phải chống tay mới đứng lên được từ ghế; lên bậc thang phải nghỉ</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Tập sức mạnh và thăng bằng đều đặn; hỏi bác sĩ trước nếu đang có đau khớp</td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Vấn đề dáng đi và thăng bằng</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Bước ngắn, hay phải bám tường, người nghiêng khi đổi hướng</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Đề nghị bác sĩ đánh giá dáng đi; cân nhắc dụng cụ hỗ trợ được đo đúng kích cỡ</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Thuốc gây chóng mặt hoặc buồn ngủ</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Choáng khi vừa đứng lên; ngủ gà ban ngày sau khi uống thuốc</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Mang toàn bộ thuốc đang dùng đến bác sĩ để rà lại. <strong style="color: #dc2626;">Không tự ý bỏ hoặc giảm thuốc.</strong></td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Thị lực kém</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Đi lại khó khăn hơn rõ rệt khi trời tối; kính đã cũ nhiều năm</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Khám mắt định kỳ; tăng sáng lối đi; thận trọng với kính đa tiêu cự khi lên xuống bậc</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nguy cơ trong môi trường sống</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Thảm xô lệch, sàn ướt, thiếu thanh vịn, đồ dùng để quá cao</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Thực hiện ba bước cải tạo ở mục trên</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Câu hỏi thường gặp</h2>

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Tôi có nên khuyên bố mẹ hạn chế đi lại để tránh ngã không?</p>
  <p style="margin-bottom: 16px; color: #374151;">Không nên. Hạn chế vận động vì sợ ngã sẽ làm yếu cơ và giảm thăng bằng nhanh hơn, khiến nguy cơ té ngã tăng lên chứ không giảm. Hướng đúng là giúp bố mẹ vận động an toàn hơn: dọn nguy cơ trong nhà, tăng sáng, và duy trì bài tập thăng bằng phù hợp thể trạng.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Bố mẹ tôi chưa từng bị ngã, có cần làm gì chưa?</p>
  <p style="margin-bottom: 16px; color: #374151;">Có. Ba bước cải tạo không gian sống nên làm trước khi có cú ngã đầu tiên, vì chi phí rất thấp còn hậu quả của một lần ngã thì lớn. Việc duy trì tập thăng bằng cũng hiệu quả nhất khi bắt đầu lúc còn khỏe, chứ không phải sau khi đã yếu.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Sau khi bố mẹ bị ngã một lần thì nên làm gì trước tiên?</p>
  <p style="margin-bottom: 16px; color: #374151;">Đưa bố mẹ đi khám để bác sĩ tìm nguyên nhân, kể cả khi lần ngã đó không gây thương tích. Một cú ngã thường là dấu hiệu của điều gì khác — tác dụng phụ của thuốc, tụt huyết áp khi đứng lên, vấn đề thị lực hoặc tiền đình. Sau đó mới rà soát nhà ở và bắt đầu tập luyện.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Lắp thanh vịn loại hít chân không có được không?</p>
  <p style="margin-bottom: 0; color: #374151;">Không nên dùng thay cho thanh vịn bắt vít. Loại hít chân không có thể bung ra khi bị dồn lực đột ngột — đúng thời điểm người dùng cần nó nhất. Nếu không thể khoan tường, hãy hỏi ý kiến người có chuyên môn về phương án khác thay vì dùng loại hít.</p>
</div>

<div style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 15px 20px; margin: 30px 0; font-size: 0.9rem; color: #374151; border-radius: 0 8px 8px 0;">
  <h4 style="margin-top: 0; color: #111827; font-size: 1rem; margin-bottom: 10px; font-weight: 600;">Nguồn tham khảo:</h4>
  <ul style="margin-bottom: 15px; padding-left: 20px;">
    <li>Sherrington C. và cộng sự. <em>Exercise for preventing falls in older people living in the community</em>. Cochrane Database of Systematic Reviews, 2019.</li>
    <li>Centers for Disease Control and Prevention (CDC) — các yếu tố nguy cơ té ngã có thể can thiệp và chương trình STEADI về phòng chống té ngã ở người cao tuổi.</li>
    <li>Tổ chức Y tế Thế giới (WHO) — hướng dẫn về hoạt động thể chất cho người từ 65 tuổi và phòng chống té ngã.</li>
  </ul>
  <div style="border-top: 1px solid #d1d5db; padding-top: 10px;">
    <p style="margin: 0; font-style: italic; font-size: 0.85rem; color: #6b7280;"><strong>*Tuyên bố miễn trừ trách nhiệm:</strong> Bài viết mang tính tham khảo và giáo dục cộng đồng, không thay thế chẩn đoán hay chỉ định của bác sĩ. ANTCARE không thực hiện khám bệnh, chữa bệnh. Gia đình nên đưa người cao tuổi đi khám để được đánh giá nguy cơ té ngã định kỳ.</p>
  </div>
</div>

<div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 25px; margin-top: 40px; margin-bottom: 30px;">
  <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #92400e; font-weight: 600;">ANTCARE rà soát an toàn nhà ở cùng gia đình</h3>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Ba bước cải tạo ở trên nghe đơn giản, nhưng khi đứng trong nhà mình thì rất khó tự nhìn ra chỗ nào đang có nguy cơ — vì mình đã quen với nó hàng chục năm.</p>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Trong dịch vụ <strong>An tâm nhà cửa</strong>, các <em>Kiến</em> của ANTCARE rà soát nhà theo bảng kiểm 15 điểm, xử lý ngay những điểm trong khả năng, và gửi gia đình báo cáo kèm ảnh trước — sau. Chúng tôi làm theo nguyên tắc <strong>làm cùng, không làm thay</strong>: những việc bác còn làm được thì Kiến hướng dẫn và cùng làm, để bác giữ được khả năng tự chủ.</p>
  <div style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px dashed #f59e0b;">
    <p style="margin: 0; font-weight: 500;">👉 <a href="/#giai-phap-cham-soc" style="color: #d97706; font-weight: bold;">Tìm hiểu dịch vụ An tâm nhà cửa</a> · <a href="/#giai-phap-cham-soc" style="color: #d97706; font-weight: bold;">Trợ lý sức khỏe tại nhà</a> · Hotline: <a href="tel:0968960048" style="color: #d97706; font-weight: bold;">0968 960 048</a></p>
  </div>
</div>`
};

newsData.list = newsData.list.filter(item => item.id !== 14);
newsData.list.unshift(article14);

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully published Article #14 to news.json with distinct header and body images!');
