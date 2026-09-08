const fs = require('fs');
const path = require('path');

const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// Convert previous featured article to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'Quy trình khám bảo hiểm y tế tại bệnh viện công cho người cao tuổi: giấy tờ cần có, các bước tại bệnh viện, chuyển tuyến và mức hưởng.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Quy trình không phức tạp, nhưng có vài chỗ dễ vướng khiến gia đình mất cả buổi sáng hoặc phải quay về. Bài viết đi qua từng bước theo đúng thứ tự thực tế.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-06">06/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-06">06/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Để khám bảo hiểm y tế, người cao tuổi cần mang <strong>thẻ BHYT (hoặc ứng dụng VssID) và giấy tờ tùy thân có ảnh</strong>. Quy trình tại bệnh viện gồm 6 bước: 
      lấy số thứ tự → đăng ký khám và xuất trình thẻ → khám lâm sàng → thực hiện cận lâm sàng nếu có chỉ định → quay lại phòng khám nhận kết luận → lĩnh thuốc tại nhà thuốc bảo hiểm. 
      Nếu khám đúng nơi đăng ký ban đầu, người bệnh được hưởng mức chi trả cao nhất theo diện thẻ của mình.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/chuan-bi-gi-khi-dua-bo-me-di-kham-benh" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chuẩn bị gì khi đưa bố mẹ đi khám bệnh: checklist đầy đủ
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/tin-tuc/cau-hoi-nen-hoi-bac-si-khi-dua-nguoi-cao-tuoi-di-kham" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          12 câu hỏi nên hỏi bác sĩ khi đưa người cao tuổi đi khám
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/tin-tuc/chi-so-suc-khoe-nguoi-cao-tuoi-can-theo-doi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          5 chỉ số sức khỏe người cao tuổi cần theo dõi định kỳ tại nhà
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Giấy tờ cần chuẩn bị</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #efe7fb; color: #2a1b3d;">
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Giấy tờ</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Bắt buộc</th>
          <th style="padding: 0.75rem 0.85rem; text-align: left; font-weight: 700; border-bottom: 2px solid #e3dcee; color: #2a1b3d;">Ghi chú</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Thẻ BHYT hoặc ứng dụng VssID</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Có</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Kiểm tra thẻ còn hạn trước khi đi</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Giấy tờ tùy thân có ảnh</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;"><strong>Có</strong></td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Căn cước công dân gắn chip là phổ biến nhất</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Giấy chuyển tuyến</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Tùy trường hợp</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Cần khi khám vượt tuyến theo diện BHYT</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Sổ khám bệnh cũ</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Không</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nên mang, giúp bác sĩ nắm tiền sử bệnh lý</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Đơn thuốc đang dùng</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Không</td>
          <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #e3dcee;">Nên mang, tránh kê trùng hoặc tương tác thuốc</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p><strong>Việc cần làm trước khi đi:</strong> kiểm tra thẻ BHYT còn hạn hay không. Đây là nguyên nhân phổ biến khiến gia đình mất thời gian quay về. Có thể tra cứu nhanh trên ứng dụng VssID hoặc gọi tổng đài BHXH 1900 9068.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Sáu bước tại bệnh viện</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 1: Lấy số thứ tự</h3>
  <p>Thường ở khu vực tiếp đón ngay sảnh chính. Ở nhiều bệnh viện, số thứ tự cho khám bảo hiểm và khám dịch vụ được lấy ở quầy khác nhau — hỏi rõ để tránh xếp nhầm hàng.</p>
  <p>Đây cũng là lúc nên hỏi luôn về <strong>luồng ưu tiên cho người cao tuổi</strong>. Nhiều gia đình xếp hàng cả buổi rồi mới biết có quầy riêng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 2: Đăng ký khám</h3>
  <p>Xuất trình thẻ BHYT (hoặc VssID) và giấy tờ tùy thân. Nhân viên sẽ kiểm tra thông tin, nhập dữ liệu và chỉ định phòng khám tương ứng với chuyên khoa cần khám.</p>
  <p>Nếu chưa rõ nên khám khoa nào, cứ nói triệu chứng cho nhân viên tiếp đón để họ hướng dẫn. Đăng ký sai khoa dẫn tới phải làm lại thủ tục từ đầu.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 3: Khám lâm sàng</h3>
  <p>Chờ gọi tên tại phòng khám được chỉ định. Bác sĩ hỏi bệnh, thăm khám và quyết định có cần làm thêm xét nghiệm hay chẩn đoán hình ảnh không.</p>
  <p>Đây là lúc đưa ra danh sách triệu chứng và câu hỏi đã chuẩn bị. Cũng là lúc đưa cho bác sĩ xem toàn bộ thuốc bố mẹ đang dùng.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 4: Cận lâm sàng (nếu có chỉ định)</h3>
  <p>Xét nghiệm máu, nước tiểu, siêu âm, X-quang, điện tim. Cầm phiếu chỉ định đến các khu tương ứng.</p>
  <p>Lưu ý về thứ tự: nếu có cả xét nghiệm máu cần nhịn ăn và các chỉ định khác, <strong>làm xét nghiệm máu trước</strong>, sau đó cho bố mẹ ăn nhẹ ngay rồi mới đi làm các phần còn lại. Để người cao tuổi nhịn ăn suốt buổi sáng dễ dẫn tới tụt đường huyết, chóng mặt, ngã.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 5: Quay lại phòng khám nhận kết luận</h3>
  <p>Mang kết quả cận lâm sàng quay lại phòng khám ban đầu. Bác sĩ đọc kết quả, đưa ra chẩn đoán và kê đơn.</p>
  <p>Đây là thời điểm quan trọng nhất của cả buổi. Ghi chép lại đầy đủ: chẩn đoán, tên thuốc, liều dùng, lịch tái khám, và dấu hiệu cần quay lại ngay.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.5rem;">Bước 6: Thanh toán và lĩnh thuốc</h3>
  <p>Thanh toán phần chi phí ngoài mức bảo hiểm chi trả tại quầy thu ngân, sau đó lĩnh thuốc tại nhà thuốc bảo hiểm của bệnh viện.</p>
  <p>Khi nhận thuốc, <strong>kiểm tra ngay tại quầy</strong>: đủ loại không, đúng hàm lượng không, hạn sử dụng còn dài không. Phát hiện sai sót tại chỗ dễ xử lý hơn nhiều so với khi đã về nhà.</p>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #e07600; display: block; margin-bottom: 0.45rem; text-transform: uppercase;">Về việc thiếu thuốc trong danh mục bảo hiểm</span>
    <p style="margin: 0; font-size: 0.97rem; line-height: 1.6; color: #241c2e;">
      Có những thời điểm nhà thuốc bảo hiểm hết một loại thuốc trong đơn. Khi đó bạn có thể hỏi bác sĩ về loại thay thế cùng nhóm có trong danh mục, hoặc mua ngoài phần thiếu. Nếu mua ngoài, giữ lại hóa đơn và hỏi bộ phận bảo hiểm của bệnh viện về khả năng thanh toán lại.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Về chuyển tuyến</h2>
  <p>Mỗi thẻ BHYT có ghi <strong>nơi đăng ký khám chữa bệnh ban đầu</strong>. Khám tại đây thì thủ tục đơn giản nhất và mức hưởng cao nhất.</p>
  <p>Khi cần khám ở tuyến cao hơn, người bệnh xin giấy chuyển tuyến tại nơi đăng ký ban đầu. Với giấy chuyển tuyến hợp lệ, mức hưởng được giữ như khám đúng tuyến.</p>
  <p>Trường hợp <strong>cấp cứu</strong>, người bệnh được hưởng bảo hiểm đầy đủ tại bất kỳ cơ sở nào, không cần giấy chuyển tuyến. Sau khi qua giai đoạn cấp cứu, bệnh viện sẽ hướng dẫn thủ tục tiếp theo.</p>
  <p>Chính sách về khám trái tuyến đã có nhiều thay đổi qua các năm và tiếp tục được điều chỉnh. Vì vậy, thay vì dựa vào thông tin nghe được từ người quen, gia đình nên hỏi trực tiếp tại quầy tiếp đón hoặc gọi tổng đài BHXH 1900 9068 trước khi đi.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Ba tình huống thường gây mất thời gian</h2>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">Thẻ hết hạn hoặc sai thông tin</h3>
  <p>Với người cao tuổi thuộc diện được cấp thẻ theo chính sách, thẻ được gia hạn định kỳ nhưng đôi khi có độ trễ. Kiểm tra trên VssID trước ngày đi là cách phòng ngừa đơn giản nhất.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">Đăng ký sai khoa</h3>
  <p>Người cao tuổi thường có nhiều triệu chứng cùng lúc và không rõ nên khám khoa nào. Mô tả triệu chứng cho nhân viên tiếp đón thay vì tự đoán là cách tránh mất thời gian.</p>

  <h3 style="font-weight: 700; color: #4f2d7f; margin-top: 1.2rem;">Nhịn ăn quá lâu</h3>
  <p>Như đã nói ở bước 4 — đây không chỉ là vấn đề thời gian mà còn là vấn đề an toàn. Luôn mang theo bánh và sữa để bố mẹ ăn ngay khi lấy máu xong.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao nên có người đi cùng</h2>
  <p>Sáu bước ở trên nghe có vẻ đơn giản, nhưng thực hiện trong một bệnh viện đông người, với biển chỉ dẫn không phải lúc nào cũng rõ ràng, và với một người cao tuổi đi lại chậm, mắt kém, tai nghe không rõ — là chuyện khác hẳn.</p>
  <p>Người cao tuổi đi khám một mình thường gặp ba khó khăn cụ thể: không nghe rõ khi được gọi tên, không tìm được phòng, và không nhớ hết lời bác sĩ dặn khi về nhà.</p>
  <p>Đó là lý do dịch vụ đồng hành khám bệnh tồn tại: không phải để thay bác sĩ hay làm việc chuyên môn, mà để lo phần thủ tục, phần di chuyển và phần ghi chép — ba việc không cần chuyên môn y tế nhưng lại quyết định phần lớn chất lượng của buổi khám.</p>

  <!-- CTA DỊCH VỤ ĐỒNG HÀNH KHÁM BỆNH - ANTCARE -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">Không phải xếp hàng, không phải nghỉ làm</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      ANTCARE đưa đón và làm toàn bộ thủ tục cho người cao tuổi tại bệnh viện, ghi chép kết quả và gửi lại cho gia đình. Từ 299.000đ/buổi.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có bắt buộc mang thẻ bảo hiểm y tế bản giấy không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Không bắt buộc nếu đã cài ứng dụng VssID của Bảo hiểm xã hội Việt Nam — hình ảnh thẻ trên ứng dụng có giá trị sử dụng khi khám chữa bệnh. Nhiều cơ sở cũng đã tra cứu được qua căn cước công dân gắn chip. Tuy nhiên với người cao tuổi, mang theo thẻ giấy vẫn là phương án dự phòng an toàn, phòng trường hợp điện thoại hết pin hoặc hệ thống trục trặc.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Giấy chuyển tuyến có thời hạn bao lâu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Giấy chuyển tuyến thông thường có giá trị cho một đợt điều trị. Với người mắc bệnh mạn tính thuộc danh mục quy định, giấy chuyển tuyến có thể có giá trị đến hết năm dương lịch, giúp người bệnh không phải xin lại nhiều lần. Vì quy định có thể thay đổi, gia đình nên hỏi rõ tại nơi cấp giấy về thời hạn cụ thể trong trường hợp của mình.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Khám ở bệnh viện không phải nơi đăng ký ban đầu thì có được hưởng bảo hiểm không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có, nhưng mức hưởng khác nhau tùy tình huống. Nếu có giấy chuyển tuyến hợp lệ, người bệnh được hưởng như khám đúng tuyến. Trường hợp cấp cứu thì được hưởng đầy đủ ở bất kỳ cơ sở nào. Riêng chính sách với khám trái tuyến không có giấy chuyển tuyến đã thay đổi qua các năm, nên gia đình cần hỏi trực tiếp tại quầy tiếp đón hoặc gọi tổng đài BHXH 1900 9068 để biết mức áp dụng hiện hành.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi có được ưu tiên khi khám không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có. Người từ 80 tuổi trở lên thuộc diện được ưu tiên khám trước theo quy định. Nhiều bệnh viện cũng bố trí quầy hoặc luồng riêng cho người cao tuổi và người khuyết tật, dù độ tuổi áp dụng có thể khác nhau giữa các cơ sở. Nên hỏi ngay tại quầy hướng dẫn khi vừa đến, vì không phải nơi nào cũng có biển chỉ dẫn rõ ràng.</p>
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
    "headline": "Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước",
    "description": "Quy trình khám bảo hiểm y tế tại bệnh viện công cho người cao tuổi: giấy tờ cần có, các bước tại bệnh viện, chuyển tuyến và mức hưởng.",
    "datePublished": "2026-09-06"
  }
  </script>
</article>`;

newsData.featured = {
  id: 61,
  slug: 'thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi',
  title: 'Thủ tục khám bảo hiểm y tế cho người cao tuổi: hướng dẫn từng bước',
  category: 'Bảo hiểm Y tế & Thủ tục',
  date: '06/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/thu-tuc-kham-bao-hiem-y-te-cho-nguoi-cao-tuoi.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 61 to news.json!');
