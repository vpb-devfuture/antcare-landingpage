const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/HP/.gemini/antigravity/brain/94a319eb-9147-4a45-821b-24d735dfe143/.system_generated/logs/transcript.jsonl'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.step_index >= 2920 && obj.step_index <= 2950 && obj.type === 'PLANNER_RESPONSE' && obj.content) {
      console.log(`[${obj.step_index}] ${(obj.content || '').slice(0, 200)}`);
    }
  } catch(e) {}
});

