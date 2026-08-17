import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import siteInfo from '../config/siteInfo.json';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <footer className="bg-plum-deep text-white border-t border-white/10 py-8 md:py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-9 mb-7">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block cursor-pointer md:hover:opacity-90 transition-opacity">
              <img alt="ANTCARE footer logo" className="h-12 sm:h-14 w-auto object-contain" src="/images/footer-logo.png" />
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal italic">
            "{isEn ? 'You can\'t always be with your family, ANT will always be there to preserve love for you' : 'Bạn không thể ở bên gia đình mọi lúc mọi nơi, Kiến sẽ luôn ở bên để giữ trọn yêu thương cùng bạn'}"
          </p>
          <div className="flex gap-2.5 pt-1">
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 md:hover:bg-earth-orange-bright md:hover:text-white transition-colors" href={siteInfo.facebookPage} target="_blank" rel="noreferrer" title="Fanpage Facebook"><span className="material-symbols-outlined text-base">public</span></a>
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 md:hover:bg-earth-orange-bright md:hover:text-white transition-colors" href={siteInfo.facebook} target="_blank" rel="noreferrer" title="Chat qua Messenger"><span className="material-symbols-outlined text-base">chat</span></a>
            <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 md:hover:bg-earth-orange-bright md:hover:text-white transition-colors" href={siteInfo.zalo} target="_blank" rel="noreferrer" title="Chat qua Zalo"><span className="material-symbols-outlined text-base">share</span></a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-white tracking-wide">{isEn ? 'Quick Links' : 'Liên kết'}</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-white/75">
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/">{isEn ? 'Home' : 'Trang chủ'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#cau-chuyen-cua-ant">{isEn ? 'About Us' : 'Về chúng tôi'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#giai-phap-cham-soc">{isEn ? 'Services' : 'Dịch vụ'}</Link></li>
            <li><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#thong-tin-lien-he">{isEn ? 'Contact' : 'Liên hệ'}</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm sm:text-base text-white tracking-wide">{isEn ? 'Support' : 'Hỗ trợ'}</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-white/75">
            <li><a className="md:hover:text-earth-orange-bright transition-colors" href="#">{isEn ? 'FAQ' : 'Câu hỏi thường gặp'}</a></li>
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
            Hotline: <a href={`tel:${siteInfo.hotline.replace(/ /g, "")}`} className="hover:underline">{siteInfo.hotline}</a>
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-4 border-t border-white/10 text-center text-white/60 text-xs">
        © 2026 <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span> - {isEn ? 'Care for family.' : 'Kiến chăm tổ.'} Dedicated to those who cared for us.
      </div>
    </footer>
  );
};

export default Footer;
