import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';

const galleryItems = [
  {
    src: '/gallery/arborist-chainsaw.jpg',
    en: 'Certified arborist with professional chainsaw equipment',
    fr: 'Arboriste certifie avec equipement de tronconneuse professionnel',
  },
  {
    src: '/gallery/climber-with-crane.jpg',
    en: 'Tree removal with crane assistance',
    fr: 'Abattage d\'arbre avec assistance de grue',
  },
  {
    src: '/gallery/tree-removal-stone-house.jpg',
    en: 'Residential tree removal near heritage stone home',
    fr: 'Abattage d\'arbre residentiel pres d\'une maison en pierre',
  },
  {
    src: '/gallery/climber-top-of-tree.jpg',
    en: 'Arborist climbing for safe section-by-section removal',
    fr: 'Arboriste en grimpe pour abattage securitaire section par section',
  },
  {
    src: '/gallery/stump-grinding.jpg',
    en: 'Stump grinding with Vermeer professional equipment',
    fr: 'Essouchage avec equipement professionnel Vermeer',
  },
  {
    src: '/gallery/hedge-trimming.jpg',
    en: 'Precision cedar hedge trimming',
    fr: 'Taille de haie de cedres de precision',
  },
  {
    src: '/gallery/high-climb-removal.jpg',
    en: 'High-altitude tree removal by experienced climber',
    fr: 'Abattage en hauteur par grimpeur experimente',
  },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const title = lang === 'fr' ? 'Galerie' : 'Gallery';
  const subtitle = lang === 'fr'
    ? 'Decouvrez nos realisations a travers l\'Ouest de l\'Ile de Montreal'
    : 'See our work across West Island Montreal';
  const metaTitle = lang === 'fr'
    ? "Galerie | Service d'Arbres Brandse"
    : "Gallery | Service d'Arbres Brandse";
  const metaDesc = lang === 'fr'
    ? "Photos de nos travaux d'entretien d'arbres dans l'Ouest de l'Ile de Montreal."
    : 'Photos of our tree care work across West Island Montreal.';

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        path={lang === 'fr' ? '/fr/gallery' : '/gallery'}
        lang={lang}
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-[#2D5016]"
              >
                <img
                  src={item.src}
                  alt={item[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item[lang]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox][lang]}
              className="w-full rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryItems[lightbox][lang]}
            </p>
          </div>
          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === lightbox ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
