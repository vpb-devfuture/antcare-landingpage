const fs = require('fs');
const path = require('path');

const newsJsonPath = path.join(__dirname, '../src/data/news.json');
const newsData = JSON.parse(fs.readFileSync(newsJsonPath, 'utf8'));

// Extract article contents from our scratch scripts
const bimScript = fs.readFileSync(path.join(__dirname, 'add_bim_article.cjs'), 'utf8');
const sontieuScript = fs.readFileSync(path.join(__dirname, 'add_sontieu_article.cjs'), 'utf8');
const mienglotScript = fs.readFileSync(path.join(__dirname, 'add_mienglot_article.cjs'), 'utf8');
const taquanScript = fs.readFileSync(path.join(__dirname, 'add_taquan_article.cjs'), 'utf8');
const dosizeScript = fs.readFileSync(path.join(__dirname, 'add_dosize_article.cjs'), 'utf8');

function extractArticleContent(scriptStr) {
  const match = scriptStr.match(/const articleContent = `([\s\S]*?)`;\r?\n\r?\nnewsData\.featured/);
  return match ? match[1] : '';
}

const bimContent = extractArticleContent(bimScript);
const sontieuContent = extractArticleContent(sontieuScript);
const mienglotContent = extractArticleContent(mienglotScript);
const taquanContent = extractArticleContent(taquanScript);
const dosizeContent = extractArticleContent(dosizeScript);

console.log('Extracted contents status:', {
  bim: !!bimContent,
  sontieu: !!sontieuContent,
  mienglot: !!mienglotContent,
  taquan: !!taquanContent,
  dosize: !!dosizeContent
});

// Find max existing ID in current news.json excluding our 5 target slugs if any
const existingArticles = [newsData.featured, ...newsData.list].filter(Boolean);
const baseId = Math.max(...existingArticles.map(a => a.id));
let nextId = baseId + 1;

const newArticles = [
  {
    slug: "bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me",
    oldSlugs: [
      "kien-thuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me",
      "tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me"
    ],
    title: "Bỉm người lớn: Chọn loại nào theo đúng tình trạng của bố mẹ",
    category: "Chăm sóc sức khỏe",
    date: "10/09/2026",
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
    },
    description: "Hướng dẫn chọn bỉm người lớn theo 4 giai đoạn tình trạng: són tiểu nhẹ, dùng thường xuyên, đi lại khó khăn, nằm liệt. Chọn đúng giúp tiết kiệm và tránh hăm.",
    excerpt: "Hướng dẫn chọn bỉm người lớn theo 4 giai đoạn tình trạng: són tiểu nhẹ, dùng thường xuyên, đi lại khó khăn, nằm liệt. Chọn đúng giúp tiết kiệm và tránh hăm.",
    image: "/images/tin-tuc/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me.jpg",
    content: bimContent
  },
  {
    slug: "son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap",
    oldSlugs: [
      "kien-thuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap",
      "tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap"
    ],
    title: "Són tiểu ở người cao tuổi: Vì sao xảy ra và làm gì để cải thiện",
    category: "Chăm sóc sức khỏe",
    date: "10/09/2026",
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
    },
    description: "Són tiểu khi ho, cười, hắt hơi rất phổ biến ở người lớn tuổi nhưng ít ai nói ra. Nguyên nhân, cách điều trị và sản phẩm hỗ trợ phù hợp từng mức độ.",
    excerpt: "Són tiểu khi ho, cười, hắt hơi rất phổ biến ở người lớn tuổi nhưng ít ai nói ra. Nguyên nhân, cách điều trị và sản phẩm hỗ trợ phù hợp từng mức độ.",
    image: "/images/tin-tuc/son-tieu-o-nguoi-cao-tuoi-nguyen-nhan-va-giai-phap.jpg",
    content: sontieuContent
  },
  {
    slug: "mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao",
    oldSlugs: [
      "kien-thuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao",
      "tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao"
    ],
    title: "Miếng lót són tiểu khác băng vệ sinh thế nào và vì sao không nên dùng thay",
    category: "Chăm sóc sức khỏe",
    date: "10/09/2026",
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
    },
    description: "Nhiều người dùng băng vệ sinh thay miếng lót són tiểu và gặp tràn, mùi. Giải thích khác biệt về cấu tạo lõi thấm và cách chọn đúng loại.",
    excerpt: "Nhiều người dùng băng vệ sinh thay miếng lót són tiểu và gặp tràn, mùi. Giải thích khác biệt về cấu tạo lõi thấm và cách chọn đúng loại.",
    image: "/images/tin-tuc/mieng-lot-son-tieu-khac-bang-ve-sinh-the-nao.jpg",
    content: mienglotContent
  },
  {
    slug: "ta-quan-hay-ta-dan-chon-loai-nao",
    oldSlugs: [
      "kien-thuc/ta-quan-hay-ta-dan-chon-loai-nao",
      "tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao"
    ],
    title: "Tã quần hay tã dán: Chọn loại nào cho bố mẹ",
    category: "Chăm sóc sức khỏe",
    date: "10/09/2026",
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "So sánh tã quần và tã dán người lớn: khác biệt về thiết kế, tình huống phù hợp, ưu nhược điểm và cách chọn theo khả năng vận động của người dùng.",
    },
    description: "So sánh tã quần và tã dán người lớn: khác biệt về thiết kế, tình huống phù hợp, ưu nhược điểm và cách chọn theo khả năng vận động của người dùng.",
    excerpt: "So sánh tã quần và tã dán người lớn: khác biệt về thiết kế, tình huống phù hợp, ưu nhược điểm và cách chọn theo khả năng vận động của người dùng.",
    image: "/images/tin-tuc/ta-quan-hay-ta-dan-chon-loai-nao.jpg",
    content: taquanContent
  },
  {
    slug: "cach-do-size-bim-nguoi-lon",
    oldSlugs: [
      "kien-thuc/cach-do-size-bim-nguoi-lon",
      "tin-tuc/cach-do-size-bim-nguoi-lon"
    ],
    title: "Cách đo và chọn size bỉm người lớn chuẩn xác",
    category: "Chăm sóc sức khỏe",
    date: "10/09/2026",
    author: {
      name: "ANTCARE – Kiến chăm tổ",
      image: "/images/huyen-trang.jpg",
      description: "Dịch vụ Trợ lý sức khỏe & Chăm sóc người cao tuổi tại nhà"
    },
    description: "Hướng dẫn đo vòng hông và chọn size bỉm người lớn đúng cách. Vì sao chọn size rộng gây tràn và các lỗi thường gặp khi chọn size.",
    excerpt: "Hướng dẫn đo vòng hông và chọn size bỉm người lớn đúng cách. Vì sao chọn size rộng gây tràn và các lỗi thường gặp khi chọn size.",
    image: "/images/tin-tuc/cach-do-size-bim-nguoi-lon.jpg",
    content: dosizeContent
  }
];

// Clean existing list from any of these 5 slugs first to avoid duplicates
const targetSlugs = new Set(newArticles.map(a => a.slug));
newsData.list = newsData.list.filter(item => !targetSlugs.has(item.slug));

// Assign fresh unique IDs to the 5 articles
const preparedArticles = newArticles.map(article => {
  return {
    id: nextId++,
    ...article
  };
});

// Set the last one (cach-do-size-bim-nguoi-lon) as featured, and add the rest into newsData.list at the beginning!
const featuredArticle = { ...preparedArticles[4], featured: true };
const listArticles = preparedArticles.slice(0, 4).map(a => ({ ...a, featured: false }));

// Make sure previous featured article (if not one of targetSlugs) is in list
if (newsData.featured && !targetSlugs.has(newsData.featured.slug)) {
  newsData.list.unshift({ ...newsData.featured, featured: false });
}

newsData.featured = featuredArticle;
// Add all other 4 articles at the top of list
newsData.list.unshift(...listArticles);

fs.writeFileSync(newsJsonPath, JSON.stringify(newsData, null, 2), 'utf8');
console.log('Restored all 5 articles successfully into news.json!');
