from bs4 import BeautifulSoup
import re

with open('d:/my-project/care247/design/phase2/247care_i_u_kho_n_s_d_ng_ng_b_header_footer/code.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
main_tag = soup.find('main')
if main_tag:
    content = str(main_tag)
    content = content.replace('class=', 'className=')
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    
    out_text = f'''import React, {{ useEffect }} from 'react';

const TermsOfUse = () => {{
  useEffect(() => {{
    window.scrollTo(0, 0);
  }}, []);

  return (
    {content}
  );
}};

export default TermsOfUse;
'''
    with open('d:/my-project/care247/web/src/pages/TermsOfUse.jsx', 'w', encoding='utf-8') as f:
        f.write(out_text)
else:
    print("Main not found")
