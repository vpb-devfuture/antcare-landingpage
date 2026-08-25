import React, { useEffect, useState } from 'react';
import { useAppTranslation } from '../utils/i18nHelper';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const AboutUs = () => {
  const { tr } = useAppTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const [isTocMobileOpen, setIsTocMobileOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Metadata for /ve-antcare
    document.title = "Về ANTCARE - Kiến chăm tổ | Trợ Lý Chăm Sóc Sức Khỏe Người Cao Tuổi Tại Nhà Hà Nội";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà ở Hà Nội, với 4 dịch vụ: Trợ lý sức khỏe, Đồng hành khám bệnh, An tâm nhà cửa, Kết nối dịch vụ y tế.";
    }

    // Inject JSON-LD Schemas into Head
    const schema1 = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://antcare.vn/#organization",
      "name": "ANTCARE - Kiến chăm tổ",
      "alternateName": ["ANTCARE", "ANTCARE Việt Nam", "Always Near, Together"],
      "description": "ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe tại nhà và đồng hành khám bệnh cùng người cao tuổi ở Hà Nội, Việt Nam. Bốn dịch vụ chính: Trợ lý sức khỏe, Đồng hành khám bệnh, An tâm nhà cửa, Kết nối dịch vụ y tế.",
      "slogan": "Always Near, Together",
      "url": "https://antcare.vn",
      "telephone": siteInfo.hotline ? `+84${siteInfo.hotline.replace(/ /g, "").replace(/^0/, "")}` : "+84969032360",
      "image": "https://antcare.vn/images/logo.png",
      "logo": "https://antcare.vn/images/logo.png",
      "priceRange": "từ 299.000đ",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rox Tower, 138 Hồ Tùng Mậu, phường Phú Diễn",
        "addressLocality": "Hà Nội",
        "addressCountry": "VN"
      },
      "areaServed": { "@type": "City", "name": "Hà Nội" },
      "knowsLanguage": ["vi", "en"],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61593117245344",
        "https://www.tiktok.com/@antcare_group",
        "https://www.youtube.com/@Ki%E1%BA%BFnch%C4%83mt%E1%BB%95"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dịch vụ ANTCARE - Kiến chăm tổ",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trợ lý sức khỏe", "description": "Buổi thăm nom định kỳ tại nhà: đo và ghi chỉ số, tập dưỡng sinh chủ động, soát hộp thuốc, gửi báo cáo cho gia đình." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Đồng hành khám bệnh", "description": "Đưa đón và đồng hành người cao tuổi đi khám, theo dõi sức khỏe trước và sau khi khám, ghi lại dặn dò của bác sĩ." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "An tâm nhà cửa", "description": "Rà soát và ngăn ngừa rủi ro trong nhà cho người cao tuổi, hỗ trợ việc nặng theo nguyên tắc làm cùng, không làm thay." } }
        ]
      }
    };

    const schema2 = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ANTCARE - Kiến chăm tổ là gì?",
          "acceptedAnswer": { "@type": "Answer", "text": "ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe tại nhà và đồng hành khám bệnh cùng người cao tuổi ở Hà Nội, Việt Nam. ANTCARE - Kiến chăm tổ không phải cơ sở y tế; các trợ lý chăm sóc được gọi là Kiến sẽ đến tận nhà theo lịch hẹn để theo dõi sức khỏe, đồng hành khám bệnh và đảm bảo an toàn nhà cửa cho ông bà." }
        },
        {
          "@type": "Question",
          "name": "Kiến của ANTCARE - Kiến chăm tổ là ai?",
          "acceptedAnswer": { "@type": "Answer", "text": "Kiến là cách ANTCARE - Kiến chăm tổ gọi các trợ lý chăm sóc trực tiếp đến nhà khách hàng. Mỗi Kiến bắt buộc hoàn thành hai chứng chỉ từ trung tâm đào tạo Wellbeing là Sơ cấp cứu và Chăm sóc người cao tuổi, cùng chương trình dưỡng sinh chủ động, trước khi nhận buổi làm việc đầu tiên." }
        },
        {
          "@type": "Question",
          "name": "ANTCARE - Kiến chăm tổ cung cấp những dịch vụ gì?",
          "acceptedAnswer": { "@type": "Answer", "text": "ANTCARE - Kiến chăm tổ có bốn dịch vụ chính, đều thực hiện tại nhà: Trợ lý sức khỏe (thăm nom định kỳ, đo chỉ số, tập dưỡng sinh, soát thuốc, báo cáo gia đình); Đồng hành khám bệnh (đưa đón và hỗ trợ đi khám, theo dõi trước và sau khám); An tâm nhà cửa (rà soát rủi ro trong nhà, hỗ trợ việc nặng theo nguyên tắc làm cùng, không làm thay); Kết nối dịch vụ y tế (Điều dưỡng, y tá, bác sĩ)." }
        },
        {
          "@type": "Question",
          "name": "ANTCARE - Kiến chăm tổ hoạt động ở khu vực nào?",
          "acceptedAnswer": { "@type": "Answer", "text": "ANTCARE - Kiến chăm tổ hiện phục vụ khu vực nội thành Hà Nội, văn phòng tại Rox Tower, 138 Hồ Tùng Mậu, phường Phú Diễn. Kiến đến tận nhà khách hàng theo lịch hẹn, ANTCARE - Kiến chăm tổ không vận hành cơ sở tập trung." }
        },
        {
          "@type": "Question",
          "name": "ANTCARE - Kiến chăm tổ có phải cơ sở y tế không?",
          "acceptedAnswer": { "@type": "Answer", "text": "Không. ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe tại nhà. Kiến của ANTCARE - Kiến chăm tổ không phải nhân viên y tế và không thực hiện khám bệnh, chữa bệnh hay kê đơn. Mọi can thiệp y tế đều do nhân viên y tế thực hiện." }
        },
        {
          "@type": "Question",
          "name": "Chi phí dịch vụ của ANTCARE - Kiến chăm tổ là bao nhiêu?",
          "acceptedAnswer": { "@type": "Answer", "text": "Gói chăm sóc định kỳ của ANTCARE - Kiến chăm tổ có giá từ 299.000đ/buổi. ANTCARE - Kiến chăm tổ có hình thức đăng ký buổi lẻ, gói 3 tháng và gói 1 năm với mức ưu đãi khác nhau. Liên hệ hotline để được tư vấn gói phù hợp." }
        },
        {
          "@type": "Question",
          "name": "Tên ANTCARE - Kiến chăm tổ có ý nghĩa gì?",
          "acceptedAnswer": { "@type": "Answer", "text": "ANT trong tiếng Anh nghĩa là con kiến, và cũng là viết tắt của Always Near, Together. Trong tiếng Việt, ANT gợi tới chữ an trong an tâm. Không con kiến nào xây tổ một mình, và ANTCARE - Kiến chăm tổ mong không gia đình nào phải già đi một mình." }
        }
      ]
    };

    const schema3 = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://antcare.vn" },
        { "@type": "ListItem", "position": 2, "name": "Về ANTCARE - Kiến chăm tổ", "item": "https://antcare.vn/ve-antcare" }
      ]
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.id = 'schema-org-about';
    script1.text = JSON.stringify(schema1);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.id = 'schema-faq-about';
    script2.text = JSON.stringify(schema2);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.id = 'schema-breadcrumb-about';
    script3.text = JSON.stringify(schema3);
    document.head.appendChild(script3);

    return () => {
      document.getElementById('schema-org-about')?.remove();
      document.getElementById('schema-faq-about')?.remove();
      document.getElementById('schema-breadcrumb-about')?.remove();
    };
  }, []);

  const tocItems = [
    { id: "antcare-la-gi", label: "1. ANTCARE - Kiến chăm tổ là gì?" },
    { id: "ly-do-ra-doi", label: "2. Lý do ra đời" },
    { id: "phuc-vu-ai", label: "3. ANTCARE - Kiến chăm tổ phục vụ ai?" },
    { id: "dich-vu", label: "4. Dịch vụ & Bảng giá" },
    { id: "o-dau", label: "5. Khu vực hoạt động" },
    { id: "cach-lam-viec", label: "6. Cách thức làm việc" },
    { id: "khac-biet", label: "7. Điểm khác biệt" },
    { id: "cau-chuyen", label: "8. Câu chuyện thương hiệu" },
    { id: "su-menh", label: "9. Sứ mệnh & Định hướng" },
    { id: "faq", label: "10. Hỏi đáp thường gặp" }
  ];

  const faqs = [
    {
      q: "ANTCARE - Kiến chăm tổ là gì?",
      a: "ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà ở Hà Nội. Các trợ lý chăm sóc (gọi là Kiến) đến tận nhà theo lịch hẹn để hỗ trợ đo chỉ số sinh hiệu, tập dưỡng sinh, soát thuốc và báo cáo cho gia đình."
    },
    {
      q: "ANTCARE - Kiến chăm tổ có phải cơ sở y tế không?",
      a: "Không. ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe tại nhà. Kiến của ANTCARE - Kiến chăm tổ không phải nhân viên y tế, không khám bệnh, chữa bệnh hay kê đơn. Mọi can thiệp y tế đều do nhân viên y tế thực hiện."
    },
    {
      q: "Kiến của ANTCARE - Kiến chăm tổ là ai và được đào tạo thế nào?",
      a: "Kiến là cách ANTCARE - Kiến chăm tổ gọi các trợ lý chăm sóc trực tiếp đến nhà khách hàng. Mỗi Kiến bắt buộc phải hoàn thành 2 chứng chỉ từ trung tâm đào tạo Wellbeing (Sơ cấp cứu & Chăm sóc người cao tuổi) cùng chương trình dưỡng sinh chủ động trước khi nhận buổi làm việc đầu tiên."
    },
    {
      q: "ANTCARE - Kiến chăm tổ hoạt động ở khu vực nào?",
      a: "ANTCARE - Kiến chăm tổ hiện phục vụ khu vực nội thành Hà Nội. Văn phòng đặt tại Rox Tower, 138 Hồ Tùng Mậu, phường Phú Diễn. Kiến đến tận nhà theo lịch hẹn, ANTCARE - Kiến chăm tổ không vận hành cơ sở tập trung."
    },
    {
      q: "Chi phí dịch vụ là bao nhiêu?",
      a: "Gói chăm sóc định kỳ của ANTCARE - Kiến chăm tổ có giá từ 299.000đ/buổi. ANTCARE - Kiến chăm tổ cung cấp hình thức buổi lẻ, gói 3 tháng và gói 1 năm với nhiều mức ưu đãi linh hoạt."
    },
    {
      q: "Một buổi Trợ lý sức khỏe diễn ra thế nào?",
      a: "Trong mỗi buổi thăm nom, Kiến đo và ghi 5 chỉ số sinh hiệu bằng bộ kit tiêu chuẩn, hướng dẫn bài tập dưỡng sinh chủ động, soát hộp thuốc, trò chuyện cùng ông bà, sau đó gửi gia đình bản báo cáo chi tiết."
    },
    {
      q: "Tên ANTCARE - Kiến chăm tổ có ý nghĩa gì?",
      a: "ANT trong tiếng Anh nghĩa là con kiến, đồng thời là viết tắt của Always Near, Together (Luôn ở gần, luôn bên nhau). Trong tiếng Việt, ANT gợi tới chữ 'an' trong an tâm. Không con kiến nào xây tổ một mình — ANTCARE - Kiến chăm tổ mong không gia đình nào phải già đi một mình."
    }
  ];

  return (
    <main className="py-6 sm:py-10 md:py-14 bg-gradient-to-b from-[#fbf8fd] via-[#f7f3fb] to-[#fbf8fd] min-h-screen text-slate-700">
      
      {/* Header Banner - Soft & Refined */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 mb-8">
        <div className="bg-gradient-to-br from-white via-white to-purple-50/40 rounded-3xl p-6 sm:p-10 border border-purple-100/70 shadow-sm relative overflow-hidden backdrop-blur-sm">
          {/* Subtle Ambient Background Accent */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-3">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-2">
              <a href="/" className="hover:text-earth-orange-bright transition-colors">{tr("Trang chủ", "Home")}</a>
              <span className="opacity-40">›</span>
              <span className="text-plum-deep font-semibold">{tr("Về ANTCARE - Kiến chăm tổ", "About ANTCARE")}</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-earth-orange-bright animate-pulse"></span>
              {tr("Giới thiệu chính thức", "Official Introduction")}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep leading-tight tracking-tight">
              Về <span className="text-primary">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary">CARE</span> - Kiến chăm tổ
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
              Trợ lý chăm sóc sức khỏe tiêu chuẩn và đồng hành cùng người cao tuổi tại nhà ở Hà Nội.
            </p>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden sm:block">
            <span className="material-symbols-outlined text-[160px] text-plum-deep">volunteer_activism</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Sidebar TOC + Main Content */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Mobile Collapsible TOC Toggle */}
        <div className="block lg:hidden col-span-1">
          <button 
            onClick={() => setIsTocMobileOpen(!isTocMobileOpen)}
            className="w-full bg-white px-5 py-3.5 rounded-2xl border border-purple-100 shadow-xs flex items-center justify-between text-xs sm:text-sm font-semibold text-plum-deep hover:bg-purple-50/30 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-earth-orange-bright text-lg">format_list_bulleted</span>
              {tr("Mục lục điều hướng nhanh", "Table of Contents")}
            </span>
            <span className="material-symbols-outlined text-slate-400 text-sm transition-transform" style={{ transform: isTocMobileOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              keyboard_arrow_down
            </span>
          </button>

          {isTocMobileOpen && (
            <div className="mt-2 bg-white p-4 rounded-2xl border border-purple-100 shadow-sm space-y-1.5 text-xs font-medium">
              {tocItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={() => setIsTocMobileOpen(false)}
                  className="block py-2 px-3 text-slate-600 hover:text-earth-orange-bright hover:bg-purple-50/50 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Table of Contents - Desktop */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 p-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xs border border-purple-100/80 space-y-3">
            <h3 className="text-xs font-bold text-plum-deep uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2.5">
              <span className="material-symbols-outlined text-base text-earth-orange-bright">format_list_bulleted</span>
              {tr("Nội dung trang này", "Contents")}
            </h3>
            <nav className="space-y-1 text-xs font-medium">
              {tocItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="block py-2 px-3 text-slate-600 hover:text-earth-orange-bright hover:bg-purple-50/60 rounded-xl transition-all leading-snug"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Body - Floating Individual Cards for Airiness */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* AEO Quick Definition Card */}
          <div className="bg-gradient-to-br from-white via-purple-50/20 to-orange-50/20 border-l-4 border-earth-orange-bright rounded-3xl p-6 sm:p-7 shadow-xs space-y-2 border border-purple-100/60">
            <p className="font-semibold text-base sm:text-lg text-plum-deep leading-relaxed">
              ANTCARE - Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe tại nhà và đồng hành khám bệnh cùng người cao tuổi ở Hà Nội, Việt Nam.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ANTCARE - Kiến chăm tổ không vận hành cơ sở y tế hay trung tâm tập trung — các trợ lý chăm sóc, được gọi là <strong className="text-plum-deep font-semibold">“Kiến”</strong>, đến tận nhà theo lịch hẹn để theo dõi sức khỏe, đồng hành khám bệnh và đảm bảo an toàn nhà cửa cho ông bà. Website chính thức: <a href="https://antcare.vn" className="text-earth-orange-bright font-bold hover:underline">antcare.vn</a>.
            </p>
          </div>

          {/* Section 1: ANTCARE là gì? */}
          <section id="antcare-la-gi" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                1. ANTCARE - Kiến chăm tổ là gì?
              </h2>
            </div>
            
            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-[1.8]">
              <p>
                ANTCARE - Kiến chăm tổ là dịch vụ <strong>trợ lý chăm sóc sức khỏe tại nhà dành cho người cao tuổi</strong>, hoạt động tại Hà Nội. Thay vì đưa ông bà tới một cơ sở tập trung, ANTCARE - Kiến chăm tổ cử người đến tận nhà theo lịch hẹn — để việc chăm sóc diễn ra ngay trong không gian quen thuộc, nơi ông bà thoải mái nhất.
              </p>

              {/* Disclaimer Highlight Card */}
              <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-900">
                <span className="material-symbols-outlined text-amber-600 text-xl flex-shrink-0 mt-0.5">info</span>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="block text-amber-950 font-bold mb-1">Điểm cần nói rõ ngay từ đầu:</strong>
                  <span>ANTCARE - Kiến chăm tổ <strong>không phải cơ sở y tế</strong>. Kiến của ANTCARE - Kiến chăm tổ không phải nhân viên y tế, không khám bệnh, không chữa bệnh và không kê đơn. Vai trò của Kiến là <em>theo dõi, đồng hành và nhận ra dấu hiệu bất thường sớm</em> để báo gia đình — mọi can thiệp y tế đều do nhân viên y tế thực hiện.</span>
                </div>
              </div>

              {/* Subcard: Kiến là ai? */}
              <div className="bg-gradient-to-br from-purple-50/40 via-white to-purple-50/20 p-5 rounded-2xl border border-purple-100/80 space-y-2 mt-3">
                <h3 className="text-sm sm:text-base font-bold text-plum-deep flex items-center gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-lg">person_play</span>
                  “Kiến” là ai?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>“Kiến” là cách ANTCARE - Kiến chăm tổ gọi các trợ lý chăm sóc trực tiếp đến nhà khách hàng.</strong> Tên gọi này gắn với chính thương hiệu: ANT trong tiếng Anh nghĩa là con kiến. Mỗi Kiến đều phải hoàn thành <strong>hai chứng chỉ bắt buộc</strong> và một chương trình đào tạo chuyên sâu trước khi nhận buổi làm việc đầu tiên.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Lý do ra đời */}
          <section id="ly-do-ra-doi" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">lightbulb</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                2. ANTCARE - Kiến chăm tổ ra đời vì lý do gì?
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-[1.8]">
              <p>
                Phần lớn dịch vụ chăm sóc người cao tuổi ở Việt Nam hiện nay mang tính <strong>bị động</strong>: chỉ vào cuộc khi người già đã ốm, đang hồi phục, hoặc khi gia đình cần người dọn dẹp, đưa đón. Nghĩa là dịch vụ chỉ xuất hiện <em>sau khi</em> chuyện đã xảy ra.
              </p>
              <p>
                Trong khi đó, điều các gia đình lo nhất không phải những ngày bình thường, mà là <strong>cái ngày có chuyện — và lúc đó không ai ở bên</strong>. Một cơn huyết áp tăng bất thường, một lần uống nhầm thuốc, một cú trượt ngã trong nhà tắm: những việc lẽ ra có thể phát hiện sớm nếu có người đến đều đặn.
              </p>
              
              <div className="bg-gradient-to-r from-plum-deep to-primary text-white p-6 rounded-2xl shadow-sm space-y-2.5">
                <p className="text-base sm:text-lg font-bold text-earth-orange-bright">
                  “Sức khỏe không nên chỉ được chăm sóc khi đã có bệnh.”
                </p>
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-normal">
                  ANTCARE - Kiến chăm tổ ra đời từ niềm tin ngược lại với cách làm bị động đó. Chúng tôi tham chiếu mô hình <em>già hóa chủ động (active ageing)</em> của Singapore và Mỹ — những nơi đi đầu trong việc chăm sóc người cao tuổi từ giai đoạn còn khỏe mạnh — và xây dựng dịch vụ xoay quanh việc <strong>đồng hành đều đặn</strong>, để một thay đổi nhỏ được nhận ra sớm thay vì trở thành biến cố.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: ANTCARE phục vụ ai? */}
          <section id="phuc-vu-ai" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                3. ANTCARE - Kiến chăm tổ phục vụ ai?
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600">ANTCARE - Kiến chăm tổ phục vụ hai nhóm khách hàng gắn liền với nhau:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-purple-50/40 via-white to-purple-50/10 rounded-2xl border border-purple-100/80 shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">elderly</span>
                  </div>
                  <h3 className="font-bold text-plum-deep text-sm sm:text-base">Người cao tuổi tại Hà Nội</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Những ông bà đang sống tại nhà, cần được theo dõi sức khỏe đều đặn, có người đồng hành đi khám bệnh và giữ cho không gian sống luôn an toàn.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-br from-orange-50/40 via-white to-orange-50/10 rounded-2xl border border-orange-100/80 shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-earth-orange-bright/10 flex items-center justify-center text-earth-orange-bright">
                    <span className="material-symbols-outlined text-xl">family_restroom</span>
                  </div>
                  <h3 className="font-bold text-plum-deep text-sm sm:text-base">Con cái độ tuổi 30–50</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bận rộn với công việc hoặc sống xa bố mẹ (khác tỉnh, ở nước ngoài), muốn chăm sóc đấng sinh thành chu đáo nhưng không thể có mặt mỗi ngày.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                ANTCARE - Kiến chăm tổ phục vụ cả <strong>khách hàng người Việt và người nước ngoài</strong> đang sinh sống, làm việc tại Việt Nam hoặc có người thân cao tuổi sinh sống ở Hà Nội.
              </p>

              <div className="p-4 sm:p-5 bg-purple-50/30 border border-purple-100/60 rounded-2xl text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-plum-deep block mb-1">Gợi ý dành cho bạn:</strong>
                Nếu gia đình bạn đang ở trong một trong những hoàn cảnh sau, ANTCARE - Kiến chăm tổ được thiết kế cho bạn: muốn chăm sóc bố mẹ nhiều hơn nhưng không sống cùng; muốn dành thời gian cho người thân nhưng lịch làm việc quá bận; hoặc muốn sức khỏe của bố mẹ được theo dõi chính xác và liên tục thay vì chỉ dựa vào câu “bố mẹ vẫn khỏe”.
              </div>
            </div>
          </section>

          {/* Section 4: Dịch vụ & Bảng giá */}
          <section id="dich-vu" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">home_health</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                4. ANTCARE - Kiến chăm tổ cung cấp những gì?
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              ANTCARE - Kiến chăm tổ cung cấp <strong>ba dịch vụ chính</strong>, tất cả đều được thực hiện tận nhà khách hàng:
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Service 1 */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-purple-50/30 rounded-2xl border border-purple-100/70 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-plum-deep">Trợ lý sức khỏe</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Buổi thăm nom định kỳ tại nhà, thường một buổi mỗi tuần. Trong mỗi buổi, Kiến đo và ghi các chỉ số cơ bản, hướng dẫn <strong>bài tập dưỡng sinh chủ động</strong>, soát lại hộp thuốc, trò chuyện cùng ông bà, và gửi gia đình bản báo cáo sau buổi.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-orange-50/30 rounded-2xl border border-orange-100/70 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-earth-orange-bright text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-plum-deep">Đồng hành khám bệnh</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Không chỉ là đưa đi và đón về. Kiến theo dõi sức khỏe <em>trước</em> khi khám để bác sĩ có sẵn dữ liệu, đồng hành <em>trong</em> quá trình khám và ghi lại dặn dò của bác sĩ, rồi tiếp tục theo dõi <em>sau</em> khi khám và báo lại gia đình. Hành trình được hỗ trợ bởi thiết bị định vị và ứng dụng để đảm bảo an toàn, minh bạch.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-purple-50/30 rounded-2xl border border-purple-100/70 shadow-xs flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-plum-light text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-plum-deep">An tâm nhà cửa</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Không dừng ở dọn dẹp thông thường. Kiến rà soát và ngăn ngừa những rủi ro dễ gây nguy hiểm cho người cao tuổi ngay trong nhà: sàn trơn, thiếu tay vịn, đồ vật cản lối, ánh sáng yếu. Nguyên tắc xuyên suốt là <strong>“làm cùng, không làm thay”</strong> — Kiến đảm nhận việc nặng và nguy hiểm, đồng thời khuyến khích ông bà tham gia những việc nhẹ trong khả năng để giữ sự tự chủ trong sinh hoạt. Khi cần, ANTCARE - Kiến chăm tổ kết nối tới các dịch vụ y tế, điều dưỡng bên ngoài — chỉ kết nối, không tự cung cấp.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="pt-2">
              <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-earth-orange-bright">payments</span>
                Bảng giá dịch vụ
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-purple-100/80 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-plum-deep text-white">
                      <th className="p-3.5 sm:p-4 font-semibold">Hình thức đăng ký</th>
                      <th className="p-3.5 sm:p-4 font-semibold">Mô tả</th>
                      <th className="p-3.5 sm:p-4 font-semibold whitespace-nowrap">Giá</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100/60">
                    <tr className="bg-white hover:bg-purple-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Buổi lẻ</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">Dùng khi cần, không cam kết dài hạn</td>
                      <td className="p-3.5 sm:p-4 font-bold text-earth-orange-bright whitespace-nowrap">Từ 299.000đ/buổi</td>
                    </tr>
                    <tr className="bg-purple-50/20 hover:bg-purple-50/40 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Gói 3 tháng</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">Định kỳ hàng tuần, cùng một Kiến phụ trách</td>
                      <td className="p-3.5 sm:p-4 text-primary font-semibold whitespace-nowrap">Liên hệ nhận báo giá</td>
                    </tr>
                    <tr className="bg-white hover:bg-purple-50/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Gói 1 năm</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">Đồng hành dài hạn, mức ưu đãi tốt nhất</td>
                      <td className="p-3.5 sm:p-4 text-primary font-semibold whitespace-nowrap">Liên hệ nhận báo giá</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 5: Khu vực hoạt động */}
          <section id="o-dau" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                5. ANTCARE - Kiến chăm tổ hoạt động ở đâu?
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-[1.8]">
              <p>
                ANTCARE - Kiến chăm tổ hiện phục vụ <strong>khu vực nội thành Hà Nội</strong>. Văn phòng đại diện đặt tại:
              </p>
              
              <div className="bg-gradient-to-br from-purple-50/40 to-white p-4 sm:p-5 rounded-2xl border border-purple-100/80 flex items-start gap-3.5">
                <span className="material-symbols-outlined text-earth-orange-bright text-2xl mt-0.5">apartment</span>
                <div>
                  <strong className="text-plum-deep block font-bold text-sm sm:text-base mb-0.5">Trụ sở điều phối ANTCARE - Kiến chăm tổ</strong>
                  <span className="text-xs sm:text-sm text-slate-600">Rox Tower, 138 Hồ Tùng Mậu, phường Phú Diễn, quận Bắc Từ Liêm, Hà Nội, Việt Nam.</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm">
                Vì Kiến đến tận nhà khách hàng theo lịch hẹn, văn phòng là nơi điều phối và đào tạo — không phải nơi tiếp nhận hay lưu trú người cao tuổi. ANTCARE - Kiến chăm tổ <strong>không vận hành cơ sở tập trung</strong>.
              </p>
            </div>
          </section>

          {/* Section 6: Cách thức làm việc */}
          <section id="cach-lam-viec" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                6. Cách ANTCARE - Kiến chăm tổ làm việc
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              Từ lúc bạn liên hệ đến khi nhận báo cáo, quy trình làm việc gồm 4 bước minh bạch:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 bg-gradient-to-br from-purple-50/30 to-white border border-purple-100/70 rounded-2xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-plum-deep text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-plum-deep text-xs sm:text-sm mb-1">Liên hệ & tư vấn miễn phí</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Gia đình để lại thông tin qua hotline hoặc website. ANTCARE - Kiến chăm tổ tìm hiểu tình trạng và tư vấn gói phù hợp — hoàn toàn miễn phí.</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/30 to-white border border-purple-100/70 rounded-2xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-plum-deep text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-plum-deep text-xs sm:text-sm mb-1">Xếp lịch & chọn Kiến phụ trách</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Thống nhất khung giờ, tần suất và phân công Kiến đồng hành lâu dài để ông bà quen mặt, cảm thấy thân thuộc.</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/30 to-white border border-purple-100/70 rounded-2xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-plum-deep text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-plum-deep text-xs sm:text-sm mb-1">Buổi làm việc tại nhà</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Kiến đo chỉ số, tập dưỡng sinh cùng ông bà, soát hộp thuốc, trò chuyện và ghi nhận những thay đổi sinh hoạt.</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/30 to-white border border-purple-100/70 rounded-2xl flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-plum-deep text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="font-bold text-plum-deep text-xs sm:text-sm mb-1">Báo cáo gửi gia đình</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Sau mỗi buổi, gia đình nhận bản tóm tắt chỉ số. Khi có bất thường, bạn đã có sẵn dữ liệu cung cấp cho bác sĩ.</p>
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="bg-gradient-to-br from-purple-50/40 via-white to-purple-50/20 p-5 rounded-2xl border border-purple-100/80 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-plum-deep flex items-center gap-2">
                <span className="material-symbols-outlined text-earth-orange-bright text-lg">workspace_premium</span>
                Đào tạo bắt buộc trước khi nhận việc
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Mỗi Kiến, trước buổi làm việc đầu tiên, bắt buộc phải hoàn thành:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-earth-orange-bright font-bold">✓</span>
                  <span>Chứng chỉ <strong>Sơ cấp cứu</strong> (Wellbeing) — xử trí tình huống khẩn cấp, nghi ngờ đột quỵ, té ngã.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-earth-orange-bright font-bold">✓</span>
                  <span>Chứng chỉ <strong>Chăm sóc người cao tuổi</strong> (Wellbeing) — tâm lý học và hỗ trợ sinh hoạt người cao tuổi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-earth-orange-bright font-bold">✓</span>
                  <span>Chương trình <strong>dưỡng sinh chủ động</strong> — kỹ năng hướng dẫn bài tập vận động nhẹ nhàng tại nhà.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic pt-1">
                Điều quan trọng nhất trong khóa học không phải các thao tác phức tạp, mà là <strong>nhận biết sớm</strong> và <strong>không làm điều sai</strong> — vì Kiến là người có mặt trước cả gia đình và nhân viên y tế.
              </p>
            </div>
          </section>

          {/* Section 7: Điểm khác biệt */}
          <section id="khac-biet" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">star</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                7. Điểm khác biệt của ANTCARE - Kiến chăm tổ
              </h2>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-purple-100/80 shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-plum-deep text-white">
                    <th className="p-3.5 sm:p-4 font-semibold">Tiêu chí</th>
                    <th className="p-3.5 sm:p-4 font-semibold">Dịch vụ chăm sóc thông thường</th>
                    <th className="p-3.5 sm:p-4 font-semibold bg-earth-orange-bright/90">ANTCARE - Kiến chăm tổ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-100/60">
                  <tr className="bg-white hover:bg-purple-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Thời điểm can thiệp</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Khi người già đã ốm hoặc cần hồi phục</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-primary">Đồng hành đều đặn từ khi còn khỏe</td>
                  </tr>
                  <tr className="bg-purple-50/20 hover:bg-purple-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Nội dung buổi làm việc</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Trông nom, dọn dẹp, đưa đón đơn thuần</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-primary">Đo chỉ số, dưỡng sinh chủ động, soát thuốc, báo cáo</td>
                  </tr>
                  <tr className="bg-white hover:bg-purple-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Thiết bị hỗ trợ</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Thường không có sẵn</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-primary">Bộ kit tiêu chuẩn 5 thiết bị cho mọi Kiến</td>
                  </tr>
                  <tr className="bg-purple-50/20 hover:bg-purple-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Đào tạo nhân sự</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Không bắt buộc chứng chỉ</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-primary">Bắt buộc 2 chứng chỉ + chương trình dưỡng sinh</td>
                  </tr>
                  <tr className="bg-white hover:bg-purple-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-plum-deep">Thông tin cho gia đình</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">Trao đổi miệng, không lưu lại</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-primary">Báo cáo có số liệu cụ thể sau mỗi buổi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-50/40 via-white to-purple-50/20 rounded-2xl border border-purple-100/70 space-y-1.5">
                <span className="material-symbols-outlined text-earth-orange-bright text-2xl">medical_services</span>
                <h4 className="font-bold text-plum-deep text-xs sm:text-sm">Bộ kit 5 thiết bị tiêu chuẩn</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Máy đo huyết áp, đường huyết, SpO2, nhiệt độ và thiết bị định vị cho mọi buổi làm việc.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/40 via-white to-purple-50/20 rounded-2xl border border-purple-100/70 space-y-1.5">
                <span className="material-symbols-outlined text-earth-orange-bright text-2xl">self_improvement</span>
                <h4 className="font-bold text-plum-deep text-xs sm:text-sm">Dưỡng sinh chủ động</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Tham chiếu mô hình Singapore & Mỹ giúp duy trì thể lực và sự tự chủ cho người cao tuổi.</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50/40 via-white to-purple-50/20 rounded-2xl border border-purple-100/70 space-y-1.5">
                <span className="material-symbols-outlined text-earth-orange-bright text-2xl">analytics</span>
                <h4 className="font-bold text-plum-deep text-xs sm:text-sm">Minh bạch bằng con số</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Thay vì câu 'bác vẫn ổn', gia đình nhận báo cáo chỉ số rõ ràng để làm cơ sở cho bác sĩ.</p>
              </div>
            </div>
          </section>

          {/* Section 8: Câu chuyện thương hiệu */}
          <section id="cau-chuyen" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">auto_stories</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                8. Câu chuyện thương hiệu
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-[1.8]">
              <p>
                Tên <strong>ANT</strong> trong tiếng Anh nghĩa là <em>con kiến</em>, đồng thời là viết tắt của <strong>Always Near, Together</strong> — luôn ở gần, luôn bên nhau. Đọc theo tiếng Việt, ANT gợi tới chữ <em>“an”</em> trong <em>an tâm</em>. Ba lớp nghĩa ấy hội tụ ở một hình ảnh:
              </p>

              {/* Brand Quote Card */}
              <div className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white border-l-4 border-earth-orange-bright rounded-2xl p-6 shadow-xs text-center space-y-2 border border-orange-100/80">
                <p className="text-base sm:text-lg font-bold text-plum-deep">
                  “Không con kiến nào xây tổ một mình.”
                </p>
                <p className="text-xs sm:text-sm font-semibold text-earth-orange-bright">
                  Và điều ANTCARE - Kiến chăm tổ mong là không gia đình nào phải già đi một mình.
                </p>
              </div>

              <p>
                Con kiến nhỏ bé nhưng bền bỉ, cần mẫn, và không bao giờ làm việc đơn lẻ — cả đàn cùng chăm cho một cái tổ. Đó là lý do mỗi người đến nhà bạn được gọi là một <strong>“Kiến”</strong>, và hình ảnh <em>“kiến chăm tổ”</em> trở thành cách chúng tôi nói về công việc của mình.
              </p>

              <div className="p-4 sm:p-5 bg-purple-50/40 rounded-2xl border border-purple-100/60 font-medium text-plum-deep text-center text-xs sm:text-sm leading-relaxed">
                “Bạn không thể ở bên gia đình mọi lúc mọi nơi, nhưng ANTCARE - Kiến chăm tổ sẽ luôn ở đó để giữ trọn yêu thương thay bạn.”
              </div>
            </div>
          </section>

          {/* Section 9: Sứ mệnh và định hướng */}
          <section id="su-menh" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                9. Sứ mệnh và định hướng
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-[1.8]">
              <p>
                <strong>Sứ mệnh của ANTCARE - Kiến chăm tổ là giúp người cao tuổi Việt Nam được chăm sóc sức khỏe một cách chủ động — trước khi có bệnh, chứ không phải sau khi đã bệnh</strong> — với một mức chi phí mà các gia đình bình thường có thể duy trì lâu dài.
              </p>
              <p>
                Ở giai đoạn hiện tại, ANTCARE - Kiến chăm tổ tập trung hoàn thiện ba dịch vụ tại nhà và xây dựng đội ngũ Kiến được đào tạo bài bản tại Hà Nội. Về dài hạn, ANTCARE - Kiến chăm tổ hướng tới mở một <strong>trung tâm Daycare cho người cao tuổi</strong> — nơi ông bà có thể đến sinh hoạt, vận động và gặp gỡ nhau ban ngày trong khoảng 2–3 năm tới.
              </p>

              <div className="bg-gradient-to-r from-plum-deep to-primary text-white p-6 rounded-2xl shadow-sm text-center space-y-1.5">
                <p className="text-base sm:text-lg font-bold text-earth-orange-bright">
                  ANTCARE - Kiến chăm tổ — Chủ động hôm nay, an tâm ngày mai.
                </p>
                <p className="text-xs sm:text-sm text-purple-100">
                  Chăm sóc sức khỏe toàn diện, kiến tạo cuộc sống an vui cho người thân yêu.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: FAQ Accordions */}
          <section id="faq" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">help_outline</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                10. Câu hỏi thường gặp về ANTCARE - Kiến chăm tổ
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-purple-100/80 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-4.5 text-left font-bold text-plum-deep text-xs sm:text-sm flex items-center justify-between gap-3 hover:bg-purple-50/30 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined text-earth-orange-bright text-base transition-transform duration-200" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      keyboard_arrow_down
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/50 pt-3 bg-purple-50/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* YMYL Medical Disclaimer */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-500 leading-relaxed space-y-1">
            <strong className="text-slate-700 block font-semibold">Lưu ý y tế quan trọng:</strong>
            <p>
              Thông tin trên trang mang tính giới thiệu dịch vụ và tham khảo, không thay thế cho chẩn đoán, tư vấn hoặc điều trị y tế chuyên môn. ANTCARE - Kiến chăm tổ không phải cơ sở khám bệnh, chữa bệnh; Kiến của ANTCARE - Kiến chăm tổ không phải nhân viên y tế và không thực hiện khám, chữa bệnh hay kê đơn. Các chỉ số được ghi nhận nhằm giúp gia đình theo dõi và cung cấp cho bác sĩ khi cần. Vui lòng tham khảo ý kiến bác sĩ cho mọi quyết định liên quan đến sức khỏe.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-plum-deep to-primary text-white p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-md">
            <h3 className="text-base sm:text-lg md:text-xl font-bold">
              👉 Nhận tư vấn miễn phí về dịch vụ phù hợp cho gia đình bạn
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                onClick={() => trackEvent('click_hotline', { location: 'about_cta' })}
                href={`tel:${siteInfo.hotline ? siteInfo.hotline.replace(/ /g, "") : "0969032360"}`}
                className="bg-earth-orange-bright hover:bg-earth-orange-dark text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>Hotline: {siteInfo.hotline || "0969 032 360"}</span>
              </a>
              <a
                href="/#lien-he-gia-dinh"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/20 transition-all text-xs sm:text-sm"
              >
                Đăng ký nhận tư vấn
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default AboutUs;
