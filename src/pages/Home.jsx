import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';
import newsData from '../data/news.json';
import newsEnData from '../data/news.en.json';
import { useAppTranslation } from '../utils/i18nHelper';

const Home = () => {
  const { isEn, tr } = useAppTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: '',
    size: ''
  });
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = isEn
      ? "ANTCARE – Period Underwear & Leakproof Incontinence Panties"
      : "ANTCARE – Quần kinh nguyệt & quần chống són tiểu";
    const desc = isEn
      ? "ANTCARE – Vietnamese functional underwear: washable, leakproof period panties and light incontinence underwear. Soft, breathable, reusable. Register for launch updates."
      : "ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt.";
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://antcare.vn/";
  }, [isEn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setFormError(isEn ? 'Please enter your phone number' : 'Vui lòng nhập số điện thoại');
      return;
    }
    if (!formData.interest) {
      setFormError(isEn ? 'Please select a product of interest' : 'Vui lòng chọn sản phẩm bạn quan tâm');
      return;
    }
    if (!formData.size) {
      setFormError(isEn ? 'Please select your size' : 'Vui lòng chọn kích cỡ thường mặc');
      return;
    }

    setFormError('');
    setSubmitting(true);

    try {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Preorder_Functional_Underwear',
          interest: formData.interest,
          size: formData.size
        });
      }
      trackEvent('preorder_submitted', { interest: formData.interest, size: formData.size });

      if (siteInfo.googleSheetConsultUrl) {
        await fetch(siteInfo.googleSheetConsultUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: formData.name,
            phone: formData.phone,
            interest: formData.interest,
            size: formData.size,
            source: isEn ? 'Homepage_Preorder_Section_EN' : 'Homepage_Preorder_Section'
          })
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Yêu cầu 9: Hiển thị ít nhất 1–2 bài về són tiểu khi đã đăng (kết hợp kinh nguyệt & són tiểu)
  const activeNewsSource = isEn ? newsEnData : newsData;
  const allArticles = activeNewsSource.list || [];
  
  // Lấy các bài són tiểu (ưu tiên bài ghim hoặc bài nhóm son-tieu)
  const incontinenceArticles = allArticles.filter(n => n.group === 'son-tieu' || n.category === 'Tiểu són' || n.category === 'Són tiểu' || n.id === 217);
  // Lấy các bài kinh nguyệt
  const periodArticles = allArticles.filter(n => n.group === 'kinh-nguyet' && n.id !== 217);

  // Ghép 4 bài kinh nguyệt + 2 bài són tiểu
  const handbookArticles = [
    ...periodArticles.slice(0, 4),
    ...incontinenceArticles.slice(0, 2)
  ].slice(0, 6);

  return (
    <div className="bg-[#FAF8F5] text-[#1C1917] min-h-screen">
      {/* 1. HERO SECTION & QUICK ANSWER */}
      <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">
        {/* Full-bleed / Wide Hero Banner at the very top */}
        <div className="max-w-[1360px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 pt-1 pb-2 md:pt-2 md:pb-4">
          <a
            href="#dang-ky"
            className="block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <img
              src={isEn ? "/images/products/hero-absorbent-underwear-en.jpg" : "/images/products/hero-absorbent-underwear-vi.jpg?v=layers-3d-v2"}
              alt={tr(
                "ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu",
                "ANTCARE – Functional Underwear for Women: Period Panties & Incontinence Underwear"
              )}
              className="w-full h-auto block select-none group-hover:scale-[1.002] transition-transform duration-300"
              width={2048}
              height={940}
              loading="eager"
            />
          </a>
        </div>

        {/* H1 & Brand Statement (Khối trả lời nhanh & nút hành động) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-3">
            <span>•</span> {tr('ĐỒ LÓT CHỨC NĂNG CHO PHỤ NỮ', 'FUNCTIONAL UNDERWEAR FOR WOMEN')}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] leading-tight">
            ANTCARE – {tr('Đồ lót chức năng cho phụ nữ:', 'Functional Underwear for Women:')}{' '}
            <span className="text-[#6633B4]">{tr('quần kinh nguyệt', 'period underwear')}</span> {tr('và', 'and')}{' '}
            <span className="text-[#FD711A]">{tr('quần chống són tiểu', 'incontinence panties')}</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#78716C] mt-2 mb-2 font-medium">
            {tr(
              'Mặc êm ái như đồ lót bình thường • Lõi thấm nhiều lớp chống tràn • Giặt và tái sử dụng bền bỉ',
              'Feels like regular underwear • Multi-layer leakproof absorbent core • Washable and sustainably reusable'
            )}
          </p>

          {/* Quick Answer Callout */}
          <div className="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl my-6 text-left shadow-xs">
            <p className="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
              <strong className="text-[#6633B4] font-bold">
                {tr(
                  'ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.',
                  'ANTCARE is a Vietnamese functional underwear brand featuring washable, reusable period underwear and light incontinence panties with built-in absorbent cores.'
                )}
              </strong>{' '}
              {tr(
                'ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.',
                'Originating from dedicated eldercare and healthcare services in Hanoi, ANTCARE witnessed how single-use pads, adult diapers, and liners often cause stuffiness, friction, and skin chafing. We engineered underwear that feels just like regular underwear while effectively locking in menstrual flow or mild bladder leaks.'
              )}
            </p>
          </div>

          {/* Action Buttons & Notice */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#dang-ky"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FD711A] text-white font-bold text-base shadow-md hover:bg-[#e05e0e] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{tr('Nhận thông tin ra mắt', 'Get Launch Updates')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href={`https://zalo.me/${siteInfo.hotline.replace(/ /g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-[#6633B4]/30 text-[#6633B4] font-bold text-base hover:bg-[#6633B4]/5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#6633B4]">chat</span>
              <span>{tr('Tư vấn Zalo 0969 032 360', 'Zalo Consultation: 0969 032 360')}</span>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-[#78716C] italic mt-3">
            {tr(
              '* Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.',
              '* Products are in final development. Fabric specs, certifications, and pricing will be announced at launch.'
            )}
          </p>
        </div>

        {/* Yêu cầu 1: Đổi 4 ô tính năng dưới khối mở đầu thành tiêu đề "Định hướng sản phẩm" */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 pt-8 border-t border-[#E8DFD5]">
          <div className="text-center mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#6633B4]">
              {tr('Định hướng sản phẩm', 'Product Focus & Standards')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6633B4] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">layers</span>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">{tr('Lõi thấm nhiều lớp', 'Multi-Layer Core')}</h3>
                <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">{tr('Thiết kế cho máu kinh và nước tiểu rỉ nhẹ', 'Designed for periods and mild bladder leaks')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FD711A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">spa</span>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">{tr('Mềm cho da', 'Soft on Skin')}</h3>
                <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">{tr('Không keo dán, không cánh băng', 'No adhesives, wing-free design')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">autorenew</span>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">{tr('Giặt và dùng lại', 'Washable & Reusable')}</h3>
                <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">{tr('Tiết kiệm, giảm rác thải', 'Economical & waste reducing')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">shield_check</span>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">{tr('Hướng tới không thêm PFAS', 'PFAS-Free Commitment')}</h3>
                <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">{tr('Chỉ chọn nhà sản xuất chứng minh được', 'Only partnering with verified mills')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VẤN ĐỀ (id="van-de") */}
      <section id="van-de" className="py-14 sm:py-20 bg-white border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">{tr('Nhu cầu thực tế', 'Everyday Reality')}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              {tr(
                'Vì sao phụ nữ và người cao tuổi cần một lựa chọn khác tã, bỉm, băng vệ sinh dùng một lần?',
                'Why do women and seniors need an alternative to single-use pads and adult diapers?'
              )}
            </h2>

            {/* Yêu cầu 6: Thêm 1 câu có nguồn vào mục Vì sao... */}
            <div className="mt-4 p-4 rounded-xl bg-[#FFF8F3] border border-[#FD711A]/20 inline-block text-left text-xs sm:text-sm text-[#8A3B00]">
              <span className="font-bold">📊 {tr('Thống kê:', 'Statistics:')}</span>{' '}
              {tr(
                'Gần 4 trong 10 phụ nữ gặp tình trạng mất kiểm soát tiểu tiện hoặc đại tiện (',
                'Nearly 4 in 10 women experience incontinence ('
              )}
              <a
                href="https://www.continence.org.au/about-incontinence/what-is-incontinence/statistics-on-incontinence/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6633B4] font-semibold underline hover:text-[#FD711A]"
              >
                Continence Health Australia, 2024
              </a>
              {tr(').', ').')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6633B4] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">{tr('Bí và ẩm', 'Stuffiness & Trapped Moisture')}</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Sản phẩm dùng một lần thường có màng đáy nilon nhân tạo giữ ẩm sát da khi dùng lâu, đặc biệt trong khí hậu nhiệt đới nóng ẩm của Việt Nam.',
                  'Single-use products often feature synthetic plastic backing that traps sweat and humidity close to the skin, especially in humid tropical climates.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FD711A] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">healing</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">{tr('Cọ xát, hăm, kích ứng', 'Chafing & Skin Irritation')}</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Mép băng gập, cánh băng, keo dán dính vào da và các hóa chất tạo mùi dễ làm cọ xát gây đỏ rát, hăm ngứa vùng bẹn nhạy cảm.',
                  'Folded wings, adhesive tape pulling on skin, and artificial fragrance additives easily trigger chafing, redness, and itching.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6633B4] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">sync_problem</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">{tr('Xô lệch và tràn', 'Shifting & Side Leaks')}</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Băng vệ sinh dán rất dễ bị xô lệch khi vận động nhiều, tập thể thao hoặc khi trở mình ngủ đêm khiến dịch tràn ra ga giường hoặc trang phục.',
                  'Adhesive pads frequently shift during high activity, workouts, or tossing and turning at night, causing messy leaks on clothes and sheets.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FD711A] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">{tr('Ngại và bất tiện', 'Embarrassment & Inconvenience')}</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Người bị són tiểu nhẹ không muốn mặc bỉm người lớn dày cộm; phụ nữ đi làm hay học sinh luôn lo lắng canh giờ thay băng và tìm nơi vứt.',
                  'Those with mild bladder leaks dread bulky adult diapers; working women and students constantly worry about frequent pad changes and discreet disposal.'
                )}
              </p>
            </div>

            {/* Yêu cầu 2: Đổi "mất đến 500 năm để phân hủy" -> "cần thời gian rất dài để phân hủy" */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">{tr('Nhiều rác thải khó phân hủy', 'Massive Non-Biodegradable Waste')}</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Mỗi phụ nữ dùng hàng nghìn miếng băng vệ sinh và tampon trong đời, cần thời gian rất dài để phân hủy tại các bãi chôn lấp. Chuyển sang đồ lót giặt dùng lại là bước thay đổi thiết thực cho môi trường.',
                  'Every woman uses thousands of disposable pads and tampons in her lifetime, taking an extremely long time to decompose in landfills. Switching to washable underwear is a tangible step toward environmental sustainability.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUẦN KINH NGUYỆT (id="quan-kinh-nguyet") */}
      <section id="quan-kinh-nguyet" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5] scroll-mt-16 relative">
        <div id="quan-lot-tham-hut" className="absolute -top-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">{tr('Sản phẩm chủ lực', 'Featured Signature')}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] leading-tight">
                {tr(
                  'Quần kinh nguyệt ANTCARE – mặc như quần lót, thấm như băng vệ sinh',
                  'ANTCARE Period Underwear – Wears like panties, absorbs like pads'
                )}
              </h2>
              {/* Yêu cầu 5: Thêm từ khóa tự nhiên: "Quần kinh nguyệt (còn gọi là quần lót kinh nguyệt, quần nguyệt san)..." */}
              <p className="text-base text-[#44403C] leading-relaxed">
                {tr(
                  'Quần kinh nguyệt (còn gọi là quần lót kinh nguyệt, quần nguyệt san) có phần đáy nhiều lớp: lớp tiếp xúc da mềm dịu, lõi thấm giữ máu kinh, lớp chống thấm giúp không thấm ra quần ngoài. Bạn mặc như quần lót bình thường, không cần dán keo hay đặt bất kỳ dụng cụ nào vào cơ thể.',
                  'Period underwear (also referred to as menstrual panties or leakproof period underwear) features a multi-layer gusset: an ultra-soft skin-contact layer, a moisture-locking absorbent core, and a breathable waterproof barrier. Wear it just like everyday panties—no adhesives, no internal insertion.'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6633B4] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]">
                    <strong>{tr('Dùng cho:', 'Usage:')}</strong>{' '}
                    {tr(
                      'Ngày ra ít đến trung bình có thể dùng một mình; ngày ra nhiều có thể dùng làm lớp dự phòng êm ái cùng cốc nguyệt san hoặc băng vệ sinh; ban đêm thoải mái xoay người.',
                      'Can be worn alone on light-to-medium flow days; serves as dependable leak-proof backup on heavy flow days with cups or pads; sleep freely in any position.'
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6633B4] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]">
                    <strong>{tr('Phù hợp:', 'Ideal for:')}</strong>{' '}
                    {tr(
                      'Học sinh tuổi dậy thì, phụ nữ đi làm văn phòng, phụ nữ hay tràn ban đêm, người có làn da nhạy cảm với keo và mép băng, phụ nữ tiền mãn kinh chu kỳ thất thường.',
                      'Teenagers entering puberty, working women, overnight side-sleepers, sensitive skin prone to adhesive allergies, and perimenopausal women with irregular cycles.'
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6633B4] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]">
                    <strong>{tr('Dáng chủ lực:', 'Featured Cut:')}</strong>{' '}
                    {tr(
                      'Boy short cạp cao ôm đùi mềm mại, giữ vùng thấm ổn định không xô lệch khi ngồi lâu hoặc khi ngủ.',
                      'High-waisted boy-shorts gently hugging hips and thighs, keeping the absorbent zone securely anchored during long sitting hours or sleep.'
                    )}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                  {tr('Liên kết đọc thêm trong Cẩm nang:', 'Related Guides in Handbook:')}
                </span>
                <ul className="space-y-1.5 text-sm text-[#6633B4]">
                  <li>
                    <Link to="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> {tr('Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn', 'What to wear during your period? Comparing 5 options')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/chon-quan-kinh-nguyet-theo-luong-kinh" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> {tr('Cách chọn quần kinh nguyệt theo lượng kinh: nhẹ, trung bình, nhiều', 'How to choose period underwear by flow: light, medium, heavy')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/quan-kinh-nguyet-tham-duoc-bao-nhieu-ml" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> {tr('Quần kinh nguyệt thấm được bao nhiêu ml máu so với lượng kinh thực tế?', 'How many ml of blood can period underwear absorb?')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <img
                src="/images/products/quan-lot-tham-hut.jpg"
                alt={tr(
                  "Quần kinh nguyệt ANTCARE dáng boy short cạp cao màu đen và màu da",
                  "ANTCARE Period Underwear high-waist boy-short in black and nude"
                )}
                className="w-full h-auto rounded-2xl object-cover mb-4"
                width="1024"
                height="1024"
                loading="lazy"
              />
              <div className="text-center">
                <span className="text-xs font-bold text-[#8C6D58] uppercase">
                  {tr('Thiết kế boy short cạp cao', 'High-waist boy-short design')}
                </span>
                {/* Yêu cầu 2: Đổi "Đáy mở rộng kéo dài ra sau lưng" -> "Thiết kế hướng tới vùng thấm dài ra phía sau" */}
                <p className="text-xs text-[#78716C] mt-1">
                  {tr(
                    'Thiết kế hướng tới vùng thấm dài ra phía sau, chống tràn khi nằm nghiêng',
                    'Designed with an extended absorbent zone towards the back, preventing leaks when sleeping on your side'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUẦN CHỐNG SÓN TIỂU (id="quan-chong-son-tieu") */}
      <section id="quan-chong-son-tieu" className="py-14 sm:py-20 bg-white border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 bg-[#FAF8F5] p-6 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <img
                src="/images/products/so-sanh-quan-son-tieu.jpg"
                alt={tr(
                  "Quần chống són tiểu nhẹ ANTCARE kín đáo và thoải mái",
                  "ANTCARE discreet and comfortable light incontinence underwear"
                )}
                className="w-full h-auto rounded-2xl object-cover mb-4"
                loading="lazy"
              />
              <div className="text-center">
                <span className="text-xs font-bold text-[#FD711A] uppercase">
                  {tr('Tự tin trong từng cử động', 'Confidence in Every Move')}
                </span>
                {/* Yêu cầu 2: Làm mềm câu: "Mặc êm ái như đồ lót bình thường, phom dáng tự nhiên, kín đáo" */}
                <p className="text-xs text-[#78716C] mt-1">
                  {tr(
                    'Mặc êm ái như đồ lót bình thường, phom dáng tự nhiên, kín đáo',
                    'Feels just like regular underwear—natural fit, discreet and comfortable'
                  )}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">
                {tr('Giải pháp tự tin', 'Confidence Restored')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] leading-tight">
                {tr(
                  'Quần chống són tiểu ANTCARE – cho những lần rỉ nhẹ khi ho, hắt hơi, vận động',
                  'ANTCARE Incontinence Panties – For unexpected leaks when coughing, sneezing, or moving'
                )}
              </h2>
              {/* Yêu cầu 5: Thêm từ khóa tự nhiên: "Quần chống són tiểu (quần chống rò rỉ, quần són tiểu)..." */}
              <p className="text-base text-[#44403C] leading-relaxed">
                {tr(
                  'Quần chống són tiểu (quần chống rò rỉ, quần són tiểu) dành cho những lần rỉ nhẹ khi ho, hắt hơi, vận động. Có lõi hút nhanh và vùng thấm rộng phía trước, mặc như quần lót thông thường, kín đáo và thoải mái hơn bỉm tã rất nhiều.',
                  'Incontinence underwear (also known as leakproof panties or bladder leak underwear) is designed for mild leaks when coughing, sneezing, or exercising. Features an instant-dry core with extended coverage—discreet and far more comfortable than adult diapers.'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FD711A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]">
                    <strong>{tr('Phù hợp:', 'Suitable for:')}</strong>{' '}
                    {tr(
                      'Són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười to, bê đồ nặng hoặc chạy bộ; người còn tự sinh hoạt tốt và không muốn mặc bỉm người lớn.',
                      'Mild stress incontinence, occasional drops when sneezing, laughing, lifting, or jogging; active individuals wanting freedom without adult diapers.'
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-400 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">!</span>
                  <p className="text-sm text-[#44403C]">
                    <strong>{tr('Chưa phù hợp:', 'Not suitable for:')}</strong>{' '}
                    {tr(
                      'Tiểu không tự chủ mức độ nặng hoặc người bệnh nằm liệt một chỗ (nên dùng sản phẩm tã dán chuyên dụng theo tư vấn y tế).',
                      'Heavy urinary incontinence or bedridden patients (specialized medical adult diapers are recommended).'
                    )}
                  </p>
                </div>
                <div className="bg-[#FFF8F3] border-l-3 border-[#FD711A] p-3.5 rounded-r-xl text-xs text-[#8A3B00] leading-relaxed">
                  * <strong>{tr('Lưu ý y khoa:', 'Medical Disclaimer:')}</strong>{' '}
                  {tr(
                    'Quần thấm hút không điều trị bệnh són tiểu. Hãy đi khám bác sĩ nếu són tiểu mới xuất hiện, tăng dần hoặc kèm theo tiểu buốt, tiểu rắt, có máu.',
                    'Absorbent underwear does not cure bladder conditions. Please consult a doctor if urinary incontinence is sudden, worsening, or accompanied by burning or blood.'
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                  {tr('Liên kết đọc thêm:', 'Related Guides:')}
                </span>
                <ul className="space-y-1.5 text-sm text-[#6633B4]">
                  <li>
                    <Link to="/son-tieu/son-tieu-la-gi" className="hover:underline flex items-center gap-1.5 font-semibold">
                      <span className="text-xs">→</span> {tr('Són tiểu là gì? Nguyên nhân, cách điều chỉnh sinh hoạt và khi nào đi khám', 'What is urinary incontinence? Causes, lifestyle tips & when to see a doctor')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/son-tieu-khi-ho-hat-hoi-cuoi" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> {tr('Són tiểu khi ho, hắt hơi, cười: nguyên nhân và cách cải thiện', 'Leaking when coughing, sneezing, laughing: causes & relief')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> {tr('Quần kinh nguyệt có dùng cho són tiểu được không?', 'Can period panties be used for urinary incontinence?')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SO SÁNH NHANH (id="so-sanh") */}
      {/* Yêu cầu 5: Tiêu đề bảng so sánh: "So sánh nhanh: quần chống rò rỉ và sản phẩm dùng một lần" */}
      <section id="so-sanh" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">
              {tr('Đánh giá trực quan', 'Visual Comparison')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              {tr(
                'So sánh nhanh: quần chống rò rỉ và sản phẩm dùng một lần',
                'Quick Comparison: Leakproof Underwear vs. Single-Use Disposables'
              )}
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E8DFD5] shadow-xs bg-white">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#6633B4] text-white">
                  <th className="py-3.5 px-4 sm:px-6 font-bold">{tr('Tiêu chí', 'Criteria')}</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold bg-[#532696]">{tr('Băng vệ sinh / bỉm dùng một lần', 'Disposable Pads / Diapers')}</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold bg-[#FD711A]">{tr('Quần chống rò rỉ ANTCARE', 'ANTCARE Leakproof Underwear')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD5]">
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Cách dùng', 'How to Use')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Dán vào quần hoặc mặc bỉm, vứt sau mỗi lần', 'Stuck onto panties or worn as diaper, discarded after single use')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Mặc như quần lót, giặt và dùng lại', 'Worn like regular panties, washed and reused')}</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Cọ xát, keo dán', 'Chafing & Adhesives')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Có mép gập, cánh băng, keo dính dễ cọ xát', 'Folded wings, adhesives pulling on skin and chafing')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Không keo, không cánh, viền may mềm', 'Zero adhesives, wing-free, ultra-soft stitched edges')}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Xô lệch khi vận động', 'Shifting During Activity')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Có thể xô lệch khi trở mình hoặc chạy nhảy', 'Easily shifts and bunches during workouts or sleep')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Vùng thấm may liền với quần, ôm sát cơ thể', 'Gusset stitched seamlessly into underwear, hugs body contours')}</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Ngày ra rất nhiều / són nặng', 'Very Heavy Flow / Severe Leaks')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Phù hợp', 'Suitable')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Có thể cần kết hợp hoặc dùng sản phẩm chuyên dụng', 'May need backup pairing or specialized clinical products')}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Rác thải môi trường', 'Environmental Waste')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Nhiều (hàng nghìn miếng thải ra bãi rác)', 'Extensive (thousands of disposable pads in landfills)')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Rất ít (tái sử dụng nhiều lần)', 'Minimal (washable and reusable for 100+ cycles)')}</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Chi phí', 'Cost')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Thấp mỗi lần mua, nhưng tốn đều đặn hằng tháng', 'Low per purchase, but recurring continuous monthly expense')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Đầu tư ban đầu, tiết kiệm rõ rệt về lâu dài', 'Initial investment with substantial long-term savings')}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">{tr('Công sức chăm sóc', 'Care & Cleaning')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">{tr('Chỉ việc mua và vứt', 'Buy and discard')}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">{tr('Cần xả nước lạnh, giặt và phơi khô', 'Requires quick cold rinse, gentle wash, and air-dry')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. CAM KẾT MINH BẠCH (id="cam-ket") */}
      <section id="cam-ket" className="py-14 sm:py-20 bg-white border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">
              {tr('Giá trị cốt lõi', 'Core Values')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              {tr('Cam kết minh bạch của ANTCARE', 'ANTCARE Transparency Commitments')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">01</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">
                {tr('Công bố rõ cấu tạo và chất liệu', 'Full Material Disclosure')}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Chúng tôi công bố chi tiết chất liệu từng lớp vải tiếp xúc, lớp lõi thấm hút và màng chống thấm khi chính thức ra mắt, không quảng cáo chung chung.',
                  'We disclose exact compositions of every skin-contact layer, absorbent core, and waterproof barrier upon launch—no vague claims.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">02</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">
                {tr('Không thêm PFAS và chứng nhận vải an toàn', 'Zero Added PFAS & Certified Textiles')}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Chỉ lựa chọn nhà sản xuất chứng minh được màng chống thấm không chứa hóa chất vĩnh cửu PFAS và có chứng nhận vải dệt an toàn tra cứu được (như OEKO-TEX Standard 100).',
                  'Exclusively partnering with mills verifying PFAS-free barriers and holding traceable textile safety certificates (such as OEKO-TEX Standard 100).'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">03</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">
                {tr('Thông số dựa trên thử nghiệm thực tế', 'Lab-Verified Absorption Data')}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Công bố dung tích mức thấm (ml) và độ bền dựa trên kết quả kiểm nghiệm thực nghiệm, không phóng đại số liệu quảng cáo.',
                  'Absorption volume (ml) and wash durability are derived from objective lab testing without commercial exaggeration.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">04</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">
                {tr('Đồng hành & Tư vấn tận tâm bằng tiếng Việt', 'Empathetic & Dedicated Consultation')}
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Hướng dẫn sử dụng và giặt phơi chi tiết; đội ngũ tư vấn hỗ trợ chọn size và phom dáng kín đáo, tận tình qua Zalo.',
                  'Clear care guidelines; caring specialists providing private sizing and fit support via hotline and Zalo.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CÂU CHUYỆN KHỞI NGUỒN (id="cau-chuyen") */}
      <section id="cau-chuyen" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">
              {tr('Hành trình thương hiệu', 'Brand Heritage')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              {tr('Bắt nguồn từ chăm sóc người cao tuổi và phụ nữ', 'Rooted in Eldercare and Women’s Wellness')}
            </h2>
            <p className="text-base text-[#57534E] mt-3 leading-relaxed">
              {tr(
                'ANTCARE – Kiến chăm tổ bắt đầu với dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Khi chăm sóc người cao tuổi và trò chuyện với các chị em, chúng tôi gặp một vấn đề ít ai nói ra: són tiểu, những ngày đèn đỏ khó chịu, và làn da bị kích ứng vì sản phẩm dùng một lần. Đó là lý do ANTCARE tập trung vào đồ lót chức năng.',
                'ANTCARE (“Caring Ant”) originated from in-home senior wellness and hospital escort services in Hanoi. Caring for seniors and speaking with women unveiled unspoken concerns: light bladder leaks, uncomfortable periods, and skin chafing from disposables. That inspired ANTCARE to pioneer functional reusable underwear.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <span className="text-xs font-bold text-[#6633B4] uppercase tracking-wider">{tr('Mốc 1', 'Phase 1')}</span>
              <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2">
                {tr('Chăm sóc người cao tuổi tại nhà', 'In-Home Eldercare')}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Trợ lý sức khỏe đến nhà đo huyết áp, đường huyết, tập vận động; đồng hành đưa người cao tuổi đi khám bệnh ở các bệnh viện Hà Nội.',
                  'Health assistants visiting homes to check vital signs, guide mobility exercises, and escort seniors to hospitals across Hanoi.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <span className="text-xs font-bold text-[#FD711A] uppercase tracking-wider">{tr('Mốc 2', 'Phase 2')}</span>
              <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2">
                {tr('Lắng nghe nhu cầu ít ai nói ra', 'Listening to Unspoken Needs')}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Són tiểu ở người cao tuổi, phụ nữ sau sinh và tuổi tiền mãn kinh; những ngày đèn đỏ bí bách; da kích ứng vì tã, bỉm, băng dùng một lần.',
                  'Bladder leaks among seniors and postpartum/perimenopausal women; suffocating period days; rashes from disposable pads and diapers.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{tr('Mốc 3', 'Phase 3')}</span>
              <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2">
                {tr('Tập trung vào đồ lót chức năng', 'Pioneering Functional Underwear')}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, mặc như quần lót bình thường, giặt sạch và dùng lại bền vững.',
                  'Developing washable period and light incontinence panties with built-in absorbent cores—worn like everyday intimates, reusable and sustainable.'
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold">
            <Link to="/ve-chung-toi" className="text-[#6633B4] hover:underline flex items-center gap-1">
              {tr('Đọc toàn bộ câu chuyện ANTCARE', 'Read Full ANTCARE Story')} <span>→</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link to="/cham-soc-nguoi-cao-tuoi" className="text-[#57534E] hover:text-[#1C1917] hover:underline flex items-center gap-1 font-normal">
              {tr('Câu chuyện khởi nguồn: dịch vụ chăm sóc người cao tuổi', 'Origin Story: Eldercare Services')} <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CẨM NANG (id="cam-nang") */}
      <section id="cam-nang" className="py-14 sm:py-20 bg-white border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">
                {tr('Kiến thức hữu ích', 'Helpful Insights')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
                {tr('Cẩm nang kinh nguyệt và són tiểu', 'Period & Incontinence Handbook')}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/kinh-nguyet"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#6633B4] hover:underline shrink-0"
              >
                {tr('Cẩm nang kinh nguyệt', 'Period Guide')} <span>→</span>
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                to="/son-tieu"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#FD711A] hover:underline shrink-0"
              >
                {tr('Cẩm nang són tiểu', 'Incontinence Guide')} <span>→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handbookArticles.map((article) => {
              const articleLink = article.group === 'son-tieu' || article.id === 217
                ? `/son-tieu/${article.slug}`
                : `/kinh-nguyet/${article.slug}`;

              return (
                <article key={article.id} className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-2xs hover:shadow-md transition-shadow flex flex-col">
                  <Link to={articleLink} className="block aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.image || '/images/products/quan-lot-tham-hut.jpg'}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FD711A]">
                        {article.category || (isEn ? 'Handbook' : 'Cẩm nang')}
                      </span>
                      <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2 line-clamp-2 hover:text-[#6633B4] transition-colors">
                        <Link to={articleLink}>{article.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-[#57534E] line-clamp-2 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#E8DFD5]/60 flex items-center justify-between text-xs text-[#78716C]">
                      <span>{article.date}</span>
                      <Link to={articleLink} className="font-bold text-[#6633B4] hover:underline">
                        {tr('Đọc tiếp →', 'Read More →')}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. ĐĂNG KÝ NHẬN THÔNG TIN RA MẮT (id="dang-ky") */}
      <section id="dang-ky" className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] to-[#F6F1FC] border-b border-[#E8DFD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 shadow-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">
                {tr('Đăng ký sớm', 'Early Access')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
                {tr('Đăng ký nhận thông tin ra mắt', 'Sign Up for Launch Updates')}
              </h2>
              <p className="text-sm text-[#57534E] mt-2">
                {tr(
                  'Trở thành những người đầu tiên nhận thông báo khi sản phẩm mở bán và nhận ưu đãi đặt trước độc quyền.',
                  'Be among the first to receive notifications when products launch along with exclusive early-bird privileges.'
                )}
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">
                  {tr('Đăng ký thành công!', 'Registration Successful!')}
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto">
                  {tr('Cảm ơn bạn. ANTCARE sẽ liên hệ qua số điện thoại', 'Thank you! ANTCARE will notify you via phone number')}{' '}
                  <strong>{formData.phone}</strong>{' '}
                  {tr('ngay khi sản phẩm chính thức ra mắt.', 'as soon as our collection is officially unveiled.')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                    {formError}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                    {tr('Họ và tên', 'Full Name')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={tr('Ví dụ: Nguyễn Thị Mai', 'e.g., Sarah Johnson')}
                    className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                    {tr('Số điện thoại', 'Phone Number')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={tr('Ví dụ: 0912 345 678', 'e.g., +84 912 345 678')}
                    className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm transition-all"
                  />
                </div>

                {/* Yêu cầu 8: 2 ô chọn mặc định là "— Chọn —" (bắt buộc chọn), không chọn sẵn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                      {tr('Sản phẩm quan tâm', 'Product of Interest')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm bg-white transition-all cursor-pointer"
                    >
                      <option value="">{tr('— Chọn sản phẩm quan tâm —', '— Select product —')}</option>
                      <option value="both">{tr('Cả hai sản phẩm', 'Both Products')}</option>
                      <option value="period">{tr('Quần kinh nguyệt', 'Period Underwear')}</option>
                      <option value="leak">{tr('Quần chống són tiểu', 'Incontinence Panties')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                      {tr('Size thường mặc', 'Preferred Size')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm bg-white transition-all cursor-pointer"
                    >
                      <option value="">{tr('— Chọn size —', '— Select size —')}</option>
                      <option value="S">{tr('Size S (Mông < 90cm)', 'Size S (Hips < 90cm)')}</option>
                      <option value="M">{tr('Size M (Mông 90–95cm)', 'Size M (Hips 90–95cm)')}</option>
                      <option value="L">{tr('Size L (Mông 95–100cm)', 'Size L (Hips 95–100cm)')}</option>
                      <option value="XL">{tr('Size XL (Mông > 100cm)', 'Size XL (Hips > 100cm)')}</option>
                      <option value="unknown">{tr('Chưa biết (cần tư vấn)', 'Unsure (Need Advice)')}</option>
                    </select>
                  </div>
                </div>

                <p className="text-xs text-[#78716C] pt-1">
                  {tr(
                    'ANTCARE chỉ dùng số điện thoại để báo tin ra mắt và tư vấn; tuyệt đối không chia sẻ cho bên thứ ba.',
                    'ANTCARE only uses your phone number for launch notifications and sizing consultations; never shared with third parties.'
                  )}
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#FD711A] text-white font-bold text-base shadow-md hover:bg-[#e05e0e] transition-all duration-300 cursor-pointer disabled:opacity-60"
                >
                  {submitting
                    ? tr('Đang gửi thông tin...', 'Submitting...')
                    : tr('Đăng Ký Nhận Thông Tin Ra Mắt', 'Register for Launch Updates')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. CÂU HỎI THƯỜNG GẶP (id="hoi-dap") */}
      {/* Yêu cầu 10: Toàn bộ câu trả lời FAQ có sẵn trong HTML, không bị ẩn */}
      <section id="hoi-dap" className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">
              {tr('Giải đáp thắc mắc', 'Common Questions')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              {tr('Câu hỏi thường gặp', 'Frequently Asked Questions')}
            </h2>
          </div>

          <dl className="space-y-4">
            {/* FAQ 1 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(0)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>{tr('1. ANTCARE là thương hiệu gì?', '1. What kind of brand is ANTCARE?')}</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 0 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được. ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.',
                  'ANTCARE is a Vietnamese functional underwear brand featuring washable, reusable period underwear and light incontinence panties with built-in absorbent cores, originating from dedicated eldercare and healthcare services in Hanoi.'
                )}
              </dd>
            </div>

            {/* FAQ 2 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(1)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>{tr('2. Quần kinh nguyệt có thay được băng vệ sinh không?', '2. Can period underwear completely replace disposable pads?')}</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 1 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Với ngày ra ít và trung bình, quần kinh nguyệt thường dùng một mình được. Ngày ra rất nhiều có thể kết hợp với băng vệ sinh hoặc cốc nguyệt san để thêm phần an tâm.',
                  'On light-to-medium flow days, period underwear can easily be worn alone. On very heavy flow days, it works wonderfully as an extra protective layer paired with a cup or pad for complete peace of mind.'
                )}
              </dd>
            </div>

            {/* FAQ 3 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(2)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>{tr('3. Quần chống són tiểu dùng cho ai?', '3. Who should use incontinence panties?')}</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 2 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Dành cho người són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười to, vận động, còn tự sinh hoạt tốt. Són tiểu nặng nên dùng sản phẩm chuyên dụng theo tư vấn y tế.',
                  'Designed for active individuals experiencing mild bladder leaks—a few drops when sneezing, laughing, coughing, or exercising. For heavy or severe incontinence, specialized medical diapers are recommended.'
                )}
              </dd>
            </div>

            {/* FAQ 4 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(3)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>{tr('4. Quần thấm hút có vệ sinh không?', '4. Is reusable absorbent underwear hygienic?')}</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 3 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Có, nếu bạn thay kịp thời, xả nước lạnh sơ bộ, giặt bằng xà phòng dịu nhẹ, không dùng nước xả vải và phơi khô hoàn toàn ở nơi thoáng khí.',
                  'Yes, provided you change on time, rinse with cold water first, wash with gentle detergent without fabric softeners, and let them dry thoroughly in a well-ventilated area.'
                )}
              </dd>
            </div>

            {/* FAQ 5 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(4)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>{tr('5. Khi nào sản phẩm ANTCARE ra mắt?', '5. When will ANTCARE products officially launch?')}</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 4 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Sản phẩm đang được hoàn thiện kỹ lưỡng. Hãy để lại số điện thoại tại form đăng ký phía trên để nhận thông tin sớm nhất khi mở bán.',
                  'Our collection is currently undergoing rigorous quality testing. Please leave your contact details in the registration form above to receive earliest notifications when ordering opens.'
                )}
              </dd>
            </div>

            {/* FAQ 6 - Yêu cầu 3: Sửa FAQ số 6 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(5)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>{tr('6. ANTCARE còn dịch vụ chăm sóc người cao tuổi không?', '6. Does ANTCARE still offer eldercare services?')}</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 5 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {tr(
                  'Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được giữ tại trang ',
                  'Elderly care services is where ANTCARE began, and is currently paused for new clients to focus on functional underwear. Service information is still preserved on our '
                )}
                <Link to="/cham-soc-nguoi-cao-tuoi" className="text-[#6633B4] font-bold underline">
                  {tr('Chăm sóc người cao tuổi', 'Elderly Care page')}
                </Link>
                {tr('.', '.')}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default Home;
