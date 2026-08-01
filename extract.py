import re

with open('d:/my-project/care247/web/src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Find start and end indices using string search
start_idx = text.find('{/*  1. Hero Section  */}')
end_idx = text.find('{/*  Footer  */}')

if start_idx != -1 and end_idx != -1:
    content = text[start_idx:end_idx]
else:
    content = 'ERROR: Content not found'

out_text = f'''import React, {{ useEffect, useState }} from 'react';
import {{ useTranslation }} from 'react-i18next';
import Rellax from 'rellax';
import siteInfo from '../config/siteInfo.json';
import {{ getLandingPageData }} from '../services/apiService';

const LandingPage = () => {{
  const {{ t }} = useTranslation();
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {{
    getLandingPageData().then(data => {{
      setPageData(data);
      setIsLoading(false);
    }});
  }}, []);

  useEffect(() => {{
    if (isLoading) return;

    var rellax = new Rellax('.rellax', {{
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    }});

    const observerOptions = {{
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }};
    const observer = new IntersectionObserver((entries, observer) => {{
        entries.forEach(entry => {{
            if (entry.isIntersecting) {{
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }}
        }});
    }}, observerOptions);
    
    document.querySelectorAll('.reveal').forEach((el) => {{
        observer.observe(el);
    }});

    return () => {{
      rellax.destroy();
    }};
  }}, [isLoading]);

  if (isLoading) {{
    return <div className="min-h-screen flex items-center justify-center bg-surface-mist"><div className="w-12 h-12 border-4 border-earth-orange-bright border-t-transparent rounded-full animate-spin"></div></div>;
  }}

  return (
    <>
      {{content}}
    </>
  );
}};

export default LandingPage;
'''

with open('d:/my-project/care247/web/src/pages/LandingPage.jsx', 'w', encoding='utf-8') as f:
    f.write(out_text.replace('{content}', content))
