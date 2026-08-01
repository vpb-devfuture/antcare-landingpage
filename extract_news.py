# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import json

with open('d:/my-project/care247/design/phase2/247care_tin_t_c_giao_di_n_tinh_g_n_tin_n_i_b_t/code.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
data = {'featured': None, 'list': []}

# Featured
featured_section = soup.find('section', class_='pt-8 pb-16 px-margin-mobile md:px-margin-desktop bg-surface-mist')
if featured_section:
    img_tag = featured_section.find('img')
    cat_tag = featured_section.find('div', class_='inline-flex')
    title_tag = featured_section.find('h1')
    desc_tag = featured_section.find('p', class_='text-on-surface-variant font-body-md mb-8 line-clamp-3')
    author_img = featured_section.find('img', class_='w-full h-full object-cover') # The 2nd img
    imgs = featured_section.find_all('img')
    author_img = imgs[1]['src'] if len(imgs) > 1 else ''
    author_name = featured_section.find('p', class_='font-label-lg').get_text(strip=True) if featured_section.find('p', class_='font-label-lg') else ''
    author_desc = featured_section.find('p', class_='font-label-md').get_text(strip=True) if featured_section.find('p', class_='font-label-md') else ''
    
    data['featured'] = {
        'image': img_tag['src'] if img_tag else '',
        'category': cat_tag.get_text(strip=True) if cat_tag else '',
        'title': title_tag.get_text(strip=True) if title_tag else '',
        'description': desc_tag.get_text(strip=True) if desc_tag else '',
        'author': {
            'image': author_img,
            'name': author_name,
            'description': author_desc
        }
    }

# List
grid = soup.find('div', class_='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8')
if grid:
    articles = grid.find_all('article')
    for idx, article in enumerate(articles):
        img = article.find('img')
        cat = article.find('span', class_='text-xs font-bold')
        date = article.find('span', class_='text-xs text-on-surface-variant')
        title = article.find('h3')
        desc = article.find('p')
        data['list'].append({
            'id': idx + 1,
            'image': img['src'] if img else '',
            'category': cat.get_text(strip=True) if cat else '',
            'date': date.get_text(strip=True) if date else '',
            'title': title.get_text(strip=True) if title else '',
            'description': desc.get_text(strip=True) if desc else ''
        })

with open('d:/my-project/care247/web/src/data/news.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
