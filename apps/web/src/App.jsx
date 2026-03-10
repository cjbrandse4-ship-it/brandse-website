import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { initializeGA } from './utils/GoogleAnalytics.js';
import usePageTracking from './hooks/usePageTracking.js';
import usePerformanceMetrics from './hooks/usePerformanceMetrics.js';
import CookieConsentBanner from '@/components/CookieConsentBanner.jsx';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const TreeRemovalPage = lazy(() => import('./pages/TreeRemovalPage.jsx'));
const StumpGrindingPage = lazy(() => import('./pages/StumpGrindingPage.jsx'));
const TreeTrimmingPage = lazy(() => import('./pages/TreeTrimmingPage.jsx'));
const HedgeTrimPage = lazy(() => import('./pages/HedgeTrimPage.jsx'));
const TreePlantingPage = lazy(() => import('./pages/TreePlantingPage.jsx'));
const EmergencyServicesPage = lazy(() => import('./pages/EmergencyServicesPage.jsx'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage.jsx'));
const FAQPage = lazy(() => import('./pages/FAQPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage.jsx'));

// Location Pages
const PointeClairePage = lazy(() => import('./pages/PointeClairePage.jsx'));
const HudsonPage = lazy(() => import('./pages/HudsonPage.jsx'));
const BeaconsFieldPage = lazy(() => import('./pages/BeaconsFieldPage.jsx'));
const SaintLazarePage = lazy(() => import('./pages/SaintLazarePage.jsx'));
const VaureuilPage = lazy(() => import('./pages/VaureuilPage.jsx'));
const KirklandPage = lazy(() => import('./pages/KirklandPage.jsx'));
const DollardDesOrmeauxPage = lazy(() => import('./pages/DollardDesOrmeauxPage.jsx'));
const DorvalPage = lazy(() => import('./pages/DorvalPage.jsx'));
const SennevillePage = lazy(() => import('./pages/SennevillePage.jsx'));
const BaieDUrfePage = lazy(() => import('./pages/BaieDUrfePage.jsx'));
const IlePerrotPage = lazy(() => import('./pages/IlePerrotPage.jsx'));
const PincourtPage = lazy(() => import('./pages/PincourtPage.jsx'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Component to handle page tracking inside the Router context
const PageTracker = () => {
  usePageTracking();
  return null;
};

function App() {
  // Initialize performance monitoring
  usePerformanceMetrics();

  useEffect(() => {
    // Defer GA initialization to prevent blocking main thread
    const timer = setTimeout(() => {
      initializeGA();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PageTracker />
      <LanguageProvider>
        <ScrollToTop />
        <CookieConsentBanner />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* English Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/tree-removal" element={<TreeRemovalPage />} />
            <Route path="/stump-grinding" element={<StumpGrindingPage />} />
            <Route path="/tree-trimming" element={<TreeTrimmingPage />} />
            <Route path="/hedge-trimming" element={<HedgeTrimPage />} />
            <Route path="/tree-planting" element={<TreePlantingPage />} />
            <Route path="/emergency-services" element={<EmergencyServicesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            
            {/* English Location Routes */}
            <Route path="/pointe-claire" element={<PointeClairePage />} />
            <Route path="/hudson" element={<HudsonPage />} />
            <Route path="/beaconsfield" element={<BeaconsFieldPage />} />
            <Route path="/saint-lazare" element={<SaintLazarePage />} />
            <Route path="/vaudreuil" element={<VaureuilPage />} />
            <Route path="/kirkland" element={<KirklandPage />} />
            <Route path="/dollard-des-ormeaux" element={<DollardDesOrmeauxPage />} />
            <Route path="/dorval" element={<DorvalPage />} />
            <Route path="/senneville" element={<SennevillePage />} />
            <Route path="/baie-d-urfe" element={<BaieDUrfePage />} />
            <Route path="/ile-perrot" element={<IlePerrotPage />} />
            <Route path="/pincourt" element={<PincourtPage />} />

            {/* French Routes */}
            <Route path="/fr" element={<HomePage />} />
            <Route path="/fr/services" element={<ServicesPage />} />
            <Route path="/fr/tree-removal" element={<TreeRemovalPage />} />
            <Route path="/fr/stump-grinding" element={<StumpGrindingPage />} />
            <Route path="/fr/tree-trimming" element={<TreeTrimmingPage />} />
            <Route path="/fr/hedge-trimming" element={<HedgeTrimPage />} />
            <Route path="/fr/tree-planting" element={<TreePlantingPage />} />
            <Route path="/fr/emergency-services" element={<EmergencyServicesPage />} />
            <Route path="/fr/about" element={<AboutUsPage />} />
            <Route path="/fr/gallery" element={<GalleryPage />} />
            <Route path="/fr/blog" element={<BlogPage />} />
            <Route path="/fr/blog/:slug" element={<BlogPostPage />} />
            <Route path="/fr/faq" element={<FAQPage />} />
            <Route path="/fr/contact" element={<ContactPage />} />
            <Route path="/fr/cookie-policy" element={<CookiePolicyPage />} />
            
            {/* French Location Routes */}
            <Route path="/fr/pointe-claire" element={<PointeClairePage />} />
            <Route path="/fr/hudson" element={<HudsonPage />} />
            <Route path="/fr/beaconsfield" element={<BeaconsFieldPage />} />
            <Route path="/fr/saint-lazare" element={<SaintLazarePage />} />
            <Route path="/fr/vaudreuil" element={<VaureuilPage />} />
            <Route path="/fr/kirkland" element={<KirklandPage />} />
            <Route path="/fr/dollard-des-ormeaux" element={<DollardDesOrmeauxPage />} />
            <Route path="/fr/dorval" element={<DorvalPage />} />
            <Route path="/fr/senneville" element={<SennevillePage />} />
            <Route path="/fr/baie-d-urfe" element={<BaieDUrfePage />} />
            <Route path="/fr/ile-perrot" element={<IlePerrotPage />} />
            <Route path="/fr/pincourt" element={<PincourtPage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </LanguageProvider>
    </Router>
  );
}

export default App;