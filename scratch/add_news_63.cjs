const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Dịch vụ đồng hành khám bệnh gồm những gì, khác gì với thuê xe hay điều dưỡng tại nhà, chi phí bao nhiêu và tiêu chí chọn đơn vị uy tín.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Dịch vụ đồng hành khám bệnh là gì và khi nào gia đình nên dùng</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Một loại dịch vụ còn mới ở Việt Nam, thường bị nhầm với thuê xe hoặc thuê điều dưỡng. Bài viết làm rõ phạm vi, chi phí và cách chọn đơn vị.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Dịch vụ đồng hành khám bệnh là dịch vụ <strong>phi y tế</strong>, trong đó một nhân viên được đào tạo sẽ đưa đón người cao tuổi đến cơ sở y tế, hỗ trợ toàn bộ thủ tục hành chính, đi cùng trong suốt quá trình khám, <strong>ghi chép lại chẩn đoán và dặn dò của bác sĩ</strong>, rồi đưa về nhà và gửi báo cáo cho gia đình. Dịch vụ này <strong>không bao gồm khám, chẩn đoán hay điều trị</strong> — đó là công việc của bác sĩ. Chi phí tại Hà Nội hiện phổ biến từ khoảng 300.000đ một buổi, tùy quãng đường và thời lượng.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/rui-ro-khi-nguoi-cao-tuoi-di-kham-mot-minh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          7 rủi ro khi để người cao tuổi đi khám bệnh một mình
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/chuan-bi-gi-khi-dua-bo-me-di-kham-benh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dịch vụ này giải quyết vấn đề gì</h2>
  <p>Bài toán quen thuộc của nhiều gia đình có bố mẹ lớn tuổi: ông bà cần đi khám định kỳ hoặc tái khám, nhưng con cái đi làm giờ hành chính — đúng khung giờ bệnh viện hoạt động.</p>
  <p>Ba lựa chọn thường thấy đều có vấn đề. Xin nghỉ làm thì không phải lúc nào cũng được, nhất là với người phải xin nghỉ hằng tháng. Để bố mẹ tự đi thì kèm theo những rủi ro đã nói ở bài viết về việc người cao tuổi đi khám một mình. Hoãn lại thì bệnh không chờ.</p>
  <p>Dịch vụ đồng hành khám bệnh ra đời để lấp khoảng trống này. Ở Singapore, Nhật Bản hay Hàn Quốc, đây là loại dịch vụ đã phổ biến từ lâu. Tại Việt Nam, nó mới xuất hiện trong vài năm gần đây.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Dịch vụ bao gồm những gì</h2>
  <p>Phạm vi có thể khác nhau giữa các đơn vị, nhưng một buổi đồng hành đầy đủ thường gồm các phần sau.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Trước buổi khám</h3>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Xác nhận lịch khám, hướng dẫn gia đình chuẩn bị giấy tờ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Nhắc các lưu ý như nhịn ăn nếu có chỉ định xét nghiệm
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đến đón tại nhà theo giờ đã hẹn
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Kiểm tra các chỉ số sinh tồn trước khi khởi hành
    </li>
  </ul>

  <p>Phần kiểm tra chỉ số trước khi đi có hai giá trị: phát hiện sớm nếu có bất thường khiến buổi đi cần hoãn lại, và cung cấp cho bác sĩ số liệu đo tại nhà — thứ mà bác sĩ thường hỏi tới.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Trong buổi khám</h3>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đưa đến bệnh viện và hỗ trợ di chuyển trong khuôn viên
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Lấy số, đăng ký khám, xuất trình giấy tờ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đi cùng qua các khu xét nghiệm, chẩn đoán hình ảnh
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Theo dõi tình trạng người cao tuổi trong lúc chờ đợi
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Ghi chép chẩn đoán, đơn thuốc, lịch tái khám và các dặn dò của bác sĩ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Hỗ trợ thanh toán và lĩnh thuốc
    </li>
  </ul>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Sau buổi khám</h3>
  <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Đưa về tận nhà
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Gửi báo cáo cho gia đình: kết quả, đơn thuốc, lịch tái khám, ảnh chụp giấy tờ
    </li>
    <li style="position: relative; padding-left: 1.9rem; margin-bottom: 0.7rem; line-height: 1.6;">
      <span style="position: absolute; left: 0; top: 0.4rem; width: 0.75rem; height: 0.75rem; border: 2px solid #ff8a00; border-radius: 3px;"></span>
      Bàn giao lại toàn bộ hồ sơ và thuốc
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Những gì dịch vụ này không làm</h2>
  <p>Đây là phần quan trọng cần hiểu rõ, vì hiểu sai dẫn tới kỳ vọng sai.</p>
  <p>Nhân viên đồng hành <strong>không khám, không chẩn đoán, không kê đơn, không tư vấn điều trị</strong>. Họ cũng không thực hiện các kỹ thuật y tế như tiêm, truyền, thay băng — những việc đòi hỏi chứng chỉ hành nghề.</p>
  <p>Vai trò của họ nằm ở phần hậu cần và thông tin: di chuyển, thủ tục, quan sát và ghi chép. Đây là những việc không cần chuyên môn y tế nhưng lại chiếm phần lớn thời gian và công sức của một buổi đi khám.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Một dấu hiệu để nhận biết đơn vị nghiêm túc</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Đơn vị nghiêm túc sẽ chủ động nói rõ những gì họ <strong>không</strong> làm. Nếu một bên hứa hẹn quá rộng — nhân viên có thể tư vấn về bệnh, có thể xử lý mọi tình huống y tế — đó là dấu hiệu đáng cân nhắc, vì nó cho thấy họ không nắm rõ ranh giới pháp lý của loại dịch vụ này.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Phân biệt với các dịch vụ khác</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #efe7fb; color: #2a1b3d;">
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Dịch vụ</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Phạm vi</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Yêu cầu chuyên môn</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Đồng hành khám bệnh</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Đưa đón, thủ tục, ghi chép, báo cáo</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Phi y tế; nên có chứng chỉ sơ cấp cứu và chăm sóc người cao tuổi</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Điều dưỡng tại nhà</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tiêm truyền, thay băng, chăm sóc vết thương</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Bắt buộc có chứng chỉ hành nghề</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Chăm sóc người bệnh tại viện</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Trực đêm, vệ sinh, cho ăn khi nằm viện</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Phi y tế</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Thuê xe có tài xế</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Chỉ di chuyển</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Không</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Điểm khác biệt cốt lõi giữa đồng hành khám bệnh và thuê xe nằm ở phần <strong>đi cùng và ghi chép</strong>. Tài xế đưa đến cổng bệnh viện rồi chờ; nhân viên đồng hành đi cùng suốt quá trình và mang thông tin về cho gia đình.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào gia đình nên cân nhắc dùng</h2>
  <p>Những tình huống dịch vụ này phù hợp nhất:</p>
  <p><strong>Con cái ở tỉnh khác hoặc nước ngoài.</strong> Không có ai đưa đi được, và cũng không nắm được diễn biến buổi khám.</p>
  <p><strong>Khám định kỳ đều đặn.</strong> Với người mắc bệnh mạn tính phải tái khám hằng tháng, việc xin nghỉ làm mỗi tháng không bền vững.</p>
  <p><strong>Bố mẹ đi lại khó khăn nhưng chưa cần chăm sóc y tế.</strong> Cần hỗ trợ di chuyển và thủ tục, chưa cần đến điều dưỡng.</p>
  <p><strong>Gia đình cần thông tin đầy đủ từ buổi khám.</strong> Đặc biệt khi có nhiều anh chị em cùng theo dõi tình hình sức khỏe của bố mẹ và cần thông tin thống nhất.</p>
  <p>Ngược lại, dịch vụ này <strong>không phù hợp</strong> khi người bệnh cần cấp cứu, cần vận chuyển bằng xe cứu thương có thiết bị y tế, hoặc cần theo dõi y tế liên tục — những trường hợp này cần dịch vụ y tế chuyên biệt.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Chi phí và những gì cần hỏi rõ</h2>
  <p>Tại Hà Nội, mức giá phổ biến hiện nay bắt đầu từ khoảng 300.000đ cho một buổi khám thông thường trong nội thành.</p>
  <p>Khi liên hệ, gia đình nên hỏi rõ bốn điểm:</p>
  <ul>
    <li>Mức giá đã bao gồm chi phí xe chưa, hay tính riêng</li>
    <li>Một buổi được tính là bao nhiêu giờ, và phát sinh thế nào nếu kéo dài hơn</li>
    <li>Có bao gồm chi phí gửi xe, phí bệnh viện không</li>
    <li>Nếu phải hoãn hoặc hủy thì chính sách ra sao</li>
  </ul>
  <p>Nhiều gia đình chỉ hỏi giá mà không hỏi phạm vi, dẫn tới hiểu nhầm khi phát sinh.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Bốn tiêu chí chọn đơn vị</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">1. Pháp nhân rõ ràng</h3>
  <p>Đơn vị có đăng ký kinh doanh, có địa chỉ văn phòng, có thông tin liên hệ công khai. Điều này quan trọng vì bạn đang giao người thân cho một người lạ trong nhiều giờ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">2. Nhân viên được đào tạo</h3>
  <p>Tối thiểu nên có chứng chỉ <strong>sơ cấp cứu</strong> và <strong>chăm sóc người cao tuổi</strong>. Sơ cấp cứu là yêu cầu quan trọng nhất — vì tình huống rủi ro nhất trong một buổi đồng hành là người cao tuổi ngã hoặc có sự cố sức khỏe đột ngột.</p>
  <p>Gia đình hoàn toàn có quyền hỏi xem chứng chỉ trước khi sử dụng dịch vụ.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">3. Có thỏa thuận bằng văn bản</h3>
  <p>Nêu rõ phạm vi công việc, chi phí, trách nhiệm mỗi bên, và cách xử lý khi có sự cố. Với các đơn vị nhỏ, thỏa thuận qua tin nhắn cũng có giá trị, miễn là nội dung rõ ràng và được cả hai bên xác nhận.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">4. Có cơ chế báo cáo</h3>
  <p>Đây chính là giá trị lớn nhất của dịch vụ, nên cần hỏi rõ: báo cáo gồm những gì, gửi khi nào, dưới hình thức nào. Một buổi đồng hành không có báo cáo tử tế thì về bản chất chỉ là dịch vụ đưa đón.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nên bắt đầu thế nào</h2>
  <p>Với gia đình lần đầu sử dụng, cách hợp lý là <strong>thử một buổi</strong> trước khi cam kết dài hạn. Một buổi đủ để đánh giá: nhân viên có đúng giờ không, cách ứng xử với người cao tuổi thế nào, báo cáo có đầy đủ không, và quan trọng nhất — bố mẹ có thấy thoải mái với người đó không.</p>
  <p>Yếu tố cuối cùng thường quyết định nhiều hơn cả. Người cao tuổi cần thời gian để quen với một người lạ, và nếu buổi đầu tiên diễn ra tốt đẹp, những buổi sau sẽ dễ dàng hơn rất nhiều.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Thử một buổi để biết dịch vụ có phù hợp không</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón tận nhà, đo 5 chỉ số sinh tồn trước khi đi, bật định vị suốt buổi khám và gửi báo cáo đầy đủ cho gia đình. Từ 299.000đ/buổi.
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.7rem;">
      <a href="tel:0969032360" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; background: #ff8a00; color: #2a1b3d;">
        Gọi 0969 032 360
      </a>
      <a href="https://antcare.vn/lien-he/" style="display: inline-block; font-family: 'Be Vietnam Pro', sans-serif; font-weight: 600; font-size: 0.97rem; text-decoration: none; padding: 0.8rem 1.5rem; border-radius: 999px; border: 1px solid #6b5a85; color: #ffffff;">
        Nhận tư vấn miễn phí
      </a>
    </div>
  </aside>

  <!-- FAQ Section -->
  <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage" style="margin: 2.75rem 0;">
    <h2 style="font-weight: 700; color: #2a1b3d;">Câu hỏi thường gặp</h2>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Dịch vụ đồng hành khám bệnh khác gì với thuê điều dưỡng tại nhà?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Hai dịch vụ khác nhau về bản chất. Điều dưỡng tại nhà thực hiện các kỹ thuật y tế như tiêm truyền, thay băng, chăm sóc vết thương, và phải do người có chứng chỉ hành nghề thực hiện. Đồng hành khám bệnh là dịch vụ phi y tế: đưa đón, hỗ trợ thủ tục, ghi chép và báo cáo. Chi phí của đồng hành khám bệnh vì vậy cũng thấp hơn đáng kể.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Nhân viên đồng hành có được phép tư vấn về bệnh không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không. Nhân viên đồng hành không có thẩm quyền chẩn đoán, tư vấn điều trị hay đưa ra lời khuyên y khoa. Vai trò của họ là hỗ trợ hậu cần và ghi chép chính xác những gì bác sĩ nói để chuyển lại cho gia đình. Một đơn vị nghiêm túc sẽ nói rõ giới hạn này; nếu nhân viên chủ động đưa ra kết luận về bệnh, đó là dấu hiệu cần cân nhắc lại.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Chi phí dịch vụ đồng hành khám bệnh khoảng bao nhiêu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tại Hà Nội, mức phổ biến hiện nay bắt đầu từ khoảng 300.000đ cho một buổi khám thông thường trong nội thành. Mức giá thay đổi tùy quãng đường di chuyển, thời lượng buổi khám và việc có bao gồm chi phí xe hay không. Khi liên hệ, gia đình nên hỏi rõ mức giá đã bao gồm những gì và có phát sinh nếu buổi khám kéo dài hơn dự kiến không.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Làm sao biết đơn vị cung cấp dịch vụ có uy tín?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Nên kiểm tra bốn điểm: đơn vị có pháp nhân đăng ký kinh doanh rõ ràng; nhân viên có chứng chỉ sơ cấp cứu và chăm sóc người cao tuổi; có hợp đồng hoặc thỏa thuận dịch vụ bằng văn bản nêu rõ phạm vi công việc; và có cơ chế báo cáo lại cho gia đình sau mỗi buổi. Ngoài ra, một đơn vị nghiêm túc sẽ nói rõ những gì họ không làm, thay vì hứa hẹn quá rộng.</p>
      </div>
    </details>
  </section>

  <p style="font-size: 0.87rem; line-height: 1.65; color: #5a5069; border-top: 1px solid #e3dcee; padding-top: 1.25rem; margin-top: 3rem;">
    <strong>Lưu ý:</strong> Nội dung bài viết mang tính tham khảo, không thay thế cho chẩn đoán, chỉ định hoặc tư vấn của bác sĩ. Khi người thân có dấu hiệu bất thường về sức khỏe, gia đình cần đưa đến cơ sở y tế để được thăm khám trực tiếp. ANTCARE cung cấp dịch vụ hỗ trợ và đồng hành phi y tế, không thực hiện khám, chẩn đoán hay điều trị bệnh.
  </p>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dịch vụ đồng hành khám bệnh là gì và khi nào gia đình nên dùng",
    "description": "Dịch vụ đồng hành khám bệnh gồm những gì, khác gì với thuê xe hay điều dưỡng tại nhà, chi phí bao nhiêu và tiêu chí chọn đơn vị uy tín.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 63,
  slug: 'dich-vu-dong-hanh-kham-benh-la-gi',
  title: 'Dịch vụ đồng hành khám bệnh là gì và khi nào gia đình nên dùng',
  category: 'Đồng hành Khám bệnh',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/dich-vu-dong-hanh-kham-benh-la-gi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 63 to news.json!');
