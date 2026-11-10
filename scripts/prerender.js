import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const newsJsonPath = path.join(rootDir, 'src', 'data', 'news.json');
const activitiesJsonPath = path.join(rootDir, 'src', 'data', 'activities.json');

const DOMAIN = 'https://antcare.vn';

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function cleanDescription(desc) {
  if (!desc) return '';
  return desc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function ensureSingleH1(html, fallbackH1Title) {
  // Count existing H1 tags
  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    return `<h1 class="text-2xl sm:text-3xl font-extrabold text-[#2A1B3D] mb-4">${fallbackH1Title}</h1>\n` + html;
  }
  if (h1Matches.length === 1) {
    return html;
  }
  // If multiple H1s, keep the first one and change subsequent H1s to H2
  let count = 0;
  return html.replace(/<(\/?)h1([^>]*)>/gi, (match, close, rest) => {
    if (!close) {
      count++;
      if (count > 1) return `<h2${rest}>`;
      return match;
    } else {
      if (count > 1) return `</h2>`;
      return match;
    }
  });
}

export function runPrerender() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found! Please run "vite build" first.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

  const sitemapUrls = [];

  function writeStaticPage({
    relativeUrl, // e.g. '/', '/activities', '/news/checklist-...'
    title,
    description,
    canonical,
    ogImage,
    h1Title,
    bodyContent,
    jsonLd,
    priority = '0.8',
    changefreq = 'weekly',
    lastmod = new Date().toISOString().split('T')[0]
  }) {
    const isRoot = relativeUrl === '/' || relativeUrl === '';
    const cleanPath = relativeUrl.replace(/^\//, '').replace(/\/$/, '');
    const targetDir = isRoot ? distDir : path.join(distDir, ...cleanPath.split('/'));
    fs.mkdirSync(targetDir, { recursive: true });

    let pageHtml = baseHtml;

    // 1. Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

    // 2. Meta description
    const safeDesc = cleanDescription(description);
    if (pageHtml.includes('name="description"')) {
      pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${escapeHtml(safeDesc)}" />`);
    } else {
      pageHtml = pageHtml.replace('</head>', `  <meta name="description" content="${escapeHtml(safeDesc)}" />\n</head>`);
    }

    // 3. Canonical (MUST BE EXACT SELF-REFERENCING)
    if (pageHtml.includes('rel="canonical"')) {
      pageHtml = pageHtml.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonical}" />`);
    } else {
      pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
    }

    // 4. Open Graph tags
    pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
    pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${escapeHtml(safeDesc)}" />`);
    pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonical}" />`);
    if (ogImage) {
      const fullImg = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
      pageHtml = pageHtml.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${fullImg}" />`);
    }

    // 5. Injects JSON-LD (Replace existing ld+json or append)
    if (jsonLd) {
      const jsonLdStr = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
      if (pageHtml.includes('type="application/ld+json"')) {
        pageHtml = pageHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, jsonLdStr);
      } else {
        pageHtml = pageHtml.replace('</head>', `  ${jsonLdStr}\n</head>`);
      }
    }

    // 6. Injects Body HTML into <div id="root"> ensuring EXACTLY 1 H1
    if (bodyContent) {
      const singleH1Content = ensureSingleH1(bodyContent, h1Title || title);
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${singleH1Content}</div>`);
    }

    const outPath = isRoot ? path.join(distDir, 'index.html') : path.join(targetDir, 'index.html');
    fs.writeFileSync(outPath, pageHtml, 'utf8');

    // Add to sitemap collection
    sitemapUrls.push({
      loc: canonical,
      lastmod,
      changefreq,
      priority
    });
  }

    // ==========================================
  // 1. TRANG CHỦ (/) - THƯƠNG HIỆU ĐỒ LÓT CHỨC NĂNG
  // ==========================================
  const homeTitle = "ANTCARE – Quần kinh nguyệt & quần chống són tiểu";
  const homeDesc = "ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt.";
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://antcare.vn/#org",
        "name": "ANTCARE",
        "alternateName": ["ANTCARE – Kiến chăm tổ", "Kiến chăm tổ"],
        "url": "https://antcare.vn/",
        "logo": "https://antcare.vn/images/footer-logo.png",
        "description": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.",
        "telephone": "+84969032360",
        "areaServed": {
          "@type": "Country",
          "name": "Việt Nam"
        },
        "knowsAbout": [
          "quần kinh nguyệt",
          "quần chống són tiểu",
          "đồ lót chức năng",
          "sức khỏe kinh nguyệt",
          "són tiểu ở phụ nữ",
          "chăm sóc người cao tuổi"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn",
          "addressLocality": "Hà Nội",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61593117245344",
          "https://www.youtube.com/@Antcare-kienchamto",
          "https://www.tiktok.com/@antcare_group"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+84969032360",
          "contactType": "customer service",
          "availableLanguage": "vi"
        }
      },
      {
        "@type": "Brand",
        "@id": "https://antcare.vn/#brand",
        "name": "ANTCARE",
        "description": "Thương hiệu đồ lót chức năng: quần kinh nguyệt, quần chống són tiểu."
      },
      {
        "@type": "WebSite",
        "@id": "https://antcare.vn/#website",
        "url": "https://antcare.vn/",
        "name": "ANTCARE",
        "inLanguage": "vi",
        "publisher": { "@id": "https://antcare.vn/#org" }
      },
      {
        "@type": "WebPage",
        "@id": "https://antcare.vn/#webpage",
        "url": "https://antcare.vn/",
        "name": "ANTCARE – Quần kinh nguyệt & quần chống són tiểu",
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "about": { "@id": "https://antcare.vn/#org" },
        "inLanguage": "vi"
      },
      {
        "@type": "FAQPage",
        "@id": "https://antcare.vn/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ANTCARE là thương hiệu gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được. ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội."
            }
          },
          {
            "@type": "Question",
            "name": "Quần kinh nguyệt có thay được băng vệ sinh không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với ngày ra ít và trung bình, quần kinh nguyệt thường dùng một mình được. Ngày ra rất nhiều có thể kết hợp với băng hoặc cốc nguyệt san."
            }
          },
          {
            "@type": "Question",
            "name": "Quần chống són tiểu dùng cho ai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cho người són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười, vận động, còn tự sinh hoạt. Són tiểu nặng nên dùng sản phẩm chuyên dụng theo tư vấn y tế."
            }
          },
          {
            "@type": "Question",
            "name": "Quần thấm hút có vệ sinh không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có, nếu thay kịp thời, xả nước lạnh, giặt bằng xà phòng dịu, không dùng nước xả vải và phơi khô hoàn toàn."
            }
          },
          {
            "@type": "Question",
            "name": "Khi nào sản phẩm ANTCARE ra mắt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sản phẩm đang được hoàn thiện. Hãy để lại số điện thoại để nhận thông tin sớm nhất."
            }
          },
          {
            "@type": "Question",
            "name": "ANTCARE còn dịch vụ chăm sóc người cao tuổi không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANTCARE cung cấp các dịch vụ chăm sóc người cao tuổi tại Hà Nội: Trợ lý sức khỏe tại nhà, đưa người cao tuổi đi khám bệnh viện và giải pháp an tâm nhà cửa."
            }
          }
        ]
      }
    ]
  };

  const homeBody = `
    <main class="antcare-home-prerender max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <header class="mb-8">
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-[#1C1917] leading-tight tracking-tight">
          ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu
        </h1>
        <div class="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 sm:p-7 rounded-r-2xl my-6 text-left">
          <p class="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
            <strong class="text-[#6633B4] font-bold">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu có lõi thấm hút, giặt và dùng lại được.</strong> ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe cho người cao tuổi và phụ nữ tại Hà Nội. Từ những người mình chăm sóc, chúng tôi thấy tã, bỉm và băng vệ sinh dùng một lần thường gây bí, cọ xát, kích ứng da, nên phát triển những chiếc quần mặc như quần lót bình thường nhưng thấm hút được máu kinh hoặc nước tiểu rỉ nhẹ.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 items-center">
          <a href="#dang-ky" class="px-8 py-3.5 rounded-full bg-[#FD711A] text-white font-bold text-base shadow-md">Nhận thông tin ra mắt</a>
          <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="px-8 py-3.5 rounded-full bg-[#6633B4] text-white font-bold text-base shadow-md">Tư vấn Zalo 0969 032 360</a>
        </div>
        <p class="text-xs text-[#78716C] italic mt-3">
          Sản phẩm đang trong giai đoạn hoàn thiện. Thông số, chứng nhận vải và giá sẽ được công bố khi ra mắt.
        </p>
      </header>

      <section id="van-de" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Vì sao phụ nữ và người cao tuổi cần một lựa chọn khác tã, bỉm, băng vệ sinh dùng một lần?</h2>
        <ul class="space-y-3 text-slate-700">
          <li><strong>Bí và ẩm:</strong> Sản phẩm dùng một lần giữ ẩm sát da khi dùng lâu, nhất là khí hậu nóng ẩm Việt Nam.</li>
          <li><strong>Cọ xát, hăm, kích ứng:</strong> Mép băng, cánh băng, keo dán, hương liệu dễ gây đỏ rát vùng bẹn.</li>
          <li><strong>Xô lệch, tràn:</strong> Băng dễ xô khi vận động thể thao hoặc khi ngủ trở mình ban đêm.</li>
          <li><strong>Ngại và bất tiện:</strong> Người són tiểu nhẹ không muốn mặc bỉm; phụ nữ phải mang băng theo, lo tìm thùng rác.</li>
          <li><strong>Nhiều rác thải:</strong> Mỗi người dùng hàng nghìn sản phẩm dùng một lần trong suốt cuộc đời.</li>
        </ul>
      </section>

      <section id="quan-kinh-nguyet" class="py-10 border-t border-[#E8DFD5] relative">
        <div id="quan-lot-tham-hut" class="absolute -top-20"></div>
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Quần kinh nguyệt ANTCARE – mặc như quần lót, thấm như băng vệ sinh</h2>
        <p class="text-slate-700 mb-4">Quần kinh nguyệt có phần đáy nhiều lớp: lớp tiếp xúc da mềm dịu, lõi thấm giữ máu kinh, lớp chống thấm giúp không thấm ra quần ngoài. Bạn mặc như quần lót bình thường, không cần dán keo hay đặt bất kỳ dụng cụ nào vào cơ thể.</p>
        <ul class="space-y-2 text-slate-700 mb-4">
          <li>• <strong>Dùng cho:</strong> Ngày ra ít đến trung bình có thể dùng một mình; ngày ra nhiều dùng làm lớp dự phòng êm ái cùng cốc nguyệt san hoặc băng vệ sinh; ban đêm thoải mái xoay người.</li>
          <li>• <strong>Phù hợp:</strong> Học sinh tuổi dậy thì, phụ nữ văn phòng, phụ nữ hay tràn ban đêm, da nhạy cảm với keo và mép băng, tuổi tiền mãn kinh chu kỳ thất thường.</li>
          <li>• <strong>Dáng chủ lực:</strong> Boy short cạp cao ôm đùi mềm mại, giữ vùng thấm ổn định không xô lệch khi ngồi lâu hoặc khi ngủ.</li>
        </ul>
        <div class="space-y-1 text-sm text-[#6633B4]">
          <p><a href="/kinh-nguyet/ngay-kinh-nguyet-nen-dung-gi" class="hover:underline">→ Ngày kinh nguyệt nên dùng gì? So sánh 5 lựa chọn</a></p>
          <p><a href="/kinh-nguyet/chon-quan-kinh-nguyet-theo-luong-kinh" class="hover:underline">→ Cách chọn quần kinh nguyệt theo lượng kinh: nhẹ, trung bình, nhiều</a></p>
          <p><a href="/kinh-nguyet/quan-kinh-nguyet-tham-duoc-bao-nhieu-ml" class="hover:underline">→ Quần kinh nguyệt thấm được bao nhiêu ml máu so với lượng kinh thực tế?</a></p>
        </div>
      </section>

      <section id="quan-chong-son-tieu" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Quần chống són tiểu ANTCARE – cho những lần rỉ nhẹ khi ho, hắt hơi, vận động</h2>
        <p class="text-slate-700 mb-4">Són tiểu nhẹ rất phổ biến ở phụ nữ sau sinh, độ tuổi tiền mãn kinh và người cao tuổi. Quần chống són tiểu có lõi thấm hút nhanh và vùng bảo vệ phía trước, mặc kín đáo như đồ lót bình thường, không gây cảm giác mặc bỉm tã.</p>
        <ul class="space-y-2 text-slate-700 mb-4">
          <li>• <strong>Phù hợp:</strong> Són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười, mang vác, tập thể dục; người lớn tuổi còn tự chủ sinh hoạt.</li>
          <li>• <strong>Chưa phù hợp:</strong> Tiểu không tự chủ mức độ nặng, người nằm một chỗ (nên dùng sản phẩm chuyên dụng theo tư vấn y tế).</li>
          <li>• <em>Lưu ý: Quần thấm hút giúp thoải mái hơn trong sinh hoạt, không điều trị bệnh són tiểu.</em></li>
        </ul>
        <div class="space-y-1 text-sm text-[#FD711A]">
          <p><a href="/son-tieu" class="hover:underline">→ Cẩm nang Són tiểu & Bài tập sàn chậu Kegel</a></p>
          <p><a href="/news/son-tieu-khi-ho-hat-hoi-cuoi" class="hover:underline">→ Són tiểu khi ho, hắt hơi, cười: nguyên nhân và cách xử lý</a></p>
          <p><a href="/news/son-tieu-sau-sinh" class="hover:underline">→ Són tiểu sau sinh: khi nào hết và cần làm gì?</a></p>
        </div>
      </section>

      <section id="so-sanh" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">So sánh các giải pháp cho ngày kinh nguyệt và són tiểu</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#F6F1FC] text-[#6633B4]">
                <th class="p-3">Giải pháp</th>
                <th class="p-3">Ưu điểm</th>
                <th class="p-3">Nhược điểm</th>
                <th class="p-3">Tác động môi trường</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E8DFD5]">
              <tr><td class="p-3 font-bold">Quần kinh nguyệt / Quần chống són</td><td class="p-3">Mặc như quần lót, mềm, không xô lệch, không rác thải mỗi lần dùng</td><td class="p-3">Cần giặt phơi đúng cách, chi phí mua ban đầu cao hơn 1 gói băng</td><td class="p-3">Dùng lại nhiều lần, giảm rác thải nhựa</td></tr>
              <tr><td class="p-3 font-bold">Băng vệ sinh dùng một lần</td><td class="p-3">Dễ mua, tiện lợi, không phải giặt</td><td class="p-3">Bí, dễ cọ xát, cánh băng cọ bẹn, dễ xô lệch khi ngủ</td><td class="p-3">Rác thải lớn, chứa nhựa và vi nhựa</td></tr>
              <tr><td class="p-3 font-bold">Tampon</td><td class="p-3">Gọn gàng, bơi được</td><td class="p-3">Phải đưa vào âm đạo, nguy cơ hội chứng sốc độc tố (TSS) nếu quên</td><td class="p-3">Rác thải dùng một lần</td></tr>
              <tr><td class="p-3 font-bold">Cốc / Đĩa nguyệt san</td><td class="p-3">Chứa nhiều máu, dùng lại nhiều năm</td><td class="p-3">Cần kỹ năng đặt và tháo, không phải ai cũng quen đưa vào cơ thể</td><td class="p-3">Rất ít rác thải</td></tr>
              <tr><td class="p-3 font-bold">Bỉm / Tã người lớn</td><td class="p-3">Chứa lượng nước tiểu lớn, hợp tiểu nặng</td><td class="p-3">Dày cộm, sột soạt, bí nóng, tâm lý ngại mặc khi còn tự sinh hoạt</td><td class="p-3">Khó phân hủy, rác thải lớn</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="cam-ket" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Cam kết minh bạch của ANTCARE</h2>
        <ul class="space-y-3 text-slate-700">
          <li>✓ <strong>Công bố rõ cấu tạo và chất liệu:</strong> Chi tiết từng lớp vải tiếp xúc, lớp lõi thấm hút và màng chống thấm khi ra mắt.</li>
          <li>✓ <strong>Không thêm hóa chất PFAS:</strong> Chỉ hợp tác với nhà sản xuất chứng minh được màng chống thấm không thêm PFAS và có chứng nhận vải tra cứu được (OEKO-TEX Standard 100).</li>
          <li>✓ <strong>Thông số từ thử nghiệm thực tế:</strong> Công bố mức thấm (ml) và độ bền giặt dựa trên kết quả kiểm nghiệm, không quảng cáo chung chung.</li>
          <li>✓ <strong>Đồng hành bằng tiếng Việt:</strong> Hướng dẫn giặt, bảo quản và tư vấn chọn size tận tình qua Zalo 0969 032 360.</li>
        </ul>
      </section>

      <section id="cau-chuyen" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Bắt nguồn từ chăm sóc người cao tuổi và phụ nữ</h2>
        <p class="text-slate-700 mb-4">ANTCARE – Kiến chăm tổ bắt đầu với dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Khi đồng hành cùng người cao tuổi và lắng nghe các mẹ, các chị, chúng tôi nhận thấy són tiểu, những ngày đèn đỏ khó chịu và làn da kích ứng do tã bỉm băng vệ sinh là nỗi lo có thật nhưng ít được quan tâm. Đó là lý do ANTCARE chuyển hướng tập trung phát triển đồ lót chức năng giặt dùng lại.</p>
        <p><a href="/ve-chung-toi" class="text-[#6633B4] font-bold hover:underline">→ Đọc toàn bộ câu chuyện về ANTCARE</a> | <a href="/cham-soc-nguoi-cao-tuoi" class="text-[#FD711A] font-bold hover:underline">→ Khởi nguồn: dịch vụ chăm sóc người cao tuổi</a></p>
      </section>

      <section id="cam-nang" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Cẩm nang kinh nguyệt và són tiểu</h2>
        <p class="text-slate-700 mb-4">Tổng hợp kiến thức khoa học, hướng dẫn chăm sóc sức khỏe kinh nguyệt và són tiểu từ chuyên gia.</p>
        <p><a href="/kinh-nguyet" class="px-6 py-2.5 rounded-full bg-[#6633B4] text-white font-bold text-sm inline-block">Xem tất cả bài viết cẩm nang →</a></p>
      </section>

      <section id="dang-ky" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-4">Đăng ký nhận thông tin ra mắt</h2>
        <p class="text-slate-700 mb-4">Để lại thông tin để là người đầu tiên trải nghiệm sản phẩm đồ lót chức năng ANTCARE cùng ưu đãi mở bán đặc biệt.</p>
        <p class="text-xs text-[#78716C] italic mb-4">ANTCARE cam kết chỉ dùng số điện thoại để báo tin ra mắt và tư vấn; không chia sẻ cho bên thứ ba.</p>
        <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="px-8 py-3 rounded-full bg-[#FD711A] text-white font-bold text-sm inline-block">Đăng ký qua Zalo 0969 032 360</a>
      </section>

      <section id="hoi-dap" class="py-10 border-t border-[#E8DFD5]">
        <h2 class="text-2xl font-extrabold text-[#1C1917] mb-6">Câu hỏi thường gặp</h2>
        <dl class="space-y-4">
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">1. ANTCARE là thương hiệu gì?</dt>
            <dd class="text-slate-700 mt-1">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được. ANTCARE bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">2. Quần kinh nguyệt có thay được băng vệ sinh không?</dt>
            <dd class="text-slate-700 mt-1">Với ngày ra ít và trung bình, quần kinh nguyệt thường dùng một mình được. Ngày ra rất nhiều có thể kết hợp với băng hoặc cốc nguyệt san.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">3. Quần chống són tiểu dùng cho ai?</dt>
            <dd class="text-slate-700 mt-1">Cho người són tiểu nhẹ, rỉ vài giọt khi ho, hắt hơi, cười, vận động, còn tự sinh hoạt. Són tiểu nặng nên dùng sản phẩm chuyên dụng theo tư vấn y tế.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">4. Quần thấm hút có vệ sinh không?</dt>
            <dd class="text-slate-700 mt-1">Có, nếu thay kịp thời, xả nước lạnh, giặt bằng xà phòng dịu, không dùng nước xả vải và phơi khô hoàn toàn.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">5. Khi nào sản phẩm ANTCARE ra mắt?</dt>
            <dd class="text-slate-700 mt-1">Sản phẩm đang được hoàn thiện. Hãy để lại số điện thoại hoặc nhắn Zalo 0969 032 360 để nhận thông tin sớm nhất.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold text-[#1C1917]">6. ANTCARE còn dịch vụ chăm sóc người cao tuổi không?</dt>
            <dd class="text-slate-700 mt-1">ANTCARE cung cấp các dịch vụ chăm sóc người cao tuổi tại Hà Nội: Trợ lý sức khỏe tại nhà, đưa người cao tuổi đi khám bệnh viện và giải pháp an tâm nhà cửa. Chi tiết xem tại trang <a href="/dich-vu" class="text-[#6633B4] font-bold hover:underline">/dich-vu</a>.</dd>
          </div>
        </dl>
      </section>
    </main>
  `;

  writeStaticPage({
    relativeUrl: '/',
    title: homeTitle,
    description: homeDesc,
    canonical: 'https://antcare.vn/',
    ogImage: '/images/footer-logo.png',
    h1Title: 'ANTCARE – Đồ lót chức năng cho phụ nữ: quần kinh nguyệt và quần chống són tiểu',
    bodyContent: homeBody,
    jsonLd: homeJsonLd,
    priority: '1.0',
    changefreq: 'daily'
  });

  // ==========================================
  // 2. TRANG DỊCH VỤ (/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi)
  // ==========================================
  const serviceUrl = "https://antcare.vn/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi";
  const serviceTitle = "Dịch vụ đưa người cao tuổi đi khám tại Hà Nội – từ 390.000đ | ANTCARE";
  const serviceDesc = "Kiến Y tế ANTCARE có nền tảng điều dưỡng, đưa ông bà đi khám tại các bệnh viện Hà Nội: lấy số, làm thủ tục BHYT, đi cùng vào phòng khám, báo cáo cho gia đình. Từ 390.000đ/lần.";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://antcare.vn/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Chăm sóc người cao tuổi",
            "item": "https://antcare.vn/cham-soc-nguoi-cao-tuoi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Đưa người cao tuổi đi khám",
            "item": serviceUrl
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${serviceUrl}#webpage`,
        "url": serviceUrl,
        "name": serviceTitle,
        "description": serviceDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "FAQPage",
        "@id": `${serviceUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dịch vụ đưa người cao tuổi đi khám của ANTCARE giá bao nhiêu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Giá từ 390.000đ cho buổi khám dưới 3 giờ, 490.000đ dưới 4 giờ, 690.000đ dưới 6 giờ và 790.000đ dưới 8 giờ. Vượt giờ tính thêm 100.000đ mỗi giờ. Giá chưa gồm chi phí phương tiện đi lại, viện phí, xét nghiệm và thuốc."
            }
          },
          {
            "@type": "Question",
            "name": "Thời gian dịch vụ được tính từ lúc nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà cho đến khi đưa ông bà về nhà."
            }
          },
          {
            "@type": "Question",
            "name": "Chi phí đi lại được tính thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chi phí phương tiện không nằm trong giá gói. Gia đình chi trả theo thực tế phát sinh. ANTCARE tư vấn và kết nối phương tiện phù hợp với tình trạng sức khỏe của ông bà và với ngân sách của gia đình."
            }
          },
          {
            "@type": "Question",
            "name": "Ông bà ở tỉnh ngoài Hà Nội có dùng được dịch vụ không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có. ANTCARE nhận ông bà tại các tỉnh miền Bắc và kết nối xe tiện chuyến hoặc loại xe phù hợp để đưa ông bà lên Hà Nội khám rồi về nhà."
            }
          },
          {
            "@type": "Question",
            "name": "Con đang ở nước ngoài có đặt dịch vụ cho bố mẹ được không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Được. Gia đình đặt lịch qua điện thoại hoặc Zalo, thanh toán trước bằng chuyển khoản (ANTCARE nhận thanh toán từ nước ngoài) và nhận báo cáo sau buổi khám."
            }
          },
          {
            "@type": "Question",
            "name": "Cần đặt lịch trước bao lâu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gia đình vui lòng đặt lịch trước ít nhất 1 ngày để ANTCARE sắp xếp Kiến Y tế và phương tiện phù hợp."
            }
          },
          {
            "@type": "Question",
            "name": "Kiến Y tế có chuyên môn gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kiến Y tế có nền tảng điều dưỡng, kinh nghiệm chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Họ được đào tạo về quy trình khám chữa bệnh và thủ tục bảo hiểm y tế tại bệnh viện."
            }
          },
          {
            "@type": "Question",
            "name": "Buổi khám kéo dài hơn gói đã chọn thì sao?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kiến Y tế vẫn ở lại cùng ông bà đến khi xong. Thời gian vượt được tính thêm 100.000đ mỗi giờ, và gia đình được báo trước khi sắp vượt giờ."
            }
          }
        ]
      }
    ]
  };

  const serviceBody = `
  <div class="bg-[#FEFCFB] text-slate-800 pt-20 md:pt-24 pb-20 md:pb-16 font-sans">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-3">
      <nav aria-label="Breadcrumb" class="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
        <a href="/" class="hover:text-[#6633B4] transition-colors flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">home</span> Trang chủ
        </a>
        <span class="text-slate-400">/</span>
        <a href="/cham-soc-nguoi-cao-tuoi" class="hover:text-[#6633B4] transition-colors">Chăm sóc người cao tuổi</a>
        <span class="text-slate-400">/</span>
        <span class="text-slate-800 font-semibold" aria-current="page">Đưa người cao tuổi đi khám</span>
      </nav>
    </div>

    <article class="max-w-5xl mx-auto px-4 sm:px-6">
      <header class="pt-2 pb-8 border-b border-purple-100">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6633B4]/10 text-[#6633B4] text-xs font-bold uppercase tracking-wider mb-4">
          <span class="material-symbols-outlined text-sm">medical_services</span> Dịch vụ y tế chuyên biệt Hà Nội
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A1B3D] leading-tight mb-5 tracking-tight">
          Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội
        </h1>
        <p class="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-5">
          <strong>Bố mẹ có lịch khám nhưng con không sắp xếp được? Kiến Y tế của ANTCARE, với nền tảng điều dưỡng và chứng chỉ sơ cấp cứu, sẽ thay con đưa ông bà đi khám, lo trọn thủ tục ở bệnh viện, ghi lại đầy đủ lời bác sĩ dặn và báo cáo ngay cho gia đình.</strong>
        </p>
        <div class="bg-gradient-to-r from-purple-50 via-orange-50/50 to-white p-4 sm:p-5 rounded-2xl border border-purple-100 mb-6">
          <p class="text-sm sm:text-base text-slate-700 font-medium">
            Chỉ từ <span className="text-[#FD711A] font-bold text-lg">390.000đ/lần</span> · Nhận ông bà tại Hà Nội và các tỉnh miền Bắc · Gọi <a href="tel:0969032360" class="text-[#6633B4] font-bold hover:underline">0969 032 360</a>
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a href="tel:0969032360" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-sm sm:text-base shadow-md transition-all">
            <span class="material-symbols-outlined text-lg">call</span> Gọi đặt lịch: 0969 032 360
          </a>
          <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-sm sm:text-base shadow-md transition-all">
            <span class="material-symbols-outlined text-lg">chat</span> Nhắn Zalo
          </a>
        </div>
      </header>

      <section class="py-8 border-b border-slate-100">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Khi nào gia đình cần dịch vụ đưa người cao tuổi đi khám?
        </h2>
        <p class="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
          Đi khám ở các bệnh viện lớn tại Hà Nội thường mất cả buổi: xếp hàng lấy số, làm thủ tục bảo hiểm y tế, đi qua nhiều khoa để xét nghiệm, chụp chiếu rồi quay lại gặp bác sĩ. Với người cao tuổi, đi một mình vừa mệt vừa dễ nhầm lẫn, và thường quên mất bác sĩ đã dặn gì.
        </p>
        <div class="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/70">
          <p class="text-slate-800 font-semibold mb-3 text-sm sm:text-base">Dịch vụ này dành cho gia đình khi:</p>
          <ul class="space-y-3 text-sm sm:text-base text-slate-700">
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span><span>Con cháu đi làm, đi công tác hoặc sống ở tỉnh khác, ở nước ngoài, không đưa bố mẹ đi khám được.</span></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span><span>Ông bà có bệnh nền (huyết áp, tiểu đường, tim mạch, xương khớp…) cần tái khám định kỳ.</span></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span><span>Ông bà đi lại chậm, nghe kém, hay quên, hoặc chưa quen quy trình ở bệnh viện lớn.</span></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span><span>Ông bà ở các tỉnh miền Bắc cần lên Hà Nội khám tại bệnh viện tuyến trung ương.</span></li>
            <li class="flex items-start gap-3"><span class="material-symbols-outlined text-[#FD711A] text-lg mt-0.5 shrink-0">check_circle</span><span>Gia đình muốn có người đi cùng ghi chép cẩn thận để nắm chính xác tình trạng sức khỏe của bố mẹ.</span></li>
          </ul>
        </div>
      </section>

      <section class="py-8 border-b border-slate-100">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Kiến Y tế hỗ trợ những gì trong buổi đi khám?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-[#6633B4] mb-3">Trước buổi khám</h3>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li>• Tư vấn chọn bệnh viện, chuyên khoa phù hợp và hỗ trợ đặt lịch khám trước khi có thể.</li>
              <li>• Nhắc gia đình chuẩn bị giấy tờ: CCCD, thẻ BHYT, sổ khám, đơn thuốc và kết quả cũ.</li>
              <li>• Đón ông bà tại nhà. Với ông bà ở các tỉnh ngoài Hà Nội, ANTCARE kết nối xe tiện chuyến hoặc loại xe phù hợp với nhu cầu của gia đình.</li>
            </ul>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-[#FD711A] mb-3">Tại bệnh viện</h3>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li>• Lấy số, làm thủ tục, xuất trình bảo hiểm y tế, thanh toán viện phí thay gia đình.</li>
              <li>• Dẫn đường và đi cùng ông bà qua từng khoa, phòng xét nghiệm, chụp chiếu.</li>
              <li>• Vào phòng khám cùng ông bà, trình bày triệu chứng giúp và hỏi lại bác sĩ những điểm chưa rõ.</li>
              <li>• Ghi chép chẩn đoán, chỉ định, lời dặn và lịch tái khám.</li>
              <li>• Theo dõi sức khỏe ông bà trong suốt buổi khám, sẵn sàng sơ cấp cứu khi cần.</li>
              <li>• Xếp hàng nhận thuốc, giải thích lại cách uống thuốc cho ông bà.</li>
            </ul>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-[#6633B4] mb-3">Sau buổi khám</h3>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li>• Đưa ông bà về nhà an toàn.</li>
              <li>• Gửi báo cáo buổi khám cho con cháu: kết quả, đơn thuốc, lời bác sĩ dặn, lịch tái khám.</li>
              <li>• Nhắc lịch tái khám lần tiếp theo.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="py-8 border-b border-slate-100" id="bang-gia">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Bảng giá dịch vụ đưa người cao tuổi đi khám
        </h2>
        <div class="overflow-x-auto rounded-2xl border border-purple-200/80 shadow-sm mb-6 bg-white">
          <table class="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr class="bg-gradient-to-r from-[#6633B4] to-[#512496] text-white">
                <th class="py-3.5 px-4 sm:px-6 font-bold">Gói Đồng Hành Khám Bệnh</th>
                <th class="py-3.5 px-4 sm:px-6 font-bold">Thời lượng</th>
                <th class="py-3.5 px-4 sm:px-6 font-bold text-right">Giá (VNĐ)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-800">
              <tr><td class="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 3 giờ)</td><td class="py-3.5 px-4 sm:px-6">3 giờ</td><td class="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">390.000</td></tr>
              <tr class="bg-slate-50/50"><td class="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 4 giờ)</td><td class="py-3.5 px-4 sm:px-6">4 giờ</td><td class="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">490.000</td></tr>
              <tr><td class="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 6 giờ)</td><td class="py-3.5 px-4 sm:px-6">6 giờ</td><td class="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">690.000</td></tr>
              <tr class="bg-slate-50/50"><td class="py-3.5 px-4 sm:px-6 font-semibold">Khám bệnh (≤ 8 giờ)</td><td class="py-3.5 px-4 sm:px-6">8 giờ</td><td class="py-3.5 px-4 sm:px-6 font-bold text-[#FD711A] text-right">790.000</td></tr>
              <tr class="font-medium text-slate-600"><td class="py-3 px-4 sm:px-6 italic">Vượt giờ</td><td class="py-3 px-4 sm:px-6 italic">Mỗi giờ</td><td class="py-3 px-4 sm:px-6 font-semibold text-right">100.000</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/70 mb-6 text-xs sm:text-sm text-slate-700 space-y-2">
          <p class="font-bold text-amber-900 text-sm sm:text-base mb-1">Lưu ý:</p>
          <p>• Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà.</p>
          <p>• Giá dịch vụ chưa bao gồm: chi phí phương tiện đi lại (gia đình tự chi trả theo thực tế phát sinh); tiền khám, xét nghiệm, chụp chiếu, thuốc và các khoản thu của bệnh viện.</p>
          <p>• Gợi ý chọn gói: khám một chuyên khoa ở bệnh viện vắng thì chọn 3–4 giờ. Khám ở bệnh viện tuyến trung ương đông bệnh nhân, có nhiều xét nghiệm và chụp chiếu, hoặc ông bà ở tỉnh xa lên Hà Nội, thì nên chọn 6–8 giờ.</p>
          <p>• ANTCARE là đơn vị hỗ trợ đồng hành, không trực thuộc bệnh viện và không can thiệp vào chuyên môn khám chữa bệnh.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <a href="tel:0969032360" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] hover:bg-[#e05e0f] text-white font-bold text-sm sm:text-base shadow-md transition-all">
            <span class="material-symbols-outlined text-lg">call</span> Gọi 0969 032 360 để chọn gói phù hợp
          </a>
          <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6633B4] hover:bg-[#532896] text-white font-bold text-sm sm:text-base shadow-md transition-all">
            <span class="material-symbols-outlined text-lg">chat</span> Nhắn Zalo
          </a>
        </div>
        <blockquote class="bg-purple-50/80 border-l-4 border-[#6633B4] p-4 sm:p-5 rounded-r-2xl text-xs sm:text-sm text-slate-700">
          Bố mẹ cần được theo dõi sức khỏe thường xuyên? Xem thêm các <a href="/cham-soc-nguoi-cao-tuoi#bang-gia-chi-tiet" class="font-bold text-[#6633B4] hover:underline">Gói Trợ lý Sức khỏe</a> định kỳ tại nhà, từ 990.000đ/tháng.
        </blockquote>
      </section>

      <section class="py-8 border-b border-slate-100">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-6 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Quy trình đặt lịch 4 bước
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm"><span class="w-8 h-8 rounded-full bg-[#6633B4] text-white font-bold text-sm flex items-center justify-center mb-3">1</span><h3 class="font-bold text-slate-900 text-sm sm:text-base mb-2">Liên hệ trước ít nhất 1 ngày</h3><p class="text-xs sm:text-sm text-slate-600">Gọi hoặc nhắn Zalo 0969 032 360, báo bệnh viện, chuyên khoa, ngày giờ khám, nơi đón và tình trạng sức khỏe của ông bà.</p></div>
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm"><span class="w-8 h-8 rounded-full bg-[#FD711A] text-white font-bold text-sm flex items-center justify-center mb-3">2</span><h3 class="font-bold text-slate-900 text-sm sm:text-base mb-2">Tư vấn và xác nhận</h3><p class="text-xs sm:text-sm text-slate-600">ANTCARE tư vấn gói thời lượng và phương án di chuyển phù hợp, xác nhận lịch và gửi thông tin Kiến Y tế phụ trách.</p></div>
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm"><span class="w-8 h-8 rounded-full bg-[#6633B4] text-white font-bold text-sm flex items-center justify-center mb-3">3</span><h3 class="font-bold text-slate-900 text-sm sm:text-base mb-2">Thanh toán trước</h3><p class="text-xs sm:text-sm text-slate-600">Gia đình thanh toán phí dịch vụ trước buổi khám bằng chuyển khoản. ANTCARE nhận thanh toán cả từ nước ngoài.</p></div>
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm"><span class="w-8 h-8 rounded-full bg-[#FD711A] text-white font-bold text-sm flex items-center justify-center mb-3">4</span><h3 class="font-bold text-slate-900 text-sm sm:text-base mb-2">Đồng hành đi khám và báo cáo</h3><p class="text-xs sm:text-sm text-slate-600">Kiến Y tế đón ông bà, đi cùng suốt buổi khám, cập nhật tình hình và gửi báo cáo cho gia đình sau khi khám. Thời gian vượt gói (nếu có) được thanh toán bổ sung.</p></div>
        </div>
      </section>

      <section class="py-8 border-b border-slate-100">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-4 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Nhận ông bà tại Hà Nội và các tỉnh miền Bắc
        </h2>
        <p class="text-slate-700 leading-relaxed text-sm sm:text-base mb-5">
          ANTCARE nhận đưa ông bà đi khám tại các bệnh viện ở Hà Nội. Ông bà ở các tỉnh miền Bắc như Bắc Ninh, Hưng Yên, Hải Dương, Vĩnh Phúc, Phú Thọ, Thái Bình, Nam Định, Ninh Bình, Hà Nam… cũng được nhận. ANTCARE sẽ kết nối xe tiện chuyến hoặc loại xe phù hợp với gia đình để đưa ông bà lên Hà Nội khám và về nhà trong ngày.
        </p>
        <div class="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
          <p class="font-bold text-slate-900 text-sm sm:text-base mb-3">Các bệnh viện Kiến Y tế thường xuyên đồng hành:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs sm:text-sm text-slate-700">
            <div>• Bệnh viện Bạch Mai</div>
            <div>• Bệnh viện Hữu nghị Việt Đức</div>
            <div>• Bệnh viện Trung ương Quân đội 108</div>
            <div>• Bệnh viện K (cơ sở Quán Sứ, Tân Triều)</div>
            <div>• Bệnh viện E</div>
            <div>• Bệnh viện Đại học Y Hà Nội</div>
            <div>• Bệnh viện Lão khoa Trung ương</div>
            <div>• Bệnh viện Nội tiết Trung ương</div>
            <div>• Bệnh viện Tim Hà Nội</div>
            <div>• Bệnh viện Thanh Nhàn, Bệnh viện Xanh Pôn</div>
            <div class="sm:col-span-2">• Các bệnh viện và phòng khám tư: Vinmec, Hồng Ngọc, Medlatec, Thu Cúc…</div>
          </div>
        </div>
      </section>

      <section class="py-8 border-b border-slate-100">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-5 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Vì sao chọn ANTCARE?
        </h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
            <strong class="text-slate-900 block text-sm sm:text-base mb-1">Kiến Y tế có nền tảng điều dưỡng</strong>
            <p class="text-xs sm:text-sm text-slate-700">Có nền tảng điều dưỡng và kinh nghiệm chăm sóc người cao tuổi, hiểu tình trạng sức khỏe của ông bà và biết cách trao đổi với bác sĩ.</p>
          </div>
          <div class="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
            <strong class="text-slate-900 block text-sm sm:text-base mb-1">Có chứng chỉ sơ cấp cứu:</strong>
            <p class="text-xs sm:text-sm text-slate-700">Sẵn sàng xử trí ban đầu nếu ông bà mệt, chóng mặt hay có diễn biến bất thường trong buổi khám.</p>
          </div>
          <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
            <strong class="text-slate-900 block text-sm sm:text-base mb-1">Gia đình luôn nắm được tình hình:</strong>
            <p class="text-xs sm:text-sm text-slate-700">Được cập nhật trong buổi khám và nhận báo cáo đầy đủ sau khi khám, dù con đang ở tỉnh khác hay ở nước ngoài.</p>
          </div>
          <div class="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
            <strong class="text-slate-900 block text-sm sm:text-base mb-1">Giá minh bạch theo giờ:</strong>
            <p class="text-xs sm:text-sm text-slate-700">Biết trước chi phí dịch vụ. Tiền xe tính theo thực tế, không phụ phí ẩn.</p>
          </div>
          <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
            <strong class="text-slate-900 block text-sm sm:text-base mb-1">Kiên nhẫn và tôn trọng ông bà:</strong>
            <p class="text-xs sm:text-sm text-slate-700">Đi theo nhịp của ông bà, giải thích rõ ràng, nhẹ nhàng.</p>
          </div>
        </div>
      </section>

      <section class="py-8 border-b border-slate-100" id="faq">
        <h2 class="text-xl sm:text-2xl font-bold text-[#6633B4] mb-5 flex items-center gap-2 border-l-4 border-[#FD711A] pl-3">
          Câu hỏi thường gặp
        </h2>
        <div class="space-y-4">
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm" open>
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">1. Dịch vụ đưa người cao tuổi đi khám của ANTCARE giá bao nhiêu?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Giá từ 390.000đ cho buổi khám dưới 3 giờ, 490.000đ dưới 4 giờ, 690.000đ dưới 6 giờ và 790.000đ dưới 8 giờ. Vượt giờ tính thêm 100.000đ mỗi giờ. Giá chưa gồm chi phí phương tiện đi lại, viện phí, xét nghiệm và thuốc.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm" open>
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">2. Thời gian dịch vụ được tính từ lúc nào?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Thời gian được tính từ lúc Kiến Y tế bắt đầu đưa đón ông bà cho đến khi đưa ông bà về nhà.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm open>
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">3. Chi phí đi lại được tính thế nào?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Chi phí phương tiện không nằm trong giá gói. Gia đình chi trả theo thực tế phát sinh. ANTCARE tư vấn và kết nối phương tiện phù hợp với tình trạng sức khỏe của ông bà và với ngân sách của gia đình.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">4. Ông bà ở tỉnh ngoài Hà Nội có dùng được dịch vụ không?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Có. ANTCARE nhận ông bà tại các tỉnh miền Bắc và kết nối xe tiện chuyến hoặc loại xe phù hợp để đưa ông bà lên Hà Nội khám rồi về nhà.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">5. Con đang ở nước ngoài có đặt dịch vụ cho bố mẹ được không?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Được. Gia đình đặt lịch qua điện thoại hoặc Zalo, thanh toán trước bằng chuyển khoản (ANTCARE nhận thanh toán từ nước ngoài) và nhận báo cáo sau buổi khám.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">6. Cần đặt lịch trước bao lâu?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Gia đình vui lòng đặt lịch trước ít nhất 1 ngày để ANTCARE sắp xếp Kiến Y tế và phương tiện phù hợp.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">7. Kiến Y tế có chuyên môn gì?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Kiến Y tế có nền tảng điều dưỡng, kinh nghiệm chăm sóc người cao tuổi và chứng chỉ sơ cấp cứu. Họ được đào tạo về quy trình khám chữa bệnh và thủ tục bảo hiểm y tế tại bệnh viện.</p>
          </details>
          <details class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <summary class="font-bold text-slate-900 cursor-pointer text-sm sm:text-base">8. Buổi khám kéo dài hơn gói đã chọn thì sao?</summary>
            <p class="mt-3 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">Kiến Y tế vẫn ở lại cùng ông bà đến khi xong. Thời gian vượt được tính thêm 100.000đ mỗi giờ, và gia đình được báo trước khi sắp vượt giờ.</p>
          </details>
        </div>
      </section>

      <section class="py-8" id="dat-lich">
        <div class="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-200/80 shadow-lg text-center">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2A1B3D] mb-2">Đặt lịch Kiến Y tế đồng hành đi khám</h2>
          <p class="text-xs sm:text-sm text-slate-600 mb-6">Liên hệ trực tiếp hotline 24/7: <a href="tel:0969032360" class="text-[#FD711A] font-bold">0969 032 360</a> hoặc nhắn Zalo để được tư vấn lộ trình phù hợp.</p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <a href="tel:0969032360" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FD711A] text-white font-bold text-xs sm:text-sm shadow">Gọi 0969 032 360</a>
            <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6633B4] text-white font-bold text-xs sm:text-sm shadow">Nhắn Zalo</a>
          </div>
        </div>
      </section>
    </article>
  </div>
  `;

  
  // ==========================================
  // 2B. TRANG VỀ CHÚNG TÔI (/ve-chung-toi)
  // ==========================================
  const aboutUrl = "https://antcare.vn/ve-chung-toi";
  const aboutTitle = "Về ANTCARE – Thương hiệu đồ lót chức năng Việt Nam";
  const aboutDesc = "ANTCARE là thương hiệu đồ lót chức năng Việt Nam: quần kinh nguyệt, quần chống són tiểu. Bắt nguồn từ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.";

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${aboutUrl}#webpage`,
        "url": aboutUrl,
        "name": aboutTitle,
        "description": aboutDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${aboutUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://antcare.vn/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Về ANTCARE",
            "item": aboutUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${aboutUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ANTCARE là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội."
            }
          },
          {
            "@type": "Question",
            "name": "ANTCARE có phải thương hiệu Việt Nam không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Có. ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan các công ty nước ngoài có tên tương tự."
            }
          },
          {
            "@type": "Question",
            "name": "Vì sao một đơn vị chăm sóc người cao tuổi lại làm đồ lót?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vì khi chăm sóc người cao tuổi và phụ nữ, ANTCARE thấy són tiểu, kinh nguyệt và kích ứng do sản phẩm dùng một lần là nhu cầu rất thật nhưng ít được quan tâm."
            }
          },
          {
            "@type": "Question",
            "name": "ANTCARE còn nhận dịch vụ chăm sóc người cao tuổi không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội bao gồm Trợ lý sức khỏe tại nhà và Đồng hành đi khám bệnh. Chi tiết tại antcare.vn/dich-vu."
            }
          },
          {
            "@type": "Question",
            "name": "Mua sản phẩm ANTCARE ở đâu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sản phẩm đang chuẩn bị ra mắt; bạn có thể đăng ký nhận thông tin tại antcare.vn hoặc nhắn Zalo 0969 032 360 để được hỗ trợ sớm nhất."
            }
          }
        ]
      }
    ]
  };

  const aboutBody = `
    <main class="antcare-about-prerender max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
        <a href="/" class="hover:underline">Trang chủ</a> / <span class="font-semibold text-slate-800">Về ANTCARE</span>
      </nav>
      <header class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-black text-[#1C1917] leading-tight mb-4">
          Về ANTCARE – thương hiệu đồ lót chức năng bắt nguồn từ chăm sóc sức khỏe
        </h1>
        <div class="bg-[#F6F1FC] border-l-4 border-[#6633B4] p-5 rounded-r-2xl text-left my-6">
          <p class="text-base sm:text-lg text-[#1f1a2b] leading-relaxed">
            <strong class="text-[#6633B4] font-bold">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</strong>
          </p>
        </div>
      </header>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-[#6633B4] mb-4">Thông tin chung</h2>
        <table class="w-full text-left border-collapse text-sm border border-[#E8DFD5]">
          <tbody class="divide-y divide-[#E8DFD5]">
            <tr><td class="p-3 font-semibold w-1/3">Tên thương hiệu</td><td class="p-3">ANTCARE – Kiến chăm tổ</td></tr>
            <tr><td class="p-3 font-semibold">Lĩnh vực</td><td class="p-3">Đồ lót chức năng: quần kinh nguyệt, quần chống són tiểu</td></tr>
            <tr><td class="p-3 font-semibold">Khởi nguồn</td><td class="p-3">Dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội</td></tr>
            <tr><td class="p-3 font-semibold">Khách hàng</td><td class="p-3">Phụ nữ trong độ tuổi có kinh nguyệt, phụ nữ sau sinh, tuổi tiền mãn kinh, người cao tuổi bị són tiểu nhẹ</td></tr>
            <tr><td class="p-3 font-semibold">Khu vực bán</td><td class="p-3">Toàn quốc (khi ra mắt)</td></tr>
            <tr><td class="p-3 font-semibold">Website</td><td class="p-3"><a href="https://antcare.vn">antcare.vn</a></td></tr>
            <tr><td class="p-3 font-semibold">Hotline / Zalo</td><td class="p-3"><a href="tel:0969032360">0969 032 360</a></td></tr>
            <tr><td class="p-3 font-semibold">Địa chỉ</td><td class="p-3">Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội</td></tr>
          </tbody>
        </table>
        <p class="text-xs text-slate-500 italic mt-3">ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan đến các công ty nước ngoài có tên tương tự.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Câu chuyện ANTCARE</h2>
        <p class="text-slate-700 leading-relaxed">ANTCARE bắt đầu từ dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà và đồng hành đi khám ở Hà Nội. Làm việc hằng ngày với người cao tuổi và phụ nữ, chúng tôi nhận ra một nỗi khó chịu chung mà ít ai nói thành lời: những ngày đèn đỏ bí bách, tràn ban đêm; những lần rỉ nước tiểu khi ho, hắt hơi khiến người ta ngại ra ngoài; làn da hăm đỏ vì băng vệ sinh, tã, bỉm dùng một lần. Nhiều người són tiểu nhẹ không muốn mặc bỉm, nhưng cũng chưa có lựa chọn nào kín đáo và dễ chịu hơn.</p>
        <p class="text-slate-700 leading-relaxed">Từ đó, ANTCARE quyết định tập trung vào đồ lót chức năng: những chiếc quần mặc như quần lót bình thường, nhưng có lõi thấm hút cho máu kinh hoặc nước tiểu rỉ nhẹ, giặt và dùng lại được.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Ý nghĩa tên "Kiến chăm tổ"</h2>
        <p class="text-slate-700 leading-relaxed">Đàn kiến nhỏ bé nhưng chăm chỉ và luôn chăm lo cho tổ của mình. ANTCARE giữ tinh thần ấy: chăm sóc người phụ nữ và gia đình bằng những điều nhỏ, dùng mỗi ngày, làm thật tận tâm.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Sứ mệnh, tầm nhìn, giá trị</h2>
        <p class="text-slate-700"><strong>Sứ mệnh:</strong> Giúp phụ nữ và người cao tuổi Việt thoải mái, tự tin trong những ngày đèn đỏ và với són tiểu nhẹ, bằng đồ lót chức năng an toàn, dễ dùng.</p>
        <p class="text-slate-700"><strong>Tầm nhìn:</strong> Trở thành thương hiệu đồ lót chức năng được phụ nữ Việt tin dùng, đồng hành qua các giai đoạn: tuổi dậy thì, đi làm, sau sinh, tiền mãn kinh và tuổi già.</p>
        <p class="text-slate-700"><strong>Giá trị:</strong> Trung thực (chỉ công bố điều đã kiểm chứng) · Thấu hiểu (thiết kế từ nhu cầu thật) · An toàn (chất liệu có chứng nhận) · Bền vững (dùng lại, giảm rác).</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Sản phẩm của ANTCARE</h2>
        <p><a href="/#quan-kinh-nguyet" class="font-bold text-[#6633B4] hover:underline">Quần kinh nguyệt</a>: Mặc như quần lót, thay băng vệ sinh ngày ra ít đến trung bình.</p>
        <p><a href="/#quan-chong-son-tieu" class="font-bold text-[#FD711A] hover:underline">Quần chống són tiểu</a>: Dành cho người són tiểu nhẹ khi ho, hắt hơi, vận động.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Cách ANTCARE chọn sản phẩm</h2>
        <p class="text-slate-700">Chúng tôi cam kết minh bạch chất liệu, lựa chọn nhà sản xuất có chứng nhận vải an toàn tra cứu được (như OEKO-TEX Standard 100), màng chống thấm không chứa hóa chất độc hại PFAS và công bố thông số dựa trên thử nghiệm thực tế.</p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Cẩm nang sức khỏe</h2>
        <p class="text-slate-700">ANTCARE xuất bản cẩm nang về kinh nguyệt và són tiểu bằng tiếng Việt, có dẫn nguồn từ WHO, NHS và các hiệp hội chuyên môn. Nội dung mang tính tham khảo, không thay thế tư vấn của bác sĩ.</p>
        <p><a href="/kinh-nguyet" class="text-[#6633B4] font-bold hover:underline">Cẩm nang Kinh nguyệt</a> | <a href="/son-tieu" class="text-[#FD711A] font-bold hover:underline">Cẩm nang Són tiểu</a></p>
      </section>

      <section class="mb-10 space-y-3">
        <h2 class="text-2xl font-bold text-[#6633B4]">Hành trình: từ chăm sóc người cao tuổi đến đồ lót chức năng</h2>
        <p class="text-slate-700">ANTCARE từng cung cấp dịch vụ Trợ lý sức khỏe tại nhà và Đồng hành đi khám cho người cao tuổi ở Hà Nội và các tỉnh miền Bắc. Đây là nơi chúng tôi học được nhiều nhất về nhu cầu thật của người cao tuổi và phụ nữ. ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội; thông tin dịch vụ chi tiết được cung cấp tại trang <a href="/dich-vu" class="text-[#6633B4] font-bold hover:underline">/dich-vu</a>.</p>
      </section>

      <section class="mb-10 space-y-2">
        <h2 class="text-2xl font-bold text-[#6633B4]">Liên hệ</h2>
        <p>Hotline / Zalo: <a href="tel:0969032360" class="text-[#FD711A] font-bold">0969 032 360</a></p>
        <p>Email: support@antcare.vn</p>
        <p>Địa chỉ: Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn, Hà Nội</p>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-[#6633B4] mb-4">Câu hỏi thường gặp về ANTCARE</h2>
        <dl class="space-y-4">
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">1. ANTCARE là gì?</dt>
            <dd class="text-slate-700 mt-1">ANTCARE là thương hiệu đồ lót chức năng của Việt Nam, gồm quần kinh nguyệt và quần chống són tiểu giặt và dùng lại được, bắt nguồn từ dịch vụ chăm sóc sức khỏe người cao tuổi và phụ nữ tại Hà Nội.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">2. ANTCARE có phải thương hiệu Việt Nam không?</dt>
            <dd class="text-slate-700 mt-1">Có. ANTCARE (antcare.vn) là thương hiệu Việt Nam, không liên quan các công ty nước ngoài có tên tương tự.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">3. Vì sao một đơn vị chăm sóc người cao tuổi lại làm đồ lót?</dt>
            <dd class="text-slate-700 mt-1">Vì khi chăm sóc người cao tuổi và phụ nữ, ANTCARE thấy són tiểu, kinh nguyệt và kích ứng do sản phẩm dùng một lần là nhu cầu rất thật nhưng ít được quan tâm.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">4. ANTCARE còn nhận dịch vụ chăm sóc người cao tuổi không?</dt>
            <dd class="text-slate-700 mt-1">ANTCARE duy trì các dịch vụ chăm sóc người cao tuổi tại Hà Nội; chi tiết xem tại <a href="/dich-vu" class="text-[#6633B4] font-bold hover:underline">/dich-vu</a>.</dd>
          </div>
          <div class="border-b border-[#E8DFD5] pb-3">
            <dt class="font-bold">5. Mua sản phẩm ANTCARE ở đâu?</dt>
            <dd class="text-slate-700 mt-1">Sản phẩm đang chuẩn bị ra mắt; bạn có thể đăng ký nhận thông tin tại antcare.vn hoặc nhắn Zalo 0969 032 360 để được hỗ trợ sớm nhất.</dd>
          </div>
        </dl>
      </section>
    </main>
  `;

  writeStaticPage({
    relativeUrl: '/ve-chung-toi',
    title: aboutTitle,
    description: aboutDesc,
    canonical: aboutUrl,
    ogImage: '/images/footer-logo.png',
    h1Title: 'Về ANTCARE – thương hiệu đồ lót chức năng bắt nguồn từ chăm sóc sức khỏe',
    bodyContent: aboutBody,
    jsonLd: aboutJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });

  // ==========================================
  // 2C. TRANG DỊCH VỤ & CHĂM SÓC NGƯỜI CAO TUỔI (/dich-vu & /cham-soc-nguoi-cao-tuoi)
  // ==========================================
  const serviceMainUrl = "https://antcare.vn/dich-vu";
  const serviceMainTitle = "Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ";
  const serviceMainDesc = "ANTCARE — Kiến chăm tổ cung cấp dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà, trợ lý sức khỏe và hỗ trợ y tế. Hotline: 0969 032 360.";

  const serviceMainJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${serviceMainUrl}#webpage`,
        "url": serviceMainUrl,
        "name": serviceMainTitle,
        "description": serviceMainDesc,
        "about": { "@id": "https://antcare.vn/#org" },
        "isPartOf": { "@id": "https://antcare.vn/#website" },
        "inLanguage": "vi"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceMainUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://antcare.vn/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Dịch vụ",
            "item": serviceMainUrl
          }
        ]
      }
    ]
  };

  const serviceBodyContent = `
    <main class="antcare-service-prerender max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
        <a href="/" class="hover:underline">Trang chủ</a> / <span class="font-semibold text-slate-800">Dịch vụ chăm sóc người cao tuổi</span>
      </nav>
      
      <header class="mb-10 text-center md:text-left">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FD711A]/10 text-[#FD711A] text-xs font-bold uppercase tracking-wider mb-3">
          Chuẩn quốc tế tại Hà Nội
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917] leading-tight mb-4">
          Dịch vụ chăm sóc người cao tuổi tại Hà Nội | ANTCARE — Kiến chăm tổ
        </h1>
        <p class="text-lg text-slate-700 max-w-3xl leading-relaxed">
          ANTCARE mang đến giải pháp trợ lý sức khỏe tại nhà, đưa đón người cao tuổi đi khám bệnh tại các bệnh viện lớn và hỗ trợ an tâm không gian sống cho gia đình bạn.
        </p>
        <div class="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="tel:0969032360" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FD711A] text-white font-bold text-sm shadow-md hover:bg-[#e05e0f] transition-all">
            <span>📞 Hotline: 0969 032 360</span>
          </a>
          <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#6633B4] border border-[#6633B4] font-bold text-sm hover:bg-[#6633B4]/5 transition-all">
            <span>💬 Tư vấn Zalo</span>
          </a>
        </div>
      </header>

      <!-- 3 Core Services -->
      <section id="giai-phap-cham-soc" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-6">Giải pháp chăm sóc người cao tuổi toàn diện</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-3xl border border-[#E8DFD5] shadow-xs hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center text-2xl font-bold mb-4">🩺</div>
            <h3 class="text-xl font-bold text-[#6633B4] mb-3">Trợ lý Sức Khỏe tại nhà</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Đo và ghi nhận 5 chỉ số sinh tồn (huyết áp, nhịp tim, đường huyết, nhiệt độ, SpO2). Hướng dẫn bài tập vận động chuẩn Senior Fitness, nhắc nhở uống thuốc và trò chuyện tinh thần cùng ông bà.
            </p>
            <a href="https://zalo.me/0969032360" class="text-[#6633B4] font-bold text-sm hover:underline">Tư vấn gói tại nhà →</a>
          </div>

          <div class="p-6 bg-white rounded-3xl border-2 border-[#FD711A] shadow-xs hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#FD711A]/10 text-[#FD711A] flex items-center justify-center text-2xl font-bold mb-4">🏥</div>
            <h3 class="text-xl font-bold text-[#FD711A] mb-3">Đồng Hành Khám Bệnh viện</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Kiến Y tế đón ông bà tận nhà, định vị AirTag suốt buổi khám, làm thủ tục BHYT tại Bạch Mai, Lão Khoa, Việt Đức... Ghi lại lời bác sĩ dặn và gửi báo cáo chi tiết về cho người nhà.
            </p>
            <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" class="text-[#FD711A] font-bold text-sm hover:underline">Chi tiết dịch vụ đưa đi khám →</a>
          </div>

          <div class="p-6 bg-white rounded-3xl border border-[#E8DFD5] shadow-xs hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#6633B4]/10 text-[#6633B4] flex items-center justify-center text-2xl font-bold mb-4">🏡</div>
            <h3 class="text-xl font-bold text-[#6633B4] mb-3">An Tâm Nhà Cửa & Hỗ Trợ</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">
              Khảo sát đánh giá nguy cơ té ngã trong nhà, hỗ trợ chống trượt nhà tắm, sắp xếp đồ dùng vừa tầm với ông bà và chăm sóc không gian sống an toàn, ấm áp.
            </p>
            <a href="https://zalo.me/0969032360" class="text-[#6633B4] font-bold text-sm hover:underline">Tư vấn gói nhà cửa →</a>
          </div>
        </div>
      </section>

      <!-- Pricing Table -->
      <section id="bang-gia-chi-tiet" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-4">Bảng giá dịch vụ chăm sóc người cao tuổi minh bạch</h2>
        <p class="text-sm text-slate-600 mb-6">Mọi chi phí đều được công khai rõ ràng, không phát sinh phụ phí ẩn.</p>
        <div class="overflow-x-auto rounded-2xl border border-[#E8DFD5]">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#F6F1FC] text-[#6633B4]">
                <th class="p-4 font-bold">Gói dịch vụ</th>
                <th class="p-4 font-bold">Thời lượng & Nội dung</th>
                <th class="p-4 font-bold text-right">Chi phí niêm yết</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E8DFD5] bg-white">
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Trợ lý Sức Khỏe – Gói Đồng Hành</td>
                <td class="p-4 text-slate-600">4 ca/tháng (1.5 giờ/ca), đo sinh tồn & bài tập thể chất</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">1.400.000đ / tháng</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Trợ lý Sức Khỏe – Gói Gắn Kết</td>
                <td class="p-4 text-slate-600">8 ca/tháng (1.5 giờ/ca), theo dõi chỉ số tuần 2 lần</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">2.600.000đ / tháng</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Trợ lý Sức Khỏe – Gói Yêu Thương</td>
                <td class="p-4 text-slate-600">12 ca/tháng (1.5 giờ/ca), chăm sóc toàn diện 3 buổi/tuần</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">3.600.000đ / tháng</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Đồng Hành Đi Khám – Buổi sáng</td>
                <td class="p-4 text-slate-600">Khám nhanh buổi sáng (≤ 3 giờ), đón tận nhà, làm thủ tục</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">390.000đ / lần</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Đồng Hành Đi Khám – Nửa ngày</td>
                <td class="p-4 text-slate-600">Khám tiêu chuẩn (≤ 4 giờ), phù hợp xét nghiệm máu, chụp chiếu</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">490.000đ / lần</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">Đồng Hành Đi Khám – Cả ngày</td>
                <td class="p-4 text-slate-600">Khám chuyên sâu (≤ 6–8 giờ), hỗ trợ nhiều chuyên khoa</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">600.000đ – 690.000đ / lần</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-[#1C1917]">An Tâm Nhà Cửa</td>
                <td class="p-4 text-slate-600">Khảo sát nguy cơ té ngã, sắp xếp và hỗ trợ sinh hoạt</td>
                <td class="p-4 text-right font-bold text-[#FD711A]">1.200.000đ / tháng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Why Choose ANTCARE -->
      <section id="tai-sao-la-antcare" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-6">Tại sao gia đình tin chọn ANTCARE — Kiến chăm tổ?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">🎓</span>
            <h4 class="font-bold text-[#6633B4] mb-1">100% Nhân sự Y tế</h4>
            <p class="text-xs text-slate-600">Kiến Y tế tốt nghiệp chuyên ngành y tế/điều dưỡng và chứng chỉ sơ cấp cứu.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">📱</span>
            <h4 class="font-bold text-[#6633B4] mb-1">Báo Cáo Minh Bạch</h4>
            <p class="text-xs text-slate-600">Cập nhật chỉ số sinh tồn và hình ảnh chăm sóc số hóa gửi ngay về gia đình.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">🎯</span>
            <h4 class="font-bold text-[#6633B4] mb-1">Cá Nhân Hóa</h4>
            <p class="text-xs text-slate-600">Lập kế hoạch chăm sóc riêng phù hợp thể trạng và thói quen sinh hoạt của từng cụ.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-[#E8DFD5] text-center">
            <span class="text-3xl mb-2 block">❤️</span>
            <h4 class="font-bold text-[#6633B4] mb-1">Tận Tâm Như Con Cháu</h4>
            <p class="text-xs text-slate-600">Lắng nghe, thấu hiểu tâm lý người già, đem lại niềm vui và sự an tâm tuyệt đối.</p>
          </div>
        </div>
      </section>

      <!-- 4-Step Process -->
      <section id="quy-trinh-hoat-dong" class="py-8 border-t border-[#E8DFD5]">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1C1917] mb-6">Quy trình 4 bước bắt đầu dịch vụ</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 1</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Tiếp nhận yêu cầu</h4>
            <p class="text-xs text-slate-600">Tư vấn qua điện thoại/Zalo để nắm rõ tình trạng sức khỏe của ông bà.</p>
          </div>
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 2</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Khảo sát & Kế hoạch</h4>
            <p class="text-xs text-slate-600">Thăm nhà miễn phí, đánh giá thể trạng và thống nhất lịch trình chăm sóc.</p>
          </div>
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 3</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Thực hiện chăm sóc</h4>
            <p class="text-xs text-slate-600">Kiến Y tế đến đúng giờ, thực hiện quy trình chuyên môn chuẩn Senior Care.</p>
          </div>
          <div class="p-4 bg-[#F6F1FC] rounded-2xl">
            <span class="text-xs font-bold text-[#6633B4] uppercase tracking-wider block mb-1">Bước 4</span>
            <h4 class="font-bold text-[#1C1917] mb-1">Báo cáo & Đồng hành</h4>
            <p class="text-xs text-slate-600">Gửi kết quả, chỉ số sinh tồn sau mỗi buổi và tinh chỉnh kế hoạch định kỳ.</p>
          </div>
        </div>
      </section>
    </main>
`;

  writeStaticPage({
    relativeUrl: '/dich-vu',
    title: serviceMainTitle,
    description: serviceMainDesc,
    canonical: serviceMainUrl,
    ogImage: '/images/footer-logo.png',
    h1Title: 'Dịch vụ chăm sóc người cao tuổi tại Hà Nội | ANTCARE — Kiến chăm tổ',
    bodyContent: serviceBodyContent,
    jsonLd: serviceMainJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });

  writeStaticPage({
    relativeUrl: '/cham-soc-nguoi-cao-tuoi',
    title: serviceMainTitle,
    description: serviceMainDesc,
    canonical: 'https://antcare.vn/cham-soc-nguoi-cao-tuoi',
    ogImage: '/images/footer-logo.png',
    h1Title: 'Dịch vụ chăm sóc người cao tuổi tại Hà Nội | ANTCARE — Kiến chăm tổ',
    bodyContent: serviceBodyContent,
    jsonLd: serviceMainJsonLd,
    priority: '0.9',
    changefreq: 'weekly'
  });

  writeStaticPage({
    relativeUrl: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi',
    title: serviceTitle,
    description: serviceDesc,
    canonical: serviceUrl,
    ogImage: '/images/footer-logo.png',
    h1Title: 'Dịch vụ đưa người cao tuổi đi khám bệnh tại Hà Nội',
    bodyContent: serviceBody,
    jsonLd: serviceJsonLd,
    priority: '1.0',
    changefreq: 'daily'
  });

  // ==========================================
  // 3. CÁC TRANG CỐ ĐỊNH KHÁC & ROUTE SPA
  // ==========================================
  const staticRoutes = [
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
  ];

  staticRoutes.forEach(r => {
    let extraListHtml = '';
    if (r.path === '/son-tieu' || r.path === '/tieu-son') {
      const sonTieuArticles = (newsData.list || []).filter(a => a.group === 'son-tieu' || a.category === 'Tiểu són' || (a.slug && (a.slug.includes('son-tieu') || a.slug.includes('tieu-son'))));
      const sortedSonTieu = [...sonTieuArticles].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return (b.id || 0) - (a.id || 0);
      });
      extraListHtml = `
        <div class="mt-8">
          <h2 class="text-xl font-bold text-[#6633B4] mb-4">Bài viết nổi bật trong Cẩm nang Són tiểu</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${sortedSonTieu.slice(0, 8).map(a => `
              <article class="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                ${a.isPinned ? '<span class="inline-block text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded mb-2">📌 Đã ghim</span>' : ''}
                <h3 class="font-bold text-base text-[#1C1917] mb-1.5"><a href="/son-tieu/${a.slug}" class="hover:text-[#6633B4]">${a.title}</a></h3>
                <p class="text-xs text-slate-600 line-clamp-2">${a.description || a.excerpt || ''}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `;
    } else if (r.path === '/kinh-nguyet') {
      const knArticles = (newsData.list || []).filter(a => a.group === 'kinh-nguyet' || a.category === 'Kinh nguyệt' || (a.slug && a.slug.includes('kinh-nguyet')));
      const sortedKn = [...knArticles].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return (b.id || 0) - (a.id || 0);
      });
      extraListHtml = `
        <div class="mt-8">
          <h2 class="text-xl font-bold text-[#6633B4] mb-4">Bài viết nổi bật trong Cẩm nang Kinh nguyệt</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${sortedKn.slice(0, 8).map(a => `
              <article class="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                ${a.isPinned ? '<span class="inline-block text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded mb-2">📌 Đã ghim</span>' : ''}
                <h3 class="font-bold text-base text-[#1C1917] mb-1.5"><a href="/kinh-nguyet/${a.slug}" class="hover:text-[#6633B4]">${a.title}</a></h3>
                <p class="text-xs text-slate-600 line-clamp-2">${a.description || a.excerpt || ''}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `;
    }

    const pageBody = `
      <div class="py-12 px-4 max-w-5xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#2A1B3D] mb-4">${r.h1}</h1>
        <p class="text-base text-slate-700 leading-relaxed">${r.desc}</p>
        ${extraListHtml}
      </div>
    `;
    writeStaticPage({
      relativeUrl: r.path,
      title: r.title,
      description: r.desc,
      canonical: `${DOMAIN}${r.path}`,
      ogImage: '/images/footer-logo.png',
      h1Title: r.h1,
      bodyContent: pageBody,
      priority: '0.8',
      changefreq: 'weekly'
    });
  });

  // ==========================================
  // 3.1 CÁC BÀI VIẾT HOẠT ĐỘNG (/activities/:slug)
  // ==========================================
  const activitiesData = fs.existsSync(activitiesJsonPath) ? JSON.parse(fs.readFileSync(activitiesJsonPath, 'utf8')) : [];
  activitiesData.forEach(act => {
    const slug = act.slug || act.id;
    if (!slug) return;
    const actUrl = `${DOMAIN}/activities/${slug}`;
    const cleanTitle = (act.title || 'Hoạt động ANTCARE').replace(/\n/g, ' ').trim();
    const fullTitle = cleanTitle.includes('ANTCARE') ? cleanTitle : `${cleanTitle} | ANTCARE`;
    const safeDesc = cleanDescription(act.description || act.title);
    const datePub = act.datePublished || '2026-08-01';
    const dateMod = act.dateModified || datePub;
    const imgUrl = act.image
      ? (act.image.startsWith('http') ? act.image : `${DOMAIN}${act.image.startsWith('/') ? '' : '/'}${act.image}`)
      : `${DOMAIN}/images/footer-logo.png`;

    const actJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": cleanTitle,
      "description": safeDesc,
      "inLanguage": "vi-VN",
      "datePublished": datePub,
      "dateModified": dateMod,
      "mainEntityOfPage": actUrl,
      "image": imgUrl,
      "author": {
        "@type": "Organization",
        "name": "ANTCARE",
        "url": DOMAIN
      },
      "publisher": {
        "@id": "https://antcare.vn/#org"
      },
      "isPartOf": {
        "@id": "https://antcare.vn/#website"
      }
    };

    const actBody = `
      <div class="py-10 px-4 max-w-4xl mx-auto font-sans">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
          <a href="/" class="hover:text-[#6633B4]">Trang chủ</a> / 
          <a href="/activities" class="hover:text-[#6633B4]">Hoạt động</a> / 
          <span class="text-slate-800">${escapeHtml(cleanTitle)}</span>
        </nav>
        <main class="activity-detail">
          ${act.content || `<h1>${escapeHtml(cleanTitle)}</h1><p>${escapeHtml(safeDesc)}</p>`}
        </main>
      </div>
    `;

    writeStaticPage({
      relativeUrl: `/activities/${slug}`,
      title: fullTitle,
      description: safeDesc,
      canonical: actUrl,
      ogImage: imgUrl,
      h1Title: cleanTitle,
      bodyContent: actBody,
      jsonLd: actJsonLd,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: dateMod
    });
  });

  // ==========================================
  // 4. TOÀN BỘ CÁC BÀI VIẾT TỪ news.json
  // ==========================================
  const allArticles = [
    ...(newsData.featured ? [newsData.featured] : []),
    ...(newsData.list || [])
  ];

  const redirectedSlugs = new Set([
    'chuan-bi-gi-khi-dua-bo-me-di-kham-benh',
    'dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi',
    'dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia'
  ]);

  let articlesPrerendered = 0;
  const seenSlugs = new Set();

  allArticles.forEach(article => {
    const slug = article.slug || article.id;
    if (!slug || redirectedSlugs.has(String(slug)) || seenSlugs.has(String(slug))) {
      return;
    }
    seenSlugs.add(String(slug));

    const articleUrl = `${DOMAIN}/news/${slug}`;
    const cleanTitle = (article.metaTitle || article.title || 'Tin tức y tế').replace(/\n/g, ' ').trim();
    const fullTitle = cleanTitle.includes('ANTCARE') ? cleanTitle : `${cleanTitle} | ANTCARE`;
    const safeDesc = cleanDescription(article.description || article.summary || article.title);
    const datePub = article.datePublished || '2026-08-01';
    const dateMod = article.dateModified || datePub;
    const imgUrl = article.image
      ? (article.image.startsWith('http') ? article.image : `${DOMAIN}${article.image.startsWith('/') ? '' : '/'}${article.image}`)
      : `${DOMAIN}/images/footer-logo.png`;

    const articleJsonLd = article.schema || {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": cleanTitle,
      "description": safeDesc,
      "inLanguage": "vi-VN",
      "datePublished": datePub,
      "dateModified": dateMod,
      "mainEntityOfPage": articleUrl,
      "image": imgUrl,
      "author": {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": DOMAIN,
        "telephone": "+84969032360"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": DOMAIN,
        "logo": {
          "@type": "ImageObject",
          "url": `${DOMAIN}/images/footer-logo.png`
        }
      }
    };

    // Body content contains full article HTML from content
    const articleBody = `
      <div class="py-10 px-4 max-w-4xl mx-auto font-sans">
        <nav aria-label="Breadcrumb" class="mb-4 text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
          <a href="/" class="hover:text-[#6633B4]">Trang chủ</a> / 
          <a href="/news" class="hover:text-[#6633B4]">Tin tức</a> / 
          <span class="text-slate-800">${escapeHtml(cleanTitle)}</span>
        </nav>
        <main class="article-detail">
          ${article.content || `<h1>${escapeHtml(cleanTitle)}</h1><p>${escapeHtml(safeDesc)}</p>`}
        </main>
      </div>
    `;

    writeStaticPage({
      relativeUrl: `/news/${slug}`,
      title: fullTitle,
      description: safeDesc,
      canonical: articleUrl,
      ogImage: imgUrl,
      h1Title: cleanTitle,
      bodyContent: articleBody,
      jsonLd: articleJsonLd,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: dateMod
    });

    writeStaticPage({
      relativeUrl: `/kinh-nguyet/${slug}`,
      title: fullTitle,
      description: safeDesc,
      canonical: `${DOMAIN}/kinh-nguyet/${slug}`,
      ogImage: imgUrl,
      h1Title: cleanTitle,
      bodyContent: articleBody,
      jsonLd: {
        ...articleJsonLd,
        mainEntityOfPage: `${DOMAIN}/kinh-nguyet/${slug}`
      },
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: dateMod
    });

    if (article.group === 'son-tieu' || article.category === 'Tiểu són' || slug.includes('son-tieu') || slug.includes('tieu-son')) {
      writeStaticPage({
        relativeUrl: `/son-tieu/${slug}`,
        title: fullTitle,
        description: safeDesc,
        canonical: `${DOMAIN}/son-tieu/${slug}`,
        ogImage: imgUrl,
        h1Title: cleanTitle,
        bodyContent: articleBody,
        jsonLd: {
          ...articleJsonLd,
          mainEntityOfPage: `${DOMAIN}/son-tieu/${slug}`
        },
        priority: '0.8',
        changefreq: 'weekly',
        lastmod: dateMod
      });
    }

    writeStaticPage({
      relativeUrl: `/kien-thuc/${slug}`,
      title: fullTitle,
      description: safeDesc,
      canonical: `${DOMAIN}/kinh-nguyet/${slug}`,
      ogImage: imgUrl,
      h1Title: cleanTitle,
      bodyContent: articleBody,
      jsonLd: {
        ...articleJsonLd,
        mainEntityOfPage: `${DOMAIN}/kinh-nguyet/${slug}`
      },
      priority: '0.7',
      changefreq: 'weekly',
      lastmod: dateMod
    });

    articlesPrerendered++;
  });

  console.log(`Prerendered ${articlesPrerendered} articles from news.json!`);

  // ==========================================
  // 5. CÁC TRANG CHUYỂN HƯỚNG 301 TĨNH
  // ==========================================
  const staticRedirects = [
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
      target: '/dich-vu'
    },
    {
      source: '/cam-nang',
      target: '/kinh-nguyet'
    },
    {
      source: '/camnang',
      target: '/kinh-nguyet'
    },
    {
      source: '/kinhnguyet',
      target: '/kinh-nguyet'
    },
        {
      source: '/news/chuan-bi-gi-khi-dua-bo-me-di-kham-benh',
      target: '/news/checklist-dua-bo-me-di-kham-benh-vien'
    },
    {
      source: '/news/dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi',
      target: '/news/checklist-dua-bo-me-di-kham-benh-vien'
    },
    {
      source: '/news/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia',
      target: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
    },
    {
      source: '/cam-nang-suc-khoe-nguoi-cao-tuoi',
      target: '/news/cam-nang-suc-khoe-nguoi-cao-tuoi'
    },
    {
      source: '/dong-hanh-kham-benh-nguoi-cao-tuoi',
      target: '/news/dong-hanh-kham-benh-nguoi-cao-tuoi'
    },
    {
      source: '/bang-gia-dua-nguoi-gia-di-kham',
      target: '/news/bang-gia-dua-nguoi-gia-di-kham'
    },
    {
      source: '/dua-nguoi-cao-tuoi-di-kham-bach-mai',
      target: '/news/dua-nguoi-cao-tuoi-di-kham-bach-mai'
    },
    {
      source: '/dua-bo-me-di-kham-benh-vien-lao-khoa',
      target: '/news/dua-bo-me-di-kham-benh-vien-lao-khoa'
    },
    {
      source: '/con-o-xa-cham-soc-suc-khoe-bo-me',
      target: '/news/con-o-xa-cham-soc-suc-khoe-bo-me'
    },
    {
      source: '/nguoi-cao-tuoi-tu-tinh-len-ha-noi-kham-benh',
      target: '/news/nguoi-cao-tuoi-tu-tinh-len-ha-noi-kham-benh'
    },
    {
      source: '/checklist-chuan-bi-di-kham-cho-nguoi-gia',
      target: '/news/checklist-chuan-bi-di-kham-cho-nguoi-gia'
    },
    {
      source: '/tro-ly-suc-khoe-tai-nha-nguoi-cao-tuoi',
      target: '/news/tro-ly-suc-khoe-tai-nha-nguoi-cao-tuoi'
    },
    {
      source: '/theo-doi-suc-khoe-nguoi-cao-tuoi-benh-man-tinh',
      target: '/news/theo-doi-suc-khoe-nguoi-cao-tuoi-benh-man-tinh'
    },
    {
      source: '/co-nen-thue-nguoi-dua-nguoi-gia-di-kham',
      target: '/news/co-nen-thue-nguoi-dua-nguoi-gia-di-kham'
    },
    {
      source: '/thang-hanh-dong-vi-nguoi-cao-tuoi-2026-cham-soc-tich-hop',
      target: '/news/thang-hanh-dong-vi-nguoi-cao-tuoi-2026-cham-soc-tich-hop'
    },
    {
      source: '/nghi-dinh-335-2026-tro-cap-nguoi-cao-tuoi',
      target: '/news/nghi-dinh-335-2026-tro-cap-nguoi-cao-tuoi'
    },
    {
      source: '/kham-suc-khoe-mien-phi-2026-nguoi-cao-tuoi',
      target: '/news/kham-suc-khoe-mien-phi-2026-nguoi-cao-tuoi'
    },
    {
      source: '/so-suc-khoe-dien-tu-vneid-cho-nguoi-cao-tuoi',
      target: '/news/so-suc-khoe-dien-tu-vneid-cho-nguoi-cao-tuoi'
    },
    {
      source: '/bhyt-chi-tra-100-nguoi-cao-tuoi-75-tuoi',
      target: '/news/bhyt-chi-tra-100-nguoi-cao-tuoi-75-tuoi'
    },
    {
      source: '/uy-quyen-nhan-luong-huu-2026',
      target: '/news/uy-quyen-nhan-luong-huu-2026'
    },
    {
      source: '/lua-dao-nguoi-cao-tuoi-2026-cach-phong-tranh',
      target: '/news/lua-dao-nguoi-cao-tuoi-2026-cach-phong-tranh'
    },
    {
      source: '/c-sui-gia-thuc-pham-bo-sung-nguoi-cao-tuoi',
      target: '/news/c-sui-gia-thuc-pham-bo-sung-nguoi-cao-tuoi'
    },
    {
      source: '/dot-quy-nguoi-cao-tuoi-khi-troi-chuyen-lanh',
      target: '/news/dot-quy-nguoi-cao-tuoi-khi-troi-chuyen-lanh'
    },
    {
      source: '/cum-mua-thu-dong-nguoi-cao-tuoi',
      target: '/news/cum-mua-thu-dong-nguoi-cao-tuoi'
    },
    // Batch 2 (Oct 12)
    { source: '/son-tieu-o-nguoi-cao-tuoi', target: '/news/son-tieu-o-nguoi-cao-tuoi' },
    { source: '/bai-tap-kegel-cho-nguoi-cao-tuoi', target: '/news/bai-tap-kegel-cho-nguoi-cao-tuoi' },
    { source: '/quan-lot-chong-son-tieu-cach-chon', target: '/news/quan-lot-chong-son-tieu-cach-chon' },
    { source: '/cach-dung-va-giat-quan-lot-chong-son-tieu', target: '/news/cach-dung-va-giat-quan-lot-chong-son-tieu' },
    { source: '/so-sanh-quan-lot-chong-son-bim-nguoi-lon-mieng-lot', target: '/news/so-sanh-quan-lot-chong-son-bim-nguoi-lon-mieng-lot' },
    { source: '/son-tieu-o-nam-gioi-cao-tuoi', target: '/news/son-tieu-o-nam-gioi-cao-tuoi' },
    { source: '/tieu-dem-o-nguoi-cao-tuoi', target: '/news/tieu-dem-o-nguoi-cao-tuoi' },
    { source: '/cham-soc-da-vung-kin-nguoi-son-tieu', target: '/news/cham-soc-da-vung-kin-nguoi-son-tieu' },
    { source: '/tien-man-kinh-dau-hieu-do-tuoi', target: '/news/tien-man-kinh-dau-hieu-do-tuoi' },
    { source: '/quan-lot-ky-kinh-tien-man-kinh', target: '/news/quan-lot-ky-kinh-tien-man-kinh' },
    { source: '/hoi-chung-nieu-sinh-duc-man-kinh', target: '/news/hoi-chung-nieu-sinh-duc-man-kinh' },
    { source: '/loang-xuong-sau-man-kinh', target: '/news/loang-xuong-sau-man-kinh' },
    { source: '/mo-hinh-cham-soc-nguoi-cao-tuoi-2026', target: '/news/mo-hinh-cham-soc-nguoi-cao-tuoi-2026' },
    { source: '/benh-mat-nguoi-cao-tuoi', target: '/news/benh-mat-nguoi-cao-tuoi' },
    { source: '/tram-cam-co-don-nguoi-cao-tuoi', target: '/news/tram-cam-co-don-nguoi-cao-tuoi' },

    // Batch 3 - Nhom A (Song tu tin)
    { source: '/song-tu-tin/quan-lot-tham-hut-sau-sinh', target: '/news/quan-lot-tham-hut-sau-sinh' },
    { source: '/song-tu-tin/ri-tieu-khi-chay-bo-tap-gym', target: '/news/ri-tieu-khi-chay-bo-tap-gym' },
    { source: '/song-tu-tin/quan-boxer-chong-ro-ri-cho-nam', target: '/news/quan-boxer-chong-ro-ri-cho-nam' },
    { source: '/song-tu-tin/quan-lot-tham-hut-thay-bang-hang-ngay', target: '/news/quan-lot-tham-hut-thay-bang-hang-ngay' },
    { source: '/song-tu-tin/quan-lot-chong-ro-ri-khi-di-du-lich', target: '/news/quan-lot-chong-ro-ri-khi-di-du-lich' },
    { source: '/song-tu-tin/chat-lieu-quan-lot-chuc-nang', target: '/news/chat-lieu-quan-lot-chuc-nang' },
    { source: '/quan-lot-tham-hut-sau-sinh', target: '/news/quan-lot-tham-hut-sau-sinh' },
    { source: '/ri-tieu-khi-chay-bo-tap-gym', target: '/news/ri-tieu-khi-chay-bo-tap-gym' },
    { source: '/quan-boxer-chong-ro-ri-cho-nam', target: '/news/quan-boxer-chong-ro-ri-cho-nam' },
    { source: '/quan-lot-tham-hut-thay-bang-hang-ngay', target: '/news/quan-lot-tham-hut-thay-bang-hang-ngay' },
    { source: '/quan-lot-chong-ro-ri-khi-di-du-lich', target: '/news/quan-lot-chong-ro-ri-khi-di-du-lich' },
    { source: '/chat-lieu-quan-lot-chuc-nang', target: '/news/chat-lieu-quan-lot-chuc-nang' },

    // Batch 3 - Nhom B (Cham soc nguoi cao tuoi)
    { source: '/cham-soc-nguoi-cao-tuoi/quan-lot-mo-hong-khuy-bam', target: '/news/quan-lot-mo-hong-khuy-bam' },
    { source: '/cham-soc-nguoi-cao-tuoi/quan-lot-bao-ve-hong', target: '/news/quan-lot-bao-ve-hong' },
    { source: '/cham-soc-nguoi-cao-tuoi/quan-lot-cho-nguoi-sa-sut-tri-nho', target: '/news/quan-lot-cho-nguoi-sa-sut-tri-nho' },
    { source: '/cham-soc-nguoi-cao-tuoi/quan-lot-tham-qua-dem-tam-lot-giuong', target: '/news/quan-lot-tham-qua-dem-tam-lot-giuong' },
    { source: '/quan-lot-mo-hong-khuy-bam', target: '/news/quan-lot-mo-hong-khuy-bam' },
    { source: '/quan-lot-bao-ve-hong', target: '/news/quan-lot-bao-ve-hong' },
    { source: '/quan-lot-cho-nguoi-sa-sut-tri-nho', target: '/news/quan-lot-cho-nguoi-sa-sut-tri-nho' },
    { source: '/quan-lot-tham-qua-dem-tam-lot-giuong', target: '/news/quan-lot-tham-qua-dem-tam-lot-giuong' },

    // Batch 4 - 10 Bai viet Son tieu (Oct 19)
    { source: '/son-tieu-la-gi', target: '/news/son-tieu-la-gi' },
    { source: '/son-tieu-sau-sinh', target: '/news/son-tieu-sau-sinh' },
    { source: '/son-tieu-tuoi-man-kinh', target: '/news/son-tieu-tuoi-man-kinh' },
    { source: '/son-tieu-nguoi-cao-tuoi', target: '/news/son-tieu-nguoi-cao-tuoi' },
    { source: '/son-tieu-co-nen-dung-bang-ve-sinh', target: '/news/son-tieu-co-nen-dung-bang-ve-sinh' },
    { source: '/quan-chong-son-tieu-la-gi', target: '/news/quan-chong-son-tieu-la-gi' },
    { source: '/so-sanh-giai-phap-son-tieu', target: '/news/so-sanh-giai-phap-son-tieu' },
    { source: '/cach-chon-quan-chong-son-tieu', target: '/news/cach-chon-quan-chong-son-tieu' },
    { source: '/cach-giat-quan-tham-hut', target: '/news/cach-giat-quan-tham-hut' },
    { source: '/bai-tap-kegel-giam-son-tieu', target: '/news/bai-tap-kegel-giam-son-tieu' },
    { source: '/khong-nen-dung-bang-ve-sinh', target: '/news/son-tieu-co-nen-dung-bang-ve-sinh' },
    { source: '/so-sanh-giai-phap', target: '/news/so-sanh-giai-phap-son-tieu' },
    { source: '/cach-chon-quan', target: '/news/cach-chon-quan-chong-son-tieu' },
    { source: '/cach-giat-quan', target: '/news/cach-giat-quan-tham-hut' },
    { source: '/bai-tap-kegel', target: '/news/bai-tap-kegel-giam-son-tieu' },

    // Batch 5 - 10 Bai viet Dong Hanh Di Kham (Oct 20)
    { source: '/dich-vu-dong-hanh-di-kham-la-gi', target: '/news/dich-vu-dong-hanh-di-kham-la-gi' },
    { source: '/dua-bo-me-di-kham-khi-con-ban', target: '/news/dua-bo-me-di-kham-khi-con-ban' },
    { source: '/con-o-xa-cham-bo-me-di-kham', target: '/news/con-o-xa-cham-bo-me-di-kham' },
    { source: '/chuan-bi-gi-khi-dua-nguoi-gia-di-kham', target: '/news/chuan-bi-gi-khi-dua-nguoi-gia-di-kham' },
    { source: '/kham-bhyt-nguoi-cao-tuoi', target: '/news/kham-bhyt-nguoi-cao-tuoi' },
    { source: '/kinh-nghiem-di-kham-benh-vien-lon', target: '/news/kinh-nghiem-di-kham-benh-vien-lon' },
    { source: '/dua-nguoi-gia-tu-tinh-len-ha-noi-kham', target: '/news/dua-nguoi-gia-tu-tinh-len-ha-noi-kham' },
    { source: '/gia-dich-vu-dong-hanh-di-kham', target: '/news/gia-dich-vu-dong-hanh-di-kham' },
    { source: '/chon-dich-vu-dong-hanh-di-kham-uy-tin', target: '/news/chon-dich-vu-dong-hanh-di-kham-uy-tin' },
    { source: '/tai-kham-dinh-ky-benh-man-tinh', target: '/news/tai-kham-dinh-ky-benh-man-tinh' },
    { source: '/dong-hanh-di-kham-la-gi', target: '/news/dich-vu-dong-hanh-di-kham-la-gi' },
    { source: '/con-ban-ai-dua-bo-me-di-kham', target: '/news/dua-bo-me-di-kham-khi-con-ban' },
    { source: '/con-o-xa', target: '/news/con-o-xa-cham-bo-me-di-kham' },
    { source: '/chuan-bi-gi', target: '/news/chuan-bi-gi-khi-dua-nguoi-gia-di-kham' },
    { source: '/kham-bhyt', target: '/news/kham-bhyt-nguoi-cao-tuoi' },
    { source: '/quy-trinh-benh-vien-lon', target: '/news/kinh-nghiem-di-kham-benh-vien-lon' },
    { source: '/tu-tinh-len-ha-noi', target: '/news/dua-nguoi-gia-tu-tinh-len-ha-noi-kham' },
    { source: '/bang-gia', target: '/news/gia-dich-vu-dong-hanh-di-kham' },
    { source: '/chon-dich-vu-uy-tin', target: '/news/chon-dich-vu-dong-hanh-di-kham-uy-tin' },
    { source: '/tai-kham-dinh-ky', target: '/news/tai-kham-dinh-ky-benh-man-tinh' },
    { source: '/kien-thuc/dong-hanh-di-kham', target: '/dong-hanh-di-kham' },
    { source: '/kien-thuc/dong-hanh-kham-benh', target: '/dong-hanh-di-kham' },
    { source: '/kien-thuc/son-tieu', target: '/son-tieu' },
    { source: '/kien-thuc/tieu-son', target: '/tieu-son' },

    // Batch 6 - 15 Bai viet Cham soc nguoi cao tuoi Ha Noi (Oct 21)
    { source: '/dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi', target: '/news/dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi' },
    { source: '/tro-ly-suc-khoe-nguoi-cao-tuoi', target: '/news/tro-ly-suc-khoe-nguoi-cao-tuoi' },
    { source: '/gia-cham-soc-nguoi-gia-tai-nha-ha-noi', target: '/news/gia-cham-soc-nguoi-gia-tai-nha-ha-noi' },
    { source: '/bo-me-song-mot-minh-ha-noi', target: '/news/bo-me-song-mot-minh-ha-noi' },
    { source: '/theo-doi-huyet-ap-duong-huyet-tai-nha', target: '/news/theo-doi-huyet-ap-duong-huyet-tai-nha' },
    { source: '/quan-ly-thuoc-nguoi-cao-tuoi', target: '/news/quan-ly-thuoc-nguoi-cao-tuoi' },
    { source: '/phong-nga-nguoi-cao-tuoi-tai-nha', target: '/news/phong-nga-nguoi-cao-tuoi-tai-nha' },
    { source: '/cham-soc-nguoi-gia-sau-xuat-vien', target: '/news/cham-soc-nguoi-gia-sau-xuat-vien' },
    { source: '/dau-hieu-bo-me-can-cham-soc', target: '/news/dau-hieu-bo-me-can-cham-soc' },
    { source: '/chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi', target: '/news/chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi' },
    { source: '/dich-vu-dua-nguoi-gia-di-kham-ha-noi', target: '/news/dich-vu-dua-nguoi-gia-di-kham-ha-noi' },
    { source: '/kham-lao-khoa-ha-noi', target: '/news/kham-lao-khoa-ha-noi' },
    { source: '/kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi', target: '/news/kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi' },
    { source: '/dua-nguoi-gia-di-noi-soi-gay-me', target: '/news/dua-nguoi-gia-di-noi-soi-gay-me' },
    { source: '/dua-nguoi-gia-sa-sut-tri-tue-di-kham', target: '/news/dua-nguoi-gia-sa-sut-tri-tue-di-kham' },
    { source: '/cham-soc-nguoi-cao-tuoi-ha-noi', target: '/news/dich-vu-cham-soc-nguoi-cao-tuoi-tai-ha-noi' },
    { source: '/tro-ly-suc-khoe-la-gi', target: '/news/tro-ly-suc-khoe-nguoi-cao-tuoi' },
    { source: '/gia-cham-soc-nguoi-gia-ha-noi', target: '/news/gia-cham-soc-nguoi-gia-tai-nha-ha-noi' },
    { source: '/bo-me-song-mot-minh', target: '/news/bo-me-song-mot-minh-ha-noi' },
    { source: '/theo-doi-huyet-ap-duong-huyet', target: '/news/theo-doi-huyet-ap-duong-huyet-tai-nha' },
    { source: '/quan-ly-thuoc', target: '/news/quan-ly-thuoc-nguoi-cao-tuoi' },
    { source: '/phong-te-nga', target: '/news/phong-nga-nguoi-cao-tuoi-tai-nha' },
    { source: '/cham-soc-sau-xuat-vien', target: '/news/cham-soc-nguoi-gia-sau-xuat-vien' },
    { source: '/dau-hieu-can-cham-soc', target: '/news/dau-hieu-bo-me-can-cham-soc' },
    { source: '/chon-dich-vu-cham-soc-uy-tin', target: '/news/chon-dich-vu-cham-soc-nguoi-cao-tuoi-uy-tin-ha-noi' },
    { source: '/dua-nguoi-gia-di-kham-ha-noi', target: '/news/dich-vu-dua-nguoi-gia-di-kham-ha-noi' },
    { source: '/kham-tong-quat-nguoi-cao-tuoi', target: '/news/kham-suc-khoe-tong-quat-nguoi-cao-tuoi-ha-noi' },
    { source: '/noi-soi-thu-thuat', target: '/news/dua-nguoi-gia-di-noi-soi-gay-me' },
    { source: '/di-kham-sa-sut-tri-tue', target: '/news/dua-nguoi-gia-sa-sut-tri-tue-di-kham' },
    { source: '/kien-thuc/cham-soc-nguoi-cao-tuoi-ha-noi', target: '/dich-vu' }
  ];

  // Redirect old /cam-nang/<slug> and /kinhnguyet/<slug> to /kinh-nguyet/<slug>
  allArticles.forEach(article => {
    const slug = article.slug || article.id;
    if (slug) {
      staticRedirects.push({
        source: `/cam-nang/${slug}`,
        target: `/kinh-nguyet/${slug}`
      });
      staticRedirects.push({
        source: `/kinhnguyet/${slug}`,
        target: `/kinh-nguyet/${slug}`
      });
    }
  });

  staticRedirects.forEach(({ source, target }) => {
    const targetDir = path.join(distDir, ...source.split('/').filter(Boolean));
    fs.mkdirSync(targetDir, { recursive: true });

    const redirectHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Chuyển hướng 301...</title>
  <meta http-equiv="refresh" content="0;url=${target}">
  <link rel="canonical" href="https://antcare.vn${target}">
  <script>window.location.replace("${target}");</script>
</head>
<body>
  <p>Trang đã được di chuyển vĩnh viễn. Đang chuyển hướng đến <a href="${target}">${target}</a>...</p>
</body>
</html>`;

    fs.writeFileSync(path.join(targetDir, 'index.html'), redirectHtml, 'utf8');
  });

  // ==========================================
  // 5.1 TẠO TRANG 404 THÂN THIỆN (404.html)
  // ==========================================
  const notFoundHtml = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>Không tìm thấy trang (404) | ANTCARE – Kiến chăm tổ</title>
    <meta name="description" content="Trang bạn tìm kiếm không tồn tại hoặc đã được chuyển hướng. Vui lòng quay lại trang chủ hoặc liên hệ ANTCARE." />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'Be Vietnam Pro', sans-serif; background-color: #FEFCFB; color: #2A1B3D; min-height: 100vh; display: flex; flex-direction: column; }
      header { background: #ffffff; border-bottom: 1px solid #f1eef8; padding: 14px 20px; }
      .header-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
      .logo-link { display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; }
      .logo-img { height: 40px; width: auto; }
      .nav-links { display: flex; align-items: center; gap: 20px; list-style: none; font-size: 14px; font-weight: 600; }
      .nav-links a { text-decoration: none; color: #475569; transition: color 0.2s; }
      .nav-links a:hover { color: #6633B4; }
      .hotline-btn { display: inline-flex; align-items: center; gap: 6px; background: #FD711A; color: #fff; padding: 8px 18px; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 13px; }
      main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 50px 20px; }
      .error-card { max-width: 640px; width: 100%; text-align: center; background: #ffffff; border: 1px solid #ebdff8; border-radius: 24px; padding: 40px 28px; box-shadow: 0 10px 30px rgba(102, 51, 180, 0.05); }
      .badge-404 { display: inline-block; font-size: 13px; font-weight: 800; color: #6633B4; background: #efe7fb; padding: 6px 16px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 18px; }
      h1 { font-size: 26px; font-weight: 800; color: #2A1B3D; margin-bottom: 12px; line-height: 1.35; }
      p.sub { font-size: 15px; color: #64748b; line-height: 1.65; margin-bottom: 28px; }
      .action-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 24px; }
      .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 999px; font-size: 14px; font-weight: 700; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; }
      .btn-primary { background: #6633B4; color: #fff; box-shadow: 0 4px 14px rgba(102, 51, 180, 0.25); }
      .btn-secondary { background: #fff; color: #FD711A; border: 1.5px solid #FD711A; }
      .btn-outline { background: #f8fafc; color: #334155; border: 1px solid #cbd5e1; }
      .btn:hover { transform: translateY(-1px); }
      .support-box { margin-top: 24px; padding-top: 20px; border-top: 1px dashed #e2e8f0; font-size: 13.5px; color: #64748b; }
      .support-box a { color: #6633B4; font-weight: 700; text-decoration: underline; }
      footer { background: #f9f8fc; border-top: 1px solid #f1eef8; padding: 24px 20px; text-align: center; font-size: 13px; color: #64748b; }
      @media (max-width: 640px) {
        .nav-links { display: none; }
        h1 { font-size: 22px; }
        .action-grid { flex-direction: column; }
        .btn { width: 100%; }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="header-inner">
        <a href="/" class="logo-link">
          <img src="/images/footer-logo.png" alt="ANTCARE – Kiến chăm tổ" class="logo-img" />
        </a>
        <ul class="nav-links">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi">Dịch vụ đưa đi khám</a></li>
          <li><a href="/activities">Hoạt động</a></li>
          <li><a href="/news">Tin tức</a></li>
          <li><a href="/ve-antcare">Về chúng tôi</a></li>
        </ul>
        <a href="tel:0969032360" class="hotline-btn">
          <span class="material-symbols-outlined" style="font-size:16px;">call</span>
          0969 032 360
        </a>
      </div>
    </header>

    <main>
      <div class="error-card">
        <div class="badge-404">Mã lỗi 404 · Không tìm thấy trang</div>
        <h1>Rất tiếc, trang bạn tìm kiếm không tồn tại</h1>
        <p class="sub">
          Đường dẫn có thể đã thay đổi, được gộp sang bài viết mới hoặc tạm thời không khả dụng. Quý khách có thể lựa chọn các liên kết nhanh dưới đây:
        </p>

        <div class="action-grid">
          <a href="/" class="btn btn-primary">
            <span class="material-symbols-outlined" style="font-size:18px;">home</span>
            Về Trang Chủ
          </a>
          <a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" class="btn btn-secondary">
            <span class="material-symbols-outlined" style="font-size:18px;">local_hospital</span>
            Dịch vụ đưa đi khám bệnh
          </a>
          <a href="/news/checklist-dua-bo-me-di-kham-benh-vien" class="btn btn-outline">
            <span class="material-symbols-outlined" style="font-size:18px;">checklist</span>
            Checklist chuẩn bị đi khám
          </a>
        </div>

        <div class="support-box">
          Cần hỗ trợ ngay? Gọi hotline <a href="tel:0969032360">0969 032 360</a> hoặc nhắn tin qua <a href="https://zalo.me/0969032360" target="_blank" rel="noopener noreferrer">Zalo ANTCARE</a>.
        </div>
      </div>
    </main>

    <footer>
      <p>© 2026 ANTCARE – Kiến chăm tổ. Tòa Rox Tower, 138 Hồ Tùng Mậu, Hà Nội. Hotline: 0969 032 360</p>
    </footer>
  </body>
</html>`;

  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'public', '404.html'), notFoundHtml, 'utf8');
  console.log('Generated friendly 404.html (written to both dist/ and public/)');

  // ==========================================
  // 6. TỰ ĐỘNG SINH sitemap.xml
  // ==========================================
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`Generated sitemap.xml with ${sitemapUrls.length} URLs (written to both dist/ and public/)`);

  console.log('Site-wide static prerendering completed successfully!');
}

runPrerender();
