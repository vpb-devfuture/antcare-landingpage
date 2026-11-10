const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.system_generated/logs/transcript.jsonl'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.media && obj.media.length > 0) {
      console.log(`Step ${obj.step_index} (${obj.type}): ${obj.media.length} media items:`, obj.media.map(m => m.uri));
    }
  } catch(e) {}
});

