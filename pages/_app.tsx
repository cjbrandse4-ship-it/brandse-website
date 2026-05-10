import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans, Inter } from 'next/font/google';
import ScrollToTop from '../components/ScrollToTop';

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
  return (
    <div className={`${dmSans.variable} ${inter.variable}`}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
  );
}
