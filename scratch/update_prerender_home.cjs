const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.js', 'utf-8');

// 1. New Home Section
const newHomeSection = `  // ==========================================
  // 1. TRANG CHỦ (/) - THƯƠNG HIỆU ĐỒ LÓT CHỨC NĂNG
  // ==========================================
  const homeTitle = "ANTCARE – Quần kinh nguyệt & quần chống són tiểu";
  const homeDesc = "ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt.";
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://antcare.vn/#org",
        "name": "ANTCARE",
        "alternateName": ["ANTCARE – Kiến chăm tổ", "Kiến chăm tổ"],
        "url": "https://antcare.vn/",
        "logo": "https://antcare.vn/images/footer-logo.png",
        "description": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.",
        "telephone": "+84969032360",
        "areaServed": {
          "@type": "Country",
          "name": "Việt Nam"
        },
        "knowsAbout": [
          "quần kinh nguyệt",
          "quần chống són tiểu",
          "đồ lót chức năng",
          "sức khỏe kinh nguyệt",
          "són tiểu ở phụ nữ",
          "chăm sóc người cao tuổi"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn",
          "addressLocality": "Hà Nội",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61593117245344",
          "https://www.youtube.com/@Antcare-kienchamto",
          "https://www.tiktok.com/@antcare_group"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+84969032360",
          "contactType": "customer service",
          "availableLanguage": "vi"
        }
      },
      {
        "@type": "Brand",
        "@id": "https://antcare.vn/#brand",
        "name": "ANTCARE",
        "description": "Thương hiệu đồ lót chức năng: quần kinh nguyệt, quần chống són tiểu."
      },
      {
        "@type": "WebSite",
        "@id": "https://antcare.vn/#website",
        "url": "https://antcare.vn/",
        "name": "ANTCARE",
        "inLanguage": "vi",
        "publisher": { "@id": "https://antcare.vn/#org" }
      },
      {
        "@type": "WebPage",
        "@id": "https://antcare.vn/#webpage",
        "url": "https://antcare.vn/",
        "name": "ANTCARE – Quần kinh nguyệt & quần chống són tiểu",
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "about": { "@id": "https://antcare.vn/#org" },
        "inLanguage": "vi"
      },
      {
        "@type": "FAQPage",
        "@id": "https://antcare.vn/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ANTCARE là thương hiệu gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được. ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội."
            }
          },
          {
            "@type": "Question",
            "name": "Quần kinh nguyệt có thay được băng vệ sinh không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với ngày ra ít và trung bình, quần kinh nguyệt thường dùng một mình được. Ngày ra rất nhiều có thể kết hợp với băng hoặc cốc nguyệt san."
            }
          },
          {
            "@type": "Question",
            "name": "Quần chống són tiểu dùng cho ai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cho người són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười, vận động, còn tự sinh hoạt. Són tiểu nặng nên dùng sản phẩm chuyên dụng theo tư vấn y tế."
            }
          },
          {
            "@type": "Question",
            "name": "Quần thấm hút có vệ sinh không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có, nếu thay kịp thời, xả nước lạnh, giặt bằng xà phòng dịu, không dùng nước xả vải và phơi khô hoàn toàn."
            }
          },
          {
            "@type": "Question",
            "name": "Khi nào sản phẩm ANTCARE ra mắt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sản phẩm đang được hoàn thiện. Hãy để lại số điện thoại để nhận thông tin sớm nhất."
            }
          },
          {
            "@type": "Question",
            "name": "ANTCARE còn dịch vụ chăm sóc người cao tuổi không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện đang tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được giữ tại trang Chăm sóc người cao tuổi."
            }
          }
        ]
      }
    ]
  };

  const homeBody = \`
    <main class="antcare-home-prerender max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <header class="mb-8">
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1917] leading-tight tracking-tight">
          ANTCARE – Đồ lót chức năng cho phụ nữ và người cao tuổi: quần kinh nguyệt và quần chống són tiểu
        </h1>
        <div class="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl my-6 text-left">
          <p class="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
            <strong class="text-[#6633B4] font-bold">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.</strong> ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 items-center">
          <a href="#dang-ky" class="px-8 py-3.5 rounded-full bg-[#FD711A] text-white font-bold text-base shadow-md">Nhận thông tin ra mắt</a>
          <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 rounded-full bg-[#6633B4] text-white font-bold text-base shadow-md">Tư vấn Zalo 0969 032 360</a>
        </div>
        <p class="text-xs text-[#78716C] italic mt-3">
          Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
        </p>
      </header>

      <section id="van-de" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Vì sao phụ nữ và người cao tuổi cần một lựa chọn khác tã, bỉm, băng vệ sinh dùng một lần?</h2>
        <ul class="space-y-3 text-slate-700">
          <li><strong>Bí và ẩm:</strong> Sản phẩm dùng một lần giữ ẩm sát da khi dùng lâu, nhất là khí hậu nóng ẩm Việt Nam.</li>
          <li><strong>Cọ xát, hăm, kích ứng:</strong> Mép băng, cánh băng, keo dán, hương liệu dễ gây đỏ rát vùng bẹn.</li>
          <li><strong>Xô lệch, tràn:</strong> Băng dễ xô khi vận động thể thao hoặc khi ngủ trở mình ban đêm.</li>
          <li><strong>Ngại và bất tiện:</strong> Người són tiểu nhẹ không muốn mặc bỉm; phụ nữ phải mang băng theo, lo tìm thùng rác.</li>
          <li><strong>Nhiều rác thải:</strong> Mỗi người dùng hàng nghìn sản phẩm dùng một lần trong suốt cuộc đời.</li>
        </ul>
      </section>

      <section id="quan-kinh-nguyet" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Quần kinh nguyệt ANTCARE – mặc như quần lót, thấm như băng vệ sinh</h2>
        <p class="text-slate-700 mb-4">Quần kinh nguyệt có phần đáy nhiều lớp: lớp tiếp xúc da mềm dịu, lõi thấm giữ máu kinh, lớp chống thấm giúp không thấm ra quần ngoài. Bạn mặc như quần lót bình thường, không cần dán keo hay đặt bất kỳ dụng cụ nào vào cơ thể.</p>
        <ul class="space-y-2 text-slate-700 mb-4">
          <li>• <strong>Dùng cho:</strong> Ngày ra ít đến trung bình có thể dùng một mình; ngày ra nhiều dùng làm lớp dự phòng êm ái cùng cốc nguyệt san hoặc băng vệ sinh; ban đêm thoải mái xoay người.</li>
          <li>• <strong>Phù hợp:</strong> Học sinh tuổi dậy thì, phụ nữ văn phòng, phụ nữ hay tràn ban đêm, da nhạy cảm với keo và mép băng, tuổi tiền mãn kinh chu kỳ thất thường.</li>
          <li>• <strong>Dáng chủ lực:</strong> Boy short cạp cao ôm đùi mềm mại, giữ vùng thấm ổn định không xô lệch khi ngồi lâu hoặc khi ngủ.</li>
        </ul>
        <div class="space-y-1 text-sm text-[#6633B4]">
          <p><a href="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" class="hover:underline">→ Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn</a></p>
          <p><a href="/kinh-nguyet/chon-quan-kinh-nguyet-theo-luong-kinh" class="hover:underline">→ Cách chọn quần kinh nguyệt theo lượng kinh: nhẹ, trung bình, nhiều</a></p>
          <p><a href="/kinh-nguyet/quan-kinh-nguyet-tham-duoc-bao-nhieu-ml" class="hover:underline">→ Quần kinh nguyệt thấm được bao nhiêu ml máu so với lượng kinh thực tế?</a></p>
        </div>
      </section>

      <section id="quan-chong-son-tieu" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Quần chống són tiểu ANTCARE – cho những lần rỉ nhẹ khi ho, hắt hơi, vận động</h2>
        <p class="text-slate-700 mb-4">Són tiểu nhẹ rất phổ biến ở phụ nữ sau sinh, độ tuổi tiền mãn kinh và người cao tuổi. Quần chống són tiểu có lõi thấm hút nhanh và vùng bảo vệ phía trước, mặc kín đáo như đồ lót bình thường, không gây cảm giác mặc bỉm tã.</p>
        <ul class="space-y-2 text-slate-700 mb-4">
          <li>• <strong>Phù hợp:</strong> Són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười, mang vác, tập thể dục; người lớn tuổi còn tự chủ sinh hoạt.</li>
          <li>• <strong>Chưa phù hợp:</strong> Tiểu không tự chủ mức độ nặng, người nằm một chỗ (nên dùng sản phẩm chuyên dụng theo tư vấn y tế).</li>
          <li>• <em>Lưu ý: Quần thấm hút giúp thoải mái hơn trong sinh hoạt, không điều trị bệnh són tiểu.</em></li>
        </ul>
        <div class="space-y-1 text-sm text-[#FD711A]">
          <p><a href="/son-tieu" class="hover:underline">→ Cẩm nang Són tiểu & Bài tập sàn chậu Kegel</a></p>
          <p><a href="/news/son-tieu-khi-ho-hat-hoi-cuoi" class="hover:underline">→ Són tiểu khi ho, hắt hơi, cười: nguyên nhân và cách xử lý</a></p>
          <p><a href="/news/son-tieu-sau-sinh" class="hover:underline">→ Són tiểu sau sinh: khi nào hết và cần làm gì?</a></p>
        </div>
      </section>

      <section id="so-sanh" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">So sánh các giải pháp cho ngày kinh nguyệt và són tiểu</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#F6F1FC] text-[#6633B4]">
                <th class="p-3">Giải pháp</th>
                <th class="p-3">Ưu điểm</th>
                <th class="p-3">Nhược điểm</th>
                <th class="p-3">Tác động môi trường</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E8DFD5]">
              <tr><td class="p-3 font-bold">Quần kinh nguyệt / Quần chống són</td><td class="p-3">Mặc như quần lót, mềm, không xô lệch, không rác thải mỗi lần dùng</td><td class="p-3">Cần giặt phơi đúng cách, chi phí mua ban đầu cao hơn 1 gói băng</td><td class="p-3">Dùng lại nhiều lần, giảm rác thải nhựa</td></tr>
              <tr><td class="p-3 font-bold">Băng vệ sinh dùng một lần</td><td class="p-3">Dễ mua, tiện lợi, không phải giặt</td><td class="p-3">Bí, dễ cọ xát, cánh băng cọ bẹn, dễ xô lệch khi ngủ</td><td class="p-3">Rác thải lớn, chứa nhựa và vi nhựa</td></tr>
              <tr><td class="p-3 font-bold">Tampon</td><td class="p-3">Gọn gàng, bơi được</td><td class="p-3">Phải đưa vào âm đạo, nguy cơ hội chứng sốc độc tố (TSS) nếu quên</td><td class="p-3">Rác thải dùng một lần</td></tr>
              <tr><td class="p-3 font-bold">Cốc / Đĩa nguyệt san</td><td class="p-3">Chứa nhiều máu, dùng lại nhiều năm</td><td class="p-3">Cần kỹ năng đặt và tháo, không phải ai cũng quen đưa vào cơ thể</td><td class="p-3">Rất ít rác thải</td></tr>
              <tr><td class="p-3 font-bold">Bỉm / Tã người lớn</td><td class="p-3">Chứa lượng nước tiểu lớn, hợp tiểu nặng</td><td class="p-3">Dày cộm, sột soạt, bí nóng, tâm lý ngại mặc khi còn tự sinh hoạt</td><td class="p-3">Khó phân hủy, rác thải lớn</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="cam-ket" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Cam kết minh bạch của ANTCARE</h2>
        <ul class="space-y-3 text-slate-700">
          <li>✓ <strong>Công bố rõ cấu tạo và chất liệu:</strong> Chi tiết từng lớp vải tiếp xúc, lớp lõi thấm hút và màng chống thấm khi ra mắt.</li>
          <li>✓ <strong>Không thêm hóa chất PFAS:</strong> Chỉ hợp tác với nhà sản xuất chứng minh được màng chống thấm không thêm PFAS và có chứng nhận vải tra cứu được (OEKO-TEX Standard 100).</li>
          <li>✓ <strong>Thông số từ thử nghiệm thực tế:</strong> Công bố mức thấm (ml) và độ bền giặt dựa trên kết quả kiểm nghiệm, không quảng cáo chung chung.</li>
          <li>✓ <strong>Đồng hành bằng tiếng Việt:</strong> Hướng dẫn giặt, bảo quản và tư vấn chọn size tận tình qua Zalo 0969 032 360.</li>
        </ul>
      </section>

      <section id="cau-chuyen" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Bắt nguồn từ chăm sóc người cao tuổi và phụ nữ</h2>
        <p class="text-slate-700 mb-4">ANTCARE – Kiến chăm tổ bắt đầu với dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Khi đồng hành cùng người cao tuổi và lắng nghe các mẹ, các chị, chúng tôi nhận thấy són tiểu, những ngày đèn đỏ khó chịu và làn da kích ứng do tã bỉm băng vệ sinh là nỗi lo có thật nhưng ít được quan tâm. Đó là lý do ANTCARE chuyển hướng tập trung phát triển đồ lót chức năng giặt dùng lại.</p>
        <p><a href="/ve-chung-toi" class="text-[#6633B4] font-bold hover:underline">→ Đọc toàn bộ câu chuyện về ANTCARE</a> | <a href="/cham-soc-nguoi-cao-tuoi" class="text-[#FD711A] font-bold hover:underline">→ Khởi nguồn: dịch vụ chăm sóc người cao tuổi</a></p>
      </section>

      <section id="cam-nang" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Cẩm nang kinh nguyệt và són tiểu</h2>
        <p class="text-slate-700 mb-4">Tổng hợp kiến thức khoa học, hướng dẫn chăm sóc sức khỏe kinh nguyệt và són tiểu từ chuyên gia.</p>
        <p><a href="/kinh-nguyet" class="px-6 py-2.5 rounded-full bg-[#6633B4] text-white font-bold text-sm inline-block">Xem tất cả bài viết cẩm nang →</a></p>
      </section>

      <section id="dang-ky" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Đăng ký nhận thông tin ra mắt</h2>
        <p class="text-slate-700 mb-4">Để lại thông tin để là người đầu tiên trải nghiệm sản phẩm đồ lót chức năng ANTCARE cùng ưu đãi mở bán đặc biệt.</p>
        <p class="text-xs text-[#78716C] italic mb-4">ANTCARE cam kết chỉ dùng số điện thoại để báo tin ra mắt và tư vấn; không chia sẻ cho bên thứ ba.</p>
        <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="px-8 py-3 rounded-full bg-[#FD711A] text-white font-bold text-sm inline-block">Đăng ký qua Zalo 0969 032 360</a>
      </section>

      <section id="hoi-dap" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-6">Câu hỏi thường gặp</h2>
        <dl class="space-y-4">
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">1. ANTCARE là thương hiệu gì?</dt>
            <dd class="text-slate-700 mt-1">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được. ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">2. Quần kinh nguyệt có thay được băng vệ sinh không?</dt>
            <dd class="text-slate-700 mt-1">Với ngày ra ít và trung bình, quần kinh nguyệt thường dùng một mình được. Ngày ra rất nhiều có thể kết hợp với băng hoặc cốc nguyệt san.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">3. Quần chống són tiểu dùng cho ai?</dt>
            <dd class="text-slate-700 mt-1">Cho người són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười, vận động, còn tự sinh hoạt. Són tiểu nặng nên dùng sản phẩm chuyên dụng theo tư vấn y tế.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">4. Quần thấm hút có vệ sinh không?</dt>
            <dd class="text-slate-700 mt-1">Có, nếu thay kịp thời, xả nước lạnh, giặt bằng xà phòng dịu, không dùng nước xả vải và phơi khô hoàn toàn.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">5. Khi nào sản phẩm ANTCARE ra mắt?</dt>
            <dd class="text-slate-700 mt-1">Sản phẩm đang được hoàn thiện. Hãy để lại số điện thoại hoặc nhắn Zalo 0969 032 360 để nhận thông tin sớm nhất.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">6. ANTCARE còn dịch vụ chăm sóc người cao tuổi không?</dt>
            <dd class="text-slate-700 mt-1">Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện đang tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được giữ tại trang Chăm sóc người cao tuổi (/cham-soc-nguoi-cao-tuoi).</dd>
          </div>
        </dl>
      </section>
    </main>
  \`;

  writeStaticPage({
    relativeUrl: '/',
    title: homeTitle,
    description: homeDesc,
    canonical: 'https://antcare.vn/',
    ogImage: '/images/footer-logo.png',
    h1Title: 'ANTCARE – Đồ lót chức năng cho phụ nữ và người cao tuổi: quần kinh nguyệt và quần chống són tiểu',
    bodyContent: homeBody,
    jsonLd: homeJsonLd,
    priority: '1.0',
    changefreq: 'daily'
  });`;

// Find start of Section 1 and end of writeStaticPage('/') in prerender.js
const startHomeRegex = /\/\/ ==========================================\s*\n\s*\/\/ 1\. TRANG CHỦ \(\/\)[\s\S]*?writeStaticPage\(\{\s*relativeUrl:\s*'\/',[\s\S]*?changefreq:\s*'daily'\s*\}\);/;
content = content.replace(startHomeRegex, newHomeSection);

fs.writeFileSync('scripts/prerender.js', content);
console.log('Successfully replaced Home section in prerender.js');

