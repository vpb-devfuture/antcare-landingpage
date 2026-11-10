const fs = require('fs');
const path = require('path');

console.log('=== BƯỚC 8: KIỂM TRA TOÀN DIỆN SAU KHI SỬA ===\n');

// 1. Check dist/index.html (Trang chủ)
const indexHtml = fs.readFileSync('dist/index.html', 'utf-8');

// Title & Meta
const titleMatch = indexHtml.match(/<title>(.*?)<\/title>/);
const title = titleMatch ? titleMatch[1] : '';
console.log('1. Trang chủ Title:', title, `(${title.length} chars)`);

const descMatch = indexHtml.match(/<meta name="description" content="(.*?)" \/>/);
const desc = descMatch ? descMatch[1] : '';
console.log('   Trang chủ Meta Description:', desc, `(${desc.length} chars)`);

const canonicalMatch = indexHtml.match(/<link rel="canonical" href="(.*?)" \/>/);
const canonical = canonicalMatch ? canonicalMatch[1] : '';
console.log('   Trang chủ Canonical:', canonical);

// H1 count
const h1Matches = indexHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
console.log('   Trang chủ H1 count:', h1Matches.length);
if (h1Matches.length > 0) {
  console.log('   Trang chủ H1 text:', h1Matches[0].replace(/<[^>]+>/g, '').trim());
}

// JSON-LD in dist/index.html
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    console.log('   Trang chủ JSON-LD: Hợp lệ, @graph items:', parsed['@graph'] ? parsed['@graph'].length : 'No graph');
    const types = (parsed['@graph'] || []).map(g => g['@type']);
    console.log('   Trang chủ Schema types:', types.join(', '));
    // Check no < > placeholders
    const rawLd = jsonLdMatch[1];
    const placeholder = rawLd.match(/<[^>]+>/g);
    console.log('   Trang chủ JSON-LD placeholders (< >):', placeholder ? placeholder : 'Không có (Sạch sẽ)');
  } catch (e) {
    console.error('   Trang chủ JSON-LD Parse ERROR:', e.message);
  }
}

// 2. Check dist/ve-chung-toi/index.html
if (fs.existsSync('dist/ve-chung-toi/index.html')) {
  const aboutHtml = fs.readFileSync('dist/ve-chung-toi/index.html', 'utf-8');
  const abTitle = (aboutHtml.match(/<title>(.*?)<\/title>/) || [])[1];
  const abDesc = (aboutHtml.match(/<meta name="description" content="(.*?)" \/>/) || [])[1];
  const abH1 = (aboutHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []);
  console.log('\n2. /ve-chung-toi:');
  console.log('   Title:', abTitle, `(${abTitle ? abTitle.length : 0} chars)`);
  console.log('   Desc:', abDesc, `(${abDesc ? abDesc.length : 0} chars)`);
  console.log('   H1 count:', abH1.length, abH1[0] ? abH1[0].replace(/<[^>]+>/g, '').trim() : '');
  const abLdMatch = aboutHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (abLdMatch) {
    try {
      const parsed = JSON.parse(abLdMatch[1]);
      console.log('   Schema types:', (parsed['@graph'] || []).map(g => g['@type']).join(', '));
    } catch (e) {
      console.error('   JSON-LD Error:', e.message);
    }
  }
} else {
  console.error('\n2. /ve-chung-toi/index.html does not exist!');
}

// 3. Check dist/cham-soc-nguoi-cao-tuoi/index.html
if (fs.existsSync('dist/cham-soc-nguoi-cao-tuoi/index.html')) {
  const originHtml = fs.readFileSync('dist/cham-soc-nguoi-cao-tuoi/index.html', 'utf-8');
  const ogTitle = (originHtml.match(/<title>(.*?)<\/title>/) || [])[1];
  const ogDesc = (originHtml.match(/<meta name="description" content="(.*?)" \/>/) || [])[1];
  const ogH1 = (originHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []);
  console.log('\n3. /cham-soc-nguoi-cao-tuoi:');
  console.log('   Title:', ogTitle, `(${ogTitle ? ogTitle.length : 0} chars)`);
  console.log('   Desc:', ogDesc, `(${ogDesc ? ogDesc.length : 0} chars)`);
  console.log('   H1 count:', ogH1.length, ogH1[0] ? ogH1[0].replace(/<[^>]+>/g, '').trim() : '');
  console.log('   Has notice block:', originHtml.includes('tạm dừng nhận khách mới'));
  console.log('   Has id="dich-vu":', originHtml.includes('id="dich-vu"'));
  console.log('   Has id="bang-gia-chi-tiet":', originHtml.includes('id="bang-gia-chi-tiet"'));
} else {
  console.error('\n3. /cham-soc-nguoi-cao-tuoi/index.html does not exist!');
}

// 4. Check dist/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html
if (fs.existsSync('dist/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html')) {
  const svcHtml = fs.readFileSync('dist/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi/index.html', 'utf-8');
  console.log('\n4. /dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi:');
  console.log('   Has notice block:', svcHtml.includes('tạm dừng nhận khách mới'));
  console.log('   Has /cham-soc-nguoi-cao-tuoi in breadcrumb:', svcHtml.includes('/cham-soc-nguoi-cao-tuoi'));
  console.log('   Has remaining /#dich-vu:', svcHtml.includes('/#dich-vu'));
  console.log('   Has remaining /#bang-gia-chi-tiet:', svcHtml.includes('/#bang-gia-chi-tiet'));
}

// 5. Check 1 article /kinh-nguyet/
const sampleArticlePath = 'dist/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi/index.html';
if (fs.existsSync(sampleArticlePath)) {
  const artHtml = fs.readFileSync(sampleArticlePath, 'utf-8');
  const artTitle = (artHtml.match(/<title>(.*?)<\/title>/) || [])[1];
  const artH1 = (artHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []);
  console.log('\n5. Bài viết mẫu /kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi:');
  console.log('   Title:', artTitle);
  console.log('   H1 count:', artH1.length);
  const artLd = artHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (artLd) {
    try {
      const parsed = JSON.parse(artLd[1]);
      console.log('   Schema Type:', parsed['@type']);
      console.log('   Schema Publisher:', parsed.publisher ? parsed.publisher.name : 'None');
    } catch (e) {
      console.error('   JSON-LD Error:', e.message);
    }
  }
}

// 6. Check 301 redirects for /quan-lot-tham-hut
console.log('\n6. Chuyển hướng /quan-lot-tham-hut:');
const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf-8'));
const r1 = vercelConfig.redirects.find(r => r.source === '/quan-lot-tham-hut');
console.log('   vercel.json /quan-lot-tham-hut ->', r1 ? `${r1.destination} (permanent: ${r1.permanent})` : 'NOT FOUND');
const staticRedirFile = 'dist/quan-lot-tham-hut/index.html';
if (fs.existsSync(staticRedirFile)) {
  const content = fs.readFileSync(staticRedirFile, 'utf-8');
  console.log('   Static HTML redirect /quan-lot-tham-hut exists, canonical:', (content.match(/href="(.*?)"/) || [])[1]);
}

// 7. Check Sitemap, Robots, LLMS
console.log('\n7. Sitemap, Robots, LLMS:');
console.log('   dist/robots.txt exists:', fs.existsSync('dist/robots.txt'));
console.log('   dist/llms.txt exists:', fs.existsSync('dist/llms.txt'));
console.log('   dist/sitemap.xml exists:', fs.existsSync('dist/sitemap.xml'));
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf-8');
console.log('   sitemap contains /quan-lot-tham-hut:', sitemap.includes('/quan-lot-tham-hut'));
console.log('   sitemap contains /ve-chung-toi:', sitemap.includes('/ve-chung-toi'));
console.log('   sitemap contains /cham-soc-nguoi-cao-tuoi:', sitemap.includes('/cham-soc-nguoi-cao-tuoi'));

// 8. Check prohibited words in dist/index.html and dist/ve-chung-toi/index.html
console.log('\n8. Kiểm tra từ cấm trên trang sản phẩm và thương hiệu:');
const prohibitedWords = ['kháng khuẩn', '100+ lần', '100% chống tràn'];
prohibitedWords.forEach(w => {
  const inIndex = indexHtml.toLowerCase().includes(w.toLowerCase());
  console.log(`   Trang chủ chứa "${w}":`, inIndex ? 'CÓ (CẦN SỬA)' : 'KHÔNG (CHUẨN)');
});

// 9. Check founding year / legal entity / tax ID in HTML
console.log('\n9. Kiểm tra thông tin pháp nhân/năm thành lập:');
const sensitiveWords = ['thành lập năm', 'mã số thuế', 'MST:', 'người sáng lập'];
sensitiveWords.forEach(w => {
  const inIndex = indexHtml.toLowerCase().includes(w.toLowerCase());
  console.log(`   Trang chủ chứa "${w}":`, inIndex ? 'CÓ (CẦN BỎ)' : 'KHÔNG (CHUẨN)');
});

