const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
const newsEnPath = path.join(rootDir, 'src', 'data', 'news.en.json');

const news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
const newsEn = JSON.parse(fs.readFileSync(newsEnPath, 'utf8'));

// ----------------------------------------------------
// 1. UPDATE ARTICLE 369 (nen-chon-coc-nguyet-san-nao)
// ----------------------------------------------------
const art369 = news.list.find(a => a.id === 369);
if (art369) {
  const h2Idx = art369.content.indexOf('<h2');
  if (h2Idx > -1) {
    // Extract everything from <h2 onwards
    const restOfContent = art369.content.slice(h2Idx);

    // Extract TOC accordion from the existing opening
    const tocMatch = art369.content.match(/<details class="toc-accordion"[\s\S]*?<\/details>/i);
    const tocHtml = tocMatch ? tocMatch[0] : '';

    const newOpening369 = `
<p class="sapo" style="font-size: 1.12rem; line-height: 1.75; color: #1e1b24; margin: 0 0 20px;">
  Bạn đã quyết định thử cốc nguyệt san để tận hưởng cảm giác sạch thoáng không vướng bận, nhưng khi mở các sàn thương mại điện tử lại thấy <em>"hoa mắt"</em>: cốc Việt, cốc Pháp, cốc Mỹ, cốc siêu mềm, cốc phủ nano bạc, size S, M, L, giá từ vài chục nghìn đến gần một triệu đồng. <strong>Chọn sai size hoặc sai độ cứng là lý do phổ biến nhất khiến nhiều người dùng cốc bị rò rỉ, cộm đau rồi nản lòng bỏ cuộc ngay sau tháng đầu tiên.</strong>
</p>

<div class="answer" style="background: linear-gradient(180deg, #f9f6fc 0%, #ffffff 100%); border-left: 5px solid #6633B4; border-top: 1px solid #eee7f7; border-right: 1px solid #eee7f7; border-bottom: 1px solid #eee7f7; border-radius: 14px; padding: 20px 22px; margin: 24px 0; box-shadow: 0 4px 16px rgba(102, 51, 180, 0.05);">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
    <span style="font-size: 1.3rem;">⚡</span>
    <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: #6633B4;">Tóm tắt nhanh: Nguyên tắc vàng để chọn đúng chiếc cốc của bạn</h3>
  </div>

  <p style="margin: 0 0 14px; font-size: 0.96rem; color: #3b3549; line-height: 1.6;">
    Không có chiếc cốc nguyệt san <em>"tốt nhất cho tất cả mọi người"</em> — chiếc cốc lý tưởng nhất là chiếc cốc <strong>vừa vặn với cấu tạo giải phẫu của chính bạn</strong>. Hãy dựa vào 5 yếu tố cốt lõi:
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 10px; margin-bottom: 16px;">
    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">📏 1. Độ cao cổ tử cung</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Quyết định <strong>chiều dài cốc</strong>: cổ tử cung thấp chọn cốc ngắn (&lt;65mm), cao chọn cốc dài (&gt;68mm) để tháo lắp dễ dàng.</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">💧 2. Lượng kinh nguyệt</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Quyết định <strong>dung tích cốc</strong>: ngày ra ít/vừa chọn 15–25ml; ra nhiều hoặc băng đầy sau 2–3h nên chọn 30–38ml.</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">🌸 3. Tuổi &amp; Sinh nở</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Quyết định <strong>đường kính cốc</strong>: dưới 30 tuổi / chưa sinh thường chọn size nhỏ S/M; đã sinh thường chọn size L.</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">⚖️ 4. Độ mềm &amp; Bung mở</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Silicon mềm êm ái cho người nhạy cảm, bàng quang yếu; cốc đanh dẻo bung mở nhanh cho người hay chơi thể thao.</div>
    </div>
  </div>

  <div style="background: #fbf9fd; border-radius: 10px; padding: 12px 16px; border: 1px dashed #dcd3eb; font-size: 0.9rem; color: #3b3549; line-height: 1.6; margin-bottom: 12px;">
    🏷️ <strong>Các thương hiệu uy tín tại Việt Nam:</strong> <strong>BeUcup</strong> (Việt Nam, silicon y tế Wacker mềm mại), <strong>Lincup</strong> (Thương hiệu Việt sản xuất tại Mỹ), <strong>Claricup, SiBell, Liberty Cup</strong> (Pháp), <strong>Ovacup</strong> (Mỹ), <strong>Lunette</strong> (Phần Lan). Giá chính hãng từ <strong>340.000 – 750.000đ</strong>/cốc <em>(hãy tránh xa các loại cốc trôi nổi không rõ nguồn gốc vài chục nghìn)</em>.
  </div>

  <div style="background: #fff8f2; border: 1px solid #fed7aa; border-left: 4px solid #FD711A; border-radius: 8px; padding: 12px 16px; font-size: 0.88rem; color: #9a3412; line-height: 1.55;">
    🛡️ <strong>Lời khuyên vàng:</strong> Dù chọn chiếc cốc nào, bạn vẫn nên trang bị thêm <strong>quần nguyệt san</strong> làm "lớp lót dự phòng" khi đang tập dùng cốc ở những chu kỳ đầu, lúc đi ngủ ban đêm hoặc ngày kinh ra ồ ạt để không bao giờ phải thấp thỏm lo rò rỉ.
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin: 20px 0 24px;">
  <a href="/kinh-nguyet/cach-dung-coc-nguyet-san" style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid #e9e2f5; border-radius: 12px; padding: 12px 16px; text-decoration: none; color: #4338ca; box-shadow: 0 1px 4px rgba(0,0,0,0.02); transition: all 0.2s ease;">
    <span style="font-size: 1.4rem;">📖</span>
    <span style="font-size: 0.88rem; line-height: 1.45;"><strong style="color: #6633B4; display: block;">Chưa biết cách dùng cốc?</strong><span style="color: #64748b;">Xem hướng dẫn gập &amp; đặt cốc không đau</span></span>
  </a>
  <a href="/kinh-nguyet/coc-nguyet-san-va-quan-nguyet-san" style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid #fed7aa; border-radius: 12px; padding: 12px 16px; text-decoration: none; color: #c2410c; box-shadow: 0 1px 4px rgba(0,0,0,0.02); transition: all 0.2s ease;">
    <span style="font-size: 1.4rem;">🛡️</span>
    <span style="font-size: 0.88rem; line-height: 1.45;"><strong style="color: #ea580c; display: block;">Có nên dùng cốc 24/24?</strong><span style="color: #64748b;">10 trường hợp cần kết hợp quần nguyệt san</span></span>
  </a>
</div>

${tocHtml}

<div class="meta" style="font-size: 0.84rem; color: #64748b; background: #f8fafc; border-left: 3px solid #cbd5e1; border-radius: 8px; padding: 10px 16px; margin: 18px 0 24px; line-height: 1.55;">
  ℹ️ <em>Lưu ý về số liệu:</em> Thông số và giá thành được tổng hợp khách quan từ các nhà phân phối chính thức (cập nhật tháng 11/2026). ANTCARE không phân phối các hãng cốc trong bài; cẩm nang mang tính so sánh độc lập, trung lập giúp bạn tìm được lựa chọn phù hợp nhất cho cơ thể mình.
</div>
`;

    art369.content = (newOpening369.trim() + '\n\n' + restOfContent.trim()).trim();
  }
}

// ----------------------------------------------------
// 2. UPDATE ARTICLE 368 (coc-nguyet-san-va-quan-nguyet-san)
// ----------------------------------------------------
const art368 = news.list.find(a => a.id === 368);
if (art368) {
  const h2Idx = art368.content.indexOf('<h2');
  if (h2Idx > -1) {
    const restOfContent = art368.content.slice(h2Idx);
    const tocMatch = art368.content.match(/<details class="toc-accordion"[\s\S]*?<\/details>/i);
    const tocHtml = tocMatch ? tocMatch[0] : '';

    const newOpening368 = `
<p class="sapo" style="font-size: 1.12rem; line-height: 1.75; color: #1e1b24; margin: 0 0 20px;">
  Những ai đã quen dùng cốc nguyệt san thường thốt lên: <em>"Biết thế mình dùng sớm hơn!"</em> — cả ngày khô thoáng không phải lo thay băng, đi bơi tự do, ngủ trọn giấc không lo bí bách. Nhưng cũng chính họ sẽ kể cho bạn nghe về những lần cốc rò rỉ giữa cuộc họp, đêm đầu tiên tràn ra ga giường, hay khoảnh khắc lúng túng tìm chỗ đổ cốc ở sân bay. <strong>Cốc nguyệt san rất tuyệt vời, nhưng không phải là "lá chắn bất khả xâm phạm".</strong>
</p>

<div class="answer" style="background: linear-gradient(180deg, #f9f6fc 0%, #ffffff 100%); border-left: 5px solid #6633B4; border-top: 1px solid #eee7f7; border-right: 1px solid #eee7f7; border-bottom: 1px solid #eee7f7; border-radius: 14px; padding: 20px 22px; margin: 24px 0; box-shadow: 0 4px 16px rgba(102, 51, 180, 0.05);">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
    <span style="font-size: 1.3rem;">⚡</span>
    <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: #6633B4;">Tóm tắt nhanh: Cốc nguyệt san &amp; Quần nguyệt san</h3>
  </div>

  <p style="margin: 0 0 14px; font-size: 0.96rem; color: #3b3549; line-height: 1.6;">
    Cốc nguyệt san là chiếc cốc silicone y tế mềm đặt trong âm đạo để hứng máu kinh. Dưới đây là những điểm cốt lõi bạn cần nắm:
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 10px; margin-bottom: 16px;">
    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">💧 Dung tích &amp; Thời gian</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Chứa <strong>10–38ml</strong>, đeo tối đa <strong>12 tiếng/lần</strong>. Tái sử dụng nhiều năm, thoải mái bơi lội và tập gym.</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">⏱️ Có nên dùng 24/24?</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;"><strong>Có thể dùng suốt kỳ kinh</strong> cả ngày lẫn đêm, <em>miễn là tháo ra vệ sinh ít nhất mỗi 12h</em> (ngày nhiều tháo sớm hơn).</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">💰 Tiết kiệm &amp; Môi trường</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Chi phí dài hạn chỉ bằng <strong>dưới 5%</strong> so với băng vệ sinh, giảm thiểu rác thải nhựa gần như tuyệt đối.</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">⚠️ Khi nào cốc dễ rò rỉ?</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">3 chu kỳ đầu tập dùng, ban đêm nằm ngửa/nghiêng, ngày ra nhiều, khi ho/hắt hơi hoặc sau khi đại tiện.</div>
    </div>
  </div>

  <div style="background: #fff8f2; border: 1px solid #fed7aa; border-left: 4px solid #FD711A; border-radius: 8px; padding: 12px 16px; font-size: 0.88rem; color: #9a3412; line-height: 1.55;">
    🛡️ <strong>Bộ đôi hoàn hảo: Cốc + Quần nguyệt san</strong><br>
    Luôn nên có thêm <strong>quần nguyệt san</strong> trong bộ kit làm lớp lót chống thấm. Đặc biệt khi bạn mới tập dùng, có lượng kinh nhiều, làm ca dài không tiện đổ cốc, hoặc có cơ sàn chậu yếu sau sinh.
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin: 20px 0 24px;">
  <a href="/kinh-nguyet/cach-dung-coc-nguyet-san" style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid #e9e2f5; border-radius: 12px; padding: 12px 16px; text-decoration: none; color: #4338ca; box-shadow: 0 1px 4px rgba(0,0,0,0.02); transition: all 0.2s ease;">
    <span style="font-size: 1.4rem;">📖</span>
    <span style="font-size: 0.88rem; line-height: 1.45;"><strong style="color: #6633B4; display: block;">Cách gấp &amp; đặt cốc lần đầu</strong><span style="color: #64748b;">Xem hướng dẫn chi tiết từng bước</span></span>
  </a>
  <a href="/kinh-nguyet/nen-chon-coc-nguyet-san-nao" style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid #fed7aa; border-radius: 12px; padding: 12px 16px; text-decoration: none; color: #c2410c; box-shadow: 0 1px 4px rgba(0,0,0,0.02); transition: all 0.2s ease;">
    <span style="font-size: 1.4rem;">🏆</span>
    <span style="font-size: 0.88rem; line-height: 1.45;"><strong style="color: #ea580c; display: block;">Nên chọn cốc nào?</strong><span style="color: #64748b;">Bảng so sánh BeUcup, Lincup, Claricup...</span></span>
  </a>
</div>

${tocHtml}
`;

    art368.content = (newOpening368.trim() + '\n\n' + restOfContent.trim()).trim();
  }
}

// ----------------------------------------------------
// 3. UPDATE ARTICLE 367 (kinh-nguyet-lan-dau)
// ----------------------------------------------------
const art367 = news.list.find(a => a.id === 367);
if (art367) {
  const h2Idx = art367.content.indexOf('<h2');
  if (h2Idx > -1) {
    const restOfContent = art367.content.slice(h2Idx);
    const tocMatch = art367.content.match(/<details class="toc-accordion"[\s\S]*?<\/details>/i);
    const tocHtml = tocMatch ? tocMatch[0] : '';

    const newOpening367 = `
<p class="sapo" style="font-size: 1.12rem; line-height: 1.75; color: #1e1b24; margin: 0 0 20px;">
  Lần đầu tiên thấy máu trên quần lót, nhiều bé gái rơi vào hoảng sợ vì nghĩ mình bị thương hay mắc bệnh nặng, hoặc xấu hổ không dám chia sẻ cùng ai. Rất nhiều bậc cha mẹ cũng lúng túng: <em>nên mở lời thế nào, chuẩn bị sản phẩm gì cho con, nếu con đang ở trường thì xử lý ra sao?</em> <strong>Kinh nguyệt là một dấu mốc trưởng thành tuyệt đẹp, và sự đồng hành ân cần của cha mẹ trong kỳ kinh đầu tiên sẽ giúp con tự tin suốt những năm tháng tuổi dậy thì.</strong>
</p>

<div class="answer" style="background: linear-gradient(180deg, #f9f6fc 0%, #ffffff 100%); border-left: 5px solid #6633B4; border-top: 1px solid #eee7f7; border-right: 1px solid #eee7f7; border-bottom: 1px solid #eee7f7; border-radius: 14px; padding: 20px 22px; margin: 24px 0; box-shadow: 0 4px 16px rgba(102, 51, 180, 0.05);">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
    <span style="font-size: 1.3rem;">⚡</span>
    <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; color: #6633B4;">Tóm tắt nhanh cho cha mẹ &amp; bé gái</h3>
  </div>

  <p style="margin: 0 0 14px; font-size: 0.96rem; color: #3b3549; line-height: 1.6;">
    Những điều quan trọng nhất cha mẹ và con gái cần biết về kỳ kinh đầu tiên:
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 10px; margin-bottom: 16px;">
    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">🎂 Độ tuổi xuất hiện</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Trung bình <strong>12–13 tuổi</strong> (khoảng bình thường: <strong>8–15 tuổi</strong>), thường đến sau khi nhú ngực 2–3 năm.</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">🩸 Đặc điểm kỳ đầu</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Lượng máu ít, màu nâu hoặc đỏ sẫm, kéo dài 2–7 ngày. Trong 2–3 năm đầu chu kỳ có thể thất thường (21–45 ngày).</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">🩲 Nên dùng sản phẩm gì?</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Sản phẩm ngoài cơ thể: <strong>Quần kinh nguyệt học sinh &amp; Băng vệ sinh</strong> (không nên dùng cốc/tampon khi mới bắt đầu).</div>
    </div>

    <div style="background: #ffffff; border: 1px solid #e9e2f5; border-radius: 10px; padding: 12px 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div style="font-weight: 700; color: #6633B4; font-size: 0.92rem; margin-bottom: 4px;">🏥 Khi nào cần đi khám?</div>
      <div style="font-size: 0.85rem; color: #554e63; line-height: 1.5;">Có kinh trước 8 tuổi; 15 tuổi chưa có kinh; ướt đẫm băng sau mỗi 1–2 giờ; hành kinh &gt;7 ngày hoặc đau bụng dữ dội.</div>
    </div>
  </div>

  <div style="background: #fff8f2; border: 1px solid #fed7aa; border-left: 4px solid #FD711A; border-radius: 8px; padding: 12px 16px; font-size: 0.88rem; color: #9a3412; line-height: 1.55;">
    💡 <strong>Vì sao Quần kinh nguyệt đặc biệt hợp với học sinh:</strong><br>
    Kỳ kinh đầu thường đến không báo trước — bé có thể mặc sẵn quần kinh nguyệt vào những ngày "nghi sắp đến". Quần ôm êm ái, không xô lệch khi chạy nhảy/học thể dục, không tạo tiếng sột soạt ngại ngùng trong nhà vệ sinh trường học.
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin: 20px 0 24px;">
  <a href="/kinh-nguyet/kinh-nguyet-tuoi-hoc-sinh" style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid #e9e2f5; border-radius: 12px; padding: 12px 16px; text-decoration: none; color: #4338ca; box-shadow: 0 1px 4px rgba(0,0,0,0.02); transition: all 0.2s ease;">
    <span style="font-size: 1.4rem;">🎒</span>
    <span style="font-size: 0.88rem; line-height: 1.45;"><strong style="color: #6633B4; display: block;">Kinh nguyệt tuổi học sinh</strong><span style="color: #64748b;">Cẩm nang xử lý khi bị tràn ở trường học</span></span>
  </a>
  <a href="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" style="display: flex; align-items: center; gap: 12px; background: #ffffff; border: 1px solid #fed7aa; border-radius: 12px; padding: 12px 16px; text-decoration: none; color: #c2410c; box-shadow: 0 1px 4px rgba(0,0,0,0.02); transition: all 0.2s ease;">
    <span style="font-size: 1.4rem;">⚖️</span>
    <span style="font-size: 0.88rem; line-height: 1.45;"><strong style="color: #ea580c; display: block;">So sánh 5 sản phẩm kinh nguyệt</strong><span style="color: #64748b;">Băng vệ sinh, Tampon, Cốc hay Quần?</span></span>
  </a>
</div>

${tocHtml}
`;

    art367.content = (newOpening367.trim() + '\n\n' + restOfContent.trim()).trim();
  }
}

// Synchronize newsEn with the updated contents
[367, 368, 369].forEach(id => {
  const viItem = news.list.find(a => a.id === id);
  const enItem = newsEn.list.find(a => a.id === id);
  if (viItem && enItem) {
    enItem.content = viItem.content;
  }
});

fs.writeFileSync(newsPath, JSON.stringify(news, null, 2), 'utf8');
fs.writeFileSync(newsEnPath, JSON.stringify(newsEn, null, 2), 'utf8');

console.log('Successfully updated openings for articles 367, 368, and 369!');

