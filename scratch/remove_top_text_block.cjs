const fs = require('fs');

const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

const oldHeroRegex = /\{\/\* 1\. HERO SECTION & QUICK ANSWER \*\/\}[\s\S]*?\{\/\* 2\. VẤN ĐỀ/;

const newHeroCode = `{/* 1. HERO SECTION & QUICK ANSWER */}
      <section className="pt-16 md:pt-[68px] pb-12 sm:pb-16 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">
        {/* Full-bleed / Wide Hero Banner at the very top */}
        <div className="max-w-[1360px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 md:py-4">
          <a
            href="#dang-ky"
            className="block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <img
              src="/images/products/hero-absorbent-underwear-vi.jpg?v=layers-3d-v2"
              alt="ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu"
              className="w-full h-auto block select-none group-hover:scale-[1.002] transition-transform duration-300"
              width={2048}
              height={940}
              loading="eager"
            />
          </a>
        </div>

        {/* H1 & Brand Statement (Khối trả lời nhanh & nút hành động) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] leading-tight">
            ANTCARE – Đồ lót chức năng cho phụ nữ:{' '}
            <span className="text-[#6633B4]">quần kinh nguyệt</span> và{' '}
            <span className="text-[#FD711A]">quần chống són tiểu</span>
          </h1>

          {/* Quick Answer Callout */}
          <div className="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl my-6 text-left shadow-xs">
            <p className="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
              <strong className="text-[#6633B4] font-bold">
                ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.
              </strong>{' '}
              ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
            </p>
          </div>

          {/* Action Buttons & Notice */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#dang-ky"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FD711A] text-white font-bold text-base shadow-md hover:bg-[#e05e0e] transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Nhận thông tin ra mắt</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href={\`https://zalo.me/\${siteInfo.hotline.replace(/ /g, "")}\`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-[#6633B4]/30 text-[#6633B4] font-bold text-base hover:bg-[#6633B4]/5 transition-all text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px] text-[#6633B4]">chat</span>
              <span>Tư vấn Zalo 0969 032 360</span>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-[#78716C] italic mt-3">
            * Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
          </p>
        </div>

        {/* 4-Pillar Trust Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 pt-8 border-t border-[#E8DFD5] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6633B4] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">layers</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Lõi thấm 4 lớp</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Thấm hút & khóa ẩm chống tràn</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FD711A] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">spa</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Mềm dịu cho da</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Không cọ xát, không bí bách</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">autorenew</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Giặt và dùng lại</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Tiết kiệm & giảm rác thải</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">shield_check</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Không chứa PFAS</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Vải dệt an toàn cho sức khỏe</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VẤN ĐỀ`;

content = content.replace(oldHeroRegex, newHeroCode);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Home.jsx to put Hero Banner at the top and remove top text block!');

