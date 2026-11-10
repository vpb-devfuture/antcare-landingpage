const fs = require('fs');

const elderlyCareOriginCode = `import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppTranslation, translatePageData } from '../utils/i18nHelper';
import siteInfo from '../config/siteInfo.json';
import { getLandingPageData } from '../services/apiService';

const ElderlyCareOrigin = () => {
  const { t, isEn, tr } = useAppTranslation();
  const [pageData, setPageData] = useState(null);
  const activePageData = translatePageData(pageData, isEn);
  const [selectedSubService, setSelectedSubService] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = "Chăm sóc người cao tuổi Hà Nội – Khởi nguồn ANTCARE";
    const desc = "Dịch vụ Trợ lý sức khỏe và Đồng hành đi khám cho người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu. Dịch vụ đang tạm dừng nhận khách mới.";
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://antcare.vn/cham-soc-nguoi-cao-tuoi";

    const fetchData = async () => {
      try {
        const data = await getLandingPageData();
        setPageData(data);
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };
    fetchData();
  }, []);

  const zaloLink = "https://zalo.me/0969032360";

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-[#78716C]">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link to="/" className="hover:text-[#6633B4] transition-colors">Trang chủ</Link>
            </li>
            <li>/</li>
            <li className="text-[#1C1917] font-semibold">Chăm sóc người cao tuổi</li>
          </ol>
        </nav>

        {/* Header with single H1 */}
        <header className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FD711A]/10 text-[#FD711A] text-xs font-bold uppercase tracking-wider mb-3">
            Câu Chuyện Khởi Nguồn
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C1917] leading-tight">
            Chăm sóc người cao tuổi tại Hà Nội – nơi ANTCARE bắt đầu
          </h1>
        </header>

        {/* Notice block: Pause receiving new clients */}
        <div className="bg-[#FFF8F3] border-l-4 border-[#FD711A] p-5 sm:p-6 rounded-r-2xl shadow-xs mb-8 text-left">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#FD711A] text-2xl shrink-0 mt-0.5">info</span>
            <p className="text-base text-[#1f1a2b] leading-relaxed">
              <strong>Thông báo:</strong> Dịch vụ chăm sóc người cao tuổi của ANTCARE hiện tạm dừng nhận khách mới để tập trung phát triển đồ lót chức năng. Chúng tôi giữ lại trang này như một phần câu chuyện của ANTCARE. Nếu cần tư vấn, bạn vẫn có thể nhắn Zalo <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="text-[#FD711A] font-bold hover:underline">0969 032 360</a>.
            </p>
          </div>
        </div>

        {/* Origin Story Bridge */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs mb-12 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Hành trình từ chăm sóc sức khỏe đến đồ lót chức năng
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            ANTCARE bắt đầu từ dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Trong quá trình đồng hành cùng các bác, các cô chú, chúng tôi nhận thấy nhiều người gặp tình trạng són tiểu nhẹ hoặc da bị kích ứng, hăm bí do dùng tã, bỉm và băng vệ sinh dùng một lần trong thời gian dài nhưng không có giải pháp thay thế kín đáo. Đó là lý do ANTCARE chuyển hướng tập trung nghiên cứu và phát triển dòng đồ lót chức năng giặt dùng lại.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] text-white font-bold text-sm shadow-md hover:bg-[#522594] transition-all duration-300"
            >
              <span>Xem quần kinh nguyệt & quần chống són tiểu</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 3 SERVICES SECTION (id="dich-vu") */}
        <section id="dich-vu" className="scroll-mt-24 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Hệ thống dịch vụ đã triển khai</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              3 Dịch vụ chăm sóc người cao tuổi tại Hà Nội
            </h2>
            <p className="text-sm text-[#78716C] mt-2">
              Các gói dịch vụ chăm sóc tận tâm từng được ANTCARE xây dựng và vận hành tại gia đình
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1: Trợ lý Sức Khỏe */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] mb-2">Trợ lý Sức Khỏe</h3>
                <p className="text-sm text-[#57534E] leading-relaxed mb-4">
                  Kiểm tra chỉ số sinh tồn (huyết áp, nhịp tim, SpO2, đường huyết), hỗ trợ bài tập thể chất & kích thích trí não theo chuẩn quốc tế, nhắc nhở uống thuốc và trò chuyện cùng ông bà.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#44403C] mb-6">
                  <li className="flex items-center gap-2">✓ Đo huyết áp, đường huyết tại nhà</li>
                  <li className="flex items-center gap-2">✓ Bài tập vận động thể chất & trí não</li>
                  <li className="flex items-center gap-2">✓ Quản lý và nhắc nhở uống thuốc</li>
                  <li className="flex items-center gap-2">✓ Báo cáo cập nhật cho gia đình</li>
                </ul>
              </div>
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-full border-2 border-[#6633B4] text-[#6633B4] font-bold text-sm hover:bg-[#6633B4] hover:text-white transition-all"
              >
                Nhắn Zalo
              </a>
            </div>

            {/* Service 2: Đồng Hành Khám Bệnh */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#FD711A] shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-[#FD711A] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                Dịch vụ tiêu biểu
              </span>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FD711A]/10 text-[#FD711A] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">medical_services</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] mb-2">Đồng Hành Khám Bệnh</h3>
                <p className="text-sm text-[#57534E] leading-relaxed mb-4">
                  Đưa đón và đồng hành cùng người cao tuổi tại các bệnh viện lớn ở Hà Nội. Hỗ trợ lấy số, làm thủ tục BHYT, vào phòng khám cùng bác sĩ và tóm tắt dặn dò gửi gia đình.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#44403C] mb-6">
                  <li className="flex items-center gap-2">✓ Đón tận nhà, đồng hành tại viện</li>
                  <li className="flex items-center gap-2">✓ Xử lý thủ tục BHYT, xét nghiệm</li>
                  <li className="flex items-center gap-2">✓ Ghi nhận dặn dò của bác sĩ</li>
                  <li className="flex items-center gap-2">
                    <Link to="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" className="text-[#FD711A] font-medium hover:underline">
                      → Xem trang chi tiết dịch vụ
                    </Link>
                  </li>
                </ul>
              </div>
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-full bg-[#FD711A] text-white font-bold text-sm hover:bg-[#e05e0e] transition-all shadow"
              >
                Nhắn Zalo
              </a>
            </div>

            {/* Service 3: An Tâm Nhà Cửa */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">roofing</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] mb-2">An Tâm Nhà Cửa</h3>
                <p className="text-sm text-[#57534E] leading-relaxed mb-4">
                  Dọn dẹp, sắp xếp phòng ở thoáng đãng, chống trơn trượt phòng té ngã, chuẩn bị bữa ăn nhẹ dinh dưỡng và hỗ trợ sinh hoạt hàng ngày an toàn cho ông bà.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#44403C] mb-6">
                  <li className="flex items-center gap-2">✓ Khảo sát và phòng chống té ngã</li>
                  <li className="flex items-center gap-2">✓ Vệ sinh, khử khuẩn không gian sống</li>
                  <li className="flex items-center gap-2">✓ Chuẩn bị thực đơn dinh dưỡng dễ tiêu</li>
                  <li className="flex items-center gap-2">✓ Hỗ trợ việc vặt trong sinh hoạt</li>
                </ul>
              </div>
              <a
                href={zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-full border-2 border-[#6633B4] text-[#6633B4] font-bold text-sm hover:bg-[#6633B4] hover:text-white transition-all"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>
        </section>

        {/* PRICE TABLE SECTION (id="bang-gia-chi-tiet") */}
        <section id="bang-gia-chi-tiet" className="scroll-mt-24 mb-16 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Minh bạch chi phí</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              Bảng giá dịch vụ chăm sóc người cao tuổi
            </h2>
            <p className="text-xs text-[#78716C] mt-2">
              (Bảng giá tham khảo các gói dịch vụ ANTCARE từng áp dụng tại Hà Nội)
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F6F1FC] text-[#6633B4] border-b border-[#E8DFD5]">
                  <th className="py-3 px-4 font-bold">Gói dịch vụ</th>
                  <th className="py-3 px-4 font-bold">Nội dung / Thời lượng</th>
                  <th className="py-3 px-4 font-bold">Tần suất</th>
                  <th className="py-3 px-4 font-bold text-right">Chi phí (VNĐ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD5] text-[#44403C]">
                {/* Trợ lý Sức Khỏe */}
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-4 font-semibold text-[#1C1917]" rowSpan={3}>Trợ lý Sức Khỏe tại nhà</td>
                  <td className="py-3 px-4">Gói Đồng Hành (4 ca/tháng, 1.5h/ca)</td>
                  <td className="py-3 px-4">1 buổi/tuần</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">1.400.000 / tháng</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-4">Gói Gắn Kết (8 ca/tháng, 1.5h/ca)</td>
                  <td className="py-3 px-4">2 buổi/tuần</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">2.600.000 / tháng</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-4">Gói Yêu Thương (12 ca/tháng, 1.5h/ca)</td>
                  <td className="py-3 px-4">3 buổi/tuần</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">3.600.000 / tháng</td>
                </tr>

                {/* Đồng Hành Khám Bệnh */}
                <tr className="hover:bg-[#FAF8F5] bg-[#FAF8F5]/50">
                  <td className="py-3 px-4 font-semibold text-[#1C1917]" rowSpan={4}>Đồng Hành Khám Bệnh</td>
                  <td className="py-3 px-4">Khám nhanh buổi sáng (≤ 3 giờ)</td>
                  <td className="py-3 px-4">Theo buổi</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">390.000 / lần</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5] bg-[#FAF8F5]/50">
                  <td className="py-3 px-4">Khám tiêu chuẩn nửa ngày (≤ 4 giờ)</td>
                  <td className="py-3 px-4">Theo buổi</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">490.000 / lần</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5] bg-[#FAF8F5]/50">
                  <td className="py-3 px-4">Khám chuyên sâu cả ngày (≤ 6–8 giờ)</td>
                  <td className="py-3 px-4">Theo buổi</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">600.000 – 690.000 / lần</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5] bg-[#FAF8F5]/50">
                  <td className="py-3 px-4">Phụ phí vượt giờ</td>
                  <td className="py-3 px-4">Theo giờ phát sinh</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">100.000 / giờ</td>
                </tr>

                {/* An Tâm Nhà Cửa */}
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-4 font-semibold text-[#1C1917]">An Tâm Nhà Cửa</td>
                  <td className="py-3 px-4">Ca dọn dẹp, chống trượt, an toàn (3h/ca)</td>
                  <td className="py-3 px-4">4 ca / tháng</td>
                  <td className="py-3 px-4 text-right font-bold text-[#FD711A]">1.200.000 / tháng</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#78716C] mb-3">
              Mọi thắc mắc hoặc cần tư vấn, gia đình vui lòng nhắn Zalo trực tiếp cho ANTCARE:
            </p>
            <a
              href={zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FD711A] text-white font-bold text-sm shadow hover:bg-[#e05e0e] transition-all"
            >
              <span>Nhắn Zalo 0969 032 360</span>
            </a>
          </div>
        </section>

        {/* Back to Home CTA */}
        <div className="text-center bg-[#F6F1FC] p-8 rounded-3xl border border-[#E8DFD5]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-2">
            Khám phá định hướng mới của ANTCARE
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl mx-auto mb-6">
            ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6633B4] text-white font-bold text-base shadow hover:bg-[#522594] transition-all"
          >
            <span>Về trang chủ Đồ lót chức năng ANTCARE</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElderlyCareOrigin;
`;

fs.writeFileSync('src/pages/ElderlyCareOrigin.jsx', elderlyCareOriginCode);
console.log('Created src/pages/ElderlyCareOrigin.jsx successfully');

