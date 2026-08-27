import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <footer className="bg-plum-deep text-white border-t border-white/10 py-8 md:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-9 mb-7">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block cursor-pointer md:hover:opacity-95 transition-opacity">
              <div className="bg-white rounded-xl px-3 py-1.5 inline-block shadow-sm">
                <img alt="ANTCARE – Kiến chăm tổ – Chăm sóc người cao tuổi tại Hà Nội" className="h-10 sm:h-12 w-auto object-contain" src="/images/footer-logo.png" />
              </div>
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal italic">
            "{isEn ? 'You can\'t always be with your family, ANTCARE will always be there to preserve love for you' : 'Bạn không thể ở bên gia đình mọi lúc mọi nơi, ANTCARE – Kiến chăm tổ sẽ luôn ở bên để giữ trọn yêu thương cùng bạn'}"
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-white tracking-wide">{isEn ? 'Quick Links' : 'Liên kết'}</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-white/75">
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/">{isEn ? 'Home' : 'Trang chủ'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#cau-chuyen-cua-ant">{isEn ? 'About Us' : 'Về chúng tôi'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#giai-phap-cham-soc">{isEn ? 'Services' : 'Dịch vụ'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/news">{isEn ? 'News' : 'Tin tức'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/activities">{isEn ? 'Activities' : 'Hoạt động'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#thong-tin-lien-he">{isEn ? 'Contact' : 'Liên hệ'}</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-white tracking-wide">{isEn ? 'Support' : 'Hỗ trợ'}</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-white/75">
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/ve-antcare#faq">{isEn ? 'FAQ' : 'Câu hỏi thường gặp'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/privacy-policy">{isEn ? 'Privacy Policy' : 'Chính sách bảo mật'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/terms-of-use">{isEn ? 'Terms of Use' : 'Điều khoản sử dụng'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/recruitment">{isEn ? 'Careers & Partner' : 'Tuyển dụng & Hợp tác'}</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-white tracking-wide">{isEn ? 'Head Office' : 'Văn phòng'}</h4>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            {isEn ? (
              <>
                Rox Tower Building,<br />
                138 Ho Tung Mau, Phu Dien,<br />
                Ha Noi
              </>
            ) : (
              <>
                Tòa Rox Tower,<br />
                138 Hồ Tùng Mậu, Phú Diễn,<br />
                Hà Nội
              </>
            )}
          </p>
          <p className="font-bold text-earth-orange-bright text-xs sm:text-sm pt-0.5">
            Hotline: <a onClick={() => trackEvent('click_hotline', { location: 'footer' })} href={`tel:${siteInfo.hotline.replace(/ /g, "")}`} className="hover:underline">{siteInfo.hotline}</a>
          </p>
        </div>
      </div>

      {/* Minimalist Centered Social Media Icons (No Text Label) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 my-3 pt-4 border-t border-white/10">
        <div className="flex items-center justify-center gap-3.5">
          {/* Facebook Fanpage */}
          <a 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all duration-300 shadow-md" 
            href={siteInfo.facebookPage} 
            target="_blank" 
            rel="noreferrer" 
            title="Fanpage Facebook ANTCARE – Kiến chăm tổ"
          >
            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-black hover:border-white/50 hover:scale-110 transition-all duration-300 shadow-md" 
            href={siteInfo.tiktok} 
            target="_blank" 
            rel="noreferrer" 
            title="Kênh TikTok ANTCARE – Kiến chăm tổ"
          >
            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V5.86a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 12a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.54V6.78a4.85 4.85 0 0 1-1.27-.09z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#FF0000] hover:border-[#FF0000] hover:scale-110 transition-all duration-300 shadow-md" 
            href={siteInfo.youtube} 
            target="_blank" 
            rel="noreferrer" 
            title="Kênh YouTube ANTCARE – Kiến chăm tổ"
          >
            <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Zalo */}
          <a 
            onClick={() => trackEvent('click_zalo', { location: 'footer' })}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#0068FF] hover:border-[#0068FF] hover:scale-110 transition-all duration-300 shadow-md" 
            href={siteInfo.zalo} 
            target="_blank" 
            rel="noreferrer" 
            title="Tư vấn qua Zalo"
          >
            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.075 2 11.1c0 2.875 1.45 5.438 3.738 7.15A.75.75 0 0 1 6 18.84v2.41a.75.75 0 0 0 1.2.6l2.75-2.06a.75.75 0 0 1 .45-.15c.53.05 1.06.08 1.6.08 5.523 0 10-4.075 10-9.1S17.523 2 12 2zm-4.75 6.5h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zm0 3h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5zm0 3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z"/>
            </svg>
          </a>

          {/* Messenger */}
          <a 
            onClick={() => trackEvent('click_messenger', { location: 'footer' })}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-[#0084FF] hover:border-[#0084FF] hover:scale-110 transition-all duration-300 shadow-md" 
            href={siteInfo.facebook} 
            target="_blank" 
            rel="noreferrer" 
            title="Chat qua Messenger"
          >
            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.442 5.508 3.705 7.214.195.147.315.378.315.62v2.302c0 .484.526.786.945.544l2.584-1.492c.162-.093.351-.129.535-.1 1.25.203 2.535.312 3.916.312 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1.093 12.146l-2.613-2.787a.75.75 0 0 0-1.077 0l-3.52 3.753c-.352.376-.891-.07-.63-.526l3.96-6.91a.75.75 0 0 1 1.077 0l2.613 2.787a.75.75 0 0 0 1.077 0l3.52-3.753c.352-.376.891.07.63.526l-3.96 6.91a.75.75 0 0 1-1.077 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-4 border-t border-white/10 text-center text-white/60 text-xs">
        © 2026 <strong className="text-white font-semibold">ANTCARE – Kiến chăm tổ</strong>. Dedicated to those who cared for us.
      </div>
    </footer>
  );
};

export default Footer;
