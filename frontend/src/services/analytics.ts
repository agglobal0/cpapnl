// Analytics & DataLayer Event Tracking Engine
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Extract and persist UTM parameters
export const getStoredUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem('cpapnl_utm_params');
    if (raw) return JSON.parse(raw);

    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const utms: Record<string, string> = {};
    let found = false;

    utmKeys.forEach(k => {
      const val = params.get(k);
      if (val) {
        utms[k] = val;
        found = true;
      }
    });

    if (found) {
      sessionStorage.setItem('cpapnl_utm_params', JSON.stringify(utms));
    }
    return utms;
  } catch {
    return {};
  }
};

const dispatchedEvents = new Set<string>();

export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {},
  deduplicateKey?: string
) => {
  if (deduplicateKey) {
    if (dispatchedEvents.has(deduplicateKey)) {
      return; // Prevent duplicate event tracking
    }
    dispatchedEvents.add(deduplicateKey);
  }

  const utm = getStoredUtmParams();
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    ...utm,
    ...parameters
  };

  // Push to GTM / GA4 dataLayer
  if (window.dataLayer) {
    window.dataLayer.push(payload);
  }

  // Also call gtag if present
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}:`, payload);
  }
};

export const trackPageView = (path: string) => {
  trackEvent('page_view', { page_path: path });
};
