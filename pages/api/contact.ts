import type { NextApiRequest, NextApiResponse } from 'next';

const CRM_URL = 'https://arbrecrm.com/api/public/lead-form';
const TENANT_SLUG = process.env.CRM_TENANT_SLUG || 'service-d-arbres-brandse-inc';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, area, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Split name into first/last
  const parts = name.trim().split(/\s+/);
  const firstName = parts[0] || name;
  const lastName = parts.slice(1).join(' ') || '-';

  try {
    const crmRes = await fetch(CRM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tenantSlug: TENANT_SLUG,
        firstName,
        lastName,
        email,
        phone: phone || '',
        serviceType: area || '',
        message,
      }),
    });

    if (!crmRes.ok) {
      const text = await crmRes.text();
      console.error('[Contact] CRM error:', crmRes.status, text);
      // Still return success to the user — we don't want them to see an error
    }
  } catch (err) {
    console.error('[Contact] Failed to forward to CRM:', err);
  }

  return res.status(200).json({ ok: true });
}
