import React, { useEffect, useState } from 'react';
import { useAppTranslation, translatePageData } from '../utils/i18nHelper';
import { Link } from 'react-router-dom';
import Rellax from 'rellax';
import siteInfo from '../config/siteInfo.json';
import { getLandingPageData } from '../services/apiService';

const LandingPage = () => {
  const { t, isEn, tr } = useAppTranslation();
  const [pageData, setPageData] = useState(null);
  const activePageData = translatePageData(pageData, isEn);
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
    document.title = "Antcare -  Kiến chăm tổ";
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
      <section className="relative overflow-hidden pt-3 sm:pt-10 pb-8 sm:pb-20 md:pt-14 md:pb-24 min-h-0 sm:min-h-[80vh] md:min-h-screen flex flex-col justify-center">
        {/* Desktop Background Image (Hidden on Mobile) */}
        <img 
          src="/images/hero-bg.jpg" 
          alt="Hero background" 
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none" 
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full relative z-10">
          
          {/* MOBILE HERO VIEW (Visible only on mobile < sm) */}
          <div className="block sm:hidden w-full space-y-4">
            {/* Dedicated Mobile Image showing 3 family members 100% uncovered */}
            <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 bg-white">
              <img 
                src="/images/hero-bg-mobile.jpg" 
                alt="ANTCARE Chăm sóc người cao tuổi" 
                className="w-full h-auto object-cover max-h-[420px] object-top" 
              />
            </div>

            {/* Text & CTA Buttons placed cleanly BELOW the image so faces are NEVER covered */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm text-center flex flex-col items-center">
              <img 
                src="/images/hero-logo-text.png" 
                alt="ANTCARE logo" 
                className="w-[140px] h-auto object-contain drop-shadow-xs mx-auto mb-1.5" 
              />
              <h1 className="font-semibold text-slate-600 text-[15.5px] tracking-tight text-center mb-4">
                {tr("Để ba mẹ tuổi già vui khỏe, an tâm", "For aging parents to live healthy, happy & peaceful")}
              </h1>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-2.5 w-full max-w-[260px]">
                <a 
                  className="bg-gradient-to-r from-earth-orange-bright to-earth-orange-dark text-white rounded-full font-bold text-[13px] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 h-10 w-full cursor-pointer" 
                  href="#lien-he-gia-dinh"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>{t("hero.btnConsult")}</span>
                </a>
                <a 
                  className="bg-white text-plum-deep border-2 border-plum-deep/20 rounded-full font-bold text-[13px] shadow-xs hover:bg-plum-deep hover:text-white transition-all flex items-center justify-center gap-2 h-10 w-full group cursor-pointer" 
                  href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}
                >
                  <span className="material-symbols-outlined text-[18px] text-earth-orange-bright group-hover:text-white">call</span>
                  <span>{siteInfo.hotline}</span>
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP HERO VIEW (Visible only on sm and up) */}
          <div className="hidden sm:flex w-full max-w-[480px] lg:max-w-[500px] mr-auto text-center flex-col items-center animate-fade-in-up transform translate-x-0 lg:-translate-x-[58px]">
            {/* Group: Logo & Slogan paired tightly */}
            <div className="flex flex-col items-center justify-center gap-1 mb-5 text-center w-full">
              <img src="/images/hero-logo-text.png" alt="ANTCARE logo" className="w-[180px] md:w-[215px] lg:w-[240px] h-auto object-contain drop-shadow-sm mx-auto my-1" />
              <h1 className="font-semibold text-slate-500 text-[21px] md:text-[24px] lg:text-[26px] tracking-tight whitespace-nowrap text-center mt-1 w-full">
                {tr("Để ba mẹ tuổi già vui khỏe, an tâm", "For aging parents to live healthy, happy & peaceful")}
              </h1>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-2.5 w-full mt-7">
              <a className="bg-gradient-to-r from-earth-orange-bright to-earth-orange-dark text-white rounded-full font-bold text-[13.5px] shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5 h-[42px] w-[185px] whitespace-nowrap cursor-pointer" href="#lien-he-gia-dinh">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>{t("hero.btnConsult")}</span>
              </a>
              <a className="bg-white text-plum-deep border-2 border-plum-deep/15 rounded-full font-bold text-[13.5px] shadow-md hover:shadow-xl hover:bg-plum-deep hover:text-white hover:border-plum-deep hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5 h-[42px] w-[185px] whitespace-nowrap group cursor-pointer" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>
                <span className="material-symbols-outlined text-[18px] text-earth-orange-bright group-hover:text-white group-hover:animate-bounce">call</span>
                <span>{siteInfo.hotline}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
{/*  Info Bar (remains tied to hero as visual bridge)  */}
<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 mt-6 md:-mt-16 relative z-30">
<div className="grid md:grid-cols-3 gap-6 rellax" data-rellax-speed="1" data-rellax-desktop-speed="1.5">
<div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-earth-orange-bright flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-3xl text-primary">translate</span>
<h3 className="font-headline-md font-bold text-base md:text-lg">{tr("Trợ lý song ngữ Việt/Anh", "Bilingual VI/EN Assistant")}</h3>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">{tr("Đội ngũ trợ lý sức khỏe chuyên nghiệp, hỗ trợ cả khách hàng người Việt, và người nước ngoài sinh sống tại Việt Nam.", "Professional healthcare assistant team supporting both Vietnamese clients and expats living in Vietnam.")}</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-primary flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-3xl text-primary">home_health</span>
<h3 className="font-headline-md font-bold text-base md:text-lg">{tr("Tại Nhà & Bệnh viện", "At Home & Hospital")}</h3>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">{tr("Đồng hành liên tục dù người thân của bạn đang nghỉ ngơi tại nhà hay đang điều trị tại cơ sở y tế.", "Continuous companionship whether your loved one is resting at home or receiving medical care.")}</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-earth-orange-bright flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-3xl text-primary">schedule</span>
<h3 className="font-headline-md font-bold text-base md:text-lg">{tr("Đồng hành 24/7", "24/7 Companionship")}</h3>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">{tr("Đồng hành quan sát sức khỏe ba mẹ, kết nối cùng công nghệ để gia đình luôn yên tâm và tin tưởng.", "Observing parents' health, powered by technology so families always feel confident and peaceful.")}</p>
</div>
</div>
</div>
{/*  2. Situations Section (Dành cho những người thân yêu...)  */}
<section className="pt-8 pb-6 md:pt-14 md:pb-8 bg-surface-container-low relative overflow-hidden">
{/*  Parallax Background Blobs  */}
<div className="absolute top-0 left-0 w-96 h-96 bg-earth-orange-bright/10 rounded-full blur-[100px] rellax pointer-events-none" data-rellax-speed="-2"></div>
<div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-plum-deep/10 rounded-full blur-[120px] rellax pointer-events-none" data-rellax-speed="3"></div>
<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[80px] rellax pointer-events-none" data-rellax-speed="-1"></div>

<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
<div className="text-center mb-12 reveal rellax" data-rellax-speed="0.5">
<span className="font-bold text-base md:text-xl uppercase tracking-wider text-earth-orange-bright">{tr("Dành cho những người thân yêu của gia đình bạn", "For Your Beloved Family Members")}</span>
<h2 className="font-bold text-plum-deep mt-3 text-2xl md:text-3xl lg:text-4xl">{tr("Có phải gia đình bạn cũng ở trong hoàn cảnh này?", "Is Your Family Facing These Situations?")}</h2>
</div>
<div className="grid md:grid-cols-3 gap-5 lg:gap-7 mb-12">
{activePageData?.situations.map((item) => (
  <div key={item.id} className="flex flex-col p-6 rounded-2xl bg-white border border-surface-lavender/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex items-center gap-2.5 mb-3">
      <span className={`w-8 h-8 shrink-0 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-xs shadow-sm`}>
        {item.number}
      </span> 
      <span className="text-xs font-bold uppercase tracking-wider text-earth-orange-bright">Chia sẻ gia đình</span>
    </div>
    <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-3 leading-snug">
      {item.title}
    </h3>
    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed opacity-90 mt-auto pt-3 border-t border-surface-lavender/40">
      {item.description}
    </p>
  </div>
))}
</div>
<div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-10 md:pt-14 border-t border-plum-deep/10">
{activePageData?.medicalShares.map((expert, idx) => (
  <div key={expert.id} className="flex items-start gap-6">
    <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img alt={expert.name} className="w-full h-full object-cover object-center" src={expert.image} />
    </div>
    <div className="space-y-3 flex-1">
      <blockquote className="text-lg md:text-xl font-bold text-plum-deep italic leading-snug rellax" data-rellax-speed="-0.3">{expert.quote}</blockquote>
      <div>
        <p className="text-sm md:text-base font-bold text-plum-deep">{expert.name}</p>
        <p className="text-xs sm:text-sm text-on-surface-variant">{expert.title}</p>
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
  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
    <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border border-plum-deep/10 shadow-xl p-6 sm:p-8 lg:p-10 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Title, Quote, and 100% Vector Crisp Comparison Table */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Title & Sparkle Heart Icon */}
          <div className="flex items-center gap-2.5 mb-2">
            <h2 className="font-bold text-[#32133B] text-2xl sm:text-3xl md:text-[34px] tracking-tight">
              {tr("Tại sao là", "Why Choose")}{" "}
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
            <p className="text-[#E86A17] font-semibold italic text-xs sm:text-sm md:text-[15.5px] leading-relaxed">
              {tr(activePageData?.whyAntcare?.quote, "Because parents deserve the most devoted, safe, and professional care right at home.")}
            </p>
          </div>

          {/* Native HTML Comparison Table (Compact & Readable) */}
          <div className="mt-3 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden p-3 sm:p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-2.5 text-xs sm:text-sm font-semibold text-slate-400 w-[54%] px-2">{tr("Tiêu chí chăm sóc", "Care Criteria")}</th>
                    <th className="pb-2.5 text-center text-xs sm:text-sm font-extrabold text-[#68259E] uppercase tracking-wider w-[23%] px-3">
                      <span className="px-3 py-1 bg-[#68259E]/10 rounded-full inline-block">ANTCARE</span>
                    </th>
                    <th className="pb-2.5 text-center text-xs sm:text-sm font-bold text-slate-500 w-[23%] px-3">
                      {tr("Bên khác", "Others")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activePageData?.whyAntcare?.comparison?.map((row) => (
                    <tr key={row.id} className="hover:bg-purple-50/40 transition-colors">
                      <td className="py-1.5 sm:py-2 px-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <span className="material-symbols-outlined text-[#68259E] text-[16px] sm:text-[18px] shrink-0">
                          {row.icon}
                        </span>
                        <span className="leading-snug">{row.feature}</span>
                      </td>
                      <td className="py-1.5 sm:py-2 text-center font-bold text-sm sm:text-base px-3">
                        {row.antcare ? (
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center text-xs font-bold">✓</span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 inline-flex items-center justify-center text-xs font-bold">✕</span>
                        )}
                      </td>
                      <td className="py-1.5 sm:py-2 text-center font-bold text-sm sm:text-base px-3">
                        {row.others ? (
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center text-xs font-bold">✓</span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 inline-flex items-center justify-center text-xs font-bold">✕</span>
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
          <div className="relative w-full max-w-[460px] lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white">
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
<section className="py-8 md:py-12 scroll-mt-20" id="giai-phap-cham-soc">
  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
    <div className="flex flex-col items-center text-center mb-8 gap-1">
      <div className="max-w-3xl reveal">
        <h2 className="font-bold text-plum-deep text-2xl md:text-3xl lg:text-4xl tracking-tight">{tr("Giải pháp Chăm sóc Sức khỏe Toàn diện", "Comprehensive Healthcare Solutions")}</h2>
        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mt-1.5 font-medium">
          {tr("Dịch vụ chăm sóc cá nhân hóa theo nhu cầu riêng biệt của mỗi gia đình", "Personalized care services tailored to each family's unique needs")} <span className="italic opacity-80">{tr("(Hỗ trợ song ngữ Việt - Anh)", "(Bilingual VI - EN Support)")}</span>
        </p>
      </div>
    </div>

    {/* 4-Column Card Grid - Roomy Spacing */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
      {activePageData?.comprehensiveSolutions?.map((service) => (
        <div key={service.id} className="group cursor-pointer bg-white border border-surface-lavender/80 rounded-2xl p-4 sm:p-5 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full reveal">
          <div className="aspect-[16/11] rounded-2xl overflow-hidden mb-3.5 relative shrink-0">
            <img alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={service.image} />
            <div className="absolute top-2.5 left-2.5 bg-white/95 p-1.5 rounded-lg shadow-md backdrop-blur-sm">
              <span className="material-symbols-outlined text-earth-orange-bright text-lg">{service.icon}</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-1.5 leading-snug">{service.title}</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">{service.description}</p>
            <ul className="space-y-1.5 mb-4 flex-grow">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] leading-snug text-on-surface-variant">
                  <span className="material-symbols-outlined text-earth-orange-bright text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto text-center pt-1">
              <button className="py-2 px-5 rounded-full border border-earth-orange-bright text-earth-orange-bright font-bold hover:bg-earth-orange-bright hover:text-white transition-all text-xs sm:text-sm w-full">
                {tr("Bảng giá dịch vụ", "Service Pricing")}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/*  5. Service Comparison Table (Chi tiết dịch vụ chăm sóc - Roomy Width & Scaled Text)  */}
<section className="py-8 md:py-12 bg-surface-mist">
  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
    <div className="text-center mb-8 reveal">
      <h2 className="font-bold text-plum-deep text-2xl md:text-3xl lg:text-4xl">{tr("Chi tiết Dịch vụ Chăm sóc", "Care Service Details")}</h2>
      <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mt-1.5 font-medium">{tr("So sánh chi tiết các giải pháp để tìm ra lựa chọn tối ưu cho người thân của bạn", "Detailed comparison of solutions to find the optimal choice for your loved ones")}</p>
    </div>
    
    <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-surface-lavender shadow-xl bg-white reveal delay-100">
      <table className="w-full text-left border-collapse min-w-[960px]">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-3.5 px-4 md:py-4 md:px-5 font-bold text-sm md:text-base border-r border-white/10 w-[16%] text-center sticky-col bg-primary">Nội dung</th>
            {activePageData?.careServiceDetails.map(service => (
              <th key={service.id} className="py-3.5 px-4 md:py-4 md:px-5 font-bold text-sm md:text-base border-r border-white/10 w-[21%] text-center">{service.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-on-surface text-xs sm:text-sm md:text-[14px]">
          <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
            <td className="py-3.5 px-4 md:px-5 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Đối tượng</td>
            {activePageData?.careServiceDetails.map(service => (
              <td key={service.id} className="py-3.5 px-4 md:px-5 border-r border-surface-lavender text-plum-deep leading-relaxed font-medium">{service.target}</td>
            ))}
          </tr>
          <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
            <td className="py-3.5 px-4 md:px-5 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Mục tiêu</td>
            {activePageData?.careServiceDetails.map(service => (
              <td key={service.id} className="py-3.5 px-4 md:px-5 border-r border-surface-lavender leading-relaxed font-medium">{service.goal}</td>
            ))}
          </tr>
          <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
            <td className="py-3.5 px-4 md:px-5 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Chi tiết dịch vụ</td>
            {activePageData?.careServiceDetails.map(service => (
              <td key={service.id} className="py-3.5 px-4 md:px-5 border-r border-surface-lavender leading-relaxed text-plum-deep">
                <ul className="list-disc ml-4 space-y-1.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-3.5 px-4 md:px-5 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">{tr("Chất lượng & Bảo mật", "Quality & Security")}</td>
            <td className="font-medium text-plum-deep text-center p-0" colSpan="4">
              <div className="grid grid-cols-4 gap-0 w-full h-full">
                <div className="py-3.5 px-4 md:px-5 border-r border-surface-lavender text-left leading-relaxed">{tr("Thông tin nhân viên minh bạch, theo dõi qua app & bảo mật", "Transparent staff profiles, tracked via app & secure")}</div>
                <div className="py-3.5 px-4 md:px-5 border-r border-surface-lavender text-left leading-relaxed">{tr("Thông tin nhân viên minh bạch, theo dõi qua app & bảo mật", "Transparent staff profiles, tracked via app & secure")}</div>
                <div className="py-3.5 px-4 md:px-5 border-r border-surface-lavender text-left leading-relaxed">{tr("Thông tin nhân viên minh bạch, theo dõi qua app & bảo mật", "Transparent staff profiles, tracked via app & secure")}</div>
                <div className="py-3.5 px-4 md:px-5 text-left leading-relaxed">{tr("Thông tin nhân viên minh bạch, theo dõi qua app & bảo mật", "Transparent staff profiles, tracked via app & secure")}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

{/*  Mobile Card View for Service Comparison (Visible only on mobile)  */}
<div className="md:hidden space-y-6 reveal delay-200 mt-6">
{activePageData?.careServiceDetails.map(service => (
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
         <p className="text-[12px] font-medium text-plum-deep leading-relaxed">{tr("Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin.", "Transparent staff profiles, tracked via app & secure information.")}</p>
       </div>
    </div>
  </div>
</div>
))}
</div>
</div>
</section>

{/*  6. Pricing Packages (Gói Chăm sóc Linh hoạt)  */}
<section className="bg-plum-deep py-8 md:py-12 text-white scroll-mt-20" id="goi-cham-soc-linh-hoat">
  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
    <div className="text-center mb-6 reveal">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">{tr("Gói Chăm sóc Linh hoạt", "Flexible Care Packages")}</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-5 lg:gap-8 items-stretch">
      {/*  Block 1: Gói Trợ lý Sức khỏe  */}
      <div className="flex flex-col justify-between reveal">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 bg-earth-orange-bright rounded-full flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-white text-lg">health_and_safety</span>
          </div>
          <h3 className="text-lg font-bold text-white">{tr("Gói Trợ lý Sức khỏe", "Health Assistant Packages")}</h3>
        </div>

        {/* Sleek Tier Cards */}
        <div className="flex flex-col gap-2.5 mb-3">
          {activePageData?.healthMonitorPackages?.map(pkg => (
            <div key={pkg.id} className={`${pkg.highlight ? 'bg-[#F3E8FF] text-plum-deep border-purple-300 shadow-lg' : 'bg-white text-on-surface border-surface-lavender shadow-md'} p-3 sm:p-4 rounded-xl border relative cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl`}>
              {pkg.tag && (
                <div className="absolute -top-2.5 right-3 bg-earth-orange-bright text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase shadow-sm">
                  {pkg.tag}
                </div>
              )}
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold whitespace-nowrap text-plum-deep">{pkg.name}</h4>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border whitespace-nowrap ${pkg.highlight ? 'bg-earth-orange-bright text-white border-earth-orange-bright' : 'bg-earth-orange-bright/10 text-earth-orange-dark border-earth-orange-bright/30'}`}>
                    {pkg.frequency}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-base sm:text-lg font-bold text-plum-deep">{pkg.price}</span>
                  <span className="text-xs opacity-80 text-plum-deep"> {tr("đ/tháng", "VND / month")}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                {pkg.suitability ? (
                  <p className="text-xs leading-tight italic font-semibold text-earth-orange-dark">
                    * {pkg.suitability}
                  </p>
                ) : <div />}
                {pkg.dailyPrice && (
                  <div className="flex items-center gap-1 shrink-0 animate-pulse bg-red-50 border border-red-200/80 px-2 py-0.5 rounded-md shadow-xs">
                    <span className="material-symbols-outlined text-xs text-red-600 font-bold">auto_awesome</span>
                    <span className="text-xs font-extrabold text-red-600 tracking-tight">{pkg.dailyPrice}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Unified Activity List */}
        <div className="bg-[#F3E8FF] text-plum-deep rounded-xl border border-purple-300 p-4 flex-grow shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
          <span className="text-xs sm:text-sm font-bold text-earth-orange-dark uppercase tracking-wider block mb-2">
            {tr("Các hoạt động bao gồm trong gói:", "Activities included in package:")}
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm text-plum-deep">
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-earth-orange-bright text-[16px] shrink-0 mt-0.5">check_circle</span>
              <span>{tr("Thăm nhà & Kiểm tra chỉ số sinh tồn: Huyết áp, nhịp tim, nhiệt độ, SpO2 (Riêng gói Yêu Thương bổ sung kiểm tra Đường huyết).", "Home Visit & Vital Check: BP, heart rate, temp, SpO2 (Devotion Package includes Blood Sugar check).")}</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-earth-orange-bright text-[16px] shrink-0 mt-0.5">check_circle</span>
              <span>{tr("Bài tập thể chất & trí não: Theo đúng chuẩn Senior Fitness (Mỹ) & Active Ageing (Singapore).", "Physical & Brain Exercise: Adopting US Senior Fitness & Singapore Active Ageing standards.")}</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-earth-orange-bright text-[16px] shrink-0 mt-0.5">check_circle</span>
              <span>{tr("Tâm sự & trải nghiệm công nghệ mới cùng ông bà.", "Companionship & new technology experiences with seniors.")}</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-earth-orange-bright text-[16px] shrink-0 mt-0.5">check_circle</span>
              <span>{tr("Nhắn tin nhắc nhở uống thuốc mỗi ngày.", "Daily medication reminders.")}</span>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-earth-orange-bright text-[16px] shrink-0 mt-0.5">check_circle</span>
              <span>{tr("Báo cáo & gửi thông tin cập nhật cho gia đình.", "Reports & updates to family.")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/*  Block 2: Gói Dịch vụ Y tế  */}
      <div className="flex flex-col reveal delay-100">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 bg-earth-orange-bright rounded-full flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-white text-lg">medical_services</span>
          </div>
          <h3 className="text-lg font-bold text-white">{tr("Gói Dịch vụ Y tế", "Medical Care Packages")}</h3>
        </div>

        <div className="bg-white/10 rounded-2xl border border-white/15 p-4 sm:p-5 flex flex-col justify-between flex-grow shadow-md">
          <p className="text-xs sm:text-sm text-white/90 mb-3 font-medium">{tr("Bao gồm các dịch vụ chuyên sâu hỗ trợ sức khỏe toàn diện:", "Includes specialized healthcare services:")}</p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {activePageData?.medicalPackages.map(medPkg => (
              <div key={medPkg.id} className="bg-white p-3 rounded-xl text-center border border-white/20 shadow-sm flex flex-col items-center justify-center h-20 sm:h-22 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]">
                <span className="material-symbols-outlined text-primary text-xl mb-1">{medPkg.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-plum-deep leading-tight">{medPkg.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-1">
            <p className="text-xs italic opacity-80 mb-3 text-center">{tr("Chi tiết giá vui lòng tham khảo Bảng giá dịch vụ chi tiết bên dưới.", "For detailed pricing, please refer to the Service Pricing section below.")}</p>
            <a 
              href="#bang-gia-chi-tiet"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('bang-gia-chi-tiet');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full py-2.5 rounded-full bg-earth-orange-bright text-white text-xs sm:text-sm font-bold hover:bg-earth-orange-dark transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer text-center block"
            >
              {tr("Xem bảng giá chi tiết", "View Detailed Pricing")} <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  7. Detailed Price Table Section (Custom Excel Pricing Data)  */}
<section className="py-8 md:py-12 bg-surface-mist scroll-mt-24" id="bang-gia-chi-tiet">
  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
    <div className="flex flex-col items-center mb-6 text-center reveal">
      <h2 className="font-bold text-plum-deep uppercase tracking-wide text-lg sm:text-xl md:text-2xl">{tr("BẢNG GIÁ CHI TIẾT GÓI DỊCH VỤ Y TẾ", "DETAILED MEDICAL SERVICE PRICING")}</h2>
      <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mt-1.5 font-medium">{tr("Bảng giá công khai, minh bạch dành cho khách hàng mới và thành viên ANTCARE", "Transparent pricing for new clients and ANTCARE members")}</p>
    </div>

    <div className="relative overflow-hidden rounded-2xl border border-surface-lavender shadow-xl bg-white reveal delay-100">
      <div className="hidden sm:flex justify-end px-6 py-2.5 bg-surface-container-low border-b border-surface-lavender/60">
        <span className="text-xs sm:text-sm text-on-surface-variant font-medium italic opacity-80">{tr("Đơn vị tính: VNĐ", "Currency: VND")}</span>
      </div>

      {/* Desktop HTML Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[960px]">
          <thead>
            <tr className="bg-plum-deep text-white text-sm md:text-base">
              <th className="py-2.5 px-3.5 md:py-3 md:px-4 font-bold border-r border-white/10 text-center w-[22%] sticky-col bg-plum-deep">{tr("Nhóm Dịch Vụ", "Service Group")}</th>
              <th className="py-2.5 px-3.5 md:py-3 md:px-4 font-bold border-r border-white/10 text-center w-[26%]">{tr("Tên Dịch Vụ", "Service Name")}</th>
              <th className="py-2.5 px-3.5 md:py-3 md:px-4 font-bold border-r border-white/10 text-center w-[16%]">{tr("Ghi chú", "Notes")}</th>
              <th className="py-2.5 px-3.5 md:py-3 md:px-4 font-bold border-r border-white/10 text-center w-[18%] whitespace-nowrap">{tr("Giá Khách Mới", "New Client Price")}</th>
              <th className="py-2.5 px-3.5 md:py-3 md:px-4 font-bold text-center w-[18%] whitespace-nowrap bg-earth-orange-bright/90">{tr("Giá Thành Viên", "Member Price")}</th>
            </tr>
          </thead>
          <tbody className="text-on-surface text-xs sm:text-sm md:text-[13.5px]">
            {/*  Group 1: {tr("Gói An Tâm Nhà Cửa", "Peace of Mind Home Care")}  */}
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td rowSpan={3} className="py-2 px-3.5 md:py-2.5 md:px-4 font-bold text-plum-deep text-center bg-surface-container-low border-r border-b border-surface-lavender align-middle text-sm md:text-base">
                {tr("Gói An Tâm Nhà Cửa", "Peace of Mind Home Care")}
              </td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Gói lẻ", "Single Session")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("4 tiếng/ ca", "4 hours / session")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right font-medium">540.000</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">490.000</td>
            </tr>
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Gói tháng", "Monthly Package")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("4 ca/ tháng", "4 sessions / month")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right text-on-surface-variant/40">—</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">1.960.000</td>
            </tr>
            <tr className="border-b-2 border-surface-lavender/80 hover:bg-surface-mist/50 transition-colors">
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Trọn gói chăm sóc", "Full Care Bundle")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("4 ca nhà cửa + 4 ca Sức khỏe", "4 Home sessions + 4 Health sessions")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right text-on-surface-variant/40">—</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">3.750.000</td>
            </tr>

            {/*  Group 2: {tr("Gói Đồng Hành Khám Bệnh", "Hospital Companionship Package")}  */}
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td rowSpan={4} className="py-2 px-3.5 md:py-2.5 md:px-4 font-bold text-plum-deep text-center bg-surface-container-low border-r border-b border-surface-lavender align-middle text-sm md:text-base">
                {tr("Gói Đồng Hành Khám Bệnh", "Hospital Companionship Package")}
              </td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Khám bệnh (≤ 4 giờ)", "Medical Checkup (≤ 4 hrs)")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("4 giờ", "4 hours")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right font-medium">490.000</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">490.000</td>
            </tr>
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Khám bệnh (≤ 6 giờ)", "Medical Checkup (≤ 6 hrs)")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("6 giờ", "6 hours")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right font-medium">690.000</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">600.000</td>
            </tr>
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Khám bệnh (≤ 8 giờ)", "Medical Checkup (≤ 8 hrs)")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("8 giờ", "8 hours")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right font-medium">790.000</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">690.000</td>
            </tr>
            <tr className="border-b-2 border-surface-lavender/80 hover:bg-surface-mist/50 transition-colors">
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Vượt giờ", "Overtime")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("Mỗi giờ", "Per hour")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-right font-medium">100.000</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 text-right font-bold text-earth-orange-bright bg-earth-orange-bright/5">100.000</td>
            </tr>

            {/*  Group 3: {tr("Dịch vụ Khác", "Other Services")}  */}
            <tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
              <td rowSpan={2} className="py-2 px-3.5 md:py-2.5 md:px-4 font-bold text-plum-deep text-center bg-surface-container-low border-r border-surface-lavender align-middle text-sm md:text-base">
                {tr("Dịch vụ Khác", "Other Services")}
              </td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Chăm sóc người ốm tại nhà/ bệnh viện", "In-home / Hospital sick care")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant text-center text-on-surface-variant/40">—</td>
              <td colSpan={2} className="py-1.5 px-3.5 md:py-2 md:px-4 text-center font-bold text-earth-orange-bright bg-earth-orange-bright/5 text-sm md:text-base">
                {tr("từ 650.000 đ/ngày", "from 650,000 VND / day")}
              </td>
            </tr>
            <tr className="hover:bg-surface-mist/50 transition-colors">
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender font-semibold text-plum-deep">{tr("Tập phục hồi chức năng", "Rehabilitation therapy")}</td>
              <td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant text-center text-on-surface-variant/40">—</td>
              <td colSpan={2} className="py-1.5 px-3.5 md:py-2 md:px-4 text-center font-bold text-earth-orange-bright bg-earth-orange-bright/5 text-sm md:text-base">
                {tr("từ 700.000 đ/ca", "from 700,000 VND / session")}
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
            <h3 className="font-bold text-plum-deep text-sm">{tr("Gói An Tâm Nhà Cửa", "Peace of Mind Home Care")}</h3>
          </div>
          <div className="p-3 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Gói lẻ", "Single Session")}</span>
                <span className="text-[11px] text-on-surface-variant">{tr("4 tiếng/ ca", "4 hours / session")}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-on-surface-variant line-through block">540.000đ</span>
                <span className="font-bold text-earth-orange-bright">490.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Gói tháng", "Monthly Package")}</span>
                <span className="text-[11px] text-on-surface-variant">{tr("4 ca/ tháng", "4 sessions / month")}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-earth-orange-bright">1.960.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Trọn gói chăm sóc", "Full Care Bundle")}</span>
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
            <h3 className="font-bold text-plum-deep text-sm">{tr("Gói Đồng Hành Khám Bệnh", "Hospital Companionship Package")}</h3>
          </div>
          <div className="p-3 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Khám bệnh (≤ 4 giờ)", "Medical Checkup (≤ 4 hrs)")}</span>
                <span className="text-[11px] text-on-surface-variant">{tr("4 giờ", "4 hours")}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-earth-orange-bright">490.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Khám bệnh (≤ 6 giờ)", "Medical Checkup (≤ 6 hrs)")}</span>
                <span className="text-[11px] text-on-surface-variant">{tr("6 giờ", "6 hours")}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-on-surface-variant line-through block">690.000đ</span>
                <span className="font-bold text-earth-orange-bright">600.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Khám bệnh (≤ 8 giờ)", "Medical Checkup (≤ 8 hrs)")}</span>
                <span className="text-[11px] text-on-surface-variant">{tr("8 giờ", "8 hours")}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-on-surface-variant line-through block">790.000đ</span>
                <span className="font-bold text-earth-orange-bright">690.000đ</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-plum-deep block">{tr("Vượt giờ", "Overtime")}</span>
                <span className="text-[11px] text-on-surface-variant">{tr("Mỗi giờ", "Per hour")}</span>
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
            <h3 className="font-bold text-plum-deep text-sm">{tr("Dịch vụ Khác", "Other Services")}</h3>
          </div>
          <div className="p-3 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-surface-lavender/50">
              <span className="font-bold text-plum-deep">{tr("Chăm sóc người ốm tại nhà/ bệnh viện", "In-home / Hospital sick care")}</span>
              <span className="font-bold text-earth-orange-bright">{tr("từ 650.000đ/ngày", "from 650,000 VND / day")}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-plum-deep">{tr("Tập phục hồi chức năng", "Rehabilitation therapy")}</span>
              <span className="font-bold text-earth-orange-bright">{tr("từ 700.000đ/ca", "from 700,000 VND / session")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="mt-4 text-xs text-on-surface-variant italic text-center">{tr("* Lưu ý: Trường hợp có sử dụng nhân viên biết tiếng Anh tính thêm phí theo thỏa thuận", "* Note: Extra fee applies if bilingual English staff is requested.")}</p>
  </div>
</section>
{/*  Connect Sections ({tr("Dành cho khách hàng", "For Customers")})  */}
<section className="py-8 md:py-12 bg-plum-deep" id="lien-he-gia-dinh">
<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
<div className="bg-white rounded-3xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
<div className="md:w-1/2 space-y-5">
<h3 className="text-primary font-bold text-lg md:text-2xl mb-1">{tr("Kết nối cùng chúng tôi", "Connect With Us")} <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h3>
<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 bg-earth-orange-bright text-white"><span className="material-symbols-outlined text-[16px]">person</span> {tr("Dành cho khách hàng", "For Customers")}</div>
<h2 className="font-bold text-plum-deep leading-tight text-xl md:text-2xl lg:text-3xl">{tr("ANT - Kiến chăm tổ luôn sẵn sàng đồng hành cùng để giữ trọn yêu thương thay bạn", "ANT - Nest Care is always ready to accompany you to preserve love on your behalf")}</h2>
<p className="text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">{tr("Hãy chia sẻ cùng ANT - Kiến chăm tổ bạn nhé, bạn muốn gọi điện thoại ngay qua hotline 0969 032 360 hay để lại thông tin liên hệ.", "Please share with ANTCARE, feel free to call our hotline 0969 032 360 directly or leave your contact details below.")}</p>
<div className="space-y-3 pt-2">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-earth-orange-bright/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-earth-orange-bright text-lg">schedule</span></div>
<p className="text-xs sm:text-sm md:text-base font-medium text-plum-deep">{tr("Chúng tôi sẽ liên hệ lại ngay trong 4 tiếng.", "We will contact you within 4 hours.")}</p>
</div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-earth-orange-bright/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-earth-orange-bright text-lg">lock</span></div>
<p className="text-xs sm:text-sm md:text-base font-medium text-plum-deep">{tr("Thông tin sẽ được bảo mật theo chính sách cam kết của", "Information is secured according to the privacy policy of")} <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
</div>
</div>
</div>
<div className="md:w-1/2 w-full bg-surface-mist p-6 sm:p-8 rounded-2xl border border-surface-lavender">
<form onSubmit={handleConsultSubmit} className="space-y-4">
<div>
<label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1.5">{tr("Họ và tên", "Full Name")}</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">person</span>
<input 
  className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" 
  placeholder={tr("Nhập họ và tên của bạn", "Enter your full name")} 
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
<label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1.5">{tr("Số điện thoại", "Phone Number")}</label>
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
<label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1.5">{tr("Người cần hỗ trợ đang sinh sống tại", "Senior location / address")}</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">location_on</span>
<input 
  className="w-full bg-white border border-surface-lavender rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-primary transition-all text-xs sm:text-sm text-plum-deep" 
  placeholder={tr("Nhập địa chỉ hoặc khu vực", "Enter address or city/district")} 
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
  <div className="bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-semibold p-3 rounded-xl flex items-center gap-2 animate-pulse shadow-sm">
    <span className="material-symbols-outlined text-sm shrink-0">error</span>
    <span>{consultError}</span>
  </div>
)}

{consultSuccess && (
  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold p-3 rounded-xl flex items-center gap-2 shadow-sm">
    <span className="material-symbols-outlined text-sm shrink-0 text-emerald-600">check_circle</span>
    <span>{tr("Cảm ơn bạn! ANTCARE đã ghi nhận và sẽ liên hệ lại trong 4 tiếng.", "Thank you! ANTCARE has received your request and will contact you within 4 hours.")}</span>
  </div>
)}

<button className="bg-earth-orange-bright text-white py-3 px-8 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md w-full max-w-[240px] md:max-w-none md:w-auto mx-auto block cursor-pointer" type="submit">{t("hero.btnConsult")}</button>
</form>
</div>
</div>
</div>
</section>

{/*  Our Story Section  */}
<section className="relative scroll-mt-24" id="cau-chuyen-cua-chung-toi">
{/*  Story Hero Section  */}
<div className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center py-10 sm:py-14 overflow-hidden bg-[#DCCEFB]">
<div className="absolute inset-0 z-0 flex justify-end">
<img className="w-auto h-full object-contain object-right" src="/images/story-hero.jpg" alt={tr("Tâm nguyện từ trái tim người sáng lập", "A Wish From The Founder's Heart")} />
</div>
<div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full">
<div className="max-w-xl">
<span className="inline-block px-3.5 py-1 bg-earth-orange-bright text-white font-bold text-xs sm:text-sm mb-3.5 shadow-md rounded-full">{tr("Câu chuyện của chúng tôi", "Our Story")}</span>
<h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-snug font-bold text-plum-light drop-shadow-sm">{tr("Tâm nguyện từ trái tim", "A Wish From The Heart")}</h1>
<p className="text-xs sm:text-sm md:text-base text-plum-deep/90 max-w-lg leading-relaxed font-semibold mb-3">
    {tr("Sứ mệnh kết nối tình yêu của con cái và sức khỏe của cha mẹ, mang đến sự an tâm tuyệt đối khi khoảng cách địa lý không còn là rào cản.", "Our mission connects children's love with parents' health, bringing complete peace of mind across geographic distance.")}
</p>
<p className="text-xs sm:text-sm md:text-[15px] text-plum-deep/95 max-w-xl leading-relaxed font-medium bg-white/40 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-white/60 shadow-2xs mt-3">
  {tr("ANTCARE là dịch vụ chăm sóc và đồng hành cùng người lớn tuổi tại nhà. Mỗi lần Kiến ghé thăm, chúng tôi theo dõi các chỉ số sức khỏe, nhắc uống thuốc, hỗ trợ sinh hoạt và cùng người lớn tuổi thực hiện các bài tập rèn luyện thể chất, trí não, trò chuyện và duy trì những hoạt động phù hợp mỗi ngày.", "ANTCARE provides home care and companionship for seniors. During every visit, we monitor health metrics, remind medication, assist daily living, and guide physical & brain exercises, conversing and maintaining suitable daily activities.")}
</p>
</div>
</div>
</div>

{/*  Story Details Section  */}
<div className="py-8 md:py-12 bg-surface-mist scroll-mt-24" id="cau-chuyen-cua-ant">
<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="relative flex justify-center md:justify-start">
<div className="w-full max-w-[460px] lg:max-w-[500px] rounded-2xl overflow-hidden shadow-md border border-surface-lavender/60 bg-white p-2.5 sm:p-3 transition-all duration-300 hover:shadow-xl">
<img alt="Tin nhắn quan tâm của con dành cho bố" className="w-full h-auto object-contain rounded-xl" src="/images/story-detail.jpg" />
</div>
</div>
<div className="space-y-4 text-on-surface-variant text-sm sm:text-base leading-relaxed font-normal">
<h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-plum-deep mb-3 leading-snug">
  {tr("Câu chuyện của ANT - Kiến chăm tổ", "Story of ANT — Caring for the Nest")}
</h2>
<p className="text-justify leading-relaxed">
  {tr("Chúng tôi thấu hiểu nỗi lòng của những người con xa nhà, luôn đau đáu về sức khỏe của cha mẹ. Những dòng tin nhắn hỏi thăm vội vã giữa giờ làm, những lo âu khi không thể trực tiếp đưa bố mẹ đi khám bệnh chính là khởi nguồn cho sứ mệnh của ANTCARE.", "We deeply understand the hearts of children living far away, always caring for their parents' health. Hastily sent text messages during work and anxieties about not escorting parents to medical checkups sparked ANTCARE's mission.")}
</p>
<p className="text-justify leading-relaxed">
  {tr("Có những lúc cha mẹ ốm đau nhưng chẳng nỡ gọi con vì sợ con lo, sợ con bận. Có những khi người con ngồi giữa văn phòng hiện đại nhưng lòng quặn thắt vì không thể tự tay đưa cha mẹ đi khám bệnh định kỳ.", "Sometimes parents fall ill but hesitate to call their children out of worry. Sometimes children sit in modern offices, aching at heart for not being able to take their parents for checkups.")}
</p>
<div className="bg-white/90 p-4 sm:p-5 rounded-2xl border-l-4 border-earth-orange-bright shadow-xs my-3">
  <p className="italic text-plum-deep font-semibold text-sm sm:text-base md:text-[16.5px] leading-relaxed">
    "{tr("Sự cô đơn của tuổi già và nỗi trăn trở của những người con xa xứ chính là nguồn cảm hứng để ANTCARE ra đời.", "Old age loneliness and concerns of children living abroad inspired the creation of ANTCARE.")}"
  </p>
</div>
<p className="text-justify text-xs sm:text-sm md:text-base opacity-95 leading-relaxed">
  {tr("Tại sao lại là ANT? Hình ảnh kiến thường gợi tới tính chất bầy đàn, luôn chăm chút về tổ. Do vậy, chúng tôi liên kết những 'bạn kiến' tận tâm thành một tổ kiến rộng lớn, để lan tỏa yêu thương và sự chăm sóc chu đáo đến từng gia đình Việt.", "Why ANT? Ants signify diligence and caring for the nest. Thus, we connect dedicated Health Assistants into a large nest to spread love and thoughtful care to every family.")}
</p>
</div>
</div>
</div>
</div>
</section>

{/*  Core Values / Operating Process Section  */}
<section className="py-8 md:py-12 bg-white relative overflow-hidden scroll-mt-24" id="quy-trinh-hoat-dong">
<div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-20"></div>
<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-8">
<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-3">
<span className="material-symbols-outlined text-[18px]">stars</span> Core Values
</div>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-plum-deep mb-2">{tr("Quy trình hoạt động của", "Operation Process of")} <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span></h2>
<p className="text-on-surface-variant text-xs sm:text-sm md:text-base">{tr("Mọi hoạt động tại ANTCARE đều được xây dựng trên nền tảng của sự chân thành và tiêu chuẩn y tế khắt khe.", "All activities at ANTCARE are built on sincerity and rigorous medical standards.")}</p>
</div>
<div className="w-full space-y-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative">
<div className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 bg-white/90 hover:bg-white rounded-2xl border border-surface-lavender/80 shadow-2xs hover:shadow-md transition-all duration-300 group min-h-[110px]">
  <span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 01", "Step 01")}</span>
  <p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Khách hàng liên hệ", "Client Contact")}</p>
</div>
<div className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 bg-white/90 hover:bg-white rounded-2xl border border-surface-lavender/80 shadow-2xs hover:shadow-md transition-all duration-300 group min-h-[110px]">
  <span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 02", "Step 02")}</span>
  <p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("ANT kết nối", "ANT Connection")}</p>
</div>
<div className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 bg-white/90 hover:bg-white rounded-2xl border border-surface-lavender/80 shadow-2xs hover:shadow-md transition-all duration-300 group min-h-[110px]">
  <span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 03", "Step 03")}</span>
  <p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Khách hàng đặt cọc dịch vụ, ANT giữ thanh toán", "Client Deposit & Payment Escrow")}</p>
</div>
<div className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 bg-earth-orange-bright/5 hover:bg-earth-orange-bright/10 rounded-2xl border border-earth-orange-bright/30 shadow-2xs hover:shadow-md transition-all duration-300 group min-h-[110px]">
  <span className="text-[11px] font-bold text-earth-orange-bright tracking-widest uppercase mb-1.5">{tr("Bước 04", "Step 04")}</span>
  <p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Kiến chăm sóc", "Health Assistant Care Visit")}</p>
</div>
<div className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 bg-white/90 hover:bg-white rounded-2xl border border-surface-lavender/80 shadow-2xs hover:shadow-md transition-all duration-300 group min-h-[110px]">
  <span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 05", "Step 05")}</span>
  <p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Khách hàng đánh giá", "Client Feedback")}</p>
</div>
<div className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 bg-white/90 hover:bg-white rounded-2xl border border-surface-lavender/80 shadow-2xs hover:shadow-md transition-all duration-300 group min-h-[110px]">
  <span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 06", "Step 06")}</span>
  <p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("ANT thanh toán cho Kiến", "Payment Settlement to Assistant")}</p>
</div>
</div>
</div>
</div>
</section>

{/*  {tr("Thông tin liên hệ", "Contact Information")} Section  */}
<section className="py-8 md:py-12 bg-surface-mist scroll-mt-24" id="thong-tin-lien-he">
<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
<div className="text-center mb-6">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-plum-deep">{tr("Thông tin liên hệ", "Contact Information")}</h2>
<div className="w-16 h-1 bg-earth-orange-bright rounded-full mx-auto mt-2"></div>
</div>
<div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-surface-lavender shadow-md">
<div className="flex flex-col gap-4 text-xs sm:text-sm md:text-base">
<div className="flex items-start gap-3.5">
<span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">corporate_fare</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">{tr("Văn phòng đại diện tại Hà Nội", "Hanoi Representative Office")}</p>
<p className="font-bold text-plum-deep">{tr("Văn phòng đại diện tại Hà Nội", "Hanoi Representative Office")}</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">call</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">{tr("Số điện thoại", "Phone Number")}</p>
<a className="font-bold text-earth-orange-bright md:hover:underline" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>{siteInfo.hotline}</a>
</div>
</div>
<div className="flex items-start gap-3.5">
<span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">mail</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">Email</p>
<a className="font-bold text-plum-deep md:hover:text-earth-orange-bright transition-colors" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
</div>
</div>
<div className="flex items-start gap-3.5">
<span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">location_on</span>
<div>
<p className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">{tr("Địa chỉ", "Address")}</p>
<p className="font-bold text-plum-deep leading-relaxed">{tr("Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội", "Rox Tower Building, 138 Ho Tung Mau, Phu Dien, Ha Noi")}</p>
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
