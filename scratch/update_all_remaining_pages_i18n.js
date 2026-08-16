import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Update PrivacyPolicy.jsx
const privacyPath = path.join(__dirname, '../src/pages/PrivacyPolicy.jsx');
let privacyContent = fs.readFileSync(privacyPath, 'utf8');

privacyContent = privacyContent.replace(
  "import React, { useEffect } from 'react';",
  "import React, { useEffect } from 'react';\nimport { useAppTranslation } from '../utils/i18nHelper';"
);

privacyContent = privacyContent.replace(
  "const PrivacyPolicy = () => {",
  "const PrivacyPolicy = () => {\n  const { tr } = useAppTranslation();"
);

const privacyReplacements = [
  ['<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">Chính sách bảo mật</h1>', '<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">{tr("Chính sách bảo mật", "Privacy Policy")}</h1>'],
  ['Vui lòng đọc kỹ chính sách này để hiểu rõ cách', '{tr("Vui lòng đọc kỹ chính sách này để hiểu rõ cách", "Please read this policy carefully to understand how")}'],
  ['thu thập, sử dụng và bảo vệ thông tin của bạn.', '{tr("thu thập, sử dụng và bảo vệ thông tin của bạn.", "collects, uses, and protects your information.")}'],
  ['<span className="material-symbols-outlined text-base text-primary">toc</span> Mục lục', '<span className="material-symbols-outlined text-base text-primary">toc</span> {tr("Mục lục", "Table of Contents")}'],
  ['1. Cam kết bảo mật', '{tr("1. Cam kết bảo mật", "1. Privacy Commitment")}'],
  ['2. Thông tin cá nhân', '{tr("2. Thông tin cá nhân", "2. Personal Data")}'],
  ['3. Thu thập &amp; Mục đích', '{tr("3. Thu thập & Mục đích", "3. Collection & Purpose")}'],
  ['4. Cách sử dụng', '{tr("4. Cách sử dụng", "4. How We Use Data")}'],
  ['5. Tiết lộ bên thứ ba', '{tr("5. Tiết lộ bên thứ ba", "5. Third-Party Disclosure")}'],
  ['6. Lưu trữ &amp; Bảo mật', '{tr("6. Lưu trữ & Bảo mật", "6. Storage & Security")}'],
  ['7. Quyền của Người dùng', '{tr("7. Quyền của Người dùng", "7. User Rights")}'],
  ['8. Cookies', '{tr("8. Cookies", "8. Cookies")}'],
  ['9. Liên hệ', '{tr("9. Liên hệ", "9. Contact Us")}'],
  ['10. Thay đổi chính sách', '{tr("10. Thay đổi chính sách", "10. Policy Changes")}']
];

privacyReplacements.forEach(([from, to]) => {
  privacyContent = privacyContent.replaceAll(from, to);
});

fs.writeFileSync(privacyPath, privacyContent, 'utf8');

// 2. Update TermsOfUse.jsx
const termsPath = path.join(__dirname, '../src/pages/TermsOfUse.jsx');
let termsContent = fs.readFileSync(termsPath, 'utf8');

termsContent = termsContent.replace(
  "import React, { useEffect } from 'react';",
  "import React, { useEffect } from 'react';\nimport { useAppTranslation } from '../utils/i18nHelper';"
);

termsContent = termsContent.replace(
  "const TermsOfUse = () => {",
  "const TermsOfUse = () => {\n  const { tr } = useAppTranslation();"
);

const termsReplacements = [
  ['<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">Điều khoản sử dụng</h1>', '<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-plum-deep mb-2">{tr("Điều khoản sử dụng", "Terms of Use")}</h1>'],
  ['Vui lòng đọc kỹ các điều khoản này trước khi sử dụng nền tảng', '{tr("Vui lòng đọc kỹ các điều khoản này trước khi sử dụng nền tảng", "Please read these terms carefully before using the platform")}'],
  ['để đảm bảo quyền lợi của bạn.', '{tr("để đảm bảo quyền lợi của bạn.", "to ensure your rights.")}'],
  ['<span className="material-symbols-outlined text-base text-primary">toc</span> Mục lục', '<span className="material-symbols-outlined text-base text-primary">toc</span> {tr("Mục lục", "Table of Contents")}'],
  ['A. Quan hệ hợp đồng', '{tr("A. Quan hệ hợp đồng", "A. Contractual Relationship")}'],
  ['B. Các dịch vụ', '{tr("B. Các dịch vụ", "B. Our Services")}'],
  ['C. Sử dụng dịch vụ / Tài khoản', '{tr("C. Sử dụng dịch vụ / Tài khoản", "C. Service & Account Usage")}'],
  ['D. Thanh toán', '{tr("D. Thanh toán", "D. Payments & Billing")}'],
  ['E. Miễn trừ bảo đảm', '{tr("E. Miễn trừ bảo đảm", "E. Disclaimer of Warranties")}'],
  ['F. Giới hạn trách nhiệm', '{tr("F. Giới hạn trách nhiệm", "F. Limitation of Liability")}'],
  ['G. Bồi thường', '{tr("G. Bồi thường", "G. Indemnification")}'],
  ['H. Các quy định khác', '{tr("H. Các quy định khác", "H. Miscellaneous Terms")}'],
  ['I. Chính sách hoàn tiền', '{tr("I. Chính sách hoàn tiền", "I. Refund Policy")}'],
  ['K. Xử lý khiếu nại', '{tr("K. Xử lý khiếu nại", "K. Dispute Resolution")}']
];

termsReplacements.forEach(([from, to]) => {
  termsContent = termsContent.replaceAll(from, to);
});

fs.writeFileSync(termsPath, termsContent, 'utf8');

// 3. Update Activities.jsx
const activitiesPath = path.join(__dirname, '../src/pages/Activities.jsx');
let activitiesContent = fs.readFileSync(activitiesPath, 'utf8');

activitiesContent = activitiesContent.replace(
  "import React, { useEffect, useState } from 'react';",
  "import React, { useEffect, useState } from 'react';\nimport { useAppTranslation } from '../utils/i18nHelper';"
);

activitiesContent = activitiesContent.replace(
  "const Activities = () => {",
  "const Activities = () => {\n  const { tr } = useAppTranslation();"
);

const activitiesReplacements = [
  ['Hành trình lan tỏa yêu thương &amp; Chăm sóc cộng đồng', '{tr("Hành trình lan tỏa yêu thương & Chăm sóc cộng đồng", "A Journey Spreading Love & Community Care")}'],
  ['Tại 247care, chúng tôi không chỉ cung cấp dịch vụ y tế mà còn xây dựng một hệ sinh thái chăm sóc nhân văn, nơi mỗi cá nhân đều cảm nhận được sự ấm áp và tôn trọng.', '{tr("Tại ANTcare, chúng tôi không chỉ cung cấp dịch vụ y tế mà còn xây dựng một hệ sinh thái chăm sóc nhân văn, nơi mỗi cá nhân đều cảm nhận được sự ấm áp và tôn trọng.", "At ANTcare, we build a humanistic care ecosystem where every individual feels warmth and respect.")}'],
  ['Danh sách hoạt động', '{tr("Danh sách hoạt động", "Activity List")}'],
  ['Cập nhật những chương trình cộng đồng mới nhất từ 247care.', '{tr("Cập nhật những chương trình cộng đồng mới nhất từ ANTcare.", "Update on the latest community programs from ANTcare.")}']
];

activitiesReplacements.forEach(([from, to]) => {
  activitiesContent = activitiesContent.replaceAll(from, to);
});

fs.writeFileSync(activitiesPath, activitiesContent, 'utf8');

// 4. Update NewsDetail.jsx
const newsDetailPath = path.join(__dirname, '../src/pages/NewsDetail.jsx');
let newsDetailContent = fs.readFileSync(newsDetailPath, 'utf8');

newsDetailContent = newsDetailContent.replace(
  "import React, { useEffect, useState, useRef } from 'react';",
  "import React, { useEffect, useState, useRef } from 'react';\nimport { useAppTranslation, translateArticle, getCategoryLabel } from '../utils/i18nHelper';"
);

newsDetailContent = newsDetailContent.replace(
  "const NewsDetail = () => {",
  "const NewsDetail = () => {\n  const { tr, isEn } = useAppTranslation();"
);

newsDetailContent = newsDetailContent.replace(
  "let article = allArticlesList.find(item => item.slug === id || item.id === numericId);",
  "let rawArticle = allArticlesList.find(item => item.slug === id || item.id === numericId);\n  let article = translateArticle(rawArticle, isEn);"
);

const newsDetailReplacements = [
  ['<span>Trở về Tin tức</span>', '<span>{tr("Trở về Tin tức", "Back to News")}</span>'],
  ['{article.category}', '{getCategoryLabel(article.category, isEn)}'],
  ['Không tìm thấy bài viết này.', '{tr("Không tìm thấy bài viết này.", "Article not found.")}'],
  ['Quay lại trang Tin tức', '{tr("Quay lại trang Tin tức", "Return to News")}']
];

newsDetailReplacements.forEach(([from, to]) => {
  newsDetailContent = newsDetailContent.replaceAll(from, to);
});

fs.writeFileSync(newsDetailPath, newsDetailContent, 'utf8');

console.log('Successfully updated PrivacyPolicy.jsx, TermsOfUse.jsx, Activities.jsx, and NewsDetail.jsx with i18n support!');
