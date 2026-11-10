import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../config/siteInfo.json';
import { trackEvent } from '../utils/analytics';
import newsData from '../data/news.json';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'both',
    size: 'L'
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = "ANTCARE – Quần kinh nguyệt & quần chống són tiểu";
    const desc = "ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt.";
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) return;
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
            source: 'Homepage_Preorder_Section'
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

  // Get 6 representative articles from handbook (period + incontinence)
  const handbookArticles = (newsData.list || [])
    .filter(n => n.group === 'kinh-nguyet')
    .slice(0, 6);

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
              src="/images/products/hero-absorbent-underwear-vi.jpg?v=layers-3d-v2"
              alt="ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu"
              className="w-full h-auto block select-none group-hover:scale-[1.002] transition-transform duration-300"
              width={2048}
              height={940}
              loading="eager"
            />
          </a>
        </div>

        {/* H1 & Brand Statement (Khối trả lời nhanh & nút hành động) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] leading-tight">
            ANTCARE – Đồ lót chức năng cho phụ nữ:{' '}
            <span className="text-[#6633B4]">quần kinh nguyệt</span> và{' '}
            <span className="text-[#FD711A]">quần chống són tiểu</span>
          </h1>

          {/* Quick Answer Callout */}
          <div className="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl my-6 text-left shadow-xs">
            <p className="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
              <strong className="text-[#6633B4] font-bold">
                ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.
              </strong>{' '}
              ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
            </p>
          </div>

          {/* Action Buttons & Notice */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#dang-ky"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FD711A] text-white font-bold text-base shadow-md hover:bg-[#e05e0e] transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Nhận thông tin ra mắt</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href={`https://zalo.me/${siteInfo.hotline.replace(/ /g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-[#6633B4]/30 text-[#6633B4] font-bold text-base hover:bg-[#6633B4]/5 transition-all text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px] text-[#6633B4]">chat</span>
              <span>Tư vấn Zalo 0969 032 360</span>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-[#78716C] italic mt-3">
            * Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
          </p>
        </div>

        {/* 4-Pillar Trust Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 pt-8 border-t border-[#E8DFD5] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6633B4] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">layers</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Lõi thấm 4 lớp</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Thấm hút & khóa ẩm chống tràn</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FD711A] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">spa</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Mềm dịu cho da</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Không cọ xát, không bí bách</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">autorenew</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Giặt và dùng lại</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Tiết kiệm & giảm rác thải</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">shield_check</span>
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1C1917]">Không chứa PFAS</h3>
              <p className="text-[11px] text-[#78716C] leading-tight mt-0.5">Vải dệt an toàn cho sức khỏe</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VẤN ĐỀ (id="van-de") */}
      <section id="van-de" className="py-14 sm:py-20 bg-white border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">Nhu cầu thực tế</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              Vì sao phụ nữ và người cao tuổi cần một lựa chọn khác tã, bỉm, băng vệ sinh dùng một lần?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6633B4] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Bí và ẩm</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Sản phẩm dùng một lần thường có màng đáy nilon nhân tạo giữ ẩm sát da khi dùng lâu, đặc biệt trong khí hậu nhiệt đới nóng ẩm của Việt Nam.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FD711A] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">healing</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Cọ xát, hăm, kích ứng</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Mép băng gập, cánh băng, keo dán dính vào da và các hóa chất tạo mùi dễ làm cọ xát gây đỏ rát, hăm ngứa vùng bẹn nhạy cảm.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6633B4] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">sync_problem</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Xô lệch và tràn</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Băng vệ sinh dán rất dễ bị xô lệch khi vận động nhiều, tập thể thao hoặc khi trở mình ngủ đêm khiến dịch tràn ra ga giường hoặc trang phục.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FD711A] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Ngại và bất tiện</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Người bị són tiểu nhẹ không muốn mặc bỉm người lớn dày cộm; phụ nữ đi làm hay học sinh luôn lo lắng canh giờ thay băng và tìm nơi vứt.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5] shadow-2xs md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Nhiều rác thải khó phân hủy</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Mỗi phụ nữ dùng hàng nghìn miếng băng vệ sinh và tampon trong đời, mất đến 500 năm để phân hủy tại các bãi chôn lấp. Chuyển sang đồ lót giặt dùng lại là bước thay đổi thiết thực cho môi trường.
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Sản phẩm chủ lực</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] leading-tight">
                Quần kinh nguyệt ANTCARE – mặc như quần lót, thấm như băng vệ sinh
              </h2>
              <p className="text-base text-[#44403C] leading-relaxed">
                Quần kinh nguyệt có phần đáy nhiều lớp: lớp tiếp xúc da mềm dịu, lõi thấm giữ máu kinh, lớp chống thấm giúp không thấm ra quần ngoài. Bạn mặc như quần lót bình thường, không cần dán keo hay đặt bất kỳ dụng cụ nào vào cơ thể.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6633B4] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]"><strong>Dùng cho:</strong> Ngày ra ít đến trung bình có thể dùng một mình; ngày ra nhiều có thể dùng làm lớp dự phòng êm ái cùng cốc nguyệt san hoặc băng vệ sinh; ban đêm thoải mái xoay người.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6633B4] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]"><strong>Phù hợp:</strong> Học sinh tuổi dậy thì, phụ nữ đi làm văn phòng, phụ nữ hay tràn ban đêm, người có làn da nhạy cảm với keo và mép băng, phụ nữ tiền mãn kinh chu kỳ thất thường.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6633B4] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]"><strong>Dáng chủ lực:</strong> Boy short cạp cao ôm đùi mềm mại, giữ vùng thấm ổn định không xô lệch khi ngồi lâu hoặc khi ngủ.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">Liên kết đọc thêm trong Cẩm nang:</span>
                <ul className="space-y-1.5 text-sm text-[#6633B4]">
                  <li>
                    <Link to="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/chon-quan-kinh-nguyet-theo-luong-kinh" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> Cách chọn quần kinh nguyệt theo lượng kinh: nhẹ, trung bình, nhiều
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/quan-kinh-nguyet-tham-duoc-bao-nhieu-ml" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> Quần kinh nguyệt thấm được bao nhiêu ml máu so với lượng kinh thực tế?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <img
                src="/images/products/quan-lot-tham-hut.jpg"
                alt="Quần kinh nguyệt ANTCARE dáng boy short cạp cao màu đen và màu da"
                className="w-full h-auto rounded-2xl object-cover mb-4"
                width="1024"
                height="1024"
                loading="lazy"
              />
              <div className="text-center">
                <span className="text-xs font-bold text-[#8C6D58] uppercase">Thiết kế boy short cạp cao</span>
                <p className="text-xs text-[#78716C] mt-1">Đáy mở rộng kéo dài ra sau lưng, chống tràn khi nằm nghiêng</p>
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
                alt="Quần chống són tiểu nhẹ ANTCARE kín đáo và thoải mái"
                className="w-full h-auto rounded-2xl object-cover mb-4"
                loading="lazy"
              />
              <div className="text-center">
                <span className="text-xs font-bold text-[#FD711A] uppercase">Tự tin trong từng cử động</span>
                <p className="text-xs text-[#78716C] mt-1">Mặc êm ái như đồ lót bình thường, không lộ viền và không sột soạt</p>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">Giải pháp tự tin</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] leading-tight">
                Quần chống són tiểu ANTCARE – cho những lần rỉ nhẹ khi ho, hắt hơi, vận động
              </h2>
              <p className="text-base text-[#44403C] leading-relaxed">
                Són tiểu nhẹ rất phổ biến ở phụ nữ sau sinh, tuổi tiền mãn kinh và người cao tuổi. Quần chống són tiểu có lõi hút nhanh và vùng thấm rộng phía trước, mặc như quần lót thông thường, kín đáo và thoải mái hơn bỉm tã rất nhiều.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FD711A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-[#44403C]"><strong>Phù hợp:</strong> Són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười to, bê đồ nặng hoặc chạy bộ; người còn tự sinh hoạt tốt và không muốn mặc bỉm người lớn.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-400 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">!</span>
                  <p className="text-sm text-[#44403C]"><strong>Chưa phù hợp:</strong> Tiểu không tự chủ mức độ nặng hoặc người bệnh nằm liệt một chỗ (nên dùng sản phẩm tã dán chuyên dụng theo tư vấn y tế).</p>
                </div>
                <div className="bg-[#FFF8F3] border-l-3 border-[#FD711A] p-3.5 rounded-r-xl text-xs text-[#8A3B00] leading-relaxed">
                  * <strong>Lưu ý y khoa:</strong> Quần thấm hút <strong>không điều trị</strong> bệnh són tiểu. Hãy đi khám bác sĩ nếu són tiểu mới xuất hiện, tăng dần hoặc kèm theo tiểu buốt, tiểu rắt, có máu.
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">Liên kết đọc thêm:</span>
                <ul className="space-y-1.5 text-sm text-[#6633B4]">
                  <li>
                    <Link to="/kinh-nguyet/son-tieu-khi-ho-hat-hoi-cuoi" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> Són tiểu khi ho, hắt hơi, cười: nguyên nhân và cách cải thiện
                    </Link>
                  </li>
                  <li>
                    <Link to="/kinh-nguyet/quan-kinh-nguyet-co-dung-cho-son-tieu-duoc-khong" className="hover:underline flex items-center gap-1.5">
                      <span className="text-xs">→</span> Quần kinh nguyệt có dùng cho són tiểu được không?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SO SÁNH NHANH (id="so-sanh") */}
      <section id="so-sanh" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Đánh giá trực quan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              So sánh nhanh: quần thấm hút và sản phẩm dùng một lần
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E8DFD5] shadow-xs bg-white">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#6633B4] text-white">
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Tiêu chí</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold bg-[#532696]">Băng vệ sinh / bỉm dùng một lần</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold bg-[#FD711A]">Quần thấm hút ANTCARE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD5]">
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Cách dùng</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Dán vào quần hoặc mặc bỉm, vứt sau mỗi lần</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Mặc như quần lót, giặt và dùng lại</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Cọ xát, keo dán</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Có mép gập, cánh băng, keo dính dễ cọ xát</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Không keo, không cánh, viền may mềm</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Xô lệch khi vận động</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Có thể xô lệch khi trở mình hoặc chạy nhảy</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Vùng thấm may liền với quần, ôm sát cơ thể</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Ngày ra rất nhiều / són nặng</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Phù hợp</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Có thể cần kết hợp hoặc dùng sản phẩm chuyên dụng</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Rác thải môi trường</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Nhiều (hàng nghìn miếng thải ra bãi rác)</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Rất ít (tái sử dụng nhiều lần)</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Chi phí</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Thấp mỗi lần mua, nhưng tốn đều đặn hằng tháng</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Đầu tư ban đầu, tiết kiệm rõ rệt về lâu dài</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#1C1917]">Công sức chăm sóc</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#57534E]">Chỉ việc mua và vứt</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#1C1917] font-semibold bg-[#FFF8F3]">Cần xả nước lạnh, giặt và phơi khô</td>
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Giá trị cốt lõi</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              Cam kết minh bạch của ANTCARE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">01</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Công bố rõ cấu tạo và chất liệu</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Chúng tôi công bố chi tiết chất liệu từng lớp vải tiếp xúc, lớp lõi thấm hút và màng chống thấm khi chính thức ra mắt, không quảng cáo chung chung.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">02</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Không thêm PFAS và chứng nhận vải an toàn</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Chỉ lựa chọn nhà sản xuất chứng minh được màng chống thấm không chứa hóa chất vĩnh cửu PFAS và có chứng nhận vải dệt an toàn tra cứu được (như OEKO-TEX Standard 100).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">03</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Thông số dựa trên thử nghiệm thực tế</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Công bố dung tích mức thấm (ml) và độ bền dựa trên kết quả kiểm nghiệm thực nghiệm, không phóng đại số liệu quảng cáo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD5]">
              <div className="text-[#6633B4] font-black text-xl mb-2">04</div>
              <h3 className="font-bold text-lg text-[#1C1917] mb-2">Đồng hành & Tư vấn tận tâm bằng tiếng Việt</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Hướng dẫn sử dụng và giặt phơi chi tiết; đội ngũ tư vấn hỗ trợ chọn size và phom dáng kín đáo, tận tình qua Zalo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CÂU CHUYỆN KHỞI NGUỒN (id="cau-chuyen") */}
      <section id="cau-chuyen" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">Hành trình thương hiệu</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              Bắt nguồn từ chăm sóc người cao tuổi và phụ nữ
            </h2>
            <p className="text-base text-[#57534E] mt-3 leading-relaxed">
              ANTCARE – Kiến chăm tổ bắt đầu với dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Khi chăm sóc người cao tuổi và trò chuyện với các chị em, chúng tôi gặp một vấn đề ít ai nói ra: són tiểu, những ngày đèn đỏ khó chịu, và làn da bị kích ứng vì sản phẩm dùng một lần. Đó là lý do ANTCARE tập trung vào đồ lót chức năng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <span className="text-xs font-bold text-[#6633B4] uppercase tracking-wider">Mốc 1</span>
              <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2">Chăm sóc người cao tuổi tại nhà</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Trợ lý sức khỏe đến nhà đo huyết áp, đường huyết, tập vận động; đồng hành đưa người cao tuổi đi khám bệnh ở các bệnh viện Hà Nội.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <span className="text-xs font-bold text-[#FD711A] uppercase tracking-wider">Mốc 2</span>
              <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2">Lắng nghe nhu cầu ít ai nói ra</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Són tiểu ở người cao tuổi, phụ nữ sau sinh và tuổi tiền mãn kinh; những ngày đèn đỏ bí bách; da kích ứng vì tã, bỉm, băng dùng một lần.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Mốc 3</span>
              <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2">Tập trung vào đồ lót chức năng</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, mặc như quần lót bình thường, giặt sạch và dùng lại bền vững.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold">
            <Link to="/ve-chung-toi" className="text-[#6633B4] hover:underline flex items-center gap-1">
              Đọc toàn bộ câu chuyện ANTCARE <span>→</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link to="/cham-soc-nguoi-cao-tuoi" className="text-[#57534E] hover:text-[#1C1917] hover:underline flex items-center gap-1 font-normal">
              Câu chuyện khởi nguồn: dịch vụ chăm sóc người cao tuổi <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CẨM NANG (id="cam-nang") */}
      <section id="cam-nang" className="py-14 sm:py-20 bg-white border-b border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Kiến thức hữu ích</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
                Cẩm nang kinh nguyệt và són tiểu
              </h2>
            </div>
            <Link
              to="/kinh-nguyet"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#6633B4] hover:underline shrink-0"
            >
              Xem tất cả bài viết <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handbookArticles.map((article) => (
              <article key={article.id} className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-2xs hover:shadow-md transition-shadow flex flex-col">
                <Link to={`/kinh-nguyet/${article.slug}`} className="block aspect-[16/10] overflow-hidden bg-slate-100">
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
                      {article.category || 'Cẩm nang'}
                    </span>
                    <h3 className="font-bold text-base text-[#1C1917] mt-1 mb-2 line-clamp-2 hover:text-[#6633B4] transition-colors">
                      <Link to={`/kinh-nguyet/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E8DFD5]/60 flex items-center justify-between text-xs text-[#78716C]">
                    <span>{article.date}</span>
                    <Link to={`/kinh-nguyet/${article.slug}`} className="font-bold text-[#6633B4] hover:underline">
                      Đọc tiếp →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ĐĂNG KÝ NHẬN THÔNG TIN RA MẮT (id="dang-ky") */}
      <section id="dang-ky" className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] to-[#F6F1FC] border-b border-[#E8DFD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 shadow-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD711A]">Đăng ký sớm</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
                Đăng ký nhận thông tin ra mắt
              </h2>
              <p className="text-sm text-[#57534E] mt-2">
                Trở thành những người đầu tiên nhận thông báo khi sản phẩm mở bán và nhận ưu đãi đặt trước độc quyền.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1C1917]">Đăng ký thành công!</h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto">
                  Cảm ơn bạn. ANTCARE sẽ liên hệ qua số điện thoại <strong>{formData.phone}</strong> ngay khi sản phẩm chính thức ra mắt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Thị Mai"
                    className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ví dụ: 0912 345 678"
                    className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                      Sản phẩm quan tâm
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm bg-white transition-all"
                    >
                      <option value="both">Cả hai sản phẩm</option>
                      <option value="period">Quần kinh nguyệt</option>
                      <option value="leak">Quần chống són tiểu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5">
                      Size thường mặc
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D6C7B8] focus:border-[#6633B4] focus:ring-2 focus:ring-[#6633B4]/20 outline-none text-sm bg-white transition-all"
                    >
                      <option value="S">Size S (Mông &lt; 90cm)</option>
                      <option value="M">Size M (Mông 90–95cm)</option>
                      <option value="L">Size L (Mông 95–100cm)</option>
                      <option value="XL">Size XL (Mông &gt; 100cm)</option>
                      <option value="unknown">Chưa biết (cần tư vấn)</option>
                    </select>
                  </div>
                </div>

                <p className="text-xs text-[#78716C] pt-1">
                  ANTCARE chỉ dùng số điện thoại để báo tin ra mắt và tư vấn; tuyệt đối không chia sẻ cho bên thứ ba.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#FD711A] text-white font-bold text-base shadow-md hover:bg-[#e05e0e] transition-all duration-300 cursor-pointer disabled:opacity-60"
                >
                  {submitting ? 'Đang gửi thông tin...' : 'Đăng Ký Nhận Thông Tin Ra Mắt'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. CÂU HỎI THƯỜNG GẶP (id="hoi-dap") */}
      <section id="hoi-dap" className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6633B4]">Giải đáp thắc mắc</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] mt-1">
              Câu hỏi thường gặp
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
                  <span>1. ANTCARE là thương hiệu gì?</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 0 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className={`mt-3 text-sm text-[#57534E] leading-relaxed ${openFaq === 0 ? 'block' : 'hidden sm:block'}`}>
                ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được. ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.
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
                  <span>2. Quần kinh nguyệt có thay được băng vệ sinh không?</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 1 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className={`mt-3 text-sm text-[#57534E] leading-relaxed ${openFaq === 1 ? 'block' : 'hidden sm:block'}`}>
                Với ngày ra ít và trung bình, quần kinh nguyệt thường dùng một mình được. Ngày ra rất nhiều có thể kết hợp với băng vệ sinh hoặc cốc nguyệt san để thêm phần an tâm.
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
                  <span>3. Quần chống són tiểu dùng cho ai?</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 2 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className={`mt-3 text-sm text-[#57534E] leading-relaxed ${openFaq === 2 ? 'block' : 'hidden sm:block'}`}>
                Dành cho người són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười to, vận động, còn tự sinh hoạt tốt. Són tiểu nặng nên dùng sản phẩm chuyên dụng theo tư vấn y tế.
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
                  <span>4. Quần thấm hút có vệ sinh không?</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 3 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className={`mt-3 text-sm text-[#57534E] leading-relaxed ${openFaq === 3 ? 'block' : 'hidden sm:block'}`}>
                Có, nếu bạn thay kịp thời, xả nước lạnh sơ bộ, giặt bằng xà phòng dịu nhẹ, không dùng nước xả vải và phơi khô hoàn toàn ở nơi thoáng khí.
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
                  <span>5. Khi nào sản phẩm ANTCARE ra mắt?</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 4 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className={`mt-3 text-sm text-[#57534E] leading-relaxed ${openFaq === 4 ? 'block' : 'hidden sm:block'}`}>
                Sản phẩm đang được hoàn thiện kỹ lưỡng. Hãy để lại số điện thoại tại form đăng ký phía trên để nhận thông tin sớm nhất khi mở bán.
              </dd>
            </div>

            {/* FAQ 6 */}
            <div className="border border-[#E8DFD5] rounded-2xl p-5 bg-[#FAF8F5]">
              <dt>
                <button
                  type="button"
                  onClick={() => toggleFaq(5)}
                  className="w-full flex items-center justify-between text-left font-bold text-base text-[#1C1917] hover:text-[#6633B4] transition-colors cursor-pointer"
                >
                  <span>6. ANTCARE còn dịch vụ chăm sóc người cao tuổi không?</span>
                  <span className="text-[#6633B4] font-bold text-lg">{openFaq === 5 ? '−' : '+'}</span>
                </button>
              </dt>
              <dd className={`mt-3 text-sm text-[#57534E] leading-relaxed ${openFaq === 5 ? 'block' : 'hidden sm:block'}`}>
                ANTCARE cung cấp các dịch vụ chăm sóc sức khỏe người cao tuổi tại Hà Nội bao gồm: Trợ lý sức khỏe tại nhà, đưa người cao tuổi đi khám bệnh viện và giải pháp an tâm nhà cửa. Quý khách có thể xem thông tin chi tiết tại trang <Link to="/dich-vu" className="text-[#6633B4] font-bold underline">Dịch vụ</Link> hoặc liên hệ Hotline 0969 032 360.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default Home;

