const fs = require('fs');

const file = 'dist/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html';
const html = fs.readFileSync(file, 'utf8');

console.log('=== KIỂM TRA NGHIỆM THU FAQ ===\n');

// 1. Đếm số câu hỏi hiển thị trong phần HTML tĩnh (các thẻ <details> hoặc <summary> trong section #faq)
const faqSectionMatch = html.match(/<section[^>]*id="faq"[^>]*>([\s\S]*?)<\/section>/i);
if (!faqSectionMatch) {
  console.error('LỖI: Không tìm thấy section id="faq" trong HTML!');
  process.exit(1);
}

const faqHtml = faqSectionMatch[1];
const summaryMatches = faqHtml.match(/<summary[^>]*>([\s\S]*?)<\/summary>/gi);
console.log(`1. Số câu hỏi hiển thị trên trang: ${summaryMatches ? summaryMatches.length : 0}`);

if (summaryMatches) {
  console.log('\n--- Danh sách câu hỏi hiển thị trên trang ---');
  summaryMatches.forEach((s, idx) => {
    const text = s.replace(/<[^>]+>/g, '').trim();
    console.log(`   ${text}`);
  });
}

// 2. Kiểm tra JSON-LD FAQPage
const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
let faqPage = null;

if (jsonLdMatches) {
  for (const script of jsonLdMatches) {
    const raw = script.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '');
    try {
      const parsed = JSON.parse(raw);
      if (parsed['@type'] === 'FAQPage') {
        faqPage = parsed;
        break;
      }
      if (parsed['@graph']) {
        const found = parsed['@graph'].find(item => item['@type'] === 'FAQPage');
        if (found) {
          faqPage = found;
          break;
        }
      }
    } catch (e) {
      console.error('Lỗi parse JSON-LD:', e.message);
    }
  }
}

if (!faqPage) {
  console.error('\nLỖI: Không tìm thấy schema FAQPage trong JSON-LD!');
  process.exit(1);
}

const questions = faqPage.mainEntity || [];
console.log(`\n2. Số mục "Question" trong FAQPage JSON-LD: ${questions.length}`);

console.log('\n--- Title 8 câu hỏi trong JSON-LD ---');
questions.forEach((q, idx) => {
  console.log(`Câu ${idx + 1}: ${q.name}`);
  console.log(`   -> Trả lời: ${q.acceptedAnswer?.text}\n`);
});

// So sánh tính đồng nhất giữa HTML hiển thị và JSON-LD
const bothEqual8 = (summaryMatches && summaryMatches.length === 8) && (questions.length === 8);
console.log(`\n>>> KẾT LUẬN NGHIỆM THU: ${bothEqual8 ? 'ĐẠT (Cả 2 đều = 8 câu hỏi)' : 'KHÔNG ĐẠT'} <<<`);
