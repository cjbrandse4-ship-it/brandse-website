import Link from 'next/link';
import { useLanguage } from '../lib/useLanguage';

// Plain copy with optional [link text](/english-path) links. Internal paths
// are localized (French slugs included) through getLocalizedPath, so content
// files only ever write the English path.
const LINK = /\[([^\]]+)\]\((\/[^)]*)\)/;

export default function RichText({ text }: { text: string }) {
  const { getLocalizedPath } = useLanguage();
  const parts = text.split(/(\[[^\]]+\]\(\/[^)]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(LINK);
        if (!m) return part;
        return (
          <Link key={i} href={getLocalizedPath(m[2])} className="text-[#2D5016] font-semibold underline decoration-[#2D5016]/30 underline-offset-2 hover:decoration-[#2D5016]">
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

// For JSON-LD and other plain-text outputs: keep the link text, drop the URL.
export const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\(\/[^)]*\)/g, '$1');
