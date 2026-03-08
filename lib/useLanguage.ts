import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export type Lang = 'en' | 'fr';

export function useLanguage() {
  const router = useRouter();
  const lang: Lang = router.asPath.startsWith('/fr') ? 'fr' : 'en';
  const t = translations[lang];

  function getLocalizedPath(path: string) {
    if (lang === 'fr') return path === '/' ? '/fr' : `/fr${path}`;
    return path;
  }

  function toggleLangPath() {
    const p = router.asPath;
    if (lang === 'fr') return p === '/fr' ? '/' : p.replace(/^\/fr/, '');
    return p === '/' ? '/fr' : `/fr${p}`;
  }

  return { lang, t, getLocalizedPath, toggleLangPath };
}
