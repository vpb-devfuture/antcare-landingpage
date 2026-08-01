# -*- coding: utf-8 -*-
import os
import re
import urllib.request
import hashlib

pages_dir = 'd:/my-project/care247/web/src/pages'
images_dir = 'd:/my-project/care247/web/public/images'

if not os.path.exists(images_dir):
    os.makedirs(images_dir)

def download_image(url):
    if not url.startswith('http'): return url
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

for root, dirs, files in os.walk('d:/my-project/care247/web/src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.json'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find image URLs (very basic regex for googleusercontent or unsplash)
            urls = re.findall(r"https?://(?:lh3\.googleusercontent\.com|images\.unsplash\.com)[^\s\"'\)]*", content)
            if urls:
                print(f"Found URLs in {file}: {len(urls)}")
                for url in urls:
                    local_url = download_image(url)
                    content = content.replace(url, local_url)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

print("Double check done")
