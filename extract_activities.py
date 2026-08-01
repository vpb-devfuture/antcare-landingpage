# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import json

with open('d:/my-project/care247/design/phase2/247care_ho_t_ng_c_ng_ng_ng_b_b_n_chu_n/code.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
grid = soup.find('div', class_='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8')
activities = []

if grid:
    items = grid.find_all('article')
    for item in items:
        img_tag = item.find('img')
        img_src = img_tag['src'] if img_tag else ''
        title_tag = item.find('h3')
        title = title_tag.get_text(strip=True) if title_tag else ''
        desc_tag = item.find('p', class_='text-body-md opacity-80 mb-6 line-clamp-3')
        desc = desc_tag.get_text(strip=True) if desc_tag else ''
        date_tag = item.find('div', class_='flex items-center gap-2')
        date = date_tag.get_text(strip=True) if date_tag else ''
        
        # Remove 'event' if it exists at the start
        if date.startswith('event'):
            date = date[5:]
            
        activities.append({
            'id': len(activities) + 1,
            'title': title,
            'image': img_src,
            'description': desc,
            'date': date
        })

print(json.dumps(activities, indent=2, ensure_ascii=False))

with open('d:/my-project/care247/web/src/data/activities.json', 'w', encoding='utf-8') as f:
    json.dump(activities, f, indent=2, ensure_ascii=False)
