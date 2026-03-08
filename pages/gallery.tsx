import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
    en: 'Large tree removal in Pointe-Claire',
    fr: 'Abattage d\'un grand arbre a Pointe-Claire',
  },
  {
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80',
    en: 'Professional tree trimming and pruning',
    fr: 'Elagage et taille professionnels',
  },
  {
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80',
    en: 'Hedge maintenance in Beaconsfield',
    fr: 'Entretien de haies a Beaconsfield',
  },
  {
    src: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?w=800&q=80',
    en: 'Stump grinding and removal service',
    fr: 'Service d\'essouchage et d\'enlevement de souches',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    en: 'Emergency storm damage cleanup',
    fr: 'Nettoyage d\'urgence apres tempete',
  },
  {
    src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80',
    en: 'New tree planting in Hudson',
    fr: 'Plantation de nouveaux arbres a Hudson',
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
