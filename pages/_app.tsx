import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DM_Sans, Inter } from 'next/font/google';

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
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = router.asPath.startsWith('/fr') ? 'fr' : 'en';
  }, [router.asPath]);

  return (
    <div className={`${dmSans.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
