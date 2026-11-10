const fs = require('fs');
const path = require('path');

// 1. Update src/config/menu.json
const menuPath = path.join(__dirname, '..', 'src', 'config', 'menu.json');
const menuData = [
  {
    "id": "products",
    "path": "/#quan-lot-tham-hut",
    "i18nKey": "menu.products"
  },
  {
    "id": "about",
    "path": "/ve-chung-toi",
    "i18nKey": "menu.about"
  },
  {
    "id": "handbook",
    "path": "/kinh-nguyet",
    "i18nKey": "menu.handbook",
    "children": [
      {
        "id": "handbook_period",
        "path": "/kinh-nguyet",
        "i18nKey": "menu.handbook_period"
      },
      {
        "id": "handbook_incontinence",
        "path": "/son-tieu",
        "i18nKey": "menu.handbook_incontinence"
      }
    ]
  },
  {
    "id": "news",
    "path": "/news",
    "i18nKey": "menu.news"
  },
  {
    "id": "services",
    "path": "/dich-vu",
    "i18nKey": "menu.services",
    "children": [
      {
        "id": "service_escort",
        "path": "/dich-vu/dua-nguoi-cao-tuoi-di-kham-ha-noi",
        "i18nKey": "menu.service_escort"
      },
      {
        "id": "service_packages",
        "path": "/dich-vu#dich-vu",
        "i18nKey": "menu.service_packages"
      },
      {
        "id": "service_why_antcare",
        "path": "/dich-vu#tai-sao-la-antcare",
        "i18nKey": "menu.service_why_antcare"
      },
      {
        "id": "service_tracking",
        "path": "/dich-vu#giai-phap-cham-soc",
        "i18nKey": "menu.service_tracking"
      },
      {
        "id": "service_education",
        "path": "/dich-vu#giai-phap-cham-soc",
        "i18nKey": "menu.service_education"
      },
      {
        "id": "service_maid",
        "path": "/dich-vu#giai-phap-cham-soc",
        "i18nKey": "menu.service_maid"
      },
      {
        "id": "service_process",
        "path": "/dich-vu#quy-trinh-hoat-dong",
        "i18nKey": "menu.service_process"
      }
    ]
  }
];

fs.writeFileSync(menuPath, JSON.stringify(menuData, null, 2) + '\n', 'utf8');
console.log('Updated src/config/menu.json with 7 sub-items in services');

// 2. Update src/components/TopNavBar.jsx
const navPath = path.join(__dirname, '..', 'src', 'components', 'TopNavBar.jsx');
let navCode = fs.readFileSync(navPath, 'utf8');

const oldSamePageCheck = `      const isSamePage = (currentPath === cleanBasePath) ||
                         (currentPath === '/recruitment' && (cleanBasePath === '/hop-tac' || cleanBasePath === '/lien-he' || cleanBasePath === '/recruitment')) ||
                         ((currentPath === '/lien-he' || currentPath === '/hop-tac') && cleanBasePath === '/recruitment');`;

const newSamePageCheck = `      const isServicePage = (currentPath === '/dich-vu' || currentPath === '/cham-soc-nguoi-cao-tuoi' || currentPath === '/giai-phap-cham-soc') &&
                            (cleanBasePath === '/dich-vu' || cleanBasePath === '/cham-soc-nguoi-cao-tuoi' || cleanBasePath === '/giai-phap-cham-soc');

      const isSamePage = (currentPath === cleanBasePath) || isServicePage ||
                         (currentPath === '/recruitment' && (cleanBasePath === '/hop-tac' || cleanBasePath === '/lien-he' || cleanBasePath === '/recruitment')) ||
                         ((currentPath === '/lien-he' || currentPath === '/hop-tac') && cleanBasePath === '/recruitment');`;

if (navCode.includes(oldSamePageCheck)) {
  navCode = navCode.replace(oldSamePageCheck, newSamePageCheck);
  fs.writeFileSync(navPath, navCode, 'utf8');
  console.log('Updated isSamePage check in TopNavBar.jsx');
} else {
  console.log('oldSamePageCheck not found, check line endings or existing content');
}

// 3. Update src/pages/LandingPage.jsx to smoothly scroll to hash after loading
const landingPath = path.join(__dirname, '..', 'src', 'pages', 'LandingPage.jsx');
let landingCode = fs.readFileSync(landingPath, 'utf8');

const oldLoadingEffect = `  useEffect(() => {
    if (isLoading) return;

    var rellax = new Rellax('.rellax', {`;

const newLoadingEffect = `  useEffect(() => {
    if (isLoading) return;

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }

    var rellax = new Rellax('.rellax', {`;

if (landingCode.includes(oldLoadingEffect)) {
  landingCode = landingCode.replace(oldLoadingEffect, newLoadingEffect);
  fs.writeFileSync(landingPath, landingCode, 'utf8');
  console.log('Added hash scroll effect to LandingPage.jsx');
} else {
  console.log('oldLoadingEffect not found in LandingPage.jsx');
}

