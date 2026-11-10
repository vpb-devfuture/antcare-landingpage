const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('"step_index":3285') || line.includes('"step_index": 3285')) {
    const obj = JSON.parse(line);
    console.log('Step 3285 keys:', Object.keys(obj));
    console.log('Type:', obj.type);
    console.log('Source:', obj.source);
    console.log('Content length:', obj.content ? obj.content.length : 0);
    console.log('Has truncated_fields?', obj.truncated_fields);
    console.log('Ends with:', JSON.stringify(obj.content.slice(-200)));
  }
});

