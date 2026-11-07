# YouTube & video: rankings, AI citations and backlinks

## What YouTube does and doesn't do for SEO
- **Links on YouTube itself pass no ranking credit.** Links in descriptions, comments and channel pages are marked `nofollow`/`ugc` and routed through YouTube's redirect. They send visitors, not link equity. Anyone selling "high-DA YouTube backlinks" or "YouTube backlink generators" is selling nothing of SEO value.
- **Shorts links are not clickable** (descriptions and comments were delinked in August 2023). Use Shorts for reach and point people to a long-form video or the channel instead.
- **What YouTube does give you:**
  1. **AI citations.** YouTube is the most-cited domain in Google AI Overviews, mostly through transcripts.
  2. **Rankings in Google's video results** and on YouTube itself.
  3. **Referral traffic** from description and pinned-comment links on long-form videos.
  4. **Entity signals.** A channel linked in your `sameAs` schema and Business Profile reinforces who you are.
  5. **The raw material for real backlinks**, through the tactics below.

## Real backlinks from video: 8 tactics
A backlink only counts when **another website** links to **your website**. Each tactic turns a video into that.

1. **Make your own page the linkable asset.** For every important video, publish a page on your site: the embedded video, a full edited transcript or write-up, key facts and a table, `VideoObject` schema. People and journalists link to pages more than to videos, so give them a page to link to. Put that page's URL in the first line of the video description.
2. **Embed outreach with an attribution link.** Find pages that rank for the video's topic but have no video (how-to guides, local resource pages, association and supplier blogs). Offer the embed **plus** a one-line credit, e.g. "Video: [Brand] — full guide at [URL]". An embed alone links to YouTube, not to you. The credit line is the backlink.
3. **Reclaim links from existing embeds.** YouTube Studio → Analytics → Content → **Playback locations → "Embedded in external websites"** shows which sites already play your video. Ask each one for a credit link (they already value the video, so the yes rate is high). Also search the web for your brand and video titles to find unlinked mentions.
4. **Data and story videos for digital PR.** Original numbers (prices from real jobs, before/after measurements, survey results, storm-damage counts) packaged as a short video **plus** a write-up page. Pitch the page to journalists and bloggers with the video as the hook. News sites embed the video and link to the source page.
5. **Footage licensing for local news.** Storm cleanup, dramatic removals, crane lifts: offer footage to local TV and news sites free in exchange for an on-screen credit **and** a link in the online article.
6. **Collaborations, guest appearances and podcasts.** Appear on other channels, trade shows and podcasts that publish **show notes on their own website**. Those show-note links usually are normal followed links from relevant sites. Return the favour by featuring partners.
7. **Partner, supplier and association pages.** Equipment dealers, manufacturers, nurseries, software partners and trade associations often publish customer or member videos on their sites. Send them a video that features their product or programme and ask for a link with it.
8. **Resource-page inclusion.** Municipal, utility, association and school pages that list "helpful resources" (e.g. "how tree permits work in [city]"). A clear, non-salesy explainer video plus a page on your site earns those listings.

## Set up the channel to support all of this
- **Channel links:** website and Business Profile in the channel's links section; channel URL in the website footer and in the Organization `sameAs` schema.
- **Description template:**
  - Line 1: one-sentence answer + the matching page URL (with UTM: `utm_source=youtube&utm_medium=video&utm_campaign=<video-slug>`).
  - Then: summary, chapters (timestamps), 3–5 relevant links at most, contact line.
- **Pinned comment** with the page link on long-form videos (full `https://` URL).
- **Cards and end screens** to the website need YouTube Partner Program eligibility and a verified associated website; check current requirements in YouTube Help.
- **Title** = the question or "[service] in [place]". **Say the answer in the first 15 seconds** (transcripts get quoted by AI).
- Upload accurate captions (edit the auto-captions; names, places and numbers are often wrong). Add both languages for bilingual markets.
- Thumbnails and chapters for click-through; playlists by service and by city.

## Get the video itself indexed on your site
- The page should be the video's main purpose (a page where the video is an afterthought often isn't indexed as a video page).
- `VideoObject` schema: `name`, `thumbnailUrl`, `uploadDate` required; add `description`, `embedUrl`, `duration`. Only on pages where the video is actually embedded.
- Key moments: chapters in the YouTube description, or `Clip` / `SeekToAction` markup on your own page.
- Check Search Console → **Video indexing** report.
- Verify markup rules on Google's video structured data documentation before relying on details.

## Avoid
- Buying views, subscribers or "backlink packages".
- Spamming links in other channels' comments (nofollow anyway, and it gets channels flagged).
- Stuffing descriptions with dozens of links or keywords.
- Reuploading other people's footage.

## Measure
- **GA4:** sessions and conversions from `utm_source=youtube`.
- **YouTube Analytics:** external playback locations (embedders to contact), traffic sources, search terms.
- **Search Console:** Links report (new referring domains linking to video pages), Video indexing.
- **AI prompt panel:** note when an AI answer cites one of your videos.
- **Outreach log:** every embed/credit request, date, status, resulting URL (see `links-and-pr.md`).
