import { useRouter } from 'next/router';
import { translations } from '../data/translations';
import { toFrPath, toEnPath } from './frPaths';

export type Lang = 'en' | 'fr';

export function useLanguage() {
  const router = useRouter();
  const lang: Lang = router.asPath.startsWith('/fr') ? 'fr' : 'en';
  const t = translations[lang];

  // Takes the English path; on the French site returns the French URL,
  // including the French slug where one exists (lib/frPaths.ts).
  function getLocalizedPath(path: string) {
    return lang === 'fr' ? toFrPath(path) : path;
  }

  function toggleLangPath() {
    const [p, rest = ''] = router.asPath.split(/(?=[?#])/);
    return (lang === 'fr' ? toEnPath(p) : toFrPath(p)) + rest;
  }

  return { lang, t, getLocalizedPath, toggleLangPath };
}
