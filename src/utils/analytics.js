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

  // 2. Meta Pixel
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

  // 2. Meta Pixel custom mapping
  if (window.fbq) {
    if (eventName === 'generate_lead') {
      window.fbq('track', 'Lead', eventParams);
    } else if (eventName === 'recruitment_lead') {
      window.fbq('trackCustom', 'RecruitmentLead', eventParams);
    } else if (eventName === 'click_hotline') {
      window.fbq('trackCustom', 'ClickHotline', eventParams);
    } else if (eventName === 'click_zalo') {
      window.fbq('trackCustom', 'ClickZalo', eventParams);
    } else if (eventName === 'click_messenger') {
      window.fbq('trackCustom', 'ClickMessenger', eventParams);
    } else {
      window.fbq('trackCustom', eventName, eventParams);
    }
  }
};
