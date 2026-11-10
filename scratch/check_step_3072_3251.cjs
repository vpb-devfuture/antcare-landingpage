const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('"step_index":3072') || line.includes('"step_index": 3072')) {
    const obj = JSON.parse(line);
    console.log('Step 3072 content length:', obj.content ? obj.content.length : 0);
    fs.writeFileSync('scratch/request_7.html', obj.content, 'utf8');
  }
  if (line.includes('"step_index":3251') || line.includes('"step_index": 3251')) {
    const obj = JSON.parse(line);
    console.log('Step 3251 content length:', obj.content ? obj.content.length : 0);
    fs.writeFileSync('scratch/request_9.html', obj.content, 'utf8');
  }
});

