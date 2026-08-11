import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Rellax from 'rellax';
import siteInfo from '../config/siteInfo.json';
import { getLandingPageData } from '../services/apiService';

const LandingPage = () => {
  const { t } = useTranslation();
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [consultForm, setConsultForm] = useState({ name: '', phone: '', location: '' });
  const [consultError, setConsultError] = useState('');
  const [consultSuccess, setConsultSuccess] = useState(false);

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    if (!consultForm.name.trim() || !consultForm.phone.trim() || !consultForm.location.trim()) {
      setConsultError('Khách hàng lưu ý cần nhập đủ 3 dòng thông tin nhé ạ');
      setConsultSuccess(false);
      return;
    }
    setConsultError('');
    setConsultSuccess(true);
  };

  useEffect(() => {
    getLandingPageData().then(data => {
      setPageData(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading) return;

    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    return () => {
      rellax.destroy();
    };
  }, [isLoading]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface-mist"><div className="w-12 h-12 border-4 border-earth-orange-bright border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <>
      {/*  1. Hero Section  */}
<section className="relative overflow-hidden min-h-[80vh] md:min-h-screen flex items-center justify-start pt-10 pb-20 md:pt-14 md:pb-24">
<img src="/images/hero-bg.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none" />
<div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
<div className="w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] mr-auto text-center flex flex-col items-center animate-fade-in-up">
  {/* Group: Logo & Slogan paired tightly */}
  <div className="flex flex-col items-center justify-center gap-1 mb-4 sm:mb-5 text-center w-full">
    <img src="/images/hero-logo-text.png" alt="ANTCARE logo" className="w-[150px] sm:w-[180px] md:w-[215px] lg:w-[240px] h-auto object-contain drop-shadow-sm mx-auto my-1" />
    <h1 className="font-semibold text-slate-500 text-[19px] sm:text-[21px] md:text-[24px] lg:text-[26px] tracking-tight whitespace-nowrap text-center mt-1 w-full">
      Để ba mẹ tuổi già vui khỏe, an tâm
    </h1>
  </div>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full mt-6 sm:mt-7">
    <a className="bg-gradient-to-r from-earth-orange-bright to-earth-orange-dark text-white rounded-full font-bold text-[13px] sm:text-[13.5px] shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5 h-10 sm:h-[42px] w-full sm:w-[185px] whitespace-nowrap" href="#lien-he-gia-dinh">
      <span className="material-symbols-outlined text-[18px]">chat</span>
      <span>{t("hero.btnConsult")}</span>
    </a>
    <a className="bg-white text-plum-deep border-2 border-plum-deep/15 rounded-full font-bold text-[13px] sm:text-[13.5px] shadow-md hover:shadow-xl hover:bg-plum-deep hover:text-white hover:border-plum-deep hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5 h-10 sm:h-[42px] w-full sm:w-[185px] whitespace-nowrap group" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>
      <span className="material-symbols-outlined text-[18px] text-earth-orange-bright group-hover:text-white group-hover:animate-bounce">call</span>
      <span>{siteInfo.hotline}</span>
    </a>
  </div>
</div>
</div>
</section>
{/*  Info Bar (remains tied to hero as visual bridge)  */}
<div className="max-w-container-max mx-auto px-gutter-desktop mt-6 md:-mt-16 relative z-30">
<div className="grid md:grid-cols-3 gap-6 rellax" data-rellax-speed="1" data-rellax-desktop-speed="1.5">
<div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-earth-orange-bright flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-3xl text-primary">translate</span>
<h3 className="font-headline-md font-bold">Trợ lý song ngữ Việt/Anh</h3>
</div>
<p className="text-body-sm text-on-surface-variant">Đội ngũ trợ lý sức khỏe chuyên nghiệp, hỗ trợ cả khách hàng người Việt, và người nước ngoài sinh sống tại Việt Nam.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-primary flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-3xl text-primary">home_health</span>
<h3 className="font-headline-md font-bold">Tại Nhà &amp; Bệnh viện</h3>
</div>
<p className="text-body-sm text-on-surface-variant">Đồng hành liên tục dù người thân của bạn đang nghỉ ngơi tại nhà hay đang điều trị tại cơ sở y tế.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-earth-orange-bright flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-3xl text-primary">schedule</span>
<h3 className="font-headline-md font-bold">Đồng hành 24/7</h3>
</div>
<p className="text-body-sm text-on-surface-variant">Đồng hành quan sát sức khỏe ba mẹ, kết nối cùng công nghệ để gia đình luôn yên tâm và tin tưởng.</p>
</div>
</div>
</div>
{/*  2. Situations Section (Dành cho những người thân yêu...)  */}
<section className="pt-8 pb-6 md:pt-14 md:pb-8 bg-surface-container-low relative overflow-hidden">
{/*  Parallax Background Blobs  */}
<div className="absolute top-0 left-0 w-96 h-96 bg-earth-orange-bright/10 rounded-full blur-[100px] rellax pointer-events-none" data-rellax-speed="-2"></div>
<div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-plum-deep/10 rounded-full blur-[120px] rellax pointer-events-none" data-rellax-speed="3"></div>
<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[80px] rellax pointer-events-none" data-rellax-speed="-1"></div>

<div className="max-w-container-max mx-auto px-gutter-desktop relative z-10">
<div className="text-center mb-16 reveal rellax" data-rellax-speed="0.5">
<span className="font-bold text-base md:text-2xl uppercase tracking-wider text-earth-orange-bright">Dành cho những người thân yêu của gia đình bạn</span>
<h2 className="font-bold text-plum-deep mt-4 text-2xl md:text-3xl lg:text-4xl">Có phải gia đình bạn cũng ở trong hoàn cảnh này?</h2>
</div>
<div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
{pageData?.situations.map((item) => (
  <div key={item.id} className="flex flex-col p-5 sm:p-6 rounded-2xl bg-white border border-surface-lavender/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex items-center gap-2.5 mb-3">
      <span className={`w-7 h-7 shrink-0 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-xs shadow-sm`}>
        {item.number}
      </span> 
      <span className="text-[11px] font-bold uppercase tracking-wider text-earth-orange-bright">Chia sẻ gia đình</span>
    </div>
    <h3 className="text-sm sm:text-[15px] font-bold text-plum-deep mb-2.5 leading-snug">
      {item.title}
    </h3>
    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed opacity-90 mt-auto pt-2 border-t border-surface-lavender/40">
      {item.description}
    </p>
  </div>
))}
</div>
<div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-10 md:pt-16 border-t border-plum-deep/10">
{pageData?.medicalShares.map((expert, idx) => (
  <div key={expert.id} className="flex items-start gap-6">
    <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img alt={expert.name} className="w-full h-full object-cover object-center" src={expert.image} />
    </div>
    <div className="space-y-3 flex-1">
      <blockquote className="text-xl font-bold text-plum-deep italic leading-snug rellax" data-rellax-speed="-0.3">{expert.quote}</blockquote>
      <div>
        <p className="text-body-sm font-bold text-plum-deep">{expert.name}</p>
        <p className="text-[14px] text-on-surface-variant">{expert.title}</p>
      </div>
      {idx === 1 && (
        <div className="pt-2">
          <Link className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm text-xs sm:text-sm cursor-pointer" to="/news" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Khám phá thêm các chia sẻ y khoa <span className="material-symbols-outlined text-[18px]">menu_book</span>
          </Link>
        </div>
      )}
    </div>
  </div>
))}
</div>
</div>
</section>
{/*  3. Expert Section (Góc nhìn Chuyên gia)  */}

{/*  3.5. Why Antcare Section (Tại sao là Antcare ?)  */}
<section className="py-10 md:py-16 bg-[#F9F6F3] relative overflow-hidden" id="tai-sao-la-antcare">
  <div className="max-w-container-max mx-auto px-4 md:px-6 lg:px-8">
    <div className="max-w-[1140px] mx-auto bg-white/95 backdrop-blur-md rounded-3xl border border-plum-deep/10 shadow-xl p-5 sm:p-8 lg:p-10 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Title, Quote, and 100% Vector Crisp Comparison Table */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Title & Sparkle Heart Icon */}
          <div className="flex items-center gap-2.5 mb-2">
            <h2 className="font-bold text-[#32133B] text-2xl sm:text-3xl md:text-[34px] tracking-tight">
              Tại sao là{" "}
              <span className="text-[#68259E] font-extrabold">AN</span>
              <span className="text-[#E86A17] font-extrabold">T</span>
              <span className="text-[#68259E] font-extrabold">CARE</span> ?
            </h2>
            <div className="w-9 h-9 rounded-full bg-[#68259E]/10 flex items-center justify-center text-[#68259E] relative shrink-0">
              <span className="material-symbols-outlined text-xl">favorite</span>
              <span className="absolute -top-1 -right-1 text-[#68259E] text-[10px] font-bold">✨</span>
            </div>
          </div>

          {/* Quote Block */}
          <div className="border-l-[3.5px] border-[#E86A17] pl-3.5 py-1.5 my-3 bg-[#E86A17]/5 rounded-r-lg">
            <p className="text-[#E86A17] font-semibold italic text-xs sm:text-sm md:text-[15px] leading-relaxed">
              {pageData?.whyAntcare?.quote}
            </p>
          </div>

          {/* Native HTML Comparison Table (Compact Row Heights) */}
          <div className="mt-3 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-3 sm:p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-2 text-xs font-semibold text-slate-400 w-[64%]"></th>
                    <th className="pb-2 text-center text-xs sm:text-sm font-bold text-[#68259E] uppercase tracking-wider w-[18%] whitespace-nowrap">
                      ANTCARE
                    </th>
                    <th className="pb-2 text-center text-xs sm:text-sm font-semibold text-slate-600 w-[18%] whitespace-nowrap">
                      Bên khác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pageData?.whyAntcare?.comparison?.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-1 sm:py-1.5 pr-2 flex items-center gap-2 text-[11.5px] sm:text-[12px] font-medium text-slate-700 whitespace-nowrap">
                        <span className="material-symbols-outlined text-[#68259E] text-[15px] sm:text-[17px] shrink-0">
                          {row.icon}
                        </span>
                        <span className="whitespace-nowrap">{row.feature}</span>
                      </td>
                      <td className="py-1 sm:py-1.5 text-center font-bold text-sm sm:text-base">
                        {row.antcare ? (
                          <span className="text-emerald-600 font-bold">✓</span>
                        ) : (
                          <span className="text-red-500 font-bold">✕</span>
                        )}
                      </td>
                      <td className="py-1 sm:py-1.5 text-center font-bold text-sm sm:text-base">
                        {row.others ? (
                          <span className="text-emerald-600 font-bold">✓</span>
                        ) : (
                          <span className="text-red-500 font-bold">✕</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: High-Res Original Photo */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[440px] lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white">
            <img
              src="/images/why-antcare.jpg"
              alt="Chăm sóc sức khỏe người cao tuổi Antcare"
              className="w-full h-auto max-h-[520px] lg:max-h-[580px] object-cover object-center"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/*  4. Services Grid Section (Giải pháp chăm sóc sức khỏe toàn diện)  */}
<section className="py-6 md:py-10 scroll-mt-20" id="giai-phap-cham-soc">
  <div className="max-w-[1140px] mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center text-center mb-6 gap-1">
      <div className="max-w-3xl reveal">
        <h2 className="font-bold text-plum-deep text-2xl md:text-3xl tracking-tight">Giải pháp Chăm sóc Sức khỏe Toàn diện</h2>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-1 font-medium">
          Dịch vụ chăm sóc cá nhân hóa theo nhu cầu riêng biệt của mỗi gia đình <span className="italic opacity-80">(Hỗ trợ song ngữ Việt - Anh)</span>
        </p>
      </div>
    </div>

    {/* Narrower & Tighter 4-Column Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-4">
      {pageData?.comprehensiveSolutions?.map((service) => (
        <div key={service.id} className="group cursor-pointer bg-white border border-surface-lavender/80 rounded-2xl p-3.5 sm:p-4 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full reveal">
          <div className="aspect-[16/11] rounded-2xl overflow-hidden mb-3 relative shrink-0">
            <img alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={service.image} />
            <div className="absolute top-2.5 left-2.5 bg-white/95 p-1.5 rounded-lg shadow-md backdrop-blur-sm">
              <span className="material-symbols-outlined text-earth-orange-bright text-lg">{service.icon}</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-sm sm:text-base font-bold text-plum-deep mb-1 leading-snug">{service.title}</h3>
            <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">{service.description}</p>
            <ul className="space-y-1 mb-3 flex-grow">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[11px] leading-tight text-on-surface-variant">
                  <span className="material-symbols-outlined text-earth-orange-bright text-[15px] shrink-0 mt-0.5">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto text-center pt-1">
              <button className="py-1.5 px-4 rounded-full border border-earth-orange-bright text-earth-orange-bright font-bold hover:bg-earth-orange-bright hover:text-white transition-all text-xs w-full">
                Bảng giá dịch vụ
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/*  5. Service Comparison Table (Chi tiết dịch vụ chăm sóc - Balanced Proportions)  */}
<section className="py-6 md:py-10 bg-surface-mist">
  <div className="max-w-container-max mx-auto px-4 md:px-6">
    <div className="text-center mb-6 reveal">
      <h2 className="font-bold text-plum-deep text-xl md:text-2xl lg:text-3xl">Chi tiết Dịch vụ Chăm sóc</h2>
      <p className="text-xs sm:text-sm text-on-surface-variant mt-1">So sánh chi tiết các giải pháp để tìm ra lựa chọn tối ưu cho người thân của bạn</p>
    </div>
    
    <div className="hidden md:block max-w-[1060px] mx-auto overflow-x-auto rounded-2xl border border-surface-lavender shadow-xl bg-white reveal delay-100">
      <table className="w-full text-left border-collapse min-w-[840px]">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-3 px-3.5 md:py-3.5 md:px-4 font-bold text-xs md:text-sm border-r border-white/10 w-[16%] text-center sticky-col bg-primary">Nội dung</th>
            {pageData?.careServiceDetails.map(service => (
              <th key={service.id} className="py-3 px-3.5 md:py-3.5 md:px-4 font-bold text-xs md:text-sm border-r border-white/10 w-[21%] text-center">{service.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-on-surface text-xs md:text-[12.5px]">
          <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
            <td className="py-3 px-3.5 md:px-4 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Đối tượng</td>
            {pageData?.careServiceDetails.map(service => (
              <td key={service.id} className="py-3 px-3.5 md:px-4 border-r border-surface-lavender text-plum-deep leading-snug">{service.target}</td>
            ))}
          </tr>
          <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
            <td className="py-3 px-3.5 md:px-4 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Mục tiêu</td>
            {pageData?.careServiceDetails.map(service => (
              <td key={service.id} className="py-3 px-3.5 md:px-4 border-r border-surface-lavender leading-snug">{service.goal}</td>
            ))}
          </tr>
          <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
            <td className="py-3 px-3.5 md:px-4 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Chi tiết dịch vụ</td>
            {pageData?.careServiceDetails.map(service => (
              <td key={service.id} className="py-3 px-3.5 md:px-4 border-r border-surface-lavender leading-relaxed text-plum-deep">
                <ul className="list-disc ml-3.5 space-y-1">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-3 px-3.5 md:px-4 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Chất lượng &amp; Bảo mật</td>
            <td className="font-medium text-plum-deep text-center p-0" colSpan="4">
              <div className="grid grid-cols-4 gap-0 w-full h-full">
                <div className="py-3 px-3.5 md:px-4 border-r border-surface-lavender text-left leading-relaxed">Thông tin nhân viên minh bạch, theo dõi qua app &amp; bảo mật</div>
                <div className="py-3 px-3.5 md:px-4 border-r border-surface-lavender text-left leading-relaxed">Thông tin nhân viên minh bạch, theo dõi qua app &amp; bảo mật</div>
                <div className="py-3 px-3.5 md:px-4 border-r border-surface-lavender text-left leading-relaxed">Thông tin nhân viên minh bạch, theo dõi qua app &amp; bảo mật</div>
                <div className="py-3 px-3.5 md:px-4 text-left leading-relaxed">Thông tin nhân viên minh bạch, theo dõi qua app &amp; bảo mật</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

{/*  Mobile Card View for Service Comparison (Visible only on mobile)  */}
<div className="md:hidden space-y-6 reveal delay-200 mt-6">
{pageData?.careServiceDetails.map(service => (
<div key={service.id} className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className={`${service.bgClass} p-5 border-b border-surface-lavender flex items-center gap-4`}>
    <div className={`w-12 h-12 rounded-full bg-${service.color} flex items-center justify-center shrink-0 shadow-md`}>
      <span className="material-symbols-outlined text-white text-[24px]">{service.icon}</span>
    </div>
    <h3 className={`text-xl font-bold text-${service.color} leading-tight`}>{service.title}</h3>
  </div>
  
  <div className="p-5 space-y-5">
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">group</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Đối tượng</span>
         <p className="text-[13px] font-medium text-plum-deep leading-relaxed">{service.target}</p>
       </div>
    </div>
    
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">flag</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Mục tiêu</span>
         <p className="text-[13px] text-on-surface-variant leading-relaxed">{service.goal}</p>
       </div>
    </div>
    
    <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender/50">
      <span className="text-[11px] uppercase text-primary font-bold flex items-center gap-1.5 mb-3"><span className="material-symbols-outlined text-[16px]">list_alt</span> Chi tiết dịch vụ</span>
      <ul className="space-y-2 text-[13px] text-plum-deep">
        {service.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> {detail}</li>
        ))}
      </ul>
    </div>

    <div className="flex gap-3 bg-primary/5 p-3 rounded-xl border border-primary/10">
       <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">verified_user</span>
       <div>
         <span className="text-[11px] uppercase text-primary font-bold tracking-wider block mb-1">Chất lượng &amp; Bảo mật</span>
         <p className="text-[12px] font-medium text-plum-deep leading-relaxed">Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin.</p>
       </div>
    </div>
  </div>
</div>
))}
</div>
</div>
</section>

{/*  6. Pricing Packages (Gói Chăm sóc Linh hoạt - Single Viewport Compact)  */}
<section className="bg-plum-deep py-6 md:py-8 text-white scroll-mt-20" id="goi-cham-soc-linh-hoat">
  <div className="max-w-[1060px] mx-auto px-4 md:px-6">
    <div className="text-center mb-4 reveal">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Gói Chăm sóc Linh hoạt</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-4 lg:gap-5 items-stretch">
      {/*  Block 1: Gói Trợ lý Sức khỏe  */}
      <div className="flex flex-col justify-between reveal">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-7 h-7 bg-earth-orange-bright rounded-full flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-white text-base">health_and_safety</span>
          </div>
          <h3 className="text-base font-bold text-white">Gói Trợ lý Sức khỏe</h3>
        </div>

        {/* 3 Sleek Horizontal Tier Cards (Compact Full Width Rows) */}
        <div className="flex flex-col gap-2 mb-2">
          {pageData?.healthMonitorPackages?.map(pkg => (
            <div key={pkg.id} className={`${pkg.highlight ? 'bg-[#F3E8FF] text-plum-deep border-purple-300 shadow-lg' : 'bg-white text-on-surface border-surface-lavender shadow-md'} p-2.5 sm:p-3 rounded-xl border relative cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl`}>
              {pkg.tag && (
                <div className="absolute -top-2.5 right-3 bg-earth-orange-bright text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase shadow-sm">
                  {pkg.tag}
                </div>
              )}
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold whitespace-nowrap text-plum-deep">{pkg.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${pkg.highlight ? 'bg-earth-orange-bright text-white border-earth-orange-bright' : 'bg-earth-orange-bright/10 text-earth-orange-dark border-earth-orange-bright/30'}`}>
                    {pkg.frequency}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm sm:text-base font-bold text-plum-deep">{pkg.price}</span>
                  <span className="text-[11px] opacity-80 text-plum-deep"> đ/tháng</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                {pkg.suitability ? (
                  <p className="text-[11px] leading-tight italic font-semibold text-earth-orange-dark">
                    * {pkg.suitability}
                  </p>
                ) : <div />}
                {pkg.dailyPrice && (
                  <div className="flex items-center gap-1 shrink-0 animate-pulse bg-red-50 border border-red-200/80 px-1.5 py-0.5 rounded-md shadow-xs">
                    <span className="material-symbols-outlined text-[11px] text-red-600 font-bold">auto_awesome</span>
                    <span className="text-[10.5px] font-extrabold text-red-600 tracking-tight">{pkg.dailyPrice}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Unified Activity List (Compact Spacing) */}
        <div className="bg-[#F3E8FF] text-plum-deep rounded-xl border border-purple-300 p-3 flex-grow shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
          <span className="text-[11px] font-bold text-earth-orange-dark uppercase tracking-wider block mb-1.5">
            Các hoạt động bao gồm trong gói:
          </span>
          <ul className="space-y-1 text-xs text-plum-deep">
            <li className="flex items-start gap-1.5 leading-tight">
              <span className="material-symbols-outlined text-earth-orange-bright text-[14px] shrink-0 mt-0.5">check_circle</span>
              <span><strong>Thăm nhà &amp; Kiểm tra chỉ số sinh tồn:</strong> Huyết áp, nhịp tim, nhiệt độ, SpO2 <em>(Riêng gói Yêu Thương bổ sung kiểm tra Đường huyết)</em>.</span>
            </li>
            <li className="flex items-start gap-1.5 leading-tight">
              <span className="material-symbols-outlined text-earth-orange-bright text-[14px] shrink-0 mt-0.5">check_circle</span>
              <span><strong>Bài tập thể chất &amp; trí não:</strong> Theo đúng chuẩn Senior Fitness (Mỹ) &amp; Active Ageing (Singapore).</span>
            </li>
            <li className="flex items-start gap-1.5 leading-tight">
              <span className="material-symbols-outlined text-earth-orange-bright text-[14px] shrink-0 mt-0.5">check_circle</span>
              <span><strong>Tâm sự &amp; trải nghiệm công nghệ mới</strong> cùng ông bà.</span>
            </li>
            <li className="flex items-start gap-1.5 leading-tight">
              <span className="material-symbols-outlined text-earth-orange-bright text-[14px] shrink-0 mt-0.5">check_circle</span>
              <span><strong>Nhắn tin nhắc nhở uống thuốc</strong> mỗi ngày.</span>
            </li>
            <li className="flex items-start gap-1.5 leading-tight">
              <span className="material-symbols-outlined text-earth-orange-bright text-[14px] shrink-0 mt-0.5">check_circle</span>
              <span><strong>Báo cáo &amp; gửi thông tin cập nhật</strong> cho gia đình.</span>
            </li>
          </ul>
        </div>
      </div>

      {/*  Block 2: Gói Dịch vụ Y tế  */}
      <div className="flex flex-col reveal delay-100">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-7 h-7 bg-earth-orange-bright rounded-full flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-white text-base">medical_services</span>
          </div>
          <h3 className="text-base font-bold text-white">Gói Dịch vụ Y tế</h3>
        </div>

        <div className="bg-white/10 rounded-2xl border border-white/15 p-3.5 flex flex-col justify-between flex-grow shadow-md">
          <p className="text-xs text-white/90 mb-2.5 font-medium">Bao gồm các dịch vụ chuyên sâu hỗ trợ sức khỏe toàn diện:</p>
          
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            {pageData?.medicalPackages.map(medPkg => (
              <div key={medPkg.id} className="bg-white p-2 rounded-xl text-center border border-white/20 shadow-sm flex flex-col items-center justify-center h-16 sm:h-18 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]">
                <span className="material-symbols-outlined text-primary text-lg mb-0.5">{medPkg.icon}</span>
                <span className="text-xs font-bold text-plum-deep leading-tight">{medPkg.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-0.5">
            <p className="text-[11px] italic opacity-80 mb-2 text-center">Chi tiết giá vui lòng tham khảo Bảng giá dịch vụ chi tiết bên dưới.</p>
            <a 
              href="#bang-gia-chi-tiet"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('bang-gia-chi-tiet');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-2 rounded-full bg-earth-orange-bright text-white text-xs font-bold hover:bg-earth-orange-dark transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer text-center block"
            >
              Xem bảng giá chi tiết <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  7. Detailed Price Table Section (Custom Excel Pricing Data)  */}
<section className="py-8 md:py-12 bg-surface-mist scroll-mt-24" id="bang-gia-chi-tiet">
  <div className="max-w-[1060px] mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center mb-6 text-center reveal">
      <h2 className="font-bold text-plum-deep uppercase tracking-wide text-xl md:text-2xl lg:text-3xl">BẢNG GIÁ CHI TIẾT GÓI DỊCH VỤ Y TẾ</h2>
      <p className="text-xs sm:text-sm text-on-surface-variant mt-1 font-medium">Bảng giá công khai, minh bạch dành cho khách hàng mới và thành viên ANTCARE</p>
    </div>

    <div className="relative overflow-hidden rounded-2xl border border-surface-lavender shadow-xl bg-white reveal delay-100">
      <div className="hidden sm:flex justify-end px-6 py-2.5 bg-surface-container-low border-b border-surface-lavender/60">
        <span className="text-xs text-on-surface-variant font-medium italic opacity-80">Đơn vị tính: VNĐ</span>
      </div>

      {/* Desktop HTML Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[840px]">
          <thead>
            <tr className="bg-plum-deep text-white text-xs md:text-sm">
              <th className="py-2.5 px-3 font-bold border-r border-white/10 text-center w-[22%] sticky-col bg-plum-deep">Nhóm Dịch Vụ</th>
              <th className="py-2.5 px-3 font-bold border-r border-white/10 text-center w-[26%]">Tên Dịch Vụ</th>
              <th className="py-2.5 px-3 font-bold border-r border-white/10 text-center w-[16%]">Ghi chú</th>
              <th className="py-2.5 px-3 font-bold border-r border-white/10 text-center w-[18%] whitespace-nowrap">Giá Khách Mới</th>
              <th className="py-2.5 px-3 font-bold text-center w-[18%] whitespace-nowrap bg-earth-orange-bright/90">Giá Thành Viên</th>
            </tr>
          </thead>
          <tbody className="text-on-surface text-xs md:text-[13px]">
            {/*  Group 1: Gói An Tâm Nhà Cửa  */}
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td rowSpan={3} className="py-2 px-3.5 font-bold text-plum-deep text-center bg-surface-container-low border-r border-b border-surface-lavender align-middle text-sm">
                Gói An Tâm Nhà Cửa
              </td>
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Gói lẻ</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">4 tiếng/ ca</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right font-medium">540.000</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">490.000</td>
            </tr>
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Gói tháng</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">4 ca/ tháng</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right text-on-surface-variant/40">—</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">1.960.000</td>
            </tr>
            <tr className="border-b-2 border-surface-lavender/80 hover:bg-surface-mist/50 transition-colors">
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Trọn gói chăm sóc</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">4 ca nhà cửa + 4 ca Sức khỏe</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right text-on-surface-variant/40">—</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">3.750.000</td>
            </tr>

            {/*  Group 2: Gói Đồng Hành Khám Bệnh  */}
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td rowSpan={4} className="py-2 px-3.5 font-bold text-plum-deep text-center bg-surface-container-low border-r border-b border-surface-lavender align-middle text-sm">
                Gói Đồng Hành Khám Bệnh
              </td>
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Khám bệnh (≤ 4 giờ)</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">4 giờ</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right font-medium">490.000</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">490.000</td>
            </tr>
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Khám bệnh (≤ 6 giờ)</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">6 giờ</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right font-medium">690.000</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">600.000</td>
            </tr>
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Khám bệnh (≤ 8 giờ)</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">8 giờ</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right font-medium">790.000</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">690.000</td>
            </tr>
            <tr className="border-b-2 border-surface-lavender/80 hover:bg-surface-mist/50 transition-colors">
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Vượt giờ</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant">Mỗi giờ</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-right font-medium">100.000</td>
              <td className="py-2 px-3.5 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">100.000</td>
            </tr>

            {/*  Group 3: Dịch vụ Khác  */}
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td rowSpan={2} className="py-2 px-3.5 font-bold text-plum-deep text-center bg-surface-container-low border-r border-surface-lavender align-middle text-sm">
                Dịch vụ Khác
              </td>
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Chăm sóc người ốm tại nhà/ bệnh viện</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant text-center text-on-surface-variant/40">—</td>
              <td colSpan={2} className="py-2 px-3.5 text-center font-bold text-earth-orange-bright bg-earth-orange-bright/5 text-sm">
                từ 650.000 đ/ngày
              </td>
            </tr>
            <tr className="hover:bg-surface-mist/50 transition-colors">
              <td className="py-2 px-3.5 border-r border-surface-lavender font-semibold text-plum-deep">Tập phục hồi chức năng</td>
              <td className="py-2 px-3.5 border-r border-surface-lavender text-on-surface-variant text-center text-on-surface-variant/40">—</td>
              <td colSpan={2} className="py-2 px-3.5 text-center font-bold text-earth-orange-bright bg-earth-orange-bright/5 text-sm">
                từ 700.000 đ/ca
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View for Custom Pricing (Visible on Mobile) */}
      <div className="md:hidden p-4 space-y-4">
        {/* Mobile Group 1 */}
        <div className="bg-white rounded-xl border border-surface-lavender shadow-md overflow-hidden">
          <div className="bg-primary/10 p-3 border-b border-primary/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">cleaning_services</span>
            <h3 className="font-bold text-plum-deep text-sm">Gói An Tâm Nhà Cửa</h3>
          </div>
          <div className="p-3 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">Gói lẻ</span>
                <span className="text-[11px] text-on-surface-variant">4 tiếng/ ca</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-on-surface-variant line-through block">540.000đ</span>
                <span className="font-bold text-earth-orange-bright">490.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">Gói tháng</span>
                <span className="text-[11px] text-on-surface-variant">4 ca/ tháng</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-earth-orange-bright">1.960.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-plum-deep block">Trọn gói chăm sóc</span>
                <span className="text-[11px] text-on-surface-variant">4 ca nhà cửa + 4 ca Sức khỏe</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-earth-orange-bright">3.750.000đ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Group 2 */}
        <div className="bg-white rounded-xl border border-surface-lavender shadow-md overflow-hidden">
          <div className="bg-primary/10 p-3 border-b border-primary/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">directions_car</span>
            <h3 className="font-bold text-plum-deep text-sm">Gói Đồng Hành Khám Bệnh</h3>
          </div>
          <div className="p-3 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">Khám bệnh (≤ 4 giờ)</span>
                <span className="text-[11px] text-on-surface-variant">4 giờ</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-earth-orange-bright">490.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">Khám bệnh (≤ 6 giờ)</span>
                <span className="text-[11px] text-on-surface-variant">6 giờ</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-on-surface-variant line-through block">690.000đ</span>
                <span className="font-bold text-earth-orange-bright">600.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">Khám bệnh (≤ 8 giờ)</span>
                <span className="text-[11px] text-on-surface-variant">8 giờ</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-on-surface-variant line-through block">790.000đ</span>
                <span className="font-bold text-earth-orange-bright">690.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-plum-deep block">Vượt giờ</span>
                <span className="text-[11px] text-on-surface-variant">Mỗi giờ</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-earth-orange-bright">100.000đ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Group 3 */}
        <div className="bg-white rounded-xl border border-surface-lavender shadow-md overflow-hidden">
          <div className="bg-primary/10 p-3 border-b border-primary/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">medical_services</span>
            <h3 className="font-bold text-plum-deep text-sm">Dịch vụ Khác</h3>
          </div>
          <div className="p-3 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <span className="font-bold text-plum-deep">Chăm sóc người ốm tại nhà/ bệnh viện</span>
              <span className="font-bold text-earth-orange-bright">từ 650.000đ/ngày</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-plum-deep">Tập phục hồi chức năng</span>
              <span className="font-bold text-earth-orange-bright">từ 700.000đ/ca</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="mt-4 text-xs text-on-surface-variant italic text-center">* Lưu ý: Trường hợp có sử dụng nhân viên biết tiếng Anh tính thêm phí theo thỏa thuận</p>
  </div>
</section>
{/*  Connect Sections (Dành cho khách hàng)  */}
<section className="py-6 md:py-10 bg-plum-deep" id="lien-he-gia-dinh">
<div className="max-w-[1060px] mx-auto px-4 md:px-6">
<div className="bg-white rounded-3xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
<div className="md:w-1/2 space-y-5">
<h3 className="text-primary font-bold text-lg md:text-xl mb-1">Kết nối cùng chúng tôi <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h3>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 bg-earth-orange-bright text-white"><span className="material-symbols-outlined text-[16px]">person</span> Dành cho khách hàng</div>
<h2 className="font-bold text-plum-deep leading-tight text-xl md:text-2xl"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ luôn sẵn sàng đồng hành cùng để giữ trọn {t("hero.title3")}</h2>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Hãy chia sẻ cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ bạn nhé, bạn muốn gọi điện thoại ngay qua hotline <a className="text-earth-orange-bright font-bold hover:underline" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>{siteInfo.hotline}</a> hay để lại thông tin liên hệ.</p>
<div className="space-y-3 pt-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-earth-orange-bright/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-earth-orange-bright text-base">schedule</span></div>
<p className="text-xs sm:text-sm font-medium text-plum-deep">Chúng tôi sẽ liên hệ lại ngay trong 4 tiếng.</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-earth-orange-bright/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-earth-orange-bright text-base">lock</span></div>
<p className="text-xs sm:text-sm font-medium text-plum-deep">Thông tin sẽ được bảo mật theo chính sách cam kết của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
</div>
</div>
</div>
<div className="md:w-1/2 w-full bg-surface-mist p-5 sm:p-6 rounded-2xl border border-surface-lavender">
<form onSubmit={handleConsultSubmit} className="space-y-4">
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Họ và tên</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">person</span>
<input 
  className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" 
  placeholder="Nhập họ và tên của bạn" 
  type="text" 
  value={consultForm.name}
  onChange={(e) => {
    setConsultForm({ ...consultForm, name: e.target.value });
    if (consultError) setConsultError('');
  }}
/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Số điện thoại</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">call</span>
<input 
  className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" 
  placeholder="0xxx xxx xxx" 
  type="tel" 
  value={consultForm.phone}
  onChange={(e) => {
    setConsultForm({ ...consultForm, phone: e.target.value });
    if (consultError) setConsultError('');
  }}
/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Người cần hỗ trợ đang sinh sống tại</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">location_on</span>
<input 
  className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" 
  placeholder="Nhập địa chỉ hoặc khu vực" 
  type="text" 
  value={consultForm.location}
  onChange={(e) => {
    setConsultForm({ ...consultForm, location: e.target.value });
    if (consultError) setConsultError('');
  }}
/>
</div>
</div>

{consultError && (
  <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold p-3 rounded-xl flex items-center gap-2 animate-pulse shadow-sm">
    <span className="material-symbols-outlined text-sm shrink-0">error</span>
    <span>{consultError}</span>
  </div>
)}

{consultSuccess && (
  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold p-3 rounded-xl flex items-center gap-2 shadow-sm">
    <span className="material-symbols-outlined text-sm shrink-0 text-emerald-600">check_circle</span>
    <span>Cảm ơn bạn! ANTCARE đã ghi nhận và sẽ liên hệ lại trong 4 tiếng.</span>
  </div>
)}

<button className="bg-earth-orange-bright text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md w-full max-w-[240px] md:max-w-none md:w-auto mx-auto block cursor-pointer" type="submit">{t("hero.btnConsult")}</button>
</form>
</div>
</div>
</div>
</section>

{/*  Connect Sections (Dành cho đối tác & Tuyển dụng)  */}
<section className="py-6 md:py-10 bg-surface-lavender/30 border-t border-surface-lavender scroll-mt-24" id="danh-cho-doi-tac-tuyen-dung">
<div className="max-w-[1060px] mx-auto px-4 md:px-6">
<div className="bg-white rounded-3xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
<div className="md:w-1/2 space-y-4">
<h3 className="text-primary font-bold text-lg md:text-xl mb-1">Kết nối cùng chúng tôi <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h3>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 bg-earth-orange-bright text-white"><span className="material-symbols-outlined text-[16px]">handshake</span> DÀNH CHO ĐỐI TÁC &amp; TUYỂN DỤNG</div>
<h2 className="font-bold text-plum-deep leading-tight text-xl md:text-2xl">Hãy hợp tác cùng chúng tôi vì một tiêu chuẩn chăm sóc gia đình Việt hiện đại, uy tín</h2>
<p className="text-xs sm:text-sm text-plum-deep font-semibold mt-2">Dịch vụ của chúng tôi phù hợp cho nhiều đối tượng đang đi học hoặc đã đi làm gồm:</p>
<ul className="space-y-1.5 mt-2 text-xs sm:text-sm text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[18px]">check_circle</span> Cá nhân muốn tìm kiếm 1 công việc có thời gian linh hoạt</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[18px]">check_circle</span> Cá nhân được đào tạo y tế muốn tìm kiếm 1 công việc có thời gian linh hoạt</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[18px]">check_circle</span> Tổ chức y tế cần mở rộng mạng lưới khách hàng của mình</li>
</ul>
<p className="text-xs sm:text-sm text-on-surface-variant mt-4">Hãy liên hệ với chúng tôi qua email: <a className="text-earth-orange-bright font-bold hover:underline" href="mailto:tuyendung@antcare.vn">tuyendung@antcare.vn</a></p>
<p className="text-xs sm:text-sm text-on-surface-variant">Khi hợp tác cùng chúng tôi, bạn sẽ <a className="text-primary font-bold hover:text-earth-orange-bright transition-colors decoration-2 underline" href="#quyen-loi-doi-tac">xem chi tiết</a></p>
</div>
<div className="md:w-1/2 w-full bg-surface-mist p-5 sm:p-6 rounded-2xl border border-surface-lavender">
<form className="space-y-4">
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Họ và tên hoặc Tên tổ chức/ trung tâm</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">person</span>
<input className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" placeholder="Nhập họ và tên của bạn" type="text" />
</div>
</div>
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Số điện thoại</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">call</span>
<input className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" placeholder="0xxx xxx xxx" type="tel" />
</div>
</div>
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Nơi ở hiện tại của bạn</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">location_on</span>
<input className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" placeholder="Nhập địa chỉ hoặc khu vực" type="text" />
</div>
</div>
<div>
<label className="block text-xs font-bold text-plum-deep mb-1.5">Kinh nghiệm/Ghi chú</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">edit_note</span>
<input className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" placeholder="Chia sẻ thêm về kinh nghiệm của bạn" type="text" />
</div>
</div>
<button className="bg-earth-orange-bright text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md w-full max-w-[240px] md:max-w-none md:w-auto mx-auto block cursor-pointer" type="submit">Gửi thông tin hợp tác</button>
</form>
</div>
</div>
</div>
</section>

{/*  Quyen loi doi tac Section  */}
<section className="py-6 md:py-10 bg-white scroll-mt-24" id="hop-tac-cung-ant">
<div className="max-w-[1060px] mx-auto px-4 md:px-6">
<div className="text-center mb-8 flex flex-col items-center">
<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-3">
<span className="material-symbols-outlined text-[18px]">partnership</span>
</div>
<h2 className="font-display-lg text-plum-deep text-2xl md:text-3xl font-bold mb-2">Hợp tác cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h2>
<div className="w-16 h-1 bg-earth-orange-bright rounded-full mb-3"></div>
<p className="text-xs sm:text-sm text-on-surface-variant max-w-xl">Quyền lợi vượt trội và quy trình làm việc chuyên nghiệp chuẩn quốc tế dành cho đối tác.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
<div className="space-y-6">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-2xl text-primary p-2 bg-primary/10 rounded-xl">workspace_premium</span>
<h3 className="text-lg md:text-xl font-bold text-plum-deep">Quyền lợi của đối tác</h3>
</div>
<div className="grid gap-3.5">
<div className="group bg-surface-mist p-4 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-lg">devices</span>
</div>
<div className="space-y-0.5">
<p className="text-xs sm:text-sm font-bold text-plum-deep">Nền tảng minh bạch</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Được tham gia vào 1 nền tảng điện tử minh bạch, hiện đại, nơi kết nối nhu cầu của người cần dịch vụ và người cung cấp dịch vụ.</p>
</div>
</div>
</div>
<div className="group bg-surface-mist p-4 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-lg">event_available</span>
</div>
<div className="space-y-0.5">
<p className="text-xs sm:text-sm font-bold text-plum-deep">Linh hoạt thời gian</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Đa dạng lựa chọn việc làm, linh hoạt thời gian làm việc phù hợp với lịch trình cá nhân.</p>
</div>
</div>
</div>
<div className="group bg-surface-mist p-4 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-lg">trending_up</span>
</div>
<div className="space-y-0.5">
<p className="text-xs sm:text-sm font-bold text-plum-deep">Tăng thêm thu nhập</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Cơ hội tăng thêm thu nhập và mở rộng mạng lưới khách hàng tiềm năng trong lĩnh vực chăm sóc sức khỏe.</p>
</div>
</div>
</div>
<div className="group bg-surface-mist p-4 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-lg">model_training</span>
</div>
<div className="space-y-0.5">
<p className="text-xs sm:text-sm font-bold text-plum-deep">Đào tạo chuyên sâu</p>
<p className="text-xs text-on-surface-variant leading-relaxed">Được đào tạo và hỗ trợ chuyên môn liên tục trong suốt quá trình hợp tác cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-2xl text-earth-orange-bright p-2 bg-earth-orange-bright/10 rounded-xl">account_tree</span>
<h3 className="text-lg md:text-xl font-bold text-plum-deep">Quy trình hợp tác</h3>
</div>
<div className="relative pl-3 space-y-0">
<div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-earth-orange-bright to-primary/20"></div>
<div className="relative flex gap-6 pb-6 group">
<div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">1</div>
<div className="pt-0.5">
<h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-0.5">Liên hệ / Gửi CV</h4>
<p className="text-xs text-on-surface-variant">Gửi thông tin ứng tuyển hoặc liên hệ trực tiếp qua hotline/email của chúng tôi.</p>
</div>
</div>
<div className="relative flex gap-6 pb-6 group">
<div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">2</div>
<div className="pt-0.5">
<h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-0.5">Kiểm tra thông tin</h4>
<p className="text-xs text-on-surface-variant"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ sẽ tiếp nhận, kiểm tra hồ sơ và liên hệ lại với bạn trong vòng 48h làm việc.</p>
</div>
</div>
<div className="relative flex gap-6 pb-6 group">
<div className="relative z-10 w-9 h-9 rounded-full bg-earth-orange-bright text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">3</div>
<div className="pt-0.5">
<h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-0.5">Trao đổi &amp; Thống nhất</h4>
<p className="text-xs text-on-surface-variant">Hai bên cùng thảo luận chi tiết về cơ chế, quyền lợi và các điều khoản hợp tác cụ thể.</p>
</div>
</div>
<div className="relative flex gap-6 pb-6 group">
<div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">4</div>
<div className="pt-0.5">
<h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-0.5">Ký kết hợp đồng</h4>
<p className="text-xs text-on-surface-variant">Chính thức ký kết hợp đồng cộng tác viên hoặc thỏa thuận hợp tác đối tác chiến lược.</p>
</div>
</div>
<div className="relative flex gap-6 group">
<div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">5</div>
<div className="pt-0.5">
<h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-0.5">Đào tạo &amp; Tiếp nhận</h4>
<p className="text-xs text-on-surface-variant">Tham gia khóa đào tạo tiêu chuẩn và bắt đầu nhận các yêu cầu dịch vụ từ hệ thống.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/*  Our Story Section  */}
<section className="relative scroll-mt-24" id="cau-chuyen-cua-chung-toi">
{/*  Story Hero Section  */}
<div className="relative min-h-[460px] sm:min-h-[500px] flex items-center py-12 sm:py-16 overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover object-right sm:object-center filter contrast-[1.08] brightness-[1.03] saturate-[1.05]" src="/images/story-hero.jpg" alt="Tâm nguyện từ trái tim người sáng lập" />
{/* Gradient bóng mờ nhẹ chỉ phủ phía bên trái để giữ ảnh ông cụ bên phải sắc nét 100% */}
<div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-plum-deep/90 via-plum-deep/40 to-transparent pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-[1060px] mx-auto px-4 md:px-6 w-full">
<div className="max-w-lg text-white">
<span className="inline-block px-3.5 py-1 bg-earth-orange-bright text-white font-bold text-xs mb-3.5 shadow-md rounded-full">Câu chuyện của chúng tôi</span>
<h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-snug font-bold drop-shadow-lg text-white">Tâm nguyện từ trái tim người sáng lập</h1>
<p className="text-xs sm:text-sm text-white/95 max-w-md leading-relaxed drop-shadow-md font-medium">
    Sứ mệnh kết nối tình yêu của con cái và sức khỏe của cha mẹ, mang đến sự an tâm tuyệt đối khi khoảng cách địa lý không còn là rào cản.
</p>
</div>
</div>
</div>

{/*  Story Details Section  */}
<div className="py-6 md:py-10 bg-surface-mist scroll-mt-24" id="cau-chuyen-cua-ant">
<div className="max-w-[1060px] mx-auto px-4 md:px-6">
<div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
<div className="relative flex justify-center md:justify-start">
<div className="w-full max-w-[420px] lg:max-w-[450px] rounded-2xl overflow-hidden shadow-md border border-surface-lavender/60 bg-white p-2 sm:p-2.5 transition-all duration-300 hover:shadow-xl">
<img alt="Tin nhắn quan tâm của con dành cho bố" className="w-full h-auto object-contain rounded-xl" src="/images/story-detail.jpg" />
</div>
</div>
<div className="space-y-3 text-on-surface-variant text-sm sm:text-base leading-relaxed font-normal">
<h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] font-bold text-plum-deep mb-2 whitespace-nowrap">Câu chuyện của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h2>
<p className="leading-relaxed">Chúng tôi thấu hiểu nỗi lòng của những người con xa nhà, luôn đau đáu về sức khỏe của cha mẹ. Những dòng tin nhắn hỏi thăm vội vã giữa giờ làm, những lo âu khi không thể trực tiếp đưa bố mẹ đi khám bệnh chính là khởi nguồn cho sứ mệnh của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
<p className="leading-relaxed">Có những lúc cha mẹ ốm đau nhưng chẳng nỡ gọi con vì sợ con lo, sợ con bận. Có những khi người con ngồi giữa văn phòng hiện đại nhưng lòng quặn thắt vì không thể tự tay đưa cha mẹ đi khám bệnh định kỳ.</p>
<p className="italic text-plum-light font-semibold border-l-4 border-earth-orange-bright pl-3.5 py-1 text-sm sm:text-base">"Sự cô đơn của tuổi già và nỗi trăn trở của những người con xa xứ chính là nguồn cảm hứng để <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ ra đời."</p>
<p className="text-xs sm:text-sm opacity-90 leading-relaxed">Tại sao lại là ANT? Hình ảnh kiến thường gợi tới tính chất bầy đàn, luôn chăm chút về tổ. Do vậy, chúng tôi liên kết những 'bạn kiến' tận tâm thành một tổ kiến rộng lớn, để lan tỏa yêu thương và sự chăm sóc chu đáo đến từng gia đình Việt.</p>
</div>
</div>
</div>
</div>
</section>

{/*  Core Values / Operating Process Section  */}
<section className="py-6 md:py-10 bg-white relative overflow-hidden scroll-mt-24" id="quy-trinh-hoat-dong">
<div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-20"></div>
<div className="max-w-[1060px] mx-auto px-4 md:px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-8">
<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-3">
<span className="material-symbols-outlined text-[18px]">stars</span> Core Values
</div>
<h2 className="text-2xl md:text-3xl font-bold text-plum-deep mb-2">Quy trình hoạt động của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span></h2>
<p className="text-on-surface-variant text-xs sm:text-sm">Mọi hoạt động tại <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ đều được xây dựng trên nền tảng của sự chân thành và tiêu chuẩn y tế khắt khe.</p>
</div>
<div className="w-full space-y-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
<div className="flex flex-col items-center text-center p-3.5 bg-surface-mist rounded-xl border border-surface-lavender relative shadow-sm">
<div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">1</div>
<p className="font-bold text-plum-deep text-xs">Khách hàng liên hệ</p>
</div>
<div className="flex flex-col items-center text-center p-3.5 bg-surface-mist rounded-xl border border-surface-lavender relative shadow-sm">
<div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">2</div>
<p className="font-bold text-plum-deep text-xs"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> kết nối</p>
</div>
<div className="flex flex-col items-center text-center p-3.5 bg-surface-mist rounded-xl border border-surface-lavender relative shadow-sm">
<div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">3</div>
<p className="font-bold text-plum-deep text-xs">Khách hàng đặt cọc dịch vụ, <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> giữ thanh toán</p>
</div>
<div className="flex flex-col items-center text-center p-3.5 bg-surface-mist rounded-xl border border-surface-lavender relative shadow-sm">
<div className="w-9 h-9 bg-earth-orange-bright text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">4</div>
<p className="font-bold text-plum-deep text-xs"><span className="text-earth-orange-bright">Kiến</span> chăm sóc</p>
</div>
<div className="flex flex-col items-center text-center p-3.5 bg-surface-mist rounded-xl border border-surface-lavender relative shadow-sm">
<div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">5</div>
<p className="font-bold text-plum-deep text-xs">Khách hàng đánh giá</p>
</div>
<div className="flex flex-col items-center text-center p-3.5 bg-surface-mist rounded-xl border border-surface-lavender relative shadow-sm">
<div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">6</div>
<p className="font-bold text-plum-deep text-xs"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> thanh toán cho <span className="text-earth-orange-bright">Kiến</span></p>
</div>
</div>
</div>
</div>
</section>

{/*  Thông tin liên hệ Section  */}
<section className="py-6 md:py-10 bg-surface-mist scroll-mt-24" id="thong-tin-lien-he">
<div className="max-w-[1060px] mx-auto px-4 md:px-6">
<div className="text-center mb-6">
<h2 className="text-2xl md:text-3xl font-bold text-plum-deep">Thông tin liên hệ</h2>
<div className="w-16 h-1 bg-earth-orange-bright rounded-full mx-auto mt-2"></div>
</div>
<div className="max-w-xl mx-auto bg-white p-5 sm:p-7 rounded-3xl border border-surface-lavender shadow-md">
<div className="flex flex-col gap-4 text-xs sm:text-sm">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">corporate_fare</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">Văn phòng đại diện tại Hà Nội</p>
<p className="font-bold text-plum-deep">Văn phòng đại diện tại Hà Nội</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">call</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">Số điện thoại</p>
<a className="font-bold text-earth-orange-bright md:hover:underline" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>{siteInfo.hotline}</a>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">mail</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">Email</p>
<a className="font-bold text-plum-deep md:hover:text-earth-orange-bright transition-colors" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">location_on</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">Địa chỉ</p>
<p className="font-bold text-plum-deep leading-relaxed">Tầng 12, Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP. Hồ Chí Minh</p>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
};

export default LandingPage;
