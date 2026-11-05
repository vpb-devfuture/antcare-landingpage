import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const AbsorbentUnderwear = () => {
  // State
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'period' | 'leak'
  const [selectedColor, setSelectedColor] = useState('Đen tuyền (Boxer / Boy-short)');
  const [selectedSize, setSelectedSize] = useState('L');
  const [openFaq, setOpenFaq] = useState(0);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCombo, setModalCombo] = useState('Combo 3 Quần Tiết Kiệm (699.000đ - Tặng túi giặt + Freeship)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    size: 'L',
    color: 'Đen tuyền (Boxer / Boy-short)',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const pageTitle = "Quần Lót Thấm Hút ANTCARE – Cảm Giác Nhẹ Tênh, Bảo Vệ Toàn Diện";
    const pageDesc = "Quần lót thấm hút cao cấp ANTCARE công nghệ 4 lớp thoáng khí: vừa là quần lót nguyệt san chống tràn ban đêm, vừa là quần lót chống són tiểu cho mẹ sau sinh & phụ nữ trung niên. Mỏng nhẹ, êm ái, giặt tái dùng hơn 100 lần.";
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
        "name": "Quần Lót Thấm Hút ANTCARE (Kinh Nguyệt & Són Tiểu)",
        "image": [
          "https://antcare.vn/images/products/hero-multigen-asian-underwear-wide.jpg",
          "https://antcare.vn/images/products/quan-lot-tham-hut.jpg"
        ],
        "description": "Quần lót thấm hút thế hệ mới công nghệ 4 lớp: thấm hút dịch kinh nguyệt và nước tiểu són rỉ từ 35ml đến 50ml, khử mùi ion kháng khuẩn, thoáng khí và có thể giặt tái sử dụng hơn 100 lần.",
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
            "name": "Lựa chọn phù hợp nhất cho ngày kinh nguyệt là gì giữa cốc nguyệt san, tampon, băng vệ sinh và quần nguyệt san?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quần lót nguyệt san là lựa chọn phù hợp nhất hiện nay nhờ giải quyết triệt để nhược điểm của các sản phẩm truyền thống: 100% không xâm lấn (không đau, không rách màng trinh), 0% nguy cơ sốc độc tố (TSS), bản đáy mở rộng chống tràn 360 độ suốt đêm, bề mặt sợi tre khô thoáng sau 2 giây và có thể giặt tái sử dụng hơn 100 lần."
            }
          },
          {
            "@type": "Question",
            "name": "Ai không nên dùng cốc nguyệt san?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cốc nguyệt san không phù hợp cho: (1) Bạn gái trẻ tuổi teen chưa quan hệ tình dục; (2) Phụ nữ mới sinh con hoặc đang tổn thương sàn chậu; (3) Phụ nữ đang đặt vòng tránh thai do lực hút chân không dễ làm lệch vòng; (4) Người đang bị viêm âm đạo, nấm ngứa phụ khoa; (5) Người có cấu trúc âm đạo hẹp hoặc cổ tử cung thấp; (6) Người có tiền sử Hội chứng Sốc Độc Tố (TSS)."
            }
          },
          {
            "@type": "Question",
            "name": "Dùng tampon có nguy cơ sốc độc tố TSS không và cần lưu ý gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tampon tiềm ẩn nguy cơ Hội chứng Sốc Độc Tố (TSS) nguy hiểm do máu kinh ứ đọng tạo điều kiện vi khuẩn tụ cầu vàng phát triển sinh độc tố. Tampon chỉ được dùng tối đa 4-6 tiếng, tuyệt đối không dùng qua đêm, có thể làm khô rát niêm mạc âm đạo và không phù hợp với bạn gái chưa quan hệ."
            }
          },
          {
            "@type": "Question",
            "name": "Nhược điểm của băng vệ sinh dùng 1 lần là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Băng vệ sinh dùng 1 lần dễ gây hầm bí, ẩm ướt, cọ xát rát bẹn và ngứa ngáy do bề mặt chứa hạt vi nhựa và hóa chất tẩy trắng. Miếng dán dễ bị xô lệch gây tràn mép khi vận động hoặc nằm nghiêng ngủ đêm, đồng thời tạo ra lượng rác thải nhựa khổng lồ mất 500 năm phân hủy."
            }
          },
          {
            "@type": "Question",
            "name": "Lựa chọn phù hợp nhất cho tình trạng són tiểu ở phụ nữ là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Quần lót chống són tiểu ANTCARE là lựa chọn phù hợp nhất cho mẹ sau sinh và phụ nữ trung niên: mỏng nhẹ ~2mm vô hình dưới váy đầm công sở (không dày cộm mặc cảm như tã người lớn), hút sâu 35-50ml nước tiểu tức thì trong 2 giây (không ướt sũng ra ngoài như quần lót thường), không trào mép và triệt tiêu 99% mùi amoniac nhờ ion bạc kháng khuẩn."
            }
          },
          {
            "@type": "Question",
            "name": "Tại sao không nên dùng băng vệ sinh thông thường cho người bị són tiểu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Băng vệ sinh được thiết kế riêng cho dịch kinh nguyệt có độ nhớt cao chảy chậm, không tương thích với nước tiểu loãng rỉ ra với áp lực đột ngột khi ho, cười nên rất dễ tràn sang hai mép bẹn. Ngoài ra gel BVS chịu lực kém gây thấm ngược khi ngồi đè lên và không có cơ chế khử mùi amoniac đặc trưng của nước tiểu."
            }
          },
          {
            "@type": "Question",
            "name": "Tã người lớn có nhược điểm gì với người bị són tiểu nhẹ đến vừa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tã người lớn quá dày cộm, phát tiếng sột soạt khi di chuyển và lộ rõ từng ngấn dưới quần áo ngoài, gây tâm lý tự ti và mặc cảm bệnh tật nặng nề. Hơn nữa, tã dán rất hầm bí dễ gây viêm da hăm ngứa và tốn kém chi phí hàng triệu đồng mỗi tháng."
            }
          },
          {
            "@type": "Question",
            "name": "Tại sao 1 chiếc quần lại vừa dùng được cho kinh nguyệt, vừa dùng được cho són tiểu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cả dịch kinh nguyệt và nước tiểu rỉ són đều cần 3 tiêu chí cốt lõi: (1) Thấm hút tức thì để bề mặt da luôn khô thoáng; (2) Lõi khóa chặt 35 - 50ml chất lỏng không trào ngược khi ngồi đè lên; (3) Màng chống tràn thoáng khí ngăn rò rỉ ra trang phục ngoài. Cấu trúc 4 lớp dệt vi sợi sinh học của ANTCARE đáp ứng hoàn hảo cả chất lỏng có độ nhớt (máu kinh) lẫn chất lỏng loãng (nước tiểu), đồng thời triệt tiêu 99% mùi amoniac nhờ ion kháng khuẩn."
            }
          },
          {
            "@type": "Question",
            "name": "Quần có thể thay thế hoàn toàn băng vệ sinh hay bỉm người lớn không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với kinh nguyệt: Quần có thể thay thế hoàn toàn băng vệ sinh vào những ngày vừa, ngày ít hoặc ban đêm chống tràn mép; vào ngày nhiều có thể mặc kết hợp như một lớp bảo vệ tuyệt đối không lo tràn quần áo. Với són tiểu: Quần thay thế hoàn hảo miếng lót hoặc tã dán cho người són tiểu nhẹ đến vừa."
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
  }, []);

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
      q: "Tại sao 1 chiếc quần lại vừa dùng được cho kinh nguyệt, vừa dùng được cho són tiểu?",
      a: "Cả dịch kinh nguyệt và nước tiểu rỉ són đều cần 3 tiêu chí cốt lõi: (1) Thấm hút tức thì để bề mặt da luôn khô thoáng; (2) Lõi khóa chặt 35 - 50ml chất lỏng không trào ngược khi ngồi đè lên; (3) Màng chống tràn thoáng khí ngăn rò rỉ ra trang phục ngoài. Cấu trúc 4 lớp dệt vi sợi sinh học của ANTCARE đáp ứng hoàn hảo cả chất lỏng có độ nhớt (máu kinh) lẫn chất lỏng loãng (nước tiểu), đồng thời triệt tiêu 99% mùi amoniac nhờ ion kháng khuẩn."
    },
    {
      q: "Quần thấm được bao nhiêu ml? Có sợ bị tràn khi nằm nghiêng lúc ngủ?",
      a: "Quần có sức chứa từ 35ml đến 50ml chất lỏng — tương đương với 3-4 miếng băng vệ sinh thông thường hoặc 2-3 lần rỉ tiểu đột ngột khi ho, cười. Phần đáy thấm hút được thiết kế bản rộng kéo dài từ trước ra tận cạp sau, ôm trọn đường cong cơ thể giúp bạn hoàn toàn an tâm xoay người, nằm nghiêng ngủ đêm mà không lo tràn mép."
    },
    {
      q: "Mặc quần cả ngày có bị ẩm ướt, hầm bí hay có mùi khó chịu không?",
      a: "Hoàn toàn không. Lớp vải tiếp xúc da dệt từ sợi tre hữu cơ tự nhiên có cơ chế mao dẫn một chiều: dịch lỏng được hút sâu xuống lõi chỉ sau 1-2 giây, giữ bề mặt tiếp xúc luôn khô ráo. Lớp lõi kháng khuẩn ion bạc ngăn chặn vi khuẩn phát triển, khử sạch 99% mùi hôi đặc trưng suốt cả ngày dài."
    },
    {
      q: "Quần có dày cộm và bị lộ viền khi mặc váy ôm hay quần sáng màu?",
      a: "Không. Quần được may theo công nghệ ép viền nhiệt liền mạch (seamless) với độ mỏng vùng đáy chỉ khoảng 2mm — mỏng hơn nhiều so với việc mang băng vệ sinh hay tã dán. Khi diện chân váy bút chì, quần âu công sở hay đồ tập yoga, quần hoàn toàn phẳng mịn và vô hình dưới trang phục."
    },
    {
      q: "Giặt có khó sạch không? Vết máu kinh có ra hết không?",
      a: "Rất dễ giặt. Bạn chỉ cần xả sơ đáy quần dưới vòi nước lạnh trong 30 giây cho trôi bớt dịch, sau đó giặt tay hoặc cho vào máy giặt (dùng túi giặt ANTCARE tặng kèm) cùng bột giặt thông thường. Lưu ý: Không dùng nước nóng và không dùng nước xả vải đặc (để bảo toàn cấu trúc thấm hút của sợi vải). Phơi khô tự nhiên nơi thoáng gió."
    },
    {
      q: "Một chiếc quần có thể dùng lại trong bao lâu?",
      a: "Quần lót thấm hút ANTCARE được kiểm nghiệm độ bền vượt trội qua hơn 100 lần giặt, tương đương thời gian sử dụng từ 2 đến 3 năm. Điều này giúp bạn tiết kiệm hàng triệu đồng mua băng vệ sinh dùng 1 lần và bảo vệ môi trường khỏi hàng ngàn miếng rác thải khó phân hủy."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#1C1917] selection:text-white min-h-screen">
      
      {/* 1. TOP MINIMALIST ANNOUNCEMENT BAR (SAALT STYLE) */}
      <div className="bg-[#F3ECE5] border-b border-[#E8DFD5] py-2 px-4 text-center">
        <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#57534E] uppercase">
          Miễn phí vận chuyển toàn quốc cho đơn hàng từ 2 chiếc • Đổi size miễn phí trong 7 ngày
        </p>
      </div>

      {/* 2. FULL-BLEED HERO BANNER (CHUẨN 100% BỐ CỤC SAALT WEAR) */}
      <section className="relative w-full min-h-[82vh] md:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#FAF8F5]">
        
        {/* Full-bleed Background Image with 5 Asian Women on Right, Seamless Studio on Left */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/products/hero-saalt-style-asian.jpg"
            alt="ANTCARE Quần lót thấm hút thế hệ mới - Cảm giác nhẹ tênh, bảo vệ không rò rỉ"
            className="w-full h-full object-cover object-[85%_center] md:object-right select-none"
          />
          
          {/* Subtle Desktop Gradient: Ensures text is crystal clear against background without covering any person */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/85 via-[#FAF8F5]/35 via-25% to-transparent hidden md:block w-full max-w-[36%]" />
          
          {/* Mobile Overlay: Smooth gradient so image is clear on top and text readable on bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/20 md:hidden" />
        </div>

        {/* Hero Overlay Content: Exact Minimalist Saalt Typography */}
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 w-full relative z-10 py-16 md:py-24">
          <div className="max-w-[420px] md:max-w-[460px] lg:max-w-[500px] space-y-5 md:space-y-6">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1C1917] leading-[1.15] tracking-tight">
              <span className="block whitespace-nowrap">Cảm giác nhẹ tênh,</span>
              <span className="block whitespace-nowrap">bảo vệ không rò rỉ.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#57534E] leading-relaxed font-normal max-w-[400px]">
              Tạm biệt cảm giác ẩm bí của băng vệ sinh hay tã lót. Một lựa chọn <strong>mỏng hơn, khô thoáng hơn và êm ái hơn bao giờ hết</strong>.
            </p>

            {/* Single Solid Black Pill Button - Exact Saalt "SHOP SAALT WEAR" style */}
            <div className="pt-2">
              <a
                href="#dat-mua-nhanh"
                className="inline-block bg-[#1C1917] hover:bg-[#332E2B] text-white font-bold text-xs sm:text-sm px-9 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Chọn Quần Thấm Hút ANTCARE
              </a>
            </div>

          </div>
        </div>

        {/* Carousel Dots (Saalt signature touch) */}
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
            Định Nghĩa Lại Trải Nghiệm Đồ Lót
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1C1917] leading-snug">
            “Được thiết kế để bạn quên đi cảm giác mình đang trong kỳ kinh nguyệt hay lo sợ từng cơn ho són tiểu.”
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] pt-1">
            Không sột soạt. Không xô lệch. Không mùi khó chịu. Mặc tự nhiên, thoải mái suốt 365 ngày.
          </p>
        </div>
      </section>

      {/* 3.1 LIFECYCLE: PHÙ HỢP TỪ TUỔI TEEN, CÔ GÁI TRẺ ĐẾN PHỤ NỮ TRUNG NIÊN */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8C6D58]">
              ĐỒNG HÀNH MỌI GIAI ĐOẠN CUỘC ĐỜI
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917]">
              Thiết Kế Chuyên Biệt Cho Mọi Độ Tuổi
            </h2>
            <p className="text-sm text-[#57534E]">
              Từ kỳ kinh đầu tiên của tuổi dậy thì đến những chuyển biến nội tiết tuổi mãn kinh, cơ thể người phụ nữ luôn xứng đáng được nâng niu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Tuổi Teen */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE5] text-[#8C6D58] text-[11px] font-bold uppercase tracking-wider">
                  Tuổi Teen &amp; Dậy Thì
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  Khởi đầu nhẹ nhàng, tự tin tại trường học
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Xóa tan nỗi lo âu tràn dịch ra ghế lớp học hay phải quấn áo khoác ngang hông. Mỏng nhẹ kín đáo dưới đồng phục, tự tin chạy nhảy, thể thao mà không sợ xô lệch.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E9E1] text-[11px] font-bold text-[#8C6D58]">
                #KinhNguyệtĐầuĐời #TuổiDậyThì
              </div>
            </div>

            {/* Card 2: Cô Gái Trẻ & Mẹ Sau Sinh */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE5] text-[#8C6D58] text-[11px] font-bold uppercase tracking-wider">
                  Cô Gái Trẻ &amp; Mẹ Sau Sinh
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  Năng động công sở, yoga &amp; hồi phục sau sinh
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Tạm biệt cảm giác bí bách của băng vệ sinh ngày đèn đỏ. Thoải mái diện đầm ôm công sở, tập gym, đồng thời kiểm soát êm ái rỉ tiểu sau sinh do giãn sàn chậu.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E9E1] text-[11px] font-bold text-[#8C6D58]">
                #TựDoVậnĐộng #PhụcHồiSauSinh
              </div>
            </div>

            {/* Card 3: Phụ Nữ Trung Niên & Tiền Mãn Kinh */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#F3ECE5] text-[#8C6D58] text-[11px] font-bold uppercase tracking-wider">
                  Phụ Nữ Trung Niên &amp; Mãn Kinh
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  An tâm cười lớn, ho, hắt hơi không lo rỉ tiểu
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Giải quyết triệt để tình trạng són tiểu gắng sức khi cười to, ho hoặc xách đồ nặng. Khóa ẩm tức thì, triệt tiêu 99% mùi amoniac, giữ trọn sự thanh lịch và tự tôn.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E9E1] text-[11px] font-bold text-[#8C6D58]">
                #TiềnMãnKinh #SónTiểuGắngSức
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3.2 LỰA CHỌN PHÙ HỢP NHẤT CHO NGÀY KINH NGUYỆT */}
      <section id="so-sanh-giai-phap" className="py-16 md:py-24 bg-white border-t border-[#E8DFD5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] tracking-tight">
              Lựa chọn phù hợp nhất cho ngày kinh nguyệt
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              So sánh chi tiết cốc nguyệt san, tampon, băng vệ sinh và <strong>quần lót nguyệt san</strong> — giúp bạn chọn đúng giải pháp an toàn, không xâm lấn, khô thoáng và tự do vận động suốt chu kỳ.
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            
            {/* LỰA CHỌN 1: CỐC NGUYỆT SAN */}
            <div 
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="1" />
              <div className="space-y-4">
                {/* Ảnh minh họa thực tế Cốc Nguyệt San (1 chiếc duy nhất) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FCE7F3]/40 shadow-xs">
                    <img 
                      src="/images/products/so-sanh-coc-nguyet-san.jpg" 
                      alt="1 chiếc cốc nguyệt san silicon y tế đặt sâu bên trong âm đạo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9F1239] bg-[#FFE4E6] px-2.5 py-1 rounded-full self-start">
                    Kén Cơ Địa
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Cốc Nguyệt San</h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">Đặt sâu bên trong âm đạo</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#9F1239] text-[11px] uppercase tracking-wider">
                    Điểm bất lợi &amp; Rào cản lớn:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Không dùng cho bạn gái trẻ chưa quan hệ</strong> (nguy cơ rách màng trinh).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Chống chỉ định y tế:</strong> Phụ nữ mới sinh con, phụ nữ đặt vòng tránh thai (dễ tụt/lệch vòng do lực hút chân không).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Nguy cơ viêm nhiễm:</strong> Tuyệt đối tránh khi bị viêm âm đạo, nấm ngứa hoặc có tiền sử Sốc Độc Tố (TSS).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Kén cấu tạo cơ thể:</strong> Rất khó đưa vào/lấy ra nếu âm đạo hẹp hoặc cổ tử cung thấp.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Vệ sinh phức tạp:</strong> Phải luộc tiệt trùng; cực kỳ bất tiện khi thay ở nơi công cộng hay trường học.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                Mức độ thuận tiện: Thấp (đòi hỏi kỹ thuật cao)
              </div>
            </div>

            {/* LỰA CHỌN 2: TAMPON */}
            <div 
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="2" />
              <div className="space-y-4">
                {/* Ảnh minh họa thực tế Tampon (1 que duy nhất cận cảnh) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#F3E8FF]/40 shadow-xs">
                    <img 
                      src="/images/products/so-sanh-tampon.jpg" 
                      alt="1 que tampon sợi bông hữu cơ duy nhất cận cảnh"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B21A8] bg-[#F3E8FF] px-2.5 py-1 rounded-full self-start">
                    Nguy Cơ TSS
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Tampon (Băng Que)</h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">Đặt sâu bên trong âm đạo</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#6B21A8] text-[11px] uppercase tracking-wider">
                    Điểm bất lợi &amp; Nguy cơ sức khỏe:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Nguy cơ Hội chứng Sốc Độc Tố (TSS):</strong> Máu ứ đọng bên trong tạo điều kiện vi khuẩn tụ cầu vàng sinh độc tố nguy hiểm tính mạng.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Giới hạn thời gian khắt khe:</strong> Chỉ dùng được tối đa 4–6 tiếng; quên tháo cực kỳ nguy hiểm, không an toàn để ngủ xuyên đêm.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Hút cạn dịch tự nhiên:</strong> Gây khô rát, xước niêm mạc âm đạo khi rút ra; làm mất cân bằng độ ẩm và pH tự nhiên.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Không dùng cho người chưa quan hệ</strong> hoặc đang điều trị viêm nhiễm phụ khoa.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                Mức độ rủi ro: Cần thận trọng cao độ
              </div>
            </div>

            {/* LỰA CHỌN 3: BĂNG VỆ SINH DÙNG 1 LẦN */}
            <div 
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="3" />
              <div className="space-y-4">
                {/* Ảnh minh họa thực tế Băng Vệ Sinh (1 miếng duy nhất) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#F3F4F6] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-bang-ve-sinh.jpg" 
                      alt="1 miếng băng vệ sinh dùng 1 lần có cánh dán đáy quần lót"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#374151] bg-[#E5E7EB] px-2.5 py-1 rounded-full self-start">
                    Ẩm Bí &amp; Tràn Mép
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Băng Vệ Sinh Dùng 1 Lần</h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">Dán cố định vào đáy quần lót</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#374151] text-[11px] uppercase tracking-wider">
                    Nhược điểm thường trực hàng tháng:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Hầm bí, ẩm ướt &amp; ngứa ngáy:</strong> Bí bách nhiều giờ liền, dễ gây hăm đỏ, viêm da tiếp xúc và cọ xát rát bẹn.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Dễ xô lệch &amp; tràn mép:</strong> Miếng dán co dúm khi vận động mạnh; nỗi ám ảnh lo tràn ố ga đệm khi nằm nghiêng ngủ đêm.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Mùi hôi khó chịu:</strong> Máu kinh ứ đọng kết hợp với hóa chất tẩy trắng huỳnh quang và hạt vi nhựa sinh mùi bí nồng.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Gánh nặng rác thải:</strong> Một người phụ nữ thải ra hơn 10.000 miếng BVS khó phân hủy (mất tới 500 năm chôn lấp).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                Mức độ thoải mái: Thấp (cộm ngứa &amp; xô lệch)
              </div>
            </div>

            {/* LỰA CHỌN 4: QUẦN NGUYỆT SAN ANTCARE (THE WINNER) */}
            <div 
              className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-7 border-2 border-[#1C1917] flex flex-col justify-between shadow-lg relative transform lg:-translate-y-2 transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="4" />
              {/* Badge Nổi Bật */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                ★ Giải Pháp Đột Phá Toàn Diện ★
              </div>

              <div className="space-y-4 mt-1">
                {/* Ảnh minh họa thực tế Quần Nguyệt San (1 chiếc duy nhất trải phẳng) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#D6C7B8] bg-[#EFE6DD] shadow-xs ring-2 ring-[#1C1917]/10">
                    <img 
                      src="/images/products/so-sanh-quan-nguyet-san.jpg" 
                      alt="1 chiếc quần lót nguyệt san ANTCARE kháng khuẩn chống tràn 360 độ duy nhất trải phẳng"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full self-start">
                    An Toàn 100%
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Quần Nguyệt San ANTCARE</h3>
                  <p className="text-xs text-[#8C6D58] font-bold mt-0.5">Mặc tự nhiên như đồ lót thường ngày</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#1C1917] pt-2 border-t border-[#D6C7B8]">
                  <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <span>✓</span> Giải quyết triệt để mọi nhược điểm:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>100% Không xâm lấn:</strong> An toàn cho bạn gái tuổi teen chưa quan hệ, mẹ bỉm sau sinh, người đặt vòng tránh thai và người cơ địa nhạy cảm.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>0% Nguy cơ Sốc Độc Tố (TSS):</strong> Không đưa vật lạ vào cơ thể, bảo vệ trọn vẹn môi trường vi sinh và pH tự nhiên.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Khô thoáng tức thì (2 giây):</strong> Sợi tre tổ ong hút sâu chất lỏng, bề mặt luôn khô ráo, không cọ xát viền bẹn, không hăm đỏ.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Chống tràn 360° ban đêm:</strong> Bản đáy mở rộng dài đến tận cạp sau, chứa 35–50ml chất lỏng, ngủ nghiêng xoay người thoải mái.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Khử 99% mùi &amp; Tái dùng &gt;100 lần:</strong> Ion kháng khuẩn tự nhiên, giặt phơi dễ dàng, tiết kiệm hàng triệu đồng.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4">
                <a
                  href="#dat-mua-nhanh"
                  className="w-full py-3 rounded-full bg-[#1C1917] hover:bg-[#332E2B] text-white text-xs font-bold transition-all text-center block uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  Chọn Quần Nguyệt San Ngay
                </a>
              </div>
            </div>

          </div>

          {/* Dòng Tóm Tắt Chốt Hạ - AEO Key Takeaway */}
          <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              💡 <strong>Kết luận:</strong> Không cần lo ngại rủi ro sốc độc tố của tampon, sự phức tạp của cốc nguyệt san hay cảm giác ẩm bí cộm ngứa của băng vệ sinh. <strong>Quần lót nguyệt san ANTCARE mang đến sự tự do trọn vẹn — vừa êm thoáng như đồ lót thường, vừa bảo vệ không rò rỉ suốt 365 ngày.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 4. LỰA CHỌN PHÙ HỢP NHẤT CHO TÌNH TRẠNG SÓN TIỂU */}
      <section id="so-sanh-son-tieu" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#E8DFD5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] tracking-tight">
              Lựa chọn phù hợp nhất cho tình trạng són tiểu
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              So sánh chi tiết tã lót người lớn, quần lót thông thường, băng vệ sinh và <strong>quần lót chống són tiểu ANTCARE</strong> — giúp mẹ sau sinh và phụ nữ trung niên lấy lại sự tự tin, khô thoáng và giữ trọn lòng tự tôn.
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            
            {/* LỰA CHỌN 1: TÃ DÁN / TÃ QUẦN NGƯỜI LỚN */}
            <div 
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="1" />
              <div className="space-y-4">
                {/* Ảnh minh họa thực tế Tã người lớn (1 chiếc duy nhất) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-ta-nguoi-lon.jpg" 
                      alt="1 chiếc tã quần người lớn dùng 1 lần"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9F1239] bg-[#FFE4E6] px-2.5 py-1 rounded-full self-start">
                    Dày Cộm &amp; Mặc Cảm
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Tã Dán / Tã Quần Người Lớn</h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">Dành cho bệnh nhân nặng nằm một chỗ</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#9F1239] text-[11px] uppercase tracking-wider">
                    Nhược điểm với són tiểu nhẹ &amp; vừa:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Dày cộm &amp; phát tiếng sột soạt:</strong> Lộ rõ từng nếp gồ ghề dưới váy ôm hay quần âu công sở, phát ra tiếng động khi bước đi gây tự ti, mặc cảm tuổi già.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Hầm bí &amp; tổn thương da:</strong> Màng nilon giữ nhiệt và hơi ẩm nhiều giờ liền, dễ gây hăm ngứa, rát đỏ và nấm phụ khoa.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Mùi khai amoniac dễ phát tán:</strong> Không có cơ chế bẻ gãy mùi sinh học, dễ bốc mùi khai nồng khi đứng gần người khác.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Chi phí đắt đỏ &amp; rác thải lớn:</strong> Mua dùng mỗi ngày tốn tiền triệu mỗi tháng và thải lượng rác nhựa khổng lồ.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                Mức độ thẩm mỹ: Cực thấp (lộ rõ dưới đồ mặc)
              </div>
            </div>

            {/* LỰA CHỌN 2: QUẦN LÓT THÔNG THƯỜNG */}
            <div 
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="2" />
              <div className="space-y-4">
                {/* Ảnh minh họa Quần lót cotton thường (1 chiếc duy nhất) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-quan-lot-thuong.jpg" 
                      alt="1 chiếc quần lót cotton thông thường vải mỏng không chống tràn"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FEF3C7] px-2.5 py-1 rounded-full self-start">
                    0% Chống Rò Rỉ
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Quần Lót Thông Thường</h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">Chỉ lót thêm khăn mỏng hoặc giấy ăn</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#B45309] text-[11px] uppercase tracking-wider">
                    Hậu quả khi bị rỉ tiểu đột ngột:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Ướt sũng ra trang phục ngoài ngay lập tức:</strong> Vải cotton mỏng không có màng ngăn, chỉ một cơn ho hay cười lớn là nước tiểu ngấm loang lổ ra váy/quần ngoài.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Bốc mùi khai nồng nặc:</strong> Nước tiểu thấm vào vải thường tiếp xúc không khí sinh mùi amoniac gắt, gây xấu hổ tột cùng ở nơi đông người.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Ẩm ướt, lạnh buốt đáy quần:</strong> Cảm giác dính ướt nhớp nháp cả ngày, kích ứng vùng kín và dễ viêm nhiễm ngược dòng niệu đạo.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span><strong>Lót giấy ăn bở nát, mất vệ sinh:</strong> Giấy ăn gặp nước bị mủn dính chặt vào da, cọ xát ngứa ngáy và nguy cơ vi khuẩn xâm nhập.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                Mức độ an toàn: 0% (nguy cơ hoen ố trang phục cao)
              </div>
            </div>

            {/* LỰA CHỌN 3: BĂNG VỆ SINH DÙNG 1 LẦN */}
            <div 
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] flex flex-col justify-between hover:border-[#D6C7B8] transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="3" />
              <div className="space-y-4">
                {/* Ảnh minh họa Băng vệ sinh (1 miếng duy nhất) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs">
                    <img 
                      src="/images/products/so-sanh-bang-ve-sinh.jpg" 
                      alt="1 miếng băng vệ sinh dùng 1 lần có cánh dán đáy quần"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#374151] bg-[#E5E7EB] px-2.5 py-1 rounded-full self-start">
                    Dễ Tràn Mép &amp; Khai Nồng
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Băng Vệ Sinh Dùng 1 Lần</h3>
                  <p className="text-xs text-[#8C6D58] font-semibold mt-0.5">Thiết kế cho máu kinh, không phải nước tiểu</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#57534E] pt-2 border-t border-[#E8DFD5]">
                  <p className="font-bold text-[#374151] text-[11px] uppercase tracking-wider">
                    Sai lầm phổ biến khi dùng cho són tiểu:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Không bắt kịp tốc độ rỉ tiểu:</strong> BVS thiết kế cho dịch kinh nguyệt đặc rỉ chậm; nước tiểu loãng bắn nhanh đột ngột sẽ bị trào ngược sang hai mép bẹn.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Thấm ngược khi ngồi đè lên:</strong> Gel BVS chịu lực kém; khi ngồi xuống ghế xe hay văn phòng, nước tiểu dễ bị ép ngược ra ngoài làm ẩm quần.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Mùi hương liệu trộn mùi khai:</strong> BVS chỉ có hương thơm nhân tạo, khi kết hợp với amoniac nước tiểu tạo nên hỗn hợp mùi nồng gắt, khó chịu.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span><strong>Xô lệch, cọ xát rát bẹn:</strong> Miếng dán co dúm khi đi lại nhiều, cọ xát liên tục gây đau rát viền đùi.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD5] text-[11px] text-[#78716C] font-semibold text-center">
                Mức độ an tâm: Kém (luôn nơm nớp lo tràn mép)
              </div>
            </div>

            {/* LỰA CHỌN 4: QUẦN LÓT CHỐNG SÓN TIỂU ANTCARE (THE WINNER) */}
            <div 
              className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-7 border-2 border-[#1C1917] flex flex-col justify-between shadow-lg relative transform lg:-translate-y-2 transition-all group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="position" content="4" />
              {/* Badge Nổi Bật */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                ★ Giải Pháp Hoàn Hảo 100% ★
              </div>

              <div className="space-y-4 mt-1">
                {/* Ảnh minh họa Quần lót chống són tiểu ANTCARE (1 chiếc duy nhất) */}
                <div className="flex items-center justify-between gap-3">
                  <div className="relative overflow-hidden rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-[#D6C7B8] bg-[#EFE6DD] shadow-xs ring-2 ring-[#1C1917]/10">
                    <img 
                      src="/images/products/so-sanh-quan-son-tieu.jpg" 
                      alt="1 chiếc quần lót chống són tiểu ANTCARE mỏng nhẹ vô hình"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full self-start">
                    Tự Tin Tuyệt Đối
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C1917]" itemProp="name">Quần Chống Són Tiểu ANTCARE</h3>
                  <p className="text-xs text-[#8C6D58] font-bold mt-0.5">Thanh lịch &amp; vô hình như đồ lót thời trang</p>
                </div>

                <div className="space-y-2.5 text-xs text-[#1C1917] pt-2 border-t border-[#D6C7B8]">
                  <p className="font-bold text-emerald-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <span>✓</span> Giải quyết triệt để mọi nỗi lo són tiểu:
                  </p>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Mỏng nhẹ ~2mm, vô hình 100%:</strong> Ép nhiệt seamless không viền, không sột soạt, không lộ dưới đầm ôm hay quần âu công sở.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Khóa ẩm tức thì (2 giây):</strong> Vi sợi sinh học hút sâu 35–50ml nước tiểu, không trào ngược kể cả khi ngồi đè lên.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Triệt tiêu 99% mùi amoniac:</strong> Ion bạc kháng khuẩn bẻ gãy phân tử mùi khai, giữ cơ thể luôn thơm tho và sạch sẽ suốt 24h.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Tự do tận hưởng cuộc sống:</strong> Thoải mái cười lớn, ho, hắt hơi, tập thể dục, khiêu vũ và du lịch mà không cần thấp thỏm tìm WC.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span><strong>Tái sử dụng &gt;100 lần (bền 2-3 năm):</strong> Giặt máy dễ dàng, tiết kiệm hàng chục triệu đồng so với tã dán hay bỉm người lớn.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4">
                <a
                  href="#dat-mua-nhanh"
                  className="w-full py-3 rounded-full bg-[#1C1917] hover:bg-[#332E2B] text-white text-xs font-bold transition-all text-center block uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  Chọn Quần Chống Són Tiểu Ngay
                </a>
              </div>
            </div>

          </div>

          {/* Dòng Tóm Tắt Chốt Hạ - AEO Key Takeaway */}
          <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DFD5] text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              💡 <strong>Kết luận:</strong> Són tiểu gắng sức không phải là dấu chấm hết cho sự thanh lịch. Không cần chấp nhận cảm giác dày cộm mặc cảm của tã người lớn, sự bất tiện của BVS hay nỗi sợ ướt quần lót thường. <strong>Quần lót chống són tiểu ANTCARE trả lại sự tự tin, tự do cười vui và lòng tự tôn trọn vẹn cho phụ nữ.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 5. CẤU TẠO 4 LỚP CÔNG NGHỆ (MINIMALIST CROSS-SECTION) */}
      <section id="cau-tao-4-lop" className="py-16 md:py-24 bg-white border-y border-[#E8DFD5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          {/* Header trung tâm tinh tế */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#8C6D58]">
              BÊN TRONG CHIẾC QUẦN
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] tracking-tight">
              Cấu Tạo 4 Lớp Mỏng Nhẹ, Khóa Ẩm Tuyệt Đối
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto">
              Độ dày vùng đáy chỉ xấp xỉ 2mm nhưng sở hữu sức chứa gấp 4 lần quần lót thường — khóa chặt 35–50ml chất lỏng và triệt tiêu 99% mùi khó chịu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Cột Trái: Ảnh minh họa bóc tách 3D 4 lớp công nghệ có CHÚ THÍCH BÊN NGANG TRỰC TIẾP */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-[#FAF8F5] shadow-xs group">
                
                {/* Ảnh bóc tách 3D */}
                <img 
                  src="/images/products/minh-hoa-cau-tao-4-lop.jpg" 
                  alt="Minh họa bóc tách 3D cấu tạo 4 lớp công nghệ siêu mỏng 2mm quần lót thấm hút ANTCARE" 
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badge góc trên */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#E8DFD5] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] shadow-xs flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  Cấu Trúc 4 Lớp Siêu Mỏng 2mm
                </div>

                {/* Chú thích ngang trực tiếp cho LỚP 01 (Trái - Lớp trên cùng) */}
                <div className="absolute top-[18%] left-2.5 sm:left-4 flex items-center gap-1 sm:gap-2 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">01</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">Sợi tre tổ ong</strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">Hút sâu 2s, khô thoáng da</span>
                  </div>
                  <span className="w-3 sm:w-6 h-px bg-[#8C6D58] shrink-0"></span>
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#8C6D58] ring-2 sm:ring-4 ring-[#8C6D58]/20 shrink-0"></span>
                </div>

                {/* Chú thích ngang trực tiếp cho LỚP 02 (Phải - Lớp thứ hai nén mỏng) */}
                <div className="absolute top-[35%] right-2.5 sm:right-4 flex items-center gap-1 sm:gap-2 z-10">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#1C1917] ring-2 sm:ring-4 ring-[#1C1917]/20 shrink-0"></span>
                  <span className="w-3 sm:w-6 h-px bg-[#1C1917] shrink-0"></span>
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">02</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">Lõi vi sợi nén</strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">Khóa chặt 35–50ml</span>
                  </div>
                </div>

                {/* Chú thích ngang trực tiếp cho LỚP 03 (Trái - Lớp thứ ba màng TPU) */}
                <div className="absolute top-[52%] left-2.5 sm:left-4 flex items-center gap-1 sm:gap-2 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">03</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">Màng nano TPU</strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">Chống thấm 100%, thoáng khí</span>
                  </div>
                  <span className="w-3 sm:w-6 h-px bg-emerald-700 shrink-0"></span>
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-700 ring-2 sm:ring-4 ring-emerald-700/20 shrink-0"></span>
                </div>

                {/* Chú thích ngang trực tiếp cho LỚP 04 (Phải - Lớp đáy ngoài cùng) */}
                <div className="absolute top-[69%] right-2.5 sm:right-4 flex items-center gap-1 sm:gap-2 z-10">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#9333EA] ring-2 sm:ring-4 ring-[#9333EA]/20 shrink-0"></span>
                  <span className="w-3 sm:w-6 h-px bg-[#9333EA] shrink-0"></span>
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-[#8C6D58] font-mono">04</span>
                      <strong className="text-[11px] sm:text-xs text-[#1C1917]">Vải ngoài seamless</strong>
                    </div>
                    <span className="text-[10px] text-[#57534E] hidden sm:block">Mềm mượt lụa, không lộ viền</span>
                  </div>
                </div>

              </div>

              {/* Chứng nhận da liễu gọn gàng */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] space-y-1">
                <div className="text-[11px] font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span> Tiêu chuẩn kiểm nghiệm da liễu
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  100% không chứa hóa chất tẩy trắng huỳnh quang, không chứa Dioxin, không hương liệu nhân tạo gây kích ứng vùng nhạy cảm.
                </p>
              </div>
            </div>

            {/* Cột Phải: 4 ô nhỏ gọn, tinh tế kèm icon minh họa chức năng */}
            <div className="lg:col-span-6 space-y-3">
              
              {/* Lớp 1 */}
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
                        Lớp Tiếp Xúc Da Khô Thoáng (Stay-Dry)
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      Sợi tre dệt tổ ong hữu cơ mao dẫn 1 chiều. Hút chất lỏng xuống tầng dưới trong 1-2 giây, giữ bề mặt luôn khô ráo và êm dịu cho da.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lớp 2 */}
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
                        Lõi Vi Sợi Siêu Thấm Hút (Absorbent Core)
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      Sợi Microfiber nén mật độ cao ngậm dịch gấp 10 lần trọng lượng. Khóa chặt 35–50ml chất lỏng, không bị tràn ngược khi ngồi đè lên.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lớp 3 */}
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
                        Màng Nano Chống Thấm Thoáng Khí (TPU)
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      Chặn đứng 100% phân tử nước không cho thấm ra ngoài, đồng thời giải phóng hơi ẩm giúp vùng kín luôn mát mẻ, không bí bách.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lớp 4 */}
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
                        Vải Ngoài Co Giãn Liền Mạch (Seamless)
                      </h3>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      Chất liệu mềm mượt như lụa, co giãn 4 chiều ôm sát mông tự nhiên. Không lộ đường viền lằn dưới váy ôm hay quần tây công sở.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. PRODUCT SHOWCASE & QUICK SELECT (SAALT STYLE) */}
      <section id="dat-mua-nhanh" className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Product Still Image */}
              <div className="lg:col-span-6 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 flex items-center justify-center border border-[#E8DFD5]">
                <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm">
                  <img
                    src="/images/products/quan-lot-tham-hut.jpg"
                    alt="Quần Lót Thấm Hút ANTCARE màu đen và be"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Detail Selection */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D58]">
                    Dáng Cạp Cao Ôm Bụng • Thoải Mái Cả Ngày
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                    Quần Lót Thấm Hút ANTCARE
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-xs text-[#78716C]">
                    <span className="text-amber-500">★★★★★</span>
                    <span className="font-bold text-[#1C1917]">4.9</span>
                    <span>(194 đánh giá từ khách hàng)</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-[#1C1917]">
                  249.000đ <span className="text-xs font-normal text-[#78716C]">/ chiếc lẻ</span>
                  <span className="block text-xs font-semibold text-[#8C6D58] mt-0.5">
                    Chỉ còn 233.000đ/chiếc khi mua Combo 3 quần + Freeship
                  </span>
                </div>

                {/* Color & Style Selector */}
                <div>
                  <label className="text-xs font-bold text-[#1C1917] block mb-2">
                    Kiểu dáng &amp; Màu sắc: <span className="text-[#8C6D58] font-extrabold">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Đen tuyền (Boxer / Boy-short)', tag: 'Boxer đen' },
                      { name: 'Hồng hoa nhí (Boy-short)', tag: 'Hoa nhí teen' },
                      { name: 'Be nude (High-waist cạp cao)', tag: 'Cạp cao nude' },
                      { name: 'Tím pastel (Tam giác Bikini)', tag: 'Tam giác tím' },
                      { name: 'Be nude (Boy-short nhẹ nhàng)', tag: 'Boy-short nude' }
                    ].map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColor(col.name)}
                        className={`px-3.5 py-2 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                          selectedColor === col.name
                            ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-xs'
                            : 'bg-white text-[#57534E] border-[#D6C7B8] hover:border-[#1C1917]'
                        }`}
                      >
                        <span>{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-[#1C1917]">
                      Chọn Size: <span className="text-[#8C6D58]">Size {selectedSize}</span>
                    </label>
                    <span className="text-xs text-[#8C6D58] font-semibold">
                      Đổi size miễn phí trong 7 ngày
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
                        className={`py-3 rounded-xl border transition-all ${
                          selectedSize === item.s
                            ? 'bg-[#1C1917] text-white border-[#1C1917]'
                            : 'bg-white text-[#57534E] border-[#D6C7B8] hover:border-[#1C1917]'
                        }`}
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
                    onClick={() => handleOpenOrder('Gói Trải Nghiệm 1 Quần (249.000đ)', selectedSize, selectedColor)}
                    className="w-full bg-[#1C1917] hover:bg-[#332E2B] text-white font-bold text-xs sm:text-sm py-4 rounded-full uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    Đặt Mua 1 Chiếc Thử Nghiệm (249.000đ)
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. COMPARISON MATRIX (MINIMALIST TABLE) */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E8DFD5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8C6D58]">
              SO SÁNH MINH BẠCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Sự Khác Biệt Của Quần Lót Thấm Hút
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden border border-[#E8DFD5] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F8F4EE] border-b border-[#E8DFD5] text-[#1C1917]">
                  <th className="p-4 sm:p-5 font-bold">Tiêu chí</th>
                  <th className="p-4 sm:p-5 font-bold text-[#8C6D58] bg-[#F3ECE5]">
                    ★ Quần Lót Thấm Hút ANTCARE
                  </th>
                  <th className="p-4 sm:p-5 font-normal text-[#78716C]">Băng vệ sinh dùng 1 lần</th>
                  <th className="p-4 sm:p-5 font-normal text-[#78716C]">Bỉm / Tã dán người lớn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD5] text-[#57534E]">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">Cảm giác khi mặc</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    Mềm êm như đồ lót thường, không cộm ngứa
                  </td>
                  <td className="p-4 sm:p-5">Dễ cọ xát viền bẹn, hầm nóng</td>
                  <td className="p-4 sm:p-5">Dày cộm, xột xoạt, tự ti</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">Chống tràn & Rò rỉ</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    Bản đáy mở rộng trước - sau, không lệch cánh
                  </td>
                  <td className="p-4 sm:p-5">Dễ xô lệch, tràn mép khi nằm nghiêng</td>
                  <td className="p-4 sm:p-5">Khó ôm khít khi đi lại nhiều</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">Đa năng 2-trong-1</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    Vừa dùng cho kinh nguyệt, vừa dùng cho són tiểu
                  </td>
                  <td className="p-4 sm:p-5">Chỉ dùng cho kinh nguyệt</td>
                  <td className="p-4 sm:p-5">Chỉ dùng cho són tiểu nặng</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">Chi phí trong 2 năm</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    Khoảng 700.000đ (dùng 3 chiếc luân phiên)
                  </td>
                  <td className="p-4 sm:p-5">~ 2.500.000đ – 3.500.000đ</td>
                  <td className="p-4 sm:p-5">~ 4.000.000đ – 7.000.000đ</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1C1917]">Môi trường</td>
                  <td className="p-4 sm:p-5 bg-[#FAF8F5] font-semibold text-[#1C1917]">
                    Giặt tái sử dụng hơn 100 lần, bền vững
                  </td>
                  <td className="p-4 sm:p-5">Hàng trăm miếng rác thải khó phân hủy</td>
                  <td className="p-4 sm:p-5">Lượng rác thải lớn ra môi trường</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION (MINIMALIST) */}
      <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#E8DFD5]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8C6D58]">
              CÂU HỎI THƯỜNG GẶP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Mọi Điều Bạn Cần Biết
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

      {/* 12. ORDER MODAL (DISCREET & LUXURY) */}
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
                    Giao Hàng Kín Đáo & Bảo Mật
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-2">
                    Đặt Mua Quần Lót Thấm Hút
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1">
                    Đóng gói hộp kín tinh tế, che tên sản phẩm tế nhị trên phiếu gửi hàng.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#E8DFD5]">
                    <label className="block text-[11px] font-bold text-[#1C1917] mb-1">Gói đã chọn:</label>
                    <select
                      value={modalCombo}
                      onChange={(e) => setModalCombo(e.target.value)}
                      className="w-full bg-white border border-[#D6C7B8] rounded-xl p-2.5 font-bold text-[#1C1917] text-xs outline-none"
                    >
                      <option value="Gói Trải Nghiệm 1 Quần (249.000đ)">1 Quần (249.000đ + ship 25k)</option>
                      <option value="Combo 3 Quần Tiết Kiệm (699.000đ - Tặng túi giặt + Freeship)">Combo 3 Quần (699.000đ - Tặng túi giặt + Freeship)</option>
                      <option value="Combo 5 Quần Trọn Tuần (1.050.000đ - 2 Túi giặt + Freeship)">Combo 5 Quần (1.050.000đ - 2 Túi giặt + Freeship)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#1C1917] mb-1">Kích cỡ (Size):</label>
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
                      <label className="block font-bold text-[#1C1917] mb-1">Kiểu dáng &amp; Màu sắc:</label>
                      <select
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        className="w-full p-2.5 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl font-bold text-[#1C1917] focus:bg-white outline-none"
                      >
                        <option value="Đen tuyền (Boxer / Boy-short)">Đen tuyền (Boxer / Boy-short chống tràn đêm)</option>
                        <option value="Hồng hoa nhí (Boy-short)">Hồng hoa nhí (Boy-short tuổi teen)</option>
                        <option value="Be nude (High-waist cạp cao)">Be nude (High-waist cạp cao ôm bụng)</option>
                        <option value="Tím pastel (Tam giác Bikini)">Tím pastel (Tam giác Bikini thoáng khí)</option>
                        <option value="Be nude (Boy-short nhẹ nhàng)">Be nude (Boy-short nhẹ nhàng vô hình)</option>
                        <option value="Phối nhiều màu & kiểu dáng ngẫu nhiên">Phối nhiều màu &amp; kiểu dáng ngẫu nhiên</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">Họ và tên người nhận:</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Chị Mai Anh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">Số điện thoại:</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">Địa chỉ nhận hàng:</label>
                    <input
                      type="text"
                      required
                      placeholder="Số nhà, đường, quận huyện, tỉnh/TP"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1">Ghi chú (chiều cao, cân nặng để chuẩn size):</label>
                    <textarea
                      rows="2"
                      placeholder="Ghi chú thêm nếu cần..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F5] border border-[#D6C7B8] rounded-xl text-[#1C1917] focus:bg-white outline-none text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1C1917] hover:bg-[#332E2B] text-white font-bold py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer mt-2"
                  >
                    Xác Nhận Đặt Hàng
                  </button>

                  <p className="text-[11px] text-center text-[#78716C]">
                    Kiểm tra hàng trước khi thanh toán (COD). Hoàn tiền 100% nếu sản phẩm lỗi.
                  </p>

                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#F3ECE5] text-[#8C6D58] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#1C1917]">Đặt Hàng Thành Công!</h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-sm mx-auto">
                  Cảm ơn bạn đã tin tưởng ANTCARE. Đội ngũ chuyên viên sẽ liên hệ xác nhận đơn hàng và kích thước chuẩn trong vòng 15-30 phút.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setFormSubmitted(false);
                    }}
                    className="bg-[#1C1917] text-white font-bold px-7 py-2.5 rounded-full text-xs uppercase tracking-wider"
                  >
                    Đóng cửa sổ
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