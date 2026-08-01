# -*- coding: utf-8 -*-
import os

# Fix TermsOfUse.jsx
with open('d:/my-project/care247/web/src/pages/TermsOfUse.jsx', 'r', encoding='utf-8') as f:
    tou = f.read()

# Fix spacing
tou = tou.replace('pt-32', 'pt-12')
tou = tou.replace('p-12 md:p-16', 'p-8 md:p-12')
tou = tou.replace('mb-16', 'mb-8')

# Fix font size (md -> sm first, then lg -> md)
tou = tou.replace('font-body-md text-body-md', 'font-body-sm text-body-sm text-justify')
tou = tou.replace('font-body-lg text-body-lg', 'font-body-md text-body-md')
tou = tou.replace('text-headline-lg', 'text-2xl md:text-3xl') # reduce heading size
tou = tou.replace('text-headline-md', 'text-xl md:text-2xl')

with open('d:/my-project/care247/web/src/pages/TermsOfUse.jsx', 'w', encoding='utf-8') as f:
    f.write(tou)

# Fix PrivacyPolicy.jsx
with open('d:/my-project/care247/web/src/pages/PrivacyPolicy.jsx', 'r', encoding='utf-8') as f:
    pp = f.read()

pp = pp.replace('py-section-padding', 'pt-12 pb-section-padding')
pp = pp.replace('text-headline-lg', 'text-2xl md:text-3xl')
pp = pp.replace('text-on-surface-variant', 'text-on-surface-variant text-[15px] text-justify')

with open('d:/my-project/care247/web/src/pages/PrivacyPolicy.jsx', 'w', encoding='utf-8') as f:
    f.write(pp)

print("Done adjusting styles")
