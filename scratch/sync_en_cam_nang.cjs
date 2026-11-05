const fs = require('fs');
const path = require('path');

const viNews = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'news.json'), 'utf8'));

const enTranslations = {
  "cach-dung-coc-nguyet-san": {
    title: "How to Use a Menstrual Cup for Beginners: Folding, Inserting, and Removing",
    metaTitle: "How to Use a Menstrual Cup: Step-by-Step Guide for Beginners | ANTCARE",
    description: "Beginner's guide on using a menstrual cup: 4 folding styles, insertion angles, pain-free removal, cleaning routine, and pairing with period underwear.",
    excerpt: "Learn how to use a menstrual cup: (1) fold into C-fold or punch-down; (2) insert angled towards tailbone; (3) ensure seal; (4) empty every 8-12 hours; (5) pinch base to release suction before removing.",
    category: "Care Guide"
  },
  "cach-chon-size-va-ve-sinh-coc-nguyet-san": {
    title: "How to Choose Menstrual Cup Size & Clean, Sterilise, and Store Properly",
    metaTitle: "Menstrual Cup Sizing Guide & Care, Cleaning and Storage | ANTCARE",
    description: "How to choose menstrual cup size based on cervix height, childbirth history, and flow; proper cleaning and sterilization guidelines.",
    excerpt: "Choose your cup size by measuring cervix height, child delivery history, and flow. Learn why washing with cold water first prevents stains and how to boil sterilise safely.",
    category: "Care Guide"
  },
  "cach-dung-dia-nguyet-san": {
    title: "How to Use a Menstrual Disc: Insertion, Tucking, and Mess-Free Removal",
    metaTitle: "How to Use a Menstrual Disc for Beginners | ANTCARE",
    description: "Step-by-step menstrual disc guide: squeeze figure-8, insert into vaginal fornix, tuck behind pubic bone, and remove without spilling.",
    excerpt: "Master the menstrual disc: squeeze figure-8, slide back towards tailbone, tuck behind pubic bone, and keep horizontal when removing. Learn about auto-dumping and period underwear backup.",
    category: "Care Guide"
  },
  "coc-nguyet-san-hay-dia-nguyet-san": {
    title: "Menstrual Cup vs Menstrual Disc: Which One Should You Choose?",
    metaTitle: "Menstrual Cup vs Menstrual Disc: Detailed Comparison & Guide | ANTCARE",
    description: "Comparing menstrual cup and menstrual disc: capacity, insertion ease, removal, IUD compatibility, intimacy, and period underwear pairing.",
    excerpt: "Choose cups for secure suction and active workouts. Choose discs for maximum capacity, low cervix, or mess-free period intimacy. Pair with period panties for 100% leak protection.",
    category: "Care Guide"
  },
  "coc-dia-nguyet-san-bi-ro-ri": {
    title: "Menstrual Cup & Disc Leaking: 10 Common Causes and How to Fix Them",
    metaTitle: "Menstrual Cup & Disc Leaking: 10 Causes & Solutions | ANTCARE",
    description: "Why is your menstrual cup or disc leaking? 10 common causes and how to fix each; warning signs to consult a doctor, and why period underwear is essential.",
    excerpt: "Fixing menstrual cup and disc leaks: unpopped rim, wrong size, misplaced cervix, clogged air holes, or dislodged rim. Discover troubleshooting steps and backup underwear solutions.",
    category: "Care Guide"
  }
};

const enList = viNews.list.map(article => {
  const trans = enTranslations[article.slug];
  if (!trans) return article;
  return {
    ...article,
    title: trans.title,
    metaTitle: trans.metaTitle,
    description: trans.description,
    excerpt: trans.excerpt,
    category: trans.category
  };
});

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'news.en.json'),
  JSON.stringify({ featured: enList[0], list: enList }, null, 2),
  'utf8'
);

console.log('Successfully updated news.en.json with 6 articles!');

