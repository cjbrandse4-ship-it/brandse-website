
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SchemaMarkup from '@/components/SchemaMarkup.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  const { toast } = useToast();
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service_area: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceAreas = [
    { name: 'Saint-Lazare', path: '/saint-lazare' }, { name: 'Pointe-Claire', path: '/pointe-claire' },
    { name: 'Hudson', path: '/hudson' }, { name: 'Beaconsfield', path: '/beaconsfield' },
    { name: 'Vaudreuil', path: '/vaudreuil' }, { name: 'Kirkland', path: '/kirkland' },
    { name: 'Dollard-des-Ormeaux', path: '/dollard-des-ormeaux' }, { name: 'Dorval', path: '/dorval' },
    { name: 'Senneville', path: '/senneville' }, { name: "Baie-D'Urfé", path: '/baie-d-urfe' },
    { name: 'Île-Perrot', path: '/ile-perrot' }, { name: 'Pincourt', path: '/pincourt' }
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: isFr ? "Erreur de validation" : "Validation Error",
        description: isFr ? "Veuillez remplir tous les champs obligatoires." : "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: isFr ? "Courriel invalide" : "Invalid Email",
        description: isFr ? "Veuillez entrer une adresse courriel valide." : "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await pb.collection('contact_submissions').create({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service_area: formData.service_area,
        message: formData.message.trim()
      }, { $autoCancel: false });
      
      toast({ 
        title: t('contact.successTitle'), 
        description: t('contact.successDesc') 
      });
      setFormData({ name: '', email: '', phone: '', service_area: '', message: '' });
    } catch (error) {
      console.error("Form submission error:", error);
      
      let errorTitle = t('contact.errorTitle');
      let errorDesc = t('contact.errorDesc');

      if (!navigator.onLine) {
        errorTitle = isFr ? "Erreur de connexion" : "Connection Error";
        errorDesc = isFr ? "Veuillez vérifier votre connexion internet et réessayer." : "Please check your internet connection and try again.";
      } else if (error.status === 400) {
        errorTitle = isFr ? "Données invalides" : "Invalid Data";
        errorDesc = isFr ? "Certaines informations fournies sont invalides. Veuillez vérifier le formulaire." : "Some provided information is invalid. Please check the form.";
      } else if (error.status >= 500) {
        errorTitle = isFr ? "Erreur du serveur" : "Server Error";
        errorDesc = isFr ? "Notre serveur rencontre des difficultés. Veuillez réessayer plus tard." : "Our server is experiencing difficulties. Please try again later.";
      }

      toast({ 
        title: errorTitle, 
        description: errorDesc, 
        variant: 'destructive' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pageTitle = isFr ? "Contactez-nous | Soumission Gratuite" : "Contact Us | Free Quote";
  const pageDesc = isFr ? "Contactez Service d'Arbres Brandse pour des soins professionnels dans l'Ouest de l'Île de Montréal. Demandez une soumission gratuite pour l'abattage, l'élagage ou les urgences." : "Contact Service d'Arbres Brandse for professional tree care in West Island Montreal. Request a free quote for tree removal, trimming, or emergency services.";
  const keywords = isFr ? "contact arboriculteur, soumission arbre, urgence arbre Montréal" : "contact arborist, tree quote, emergency tree Montreal";

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/contact')}
      />

      <SchemaMarkup type="BreadcrumbList" data={{
        items: [
          { name: isFr ? 'Accueil' : 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ]
      }} />

      <Header />

      <main>
        <section className="bg-primary text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumbs items={[{label: 'Contact'}]} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-4">{t('contact.heroTitle')}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">{t('contact.heroSubtitle')}</p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.formTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Contact Form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                      {t('contact.nameLabel')} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-900 min-h-[56px] disabled:opacity-50" 
                      placeholder={t('contact.namePlaceholder')} 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                      {t('contact.emailLabel')} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-900 min-h-[56px] disabled:opacity-50" 
                      placeholder={t('contact.emailPlaceholder')} 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">{t('contact.phoneLabel')}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-900 min-h-[56px] disabled:opacity-50" 
                      placeholder={t('contact.phonePlaceholder')} 
                    />
                  </div>
                  <div>
                    <label htmlFor="service_area" className="block text-sm font-bold text-gray-900 mb-2">{t('contact.areaLabel')}</label>
                    <select 
                      id="service_area" 
                      name="service_area" 
                      value={formData.service_area} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-900 min-h-[56px] disabled:opacity-50"
                    >
                      <option value="">{t('contact.areaPlaceholder')}</option>
                      {serviceAreas.map((area) => <option key={area.name} value={area.name}>{area.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                      {t('contact.messageLabel')} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      aria-required="true"
                      rows={5} 
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-900 disabled:opacity-50" 
                      placeholder={t('contact.messagePlaceholder')} 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-secondary min-h-[56px] text-lg font-bold shadow-md flex items-center justify-center" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                        {t('contact.sending')}
                      </>
                    ) : (
                      t('contact.sendMessage')
                    )}
                  </Button>
                </form>
                <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                  <ShieldCheck className="w-4 h-4 mr-2 text-green-600" aria-hidden="true" />
                  {isFr ? "Vos informations sont sécurisées et confidentielles." : "Your information is secure and confidential."}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.infoTitle')}</h2>
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-xl mr-5">
                        <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 text-lg">{t('common.phone')}</h3>
                        <a href="tel:4383655410" className="text-gray-700 hover:text-primary font-bold text-xl min-h-[44px] flex items-center">(438) 365-5410</a>
                        <p className="text-sm font-bold text-red-600 mt-1 bg-red-50 inline-block px-2 py-1 rounded">{t('contact.phoneDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-xl mr-5">
                        <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 text-lg">{t('common.email')}</h3>
                        <a href="mailto:info@brandses.com" className="text-gray-700 hover:text-primary text-lg min-h-[44px] flex items-center break-all">info@brandses.com</a>
                        <p className="text-sm text-gray-600 mt-1">{t('contact.emailDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-xl mr-5">
                        <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 text-lg">{t('common.businessHours')}</h3>
                        <p className="text-gray-700 text-lg">{t('contact.hours1')}</p>
                        <p className="text-red-600 font-bold text-lg mt-1">{t('contact.hours2')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" aria-hidden="true" /> {t('contact.areasTitle')}
                  </h2>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    {serviceAreas.map((area) => (
                      <Link key={area.name} to={getLocalizedPath(area.path)} className="flex items-center group min-h-[44px] p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform" aria-hidden="true"></div>
                        <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{area.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
