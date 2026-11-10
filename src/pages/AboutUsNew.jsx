import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';

const AboutUsNew = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = "Về ANTCARE – Thương hiệu đồ lót chức năng Việt Nam";
    const desc = "ANTCARE là thương hiệu đồ lót chức năng Việt Nam: quần kinh nguyệt, quần chống són tiểu. Bắt nguồn từ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.";
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
    canonical.href = "https://antcare.vn/ve-chung-toi";
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "ANTCARE là gì?",
      a: "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội."
    },
    {
      q: "ANTCARE có phải thương hiệu Việt Nam không?",
      a: "Có. ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan các công ty nước ngoài có tên tương tự."
    },
    {
      q: "Vì sao một đơn vị chăm sóc người cao tuổi lại làm đồ lót?",
      a: "Vì khi chăm sóc người cao tuổi và phụ nữ, ANTCARE thấy són tiểu, kinh nguyệt và kích ứng do sản phẩm dùng một lần là nhu cầu rất thật nhưng ít được quan tâm."
    },
    {
      q: "ANTCARE còn nhận dịch vụ chăm sóc người cao tuổi không?",
      a: "ANTCARE duy trì các dịch vụ chăm sóc sức khỏe người cao tuổi tại Hà Nội bao gồm: Trợ lý sức khỏe tại nhà và Đồng hành đi khám bệnh. Chi tiết xem tại trang Dịch vụ (antcare.vn/dich-vu)."
    },
    {
      q: "Mua sản phẩm ANTCARE ở đâu?",
      a: "Sản phẩm đang chuẩn bị ra mắt; bạn có thể đăng ký nhận thông tin tại antcare.vn hoặc nhắn Zalo 0969 032 360 để được hỗ trợ sớm nhất."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-[#78716C]">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link to="/" className="hover:text-[#6633B4] transition-colors">Trang chủ</Link>
            </li>
            <li>/</li>
            <li className="text-[#1C1917] font-semibold">Về ANTCARE</li>
          </ol>
        </nav>

        {/* Header with single H1 */}
        <header className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-3">
            Giới Thiệu ANTCARE
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C1917] leading-tight">
            Về ANTCARE – thương hiệu đồ lót chức năng bắt nguồn từ chăm sóc sức khỏe
          </h1>
        </header>

        {/* Quick Answer box with exact brand definition sentence */}
        <div className="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl shadow-xs mb-10 text-left">
          <p className="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
            <strong className="text-[#6633B4] font-bold">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</strong>
          </p>
        </div>

        {/* 1. THÔNG TIN CHUNG */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4">
            Thông tin chung
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <tbody className="divide-y divide-[#E8DFD5]">
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917] w-1/3">Tên thương hiệu</td>
                  <td className="py-3 px-3 text-[#44403C]">ANTCARE – Kiến chăm tổ</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Lĩnh vực</td>
                  <td className="py-3 px-3 text-[#44403C]">Đồ lót chức năng: quần kinh nguyệt, quần chống són tiểu</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Khởi nguồn</td>
                  <td className="py-3 px-3 text-[#44403C]">Dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Khách hàng</td>
                  <td className="py-3 px-3 text-[#44403C]">Phụ nữ trong độ tuổi có kinh nguyệt, phụ nữ sau sinh, tuổi tiền mãn kinh, người cao tuổi bị són tiểu nhẹ</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Khu vực bán</td>
                  <td className="py-3 px-3 text-[#44403C]">Toàn quốc (khi ra mắt)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Website</td>
                  <td className="py-3 px-3 text-[#44403C]">
                    <a href="https://antcare.vn" className="text-[#6633B4] font-medium hover:underline">antcare.vn</a>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Hotline / Zalo</td>
                  <td className="py-3 px-3 text-[#44403C]">
                    <a href="tel:0969032360" className="text-[#FD711A] font-bold hover:underline">0969 032 360</a>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">Địa chỉ</td>
                  <td className="py-3 px-3 text-[#44403C]">Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] italic mt-4">
            ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan đến các công ty nước ngoài có tên tương tự.
          </p>
        </section>

        {/* 2. CÂU CHUYỆN ANTCARE */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Câu chuyện ANTCARE
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            ANTCARE bắt đầu từ dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Làm việc hằng ngày với người cao tuổi và phụ nữ, chúng tôi nhận ra một nỗi khó chịu chung mà ít ai nói thành lời: những ngày đèn đỏ bí bách, tràn ban đêm; những lần rỉ nước tiểu khi ho, hắt hơi khiến người ta ngại ra ngoài; làn da hăm đỏ vì băng vệ sinh, tã, bỉm dùng một lần. Nhiều người són tiểu nhẹ không muốn mặc bỉm, nhưng cũng chưa có lựa chọn nào kín đáo và dễ chịu hơn.
          </p>
          <p className="text-base text-[#44403C] leading-relaxed">
            Từ đó, ANTCARE quyết định tập trung vào đồ lót chức năng: những chiếc quần mặc như quần lót bình thường, nhưng có lõi thấm hút cho máu kinh hoặc nước tiểu rỉ nhẹ, giặt và dùng lại được.
          </p>
        </section>

        {/* 3. Ý NGHĨA TÊN "KIẾN CHĂM TỔ" */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Ý nghĩa tên "Kiến chăm tổ"
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            Đàn kiến nhỏ bé nhưng chăm chỉ và luôn chăm lo cho tổ của mình. ANTCARE giữ tinh thần ấy: chăm sóc người phụ nữ và gia đình bằng những điều nhỏ, dùng mỗi ngày, làm thật tận tâm.
          </p>
        </section>

        {/* 4. SỨ MỆNH, TẦM NHÌN, GIÁ TRỊ */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6">
            Sứ mệnh, tầm nhìn, giá trị
          </h2>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <h3 className="font-bold text-base text-[#1C1917] mb-1 text-[#6633B4]">Sứ mệnh</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Giúp phụ nữ và người cao tuổi Việt thoải mái, tự tin trong những ngày đèn đỏ và với són tiểu nhẹ, bằng đồ lót chức năng an toàn, dễ dùng.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <h3 className="font-bold text-base text-[#1C1917] mb-1 text-[#6633B4]">Tầm nhìn</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Trở thành thương hiệu đồ lót chức năng được phụ nữ Việt tin dùng, đồng hành qua các giai đoạn: tuổi dậy thì, đi làm, sau sinh, tiền mãn kinh và tuổi già.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <h3 className="font-bold text-base text-[#1C1917] mb-2 text-[#6633B4]">Giá trị cốt lõi</h3>
              <ul className="space-y-2 text-sm text-[#57534E]">
                <li><strong>Trung thực:</strong> Chỉ công bố những điều đã được thử nghiệm và kiểm chứng, không quảng cáo thổi phồng.</li>
                <li><strong>Thấu hiểu:</strong> Thiết kế sản phẩm xuất phát từ nhu cầu thật của người dùng và người cao tuổi.</li>
                <li><strong>An toàn:</strong> Sử dụng chất liệu vải có chứng nhận an toàn, không chứa hóa chất độc hại.</li>
                <li><strong>Bền vững:</strong> Hướng tới việc giặt và dùng lại nhiều lần, góp phần giảm thiểu rác thải ra môi trường.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. SẢN PHẨM CỦA ANTCARE */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4">
            Sản phẩm của ANTCARE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/#quan-kinh-nguyet"
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#6633B4] transition-all group block"
            >
              <h3 className="font-bold text-base text-[#1C1917] group-hover:text-[#6633B4] flex items-center justify-between">
                <span>Quần kinh nguyệt</span>
                <span>→</span>
              </h3>
              <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                Mặc như đồ lót bình thường, thay thế băng vệ sinh vào ngày vừa và ít, hoặc dùng chống tràn ban đêm.
              </p>
            </a>

            <a
              href="/#quan-chong-son-tieu"
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#FD711A] transition-all group block"
            >
              <h3 className="font-bold text-base text-[#1C1917] group-hover:text-[#FD711A] flex items-center justify-between">
                <span>Quần chống són tiểu</span>
                <span>→</span>
              </h3>
              <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                Dành cho người rỉ nhẹ khi ho, hắt hơi, vận động; giúp tự tin sinh hoạt mà không cần đến bỉm tã dày cộm.
              </p>
            </a>
          </div>
        </section>

        {/* 6. CÁCH ANTCARE CHỌN SẢN PHẨM */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Cách ANTCARE chọn sản phẩm
          </h2>
          <ul className="space-y-3 text-sm text-[#44403C] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#6633B4] font-bold">✓</span>
              <span><strong>Chứng nhận vải tra cứu được:</strong> Chỉ hợp tác với các nhà máy dệt có chứng nhận tiêu chuẩn an toàn (như OEKO-TEX Standard 100).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6633B4] font-bold">✓</span>
              <span><strong>Không thêm hóa chất độc hại PFAS:</strong> Lớp màng chống thấm đảm bảo không chứa các hợp chất flo hữu cơ bền bỉ ảnh hưởng đến nội tiết.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6633B4] font-bold">✓</span>
              <span><strong>Công bố thông số theo thử nghiệm:</strong> Thể tích thấm hút (ml) và độ bền giặt phơi được ghi rõ dựa trên kết quả kiểm nghiệm thực tế.</span>
            </li>
          </ul>
        </section>

        {/* 7. CẨM NANG SỨC KHỎE */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Cẩm nang sức khỏe
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            ANTCARE xuất bản cẩm nang về kinh nguyệt và són tiểu bằng tiếng Việt, có dẫn nguồn từ WHO, NHS và các hiệp hội chuyên môn. Nội dung mang tính tham khảo, không thay thế tư vấn của bác sĩ.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/kinh-nguyet"
              className="px-5 py-2.5 rounded-full bg-[#6633B4]/10 text-[#6633B4] font-semibold text-xs hover:bg-[#6633B4] hover:text-white transition-all"
            >
              Cẩm nang Kinh nguyệt →
            </Link>
            <Link
              to="/son-tieu"
              className="px-5 py-2.5 rounded-full bg-[#FD711A]/10 text-[#FD711A] font-semibold text-xs hover:bg-[#FD711A] hover:text-white transition-all"
            >
              Cẩm nang Són tiểu →
            </Link>
          </div>
        </section>

        {/* 8. HÀNH TRÌNH KHỞI NGUỒN */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Hành trình: từ chăm sóc người cao tuổi đến đồ lót chức năng
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            ANTCARE từng cung cấp dịch vụ Trợ lý sức khỏe tại nhà và Đồng hành đi khám cho người cao tuổi ở Hà Nội và các tỉnh miền Bắc. Đây là nơi chúng tôi học được nhiều nhất về nhu cầu thật của người cao tuổi và phụ nữ. ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội; thông tin dịch vụ chi tiết được cung cấp tại trang <Link to="/dich-vu" className="text-[#6633B4] font-bold hover:underline">/dich-vu</Link>.
          </p>
        </section>

        {/* 9. LIÊN HỆ */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            Liên hệ
          </h2>
          <div className="space-y-2 text-sm text-[#44403C]">
            <p><strong>Hotline / Zalo:</strong> <a href="tel:0969032360" className="text-[#FD711A] font-bold hover:underline">0969 032 360</a></p>
            <p><strong>Email:</strong> support@antcare.vn</p>
            <p><strong>Địa chỉ:</strong> Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội</p>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.facebook.com/profile.php?id=61593117245344" target="_blank" rel="noopener noreferrer" className="text-xs text-[#6633B4] font-medium hover:underline">
              Facebook
            </a>
            <span className="text-[#D6D3D1]">|</span>
            <a href="https://www.youtube.com/@Antcare-kienchamto" target="_blank" rel="noopener noreferrer" className="text-xs text-[#6633B4] font-medium hover:underline">
              YouTube
            </a>
            <span className="text-[#D6D3D1]">|</span>
            <a href="https://www.tiktok.com/@antcare_group" target="_blank" rel="noopener noreferrer" className="text-xs text-[#6633B4] font-medium hover:underline">
              TikTok
            </a>
          </div>
        </section>

        {/* 10. CÂU HỎI THƯỜNG GẶP (FAQs) */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6">
            Câu hỏi thường gặp về ANTCARE
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E8DFD5] pb-4 last:border-b-0 last:pb-0">
                <dt>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] flex items-center justify-between gap-4 py-1"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xs text-[#6633B4] font-normal">{openFaq === idx ? '▲' : '▼'}</span>
                  </button>
                </dt>
                {/* Always rendered in DOM for SEO/crawler bots, styled via className */}
                <dd className={`mt-2 text-sm text-[#57534E] leading-relaxed ${openFaq === idx ? 'block' : 'hidden md:block'}`}>
                  <p>{faq.a}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
};

export default AboutUsNew;
