/**
 * Utility tracker for Google Analytics 4, GTM dataLayer, and Meta Pixel
 */

export const trackPageView = (path) => {
  if (typeof window === 'undefined') return;

  // 1. Google Tag Manager / GA4 dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    page_location: window.location.href,
    page_title: document.title
  });

  // 2. Google Analytics 4 (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title
    });
  }

  // 3. Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;

  // 1. GTM / GA4 dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams
  });

  // 2. Google Analytics 4 (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 3. Meta Pixel mapping (Dataset ID: 1692777472851360)
  if (window.fbq) {
    if (eventName === 'generate_lead') {
      // Form Khách hàng -> Meta Standard Event Lead
      window.fbq('track', 'Lead', { form_name: 'consultation' });
    } else if (eventName === 'recruitment_lead') {
      // Form Tuyển dụng / Hợp tác -> Custom Event RecruitmentLead (Không bắn Lead)
      window.fbq('trackCustom', 'RecruitmentLead', { form_name: 'recruitment_partner' });
    } else if (eventName === 'click_hotline') {
      // Nút gọi Hotline -> Meta Standard Event Contact (Ngừng bắn ClickHotline)
      window.fbq('track', 'Contact', { channel: 'hotline' });
    } else if (eventName === 'click_zalo') {
      // Nút Chat Zalo -> Meta Standard Event Contact (Ngừng bắn ClickZalo)
      window.fbq('track', 'Contact', { channel: 'zalo' });
    } else if (eventName === 'click_messenger') {
      // Nút Chat Facebook Messenger -> Meta Standard Event Contact (Ngừng bắn ClickMessenger)
      window.fbq('track', 'Contact', { channel: 'messenger' });
    } else {
      window.fbq('trackCustom', eventName, eventParams);
    }
  }
};
