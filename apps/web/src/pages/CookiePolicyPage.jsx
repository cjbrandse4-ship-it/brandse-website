
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Shield, Clock, Info, Settings } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const CookiePolicyPage = () => {
  const { language, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const pageTitle = isFr ? "Politique relative aux cookies | Service d'Arbres Brandse" : "Cookie Policy | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Découvrez comment Service d'Arbres Brandse utilise les cookies pour améliorer votre expérience sur notre site web." : "Learn how Service d'Arbres Brandse uses cookies to improve your experience on our website.";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/cookie-policy')}`;

  const sections = [
    {
      icon: Cookie,
      title: isFr ? "Types de cookies que nous utilisons" : "Types of Cookies We Use",
      content: isFr ? (
        <ul className="space-y-4 text-gray-600">
          <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site web. Ils ne peuvent pas être désactivés dans nos systèmes.</li>
          <li><strong>Cookies analytiques :</strong> Nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site.</li>
          <li><strong>Cookies marketing :</strong> Peuvent être mis en place par nos partenaires publicitaires pour établir un profil de vos intérêts et vous montrer des publicités pertinentes.</li>
        </ul>
      ) : (
        <ul className="space-y-4 text-gray-600">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function. They cannot be switched off in our systems.</li>
          <li><strong>Analytics Cookies:</strong> Allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Marketing Cookies:</strong> May be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts.</li>
        </ul>
      )
    },
    {
      icon: Info,
      title: isFr ? "Finalités des cookies" : "Purposes of Cookies",
      content: isFr ? (
        <p className="text-gray-600 leading-relaxed">
          Nous utilisons des cookies pour mémoriser vos préférences linguistiques, comprendre comment vous interagissez avec notre contenu, sécuriser nos formulaires de contact et vous offrir une expérience de navigation fluide et personnalisée lors de la recherche de services d'arboriculture.
        </p>
      ) : (
        <p className="text-gray-600 leading-relaxed">
          We use cookies to remember your language preferences, understand how you interact with our content, secure our contact forms, and provide you with a seamless, personalized browsing experience when looking for tree care services.
        </p>
      )
    },
    {
      icon: Shield,
      title: isFr ? "Vos droits (RGPD & Loi 25)" : "Your Rights (GDPR & Law 25)",
      content: isFr ? (
        <p className="text-gray-600 leading-relaxed">
          Conformément aux réglementations sur la protection de la vie privée, vous avez le droit d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment. Le refus de certains cookies peut impacter votre expérience sur notre site.
        </p>
      ) : (
        <p className="text-gray-600 leading-relaxed">
          In accordance with privacy regulations, you have the right to accept or decline non-essential cookies. You can change your preferences at any time. Declining certain cookies may impact your experience on our site.
        </p>
      )
    },
    {
      icon: Clock,
      title: isFr ? "Conservation des données" : "Data Retention",
      content: isFr ? (
        <p className="text-gray-600 leading-relaxed">
          Les cookies de session sont supprimés dès que vous fermez votre navigateur. Les cookies persistants (comme vos préférences de consentement) sont conservés pour une durée maximale de 12 mois, après quoi votre consentement vous sera à nouveau demandé.
        </p>
      ) : (
        <p className="text-gray-600 leading-relaxed">
          Session cookies are deleted as soon as you close your browser. Persistent cookies (such as your consent preferences) are kept for a maximum of 12 months, after which you will be asked for your consent again.
        </p>
      )
    },
    {
      icon: Settings,
      title: isFr ? "Nous contacter" : "Contact Information",
      content: isFr ? (
        <p className="text-gray-600 leading-relaxed">
          Si vous avez des questions concernant notre utilisation des cookies ou vos données personnelles, veuillez nous contacter à <a href="mailto:info@brandses.com" className="text-primary hover:underline font-medium">info@brandses.com</a> ou par téléphone au (438) 365-5410.
        </p>
      ) : (
        <p className="text-gray-600 leading-relaxed">
          If you have any questions about our use of cookies or your personal data, please contact us at <a href="mailto:info@brandses.com" className="text-primary hover:underline font-medium">info@brandses.com</a> or by phone at (438) 365-5410.
        </p>
      )
    }
  ];

  return (
    <div className="overflow-x-hidden bg-gray-50 min-h-screen flex flex-col">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        canonicalUrl={getLocalizedPath('/cookie-policy')}
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Politique relative aux cookies' : 'Cookie Policy', url: '/cookie-policy' }
      ]} />

      <Header />

      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{label: isFr ? 'Politique relative aux cookies' : 'Cookie Policy'}]} />
          
          <div className="mb-12 mt-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {isFr ? "Politique relative aux cookies" : "Cookie Policy"}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {isFr 
                ? "Cette politique explique comment et pourquoi nous utilisons des cookies sur notre site web pour vous offrir la meilleure expérience possible tout en respectant votre vie privée." 
                : "This policy explains how and why we use cookies on our website to provide you with the best possible experience while respecting your privacy."}
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-primary max-w-none">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to={getLocalizedPath('/')} 
              className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {isFr ? "Retour à l'accueil" : "Back to Home"}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
