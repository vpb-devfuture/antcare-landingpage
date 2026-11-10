const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.js', 'utf-8');

// 1. Remove obsolete routes from staticRoutes in prerender.js
// We can filter out /quan-lot-tham-hut, /ve-antcare, /about, /giai-phap-cham-soc, /cham-soc-nguoi-cao-tuoi, /ve-chung-toi
const oldRoutesSection = `  const staticRoutes = [
    {
      path: '/activities',
      title: 'Hoạt động cộng đồng | ANTCARE – Kiến chăm tổ',
      desc: 'Hành trình lan tỏa yêu thương, tập huấn sơ cấp cứu, y tế cộng đồng và các hoạt động xã hội của ANTCARE – Kiến chăm tổ.',
      h1: 'Hoạt động cộng đồng & Xã hội của ANTCARE'
    },
    {
      path: '/news',
      title: 'Tin tức & Y tế | ANTCARE – Kiến chăm tổ',
      desc: 'Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Tin tức y tế & Chăm sóc người cao tuổi'
    },
    {
      path: '/kinh-nguyet',
      title: 'Cẩm nang Kinh nguyệt & Sức khỏe phụ nữ | ANTCARE – Kiến chăm tổ',
      desc: 'Cẩm nang toàn diện về chu kỳ kinh nguyệt, so sánh băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt chống tràn ANTCARE.',
      h1: 'Cẩm nang Kinh nguyệt & Sức khỏe phụ nữ ANTCARE'
    },
    {
      path: '/recruitment',
      title: 'Tuyển dụng & Hợp tác | ANTCARE – Kiến chăm tổ',
      desc: 'Cơ hội gia nhập đội ngũ Trợ lý sức khỏe & Điều dưỡng chăm sóc người cao tuổi tại ANTCARE – Kiến chăm tổ.',
      h1: 'Tuyển dụng & Hợp tác cùng ANTCARE'
    },
    {
      path: '/hop-tac',
      title: 'Hợp tác y tế & Tuyển dụng | ANTCARE – Kiến chăm tổ',
      desc: 'Chương trình hợp tác y tế, bệnh viện và tuyển dụng Trợ lý sức khỏe cùng ANTCARE – Kiến chăm tổ.',
      h1: 'Hợp tác & Tuyển dụng cùng ANTCARE'
    },
    {
      path: '/lien-he',
      title: 'Thông tin liên hệ | ANTCARE – Kiến chăm tổ',
      desc: 'Thông tin liên hệ văn phòng đại diện, hotline 0969 032 360 và email hỗ trợ của ANTCARE – Kiến chăm tổ.',
      h1: 'Thông tin liên hệ ANTCARE – Kiến chăm tổ'
    },
    {
      path: '/privacy-policy',
      title: 'Chính sách bảo mật | ANTCARE – Kiến chăm tổ',
      desc: 'Chính sách bảo mật thông tin và quyền riêng tư của khách hàng tại ANTCARE – Kiến chăm tổ.',
      h1: 'Chính sách bảo mật thông tin'
    },
    {
      path: '/terms-of-use',
      title: 'Điều khoản sử dụng | ANTCARE – Kiến chăm tổ',
      desc: 'Quy định và điều khoản sử dụng dịch vụ trợ lý chăm sóc sức khỏe ANTCARE – Kiến chăm tổ.',
      h1: 'Điều khoản sử dụng dịch vụ'
    },
    {
      path: '/ve-antcare',
      title: 'Về ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi, quần thấm hút',
      desc: 'ANTCARE – Kiến chăm tổ: dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà ở Hà Nội và sản phẩm quần lót thấm hút: quần són tiểu, quần kinh nguyệt.',
      h1: 'Về ANTCARE – Kiến chăm tổ'
    },
    {
      path: '/about',
      title: 'Về ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi, quần thấm hút',
      desc: 'ANTCARE – Kiến chăm tổ: dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà ở Hà Nội và sản phẩm quần lót thấm hút: quần són tiểu, quần kinh nguyệt.',
      h1: 'Về ANTCARE – Kiến chăm tổ'
    },
    {
      path: '/giai-phap-cham-soc',
      title: 'Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ',
      desc: 'ANTCARE — Kiến chăm tổ cung cấp 3 dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà và hỗ trợ an toàn nhà cửa.',
      h1: 'Giải pháp chăm sóc người cao tuổi toàn diện'
    },
    {
      path: '/quan-lot-tham-hut',
      title: 'Quần Lót Thấm Hút ANTCARE – Chống Són Tiểu & Thay Thế Băng Vệ Sinh 2-in-1',
      desc: 'Quần lót thấm hút ANTCARE công nghệ 4 lớp kháng khuẩn: vừa là quần lót nguyệt san chống tràn ban đêm, vừa là quần lót chống són tiểu cho mẹ sau sinh & người lớn tuổi. Giặt tái dùng 100+ lần.',
      h1: 'Quần Lót Thấm Hút ANTCARE – Tự Tin Từng Khoảnh Khắc, Quên Đi Nỗi Lo Tràn & Són Tiểu'
    },
    {
      path: '/san-pham',
      title: 'Dụng cụ rèn luyện thể chất & trí não cho người cao tuổi | ANTCARE — Kiến chăm tổ',
      desc: 'Đồ chơi thủ công, dụng cụ rèn luyện vận động tinh ngón tay và kích thích trí não chuyên biệt cho người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Dụng cụ rèn luyện thể chất & trí não cho người cao tuổi'
    },
    {
      path: '/san-pham/bang-luon-day-beo',
      title: 'Bảng luồn dây bèo – Dụng cụ rèn luyện thể chất & trí não người cao tuổi | ANTCARE',
      desc: 'Bảng luồn dây bèo tây tự nhiên ANTCARE giúp người cao tuổi rèn luyện vận động tinh bàn tay, kích thích trí não và giảm cứng khớp hiệu quả.',
      h1: 'Bảng luồn dây bèo – Dụng cụ rèn luyện thể chất & trí não'
    },
    {
      path: '/blog',
      title: 'Tin tức & Cẩm nang y tế | ANTCARE – Kiến chăm tổ',
      desc: 'Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Tin tức & Cẩm nang chăm sóc sức khỏe'
    },
    {
      path: '/tin-tuc',
      title: 'Tin tức & Y tế | ANTCARE – Kiến chăm tổ',
      desc: 'Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Tin tức y tế & Chăm sóc người cao tuổi'
    },
    {
      path: '/tieu-son',
      title: 'Tiểu són & Rối loạn sàn chậu: Nguyên nhân, cách xử lý & chăm sóc | ANTCARE',
      desc: 'Chuyên mục kiến thức toàn diện về són tiểu, rỉ tiểu sau sinh, tuổi mãn kinh và người cao tuổi. Bài tập Kegel, cách chọn và sử dụng quần chống són thấm hút từ ANTCARE.',
      h1: 'Kiến thức về Són tiểu & Giải pháp chăm sóc'
    },
    {
      path: '/son-tieu',
      title: 'Tiểu són & Rối loạn sàn chậu: Nguyên nhân, cách xử lý & chăm sóc | ANTCARE',
      desc: 'Chuyên mục kiến thức toàn diện về són tiểu, rỉ tiểu sau sinh, tuổi mãn kinh và người cao tuổi. Bài tập Kegel, cách chọn và sử dụng quần chống són thấm hút từ ANTCARE.',
      h1: 'Kiến thức về Són tiểu & Giải pháp chăm sóc'
    },
    {
      path: '/dong-hanh-di-kham',
      title: 'Dịch vụ đồng hành đi khám cho người cao tuổi: cẩm nang cho gia đình | ANTCARE',
      desc: '10 bài cẩm nang về dịch vụ đồng hành đi khám, đưa bố mẹ đi khám khi con bận hoặc ở xa: chuẩn bị giấy tờ, thủ tục BHYT, quy trình khám, chi phí và cách chọn dịch vụ uy tín.',
      h1: 'Cẩm nang Đồng hành đi khám cho người cao tuổi'
    },
    {
      path: '/dong-hanh-kham-benh',
      title: 'Dịch vụ đồng hành đi khám cho người cao tuổi: cẩm nang cho gia đình | ANTCARE',
      desc: '10 bài cẩm nang về dịch vụ đồng hành đi khám, đưa bố mẹ đi khám khi con bận hoặc ở xa: chuẩn bị giấy tờ, thủ tục BHYT, quy trình khám, chi phí và cách chọn dịch vụ uy tín.',
      h1: 'Cẩm nang Đồng hành đi khám cho người cao tuổi'
    },
    {
      path: '/cham-soc-nguoi-cao-tuoi',
      title: 'Chăm sóc người cao tuổi tại Hà Nội: Trợ lý Sức khỏe & Đồng hành đi khám | ANTCARE',
      desc: '15 bài cẩm nang chăm sóc người cao tuổi tại Hà Nội: trợ lý sức khỏe bán thời gian, theo dõi huyết áp, quản lý thuốc, phòng té ngã, sau xuất viện và đưa bố mẹ đi khám.',
      h1: 'Chăm sóc sức khỏe người cao tuổi tại Hà Nội'
    }
  ];`;

const newRoutesSection = `  const staticRoutes = [
    {
      path: '/activities',
      title: 'Hoạt động cộng đồng | ANTCARE – Kiến chăm tổ',
      desc: 'Hành trình lan tỏa yêu thương, tập huấn sơ cấp cứu, y tế cộng đồng và các hoạt động xã hội của ANTCARE – Kiến chăm tổ.',
      h1: 'Hoạt động cộng đồng & Xã hội của ANTCARE'
    },
    {
      path: '/news',
      title: 'Tin tức & Y tế | ANTCARE – Kiến chăm tổ',
      desc: 'Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Tin tức y tế & Chăm sóc người cao tuổi'
    },
    {
      path: '/kinh-nguyet',
      title: 'Cẩm nang Kinh nguyệt & Sức khỏe phụ nữ | ANTCARE – Kiến chăm tổ',
      desc: 'Cẩm nang toàn diện về chu kỳ kinh nguyệt, so sánh băng vệ sinh, tampon, cốc, đĩa và quần kinh nguyệt chống tràn ANTCARE.',
      h1: 'Cẩm nang Kinh nguyệt & Sức khỏe phụ nữ ANTCARE'
    },
    {
      path: '/recruitment',
      title: 'Tuyển dụng & Hợp tác | ANTCARE – Kiến chăm tổ',
      desc: 'Cơ hội gia nhập đội ngũ Trợ lý sức khỏe & Điều dưỡng chăm sóc người cao tuổi tại ANTCARE – Kiến chăm tổ.',
      h1: 'Tuyển dụng & Hợp tác cùng ANTCARE'
    },
    {
      path: '/hop-tac',
      title: 'Hợp tác y tế & Tuyển dụng | ANTCARE – Kiến chăm tổ',
      desc: 'Chương trình hợp tác y tế, bệnh viện và tuyển dụng Trợ lý sức khỏe cùng ANTCARE – Kiến chăm tổ.',
      h1: 'Hợp tác & Tuyển dụng cùng ANTCARE'
    },
    {
      path: '/lien-he',
      title: 'Thông tin liên hệ | ANTCARE – Kiến chăm tổ',
      desc: 'Thông tin liên hệ văn phòng đại diện, hotline 0969 032 360 và email hỗ trợ của ANTCARE – Kiến chăm tổ.',
      h1: 'Thông tin liên hệ ANTCARE – Kiến chăm tổ'
    },
    {
      path: '/privacy-policy',
      title: 'Chính sách bảo mật | ANTCARE – Kiến chăm tổ',
      desc: 'Chính sách bảo mật thông tin và quyền riêng tư của khách hàng tại ANTCARE – Kiến chăm tổ.',
      h1: 'Chính sách bảo mật thông tin'
    },
    {
      path: '/terms-of-use',
      title: 'Điều khoản sử dụng | ANTCARE – Kiến chăm tổ',
      desc: 'Quy định và điều khoản sử dụng dịch vụ trợ lý chăm sóc sức khỏe ANTCARE – Kiến chăm tổ.',
      h1: 'Điều khoản sử dụng dịch vụ'
    },
    {
      path: '/san-pham',
      title: 'Dụng cụ rèn luyện thể chất & trí não cho người cao tuổi | ANTCARE — Kiến chăm tổ',
      desc: 'Đồ chơi thủ công, dụng cụ rèn luyện vận động tinh ngón tay và kích thích trí não chuyên biệt cho người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Dụng cụ rèn luyện thể chất & trí não cho người cao tuổi'
    },
    {
      path: '/san-pham/bang-luon-day-beo',
      title: 'Bảng luồn dây bèo – Dụng cụ rèn luyện thể chất & trí não người cao tuổi | ANTCARE',
      desc: 'Bảng luồn dây bèo tây tự nhiên ANTCARE giúp người cao tuổi rèn luyện vận động tinh bàn tay, kích thích trí não và giảm cứng khớp hiệu quả.',
      h1: 'Bảng luồn dây bèo – Dụng cụ rèn luyện thể chất & trí não'
    },
    {
      path: '/blog',
      title: 'Tin tức & Cẩm nang y tế | ANTCARE – Kiến chăm tổ',
      desc: 'Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Tin tức & Cẩm nang chăm sóc sức khỏe'
    },
    {
      path: '/tin-tuc',
      title: 'Tin tức & Y tế | ANTCARE – Kiến chăm tổ',
      desc: 'Tin tức y tế, bài viết chia sẻ kiến thức chăm sóc sức khỏe tuổi già và đồng hành người cao tuổi từ ANTCARE – Kiến chăm tổ.',
      h1: 'Tin tức y tế & Chăm sóc người cao tuổi'
    },
    {
      path: '/tieu-son',
      title: 'Tiểu són & Rối loạn sàn chậu: Nguyên nhân, cách xử lý & chăm sóc | ANTCARE',
      desc: 'Chuyên mục kiến thức toàn diện về són tiểu, rỉ tiểu sau sinh, tuổi mãn kinh và người cao tuổi. Bài tập Kegel, cách chọn và sử dụng quần chống són thấm hút từ ANTCARE.',
      h1: 'Kiến thức về Són tiểu & Giải pháp chăm sóc'
    },
    {
      path: '/son-tieu',
      title: 'Tiểu són & Rối loạn sàn chậu: Nguyên nhân, cách xử lý & chăm sóc | ANTCARE',
      desc: 'Chuyên mục kiến thức toàn diện về són tiểu, rỉ tiểu sau sinh, tuổi mãn kinh và người cao tuổi. Bài tập Kegel, cách chọn và sử dụng quần chống són thấm hút từ ANTCARE.',
      h1: 'Kiến thức về Són tiểu & Giải pháp chăm sóc'
    },
    {
      path: '/dong-hanh-di-kham',
      title: 'Dịch vụ đồng hành đi khám cho người cao tuổi: cẩm nang cho gia đình | ANTCARE',
      desc: '10 bài cẩm nang về dịch vụ đồng hành đi khám, đưa bố mẹ đi khám khi con bận hoặc ở xa: chuẩn bị giấy tờ, thủ tục BHYT, quy trình khám, chi phí và cách chọn dịch vụ uy tín.',
      h1: 'Cẩm nang Đồng hành đi khám cho người cao tuổi'
    },
    {
      path: '/dong-hanh-kham-benh',
      title: 'Dịch vụ đồng hành đi khám cho người cao tuổi: cẩm nang cho gia đình | ANTCARE',
      desc: '10 bài cẩm nang về dịch vụ đồng hành đi khám, đưa bố mẹ đi khám khi con bận hoặc ở xa: chuẩn bị giấy tờ, thủ tục BHYT, quy trình khám, chi phí và cách chọn dịch vụ uy tín.',
      h1: 'Cẩm nang Đồng hành đi khám cho người cao tuổi'
    }
  ];`;

content = content.replace(oldRoutesSection, newRoutesSection);

// 2. Add redirects to staticRedirects in prerender.js
const targetRedirectPos = "const staticRedirects = [";
const newRedirectEntries = `const staticRedirects = [
    {
      source: '/quan-lot-tham-hut',
      target: '/'
    },
    {
      source: '/ve-antcare',
      target: '/ve-chung-toi'
    },
    {
      source: '/about',
      target: '/ve-chung-toi'
    },
    {
      source: '/giai-phap-cham-soc',
      target: '/cham-soc-nguoi-cao-tuoi'
    },`;

content = content.replace(targetRedirectPos, newRedirectEntries);

fs.writeFileSync('scripts/prerender.js', content);
console.log('Successfully updated static routes and redirects in prerender.js');

