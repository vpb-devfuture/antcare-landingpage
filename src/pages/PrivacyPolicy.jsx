import React, { useEffect } from 'react';
import { useAppTranslation } from '../utils/i18nHelper';

const PrivacyPolicy = () => {
  const { tr } = useAppTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-6 md:py-10 bg-surface-mist min-h-screen">
      {/* Header Banner */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 mb-6">
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-surface-lavender shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">{tr("Chính sách bảo mật", "Privacy Policy")}</h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {tr("Vui lòng đọc kỹ chính sách này để hiểu rõ cách", "Please read this policy carefully to understand how")} <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care {tr("thu thập, sử dụng và bảo vệ thông tin của bạn.", "collects, uses, and protects your information.")}
            </p>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform -rotate-12">
            <span className="material-symbols-outlined text-[140px] text-plum-deep">shield_person</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-surface-lavender">
            <h3 className="text-xs font-bold text-plum-deep mb-3 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="material-symbols-outlined text-base text-primary">toc</span> {tr("Mục lục", "Table of Contents")}
            </h3>
            <nav className="space-y-0.5 text-xs">
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#cam-ket">{tr("1. Cam kết bảo mật", "1. Privacy Commitment")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#dinh-nghia">{tr("2. Thông tin cá nhân", "2. Personal Data")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#thu-thap">{tr("3. Thu thập & Mục đích", "3. Collection & Purpose")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#su-dung">{tr("4. Cách sử dụng", "4. How We Use Data")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#tiet-lo">{tr("5. Tiết lộ bên thứ ba", "5. Third-Party Disclosure")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#luu-tru">{tr("6. Lưu trữ & Bảo mật", "6. Storage & Security")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#quyen-han">{tr("7. Quyền của Người dùng", "7. User Rights")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#cookies">{tr("8. Cookies", "8. Cookies")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#lien-he">{tr("9. Liên hệ", "9. Contact Us")}</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#thay-doi">{tr("10. Thay đổi chính sách", "10. Policy Changes")}</a>
            </nav>
          </div>
        </aside>

        {/* Content Body */}
        <div className="lg:col-span-9 bg-white p-5 sm:p-7 md:p-8 rounded-xl shadow-sm border border-surface-lavender space-y-7">
          <section className="scroll-mt-24" id="cam-ket">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">1. Cam kết về bảo mật thông tin</h2>
            <div className="text-xs sm:text-sm text-on-surface-variant space-y-2 leading-relaxed">
              <p>
                Tại <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care, chúng tôi hiểu rằng sự riêng tư của bạn là vô giá. Chúng tôi cam kết tuyệt đối trong việc bảo vệ dữ liệu cá nhân của người dùng, tuân thủ nghiêm ngặt các quy định của <span className="text-plum-deep font-bold">Pháp luật Việt Nam</span> về an toàn thông tin mạng và bảo vệ dữ liệu cá nhân.
              </p>
              <p>
                Mỗi quy trình xử lý dữ liệu tại <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care đều được thiết kế để đảm bảo tính minh bạch, an toàn và tôn trọng quyền sở hữu thông tin của bạn.
              </p>
            </div>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="dinh-nghia">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">{tr("2. Thông tin cá nhân", "2. Personal Data")} là gì?</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Thông tin cá nhân được hiểu là bất kỳ dữ liệu nào có thể được sử dụng để xác định danh tính một cá nhân cụ thể, bao gồm nhưng không giới hạn ở tên, địa chỉ, số điện thoại, địa chỉ email, thông tin y tế, và các dữ liệu định danh sinh trắc học hoặc kỹ thuật số khác.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="thu-thap">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">
              3. Thông tin <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span>care thu thập và mục đích
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4">
              <div className="p-4 bg-surface-mist rounded-xl border border-surface-lavender border-b-3 border-b-earth-orange-bright">
                <span className="material-symbols-outlined text-earth-orange-bright text-xl mb-2">group</span>
                <h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-1.5">Tất cả Người dùng</h4>
                <ul className="text-xs text-on-surface-variant space-y-1">
                  <li>• Dữ liệu truy cập (IP, trình duyệt)</li>
                  <li>• Tương tác trên ứng dụng</li>
                  <li>• Phản hồi dịch vụ</li>
                </ul>
              </div>

              <div className="p-4 bg-surface-mist rounded-xl border border-surface-lavender border-b-3 border-b-primary">
                <span className="material-symbols-outlined text-primary text-xl mb-2">person_search</span>
                <h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-1.5">Người yêu cầu dịch vụ</h4>
                <ul className="text-xs text-on-surface-variant space-y-1">
                  <li>• Thông tin liên hệ &amp; Địa chỉ</li>
                  <li>• Hồ sơ bệnh lý cơ bản</li>
                  <li>• Thông tin thanh toán</li>
                </ul>
              </div>

              <div className="p-4 bg-surface-mist rounded-xl border border-surface-lavender border-b-3 border-b-plum-light">
                <span className="material-symbols-outlined text-plum-light text-xl mb-2">medical_services</span>
                <h4 className="text-xs sm:text-sm font-bold text-plum-deep mb-1.5">Người chăm sóc</h4>
                <ul className="text-xs text-on-surface-variant space-y-1">
                  <li>• Bằng cấp chuyên môn</li>
                  <li>• Căn cước công dân</li>
                  <li>• Lịch sử làm việc</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="su-dung">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">{tr("4. Cách sử dụng", "4. How We Use Data")} thông tin</h2>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
                <span>Để cung cấp và duy trì các dịch vụ chăm sóc sức khỏe tại nhà chất lượng cao nhất.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
                <span>Thông báo cho bạn về các thay đổi trong dịch vụ hoặc các chương trình ưu đãi đặc biệt.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
                <span>Hỗ trợ khách hàng và giải quyết các vấn đề phát sinh trong quá trình sử dụng dịch vụ.</span>
              </li>
            </ul>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="tiet-lo">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">5. Tiết lộ thông tin cho bên thứ ba</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-3">Chúng tôi chỉ tiết lộ thông tin của bạn cho các bên thứ ba trong các trường hợp sau:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-surface-mist rounded-lg flex items-center gap-2.5 border border-surface-lavender/50">
                <span className="material-symbols-outlined text-primary text-base">gavel</span>
                <span className="font-semibold text-plum-deep">Yêu cầu từ cơ quan pháp luật</span>
              </div>
              <div className="p-3.5 bg-surface-mist rounded-lg flex items-center gap-2.5 border border-surface-lavender/50">
                <span className="material-symbols-outlined text-primary text-base">handshake</span>
                <span className="font-semibold text-plum-deep">Đối tác vận chuyển &amp; Thanh toán</span>
              </div>
              <div className="p-3.5 bg-surface-mist rounded-lg flex items-center gap-2.5 border border-surface-lavender/50">
                <span className="material-symbols-outlined text-primary text-base">health_and_safety</span>
                <span className="font-semibold text-plum-deep">Trường hợp cấp cứu y tế</span>
              </div>
              <div className="p-3.5 bg-surface-mist rounded-lg flex items-center gap-2.5 border border-surface-lavender/50">
                <span className="material-symbols-outlined text-primary text-base">verified</span>
                <span className="font-semibold text-plum-deep">Khi có sự đồng ý của bạn</span>
              </div>
            </div>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="luu-tru">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">6. Lưu trữ và bảo mật</h2>
            <div className="bg-plum-deep text-white p-5 sm:p-6 rounded-xl relative overflow-hidden shadow-sm">
              <div className="relative z-10 text-xs sm:text-sm leading-relaxed">
                <p>Dữ liệu của bạn được lưu trữ trên các máy chủ bảo mật cao cấp. Chúng tôi áp dụng quy trình quản lý thông tin nghiêm ngặt và mã hóa dữ liệu theo chuẩn an toàn quốc tế.</p>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-15 pointer-events-none">
                <span className="material-symbols-outlined text-[130px] text-white">enhanced_encryption</span>
              </div>
            </div>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="quyen-han">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">{tr("7. Quyền của Người dùng", "7. User Rights")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between p-3 border border-surface-lavender rounded-lg bg-surface-mist/40 hover:bg-surface-mist transition-colors group">
                <span className="font-semibold text-plum-deep">Quyền được thông tin và truy cập</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-surface-lavender rounded-lg bg-surface-mist/40 hover:bg-surface-mist transition-colors group">
                <span className="font-semibold text-plum-deep">Quyền chỉnh sửa hoặc xóa dữ liệu</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-surface-lavender rounded-lg bg-surface-mist/40 hover:bg-surface-mist transition-colors group">
                <span className="font-semibold text-plum-deep">Quyền hạn chế xử lý dữ liệu</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-surface-lavender rounded-lg bg-surface-mist/40 hover:bg-surface-mist transition-colors group">
                <span className="font-semibold text-plum-deep">Quyền rút lại sự đồng ý</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </div>
            </div>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="cookies">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">8. Cookie và công nghệ theo dõi</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Chúng tôi sử dụng Cookie để cá nhân hóa trải nghiệm người dùng và phân tích lưu lượng truy cập web. Bạn có thể tùy chỉnh cài đặt Cookie trong trình duyệt của mình, tuy nhiên một số tính năng của dịch vụ có thể không hoạt động tối ưu nếu Cookie bị vô hiệu hóa.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="lien-he">
            <div className="p-5 bg-surface-mist rounded-xl border border-dashed border-primary">
              <h2 className="text-base sm:text-lg font-bold text-plum-deep mb-2">{tr("9. Liên hệ", "9. Contact Us")}</h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-3">
                Nếu bạn có bất kỳ câu hỏi hoặc khiếu nại nào liên quan đến chính sách này, vui lòng liên hệ Bộ phận Bảo vệ Dữ liệu của chúng tôi:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-xs sm:text-sm font-bold text-plum-deep">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-earth-orange-bright text-base">mail</span> support@antcare.vn</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-earth-orange-bright text-base">call</span> 0969 032 360</span>
              </div>
            </div>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="thay-doi">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-plum-deep mb-3">10. Thay đổi Chính sách</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Chính sách này có hiệu lực từ ngày 01/08/2026. Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi thay đổi quan trọng sẽ được thông báo trực tiếp qua email hoặc ứng dụng.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
