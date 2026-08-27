import http from 'http';
import fs from 'fs';
import { PNG } from 'pngjs';

const f96Path = 'c:\\my-projects\\antcare\\sourcecode\\antcare-landingpage\\public\\favicon-96.png';
const buffer = fs.readFileSync(f96Path);
const png = PNG.sync.read(buffer);

console.log('--- FILE INSPECTION ---');
console.log('favicon-96.png Dimensions:', png.width, 'x', png.height, 'Aspect Ratio 1:1:', png.width === png.height);

let transparentCount = 0;
for (let i = 3; i < png.data.length; i += 4) {
  if (png.data[i] < 255) transparentCount++;
}
console.log('Transparent alpha pixels count:', transparentCount, 'out of', png.width * png.height);

console.log('--- HTTP STATUS CHECK ---');
http.get('http://localhost:3000/favicon-96.png', (res) => {
  console.log('http://localhost:3000/favicon-96.png -> Status:', res.statusCode);
});

http.get('http://localhost:3000/', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const hasFaviconTag = body.includes('href="/favicon-96.png"');
    console.log('Homepage contains href="/favicon-96.png":', hasFaviconTag);
  });
});
