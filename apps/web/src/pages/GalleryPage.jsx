
import React, { useState } from 'react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import ImageModal from '@/components/ImageModal.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import LazyImage from '@/components/LazyImage.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const galleryImages = [
  { id: 1, src: 'https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/0aa9793026150c3de89d584a95ea324f.webp', alt: 'Professional tall tree removal in residential area', caption: 'Professional tall tree removal in residential area' },
  { id: 2, src: 'https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/ad9e7518a1b73a2e943546bad8799314.webp', alt: 'Efficient stump grinding equipment in action', caption: 'Efficient stump grinding and removal' },
  { id: 3, src: 'https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/d11b12f14ef855001ce06ba722a3e690.webp', alt: 'Certified arborist trimming a large tree', caption: 'Precision tree trimming and pruning' },
  { id: 4, src: 'https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/ebba70bb6939d198dd47a477c6b23bbd.webp', alt: 'Safe tree cutting and sectioning by professionals', caption: 'Safe tree cutting and sectioning' },
  { id: 5, src: 'https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/cf4fbdcf49ffee1d595ac7b2fea9131c.webp', alt: 'Worker carefully trimming tree near a house', caption: 'Careful trimming near residential structures' },
  { id: 6, src: 'https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/79336078f88a7b76035a4350a7d4e6c8.webp', alt: 'Cleared yard after complete tree service cleanup', caption: 'Complete cleanup and yard clearing' }
];

const GalleryPage = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => { setCurrentIndex(index); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <SEOHead 
        title={isFr ? "Galerie de Réalisations | Service d'Arbres Brandse" : "Our Work Gallery | Service d'Arbres Brandse"}
        description={isFr ? "Découvrez nos projets récents d'abattage, d'élagage et d'essouchage dans l'Ouest de l'Île de Montréal." : "View our gallery of professional tree removal, trimming, and stump grinding projects across the West Island of Montreal."}
        canonicalUrl={getLocalizedPath('/gallery')}
      />

      <Header />

      <main className="flex-grow">
        <div className="bg-primary text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumbs items={[{label: isFr ? 'Galerie' : 'Gallery'}]} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-4">{isFr ? "Notre Galerie" : "Our Work Gallery"}</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              {isFr ? "Jetez un œil à nos récents projets d'arboriculture. De l'abattage complexe à la taille de précision." : "Take a look at some of our recent tree service projects. From complex removals to precision trimming."}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <button 
                key={image.id}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white w-full text-left focus:outline-none focus:ring-4 focus:ring-primary"
                onClick={() => openModal(index)}
                aria-label={`View image: ${image.caption}`}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <LazyImage 
                    src={image.src} 
                    alt={image.alt} 
                    width={600}
                    height={450}
                    className="w-full h-full"
                    imgClassName="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg">{image.caption}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <ImageModal isOpen={modalOpen} onClose={closeModal} images={galleryImages} currentIndex={currentIndex} onNext={nextImage} onPrev={prevImage} />
    </div>
  );
};

export default GalleryPage;
