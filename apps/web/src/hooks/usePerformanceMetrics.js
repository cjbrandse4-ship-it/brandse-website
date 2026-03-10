
import { useEffect } from 'react';

/**
 * Hook to monitor Core Web Vitals (LCP, FID, CLS)
 * Uses native PerformanceObserver API
 */
const usePerformanceMetrics = () => {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.debug('[Performance] LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const delay = entry.processingStart - entry.startTime;
          console.debug('[Performance] FID:', delay);
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.debug('[Performance] CLS:', clsValue);
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (e) {
      console.warn('PerformanceObserver not fully supported in this browser', e);
    }
  }, []);
};

export const markStart = (markName) => {
  if (performance && performance.mark) {
    performance.mark(`${markName}-start`);
  }
};

export const markEnd = (markName) => {
  if (performance && performance.mark && performance.measure) {
    performance.mark(`${markName}-end`);
    try {
      performance.measure(markName, `${markName}-start`, `${markName}-end`);
      const measure = performance.getEntriesByName(markName)[0];
      console.debug(`[Performance] ${markName}:`, measure.duration, 'ms');
    } catch (e) {
      // Ignore if start mark is missing
    }
  }
};

export default usePerformanceMetrics;
