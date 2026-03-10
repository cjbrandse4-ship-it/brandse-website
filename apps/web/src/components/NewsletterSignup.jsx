
import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      await pb.collection('newsletter_subscribers').create({ 
        email,
        unsubscribed: false
      }, { $autoCancel: false });
      
      toast({
        title: isFr ? "Inscription réussie !" : "Successfully subscribed!",
        description: isFr ? "Merci de vous être inscrit à notre infolettre." : "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      console.error("Newsletter error:", error);
      const isDuplicate = error.response?.data?.email?.code === 'validation_not_unique';
      
      toast({
        title: isFr ? "Erreur d'inscription" : "Subscription failed",
        description: isDuplicate 
          ? (isFr ? "Cette adresse courriel est déjà inscrite." : "This email is already subscribed.")
          : (isFr ? "Une erreur est survenue. Veuillez réessayer." : "An error occurred. Please try again."),
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 border border-primary/10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {isFr ? "Restez informé sur l'entretien des arbres" : "Stay Updated on Tree Care"}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {isFr 
            ? "Abonnez-vous à notre infolettre pour recevoir des conseils saisonniers, des offres exclusives et des actualités locales sur l'arboriculture." 
            : "Subscribe to our newsletter to receive seasonal tips, exclusive offers, and local arboriculture news."}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isFr ? "Votre adresse courriel" : "Your email address"}
              className="block w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all"
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="bg-primary hover:bg-secondary text-white py-4 px-8 rounded-xl h-auto font-semibold shadow-md transition-all flex items-center justify-center min-w-[140px]"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                {isFr ? "S'abonner" : "Subscribe"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          {isFr ? "Nous respectons votre vie privée. Désabonnez-vous en tout temps." : "We respect your privacy. Unsubscribe at any time."}
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
