const fs = require('fs');
const path = require('path');

const newsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'news.json'), 'utf8'));

// Simulating News.jsx logic for isSonTieuPath
const isSonTieuItem = (item) => {
  if (!item) return false;
  if (item.category === 'Tiểu són' || item.group === 'son-tieu' || item.category === 'Incontinence' || item.category === 'Urinary Incontinence') return true;
  if (item.slug && !item.slug.includes('quan-kinh-nguyet') && (
    item.slug.includes('son-tieu') || item.slug.includes('tieu-son') || item.slug.includes('ri-tieu') || item.slug.includes('quan-chong-son')
  )) return true;
  return false;
};

const parseArticleDate = (dateStr) => {
  if (!dateStr) return 0;
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
  }
  return new Date(dateStr).getTime() || 0;
};

const sortArticlesByDate = (articles) => {
  if (!Array.isArray(articles)) return [];
  return [...articles].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    const timeA = parseArticleDate(a.date);
    const timeB = parseArticleDate(b.date);
    if (timeB !== timeA) {
      return timeB - timeA;
    }
    return (b.id || 0) - (a.id || 0);
  });
};

const sectionList = newsData.list.filter(isSonTieuItem);
const sortedList = sortArticlesByDate(sectionList);
const featuredArticle = sortedList.find(item => item.isPinned) || sortedList[0];
const remainingList = sortedList.filter(item => item.id !== featuredArticle?.id && item.slug !== featuredArticle?.slug);
const allArticles = featuredArticle ? [featuredArticle, ...remainingList] : sortedList;

console.log('Total son-tieu articles:', sectionList.length);
console.log('Featured article ID:', featuredArticle.id);
console.log('Featured article Title:', featuredArticle.title);
console.log('Featured article isPinned:', featuredArticle.isPinned);
console.log('Top 3 allArticles:');
allArticles.slice(0, 3).forEach((a, idx) => console.log(`  ${idx + 1}. [${a.isPinned ? 'PINNED' : 'NORMAL'}] (ID ${a.id}) ${a.title}`));

