import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppTranslation } from '../utils/i18nHelper';

const ProductDetail = () => {
  const { tr } = useAppTranslation();
  const [activeStep, setActiveStep] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [formState, setFormState] = useState({ name: '', phone: '', location: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Metadata for Product Detail Page
    document.title = "Bảng luồn dây bèo – Dụng cụ rèn luyện thể chất & trí não người cao tuổi | ANTCARE";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Bảng luồn dây bèo ANTCARE là dụng cụ rèn luyện vận động tinh bàn tay, kích thích trí não và mang lại niềm vui sáng tạo cho người cao tuổi. Vật liệu bèo tây tự nhiên an toàn.";
    }

    // Inject Product & HowTo Schema.org JSON-LD for SEO & AEO
    const schemaData = [
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Bảng luồn dây bèo – ANTCARE Dụng cụ rèn luyện thể chất & trí não người cao tuổi",
        "image": "https://antcare.vn/images/products/bang-luon-day-beo.jpg",
        "description": "Dụng cụ đan luồn dây bèo tây tự nhiên dành cho người cao tuổi rèn luyện vận động tinh ngón tay, kích thích nhận thức trí não và phục hồi chức năng.",
        "brand": {
          "@type": "Brand",
          "name": "ANTCARE – Kiến chăm tổ"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://antcare.vn/san-pham/bang-luon-day-beo",
          "priceCurrency": "VND",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "ANTCARE"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Cách sử dụng Bảng luồn dây bèo rèn luyện trí não cho người cao tuổi",
        "description": "Quy trình 5 bước đơn giản giúp người cao tuổi thực hành đan bèo tây rèn luyện vận động tinh ngón tay.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Lấy dây bèo",
            "text": "Lấy dây bèo tây đã được xử lý làm sạch, có độ mềm và độ dày phù hợp."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Đưa dây vào khe",
            "text": "Đưa dây vào khe theo hướng dẫn đánh dấu trên bảng gỗ."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Luồn tiếp theo đường đánh dấu",
            "text": "Luồn tiếp theo các đường đã đánh dấu tạo nếp đan."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Hoàn thành từng hàng",
            "text": "Hoàn thành từng hàng đan dần tạo thành tấm đan hoàn chỉnh."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Tháo sản phẩm & hoàn thiện",
            "text": "Tháo sản phẩm ra khỏi bảng và sử dụng làm lót cốc hoặc quà tặng."
          }
        ]
      }
    ];

    let scriptTag = document.getElementById('product-schema-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'product-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      const tag = document.getElementById('product-schema-jsonld');
      if (tag) tag.remove();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', location: '', note: '' });
    }, 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6">
          <Link to="/" className="hover:text-earth-orange-bright transition-colors">Trang chủ</Link>
          <span>›</span>
          <Link to="/san-pham" className="hover:text-earth-orange-bright transition-colors">Sản phẩm</Link>
          <span>›</span>
          <span className="text-plum-deep font-bold truncate">Bảng luồn dây bèo</span>
        </nav>

        {/* PRODUCT HERO / HEADER GRID */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Infographic & Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <div 
                className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer bg-white aspect-[4/3] flex items-center justify-center"
                onClick={() => setShowImageModal(true)}
              >
                <img
                  src="/images/products/bang-luon-day-beo.jpg"
                  alt="Bảng luồn dây bèo - ANTCARE Dụng cụ rèn luyện thể chất & trí não người cao tuổi"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2">
                  <span className="material-symbols-outlined text-lg">zoom_in</span>
                  <span>Nhấn để xem ảnh phóng to</span>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  100% Thiên nhiên Việt Nam
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base text-emerald-600">verified</span>
                  Vật liệu sạch, an toàn cho da tay
                </span>
                <button 
                  onClick={() => setShowImageModal(true)}
                  className="text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">fullscreen</span>
                  Xem bảng infographics đầy đủ
                </button>
              </div>
            </div>

            {/* Right: Title, Subtitle, Highlights & Action */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-earth-orange-bright/10 text-earth-orange-bright font-bold text-[11px] uppercase tracking-wider mb-2">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  DỤNG CỤ RÈN LUYỆN THỂ CHẤT &amp; TRÍ NÃO
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-plum-deep leading-tight mb-2">
                  Bảng Luồn Dây Bèo – ANTCARE
                </h1>
                <p className="text-sm font-semibold text-earth-orange-bright">
                  Tạo nên những điều đẹp đẽ — Từ thao tác nhỏ đến thành phẩm thật ♡
                </p>
              </div>

              <div className="p-4 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Chỉ với những thao tác đơn giản, người cao tuổi có thể tự tay tạo ra những sản phẩm thủ công ý nghĩa, mang lại niềm vui, sự tự hào và cảm giác làm chủ cho các bác mỗi ngày.
              </div>

              {/* Natural Material Feature Box */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 p-4 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <span className="material-symbols-outlined text-emerald-700 text-base">eco</span>
                  <span>Vật liệu từ thiên nhiên Việt Nam</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium pl-1">
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span> Bèo được xử lý sạch, mềm, an toàn cho da tay
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span> Thân thiện môi trường
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span> Nhẹ, dễ thao tác
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span> Thiết kế bảng gỗ tự nhiên bền đẹp
                  </li>
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#dang-ky-tu-van-san-pham"
                  className="bg-earth-orange-bright text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">edit_note</span>
                  <span>Nhận tư vấn &amp; Đặt hàng</span>
                </a>

                <a
                  href="tel:0969032360"
                  className="border border-plum-deep/30 text-plum-deep hover:bg-plum-deep hover:text-white px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>Hotline: 0969 032 360</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION: 4 CORE HEALTH BENEFITS */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-plum-deep mb-2">
              Bốn Lợi Ích Vượt Trội Cho Sức Khỏe Người Cao Tuổi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Thiết kế chuyên biệt dựa trên tâm lý học và phục hồi chức năng vận động tinh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">pan_tool</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">Luyện vận động tinh</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tăng linh hoạt cho đôi tay, giảm tình trạng cứng khớp ngón tay và hỗ trợ linh hoạt vận động.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">Kích thích trí não</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cải thiện khả năng tập trung, ghi nhớ thứ tự đan và tăng cường sự phối hợp nhịp nhàng giữa tay - mắt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">sentiment_very_satisfied</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">Tạo niềm vui &amp; Tự tin</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mỗi thao tác đều tạo ra một kết quả cụ thể, giúp các bác có niềm vui sáng tạo và sự tự tin làm chủ.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">card_giftcard</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">Tạo sản phẩm thực tế</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thành phẩm dùng làm miếng lót cốc, tấm trang trí, đồ treo tường hoặc làm quà tặng ý nghĩa cho người thân.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: 5-STEP USAGE GUIDE */}
        <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 mb-12 shadow-2xs">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-earth-orange-bright uppercase tracking-wider px-3 py-1 rounded-full bg-earth-orange-bright/10">
              HƯỚNG DẪN CHI TIẾT
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-plum-deep mt-2">
              Cách Sử Dụng Bảng Luồn Dây Bèo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              5 bước thao tác đơn giản, dễ học và dễ thực hành cho người cao tuổi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center relative flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-earth-orange-bright text-white font-bold text-sm flex items-center justify-center mb-3">1</div>
              <h3 className="font-bold text-xs sm:text-sm text-plum-deep mb-1">Lấy dây bèo</h3>
              <p className="text-[11px] sm:text-xs text-slate-600">Lấy dây bèo đã được xử lý (có độ mềm và độ dày phù hợp).</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center relative flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-earth-orange-bright text-white font-bold text-sm flex items-center justify-center mb-3">2</div>
              <h3 className="font-bold text-xs sm:text-sm text-plum-deep mb-1">Đưa dây vào khe</h3>
              <p className="text-[11px] sm:text-xs text-slate-600">Đưa dây vào khe theo hướng dẫn trên bảng.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center relative flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-earth-orange-bright text-white font-bold text-sm flex items-center justify-center mb-3">3</div>
              <h3 className="font-bold text-xs sm:text-sm text-plum-deep mb-1">Luồn dây tiếp theo</h3>
              <p className="text-[11px] sm:text-xs text-slate-600">Luồn tiếp theo các đường đã đánh dấu.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center relative flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-earth-orange-bright text-white font-bold text-sm flex items-center justify-center mb-3">4</div>
              <h3 className="font-bold text-xs sm:text-sm text-plum-deep mb-1">Hoàn thành từng hàng</h3>
              <p className="text-[11px] sm:text-xs text-slate-600">Hoàn thành từng hàng, dần đan tạo thành tấm đan.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center relative flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-earth-orange-bright text-white font-bold text-sm flex items-center justify-center mb-3">5</div>
              <h3 className="font-bold text-xs sm:text-sm text-plum-deep mb-1">Tháo sản phẩm</h3>
              <p className="text-[11px] sm:text-xs text-slate-600">Tháo sản phẩm ra khỏi bảng và hoàn thiện (nếu cần).</p>
            </div>
          </div>
        </section>

        {/* SECTION: 4 LEVELS (CÁC PHIÊN BẢN PHÙ HỢP VỚI TỪNG MỨC ĐỘ) */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-plum-deep mb-2">
              Các Phiên Bản Phù Hợp Với Từng Mức Độ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Được phân chia theo 4 cấp độ luyện tập từ cơ bản đến sáng tạo tự do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Level 1 */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col">
              <div className="bg-emerald-50 p-4 text-center border-b border-emerald-100">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Mức 1</span>
                <h3 className="font-bold text-base text-plum-deep mt-0.5">Đưa vào / Luồn qua</h3>
              </div>
              <div className="p-5 flex-grow space-y-3 text-xs text-slate-600">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Khe to, dễ thao tác</li>
                  <li>Ít yêu cầu cầm nắm</li>
                  <li>Phù hợp với người tay yếu, cầm nắm khó</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 text-center border-t border-slate-200 text-xs font-bold text-primary">
                Thành phẩm: Miếng lót đơn giản
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col">
              <div className="bg-blue-50 p-4 text-center border-b border-blue-100">
                <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">Mức 2</span>
                <h3 className="font-bold text-base text-plum-deep mt-0.5">Luồn / Quấn</h3>
              </div>
              <div className="p-5 flex-grow space-y-3 text-xs text-slate-600">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Có cọc cố định, rãnh dẫn</li>
                  <li>Cần phối hợp tay tốt hơn</li>
                  <li>Vẫn giữ sự đơn giản</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 text-center border-t border-slate-200 text-xs font-bold text-primary">
                Thành phẩm: Vòng trang trí nhỏ
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col">
              <div className="bg-purple-50 p-4 text-center border-b border-purple-100">
                <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider">Mức 3</span>
                <h3 className="font-bold text-base text-plum-deep mt-0.5">Đan theo mẫu</h3>
              </div>
              <div className="p-5 flex-grow space-y-3 text-xs text-slate-600">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Đường đi được đánh dấu</li>
                  <li>Cần ghi nhớ trình tự</li>
                  <li>Tăng khả năng nhận thức</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 text-center border-t border-slate-200 text-xs font-bold text-primary">
                Thành phẩm: Tấm đan, tranh đơn giản
              </div>
            </div>

            {/* Level 4 */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col">
              <div className="bg-amber-50 p-4 text-center border-b border-amber-100">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Mức 4</span>
                <h3 className="font-bold text-base text-plum-deep mt-0.5">Sáng tạo</h3>
              </div>
              <div className="p-5 flex-grow space-y-3 text-xs text-slate-600">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Tự chọn màu, kiểu đan</li>
                  <li>Phát huy sự sáng tạo</li>
                  <li>Phù hợp với người có khả năng tốt hơn</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 text-center border-t border-slate-200 text-xs font-bold text-primary">
                Thành phẩm: Sản phẩm theo sở thích
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: HOSPITAL & REHABILITATION CONNECT IDEAS */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 mb-12 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-[11px] uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">local_hospital</span>
                Ý TƯỞNG KẾT NỐI BỆNH VIỆN
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-plum-deep">
                ANTCARE Có Thể Phối Hợp Cùng Các Bệnh Viện &amp; Trung Tâm Y Tế
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chúng tôi mong muốn đồng hành cùng các khoa Lão khoa, Phục hồi chức năng và Phòng Công tác xã hội để đưa hoạt động trị liệu tinh thần đến gần hơn với bệnh nhân.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-base shrink-0">check_circle</span>
                  <span>Tặng sản phẩm cho bệnh nhân khoa Lão khoa, Phục hồi chức năng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-base shrink-0">check_circle</span>
                  <span>Tổ chức buổi trải nghiệm, hướng dẫn sử dụng sản phẩm tại khoa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-base shrink-0">check_circle</span>
                  <span>Làm quà tặng cho bệnh nhân nhân dịp xuất viện</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-base shrink-0">check_circle</span>
                  <span>Kết nối chặt chẽ với Phòng Công tác xã hội của các bệnh viện</span>
                </li>
              </ul>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 font-bold italic">
                “Một món quà nhỏ – Một kết nối lớn ♡”
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <h3 className="font-bold text-base text-plum-deep">Đối Tác Y Tế &amp; Bệnh Viện</h3>
              <p className="text-xs text-slate-600">
                Hãy liên hệ với ANTCARE để cùng xây dựng chương trình hỗ trợ bệnh nhân ý nghĩa nhất.
              </p>
              <Link
                to="/hop-tac"
                className="bg-primary text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-primary-dark transition-all inline-block shadow-sm"
              >
                Gửi thông tin hợp tác y tế
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION: ORDER & CONSULTATION FORM */}
        <section className="bg-surface-lavender/30 rounded-3xl border border-surface-lavender p-6 sm:p-8 md:p-10 mb-10 scroll-mt-28" id="dang-ky-tu-van-san-pham">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-plum-deep mb-2">
              Đăng Ký Nhận Tư Vấn &amp; Trải Nghiệm Bảng Luồn Dây Bèo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Để lại thông tin, chuyên viên ANTCARE – Kiến chăm tổ sẽ liên hệ tư vấn sản phẩm phù hợp nhất cho người thân của bạn.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">Họ và tên của bạn</label>
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-plum-deep focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">Số điện thoại liên hệ</label>
                <input
                  type="tel"
                  required
                  placeholder="0xxx xxx xxx"
                  value={formState.phone}
                  onChange={e => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-plum-deep focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">Nơi ở / Địa chỉ giao hàng</label>
                <input
                  type="text"
                  placeholder="Tỉnh/Thành phố hoặc Quận/Huyện"
                  value={formState.location}
                  onChange={e => setFormState({ ...formState, location: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-plum-deep focus:ring-2 focus:ring-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">Ghi chú (Tình trạng người thân)</label>
                <textarea
                  rows="2"
                  placeholder="Ví dụ: Cụ 75 tuổi, khớp ngón tay hơi cứng..."
                  value={formState.note}
                  onChange={e => setFormState({ ...formState, note: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-plum-deep focus:ring-2 focus:ring-primary focus:bg-white"
                ></textarea>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-base">check_circle</span>
                  <span>Cảm ơn bạn! ANTCARE đã ghi nhận và sẽ liên hệ lại tư vấn cho bạn trong thời gian sớm nhất.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-earth-orange-bright text-white py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md cursor-pointer"
              >
                Gửi Yêu Cầu Tư Vấn Sản Phẩm
              </button>
            </form>
          </div>
        </section>

      </div>

      {/* FULL IMAGE MODAL */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <img
              src="/images/products/bang-luon-day-beo.jpg"
              alt="Bảng luồn dây bèo Full Infographics"
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
