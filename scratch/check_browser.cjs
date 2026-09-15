const { spawn } = require('child_process');
const http = require('http');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    'http://localhost:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      console.log('CHROME TARGETS:', data);
      const targets = JSON.parse(data);
      const target = targets.find(t => t.url.includes('localhost:3000'));
      if (target && target.webSocketDebuggerUrl) {
        console.log('WebSocket Debugger URL:', target.webSocketDebuggerUrl);
        const ws = new WebSocket(target.webSocketDebuggerUrl);
        ws.onopen = () => {
          console.log('WS connected to Chrome!');
          ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
          ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
          ws.send(JSON.stringify({ id: 3, method: 'Page.enable' }));
        };
        ws.onmessage = (event) => {
          const parsed = JSON.parse(event.data);
          if (parsed.method === 'Console.messageAdded' || parsed.method === 'Runtime.consoleAPICalled' || parsed.method === 'Runtime.exceptionThrown') {
            console.log('CHROME LOG/EXCEPTION:', JSON.stringify(parsed, null, 2));
          } else {
            console.log('CHROME EVENT:', parsed.method || parsed);
          }
        };
        await new Promise(r => setTimeout(r, 4000));
      }
      chrome.kill();
    });
  }).on('error', (err) => {
    console.error('CDP error:', err.message);
    chrome.kill();
  });
}

test();
