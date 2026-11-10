const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('"step_index":2986') || line.includes('"step_index": 2986')) {
    const obj = JSON.parse(line);
    console.log('Step 2986 keys:', Object.keys(obj));
    console.log('Content length:', obj.content ? obj.content.length : 0);
    console.log('Preview:', obj.content.slice(0, 300));
    fs.writeFileSync('scratch/request_6.html', obj.content, 'utf8');
  }
});

