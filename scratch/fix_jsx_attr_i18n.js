import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix LandingPage.jsx
const landingPath = path.join(__dirname, '../src/pages/LandingPage.jsx');
let landingContent = fs.readFileSync(landingPath, 'utf8');

landingContent = landingContent.replaceAll('"{tr(', '{tr(');
landingContent = landingContent.replaceAll(')}"', ')}');

fs.writeFileSync(landingPath, landingContent, 'utf8');

// Fix News.jsx
const newsPath = path.join(__dirname, '../src/pages/News.jsx');
let newsContent = fs.readFileSync(newsPath, 'utf8');

newsContent = newsContent.replaceAll('"{tr(', '{tr(');
newsContent = newsContent.replaceAll(')}"', ')}');
newsContent = newsContent.replaceAll('aria-label={tr("Trang", "Page")} trước', 'aria-label={`${tr("Trang", "Page")} trước`}');
newsContent = newsContent.replaceAll('aria-label={tr("Trang", "Page")} sau', 'aria-label={`${tr("Trang", "Page")} sau`}');

fs.writeFileSync(newsPath, newsContent, 'utf8');

console.log('Successfully fixed JSX attribute quotes for LandingPage.jsx and News.jsx!');
