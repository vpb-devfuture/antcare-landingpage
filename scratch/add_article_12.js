import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const article12 = {
  "id": 12,
  "category": "Chăm sóc sức khỏe",
  "date": "12 Tháng 8, 2026",
  "title": "Chọn Gậy Chống, Xe Đẩy Hay Xe Lăn Cho Người Cao Tuổi: Phân Biệt Theo Khả Năng Đi Lại",
  "description": "Cách phân biệt khi nào người cao tuổi cần gậy chống, khi nào cần xe đẩy hoặc xe lăn, cách đo gậy đúng chiều cao và cầm gậy ở bên nào cho đúng.",
  "image": "/images/huong-dan-chon-gay-chong-xe-day-xe-lan.png",
  "author": {
    "name": "Nguyễn Kim Thanh",
    "image": "/images/huyen-trang.jpg",
    "description": "Người sáng lập ANTCARE"
  },
  "slug": "huong-dan-chon-gay-chong-xe-day-xe-lan-cho-nguoi-cao-tuoi",
  "content": `<p class="ant-sapo">Chọn sai dụng cụ hỗ trợ di chuyển không chỉ tốn tiền mà còn có thể làm tăng nguy cơ ngã. Bài viết giúp gia đình phân biệt ba loại dụng cụ theo khả năng đi lại thực tế của bố mẹ, và nêu hai chi tiết kỹ thuật hay bị làm sai nhất.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/de-xuat-trang-bi-kien-thuc-tuoi-gia-tu-40-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Đề xuất: Người từ 40 tuổi cần được trang bị kiến thức chuẩn bị cho tuổi già (2026 - 2035)</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/trao-luu-chup-anh-mua-thu-ha-noi-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Trào Lưu Chụp Ảnh Mùa Thu Hà Nội: Bí Quyết Giúp Người Cao Tuổi Sống Vui Khỏe</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/cam-nang-tri-mat-ngu-cho-nguoi-gia" style="color: #68259E; font-weight: 600; text-decoration: underline;">Cẩm Nang Trị Mất Ngủ Cho Người Già: Nguyên Nhân & Giải Pháp An Toàn</a></li>
  </ul>
</div>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 25px;">
  <img style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" src="/images/huyen-trang.jpg" alt="Ảnh chân dung Nguyễn Kim Thanh, người sáng lập ANTCARE">
  <div>
    <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 2px;"><a href="/#cau-chuyen-cua-ant" style="color: #111827; text-decoration: none;">Nguyễn Kim Thanh</a></div>
    <div style="color: #68259E; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Người sáng lập ANTCARE · Chứng nhận Sơ cấp cứu gia đình · Chứng nhận Sơ cấp cứu cho người cao tuổi</div>
    <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 6px; line-height: 1.5;">Trong quy trình rà soát an toàn nhà ở của ANTCARE có một mục là quan sát dáng đi. Hai lỗi tôi thấy nhắc đến nhiều nhất trong tài liệu chuyên môn về dụng cụ hỗ trợ đều rất dễ sửa: gậy sai chiều cao, và cầm gậy sai bên. Bài này viết để gia đình biết cần kiểm tra gì.</p>
    <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">Xuất bản 12/08/2026 · Cập nhật 12/08/2026</p>
  </div>
</div>

<div style="background-color: #f0fdf4; padding: 16px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
  <span style="color: #166534; font-weight: bold; font-size: 1rem; display: block; margin-bottom: 6px;">💡 Trả lời nhanh cho bạn:</span>
  <p style="color: #14532d; font-size: 0.95rem; margin: 0; line-height: 1.6;">Chọn dụng cụ theo khả năng giữ thăng bằng thực tế: nếu bố mẹ còn đi vững nhưng mỏi chân và cần thêm một điểm tựa nhẹ thì dùng gậy chống; nếu đã mất thăng bằng rõ và cần điểm tựa cho cả hai tay thì dùng khung tập đi hoặc xe đẩy có bánh; nếu không còn tự đứng và đi được thì dùng xe lăn. Việc chọn và đo dụng cụ nên có ý kiến của người có chuyên môn.</p>
</div>

<p>Giữ được khả năng tự di chuyển là một trong những yếu tố ảnh hưởng lớn nhất tới tinh thần của người cao tuổi. Nhưng tâm lý ngại dùng dụng cụ hỗ trợ vì sợ trông mình yếu đi lại rất phổ biến — và nó khiến nhiều người chống chọi lâu hơn mức an toàn.</p>

<p>Có một điểm gia đình nên hiểu trước khi mua: dụng cụ hỗ trợ giúp bù đắp phần khả năng đã mất, chứ không phục hồi lại phần đó. Vì vậy dụng cụ nên đi kèm với việc duy trì vận động, chứ không thay thế cho vận động. Bằng chứng về hiệu quả giảm té ngã của các chương trình tập thăng bằng và sức mạnh mạnh hơn nhiều so với bằng chứng về dụng cụ — chi tiết ở bài <a href="/news/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Bài tập chống té ngã cho người cao tuổi</a>.</p>

<figure style="text-align: center; margin: 28px 0;">
  <img src="/images/huong-dan-chon-gay-chong-xe-day-xe-lan.png" alt="Ba loại dụng cụ hỗ trợ di chuyển cho người cao tuổi đặt cạnh nhau gồm gậy chống bốn chân, khung tập đi có bánh xe và xe lăn tay" style="width: 100%; max-height: 520px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;" />
  <figcaption style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Ba loại dụng cụ hỗ trợ di chuyển cho người cao tuổi (Ảnh minh họa)</figcaption>
</figure>

<div style="background-color: #fef2f2; border: 1px solid #fecaca; border-left: 4px solid #ef4444; border-radius: 8px; padding: 16px 20px; margin-bottom: 25px;">
  <span style="color: #991b1b; font-weight: bold; font-size: 0.95rem; display: block; margin-bottom: 6px;">⚠️ Một điểm quan trọng trước khi mua:</span>
  <p style="color: #7f1d1d; font-size: 0.9rem; margin: 0; line-height: 1.6;">Việc chọn loại dụng cụ và đo kích cỡ nên có ý kiến của bác sĩ, kỹ thuật viên vật lý trị liệu hoặc chuyên gia hoạt động trị liệu — nhất là khi người dùng đang phục hồi sau tai biến, sau phẫu thuật, hoặc có bệnh lý thần kinh. Một dụng cụ đúng loại nhưng sai kích cỡ vẫn có thể làm tăng nguy cơ ngã. Bài viết này giúp gia đình biết cần hỏi gì, không thay thế cho việc được đánh giá trực tiếp.</p>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">1. Gậy chống — khi nào phù hợp và cách đo đúng</h2>

<p>Gậy là dụng cụ phổ biến nhất, phù hợp với người còn đi lại được nhưng cần thêm một điểm tựa để giảm tải cho khớp gối và hông. Gậy hỗ trợ một phần trọng lượng cơ thể — theo các tài liệu hướng dẫn phổ biến là vào khoảng một phần tư — nên nó không phù hợp cho người cần chống đỡ phần lớn cơ thể.</p>

<ul style="margin-bottom: 16px; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Gậy một chân:</strong> cho người còn đi khá vững, chỉ cần trợ lực nhẹ.</li>
  <li style="margin-bottom: 8px;"><strong>Gậy ba hoặc bốn chân:</strong> diện tiếp xúc mặt sàn rộng hơn nên đứng vững hơn khi người dùng dừng lại. Đổi lại, gậy nhiều chân nặng hơn, dễ vướng ở địa hình gồ ghề và khó dùng trên bậc thang.</li>
</ul>

<p style="font-weight: bold; color: #2D1836; margin-top: 16px;">Hai chi tiết kỹ thuật hay bị làm sai:</p>

<ol style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px 20px 20px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 12px;"><strong>Chiều cao gậy:</strong> Khi người dùng đứng thẳng, hai tay buông tự nhiên, đầu tay cầm của gậy nên ở ngang mức nếp gấp cổ tay. Gậy quá cao khiến vai bị đẩy lên và mất lực; gậy quá thấp khiến người dùng phải chúi người về trước — cả hai đều làm tư thế xấu đi và giảm khả năng giữ thăng bằng.</li>
  <li style="margin-bottom: 0;"><strong>Cầm gậy ở bên nào:</strong> Nhiều người tưởng chân nào đau thì cầm gậy bên đó. Thực tế là ngược lại: <strong style="color: #68259E;">cầm gậy ở tay đối diện với chân yếu hoặc chân đau.</strong> Ví dụ đau gối phải thì cầm gậy ở tay trái. Khi bước, gậy và chân đau tiến lên gần như cùng lúc, nhờ đó tải trọng được chia sang bên đối diện.</li>
</ol>

<p>Ngoài ra nên kiểm tra đầu bọc cao su dưới chân gậy định kỳ. Đầu gậy mòn nhẵn là một nguyên nhân trượt rất hay bị bỏ qua.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">2. Khung tập đi và xe đẩy — khi gậy không còn đủ</h2>

<p>Khi người dùng cần điểm tựa cho cả hai tay, khung tập đi hoặc xe đẩy có bánh là bước tiếp theo.</p>

<ul style="margin-bottom: 16px; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Khung tập đi (không bánh hoặc hai bánh):</strong> vững hơn, nhưng phải nhấc hoặc đẩy từng nhịp nên đi chậm.</li>
  <li style="margin-bottom: 8px;"><strong>Xe đẩy có bốn bánh và phanh:</strong> đi mượt hơn, thường có ghế ngồi nhỏ để nghỉ giữa đường, phù hợp khi ra ngoài. Bù lại, vì có bánh nên nó lăn — người dùng phải đủ khỏe để điều khiển và biết dùng phanh. Với người thăng bằng rất kém, loại có bánh có thể không phải lựa chọn an toàn hơn.</li>
</ul>

<p>Với các trường hợp có bệnh lý thần kinh — chẳng hạn bệnh Parkinson — việc chọn giữa khung tập đi và xe đẩy có bánh cần được đánh giá riêng cho từng người, vì đặc điểm dáng đi ở nhóm này khác nhau nhiều và loại dụng cụ phù hợp cũng khác nhau. Đây là trường hợp nên có ý kiến của kỹ thuật viên vật lý trị liệu trước khi mua.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">3. Xe lăn — và một hiểu lầm cần sửa</h2>

<p>Xe lăn dành cho người không còn tự đứng và đi được, hoặc không thể di chuyển những khoảng cách cần thiết.</p>

<ul style="margin-bottom: 16px; padding-left: 24px;">
  <li style="margin-bottom: 8px;"><strong>Xe lăn tay:</strong> nhẹ, gấp được, cần người đẩy hoặc người dùng tự lăn nếu tay còn khỏe.</li>
  <li style="margin-bottom: 8px;"><strong>Xe lăn điện:</strong> giúp người dùng độc lập hơn, nhưng nặng, cần sạc điện, và cần không gian trong nhà đủ rộng để quay xe.</li>
</ul>

<p><strong style="color: #dc2626;">Hiểu lầm cần sửa:</strong> xe lăn không có nghĩa là hết nguy cơ ngã. Phần lớn các cú ngã ở người dùng xe lăn xảy ra vào lúc <em>chuyển chỗ</em> — từ giường sang xe, từ xe sang bồn cầu — và khi với tay lấy đồ ở xa trong lúc đang ngồi trên xe. Vì vậy khi dùng xe lăn, gia đình vẫn cần: khóa phanh mỗi lần dừng và mỗi lần chuyển chỗ, học cách trợ giúp chuyển chỗ đúng kỹ thuật, và bố trí đồ dùng trong tầm với.</p>

<p>Khi chọn xe lăn, hãy đo trước chiều rộng cửa phòng tắm và phòng ngủ — đây là lỗi mua sắm phổ biến nhất. Với người ngồi xe lâu, cần trao đổi với bác sĩ về đệm chống loét.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Bảng so sánh để quyết định nhanh</h2>

<div style="overflow-x: auto; margin-bottom: 25px;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <caption style="caption-side: bottom; font-style: italic; color: #666; margin-top: 8px; font-size: 13px;">Bảng so sánh mang tính định hướng. Việc chọn dụng cụ cụ thể cần dựa trên đánh giá của người có chuyên môn.</caption>
    <thead>
      <tr style="background-color: #68259E; color: white;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Dụng cụ</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Phù hợp khi</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Mức trợ lực</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Điểm cần lưu ý</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Gậy chống</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Còn đi vững, cần thêm điểm tựa nhẹ, mỏi hoặc đau một bên chân</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Thấp — hỗ trợ một phần trọng lượng</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Phải đo đúng chiều cao và cầm đúng bên</td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Khung tập đi / xe đẩy</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Mất thăng bằng rõ, cần điểm tựa cho cả hai tay</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Cao — hỗ trợ phần lớn trọng tâm</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Loại có bánh cần đủ sức điều khiển và biết dùng phanh</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Xe lăn</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Không còn tự đứng và đi được</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Toàn phần khi đang ngồi</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Nguy cơ ngã chuyển sang lúc chuyển chỗ; phải đo lọt cửa nhà</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Câu hỏi thường gặp</h2>

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Cầm gậy chống ở bên tay nào là đúng?</p>
  <p style="margin-bottom: 16px; color: #374151;">Cầm ở tay đối diện với chân yếu hoặc chân đau. Ví dụ đau gối phải thì cầm gậy ở tay trái. Nhiều người làm ngược lại vì nghĩ chân nào đau thì chống bên đó, nhưng cách đó không chia được tải trọng sang bên lành.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Làm sao biết gậy có đúng chiều cao chưa?</p>
  <p style="margin-bottom: 16px; color: #374151;">Cho người dùng đứng thẳng, hai tay buông tự nhiên. Đầu tay cầm của gậy nên ngang mức nếp gấp cổ tay. Khi cầm gậy đứng thẳng, khuỷu tay hơi gập nhẹ chứ không thẳng cứng và cũng không gập nhiều.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Bố mẹ tôi không chịu dùng gậy vì sợ trông già yếu, nên làm thế nào?</p>
  <p style="margin-bottom: 16px; color: #374151;">Đây là trở ngại rất thường gặp và thường không giải quyết được bằng cách nói về nguy cơ ngã. Hai cách thực tế hơn: để bố mẹ tự chọn kiểu dáng và màu sắc thay vì mua sẵn rồi đưa về, và bắt đầu bằng việc chỉ dùng khi đi ra ngoài hoặc đi đường không quen — thay vì yêu cầu dùng mọi lúc ngay từ đầu.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Dùng xe lăn rồi thì có cần lo té ngã nữa không?</p>
  <p style="margin-bottom: 0; color: #374151;">Vẫn cần. Nguy cơ ngã không mất đi mà chuyển sang các thời điểm chuyển chỗ — từ giường sang xe, từ xe sang bồn cầu — và khi với tay lấy đồ ở xa. Cần khóa phanh mỗi lần dừng và học cách trợ giúp chuyển chỗ đúng kỹ thuật.</p>
</div>

<div style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 15px 20px; margin: 30px 0; font-size: 0.9rem; color: #374151; border-radius: 0 8px 8px 0;">
  <h4 style="margin-top: 0; color: #111827; font-size: 1rem; margin-bottom: 10px; font-weight: 600;">Nguồn tham khảo:</h4>
  <ul style="margin-bottom: 15px; padding-left: 20px;">
    <li>Centers for Disease Control and Prevention (CDC) — chương trình STEADI về phòng chống té ngã ở người cao tuổi và các yếu tố nguy cơ có thể can thiệp.</li>
    <li>Sherrington C. và cộng sự. <em>Exercise for preventing falls in older people living in the community</em>. Cochrane Database of Systematic Reviews, 2019.</li>
    <li>Tổ chức Y tế Thế giới (WHO) — tài liệu về sức khỏe người cao tuổi và phòng chống té ngã.</li>
  </ul>
  <div style="border-top: 1px solid #d1d5db; padding-top: 10px;">
    <p style="margin: 0; font-style: italic; font-size: 0.85rem; color: #6b7280;"><strong>*Tuyên bố miễn trừ trách nhiệm:</strong> Bài viết mang tính tham khảo và giáo dục cộng đồng, không thay thế chẩn đoán hay chỉ định của bác sĩ. ANTCARE không thực hiện khám bệnh, chữa bệnh, không thực hiện vật lý trị liệu hay phục hồi chức năng, và không tư vấn thương hiệu hay nhà cung cấp dụng cụ cụ thể. Việc chọn và đo dụng cụ hỗ trợ di chuyển nên có ý kiến của người có chuyên môn.</p>
  </div>
</div>

<div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 25px; margin-top: 40px; margin-bottom: 30px;">
  <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #92400e; font-weight: 600;">ANTCARE quan sát dáng đi và rà soát nhà cùng gia đình</h3>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Câu hỏi khó nhất thường không phải mua loại nào, mà là <em>bố mẹ mình đang ở mức nào</em> — điều này khó tự đánh giá khi ở cùng nhà mỗi ngày, và càng khó hơn khi con ở xa.</p>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Trong dịch vụ <strong>An tâm nhà cửa</strong> và <strong>Trợ lý sức khỏe</strong>, các <em>Kiến</em> của ANTCARE quan sát cách bác đi lại trong chính không gian sống của bác, ghi nhận những chỗ bác phải bám tay hoặc dừng lại, rà soát nhà theo bảng kiểm 15 điểm, và gửi gia đình báo cáo có ảnh. Nếu ghi nhận dấu hiệu cần chuyên môn y tế, chúng tôi báo gia đình để đưa bác đi khám.</p>
  <div style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px dashed #f59e0b;">
    <p style="margin: 0; font-weight: 500;">👉 <a href="/#giai-phap-cham-soc" style="color: #d97706; font-weight: bold;">Tìm hiểu dịch vụ An tâm nhà cửa</a> · <a href="/#giai-phap-cham-soc" style="color: #d97706; font-weight: bold;">Đồng hành đi khám</a> · Hotline: <a href="tel:0968960048" style="color: #d97706; font-weight: bold;">0968 960 048</a></p>
  </div>
</div>`
};

// Check if ID 12 already exists, filter it out first
newsData.list = newsData.list.filter(item => item.id !== 12);
newsData.list.unshift(article12);

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully published Article #12 to news.json!');
