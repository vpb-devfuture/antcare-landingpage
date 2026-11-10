const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let found = null;
rl.on('line', (line) => {
  if (line.includes('"step_index":3285') || line.includes('"step_index": 3285')) {
    found = line;
  }
});

rl.on('close', () => {
  if (found) {
    const obj = JSON.parse(found);
    let html = obj.content;
    if (html.startsWith('<USER_REQUEST>')) {
      html = html.replace(/^<USER_REQUEST>\s*/, '').replace(/\s*<\/USER_REQUEST>$/, '');
    }
    console.log('Found step 3285, content length:', html.length);
    fs.writeFileSync('scratch/user_cam_nang_30.html', html, 'utf8');
    console.log('Saved to scratch/user_cam_nang_30.html');
  } else {
    console.log('Step 3285 not found');
  }
});

