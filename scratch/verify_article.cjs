const { spawn } = require('child_process');
const http = require('http');

async function checkArticleRoute() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const url = 'http://localhost:3000/news/bim-nguoi-lon-chon-loai-nao-theo-tinh-trang-bo-me';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    url
  ]);

  await new Promise(r => setTimeout(r, 2500));

  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const target = targets.find(t => t.url.includes('bim-nguoi-lon'));
      console.log('Target title:', target ? target.title : 'NOT FOUND');
      chrome.kill();
    });
  }).on('error', err => {
    console.error(err);
    chrome.kill();
  });
}

checkArticleRoute();
