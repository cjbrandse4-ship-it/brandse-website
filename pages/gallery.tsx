import { useState } from 'react';
import Head from 'next/head';
import { X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';

const galleryItems = [
  {
    src: '/gallery/hedge-trimming.jpg',
    en: 'Cedar hedge trimming in West Island Montreal',
    fr: 'Taille de haie de cedres dans l\'Ouest de l\'Ile de Montreal',
  },
  {
    src: '/gallery/tree-removal-stone-house.jpg',
    en: 'Tree removal next to a stone house in Pointe-Claire',
    fr: 'Abattage d\'arbre pres d\'une maison en pierre a Pointe-Claire',
  },
  {
    src: '/gallery/climber-with-crane.jpg',
    en: 'Climber sectioning a large tree with crane support in Dorval',
    fr: 'Grimpeur sectionnant un grand arbre avec grue a Dorval',
  },
  {
    src: '/gallery/climber-top-of-tree.jpg',
    en: 'Arborist at the top of a dead tree in a backyard in Kirkland',
    fr: 'Arboriste au sommet d\'un arbre mort dans une cour a Kirkland',
  },
  {
    src: '/gallery/stump-grinding.jpg',
    en: 'Stump grinding with a Vermeer machine in Beaconsfield',
    fr: 'Essouchage avec une machine Vermeer a Beaconsfield',
  },
  {
    src: '/gallery/arborist-chainsaw.jpg',
    en: 'Arborist cutting into a large trunk with a chainsaw in Ile-Bizard',
    fr: 'Arboriste coupant un gros tronc a la tronconneuse a l\'Ile-Bizard',
  },
  {
    src: '/gallery/high-climb-removal.jpg',
    en: 'High climb tree removal in Saint-Lazare',
    fr: 'Abattage en hauteur a Saint-Lazare',
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
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": lang === 'fr' ? "Galerie - Service d'Arbres Brandse" : "Gallery - Service d'Arbres Brandse",
          "description": metaDesc,
          "url": `https://www.servicedarbresbrandse.com${lang === 'fr' ? '/fr/gallery' : '/gallery'}`,
          "image": galleryItems.map(item => ({
            "@type": "ImageObject",
            "contentUrl": `https://www.servicedarbresbrandse.com${item.src}`,
            "description": item[lang],
            "name": item[lang]
          }))
        }) }} />
      </Head>
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
