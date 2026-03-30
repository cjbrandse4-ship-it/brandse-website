import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const { lang, t, getLocalizedPath } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const areas = t.common.areas as string[];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', phone: '', area: '', message: '' });
      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', { send_to: 'AW-16516759047/mXt_CJjNyaMZEIf85sM9' });
      }
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <SEOHead
        title={t.contact.metaTitle}
        description={t.contact.metaDesc}
        path={lang === 'fr' ? '/fr/contact' : '/contact'}
        lang={lang}
      />
      <Header />

      <PageHero title={t.contact.heroTitle} subtitle={t.contact.heroSubtitle} />

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.formTitle}</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3" role="alert">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">{t.contact.successTitle}</p>
                    <p className="text-green-700 text-sm">{t.contact.successDesc}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">{t.contact.errorTitle}</p>
                    <p className="text-red-700 text-sm">{t.contact.errorDesc}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.emailLabel}</label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.areaLabel}</label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
                  >
                    <option value="">{t.contact.areaPlaceholder}</option>
                    {areas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.messageLabel}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D5016] text-white rounded-lg font-semibold text-lg hover:bg-[#3a6b1d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {sending ? t.contact.sending : t.contact.sendMessage}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.infoTitle}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2D5016]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.common.phone}</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-[#2D5016] font-medium hover:underline">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">{t.contact.phoneDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2D5016]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.common.email}</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[#2D5016] font-medium hover:underline">
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">{t.contact.emailDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#2D5016]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.common.businessHours}</h3>
                    <p className="text-gray-700">{t.contact.hours1}</p>
                    <p className="text-gray-700">{t.contact.hours2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2D5016]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.contact.areasTitle}</h3>
                    <p className="text-sm text-gray-500 mb-2">{t.contact.areaDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((a) => (
                        <span key={a} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{t.contact.coverageTitle}</h2>
          <p className="text-gray-600 text-center mb-10">{t.contact.coverageDesc}</p>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { val: '12', title: t.contact.stat1Title, desc: t.contact.stat1Desc },
              { val: '<2h', title: t.contact.stat2Title, desc: t.contact.stat2Desc },
              { val: '24/7', title: t.contact.stat3Title, desc: t.contact.stat3Desc },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-[#2D5016]">{stat.val}</div>
                <div className="font-medium text-gray-900 text-sm mt-1">{stat.title}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
