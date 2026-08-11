import React, { useEffect } from 'react';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-6 md:py-10 bg-surface-mist min-h-screen">
      {/* Header Banner */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 mb-6">
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-surface-lavender shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">Điều khoản sử dụng</h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Vui lòng đọc kỹ các điều khoản này trước khi sử dụng nền tảng <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care để đảm bảo quyền lợi của bạn.
            </p>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform -rotate-12">
            <span className="material-symbols-outlined text-[140px] text-plum-deep">gavel</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1060px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 p-4 sm:p-5 bg-white rounded-xl shadow-sm border border-surface-lavender">
            <h3 className="text-xs font-bold text-plum-deep mb-3 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="material-symbols-outlined text-base text-primary">toc</span> Mục lục
            </h3>
            <nav className="space-y-0.5 text-xs">
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-a">A. Quan hệ hợp đồng</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-b">B. Các dịch vụ</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-c">C. Sử dụng dịch vụ / Tài khoản</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-d">D. Thanh toán</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-e">E. Miễn trừ bảo đảm</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-f">F. Giới hạn trách nhiệm</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-g">G. Bồi thường</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-h">H. Các quy định khác</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-i">I. Chính sách hoàn tiền</a>
              <a className="block py-1.5 px-2.5 text-on-surface-variant hover:text-earth-orange-bright hover:bg-surface-mist rounded-md transition-colors" href="#section-k">K. Xử lý khiếu nại</a>
            </nav>
          </div>
        </aside>

        <div className="lg:col-span-9 bg-white p-5 sm:p-7 md:p-8 rounded-xl shadow-sm border border-surface-lavender space-y-6">
          <section className="scroll-mt-24" id="section-a">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">A. QUAN HỆ HỢP ĐỒNG</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-2">
              Điều khoản này điều chỉnh việc bạn — một cá nhân hoặc tổ chức — truy cập, cài đặt, hoặc sử dụng website/ứng dụng ("Nền tảng") của <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care nhằm kết nối và sử dụng các dịch vụ chăm sóc sức khỏe, hỗ trợ gia đình tại Việt Nam.
            </p>
            <p className="text-xs sm:text-sm text-plum-deep italic bg-surface-mist p-3 rounded-lg border-l-3 border-earth-orange-bright leading-relaxed">
              Bằng việc sử dụng Nền tảng, bạn đồng ý chịu ràng buộc bởi các Điều khoản này. Nếu bạn không đồng ý, bạn không thể truy cập hoặc sử dụng các Dịch vụ.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-b">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">B. CÁC DỊCH VỤ</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-2">
              Nền tảng <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care cung cấp một giải pháp công nghệ giúp kết nối Người yêu cầu dịch vụ (Khách hàng) với những Người hỗ trợ. Các dịch vụ bao gồm nhưng không giới hạn ở:
            </p>
            <ul className="text-xs sm:text-sm text-on-surface-variant space-y-1 pl-4 list-disc leading-relaxed">
              <li>Chăm sóc người già, người bệnh tại nhà hoặc bệnh viện.</li>
              <li>Chăm sóc trẻ em, mẹ sau sinh.</li>
              <li>Hỗ trợ việc nhà và các nhu cầu y tế cơ bản.</li>
              <li>Tư vấn sức khỏe trực tuyến qua hệ thống kết nối chuyên gia.</li>
            </ul>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-c">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">C. SỬ DỤNG DỊCH VỤ / TÀI KHOẢN</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Để sử dụng hầu hết các khía cạnh của Dịch vụ, bạn phải đăng ký và duy trì một tài khoản Dịch vụ cá nhân ("Tài khoản"). Bạn phải ít nhất 18 tuổi để đăng ký Tài khoản. Việc đăng ký yêu cầu bạn cung cấp thông tin cá nhân nhất định như tên, địa chỉ, số điện thoại di động và phương thức thanh toán hợp lệ.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-d">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">D. THANH TOÁN</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Bạn hiểu rằng việc sử dụng các Dịch vụ có thể dẫn đến các khoản phí cho các dịch vụ hoặc hàng hóa bạn nhận được từ Người hỗ trợ. <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care sẽ tạo điều kiện thuận lợi cho việc thanh toán của bạn đối với các Phí áp dụng thông qua các cổng thanh toán tích hợp hoặc hình thức tiền mặt (tùy dịch vụ).
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-e">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">E. TUYÊN BỐ MIỄN TRỪ BẢO ĐẢM</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Các dịch vụ được cung cấp "nguyên trạng" và "như sẵn có". <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care từ chối mọi tuyên bố và bảo đảm, dù rõ ràng, ngụ ý hay theo luật định, không được quy định rõ ràng trong các điều khoản này.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-f">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">F. GIỚI HẠN TRÁCH NHIỆM</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care sẽ không chịu trách nhiệm đối với các thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc hậu quả liên quan đến việc sử dụng dịch vụ.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-g">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">G. BỒI THƯỜNG</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Bạn đồng ý bồi thường và giữ cho <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care và các cấp quản lý không bị tổn hại đối với bất kỳ khiếu nại phát sinh từ việc sử dụng dịch vụ.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-h">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">H. CÁC QUY ĐỊNH KHÁC</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Các điều khoản này sẽ được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-i">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">I. CHÍNH SÁCH HOÀN TIỀN</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Việc hoàn tiền được áp dụng trong trường hợp dịch vụ không được cung cấp đúng cam kết hoặc bị hủy bởi Người hỗ trợ. Quy trình hoàn tiền sẽ được thực hiện trong vòng 7-14 ngày làm việc.
            </p>
          </section>

          <hr className="border-surface-lavender/60"/>

          <section className="scroll-mt-24" id="section-k">
            <h3 className="text-base sm:text-lg font-bold text-plum-deep mb-2">K. QUY TRÌNH TIẾP NHẬN VÀ XỬ LÝ KHIẾU NẠI</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Mọi khiếu nại liên quan đến chất lượng dịch vụ cần được gửi về bộ phận CSKH của <span className="text-primary-container font-semibold">AN</span><span className="text-earth-orange-bright font-semibold">T</span>care thông qua Hotline hoặc email chính thức. Chúng tôi cam kết phản hồi và xử lý trong vòng 48 giờ làm việc.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
            <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender border-b-3 border-b-earth-orange-bright">
              <h4 className="text-xs font-bold text-earth-orange-bright mb-1 uppercase tracking-wider">PHỤ LỤC 1</h4>
              <p className="text-xs sm:text-sm font-bold text-plum-deep mb-1">DÀNH CHO NGƯỜI YÊU CẦU</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Chi tiết về trách nhiệm đảm bảo môi trường làm việc an toàn, thanh toán đúng hạn và cung cấp thông tin sức khỏe chính xác.</p>
            </div>
            <div className="bg-surface-mist p-4 rounded-xl border border-surface-lavender border-b-3 border-b-primary">
              <h4 className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">PHỤ LỤC 2</h4>
              <p className="text-xs sm:text-sm font-bold text-plum-deep mb-1">DÀNH CHO NGƯỜI HỖ TRỢ</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">Chi tiết về tiêu chuẩn đạo đức nghề nghiệp, quy trình làm việc, chứng chỉ hành nghề và quy định về bảo mật thông tin.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
