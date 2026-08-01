# -*- coding: utf-8 -*-
import os

files = [
    'd:/my-project/care247/web/src/pages/TermsOfUse.jsx',
    'd:/my-project/care247/web/src/pages/PrivacyPolicy.jsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('style="color: rgb(255, 140, 0);"', "style={{color: 'rgb(255, 140, 0)'}}")
    content = content.replace('style="font-variation-settings: \'FILL\' 0;"', "style={{fontVariationSettings: \"'FILL' 0\"}}")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done replacing styles")
