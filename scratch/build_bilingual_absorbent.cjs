const fs = require('fs');

const code = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppTranslation } from '../utils/i18nHelper';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const AbsorbentUnderwear = () => {
  const { tr, isEn } = useAppTranslation();

  // State
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'period' | 'leak'
  const [selectedColor, setSelectedColor] = useState(isEn ? 'Classic Black (Boy-short)' : 'Đen tuyền (Boxer / Boy-short)');
  const [selectedSize, setSelectedSize] = useState('L');
  const [openFaq, setOpenFaq] = useState(0);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCombo, setModalCombo] = useState(
    isEn 
      ? 'Saver Pack: 3 Underwear (699,000 VND - Free Wash Bag + Free Shipping)'
      : 'Combo 3 Quần Tiết Kiệm (699.000đ - Tặng túi giặt + Freeship)'
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    size: 'L',
    color: isEn ? 'Classic Black (Boy-short)' : 'Đen tuyền (Boxer / Boy-short)',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const pageTitle = isEn
      ? "ANTCARE Absorbent Underwear – Lightweight Comfort, Complete Leakproof Protection"
      : "Quần Lót Thấm Hút ANTCARE – Cảm Giác Nhẹ Tênh, Bảo Vệ Toàn Diện";

    const pageDesc = isEn
      ? "Premium ANTCARE 4-layer breathable absorbent underwear: overnight leakproof period underwear and urinary incontinence panties for postpartum & mature women. Ultra-thin, soft, and washable over 100 times."
      : "Quần lót thấm hút cao cấp ANTCARE công nghệ 4 lớp thoáng khí: vừa là quần lót nguyệt san chống tràn ban đêm, vừa là quần lót chống són tiểu cho mẹ sau sinh & phụ nữ trung niên. Mỏng nhẹ, êm ái, giặt tái dùng hơn 100 lần.";

    const canonicalUrl = "https://antcare.vn/quan-lot-tham-hut";

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
    if (ogImage) ogImage.content = "https://antcare.vn/images/products/hero-multigen-asian-underwear-wide.jpg";

    // Structured Data Schema.org
    const schemaData = [
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "@id": "https://antcare.vn/quan-lot-tham-hut#product",
        "name": isEn 
          ? "ANTCARE Absorbent Underwear (Period & Incontinence)"
          : "Quần Lót Thấm Hút ANTCARE (Kinh Nguyệt & Són Tiểu)",
        "image": [
          "https://antcare.vn/images/products/hero-multigen-asian-underwear-wide.jpg",
          "https://antcare.vn/images/products/quan-lot-tham-hut.jpg"
        ],
        "description": isEn
          ? "Next-generation 4-layer absorbent underwear: absorbs menstrual flow and urinary leaks from 35ml to 50ml, antibacterial odor control, breathable and reusable over 100 washes."
          : "Quần lót thấm hút thế hệ mới công nghệ 4 lớp: thấm hút dịch kinh nguyệt và nước tiểu són rỉ từ 35ml đến 50ml, khử mùi ion kháng khuẩn, thoáng khí và có thể giặt tái sử dụng hơn 100 lần.",
        "brand": {
          "@type": "Brand",
          "name": "ANTCARE – Kiến chăm tổ"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "VND",
          "lowPrice": "249000",
          "highPrice": "1050000",
          "offerCount": "3"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "194"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": isEn 
              ? "Why can one pair be used for both menstruation and bladder leaks?"
              : "Tại sao 1 chiếc quần lại vừa dùng được cho kinh nguyệt, vừa dùng được cho són tiểu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isEn
                ? "Both menstrual flow and urine leaks require three core features: (1) Instant absorption to keep skin dry; (2) Core lock holding 35-50ml of liquid without backflow under pressure; (3) Breathable waterproof barrier preventing exterior leaks. ANTCARE's 4-layer bio-microfiber structure handles both viscous fluid (period) and thin liquid (urine) while eliminating 99% of ammonia odor."
                : "Cả dịch kinh nguyệt và nước tiểu rỉ són đều cần 3 tiêu chí cốt lõi: (1) Thấm hút tức thì để bề mặt da luôn khô thoáng; (2) Lõi khóa chặt 35 - 50ml chất lỏng không trào ngược khi ngồi đè lên; (3) Màng chống tràn thoáng khí ngăn rò rỉ ra trang phục ngoài. Cấu trúc 4 lớp dệt vi sợi sinh học của ANTCARE đáp ứng hoàn hảo cả chất lỏng có độ nhớt (máu kinh) lẫn chất lỏng loãng (nước tiểu), đồng thời triệt tiêu 99% mùi amoniac nhờ ion kháng khuẩn."
            }
          },
          {
            "@type": "Question",
            "name": isEn
              ? "How many ml can the underwear absorb? Does it leak when sleeping on your side?"
              : "Quần thấm được bao nhiêu ml? Có sợ bị tràn khi nằm nghiêng lúc ngủ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": isEn
                ? "The underwear absorbs 35ml to 50ml — equivalent to 3-4 regular pads or 2-3 sudden bladder leaks. The extended absorbent gusset runs from front to the back waistband, embracing body curves so you can sleep comfortably on your side without edge leakage."
                : "Quần có sức chứa từ 35ml đến 50ml chất lỏng — tương đương với 3-4 miếng băng vệ sinh thông thường hoặc 2-3 lần rỉ tiểu đột ngột khi ho, cười. Phần đáy thấm hút được thiết kế bản rộng kéo dài từ trước ra tận cạp sau, ôm trọn đường cong cơ thể giúp bạn hoàn toàn an tâm xoay người, nằm nghiêng ngủ đêm mà không lo tràn mép."
            }
          }
        ]
      }
    ];

    let scriptTag = document.getElementById('absorbent-underwear-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'absorbent-underwear-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [isEn]);

  const handleOpenOrder = (comboString, size = selectedSize, color = selectedColor) => {
    setModalCombo(comboString);
    setFormData(prev => ({
      ...prev,
      size,
      color
    }));
    setIsModalOpen(true);
    trackEvent('open_order_modal', { combo: comboString });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    trackEvent('submit_order_lead', {
      name: formData.name,
      phone: formData.phone,
      combo: modalCombo,
      size: formData.size,
      color: formData.color
    });
  };

  const faqItems = [
    {
      q: tr(
        "Tại sao 1 chiếc quần lại vừa dùng được cho kinh nguyệt, vừa dùng được cho són tiểu?",
        "Why can one pair of underwear be used for both menstruation and bladder leaks?"
      ),
      a: tr(
        "Cả dịch kinh nguyệt và nước tiểu rỉ són đều cần 3 tiêu chí cốt lõi: (1) Thấm hút tức thì để bề mặt da luôn khô thoáng; (2) Lõi khóa chặt 35 - 50ml chất lỏng không trào ngược khi ngồi đè lên; (3) Màng chống tràn thoáng khí ngăn rò rỉ ra trang phục ngoài. Cấu trúc 4 lớp dệt vi sợi sinh học của ANTCARE đáp ứng hoàn hảo cả chất lỏng có độ nhớt (máu kinh) lẫn chất lỏng loãng (nước tiểu), đồng thời triệt tiêu 99% mùi amoniac nhờ ion kháng khuẩn.",
        "Both menstrual flow and sudden urine leaks require three core capabilities: (1) Instant absorption to keep skin dry; (2) A locked core holding 35–50ml of liquid without backflow under pressure; (3) A breathable leakproof barrier preventing fluid from reaching outer clothing. ANTCARE's 4-layer bio-microfiber structure absorbs both viscous fluid (period blood) and fast-flowing liquid (urine) while neutralizing 99% of ammonia odor."
      )
    },
    {
      q: tr(
        "Quần thấm được bao nhiêu ml? Có sợ bị tràn khi nằm nghiêng lúc ngủ?",
        "How much liquid does it hold? Will it leak when sleeping on your side?"
      ),
      a: tr(
        "Quần có sức chứa từ 35ml đến 50ml chất lỏng — tương đương với 3-4 miếng băng vệ sinh thông thường hoặc 2-3 lần rỉ tiểu đột ngột khi ho, cười. Phần đáy thấm hút được thiết kế bản rộng kéo dài từ trước ra tận cạp sau, ôm trọn đường cong cơ thể giúp bạn hoàn toàn an tâm xoay người, nằm nghiêng ngủ đêm mà không lo tràn mép.",
        "The underwear holds 35ml to 50ml of liquid — equivalent to 3–4 regular sanitary pads or 2–3 sudden urine leaks when coughing or laughing. The extended absorbent gusset reaches all the way from front to the back waistband, embracing your body curves so you can toss, turn, and sleep on your side with zero leak anxiety."
      )
    },
    {
      q: tr(
        "Mặc quần cả ngày có bị ẩm ướt, hầm bí hay có mùi khó chịu không?",
        "Will wearing it all day feel damp, stuffy, or develop an unpleasant odor?"
      ),
      a: tr(
        "Hoàn toàn không. Lớp vải tiếp xúc da dệt từ sợi tre hữu cơ tự nhiên có cơ chế mao dẫn một chiều: dịch lỏng được hút sâu xuống lõi chỉ sau 1-2 giây, giữ bề mặt tiếp xúc luôn khô ráo. Lớp lõi kháng khuẩn ion bạc ngăn chặn vi khuẩn phát triển, khử sạch 99% mùi hôi đặc trưng suốt cả ngày dài.",
        "Not at all. The skin-contact layer is made of natural organic honeycomb bamboo fabric with one-way wicking: liquid is drawn deep into the core within 1–2 seconds, keeping the surface completely dry. Natural antibacterial silver ions inhibit bacterial growth, neutralizing 99% of characteristic odors all day long."
      )
    },
    {
      q: tr(
        "Quần có dày cộm và bị lộ viền khi mặc váy ôm hay quần sáng màu?",
        "Is it bulky or visible under bodycon dresses or light-colored trousers?"
      ),
      a: tr(
        "Không. Quần được may theo công nghệ ép viền nhiệt liền mạch (seamless) với độ mỏng vùng đáy chỉ khoảng 2mm — mỏng hơn nhiều so với việc mang băng vệ sinh hay tã dán. Khi diện chân váy bút chì, quần âu công sở hay đồ tập yoga, quần hoàn toàn phẳng mịn và vô hình dưới trang phục.",
        "No. The underwear is constructed using seamless heat-bonding technology with a gusset thickness of just ~2mm — far thinner than wearing a disposable pad or adult diaper. When wearing pencil skirts, office trousers, or yoga leggings, the underwear remains completely smooth and invisible."
      )
    },
    {
      q: tr(
        "Giặt có khó sạch không? Vết máu kinh có ra hết không?",
        "Is it difficult to wash? Do menstrual stains come out completely?"
      ),
      a: tr(
        "Rất dễ giặt. Bạn chỉ cần xả sơ đáy quần dưới vòi nước lạnh trong 30 giây cho trôi bớt dịch, sau đó giặt tay hoặc cho vào máy giặt (dùng túi giặt ANTCARE tặng kèm) cùng bột giặt thông thường. Lưu ý: Không dùng nước nóng và không dùng nước xả vải đặc (để bảo toàn cấu trúc thấm hút của sợi vải). Phơi khô tự nhiên nơi thoáng gió.",
        "Very easy. Simply rinse the gusset under cold running water for 30 seconds to release fluid, then hand wash or place in a laundry net in the washing machine with standard detergent. Note: Do not use hot water or heavy fabric softeners (to preserve fiber absorbency). Air dry naturally in a ventilated area."
      )
    },
    {
      q: tr(
        "Một chiếc quần có thể dùng lại trong bao lâu?",
        "How long can one pair of underwear be reused?"
      ),
      a: tr(
        "Quần lót thấm hút ANTCARE được kiểm nghiệm độ bền vượt trội qua hơn 100 lần giặt, tương đương thời gian sử dụng từ 2 đến 3 năm. Điều này giúp bạn tiết kiệm hàng triệu đồng mua băng vệ sinh dùng 1 lần và bảo vệ môi trường khỏi hàng ngàn miếng rác thải khó phân hủy.",
        "ANTCARE absorbent underwear is rigorously tested for exceptional durability over 100+ washes, equivalent to 2 to 3 years of regular use. This saves millions of VND on single-use disposables and prevents thousands of plastic pads from entering landfills."
      )
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#1C1917] selection:text-white min-h-screen">
      
      {/* 1. TOP MINIMALIST ANNOUNCEMENT BAR */}
      <div className="bg-[#F3ECE5] border-b border-[#E8DFD5] py-2 px-4 text-center">
        <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#57534E] uppercase">
          {tr(
            "Miễn phí vận chuyển toàn quốc cho đơn hàng từ 2 chiếc • Đổi size miễn phí trong 7 ngày",
            "Free nationwide shipping on orders of 2+ items • Free size exchange within 7 days"
          )}
        </p>
      </div>

      {/* 2. FULL-BLEED HERO BANNER */}
      <section className="relative w-full min-h-[82vh] md:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#FAF8F5]">
        
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/products/hero-saalt-style-asian.jpg"
            alt={tr(
              "ANTCARE Quần lót thấm hút thế hệ mới - Cảm giác nhẹ tênh, bảo vệ không rò rỉ",
              "ANTCARE Next-Gen Absorbent Underwear - Lightweight Comfort, Zero Leaks"
            )}
            className="w-full h-full object-cover object-[85%_center] md:object-right select-none"
          />
          
          {/* Subtle Desktop Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/85 via-[#FAF8F5]/35 via-25% to-transparent hidden md:block w-full max-w-[36%]" />
          
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/20 md:hidden" />
        </div>

        {/* Hero Overlay Content */}
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 w-full relative z-10 py-16 md:py-24">
          <div className="max-w-[420px] md:max-w-[460px] lg:max-w-[500px] space-y-5 md:space-y-6">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1C1917] leading-[1.15] tracking-tight">
              <span className="block whitespace-nowrap">{tr("Cảm giác nhẹ tênh,", "Lightweight comfort,")}</span>
              <span className="block whitespace-nowrap">{tr("bảo vệ không rò rỉ.", "zero leaks.")}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#57534E] leading-relaxed font-normal max-w-[400px]">
              {tr(
                "Tạm biệt cảm giác ẩm bí của băng vệ sinh hay tã lót. Một lựa chọn mỏng hơn, khô thoáng hơn và êm ái hơn bao giờ hết.",
                "Say goodbye to the stuffy feeling of disposable pads or adult diapers. A choice that is thinner, drier, and softer than ever."
              )}
            </p>

            <div className="pt-2">
              <a
                href="#dat-mua-nhanh"
                className="inline-block bg-[#1C1917] hover:bg-[#332E2B] text-white font-bold text-xs sm:text-sm px-9 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                {tr("Chọn Quần Thấm Hút ANTCARE", "Shop ANTCARE Underwear")}
              </a>
            </div>

          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-[#1C1917] shadow-xs"></span>
          <span className="w-2 h-2 rounded-full bg-[#1C1917]/30"></span>
          <span className="w-2 h-2 rounded-full bg-[#1C1917]/30"></span>
        </div>

      </section>

      {/* 3. MINIMALIST STATEMENT BANNER */}
      <section className="py-12 bg-white border-y border-[#E8DFD5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6D58]">
            {tr("Định Nghĩa Lại Trải Nghiệm Đồ Lót", "Redefining Underwear Experience")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1C1917] leading-snug">
            {tr(
              "“Được thiết kế để bạn quên đi cảm giác mình đang trong kỳ kinh nguyệt hay lo sợ từng cơn ho són tiểu.”",
              "“Designed so you can forget you are on your period or fearing sudden leaks when coughing.”"
            )}
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] pt-1">
            {tr(
              "Không sột soạt. Không xô lệch. Không mùi khó chịu. Mặc tự nhiên, thoải mái suốt 365 ngày.",
              "No rustling. No shifting. No odor. Wear naturally and comfortably 365 days a year."
            )}
          </p>
        </div>
      </section>

      {/* 3.1 LIFECYCLE: MULTI-GENERATIONAL CARDS */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8C6D58]">
              {tr("ĐỒNG HÀNH MỌI GIAI ĐOẠN CUỘC ĐỜI", "SUPPORTING EVERY STAGE OF LIFE")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917]">
              {tr("Thiết Kế Chuyên Biệt Cho Mọi Độ Tuổi", "Tailored Designs for Every Life Stage")}
            </h2>
            <p className="text-sm text-[#57534E]">
              {tr(
                "Từ kỳ kinh đầu tiên của tuổi dậy thì đến những chuyển biến nội tiết tuổi mãn kinh, cơ thể người phụ nữ luôn xứng đáng được nâng niu.",
                "From the first period of puberty to hormonal changes during menopause, a woman's body always deserves gentle care."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Teens */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE5] text-[#8C6D58] text-[11px] font-bold uppercase tracking-wider">
                  {tr("Tuổi Teen & Dậy Thì", "Teens & Puberty")}
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  {tr("Khởi đầu nhẹ nhàng, tự tin tại trường học", "Gentle beginnings, confidence at school")}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {tr(
                    "Xóa tan nỗi lo âu tràn dịch ra ghế lớp học hay phải quấn áo khoác ngang hông. Mỏng nhẹ kín đáo dưới đồng phục, tự tin chạy nhảy, thể thao mà không sợ xô lệch.",
                    "Eliminate the fear of leaks on school chairs or having to tie a jacket around your waist. Discreet under school uniforms, allowing active play and sports without worry."
                  )}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E9E1] text-[11px] font-bold text-[#8C6D58]">
                {tr("#KinhNguyệtĐầuĐời #TuổiDậyThì", "#FirstPeriod #PubertyConfidence")}
              </div>
            </div>

            {/* Card 2: Young Women & Postpartum */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE5] text-[#8C6D58] text-[11px] font-bold uppercase tracking-wider">
                  {tr("Cô Gái Trẻ & Mẹ Sau Sinh", "Young Women & New Mothers")}
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  {tr("Năng động công sở, yoga & hồi phục sau sinh", "Active at work, yoga & postpartum recovery")}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {tr(
                    "Tạm biệt cảm giác bí bách của băng vệ sinh ngày đèn đỏ. Thoải mái diện đầm ôm công sở, tập gym, đồng thời kiểm soát êm ái rỉ tiểu sau sinh do giãn sàn chậu.",
                    "Say goodbye to the stuffiness of sanitary pads. Wear form-fitting office dresses, workout at the gym, and gently manage postpartum pelvic floor leaks."
                  )}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E9E1] text-[11px] font-bold text-[#8C6D58]">
                {tr("#TựDoVậnĐộng #PhụcHồiSauSinh", "#FreedomToMove #PostpartumCare")}
              </div>
            </div>

            {/* Card 3: Mature Women & Menopause */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE5] text-[#8C6D58] text-[11px] font-bold uppercase tracking-wider">
                  {tr("Phụ Nữ Trung Niên & Mãn Kinh", "Mature & Menopausal Women")}
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  {tr("An tâm cười lớn, ho, hắt hơi không lo rỉ tiểu", "Laugh freely, cough, sneeze without fear of leaks")}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {tr(
                    "Giải quyết triệt để tình trạng són tiểu gắng sức khi cười to, ho hoặc xách đồ nặng. Khóa ẩm tức thì, triệt tiêu 99% mùi amoniac, giữ trọn sự thanh lịch và tự tôn.",
                    "Effectively solve stress urinary incontinence when laughing, coughing, or lifting heavy objects. Instant moisture lock, neutralizing 99% of ammonia odor, preserving elegance and dignity."
                  )}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E9E1] text-[11px] font-bold text-[#8C6D58]">
                {tr("#TiềnMãnKinh #SónTiểuGắngSức", "#Perimenopause #StressIncontinence")}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3.2 MENSTRUAL SOLUTIONS COMPARISON */}
      <section id="so-sanh-giai-phap" className="py-16 md:py-24 bg-white border-t border-[#E8DFD5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] tracking-tight">
              {tr("Lựa chọn phù hợp nhất cho ngày kinh nguyệt", "The Best Choice for Menstrual Care")}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              {tr(
                "So sánh chi tiết cốc nguyệt san, tampon, băng vệ sinh và quần lót nguyệt san — giúp bạn chọn đúng giải pháp an toàn, không xâm lấn, khô thoáng và tự do vận động suốt chu kỳ.",
                "Detailed comparison between menstrual cups, tampons, disposable pads, and period underwear — helping you choose a safe, non-invasive, dry, and freeing solution."
              )}
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            
            {/* OPTION 1: MENSTRUAL CUP */}
            <div 
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="1" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FCE7F3]/40 shadow-xs">
                    <img 
                      src="/images/products/so-sanh-coc-nguyet-san.jpg" 
                      alt={tr("1 chiếc cốc nguyệt san silicon y tế đặt sâu bên trong âm đạo", "Medical silicone menstrual cup")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9F1239] bg-[#FFE4E6] px-2.5 py-1 rounded-full self-start">
                    {tr("Kén Cơ Địa", "Complex Fit")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Cốc Nguyệt San", "Menstrual Cup")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">
                    {tr("Đặt sâu bên trong âm đạo", "Inserted into vaginal canal")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#9F1239] text-[11px] uppercase tracking-wider">
                    {tr("Điểm bất lợi & Rào cản lớn:", "Disadvantages & Barriers:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Không dùng cho bạn gái trẻ chưa quan hệ (nguy cơ rách màng trinh).", "Not suitable for young teens without sexual experience.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Chống chỉ định y tế: Phụ nữ mới sinh con, phụ nữ đặt vòng tránh thai (dễ tụt/lệch vòng).", "Contraindicated for postpartum women or IUD users (vacuum suction may dislodge IUD).")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Nguy cơ viêm nhiễm: Tuyệt đối tránh khi bị viêm âm đạo hoặc có tiền sử Sốc Độc Tố (TSS).", "Infection risk: Avoid during yeast infections or history of Toxic Shock Syndrome (TSS).")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Kén cấu tạo cơ thể: Rất khó đưa vào/lấy ra nếu âm đạo hẹp hoặc cổ tử cung thấp.", "Difficult insertion/removal with narrow anatomy or low cervix.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Vệ sinh phức tạp: Phải luộc tiệt trùng; cực kỳ bất tiện khi thay ở nơi công cộng.", "Complex sanitization: Requires boiling sterilization; inconvenient in public bathrooms.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                {tr("Mức độ thuận tiện: Thấp (đòi hỏi kỹ thuật cao)", "Convenience: Low (steep learning curve)")}
              </div>
            </div>

            {/* OPTION 2: TAMPON */}
            <div 
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="2" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#F3E8FF]/40 shadow-xs">
                    <img 
                      src="/images/products/so-sanh-tampon.jpg" 
                      alt={tr("1 que tampon sợi bông hữu cơ", "Organic cotton tampon")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B21A8] bg-[#F3E8FF] px-2.5 py-1 rounded-full self-start">
                    {tr("Nguy Cơ TSS", "TSS Risk")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Tampon (Băng Que)", "Tampons")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">
                    {tr("Đặt sâu bên trong âm đạo", "Inserted into vaginal canal")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#6B21A8] text-[11px] uppercase tracking-wider">
                    {tr("Điểm bất lợi & Nguy cơ sức khỏe:", "Health Risks & Drawbacks:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Nguy cơ Hội chứng Sốc Độc Tố (TSS): Máu ứ đọng tạo điều kiện vi khuẩn sinh độc tố nguy hiểm.", "Risk of Toxic Shock Syndrome (TSS) due to trapped blood fostering bacterial toxins.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Giới hạn thời gian khắt khe: Tối đa 4–6 tiếng; không an toàn để ngủ xuyên đêm.", "Strict time limit: Max 4–6 hours; unsafe for overnight sleep.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Hút cạn dịch tự nhiên: Gây khô rát, xước niêm mạc âm đạo khi rút ra; mất cân bằng pH.", "Dries natural moisture: Causes vaginal dryness, friction micro-tears, and pH imbalance.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Không dùng cho người chưa quan hệ hoặc đang điều trị viêm phụ khoa.", "Not suitable without prior sexual experience or during vaginal infection.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                {tr("Mức độ rủi ro: Cần thận trọng cao độ", "Risk Level: High caution required")}
              </div>
            </div>

            {/* OPTION 3: DISPOSABLE PADS */}
            <div 
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="3" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#F3F4F6] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-bang-ve-sinh.jpg" 
                      alt={tr("1 miếng băng vệ sinh dùng 1 lần có cánh", "Disposable sanitary pad with wings")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#374151] bg-[#E5E7EB] px-2.5 py-1 rounded-full self-start">
                    {tr("Ẩm Bí & Tràn Mép", "Stuffy & Leaks")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Băng Vệ Sinh Dùng 1 Lần", "Disposable Pads")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">
                    {tr("Dán cố định vào đáy quần lót", "Adhered to underwear gusset")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#374151] text-[11px] uppercase tracking-wider">
                    {tr("Nhược điểm thường trực hàng tháng:", "Monthly Drawbacks:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Hầm bí, ẩm ướt & ngứa ngáy: Dễ gây hăm đỏ, viêm da tiếp xúc và cọ xát rát bẹn.", "Stuffy, damp & itchy: Causes rashes, contact dermatitis, and groin chafing.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Dễ xô lệch & tràn mép: Miếng dán co dúm khi vận động; nỗi ám ảnh lo tràn ố đệm khi ngủ nghiêng.", "Shifts & bunches: Sticky wings crumple during movement; fear of stains when sleeping on your side.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Mùi hôi khó chịu: Máu kinh ứ đọng kết hợp hóa chất tẩy trắng sinh mùi bí nồng.", "Unpleasant odor: Stagnant blood mixed with bleach chemicals creates a foul, stuffy odor.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Gánh nặng rác thải: Thải ra hơn 10.000 miếng rác nhựa khó phân hủy (mất tới 500 năm).", "Massive landfill waste: Over 10,000 non-biodegradable plastic pads per woman (500 years to decompose).")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                {tr("Mức độ thoải mái: Thấp (cộm ngứa & xô lệch)", "Comfort Level: Low (chafing & shifting)")}
              </div>
            </div>

            {/* OPTION 4: ANTCARE PERIOD UNDERWEAR */}
            <div 
              className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-7 border-2 border-[#1C1917] flex flex-col justify-between shadow-lg relative transform lg:-translate-y-2 transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="4" />
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                {tr("★ Giải Pháp Đột Phá Toàn Diện ★", "★ Breakthrough Total Solution ★")}
              </div>

              <div className="space-y-4 mt-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#D6C7B8] bg-[#EFE6DD] shadow-xs ring-2 ring-[#1C1917]/10">
                    <img 
                      src="/images/products/so-sanh-quan-nguyet-san.jpg" 
                      alt={tr("Quần lót nguyệt san ANTCARE kháng khuẩn chống tràn 360 độ", "ANTCARE Period Underwear")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full self-start">
                    {tr("An Toàn 100%", "100% Safe")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Quần Nguyệt San ANTCARE", "ANTCARE Period Panties")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-bold mt-0.5">
                    {tr("Mặc tự nhiên như đồ lót thường ngày", "Worn naturally just like normal lingerie")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#1C1917] pt-2 border-t border-[#D6C7B8]">
                  <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <span>✓</span> {tr("Giải quyết triệt để mọi nhược điểm:", "Solves every single drawback:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("100% Không xâm lấn: An toàn cho bạn gái tuổi teen, mẹ bỉm sau sinh, người đặt vòng tránh thai.", "100% Non-invasive: Safe for teens, postpartum moms, and IUD users.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("0% Nguy cơ Sốc Độc Tố (TSS): Không đưa vật lạ vào cơ thể, bảo vệ trọn vẹn pH tự nhiên.", "0% Toxic Shock Syndrome (TSS) risk: Preserves natural flora & pH.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Khô thoáng tức thì (2 giây): Sợi tre tổ ong hút sâu chất lỏng, bề mặt luôn khô ráo.", "Instant dry in 2 seconds: Honeycomb bamboo wicks fluid deep into core.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Chống tràn 360° ban đêm: Bản đáy kéo dài tận cạp sau, chứa 35–50ml chất lỏng.", "360° Overnight leakproof: Extended gusset to back waistband holding 35–50ml.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Khử 99% mùi & Tái dùng >100 lần: Ion kháng khuẩn tự nhiên, giặt phơi dễ dàng.", "Odor-free & washable >100 times: Natural antibacterial ions, saves money.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4">
                <a
                  href="#dat-mua-nhanh"
                  className="w-full py-3 rounded-full bg-[#1C1917] hover:bg-[#332E2B] text-white text-xs font-bold transition-all text-center block uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  {tr("Chọn Quần Nguyệt San Ngay", "Shop Period Underwear")}
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              💡 <strong>{tr("Kết luận:", "Takeaway:")}</strong> {tr(
                "Không cần lo ngại rủi ro sốc độc tố của tampon, sự phức tạp của cốc nguyệt san hay cảm giác ẩm bí cộm ngứa của băng vệ sinh. Quần lót nguyệt san ANTCARE mang đến sự tự do trọn vẹn — vừa êm thoáng như đồ lót thường, vừa bảo vệ không rò rỉ suốt 365 ngày.",
                "No need to worry about toxic shock syndrome from tampons, the complexity of menstrual cups, or the damp discomfort of disposable pads. ANTCARE period underwear brings complete freedom — as soft and breathable as regular lingerie, while protecting against leaks 365 days a year."
              )}
            </p>
          </div>

        </div>
      </section>

      {/* 4. INCONTINENCE SOLUTIONS COMPARISON */}
      <section id="so-sanh-son-tieu" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#E8DFD5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] tracking-tight">
              {tr("Lựa chọn phù hợp nhất cho tình trạng són tiểu", "The Best Choice for Bladder Leaks & Incontinence")}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              {tr(
                "So sánh chi tiết tã lót người lớn, quần lót thông thường, băng vệ sinh và quần lót chống són tiểu ANTCARE — giúp mẹ sau sinh và phụ nữ trung niên lấy lại sự tự tin, khô thoáng và giữ trọn lòng tự tôn.",
                "Detailed comparison between adult diapers, regular underwear, sanitary pads, and ANTCARE incontinence panties — helping new mothers and mature women regain confidence, dryness, and dignity."
              )}
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            
            {/* INCONTINENCE OPTION 1: ADULT DIAPERS */}
            <div 
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="1" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-ta-nguoi-lon.jpg" 
                      alt={tr("1 chiếc tã quần người lớn dùng 1 lần", "Adult disposable diaper")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9F1239] bg-[#FFE4E6] px-2.5 py-1 rounded-full self-start">
                    {tr("Dày Cộm & Mặc Cảm", "Bulky & Stigmatizing")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Tã Dán / Tã Quần Người Lớn", "Adult Diapers / Pull-ups")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">
                    {tr("Dành cho bệnh nhân nặng nằm một chỗ", "Designed for bedridden patients")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#9F1239] text-[11px] uppercase tracking-wider">
                    {tr("Nhược điểm với són tiểu nhẹ & vừa:", "Drawbacks for light-to-moderate leaks:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Dày cộm & phát tiếng sột soạt: Lộ rõ từng nếp gồ ghề dưới váy ôm hay quần âu, phát tiếng động khi bước đi.", "Bulky & noisy: Visible bulges under office clothes; rustling sounds when walking.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Hầm bí & tổn thương da: Màng nilon giữ nhiệt và hơi ẩm nhiều giờ liền, dễ gây hăm ngứa, rát đỏ.", "Stuffy & skin irritation: Plastic backing traps heat and humidity, causing chafing and dermatitis.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Mùi khai amoniac dễ phát tán: Không có cơ chế bẻ gãy mùi sinh học, dễ bốc mùi khai nồng.", "Ammonia odor spreads: No bio-odor breakdown, leading to embarrassing smells.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Chi phí đắt đỏ & rác thải lớn: Mua dùng mỗi ngày tốn tiền triệu mỗi tháng.", "Costly & wasteful: Millions of VND per month on non-biodegradable waste.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                {tr("Mức độ thẩm mỹ: Cực thấp (lộ rõ dưới đồ mặc)", "Aesthetics: Very low (visible bulges)")}
              </div>
            </div>

            {/* INCONTINENCE OPTION 2: REGULAR COTTON UNDERWEAR */}
            <div 
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="2" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-quan-lot-thuong.jpg" 
                      alt={tr("Quần lót cotton thông thường vải mỏng không chống tràn", "Regular cotton underwear")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FEF3C7] px-2.5 py-1 rounded-full self-start">
                    {tr("0% Chống Rò Rỉ", "0% Leak Protection")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Quần Lót Thông Thường", "Regular Underwear")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">
                    {tr("Chỉ lót thêm khăn mỏng hoặc giấy ăn", "Often layered with tissue")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#B45309] text-[11px] uppercase tracking-wider">
                    {tr("Hậu quả khi bị rỉ tiểu đột ngột:", "Risks during sudden leaks:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Ướt sũng ra trang phục ngoài ngay lập tức: Vải cotton mỏng không có màng ngăn, ngấm loang lổ ra váy ngoài.", "Soaks outer clothing immediately: Thin cotton has no barrier, causing visible stains on skirts/pants.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Bốc mùi khai nồng nặc: Nước tiểu tiếp xúc không khí sinh mùi amoniac gắt, gây xấu hổ.", "Pungent ammonia odor: Air exposure accelerates ammonia smell in public.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Ẩm ướt, lạnh buốt đáy quần: Cảm giác dính ướt cả ngày, kích ứng vùng kín.", "Cold, wet discomfort: Clammy dampness all day increases urethral infection risk.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{tr("Lót giấy ăn bở nát, mất vệ sinh: Giấy vụn dính chặt vào da, ngứa ngáy.", "Crumbled tissue mess: Wet tissue shreds stick to skin, causing itchiness and poor hygiene.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                {tr("Mức độ an toàn: 0% (nguy cơ hoen ố trang phục cao)", "Safety Level: 0% (high stain risk)")}
              </div>
            </div>

            {/* INCONTINENCE OPTION 3: DISPOSABLE PADS */}
            <div 
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="3" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-bang-ve-sinh.jpg" 
                      alt={tr("1 miếng băng vệ sinh dùng 1 lần có cánh dán đáy quần", "Disposable sanitary pad")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#374151] bg-[#E5E7EB] px-2.5 py-1 rounded-full self-start">
                    {tr("Dễ Tràn Mép & Khai Nồng", "Edge Leaks & Odor")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Băng Vệ Sinh Dùng 1 Lần", "Disposable Pads")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">
                    {tr("Thiết kế cho máu kinh, không phải nước tiểu", "Designed for periods, not urine")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#374151] text-[11px] uppercase tracking-wider">
                    {tr("Sai lầm phổ biến khi dùng cho són tiểu:", "Common Pitfalls for Incontinence:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Không bắt kịp tốc độ rỉ tiểu: Nước tiểu loãng bắn nhanh sẽ bị trào ngược sang hai mép bẹn.", "Cannot catch sudden flow: Thin urine shoots rapidly, overflowing side edges.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Thấm ngược khi ngồi đè lên: Gel BVS chịu lực kém; ngồi xuống nước tiểu bị ép ngược ra ngoài.", "Backflow under pressure: Gel pad crushes when sitting, squeezing wetness back onto skin.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Mùi hương liệu trộn mùi khai: Hương thơm nhân tạo trộn amoniac tạo mùi nồng gắt.", "Perfume mixes with ammonia: Artificial fragrance produces a sickening mixed scent.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{tr("Xô lệch, cọ xát rát bẹn: Miếng dán co dúm khi đi lại gây đau rát viền đùi.", "Shifting & groin friction: Sticky adhesive shifts during movement, chafing inner thighs.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                {tr("Mức độ an tâm: Kém (luôn nơm nớp lo tràn mép)", "Peace of Mind: Poor (constant fear of edge leaks)")}
              </div>
            </div>

            {/* INCONTINENCE OPTION 4: ANTCARE INCONTINENCE UNDERWEAR */}
            <div 
              className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-7 border-2 border-[#1C1917] flex flex-col justify-between shadow-lg relative transform lg:-translate-y-2 transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="4" />
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                {tr("★ Giải Pháp Hoàn Hảo 100% ★", "★ 100% Perfect Solution ★")}
              </div>

              <div className="space-y-4 mt-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#D6C7B8] bg-[#EFE6DD] shadow-xs ring-2 ring-[#1C1917]/10">
                    <img 
                      src="/images/products/so-sanh-quan-son-tieu.jpg" 
                      alt={tr("1 chiếc quần lót chống són tiểu ANTCARE mỏng nhẹ vô hình", "ANTCARE Incontinence Underwear")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full self-start">
                    {tr("Tự Tin Tuyệt Đối", "Absolute Confidence")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">
                    {tr("Quần Chống Són Tiểu ANTCARE", "ANTCARE Incontinence Panties")}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-bold mt-0.5">
                    {tr("Thanh lịch & vô hình như đồ lót thời trang", "Invisible & elegant just like luxury lingerie")}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#1C1917] pt-2 border-t border-[#D6C7B8]">
                  <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <span>✓</span> {tr("Giải quyết triệt để mọi nỗi lo són tiểu:", "Completely solves bladder leak concerns:")}
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Mỏng nhẹ ~2mm, vô hình 100%: Ép nhiệt seamless không viền, không lộ dưới đầm ôm.", "Ultra-thin ~2mm, 100% invisible: Seamless heat-bonded edges, completely smooth under skirts.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Khóa ẩm tức thì (2 giây): Vi sợi sinh học hút sâu 35–50ml, không trào ngược khi ngồi đè lên.", "Locks moisture in 2s: Bio-microfibers absorb 35–50ml, zero backflow when seated.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Triệt tiêu 99% mùi amoniac: Ion bạc kháng khuẩn bẻ gãy phân tử mùi khai suốt 24h.", "Eliminates 99% ammonia odor: Antibacterial silver ions destroy odor molecules 24/7.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Tự do tận hưởng cuộc sống: Thoải mái cười lớn, ho, hắt hơi, tập thể dục, khiêu vũ.", "Live with freedom: Laugh loudly, cough, sneeze, exercise, and dance without worry.")}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{tr("Tái sử dụng >100 lần (bền 2-3 năm): Giặt máy dễ dàng, tiết kiệm hàng chục triệu đồng.", "Reusable >100 washes (lasts 2–3 yrs): Machine washable, saves millions of VND.")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4">
                <a
                  href="#dat-mua-nhanh"
                  className="w-full py-3 rounded-full bg-[#1C1917] hover:bg-[#332E2B] text-white text-xs font-bold transition-all text-center block uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  {tr("Chọn Quần Chống Són Tiểu Ngay", "Shop Incontinence Underwear")}
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DFD5] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              💡 <strong>{tr("Kết luận:", "Takeaway:")}</strong> {tr(
                "Són tiểu gắng sức không phải là dấu chấm hết cho sự thanh lịch. Không cần chấp nhận cảm giác dày cộm mặc cảm của tã người lớn, sự bất tiện của BVS hay nỗi sợ ướt quần lót thường. Quần lót chống són tiểu ANTCARE trả lại sự tự tin, tự do cười vui và lòng tự tôn trọn vẹn cho phụ nữ.",
                "Stress incontinence is not the end of elegance. You don't have to accept the bulky stigma of adult diapers, the inconvenience of pads, or the fear of wet underwear. ANTCARE incontinence panties restore confidence, joyful laughter, and total dignity for women."
              )}
            </p>
          </div>

        </div>
      </section>

      {/* 5. 4-LAYER TECHNOLOGY BREAKDOWN */}
      <section id="cau-tao-4-lop" className="py-16 md:py-24 bg-white border-y border-[#E8DFD5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#8C6D58]">
              {tr("BÊN TRONG CHIẾC QUẦN", "INSIDE THE UNDERWEAR")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] tracking-tight">
              {tr("Cấu Tạo 4 Lớp Mỏng Nhẹ, Khóa Ẩm Tuyệt Đối", "4-Layer Ultra-Thin Tech, Absolute Moisture Lock")}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto">
              {tr(
                "Độ dày vùng đáy chỉ xấp xỉ 2mm nhưng sở hữu sức chứa gấp 4 lần quần lót thường — khóa chặt 35–50ml chất lỏng và triệt tiêu 99% mùi khó chịu.",
                "Gusset thickness is only ~2mm, yet holds 4x more liquid than regular underwear — locking 35–50ml of liquid and eliminating 99% of odor."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs group">
                
                <img 
                  src="/images/products/minh-hoa-cau-tao-4-lop.jpg" 
                  alt={tr(
                    "Minh họa bóc tách 3D cấu tạo 4 lớp công nghệ siêu mỏng 2mm quần lót thấm hút ANTCARE",
                    "3D 4-Layer Technology Breakdown Diagram"
                  )}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#E8DFD5] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] shadow-xs flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  {tr("Cấu Trúc 4 Lớp Siêu Mỏng 2mm", "2mm Ultra-Thin 4-Layer Structure")}
                </div>

                {/* Layer 01 callout */}
                <div className="absolute top-[18%] left-2.5 sm:left-4 flex items-center gap-1 sm:gap-2 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">01</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">
                        {tr("Sợi tre tổ ong", "Honeycomb Bamboo")}
                      </strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">
                      {tr("Hút sâu 2s, khô thoáng da", "Wicks in 2s, dry skin")}
                    </span>
                  </div>
                  <span className="w-3 sm:w-6 h-px bg-[#8C6D58] shrink-0"></span>
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#8C6D58] ring-2 sm:ring-4 ring-[#8C6D58]/20 shrink-0"></span>
                </div>

                {/* Layer 02 callout */}
                <div className="absolute top-[35%] right-2.5 sm:right-4 flex items-center gap-1 sm:gap-2 z-10">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#1C1917] ring-2 sm:ring-4 ring-[#1C1917]/20 shrink-0"></span>
                  <span className="w-3 sm:w-6 h-px bg-[#1C1917] shrink-0"></span>
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">02</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">
                        {tr("Lõi vi sợi nén", "Microfiber Core")}
                      </strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">
                      {tr("Khóa chặt 35–50ml", "Locks 35–50ml")}
                    </span>
                  </div>
                </div>

                {/* Layer 03 callout */}
                <div className="absolute top-[52%] left-2.5 sm:left-4 flex items-center gap-1 sm:gap-2 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">03</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">
                        {tr("Màng nano TPU", "Nano TPU Film")}
                      </strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">
                      {tr("Chống thấm 100%, thoáng khí", "100% Waterproof, breathable")}
                    </span>
                  </div>
                  <span className="w-3 sm:w-6 h-px bg-emerald-700 shrink-0"></span>
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-700 ring-2 sm:ring-4 ring-emerald-700/20 shrink-0"></span>
                </div>

                {/* Layer 04 callout */}
                <div className="absolute top-[69%] right-2.5 sm:right-4 flex items-center gap-1 sm:gap-2 z-10">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#9333EA] ring-2 sm:ring-4 ring-[#9333EA]/20 shrink-0"></span>
                  <span className="w-3 sm:w-6 h-px bg-[#9333EA] shrink-0"></span>
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">04</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">
                        {tr("Vải ngoài seamless", "Seamless Shell")}
                      </strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">
                      {tr("Mềm mượt lụa, không lộ viền", "Silky soft, zero lines")}
                    </span>
                  </div>
                </div>

              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] space-y-1">
                <div className="text-[11px] font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span> {tr("Tiêu chuẩn kiểm nghiệm da liễu", "Dermatologically Tested Standard")}
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  {tr(
                    "100% không chứa hóa chất tẩy trắng huỳnh quang, không chứa Dioxin, không hương liệu nhân tạo gây kích ứng vùng nhạy cảm.",
                    "100% free of fluorescent bleaching chemicals, dioxins, and artificial fragrances that irritate intimate skin."
                  )}
                </p>
              </div>
            </div>

            {/* Right column: 4 layer cards */}
            <div className="lg:col-span-6 space-y-3">
              
              {/* Layer 1 Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#8C6D58] hover:shadow-xs transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0 shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#8C6D58]" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2L19 6V14L12 18L5 14V6L12 2Z" strokeLinejoin="round"/>
                      <path d="M12 7V13M9 10L12 13L15 10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[#8C6D58] font-mono">01</span>
                      <h3 className="font-bold text-sm text-[#1C1917] truncate">
                        {tr("Lớp Tiếp Xúc Da Khô Thoáng (Stay-Dry)", "Stay-Dry Skin-Contact Layer")}
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {tr(
                        "Sợi tre dệt tổ ong hữu cơ mao dẫn 1 chiều. Hút chất lỏng xuống tầng dưới trong 1-2 giây, giữ bề mặt luôn khô ráo và êm dịu cho da.",
                        "One-way capillary organic honeycomb bamboo fabric. Draws liquid down in 1–2 seconds, keeping the skin surface dry and soothingly soft."
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Layer 2 Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#8C6D58] hover:shadow-xs transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0 shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#1C1917]" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="6" width="18" height="12" rx="3" strokeLinejoin="round"/>
                      <path d="M7 10H17M7 14H14" strokeLinecap="round"/>
                      <circle cx="16" cy="14" r="1.2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[#8C6D58] font-mono">02</span>
                      <h3 className="font-bold text-sm text-[#1C1917] truncate">
                        {tr("Lõi Vi Sợi Siêu Thấm Hút (Absorbent Core)", "Super Absorbent Microfiber Core")}
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {tr(
                        "Sợi Microfiber nén mật độ cao ngậm dịch gấp 10 lần trọng lượng. Khóa chặt 35–50ml chất lỏng, không bị tràn ngược khi ngồi đè lên.",
                        "High-density compressed microfiber holds 10x its weight. Locks 35–50ml of liquid securely without backflow when seated."
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Layer 3 Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#8C6D58] hover:shadow-xs transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0 shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3L4 7V12C4 17 8 20 12 21C16 20 20 17 20 12V7L12 3Z" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[#8C6D58] font-mono">03</span>
                      <h3 className="font-bold text-sm text-[#1C1917] truncate">
                        {tr("Màng Nano Chống Thấm Thoáng Khí (TPU)", "Breathable Waterproof Nano TPU Barrier")}
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {tr(
                        "Chặn đứng 100% phân tử nước không cho thấm ra ngoài, đồng thời giải phóng hơi ẩm giúp vùng kín luôn mát mẻ, không bí bách.",
                        "Blocks 100% of liquid molecules from leaking outside while releasing moisture vapor, keeping intimate areas cool and breathable."
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Layer 4 Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] hover:border-[#8C6D58] hover:shadow-xs transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8DFD5] flex items-center justify-center shrink-0 shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#9333EA]" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 12H20M12 4V20" strokeLinecap="round"/>
                      <path d="M7 9L4 12L7 15M17 9L20 12L17 15M9 7L12 4L15 7M9 17L12 20L15 17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[#8C6D58] font-mono">04</span>
                      <h3 className="font-bold text-sm text-[#1C1917] truncate">
                        {tr("Vải Ngoài Co Giãn Liền Mạch (Seamless)", "Seamless 4-Way Stretch Outer Shell")}
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {tr(
                        "Chất liệu mềm mượt như lụa, co giãn 4 chiều ôm sát mông tự nhiên. Không lộ đường viền lằn dưới váy ôm hay quần tây công sở.",
                        "Silky smooth 4-way stretch fabric naturally hugs body contours. Zero visible panty lines under fitted dresses or business trousers."
                      )}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. PRODUCT SHOWCASE & QUICK SELECT */}
      <section id="dat-mua-nhanh" className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Product Still Image */}
              <div className="lg:col-span-6 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 flex items-center justify-center border border-[#E8DFD5]">
                <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm">
                  <img
                    src="/images/products/quan-lot-tham-hut.jpg"
                    alt={tr("Quần Lót Thấm Hút ANTCARE màu đen và be", "ANTCARE Absorbent Underwear in Black and Beige")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Detail Selection */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D58]">
                    {tr("Dáng Cạp Cao Ôm Bụng • Thoải Mái Cả Ngày", "High-Waisted Gentle Support • All-Day Comfort")}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                    {tr("Quần Lót Thấm Hút ANTCARE", "ANTCARE Absorbent Underwear")}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[#78716C]">
                    <span className="text-amber-500">★★★★★</span>
                    <span className="font-bold text-[#1C1917]">4.9</span>
                    <span>{tr("(194 đánh giá từ khách hàng)", "(194 verified reviews)")}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-[#1C1917]">
                  249.000đ <span className="text-xs font-normal text-[#78716C]">{tr("/ chiếc lẻ", "/ single pair")}</span>
                  <span className="block text-xs font-semibold text-[#8C6D58] mt-0.5">
                    {tr("Chỉ còn 233.000đ/chiếc khi mua Combo 3 quần + Freeship", "Only 233,000 VND/pair with Combo 3 + Free Shipping")}
                  </span>
                </div>

                {/* Color & Style Selector */}
                <div>
                  <label className="text-xs font-bold text-[#1C1917] block mb-2">
                    {tr("Kiểu dáng & Màu sắc:", "Style & Color:")} <span className="text-[#8C6D58] font-extrabold">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { 
                        nameVi: 'Đen tuyền (Boxer / Boy-short)', 
                        nameEn: 'Classic Black (Boy-short)', 
                        tagVi: 'Boxer đen',
                        tagEn: 'Black Boxer'
                      },
                      { 
                        nameVi: 'Hồng hoa nhí (Boy-short)', 
                        nameEn: 'Blush Floral (Boy-short)', 
                        tagVi: 'Hoa nhí teen',
                        tagEn: 'Teen Floral'
                      },
                      { 
                        nameVi: 'Be nude (High-waist cạp cao)', 
                        nameEn: 'Beige Nude (High-waist)', 
                        tagVi: 'Cạp cao nude',
                        tagEn: 'Nude High-waist'
                      },
                      { 
                        nameVi: 'Tím pastel (Tam giác Bikini)', 
                        nameEn: 'Pastel Lilac (Bikini)', 
                        tagVi: 'Tam giác tím',
                        tagEn: 'Lilac Bikini'
                      },
                      { 
                        nameVi: 'Be nude (Boy-short nhẹ nhàng)', 
                        nameEn: 'Beige Nude (Boy-short)', 
                        tagVi: 'Boy-short nude',
                        tagEn: 'Nude Boy-short'
                      }
                    ].map((col) => {
                      const colLabel = isEn ? col.nameEn : col.nameVi;
                      return (
                        <button
                          key={col.nameVi}
                          onClick={() => setSelectedColor(colLabel)}
                          className={\`px-3.5 py-2 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer \${
                            selectedColor === colLabel
                              ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-xs'
                              : 'bg-white text-[#57534E] border-[#D6C7B8] hover:border-[#1C1917]'
                          }\`}
                        >
                          <span>{colLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size Selector */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-[#1C1917]">
                      {tr("Chọn Size:", "Select Size:")} <span className="text-[#8C6D58]">Size {selectedSize}</span>
                    </label>
                    <span className="text-xs text-[#8C6D58] font-semibold">
                      {tr("Đổi size miễn phí trong 7 ngày", "Free size exchange within 7 days")}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
                    {[
                      { s: 'M', w: '40–48kg' },
                      { s: 'L', w: '49–58kg' },
                      { s: 'XL', w: '59–68kg' },
                      { s: '2XL', w: '69–80kg' }
                    ].map((item) => (
                      <button
                        key={item.s}
                        onClick={() => setSelectedSize(item.s)}
                        className={\`py-3 rounded-xl border transition-all \${
                          selectedSize === item.s
                            ? 'bg-[#1C1917] text-white border-[#1C1917]'
                            : 'bg-white text-[#57534E] border-[#D6C7B8] hover:border-[#1C1917]'
                        }\`}
                      >
                        <span className="block text-sm">{item.s}</span>
                        <span className="block text-[10px] font-normal opacity-70">{item.w}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => handleOpenOrder(
                      isEn ? 'Trial Pack: 1 Pair (249,000 VND)' : 'Gói Trải Nghiệm 1 Quần (249.000đ)', 
                      selectedSize, 
                      selectedColor
                    )}
                    className="w-full bg-[#1C1917] hover:bg-[#332E2B] text-white font-bold text-xs sm:text-sm py-4 rounded-full uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    {tr("Đặt Mua 1 Chiếc Thử Nghiệm (249.000đ)", "Order 1 Trial Pair (249,000 VND)")}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. COMPARISON MATRIX TABLE */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E8DFD5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8C6D58]">
              {tr("SO SÁNH MINH BẠCH", "TRANSPARENT COMPARISON")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917]">
              {tr("Sự Khác Biệt Của Quần Lót Thấm Hút", "The Absorbent Underwear Difference")}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden border border-[#E8DFD5] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F8F4EE] border-b border-[#E8DFD5] text-[#1C1917]">
                  <th className="p-4 sm:p-5 font-bold">{tr("Tiêu chí", "Criteria")}</th>
                  <th className="p-4 sm:p-5 font-bold text-[#8C6D58] bg-[#F3ECE5]">
                    {tr("★ Quần Lót Thấm Hút ANTCARE", "★ ANTCARE Absorbent Underwear")}
                  </th>
                  <th className="p-4 sm:p-5 font-normal text-[#78716C]">
                    {tr("Băng vệ sinh dùng 1 lần", "Disposable Pads")}
                  </th>
                  <th className="p-4 sm:p-5 font-normal text-[#78716C]">
                    {tr("Bỉm / Tã dán người lớn", "Adult Diapers")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD5] text-[#57534E]">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">{tr("Cảm giác khi mặc", "Wearing sensation")}</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    {tr("Mềm êm như đồ lót thường, không cộm ngứa", "Soft like regular underwear, zero chafing")}
                  </td>
                  <td className="p-4 sm:p-5">{tr("Dễ cọ xát viền bẹn, hầm nóng", "Inner thigh friction, hot and humid")}</td>
                  <td className="p-4 sm:p-5">{tr("Dày cộm, xột xoạt, tự ti", "Bulky, rustling, embarrassing")}</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">{tr("Chống tràn & Rò rỉ", "Leak prevention")}</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    {tr("Bản đáy mở rộng trước - sau, không lệch cánh", "Front-to-back extended gusset, no shifting")}
                  </td>
                  <td className="p-4 sm:p-5">{tr("Dễ xô lệch, tràn mép khi nằm nghiêng", "Easily bunches, edge leaks when side-sleeping")}</td>
                  <td className="p-4 sm:p-5">{tr("Khó ôm khít khi đi lại nhiều", "Poor fit during active movement")}</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">{tr("Đa năng 2-trong-1", "2-in-1 Versatility")}</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    {tr("Vừa dùng cho kinh nguyệt, vừa dùng cho són tiểu", "Dual-use for both period and bladder leaks")}
                  </td>
                  <td className="p-4 sm:p-5">{tr("Chỉ dùng cho kinh nguyệt", "Only suitable for periods")}</td>
                  <td className="p-4 sm:p-5">{tr("Chỉ dùng cho són tiểu nặng", "Only for heavy adult incontinence")}</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">{tr("Chi phí trong 2 năm", "2-Year Cost")}</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    {tr("Khoảng 700.000đ (dùng 3 chiếc luân phiên)", "~700,000 VND (3 rotating pairs)")}
                  </td>
                  <td className="p-4 sm:p-5">{tr("~ 2.500.000đ – 3.500.000đ", "~2,500,000 – 3,500,000 VND")}</td>
                  <td className="p-4 sm:p-5">{tr("~ 4.000.000đ – 7.000.000đ", "~4,000,000 – 7,000,000 VND")}</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">{tr("Môi trường", "Environmental impact")}</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    {tr("Giặt tái sử dụng hơn 100 lần, bền vững", "Washable & reusable 100+ times, eco-friendly")}
                  </td>
                  <td className="p-4 sm:p-5">{tr("Hàng trăm miếng rác thải khó phân hủy", "Hundreds of non-biodegradable waste items")}</td>
                  <td className="p-4 sm:p-5">{tr("Lượng rác thải lớn ra môi trường", "Huge amount of landfill plastic waste")}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#E8DFD5]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8C6D58]">
              {tr("CÂU HỎI THƯỜNG GẶP", "FREQUENTLY ASKED QUESTIONS")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917]">
              {tr("Mọi Điều Bạn Cần Biết", "Everything You Need to Know")}
            </h2>
          </div>

          <div className="divide-y divide-[#E8DFD5] border-y border-[#E8DFD5]">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1C1917] hover:text-[#8C6D58] transition-colors py-2 cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="text-lg text-[#8C6D58] shrink-0">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-2 pb-3 text-xs sm:text-sm text-[#57534E] leading-relaxed pr-6">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. ORDER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-[#E8DFD5]">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#78716C] hover:text-[#1C1917] w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center cursor-pointer transition-colors"
            >
              ✕
            </button>

            {!formSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D58] bg-[#F3ECE5] px-3 py-1 rounded-full">
                    {tr("Giao Hàng Kín Đáo & Bảo Mật", "Discreet & Confidential Packaging")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-2">
                    {tr("Đặt Mua Quần Lót Thấm Hút", "Order Absorbent Underwear")}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    {tr(
                      "Đóng gói hộp kín tinh tế, che tên sản phẩm tế nhị trên phiếu gửi hàng.",
                      "Discreet luxury packaging with confidential labeling on delivery note."
                    )}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#E8DFD5]">
                    <label className="block text-[11px] font-bold text-[#1C1917] mb-1">
                      {tr("Gói đã chọn:", "Selected bundle:")}
                    </label>
                    <select
                      value={modalCombo}
                      onChange={(e) => setModalCombo(e.target.value)}
                      className="w-full bg-white border border-[#D6C7B8] rounded-xl p-2.5 font-bold text-[#1C1917] text-xs outline-none"
                    >
                      <option value={isEn ? "Trial 1 Underwear (249,000 VND + 25k ship)" : "Gói Trải Nghiệm 1 Quần (249.000đ)"}>
                        {tr("1 Quần (249.000đ + ship 25k)", "1 Pair (249,000 VND + 25k shipping)")}
                      </option>
                      <option value={isEn ? "Saver Combo: 3 Underwear (699,000 VND - Free Wash Bag + Freeship)" : "Combo 3 Quần Tiết Kiệm (699.000đ - Tặng túi giặt + Freeship)"}>
                        {tr("Combo 3 Quần (699.000đ - Tặng túi giặt + Freeship)", "Combo 3 Pairs (699,000 VND - Free Wash Bag + Free Shipping)")}
                      </option>
                      <option value={isEn ? "Full Week Combo: 5 Underwear (1,050,000 VND - 2 Wash Bags + Freeship)" : "Combo 5 Quần Trọn Tuần (1.050.000đ - 2 Túi giặt + Freeship)"}>
                        {tr("Combo 5 Quần (1.050.000đ - 2 Túi giặt + Freeship)", "Combo 5 Pairs (1,050,000 VND - 2 Wash Bags + Free Shipping)")}
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#1C1917] mb-1">
                        {tr("Kích cỡ (Size):", "Size:")}
                      </label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl font-bold text-[#1C1917] focus:bg-white outline-none"
                      >
                        <option value="M">Size M (40 - 48kg)</option>
                        <option value="L">Size L (49 - 58kg)</option>
                        <option value="XL">Size XL (59 - 68kg)</option>
                        <option value="2XL">Size 2XL (69 - 80kg)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#1C1917] mb-1">
                        {tr("Kiểu dáng & Màu sắc:", "Style & Color:")}
                      </label>
                      <select
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl font-bold text-[#1C1917] focus:bg-white outline-none"
                      >
                        <option value={isEn ? "Classic Black (Boy-short)" : "Đen tuyền (Boxer / Boy-short)"}>
                          {tr("Đen tuyền (Boxer / Boy-short chống tràn đêm)", "Classic Black (Boy-short overnight leakproof)")}
                        </option>
                        <option value={isEn ? "Blush Floral (Boy-short)" : "Hồng hoa nhí (Boy-short)"}>
                          {tr("Hồng hoa nhí (Boy-short tuổi teen)", "Blush Floral (Boy-short for teens)")}
                        </option>
                        <option value={isEn ? "Beige Nude (High-waist)" : "Be nude (High-waist cạp cao)"}>
                          {tr("Be nude (High-waist cạp cao ôm bụng)", "Beige Nude (High-waist tummy control)")}
                        </option>
                        <option value={isEn ? "Pastel Lilac (Bikini)" : "Tím pastel (Tam giác Bikini)"}>
                          {tr("Tím pastel (Tam giác Bikini thoáng khí)", "Pastel Lilac (Breathable Bikini cut)")}
                        </option>
                        <option value={isEn ? "Beige Nude (Boy-short)" : "Be nude (Boy-short nhẹ nhàng)"}>
                          {tr("Be nude (Boy-short nhẹ nhàng vô hình)", "Beige Nude (Seamless invisible Boy-short)")}
                        </option>
                        <option value={isEn ? "Assorted Colors & Styles" : "Phối nhiều màu & kiểu dáng ngẫu nhiên"}>
                          {tr("Phối nhiều màu & kiểu dáng ngẫu nhiên", "Assorted Colors & Styles")}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">
                      {tr("Họ và tên người nhận:", "Recipient Full Name:")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={tr("Ví dụ: Chị Mai Anh", "E.g., Sarah Johnson")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">
                      {tr("Số điện thoại:", "Phone Number:")}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={tr("Ví dụ: 0912 345 678", "E.g., +84 969 032 360")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">
                      {tr("Địa chỉ nhận hàng:", "Shipping Address:")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={tr("Số nhà, đường, quận huyện, tỉnh/TP", "House number, street, ward, city")}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">
                      {tr("Ghi chú (chiều cao, cân nặng để chuẩn size):", "Order Notes (height, weight for sizing):")}
                    </label>
                    <textarea
                      rows="2"
                      placeholder={tr("Ghi chú thêm nếu cần...", "Additional notes if any...")}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1C1917] hover:bg-[#332E2B] text-white font-bold py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer mt-2"
                  >
                    {tr("Xác Nhận Đặt Hàng", "Confirm Order")}
                  </button>

                  <p className="text-[11px] text-center text-[#78716C]">
                    {tr(
                      "Kiểm tra hàng trước khi thanh toán (COD). Hoàn tiền 100% nếu sản phẩm lỗi.",
                      "Inspect upon delivery before payment (COD). 100% refund for defects."
                    )}
                  </p>

                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#F3ECE5] text-[#8C6D58] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  {tr("Đặt Hàng Thành Công!", "Order Placed Successfully!")}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-sm mx-auto">
                  {tr(
                    "Cảm ơn bạn đã tin tưởng ANTCARE. Đội ngũ chuyên viên sẽ liên hệ xác nhận đơn hàng và kích thước chuẩn trong vòng 15-30 phút.",
                    "Thank you for trusting ANTCARE. Our specialists will contact you to confirm sizing and order details within 15–30 minutes."
                  )}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setFormSubmitted(false);
                    }}
                    className="bg-[#1C1917] text-white font-bold px-7 py-2.5 rounded-full text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {tr("Đóng cửa sổ", "Close Window")}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default AbsorbentUnderwear;
`;

fs.writeFileSync('src/pages/AbsorbentUnderwear.jsx', code, 'utf8');
console.log('Successfully updated src/pages/AbsorbentUnderwear.jsx with full bilingual translation!');

