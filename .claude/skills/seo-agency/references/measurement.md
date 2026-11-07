# Measurement and reporting

## KPIs
| Business type | Primary | Supporting |
|---|---|---|
| Local service | Calls + form leads from organic and Business Profile | GBP calls/directions/clicks, review count & velocity, request coverage, map-pack positions, AI panel |
| SaaS / B2B | Demos/signups from organic and AI referrals | Comparison/use-case page rankings, AI panel, review-site reviews, referral mentions |
| E-commerce | Organic revenue | Category/product rankings, AI panel for "best X" prompts |
| Publisher | Organic sessions and engaged time | Indexed pages, AI Overview impressions, citations |

Always report outcomes (leads, revenue) before activity metrics (rankings, traffic).

## Tools and setup
- **Google Search Console:** Performance (queries, pages, countries), Pages (indexing), Core Web Vitals, Manual actions, and the generative AI performance report (AI Overviews/AI Mode impressions; data from mid-2026 onward, impressions rather than clicks).
- **GA4:** key events for calls, forms, bookings; the AI Assistant channel (added 2026) or a custom channel group for `chatgpt.com|chat.openai.com|perplexity.ai|claude.ai|gemini.google.com|copilot.microsoft.com`. Treat AI numbers as a floor: much AI traffic arrives as Direct. Google AI Overview/AI Mode clicks are counted in Organic Search.
- **Call tracking** for local businesses (tracking numbers with the main number as the GBP primary or additional number per Google's rules).
- **Business Profile Performance:** calls, directions, website clicks, searches.
- **Bing Webmaster Tools.**
- **Rank tracking** (Semrush/Ahrefs/local grid tools) for a fixed keyword set, by city for local.
- **CRM:** lead source on every lead; closed revenue by source.
- **Server/CDN logs** (optional): AI bot crawling.

## AI prompt panel
Template: `templates/prompt-panel.csv`.
- 10–20 prompts per client, fixed over time, across: category ("best X in Y"), cost, comparison/alternatives, problem ("my tree is leaning…"), local, and each language served.
- Engines: ChatGPT (search on), Google AI Mode, Google AI Overview (note whether one appears), Perplexity, Gemini/Copilot if relevant.
- Run each prompt 3 times per engine; record mentioned / cited / URL / competitors / sentiment.
- Score: share of prompts where the client is mentioned, and cited, per engine. Track month over month.

## Monthly report
Use `templates/monthly-report.md`. One page, plain language:
1. Headline number and why it moved.
2. Leads/revenue vs last month and last year.
3. Reviews (new, total, average, request coverage).
4. Search (top gains/losses, AI impressions).
5. AI panel score.
6. Work completed.
7. Next month's 3 priorities, each tied to a KPI.
8. Decisions needed from the client.
