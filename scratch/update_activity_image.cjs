const fs = require('fs');
const path = require('path');

const activitiesFilePath = path.join(__dirname, '../src/data/activities.json');
const activities = JSON.parse(fs.readFileSync(activitiesFilePath, 'utf8'));

const article = activities.find(a => a.slug === 'thang-hanh-dong-vi-nguoi-cao-tuoi-2026-phu-dien');

if (article) {
  article.content = article.content.replace(
    /<figure style="margin: 28px 0; text-align: center;">[\s\S]*?<\/figure>/,
    `<figure style="margin: 28px 0; text-align: center;">
    <img src="/images/tin-tuc/thang-hanh-dong-nguoi-cao-tuoi-2026-standee.jpg" alt="Standee Tháng hành động vì Người cao tuổi 2026 — ANTCARE – Kiến chăm tổ" style="max-width: 420px; width: 100%; max-height: 600px; object-fit: contain; border-radius: 12px; background: #fff; border: 1px solid #e5e7eb; margin: 0 auto; display: block;">
    <figcaption style="font-size: 0.85rem; color: #6b7280; text-align: center; margin-top: 8px;">Standee Tháng hành động vì Người cao tuổi 2026 thông điệp "Sống chủ động — Già chủ động".</figcaption>
</figure>`
  );

  fs.writeFileSync(activitiesFilePath, JSON.stringify(activities, null, 2), 'utf8');
  console.log('Successfully updated article 2nd image with Standee banner!');
} else {
  console.error('Article not found!');
}
