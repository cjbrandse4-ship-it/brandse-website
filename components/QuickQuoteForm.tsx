import { useState, useRef, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight, Clock, Phone, XCircle } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { trackLead, FORM_CONVERSION_LABEL } from '../lib/analytics';
import { useActivePromotion } from '../lib/usePromotion';
import { SERVICE_OPTIONS, SERVICE_AREAS, ServiceValue, isValidCanadianPhone, quoteFormCopy } from '../lib/quoteForm';

// Compact quote form near the top of each service page — the pages Google Ads
// sends people to — so a visitor can ask for a quote without leaving the page.
// Sends the same payload and fires the same lead tracking as the full form on
// /free-estimate. `source` tags the lead (CRM message + GA4 event).
export default function QuickQuoteForm({ service, source }: { service: ServiceValue; source: string }) {
  const router = useRouter();
  const { lang } = useLanguage();
  const c = quoteFormCopy[lang];
  const isFr = lang === 'fr';

  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', service: service as string });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; city?: string; service?: string }>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  // Bot trap (see pages/api/contact.ts): hidden field + how long the form was open.
  const [trap, setTrap] = useState('');
  const openedAt = useRef(0);
  useEffect(() => { openedAt.current = Date.now(); }, []);
  const activePromo = useActivePromotion(lang);

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = c.nameRequired;
    if (!form.email.trim()) next.email = c.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = c.emailInvalid;
    if (!form.phone.trim() || !isValidCanadianPhone(form.phone)) next.phone = c.phoneInvalid;
    if (!form.city) next.city = c.cityRequired;
    if (!form.service) next.service = c.serviceRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setFailed(false);
    try {
      const serviceLabel = SERVICE_OPTIONS.find(s => s.value === form.service)?.[lang] || form.service;
      const composedMessage = [
        `Service: ${serviceLabel}`,
        `Source: ${source}-page`,
        activePromo ? `Promo: ${activePromo.promo.code}` : '',
      ].filter(Boolean).join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          area: form.city,
          message: composedMessage,
          hp: trap,
          ms: Date.now() - openedAt.current,
        }),
      });
      if (!res.ok) throw new Error();
      trackLead({
        source,
        method: 'form',
        adsLabel: FORM_CONVERSION_LABEL,
        extra: {
          service: form.service,
          city: form.city,
          ...(activePromo ? { promo: activePromo.promo.code } : {}),
        },
      });
      router.push(isFr ? '/fr/merci' : '/thank-you');
    } catch {
      setFailed(true);
      setSending(false);
    }
  }

  // Clear inline error on the field when user starts typing/changing.
  function clearError(field: keyof typeof errors) {
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  return (
    <section id="quote" className="py-14 bg-gray-50 border-b border-gray-100 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{c.formTitle}</h2>
          <p className="text-gray-600 mb-6">{c.formIntro}</p>

          {failed && (
            <div className="mb-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
              <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800 text-sm">{c.errorTitle}</p>
                <p className="text-red-700 text-sm">{c.errorDesc}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Bot trap: off-screen and hidden from screen readers; real visitors never fill it. */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label>Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={trap}
                  onChange={(e) => setTrap(e.target.value)} />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label={c.nameLabel} error={errors.name}>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); clearError('name'); }}
                  placeholder={c.namePlaceholder}
                  className={inputClasses(!!errors.name)}
                />
              </FormField>
              <FormField label={c.phoneLabel} error={errors.phone}>
                <input
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); clearError('phone'); }}
                  placeholder={c.phonePlaceholder}
                  className={inputClasses(!!errors.phone)}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label={c.emailLabel} error={errors.email}>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); clearError('email'); }}
                  placeholder={c.emailPlaceholder}
                  className={inputClasses(!!errors.email)}
                />
              </FormField>
              <FormField label={c.cityLabel} error={errors.city}>
                <select
                  required
                  value={form.city}
                  onChange={(e) => { setForm({ ...form, city: e.target.value }); clearError('city'); }}
                  className={inputClasses(!!errors.city)}
                >
                  <option value="">{c.cityPlaceholder}</option>
                  {SERVICE_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </FormField>
            </div>

            <FormField label={c.serviceLabel} error={errors.service}>
              <select
                required
                value={form.service}
                onChange={(e) => { setForm({ ...form, service: e.target.value }); clearError('service'); }}
                className={inputClasses(!!errors.service)}
              >
                <option value="">{c.servicePlaceholder}</option>
                {SERVICE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o[lang]}</option>)}
              </select>
            </FormField>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex flex-col items-center justify-center gap-0.5 px-6 py-3.5 bg-[#2D5016] text-white rounded-lg font-bold hover:bg-[#3a6b1d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[60px]"
            >
              {sending ? (
                <span className="text-lg">{c.submitting}</span>
              ) : (
                <>
                  <span className="text-lg inline-flex items-center gap-2">{c.submit} <ArrowRight className="w-5 h-5" /></span>
                  <span className="text-xs font-medium opacity-90">{c.submitPromise}</span>
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5" /> {c.callbackPromise}
            </p>

            <p className="text-[11px] leading-snug text-gray-500 text-center">
              {c.consent}{' '}
              <Link href={isFr ? '/fr/privacy-policy' : '/privacy-policy'} className="underline hover:text-gray-700">
                {c.consentLink}
              </Link>.
            </p>
          </form>

          <div className="mt-4 pt-4 border-t border-gray-100 text-center text-sm">
            <span className="text-gray-600">{c.orCall} </span>
            <a href="tel:4383655410" className="inline-flex items-center gap-1 font-semibold text-[#2D5016] hover:underline">
              <Phone className="w-4 h-4" />(438) 365-5410
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return [
    'w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent',
    'border',
    hasError ? 'border-red-400' : 'border-gray-300',
    'min-h-[48px]',
  ].join(' ');
}
