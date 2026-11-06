import React, { useEffect, useState } from 'react';
import { useAppTranslation } from '../utils/i18nHelper';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const AboutUs = () => {
  const { tr } = useAppTranslation();
  const [openFaq, setOpenFaq] = useState(0);
  const [isTocMobileOpen, setIsTocMobileOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Metadata for /ve-antcare
    document.title = "Về ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi, quần thấm hút";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "ANTCARE – Kiến chăm tổ: dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà ở Hà Nội và sản phẩm quần lót thấm hút: quần són tiểu, quần kinh nguyệt.";
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.content = "ANTCARE, antcare, Kiến chăm tổ, về ANTCARE, chăm sóc người cao tuổi tại nhà Hà Nội, trợ lý sức khỏe tại nhà, dịch vụ đồng hành khám bệnh, quần lót són tiểu, quần chống són tiểu, quần kinh nguyệt, quần nguyệt san";
    }

    // JSON-LD Schemas
    const schemaOrg = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Organization", "LocalBusiness"],
          "@id": "https://antcare.vn/#org",
          "name": "ANTCARE – Kiến chăm tổ",
          "alternateName": [
            "ANTCARE",
            "Kiến chăm tổ",
            "Antcare Kiến chăm tổ"
          ],
          "url": "https://antcare.vn/",
          "logo": "https://antcare.vn/logo.png",
          "telephone": "+84969032360",
          "description": "Thương hiệu chăm sóc sức khỏe cho gia đình Việt: dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà ở Hà Nội và các tỉnh miền Bắc; sản phẩm quần lót thấm hút són tiểu và quần kinh nguyệt.",
          "slogan": "Kiến chăm tổ",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hà Nội",
            "addressCountry": "VN"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Hà Nội"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Các tỉnh miền Bắc Việt Nam"
            },
            {
              "@type": "Country",
              "name": "Việt Nam"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84969032360",
            "contactType": "customer service",
            "availableLanguage": ["vi"]
          },
          "knowsAbout": [
            "Chăm sóc người cao tuổi tại nhà",
            "Đồng hành đi khám bệnh",
            "Theo dõi sức khỏe người cao tuổi",
            "Són tiểu",
            "Kinh nguyệt",
            "Quần lót thấm hút",
            "Quần kinh nguyệt"
          ],
          "sameAs": [
            "https://www.facebook.com/people/Antcare/61593117245344/",
            "https://www.tiktok.com/@antcare_group",
            "https://www.youtube.com/@Antcare-kienchamto"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dịch vụ và sản phẩm ANTCARE",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Dịch vụ chăm sóc người cao tuổi tại nhà",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "@id": "https://antcare.vn/#tro-ly-suc-khoe",
                      "name": "Trợ lý Sức khỏe"
                    },
                    "price": "990000",
                    "priceCurrency": "VND",
                    "description": "Gói Quan Tâm, 2 lần thăm/tháng"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "@id": "https://antcare.vn/#dong-hanh-di-kham",
                      "name": "Đồng hành đi khám"
                    },
                    "price": "390000",
                    "priceCurrency": "VND",
                    "description": "Tối đa 3 giờ"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "An tâm cửa nhà"
                    }
                  }
                ]
              },
              {
                "@type": "OfferCatalog",
                "name": "Quần lót thấm hút",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Quần lót són tiểu ANTCARE",
                      "brand": {
                        "@id": "https://antcare.vn/#org"
                      },
                      "url": "https://antcare.vn/quan-lot-tham-hut"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Quần kinh nguyệt ANTCARE",
                      "brand": {
                        "@id": "https://antcare.vn/#org"
                      },
                      "url": "https://antcare.vn/quan-lot-tham-hut"
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          "@type": "AboutPage",
          "@id": "https://antcare.vn/ve-antcare#webpage",
          "url": "https://antcare.vn/ve-antcare",
          "name": "Về ANTCARE – Kiến chăm tổ",
          "inLanguage": "vi",
          "mainEntity": {
            "@id": "https://antcare.vn/#org"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Trang chủ",
              "item": "https://antcare.vn/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Về ANTCARE",
              "item": "https://antcare.vn/ve-antcare"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "ANTCARE là gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ANTCARE – Kiến chăm tổ là thương hiệu chăm sóc sức khỏe cho gia đình Việt, gồm dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà ở Hà Nội và các tỉnh miền Bắc, và sản phẩm quần lót thấm hút: quần lót són tiểu và quần kinh nguyệt."
              }
            },
            {
              "@type": "Question",
              "name": "ANTCARE có những dịch vụ nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ANTCARE có ba dịch vụ: Trợ lý Sức khỏe (chăm sóc sức khỏe bán thời gian tại nhà, từ 990.000đ/tháng), Đồng hành đi khám (đưa người cao tuổi đi khám, từ 390.000đ/3 giờ) và An tâm cửa nhà (an toàn nhà ở và việc nhà cho người cao tuổi)."
              }
            },
            {
              "@type": "Question",
              "name": "ANTCARE bán những sản phẩm gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ANTCARE cung cấp quần lót thấm hút giặt được: quần lót són tiểu cho người bị són tiểu nhẹ đến vừa, và quần kinh nguyệt có lõi thấm hút để mặc thay băng vệ sinh."
              }
            },
            {
              "@type": "Question",
              "name": "ANTCARE phục vụ ở đâu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dịch vụ chăm sóc của ANTCARE phục vụ tại Hà Nội và các tỉnh miền Bắc; với các tỉnh ngoài Hà Nội, ANTCARE sắp xếp xe tiện chuyến hoặc phương tiện phù hợp."
              }
            },
            {
              "@type": "Question",
              "name": "Vì sao tên là Kiến chăm tổ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tên Kiến chăm tổ lấy cảm hứng từ đàn kiến chăm chỉ, đoàn kết và luôn chăm lo cho tổ của mình, thể hiện tinh thần chăm sóc từng thành viên trong gia đình bằng những việc nhỏ, đều đặn và tận tâm."
              }
            },
            {
              "@type": "Question",
              "name": "Nhân viên ANTCARE có chuyên môn y tế không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nhân viên Kiến Y tế của ANTCARE có nền tảng điều dưỡng, chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Kiến Y tế không chẩn đoán, không kê đơn; mọi quyết định điều trị thuộc về bác sĩ."
              }
            },
            {
              "@type": "Question",
              "name": "Làm sao liên hệ ANTCARE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gọi hoặc nhắn Zalo hotline 0969 032 360, hoặc truy cập website antcare.vn."
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-about-page';
    script.text = JSON.stringify(schemaOrg);
    document.head.appendChild(script);

    return () => {
      document.getElementById('schema-about-page')?.remove();
    };
  }, []);

  const tocItems = [
    { id: "thong-tin", label: "1. Thông tin chung" },
    { id: "cau-chuyen", label: "2. Ý nghĩa tên \"Kiến chăm tổ\"" },
    { id: "su-menh", label: "3. Sứ mệnh, tầm nhìn, giá trị" },
    { id: "dich-vu", label: "4. Dịch vụ chăm sóc người cao tuổi" },
    { id: "san-pham", label: "5. Quần lót thấm hút" },
    { id: "vi-sao-hai-mang", label: "6. Vì sao ANTCARE làm 2 mảng?" },
    { id: "doi-ngu", label: "7. Đội ngũ Kiến" },
    { id: "cam-ket", label: "8. Cam kết của ANTCARE" },
    { id: "lien-he", label: "9. Liên hệ & Hợp tác" },
    { id: "faq", label: "10. Câu hỏi thường gặp" }
  ];

  const faqs = [
    {
      q: "ANTCARE là gì?",
      a: "ANTCARE – Kiến chăm tổ là thương hiệu chăm sóc sức khỏe cho gia đình Việt, gồm dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà ở Hà Nội và các tỉnh miền Bắc, và sản phẩm quần lót thấm hút: quần lót són tiểu và quần kinh nguyệt."
    },
    {
      q: "ANTCARE có những dịch vụ nào?",
      a: "ANTCARE có ba dịch vụ: Trợ lý Sức khỏe (chăm sóc sức khỏe bán thời gian tại nhà, từ 990.000đ/tháng), Đồng hành đi khám (đưa người cao tuổi đi khám, từ 390.000đ/3 giờ) và An tâm cửa nhà (an toàn nhà ở và việc nhà cho người cao tuổi)."
    },
    {
      q: "ANTCARE bán những sản phẩm gì?",
      a: "ANTCARE cung cấp quần lót thấm hút giặt được: quần lót són tiểu cho người bị són tiểu nhẹ đến vừa, và quần kinh nguyệt có lõi thấm hút để mặc thay băng vệ sinh."
    },
    {
      q: "ANTCARE phục vụ ở đâu?",
      a: "Dịch vụ chăm sóc của ANTCARE phục vụ tại Hà Nội và các tỉnh miền Bắc; với các tỉnh ngoài Hà Nội, ANTCARE sắp xếp xe tiện chuyến hoặc phương tiện phù hợp. Sản phẩm quần lót thấm hút được giao hàng trên toàn quốc."
    },
    {
      q: "Vì sao tên là Kiến chăm tổ?",
      a: "Tên Kiến chăm tổ lấy cảm hứng từ đàn kiến chăm chỉ, đoàn kết và luôn chăm lo cho tổ của mình, thể hiện tinh thần chăm sóc từng thành viên trong gia đình bằng những việc nhỏ, đều đặn và tận tâm."
    },
    {
      q: "Nhân viên ANTCARE có chuyên môn y tế không?",
      a: "Nhân viên Kiến Y tế của ANTCARE có nền tảng điều dưỡng, chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Kiến Y tế không chẩn đoán, không kê đơn; mọi quyết định điều trị thuộc về bác sĩ."
    },
    {
      q: "Làm sao liên hệ ANTCARE?",
      a: "Gọi hoặc nhắn Zalo hotline 0969 032 360, hoặc truy cập website antcare.vn."
    }
  ];

  return (
    <main className="py-4 sm:py-6 md:py-8 bg-gradient-to-b from-[#fbf8fd] via-[#f7f3fb] to-[#fbf8fd] min-h-screen text-slate-700">
      
      {/* Header Banner */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 mb-5 sm:mb-6">
        <div className="bg-gradient-to-br from-white via-white to-purple-50/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-purple-100/70 shadow-sm relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-2.5">
            <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mb-1">
              <a href="/" className="hover:text-earth-orange-bright transition-colors">{tr("Trang chủ", "Home")}</a>
              <span className="opacity-40">›</span>
              <span className="text-plum-deep font-semibold">{tr("Về ANTCARE", "About ANTCARE")}</span>
            </nav>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-earth-orange-bright animate-pulse"></span>
                {tr("Về chúng tôi", "About Us")}
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-plum-deep leading-snug tracking-tight">
              Về <span className="text-primary">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary">CARE</span> – Kiến chăm tổ
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Chăm sóc sức khỏe người cao tuổi tại nhà · Quần lót thấm hút són tiểu và kinh nguyệt
            </p>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden sm:block">
            <span className="material-symbols-outlined text-[130px] text-plum-deep">volunteer_activism</span>
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
              {tr("Trên trang này", "Contents")}
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

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Quick Answer: ANTCARE là gì? */}
          <div className="answer">
            <strong>ANTCARE là gì?</strong> <strong>ANTCARE – Kiến chăm tổ</strong> là thương hiệu chăm sóc sức khỏe cho gia đình Việt, gồm hai mảng: <strong>(1) dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà</strong> ở Hà Nội và các tỉnh miền Bắc – Trợ lý Sức khỏe, Đồng hành đi khám, An tâm cửa nhà; và <strong>(2) sản phẩm quần lót thấm hút</strong> – quần lót són tiểu cho người bị tiểu không tự chủ nhẹ và quần kinh nguyệt cho phụ nữ. Hai mảng chung một mục tiêu: giúp người cao tuổi và người phụ nữ <strong>chủ động, tự tin và an tâm</strong> với sức khỏe của mình mỗi ngày.
          </div>

          {/* Section 1: Thông tin chung */}
          <section id="thong-tin" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                1. Thông tin chung
              </h2>
            </div>

            <div className="table-scroll">
              <table className="w-full text-left border-collapse border border-purple-100 text-xs sm:text-sm">
                <tbody>
                  <tr className="border-b border-purple-100">
                    <th className="w-1/3 bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Tên thương hiệu</th>
                    <td className="p-3 text-slate-700 font-semibold">ANTCARE – Kiến chăm tổ</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-white">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Lĩnh vực</th>
                    <td className="p-3 text-slate-700">Dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà; sản phẩm quần lót thấm hút (quần són tiểu, quần kinh nguyệt)</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Khách hàng</th>
                    <td className="p-3 text-slate-700">Người cao tuổi và gia đình có bố mẹ cao tuổi (kể cả con cái ở xa, ở nước ngoài); phụ nữ trong độ tuổi có kinh nguyệt, phụ nữ sau sinh, tuổi tiền mãn kinh; người bị són tiểu nhẹ</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-white">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Khu vực phục vụ dịch vụ</th>
                    <td className="p-3 text-slate-700">Hà Nội và các tỉnh miền Bắc</td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Khu vực bán sản phẩm</th>
                    <td className="p-3 text-slate-700 font-semibold text-emerald-700">Toàn quốc (giao hàng tận nơi)</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-white">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Website chính thức</th>
                    <td className="p-3"><a href="https://antcare.vn" className="text-primary font-bold hover:underline">antcare.vn</a></td>
                  </tr>
                  <tr className="border-b border-purple-100">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Hotline / Zalo</th>
                    <td className="p-3"><a href="tel:0969032360" className="text-earth-orange-bright font-bold hover:underline">0969 032 360</a></td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-white">
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Trụ sở & Văn phòng</th>
                    <td className="p-3 text-slate-700">Rox Tower, 138 Hồ Tùng Mậu, phường Phú Diễn, Bắc Từ Liêm, Hà Nội</td>
                  </tr>
                  <tr>
                    <th className="bg-[#FAF8FD] p-3 font-bold text-plum-deep border-r border-purple-100">Kênh chính thức</th>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-3">
                        <a href="https://www.facebook.com/people/Antcare/61593117245344/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline flex items-center gap-1">Facebook</a>
                        <span>·</span>
                        <a href="https://www.youtube.com/@Antcare-kienchamto" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline flex items-center gap-1">YouTube</a>
                        <span>·</span>
                        <a href="https://www.tiktok.com/@antcare_group" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-medium hover:underline flex items-center gap-1">TikTok</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              ANTCARE – Kiến chăm tổ (antcare.vn) là thương hiệu Việt Nam, không liên quan đến các công ty nước ngoài có tên tương tự.
            </p>
          </section>

          {/* Section 2: Câu chuyện và ý nghĩa tên */}
          <section id="cau-chuyen" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">auto_stories</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                2. Câu chuyện và ý nghĩa tên "Kiến chăm tổ"
              </h2>
            </div>
            
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Đàn kiến nhỏ bé nhưng chăm chỉ, đoàn kết và luôn chăm lo cho tổ của mình. ANTCARE lấy hình ảnh ấy làm tinh thần: <strong>"Kiến chăm tổ"</strong> – chăm sóc từng thành viên trong gia đình bằng những việc nhỏ, đều đặn và tận tâm.
              </p>
              <p>
                ANTCARE bắt đầu từ một nhu cầu rất thật của nhiều gia đình Việt: con cái bận đi làm, ở xa, trong khi bố mẹ cao tuổi cần được theo dõi sức khỏe, cần người đưa đi khám, cần một ngôi nhà an toàn. Từ dịch vụ chăm sóc người cao tuổi, chúng tôi gặp một vấn đề chung mà ít ai nói ra: <strong>són tiểu</strong> ở người cao tuổi, ở phụ nữ sau sinh và tuổi mãn kinh. Cùng với đó là nhu cầu của phụ nữ về một giải pháp kinh nguyệt thoải mái, an toàn hơn băng vệ sinh.
              </p>
              <p>
                Vì vậy ANTCARE mở rộng sang <strong>quần lót thấm hút</strong>, để chăm sóc gia đình cả bằng dịch vụ lẫn sản phẩm dùng hằng ngày.
              </p>
            </div>
          </section>

          {/* Section 3: Sứ mệnh, tầm nhìn, giá trị */}
          <section id="su-menh" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                3. Sứ mệnh, tầm nhìn, giá trị cốt lõi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-primary flex items-center justify-center mb-1">
                  <span className="material-symbols-outlined text-lg">track_changes</span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-primary">Sứ mệnh</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Giúp người cao tuổi và người phụ nữ Việt chủ động, tự tin, an tâm với sức khỏe hằng ngày, bằng dịch vụ chăm sóc tận tâm và sản phẩm thiết kế đúng nhu cầu.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-earth-orange-bright flex items-center justify-center mb-1">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-earth-orange-bright">Tầm nhìn</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trở thành thương hiệu chăm sóc sức khỏe gia đình được tin cậy: đồng hành cùng mỗi gia đình qua nhiều giai đoạn cuộc đời, từ tuổi dậy thì, sau sinh, tiền mãn kinh đến tuổi già.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1">
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-emerald-800">Giá trị cốt lõi</h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li><strong>Tận tâm</strong> như chăm người nhà</li>
                  <li><strong>Minh bạch</strong> về giá, dịch vụ và thông số</li>
                  <li><strong>Tôn trọng</strong> sự riêng tư, tự chủ</li>
                  <li><strong>Đúng chuyên môn</strong>: không làm thay bác sĩ</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Mảng 1 - Dịch vụ chăm sóc người cao tuổi tại nhà */}
          <section id="dich-vu" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">elderly</span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                  4. Mảng 1: Dịch vụ chăm sóc người cao tuổi tại nhà
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">Chăm sóc bán thời gian tại nhà và đồng hành đi khám tại Hà Nội & các tỉnh miền Bắc</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl border border-purple-100 bg-white hover:border-primary transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md">Dịch vụ 01</span>
                  <h4 className="font-bold text-sm sm:text-base text-plum-deep">Trợ lý Sức khỏe</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kiến Y tế ghé nhà theo lịch cố định: đo chỉ số, kiểm tra thuốc, quan sát sức khỏe, nhắc lịch tái khám, báo cáo cho gia đình.
                  </p>
                  <p className="text-xs text-slate-400">Quan Tâm (2 lần/tháng) · Chăm Sóc (4 lần) · Yêu Thương (8 lần)</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-earth-orange-bright">Từ 990.000đ/tháng</span>
                  <a href="/#dich-vu-tro-ly" className="text-xs font-bold text-primary hover:underline">Chi tiết →</a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-purple-100 bg-white hover:border-primary transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-earth-orange-bright bg-earth-orange-bright/10 px-2 py-0.5 rounded-md">Dịch vụ 02</span>
                  <h4 className="font-bold text-sm sm:text-base text-plum-deep">Đồng hành đi khám</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Đón tại nhà, đi khám cùng tại bệnh viện, làm thủ tục, ghi lời dặn bác sĩ, lấy thuốc, đưa về và báo cáo cho gia đình.
                  </p>
                  <p className="text-xs text-slate-400">Gói 3h, 4h, 6h, 8h; chi phí đi lại tính riêng theo thực tế</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-earth-orange-bright">Từ 390.000đ/3 giờ</span>
                  <a href="/#dong-hanh-di-kham" className="text-xs font-bold text-primary hover:underline">Chi tiết →</a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-purple-100 bg-white hover:border-primary transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Dịch vụ 03</span>
                  <h4 className="font-bold text-sm sm:text-base text-plum-deep">An tâm cửa nhà</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kiến Nhà cửa hỗ trợ an toàn nhà ở và việc nhà cho người cao tuổi: rà soát nguy cơ té ngã, dọn dẹp, sắp xếp không gian sống.
                  </p>
                  <p className="text-xs text-slate-400">Làm cùng, không làm thay để ông bà duy trì tự chủ</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700">Tư vấn tại gia</span>
                  <a href="/#an-tam-cua-nha" className="text-xs font-bold text-primary hover:underline">Chi tiết →</a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Mảng 2 - Quần lót thấm hút són tiểu và kinh nguyệt */}
          <section id="san-pham" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 text-earth-orange-bright flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">checkroom</span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                  5. Mảng 2: Quần lót thấm hút són tiểu và kinh nguyệt
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">Cấu tạo 4 lớp bóc tách mỏng 2mm, khóa ẩm 35–50ml, giặt và tái sử dụng bền bỉ</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-primary">Quần lót són tiểu ANTCARE</h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Tái sử dụng</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dành cho người bị són tiểu nhẹ đến vừa còn tự sinh hoạt: phụ nữ sau sinh, tuổi tiền mãn kinh, người cao tuổi muốn thay miếng lót, băng vệ sinh bằng giải pháp kín đáo, thoải mái, giặt dùng lại 2–3 năm.
                </p>
                <p className="text-xs text-slate-500 italic">
                  * Không thay thế bỉm, tã cho người són nặng, nằm một chỗ.
                </p>
                <a href="/quan-lot-tham-hut" className="inline-block text-xs font-bold text-primary hover:underline">
                  Xem chi tiết quần són tiểu →
                </a>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-earth-orange-bright">Quần kinh nguyệt ANTCARE</h4>
                  <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">Dáng Boy-short</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quần kinh nguyệt đúng nghĩa có lõi thấm hút nhiều lớp: mặc thay thế băng vệ sinh ngày ít đến vừa, làm lớp dự phòng an toàn tuyệt đối cho cốc, đĩa nguyệt san ngày nhiều. Dáng boy short ôm đùi chặn tràn mép và chống tràn sau khi ngủ.
                </p>
                <p className="text-xs text-slate-500 italic">
                  * Không hóa chất tẩy trắng huỳnh quang, êm dịu cho da nhạy cảm.
                </p>
                <a href="/quan-lot-tham-hut" className="inline-block text-xs font-bold text-earth-orange-bright hover:underline">
                  Xem chi tiết quần kinh nguyệt →
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">Tìm hiểu kiến thức chuyên sâu tại chuyên mục:</span>
              <div className="flex gap-2">
                <a href="/kinh-nguyet/kinh-nguyet-la-gi" className="font-bold text-primary hover:underline">Kinh nguyệt là gì</a>
                <span>·</span>
                <a href="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" className="font-bold text-primary hover:underline">Ngày kinh nguyệt nên dùng gì</a>
              </div>
            </div>
          </section>

          {/* Section 6: Vì sao ANTCARE làm cả 2 mảng? */}
          <section id="vi-sao-hai-mang" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">join_inner</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                6. Vì sao ANTCARE làm cả dịch vụ và sản phẩm?
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dịch vụ chăm sóc và sản phẩm thấm hút cùng phục vụ một mục tiêu: <strong>giữ sự chủ động, tự tin và phẩm giá</strong> cho người được chăm sóc trong cuộc sống hằng ngày.
            </p>

            <div className="table-scroll">
              <table className="w-full text-left border-collapse border border-purple-100 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF8FD] border-b border-purple-100 text-plum-deep">
                    <th className="p-3 border-r border-purple-100">Nhu cầu thực tế</th>
                    <th className="p-3 border-r border-purple-100">Dịch vụ ANTCARE</th>
                    <th className="p-3">Sản phẩm ANTCARE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-100 bg-white">
                    <td className="p-3 font-semibold text-slate-800 border-r border-purple-100">Người cao tuổi bị són tiểu nhẹ</td>
                    <td className="p-3 text-slate-600 border-r border-purple-100">Trợ lý Sức khỏe theo dõi, nhắc đi khám; Đồng hành đi khám</td>
                    <td className="p-3 text-slate-600">Quần lót són tiểu thay miếng lót, giữ tự tin ra ngoài</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-[#FAF8FD]/50">
                    <td className="p-3 font-semibold text-slate-800 border-r border-purple-100">Phụ nữ sau sinh, tiền mãn kinh</td>
                    <td className="p-3 text-slate-600 border-r border-purple-100">Đồng hành đi khám phụ khoa, tiết niệu khi có dấu hiệu</td>
                    <td className="p-3 text-slate-600">Quần són tiểu & quần kinh nguyệt cho chu kỳ thất thường</td>
                  </tr>
                  <tr className="border-b border-purple-100 bg-white">
                    <td className="p-3 font-semibold text-slate-800 border-r border-purple-100">Phụ nữ trong độ tuổi kinh nguyệt</td>
                    <td className="p-3 text-slate-600 border-r border-purple-100">Cẩm nang kiến thức y khoa, phát hiện bất thường</td>
                    <td className="p-3 text-slate-600">Quần kinh nguyệt thay thế băng vệ sinh</td>
                  </tr>
                  <tr className="bg-[#FAF8FD]/50">
                    <td className="p-3 font-semibold text-slate-800 border-r border-purple-100">Con cái ở xa muốn chăm bố mẹ</td>
                    <td className="p-3 text-slate-600 border-r border-purple-100">Trợ lý Sức khỏe, Đồng hành đi khám, báo cáo trực tiếp</td>
                    <td className="p-3 text-slate-600">Đặt quần thấm hút giao tận tay bố mẹ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Đội ngũ */}
          <section id="doi-ngu" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                7. Đội ngũ Kiến của ANTCARE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-1.5">
                <strong className="block text-primary font-bold text-sm">Kiến Y tế</strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Nhân viên có nền tảng điều dưỡng, chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu; phụ trách Trợ lý Sức khỏe và Đồng hành đi khám.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-1.5">
                <strong className="block text-earth-orange-bright font-bold text-sm">Kiến Nhà cửa</strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Phụ trách An tâm cửa nhà: rà soát nguy cơ té ngã, sắp xếp không gian sống khoa học và hỗ trợ việc nhà cho người cao tuổi.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8FD] border border-purple-100 space-y-1.5">
                <strong className="block text-emerald-800 font-bold text-sm">Đội Sản phẩm</strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Nghiên cứu công nghệ dệt ép nhiệt đa tầng, phát triển các dòng quần lót thấm hút chuẩn form dáng phụ nữ và khí hậu nhiệt đới Việt Nam.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Cam kết của ANTCARE */}
          <section id="cam-ket" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                8. Cam kết của ANTCARE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-purple-100/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-plum-deep">Đúng vai trò:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Kiến Y tế không chẩn đoán, không kê đơn, không tự đổi thuốc; mọi quyết định điều trị thuộc về bác sĩ và gia đình.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-purple-100/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-plum-deep">Giá minh bạch:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Bảng giá công khai trên website, thông báo trước mọi chi phí phát sinh nếu có.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-purple-100/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-plum-deep">Báo cáo rõ ràng:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Gia đình luôn nhận được báo cáo nhật ký sức khỏe sau mỗi buổi thăm và sau mỗi chuyến đưa đi khám.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-purple-100/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-plum-deep">Không "chạy số", không cửa sau:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Đồng hành đi khám theo đúng quy trình chuẩn mực, công bằng và lịch sự tại các bệnh viện.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-purple-100/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-plum-deep">Thông tin sản phẩm trung thực:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Nói rõ mức độ thấm hút cụ thể, khi nào nên dùng độc lập và khi nào cần đi khám y khoa.</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-purple-100/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">6</span>
                <div>
                  <strong className="text-plum-deep">Tôn trọng quyền riêng tư:</strong>
                  <p className="text-slate-600 text-xs mt-0.5">Hồ sơ thông tin sức khỏe chỉ được chia sẻ duy nhất với người thân được gia đình chỉ định.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Liên hệ & Hợp tác */}
          <section id="lien-he" className="scroll-mt-24 space-y-4">
            <div className="cta">
              <h4 className="text-lg font-bold text-white mb-1">Tư vấn dịch vụ chăm sóc và sản phẩm thấm hút ANTCARE</h4>
              <p className="text-xs sm:text-sm text-purple-100 mb-4 leading-relaxed">
                Hotline / Zalo: <strong>0969 032 360</strong> · Website: <strong>antcare.vn</strong><br />
                Dịch vụ chăm sóc tại nhà vui lòng đặt trước ít nhất 1 ngày. Nhận chuyển khoản thanh toán linh hoạt từ con cái đang ở nước ngoài.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a className="btn" href="tel:0969032360">Gọi ngay: 0969 032 360</a>
                <a className="btn" href="/#lien-he-gia-dinh">Đặt lịch dịch vụ</a>
                <a className="btn" href="/quan-lot-tham-hut">Xem quần thấm hút</a>
              </div>
            </div>

            {/* Quick Link to Recruitment & Partnership */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a href="/recruitment" className="p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-primary transition-all flex items-center justify-between group shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary">badge</span>
                  <div>
                    <span className="font-bold text-slate-800 group-hover:text-primary transition-colors block">Tuyển dụng Trợ lý Sức khỏe</span>
                    <span className="text-slate-500">Cơ hội việc làm điều dưỡng và trợ lý chăm sóc</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-transform group-hover:translate-x-0.5">arrow_forward</span>
              </a>

              <a href="/recruitment#hop-tac-cung-ant" className="p-3.5 rounded-2xl bg-white border border-purple-100 hover:border-earth-orange-bright transition-all flex items-center justify-between group shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-earth-orange-bright">handshake</span>
                  <div>
                    <span className="font-bold text-slate-800 group-hover:text-earth-orange-bright transition-colors block">Hợp tác Y tế & Đối tác</span>
                    <span className="text-slate-500">Kết nối cơ sở y tế, phòng khám & chuyên gia</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-earth-orange-bright transition-transform group-hover:translate-x-0.5">arrow_forward</span>
              </a>
            </div>
          </section>

          {/* Section 10: FAQ */}
          <section id="faq" className="scroll-mt-24 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-purple-100/70 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">quiz</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                10. Câu hỏi thường gặp về ANTCARE
              </h2>
            </div>

            <div className="faq-accordion space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <details 
                    key={index} 
                    className="faq-item group" 
                    open={isOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFaq(index);
                    }}
                  >
                    <summary className="faq-question">
                      <span className="faq-q-text">
                        <span className="faq-badge">{index + 1}</span>
                        <strong className="faq-title">{faq.q}</strong>
                      </span>
                      <span className="faq-arrow material-symbols-outlined">expand_more</span>
                    </summary>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                );
              })}
            </div>
          </section>

          {/* Medical Disclaimer */}
          <p className="note">
            Thông tin giới thiệu về dịch vụ và sản phẩm mang tính định hướng chăm sóc sức khỏe chủ động, không thay thế chẩn đoán hay điều trị y khoa của bác sĩ.
          </p>

        </div>
      </div>
    </main>
  );
};

export default AboutUs;
