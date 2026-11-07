# Compliance — rules that protect the client

Breaking these risks review removal, Business Profile suspension, manual actions, spam demotion or legal exposure. When a client asks for any of them, explain the risk and offer the compliant alternative. Verify the current policy text on Google's own help pages before quoting it to a client; policies were tightened several times in 2024–2026.

## Reviews (Google Business Profile, Maps)
**Allowed:** asking every customer for a review, the same way, at the same point (e.g. job completion); a direct link to the review form; replying to all reviews.

**Prohibited:**
- **Review gating** — asking for a private rating first and only sending happy customers to Google, or any filtering/steering by satisfaction. This includes software that shows the Google link only after a 4–5 star internal rating.
- Incentives of any kind (discounts, draws, gifts) for reviews.
- Reviews from owners, staff, family, or bought/exchanged reviews.
- Staff review quotas and asking customers to name a specific employee (explicitly added in the April 2026 update).
- On-site review stations, shared tablets or kiosks.
- Asking for a particular star rating or for positive reviews only.

**United States:** the FTC rule on consumer reviews (effective 2024) also bans fake reviews, buying reviews and review suppression; civil penalties apply. Software vendors that build review flows for US customers must not build gating into the product.

**Audit check:** read the client's (and their software's) review request flow end to end. If the public-review link depends on the rating, flag it as a top-priority fix.

## Business Profile
- Business name = the real-world name used on signage, documents and the website. No added keywords or cities.
- Service-area businesses hide their address; never use a virtual office, PO box or a co-working desk as a fake location.
- One profile per real location. Categories only for what the business really does.

## Location / city pages (doorway policy)
Google lists multiple region- or city-targeted pages that funnel users to one destination as doorway abuse. Each location page needs its own real substance (work done there, local photos, local rules, local FAQs). Never clone a page and swap the city name. Fewer strong pages beat many thin ones.

## Content at scale
Google's scaled content abuse policy targets pages produced in bulk mainly to rank, whether by AI, templates or people. AI-assisted drafting is fine when a knowledgeable person edits, adds first-hand facts, and stands behind it with a real byline. Don't publish anything you couldn't defend as useful to a reader.

## Links
No buying or selling links that pass ranking credit (use `rel="sponsored"` for paid placements), no private blog networks, no excessive link exchanges, no expired-domain redirects to borrow authority, no hosting third-party content on the client's domain to exploit its reputation (site reputation abuse).

## Structured data
- No `AggregateRating`/`Review` markup for the business's own entity using its own reviews (self-serving; not eligible).
- Markup must describe content visible on the page (no FAQ schema for hidden FAQs).
- No fake prices, fake authors, fake dates.

## AI search manipulation
Google said in 2026 that its spam policies apply to attempts to manipulate AI Overviews and AI Mode. Hidden text for AI crawlers, prompt-injection text, fake "best of" lists that rank only yourself, and mass self-promotional posts on forums are out.

## Privacy and data
- Publishing statistics drawn from customer data requires aggregation, anonymization and the right under the client's terms. Never publish a single customer's numbers without their written permission.
- Case studies and named testimonials need written consent.
- Don't put customer personal data in prompts, reports or public repos.
