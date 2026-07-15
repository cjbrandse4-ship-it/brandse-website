import { siteConfig } from './seo';

// ──────────────────────────────────────────────────────────────────────────
// Unified lead tracking
// ──────────────────────────────────────────────────────────────────────────
// Every lead surface (contact form, free-estimate form, and phone-number
// taps) routes through trackLead() so GA4 sees one consistent event. Mark
// `generate_lead` as a Key Event in GA4 Admin, and register `source` +
// `method` as custom dimensions to segment contact vs. free-estimate and
// form vs. phone.
//
// Ads note: we fire the Google Ads conversion ONLY for form submissions,
// using the shared label below. Phone taps pass adsLabel=null on purpose —
// Google already tracks calls via its hosted "Calls from ads" / "Clicks to
// call" actions, so firing an Ads conversion here too would double-count in
// bidding. Do NOT add a phone Ads label without first retiring those.

const GADS_ID = siteConfig.gads; // 'AW-16516759047'

// Shared Google Ads conversion label for form submissions. Per-surface labels
// (contact vs. free-estimate) can replace this later for cleaner attribution.
export const FORM_CONVERSION_LABEL = 'mXt_CJjNyaMZEIf85sM9';

type LeadMethod = 'form' | 'phone';

interface LeadOptions {
  source: string;             // 'contact' | 'free-estimate' | 'phone'
  method: LeadMethod;
  adsLabel?: string | null;   // Google Ads conversion label; null = GA4 only
  extra?: Record<string, unknown>;
}

export function trackLead({ source, method, adsLabel = null, extra = {} }: LeadOptions) {
  if (typeof window === 'undefined') return;
  const gtag = (window as any).gtag;
  if (!gtag) return;

  // GA4 standard lead event — no monetary value, just a counted lead.
  gtag('event', 'generate_lead', { source, method, ...extra });

  // Google Ads conversion (form submissions only). Parallel to GA4, for bidding.
  if (adsLabel) {
    gtag('event', 'conversion', { send_to: `${GADS_ID}/${adsLabel}` });
  }
}
