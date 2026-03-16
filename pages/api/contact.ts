import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const CRM_URL = 'https://arbrecrm.com/api/public/lead-form';
const TENANT_SLUG = process.env.CRM_TENANT_SLUG || 'brandse';

// Direct email config (same Titan Mail SMTP as CRM)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.titan.email';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || SMTP_USER; // where to send notifications

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

  // 1) Forward to CRM
  const crmPromise = fetch(CRM_URL, {
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
  }).then(async (r) => {
    if (!r.ok) {
      const text = await r.text();
      console.error('[Contact] CRM error:', r.status, text);
      throw new Error(`CRM error: ${r.status}`);
    }
    console.log('[Contact] CRM forwarded OK');
  });

  // 2) Send direct email notification (always, as reliable backup)
  const emailPromise = sendDirectEmail({ name, email, phone, area, message });

  // Wait for both in parallel
  const [crmResult, emailResult] = await Promise.allSettled([crmPromise, emailPromise]);

  const crmOk = crmResult.status === 'fulfilled';
  const emailOk = emailResult.status === 'fulfilled';

  if (!crmOk && !emailOk) {
    return res.status(500).json({ error: 'Failed to send message. Please call or email us directly.' });
  }

  return res.status(200).json({ ok: true });
}

async function sendDirectEmail(data: { name: string; email: string; phone: string; area: string; message: string }) {
  if (!SMTP_USER || !SMTP_PASS || !NOTIFY_EMAIL) {
    console.warn('[Contact] SMTP not configured — skipping direct email');
    throw new Error('SMTP not configured');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Website Contact Form" <${SMTP_FROM}>`,
    to: NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form: ${data.name}${data.area ? ' — ' + data.area : ''}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;">
        <h2 style="color:#2D5016;margin-bottom:16px;">New Website Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:100px;">Name</td><td style="padding:8px 12px;">${data.name}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#555;">Email</td><td style="padding:8px 12px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px 12px;">${data.phone || '—'}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#555;">Area</td><td style="padding:8px 12px;">${data.area || '—'}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#f5f5f5;border-left:4px solid #2D5016;border-radius:4px;">
          <p style="margin:0;font-weight:bold;color:#555;margin-bottom:8px;">Message:</p>
          <p style="margin:0;white-space:pre-wrap;">${data.message}</p>
        </div>
        <p style="margin-top:24px;color:#999;font-size:12px;">Sent from servicedarbresbrandse.com contact form</p>
      </div>
    `,
  });
  console.log('[Contact] Direct email sent OK');
}
