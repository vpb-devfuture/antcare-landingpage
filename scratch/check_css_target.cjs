const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../src/index.css');
const css = fs.readFileSync(cssPath, 'utf8');

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
}`;

console.log('Found targetStr:', css.includes(targetStr));

