import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

export default function PrivacyPolicyPage() {
  const { lang, getLocalizedPath } = useLanguage();

  const isEn = lang === 'en';
  const h2 = 'text-xl font-semibold text-gray-900 mt-8';

  return (
    <>
      <SEOHead
        title={isEn ? "Privacy Policy | Service d'Arbres Brandse" : "Politique de confidentialité | Service d'Arbres Brandse"}
        description={isEn
          ? 'How Service d\'Arbres Brandse collects, uses and protects your personal information, including calls and text messages about your estimate.'
          : 'Comment Service d\'Arbres Brandse recueille, utilise et protège vos renseignements personnels, y compris les appels et textos au sujet de votre estimation.'}
        path={lang === 'fr' ? '/fr/privacy-policy' : '/privacy-policy'}
        lang={lang}
      />
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {isEn ? 'Privacy Policy' : 'Politique de confidentialité'}
          </h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>
              {isEn
                ? `Last updated: October 2026. This policy explains how Service d'Arbres Brandse Inc ("we", "us", "our"), a tree-care company based in Saint-Lazare, Quebec, collects, uses, shares and protects your personal information when you use our website, request an estimate, or talk or text with us. We follow Quebec's Act respecting the protection of personal information in the private sector (Law 25) and Canada's PIPEDA.`
                : `Dernière mise à jour : octobre 2026. Cette politique explique comment Service d'Arbres Brandse Inc (« nous », « notre »), une entreprise d'arboriculture établie à Saint-Lazare (Québec), recueille, utilise, communique et protège vos renseignements personnels lorsque vous utilisez notre site, demandez une estimation, ou nous parlez ou textez. Nous respectons la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25) et la LPRPDE du Canada.`}
            </p>

            <h2 className={h2}>{isEn ? 'What we collect' : 'Ce que nous recueillons'}</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>{isEn
                ? 'What you give us in our quote and contact forms: your name, email, phone number, city, the service you need and your message.'
                : 'Ce que vous nous donnez dans nos formulaires de soumission et de contact : votre nom, courriel, numéro de téléphone, ville, le service voulu et votre message.'}</li>
              <li>{isEn
                ? 'What you tell us on the phone or by text about the work: the address of the property, the trees involved, access details and the time you choose for the estimate visit.'
                : 'Ce que vous nous dites au téléphone ou par texto au sujet des travaux : l\'adresse de la propriété, les arbres concernés, les détails d\'accès et le moment choisi pour la visite d\'estimation.'}</li>
              <li>{isEn
                ? 'A written transcript of calls handled by our AI assistant, and the text messages we exchange. We do not record the audio of calls.'
                : 'Une transcription écrite des appels traités par notre assistant IA, et les textos échangés. Nous n\'enregistrons pas l\'audio des appels.'}</li>
              <li>{isEn
                ? 'Website usage data collected by cookies, as described in our '
                : 'Des données d\'utilisation du site recueillies par des cookies, comme l\'explique notre '}
                <Link href={getLocalizedPath('/cookie-policy')} className="text-[#2D5016] underline">
                  {isEn ? 'Cookie Policy' : 'politique de cookies'}
                </Link>.
              </li>
            </ul>

            <h2 className={h2}>{isEn ? 'Why we use it' : 'Pourquoi nous les utilisons'}</h2>
            <p>
              {isEn
                ? 'To answer your request: call or text you back, book and confirm your estimate visit, prepare your quote, do the work, invoice you and follow up on it. We also use anonymized website statistics to improve the site and our advertising. We only use your information for these purposes, or for another purpose you agree to.'
                : 'Pour répondre à votre demande : vous rappeler ou vous texter, fixer et confirmer votre visite d\'estimation, préparer votre soumission, faire les travaux, vous facturer et en faire le suivi. Nous utilisons aussi des statistiques anonymisées du site pour l\'améliorer, ainsi que notre publicité. Nous n\'utilisons vos renseignements qu\'à ces fins, ou à une autre fin à laquelle vous consentez.'}
            </p>

            <h2 className={h2}>{isEn ? 'Calls, text messages and our AI assistant' : 'Appels, textos et notre assistant IA'}</h2>
            <p>
              {isEn
                ? 'When you send us a quote request, you agree that we may call or text you at the number you gave us about that request. To answer quickly, the first call is often made by our virtual assistant, an AI (artificial intelligence) phone assistant. It introduces itself as our virtual assistant at the start of the call, and always tells you it is an AI if you ask. It can answer basic questions and book your estimate visit, and it can transfer you to a person at any time: just ask. We call only during reasonable hours and make a few attempts at most.'
                : 'Lorsque vous nous envoyez une demande de soumission, vous acceptez que nous vous appelions ou vous textions au numéro fourni au sujet de cette demande. Pour répondre rapidement, le premier appel est souvent fait par notre assistant virtuel, un assistant téléphonique d\'intelligence artificielle (IA). Il se présente comme notre assistant virtuel dès le début de l\'appel, et vous confirme toujours qu\'il est une IA si vous le demandez. Il peut répondre aux questions de base et fixer votre visite d\'estimation, et il peut vous transférer à une personne en tout temps : il suffit de le demander. Nous appelons seulement à des heures raisonnables et faisons quelques tentatives au plus.'}
            </p>
            <p>
              {isEn
                ? 'Text messages are about your request only (for example a confirmation of your visit time). Message frequency varies; message and data rates may apply. Reply STOP at any time to stop texts, or tell us on the phone that you don\'t want to be called again, and we will not contact you again that way.'
                : 'Les textos portent uniquement sur votre demande (par exemple la confirmation de l\'heure de votre visite). La fréquence des messages varie; des frais de messagerie et de données peuvent s\'appliquer. Répondez STOP en tout temps pour ne plus recevoir de textos, ou dites-nous au téléphone que vous ne voulez plus être appelé, et nous ne vous contacterons plus de cette façon.'}
            </p>
            <p className="font-medium text-gray-700">
              {isEn
                ? 'We do not sell your personal information. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are not shared with any third party.'
                : 'Nous ne vendons pas vos renseignements personnels. Aucun renseignement mobile ne sera communiqué à des tiers ou à des sociétés affiliées à des fins de marketing ou de promotion. Les données d\'adhésion aux textos et le consentement ne sont communiqués à aucun tiers.'}
            </p>

            <h2 className={h2}>{isEn ? 'Who helps us (service providers)' : 'Qui nous aide (fournisseurs de services)'}</h2>
            <p>
              {isEn
                ? 'We share your information only with the companies that run our tools, and only what each needs to do its job for us. They may not use it for anything else.'
                : 'Nous communiquons vos renseignements seulement aux entreprises qui exploitent nos outils, et seulement ce dont chacune a besoin pour faire son travail pour nous. Elles ne peuvent pas les utiliser à d\'autres fins.'}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{isEn ? 'ArbreCRM: our customer and quote management system.' : 'ArbreCRM : notre système de gestion des clients et des soumissions.'}</li>
              <li>{isEn ? 'Titan Mail: our business email.' : 'Titan Mail : notre courriel d\'entreprise.'}</li>
              <li>{isEn ? 'Twilio: phone calls, text messages and the speech recognition and voice used by our AI assistant.' : 'Twilio : appels, textos, ainsi que la reconnaissance vocale et la voix utilisées par notre assistant IA.'}</li>
              <li>{isEn ? 'Anthropic (Claude): the artificial intelligence that runs our phone assistant and reads incoming quote requests.' : 'Anthropic (Claude) : l\'intelligence artificielle qui fait fonctionner notre assistant téléphonique et lit les demandes de soumission reçues.'}</li>
              <li>{isEn ? 'Vercel: hosting for this website.' : 'Vercel : hébergement de ce site.'}</li>
              <li>{isEn ? 'Google Analytics and Google Ads: website statistics and advertising measurement (see our Cookie Policy).' : 'Google Analytics et Google Ads : statistiques du site et mesure de la publicité (voir notre politique de cookies).'}</li>
            </ul>
            <p>
              {isEn
                ? 'Some of these providers store or process information outside Quebec, including in the United States. Before using them we assessed that your information is adequately protected, and they are bound by contract to keep it confidential and secure.'
                : 'Certains de ces fournisseurs conservent ou traitent des renseignements à l\'extérieur du Québec, notamment aux États-Unis. Avant de les utiliser, nous avons évalué que vos renseignements y sont protégés adéquatement, et ils sont tenus par contrat d\'en préserver la confidentialité et la sécurité.'}
            </p>

            <h2 className={h2}>{isEn ? 'How long we keep it' : 'Combien de temps nous les conservons'}</h2>
            <p>
              {isEn
                ? 'Only as long as needed for the purposes above and to meet our legal, tax and accounting obligations. After that, we delete it or make it anonymous. If you don\'t become a customer, you can ask us to delete your request at any time.'
                : 'Seulement le temps nécessaire aux fins décrites ci-dessus et pour respecter nos obligations légales, fiscales et comptables. Ensuite, nous les détruisons ou les anonymisons. Si vous ne devenez pas client, vous pouvez nous demander de supprimer votre demande en tout temps.'}
            </p>

            <h2 className={h2}>{isEn ? 'How we protect it' : 'Comment nous les protégeons'}</h2>
            <p>
              {isEn
                ? 'Access is limited to the people and providers who need it, accounts are password-protected, and information travels over encrypted connections. If a privacy incident ever creates a risk of serious harm, we will notify you and the Commission d\'accès à l\'information as the law requires.'
                : 'L\'accès est limité aux personnes et fournisseurs qui en ont besoin, les comptes sont protégés par mot de passe et les renseignements circulent par des connexions chiffrées. Si un incident de confidentialité présente un risque de préjudice sérieux, nous vous en aviserons, ainsi que la Commission d\'accès à l\'information, comme la loi l\'exige.'}
            </p>

            <h2 className={h2}>{isEn ? 'Your rights' : 'Vos droits'}</h2>
            <p>
              {isEn
                ? 'You can ask to see the personal information we hold about you, have it corrected, have it deleted, or withdraw your consent (for example to calls or texts) at any time, by contacting us below. We answer within 30 days. If you are not satisfied with our answer, you can file a complaint with the Commission d\'accès à l\'information du Québec (cai.gouv.qc.ca).'
                : 'Vous pouvez demander à consulter les renseignements personnels que nous détenons sur vous, les faire corriger, les faire supprimer ou retirer votre consentement (par exemple aux appels ou textos) en tout temps, en nous écrivant ci-dessous. Nous répondons dans un délai de 30 jours. Si notre réponse ne vous satisfait pas, vous pouvez porter plainte auprès de la Commission d\'accès à l\'information du Québec (cai.gouv.qc.ca).'}
            </p>

            <h2 className={h2}>{isEn ? 'Person in charge of privacy' : 'Responsable de la protection des renseignements personnels'}</h2>
            <p>
              {isEn
                ? 'Connor Brandse, owner, is responsible for the protection of personal information at Service d\'Arbres Brandse Inc. Contact him with any question or request:'
                : 'Connor Brandse, propriétaire, est responsable de la protection des renseignements personnels chez Service d\'Arbres Brandse Inc. Communiquez avec lui pour toute question ou demande :'}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{isEn ? 'Email' : 'Courriel'}: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#2D5016] underline">{siteConfig.contact.email}</a></li>
              <li>{isEn ? 'Phone' : 'Téléphone'}: <a href={`tel:${siteConfig.contact.phone}`} className="text-[#2D5016] underline">{siteConfig.contact.phoneDisplay}</a></li>
              <li>{isEn ? 'Mail' : 'Poste'}: Service d&apos;Arbres Brandse Inc, Saint-Lazare (Québec)</li>
            </ul>

            <h2 className={h2}>{isEn ? 'Changes' : 'Modifications'}</h2>
            <p>
              {isEn
                ? 'If we change this policy, we will post the new version here with a new date.'
                : 'Si nous modifions cette politique, nous publierons la nouvelle version ici avec une nouvelle date.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
