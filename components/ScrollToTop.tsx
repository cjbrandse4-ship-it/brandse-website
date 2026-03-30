import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#2D5016] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#3a6b1d] transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
