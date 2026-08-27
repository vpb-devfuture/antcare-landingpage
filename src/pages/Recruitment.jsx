import React, { useEffect, useState } from 'react';
import { useAppTranslation } from '../utils/i18nHelper';
import { trackEvent } from '../utils/analytics';

const Recruitment = () => {
  const { tr } = useAppTranslation();
  const [partnerForm, setPartnerForm] = useState({ name: '', phone: '', location: '', note: '' });
  const [partnerError, setPartnerError] = useState('');
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    if (!partnerForm.name.trim() || !partnerForm.phone.trim() || !partnerForm.location.trim()) {
      setPartnerError(tr('Vui lòng điền đủ Họ và tên, Số điện thoại và Nơi ở nhé ạ', 'Please fill in your Name, Phone and Location'));
      setPartnerSubmitted(false);
      return;
    }
    setPartnerError('');
    setPartnerSubmitted(true);

    trackEvent('recruitment_lead', {
      form_name: 'recruitment_partner'
    });

    try {
      const formData = new FormData(e.target);
      await fetch('https://formsubmit.co/ajax/support@antcare.vn', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
    } catch (err) {
      console.error('FormSubmit recruitment submit error:', err);
    }

    setTimeout(() => {
      setPartnerForm({ name: '', phone: '', location: '', note: '' });
      setPartnerSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen py-6 md:py-10 scroll-mt-28" id="danh-cho-doi-tac-tuyen-dung">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Page Title Header */}
        <div className="text-center mb-7 md:mb-9">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-earth-orange-bright/10 text-earth-orange-bright font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[16px]">handshake</span>
            {tr("DÀNH CHO ĐỐI TÁC & TUYỂN DỤNG", "FOR PARTNERS & CAREERS")}
          </div>
          <h1 className="text-xl sm:text-2xl md:text-[26px] font-bold text-plum-deep mb-2 leading-snug">
            {tr("Tuyển Dụng & Hợp Tác Cùng", "Careers & Partnership With")} <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary-container">CARE</span> – Kiến chăm tổ
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-4xl mx-auto leading-relaxed font-medium">
            {tr("Hãy hợp tác cùng chúng tôi vì một tiêu chuẩn chăm sóc gia đình Việt hiện đại, uy tín và tận tâm.", "Partner with us to build a modern, prestigious, and devoted standard of family care.")}
          </p>
        </div>

        {/* SECTION 1: Connect & Partner Form */}
        <section className="bg-surface-lavender/30 rounded-3xl border border-surface-lavender p-5 sm:p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center">
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-primary font-bold text-base md:text-xl mb-1">
                {tr("Kết nối cùng chúng tôi", "Connect With Us")} <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary-container">CARE</span>
              </h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 bg-earth-orange-bright text-white">
                <span className="material-symbols-outlined text-[14px]">handshake</span> {tr("DÀNH CHO ĐỐI TÁC & TUYỂN DỤNG", "FOR PARTNERS & CAREERS")}
              </div>
              <h2 className="font-bold text-plum-deep leading-tight text-lg md:text-xl lg:text-2xl">
                Hãy hợp tác cùng chúng tôi vì một tiêu chuẩn chăm sóc gia đình Việt hiện đại, uy tín
              </h2>
              <p className="text-xs sm:text-sm text-plum-deep font-semibold mt-1.5">
                {tr("Dịch vụ của chúng tôi phù hợp cho nhiều đối tượng đang đi học hoặc đã đi làm gồm:", "Our opportunities are suitable for students, graduates, and working professionals including:")}
              </p>
              <ul className="space-y-1.5 mt-1.5 text-xs sm:text-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-[16px]">check_circle</span> 
                  {tr("Cá nhân muốn tìm kiếm 1 công việc có thời gian linh hoạt", "Individuals seeking flexible part-time work")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-[16px]">check_circle</span> 
                  Cá nhân được đào tạo y tế muốn tìm kiếm 1 công việc có thời gian linh hoạt
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-earth-orange-bright text-[16px]">check_circle</span> 
                  Tổ chức y tế cần mở rộng mạng lưới khách hàng của mình
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-3">
                Hãy liên hệ với chúng tôi qua email: <a className="text-earth-orange-bright font-bold hover:underline" href="mailto:tuyendung@antcare.vn">tuyendung@antcare.vn</a>
              </p>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Khi hợp tác cùng chúng tôi, bạn sẽ <a className="text-primary font-bold hover:text-earth-orange-bright transition-colors decoration-2 underline" href="#quyen-loi-doi-tac">xem chi tiết</a>
              </p>
            </div>

            {/* Registration Form */}
            <div className="md:w-1/2 w-full bg-white p-5 sm:p-7 rounded-2xl border border-surface-lavender shadow-sm">
              <iframe name="antcare_recruitment_iframe" id="antcare_recruitment_iframe" style={{ display: 'none' }}></iframe>
              <form 
                action="https://formsubmit.co/support@antcare.vn" 
                method="POST" 
                target="antcare_recruitment_iframe"
                onSubmit={handlePartnerSubmit} 
                className="space-y-3.5"
              >
                <input type="hidden" name="_subject" value={`🔔 [ANTCARE - Kiến chăm tổ] Đăng ký Tuyển dụng & Hợp tác: ${partnerForm.name} - ${partnerForm.phone}`} />
                <input type="hidden" name="Loại yêu cầu" value="Tuyển dụng" />
                <input type="hidden" name="Họ và tên hoặc Tên tổ chức / Trung tâm" value={partnerForm.name} />
                <input type="hidden" name="Số điện thoại" value={partnerForm.phone} />
                <input type="hidden" name="Nơi ở hiện tại" value={partnerForm.location} />
                <input type="hidden" name="Kinh nghiệm / Ghi chú" value={partnerForm.note || 'Không có'} />
                <input type="hidden" name="Thời gian đăng ký" value={new Date().toLocaleString('vi-VN')} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">{tr("Họ và tên hoặc Tên tổ chức/ trung tâm", "Full name or Organization name")}</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">person</span>
                    <input 
                      className="w-full bg-slate-50 border border-surface-lavender rounded-xl pl-10 pr-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all text-xs sm:text-sm text-plum-deep" 
                      placeholder={tr("Nhập họ và tên của bạn", "Enter your full name")} 
                      type="text" 
                      value={partnerForm.name}
                      onChange={(e) => {
                        setPartnerForm({ ...partnerForm, name: e.target.value });
                        if (partnerError) setPartnerError('');
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">{tr("Số điện thoại", "Phone number")}</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">call</span>
                    <input 
                      className="w-full bg-slate-50 border border-surface-lavender rounded-xl pl-10 pr-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all text-xs sm:text-sm text-plum-deep" 
                      placeholder="0xxx xxx xxx" 
                      type="tel" 
                      value={partnerForm.phone}
                      onChange={(e) => {
                        setPartnerForm({ ...partnerForm, phone: e.target.value });
                        if (partnerError) setPartnerError('');
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">{tr("Nơi ở hiện tại của bạn", "Current location")}</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">location_on</span>
                    <input 
                      className="w-full bg-slate-50 border border-surface-lavender rounded-xl pl-10 pr-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all text-xs sm:text-sm text-plum-deep" 
                      placeholder={tr("Nhập địa chỉ hoặc khu vực", "Enter address or district")} 
                      type="text" 
                      value={partnerForm.location}
                      onChange={(e) => {
                        setPartnerForm({ ...partnerForm, location: e.target.value });
                        if (partnerError) setPartnerError('');
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-plum-deep mb-1">{tr("Kinh nghiệm/Ghi chú", "Experience / Notes")}</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60 text-base">edit_note</span>
                    <input 
                      className="w-full bg-slate-50 border border-surface-lavender rounded-xl pl-10 pr-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-primary focus:bg-white transition-all text-xs sm:text-sm text-plum-deep" 
                      placeholder={tr("Chia sẻ thêm về kinh nghiệm của bạn", "Share your experience or notes")} 
                      type="text" 
                      value={partnerForm.note}
                      onChange={(e) => {
                        setPartnerForm({ ...partnerForm, note: e.target.value });
                        if (partnerError) setPartnerError('');
                      }}
                    />
                  </div>
                </div>

                {partnerError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold p-2.5 rounded-xl flex items-center gap-2 animate-pulse shadow-sm">
                    <span className="material-symbols-outlined text-sm shrink-0">error</span>
                    <span>{partnerError}</span>
                  </div>
                )}

                {partnerSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm flex items-center gap-2 animate-fadeIn shadow-sm font-medium">
                    <span className="material-symbols-outlined text-emerald-600 text-base shrink-0">check_circle</span>
                    <span>{tr("Cảm ơn bạn! ANTCARE - Kiến chăm tổ đã ghi nhận và sẽ liên hệ lại trong vòng 24-48 giờ làm việc.", "Thank you! ANTCARE has recorded your information and will contact you within 24-48 business hours.")}</span>
                  </div>
                )}

                <button className="bg-earth-orange-bright text-white py-2.5 px-6 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md w-full cursor-pointer" type="submit">
                  {tr("Gửi thông tin hợp tác", "Submit Partnership Request")}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* SECTION 2: Partner Benefits & 5-Step Process */}
        <section className="py-6 md:py-10 bg-white scroll-mt-24" id="hop-tac-cung-ant">
          <div className="text-center mb-7 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-2" id="quyen-loi-doi-tac">
              <span className="material-symbols-outlined text-[16px]">partnership</span>
              QUYỀN LỢI &amp; QUY TRÌNH
            </div>
            <h2 className="font-display-lg text-plum-deep text-xl md:text-2xl lg:text-3xl font-bold mb-1.5">
              Hợp tác cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary-container">CARE</span> - Kiến chăm tổ
            </h2>
            <div className="w-14 h-1 bg-earth-orange-bright rounded-full mb-2.5"></div>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl">
              Quyền lợi vượt trội và quy trình làm việc chuyên nghiệp chuẩn quốc tế dành cho đối tác.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Partner Benefits */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-2xl text-primary p-2 bg-primary/10 rounded-xl">workspace_premium</span>
                <h3 className="text-lg md:text-xl font-bold text-plum-deep">Quyền lợi của đối tác</h3>
              </div>
              <div className="grid gap-4">
                <div className="group bg-surface-mist p-4 sm:p-5 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">devices</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm md:text-base font-bold text-plum-deep">Nền tảng minh bạch</p>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Được tham gia vào 1 nền tảng điện tử minh bạch, hiện đại, nơi kết nối nhu cầu của người cần dịch vụ và người cung cấp dịch vụ.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-surface-mist p-4 sm:p-5 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">event_available</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm md:text-base font-bold text-plum-deep">Linh hoạt thời gian</p>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Đa dạng lựa chọn việc làm, linh hoạt thời gian làm việc phù hợp với lịch trình cá nhân.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-surface-mist p-4 sm:p-5 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">trending_up</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm md:text-base font-bold text-plum-deep">Tăng thêm thu nhập</p>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Cơ hội tăng thêm thu nhập và mở rộng mạng lưới khách hàng tiềm năng trong lĩnh vực chăm sóc sức khỏe.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-surface-mist p-4 sm:p-5 rounded-2xl border border-surface-lavender hover:shadow-lg hover:bg-white transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">model_training</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm md:text-base font-bold text-plum-deep">Đào tạo chuyên sâu</p>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Được đào tạo và hỗ trợ chuyên môn liên tục trong suốt quá trình hợp tác cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary-container">CARE</span> - Kiến chăm tổ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 5-Step Process */}
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
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-plum-deep mb-0.5">Liên hệ / Gửi CV</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Gửi thông tin ứng tuyển hoặc liên hệ trực tiếp qua hotline/email của chúng tôi.</p>
                  </div>
                </div>

                <div className="relative flex gap-6 pb-6 group">
                  <div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">2</div>
                  <div className="pt-0.5">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-plum-deep mb-0.5">Kiểm tra thông tin</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span><span className="text-primary-container">CARE</span> - Kiến chăm tổ sẽ tiếp nhận, kiểm tra hồ sơ và liên hệ lại với bạn trong vòng 48h làm việc.</p>
                  </div>
                </div>

                <div className="relative flex gap-6 pb-6 group">
                  <div className="relative z-10 w-9 h-9 rounded-full bg-earth-orange-bright text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">3</div>
                  <div className="pt-0.5">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-plum-deep mb-0.5">Trao đổi &amp; Thống nhất</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Hai bên cùng thảo luận chi tiết về cơ chế, quyền lợi và các điều khoản hợp tác cụ thể.</p>
                  </div>
                </div>

                <div className="relative flex gap-6 pb-6 group">
                  <div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">4</div>
                  <div className="pt-0.5">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-plum-deep mb-0.5">Ký kết hợp đồng</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Chính thức ký kết hợp đồng cộng tác viên hoặc thỏa thuận hợp tác đối tác chiến lược.</p>
                  </div>
                </div>

                <div className="relative flex gap-6 group">
                  <div className="relative z-10 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform shrink-0">5</div>
                  <div className="pt-0.5">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-plum-deep mb-0.5">Đào tạo &amp; Tiếp nhận</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Tham gia khóa đào tạo tiêu chuẩn và bắt đầu nhận các yêu cầu dịch vụ từ hệ thống.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Recruitment;
