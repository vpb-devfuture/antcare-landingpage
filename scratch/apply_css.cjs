const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const targetStr = `.article-son-tieu dl.faq,
.article-dong-hanh-di-kham dl.faq {
  margin: 20px 0;
  background: #faf8fd;
  border: 1px solid #e6dff2;
  border-radius: 12px;
  padding: 16px 20px;
}

.article-son-tieu dl.faq dt,
.article-dong-hanh-di-kham dl.faq dt {
  font-weight: 700;
  color: #6633B4;
  margin-top: 12px;
  font-size: 1.02rem;
}

.article-son-tieu dl.faq dt:first-child,
.article-dong-hanh-di-kham dl.faq dt:first-child {
  margin-top: 0;
}

.article-son-tieu dl.faq dd,
.article-dong-hanh-di-kham dl.faq dd {
  margin: 4px 0 12px;
  color: #374151;
  line-height: 1.65;
}`.replace(/\n/g, '\r\n');

const replacement = `/* Universal FAQ Card System (Covers 105+ articles with <dl class="faq">) */
dl.faq,
.article-son-tieu dl.faq,
.article-dong-hanh-di-kham dl.faq {
  margin: 1.75rem 0 2.25rem !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.9rem !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
}

dl.faq dt,
.article-son-tieu dl.faq dt,
.article-dong-hanh-di-kham dl.faq dt {
  background: #FAF8FD !important;
  border: 1px solid #E6DFF2 !important;
  border-bottom: none !important;
  border-top-left-radius: 14px !important;
  border-top-right-radius: 14px !important;
  padding: 1.15rem 1.25rem 0.55rem 1.25rem !important;
  font-weight: 700 !important;
  color: #6633B4 !important;
  font-size: 1.05rem !important;
  line-height: 1.45 !important;
  display: flex !important;
  align-items: flex-start !important;
  gap: 0.65rem !important;
  margin: 0 !important;
  transition: all 0.2s ease !important;
}

dl.faq dt::before,
.article-son-tieu dl.faq dt::before,
.article-dong-hanh-di-kham dl.faq dt::before {
  content: '❓' !important;
  font-size: 1.1rem !important;
  line-height: 1.35 !important;
  flex-shrink: 0 !important;
}

dl.faq dd,
.article-son-tieu dl.faq dd,
.article-dong-hanh-di-kham dl.faq dd {
  background: #FAF8FD !important;
  border: 1px solid #E6DFF2 !important;
  border-top: 1px dashed #E6DFF2 !important;
  border-bottom-left-radius: 14px !important;
  border-bottom-right-radius: 14px !important;
  padding: 0.75rem 1.25rem 1.2rem 1.25rem !important;
  margin: 0 0 0.25rem 0 !important;
  color: #374151 !important;
  font-size: 0.96rem !important;
  font-weight: 400 !important;
  line-height: 1.7 !important;
  transition: all 0.2s ease !important;
}

dl.faq dt:hover,
dl.faq dt:hover + dd {
  border-color: #6633B4 !important;
}

/* Universal FAQ Item Cards (<div class="faq-item">) */
div.faq-item {
  background: #FAF8FD !important;
  border: 1px solid #E6DFF2 !important;
  border-radius: 14px !important;
  padding: 1.15rem 1.25rem !important;
  margin: 0.9rem 0 !important;
  transition: all 0.2s ease-in-out !important;
}

div.faq-item:hover {
  border-color: #6633B4 !important;
  box-shadow: 0 4px 14px rgba(102, 51, 180, 0.06) !important;
}

div.faq-item h3 {
  margin: 0 0 0.5rem 0 !important;
  color: #6633B4 !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  line-height: 1.45 !important;
  display: flex !important;
  align-items: flex-start !important;
  gap: 0.65rem !important;
  border: none !important;
  padding: 0 !important;
}

div.faq-item h3::before {
  content: '❓' !important;
  font-size: 1.1rem !important;
  line-height: 1.35 !important;
  flex-shrink: 0 !important;
}

div.faq-item p {
  margin: 0 !important;
  padding-top: 0.65rem !important;
  border-top: 1px dashed #E6DFF2 !important;
  color: #374151 !important;
  font-size: 0.96rem !important;
  font-weight: 400 !important;
  line-height: 1.7 !important;
}

div.faq-item p + p {
  margin-top: 0.5rem !important;
  border-top: none !important;
  padding-top: 0 !important;
}

.article-detail dl.faq dd,
.article-detail div.faq-item p {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}`.replace(/\n/g, '\r\n');

if (!css.includes(targetStr)) {
  console.error('Target string not found in index.css');
  process.exit(1);
}

css = css.replace(targetStr, replacement);
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated src/index.css with universal FAQ styles!');

