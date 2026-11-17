const fs = require('fs');
const news = JSON.parse(fs.readFileSync('src/data/news.json', 'utf8'));

const withYoutube = news.list.filter(n => (n.content && n.content.includes('youtube')) || (n.summary && n.summary.includes('youtube')));
console.log('Articles with youtube:', withYoutube.length);
if (withYoutube.length > 0) {
  const item = withYoutube[0];
  console.log('ID:', item.id, 'title:', item.title);
  const match = item.content.match(/<iframe[\s\S]*?<\/iframe>|<div[^>]*video[^>]*>[\s\S]*?<\/div>/i);
  if (match) console.log(match[0]);
} else {
  console.log('No youtube embeds found in news.json');
}

