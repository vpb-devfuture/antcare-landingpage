import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppTranslation } from '../utils/i18nHelper';

const Products = () => {
  const { tr } = useAppTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* HERO TITLE HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-earth-orange-bright/10 text-earth-orange-bright font-bold text-xs uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-base">psychology</span>
            {tr("DỤNG CỤ RÈN LUYỆN THỂ CHẤT & TRÍ NÃO", "PHYSICAL & COGNITIVE EXERCISE TOOLS")}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-plum-deep mb-4 leading-tight">
            {tr("Đồ Chơi & Dụng Cụ Rèn Luyện Thể Chất, Trí Não Cho Người Cao Tuổi", "Handcrafted Physical & Cognitive Training Tools for Seniors")}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            {tr(
              "ANTCARE – Kiến chăm tổ nghiên cứu và phát triển bộ dụng cụ thủ công giúp kích thích trí não, rèn luyện vận động tinh bàn tay, mang lại niềm vui sáng tạo và cảm giác tự chủ cho các bác trong hành trình tuổi già.",
              "ANTCARE designs and develops specialized handcrafted tools to stimulate cognitive function, enhance fine motor skills, and bring joy and self-confidence to seniors."
            )}
          </p>
        </div>

        {/* FEATURED PRODUCT HIGHLIGHT CARD */}
        <section className="mb-14">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Product Image Column */}
              <div className="lg:col-span-6 p-4 sm:p-6 md:p-8 bg-surface-lavender/20 flex justify-center items-center">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group w-full max-w-lg aspect-[4/3] bg-white">
                  <img
                    src="/images/products/bang-luon-day-beo.jpg"
                    alt="Bảng luồn dây bèo - ANTCARE Dụng cụ rèn luyện thể chất & trí não cho người cao tuổi"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-earth-orange-bright text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {tr("Sản phẩm nổi bật", "Featured Product")}
                  </div>
                </div>
              </div>

              {/* Product Details Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-earth-orange-bright mb-2">
                  <span className="material-symbols-outlined text-sm">eco</span>
                  {tr("Vật liệu từ thiên nhiên Việt Nam", "Eco-friendly Vietnamese Natural Material")}
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-plum-deep mb-3 leading-snug">
                  {tr("Bảng Luồn Dây Bèo – ANTCARE", "Water Hyacinth Weaving Board – ANTCARE")}
                </h2>

                <p className="text-xs sm:text-sm text-amber-700 italic font-medium mb-4 bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-xl">
                  “{tr("Tạo nên những điều đẹp đẽ — Chỉ với những thao tác đơn giản, người cao tuổi có thể tự tay tạo ra những sản phẩm thủ công ý nghĩa.", "Creating beautiful things — With simple hand steps, seniors can craft meaningful handmade products.")}”
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {tr(
                    "Sản phẩm được làm từ gỗ tự nhiên kết hợp dây bèo tây xử lý sạch, mềm mại, an toàn cho da tay. Giúp phục hồi khớp ngón tay, tăng cường khả năng tập trung, ghi nhớ và mang lại niềm vui thủ công mỗi ngày.",
                    "Crafted from natural wood combined with soft, clean water hyacinth cords. Helps hand joint rehabilitation, improves focus, memory, and brings daily creative happiness."
                  )}
                </p>

                {/* Core Feature Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100">
                    <span className="material-symbols-outlined text-primary text-base">pan_tool</span>
                    {tr("Luyện vận động tinh", "Fine Motor Skill Training")}
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100">
                    <span className="material-symbols-outlined text-primary text-base">psychology</span>
                    {tr("Kích thích trí não", "Cognitive Stimulation")}
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100">
                    <span className="material-symbols-outlined text-primary text-base">sentiment_very_satisfied</span>
                    {tr("Tự tin & Niềm vui", "Joy & Self-Confidence")}
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100">
                    <span className="material-symbols-outlined text-primary text-base">volunteer_activism</span>
                    {tr("Thành phẩm thực tế", "Practical Handmade Gifts")}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/san-pham/bang-luon-day-beo"
                    className="bg-earth-orange-bright text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-earth-orange-dark transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <span>{tr("Xem chi tiết sản phẩm", "View Product Details")}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>

                  <a
                    href="tel:0969032360"
                    className="border border-plum-deep/30 text-plum-deep hover:bg-plum-deep hover:text-white px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    <span>0969 032 360</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 CORE BENEFITS & LEVEL HIGHLIGHTS */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">
              {tr("Tại Sao Dụng Cụ Rèn Luyện Lại Quan Trọng Cho Người Cao Tuổi?", "Why Physical & Cognitive Tools Matter for Seniors?")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              {tr("Tập luyện đôi tay và trí não giúp duy trì sự minh mẫn, ngăn ngừa suy giảm trí nhớ và hỗ trợ người bệnh sau đột quỵ hoặc suy giảm vận động.", "Training hands and brain helps maintain mental clarity, prevent memory decline, and aid stroke rehabilitation.")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">front_hand</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">1. Luyện vận động tinh</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tăng linh hoạt cho các khớp ngón tay, giảm tình trạng cứng khớp, run tay và cải thiện khả năng cầm nắm sinh hoạt hàng ngày.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">memory</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">2. Kích thích trí não</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rèn luyện khả năng tập trung, ghi nhớ thứ tự đường đi của dây và tăng cường sự phối hợp nhịp nhàng giữa tay và mắt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">3. Tạo niềm vui &amp; Tự tin</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mỗi thao tác luồn dây hoàn thành đều tạo ra một kết quả cụ thể, giúp các bác cảm nhận được giá trị bản thân và sự tự chủ.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">card_giftcard</span>
              </div>
              <h3 className="font-bold text-base text-plum-deep mb-2">4. Sản phẩm thực tế</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thành phẩm thủ công hoàn thành có thể dùng làm lót cốc, tranh treo tường trang trí hoặc làm quà tặng ý nghĩa cho con cháu.
              </p>
            </div>
          </div>
        </section>

        {/* HOSPITAL & REHABILITATION COOPERATION BANNER */}
        <section className="bg-gradient-to-r from-plum-deep to-purple-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white mb-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[11px] uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">local_hospital</span>
                {tr("HỢP TÁC BỆNH VIỆN & PHỤC HỒI CHỨC NĂNG", "HOSPITAL & REHAB COOPERATION")}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                {tr("Chương Trình Hợp Tác Với Khoa Lão Khoa & PHCN Bệnh Viện", "Partnership Program for Geriatrics & Rehab Wards")}
              </h2>
              <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-normal">
                ANTCARE sẵn sàng đồng hành cùng các Bệnh viện, Trung tâm Phục hồi chức năng và Phòng Công tác xã hội để mang bộ dụng cụ rèn luyện đến tận tay bệnh nhân xuất viện, tổ chức workshop trải nghiệm ý nghĩa.
              </p>
              <div className="text-amber-300 font-semibold italic text-xs sm:text-sm pt-1">
                “Một món quà nhỏ – Một kết nối lớn ♡”
              </div>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Link
                to="/hop-tac"
                className="bg-amber-500 text-plum-deep hover:bg-amber-400 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>{tr("Liên hệ hợp tác", "Contact Cooperation")}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Products;
