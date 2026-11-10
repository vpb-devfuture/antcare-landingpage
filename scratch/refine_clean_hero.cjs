const fs = require('fs');

const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

const oldHeroRegex = /\{\/\* 1\. HERO SECTION & QUICK ANSWER \*\/\}[\s\S]*?\{\/\* 2\. VẤN ĐỀ/;

const newHeroCode = `{/* 1. HERO SECTION & QUICK ANSWER */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: BRAND TITLE & VALUES & CTAs */}
            <div className="lg:col-span-6 space-y-4 text-left">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#6633B4]/20 text-[#6633B4] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#6633B4] animate-pulse"></span>
                Đồ lót chức năng cho phụ nữ
              </div>

              {/* H1 Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#1C1917] leading-[1.25] tracking-tight">
                ANTCARE – Đồ lót chức năng cho phụ nữ:{' '}
                <span className="text-[#6633B4]">quần kinh nguyệt</span> và{' '}
                <span className="text-[#FD711A]">quần chống són tiểu</span>
              </h1>

              {/* Quick Answer / Brand Statement - Clean editorial typography without clumsy border box */}
              <p className="text-[15px] sm:text-base text-[#44403C] leading-relaxed pt-1">
                <strong className="text-[#1C1917] font-bold">
                  ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.
                </strong>{' '}
                ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
              </p>

              {/* Action Buttons & Notice - Prominently visible above the fold */}
              <div className="pt-2 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#dang-ky"
                    className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FD711A] to-[#f46006] text-white font-bold text-sm sm:text-base shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Nhận thông tin ra mắt</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a
                    href={\`https://zalo.me/\${siteInfo.hotline.replace(/ /g, "")}\`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-full bg-white border border-[#6633B4]/40 text-[#6633B4] font-bold text-sm sm:text-base hover:bg-[#6633B4]/5 transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#6633B4]">chat</span>
                    <span>Tư vấn Zalo 0969 032 360</span>
                  </a>
                </div>
                <p className="text-xs text-[#78716C] italic pt-0.5">
                  * Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
                </p>
              </div>

              {/* 4 Feature Highlights - Clean horizontal wrap */}
              <div className="grid grid-cols-2 gap-2 text-xs text-[#57534E] pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#6633B4] font-bold">✓</span>
                  <span className="font-medium">Lõi thấm 4 lớp chống tràn</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#6633B4] font-bold">✓</span>
                  <span className="font-medium">Mềm mại, thoáng khí êm dịu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FD711A] font-bold">✓</span>
                  <span className="font-medium">Giặt và dùng lại nhiều lần</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FD711A] font-bold">✓</span>
                  <span className="font-medium">An toàn, không chứa PFAS</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: HIGH-TECH UNDERWEAR + 4-LAYER 3D EXPLODED VISUAL - SEAMLESS LUXURY FRAME */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5]/80 bg-white group">
                <img
                  src="/images/products/hero-underwear-4layers-tech.jpg"
                  alt="Quần lót thấm hút ANTCARE dáng cạp cao kết hợp cấu tạo 4 lớp bóc tách 3D công nghệ cao"
                  className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform duration-500"
                  width="1376"
                  height="768"
                  loading="eager"
                />
                {/* Floating glassmorphism badges directly over the image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/60 flex items-center gap-1.5 text-xs font-bold text-[#6633B4]">
                  <span className="w-2 h-2 rounded-full bg-[#6633B4] animate-pulse"></span>
                  <span>Phom cạp cao êm ái</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/60 flex items-center gap-1.5 text-xs font-bold text-[#FD711A]">
                  <span className="material-symbols-outlined text-[16px]">layers</span>
                  <span>Lõi thấm 4 lớp Nano</span>
                </div>
              </div>
            </div>

          </div>

          {/* 4-PILLAR TRUST BAR (BELOW THE 2 COLUMNS) */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#E8DFD5] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
console.log('Successfully updated Home.jsx with clean, elegant Hero layout!');

