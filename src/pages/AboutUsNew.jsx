import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import { useAppTranslation } from '../utils/i18nHelper';

const AboutUsNew = () => {
  const { isEn, tr } = useAppTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = isEn
      ? "About ANTCARE – Vietnamese Functional Underwear Brand"
      : "Về ANTCARE – Thương hiệu đồ lót chức năng Việt Nam";
    const desc = isEn
      ? "ANTCARE is a Vietnamese functional underwear brand: period panties, light incontinence underwear. Rooted in healthcare for seniors and women in Hanoi."
      : "ANTCARE là thương hiệu đồ lót chức năng Việt Nam: quần kinh nguyệt, quần chống són tiểu. Bắt nguồn từ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.";
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
  }, [isEn]);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: tr("ANTCARE là gì?", "What is ANTCARE?"),
      a: tr(
        "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.",
        "ANTCARE is a Vietnamese functional underwear brand featuring washable, reusable period underwear and light incontinence panties, originating from dedicated eldercare and healthcare services in Hanoi."
      )
    },
    {
      q: tr("ANTCARE có phải thương hiệu Việt Nam không?", "Is ANTCARE a Vietnamese brand?"),
      a: tr(
        "Có. ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan các công ty nước ngoài có tên tương tự.",
        "Yes. ANTCARE (antcare.vn) is an independent Vietnamese brand, not affiliated with foreign companies of similar names."
      )
    },
    {
      q: tr("Vì sao một đơn vị chăm sóc người cao tuổi lại làm đồ lót?", "Why does an eldercare organization develop underwear?"),
      a: tr(
        "Vì khi chăm sóc người cao tuổi và phụ nữ, ANTCARE thấy són tiểu, kinh nguyệt và kích ứng do sản phẩm dùng một lần là nhu cầu rất thật nhưng ít được quan tâm.",
        "Caring for older adults and women showed ANTCARE firsthand that bladder leaks, period discomfort, and skin rashes from single-use products are pressing daily realities that are rarely discussed openly."
      )
    },
    {
      q: tr("ANTCARE còn nhận dịch vụ chăm sóc người cao tuổi không?", "Does ANTCARE still offer eldercare services?"),
      a: tr(
        "Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được giữ tại trang Chăm sóc người cao tuổi (antcare.vn/cham-soc-nguoi-cao-tuoi).",
        "Eldercare services is where ANTCARE began, and is currently paused for new clients to focus on functional underwear. Service information is preserved on the Elderly Care page (antcare.vn/cham-soc-nguoi-cao-tuoi)."
      )
    },
    {
      q: tr("Mua sản phẩm ANTCARE ở đâu?", "Where can I buy ANTCARE products?"),
      a: tr(
        "Sản phẩm đang chuẩn bị ra mắt; bạn có thể đăng ký nhận thông tin tại antcare.vn hoặc nhắn Zalo 0969 032 360 để được hỗ trợ sớm nhất.",
        "Our collection is preparing for launch; you can register for early access at antcare.vn or message Zalo 0969 032 360 for immediate support."
      )
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-[#78716C]">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link to="/" className="hover:text-[#6633B4] transition-colors">
                {tr("Trang chủ", "Home")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#1C1917] font-semibold">
              {tr("Về ANTCARE", "About ANTCARE")}
            </li>
          </ol>
        </nav>

        {/* Header with single H1 */}
        <header className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-3">
            {tr("Giới Thiệu ANTCARE", "About ANTCARE")}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C1917] leading-tight">
            {tr(
              "Về ANTCARE – thương hiệu đồ lót chức năng bắt nguồn từ chăm sóc sức khỏe",
              "About ANTCARE – Functional Underwear Brand Rooted in Healthcare"
            )}
          </h1>
        </header>

        {/* Quick Answer box with exact brand definition sentence */}
        <div className="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl shadow-xs mb-10 text-left">
          <p className="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
            <strong className="text-[#6633B4] font-bold">
              {tr(
                "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.",
                "ANTCARE is a Vietnamese functional underwear brand featuring washable, reusable period underwear and light incontinence panties, originating from dedicated eldercare and healthcare services in Hanoi."
              )}
            </strong>
          </p>
        </div>

        {/* 1. THÔNG TIN CHUNG */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4">
            {tr("Thông tin chung", "General Overview")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <tbody className="divide-y divide-[#E8DFD5]">
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917] w-1/3">
                    {tr("Tên thương hiệu", "Brand Name")}
                  </td>
                  <td className="py-3 px-3 text-[#44403C]">
                    ANTCARE – {tr("Kiến chăm tổ", "Caring Ant")}
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">
                    {tr("Lĩnh vực", "Industry")}
                  </td>
                  <td className="py-3 px-3 text-[#44403C]">
                    {tr(
                      "Đồ lót chức năng: quần kinh nguyệt, quần chống són tiểu",
                      "Functional Underwear: period panties, light incontinence underwear"
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">
                    {tr("Khởi nguồn", "Heritage")}
                  </td>
                  <td className="py-3 px-3 text-[#44403C]">
                    {tr(
                      "Dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội",
                      "In-home elderly healthcare and hospital escort services in Hanoi"
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">
                    {tr("Khách hàng", "Target Audience")}
                  </td>
                  <td className="py-3 px-3 text-[#44403C]">
                    {tr(
                      "Phụ nữ trong độ tuổi có kinh nguyệt, phụ nữ sau sinh, tuổi tiền mãn kinh, người cao tuổi bị són tiểu nhẹ",
                      "Menstruating women, postpartum mothers, perimenopausal women, and seniors with mild bladder leaks"
                    )}
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">
                    {tr("Khu vực bán", "Availability")}
                  </td>
                  <td className="py-3 px-3 text-[#44403C]">
                    {tr("Toàn quốc (khi ra mắt)", "Nationwide delivery across Vietnam (at launch)")}
                  </td>
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
                  <td className="py-3 px-3 font-semibold text-[#1C1917]">
                    {tr("Địa chỉ", "Headquarters")}
                  </td>
                  <td className="py-3 px-3 text-[#44403C]">
                    {tr(
                      "Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội",
                      "Rox Tower, 138 Ho Tung Mau, Phu Dien, Hanoi, Vietnam"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#78716C] italic mt-4">
            {tr(
              "ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan đến các công ty nước ngoài có tên tương tự.",
              "ANTCARE (antcare.vn) is an independent Vietnamese brand, not affiliated with foreign companies of similar names."
            )}
          </p>
        </section>

        {/* 2. CÂU CHUYỆN ANTCARE */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            {tr("Câu chuyện ANTCARE", "The ANTCARE Story")}
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            {tr(
              "ANTCARE bắt đầu từ dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Làm việc hằng ngày với người cao tuổi và phụ nữ, chúng tôi nhận ra một nỗi khó chịu chung mà ít ai nói thành lời: những ngày đèn đỏ bí bách, tràn ban đêm; những lần rỉ nước tiểu khi ho, hắt hơi khiến người ta ngại ra ngoài; làn da hăm đỏ vì băng vệ sinh, tã, bỉm dùng một lần. Nhiều người són tiểu nhẹ không muốn mặc bỉm, nhưng cũng chưa có lựa chọn nào kín đáo và dễ chịu hơn.",
              "ANTCARE began with in-home senior wellness and hospital medical escort services in Hanoi. Working daily alongside older adults and women, we witnessed a shared discomfort rarely voiced aloud: stuffy, humid periods with overnight leaks; occasional bladder leaks when coughing or sneezing that make people hesitant to go out; and red, chafed skin from disposable pads, liners, and adult diapers. Many with mild incontinence dread bulky diapers, yet lacked a more discreet, comfortable alternative."
            )}
          </p>
          <p className="text-base text-[#44403C] leading-relaxed">
            {tr(
              "Từ đó, ANTCARE quyết định tập trung vào đồ lót chức năng: những chiếc quần mặc như quần lót bình thường, nhưng có lõi thấm hút cho máu kinh hoặc nước tiểu rỉ nhẹ, giặt và dùng lại được.",
              "From that real human experience, ANTCARE chose to focus on functional underwear: intimates that feel just like everyday underwear, with built-in absorbent cores for menstrual blood or light bladder leaks—washable and sustainably reusable."
            )}
          </p>
        </section>

        {/* 3. Ý NGHĨA TÊN "KIẾN CHĂM TỔ" */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            {tr('Ý nghĩa tên "Kiến chăm tổ"', 'Meaning of the Name "Caring Ant"')}
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            {tr(
              'Đàn kiến nhỏ bé nhưng chăm chỉ và luôn chăm lo cho tổ của mình. ANTCARE giữ tinh thần ấy: chăm sóc người phụ nữ và gia đình bằng những điều nhỏ, dùng mỗi ngày, làm thật tận tâm.',
              'Ants are small, yet diligent and tirelessly dedicated to nurturing their nest. ANTCARE embraces that spirit: caring for women and families through everyday essentials, crafted with genuine dedication and heartfelt care.'
            )}
          </p>
        </section>

        {/* 4. SỨ MỆNH, TẦM NHÌN, GIÁ TRỊ */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6">
            {tr("Sứ mệnh, tầm nhìn, giá trị", "Mission, Vision & Core Values")}
          </h2>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <h3 className="font-bold text-base text-[#1C1917] mb-1 text-[#6633B4]">
                {tr("Sứ mệnh", "Our Mission")}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  "Giúp phụ nữ và người cao tuổi Việt thoải mái, tự tin trong những ngày đèn đỏ và với són tiểu nhẹ, bằng đồ lót chức năng an toàn, dễ dùng.",
                  "Helping Vietnamese women and older adults feel comfortable, confident, and worry-free during periods and with mild bladder leaks, through safe and easy-to-use functional underwear."
                )}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <h3 className="font-bold text-base text-[#1C1917] mb-1 text-[#6633B4]">
                {tr("Tầm nhìn", "Our Vision")}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  "Trở thành thương hiệu đồ lót chức năng được phụ nữ Việt tin dùng, đồng hành qua các giai đoạn: tuổi dậy thì, đi làm, sau sinh, tiền mãn kinh và tuổi già.",
                  "To become the trusted functional underwear brand for Vietnamese women, supporting them through every stage of life: puberty, professional career, postpartum, perimenopause, and active senior years."
                )}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <h3 className="font-bold text-base text-[#1C1917] mb-2 text-[#6633B4]">
                {tr("Giá trị cốt lõi", "Core Values")}
              </h3>
              <ul className="space-y-2 text-sm text-[#57534E]">
                <li>
                  <strong>{tr("Trung thực:", "Integrity:")}</strong>{' '}
                  {tr("Chỉ công bố những điều đã được thử nghiệm và kiểm chứng, không quảng cáo thổi phồng.", "Only publish tested and verified claims, never exaggerated marketing.")}
                </li>
                <li>
                  <strong>{tr("Thấu hiểu:", "Empathy:")}</strong>{' '}
                  {tr("Thiết kế sản phẩm xuất phát từ nhu cầu thật của người dùng và người cao tuổi.", "Design products born from the real, unspoken needs of everyday users and seniors.")}
                </li>
                <li>
                  <strong>{tr("An toàn:", "Safety:")}</strong>{' '}
                  {tr("Sử dụng chất liệu vải có chứng nhận an toàn, không chứa hóa chất độc hại.", "Use certified non-toxic textiles free from hazardous forever chemicals.")}
                </li>
                <li>
                  <strong>{tr("Bền vững:", "Sustainability:")}</strong>{' '}
                  {tr("Hướng tới việc giặt và dùng lại nhiều lần, góp phần giảm thiểu rác thải ra môi trường.", "Champion washable, reusable essentials that actively reduce disposable landfill waste.")}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. SẢN PHẨM CỦA ANTCARE */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4">
            {tr("Sản phẩm của ANTCARE", "ANTCARE Products")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/#quan-kinh-nguyet"
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#6633B4] transition-all group block cursor-pointer"
            >
              <h3 className="font-bold text-base text-[#1C1917] group-hover:text-[#6633B4] flex items-center justify-between">
                <span>{tr("Quần kinh nguyệt", "Period Underwear")}</span>
                <span>→</span>
              </h3>
              <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                {tr(
                  "Mặc như đồ lót bình thường, thay thế băng vệ sinh vào ngày vừa và ít, hoặc dùng chống tràn ban đêm.",
                  "Wears like normal intimates, replaces pads on light-to-medium flow days, or serves as reliable leakproof overnight backup."
                )}
              </p>
            </a>

            <a
              href="/#quan-chong-son-tieu"
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#FD711A] transition-all group block cursor-pointer"
            >
              <h3 className="font-bold text-base text-[#1C1917] group-hover:text-[#FD711A] flex items-center justify-between">
                <span>{tr("Quần chống són tiểu", "Incontinence Panties")}</span>
                <span>→</span>
              </h3>
              <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                {tr(
                  "Dành cho người rỉ nhẹ khi ho, hắt hơi, vận động; giúp tự tin sinh hoạt mà không cần đến bỉm tã dày cộm.",
                  "For occasional leaks when coughing, sneezing, or exercising; restoring everyday confidence without bulky adult diapers."
                )}
              </p>
            </a>
          </div>
        </section>

        {/* 6. CÁCH ANTCARE CHỌN SẢN PHẨM */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            {tr("Cách ANTCARE chọn sản phẩm", "How ANTCARE Develops Products")}
          </h2>
          <ul className="space-y-3 text-sm text-[#44403C] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#6633B4] font-bold">✓</span>
              <span>
                <strong>{tr("Chứng nhận vải tra cứu được:", "Traceable Textile Certifications:")}</strong>{' '}
                {tr("Chỉ hợp tác với các nhà máy dệt có chứng nhận tiêu chuẩn an toàn (như OEKO-TEX Standard 100).", "Exclusively partnering with mills meeting rigorous international safety benchmarks (such as OEKO-TEX Standard 100).")}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6633B4] font-bold">✓</span>
              <span>
                <strong>{tr("Không thêm hóa chất độc hại PFAS:", "Zero Added PFAS Chemicals:")}</strong>{' '}
                {tr("Lớp màng chống thấm đảm bảo không chứa các hợp chất flo hữu cơ bền bỉ ảnh hưởng đến nội tiết.", "Ensuring the waterproof barrier contains no persistent organic fluorine compounds that disrupt endocrine health.")}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6633B4] font-bold">✓</span>
              <span>
                <strong>{tr("Công bố thông số theo thử nghiệm:", "Lab-Tested Performance Data:")}</strong>{' '}
                {tr("Thể tích thấm hút (ml) và độ bền giặt phơi được ghi rõ dựa trên kết quả kiểm nghiệm thực tế.", "Absorption volume (ml) and wash durability are grounded in empirical lab testing results.")}
              </span>
            </li>
          </ul>
        </section>

        {/* 7. CẨM NANG SỨC KHỎE */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            {tr("Cẩm nang sức khỏe", "Health & Wellness Guides")}
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            {tr(
              "ANTCARE xuất bản cẩm nang về kinh nguyệt và són tiểu bằng tiếng Việt, có dẫn nguồn từ WHO, NHS và các hiệp hội chuyên môn. Nội dung mang tính tham khảo, không thay thế tư vấn của bác sĩ.",
              "ANTCARE publishes evidence-informed guides on menstrual wellness and pelvic health, referencing guidelines from WHO, NHS, and medical associations. Content is for informational purposes and does not replace medical advice."
            )}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/kinh-nguyet"
              className="px-5 py-2.5 rounded-full bg-[#6633B4]/10 text-[#6633B4] font-semibold text-xs hover:bg-[#6633B4] hover:text-white transition-all"
            >
              {tr("Cẩm nang Kinh nguyệt →", "Period Guide →")}
            </Link>
            <Link
              to="/son-tieu"
              className="px-5 py-2.5 rounded-full bg-[#FD711A]/10 text-[#FD711A] font-semibold text-xs hover:bg-[#FD711A] hover:text-white transition-all"
            >
              {tr("Cẩm nang Són tiểu →", "Incontinence Guide →")}
            </Link>
          </div>
        </section>

        {/* 8. HÀNH TRÌNH KHỞI NGUỒN */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            {tr(
              "Hành trình: từ chăm sóc người cao tuổi đến đồ lót chức năng",
              "Our Journey: From Eldercare to Functional Underwear"
            )}
          </h2>
          <p className="text-base text-[#44403C] leading-relaxed">
            {tr(
              "ANTCARE từng cung cấp dịch vụ Trợ lý sức khỏe tại nhà và Đồng hành đi khám cho người cao tuổi ở Hà Nội và các tỉnh miền Bắc. Đây là nơi chúng tôi học được nhiều nhất về nhu cầu thật của người cao tuổi và phụ nữ. ANTCARE hiện tạm dừng nhận khách mới các dịch vụ người cao tuổi để tập trung vào đồ lót chức năng; thông tin dịch vụ vẫn được lưu giữ tại trang ",
              "ANTCARE began with in-home health assistants and hospital medical escort services for older adults in Hanoi and northern Vietnam. This is where we learned the most about the true daily needs of seniors and women. We have paused accepting new clients for eldercare to focus on functional underwear; service information remains preserved on our "
            )}
            <Link to="/cham-soc-nguoi-cao-tuoi" className="text-[#6633B4] font-bold hover:underline">
              {tr("Chăm sóc người cao tuổi", "Elderly Care page")}
            </Link>
            {tr(".", ".")}
          </p>
        </section>

        {/* 9. LIÊN HỆ */}
        <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4]">
            {tr("Liên hệ", "Contact Us")}
          </h2>
          <div className="space-y-2 text-sm text-[#44403C]">
            <p><strong>Hotline / Zalo:</strong> <a href="tel:0969032360" className="text-[#FD711A] font-bold hover:underline">0969 032 360</a></p>
            <p><strong>Email:</strong> support@antcare.vn</p>
            <p><strong>{tr("Địa chỉ:", "Address:")}</strong> {tr("Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội", "Rox Tower, 138 Ho Tung Mau, Phu Dien, Hanoi, Vietnam")}</p>
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
            {tr("Câu hỏi thường gặp về ANTCARE", "Frequently Asked Questions about ANTCARE")}
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E8DFD5] pb-4 last:border-b-0 last:pb-0">
                <dt>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] flex items-center justify-between gap-4 py-1 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xs text-[#6633B4] font-normal">{openFaq === idx ? '▲' : '▼'}</span>
                  </button>
                </dt>
                <dd className="mt-2 text-sm text-[#57534E] leading-relaxed">
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
