const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.js', 'utf-8');

// 1. Replace jsonLd inject block
const oldLdInject = `    // 5. Injects JSON-LD (Replace existing ld+json or append)
    if (jsonLd) {
      const jsonLdStr = \`<script type="application/ld+json">\\n\${JSON.stringify(jsonLd, null, 2)}\\n</script>\`;
      // Remove placeholder / existing dynamic scripts in head and inject new
      pageHtml = pageHtml.replace('</head>', \`  \${jsonLdStr}\\n</head>\`);
    }`;

const newLdInject = `    // 5. Injects JSON-LD (Replace existing ld+json or append)
    if (jsonLd) {
      const jsonLdStr = \`<script type="application/ld+json">\\n\${JSON.stringify(jsonLd, null, 2)}\\n</script>\`;
      if (pageHtml.includes('type="application/ld+json"')) {
        pageHtml = pageHtml.replace(/<script type="application\\/ld\\+json">[\\s\\S]*?<\\/script>/i, jsonLdStr);
      } else {
        pageHtml = pageHtml.replace('</head>', \`  \${jsonLdStr}\\n</head>\`);
      }
    }`;

content = content.replace(oldLdInject, newLdInject);

// 2. Update articleJsonLd author and publisher
const oldArticleAuthor = `      "author": {
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
          "url": \`\${DOMAIN}/images/footer-logo.png\`
        }
      }`;

const newArticleAuthor = `      "author": {
        "@type": "Organization",
        "name": "ANTCARE",
        "url": DOMAIN
      },
      "publisher": {
        "@id": "https://antcare.vn/#org"
      },
      "isPartOf": {
        "@id": "https://antcare.vn/#website"
      }`;

content = content.replace(oldArticleAuthor, newArticleAuthor);

fs.writeFileSync('scripts/prerender.js', content);
console.log('Successfully updated prerender.js jsonLd replacement & article schema');

