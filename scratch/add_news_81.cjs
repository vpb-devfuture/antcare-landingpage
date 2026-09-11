const fs = require('fs');
const path = require('path');

const imageSrc = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\dau_hieu_dot_quy_so_cuu_1789121423388.jpg`;
const imageDest = path.join(__dirname, '../public/images/tin-tuc/dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi.jpg');

fs.copyFileSync(imageSrc, imageDest);
console.log('Copied image to:', imageDest);

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Move current featured to list if exists
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Đột quỵ là tình huống mà mỗi phút trôi qua đều mất đi tế bào não. Biết nhận ra và biết phải làm gì trong 10 phút đầu quyết định phần lớn kết quả.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Nhận biết đột quỵ bằng quy tắc <strong>FAST</strong>:
      <strong>F (Face)</strong> — méo miệng, lệch một bên mặt khi cười;
      <strong>A (Arm)</strong> — yếu hoặc tê một bên tay, không giơ được hai tay ngang nhau;
      <strong>S (Speech)</strong> — nói khó, nói ngọng, không hiểu lời người khác;
      <strong>T (Time)</strong> — gọi cấp cứu 115 ngay lập tức.
      Việc phải làm: gọi 115, ghi lại thời điểm xuất hiện triệu chứng đầu tiên,
      đặt người bệnh nằm nghiêng đầu cao khoảng 30 độ, nới lỏng quần áo.
      <strong>Tuyệt đối không</strong> cho ăn uống, không cho uống thuốc, không cạo gió,
      không chích máu đầu ngón tay, không tự chở đi bằng xe máy.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trợ cấp hưu trí xã hội 2026: Ai được hưởng và thủ tục đăng ký thế nào
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/vien-duong-lao-hay-cham-soc-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao thời gian quyết định mọi thứ</h2>
  <p>Trong đột quỵ nhồi máu não, một mạch máu bị tắc khiến vùng não phía sau không nhận được oxy. Tế bào não bắt đầu chết trong vòng vài phút, và số lượng tế bào chết tăng theo từng phút trôi qua.</p>
  <p>Điều trị hiệu quả nhất — thuốc tiêu sợi huyết — chỉ dùng được trong cửa sổ thời gian giới hạn, thường là 4,5 giờ đầu. Sau khung giờ đó, nguy cơ biến chứng của thuốc vượt quá lợi ích và bác sĩ không thể sử dụng.</p>
  <p>Đây là lý do vì sao mọi phút chậm trễ — vì cạo gió trước, vì chờ xem có đỡ không, vì gọi hỏi ý kiến họ hàng — đều làm giảm cơ hội hồi phục.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Quy tắc FAST — nhận biết trong 30 giây</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Chữ</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Kiểm tra</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Cách làm</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 700; color: #c2410c;">F — Face</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Mặt có bị lệch không</td>
          <td style="padding: 0.8rem 1rem;">Bảo người bệnh cười. Quan sát xem một bên miệng có xệ xuống không</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 700; color: #c2410c;">A — Arm</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tay có yếu không</td>
          <td style="padding: 0.8rem 1rem;">Bảo giơ hai tay lên ngang vai. Xem có tay nào rơi xuống hoặc không giơ được không</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 700; color: #c2410c;">S — Speech</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Nói có bình thường không</td>
          <td style="padding: 0.8rem 1rem;">Bảo nhắc lại một câu đơn giản. Nghe có nói ngọng, líu lưỡi, hoặc không hiểu yêu cầu không</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 700; color: #c2410c;">T — Time</td>
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Gọi cấp cứu ngay</td>
          <td style="padding: 0.8rem 1rem;">Nếu có bất kỳ dấu hiệu nào ở trên, gọi 115 lập tức</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Các dấu hiệu khác cũng cần chú ý</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đột ngột mất thị lực một hoặc hai mắt, hoặc nhìn đôi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chóng mặt dữ dội, mất thăng bằng, không đi được
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Đau đầu dữ dội đột ngột, khác hẳn mọi cơn đau đầu trước đây
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tê hoặc yếu đột ngột ở mặt, tay hoặc chân, đặc biệt ở một bên cơ thể
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Lú lẫn đột ngột, không hiểu chuyện gì đang xảy ra
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Việc PHẢI làm ngay</h2>
  <p><strong>1. Gọi 115.</strong> Nói rõ nghi ngờ đột quỵ và các dấu hiệu quan sát được. Cho địa chỉ chi tiết.</p>
  <p><strong>2. Ghi lại thời điểm xuất hiện triệu chứng đầu tiên.</strong> Đây là thông tin quan trọng nhất bác sĩ cần để quyết định phương pháp điều trị. Nếu người bệnh ngủ dậy đã có triệu chứng, ghi lại thời điểm cuối cùng thấy họ còn bình thường.</p>
  <p><strong>3. Đặt người bệnh nằm nghiêng, đầu cao khoảng 30 độ.</strong> Nằm nghiêng để tránh sặc nếu nôn. Không để nằm ngửa đầu bằng.</p>
  <p><strong>4. Nới lỏng quần áo</strong> vùng cổ và ngực để dễ thở.</p>
  <p><strong>5. Không để người bệnh một mình.</strong> Quan sát ý thức và hơi thở cho đến khi cấp cứu đến.</p>
  <p><strong>6. Chuẩn bị sẵn thông tin</strong> để đưa cho nhân viên y tế: danh sách thuốc đang dùng, bệnh nền, dị ứng thuốc, thẻ BHYT.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ: những điều TUYỆT ĐỐI không làm</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Không cho ăn hoặc uống bất cứ thứ gì — người đột quỵ có thể mất khả năng nuốt và bị sặc.
      Không cho uống thuốc, kể cả thuốc huyết áp hay aspirin, vì nếu là đột quỵ chảy máu não thì aspirin làm nặng thêm.
      Không cạo gió, không chích máu đầu ngón tay, không xoa bóp.
      Không tự chở đi bằng xe máy. Không chờ xem có đỡ không.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Yếu tố nguy cơ có thể kiểm soát được</h2>
  <p>Phần lớn đột quỵ có thể phòng ngừa bằng cách kiểm soát các yếu tố nguy cơ:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Yếu tố</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Cách kiểm soát</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tăng huyết áp</td>
          <td style="padding: 0.8rem 1rem;">Yếu tố nguy cơ số 1. Uống thuốc đều, đo huyết áp tại nhà, giảm muối</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Rung nhĩ</td>
          <td style="padding: 0.8rem 1rem;">Rối loạn nhịp làm tăng nguy cơ đột quỵ nhiều lần. Cần phát hiện và điều trị</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Đái tháo đường</td>
          <td style="padding: 0.8rem 1rem;">Kiểm soát đường huyết theo phác đồ bác sĩ</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Rối loạn mỡ máu</td>
          <td style="padding: 0.8rem 1rem;">Chế độ ăn và thuốc theo chỉ định</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Hút thuốc lá</td>
          <td style="padding: 0.8rem 1rem;">Bỏ thuốc làm giảm nguy cơ rõ rệt trong vòng vài năm</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Ít vận động</td>
          <td style="padding: 0.8rem 1rem;">Vận động vừa phải 150 phút mỗi tuần</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Trong đó, <strong>tăng huyết áp</strong> là yếu tố quan trọng nhất và cũng dễ theo dõi nhất tại nhà. Nhiều máy đo huyết áp điện tử hiện nay có ký hiệu cảnh báo nhịp tim không đều — nếu ký hiệu này xuất hiện lặp lại, gia đình cần đưa đi khám tim mạch để kiểm tra rung nhĩ.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE – Kiến chăm tổ: Theo dõi các yếu tố nguy cơ đột quỵ</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Tăng huyết áp là yếu tố nguy cơ hàng đầu của đột quỵ. ANTCARE đo và theo dõi huyết áp định kỳ tại nhà, gửi báo cáo về cho gia đình.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Giờ vàng cấp cứu đột quỵ là bao lâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Với đột quỵ nhồi máu não, khoảng thời gian tối ưu để dùng thuốc tiêu sợi huyết là trong vòng 4,5 giờ kể từ khi xuất hiện triệu chứng đầu tiên. Với can thiệp lấy huyết khối bằng dụng cụ, cửa sổ có thể rộng hơn, lên tới 6-24 giờ tùy trường hợp và tùy đánh giá hình ảnh học. Nhưng nguyên tắc chung là càng sớm càng tốt — mỗi phút trôi qua có thêm tế bào não chết đi.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Vì sao không được cạo gió hay chích máu đầu ngón tay khi nghi đột quỵ?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là những biện pháp dân gian không có cơ sở khoa học và gây hại vì hai lý do. Thứ nhất, chúng làm mất thời gian vàng — thời gian đó lẽ ra dùng để đưa người bệnh đến bệnh viện. Thứ hai, việc di chuyển và tác động lên người bệnh có thể làm tình trạng nặng thêm. Nếu đột quỵ do chảy máu não, các can thiệp này càng nguy hiểm.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có nên tự chở người bệnh đi bệnh viện bằng xe máy không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không nên. Người đột quỵ có thể mất ý thức bất ngờ, ngã khỏi xe và gây chấn thương nghiêm trọng thêm. Ngoài ra xe cấp cứu có thể bắt đầu xử trí ngay trên đường và báo trước cho bệnh viện chuẩn bị. Nếu ở nơi xe cấp cứu khó tiếp cận, dùng ô tô và có người ngồi cùng giữ người bệnh, đặt nằm nghiêng, không để đầu gục xuống.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Cơn thiếu máu não thoáng qua có nguy hiểm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Rất nguy hiểm dù triệu chứng tự hết. Cơn thiếu máu não thoáng qua (TIA) có triệu chứng giống đột quỵ nhưng hồi phục hoàn toàn trong vòng 24 giờ, thường chỉ vài phút. Đây là dấu hiệu cảnh báo mạnh: nguy cơ đột quỵ thực sự trong những ngày và tuần sau đó tăng rất cao. Người có cơn thiếu máu não thoáng qua cần đi khám ngay, không được chờ đợi vì thấy đã khỏe lại.</p>
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
    "headline": "Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng",
    "description": "Nhận biết đột quỵ bằng quy tắc FAST, những việc phải làm và tuyệt đối không được làm trong lúc chờ cấp cứu. Giờ vàng cấp cứu đột quỵ là bao lâu.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 81,
  slug: "dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi",
  oldSlugs: [
    "dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi",
    "dau-hieu-dot-quy-nguoi-cao-tuoi"
  ],
  title: "Dấu hiệu đột quỵ ở người cao tuổi và cách xử trí đúng trong giờ vàng",
  category: "Cấp cứu",
  date: "09/09/2026",
  author: "ANTCARE – Kiến chăm tổ",
  description: "Nhận biết đột quỵ bằng quy tắc FAST, những việc phải làm và tuyệt đối không được làm trong lúc chờ cấp cứu. Giờ vàng cấp cứu đột quỵ là bao lâu.",
  excerpt: "Nhận biết đột quỵ bằng quy tắc FAST, những việc phải làm và tuyệt đối không được làm trong lúc chờ cấp cứu. Giờ vàng cấp cứu đột quỵ là bao lâu.",
  image: "/images/tin-tuc/dau-hieu-dot-quy-va-so-cuu-nguoi-cao-tuoi.jpg",
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully updated news.json with featured article 81!');
