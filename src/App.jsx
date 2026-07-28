
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Rellax from 'rellax';
import siteInfo from './config/siteInfo.json';
import menu from './config/menu.json';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    // Reveal Animations
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

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      rellax.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-plum-deep bg-surface-mist overflow-x-hidden">
      
{/*  TopNavBar  */}
<nav className="sticky top-0 z-50 bg-surface-mist shadow-sm text-plum-deep">
<div className="max-w-container-max mx-auto px-4 md:px-gutter-desktop w-full">
{/* Single row: Logo | Nav links | Hotline + Language */}
<div className="flex items-center justify-between h-16 md:h-[68px]">
{/* Logo */}
<div className="flex-shrink-0">
<a href="#" className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
    <img alt="247care logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3huPMIwhMqL1ilgAL_VFIW3xNg7zIjm2bGRcYUHuQHBgw61lQL1bUlp1OIqwP0AssxFT1AlBpOVONs0TIUlBnTktoAWG-tqXjH_gSj2x8QDQ8aZSbceQA4zzPBH5NhQdWmgHGKOyS4drUuzli7iRX20NYX64KrJ-G7Iil0AcpQokCZ8LnC-vVtJOApgh91A8d4yD2k33Vr88v1YUll1-iwleHebsZfewszEUDXmc2TQOhqKv6airinqD-_Bakd5gjDHuiiBEvh4hm" />
</a>
</div>

{/* Desktop: Nav links (center) */}
<div className="hidden md:flex items-center gap-0.5">
  {menu.map(item => item.children ? (
    <div key={item.id} className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium">
        <span dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} /> <span className="text-[9px] group-hover:text-earth-orange-bright">▼</span>
      </button>
      <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-xl border border-surface-lavender opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
        <div className="flex flex-col py-2">
          {item.children.map(child => (
            <a key={child.id} className="px-5 py-2.5 text-sm text-plum-deep hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors" href={child.path} dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <a key={item.id} className="group flex items-center gap-1 px-3 py-2 rounded-full text-plum-deep hover:text-earth-orange-bright hover:bg-earth-orange-bright/10 transition-all text-[15px] font-medium" href={item.path} dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} />
  ))}
</div>

{/* Desktop: Hotline + Language (right) */}
<div className="hidden md:flex items-center gap-3 flex-shrink-0">
<a className="flex items-center gap-2 px-4 py-2 border border-plum-deep/20 rounded-full hover:bg-plum-deep/5 transition-colors group" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>
<span className="material-symbols-outlined text-plum-deep text-[20px] group-hover:scale-110 transition-transform">call</span>
<span className="text-[15px] font-bold text-plum-deep">{siteInfo.hotline}</span>
</a>
<div className="h-5 w-px bg-border-muted"></div>
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-muted text-sm font-medium text-plum-deep hover:border-plum-deep/30 hover:bg-plum-deep/5 transition-all">
<img src={i18n.language === 'en' ? 'https://flagcdn.com/w20/gb.png' : 'https://flagcdn.com/w20/vn.png'} srcSet={i18n.language === 'en' ? 'https://flagcdn.com/w40/gb.png 2x' : 'https://flagcdn.com/w40/vn.png 2x'} alt={i18n.language === 'en' ? 'EN' : 'VN'} className="w-5 h-auto rounded-sm border border-border-muted/30" /> {i18n.language === 'en' ? 'EN' : 'VN'} <span className="text-[9px] opacity-50">▼</span>
</button>
<div className="absolute top-full right-0 mt-1 w-36 bg-white rounded-lg shadow-xl border border-surface-lavender opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
<div className="flex flex-col py-1">
<button onClick={() => i18n.changeLanguage("vi")} className="flex items-center gap-2 px-4 py-2 text-sm text-primary font-bold hover:bg-earth-orange-bright/10 bg-earth-orange-bright/5 transition-colors text-left w-full">
<img src="https://flagcdn.com/w20/vn.png" srcSet="https://flagcdn.com/w40/vn.png 2x" alt="VN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> Tiếng Việt
</button>
<button onClick={() => i18n.changeLanguage("en")} className="flex items-center gap-2 px-4 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-earth-orange-bright/10 transition-colors text-left w-full">
<img src="https://flagcdn.com/w20/gb.png" srcSet="https://flagcdn.com/w40/gb.png 2x" alt="EN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> English
</button>
</div>
</div>
</div>
</div>

{/* Mobile: Compact hotline + hamburger */}
<div className="flex md:hidden items-center gap-2">
<a className="flex items-center gap-1.5 px-3 py-1.5 border border-plum-deep/20 rounded-full text-plum-deep text-sm font-bold" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>
<span className="material-symbols-outlined" style={{fontSize: "16px"}}>call</span> {siteInfo.hotline}
</a>
<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-plum-deep/10 transition-colors" aria-label="Mở menu">
<span className="material-symbols-outlined text-plum-deep">{isMobileMenuOpen ? "close" : "menu"}</span>
</button>
</div>
</div>

{/* Mobile Menu */}
<div className={`md:hidden border-t border-border-muted ${isMobileMenuOpen ? "block" : "hidden"}`}>
<div className="flex flex-col py-2">
  {menu.map(item => (
    <div key={item.id} className="flex flex-col">
      <a className="px-4 py-3 text-sm text-plum-deep font-medium hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors border-b border-border-muted/50" href={item.path} dangerouslySetInnerHTML={{ __html: t(item.i18nKey) }} />
      {item.children && (
        <div className="flex flex-col bg-surface-lavender/30 pl-4">
          {item.children.map(child => (
            <a key={child.id} className="px-4 py-3 text-sm text-plum-deep/80 hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-colors border-b border-border-muted/30" href={child.path} dangerouslySetInnerHTML={{ __html: t(child.i18nKey) }} />
          ))}
        </div>
      )}
    </div>
  ))}
<div className="flex items-center gap-3 px-4 py-3 border-t border-border-muted mt-1">
<button onClick={() => i18n.changeLanguage("vi")} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-earth-orange-bright transition-colors bg-earth-orange-bright/10 px-4 py-2 rounded-lg">
<img src="https://flagcdn.com/w20/vn.png" srcSet="https://flagcdn.com/w40/vn.png 2x" alt="VN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> Tiếng Việt
</button>
<button onClick={() => i18n.changeLanguage("en")} className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-plum-deep/5">
<img src="https://flagcdn.com/w20/gb.png" srcSet="https://flagcdn.com/w40/gb.png 2x" alt="EN" className="w-5 h-auto rounded-sm border border-border-muted/30" /> English
</button>
</div>
</div>
</div>
</div>
</nav>
{/*  1. Hero Section  */}
<section className="relative overflow-hidden flex items-center justify-center min-h-screen pt-12 pb-24 bg-fixed bg-center bg-cover" style={{'backgroundImage': 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDGsLdeLRFOVTn9Uw-vq3uWJvrPkh7q9-uv2ja-euUYsbwJjjTT86v3ELatj4TusydfBGUhNzNoDQA_i2AlzqewsvLuHAhny37v15XvvW-bn7Abb2BtGfImHu9gZAqe1cnMlka4YfB00fROYN8F3gx47bNqSVOU-s8lPGBbrJ_Pw6pz1R3HMC-FqESbd9w0CSKWRTjxGbrR1WYixyjk9ypqurxG-OzC3Zna0eYooJJUydzSZszJWiHFEw\')'}}>
<div className="absolute inset-0 z-0 bg-gradient-to-br from-white/95 via-surface-mist/80 to-surface-lavender/95 backdrop-blur-[4px]"></div>
<div className="max-w-container-max mx-auto px-gutter-desktop relative z-10 text-center flex flex-col items-center">
<div className="max-w-4xl mx-auto space-y-6 -mt-16">
<div className="relative inline-block animate-fade-in-up delay-100">
<div className="relative inline-block md:ml-24">
<div className="absolute -left-48 top-1/2 -translate-y-1/2 w-48 h-auto z-20 hidden lg:block">
    <div className="rellax" data-rellax-speed="1.5" data-rellax-percentage="0.5"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApw4T544FToEBVmG4WwxGIhSxFG8tTxsURGlciOwHahHmuiaHC-C73IRc2bPil2_56l4ZL4bM66ikP4UeWJvP1NCXZyEFgY3R1Es8dQWTzNO1jYKJqb1-e7gWAXIsBRyYVaHGpBPPWwaBQOlLZAvfDIhl-sGE_lyEo6LjSs9LIXikI_lGLp4vp_Yb09BDnwTwX8GL5NmIypnZtxNXFuY0MSyvg2MJWaTVEhllCJ3NHa17ZKIh9Q8DeVJviKNJuhKnSavcic9AlaMNX" alt="247care Mascot" className="w-full h-auto object-contain" /></div>
</div><h1 className="font-display-lg text-plum-deep leading-tight px-4 text-4xl relative inline-block" style={{'lineHeight': '1.1'}}><span className="absolute -left-2 top-0 text-primary-container font-serif leading-none text-3xl md:text-4xl">“</span><div className="flex flex-col items-center gap-2"><span className="block text-headline-lg font-bold text-primary-container mb-1">{t("hero.title1")}</span><div className="flex items-center gap-4"><span className="font-bold tracking-tighter text-5xl md:text-6xl text-earth-orange-bright leading-none mt-2">KIẾN</span><div className="text-left flex flex-col justify-center leading-tight text-primary-container"><span className="block text-headline-lg font-bold text-primary-container mb-1">{t("hero.title2")}</span><span className="block text-headline-lg font-bold text-primary-container">{t("hero.title3")}<span className="text-primary-container font-serif ml-1 leading-none text-3xl md:text-4xl">”</span></span></div></div></div></h1>
</div>
</div>
<p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto animate-fade-in-up delay-200 font-medium text-lg md:text-xl">{t("hero.subtitle")}</p>
<div className="flex flex-col items-center gap-4 animate-fade-in-up delay-300 pt-4">
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
<a className="bg-gradient-to-r from-earth-orange-bright to-earth-orange-dark text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-[15px] md:text-lg shadow-md md:shadow-xl shadow-earth-orange-bright/30 hover:shadow-2xl hover:shadow-earth-orange-bright/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 h-12 md:h-16 w-full max-w-[260px] md:max-w-none md:w-72 mx-auto md:mx-0" href="#lien-he-gia-dinh"><span className="material-symbols-outlined">chat</span> {t("hero.btnConsult")}</a>
<a className="bg-white text-primary border-2 border-primary/10 px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-[15px] md:text-lg shadow-md md:shadow-xl hover:shadow-2xl hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 flex flex-row items-center justify-center gap-2 md:gap-3 h-12 md:h-16 w-full max-w-[260px] md:max-w-none md:w-72 mx-auto md:mx-0 group" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}><span className="material-symbols-outlined group-hover:animate-bounce">call</span> <span className="">{siteInfo.hotline}</span></a>
</div>
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
<p className="text-body-sm text-on-surface-variant">Đội ngũ trợ lý sức khỏe chuyên nghiệp, am hiểu văn hóa, thành thạo tiếng Việt và tiếng Anh, sẵn sàng hỗ trợ cả khách hàng trong nước và người nước ngoài sinh sống tại Việt Nam.</p>
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
<p className="text-body-sm text-on-surface-variant">Chăm sóc 1-kèm-1 tận tâm suốt ngày đêm, đảm bảo an toàn và sự an tâm tuyệt đối cho cả gia đình.</p>
</div>
</div>
</div>
{/*  2. Situations Section (Dành cho những người thân yêu...)  */}
<section className="py-12 md:py-24 bg-surface-container-low relative overflow-hidden">
{/*  Parallax Background Blobs  */}
<div className="absolute top-0 left-0 w-96 h-96 bg-earth-orange-bright/10 rounded-full blur-[100px] rellax pointer-events-none" data-rellax-speed="-2"></div>
<div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-plum-deep/10 rounded-full blur-[120px] rellax pointer-events-none" data-rellax-speed="3"></div>
<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[80px] rellax pointer-events-none" data-rellax-speed="-1"></div>

<div className="max-w-container-max mx-auto px-gutter-desktop relative z-10">
<div className="text-center mb-16 reveal rellax" data-rellax-speed="0.5">
<span className="font-bold text-base md:text-2xl uppercase tracking-wider text-earth-orange-bright">Dành cho những người thân yêu của gia đình bạn</span>
<h2 className="font-bold text-plum-deep mt-4 text-2xl md:text-3xl lg:text-4xl">Có phải gia đình bạn cũng ở trong hoàn cảnh này?</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8 mb-20">
{/*  Situation 01  */}
<div className="flex flex-col p-8 rounded-3xl bg-white border border-surface-lavender shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100 group"><h3 className="text-headline-md font-bold text-plum-deep mb-4 flex items-start gap-3"><span className="w-10 h-10 shrink-0 rounded-full bg-earth-orange-bright text-white flex items-center justify-center font-bold text-lg">01</span> “Tôi muốn đưa người thân đi khám bệnh an toàn nhưng công việc quá bận rộn”</h3><div className="h-1 w-12 bg-earth-orange-bright mb-4"></div><p className="text-body-sm text-on-surface-variant">Dịch vụ hộ tống y tế chuyên nghiệp giúp bạn an tâm làm việc và người thân được chăm sóc chu đáo.</p></div>
{/*  Situation 02  */}
<div className="flex flex-col p-8 rounded-3xl bg-white border border-surface-lavender shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100 group"><h3 className="text-headline-md font-bold text-plum-deep mb-4 flex items-start gap-3"><span className="w-10 h-10 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">02</span> “Tôi muốn bố mẹ mình có người chăm sóc sức khỏe, tập luyện tại nhà mỗi ngày?”</h3><div className="h-1 w-12 bg-earth-orange-bright mb-4"></div><p className="text-body-sm text-on-surface-variant">Chương trình chăm sóc sức khỏe chủ động giúp người cao tuổi rèn luyện thể chất, trí não và tận hưởng cuộc sống.</p></div>
{/*  Situation 03  */}
<div className="flex flex-col p-8 rounded-3xl bg-white border border-surface-lavender shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100 group"><h3 className="text-headline-md font-bold text-plum-deep mb-4 flex items-start gap-3"><span className="w-10 h-10 shrink-0 rounded-full bg-earth-orange-bright text-white flex items-center justify-center font-bold text-lg">03</span> “Tôi muốn người thân của mình có người bầu bạn và dọn dẹp nhà cửa gọn gàng?”</h3><div className="h-1 w-12 bg-earth-orange-bright mb-4"></div><p className="text-body-sm text-on-surface-variant">Dịch vụ thăm nom tại nhà giúp hỗ trợ việc gia đình, chuẩn bị bữa ăn và trò chuyện cùng người cao tuổi.</p></div>
</div>
<div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-10 md:pt-16 border-t border-plum-deep/10">
{/*  Expert 1  */}
<div className="flex items-start gap-6">
<div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
<img alt="BS. Nguyễn Minh Tú" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7dy6eTQV4-Y52YwCi93PxlfXTiqQUOOaHavw7SqqmdKKd2l3VV8K-W-7fX4EYUTob5AU2hW5khTcgVtr64Z5XYFHaFTGbYInoapacFK3LAjG1vIKvqjYse_BjGGVZiUFQ1yeoaILrnr4Gci1vMx2AJRjcoiCuBYLSpnFKzZRvUFAELKXAhw3kDwY_uBGdUFsAmNo5KDeyKWC9zfaqH1LgGklteTMe5_mb4JhBIJMtRi5faKpfC9bENwogoi2ZCM1I11YPPD3BHWcg" />
</div>
<div className="space-y-3">
<blockquote className="text-xl font-bold text-plum-deep italic leading-snug rellax" data-rellax-speed="-0.3">“Trong các giai đoạn phát triển của cuộc đời, tuổi già là thời điểm con người dễ trải qua cảm giác cô đơn sâu sắc nhất, là mối nguy âm thầm đối với sức khỏe tâm thần”</blockquote>
<div>
<p className="text-body-sm font-bold text-plum-deep">PGS.TS Nguyễn Văn Tuấn</p>
<p className="text-[14px] text-on-surface-variant">Viện trưởng Viện Sức khỏe Tâm thần (Bệnh viện Bạch Mai)</p>
</div>
</div>
</div>
{/*  Expert 2  */}
<div className="flex items-start gap-6">
<div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
<img alt="Điều dưỡng Trần Thị Lan" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDST-gV7UKds38ohCGqBpKbmXGlQqenc3z_IpxcFw0ArV8l2FUYu-w7XYR9hDm-xmIgpFTLE7V4RBZaiJrXZsDOgKHcOjDG4cTSiKvjjOxC30SE5rrUFSHzc-38te6Lgnb046mmtLfyfsDrxwJUgObMxCkqHy4-QjCMWUaFD13YBu22sJzKG0WUYA41vDCBLtHtR8O9twewVCER0A1IFnQqGjdAT9s8BOUM7UlPq65ytPKy9KShHYZj54kVwNJP5WknLXTn8yejzSP9" />
</div>
<div className="space-y-3">
<blockquote className="text-xl font-bold text-plum-deep italic leading-snug rellax" data-rellax-speed="-0.3">“Rèn luyện trí não mỗi ngày là chìa khóa vàng để ngăn ngừa suy giảm trí nhớ.”</blockquote>
<div>
<p className="text-body-sm font-bold text-plum-deep">Điều dưỡng Trần Thị Lan</p>
<p className="text-[14px] text-on-surface-variant">Chuyên viên Chăm sóc Chủ động</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-3 px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm text-label-md" href="#">
Khám phá thêm các chia sẻ y khoa <span className="material-symbols-outlined">menu_book</span>
</a>
</div>
</div>
</section>
{/*  3. Expert Section (Góc nhìn Chuyên gia)  */}
{/*  4. Services Grid Section (Giải pháp chăm sóc sức khỏe toàn diện)  */}
<section className="py-12 md:py-24">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="max-w-2xl reveal">
<h2 className="font-bold text-plum-deep text-2xl md:text-3xl lg:text-4xl">Giải pháp Chăm sóc Sức khỏe Toàn diện</h2><p className="text-body-sm italic text-on-surface-variant mt-2">* Dịch vụ hỗ trợ song ngữ Việt Anh - cho cả người Việt Nam, nước ngoài</p>
<p className="text-body-lg text-on-surface-variant mt-2">Các kế hoạch chăm sóc cá nhân hóa được thiết kế cho nhu cầu riêng biệt của mỗi gia đình.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 group mb-1 hover:bg-earth-orange-bright/10 hover:text-earth-orange-bright transition-all duration-500 px-4 py-2 rounded-full">
                    Xem tất cả dịch vụ
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/*  Service 0: Trợ lý theo dõi sức khỏe  */}
<div className="group cursor-pointer bg-white border border-surface-lavender rounded-[2.5rem] p-6 flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full reveal">
<div className="aspect-[16/11] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Trợ lý theo dõi sức khỏe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNUMRrhRjYTCz4EWq1ZUUZwD4idg1QI1pat0pt2ts9eAPww8EPOzKptw31BWMYTUzUF02eBf-IjNZ-Wn6ATn2A_4_nCOJ6P5_bwEsTX3kxnci1rMpqJdPTl2vCYbLZ5HoxMx0_7UKS9xhkdwSCK__2cXTlPMX4l01EyVNm0nWDlr97JqxAfn_o5FZlLvzTaD4jR5iGXAhC5lTC07Ty2EUoa4fu8WF272iY8p1Xiq2gAMRtr8kHm5XQMQ" />
<div className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-lg">
<span className="material-symbols-outlined text-earth-orange-bright text-2xl">monitor_heart</span>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-headline-md font-bold text-plum-deep mb-2">Trợ lý theo dõi sức khỏe</h3>

<p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">Đội ngũ chuyên môn hỗ trợ theo dõi các chỉ số sức khỏe, nhắc lịch thuốc và tư vấn dinh dưỡng hàng ngày.</p>
<ul className="space-y-1.5 mb-6 flex-grow">
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Nhắc lịch uống thuốc và đo chỉ số sức khỏe</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Theo dõi sát sao tình trạng sức khỏe hàng ngày</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Báo cáo định kỳ cho người thân qua ứng dụng</li>
</ul>
<div className="mt-auto text-center">
<button className="py-2.5 px-8 rounded-full border-2 border-earth-orange-bright text-earth-orange-bright font-bold hover:bg-earth-orange-bright hover:text-white transition-all text-label-md w-fit">Bảng giá dịch vụ</button>
</div>
</div>
</div>
{/*  Service 1: Đưa đón khám bệnh  */}
<div className="group cursor-pointer bg-white border border-surface-lavender rounded-[2.5rem] p-6 flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full reveal">
<div className="aspect-[16/11] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Đưa đón khám bệnh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk1zdBfzXOR5tbAybU011146MEhPy2bvwYiMJtqi4Nu6xM_ZzPwFQQnPKyg4wADaC1Ku6sVqXnVty7Y4UDrnkUvkLL0PdSAUQAcbWIgtEV-amxdeMqGUj4aSP2MX9IjtBN00dGq6VNT8Q7P6Q8kDYNtalPmGjZa40DVzbAoP-rG4XIs3WV1EWQUH50clGBwKBJ7cy_ES9ttCskmPu0FstTr0rNLjEcZi1BWbKrAUUAhQ_fq6j82Dly-Q" />
<div className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-lg">
<span className="material-symbols-outlined text-earth-orange-bright text-2xl">medical_services</span>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-headline-md font-bold text-plum-deep mb-2">Đưa đón khám bệnh</h3>
<p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">Đội ngũ chuyên nghiệp hỗ trợ đưa đón và đồng hành cùng người già và trẻ em tới các cơ sở y tế an toàn, chu đáo.</p>
<ul className="space-y-1.5 mb-6 flex-grow">
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Đặt lịch hẹn khám</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span>Đồng hành suốt cả quá trình khám</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span>Dịch vụ chăm người ốm tại viện</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Báo cáo kết quả khám chữa bệnh cho gia đình</li>
</ul>
<div className="mt-auto text-center">
<button className="py-2.5 px-8 rounded-full border-2 border-earth-orange-bright text-earth-orange-bright font-bold hover:bg-earth-orange-bright hover:text-white transition-all text-label-md w-fit">Bảng giá dịch vụ</button>
</div>
</div>
</div>
{/*  Service 2: Giáo dục lão hóa chủ động  */}
<div className="group cursor-pointer bg-white border border-surface-lavender rounded-[2.5rem] p-6 flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full reveal">
<div className="aspect-[16/11] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Giáo dục lão hóa chủ động" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRZ_AQP2VC54qeJuIdTXUSeboHz78b_DXHzD7-YPNb3uCPRgB9XwVYAWNAISjRoIHkIMtd-7Gp_ACZyD1-K0Drbg3Z-XxU_vLTifV1dOEEYwmOUr5Hj0QZgZJH5vflYlaDzjjH1B6BGMMMR4HNElcJcLZwghqE2aQ-h--wPUjajwldwmQ7YkbGayq_IqGZwqxWQe1jjv25dtTaDU9muEXTm58mPo0x7TjBD3lYm4MKdTjylOwOrqkpgw" />
<div className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-lg">
<span className="material-symbols-outlined text-earth-orange-bright text-2xl">psychology</span>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-headline-md font-bold text-plum-deep mb-2">Giáo dục lão hóa chủ động</h3>
<p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">Chương trình giúp người cao tuổi rèn luyện trí não, với các bài tập cải thiện thể chất và tinh thần để tận hưởng cuộc sống.</p>
<ul className="space-y-1.5 mb-6 flex-grow">
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Bài tập tại nhà kết hợp hoạt động ngoài trời</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Kiểm tra sức khỏe trước mỗi buổi học</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> bài tập cải thiện thể chất và tinh thần</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Kết hợp các kiến thức về công nghệ số</li>
</ul>
<div className="mt-auto text-center">
<button className="py-2.5 px-8 rounded-full border-2 border-earth-orange-bright text-earth-orange-bright font-bold hover:bg-earth-orange-bright hover:text-white transition-all text-label-md w-fit">Bảng giá dịch vụ</button>
</div>
</div>
</div>
{/*  Service 3: Giúp việc tại nhà  */}
<div className="group cursor-pointer bg-white border border-surface-lavender rounded-[2.5rem] p-6 flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full reveal">
<div className="aspect-[16/11] rounded-2xl overflow-hidden mb-4 relative">
<img alt="Thăm nom tại nhà" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" />
<div className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-lg">
<span className="material-symbols-outlined text-earth-orange-bright text-2xl">home_repair_service</span>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-headline-md font-bold text-plum-deep mb-2">Giúp việc tại nhà</h3>
<p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">Hỗ trợ các công việc gia đình, Hỗ trợ sinh hoạt và trò chuyện chia sẻ cùng người cao tuổi mỗi ngày.</p>
<ul className="space-y-1.5 mb-6 flex-grow">
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Dịch vụ theo tiếng hàng ngày hoặc định kỳ</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Chăm sóc nội trợ tại nhà</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Kiểm tra sức khỏe mỗi ngày thăm nom</li>
<li className="flex items-start gap-2 text-body-sm leading-tight text-on-surface-variant"><span className="material-symbols-outlined text-earth-orange-bright text-[18px] shrink-0">check_circle</span> Hỗ trợ sinh hoạt và trò chuyện chia sẻ cùng</li>
</ul>
<div className="mt-auto text-center">
<button className="py-2.5 px-8 rounded-full border-2 border-earth-orange-bright text-earth-orange-bright font-bold hover:bg-earth-orange-bright hover:text-white transition-all text-label-md w-fit">Bảng giá dịch vụ</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  5. Service Comparison Table (Chi tiết dịch vụ chăm sóc)  */}
<section className="py-12 md:py-24 bg-surface-mist">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="text-center mb-16 reveal">
<h2 className="font-bold text-plum-deep text-2xl md:text-3xl lg:text-4xl">Chi tiết Dịch vụ Chăm sóc</h2>
<p className="text-body-lg text-on-surface-variant mt-2">So sánh chi tiết các giải pháp để tìm ra lựa chọn tối ưu cho người thân của bạn</p>
</div>
<div className="hidden md:block overflow-x-auto rounded-[2rem] border border-surface-lavender shadow-2xl bg-white reveal delay-200">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="bg-primary text-white">
<th className="p-4 md:p-6 font-bold text-label-lg border-r border-white/10 w-[15%] text-center sticky-col bg-primary">Nội dung</th>
<th className="p-4 md:p-6 font-bold text-label-lg border-r border-white/10 w-[21%] text-center">Trợ lý theo dõi sức khỏe</th>
<th className="p-4 md:p-6 font-bold text-label-lg border-r border-white/10 w-[21%] text-center">Đưa đón khám bệnh</th>
<th className="p-4 md:p-6 font-bold text-label-lg border-r border-white/10 w-[21%] text-center">Giáo dục lão hóa</th>
<th className="p-4 md:p-6 font-bold text-label-lg w-[21%] text-center">Giúp việc tại nhà</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="py-2 px-3 md:py-3 md:px-6 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Đối tượng</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm text-plum-deep">Người cao tuổi cần theo dõi sức khỏe định kỳ, người có bệnh nền.</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm">Người cao tuổi, trẻ em cần đi khám chuyên khoa/ tái khám/ khám định kỳ tại bệnh viện, trung tâm y tế</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm">Người cao tuổi muốn duy trì sự minh mẫn &amp; vận động</td>
<td className="py-2 px-3 md:py-3 md:px-6 text-[13px] md:text-body-sm">Người già neo đơn hoặc cần hỗ trợ sinh hoạt hàng ngày</td>
</tr>
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="py-2 px-3 md:py-3 md:px-6 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Mục tiêu</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm">Kiểm soát tốt các chỉ số sức khỏe, duy trì thói quen uống thuốc đúng giờ.</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm">An toàn y tế, giảm bớt gánh nặng thời gian cho người thân</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm">Phòng ngừa sa sút trí tuệ, cải thiện thể lực &amp; tinh thần</td>
<td className="py-2 px-3 md:py-3 md:px-6 text-[13px] md:text-body-sm">Đảm bảo dinh dưỡng, vệ sinh và có người bầu bạn</td>
</tr>
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="py-2 px-3 md:py-3 md:px-6 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Chi tiết dịch vụ</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm leading-tight text-plum-deep">
<ul className="list-disc ml-4 space-y-1">
<li className="">Nhắc uống thuốc và gọi điện hàng ngày</li>
<li className="">Theo dõi lịch sử thể trạng qua app</li>
<li className="">Kiểm tra sức khỏe khi đến thăm khám</li>
</ul>
</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm leading-tight">
<ul className="list-disc ml-4 space-y-1">
<li className="">Đưa đón tận nhà 2 chiều</li>
<li className="">Đặt lịch khám trước theo yêu cầu</li>
<li className="">Đồng hành khám bệnh cùng</li>
<li className="">Ghi chú thông tin khám bệnh</li>
<li className="">Dịch vụ chăm người ốm tại bệnh viện</li>
</ul>
</td>
<td className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-[13px] md:text-body-sm leading-tight">
<ul className="list-disc ml-4 space-y-1">
<li className="">Chương trình rèn luyện trí não</li>
<li className="">Duy trì thể chất tại nhà</li>
<li className="">Hướng dẫn sử dụng công nghệ</li>
<li className="">Hoạt động trải nghiệm ngoài trời</li>
</ul>
</td>
<td className="py-2 px-3 md:py-3 md:px-6 text-[13px] md:text-body-sm leading-tight">
<ul className="list-disc ml-4 space-y-1">
<li className="">Hỗ trợ các công việc gia đình</li>
<li className="">Trò chuyện và chia sẻ với người cao tuổi</li>
<li className="">Dịch vụ linh hoạt theo khung giờ</li>
<li className="">Kiểm tra sức khỏe cơ bản hàng ngày</li>
</ul>
</td>
</tr>
<tr className="">
<td className="py-2 px-3 md:py-3 md:px-6 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Chất lượng &amp; Bảo mật</td>
<td className="text-[13px] md:text-body-sm font-semibold text-plum-deep text-center" colspan="4">
<div className="grid grid-cols-4 gap-0 w-full h-full">
<div className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-left">Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin người sử dụng</div>
<div className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-left">Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin người sử dụng</div>
<div className="py-2 px-3 md:py-3 md:px-6 border-r border-surface-lavender text-left">Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin người sử dụng</div>
<div className="py-2 px-3 md:py-3 md:px-6 text-left">Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin người sử dụng</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>

{/*  Mobile Card View for Service Comparison (Visible only on mobile)  */}
<div className="md:hidden space-y-6 reveal delay-200 mt-6">
{/*  Card 1  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  {/*  Header with Icon  */}
  <div className="bg-primary/5 p-5 border-b border-surface-lavender flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
      <span className="material-symbols-outlined text-white text-[24px]">monitor_heart</span>
    </div>
    <h3 className="text-xl font-bold text-primary leading-tight">Trợ lý theo dõi sức khỏe</h3>
  </div>
  
  <div className="p-5 space-y-5">
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">group</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Đối tượng</span>
         <p className="text-[13px] font-medium text-plum-deep leading-relaxed">Người cao tuổi cần theo dõi sức khỏe định kỳ, người có bệnh nền.</p>
       </div>
    </div>
    
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">flag</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Mục tiêu</span>
         <p className="text-[13px] text-on-surface-variant leading-relaxed">Kiểm soát tốt các chỉ số sức khỏe, duy trì thói quen uống thuốc đúng giờ.</p>
       </div>
    </div>
    
    <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender/50">
      <span className="text-[11px] uppercase text-primary font-bold flex items-center gap-1.5 mb-3"><span className="material-symbols-outlined text-[16px]">list_alt</span> Chi tiết dịch vụ</span>
      <ul className="space-y-2 text-[13px] text-plum-deep">
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Nhắc uống thuốc và gọi điện hàng ngày</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Theo dõi lịch sử thể trạng qua app</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Kiểm tra sức khỏe khi đến thăm khám</li>
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

{/*  Card 2  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-primary/5 p-5 border-b border-surface-lavender flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
      <span className="material-symbols-outlined text-white text-[24px]">directions_car</span>
    </div>
    <h3 className="text-xl font-bold text-primary leading-tight">Đưa đón khám bệnh</h3>
  </div>
  
  <div className="p-5 space-y-5">
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">group</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Đối tượng</span>
         <p className="text-[13px] font-medium text-plum-deep leading-relaxed">Người cao tuổi, trẻ em cần đi khám chuyên khoa/ tái khám tại bệnh viện.</p>
       </div>
    </div>
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">flag</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Mục tiêu</span>
         <p className="text-[13px] text-on-surface-variant leading-relaxed">An toàn y tế, giảm bớt gánh nặng thời gian cho người thân.</p>
       </div>
    </div>
    <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender/50">
      <span className="text-[11px] uppercase text-primary font-bold flex items-center gap-1.5 mb-3"><span className="material-symbols-outlined text-[16px]">list_alt</span> Chi tiết dịch vụ</span>
      <ul className="space-y-2 text-[13px] text-plum-deep">
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Đưa đón tận nhà 2 chiều</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Đặt lịch khám trước theo yêu cầu</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Đồng hành khám bệnh cùng</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Ghi chú thông tin khám bệnh</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Dịch vụ chăm người ốm tại bệnh viện</li>
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

{/*  Card 3  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-primary/5 p-5 border-b border-surface-lavender flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
      <span className="material-symbols-outlined text-white text-[24px]">self_improvement</span>
    </div>
    <h3 className="text-xl font-bold text-primary leading-tight">Giáo dục lão hóa</h3>
  </div>
  <div className="p-5 space-y-5">
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">group</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Đối tượng</span>
         <p className="text-[13px] font-medium text-plum-deep leading-relaxed">Người cao tuổi muốn duy trì sự minh mẫn &amp; vận động.</p>
       </div>
    </div>
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">flag</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Mục tiêu</span>
         <p className="text-[13px] text-on-surface-variant leading-relaxed">Phòng ngừa sa sút trí tuệ, cải thiện thể lực &amp; tinh thần.</p>
       </div>
    </div>
    <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender/50">
      <span className="text-[11px] uppercase text-primary font-bold flex items-center gap-1.5 mb-3"><span className="material-symbols-outlined text-[16px]">list_alt</span> Chi tiết dịch vụ</span>
      <ul className="space-y-2 text-[13px] text-plum-deep">
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Chương trình rèn luyện trí não</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Duy trì thể chất tại nhà</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Hướng dẫn sử dụng công nghệ</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Hoạt động trải nghiệm ngoài trời</li>
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

{/*  Card 4  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-primary/5 p-5 border-b border-surface-lavender flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
      <span className="material-symbols-outlined text-white text-[24px]">cleaning_services</span>
    </div>
    <h3 className="text-xl font-bold text-primary leading-tight">Giúp việc tại nhà</h3>
  </div>
  <div className="p-5 space-y-5">
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">group</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Đối tượng</span>
         <p className="text-[13px] font-medium text-plum-deep leading-relaxed">Người già neo đơn hoặc cần hỗ trợ sinh hoạt hàng ngày.</p>
       </div>
    </div>
    <div className="flex gap-3">
       <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">flag</span>
       <div>
         <span className="text-[11px] uppercase text-on-surface-variant font-bold tracking-wider block mb-1">Mục tiêu</span>
         <p className="text-[13px] text-on-surface-variant leading-relaxed">Đảm bảo dinh dưỡng, vệ sinh và có người bầu bạn.</p>
       </div>
    </div>
    <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender/50">
      <span className="text-[11px] uppercase text-primary font-bold flex items-center gap-1.5 mb-3"><span className="material-symbols-outlined text-[16px]">list_alt</span> Chi tiết dịch vụ</span>
      <ul className="space-y-2 text-[13px] text-plum-deep">
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Hỗ trợ các công việc gia đình</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Trò chuyện và chia sẻ với người cao tuổi</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Dịch vụ linh hoạt theo khung giờ</li>
        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[16px] mt-0.5 shrink-0">check_circle</span> Kiểm tra sức khỏe cơ bản hàng ngày</li>
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
</div>
</div>
</section>
{/*  Pricing Packages  */}
<section className="bg-plum-deep py-12 md:py-24 text-white">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="text-center mb-16">
<h2 className="text-display-lg font-display-lg">Gói Chăm sóc Linh hoạt</h2>
<p className="text-body-lg opacity-80 mt-4">Mức giá minh bạch được thiết kế phù hợp với hành trình của gia đình bạn.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">
{/*  Block 1: Gói Trợ lý Theo dõi Sức khỏe  */}
<div className="space-y-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-earth-orange-bright rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white">health_and_safety</span>
</div>
<h3 className="text-headline-lg font-bold">Gói Trợ lý Theo dõi Sức khỏe</h3>
</div>
<div className="grid gap-6">
{/*  Sub-package: Cơ bản  */}
<div className="bg-surface-lavender p-8 rounded-3xl border border-white/20 transition-all">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-bold text-primary">Gói Quan Tâm</h4>
<div className="text-right text-plum-deep">
<span className="text-2xl font-bold text-primary">790.000</span><span className="text-sm opacity-80 text-plum-deep"> đồng/tháng</span>
<div className="flex items-center justify-end gap-1 mt-1 font-bold animate-pulse" style={{'textShadow': 'rgba(0, 0, 0, 0.15) 2px 2px 0px', 'background': 'linear-gradient(rgb(239, 68, 68) 0%, rgb(153, 0, 10) 100%) text', 'WebkitTextFillColor': 'transparent', 'filter': 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 2px)'}}>
<span className="material-symbols-outlined text-[16px] text-error">auto_awesome</span><span className="text-lg text-error">25.000</span><span className="text-[12px] opacity-90 text-error"> đồng/ngày</span>
</div>
</div>
</div>
<ul className="space-y-3 text-body-sm text-on-surface">
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Nhắc uống thuốc hàng ngày và gọi điện chăm sóc 2 lần/ tuần</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Thăm nhà và kiểm tra sức khỏe 1 lần/tháng</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Báo cáo qua app cho chủ nhà</li>
</ul>
</div>
{/*  Sub-package: Tiêu chuẩn  */}
<div className="bg-primary p-8 rounded-3xl border border-white/20 text-white relative">
<div className="absolute -top-3 right-8 bg-earth-orange-bright text-white px-4 py-1 rounded-full text-[12px] font-bold uppercase">Phổ biến</div>
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-bold">Gói Chăm sóc</h4>
<div className="text-right"><span className="text-2xl font-bold">1.490.000</span><span className="text-sm opacity-80"> đồng/tháng</span></div>
</div>
<ul className="space-y-3 text-body-sm opacity-90">
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Nhắc uống thuốc hàng ngày và gọi điện chăm sóc hàng ngày</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Thăm nhà và kiểm tra sức khỏe 2 lần/tháng</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Báo cáo qua app cho chủ nhà</li>
</ul>
</div>
{/*  Sub-package: Đồng hành  */}
<div className="bg-transparent p-8 rounded-3xl border-2 border-white/20 hover:border-white/40 transition-all">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xl font-bold text-white">Gói Yêu thương</h4>
<div className="text-right text-white"><span className="text-2xl font-bold">2.490.000</span><span className="text-sm opacity-80"> đồng/tháng</span></div>
</div>
<ul className="space-y-3 text-body-sm opacity-80">
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Nhắc uống thuốc hàng ngày và gọi điện chăm sóc hàng ngày</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Thăm nhà và kiểm tra sức khỏe 4 lần/ tháng</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Đưa cụ đi dạo phố, trải nghiệm dịch vụ cộng đồng 1 lần/tháng</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-sm mt-1">check_circle</span> Báo cáo qua app cho chủ nhà</li>
</ul>
</div>
</div>
</div>
{/*  Block 2: Gói Dịch vụ Y tế  */}
<div className="flex flex-col">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-earth-orange-bright rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white">medical_services</span>
</div>
<h3 className="text-headline-lg font-bold">Gói Dịch vụ Y tế</h3>
</div>
<div className="bg-white/10 rounded-[3rem] border border-white/10 flex flex-col h-full p-8 flex-grow">
<p className="text-body-lg opacity-90 mb-4">Bao gồm các dịch vụ chuyên sâu hỗ trợ sức khỏe toàn diện:</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-surface-lavender p-4 rounded-2xl text-center border border-white/20 shadow-md flex flex-col items-center justify-center h-32">
<span className="material-symbols-outlined block mb-1 text-primary">medical_services</span>
<span className="text-label-lg font-bold text-plum-deep">Đưa đón khám bệnh</span>
</div>
<div className="bg-surface-lavender p-4 rounded-2xl text-center border border-white/20 shadow-md flex flex-col items-center justify-center h-32">
<span className="material-symbols-outlined block mb-1 text-primary">bed</span>
<span className="text-label-lg font-bold text-plum-deep">Chăm nom tại viện</span>
</div>
<div className="bg-surface-lavender p-4 rounded-2xl text-center border border-white/20 shadow-md flex flex-col items-center justify-center h-32">
<span className="material-symbols-outlined block mb-1 text-primary">home_health</span>
<span className="text-label-lg font-bold text-plum-deep">Giúp việc tại nhà</span>
</div>
<div className="bg-surface-lavender p-4 rounded-2xl text-center border border-white/20 shadow-md flex flex-col items-center justify-center h-32">
<span className="material-symbols-outlined block mb-1 text-primary">psychology</span>
<span className="text-label-lg font-bold text-plum-deep">Giáo dục lão khoa</span>
</div>
</div>
<div className="mt-auto">
<p className="text-body-sm italic opacity-70 mb-4">Chi tiết giá vui lòng tham khảo Bảng giá dịch vụ chi tiết bên dưới.</p>
<button className="w-full py-4 rounded-full bg-earth-orange-bright text-white font-bold hover:bg-earth-orange-dark transition-all flex items-center justify-center gap-2">Xem bảng giá chi tiết <span className="material-symbols-outlined">arrow_downward</span></button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Detailed Price Table Section  */}
<section className="py-12 bg-surface-mist">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="flex flex-col items-center mb-8 relative">
<h2 className="font-bold text-plum-deep uppercase tracking-wide text-xl md:text-2xl lg:text-3xl">BẢNG GIÁ chi tiết gói dịch vụ y tế</h2>
</div>
<div className="relative overflow-hidden rounded-[2rem] border border-surface-lavender shadow-xl bg-white">
<div className="absolute top-4 right-8 z-10">
<span className="text-label-md text-on-surface-variant font-medium italic opacity-70">Đơn vị: VNĐ</span>
</div>
<div className="hidden md:block overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[900px]">
<thead>
<tr className="bg-plum-deep text-white">
<th className="p-3 md:p-4 font-bold text-label-lg border-r border-white/10 text-center w-[30%] sticky-col bg-plum-deep">Dịch vụ &amp; Hạng mục</th>
<th className="p-3 md:p-4 font-bold text-label-lg border-r border-white/10 text-center w-[15%]">Gói lẻ theo ngày</th>
<th className="p-3 md:p-4 font-bold text-label-lg border-r border-white/10 text-center w-[15%]">3 ngày/ tuần</th>
<th className="p-3 md:p-4 font-bold text-label-lg border-r border-white/10 text-center w-[15%]">Giúp việc tại nhà</th>
<th className="p-3 md:p-4 font-bold text-label-lg text-center w-[25%]">Lưu ý</th>
</tr>
</thead>
<tbody className="text-on-surface text-[13px] md:text-body-sm">
{/*  Row 1  */}
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="p-3 md:p-4 border-r border-surface-lavender sticky-col bg-surface-container-low">
<span className="block text-[11px] md:text-[12px] uppercase text-earth-orange-bright font-bold mb-1">Đưa đón khám bệnh</span>
<span className="font-semibold text-plum-deep text-sm md:text-base">Đưa đi khám</span>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center">
<div className="font-bold">390.000 VNĐ</div><div className="text-[11px] md:text-[12px] opacity-70">/ 4 tiếng</div>
<div className="mt-2 font-bold">690.000 VNĐ</div><div className="text-[11px] md:text-[12px] opacity-70">/ 8 tiếng</div>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center bg-surface-mist/50" colspan="2" rowspan="2">
<div className="px-2 md:px-4 text-on-surface-variant leading-relaxed text-[12px] md:text-[13px]">Giảm giá <span className="text-earth-orange-bright font-bold">5%</span> nếu phát sinh dịch vụ tái khám, hoặc đăng ký từ lần thứ 2 trở đi</div>
</td>
<td className="p-3 md:p-4 leading-relaxed text-on-surface-variant" rowspan="2">
<ul className="list-disc ml-4 space-y-1 text-[12px] md:text-[13px]">
<li className="">Chưa bao gồm chi phí 02 lượt vận chuyển từ nhà tới bệnh viện.</li>
<li className="">Chi phí thăm khám và thuốc men chi trả theo thực tế.</li>
<li className="">Chỉ áp dụng cho các bệnh không truyền nhiễm.</li>
</ul>
</td>
</tr>
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="p-3 md:p-4 border-r border-surface-lavender sticky-col bg-surface-container-low">
<span className="block text-[11px] md:text-[12px] uppercase text-earth-orange-bright font-bold mb-1">Đưa đón khám bệnh</span>
<span className="font-semibold text-plum-deep text-sm md:text-base">Trông người ốm tại bệnh viện</span>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center">
<div className="font-bold">490.000 VNĐ</div><div className="text-[11px] md:text-[12px] opacity-70">/ ngày</div>
<div className="mt-2 font-bold">590.000 VNĐ</div><div className="text-[11px] md:text-[12px] opacity-70">/ ngày + đêm</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="p-3 md:p-4 border-r border-surface-lavender sticky-col bg-surface-container-low">
<span className="block text-[11px] md:text-[12px] uppercase text-primary font-bold mb-1">Thăm nom tại nhà</span>
<span className="font-semibold text-plum-deep text-sm md:text-base">Dọn dẹp cơ bản, nấu nướng, trò chuyện, kiểm tra sức khỏe</span>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-bold">190.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold">190.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold text-earth-orange-dark">170.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 text-center text-on-surface-variant italic text-[12px]">2.5 tiếng/ lần</td>
</tr>
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="p-3 md:p-4 border-r border-surface-lavender sticky-col bg-surface-container-low">
<span className="block text-[11px] md:text-[12px] uppercase text-primary font-bold mb-1">Thăm nom tại nhà</span>
<span className="font-semibold text-plum-deep text-sm md:text-base">Dọn dẹp toàn diện, nấu nướng, trò chuyện, kiểm tra sức khỏe</span>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-bold">390.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold">370.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold text-earth-orange-dark">350.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 text-center text-on-surface-variant italic text-[12px]">4.5 tiếng/ lần</td>
</tr>
{/*  Row 3  */}
<tr className="border-b border-surface-lavender hover:bg-surface-mist/50 transition-colors">
<td className="p-3 md:p-4 border-r border-surface-lavender sticky-col bg-surface-container-low">
<span className="block text-[11px] md:text-[12px] uppercase text-green-600 font-bold mb-1">Phục hồi &amp; Thể chất</span>
<span className="font-semibold text-plum-deep text-sm md:text-base">Rèn luyện sức khỏe thể chất và tinh thần</span>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-bold">390.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold">370.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold text-earth-orange-dark">350.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 text-on-surface-variant text-[12px] md:text-[13px] leading-relaxed">
    1 lần 120-150 phút tùy tình trạng, chi phí ngoại khóa sẽ trao đổi trước khi phát sinh.
</td>
</tr>
<tr className="hover:bg-surface-mist/50 transition-colors">
<td className="p-3 md:p-4 border-r border-surface-lavender sticky-col bg-surface-container-low">
<span className="block text-[11px] md:text-[12px] uppercase text-green-600 font-bold mb-1">Phục hồi &amp; Thể chất</span>
<span className="font-semibold text-plum-deep text-sm md:text-base">Phục hồi chức năng sau ốm bệnh bởi điều dưỡng</span>
</td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-bold">490.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold">460.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 border-r border-surface-lavender text-center font-semibold text-earth-orange-dark">440.000 VNĐ<span className="block text-[11px] md:text-[12px] font-medium opacity-60 mt-0.5">/ lần</span></td>
<td className="p-3 md:p-4 text-on-surface-variant text-[12px] md:text-[13px] leading-relaxed">
    1 lần 90-120 phút tùy tình trạng bệnh lý cụ thể.
</td>
</tr>
</tbody>
</table>
</div>

{/*  Mobile Card View for Pricing (Visible only on mobile)  */}
<div className="md:hidden space-y-6 mt-6">
{/*  Card 1  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-earth-orange-bright/10 p-5 border-b border-earth-orange-bright/20 flex flex-col items-center text-center">
     <div className="w-10 h-10 rounded-full bg-earth-orange-bright flex items-center justify-center mb-3 shadow-md">
       <span className="material-symbols-outlined text-white text-[20px]">directions_car</span>
     </div>
     <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] uppercase text-earth-orange-bright font-bold mb-2 shadow-sm">Đưa đón khám bệnh</span>
     <h3 className="text-lg font-bold text-plum-deep leading-tight">Đưa đi khám</h3>
  </div>
  
  <div className="p-5">
     <div className="bg-surface-mist rounded-xl p-1 mb-4 flex items-center justify-between border border-surface-lavender">
       <div className="flex-1 text-center py-2 border-r border-surface-lavender">
          <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Gói lẻ</span>
          <div className="font-bold text-plum-deep text-[15px]">390K <span className="text-[10px] opacity-70 font-normal">/ 4 tiếng</span></div>
          <div className="font-bold text-plum-deep text-[15px] mt-1">690K <span className="text-[10px] opacity-70 font-normal">/ 8 tiếng</span></div>
       </div>
       <div className="flex-1 text-center px-2">
          <span className="material-symbols-outlined text-earth-orange-bright text-[24px] block mb-1 mx-auto">loyalty</span>
          <div className="text-[11px] text-plum-deep font-medium leading-tight">Giảm <span className="text-earth-orange-bright font-bold">5%</span> từ lần 2 hoặc tái khám</div>
       </div>
     </div>
     <div className="bg-surface-container-low rounded-xl p-4 flex gap-3">
        <span className="material-symbols-outlined text-earth-orange-bright text-[20px] shrink-0 mt-0.5">info</span>
        <div>
          <span className="font-bold text-plum-deep text-[12px] block mb-1">Lưu ý:</span>
          <ul className="space-y-1 text-[12px] text-on-surface-variant">
            <li>- Chưa gồm phí vận chuyển.</li>
            <li>- Phí khám trả theo thực tế.</li>
            <li>- Áp dụng bệnh không truyền nhiễm.</li>
          </ul>
        </div>
     </div>
  </div>
</div>

{/*  Card 2  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-earth-orange-bright/10 p-5 border-b border-earth-orange-bright/20 flex flex-col items-center text-center">
     <div className="w-10 h-10 rounded-full bg-earth-orange-bright flex items-center justify-center mb-3 shadow-md">
       <span className="material-symbols-outlined text-white text-[20px]">local_hospital</span>
     </div>
     <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] uppercase text-earth-orange-bright font-bold mb-2 shadow-sm">Đưa đón khám bệnh</span>
     <h3 className="text-lg font-bold text-plum-deep leading-tight">Trông người ốm tại bệnh viện</h3>
  </div>
  
  <div className="p-5">
     <div className="bg-surface-mist rounded-xl p-1 flex items-center justify-between border border-surface-lavender">
       <div className="flex-1 text-center py-2 border-r border-surface-lavender">
          <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Gói lẻ</span>
          <div className="font-bold text-plum-deep text-[15px]">490K <span className="text-[10px] opacity-70 font-normal">/ ngày</span></div>
          <div className="font-bold text-plum-deep text-[15px] mt-1">590K <span className="text-[10px] opacity-70 font-normal">/ ngày+đêm</span></div>
       </div>
       <div className="flex-1 text-center px-2">
          <span className="material-symbols-outlined text-earth-orange-bright text-[24px] block mb-1 mx-auto">loyalty</span>
          <div className="text-[11px] text-plum-deep font-medium leading-tight">Giảm <span className="text-earth-orange-bright font-bold">5%</span> từ lần 2 hoặc tái khám</div>
       </div>
     </div>
  </div>
</div>

{/*  Card 3  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-primary/5 p-5 border-b border-surface-lavender flex flex-col items-center text-center">
     <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3 shadow-md">
       <span className="material-symbols-outlined text-white text-[20px]">home</span>
     </div>
     <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] uppercase text-primary font-bold mb-2 shadow-sm">Thăm nom tại nhà</span>
     <h3 className="text-lg font-bold text-plum-deep leading-tight">Dọn dẹp cơ bản, nấu nướng, trò chuyện, kiểm tra sức khỏe</h3>
  </div>
  
  <div className="p-5">
     <div className="grid grid-cols-3 gap-2 mb-4">
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Gói lẻ</span>
         <div className="font-bold text-plum-deep text-[14px]">190K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">3 ngày/tuần</span>
         <div className="font-bold text-plum-deep text-[14px]">190K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Giúp việc</span>
         <div className="font-bold text-earth-orange-dark text-[14px]">170K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
     </div>
     
     <div className="flex items-center justify-center gap-2 text-[12px] text-on-surface-variant bg-surface-container-low py-2 px-4 rounded-full w-fit mx-auto">
        <span className="material-symbols-outlined text-[16px]">schedule</span> Thời lượng: 2.5 tiếng/lần
     </div>
  </div>
</div>

{/*  Card 4  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-primary/5 p-5 border-b border-surface-lavender flex flex-col items-center text-center">
     <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3 shadow-md">
       <span className="material-symbols-outlined text-white text-[20px]">cleaning_services</span>
     </div>
     <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] uppercase text-primary font-bold mb-2 shadow-sm">Thăm nom tại nhà</span>
     <h3 className="text-lg font-bold text-plum-deep leading-tight">Dọn dẹp toàn diện, nấu nướng, trò chuyện, kiểm tra sức khỏe</h3>
  </div>
  
  <div className="p-5">
     <div className="grid grid-cols-3 gap-2 mb-4">
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Gói lẻ</span>
         <div className="font-bold text-plum-deep text-[14px]">390K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">3 ngày/tuần</span>
         <div className="font-bold text-plum-deep text-[14px]">370K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Giúp việc</span>
         <div className="font-bold text-earth-orange-dark text-[14px]">350K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
     </div>
     
     <div className="flex items-center justify-center gap-2 text-[12px] text-on-surface-variant bg-surface-container-low py-2 px-4 rounded-full w-fit mx-auto">
        <span className="material-symbols-outlined text-[16px]">schedule</span> Thời lượng: 4.5 tiếng/lần
     </div>
  </div>
</div>

{/*  Card 5  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-green-600/10 p-5 border-b border-green-600/20 flex flex-col items-center text-center">
     <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mb-3 shadow-md">
       <span className="material-symbols-outlined text-white text-[20px]">self_improvement</span>
     </div>
     <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] uppercase text-green-700 font-bold mb-2 shadow-sm">Phục hồi &amp; Thể chất</span>
     <h3 className="text-lg font-bold text-plum-deep leading-tight">Rèn luyện sức khỏe thể chất và tinh thần</h3>
  </div>
  
  <div className="p-5">
     <div className="grid grid-cols-3 gap-2 mb-4">
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Gói lẻ</span>
         <div className="font-bold text-plum-deep text-[14px]">390K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">3 ngày/tuần</span>
         <div className="font-bold text-plum-deep text-[14px]">370K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Giúp việc</span>
         <div className="font-bold text-earth-orange-dark text-[14px]">350K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
     </div>
     
     <div className="bg-surface-container-low rounded-xl p-4 flex gap-3">
        <span className="material-symbols-outlined text-green-700 text-[20px] shrink-0 mt-0.5">info</span>
        <div>
          <span className="font-bold text-plum-deep text-[12px] block mb-1">Lưu ý:</span>
          <p className="text-[12px] text-on-surface-variant">1 lần 120-150 phút tùy tình trạng. Chi phí ngoại khóa trao đổi trước.</p>
        </div>
     </div>
  </div>
</div>

{/*  Card 6  */}
<div className="bg-white rounded-2xl shadow-xl border border-surface-lavender overflow-hidden relative">
  <div className="bg-green-600/10 p-5 border-b border-green-600/20 flex flex-col items-center text-center">
     <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mb-3 shadow-md">
       <span className="material-symbols-outlined text-white text-[20px]">medical_services</span>
     </div>
     <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] uppercase text-green-700 font-bold mb-2 shadow-sm">Phục hồi &amp; Thể chất</span>
     <h3 className="text-lg font-bold text-plum-deep leading-tight">Phục hồi chức năng sau ốm bệnh bởi điều dưỡng</h3>
  </div>
  
  <div className="p-5">
     <div className="grid grid-cols-3 gap-2 mb-4">
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Gói lẻ</span>
         <div className="font-bold text-plum-deep text-[14px]">490K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">3 ngày/tuần</span>
         <div className="font-bold text-plum-deep text-[14px]">460K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
       <div className="bg-surface-mist p-3 rounded-xl text-center border border-surface-lavender/50">
         <span className="block text-[10px] text-on-surface-variant uppercase font-bold mb-1">Giúp việc</span>
         <div className="font-bold text-earth-orange-dark text-[14px]">440K<span className="text-[9px] opacity-70 font-normal block">/ lần</span></div>
       </div>
     </div>
     
     <div className="bg-surface-container-low rounded-xl p-4 flex gap-3">
        <span className="material-symbols-outlined text-green-700 text-[20px] shrink-0 mt-0.5">info</span>
        <div>
          <span className="font-bold text-plum-deep text-[12px] block mb-1">Lưu ý:</span>
          <p className="text-[12px] text-on-surface-variant">1 lần 90-120 phút tùy tình trạng bệnh lý cụ thể.</p>
        </div>
     </div>
  </div>
</div>
</div>
</div>
<p className="mt-6 text-body-sm text-on-surface-variant italic text-center">* Lưu ý: trường hợp có sử dụng nhân viên biết tiếng anh tính thêm phí 200.000 - 300.000 VNĐ/ lần</p>
</div>
</section>
{/*  Connect Sections (Dành cho khách hàng)  */}
<section className="py-12 md:py-24 bg-plum-deep" id="lien-he-gia-dinh">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="bg-white rounded-3xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2 space-y-8">
<h3 className="text-primary font-bold text-headline-md mb-2">Kết nối cùng chúng tôi <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h3>
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-wider mb-2 bg-earth-orange-bright text-white"><span className="material-symbols-outlined text-[18px]">person</span> Dành cho khách hàng</div>
<h2 className="font-bold text-plum-deep leading-tight text-headline-md"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ luôn sẵn sàng đồng hành cùng để giữ trọn {t("hero.title3")}</h2>
<p className="text-body-lg text-on-surface-variant">Hãy chia sẻ cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ bạn nhé, bạn muốn gọi điện thoại ngay qua hotline <a className="text-earth-orange-bright font-bold hover:underline" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>{siteInfo.hotline}</a> hay để lại thông tin liên hệ.</p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-earth-orange-bright/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-earth-orange-bright">schedule</span></div>
<p className="text-body-md font-medium text-plum-deep">Chúng tôi sẽ liên hệ lại ngay trong 4 tiếng.</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-earth-orange-bright/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-earth-orange-bright">lock</span></div>
<p className="text-body-md font-medium text-plum-deep">Thông tin sẽ được bảo mật theo chính sách cam kết của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
</div>
</div>
</div>
<div className="md:w-1/2 w-full bg-surface-mist p-8 rounded-2xl border border-surface-lavender">
<form className="space-y-6">
<div>
<label className="block text-label-md text-plum-deep mb-2">Họ và tên</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">person</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Nhập họ và tên của bạn" type="text" />
</div>
</div>
<div>
<label className="block text-label-md text-plum-deep mb-2">Số điện thoại</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">call</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="0xxx xxx xxx" type="tel" />
</div>
</div>
<div>
<label className="block text-label-md text-plum-deep mb-2">Người cần hỗ trợ đang sinh sống tại</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">location_on</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Nhập địa chỉ hoặc khu vực" type="text" />
</div>
</div>
<button className="bg-earth-orange-bright text-white py-3 md:py-4 px-8 md:px-12 rounded-full font-bold text-[15px] md:text-lg hover:bg-earth-orange-dark transition-all shadow-md md:shadow-lg w-full max-w-[260px] md:max-w-none md:w-auto mx-auto" type="submit">{t("hero.btnConsult")}</button>
</form>
</div>
</div>
</div>
</section>
{/*  Connect Sections (Dành cho đối tác & Tuyển dụng)  */}
<section className="py-12 md:py-24 bg-surface-lavender/30 border-t border-surface-lavender">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="bg-white rounded-3xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2 space-y-8">
<h3 className="text-primary font-bold text-headline-md mb-2">Kết nối cùng chúng tôi <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h3>
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-wider mb-2 bg-earth-orange-bright text-white"><span className="material-symbols-outlined text-[18px]">handshake</span> DÀNH CHO ĐỐI TÁC &amp; TUYỂN DỤNG</div>
<h2 className="font-bold text-plum-deep leading-tight text-headline-md">Hãy hợp tác cùng chúng tôi vì một tiêu chuẩn chăm sóc gia đình Việt hiện đại, uy tín</h2>
<p className="text-body-lg text-plum-deep font-semibold mt-4">Dịch vụ của chúng tôi phù hợp cho nhiều đối tượng đang đi học hoặc đã đi làm gồm:</p>
<ul className="space-y-2 mt-4 text-body-md text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[20px]">check_circle</span> Cá nhân muốn tìm kiếm 1 công việc có thời gian linh hoạt</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[20px]">check_circle</span> Cá nhân được đào tạo y tế muốn tìm kiếm 1 công việc có thời gian linh hoạt</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-earth-orange-bright text-[20px]">check_circle</span> Tổ chức y tế cần mở rộng mạng lưới khách hàng của mình</li>
</ul>
<p className="text-body-md text-on-surface-variant mt-6">Hãy liên hệ với chúng tôi qua email: <a className="text-earth-orange-bright font-bold hover:underline" href="mailto:tuyendung@antcare.vn">tuyendung@antcare.vn</a></p>
<p className="text-body-md text-on-surface-variant">Khi hợp tác cùng chúng tôi, bạn sẽ <a className="text-primary font-bold hover:text-earth-orange-bright transition-colors decoration-2 underline" href="#quyen-loi-doi-tac">xem chi tiết</a></p>
</div>
<div className="md:w-1/2 w-full bg-surface-mist p-8 rounded-2xl border border-surface-lavender">
<form className="space-y-6">
<div>
<label className="block text-label-md text-plum-deep mb-2">Họ và tên hoặc Tên tổ chức/ trung tâm</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">person</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Nhập họ và tên của bạn" type="text" />
</div>
</div>
<div>
<label className="block text-label-md text-plum-deep mb-2">Số điện thoại</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">call</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="0xxx xxx xxx" type="tel" />
</div>
</div>
<div>
<label className="block text-label-md text-plum-deep mb-2">Nơi ở hiện tại của bạn</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">location_on</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Nhập địa chỉ hoặc khu vực" type="text" />
</div>
</div>
<div>
<label className="block text-label-md text-plum-deep mb-2">Kinh nghiệm/Ghi chú</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">edit_note</span>
<input className="w-full bg-white border-none rounded-xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Chia sẻ thêm về kinh nghiệm của bạn" type="text" />
</div>
</div>
<button className="bg-earth-orange-bright text-white py-3 md:py-4 px-8 md:px-12 rounded-full font-bold text-[15px] md:text-lg hover:bg-earth-orange-dark transition-all shadow-md md:shadow-lg w-full max-w-[260px] md:max-w-none md:w-auto mx-auto" type="submit">Gửi thông tin hợp tác</button>
</form>
</div>
</div>
</div>
</section>
{/*  Quyen loi doi tac Section  */}
<section className="py-12 md:py-24 bg-white scroll-mt-24" id="quyen-loi-doi-tac">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="text-center mb-20 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-label-md uppercase tracking-widest mb-6">
<span className="material-symbols-outlined text-[20px]">partnership</span>
</div>
<h2 className="font-display-lg text-plum-deep text-display-lg font-bold mb-4">Hợp tác cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h2>
<div className="w-24 h-1.5 bg-earth-orange-bright rounded-full mb-6"></div>
<p className="text-body-lg text-on-surface-variant max-w-2xl">Quyền lợi vượt trội và quy trình làm việc chuyên nghiệp chuẩn quốc tế dành cho đối tác.</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="space-y-10">
<div className="flex items-center gap-4 mb-2">
<span className="material-symbols-outlined text-4xl text-primary p-3 bg-primary/10 rounded-2xl">workspace_premium</span>
<h3 className="text-headline-lg font-bold text-plum-deep">Quyền lợi của đối tác</h3>
</div>
<div className="grid gap-6">
<div className="group bg-surface-mist p-6 rounded-3xl border border-surface-lavender hover:shadow-xl hover:bg-white transition-all duration-300">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">devices</span>
</div>
<div className="space-y-1">
<p className="text-body-md font-bold text-plum-deep">Nền tảng minh bạch</p>
<p className="text-body-sm text-on-surface-variant leading-relaxed">Được tham gia vào 1 nền tảng điện tử minh bạch, hiện đại, nơi kết nối nhu cầu của người cần dịch vụ và người cung cấp dịch vụ.</p>
</div>
</div>
</div>
<div className="group bg-surface-mist p-6 rounded-3xl border border-surface-lavender hover:shadow-xl hover:bg-white transition-all duration-300">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">event_available</span>
</div>
<div className="space-y-1">
<p className="text-body-md font-bold text-plum-deep">Linh hoạt thời gian</p>
<p className="text-body-sm text-on-surface-variant leading-relaxed">Đa dạng lựa chọn việc làm, linh hoạt thời gian làm việc phù hợp với lịch trình cá nhân.</p>
</div>
</div>
</div>
<div className="group bg-surface-mist p-6 rounded-3xl border border-surface-lavender hover:shadow-xl hover:bg-white transition-all duration-300">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div className="space-y-1">
<p className="text-body-md font-bold text-plum-deep">Tăng thêm thu nhập</p>
<p className="text-body-sm text-on-surface-variant leading-relaxed">Cơ hội tăng thêm thu nhập và mở rộng mạng lưới khách hàng tiềm năng trong lĩnh vực chăm sóc sức khỏe.</p>
</div>
</div>
</div>
<div className="group bg-surface-mist p-6 rounded-3xl border border-surface-lavender hover:shadow-xl hover:bg-white transition-all duration-300">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">model_training</span>
</div>
<div className="space-y-1">
<p className="text-body-md font-bold text-plum-deep">Đào tạo chuyên sâu</p>
<p className="text-body-sm text-on-surface-variant leading-relaxed">Được đào tạo và hỗ trợ chuyên môn liên tục trong suốt quá trình hợp tác cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-10">
<div className="flex items-center gap-4 mb-2">
<span className="material-symbols-outlined text-4xl text-earth-orange-bright p-3 bg-earth-orange-bright/10 rounded-2xl">account_tree</span>
<h3 className="text-headline-lg font-bold text-plum-deep">Quy trình hợp tác</h3>
</div>
<div className="relative pl-4 space-y-0">
<div className="absolute left-[35px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-earth-orange-bright to-primary/20"></div>
<div className="relative flex gap-8 pb-12 group">
<div className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">1</div>
<div className="pt-1">
<h4 className="text-headline-md font-bold text-plum-deep mb-1">Liên hệ / Gửi CV</h4>
<p className="text-body-sm text-on-surface-variant">Gửi thông tin ứng tuyển hoặc liên hệ trực tiếp qua hotline/email của chúng tôi.</p>
</div>
</div>
<div className="relative flex gap-8 pb-12 group">
<div className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">2</div>
<div className="pt-1">
<h4 className="text-headline-md font-bold text-plum-deep mb-1">Kiểm tra thông tin</h4>
<p className="text-body-sm text-on-surface-variant"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ sẽ tiếp nhận, kiểm tra hồ sơ và liên hệ lại với bạn trong vòng 48h làm việc.</p>
</div>
</div>
<div className="relative flex gap-8 pb-12 group">
<div className="relative z-10 w-11 h-11 rounded-full bg-earth-orange-bright text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">3</div>
<div className="pt-1">
<h4 className="text-headline-md font-bold text-plum-deep mb-1">Trao đổi &amp; Thống nhất</h4>
<p className="text-body-sm text-on-surface-variant">Hai bên cùng thảo luận chi tiết về cơ chế, quyền lợi và các điều khoản hợp tác cụ thể.</p>
</div>
</div>
<div className="relative flex gap-8 pb-12 group">
<div className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">4</div>
<div className="pt-1">
<h4 className="text-headline-md font-bold text-plum-deep mb-1">Ký kết hợp đồng</h4>
<p className="text-body-sm text-on-surface-variant">Chính thức ký kết hợp đồng cộng tác viên hoặc thỏa thuận hợp tác đối tác chiến lược.</p>
</div>
</div>
<div className="relative flex gap-8 group">
<div className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">5</div>
<div className="pt-1">
<h4 className="text-headline-md font-bold text-plum-deep mb-1">Đào tạo &amp; Tiếp nhận</h4>
<p className="text-body-sm text-on-surface-variant">Tham gia khóa đào tạo tiêu chuẩn và bắt đầu nhận các yêu cầu dịch vụ từ hệ thống.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Our Story Section  */}
<section className="relative" id="our-story">
{/*  Story Hero Section  */}
<div className="relative min-h-[70vh] flex items-center pt-20">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7dy6eTQV4-Y52YwCi93PxlfXTiqQUOOaHavw7SqqmdKKd2l3VV8K-W-7fX4EYUTob5AU2hW5khTcgVtr64Z5XYFHaFTGbYInoapacFK3LAjG1vIKvqjYse_BjGGVZiUFQ1yeoaILrnr4Gci1vMx2AJRjcoiCuBYLSpnFKzZRvUFAELKXAhw3kDwY_uBGdUFsAmNo5KDeyKWC9zfaqH1LgGklteTMe5_mb4JhBIJMtRi5faKpfC9bENwogoi2ZCM1I11YPPD3BHWcg" />
<div className="absolute inset-0 bg-gradient-to-r from-plum-deep/80 via-plum-deep/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-gutter-desktop w-full">
<div className="max-w-2xl text-white">
<span className="inline-block px-4 py-1 bg-earth-orange-bright/20 border border-earth-orange-bright/30 rounded-full text-earth-orange-bright font-label-lg text-label-lg mb-6">Câu chuyện của chúng tôi</span>
<h1 className="font-display-lg text-display-lg mb-6 leading-tight font-bold">Tâm nguyện từ trái tim người sáng lập</h1>
<p className="font-body-lg text-body-lg opacity-90 max-w-xl">
                        Sứ mệnh kết nối tình yêu của con cái và sức khỏe của cha mẹ, mang đến sự an tâm tuyệt đối khi khoảng cách địa lý không còn là râu cản.
                    </p>
</div>
</div>
</div>
{/*  Story Details Section  */}
<div className="py-12 md:py-24 bg-surface-mist">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl border-4 border-white flex items-center justify-center">
<img alt="Tin nhắn quan tâm của con dành cho bố" className="w-full h-full object-contain bg-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVWIMJzq_3dLyQr81J5Go83MN_F231MsyolhKTRodtqkXMxoI7xw3om4Ydo_2yyEYH8vt6p-t1tUaEP_7NxjsbifWAQkbuOC0TYaixRPoKpaG4W1v90N83sj2-tT421c5x5Mr_VMt4H0R1JUYSSiiBbjPkawZDxbR5JwxJTzGeySD9g7AuZdhTJrbeGrvZ3XJwHsOPnB_TJgS0pGpFhPLXqaUgaHb8oryp9VwB3D4UeEAUqAA2n7jqvA" />
</div>
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-earth-orange-bright rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
</div>
<div className="space-y-6 text-on-surface-variant font-body-lg">
<h2 className="font-display-lg text-2xl md:text-3xl lg:text-4xl font-bold text-plum-deep mb-4">Câu chuyện của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ</h2>
<p className="">Chúng tôi thấu hiểu nỗi lòng của những người con xa nhà, luôn đau đáu về sức khỏe của cha mẹ. Những dòng tin nhắn hỏi thăm vội vã giữa giờ làm, những lo âu khi không thể trực tiếp đưa bố mẹ đi khám bệnh chính là khởi nguồn cho sứ mệnh của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ.</p>
<p className="">Có những lúc cha mẹ ốm đau nhưng chẳng nỡ gọi con vì sợ con lo, sợ con bận. Có những khi người con ngồi giữa văn phòng hiện đại nhưng lòng quặn thắt vì không thể tự tay đưa cha mẹ đi khám bệnh định kỳ.</p>
<p className="italic text-plum-light font-semibold border-l-4 border-earth-orange-bright pl-6 py-2">"Sự cô đơn của tuổi già và nỗi trăn trở của những người con xa xứ chính là nguồn cảm hứng để <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ ra đời."</p>
<p className="text-body-md opacity-90">Tại sao lại là ANT? Hình ảnh kiến thường gợi tới tính chất bầy đàn, luôn chăm chút về tổ. Do vậy, chúng tôi liên kết những 'bạn kiến' tận tâm thành một tổ kiến rộng lớn, để lan tỏa yêu thương và sự chăm sóc chu đáo đến từng gia đình Việt.</p>
</div>
</div>
</div>
</div>
{/*  Core Values Section  */}
<div className="py-24 bg-white relative overflow-hidden" id="mission-vision-values">
<div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-20"></div>
<div className="max-w-container-max mx-auto px-gutter-desktop relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-label-md uppercase tracking-widest mb-4">
<span className="material-symbols-outlined text-[20px]">stars</span> Core Values
                    </div>
<h2 className="font-display-lg text-4xl font-bold text-plum-deep mb-4">Quy trình hoạt động của <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span></h2>
<p className="text-on-surface-variant text-body-lg">Mọi hoạt động tại <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ đều được xây dựng trên nền tảng của sự chân thành và tiêu chuẩn y tế khắt khe.</p>
</div>
<div className="w-full space-y-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"><div className="flex flex-col items-center text-center p-6 bg-surface-mist rounded-2xl border border-surface-lavender relative"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">1</div><p className="font-bold text-plum-deep">Khách hàng liên hệ</p></div><div className="flex flex-col items-center text-center p-6 bg-surface-mist rounded-2xl border border-surface-lavender relative"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">2</div><p className="font-bold text-plum-deep"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> kết nối</p></div><div className="flex flex-col items-center text-center p-6 bg-surface-mist rounded-2xl border border-surface-lavender relative"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">3</div><p className="font-bold text-plum-deep">Khách hàng đặt cọc dịch vụ, <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> giữ thanh toán</p></div><div className="flex flex-col items-center text-center p-6 bg-surface-mist rounded-2xl border border-surface-lavender relative"><div className="w-12 h-12 bg-earth-orange-bright text-white rounded-full flex items-center justify-center font-bold mb-4">4</div><p className="font-bold text-plum-deep"><span className="text-earth-orange-bright">Kiến</span> chăm sóc</p></div><div className="flex flex-col items-center text-center p-6 bg-surface-mist rounded-2xl border border-surface-lavender relative"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">5</div><p className="font-bold text-plum-deep">Khách hàng đánh giá</p></div><div className="flex flex-col items-center text-center p-6 bg-surface-mist rounded-2xl border border-surface-lavender relative"><div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">6</div><p className="font-bold text-plum-deep"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> thanh toán cho <span className="text-earth-orange-bright">Kiến</span></p></div></div><p className="text-center text-body-sm italic text-on-surface-variant mt-8">* <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> sẽ thanh toán cho <span className="text-earth-orange-bright">Kiến</span> định kỳ 2 lần/ tháng</p></div>
</div>
</div>
</section>
<section className="py-12 md:py-24 bg-surface-mist" id="contact-info-section">
<div className="max-w-container-max mx-auto px-gutter-desktop">
<div className="text-center mb-12">
<h2 className="font-display-lg text-display-lg font-bold text-plum-deep">Thông tin liên hệ</h2>
<div className="w-24 h-1.5 bg-earth-orange-bright rounded-full mx-auto mt-4"></div>
</div>
<div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] border border-surface-lavender shadow-sm">
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">corporate_fare</span>
<div>
<p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Văn phòng đại diện tại Hà Nội</p>
<p className="text-body-lg font-bold text-plum-deep">Văn phòng đại diện tại Hà Nội</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">call</span>
<div>
<p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Số điện thoại</p>
<a className="text-body-lg font-bold text-earth-orange-bright md:hover:underline" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>{siteInfo.hotline}</a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">mail</span>
<div>
<p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Email</p>
<a className="text-body-lg font-bold text-plum-deep md:hover:text-earth-orange-bright transition-colors" href="mailto:{siteInfo.email}">{siteInfo.email}</a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary">location_on</span>
<div>
<p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Địa chỉ</p>
<p className="text-body-lg font-bold text-plum-deep">Tầng 12, Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP. Hồ Chí Minh</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-plum-deep text-white border-t border-border-muted pt-20 pb-10">
<div className="max-w-container-max mx-auto px-gutter-desktop grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-4">
<a href="#" className="flex items-center gap-3 cursor-pointer md:hover:opacity-90 transition-opacity">
    <img alt="247care footer logo" className="h-20 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh50_3vCqlGCO7WIFt3ruzYqzt-lrcNbgIct-onlATuH0s-Q0Aj9I-V_nZc4cqxV6RczROAfO9pcSYRoFoRV34F9e0D-rQP1AHsAhjGSU8PSmngsNqEc3Q1VNapKTBCND7xkk5QdkYYvXpJ07muMjqBu5yUryM8qUfxyBR4HTZnx2nSO5uav7iM9KfWFGsUjEawPs4oJd9wHl-9b5iC_7w1ghFjjj1YLf6Od2u2Ju015JxmyrjgFuzS6xFMitmlCMyRPekHVDTmJ3l" />
</a>
</div>
<p className="text-body-sm opacity-80 leading-relaxed">Chăm sóc sức khỏe tại nhà và già hóa năng động tiêu chuẩn quốc tế. Giữ trọn yêu thương cho gia đình bạn dù ở bất cứ đâu.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center md:hover:bg-earth-orange-bright transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center md:hover:bg-earth-orange-bright transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center md:hover:bg-earth-orange-bright transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
</div>
</div>
<div className="space-y-6">
<h4 className="font-bold text-headline-md">Liên kết</h4>
<ul className="space-y-4 opacity-70">
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Trang chủ</a></li>
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Về chúng tôi</a></li>
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Dịch vụ</a></li>
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Liên hệ</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-bold text-headline-md">Hỗ trợ</h4>
<ul className="space-y-4 opacity-70">
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Câu hỏi thường gặp</a></li>
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Chính sách bảo mật</a></li>
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Điều khoản sử dụng</a></li>
<li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Tuyển dụng</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-bold text-headline-md">Văn phòng</h4>
<p className="opacity-70 leading-relaxed">Tầng 12, Tòa nhà Innovation,<br />Công viên phần mềm Quang Trung,<br />Quận 12, TP. Hồ Chí Minh</p>
<p className="font-bold text-earth-orange-bright">Hotline: {siteInfo.hotline}</p>
</div>
</div>
<div className="max-w-container-max mx-auto px-gutter-desktop pt-8 border-t border-white/10 text-center opacity-60 text-body-sm">
            © 2026 <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ. Dedicated to those who cared for us.
        </div>
</footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
        
        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className={`w-11 h-11 bg-white border border-border-muted rounded-full flex items-center justify-center shadow-md text-plum-deep hover:bg-surface-mist hover:text-earth-orange-bright transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-xl">arrow_upward</span>
        </button>

        {/* Contact Speed Dial */}
        <div className="relative">
          {/* Expanded Buttons */}
          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 pb-4 flex flex-col gap-3 items-center transition-all duration-300 ${isContactOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}>
            {/* Zalo Button */}
            <a href={siteInfo.zalo} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0068FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer relative group/zalo">
              <span className="text-white font-bold text-[13px]">Zalo</span>
              <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/zalo:opacity-100 group-hover/zalo:visible transition-all whitespace-nowrap border border-gray-100">
                Chat qua Zalo
              </div>
            </a>

            {/* Facebook Button */}
            <a href={siteInfo.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#0866FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer relative group/fb">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              <div className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm text-gray-800 font-medium opacity-0 invisible group-hover/fb:opacity-100 group-hover/fb:visible transition-all whitespace-nowrap border border-gray-100">
                Chat qua Messenger
              </div>
            </a>
          </div>
          
          {/* Main Toggle Button */}
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="w-14 h-14 bg-earth-orange-bright rounded-full flex items-center justify-center shadow-xl text-white hover:bg-earth-orange-bright/90 transition-all shadow-earth-orange-bright/30 relative z-10"
          >
            <span className={`material-symbols-outlined text-2xl absolute duration-300 transition-transform ${isContactOpen ? 'scale-0' : 'scale-100'}`}>forum</span>
            <span className={`material-symbols-outlined text-2xl absolute duration-300 transition-transform ${isContactOpen ? 'scale-100' : 'scale-0'}`}>close</span>
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;
