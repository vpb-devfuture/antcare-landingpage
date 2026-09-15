const { spawn } = require('child_process');
const http = require('http');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    'http://localhost:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('CHROME TARGETS:', data);
      chrome.kill();
    });
  }).on('error', (err) => {
    console.error('CDP error:', err.message);
    chrome.kill();
  });
}

test();
