const fs = require('fs');
const cssToAppend = `
/* Custom Cẩm Nang & Article components */
.eyebrow {
  color: #FD711A;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

nav.toc {
  background: #f6f1fc;
  border: 1px solid #e6dff2;
  border-radius: 12px;
  padding: 16px 20px;
  margin: 24px 0;
}

nav.toc strong {
  color: #6633B4;
  font-size: 0.95rem;
}

nav.toc ol {
  margin: 0.5em 0 0;
  padding-left: 1.3em;
}

nav.toc li {
  margin-bottom: 0.35rem;
}

nav.toc a {
  color: #6633B4;
  text-decoration: none;
  font-weight: 500;
}

nav.toc a:hover {
  color: #FD711A;
  text-decoration: underline;
}

.verdict {
  background: #fff4ec;
  border-left: 5px solid #FD711A;
  padding: 14px 18px;
  border-radius: 8px;
  margin: 18px 0;
  font-size: 0.98rem;
  color: #2e1832;
}

.verdict strong {
  color: #FD711A;
}

.table-scroll {
  overflow-x: auto;
  margin: 16px 0;
  border-radius: 10px;
  -webkit-overflow-scrolling: touch;
}

.pc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 16px 0;
}

.pc div {
  border: 1px solid #e6dff2;
  border-radius: 12px;
  padding: 14px 16px;
  background: #faf8fd;
}

.pc h4 {
  margin: 0.2em 0 0.5em;
  font-size: 1.05rem;
}

.pros h4 {
  color: #1f7a4d !important;
}

.cons h4 {
  color: #b3261e !important;
}

.pc ul {
  padding-left: 1.2em;
  margin: 0;
}

.pc li {
  margin-bottom: 0.35rem;
  font-size: 0.92rem;
}

@media (max-width: 640px) {
  .pc {
    grid-template-columns: 1fr;
  }
}

.sources {
  font-size: 0.88rem;
  color: #5b5568;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e6dff2;
}

.sources h3 {
  font-size: 1.05rem;
  color: #2A1B3D;
  margin-bottom: 8px;
}

.sources a {
  color: #6633B4;
}

.sources a:hover {
  color: #FD711A;
  text-decoration: underline;
}

.note {
  font-size: 0.85rem;
  color: #5b5568;
  border-top: 1px dashed #e6dff2;
  margin-top: 20px;
  padding-top: 10px;
  font-style: italic;
}
`;

fs.appendFileSync('src/index.css', cssToAppend, 'utf8');
console.log('Appended successfully');

