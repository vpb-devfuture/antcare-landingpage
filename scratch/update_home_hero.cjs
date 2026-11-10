const fs = require('fs');

const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the Hero section and Section 3 image
const oldHeroRegex = /\{\/\* 1\. HERO SECTION & QUICK ANSWER \*\/\}[\s\S]*?\{\/\* 2\. VẤN ĐỀ/;

const newHeroCode = `{/* 1. HERO SECTION & QUICK ANSWER */}
      <section className="pt-24 pb-14 sm:pt-28 sm:pb-20 bg-gradient-to-b from-[#FAF6F2] via-[#FAF8F5] to-white border-b border-[#E8DFD5] relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: BRAND TITLE & VALUES & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#6633B4]/20 text-[#6633B4] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#6633B4] animate-pulse"></span>
                Đồ lót chức năng cho phụ nữ
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1C1917] leading-[1.25] tracking-tight">
                ANTCARE – Đồ lót chức năng cho phụ nữ:{' '}
                <span className="text-[#6633B4]">quần kinh nguyệt</span> và{' '}
                <span className="text-[#FD711A]">quần chống són tiểu</span>
              </h1>

              {/* Quick Answer / Brand Statement Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#E8DFD5] shadow-xs relative">
                <div className="border-l-3 border-[#6633B4] pl-4">
                  <p className="text-[15px] sm:text-base text-[#292524] leading-relaxed">
                    <strong className="text-[#6633B4] font-bold">
                      ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.
                    </strong>{' '}
                    ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
                  </p>
                </div>
              </div>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#44403C]">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6633B4] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span className="font-medium">Lõi thấm 4 lớp chống tràn</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#44403C]">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6633B4] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span className="font-medium">Mềm mại, thoáng khí êm dịu</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#44403C]">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FD711A] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span className="font-medium">Giặt và dùng lại nhiều lần</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#44403C]">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FD711A] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span className="font-medium">An toàn, không chứa PFAS</span>
                </div>
              </div>

              {/* Action Buttons & Notice */}
              <div className="pt-2 space-y-2.5">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="#dang-ky"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FD711A] to-[#f46006] text-white font-bold text-base shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Nhận thông tin ra mắt</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a
                    href={\`https://zalo.me/\${siteInfo.hotline.replace(/ /g, "")}\`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-[#6633B4]/30 text-[#6633B4] font-bold text-base hover:bg-[#6633B4]/5 hover:border-[#6633B4] transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#6633B4]">chat</span>
                    <span>Tư vấn Zalo 0969 032 360</span>
                  </a>
                </div>
                <p className="text-xs text-[#78716C] italic">
                  * Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: HERO VISUAL SHOWCASE */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E8DFD5] shadow-xl p-3 sm:p-4">
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden bg-[#FAF8F5]">
                  <img
                    src="/images/products/quan-lot-tham-hut.jpg"
                    alt="Quần lót thấm hút ANTCARE dáng cạp cao mềm mại"
                    className="w-full h-auto aspect-square object-cover"
                    width="1000"
                    height="1000"
                    loading="eager"
                  />
                  {/* Floating badge top right */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-[#E8DFD5] flex items-center gap-1.5 text-xs font-bold text-[#6633B4]">
                    <span className="material-symbols-outlined text-[16px] text-[#FD711A]">verified</span>
                    <span>Lõi thấm 4 lớp</span>
                  </div>
                </div>

                {/* Floating summary bar at the bottom */}
                <div className="mt-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]/80">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#6633B4] flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">water_drop</span>
                      Chống tràn & Khô thoáng
                    </span>
                    <span className="text-[#FD711A]">Giặt tái sử dụng</span>
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1 line-clamp-1">
                    Dáng boy short cạp cao ôm êm ái, mặc tự nhiên như đồ lót thường
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 4-PILLAR TRUST BAR (BELOW THE 2 COLUMNS) */}
          <div className="mt-12 pt-8 border-t border-[#E8DFD5] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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

// In Section 3, change the image to minh-hoa-cau-tao-4-lop.jpg so it's not duplicate with Hero
const oldSec3ImageRegex = /<div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-\[#E8DFD5\] shadow-sm">\s*<img\s*src="\/images\/products\/quan-lot-tham-hut\.jpg"[\s\S]*?<\/div>\s*<\/div>/;

const newSec3ImageCode = `<div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <img
                src="/images/products/minh-hoa-cau-tao-4-lop.jpg"
                alt="Minh họa cấu tạo 4 lớp đáy thấm hút của quần kinh nguyệt ANTCARE"
                className="w-full h-auto rounded-2xl object-cover mb-4"
                width="1024"
                height="766"
                loading="lazy"
              />
              <div className="text-center">
                <span className="text-xs font-bold text-[#6633B4] uppercase">Cấu tạo 4 lớp đáy mở rộng</span>
                <p className="text-xs text-[#78716C] mt-1">Lõi thấm dài ra phía sau, chống tràn hiệu quả cả khi nằm ngủ</p>
              </div>
            </div>`;

content = content.replace(oldSec3ImageRegex, newSec3ImageCode);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Home.jsx Hero and Section 3');

