const fs = require('fs');

const newIndexHtml = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="ELVmDAMw6o8U05GdTetp-7n2cjHAX32AjNPiF0QK0j0" />
    <title>ANTCARE – Quần kinh nguyệt &amp; quần chống són tiểu</title>
    <meta name="description" content="ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt." />
    <meta name="keywords" content="quần kinh nguyệt, quần chống són tiểu, đồ lót chức năng, ANTCARE, Kiến chăm tổ" />
    <meta property="og:title" content="ANTCARE – Quần kinh nguyệt &amp; quần chống són tiểu" />
    <meta property="og:description" content="ANTCARE – đồ lót chức năng Việt Nam: quần kinh nguyệt thay băng vệ sinh, quần chống són tiểu nhẹ. Mềm, giặt được, dùng lại. Đăng ký nhận thông tin ra mắt." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antcare.vn/" />
    <meta property="og:image" content="https://antcare.vn/images/footer-logo.png" />
    <meta property="og:locale" content="vi_VN" />
    <link rel="canonical" href="https://antcare.vn/" />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&family=Caveat:wght@400;500;600&family=Dancing+Script:wght@400;500;600&family=Outfit:wght@700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet">
    <script type="application/ld+json">
    {
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
                "text": "Dịch vụ chăm sóc người cao tuổi là nơi ANTCARE bắt đầu và hiện đang tạm dừng nhận khách mới để tập trung vào đồ lót chức năng. Thông tin dịch vụ vẫn được giữ tại trang Chăm sóc người cao tuổi."
              }
            }
          ]
        }
      ]
    }
    </script>
    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1692777472851360');
      fbq('track', 'PageView');
    </script>
    <!-- End Meta Pixel Code -->
  </head>
  <body>
    <noscript>
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=1692777472851360&ev=PageView&noscript=1"/>
    </noscript>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

fs.writeFileSync('index.html', newIndexHtml);
console.log('Successfully updated index.html');

