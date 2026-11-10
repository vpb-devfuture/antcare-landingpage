const fs = require('fs');

const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

const oldHeroRegex = /\{\/\* 1\. HERO SECTION & QUICK ANSWER \*\/\}[\s\S]*?\{\/\* 2\. VẤN ĐỀ/;

const newHeroCode = `{/* 1. HERO SECTION & QUICK ANSWER */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-[#FAF7F5] via-[#FAF8F5] to-white border-b border-[#E8DFD5] relative overflow-hidden">
        {/* Soft luxury ambient glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Top Header: Minimal, refined, airy (BỚT CHỮ) */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6633B4]"></span>
              Đồ lót chức năng cho phụ nữ
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-[42px] font-black text-[#1C1917] tracking-tight leading-[1.2]">
              ANTCARE – Đồ lót chức năng cho phụ nữ:
              <span className="block mt-1">
                <span className="text-[#6633B4]">quần kinh nguyệt</span> và <span className="text-[#FD711A]">quần chống són tiểu</span>
              </span>
            </h1>

            {/* Short punchy subtitle instead of a wall of text */}
            <p className="text-sm sm:text-base text-[#57534E] mt-3 leading-relaxed">
              Mặc êm ái như đồ lót bình thường • Lõi thấm 4 lớp chống tràn • Giặt và tái sử dụng bền bỉ
            </p>

            {/* CTAs: Centered, clean, immediately visible */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href="#dang-ky"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FD711A] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#e05e0e] hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Nhận thông tin ra mắt</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                href={\`https://zalo.me/\${siteInfo.hotline.replace(/ /g, "")}\`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-[#6633B4]/30 text-[#6633B4] font-bold text-sm sm:text-base hover:bg-[#6633B4]/5 transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
              >
                <span className="material-symbols-outlined text-[20px] text-[#6633B4]">chat</span>
                <span>Tư vấn Zalo 0969 032 360</span>
              </a>
            </div>
            <p className="text-xs text-[#78716C] italic pt-2">
              * Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
            </p>
          </div>

          {/* CINEMATIC ORIGINAL HERO BANNER (Models + 4 Layers 3D Simulation) */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E8DFD5] bg-white group">
            <img
              src="/images/products/hero-absorbent-underwear-vi.jpg?v=layers-3d-v2"
              alt="Quần kinh nguyệt và quần chống són tiểu ANTCARE - Cấu tạo 4 lớp đáy thấm hút"
              className="w-full h-auto block select-none group-hover:scale-[1.002] transition-transform duration-300"
              width={2048}
              height={940}
              loading="eager"
            />
          </div>

          {/* BRAND STATEMENT CARD (Khối trả lời nhanh / định vị thương hiệu bắt buộc) */}
          <div className="mt-8 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#E8DFD5] shadow-xs text-left">
            <div className="border-l-3 border-[#6633B4] pl-4">
              <p className="text-[14px] sm:text-[15px] text-[#292524] leading-relaxed">
                <strong className="text-[#6633B4] font-bold">
                  ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.
                </strong>{' '}
                ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
              </p>
            </div>
          </div>

          {/* 4-PILLAR TRUST BAR */}
          <div className="mt-8 pt-6 border-t border-[#E8DFD5] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
        </div>
      </section>

      {/* 2. VẤN ĐỀ`;

content = content.replace(oldHeroRegex, newHeroCode);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Home.jsx with cinematic hero banner and minimal text!');

