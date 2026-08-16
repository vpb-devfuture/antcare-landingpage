import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const recruitJsxPath = path.join(__dirname, '../src/pages/Recruitment.jsx');
let content = fs.readFileSync(recruitJsxPath, 'utf8');

content = content.replace(
  "import { useTranslation } from 'react-i18next';",
  "import { useAppTranslation } from '../utils/i18nHelper';"
);

content = content.replace(
  "const { t } = useTranslation();",
  "const { t, isEn, tr } = useAppTranslation();"
);

const replacements = [
  ['DÀNH CHO ĐỐI TÁC &amp; TUYỂN DỤNG', '{tr("DÀNH CHO ĐỐI TÁC & TUYỂN DỤNG", "FOR PARTNERS & CAREERS")}'],
  ['Tuyển Dụng &amp; Hợp Tác Cùng', '{tr("Tuyển Dụng & Hợp Tác Cùng", "Careers & Partnership With")}'],
  ['Hãy hợp tác cùng chúng tôi vì một tiêu chuẩn chăm sóc gia đình Việt hiện đại, uy tín và tận tâm.', '{tr("Hãy hợp tác cùng chúng tôi vì một tiêu chuẩn chăm sóc gia đình Việt hiện đại, uy tín và tận tâm.", "Partner with us to build a modern, prestigious, and devoted standard of family care.")}'],
  ['Kết nối cùng chúng tôi', '{tr("Kết nối cùng chúng tôi", "Connect With Us")}'],
  ['Dịch vụ của chúng tôi phù hợp cho nhiều đối tượng đang đi học hoặc đã đi làm gồm:', '{tr("Dịch vụ của chúng tôi phù hợp cho nhiều đối tượng đang đi học hoặc đã đi làm gồm:", "Our opportunities are suitable for students, graduates, and working professionals including:")}'],
  ['Cá nhân muốn tìm kiếm 1 công việc có thời gian linh hoạt', '{tr("Cá nhân muốn tìm kiếm 1 công việc có thời gian linh hoạt", "Individuals seeking flexible part-time work")}'],
  ['Sinh viên đại học, cao đẳng y tế/ điều dưỡng', '{tr("Sinh viên đại học, cao đẳng y tế/ điều dưỡng", "Medical & nursing college/university students")}'],
  ['Điều dưỡng viên, kỹ thuật viên y tế muốn gia tăng thu nhập', '{tr("Điều dưỡng viên, kỹ thuật viên y tế muốn gia tăng thu nhập", "Nurses and medical technicians seeking extra income")}'],
  ['Đơn vị/ Tổ chức muốn hợp tác cung ứng nhân sự', '{tr("Đơn vị/ Tổ chức muốn hợp tác cung ứng nhân sự", "Organizations seeking staff supply partnerships")}'],
  ['Đăng ký thông tin hợp tác', '{tr("Đăng ký thông tin hợp tác", "Register Partnership Info")}'],
  ['Tên của bạn/ Tên đơn vị', '{tr("Tên của bạn/ Tên đơn vị", "Your Name / Organization Name")}'],
  ['Số điện thoại liên hệ', '{tr("Số điện thoại liên hệ", "Contact Phone Number")}'],
  ['Khu vực sinh sống / Hoạt động', '{tr("Khu vực sinh sống / Hoạt động", "Living / Operating Area")}'],
  ['Kinh nghiệm / Ghi chú khác (không bắt buộc)', '{tr("Kinh nghiệm / Ghi chú khác (không bắt buộc)", "Experience / Notes (Optional)")}'],
  ['Gửi Thông Tin Hợp Tác', '{tr("Gửi Thông Tin Hợp Tác", "Submit Partnership Request")}'],
  ['Quyền lợi hợp tác độc quyền', '{tr("Quyền lợi hợp tác độc quyền", "Exclusive Partner Benefits")}'],
  ['Môi trường nhân văn &amp; thu nhập xứng đáng cho đối tác', '{tr("Môi trường nhân văn & thu nhập xứng đáng cho đối tác", "Humanistic environment & worthy income for partners")}']
];

replacements.forEach(([from, to]) => {
  content = content.replaceAll(from, to);
});

fs.writeFileSync(recruitJsxPath, content, 'utf8');
console.log('Successfully updated Recruitment.jsx with i18n translations!');
