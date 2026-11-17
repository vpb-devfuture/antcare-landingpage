import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';
import { useAppTranslation } from '../utils/i18nHelper';

const MedicalEscortService = () => {
  const { isEn, tr } = useAppTranslation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: isEn ? 'Vietnam' : 'Việt Nam',
    seniorLocation: isEn ? 'Hanoi' : 'Hà Nội',
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
    const pageTitle = isEn
      ? "Medical Escort Service for Seniors in Hanoi – from 390,000 VND | ANTCARE"
      : "Dịch vụ đưa người cao tuổi đi khám tại Hà Nội – từ 390.000đ | ANTCARE";
    const pageDesc = isEn
      ? "ANTCARE Medical Assistants with nursing backgrounds escort seniors to Hanoi hospitals: queuing, health insurance paperwork, doctor consultation accompaniment, detailed family reports. From 390,000 VND/visit."
      : "Kiến Y tế ANTCARE có nền tảng điều dưỡng, đưa ông bà đi khám tại các bệnh viện Hà Nội: lấy số, làm thủ tục BHYT, đi cùng vào phòng khám, báo cáo cho gia đình. Từ 390.000đ/lần.";
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

    // BreadcrumbList JSON-LD: 3 levels (Trang chủ > Chăm sóc người cao tuổi > Đưa người cao tuổi đi khám)
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": isEn ? "Home" : "Trang chủ",
          "item": "https://antcare.vn/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": isEn ? "Elder Care" : "Chăm sóc người cao tuổi",
          "item": "https://antcare.vn/cham-soc-nguoi-cao-tuoi"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": isEn ? "Medical Escort Service" : "Đưa người cao tuổi đi khám",
          "item": canonicalUrl
        }
      ]
    };

    let breadcrumbScript = document.getElementById('escort-breadcrumb-jsonld');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'escort-breadcrumb-jsonld';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbJsonLd);

    return () => {
      const scriptToRemove = document.getElementById('escort-breadcrumb-jsonld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [isEn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: tr(
          'Quý khách vui lòng nhập đầy đủ họ tên và số điện thoại/Zalo liên hệ.',
          'Please enter your full name and contact phone/Zalo number.'
        )
      });
      return;
    }

    if (formData.date && formData.date < minDate) {
      setFormStatus({
        submitting: false,
        success: false,
        error: tr(
          'Quý khách vui lòng chọn ngày khám từ ngày mai trở đi (cần liên hệ trước ít nhất 1 ngày).',
          'Please select a visit date from tomorrow onwards (at least 1 day advance booking required).'
        )
      });
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
          country: isEn ? 'Vietnam' : 'Việt Nam',
          seniorLocation: isEn ? 'Hanoi' : 'Hà Nội',
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
            {tr('Trang chủ', 'Home')}
          </Link>
          <span className="text-slate-400">/</span>
          <Link to="/cham-soc-nguoi-cao-tuoi" className="hover:text-[#6633B4] transition-colors">
            {tr('Chăm sóc người cao tuổi', 'Elder Care')}
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-semibold" aria-current="page">
            {tr('Đưa người cao tuổi đi khám', 'Medical Escort Service')}
          </span>
        </nav>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero Header */}
        <header className="pt-2 pb-8 border-b border-purple-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">medical_services</span>
            {tr('Dịch vụ y tế chuyên biệt Hà Nội', 'Specialized Healthcare Service in Hanoi')}
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
            {tr(
              'Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội',
              'Medical Escort & Hospital Companion Service for Seniors in Hanoi'
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-5">
            <strong>
              {tr(
                'Bố mẹ có lịch khám nhưng con không sắp xếp được? Kiến Y tế của ANTCARE, với nền tảng điều dưỡng và chứng chỉ sơ cấp cứu, sẽ thay con đưa ông bà đi khám, lo trọn thủ tục ở bệnh viện, ghi lại đầy đủ lời bác sĩ dặn và báo cáo ngay cho gia đình.',
                'Parents have medical appointments but you cannot take time off work? ANTCARE Medical Assistants, with certified nursing backgrounds and first-aid training, escort your parents to hospitals, handle registration and insurance, document doctors\' advice, and update families immediately.'
              )}
            </strong>
          </p>

          <div className="bg-gradient-to-r from-purple-50 via-orange-50/50 to-white p-4 sm:p-5 rounded-2xl border border-purple-100 mb-6">
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              {tr('Chỉ từ', 'From')}{' '}
              <span className="text-[#FD711A] font-bold text-lg">
                {tr('390.000đ/lần', '390,000 VND/visit')}
              </span>{' '}
              · {tr('Nhận ông bà tại Hà Nội và các tỉnh miền Bắc', 'Serving seniors in Hanoi and Northern provinces')} · {tr('Gọi', 'Call')}{' '}
              <a href="tel:0969032360" className="text-[#6633B4] font-bold hover:underline">0969 032 360</a>
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
              {tr('Gọi đặt lịch: 0969 032 360', 'Call Booking: 0969 032 360')}
            </a>
            <a
              href="https://zalo.me/0969032360"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_zalo', { location: 'escort_hero' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              {tr('Nhắn Zalo', 'Chat on Zalo')}
            </a>
          </div>
        </header>

        {/* Section 1: Khi nào gia đình cần dịch vụ */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr(
              'Khi nào gia đình cần dịch vụ đưa người cao tuổi đi khám?',
              'When Do Families Need a Hospital Escort Service?'
            )}
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
            {tr(
              'Đi khám ở các bệnh viện lớn tại Hà Nội thường mất cả buổi: xếp hàng lấy số, làm thủ tục bảo hiểm y tế, đi qua nhiều khoa để xét nghiệm, chụp chiếu rồi quay lại gặp bác sĩ. Với người cao tuổi, đi một mình vừa mệt vừa dễ nhầm lẫn, và thường quên mất bác sĩ đã dặn gì.',
              'Visiting major hospitals in Hanoi often takes half a day: queueing for registration tickets, completing health insurance procedures, navigating various testing labs, and waiting for physician evaluations. For elderly parents, navigating alone is exhausting, confusing, and medical instructions are easily forgotten.'
            )}
          </p>
          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/70">
            <p className="text-slate-800 font-semibold mb-3 text-sm sm:text-base">
              {tr('Dịch vụ này dành cho gia đình khi:', 'This service is designed for families when:')}
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>
                  {tr(
                    'Con cháu đi làm, đi công tác hoặc sống ở tỉnh khác, ở nước ngoài, không đưa bố mẹ đi khám được.',
                    'Children are busy with work, travelling, or living in other provinces or abroad, unable to accompany parents in person.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>
                  {tr(
                    'Ông bà có bệnh nền (huyết áp, tiểu đường, tim mạch, xương khớp…) cần tái khám định kỳ.',
                    'Seniors have chronic conditions (hypertension, diabetes, heart disease, arthritis) requiring routine check-ups.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>
                  {tr(
                    'Ông bà đi lại chậm, nghe kém, hay quên, hoặc chưa quen quy trình ở bệnh viện lớn.',
                    'Seniors experience slow mobility, hearing difficulties, forgetfulness, or unfamiliarity with hospital procedures.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>
                  {tr(
                    'Ông bà ở các tỉnh miền Bắc cần lên Hà Nội khám tại bệnh viện tuyến trung ương.',
                    'Parents residing in Northern provinces travel to Hanoi for tertiary specialized hospital appointments.'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span>
                <span>
                  {tr(
                    'Gia đình muốn có người đi cùng ghi chép cẩn thận để nắm chính xác tình trạng sức khỏe của bố mẹ.',
                    'Families want a professional companion to take thorough clinical notes and keep them fully informed.'
                  )}
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Kiến Y tế hỗ trợ những gì */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr(
              'Kiến Y tế hỗ trợ những gì trong buổi đi khám?',
              'What Do Medical Assistants Support During the Visit?'
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Trước buổi khám */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">event_available</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#6633B4] mb-3">
                {tr('Trước buổi khám', 'Before Hospital Visit')}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>
                    {tr(
                      'Tư vấn chọn bệnh viện, chuyên khoa phù hợp và hỗ trợ đặt lịch khám trước khi có thể.',
                      'Advising suitable hospitals and specialties; booking advance appointment slots where available.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>
                    {tr(
                      'Nhắc gia đình chuẩn bị giấy tờ: CCCD, thẻ BHYT, sổ khám, đơn thuốc và kết quả cũ.',
                      'Reminding families of essential documents: Citizen ID, health insurance cards, medical records, past prescriptions.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>
                    {tr(
                      'Đón ông bà tại nhà. Với ông bà ở các tỉnh ngoài Hà Nội, ANTCARE kết nối xe tiện chuyến hoặc loại xe phù hợp với nhu cầu của gia đình.',
                      'Door-to-door pickup. For parents living outside Hanoi, ANTCARE coordinates reliable private shuttles tailored to family preferences.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Tại bệnh viện */}
            <div className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#FD711A]/10 text-[#FD711A] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">local_hospital</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#FD711A] mb-3">
                {tr('Tại bệnh viện', 'At the Hospital')}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>
                    {tr(
                      'Lấy số, làm thủ tục, xuất trình bảo hiểm y tế, thanh toán viện phí thay gia đình.',
                      'Queuing for registration numbers, handling health insurance paperwork, and settling fees.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>
                    {tr(
                      'Dẫn đường và đi cùng ông bà qua từng khoa, phòng xét nghiệm, chụp chiếu.',
                      'Guiding and physically accompanying seniors through testing departments, blood draws, and scans.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>
                    {tr(
                      'Vào phòng khám cùng ông bà, trình bày triệu chứng giúp và hỏi lại bác sĩ những điểm chưa rõ.',
                      'Entering consultation rooms with seniors, describing symptoms accurately, and clarifying details with doctors.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>
                    {tr(
                      'Ghi chép chẩn đoán, chỉ định, lời dặn và lịch tái khám.',
                      'Accurately noting clinical diagnoses, medication instructions, and follow-up schedules.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>
                    {tr(
                      'Theo dõi sức khỏe ông bà trong suốt buổi khám, sẵn sàng sơ cấp cứu khi cần.',
                      'Monitoring health throughout the visit, ready to provide certified first aid if needed.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6633B4] font-bold">•</span>
                  <span>
                    {tr(
                      'Xếp hàng nhận thuốc, giải thích lại cách uống thuốc cho ông bà.',
                      'Queuing for pharmacy pickup and explaining medication regimens clearly to seniors.'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Sau buổi khám */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#6633B4] mb-3">
                {tr('Sau buổi khám', 'After Hospital Visit')}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>
                    {tr('Đưa ông bà về nhà an toàn.', 'Escorting seniors safely back to their home.')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>
                    {tr(
                      'Gửi báo cáo buổi khám cho con cháu: kết quả, đơn thuốc, lời bác sĩ dặn, lịch tái khám.',
                      'Sending a comprehensive summary report to children: test results, prescriptions, medical advice, and next appointment dates.'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FD711A] font-bold">•</span>
                  <span>
                    {tr('Nhắc lịch tái khám lần tiếp theo.', 'Proactive reminders prior to upcoming follow-up appointments.')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Bảng giá dịch vụ */}
        <section className="py-8 border-b border-slate-100" id="bang-gia">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr('Bảng giá dịch vụ đưa người cao tuổi đi khám', 'Medical Escort Service Pricing Table')}
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-purple-200/80 shadow-sm mb-6 bg-white">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-[#6633B4] to-[#512496] text-white">
                  <th className="py-3.5 px-4 sm:px-6 font-bold">
                    {tr('Gói Đồng Hành Khám Bệnh', 'Medical Companion Package')}
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">
                    {tr('Thời lượng', 'Duration')}
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold text-right">
                    {tr('Giá (VNĐ)', 'Price (VND)')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr className="hover:bg-purple-50/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">
                    {tr('Khám bệnh (≤ 3 giờ)', 'Hospital Visit (≤ 3 hours)')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">
                    {tr('3 giờ', '3 hours')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">390.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors bg-slate-50/50">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">
                    {tr('Khám bệnh (≤ 4 giờ)', 'Hospital Visit (≤ 4 hours)')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">
                    {tr('4 giờ', '4 hours')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">490.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">
                    {tr('Khám bệnh (≤ 6 giờ)', 'Hospital Visit (≤ 6 hours)')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">
                    {tr('6 giờ', '6 hours')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">690.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors bg-slate-50/50">
                  <td className="py-3.5 px-4 sm:px-6 font-semibold">
                    {tr('Khám bệnh (≤ 8 giờ)', 'Hospital Visit (≤ 8 hours)')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600">
                    {tr('8 giờ', '8 hours')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">790.000</td>
                </tr>
                <tr className="hover:bg-purple-50/40 transition-colors font-medium text-slate-600">
                  <td className="py-3.5 px-4 sm:px-6 italic">
                    {tr('Vượt giờ', 'Overtime')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 italic">
                    {tr('Mỗi giờ', 'Per extra hour')}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-700 font-semibold text-right">100.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Lưu ý */}
          <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/70 mb-6 text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-bold text-amber-900 text-sm sm:text-base mb-1">
              {tr('Lưu ý:', 'Important Notes:')}
            </p>
            <p>
              {tr(
                '• Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà.',
                '• Time begins counting from when the Medical Assistant starts picking up seniors.'
              )}
            </p>
            <p>
              {tr(
                '• Giá dịch vụ chưa bao gồm: chi phí phương tiện đi lại (gia đình tự chi trả theo thực tế phát sinh); tiền khám, xét nghiệm, chụp chiếu, thuốc và các khoản thu của bệnh viện.',
                '• Pricing excludes: transportation costs (family covers actual fares directly); hospital examination fees, lab tests, scans, and prescribed medication.'
              )}
            </p>
            <p>
              {tr(
                '• Gợi ý chọn gói: khám một chuyên khoa ở bệnh viện vắng thì chọn 3–4 giờ. Khám ở bệnh viện tuyến trung ương đông bệnh nhân, có nhiều xét nghiệm và chụp chiếu, hoặc ông bà ở tỉnh xa lên Hà Nội, thì nên chọn 6–8 giờ.',
                '• Package recommendation: 3–4 hours for single-specialty visits at uncrowded hospitals; 6–8 hours for central tertiary hospitals with multiple tests or seniors arriving from other provinces.'
              )}
            </p>
            <p>
              {tr(
                '• ANTCARE là đơn vị hỗ trợ đồng hành, không trực thuộc bệnh viện và không can thiệp vào chuyên môn khám chữa bệnh.',
                '• ANTCARE is an independent medical accompaniment service, not affiliated with hospitals, and does not alter medical diagnoses or treatments.'
              )}
            </p>
          </div>

          {/* CTA Position 2: Ngay sau bảng giá */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="tel:0969032360"
              onClick={() => trackEvent('click_hotline', { location: 'escort_pricing' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              {tr('Gọi 0969 032 360 để chọn gói phù hợp', 'Call 0969 032 360 for Package Advice')}
            </a>
            <a
              href="https://zalo.me/0969032360"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_zalo', { location: 'escort_pricing' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              {tr('Nhắn Zalo', 'Chat on Zalo')}
            </a>
          </div>

          {/* Cross-sell block */}
          <blockquote className="bg-purple-50/80 border-l-4 border-[#6633B4] p-4 sm:p-5 rounded-r-2xl text-xs sm:text-sm text-slate-700">
            {tr('Bố mẹ cần được theo dõi sức khỏe thường xuyên? Xem thêm các', 'Parents require regular health monitoring at home? Explore our')}{' '}
            <Link to="/cham-soc-nguoi-cao-tuoi#bang-gia-chi-tiet" className="font-bold text-[#6633B4] hover:underline">
              {tr('Gói Trợ lý Sức khỏe', 'Health Assistant Packages')}
            </Link>{' '}
            {tr('định kỳ tại nhà, từ 990.000đ/tháng.', 'routine home visits, from 990,000 VND/month.')}
          </blockquote>
        </section>

        {/* Section 4: Quy trình đặt lịch 4 bước */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr('Quy trình đặt lịch 4 bước', '4-Step Booking Process')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#6633B4] text-white font-bold text-sm flex items-center justify-center mb-3">1</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                {tr('Liên hệ trước ít nhất 1 ngày', 'Book at Least 1 Day Early')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tr(
                  'Gọi hoặc nhắn Zalo 0969 032 360, báo bệnh viện, chuyên khoa, ngày giờ khám, nơi đón và tình trạng sức khỏe của ông bà.',
                  'Call or message Zalo 0969 032 360 with hospital choice, specialty, date, pickup location, and health conditions.'
                )}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#FD711A] text-white font-bold text-sm flex items-center justify-center mb-3">2</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                {tr('Tư vấn và xác nhận', 'Consultation & Confirmation')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tr(
                  'ANTCARE tư vấn gói thời lượng và phương án di chuyển phù hợp, xác nhận lịch và gửi thông tin Kiến Y tế phụ trách.',
                  'ANTCARE advises suitable package duration and transportation, confirms schedule, and sends assigned Assistant details.'
                )}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#6633B4] text-white font-bold text-sm flex items-center justify-center mb-3">3</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                {tr('Thanh toán trước', 'Advance Payment')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tr(
                  'Gia đình thanh toán phí dịch vụ trước buổi khám bằng chuyển khoản. ANTCARE nhận thanh toán cả từ nước ngoài.',
                  'Families settle service fees via bank transfer prior to appointment. International transfers accepted.'
                )}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#FD711A] text-white font-bold text-sm flex items-center justify-center mb-3">4</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                {tr('Đồng hành đi khám và báo cáo', 'Accompaniment & Reporting')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tr(
                  'Kiến Y tế đón ông bà, đi cùng suốt buổi khám, cập nhật tình hình và gửi báo cáo cho gia đình sau khi khám. Thời gian vượt gói (nếu có) được thanh toán bổ sung.',
                  'Medical Assistant escorts seniors, sends live updates, and provides a full visit summary. Extra hours (if any) settled afterward.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Nhận ông bà tại Hà Nội và các tỉnh miền Bắc */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr('Nhận ông bà tại Hà Nội và các tỉnh miền Bắc', 'Serving Seniors in Hanoi and Northern Provinces')}
          </h2>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-5">
            {tr(
              'ANTCARE nhận đưa ông bà đi khám tại các bệnh viện ở Hà Nội. Ông bà ở các tỉnh miền Bắc như Bắc Ninh, Hưng Yên, Hải Dương, Vĩnh Phúc, Phú Thọ, Thái Bình, Nam Định, Ninh Bình, Hà Nam… cũng được nhận. ANTCARE sẽ kết nối xe tiện chuyến hoặc loại xe phù hợp với gia đình để đưa ông bà lên Hà Nội khám và về nhà trong ngày.',
              'ANTCARE escorts seniors to leading hospitals in Hanoi. Seniors in neighboring provinces such as Bac Ninh, Hung Yen, Hai Duong, Vinh Phuc, Phu Tho, Thai Binh, Nam Dinh, Ninh Binh, Ha Nam... are fully supported. ANTCARE coordinates comfortable shuttles or private transport for same-day hospital visits and safe returns.'
            )}
          </p>

          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
            <p className="font-bold text-slate-900 text-sm sm:text-base mb-3">
              {tr('Các bệnh viện Kiến Y tế thường xuyên đồng hành:', 'Hospitals Regularly Accompanied by ANTCARE Medical Assistants:')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Bạch Mai', 'Bach Mai Hospital')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Hữu nghị Việt Đức', 'Viet Duc Friendship Hospital')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Trung ương Quân đội 108', 'Central Military Hospital 108')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện K (Quán Sứ, Tân Triều)', 'National Cancer Hospital (K Hospital)')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện E', 'E Hospital')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Đại học Y Hà Nội', 'Hanoi Medical University Hospital')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Lão khoa Trung ương', 'National Geriatric Hospital')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Nội tiết Trung ương', 'National Hospital of Endocrinology')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Tim Hà Nội', 'Hanoi Heart Hospital')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6633B4] text-base">domain</span>
                <span>{tr('Bệnh viện Thanh Nhàn, Xanh Pôn', 'Thanh Nhan & Saint Paul Hospitals')}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="material-symbols-outlined text-[#FD711A] text-base">local_hospital</span>
                <span>{tr('Bệnh viện & phòng khám tư: Vinmec, Hồng Ngọc, Medlatec, Thu Cúc…', 'Private Hospitals: Vinmec, Hong Ngoc, Medlatec, Thu Cuc...')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Vì sao chọn ANTCARE? */}
        <section className="py-8 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-5 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr('Vì sao chọn ANTCARE?', 'Why Choose ANTCARE?')}
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6633B4] text-xl mt-0.5 shrink-0">verified</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">
                  {tr('Kiến Y tế có nền tảng điều dưỡng', 'Medical Assistants with Nursing Backgrounds')}
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {tr(
                    'Có nền tảng điều dưỡng và kinh nghiệm chăm sóc người cao tuổi, hiểu tình trạng sức khỏe của ông bà và biết cách trao đổi với bác sĩ.',
                    'Solid nursing training and senior care experience, understanding medical terminology to communicate effectively with doctors.'
                  )}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#FD711A] text-xl mt-0.5 shrink-0">health_and_safety</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">
                  {tr('Có chứng chỉ sơ cấp cứu:', 'Certified in First Aid:')}
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {tr(
                    'Sẵn sàng xử trí ban đầu nếu ông bà mệt, chóng mặt hay có diễn biến bất thường trong buổi khám.',
                    'Trained to provide initial first aid if seniors feel fatigued, dizzy, or experience health changes during visits.'
                  )}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6633B4] text-xl mt-0.5 shrink-0">family_restroom</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">
                  {tr('Gia đình luôn nắm được tình hình:', 'Family Always Kept Informed:')}
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {tr(
                    'Được cập nhật trong buổi khám và nhận báo cáo đầy đủ sau khi khám, dù con đang ở tỉnh khác hay ở nước ngoài.',
                    'Real-time updates during the appointment and complete clinical summary reports, giving families peace of mind anywhere.'
                  )}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#FD711A] text-xl mt-0.5 shrink-0">price_check</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">
                  {tr('Giá minh bạch theo giờ:', 'Transparent Hourly Pricing:')}
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {tr(
                    'Biết trước chi phí dịch vụ. Tiền xe tính theo thực tế, không phụ phí ẩn.',
                    'Know service fees upfront. Transportation costs billed at actual receipts with zero hidden surcharges.'
                  )}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#6633B4] text-xl mt-0.5 shrink-0">volunteer_activism</span>
              <div>
                <strong className="text-slate-900 block text-sm sm:text-base mb-1">
                  {tr('Kiên nhẫn và tôn trọng ông bà:', 'Patience and Utmost Respect:')}
                </strong>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {tr(
                    'Đi theo nhịp của ông bà, giải thích rõ ràng, nhẹ nhàng.',
                    'Moving at the senior\'s pace, listening patiently, and explaining every doctor instruction with gentle care.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Câu hỏi thường gặp */}
        <section className="py-8 border-b border-slate-100" id="faq">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6633B4] mb-5 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
            {tr('Câu hỏi thường gặp', 'Frequently Asked Questions')}
          </h2>

          <div className="space-y-4">
            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200" open>
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '1. Dịch vụ đưa người cao tuổi đi khám của ANTCARE giá bao nhiêu?',
                    '1. How much does ANTCARE medical escort service cost?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Giá từ 390.000đ cho buổi khám dưới 3 giờ, 490.000đ dưới 4 giờ, 690.000đ dưới 6 giờ và 790.000đ dưới 8 giờ. Vượt giờ tính thêm 100.000đ mỗi giờ. Giá chưa gồm chi phí phương tiện đi lại, viện phí, xét nghiệm và thuốc.',
                  'Prices start from 390,000 VND for visits up to 3 hours, 490,000 VND up to 4 hours, 690,000 VND up to 6 hours, and 790,000 VND up to 8 hours. Overtime is 100,000 VND/hour. Excludes travel fares, hospital fees, lab tests, and medicines.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200" open>
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '2. Thời gian dịch vụ được tính từ lúc nào?',
                    '2. From when is service time calculated?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà cho đến khi đưa ông bà về nhà.',
                  'Time is calculated from when the Medical Assistant begins pickup until returning seniors safely home.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200" open>
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '3. Chi phí đi lại được tính thế nào?',
                    '3. How are transportation expenses handled?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Chi phí phương tiện không nằm trong giá gói. Gia đình chi trả theo thực tế phát sinh. ANTCARE tư vấn và kết nối phương tiện phù hợp với tình trạng sức khỏe của ông bà và với ngân sách của gia đình.',
                  'Transportation is not included in package price. Families cover actual costs incurred. ANTCARE coordinates suitable vehicle choices according to the senior\'s health and family budget.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '4. Ông bà ở tỉnh ngoài Hà Nội có dùng được dịch vụ không?',
                    '4. Can seniors living outside Hanoi use this service?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Có. ANTCARE nhận ông bà tại các tỉnh miền Bắc và kết nối xe tiện chuyến hoặc loại xe phù hợp để đưa ông bà lên Hà Nội khám rồi về nhà.',
                  'Yes. ANTCARE supports seniors across Northern provinces and coordinates direct shuttles or suitable private vehicles to bring parents to Hanoi and return home the same day.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '5. Con đang ở nước ngoài có đặt dịch vụ cho bố mẹ được không?',
                    '5. Can adult children living overseas book for parents?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Được. Gia đình đặt lịch qua điện thoại hoặc Zalo, thanh toán trước bằng chuyển khoản (ANTCARE nhận thanh toán từ nước ngoài) và nhận báo cáo sau buổi khám.',
                  'Yes. You can book via phone or Zalo, pay online via international bank transfer, and receive complete visit reports afterwards.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '6. Cần đặt lịch trước bao lâu?',
                    '6. How far in advance should I book?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Gia đình vui lòng đặt lịch trước ít nhất 1 ngày để ANTCARE sắp xếp Kiến Y tế và phương tiện phù hợp.',
                  'Please book at least 1 day in advance so ANTCARE can prepare dedicated Medical Assistants and suitable transport arrangements.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '7. Kiến Y tế có chuyên môn gì?',
                    '7. What qualifications do Medical Assistants possess?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Kiến Y tế có nền tảng điều dưỡng, kinh nghiệm chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Họ được đào tạo về quy trình khám chữa bệnh và thủ tục bảo hiểm y tế tại bệnh viện.',
                  'Medical Assistants hold nursing backgrounds, geriatric care experience, and certified first-aid training. They are well-versed in hospital protocols and health insurance workflows.'
                )}
              </p>
            </details>

            <details className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open:border-purple-200">
              <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                <span>
                  {tr(
                    '8. Buổi khám kéo dài hơn gói đã chọn thì sao?',
                    '8. What happens if the hospital visit runs longer than booked?'
                  )}
                </span>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform text-xl">expand_more</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                {tr(
                  'Kiến Y tế vẫn ở lại cùng ông bà đến khi xong. Thời gian vượt được tính thêm 100.000đ mỗi giờ, và gia đình được báo trước khi sắp vượt giờ.',
                  'The Medical Assistant stays with your parents until all procedures finish. Overtime is billed at 100,000 VND/hour, and families are informed in advance before exceeding the hours.'
                )}
              </p>
            </details>
          </div>
        </section>

        {/* Section 8: Form đặt lịch cuối trang */}
        <section className="py-8" id="dat-lich">
          <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-200/80 shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FD711A]/10 text-[#FD711A] text-xs font-bold uppercase tracking-wider mb-2">
                {tr('Đăng ký dịch vụ', 'Service Booking')}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2A1B3D] mb-2">
                {tr('Đặt lịch Kiến Y tế đồng hành đi khám', 'Book a Medical Companion for Hospital Visits')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {tr(
                  'Để lại thông tin, chuyên viên ANTCARE sẽ liên hệ tư vấn lộ trình và xác nhận gói trong vòng 15–30 phút.',
                  'Leave your details; an ANTCARE consultant will reach out to advise itineraries and confirm booking within 15–30 minutes.'
                )}
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
                  <span>
                    <strong>{tr('Đăng ký thành công!', 'Booking Successful!')}</strong>{' '}
                    {tr(
                      'Chuyên viên Kiến Y tế ANTCARE sẽ liên hệ lại quý khách ngay ạ.',
                      'An ANTCARE Medical Assistant will reach out to you shortly.'
                    )}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {tr('Họ tên người đặt', 'Full Name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={tr('Ví dụ: Nguyễn Văn An', 'e.g., John Smith')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {tr('Số điện thoại / Zalo', 'Phone Number / Zalo')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={tr('Ví dụ: 0912 345 678', 'e.g., +84 912 345 678')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {tr('Quốc gia đang ở', 'Country of Residence')}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder={tr('Việt Nam', 'Vietnam')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {tr('Tỉnh/thành của ông bà', "Senior's City / Province")}
                  </label>
                  <input
                    type="text"
                    name="seniorLocation"
                    value={formData.seniorLocation}
                    onChange={handleChange}
                    placeholder={tr('Ví dụ: Hà Nội, Hưng Yên, Bắc Ninh...', 'e.g., Hanoi, Bac Ninh, Hung Yen...')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {tr('Bệnh viện muốn khám', 'Preferred Hospital')}
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    placeholder={tr('Ví dụ: Bạch Mai, ĐH Y, Lão Khoa...', 'e.g., Bach Mai, Hanoi Medical Univ, Geriatric...')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 text-xs sm:text-sm outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {tr('Ngày khám (chỉ chọn từ ngày mai trở đi)', 'Visit Date (strictly from tomorrow onwards)')}
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
                  {tr('Ghi chú tình trạng sức khỏe của ông bà', "Senior's Health Condition Notes")}
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={tr(
                    'Ví dụ: Ông đi lại hơi yếu cần xe lăn; bà có tiền sử tiểu đường và huyết áp cao...',
                    'e.g., Needs wheelchair support; history of diabetes and hypertension...'
                  )}
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
                    {tr('Đang gửi thông tin...', 'Submitting booking...')}
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">send</span>
                    {tr('Xác nhận đặt lịch Kiến Y tế', 'Confirm Medical Escort Booking')}
                  </>
                )}
              </button>
            </form>

            {/* CTA Position 3: Cuối trang */}
            <div className="mt-8 pt-6 border-t border-purple-200/60 flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="text-xs sm:text-sm text-slate-600 w-full mb-1">
                {tr('Hoặc liên hệ trực tiếp đường dây nóng hỗ trợ 24/7:', 'Or reach our 24/7 emergency support hotline directly:')}
              </span>
              <a
                href="tel:0969032360"
                onClick={() => trackEvent('click_hotline', { location: 'escort_bottom' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-xs sm:text-sm shadow transition-all"
              >
                <span className="material-symbols-outlined text-base">call</span>
                {tr('Gọi 0969 032 360', 'Call 0969 032 360')}
              </a>
              <a
                href="https://zalo.me/0969032360"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_zalo', { location: 'escort_bottom' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-xs sm:text-sm shadow transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                {tr('Nhắn Zalo', 'Chat on Zalo')}
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
          {tr('Gọi 0969 032 360', 'Call 0969 032 360')}
        </a>
        <a
          href="https://zalo.me/0969032360"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('click_zalo', { location: 'escort_mobile_bar' })}
          className="flex-1 py-2.5 px-3 rounded-full bg-[#6633B4] active:bg-[#532896] text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 shadow"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          {tr('Nhắn Zalo', 'Chat on Zalo')}
        </a>
      </div>
    </div>
  );
};

export default MedicalEscortService;
