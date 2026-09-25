import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const MedicalEscortService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'Việt Nam',
    seniorLocation: 'Hà Nội',
    hospital: '',
    date: '',
    notes: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });

  // Calculate minimum booking date (strictly from tomorrow onwards)
  const getMinBookingDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const minDate = getMinBookingDate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title & Meta for Client-Side Navigation
    const pageTitle = "Dịch vụ đưa người cao tuổi đi khám tại Hà Nội – từ 390.000đ | ANTCARE";
    const pageDesc = "Kiến Y tế ANTCARE có nền tảng điều dưỡng, đưa ông bà đi khám tại các bệnh viện Hà Nội: lấy số, làm thủ tục BHYT, đi cùng vào phòng khám, báo cáo cho gia đình. Từ 390.000đ/lần.";
    const canonicalUrl = "https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi";

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageDesc;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = pageTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = pageDesc;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = canonicalUrl;

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = "https://antcare.vn/images/footer-logo.png";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormStatus({ submitting: false, success: false, error: 'Quý khách vui lòng nhập đầy đủ họ tên và số điện thoại/Zalo liên hệ.' });
      return;
    }

    if (formData.date && formData.date < minDate) {
      setFormStatus({ submitting: false, success: false, error: 'Quý khách vui lòng chọn ngày khám từ ngày mai trở đi (cần liên hệ trước ít nhất 1 ngày).' });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: '' });

    trackEvent('generate_lead', {
      form_name: 'medical_escort_booking',
      hospital: formData.hospital,
      date: formData.date
    });

    const googleSheetUrl = siteInfo.googleSheetConsultUrl;

    try {
      if (googleSheetUrl) {
        const payload = new URLSearchParams();
        payload.append('name', formData.name);
        payload.append('phone', formData.phone);
        payload.append('location', `Nơi ở: ${formData.seniorLocation} (Quốc gia người đặt: ${formData.country}) | BV: ${formData.hospital || 'Chưa rõ'} | Ngày: ${formData.date || 'Linh hoạt'} | Ghi chú: ${formData.notes}`);
        payload.append('service', 'Đồng hành khám bệnh Hà Nội');
        payload.append('timestamp', new Date().toLocaleString('vi-VN'));

        await fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: payload.toString()
        });
      }

      setFormStatus({ submitting: false, success: true, error: '' });
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          country: 'Việt Nam',
          seniorLocation: 'Hà Nội',
          hospital: '',
          date: '',
          notes: ''
        });
      }, 3000);
    } catch (err) {
      console.error('Booking form error:', err);
      setFormStatus({ submitting: false, success: true, error: '' });
    }
  };

  return (
    <div className="bg-[#FEFCFB] text-slate-800 pt-20 md:pt-24 pb-20 md:pb-16 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <Link to="/" className="hover:text-[#6633B4] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <Link to="/#giai-phap-cham-soc" className="hover:text-[#6633B4] transition-colors">
            Dịch vụ
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-semibold" aria-current="page">
            Đưa người cao tuổi đi khám
          </span>
        </nav>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero Header */}
        <header className="pt-2 pb-8 border-b border-purple-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">medical_services</span>
            Dịch vụ y tế chuyên biệt Hà Nội
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
            Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-5">
            <strong>Bố mẹ có lịch khám nhưng con không sắp xếp được? Kiến Y tế của ANTCARE, với nền tảng điều dưỡng và chứng chỉ sơ cấp cứu, sẽ thay con đưa ông bà đi khám, lo trọn thủ tục ở bệnh viện, ghi lại đầy đủ lời bác sĩ dặn và báo cáo ngay cho gia đình.</strong>
          </p>

          <div className="bg-gradient-to-r from-purple-50 via-orange-50/50 to-white p-4 sm:p-5 rounded-2xl border border-purple-100 mb-6">
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              Chỉ từ <span className="text-[#FD711A] font-bold text-lg">390.000đ/lần</span> · Nhận ông bà tại Hà Nội và các tỉnh miền Bắc · Gọi <a href="tel:0969032360" className="text-[#6633B4] font-bold hover:underline">0969 032 360</a>
            </p>
          </div>

          {/* CTA Position 1: Đầu trang */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:0969032360"
              onClick={() => trackEvent('click_hotline', { location: 'escort_hero' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Gọi đặt lịch: 0969 032 360
            </a>
            <a
              href="https://zalo.me/0969032360"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_zalo', { location: 'escort_hero' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Nhắn Zalo
            </a>
          </div>
        </header>

        {/* Section 1: Khi nào gia đình cần dịch vụ */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Khi nào gia đình cần dịch vụ đưa người cao tuổi đi khám?
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
            Đi khám ở các bệnh viện lớn tại Hà Nội thường mất cả buổi: xếp hàng lấy số, làm thủ tục bảo hiểm y tế, đi qua nhiều khoa để xét nghiệm, chụp chiếu rồi quay lại gặp bác sĩ. Với người cao tuổi, đi một mình vừa mệt vừa dễ nhầm lẫn, và thường quên mất bác sĩ đã dặn gì.
          </p>
          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/70">
            <p className="text-slate-800 font-semibold mb-3 text-sm sm:text-base">Dịch vụ này dành cho gia đình khi:</p>
            <ul className="space-y-3 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Con cháu đi làm, đi công tác hoặc sống ở tỉnh khác, ở nước ngoài, không đưa bố mẹ đi khám được.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Ông bà có bệnh nền (huyết áp, tiểu đường, tim mạch, xương khớp…) cần tái khám định kỳ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Ông bà đi lại chậm, nghe kém, hay quên, hoặc chưa quen quy trình ở bệnh viện lớn.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Ông bà ở các tỉnh miền Bắc cần lên Hà Nội khám tại bệnh viện tuyến trung ương.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>Gia đình muốn có người đi cùng ghi chép cẩn thận để nắm chính xác tình trạng sức khỏe của bố mẹ.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Kiến Y tế hỗ trợ những gì */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Kiến Y tế hỗ trợ những gì trong buổi đi khám?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Trước buổi khám */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">event_available</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#6633B4] mb-3">
                Trước buổi khám
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>Tư vấn chọn bệnh viện, chuyên khoa phù hợp và hỗ trợ đặt lịch khám trước khi có thể.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>Nhắc gia đình chuẩn bị giấy tờ: CCCD, thẻ BHYT, sổ khám, đơn thuốc và kết quả cũ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>Đón ông bà tại nhà. Với ông bà ở các tỉnh ngoài Hà Nội, ANTCARE kết nối xe tiện chuyến hoặc loại xe phù hợp với nhu cầu của gia đình.</span>
                </li>
              </ul>
            </div>

            {/* Tại bệnh viện */}
            <div className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FD711A]/10 text-[#FD711A] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">local_hospital</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#FD711A] mb-3">
                Tại bệnh viện
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>Lấy số, làm thủ tục, xuất trình bảo hiểm y tế, thanh toán viện phí thay gia đình.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>Dẫn đường và đi cùng ông bà qua từng khoa, phòng xét nghiệm, chụp chiếu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>Vào phòng khám cùng ông bà, trình bày triệu chứng giúp và hỏi lại bác sĩ những điểm chưa rõ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>Ghi chép chẩn đoán, chỉ định, lời dặn và lịch tái khám.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>Theo dõi sức khỏe ông bà trong suốt buổi khám, sẵn sàng sơ cấp cứu khi cần.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>Xếp hàng nhận thuốc, giải thích lại cách uống thuốc cho ông bà.</span>
                </li>
              </ul>
            </div>

            {/* Sau buổi khám */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#6633B4] mb-3">
                Sau buổi khám
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>Đưa ông bà về nhà an toàn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>Gửi báo cáo buổi khám cho con cháu: kết quả, đơn thuốc, lời bác sĩ dặn, lịch tái khám.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>Nhắc lịch tái khám lần tiếp theo.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Bảng giá dịch vụ */}
        <section className="py-8 border-b border-slate-100" id="bang-gia">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Bảng giá dịch vụ đưa người cao tuổi đi khám
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-purple-200/80 shadow-sm mb-6 bg-white">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-[#6633B4] to-[#512496] text-white">
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Gói Đồng Hành Khám Bệnh</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Thời lượng</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold text-right">Giá (VNĐ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr className="hover:bg-purple-50/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 3 giờ)</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">3 giờ</td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">390.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors bg-slate-50/50">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 4 giờ)</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">4 giờ</td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">490.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 6 giờ)</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">6 giờ</td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">690.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors bg-slate-50/50">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 8 giờ)</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">8 giờ</td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">790.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors font-medium text-slate-600">
                  <td className="py-3 px-4 sm:px-6 italic">Vượt giờ</td>
                  <td className="py-3 px-4 sm:px-6 italic">Mỗi giờ</td>
                  <td className="py-3 px-4 sm:px-6 text-slate-700 font-semibold text-right">100.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Lưu ý */}
          <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/70 mb-6 text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-bold text-amber-900 text-sm sm:text-base mb-1">Lưu ý:</p>
            <p>• Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà.</p>
            <p>• Giá dịch vụ chưa bao gồm: chi phí phương tiện đi lại (gia đình tự chi trả theo thực tế phát sinh); tiền khám, xét nghiệm, chụp chiếu, thuốc và các khoản thu của bệnh viện.</p>
            <p>• Gợi ý chọn gói: khám một chuyên khoa ở bệnh viện vắng thì chọn 3–4 giờ. Khám ở bệnh viện tuyến trung ương đông bệnh nhân, có nhiều xét nghiệm và chụp chiếu, hoặc ông bà ở tỉnh xa lên Hà Nội, thì nên chọn 6–8 giờ.</p>
            <p>• ANTCARE là đơn vị hỗ trợ đồng hành, không trực thuộc bệnh viện và không can thiệp vào chuyên môn khám chữa bệnh.</p>
          </div>

          {/* CTA Position 2: Ngay sau bảng giá */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="tel:0969032360"
              onClick={() => trackEvent('click_hotline', { location: 'escort_pricing' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Gọi 0969 032 360 để chọn gói phù hợp
            </a>
            <a
              href="https://zalo.me/0969032360"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_zalo', { location: 'escort_pricing' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Nhắn Zalo
            </a>
          </div>

          {/* Cross-sell block */}
          <blockquote className="bg-purple-50/80 border-l-4 border-[#6633B4] p-4 sm:p-5 rounded-r-2xl text-xs sm:text-sm text-slate-700">
            Bố mẹ cần được theo dõi sức khỏe thường xuyên? Xem thêm các{' '}
            <Link to="/#bang-gia-chi-tiet" className="font-bold text-[#6633B4] hover:underline">
              Gói Trợ lý Sức khỏe
            </Link>{' '}
            định kỳ tại nhà, từ 990.000đ/tháng.
          </blockquote>
        </section>

        {/* Section 4: Quy trình đặt lịch 4 bước */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Quy trình đặt lịch 4 bước
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#6633B4] text-white font-bold text-sm flex items-center justify-center mb-3">1</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Liên hệ trước ít nhất 1 ngày</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gọi hoặc nhắn Zalo 0969 032 360, báo bệnh viện, chuyên khoa, ngày giờ khám, nơi đón và tình trạng sức khỏe của ông bà.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#FD711A] text-white font-bold text-sm flex items-center justify-center mb-3">2</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Tư vấn và xác nhận</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ANTCARE tư vấn gói thời lượng và phương án di chuyển phù hợp, xác nhận lịch và gửi thông tin Kiến Y tế phụ trách.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#6633B4] text-white font-bold text-sm flex items-center justify-center mb-3">3</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Thanh toán trước</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gia đình thanh toán phí dịch vụ trước buổi khám bằng chuyển khoản. ANTCARE nhận thanh toán cả từ nước ngoài.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#FD711A] text-white font-bold text-sm flex items-center justify-center mb-3">4</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">Đồng hành đi khám và báo cáo</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kiến Y tế đón ông bà, đi cùng suốt buổi khám, cập nhật tình hình và gửi báo cáo cho gia đình sau khi khám. Thời gian vượt gói (nếu có) được thanh toán bổ sung.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Nhận ông bà tại Hà Nội và các tỉnh miền Bắc */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Nhận ông bà tại Hà Nội và các tỉnh miền Bắc
          </h2>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-5">
            ANTCARE nhận đưa ông bà đi khám tại các bệnh viện ở Hà Nội. Ông bà ở các tỉnh miền Bắc như Bắc Ninh, Hưng Yên, Hải Dương, Vĩnh Phúc, Phú Thọ, Thái Bình, Nam Định, Ninh Bình, Hà Nam… cũng được nhận. ANTCARE sẽ kết nối xe tiện chuyến hoặc loại xe phù hợp với gia đình để đưa ông bà lên Hà Nội khám và về nhà trong ngày.
          </p>

          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
            <p className="font-bold text-slate-900 text-sm sm:text-base mb-3">Các bệnh viện Kiến Y tế thường xuyên đồng hành:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Bạch Mai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Hữu nghị Việt Đức</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Trung ương Quân đội 108</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện K (cơ sở Quán Sứ, Tân Triều)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện E</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Đại học Y Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Lão khoa Trung ương</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Nội tiết Trung ương</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Tim Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>Bệnh viện Thanh Nhàn, Bệnh viện Xanh Pôn</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="material-symbols-outlined text-[#FD711A] text-base">local_hospital</span>
                <span>Các bệnh viện và phòng khám tư: Vinmec, Hồng Ngọc, Medlatec, Thu Cúc…</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Vì sao chọn ANTCARE? */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-5 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Vì sao chọn ANTCARE?
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6633B4] text-xl mt-0.5 shrink-0">verified</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">Kiến Y tế có nền tảng điều dưỡng</strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Có nền tảng điều dưỡng và kinh nghiệm chăm sóc người cao tuổi, hiểu tình trạng sức khỏe của ông bà và biết cách trao đổi với bác sĩ.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#FD711A] text-xl mt-0.5 shrink-0">health_and_safety</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">Có chứng chỉ sơ cấp cứu:</strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Sẵn sàng xử trí ban đầu nếu ông bà mệt, chóng mặt hay có diễn biến bất thường trong buổi khám.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6633B4] text-xl mt-0.5 shrink-0">family_restroom</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">Gia đình luôn nắm được tình hình:</strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Được cập nhật trong buổi khám và nhận báo cáo đầy đủ sau khi khám, dù con đang ở tỉnh khác hay ở nước ngoài.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#FD711A] text-xl mt-0.5 shrink-0">price_check</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">Giá minh bạch theo giờ:</strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Biết trước chi phí dịch vụ. Tiền xe tính theo thực tế, không phụ phí ẩn.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6633B4] text-xl mt-0.5 shrink-0">volunteer_activism</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">Kiên nhẫn và tôn trọng ông bà:</strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Đi theo nhịp của ông bà, giải thích rõ ràng, nhẹ nhàng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Câu hỏi thường gặp */}
        <section className="py-8 border-b border-slate-100" id="faq">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-5 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            Câu hỏi thường gặp
          </h2>

          <div className="space-y-4">
            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200" open>
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>1. Dịch vụ đưa người cao tuổi đi khám của ANTCARE giá bao nhiêu?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Giá từ 390.000đ cho buổi khám dưới 3 giờ, 490.000đ dưới 4 giờ, 690.000đ dưới 6 giờ và 790.000đ dưới 8 giờ. Vượt giờ tính thêm 100.000đ mỗi giờ. Giá chưa gồm chi phí phương tiện đi lại, viện phí, xét nghiệm và thuốc.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200" open>
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>2. Thời gian dịch vụ được tính từ lúc nào?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà cho đến khi đưa ông bà về nhà.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200" open>
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>3. Chi phí đi lại được tính thế nào?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Chi phí phương tiện không nằm trong giá gói. Gia đình chi trả theo thực tế phát sinh. ANTCARE tư vấn và kết nối phương tiện phù hợp với tình trạng sức khỏe của ông bà và với ngân sách của gia đình.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>4. Ông bà ở tỉnh ngoài Hà Nội có dùng được dịch vụ không?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Có. ANTCARE nhận ông bà tại các tỉnh miền Bắc và kết nối xe tiện chuyến hoặc loại xe phù hợp để đưa ông bà lên Hà Nội khám rồi về nhà.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>5. Con đang ở nước ngoài có đặt dịch vụ cho bố mẹ được không?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Được. Gia đình đặt lịch qua điện thoại hoặc Zalo, thanh toán trước bằng chuyển khoản (ANTCARE nhận thanh toán từ nước ngoài) và nhận báo cáo sau buổi khám.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>6. Cần đặt lịch trước bao lâu?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Gia đình vui lòng đặt lịch trước ít nhất 1 ngày để ANTCARE sắp xếp Kiến Y tế và phương tiện phù hợp.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>7. Kiến Y tế có chuyên môn gì?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Kiến Y tế có nền tảng điều dưỡng, kinh nghiệm chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Họ được đào tạo về quy trình khám chữa bệnh và thủ tục bảo hiểm y tế tại bệnh viện.
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>8. Buổi khám kéo dài hơn gói đã chọn thì sao?</span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                Kiến Y tế vẫn ở lại cùng ông bà đến khi xong. Thời gian vượt được tính thêm 100.000đ mỗi giờ, và gia đình được báo trước khi sắp vượt giờ.
              </p>
            </details>
          </div>
        </section>

        {/* Section 8: Form đặt lịch cuối trang */}
        <section className="py-8" id="dat-lich">
          <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-200/80 shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FD711A]/10 text-[#FD711A] text-xs font-bold uppercase tracking-wider mb-2">
                Đăng ký dịch vụ
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2A1B3D] mb-2">
                Đặt lịch Kiến Y tế đồng hành đi khám
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Để lại thông tin, chuyên viên ANTCARE sẽ liên hệ tư vấn lộ trình và xác nhận gói trong vòng 15–30 phút.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              {formStatus.error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base shrink-0">error</span>
                  <span>{formStatus.error}</span>
                </div>
              )}

              {formStatus.success && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-lg shrink-0">check_circle</span>
                  <span><strong>Đăng ký thành công!</strong> Chuyên viên Kiến Y tế ANTCARE sẽ liên hệ lại quý khách ngay ạ.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Họ tên người đặt <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Số điện thoại / Zalo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Quốc gia đang ở
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Việt Nam"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Tỉnh/thành của ông bà
                  </label>
                  <input
                    type="text"
                    name="seniorLocation"
                    value={formData.seniorLocation}
                    onChange={handleChange}
                    placeholder="Ví dụ: Hà Nội, Hưng Yên, Bắc Ninh..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Bệnh viện muốn khám
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    placeholder="Ví dụ: Bạch Mai, ĐH Y, Lão Khoa..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Ngày khám (chỉ chọn từ ngày mai trở đi)
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Ghi chú tình trạng sức khỏe của ông bà
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ví dụ: Ông đi lại hơi yếu cần xe lăn; bà có tiền sử tiểu đường và huyết áp cao..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FD711A] to-[#e05e0f] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {formStatus.submitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                    Đang gửi thông tin...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">send</span>
                    Xác nhận đặt lịch Kiến Y tế
                  </>
                )}
              </button>
            </form>

            {/* CTA Position 3: Cuối trang */}
            <div className="mt-8 pt-6 border-t border-purple-200/60 flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="text-xs sm:text-sm text-slate-600 w-full mb-1">Hoặc liên hệ trực tiếp đường dây nóng hỗ trợ 24/7:</span>
              <a
                href="tel:0969032360"
                onClick={() => trackEvent('click_hotline', { location: 'escort_bottom' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-xs sm:text-sm shadow transition-all"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Gọi 0969 032 360
              </a>
              <a
                href="https://zalo.me/0969032360"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_zalo', { location: 'escort_bottom' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-xs sm:text-sm shadow transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Nhắn Zalo
              </a>
            </div>
          </div>
        </section>
      </article>

      {/* Mobile Fixed Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-purple-200/80 px-3 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2">
        <a
          href="tel:0969032360"
          onClick={() => trackEvent('click_hotline', { location: 'escort_mobile_bar' })}
          className="flex-1 py-2.5 px-3 rounded-full bg-[#FD711A] active:bg-[#e05e0f] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 shadow"
        >
          <span className="material-symbols-outlined text-base">call</span>
          Gọi 0969 032 360
        </a>
        <a
          href="https://zalo.me/0969032360"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('click_zalo', { location: 'escort_mobile_bar' })}
          className="flex-1 py-2.5 px-3 rounded-full bg-[#6633B4] active:bg-[#532896] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 shadow"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          Nhắn Zalo
        </a>
      </div>
    </div>
  );
};

export default MedicalEscortService;
