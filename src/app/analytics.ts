// Analytics hook for tracking page views and events
export const useAnalytics = () => {
  const trackPageView = (path: string) => {
    if (typeof window !== 'undefined' && import.meta.env.VITE_ANALYTICS_ID) {
      // Plausible Analytics
      if (window.plausible) {
        window.plausible('pageview', { u: path });
      }
      
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('config', import.meta.env.VITE_ANALYTICS_ID, {
          page_path: path,
        });
      }
    }
  };

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && import.meta.env.VITE_ANALYTICS_ID) {
      // Plausible Analytics
      if (window.plausible) {
        window.plausible(eventName, parameters);
      }
      
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', eventName, parameters);
      }
    }
  };

  return { trackPageView, trackEvent };
};

// Declare global types for analytics
declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, any>) => void;
    gtag?: (...args: any[]) => void;
  }
}
