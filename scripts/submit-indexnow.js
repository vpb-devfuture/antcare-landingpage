import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = 'https://antcare.vn';
const HOST = 'antcare.vn';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const MANIFEST_PATH = path.join(__dirname, '.indexnow-manifest.json');

/**
 * Lấy IndexNow API key từ file text trong thư mục public/
 */
function getIndexNowKey() {
  if (process.env.INDEXNOW_KEY) {
    return { key: process.env.INDEXNOW_KEY.trim(), keyFileName: `${process.env.INDEXNOW_KEY.trim()}.txt` };
  }
  const publicDir = path.join(rootDir, 'public');
  const files = fs.readdirSync(publicDir);
  const keyFile = files.find(f => f.endsWith('.txt') && /^[a-f0-9]{32}$/i.test(f.replace('.txt', '')));

  if (!keyFile) {
    throw new Error('Không tìm thấy file text IndexNow key trong thư mục public/!');
  }

  const keyPath = path.join(publicDir, keyFile);
  const key = fs.readFileSync(keyPath, 'utf8').trim();
  return { key, keyFileName: keyFile };
}

/**
 * Thu thập danh sách URL và hash nội dung của trang web
 */
function getCurrentSiteData() {
  const urlsWithHashes = {};

  // Các trang cố định
  const staticPages = [
    '/',
    '/news',
    '/activities',
    '/recruitment',
    '/privacy-policy',
    '/terms-of-use',
    '/ve-antcare'
  ];

  for (const page of staticPages) {
    const fullUrl = `${DOMAIN}${page === '/' ? '' : page}`;
    urlsWithHashes[fullUrl] = crypto.createHash('md5').update(`static:${page}`).digest('hex');
  }

  // Bài viết tin tức từ src/data/news.json
  const newsPath = path.join(rootDir, 'src', 'data', 'news.json');
  if (fs.existsSync(newsPath)) {
    const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
    const articles = [];
    if (newsData.featured) articles.push(newsData.featured);
    if (Array.isArray(newsData.list)) articles.push(...newsData.list);

    for (const article of articles) {
      if (article.slug) {
        const fullUrl = `${DOMAIN}/news/${article.slug}`;
        const contentStr = JSON.stringify({
          title: article.title,
          description: article.description,
          content: article.content,
          date: article.date
        });
        urlsWithHashes[fullUrl] = crypto.createHash('md5').update(contentStr).digest('hex');
      }
    }
  }

  // Bài viết hoạt động từ src/data/activities.json
  const activitiesPath = path.join(rootDir, 'src', 'data', 'activities.json');
  if (fs.existsSync(activitiesPath)) {
    const activitiesData = JSON.parse(fs.readFileSync(activitiesPath, 'utf8'));
    if (Array.isArray(activitiesData)) {
      for (const item of activitiesData) {
        if (item.slug) {
          const fullUrl = `${DOMAIN}/activities/${item.slug}`;
          const contentStr = JSON.stringify({
            title: item.title,
            description: item.description,
            content: item.content,
            date: item.date
          });
          urlsWithHashes[fullUrl] = crypto.createHash('md5').update(contentStr).digest('hex');
        }
      }
    }
  }

  return urlsWithHashes;
}

async function main() {
  const args = process.argv.slice(2);
  const forceAll = args.includes('--all') || args.includes('-a');
  const customUrlArg = args.find(a => a.startsWith('--url='));

  const { key, keyFileName } = getIndexNowKey();
  const keyLocation = `${DOMAIN}/${keyFileName}`;

  console.log(`[IndexNow] Key: ${key}`);
  console.log(`[IndexNow] Key Location: ${keyLocation}`);

  const currentData = getCurrentSiteData();
  const currentUrls = Object.keys(currentData);

  let urlsToSubmit = [];
  let manifest = { urls: {}, lastSubmitted: null };

  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    } catch (e) {
      console.warn('[IndexNow] Không thể đọc manifest cũ, tạo mới manifest state.');
    }
  }

  if (customUrlArg) {
    const customUrl = customUrlArg.split('=')[1];
    urlsToSubmit = [customUrl.startsWith('http') ? customUrl : `${DOMAIN}${customUrl}`];
    console.log(`[IndexNow] Gửi URL chỉ định: ${urlsToSubmit[0]}`);
  } else if (forceAll || !manifest.lastSubmitted) {
    urlsToSubmit = [...currentUrls];
    console.log(`[IndexNow] Chế độ: Submit toàn bộ (${urlsToSubmit.length} URLs)`);
  } else {
    const previousUrls = Object.keys(manifest.urls || {});

    // URLs mới xuất bản
    const newUrls = currentUrls.filter(url => !previousUrls.includes(url));

    // URLs được cập nhật nội dung
    const updatedUrls = currentUrls.filter(url =>
      previousUrls.includes(url) && manifest.urls[url] !== currentData[url]
    );

    // URLs đã bị xóa
    const deletedUrls = previousUrls.filter(url => !currentUrls.includes(url));

    urlsToSubmit = Array.from(new Set([...newUrls, ...updatedUrls, ...deletedUrls]));

    console.log(`[IndexNow] Tóm tắt thay đổi:`);
    console.log(`  - Mới xuất bản (Published): ${newUrls.length}`);
    console.log(`  - Đã cập nhật (Updated): ${updatedUrls.length}`);
    console.log(`  - Đã xóa (Deleted): ${deletedUrls.length}`);
    console.log(`  - Tổng số URL cần submit: ${urlsToSubmit.length}`);
  }

  if (urlsToSubmit.length === 0) {
    console.log('[IndexNow] Không có thay đổi nào. Bỏ qua submit.');
    return;
  }

  const payload = {
    host: HOST,
    key: key,
    keyLocation: keyLocation,
    urlList: urlsToSubmit
  };

  console.log(`[IndexNow] Đang gửi ${urlsToSubmit.length} URL tới ${INDEXNOW_ENDPOINT}...`);

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`[IndexNow] Thành công! Status Code: ${res.status}`);
      manifest.urls = currentData;
      manifest.lastSubmitted = new Date().toISOString();
      fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
      console.log('[IndexNow] Đã cập nhật manifest.');
    } else {
      const text = await res.text();
      console.error(`[IndexNow] Thất bại với HTTP ${res.status}: ${text}`);
      process.exitCode = 1;
    }
  } catch (err) {
    console.error(`[IndexNow] Lỗi kết nối:`, err.message);
    process.exitCode = 1;
  }
}

main();
