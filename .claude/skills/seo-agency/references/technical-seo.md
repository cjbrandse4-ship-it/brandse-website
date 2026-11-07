# Technical & on-page audit

Run in this order. Report each finding as: **issue · evidence · impact (High/Med/Low) · fix · who**. Don't report a problem you haven't verified.

## 1. Crawl and index
- robots.txt: no accidental blocks of pages, CSS/JS, or AI search bots (see `aeo.md`); sitemap referenced.
- XML sitemaps: only canonical, indexable, 200-status URLs; all languages included; submitted to Google Search Console **and** Bing Webmaster Tools.
- Search Console → Pages: read the reasons. "Crawled – currently not indexed" and "Duplicate without user-selected canonical" usually mean thin or near-duplicate pages.
- Staging/preview domains (`*.vercel.app`, `staging.`) must be `noindex` or password-protected.
- Important pages within 3 clicks of the homepage; no orphan pages.
- Redirects: single hop, 301, no chains or loops; old URLs from past migrations still redirect.

## 2. Canonicals, duplicates, international
- Self-referencing canonical on each indexable page; one protocol and host (HTTPS, www or not) with 301s; consistent trailing slashes.
- Parameter, filter and sort URLs canonicalized or blocked from crawling.
- **Multilingual:** `hreflang` on every translated page, listing itself, each translation and `x-default`, reciprocal in both directions, with region codes where relevant (`en-CA`, `fr-CA`). Translated slugs are better than `?lang=`. `<html lang>` matches the content. Translations written by a fluent speaker, not raw machine output.

## 3. Performance
Core Web Vitals (field data, 75th percentile): **LCP < 2.5 s, INP < 200 ms, CLS < 0.1.** Check Search Console's Core Web Vitals report and PageSpeed Insights.
Common fixes: properly sized and modern-format hero images with priority loading; defer third-party scripts (chat widgets, tag managers, ads); reserve space for images/embeds; self-host fonts; cache static assets on a CDN.
Framework notes: Next.js → static generation or server rendering for marketing pages, `next/image`, `next/font`, `next/script` with `afterInteractive`/`lazyOnload`. WordPress → limit plugins, use a caching plugin and a CDN, check theme bloat.

## 4. Rendering
Content and links must be in the server-rendered HTML. Content only visible after clicks, inside tabs loaded by JS, in iframes or in PDFs is crawled and extracted poorly, especially by AI crawlers that do not execute JavaScript.

## 5. On-page
- **Title:** unique; primary query first; ~50–60 characters; brand at the end; written natively per language.
- **Meta description:** unique; ~150–160 characters; offer + place + reason to act.
- **H1:** one per page, matching the page's main query. H2/H3 phrased as the questions the page answers.
- **First 100 words:** what, where, for whom, why trust it.
- **Internal links:** service ↔ location ↔ guide/cost pages; descriptive anchors; hub pages for clusters.
- **Images:** descriptive filenames and alt text (what + where), WebP/AVIF, lazy below the fold.
- **URLs:** short, lowercase, hyphenated, readable.
- **Keyword cannibalization:** two pages targeting the same query → merge, differentiate or canonicalize.

## 6. Structured data
- One `Organization`/`LocalBusiness` (or the most specific subtype) entity with a stable `@id`, `sameAs` links to every real profile, logo, contact; other nodes reference it by `@id` instead of repeating it.
- Use: `Service`, `Product`/`SoftwareApplication` + `Offer`, `FAQPage` (visible FAQs only), `Article`/`BlogPosting` with `author` and `dateModified`, `BreadcrumbList`, `VideoObject` for embedded videos.
- Validate with Google's Rich Results Test or Schema Markup Validator (render JavaScript). Raw `curl`/fetch output can miss JS-injected schema.
- See `compliance.md` for what's not allowed.

## 7. E-E-A-T and trust signals
Real author bylines with credentials and an author page; real photos of people and work; licences, insurance, certifications, years in business; physical contact details; privacy policy and terms; visible "last updated" dates that are truthful.

## 8. Content health
- Thin pages (little unique substance): improve, merge or remove.
- Outdated pages (prices, years, policies): refresh and update `dateModified`.
- Duplicate pages across languages or locations: see `compliance.md` (doorways).

## 9. After a traffic drop
1. Confirm the drop (Search Console, not just a tool estimate) and date it.
2. Compare with Google's Search Status Dashboard: core update, spam update, or neither.
3. Broad drop across many pages around a core update → quality/helpfulness problem; improve the content and wait for the next core update.
4. Sudden drop on specific pages or sections → technical change, indexing issue, manual action (check Search Console → Security & Manual actions), or spam-policy issue.
5. Check for site changes the same week (deploys, migrations, robots/noindex changes).
