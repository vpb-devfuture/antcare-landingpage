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
      // Remove placeholder / existing dynamic scripts in head and inject new
      pageHtml = pageHtml.replace('</head>', `  ${jsonLdStr}\n</head>`);
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
  // 1. TRANG CHỦ (/)
  // ==========================================
  const homeTitle = "ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi tại nhà Hà Nội";
  const homeDesc = "ANTCARE – Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà chuẩn quốc tế. Hotline: 0969 032 360. Địa chỉ: Tòa Rox Tower, 138 Hồ Tùng Mậu, Hà Nội.";
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://antcare.vn/#organization",
        "name": "ANTCARE – Kiến chăm tổ",
        "url": "https://antcare.vn",
        "logo": "https://antcare.vn/images/logo.png",
        "image": "https://antcare.vn/images/footer-logo.png",
        "description": homeDesc,
        "telephone": "+84969032360",
        "priceRange": "390000 VND - 3190000 VND",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tòa Rox Tower, 138 Hồ Tùng Mậu, Phú Diễn",
          "addressLocality": "Hà Nội",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "21.0383",
          "longitude": "105.7725"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "21:00"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61593117245344",
          "https://www.youtube.com/@Antcare-kienchamto",
          "https://www.tiktok.com/@antcare_group"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://antcare.vn/#website",
        "url": "https://antcare.vn",
        "name": "ANTCARE – Kiến chăm tổ",
        "publisher": { "@id": "https://antcare.vn/#organization" }
      }
    ]
  };

  const homeBody = `
    <header class="sr-only">
      <h1>ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi tại nhà và đồng hành y tế Hà Nội</h1>
    </header>
    <main class="antcare-home-prerender">
      <div class="py-12 px-4 max-w-5xl mx-auto">
        <h2 class="text-3xl font-extrabold text-[#2A1B3D] mb-4">Trợ lý chăm sóc sức khỏe tiêu chuẩn quốc tế cho gia đình bạn</h2>
        <p class="text-lg text-slate-700 mb-6">Bạn không thể ở bên gia đình mọi lúc mọi nơi, ANTCARE sẽ luôn ở bên để giữ trọn yêu thương cùng bạn.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <h3 class="text-xl font-bold text-[#6633B4] mb-2">Trợ lý sức khỏe</h3>
            <p class="text-slate-700">Thăm nhà, kiểm tra huyết áp, nhịp tim, đường huyết và bài tập vận động chuẩn Senior Fitness.</p>
          </div>
          <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <h3 class="text-xl font-bold text-[#FD711A] mb-2"><a href="/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi" class="hover:underline">Đồng hành khám bệnh</a></h3>
            <p class="text-slate-700">Kiến Y tế có nền tảng điều dưỡng đưa ông bà đi khám tại các bệnh viện Hà Nội trọn gói từ 390.000đ.</p>
          </div>
          <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <h3 class="text-xl font-bold text-[#6633B4] mb-2">An tâm nhà cửa</h3>
            <p class="text-slate-700">Đánh giá rủi ro an toàn té ngã nhà ở, dọn dẹp hỗ trợ và chăm sóc đời sống tinh thần.</p>
          </div>
        </div>
      </div>
    </main>
  `;

  writeStaticPage({
    relativeUrl: '/',
    title: homeTitle,
    description: homeDesc,
    canonical: 'https://antcare.vn/',
    ogImage: '/images/footer-logo.png',
    h1Title: 'ANTCARE – Kiến chăm tổ | Chăm sóc người cao tuổi tại nhà và đồng hành y tế Hà Nội',
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
            "name": "Dịch vụ",
            "item": "https://antcare.vn/#giai-phap-cham-soc"
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
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        "name": "Dịch vụ đưa người cao tuổi đi khám",
        "serviceType": "Đồng hành khám bệnh",
        "provider": {
          "@type": "Organization",
          "name": "ANTCARE",
          "url": "https://antcare.vn",
          "telephone": "+84969032360",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tòa Rox Tower, 138 Hồ Tùng Mậu",
            "addressLocality": "Hà Nội",
            "addressCountry": "VN"
          }
        },
        "areaServed": ["Hà Nội", "Miền Bắc Việt Nam"],
        "offers": [
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 3 giờ)",
            "price": "390000",
            "priceCurrency": "VND",
            "description": "Thời lượng 3 giờ"
          },
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 4 giờ)",
            "price": "490000",
            "priceCurrency": "VND",
            "description": "Thời lượng 4 giờ"
          },
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 6 giờ)",
            "price": "690000",
            "priceCurrency": "VND",
            "description": "Thời lượng 6 giờ"
          },
          {
            "@type": "Offer",
            "name": "Khám bệnh (≤ 8 giờ)",
            "price": "790000",
            "priceCurrency": "VND",
            "description": "Thời lượng 8 giờ"
          }
        ]
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
        <a href="/#giai-phap-cham-soc" class="hover:text-[#6633B4] transition-colors">Dịch vụ</a>
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
          Bố mẹ cần được theo dõi sức khỏe thường xuyên? Xem thêm các <a href="/#bang-gia-chi-tiet" class="font-bold text-[#6633B4] hover:underline">Gói Trợ lý Sức khỏe</a> định kỳ tại nhà, từ 990.000đ/tháng.
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
      title: 'Về ANTCARE – Kiến chăm tổ | Trợ Lý Chăm Sóc Sức Khỏe Người Cao Tuổi Tại Nhà Hà Nội',
      desc: 'ANTCARE – Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà ở Hà Nội.',
      h1: 'Về chúng tôi – ANTCARE Kiến chăm tổ'
    },
    {
      path: '/about',
      title: 'Về ANTCARE – Kiến chăm tổ | Trợ Lý Chăm Sóc Sức Khỏe Người Cao Tuổi Tại Nhà Hà Nội',
      desc: 'ANTCARE – Kiến chăm tổ là dịch vụ trợ lý chăm sóc sức khỏe và đồng hành cùng người cao tuổi tại nhà ở Hà Nội.',
      h1: 'Về chúng tôi – ANTCARE Kiến chăm tổ'
    },
    {
      path: '/giai-phap-cham-soc',
      title: 'Dịch vụ chăm sóc người cao tuổi tại nhà Hà Nội | ANTCARE — Kiến chăm tổ',
      desc: 'ANTCARE — Kiến chăm tổ cung cấp 3 dịch vụ chăm sóc người cao tuổi tại Hà Nội: đưa đi khám bệnh, theo dõi sức khỏe tại nhà và hỗ trợ an toàn nhà cửa.',
      h1: 'Giải pháp chăm sóc người cao tuổi toàn diện'
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
    }
  ];

  staticRoutes.forEach(r => {
    const pageBody = `
      <div class="py-12 px-4 max-w-5xl mx-auto">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#2A1B3D] mb-4">${r.h1}</h1>
        <p class="text-base text-slate-700 leading-relaxed">${r.desc}</p>
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
    'dich-vu-dong-hanh-kham-benh-la-gi',
    'dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia'
  ]);

  let articlesPrerendered = 0;

  allArticles.forEach(article => {
    const slug = article.slug || article.id;
    if (!slug || redirectedSlugs.has(String(slug))) {
      return;
    }

    const articleUrl = `${DOMAIN}/news/${slug}`;
    const cleanTitle = (article.metaTitle || article.title || 'Tin tức y tế').replace(/\n/g, ' ').trim();
    const fullTitle = cleanTitle.includes('ANTCARE') ? cleanTitle : `${cleanTitle} | ANTCARE`;
    const safeDesc = cleanDescription(article.description || article.summary || article.title);
    const datePub = article.datePublished || '2026-08-01';
    const dateMod = article.dateModified || datePub;
    const imgUrl = article.image
      ? (article.image.startsWith('http') ? article.image : `${DOMAIN}${article.image.startsWith('/') ? '' : '/'}${article.image}`)
      : `${DOMAIN}/images/footer-logo.png`;

    const articleJsonLd = {
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

    articlesPrerendered++;
  });

  console.log(`Prerendered ${articlesPrerendered} articles from news.json!`);

  // ==========================================
  // 5. CÁC TRANG CHUYỂN HƯỚNG 301 TĨNH
  // ==========================================
  const staticRedirects = [
    {
      source: '/news/chuan-bi-gi-khi-dua-bo-me-di-kham-benh',
      target: '/news/checklist-dua-bo-me-di-kham-benh-vien'
    },
    {
      source: '/news/dua-bo-me-di-kham-benh-ha-noi-can-chuan-bi-gi',
      target: '/news/checklist-dua-bo-me-di-kham-benh-vien'
    },
    {
      source: '/news/dich-vu-dong-hanh-kham-benh-la-gi',
      target: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
    },
    {
      source: '/news/dich-vu-dong-hanh-di-kham-benh-cho-nguoi-gia',
      target: '/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi'
    }
  ];

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
