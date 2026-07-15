import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { DM_Sans, Inter } from 'next/font/google';
import ScrollToTop from '../components/ScrollToTop';
import { trackLead } from '../lib/analytics';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  // Site-wide phone-tap tracking: one delegated listener catches every tel:
  // link (header, footer, service pages, landing pages) so phone leads land
  // in GA4 as generate_lead. GA4 only — no Ads conversion (see lib/analytics).
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (link) trackLead({ source: 'phone', method: 'phone' });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={`${dmSans.variable} ${inter.variable}`}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
  );
}
