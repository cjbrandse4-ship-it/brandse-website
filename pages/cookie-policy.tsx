import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';

export default function CookiePolicyPage() {
  const { lang } = useLanguage();

  const isEn = lang === 'en';

  return (
    <>
      <SEOHead
        title={isEn ? "Cookie Policy | Service d'Arbres Brandse" : "Politique de cookies | Service d'Arbres Brandse"}
        description={isEn ? 'Learn about how we use cookies on our website.' : 'Apprenez comment nous utilisons les cookies sur notre site web.'}
        path={lang === 'fr' ? '/fr/cookie-policy' : '/cookie-policy'}
        lang={lang}
      />
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {isEn ? 'Cookie Policy' : 'Politique de cookies'}
          </h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>
              {isEn
                ? `Last updated: March 2026. This Cookie Policy explains how Service d'Arbres Brandse Inc ("we", "us", or "our") uses cookies and similar tracking technologies on our website.`
                : `Derniere mise a jour : mars 2026. Cette politique de cookies explique comment Service d'Arbres Brandse Inc (« nous », « notre ») utilise les cookies et les technologies de suivi similaires sur notre site web.`}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              {isEn ? 'What are cookies?' : 'Que sont les cookies ?'}
            </h2>
            <p>
              {isEn
                ? 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, analyze traffic, and improve your browsing experience.'
                : 'Les cookies sont de petits fichiers texte stockes sur votre appareil lorsque vous visitez un site web. Ils aident les sites web a se souvenir de vos preferences, a analyser le trafic et a ameliorer votre experience de navigation.'}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              {isEn ? 'Types of cookies we use' : 'Types de cookies que nous utilisons'}
            </h2>

            <h3 className="text-lg font-medium text-gray-800 mt-6">
              {isEn ? 'Essential Cookies' : 'Cookies essentiels'}
            </h3>
            <p>
              {isEn
                ? 'These cookies are necessary for the website to function properly. They enable basic features like page navigation, language preferences, and secure access. The website cannot function properly without these cookies.'
                : 'Ces cookies sont necessaires au bon fonctionnement du site web. Ils activent des fonctionnalites de base comme la navigation, les preferences linguistiques et l\'acces securise. Le site ne peut pas fonctionner correctement sans ces cookies.'}
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-6">
              {isEn ? 'Analytics Cookies' : 'Cookies analytiques'}
            </h3>
            <p>
              {isEn
                ? 'We use Google Analytics to understand how visitors interact with our website. These cookies collect information such as pages visited, time spent on pages, and traffic sources. This data helps us improve our website and services. All data is anonymized.'
                : 'Nous utilisons Google Analytics pour comprendre comment les visiteurs interagissent avec notre site. Ces cookies collectent des informations telles que les pages visitees, le temps passe sur les pages et les sources de trafic. Ces donnees nous aident a ameliorer notre site. Toutes les donnees sont anonymisees.'}
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-6">
              {isEn ? 'Marketing Cookies' : 'Cookies marketing'}
            </h3>
            <p>
              {isEn
                ? 'We may use marketing cookies from Google Ads to measure the effectiveness of our advertising campaigns and to show you relevant ads on other platforms. You can opt out of personalized advertising through your Google account settings.'
                : 'Nous pouvons utiliser des cookies marketing de Google Ads pour mesurer l\'efficacite de nos campagnes publicitaires et pour vous montrer des publicites pertinentes sur d\'autres plateformes. Vous pouvez desactiver la publicite personnalisee via les parametres de votre compte Google.'}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              {isEn ? 'Managing cookies' : 'Gestion des cookies'}
            </h2>
            <p>
              {isEn
                ? 'Most web browsers allow you to manage cookies through their settings. You can block or delete cookies, though this may affect your experience on our website. Refer to your browser\'s help section for instructions on managing cookies.'
                : 'La plupart des navigateurs web vous permettent de gerer les cookies via leurs parametres. Vous pouvez bloquer ou supprimer les cookies, bien que cela puisse affecter votre experience sur notre site web. Consultez la section d\'aide de votre navigateur pour des instructions sur la gestion des cookies.'}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              {isEn ? 'Contact us' : 'Contactez-nous'}
            </h2>
            <p>
              {isEn
                ? 'If you have questions about our use of cookies, please contact us:'
                : 'Si vous avez des questions sur notre utilisation des cookies, veuillez nous contacter :'}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{isEn ? 'Email' : 'Courriel'}: info@brandses.com</li>
              <li>{isEn ? 'Phone' : 'Telephone'}: (438) 365-5410</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
