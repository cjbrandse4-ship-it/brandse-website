import { useEffect, useState } from 'react';
import { getActivePromotion, Promotion, PromoCopy } from '../data/promotions';

export interface ActivePromo {
  promo: Promotion;
  copy: PromoCopy;
  daysLeft: number;
}

// Resolves the active seasonal promotion CLIENT-SIDE only (returns null on the
// server and during the first render) so statically-generated HTML never
// mismatches at hydration. Promo UI pops in right after mount.
export function useActivePromotion(lang: 'en' | 'fr'): ActivePromo | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => { setNow(new Date()); }, []);
  if (!now) return null;

  const promo = getActivePromotion(now);
  if (!promo) return null;

  const end = new Date(`${promo.end}T23:59:59`);
  const daysLeft = Math.max(0, Math.ceil((end.getTime() - now.getTime()) / 86_400_000));
  return { promo, copy: promo[lang], daysLeft };
}
