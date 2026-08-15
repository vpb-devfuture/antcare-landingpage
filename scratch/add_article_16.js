import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const article16 = {
  "id": 16,
  "category": "Xử trí khẩn cấp tại nhà",
  "date": "15 Tháng 8, 2026",
  "title": "Nghi Ngờ Đột Quỵ Ở Người Cao Tuổi: 5 Việc Tuyệt Đối Không Làm Trong Lúc Chờ Cấp Cứu",
  "description": "Chích máu đầu ngón tay, cạo gió, cho uống nước đường — những việc quen thuộc này có thể lấy đi cơ hội sống của người cao tuổi bị đột quỵ. Đây là những gì nên và không nên làm.",
  "image": "/images/nghi-ngo-dot-quy-o-nguoi-cao-tuoi.jpg",
  "author": {
    "name": "Nguyễn Kim Thanh",
    "image": "/images/huyen-trang.jpg",
    "description": "Người sáng lập ANTCARE"
  },
  "slug": "nghi-ngo-dot-quy-o-nguoi-cao-tuoi-nhung-viec-khong-nen-lam",
  "content": `<p class="ant-sapo">Khi bố mẹ đột ngột méo miệng hoặc yếu một bên người, phản xạ của nhiều gia đình Việt Nam là chích máu đầu ngón tay, cạo gió, hoặc cho uống chút nước đường cho tỉnh. Cả ba việc đó đều không giúp gì, và đều có thể lấy đi cơ hội sống của người bệnh.</p>

<div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-left: 4px solid #E86A17; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
  <strong style="color: #c2410c; font-size: 0.95rem; display: block; margin-bottom: 8px;">📌 Bài viết liên quan xem nhiều nhất:</strong>
  <ul style="margin: 0; padding-left: 20px; color: #431407; font-size: 0.95rem;">
    <li style="margin-bottom: 6px;">👉 <a href="/news/phong-chong-te-nga-cho-nguoi-cao-tuoi-tai-nha" style="color: #68259E; font-weight: 600; text-decoration: underline;">Phòng Chống Té Ngã Cho Người Cao Tuổi Tại Nhà: Rà Soát Nguy Cơ Và 3 Việc Cần Làm Ngay</a></li>
    <li style="margin-bottom: 6px;">👉 <a href="/news/bai-tap-chong-te-nga-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">3 Bài Tập Chống Té Ngã Cho Người Cao Tuổi, Tập Tại Nhà Với Một Chiếc Ghế</a></li>
    <li style="margin-bottom: 0;">👉 <a href="/news/huong-dan-chon-gay-chong-xe-day-xe-lan-cho-nguoi-cao-tuoi" style="color: #68259E; font-weight: 600; text-decoration: underline;">Hướng Dẫn Chọn Gậy Chống, Xe Đẩy, Xe Lăn Cho Người Cao Tuổi</a></li>
  </ul>
</div>

<div style="display: flex; align-items: start; gap: 1rem; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; margin-bottom: 25px;">
  <img style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" src="/images/huyen-trang.jpg" alt="Ảnh chân dung Nguyễn Kim Thanh, người sáng lập ANTCARE">
  <div>
    <div style="font-weight: bold; font-size: 1.1rem; color: #111827; margin-bottom: 2px;"><a href="/#cau-chuyen-cua-ant" style="color: #111827; text-decoration: none;">Nguyễn Kim Thanh</a></div>
    <div style="color: #68259E; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Người sáng lập ANTCARE · Chứng nhận Sơ cấp cứu gia đình · Chứng nhận Sơ cấp cứu cho người cao tuổi</div>
    <p style="color: #4b5563; font-size: 0.9rem; margin-bottom: 6px; line-height: 1.5;">Tôi vừa hoàn thành khóa Sơ cấp cứu gia đình và người cao tuổi của Wellbeing, gồm phần cấp cứu người bị nạn, sơ cứu đột quỵ và sơ cấp cứu cho người cao tuổi trong một số tình huống thường gặp. Bài viết này ghi lại phần tôi cho là quan trọng nhất với các gia đình — không phải các thao tác kỹ thuật, mà là những việc <em>không</em> nên làm.</p>
    <p style="color: #9ca3af; font-size: 0.8rem; margin: 0;">Xuất bản 15/08/2026 · Cập nhật 15/08/2026</p>
  </div>
</div>

<div style="background-color: #f0fdf4; padding: 16px 20px; border-left: 4px solid #16a34a; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
  <span style="color: #166534; font-weight: bold; font-size: 1rem; display: block; margin-bottom: 6px;">💡 Trả lời nhanh cho bạn:</span>
  <p style="color: #14532d; font-size: 0.95rem; margin: 0; line-height: 1.6;">Khi nghi ngờ người cao tuổi bị đột quỵ, việc quan trọng nhất là gọi cấp cứu 115 ngay và làm theo hướng dẫn của tổng đài. Tuyệt đối không chích máu đầu ngón tay hay dái tai, không cạo gió, không bấm huyệt, không cho ăn uống bất cứ thứ gì kể cả nước lọc, và không tự ý cho uống thuốc. Những việc này không có tác dụng điều trị và làm mất thời gian vàng để cứu người bệnh.</p>
</div>

<p>Đột quỵ là tình huống mà mỗi phút đều có giá. Nhưng phần lớn các gia đình chưa từng được hướng dẫn phải làm gì — nên họ làm theo những gì đã nghe người khác kể lại. Và đây là điểm đáng lo: <strong style="color: #dc2626;">những cách làm truyền miệng phổ biến nhất lại chính là những cách gây hại nhất.</strong></p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Làm sao nhận biết dấu hiệu đột quỵ ở người cao tuổi?</h2>

<p>Quy tắc được dùng phổ biến nhất là <strong>FAST</strong> — viết tắt của Face (mặt), Arm (tay), Speech (lời nói) và Time (thời gian). Tuy nhiên, nhiều tổ chức và trung tâm đột quỵ hiện nay khuyến khích dùng phiên bản mở rộng <strong>BE-FAST</strong>, bổ sung thêm hai dấu hiệu là mất thăng bằng (Balance) và thay đổi thị lực (Eyes).</p>

<div style="overflow-x: auto; margin-bottom: 25px;">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <caption style="caption-side: bottom; font-style: italic; color: #666; margin-top: 8px; font-size: 13px;">Quy tắc BE-FAST nhận biết sớm dấu hiệu đột quỵ.</caption>
    <thead>
      <tr style="background-color: #68259E; color: white;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left; width: 20%;">Chữ</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left; width: 30%;">Dấu hiệu</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left; width: 50%;">Quan sát thế nào</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #68259E;">B — Balance</td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mất thăng bằng đột ngột</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Bác đột ngột loạng choạng, ngã quỵ, không giữ được thăng bằng dù trước đó vẫn bình thường</td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #68259E;">E — Eyes</td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Thay đổi thị lực</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Đột ngột mờ mắt, nhìn đôi, hoặc mất thị lực một bên</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #68259E;">F — Face</td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Méo, lệch một bên mặt</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Nhờ bác cười — xem hai bên miệng có cân không, có bên nào xệ xuống không</td>
      </tr>
      <tr style="background-color: #f9fafb;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #68259E;">A — Arm</td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Yếu hoặc liệt một bên tay chân</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Nhờ bác giơ hai tay lên ngang vai — xem có bên nào rơi xuống không</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #68259E;">S — Speech</td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nói khó, nói ngọng</td>
        <td style="padding: 10px; border: 1px solid #ddd;">Nhờ bác nói một câu đơn giản — xem có ngọng, líu lưỡi, hay không hiểu câu hỏi không</td>
      </tr>
      <tr style="background-color: #fef2f2;">
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #dc2626;">T — Time</td>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #dc2626;">Thời gian vàng Cấp cứu</td>
        <td style="padding: 10px; border: 1px solid #ddd; color: #991b1b;">Chỉ cần <strong>một</strong> dấu hiệu trên xuất hiện đột ngột: <strong>gọi 115 ngay</strong>, và ghi nhớ thời điểm bắt đầu có triệu chứng</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Chi tiết cần nhớ nhất trong bảng trên là ô cuối cùng: <strong style="color: #68259E;">ghi lại giờ bắt đầu xuất hiện triệu chứng.</strong> Đây là thông tin bác sĩ sẽ hỏi đầu tiên, và nó ảnh hưởng trực tiếp tới phương án điều trị. Nếu bác ở nhà một mình và không ai biết triệu chứng bắt đầu lúc nào, thông tin đó bị mất.</p>

<figure style="text-align: center; margin: 28px 0;">
  <img src="/images/thuc-hanh-cap-cuu-wellbeing.jpg" alt="Giảng viên Wellbeing hướng dẫn thực hành sơ cấp cứu và nguyên lý DRSABC cho đột quỵ" style="width: 100%; max-height: 520px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;" />
  <figcaption style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Giảng viên Wellbeing hướng dẫn quy trình kiểm tra phản xạ &amp; sơ cấp cứu tại lớp tập huấn (Ảnh thực tế tại lớp học)</figcaption>
</figure>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">5 việc tuyệt đối không làm khi nghi ngờ đột quỵ</h2>

<p>Đây là phần quan trọng nhất của bài viết, vì các cách làm dưới đây rất phổ biến trong gia đình Việt Nam và đều được các cơ sở y tế cảnh báo.</p>

<ol style="background-color: #fff5f5; border: 1px solid #fed7d7; border-left: 4px solid #ef4444; border-radius: 8px; padding: 20px 20px 20px 40px; margin-bottom: 25px;">
  <li style="margin-bottom: 14px;">
    <strong style="color: #991b1b;">Không chích máu đầu ngón tay hoặc dái tai:</strong>
    Đây là quan niệm dân gian không được kiểm chứng khoa học. Khi thực hiện, nó không những làm lỡ mất thời gian vàng để cấp cứu mà còn tiềm ẩn nguy cơ nhiễm trùng tại vị trí chích, và không cầm được máu nếu người bệnh có rối loạn đông máu.
  </li>
  <li style="margin-bottom: 14px;">
    <strong style="color: #991b1b;">Không cạo gió, không bấm huyệt:</strong>
    Cạo gió không giúp cải thiện tình trạng đột quỵ và có thể làm chậm trễ việc đưa người bệnh đến cơ sở y tế.
  </li>
  <li style="margin-bottom: 14px;">
    <strong style="color: #991b1b;">Không cho ăn hay uống bất cứ thứ gì — kể cả nước lọc:</strong>
    Đột quỵ thường gây rối loạn nuốt, rất dễ dẫn đến sặc, suy hô hấp và tử vong. Đây là điều nhiều người bất ngờ nhất khi được hướng dẫn, vì cho uống nước là phản xạ tự nhiên khi thấy người nhà mệt.
  </li>
  <li style="margin-bottom: 14px;">
    <strong style="color: #991b1b;">Không tự ý cho uống thuốc, kể cả thuốc hạ huyết áp:</strong>
    Việc hạ áp cần có giám sát y tế; người sơ cứu không nên tự ý dùng thuốc hạ áp ngậm dưới lưỡi, vì sẽ không biết huyết áp hạ xuống tới mức nào, và khi hạ quá thấp thì không đảo ngược được tình huống.
  </li>
  <li style="margin-bottom: 0;">
    <strong style="color: #991b1b;">Không để bác nằm yên chờ tự khỏi:</strong>
    Không xoa dầu, không đợi xem có đỡ không, không chờ tới sáng. Việc phát hiện sớm triệu chứng và chuyển người bệnh tới bệnh viện trong thời gian ngắn nhất là yếu tố quyết định khả năng hồi phục.
  </li>
</ol>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vậy nên làm gì?</h2>

<p>Ngắn gọn: <strong style="color: #dc2626; font-size: 1.1rem;">gọi 115 ngay, và làm theo hướng dẫn của tổng đài.</strong></p>

<p>Đây không phải câu trả lời qua loa. Nhân viên trực tổng đài cấp cứu được đào tạo để hướng dẫn người nhà xử trí qua điện thoại, dựa trên tình trạng cụ thể mà họ hỏi được. Điều đó luôn tốt hơn việc làm theo một bài viết chung chung, kể cả bài này.</p>

<p>Trong lúc chờ xe cấp cứu, ba việc gia đình có thể làm mà không gây hại:</p>

<ul style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 18px 20px 18px 40px; margin-bottom: 25px; color: #166534;">
  <li style="margin-bottom: 8px;"><strong>Đỡ bác nằm hoặc ngồi xuống nơi an toàn</strong> để tránh chấn thương do ngã, nới lỏng quần áo chật ở cổ.</li>
  <li style="margin-bottom: 8px;"><strong>Nếu bác nôn, nghiêng người bác sang một bên</strong> để tránh sặc.</li>
  <li style="margin-bottom: 0;"><strong>Chuẩn bị sẵn thông tin cho bác sĩ:</strong> giờ bắt đầu có triệu chứng, danh sách thuốc bác đang dùng, các bệnh nền, và toa thuốc gần nhất nếu còn giữ.</li>
</ul>

<p>Việc thứ ba nghe có vẻ phụ, nhưng thực tế nó giúp bác sĩ rất nhiều — và nó là việc duy nhất trong ba việc trên mà gia đình có thể <em>chuẩn bị từ trước</em>, chứ không phải xoay xở trong lúc hoảng loạn.</p>

<div style="background-color: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 18px 20px; margin-bottom: 25px;">
  <span style="color: #92400e; font-weight: bold; font-size: 0.95rem; display: block; margin-bottom: 8px;">⚠️ Bài viết này không thay thế một khóa đào tạo</span>
  <p style="color: #78350f; font-size: 0.9rem; margin: 0; line-height: 1.5;">Những nội dung trên giúp gia đình tránh các sai lầm phổ biến và biết khi nào phải gọi cấp cứu. Nhưng đọc một bài viết không tương đương với việc được hướng dẫn và thực hành có người kèm. Nếu trong nhà có người cao tuổi, tôi khuyến khích gia đình tham gia một khóa sơ cấp cứu thực hành — nhiều tổ chức hiện có các khóa ngắn dành cho người không có chuyên môn y tế.</p>
</div>

<figure style="text-align: center; margin: 28px 0;">
  <img src="/images/tap-huan-so-cap-cuu-antcare.jpg" alt="ANTCARE tập huấn sơ cấp cứu dành cho người cao tuổi cùng chuyên gia Wellbeing" style="width: 100%; max-height: 480px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb;" />
  <figcaption style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Chương trình đào tạo &amp; tập huấn Sơ cấp cứu cho người cao tuổi chuẩn chuyên môn tại ANTCARE</figcaption>
</figure>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Vì sao ANTCARE bắt buộc đào tạo sơ cấp cứu trước khi nhận việc?</h2>

<p>Tôi đi học khóa này với tư cách người xây dựng quy trình, không phải người sẽ đến từng nhà. Nhưng có một điều trong buổi học khiến tôi quyết định đưa nó thành điều kiện bắt buộc với mọi <em>Kiến</em> của ANTCARE.</p>

<p>Phần lớn thời lượng khóa học không dạy các thao tác phức tạp. Nó dạy <strong style="color: #68259E;">nhận biết sớm</strong> và <strong style="color: #dc2626;">không làm điều sai</strong>. Mà đó chính xác là hai việc một người đến nhà chăm sóc người cao tuổi mỗi tuần cần làm được — vì họ là người có mặt ở đó, trước cả gia đình và trước cả nhân viên y tế.</p>

<p>Vì vậy, trong lộ trình đào tạo của ANTCARE, mỗi Kiến trước khi nhận buổi đầu tiên đều phải hoàn thành phần sơ cấp cứu, gồm ba nội dung: cấp cứu người bị nạn, sơ cứu khi nghi ngờ đột quỵ, và xử trí một số tình huống thường gặp ở người cao tuổi.</p>

<p>Cần nói rõ phạm vi: <strong style="color: #111827;">Kiến của ANTCARE không phải nhân viên y tế và không thực hiện khám bệnh, chữa bệnh.</strong> Việc được đào tạo sơ cấp cứu giúp Kiến làm đúng ba việc trong tình huống khẩn cấp — nhận ra dấu hiệu bất thường, gọi cấp cứu và báo gia đình ngay, và không thực hiện những cách làm có thể gây hại trong lúc chờ. Mọi can thiệp y tế đều do nhân viên y tế thực hiện.</p>

<p>Đây cũng là lý do trong mỗi buổi thăm nhà, Kiến ghi lại các chỉ số cơ bản của bác. Không phải để chẩn đoán — mà để khi có bất thường, gia đình có sẵn con số để đưa cho bác sĩ, thay vì phải đoán.</p>

<h2 style="color: #2D1836; font-size: 22px; font-weight: 600; margin-top: 28px; margin-bottom: 14px;">Câu hỏi thường gặp</h2>

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Chích máu đầu ngón tay khi bị đột quỵ có thật sự nguy hiểm không?</p>
  <p style="margin-bottom: 16px; color: #374151;">Có. Cách làm này không có cơ sở khoa học, không giúp cải thiện tình trạng đột quỵ, và gây hại theo hai cách: làm mất thời gian đáng lẽ dùng để đưa người bệnh đến bệnh viện, và có thể gây nhiễm trùng hoặc chảy máu khó cầm nếu người bệnh có rối loạn đông máu.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Bố mẹ tôi chỉ hơi méo miệng rồi đỡ ngay, có cần đi khám không?</p>
  <p style="margin-bottom: 16px; color: #374151;">Cần đi khám ngay, kể cả khi triệu chứng đã hết. Các triệu chứng thần kinh xuất hiện đột ngột rồi tự hết vẫn là dấu hiệu cần được bác sĩ đánh giá, vì nó có thể báo trước một biến cố nặng hơn. Đừng chờ xem có tái phát không.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Có nên tự chở bố mẹ đến bệnh viện thay vì gọi 115 không?</p>
  <p style="margin-bottom: 16px; color: #374151;">Nên gọi 115 trước để được hướng dẫn, kể cả khi gia đình định tự đưa đi. Tổng đài sẽ hướng dẫn cách xử trí trong lúc chờ và có thể tư vấn nên đưa tới cơ sở nào — vì không phải bệnh viện nào cũng có khả năng điều trị đột quỵ cấp.</p>

  <p style="font-weight: bold; color: #68259E; margin-bottom: 4px;">❓ Người chăm sóc tại nhà có được phép sơ cứu không?</p>
  <p style="margin-bottom: 0; color: #374151;">Người chăm sóc được đào tạo có thể nhận biết dấu hiệu bất thường, gọi cấp cứu, báo gia đình và tránh các cách làm gây hại trong lúc chờ. Nhưng họ không phải nhân viên y tế và không thực hiện các can thiệp y tế. Đây là ranh giới cần rõ ràng ngay từ đầu giữa gia đình và đơn vị cung cấp dịch vụ.</p>
</div>

<div style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 15px 20px; margin: 30px 0; font-size: 0.9rem; color: #374151; border-radius: 0 8px 8px 0;">
  <h4 style="margin-top: 0; color: #111827; font-size: 1rem; margin-bottom: 10px; font-weight: 600;">Nguồn tham khảo:</h4>
  <ul style="margin-bottom: 15px; padding-left: 20px;">
    <li>Bộ Y tế — Cổng thông tin về đột quỵ, chuyên mục dấu hiệu nhận biết sớm theo quy tắc BE-FAST.</li>
    <li>Bệnh viện Bạch Mai — hướng dẫn sơ cứu đột quỵ tại nhà và các sai lầm thường gặp.</li>
    <li>Tổ chức Y tế Thế giới (WHO) — tài liệu về đột quỵ.</li>
    <li>Khóa Sơ cấp cứu gia đình và người cao tuổi — Wellbeing, 15/08/2026.</li>
  </ul>
  <div style="border-top: 1px solid #d1d5db; padding-top: 10px;">
    <p style="margin: 0; font-style: italic; font-size: 0.85rem; color: #6b7280;"><strong>*Tuyên bố miễn trừ trách nhiệm:</strong> Bài viết mang tính tham khảo và giáo dục cộng đồng, không thay thế chẩn đoán, chỉ định của bác sĩ, hay một khóa đào tạo sơ cấp cứu có thực hành. ANTCARE không thực hiện khám bệnh, chữa bệnh. Khi nghi ngờ đột quỵ, hãy gọi 115 ngay.</p>
  </div>
</div>

<div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 25px; margin-top: 40px; margin-bottom: 30px;">
  <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #92400e; font-weight: 600;">Mỗi Kiến của ANTCARE đều được đào tạo sơ cấp cứu trước khi nhận việc</h3>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Điều gia đình lo nhất khi có người cao tuổi ở nhà không phải là những ngày bình thường, mà là cái ngày có chuyện — và lúc đó không ai ở bên.</p>
  <p style="color: #451a03; font-size: 15.5px; margin-bottom: 15px;">Trong dịch vụ <strong>Trợ lý sức khỏe</strong>, mỗi tuần có một buổi Kiến đến nhà bác: đo và ghi các chỉ số, tập cùng bác, soát lại hộp thuốc, rồi gửi gia đình bản báo cáo. Kiến được đào tạo để nhận ra dấu hiệu bất thường và báo gia đình ngay — chứ không phải để thay thế bác sĩ.</p>
  <div style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px dashed #f59e0b;">
    <p style="margin: 0; font-weight: 500;">👉 <a href="/#giai-phap-cham-soc" style="color: #d97706; font-weight: bold;">Tìm hiểu dịch vụ Trợ lý sức khỏe</a> · Hotline: <a href="tel:0969032360" style="color: #d97706; font-weight: bold;">0969 032 360</a></p>
  </div>
</div>`
};

// Set Article 16 as the FIXED FEATURED ARTICLE (newsData.featured)
const oldFeatured = newsData.featured;
newsData.featured = article16;

// Put old featured into list if not already there
newsData.list = newsData.list.filter(item => item.id !== 16);
if (oldFeatured && !newsData.list.some(a => a.id === oldFeatured.id)) {
  newsData.list.push(oldFeatured);
}

// Sort list descending by ID
newsData.list.sort((a, b) => (b.id || 0) - (a.id || 0));

fs.writeFileSync(newsPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully published Article #16 and pinned it as featured in news.json!');
