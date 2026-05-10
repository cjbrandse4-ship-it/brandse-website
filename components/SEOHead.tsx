import Head from 'next/head';
import { siteConfig } from '../lib/seo';

interface Props {
  title: string;
  description: string;
  path?: string;
  image?: string;
  lang?: 'en' | 'fr';
}

// NOTE: public/og-image.jpg is currently 1600x2133 (portrait). Social
// platforms (Facebook, LinkedIn, Slack) expect 1.91:1 landscape (1200x630)
// and will crop awkwardly. Replace the source file with a properly sized
// version when possible — these dimensions are declared honestly so platforms
// don't reject the card, but the visual result will be cropped.
const OG_IMAGE_WIDTH = 1600;
const OG_IMAGE_HEIGHT = 2133;

export default function SEOHead({ title, description, path = '/', image, lang = 'en' }: Props) {
  const url = `${siteConfig.domain}${path}`;
  const ogImage = image || siteConfig.defaultImage;
  const isCustomImage = !!image;
  const altPath = lang === 'en'
    ? (path === '/' ? '/fr' : `/fr${path}`)
    : (path.replace(/^\/fr/, '') || '/');
  const ogLocale = lang === 'fr' ? 'fr_CA' : 'en_CA';
  const ogLocaleAlt = lang === 'fr' ? 'en_CA' : 'fr_CA';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={`${siteConfig.domain}${lang === 'en' ? path : altPath}`} />
      <link rel="alternate" hrefLang="fr" href={`${siteConfig.domain}${lang === 'fr' ? path : altPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteConfig.domain}${lang === 'en' ? path : altPath}`} />
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Montreal, West Island" />
      <meta name="geo.position" content="45.4715;-73.8103" />
      <meta name="ICBM" content="45.4715, -73.8103" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      {!isCustomImage && (
        <>
          <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
          <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
          <meta property="og:image:type" content="image/jpeg" />
        </>
      )}
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
    </Head>
  );
}
