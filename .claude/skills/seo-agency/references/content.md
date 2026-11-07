# Keyword research and content

## 1. Research
**Seed list** from the business, not a tool: services/products, customer questions from sales calls, emails, reviews and the CRM; competitor pages; Search Console queries already getting impressions.

**Expand** with a keyword tool (Semrush, Ahrefs, Google Keyword Planner), Google autocomplete, "People also ask", Reddit/forum threads, and AI engines themselves ("what would someone ask before hiring a ___?").

**Classify each keyword by intent:**
| Intent | Example | Page type |
|---|---|---|
| Transactional / local | "tree removal Kirkland", "buy X" | Service, location, product page |
| Commercial investigation | "best X for Y", "X vs Y", "X alternatives", "X cost" | Comparison, alternatives, pricing/cost guide |
| Informational | "how to…", "why is my…" | Guide, FAQ, checklist |
| Navigational | brand names | Homepage, brand pages |

**Map** one primary query per page (plus close variants). Two pages competing for one query = cannibalization; merge or split intent.

**Prioritize** by business value first, volume second. Low-volume, high-intent queries ("[service] cost in [city]") usually beat high-volume informational ones. AI answers absorb a lot of simple informational traffic, so value the queries where people still need to choose a provider.

## 2. Content strategy
- **Pillars and clusters:** a hub page per core topic (service/product) linking to supporting pages (cost, process, FAQs, locations, comparisons), all linking back.
- **Order of work:** money pages (services/products) → decision pages (cost, comparison, alternatives, reviews/case studies) → supporting guides → top-of-funnel education.
- **Refresh before you create:** updating a page with impressions and declining clicks often beats a new post.
- **Consolidate thin content:** several weak posts on one theme → one strong page with redirects.

## 3. What makes content win (people and AI)
- **Information gain:** something not already on the top 10 results — real prices, photos, data, a process only a practitioner knows, a local rule, a mistake customers make.
- **Experience:** first-person detail, real examples, named author with credentials.
- **Answer-first structure:** see `aeo.md` → Structure.
- **Evidence:** numbers with source and date; links to official sources.
- **Freshness:** truthful "last updated" date; review high-value pages quarterly.
- **Conversion:** every page has a clear next step suitable for its intent.

## 4. Writing rules
- Plain language, short sentences, specific nouns and numbers.
- Answer the question in the first sentence of each section.
- No filler intros ("In today's fast-paced world…"), no hype ("unparalleled", "cutting-edge"), no keyword repetition.
- Avoid tell-tale AI phrasing and tics (heavy em dash use, "delve", "it's important to note", "in conclusion"). A human expert must edit every AI-assisted draft and add first-hand facts.
- Write each language natively; don't publish raw machine translation.

## 5. Briefs
Use `templates/content-brief.md` for every new or rewritten page: target query and intent, the questions to answer (from PAA, AI fan-outs, sales calls), required facts/data, internal links, schema, CTA, and what will make it better than the current top results.

## 6. Video
Full playbook, including how videos earn real backlinks: `youtube.md`.
YouTube is heavily cited by Google's AI Overviews, and videos also rank in Google's video results.
- Title = the question or "[service] in [place]".
- Say the answer out loud in the first 15 seconds (transcripts get quoted).
- Description: summary, chapters, link to the matching page.
- Embed the video on the matching page with `VideoObject` schema.
- Short clips (under 60 s) work for Business Profile and Shorts; 3–8 minute explainers for questions.
