import type { GetStaticProps } from 'next';
import FreeEstimatePage from '../free-estimate';

// Inject initialLang='fr' so the prerendered HTML for this route is French.
// See the long comment in ../free-estimate.tsx for why we don't rely on the
// router-based language detection used by other pages.
export const getStaticProps: GetStaticProps<{ initialLang: 'en' | 'fr' }> = async () => ({
  props: { initialLang: 'fr' },
});

export default FreeEstimatePage;
