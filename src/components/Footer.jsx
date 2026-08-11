import React from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';

const Footer = () => {
  return (
    <footer className="bg-plum-deep text-white border-t border-border-muted pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-gutter-desktop grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 cursor-pointer md:hover:opacity-90 transition-opacity">
                <img alt="247care footer logo" className="h-20 w-auto object-contain" src="/images/footer-logo.png" />
            </Link>
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
            <li className=""><Link className="md:hover:text-earth-orange-bright transition-colors" to="/">Trang chủ</Link></li>
            <li className=""><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#cau-chuyen-cua-ant">Về chúng tôi</Link></li>
            <li className=""><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#giai-phap-cham-soc">Dịch vụ</Link></li>
            <li className=""><Link className="md:hover:text-earth-orange-bright transition-colors" to="/#thong-tin-lien-he">Liên hệ</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-headline-md">Hỗ trợ</h4>
          <ul className="space-y-4 opacity-70">
            <li className=""><a className="md:hover:text-earth-orange-bright transition-colors" href="#">Câu hỏi thường gặp</a></li>
            <li className=""><Link className="md:hover:text-earth-orange-bright transition-colors" to="/privacy-policy">Chính sách bảo mật</Link></li>
            <li className=""><Link className="md:hover:text-earth-orange-bright transition-colors" to="/terms-of-use">Điều khoản sử dụng</Link></li>
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
  );
};

export default Footer;
