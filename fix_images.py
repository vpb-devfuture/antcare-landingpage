# -*- coding: utf-8 -*-
import json

# Fix activities.json
with open('d:/my-project/care247/web/src/data/activities.json', 'r', encoding='utf-8') as f:
    activities = json.load(f)

for item in activities:
    if "Hợp tác chiến lược với Bệnh viện Bạch Mai" in item.get('title', ''):
        item['image'] = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop'

with open('d:/my-project/care247/web/src/data/activities.json', 'w', encoding='utf-8') as f:
    json.dump(activities, f, ensure_ascii=False, indent=2)

# Fix news.json
with open('d:/my-project/care247/web/src/data/news.json', 'r', encoding='utf-8') as f:
    news = json.load(f)

if news.get('featured') and "Giải pháp chăm sóc toàn diện cho người cao tuổi" in news['featured'].get('title', ''):
    news['featured']['image'] = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop'

for item in news.get('list', []):
    if "Giải pháp chăm sóc toàn diện cho người cao tuổi" in item.get('title', ''):
        item['image'] = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop'

with open('d:/my-project/care247/web/src/data/news.json', 'w', encoding='utf-8') as f:
    json.dump(news, f, ensure_ascii=False, indent=2)

print("Done fixing images")
