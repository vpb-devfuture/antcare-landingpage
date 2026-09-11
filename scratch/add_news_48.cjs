const fs = require('fs');
const path = require('path');

// 1. Copy image from artifacts directory to public/images/tin-tuc/
const srcImage = `C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\51ce738d-d332-4cbb-94c2-9da66a588075\\vien_duong_lao_hay_cham_soc_tai_nha_1789122304110.jpg`;
const destImage = path.join(__dirname, '../public/images/tin-tuc/vien-duong-lao-hay-cham-soc-tai-nha.jpg');

fs.copyFileSync(srcImage, destImage);
console.log('Successfully copied image to:', destImage);

// 2. Read news.json
const newsFilePath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsFilePath, 'utf8'));

// 3. Convert previous featured article (ID 85) to list
if (newsData.featured) {
  const prevFeatured = { ...newsData.featured, featured: false };
  newsData.list.unshift(prevFeatured);
}

const descriptionText = 'So sánh viện dưỡng lão và chăm sóc tại nhà cho người cao tuổi ở Việt Nam: chi phí, ưu nhược điểm từng lựa chọn và các câu hỏi giúp gia đình quyết định.';

const articleContent = `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định</h1>
    <p class="subheading" itemprop="description" style="font-size: 1.15rem; line-height: 1.6; color: #475569; margin: 15px 0 25px 0; font-weight: 500;">
      Đây là quyết định khó nhất mà nhiều gia đình Việt phải đối mặt, và thường được đưa ra trong lúc khủng hoảng thay vì được chuẩn bị trước.
    </p>
    <div class="meta" style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">Đăng ngày <time itemprop="datePublished" datetime="2026-09-09">09/09/2026</time> · Cập nhật <time itemprop="dateModified" datetime="2026-09-09">09/09/2026</time> · <span itemprop="author">ANTCARE – Kiến chăm tổ</span></div>
  </header>

  <!-- ANSWER BOX / AEO TARGET -->
  <div style="background-color: #efe7fb; border-left: 5px solid #7c4dcc; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 10px 10px 0;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.85rem; color: #4f2d7f; display: block; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Trả lời nhanh</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65; font-size: 1.05rem;">
      Không có lựa chọn nào đúng cho mọi gia đình. Quyết định nên dựa trên bốn yếu tố:
      <strong>mức độ phụ thuộc của người cao tuổi</strong> (tự làm được bao nhiêu việc hằng ngày),
      <strong>nhu cầu y tế</strong> (có cần theo dõi y tế liên tục không),
      <strong>khả năng của gia đình</strong> (thời gian, tài chính, có người ở gần không), và
      <strong>mong muốn của chính người cao tuổi</strong>.
      Chi phí viện dưỡng lão tại Hà Nội thường từ 8-20 triệu đồng mỗi tháng tùy mức độ chăm sóc;
      chăm sóc tại nhà có thể linh hoạt từ vài buổi mỗi tuần đến toàn thời gian.
    </p>
  </div>

  <!-- CALLOUT 3 BÀI VIẾT LIÊN QUAN -->
  <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 16px 20px; margin: 25px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-weight: bold; color: #c2410c; font-size: 1.05rem;">📌 Bài viết liên quan xem nhiều nhất:</p>
    <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
      <li style="margin-bottom: 6px;">
        <a href="/news/cham-soc-nguoi-sau-dot-quy-tai-nha" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Chăm sóc người sau đột quỵ tại nhà: Những điều gia đình cần biết
        </a>
      </li>
      <li style="margin-bottom: 6px;">
        <a href="/news/tro-cap-huu-tri-xa-hoi-nguoi-cao-tuoi-2026" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          Trợ cấp hưu trí xã hội 2026: Ai được hưởng, mức bao nhiêu và thủ tục đăng ký thế nào
        </a>
      </li>
      <li style="margin-bottom: 0;">
        <a href="/news/dau-hieu-som-sa-sut-tri-tue-nguoi-cao-tuoi" style="color: #0284c7; text-decoration: underline; font-weight: 500;">
          10 dấu hiệu sớm của sa sút trí tuệ ở người cao tuổi và cách phân biệt với quên thông thường
        </a>
      </li>
    </ul>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Vì sao quyết định này khó với gia đình Việt</h2>

  <p>Ngoài yếu tố tài chính và thực tế, quyết định này còn mang gánh nặng văn hóa. ở Việt Nam, việc đưa bố mẹ vào viện dưỡng lão vẫn thường bị nhìn nhận là "con cái không có hiếu" — dù thực tế nhiều gia đình không có lựa chọn khác.</p>

  <p>Áp lực này khiến nhiều gia đình cố gắng chăm sóc tại nhà quá khả năng thực tế, dẫn đến chất lượng chăm sóc kém và người chăm sóc kiệt sức. Cả hai hậu quả này đều không tốt cho người cao tuổi.</p>

  <p>Bài viết này không đưa ra lựa chọn thay gia đình, mà cung cấp khung để đánh giá.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Đánh giá mức độ phụ thuộc — bước đầu tiên</h2>

  <p>Trước khi bàn về lựa chọn, cần đánh giá khách quan người cao tuổi đang ở mức nào. Cách đơn giản là xem họ tự làm được bao nhiêu trong các hoạt động sinh hoạt cơ bản:</p>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Hoạt động</th>
          <th style="padding: 0.8rem 1rem; text-align: center;">Tự làm được</th>
          <th style="padding: 0.8rem 1rem; text-align: center;">Cần hỗ trợ một phần</th>
          <th style="padding: 0.8rem 1rem; text-align: center;">Phụ thuộc hoàn toàn</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Ăn uống</td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tắm rửa</td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Mặc quần áo</td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Đi vệ sinh</td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Di chuyển trong nhà</td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Kiểm soát đại tiểu tiện</td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
          <td style="padding: 0.8rem 1rem; text-align: center;"></td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>Cùng với đó là các hoạt động phức tạp hơn: nấu ăn, đi chợ, uống thuốc đúng giờ, quản lý tiền, sử dụng điện thoại, đi lại ngoài nhà.</p>

  <p>Kết quả đánh giá này quyết định phần lớn phương án phù hợp.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">So sánh hai lựa chọn</h2>

  <div style="overflow-x: auto; margin: 1.5rem 0;">
    <table style="width: 100%; border-collapse: collapse; font-family: 'Be Vietnam Pro', sans-serif; font-size: 0.95rem;">
      <thead>
        <tr style="background: #2a1b3d; color: #fff;">
          <th style="padding: 0.8rem 1rem; text-align: left;">Tiêu chí</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Viện dưỡng lão</th>
          <th style="padding: 0.8rem 1rem; text-align: left;">Chăm sóc tại nhà</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Môi trường quen thuộc</td>
          <td style="padding: 0.8rem 1rem;">Phải thích nghi môi trường mới</td>
          <td style="padding: 0.8rem 1rem;">Giữ nguyên nhà, đồ đạc, hàng xóm quen</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Giao tiếp xã hội</td>
          <td style="padding: 0.8rem 1rem;">Có bạn cùng tuổi, hoạt động tập thể</td>
          <td style="padding: 0.8rem 1rem;">Có nguy cơ cô đơn nếu ở một mình</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Chăm sóc y tế</td>
          <td style="padding: 0.8rem 1rem;">Có nhân viên y tế trực, xử lý nhanh khi có sự cố</td>
          <td style="padding: 0.8rem 1rem;">Phụ thuộc vào người nhà và dịch vụ thuê ngoài</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Chi phí</td>
          <td style="padding: 0.8rem 1rem;">Cố định hằng tháng, dễ dự trù</td>
          <td style="padding: 0.8rem 1rem;">Linh hoạt theo nhu cầu, có thể thấp hơn nếu chỉ cần hỗ trợ một phần</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Sự riêng tư</td>
          <td style="padding: 0.8rem 1rem;">Hạn chế hơn, thường ở phòng chung</td>
          <td style="padding: 0.8rem 1rem;">Giữ được không gian riêng</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee; background-color: #fcfbfe;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Gánh nặng cho gia đình</td>
          <td style="padding: 0.8rem 1rem;">Nhẹ hơn về vận hành hằng ngày</td>
          <td style="padding: 0.8rem 1rem;">Nặng hơn, đòi hỏi tổ chức và thời gian</td>
        </tr>
        <tr style="border-bottom: 1px solid #e3dcee;">
          <td style="padding: 0.8rem 1rem; font-weight: 600; color: #4f2d7f;">Tính tự chủ</td>
          <td style="padding: 0.8rem 1rem;">Sinh hoạt theo lịch chung của cơ sở</td>
          <td style="padding: 0.8rem 1rem;">Giữ được nếp sinh hoạt riêng</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào viện dưỡng lão là lựa chọn hợp lý hơn</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người cao tuổi cần chăm sóc y tế theo dõi liên tục
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Không có người nhà ở gần và không thu xếp được người chăm sóc đáng tin cậy
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người cao tuổi có sa sút trí tuệ nặng, có nguy cơ đi lạc hoặc gây nguy hiểm cho bản thân
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhà ở không an toàn và không cải tạo được (nhiều bậc thang, không gian chật)
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người chăm sóc trong gia đình đã kiệt sức hoặc có vấn đề sức khỏe của chính họ
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người cao tuổi bị cô lập xã hội nặng khi ở nhà
    </li>
  </ul>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Khi nào chăm sóc tại nhà phù hợp hơn</h2>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người cao tuổi còn tự chủ được phần lớn sinh hoạt cơ bản
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Có người nhà ở gần hoặc sống cùng
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người cao tuổi gắn bó mạnh với nhà và cộng đồng xung quanh
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Nhu cầu chủ yếu là hỗ trợ một phần: đi khám, việc nặng, theo dõi sức khỏe
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Người cao tuổi phản đối mạnh việc vào cơ sở và tình trạng chưa bắt buộc
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Điều kiện tài chính không đủ cho viện dưỡng lão chất lượng
    </li>
  </ul>

  <div style="border: 1px solid #e3dcee; border-top: 3px solid #ff8a00; padding: 1.2rem 1.35rem; margin: 2rem 0; background: #fff; border-radius: 0 0 8px 8px; font-size: 0.97rem;">
    <span style="font-family: 'Be Vietnam Pro', sans-serif; font-weight: 700; font-size: 0.82rem; color: #e07600; display: block; margin-bottom: 0.45rem;">ANTCARE – Kiến chăm tổ lưu ý</span>
    <p style="margin: 0; color: #241c2e; line-height: 1.65;">
      Đây không phải lựa chọn nhị phân. Giữa hai cực còn nhiều phương án: chăm sóc bán trú ban ngày, dịch vụ chăm sóc tại nhà theo buổi, điều dưỡng đến nhà định kỳ, hoặc dịch vụ hỗ trợ theo nhu cầu cụ thể như đưa đón đi khám. Nhiều gia đình bắt đầu từ mức hỗ trợ nhẹ và tăng dần theo diễn tiến sức khỏe — cách này vừa tiết kiệm vừa giúp người cao tuổi thích nghi dần.
    </p>
  </div>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Nếu chọn viện dưỡng lão — cần kiểm tra gì</h2>

  <p>Nên đến tham quan trực tiếp ít nhất 2-3 cơ sở, và đi vào giờ sinh hoạt bình thường chứ không phải giờ đã hẹn trước:</p>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Giấy phép hoạt động và loại hình đăng ký
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Tỷ lệ nhân viên chăm sóc trên số người cao tuổi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Trình độ và chứng chỉ của nhân viên
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Có nhân viên y tế trực không, trực mấy ca
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Quy trình xử lý khi có tình huống cấp cứu, liên kết với bệnh viện nào
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Vệ sinh phòng ở, nhà vệ sinh, khu ăn uống
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Thực đơn và cách xử lý với người có chế độ ăn đặc biệt
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Hoạt động sinh hoạt hằng ngày cho người cao tuổi
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Chính sách thăm nom của gia đình
    </li>
    <li style="position: relative; padding-left: 1.8rem; margin-bottom: 0.7rem;">
      <span style="position: absolute; left: 0; top: 0.2rem; color: #ff8a00; font-weight: bold;">✓</span>
      Bảng giá đầy đủ, bao gồm các khoản phát sinh
    </li>
  </ul>

  <p>Nên trò chuyện với người cao tuổi đang ở đó và với gia đình của họ nếu gặp được — đây là nguồn thông tin đáng tin hơn lời giới thiệu của cơ sở.</p>

  <h2 style="font-weight: 700; color: #2a1b3d; margin-top: 2rem;">Cách nói chuyện với bố mẹ về quyết định này</h2>

  <p><strong>Bàn sớm, không đợi khủng hoảng.</strong> Quyết định đưa ra trong lúc bố mẹ vừa xuất viện, gia đình đang hoảng loạn, thường không phải quyết định tốt.</p>

  <p><strong>Cho bố mẹ tham gia vào quyết định</strong> thay vì thông báo. Đưa họ đi tham quan, hỏi ý kiến, để họ chọn giữa các phương án.</p>

  <p><strong>Tìm hiểu nỗi lo thật đằng sau sự phản đối.</strong> Sợ bị bỏ rơi cần cam kết về tần suất thăm nom. Sợ điều kiện kém cần đi xem thực tế. Sợ hàng xóm dị nghị cần cách nói khác.</p>

  <p><strong>Thừa nhận cảm xúc thay vì tranh luận bằng lý lẽ.</strong> Đây là quyết định mang nhiều cảm xúc với cả hai phía, và lý lẽ hiếm khi giải quyết được cảm xúc.</p>

  <!-- CTA DỊCH VỤ ANTCARE – KIẾN CHĂM TỔ -->
  <aside class="antcare-cta" style="background-color: #2a1b3d; color: #ffffff; border-radius: 14px; padding: 2.2rem 2rem; margin: 3rem 0 2rem;">
    <h2 style="color: #ffffff; margin: 0 0 0.7rem; font-size: 1.45rem; font-weight: 700;">ANTCARE — Kiến chăm tổ: Giải pháp trung gian cho gia đình</h2>
    <p style="color: #d9ceea; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
      Giữa hai lựa chọn cực đoan còn có phương án ở giữa: người cao tuổi vẫn ở nhà mình, có người đến hỗ trợ theo lịch. Tìm hiểu dịch vụ của ANTCARE.
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
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Chi phí viện dưỡng lão ở Hà Nội khoảng bao nhiêu?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Mức phí dao động lớn tùy cơ sở và mức độ chăm sóc cần thiết. Với người còn tự chủ được nhiều, chi phí thường thấp hơn; với người nằm liệt cần chăm sóc toàn diện, chi phí cao hơn đáng kể. Ngoài phí hằng tháng còn có thể có phí nhập viện ban đầu, chi phí thuốc men và y tế phát sinh. Gia đình nên đến tham quan trực tiếp và hỏi rõ bảng giá đầy đủ, bao gồm cả các khoản phát sinh.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Người cao tuổi phản đối vào viện dưỡng lão thì làm sao?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Đây là tình huống rất phổ biến ở Việt Nam do quan niệm xã hội. Điều quan trọng là hiểu nỗi lo thật đằng sau: sợ bị bỏ rơi, sợ mất tự chủ, sợ hàng xóm dị nghị, hoặc sợ điều kiện sống kém. Mỗi nỗi lo cần cách giải quyết khác nhau. Nên đưa họ đi tham quan thực tế vài cơ sở, cho họ tham gia vào quyết định thay vì thông báo, và cam kết rõ về tần suất thăm nom.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Chăm sóc tại nhà có phù hợp với người cần chăm sóc y tế không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Tùy mức độ. Với người cần theo dõi y tế liên tục, thở máy, hoặc có tình trạng không ổn định, cơ sở chuyên biệt thường phù hợp hơn. Với người cần hỗ trợ sinh hoạt và theo dõi định kỳ, chăm sóc tại nhà kết hợp điều dưỡng đến nhà là khả thi. Gia đình nên hỏi bác sĩ điều trị đánh giá mức độ chăm sóc cần thiết trước khi quyết định.</p>
      </div>
    </details>

    <details itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom: 12px; padding: 12px; background: #fff; border: 1px solid #e3dcee; border-radius: 6px;">
      <summary itemprop="name" style="font-weight: 600; cursor: pointer; color: #2a1b3d;">Có lựa chọn nào ở giữa hai phương án này không?</summary>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="margin-top: 8px; color: #5a5069; line-height: 1.6;">
        <p itemprop="text">Có nhiều. Chăm sóc bán trú (ban ngày ở trung tâm, tối về nhà) phù hợp với gia đình có người ở nhà buổi tối. Dịch vụ chăm sóc tại nhà theo giờ hoặc theo buổi cho người còn tự chủ phần lớn. Dịch vụ đồng hành khám bệnh cho người chỉ cần hỗ trợ khi đi viện. Nhiều gia đình bắt đầu từ mức hỗ trợ nhẹ rồi tăng dần theo nhu cầu thay vì chuyển thẳng sang viện dưỡng lão.</p>
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
    "headline": "Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định",
    "description": "So sánh viện dưỡng lão và chăm sóc tại nhà cho người cao tuổi ở Việt Nam: chi phí, ưu nhược điểm từng lựa chọn và các câu hỏi giúp gia đình quyết định.",
    "datePublished": "2026-09-09"
  }
  </script>
</article>`;

newsData.featured = {
  id: 86,
  slug: 'vien-duong-lao-hay-cham-soc-tai-nha',
  oldSlugs: [
    'vien-duong-lao-hay-cham-soc-tai-nha'
  ],
  title: 'Viện dưỡng lão hay chăm sóc tại nhà: So sánh và cách gia đình đưa ra quyết định',
  category: 'Quyết định gia đình',
  date: '09/09/2026',
  author: 'ANTCARE – Kiến chăm tổ',
  description: descriptionText,
  excerpt: descriptionText,
  image: '/images/tin-tuc/vien-duong-lao-hay-cham-soc-tai-nha.jpg',
  featured: true,
  content: articleContent
};

fs.writeFileSync(newsFilePath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Successfully added Article ID 86 to news.json!');
