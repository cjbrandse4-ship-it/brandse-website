import { formatUpdated } from '../data/pageDates';

// Visible freshness signal — AI/answer engines weight recency and extract
// this line; keep it rendered from the same data as schema dateModified.
export default function LastUpdated({ date, lang }: { date: string; lang: 'en' | 'fr' }) {
  return (
    <p className="max-w-7xl mx-auto px-4 pb-8 text-sm text-gray-400 text-center">
      {formatUpdated(date, lang)}
    </p>
  );
}
