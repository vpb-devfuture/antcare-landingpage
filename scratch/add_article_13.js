import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const article13 = {
  "id": 13,
  "category": "Chăm sóc sức khỏe",
  "date": "12 Tháng 8, 2026",
  "title": "3 Bài Tập Chống Té Ngã Cho Người Cao Tuổi, Tập Tại Nhà Với Một Chiếc Ghế",
  "description": "Ba bài tập thăng bằng và sức mạnh giúp giảm nguy cơ té ngã cho người cao tuổi, tập tại nhà với một chiếc ghế. Kèm lịch tập gợi ý và các trường hợp cần hỏi bác sĩ trước.",
  "image": "/images/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi.png",
  "author": {
    "name": "Nguyễn Kim Thanh",
    "image": "/images/huyen-trang.jpg",
    "description": "Người sáng lập ANTCARE"
  },
  "slug": "bai-tap-chong-te-nga-cho-nguoi-cao-tuoi",
  "content": `<p class="ant-sapo">Trong các biện pháp phòng chống té ngã, tập luyện là biện pháp có bằng chứng mạnh nhất — mạnh hơn cả việc mua thêm dụng cụ hỗ trợ. Ba bài tập dưới đây chỉ cần một chiếc ghế tựa chắc chắn và khoảng mười lăm phút.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/huong-dan-chon-gay-chong-xe-day-xe-lan-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Chọn Gậy Chống, Xe Đẩy Hay Xe Lăn Cho Người Cao Tuổi: Phân Biệt Theo Khả Năng Đi Lại</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/trao-luu-chup-anh-mua-thu-ha-noi-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Trào Lưu Chụp Ảnh Mùa Thu Hà Nội: Bí Quyết Giúp Người Cao Tuổi Sống Vui Khỏe</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/de-xuat-trang-bi-kien-thuc-tuoi-gia-tu-40-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Đề xuất: Người từ 40 tuổi cần được trang bị kiến thức chuẩn bị cho tuổi già (2026 - 2035)</a></li>
  </ul>
</div>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 25px;">
  <img style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" src="/images/huyen-trang.jpg" alt="Ảnh chân dung Nguyễn Kim Thanh, người sáng lập ANTCARE">
  <div>
    <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 2px;"><a href="/#cau-chuyen-cua-ant" style="color: #111827; text-decoration: none;">Nguyễn Kim Thanh</a></div>
    <div style="color: #68259E; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Người sáng lập ANTCARE · Chứng nhận Sơ cấp cứu gia đình · Chứng nhận Sơ cấp cứu cho người cao tuổi</div>
    <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 6px; line-height: 1.5;">Ba bài tập trong bài là những bài nằm trong thư viện vận động mà ANTCARE dùng khi đến nhà, chọn theo thể trạng từng người. Tôi viết bài này kèm cả phần chống chỉ định — vì trong thực tế, phần quyết định độ an toàn không phải là bài tập, mà là việc biết khi nào <em>không</em> nên tập.</p>
    <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">Xuất bản 12/08/2026 · Cập nhật 12/08/2026</p>
  </div>
</div>

<div style="background-color: #f0fdf4; padding: 16px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
  <span style="color: #166534; font-weight: bold; font-size: 1rem; display: block; margin-bottom: 6px;">💡 Trả lời nhanh cho bạn:</span>
  <p style="color: #14532d; font-size: 0.95rem; margin: 0; line-height: 1.6;">Ba nhóm bài tập giúp giảm nguy cơ té ngã cho người cao tuổi là bài tập thăng bằng, bài tập sức mạnh chân, và bài tập linh hoạt cổ chân. Ba bài có thể tập tại nhà với một chiếc ghế tựa là: đứng thăng bằng một chân, bước đi nối gót, và đứng lên ngồi xuống từ ghế. Các chương trình kết hợp thăng bằng với sức mạnh cho hiệu quả cao nhất.</p>
</div>

<p>Theo tuổi, khối cơ giảm dần và phản xạ giữ thăng bằng chậm lại. Đó là lý do một cú vấp nhẹ ở tuổi bốn mươi chỉ khiến người ta chao đi một nhịp, còn ở tuổi bảy mươi lại có thể thành một cú ngã.</p>

<p>Bằng chứng về hiệu quả của tập luyện khá rõ ràng. Tổng quan hệ thống Cochrane năm 2019, tổng hợp 59 thử nghiệm ngẫu nhiên có đối chứng với gần 13.000 người tham gia, ghi nhận tập luyện làm giảm tỷ lệ té ngã khoảng 23% với mức độ tin cậy cao. Các chương trình kết hợp nhiều loại bài tập — phổ biến nhất là bài tập thăng bằng và chức năng cộng với bài tập sức mạnh — cho mức giảm tỷ lệ té ngã tới khoảng 34%, và giảm khoảng 22% số người bị ngã ít nhất một lần. Riêng Thái Cực Quyền được ghi nhận giảm khoảng 19% tỷ lệ té ngã và giảm khoảng 20% số người bị ngã.</p>

<p>Một phân tích khác còn cho thấy các chương trình có thách thức khả năng thăng bằng và có thời lượng cao hơn ba giờ mỗi tuần đạt mức giảm té ngã lên tới khoảng 39%. Điểm cần rút ra: <strong style="color: #68259E;">bài tập phải có thành phần thăng bằng, và phải tập đủ đều</strong> — chứ không phải cứ vận động chung chung là đủ.</p>

<figure style="text-align: center; margin: 28px 0;">
  <img src="/images/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi.png" alt="Người cao tuổi tập bài đứng thăng bằng một chân, hai tay bám vào thành ghế tựa trong phòng khách" style="width: 100%; max-height: 520px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;" />
  <figcaption style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Người cao tuổi tập bài đứng thăng bằng một chân với ghế tựa tại nhà (Ảnh minh họa)</figcaption>
</figure>

<div style="background-color: #fef2f2; border: 1px solid #fecaca; border-left: 4px solid #ef4444; border-radius: 8px; padding: 18px 20px; margin-bottom: 25px;">
  <span style="color: #991b1b; font-weight: bold; font-size: 0.95rem; display: block; margin-bottom: 8px;">🛑 Đọc phần này trước khi cho bố mẹ tập:</span>
  <p style="color: #7f1d1d; font-size: 0.9rem; margin-bottom: 10px;">Hãy hỏi ý kiến bác sĩ trước khi bắt đầu nếu người tập đang trong các tình trạng sau:</p>
  <ul style="color: #7f1d1d; font-size: 0.9rem; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 4px;">Đang đau cấp tính ở khớp hoặc cột sống, hoặc mới phẫu thuật, mới thay khớp</li>
    <li style="margin-bottom: 4px;">Huyết áp chưa được kiểm soát, hoặc có bệnh tim mạch đang điều trị</li>
    <li style="margin-bottom: 4px;">Hay chóng mặt, có rối loạn tiền đình, hoặc từng bị ngã trong ba tháng gần đây</li>
    <li style="margin-bottom: 4px;">Có vấn đề thị lực đáng kể, hoặc suy giảm nhận thức</li>
  </ul>
  <p style="color: #7f1d1d; font-size: 0.9rem; margin: 0; line-height: 1.5;"><strong>Nguyên tắc khi tập:</strong> luôn có điểm tựa chắc chắn trong tầm tay; luôn có người ở gần trong những buổi đầu; tập chân trần hoặc dép có đế chống trượt, không tập bằng dép tổ ong. <strong style="color: #dc2626;">Dừng ngay và liên hệ bác sĩ</strong> nếu xuất hiện đau ngực, khó thở, chóng mặt, hoa mắt hoặc đau tăng lên.</p>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">3 bài tập nền tảng, tập với một chiếc ghế tựa</h2>

<p>Không cần phòng tập hay thiết bị. Cần một chiếc ghế tựa chắc chắn, không có bánh xe, kê sát tường.</p>

<ol style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px 20px 20px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 14px;">
    <strong style="color: #68259E;">Đứng thăng bằng một chân:</strong>
    Đứng phía sau ghế, hai tay bám thành ghế. Nhấc một chân khỏi mặt sàn, giữ 10–15 giây rồi đổi chân. Làm 3–5 lượt mỗi chân.
    <br><em style="color: #4b5563;">Tăng dần độ khó:</em> khi đã vững thì chỉ bám một tay, sau đó chỉ chạm nhẹ đầu ngón tay. Chỉ bỏ tay hoàn toàn khi thực sự vững và có người ở cạnh.
  </li>
  <li style="margin-bottom: 14px;">
    <strong style="color: #68259E;">Bước đi nối gót:</strong>
    Đặt gót chân sau chạm mũi chân trước, bước trên một đường thẳng khoảng 10 bước. Mắt nhìn thẳng về phía trước, không nhìn xuống chân.
    <br><em style="color: #4b5563;">An toàn:</em> tập dọc theo tường hoặc cạnh mặt bàn dài để lúc nào cũng có chỗ bám. Không tập bài này ở giữa phòng trống trong những lần đầu.
  </li>
  <li style="margin-bottom: 0;">
    <strong style="color: #68259E;">Đứng lên — ngồi xuống từ ghế:</strong>
    Ngồi trên ghế không tay vịn, hai tay khoanh trước ngực, dùng lực đùi và hông để đứng thẳng lên, rồi từ từ ngồi xuống có kiểm soát. Bắt đầu từ 5 lần, tăng dần tới 10 lần.
    <br><em style="color: #4b5563;">Điều chỉnh:</em> nếu chưa đứng lên được mà không chống tay, hãy chống tay lên đùi thay vì lên thành ghế, và dùng ghế cao hơn để giảm biên độ.
  </li>
</ol>

<p>Ba bài này bổ trợ cho phần cải tạo không gian sống. Nếu chưa rà soát nhà, mời đọc bài <a href="/news/phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha" style="color: #68259E; font-weight: 600; text-decoration: underline;">Phòng chống té ngã cho người cao tuổi tại nhà</a> trước.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Lịch tập gợi ý mỗi tuần</h2>

<div style="overflow-x: auto; margin-bottom: 25px;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <caption style="caption-side: bottom; font-style: italic; color: #666; margin-top: 8px; font-size: 13px;">Lịch tập gợi ý cho người cao tuổi còn tự đi lại được. Cần điều chỉnh theo thể trạng từng người và theo ý kiến bác sĩ.</caption>
    <thead>
      <tr style="background-color: #68259E; color: white;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Nhóm bài tập</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Tần suất</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Thời gian mỗi buổi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Thăng bằng (đứng một chân, bước nối gót, Thái Cực Quyền)</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Hầu như mỗi ngày</td>
        <td style="padding: 10px; border: 1px solid #ddd;">10–15 phút</td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Sức mạnh chân (đứng lên ngồi xuống)</td>
        <td style="padding: 10px; border: 1px solid #ddd;">2–3 ngày mỗi tuần, cách ngày</td>
        <td style="padding: 10px; border: 1px solid #ddd;">15–20 phút</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Sức bền (đi bộ nhẹ)</td>
        <td style="padding: 10px; border: 1px solid #ddd;">3–5 ngày mỗi tuần</td>
        <td style="padding: 10px; border: 1px solid #ddd;">20–30 phút</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Lưu ý về thứ tự ưu tiên: nếu chỉ chọn được một nhóm để bắt đầu, hãy chọn <strong style="color: #68259E;">thăng bằng</strong>. Riêng đi bộ, các tổng quan hệ thống hiện chưa đủ bằng chứng để khẳng định đi bộ đơn thuần làm giảm té ngã — nên đi bộ là bổ trợ tốt cho sức khỏe chung, nhưng không thay được bài tập thăng bằng.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Câu hỏi thường gặp</h2>

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Bố tôi hay đau khớp gối thì có tập được bài đứng lên ngồi xuống không?</p>
  <p style="margin-bottom: 16px; color: #374151;">Cần hỏi bác sĩ trước, vì đau khớp gối có nhiều nguyên nhân và mỗi nguyên nhân phù hợp với cách vận động khác nhau. Nếu đang đau cấp thì nghỉ. Khi bác sĩ đã đồng ý, thường sẽ tập ở biên độ nông hơn — dùng ghế cao hơn, không hạ người xuống hết — và tăng dần. Không nên tự tăng số lần khi còn đau.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Mẹ tôi 80 tuổi, đã yếu, có tập được không?</p>
  <p style="margin-bottom: 16px; color: #374151;">Thường là có, nhưng cần điều chỉnh và cần giám sát. Ở mức độ yếu hơn, bài tập bắt đầu từ tư thế ngồi và từ những động tác biên độ nhỏ, luôn có điểm tựa và có người ở cạnh. Đây là trường hợp nên được người có chuyên môn đánh giá và hướng dẫn trực tiếp thay vì tự tập theo bài viết.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Tập bao lâu thì thấy khác biệt?</p>
  <p style="margin-bottom: 16px; color: #374151;">Các nghiên cứu về hiệu quả giảm té ngã được thực hiện trên những chương trình kéo dài nhiều tháng, không phải vài tuần. Điều quan trọng hơn tốc độ là sự đều đặn: tập ngắn mà hầu như mỗi ngày sẽ hiệu quả hơn tập dài nhưng một tuần một lần.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Bố mẹ tôi không chịu tập thì làm sao?</p>
  <p style="margin-bottom: 0; color: #374151;">Đây là tình huống rất phổ biến, và thường không giải quyết được bằng cách thuyết phục thêm. Cách hiệu quả hơn là gắn bài tập vào một việc bố mẹ vốn đã làm — tập bước nối gót trên đường từ giường ra bếp, tập đứng lên ngồi xuống trong lúc chờ nước sôi — và có người tập cùng thay vì tập một mình.</p>
</div>

<div style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 15px 20px; margin: 30px 0; font-size: 0.9rem; color: #374151; border-radius: 0 8px 8px 0;">
  <h4 style="margin-top: 0; color: #111827; font-size: 1rem; margin-bottom: 10px; font-weight: 600;">Nguồn tham khảo:</h4>
  <ul style="margin-bottom: 15px; padding-left: 20px;">
    <li>Sherrington C. và cộng sự. <em>Exercise for preventing falls in older people living in the community</em>. Cochrane Database of Systematic Reviews, 2019 (59 thử nghiệm, 12.981 người tham gia).</li>
    <li>Sherrington C. và cộng sự. <em>Exercise to prevent falls in older adults: an updated systematic review and meta-analysis</em>. British Journal of Sports Medicine, 2017.</li>
    <li>Tổ chức Y tế Thế giới (WHO) — hướng dẫn về hoạt động thể chất và hành vi tĩnh tại cho người từ 65 tuổi.</li>
  </ul>
  <div style="border-top: 1px solid #d1d5db; padding-top: 10px;">
    <p style="margin: 0; font-style: italic; font-size: 0.85rem; color: #6b7280;"><strong>*Tuyên bố miễn trừ trách nhiệm:</strong> Bài viết mang tính tham khảo và giáo dục cộng đồng, không thay thế chẩn đoán hay chỉ định của bác sĩ. ANTCARE không thực hiện khám bệnh, chữa bệnh, không thực hiện vật lý trị liệu hay phục hồi chức năng. Hãy hỏi ý kiến bác sĩ trước khi bắt đầu bất kỳ chương trình vận động nào.</p>
  </div>
</div>

<div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 25px; margin-top: 40px; margin-bottom: 30px;">
  <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #92400e; font-weight: 600;">Tập cùng ANTCARE tại nhà</h3>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Khó khăn thật của việc tập ở tuổi già thường không phải là không biết bài nào, mà là không có ai tập cùng và không ai biết nên dừng ở đâu.</p>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Trong dịch vụ <strong>Trợ lý sức khỏe</strong>, mỗi buổi thăm nhà đều có một phần vận động do <em>Kiến</em> hướng dẫn và tập cùng, chọn bài theo thể trạng và các chống chỉ định đã ghi nhận của từng bác. Trước và sau buổi, Kiến ghi lại chỉ số cơ bản và gửi gia đình bản báo cáo.</p>
  <div style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px dashed #f59e0b;">
    <p style="margin: 0; font-weight: 500;">👉 <a href="/#giai-phap-cham-soc" style="color: #d97706; font-weight: bold;">Tìm hiểu dịch vụ Trợ lý sức khỏe</a> · Hotline: <a href="tel:0968960048" style="color: #d97706; font-weight: bold;">0968 960 048</a></p>
  </div>
</div>`
};

// Filter out any existing ID 13 and unshift to list
newsData.list = newsData.list.filter(item => item.id !== 13);
newsData.list.unshift(article13);

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully published Article #13 to news.json!');
