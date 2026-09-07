import Link from 'next/link';
import { Tag } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { useActivePromotion } from '../lib/usePromotion';

// Slim site-wide announcement bar for the active seasonal promotion.
// Renders nothing when no campaign window is active.
export default function PromoBanner() {
  const { lang } = useLanguage();
  const active = useActivePromotion(lang);
  if (!active) return null;

  // FR landing page has its own slug (not the /fr prefix pattern).
  const href = lang === 'fr' ? '/fr/devis-gratuit' : '/free-estimate';

  return (
    <Link
      href={href}
      className="block bg-amber-400 text-gray-900 text-center text-sm font-semibold py-2 px-4 hover:bg-amber-300 transition-colors"
    >
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <Tag className="w-4 h-4 shrink-0" />
        <span>{active.copy.bar}</span>
        <span className="inline-block bg-gray-900 text-amber-300 rounded-full px-2 py-0.5 text-xs font-bold">
          {active.copy.deadlineLabel}
        </span>
      </span>
    </Link>
  );
}
