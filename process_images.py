# -*- coding: utf-8 -*-
import json
import urllib.request
import os
import hashlib

data_dir = 'd:/my-project/care247/web/src/data'
pages_dir = 'd:/my-project/care247/web/src/pages'
images_dir = 'd:/my-project/care247/web/public/images'

if not os.path.exists(images_dir):
    os.makedirs(images_dir)

def download_image(url):
    if not url.startswith('http'): return url
    # generate a filename based on hash
    hash_str = hashlib.md5(url.encode('utf-8')).hexdigest()[:8]
    filename = f"img_{hash_str}.jpg"
    filepath = os.path.join(images_dir, filename)
    if not os.path.exists(filepath):
        try:
            urllib.request.urlretrieve(url, filepath)
        except Exception as e:
            print(f"Failed to download {url}: {e}")
            return url
    return f"/images/{filename}"

# Process activities.json
with open(os.path.join(data_dir, 'activities.json'), 'r', encoding='utf-8') as f:
    activities = json.load(f)

for item in activities:
    if 'image' in item:
        item['image'] = download_image(item['image'])

with open(os.path.join(data_dir, 'activities.json'), 'w', encoding='utf-8') as f:
    json.dump(activities, f, ensure_ascii=False, indent=2)

# Process news.json
with open(os.path.join(data_dir, 'news.json'), 'r', encoding='utf-8') as f:
    news = json.load(f)

if news.get('featured') and 'image' in news['featured']:
    news['featured']['image'] = download_image(news['featured']['image'])
if news.get('featured') and 'author' in news['featured'] and 'image' in news['featured']['author']:
    news['featured']['author']['image'] = download_image(news['featured']['author']['image'])

for item in news.get('list', []):
    if 'image' in item:
        item['image'] = download_image(item['image'])

with open(os.path.join(data_dir, 'news.json'), 'w', encoding='utf-8') as f:
    json.dump(news, f, ensure_ascii=False, indent=2)

# Check Activities.jsx for background image URL
act_path = os.path.join(pages_dir, 'Activities.jsx')
with open(act_path, 'r', encoding='utf-8') as f:
    act_content = f.read()

import re
urls = re.findall(r"url\('([^']+)'\)", act_content)
for url in urls:
    if url.startswith('http'):
        local_url = download_image(url)
        act_content = act_content.replace(url, local_url)

with open(act_path, 'w', encoding='utf-8') as f:
    f.write(act_content)

print("Images downloaded and replaced")
