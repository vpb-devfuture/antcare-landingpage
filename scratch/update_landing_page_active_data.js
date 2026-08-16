import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const landingPath = path.join(__dirname, '../src/pages/LandingPage.jsx');
let content = fs.readFileSync(landingPath, 'utf8');

// 1. Update import
content = content.replace(
  "import { useAppTranslation } from '../utils/i18nHelper';",
  "import { useAppTranslation, translatePageData } from '../utils/i18nHelper';"
);

// 2. Replace pageData with activePageData
content = content.replace(
  "const { t, isEn, tr } = useAppTranslation();\n  const [pageData, setPageData] = useState(null);",
  "const { t, isEn, tr } = useAppTranslation();\n  const [pageData, setPageData] = useState(null);\n  const activePageData = translatePageData(pageData, isEn);"
);

content = content.replaceAll("pageData?.", "activePageData?.");

// 3. Replace key hardcoded Vietnamese strings in LandingPage.jsx
const replacements = [
  ['Giải pháp Chăm sóc Sức khỏe Toàn diện', '{tr("Giải pháp Chăm sóc Sức khỏe Toàn diện", "Comprehensive Healthcare Solutions")}'],
  ['Dịch vụ chăm sóc cá nhân hóa theo nhu cầu riêng biệt của mỗi gia đình', '{tr("Dịch vụ chăm sóc cá nhân hóa theo nhu cầu riêng biệt của mỗi gia đình", "Personalized care services tailored to each family\'s unique needs")}'],
  ['(Hỗ trợ song ngữ Việt - Anh)', '{tr("(Hỗ trợ song ngữ Việt - Anh)", "(Bilingual VI - EN Support)")}'],
  ['Bảng giá dịch vụ', '{tr("Bảng giá dịch vụ", "Service Pricing")}'],
  ['Chi tiết Dịch vụ Chăm sóc', '{tr("Chi tiết Dịch vụ Chăm sóc", "Care Service Details")}'],
  ['So sánh chi tiết các giải pháp để tìm ra lựa chọn tối ưu cho người thân của bạn', '{tr("So sánh chi tiết các giải pháp để tìm ra lựa chọn tối ưu cho người thân của bạn", "Detailed comparison of solutions to find the optimal choice for your loved ones")}'],
  ['BẢNG GIÁ CHI TIẾT GÓI DỊCH VỤ Y TẾ', '{tr("BẢNG GIÁ CHI TIẾT GÓI DỊCH VỤ Y TẾ", "DETAILED MEDICAL SERVICE PRICING")}'],
  ['Bảng giá công khai, minh bạch dành cho khách hàng mới và thành viên ANTCARE', '{tr("Bảng giá công khai, minh bạch dành cho khách hàng mới và thành viên ANTCARE", "Transparent pricing for new clients and ANTCARE members")}'],
  ['Đơn vị tính: VNĐ', '{tr("Đơn vị tính: VNĐ", "Currency: VND")}'],
  ['Nhóm Dịch Vụ', '{tr("Nhóm Dịch Vụ", "Service Group")}'],
  ['Tên Dịch Vụ', '{tr("Tên Dịch Vụ", "Service Name")}'],
  ['Ghi chú', '{tr("Ghi chú", "Notes")}'],
  ['Giá Khách Mới', '{tr("Giá Khách Mới", "New Client Price")}'],
  ['Giá Thành Viên', '{tr("Giá Thành Viên", "Member Price")}'],
  ['Gói An Tâm Nhà Cửa', '{tr("Gói An Tâm Nhà Cửa", "Peace of Mind Home Care")}'],
  ['Gói Đồng Hành Khám Bệnh', '{tr("Gói Đồng Hành Khám Bệnh", "Hospital Companionship Package")}'],
  ['Dịch vụ Khác', '{tr("Dịch vụ Khác", "Other Services")}'],
  ['Gói lẻ', '{tr("Gói lẻ", "Single Session")}'],
  ['4 tiếng/ ca', '{tr("4 tiếng/ ca", "4 hours / session")}'],
  ['Gói tháng', '{tr("Gói tháng", "Monthly Package")}'],
  ['4 ca/ tháng', '{tr("4 ca/ tháng", "4 sessions / month")}'],
  ['Trọn gói chăm sóc', '{tr("Trọn gói chăm sóc", "Full Care Bundle")}'],
  ['Khám bệnh (≤ 4 giờ)', '{tr("Khám bệnh (≤ 4 giờ)", "Medical Checkup (≤ 4 hrs)")}'],
  ['Khám bệnh (≤ 6 giờ)', '{tr("Khám bệnh (≤ 6 giờ)", "Medical Checkup (≤ 6 hrs)")}'],
  ['Khám bệnh (≤ 8 giờ)', '{tr("Khám bệnh (≤ 8 giờ)", "Medical Checkup (≤ 8 hrs)")}'],
  ['Vượt giờ', '{tr("Vượt giờ", "Overtime")}'],
  ['Mỗi giờ', '{tr("Mỗi giờ", "Per hour")}'],
  ['Chăm sóc người ốm tại nhà/ bệnh viện', '{tr("Chăm sóc người ốm tại nhà/ bệnh viện", "In-home / Hospital sick care")}'],
  ['Tập phục hồi chức năng', '{tr("Tập phục hồi chức năng", "Rehabilitation therapy")}'],
  ['từ 650.000 đ/ngày', '{tr("từ 650.000 đ/ngày", "from 650,000 VND / day")}'],
  ['từ 700.000 đ/ca', '{tr("từ 700.000 đ/ca", "from 700,000 VND / session")}'],
  ['từ 650.000đ/ngày', '{tr("từ 650.000đ/ngày", "from 650,000 VND / day")}'],
  ['từ 700.000đ/ca', '{tr("từ 700.000đ/ca", "from 700,000 VND / session")}'],
  ['Kết nối cùng chúng tôi', '{tr("Kết nối cùng chúng tôi", "Connect With Us")}'],
  ['Dành cho khách hàng', '{tr("Dành cho khách hàng", "For Customers")}'],
  ['Chúng tôi sẽ liên hệ lại ngay trong 4 tiếng.', '{tr("Chúng tôi sẽ liên hệ lại ngay trong 4 tiếng.", "We will contact you within 4 hours.")}'],
  ['Thông tin sẽ được bảo mật theo chính sách cam kết của', '{tr("Thông tin sẽ được bảo mật theo chính sách cam kết của", "Information is secured according to the privacy policy of")}'],
  ['Họ và tên', '{tr("Họ và tên", "Full Name")}'],
  ['Nhập họ và tên của bạn', '{tr("Nhập họ và tên của bạn", "Enter your full name")}'],
  ['Số điện thoại', '{tr("Số điện thoại", "Phone Number")}'],
  ['Người cần hỗ trợ đang sinh sống tại', '{tr("Người cần hỗ trợ đang sinh sống tại", "Senior location / address")}'],
  ['Nhập địa chỉ hoặc khu vực', '{tr("Nhập địa chỉ hoặc khu vực", "Enter address or city/district")}'],
  ['Câu chuyện của chúng tôi', '{tr("Câu chuyện của chúng tôi", "Our Story")}'],
  ['Tâm nguyện từ trái tim', '{tr("Tâm nguyện từ trái tim", "A Wish From The Heart")}'],
  ['Quy trình hoạt động của', '{tr("Quy trình hoạt động của", "Operation Process of")}'],
  ['Thông tin liên hệ', '{tr("Thông tin liên hệ", "Contact Information")}'],
  ['Văn phòng đại diện tại Hà Nội', '{tr("Văn phòng đại diện tại Hà Nội", "Hanoi Representative Office")}'],
  ['Địa chỉ', '{tr("Địa chỉ", "Address")}'],
  ['Tầng 12, Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP. Hồ Chí Minh', '{tr("Tầng 12, Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP. Hồ Chí Minh", "12th Floor, Innovation Building, Quang Trung Software City, District 12, Ho Chi Minh City")}'],
  ['Các hoạt động bao gồm trong gói:', '{tr("Các hoạt động bao gồm trong gói:", "Activities included in package:")}'],
  ['Xem bảng giá chi tiết', '{tr("Xem bảng giá chi tiết", "View Detailed Pricing")}']
];

replacements.forEach(([from, to]) => {
  content = content.replaceAll(from, to);
});

fs.writeFileSync(landingPath, content, 'utf8');
console.log('Successfully updated LandingPage.jsx with activePageData and full i18n translations!');
