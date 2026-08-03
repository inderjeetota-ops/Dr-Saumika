// Safe GA4 event helper. Does nothing unless the real gtag is present
// (it is only loaded on the production domain drsaumika.in), so this is
// a no-op during local dev, AI Studio preview, and the Puppeteer prerender.
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  const w = window as any;
  if (typeof w !== 'undefined' && typeof w.gtag === 'function') {
    w.gtag('event', eventName, params);
  }
}
