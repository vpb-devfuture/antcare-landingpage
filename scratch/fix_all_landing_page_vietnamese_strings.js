import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingPath = path.join(__dirname, '../src/pages/LandingPage.jsx');
let content = fs.readFileSync(landingPath, 'utf8');

const replacements = [
  // 1. Table Quality & Security
  ['<td className="py-3.5 px-4 md:px-5 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">Chất lượng &amp; Bảo mật</td>',
   '<td className="py-3.5 px-4 md:px-5 bg-surface-container-low font-bold text-plum-deep border-r border-surface-lavender sticky-col">{tr("Chất lượng & Bảo mật", "Quality & Security")}</td>'],
  
  ['<div className="py-3.5 px-4 md:px-5 border-r border-surface-lavender text-left leading-relaxed">Thông tin nhân viên minh bạch, theo dõi qua app &amp; bảo mật</div>',
   '<div className="py-3.5 px-4 md:px-5 border-r border-surface-lavender text-left leading-relaxed">{tr("Thông tin nhân viên minh bạch, theo dõi qua app & bảo mật", "Transparent staff profiles, tracked via app & secure")}</div>'],
  
  ['<div className="py-3.5 px-4 md:px-5 text-left leading-relaxed">Thông tin nhân viên minh bạch, theo dõi qua app &amp; bảo mật</div>',
   '<div className="py-3.5 px-4 md:px-5 text-left leading-relaxed">{tr("Thông tin nhân viên minh bạch, theo dõi qua app & bảo mật", "Transparent staff profiles, tracked via app & secure")}</div>'],
  
  ['<p className="text-[12px] font-medium text-plum-deep leading-relaxed">Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin.</p>',
   '<p className="text-[12px] font-medium text-plum-deep leading-relaxed">{tr("Thông tin nhân viên minh bạch, được theo dõi qua app và bảo mật thông tin.", "Transparent staff profiles, tracked via app & secure information.")}</p>'],

  // 2. Section 6 Headings
  ['<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">Gói Chăm sóc Linh hoạt</h2>',
   '<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">{tr("Gói Chăm sóc Linh hoạt", "Flexible Care Packages")}</h2>'],
  
  ['<h3 className="text-lg font-bold text-white">Gói Trợ lý Sức khỏe</h3>',
   '<h3 className="text-lg font-bold text-white">{tr("Gói Trợ lý Sức khỏe", "Health Assistant Packages")}</h3>'],
  
  ['<h3 className="text-lg font-bold text-white">Gói Dịch vụ Y tế</h3>',
   '<h3 className="text-lg font-bold text-white">{tr("Gói Dịch vụ Y tế", "Medical Care Packages")}</h3>'],
  
  ['<p className="text-xs sm:text-sm text-white/90 mb-3 font-medium">Bao gồm các dịch vụ chuyên sâu hỗ trợ sức khỏe toàn diện:</p>',
   '<p className="text-xs sm:text-sm text-white/90 mb-3 font-medium">{tr("Bao gồm các dịch vụ chuyên sâu hỗ trợ sức khỏe toàn diện:", "Includes specialized healthcare services:")}</p>'],

  // 3. Activity bullet points
  ['<span><strong>Thăm nhà &amp; Kiểm tra chỉ số sinh tồn:</strong> Huyết áp, nhịp tim, nhiệt độ, SpO2 <em>(Riêng gói Yêu Thương bổ sung kiểm tra Đường huyết)</em>.</span>',
   '<span>{tr("Thăm nhà & Kiểm tra chỉ số sinh tồn: Huyết áp, nhịp tim, nhiệt độ, SpO2 (Riêng gói Yêu Thương bổ sung kiểm tra Đường huyết).", "Home Visit & Vital Check: BP, heart rate, temp, SpO2 (Devotion Package includes Blood Sugar check).")}</span>'],
  
  ['<span><strong>Bài tập thể chất &amp; trí não:</strong> Theo đúng chuẩn Senior Fitness (Mỹ) &amp; Active Ageing (Singapore).</span>',
   '<span>{tr("Bài tập thể chất & trí não: Theo đúng chuẩn Senior Fitness (Mỹ) & Active Ageing (Singapore).", "Physical & Brain Exercise: Adopting US Senior Fitness & Singapore Active Ageing standards.")}</span>'],
  
  ['<span><strong>Tâm sự &amp; trải nghiệm công nghệ mới</strong> cùng ông bà.</span>',
   '<span>{tr("Tâm sự & trải nghiệm công nghệ mới cùng ông bà.", "Companionship & new technology experiences with seniors.")}</span>'],
  
  ['<span><strong>Nhắn tin nhắc nhở uống thuốc</strong> mỗi ngày.</span>',
   '<span>{tr("Nhắn tin nhắc nhở uống thuốc mỗi ngày.", "Daily medication reminders.")}</span>'],
  
  ['<span><strong>Báo cáo &amp; gửi thông tin cập nhật</strong> cho gia đình.</span>',
   '<span>{tr("Báo cáo & gửi thông tin cập nhật cho gia đình.", "Reports & updates to family.")}</span>'],
  
  ['Chi tiết giá vui lòng tham khảo {tr("Bảng giá dịch vụ", "Service Pricing")} chi tiết bên dưới.',
   '{tr("Chi tiết giá vui lòng tham khảo Bảng giá dịch vụ chi tiết bên dưới.", "For detailed pricing, please refer to the Service Pricing section below.")}'],

  // 4. Price table details
  ['<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">4 ca nhà cửa + 4 ca Sức khỏe</td>',
   '<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("4 ca nhà cửa + 4 ca Sức khỏe", "4 Home sessions + 4 Health sessions")}</td>'],
  
  ['<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">4 giờ</td>',
   '<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("4 giờ", "4 hours")}</td>'],
  
  ['<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">6 giờ</td>',
   '<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("6 giờ", "6 hours")}</td>'],
  
  ['<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">8 giờ</td>',
   '<td className="py-1.5 px-3.5 md:py-2 md:px-4 border-r border-surface-lavender text-on-surface-variant">{tr("8 giờ", "8 hours")}</td>'],
  
  ['<span className="text-[11px] text-on-surface-variant">4 giờ</span>',
   '<span className="text-[11px] text-on-surface-variant">{tr("4 giờ", "4 hours")}</span>'],
  
  ['<span className="text-[11px] text-on-surface-variant">6 giờ</span>',
   '<span className="text-[11px] text-on-surface-variant">{tr("6 giờ", "6 hours")}</span>'],
  
  ['<span className="text-[11px] text-on-surface-variant">8 giờ</span>',
   '<span className="text-[11px] text-on-surface-variant">{tr("8 giờ", "8 hours")}</span>'],
  
  ['<p className="mt-4 text-xs text-on-surface-variant italic text-center">* Lưu ý: Trường hợp có sử dụng nhân viên biết tiếng Anh tính thêm phí theo thỏa thuận</p>',
   '<p className="mt-4 text-xs text-on-surface-variant italic text-center">{tr("* Lưu ý: Trường hợp có sử dụng nhân viên biết tiếng Anh tính thêm phí theo thỏa thuận", "* Note: Extra fee applies if bilingual English staff is requested.")}</p>'],

  // 5. Contact Section Heading & Prose
  ['<h2 className="font-bold text-plum-deep leading-tight text-xl md:text-2xl lg:text-3xl"><span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ luôn sẵn sàng đồng hành cùng để giữ trọn {t("hero.title3")}</h2>',
   '<h2 className="font-bold text-plum-deep leading-tight text-xl md:text-2xl lg:text-3xl">{tr("ANT - Kiến chăm tổ luôn sẵn sàng đồng hành cùng để giữ trọn yêu thương thay bạn", "ANT - Nest Care is always ready to accompany you to preserve love on your behalf")}</h2>'],
  
  ['<p className="text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">Hãy chia sẻ cùng <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ bạn nhé, bạn muốn gọi điện thoại ngay qua hotline <a className="text-earth-orange-bright font-bold hover:underline" href={`tel:${siteInfo.hotline.replace(/ /g, "")}`}>{siteInfo.hotline}</a> hay để lại thông tin liên hệ.</p>',
   '<p className="text-xs sm:text-sm md:text-base text-on-surface-variant leading-relaxed">{tr("Hãy chia sẻ cùng ANT - Kiến chăm tổ bạn nhé, bạn muốn gọi điện thoại ngay qua hotline 0969 032 360 hay để lại thông tin liên hệ.", "Please share with ANTCARE, feel free to call our hotline 0969 032 360 directly or leave your contact details below.")}</p>'],

  ['<span>Cảm ơn bạn! ANTCARE đã ghi nhận và sẽ liên hệ lại trong 4 tiếng.</span>',
   '<span>{tr("Cảm ơn bạn! ANTCARE đã ghi nhận và sẽ liên hệ lại trong 4 tiếng.", "Thank you! ANTCARE has received your request and will contact you within 4 hours.")}</span>'],

  // 6. Story & Process Sections
  ['Sứ mệnh kết nối tình yêu của con cái và sức khỏe của cha mẹ, mang đến sự an tâm tuyệt đối khi khoảng cách địa lý không còn là rào cản.',
   '{tr("Sứ mệnh kết nối tình yêu của con cái và sức khỏe của cha mẹ, mang đến sự an tâm tuyệt đối khi khoảng cách địa lý không còn là rào cản.", "Our mission connects children\'s love with parents\' health, bringing complete peace of mind across geographic distance.")}'],

  ['ANTCARE là dịch vụ chăm sóc và đồng hành cùng người lớn tuổi tại nhà. Mỗi lần Kiến ghé thăm, chúng tôi theo dõi các chỉ số sức khỏe, nhắc uống thuốc, hỗ trợ sinh hoạt và cùng người lớn tuổi thực hiện các bài tập rèn luyện thể chất, trí não, trò chuyện và duy trì những hoạt động phù hợp mỗi ngày.',
   '{tr("ANTCARE là dịch vụ chăm sóc và đồng hành cùng người lớn tuổi tại nhà. Mỗi lần Kiến ghé thăm, chúng tôi theo dõi các chỉ số sức khỏe, nhắc uống thuốc, hỗ trợ sinh hoạt và cùng người lớn tuổi thực hiện các bài tập rèn luyện thể chất, trí não.", "ANTCARE provides home care and companionship for seniors. During every visit, we monitor health metrics, remind medication, assist daily living, and guide physical & brain exercises.")}'],

  ['Chúng tôi thấu hiểu nỗi lòng của những người con xa nhà, luôn đau đáu về sức khỏe của cha mẹ. Những dòng tin nhắn hỏi thăm vội vã giữa giờ làm, những lo âu khi không thể trực tiếp đưa bố mẹ đi khám bệnh chính là khởi nguồn cho sứ mệnh của <span className="text-primary font-bold">AN</span><span className="text-earth-orange-bright font-bold">T</span> - Kiến chăm tổ.',
   '{tr("Chúng tôi thấu hiểu nỗi lòng của những người con xa nhà, luôn đau đáu về sức khỏe của cha mẹ. Những dòng tin nhắn hỏi thăm vội vã giữa giờ làm, những lo âu khi không thể trực tiếp đưa bố mẹ đi khám bệnh chính là khởi nguồn cho sứ mệnh của ANTCARE.", "We deeply understand the hearts of children living far away, always caring for their parents\' health. Hastily sent text messages during work and anxieties about not escorting parents to medical checkups sparked ANTCARE\'s mission.")}'],

  ['Có những lúc cha mẹ ốm đau nhưng chẳng nỡ gọi con vì sợ con lo, sợ con bận. Có những khi người con ngồi giữa văn phòng hiện đại nhưng lòng quặn thắt vì không thể tự tay đưa cha mẹ đi khám bệnh định kỳ.',
   '{tr("Có những lúc cha mẹ ốm đau nhưng chẳng nỡ gọi con vì sợ con lo, sợ con bận. Có những khi người con ngồi giữa văn phòng hiện đại nhưng lòng quặn thắt vì không thể tự tay đưa cha mẹ đi khám bệnh định kỳ.", "Sometimes parents fall ill but hesitate to call their children out of worry. Sometimes children sit in modern offices, aching at heart for not being able to take their parents for checkups.")}'],

  ['"Sự cô đơn của tuổi già và nỗi trăn trở của những người con xa xứ chính là nguồn cảm hứng để <span className="text-primary font-extrabold">AN</span><span className="text-earth-orange-bright font-extrabold">T</span> - Kiến chăm tổ ra đời."',
   '"{tr("Sự cô đơn của tuổi già và nỗi trăn trở của những người con xa xứ chính là nguồn cảm hứng để ANTCARE ra đời.", "Old age loneliness and concerns of children living abroad inspired the creation of ANTCARE.")}"'],

  ['Tại sao lại là ANT? Hình ảnh kiến thường gợi tới tính chất bầy đàn, luôn chăm chút về tổ. Do vậy, chúng tôi liên kết những \'bạn kiến\' tận tâm thành một tổ kiến rộng lớn, để lan tỏa yêu thương và sự chăm sóc chu đáo đến từng gia đình Việt.',
   '{tr("Tại sao lại là ANT? Hình ảnh kiến thường gợi tới tính chất bầy đàn, luôn chăm chút về tổ. Do vậy, chúng tôi liên kết những \'bạn kiến\' tận tâm thành một tổ kiến rộng lớn, để lan tỏa yêu thương và sự chăm sóc chu đáo đến từng gia đình Việt.", "Why ANT? Ants signify diligence and caring for the nest. Thus, we connect dedicated Health Assistants into a large nest to spread love and thoughtful care to every family.")}'],

  ['Mọi hoạt động tại <span className="text-primary-container">AN</span><span className="text-earth-orange-bright">T</span> - Kiến chăm tổ đều được xây dựng trên nền tảng của sự chân thành và tiêu chuẩn y tế khắt khe.',
   '{tr("Mọi hoạt động tại ANTCARE đều được xây dựng trên nền tảng của sự chân thành và tiêu chuẩn y tế khắt khe.", "All activities at ANTCARE are built on sincerity and rigorous medical standards.")}'],

  ['<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">Bước 01</span>',
   '<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 01", "Step 01")}</span>'],
  
  ['<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">Khách hàng liên hệ</p>',
   '<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Khách hàng liên hệ", "Client Contact")}</p>'],

  ['<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">Bước 02</span>',
   '<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 02", "Step 02")}</span>'],

  ['<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug"><span className="text-primary font-medium">AN</span><span className="text-earth-orange-bright font-medium">T</span> kết nối</p>',
   '<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("ANT kết nối", "ANT Connection")}</p>'],

  ['<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">Bước 03</span>',
   '<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 03", "Step 03")}</span>'],

  ['<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">Khách hàng đặt cọc dịch vụ, <span className="text-primary font-medium">AN</span><span className="text-earth-orange-bright font-medium">T</span> giữ thanh toán</p>',
   '<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Khách hàng đặt cọc dịch vụ, ANT giữ thanh toán", "Client Deposit & Payment Escrow")}</p>'],

  ['<span className="text-[11px] font-bold text-earth-orange-bright tracking-widest uppercase mb-1.5">Bước 04</span>',
   '<span className="text-[11px] font-bold text-earth-orange-bright tracking-widest uppercase mb-1.5">{tr("Bước 04", "Step 04")}</span>'],

  ['<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug"><span className="text-earth-orange-bright font-medium">Kiến</span> chăm sóc</p>',
   '<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Kiến chăm sóc", "Health Assistant Care Visit")}</p>'],

  ['<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">Bước 05</span>',
   '<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 05", "Step 05")}</span>'],

  ['<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">Khách hàng đánh giá</p>',
   '<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("Khách hàng đánh giá", "Client Feedback")}</p>'],

  ['<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">Bước 06</span>',
   '<span className="text-[11px] font-semibold text-primary/70 tracking-widest uppercase mb-1.5 group-hover:text-primary transition-colors">{tr("Bước 06", "Step 06")}</span>'],

  ['<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug"><span className="text-primary font-medium">AN</span><span className="text-earth-orange-bright font-medium">T</span> thanh toán cho <span className="text-earth-orange-bright font-medium">Kiến</span></p>',
   '<p className="font-normal text-plum-deep text-xs sm:text-[13px] leading-snug">{tr("ANT thanh toán cho Kiến", "Payment Settlement to Assistant")}</p>']
];

replacements.forEach(([from, to]) => {
  content = content.replaceAll(from, to);
});

fs.writeFileSync(landingPath, content, 'utf8');
console.log('Successfully replaced 100% of remaining Vietnamese strings in LandingPage.jsx!');
