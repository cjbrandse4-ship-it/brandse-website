# AEO / GEO — getting cited and recommended by AI

## How each engine selects sources (2026)
| Engine | Where candidates come from | What gets chosen |
|---|---|---|
| **Google AI Overviews / AI Mode** | Google's index; for local intent mostly Maps/Business Profile data (≈80% of AI Mode local citations in one Aug 2026 study) | Pages that already rank, clear passages, complete profiles, reviews. YouTube is the most-cited domain in AI Overviews |
| **ChatGPT (search)** | Web search with **query fan-out**: one prompt → several sub-queries (≈7 on average in logged-in tests; far fewer when logged out), often `site:` searches on official domains; results fused across sub-queries (reciprocal-rank style) | Pages whose title/URL/headings match the sub-queries; the original source of a fact over summaries; content that appears for several sub-queries; third-party lists, directories and reviews |
| **Perplexity** | Live web search, always cites | Authoritative, recent, well-structured pages |
| **Gemini** | Google index + Knowledge Graph | Clear entities: consistent name, `sameAs`, Business Profile, Wikipedia/Wikidata where applicable |
| **Copilot** | Bing index | Bing Places, Bing indexing (submit sitemaps in Bing Webmaster Tools; IndexNow helps) |
| **Claude** | Web search when enabled | Same fundamentals |

Google's official guidance: no extra requirements for AI features; a page must be indexed and eligible to appear in Search. Site owners can now see AI Overview/AI Mode impressions in Search Console. Google treats attempts to manipulate AI answers as spam.

## The three pillars
### 1. Structure — make passages extractable
- One question per section, heading phrased the way people ask it.
- Direct answer in the first 40–60 words of the section, then supporting detail.
- Tables for comparisons, prices and specs; numbered steps for processes; FAQ blocks for long-tail questions.
- Every paragraph must make sense quoted alone (name the subject; avoid "this", "it" referring to earlier sections).
- Cover the likely fan-out sub-queries on the page: cost, how long, permits/rules, risks, alternatives, "vs", "near [place]", "for [audience]".
- Keep important content in server-rendered HTML, not behind tabs, accordions loaded by JS, PDFs or forms.

### 2. Authority — make it worth citing
Princeton GEO study (KDD 2024): adding citations to sources (≈+40%), statistics (≈+37%) and expert quotations (≈+30%) increased visibility in generative answers; keyword stuffing reduced it (≈−10%).
- Original numbers with date and sample size.
- Named author with real credentials; first-hand experience visible (photos, specific details only a practitioner knows).
- Link out to official/primary sources.
- Truthful "last updated" dates; refresh competitive pages at least quarterly.

### 3. Presence — be where AI looks
Brands are cited far more often through third-party pages than their own site.
- Directories and review platforms for the vertical.
- "Best X" lists, roundups, comparison articles (a major share of service-business and software citations).
- YouTube videos with clear titles and spoken answers (transcripts are cited).
- Reddit and niche forums: genuine, disclosed, helpful participation.
- News, trade publications, podcasts.
- Wikipedia/Wikidata only when the entity is genuinely notable; never self-promote there.

## Technical access
Allow the AI search and user-agent bots in robots.txt unless the client chooses otherwise:
`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`, `Bingbot`, `Applebot`.
Training crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`) are a separate business decision: blocking them limits training use, not necessarily citation. Explain the trade-off; don't decide for the client.
`llms.txt` is harmless; there's no evidence it affects citations. Low priority.

## AI visibility audit
1. Build a prompt panel (`templates/prompt-panel.csv`): 10–20 prompts per client across category, comparison, cost, local and problem queries, in every language served.
2. Run each prompt 3 times per engine (answers vary). Record: mentioned? cited? which URL? competitors named? sentiment?
3. For prompts where competitors win, open the sources the engine cited. Ask: are they third-party lists, directories, reviews, a better-structured page, fresher data?
4. Plan fixes per gap: content structure, original data, third-party placements, profile completeness.
5. Re-run monthly with the same prompts.

## Writing for answers (checklist)
- [ ] Heading = the question.
- [ ] First sentence answers it, with a number where possible.
- [ ] Source or date for every statistic.
- [ ] Table or list where it helps.
- [ ] Named author, last updated date.
- [ ] Internal link to the service/product page that converts.
- [ ] No filler, no keyword repetition, no hype adjectives.
