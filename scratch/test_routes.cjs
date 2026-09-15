const { spawn } = require('child_process');
const http = require('http');

const routes = [
  '/',
  '/news',
  '/activities',
  '/giai-phap-cham-soc',
  '/ve-antcare',
  '/privacy-policy',
  '/terms-of-use'
];

async function testRoute(url) {
  return new Promise((resolve) => {
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    const chrome = spawn(chromePath, [
      '--headless=new',
      '--remote-debugging-port=9222',
      `http://localhost:3000${url}`
    ]);

    setTimeout(() => {
      http.get('http://127.0.0.1:9222/json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', async () => {
          const targets = JSON.parse(data);
          const target = targets.find(t => t.url.includes('localhost:3000'));
          if (target && target.webSocketDebuggerUrl) {
            const ws = new WebSocket(target.webSocketDebuggerUrl);
            const logs = [];
            ws.onopen = () => {
              ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
              ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
            };
            ws.onmessage = (event) => {
              const parsed = JSON.parse(event.data);
              if (parsed.method === 'Runtime.exceptionThrown') {
                logs.push(`[EXCEPTION] ${JSON.stringify(parsed.params.exceptionDetails)}`);
              } else if (parsed.method === 'Console.messageAdded' && parsed.params.message.level === 'error') {
                logs.push(`[ERROR] ${parsed.params.message.text}`);
              }
            };
            setTimeout(() => {
              chrome.kill();
              resolve({ url, logs });
            }, 1500);
          } else {
            chrome.kill();
            resolve({ url, logs: ['Target not found'] });
          }
        });
      }).on('error', (err) => {
        chrome.kill();
        resolve({ url, logs: [`HTTP Error: ${err.message}`] });
      });
    }, 1500);
  });
}

async function main() {
  for (const r of routes) {
    const res = await testRoute(r);
    console.log(`Route ${res.url}:`, res.logs.length ? res.logs : 'OK (No errors)');
  }
}

main();
