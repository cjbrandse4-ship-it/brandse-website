import Head from 'next/head';
import { siteConfig } from '../lib/seo';

interface Props {
  title: string;
  description: string;
  path?: string;
  image?: string;
  lang?: 'en' | 'fr';
}

export default function SEOHead({ title, description, path = '/', image, lang = 'en' }: Props) {
  const url = `${siteConfig.domain}${path}`;
  const ogImage = image || siteConfig.defaultImage;
  const altPath = lang === 'en'
    ? (path === '/' ? '/fr' : `/fr${path}`)
    : (path.replace(/^\/fr/, '') || '/');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={`${siteConfig.domain}${lang === 'en' ? path : altPath}`} />
      <link rel="alternate" hrefLang="fr" href={`${siteConfig.domain}${lang === 'fr' ? path : altPath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
