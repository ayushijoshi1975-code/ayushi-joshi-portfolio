# Project Memory — Ayushi Portfolio

Snapshot date: 2026-09-28 (second pass)

## Language switch, keyword pass, contact form, CV refresh — September 28 (second pass)

- Language control changed from a single EN/FR toggle button to two explicit buttons (`data-lang="en"`/`"fr"` inside `.language-switch`), per Ayushi's request. `script.js` now selects `[data-lang]` and sets `aria-current` on the matching button instead of swapping one button's label.
- Both CV PDFs were stale and have been replaced. They previously used a completely different template/content (no Snap Engineering, Form Folly, Dily, current Plombier dates) and the FR one was not even a real French CV. Fresh ones were generated from Ayushi's own CV tooling at `/Users/neerajoshi/Desktop/mycareer/build-cv-onepage.mjs` (the "career-ops" repo referenced in the prior session): `node build-cv-onepage.mjs en|fr` then `node generate-pdf.mjs output/cv-onepage-<lang>.html output/Ayushi_Joshi_CV_<LANG>_fresh.pdf --format=a4` (must use `--format=a4`, not the default `letter`, or the EN build spills a few lines onto a second page). Output copied into this project's `assets/`. If the CV needs updating again, regenerate the same way rather than hand-editing the PDF — the master EN/FR data lives in that script's `EN`/`FR` objects (lines ~35-167), not in this repo.
- Em dashes removed from all visible copy. "Company — Tagline" patterns became "Company: Tagline"; date ranges ("Feb 2026 —") became plain hyphens ("Feb 2026 -"). While doing this, fixed three pre-existing bugs where Didomi/Plombier/Convosight's `project-title` spans and all six dialog `<h2>` titles had no `data-fr`, so they silently stayed in English in French mode — now translated.
- Removed all "open to CDI" / "selective freelance" availability language (hero point 2, contact section) per explicit instruction — the site no longer states availability/contract-type preferences anywhere.
- Hero rewritten for growth/performance-marketing keyword density: H1 is now "Growth & Performance Marketer" (was "Product & Growth Marketer"); one hero point is dedicated to AI marketing automation + AEO/GEO/AIO visibility ("two websites ranked #1 on Google, including inside AI-generated answers"). Keyword pass also touched the expertise band, profile bio, and meta title/description.
- New contact section (`#contact`) replaces the old CDI-first block: a real `<form id="contact-form">` (Name/Email/Message) that builds a `mailto:` link with prefilled subject/body on submit (no backend — this is a static site, per AGENTS.md), a prominent Calendly "Book a call" button (`https://calendly.com/ayushi-joshi1975/introduction-meeting-1?utm_source=schedule_from_linkedin`), plus email/LinkedIn/phone/location. Old `.contact-main/.contact-primary/.contact-details` CSS removed; new `.contact-header/.contact-grid/.contact-form/.contact-side` added.
- Snap Engineering case rewritten in first person per Ayushi's correction: she personally runs their Google Ads and Meta Ads and personally took organic search to #1 (previously read as if the site "reached" #1 passively, without crediting the paid-ads work).
- Form Folly case rewritten to explicitly enumerate every task done singlehandedly: naming the brand, visual identity/logo design, product catalogue, Shopify storefront + pricing, blog/content engine, and social media marketing — all solo, start to finish.
- Local git history from the first pass (`5357d70` etc.) is intact in this repo; this pass is commit `9ae3941`.

## Reorder, new case studies and public hosting — September 28

- Published to GitHub Pages: https://ayushijoshi1975-code.github.io/ayushi-joshi-portfolio/ (repo `ayushijoshi1975-code/ayushi-joshi-portfolio`, public, served from `main` via the legacy Pages build). Any push to `main` redeploys within about a minute. Local git history from the September 6 session was not carried over (that repo was not in this handoff copy); this repo starts fresh at commit `5357d70`.
- Featured work now leads with the current freelance clients, per Ayushi's explicit instruction: **Snap Engineering, Form Folly, Dily** (in that order — Snap and Form Folly are two brands of the same US client group; Dily is a separate France-based client). Didomi, Plombier 16 and Convosight moved to a new "More case studies" secondary grid directly below, keeping their existing dialogs, images and Drive links untouched.
- New case dialogs added: `case-snap`, `case-formfolly`, `case-dily`. Content sourced from the CV (`Ayushi_Joshi_CV_EN.pdf`) and from `/Users/neerajoshi/Desktop/mycareer/build-cv-onepage.mjs` (Ayushi's separate job-application repo, referred to as "career-ops" — it holds the vetted bilingual EN/FR CV bullet copy this session reused for accuracy; it does not contain additional case-study narrative beyond the CV).
- New cover art, grounded in real source material (no fabricated screenshots):
  - `assets/work-snap.webp` — Snap Engineering's own live hero photo (downloaded from snapengineering.io), with `assets/snap-wordmark.svg` (their real logo, downloaded from the same site) overlaid via the new `.cover-badge` CSS treatment.
  - `assets/work-formfolly.png` — the real `formfolly-social-share-1200x628.png` asset from the client's Drive folder (already carries the Form Folly logo).
  - Dily has no public site yet (pre-launch); its card uses a text-only `.project-cover-text` treatment (navy gradient, "DILY" wordmark, "350–400 companies reached/month" stat) rather than an invented screenshot.
  - New CSS added near the end of `assets/styles.css`: `.project-cover`, `.cover-badge`, `.project-cover-text`, `.cover-eyebrow/.cover-headline/.cover-stat`, `.more-work-heading/.more-work-grid`, `.career-subs`.
- Experience timeline rebuilt to match the current CV: current role is now **Marketing & Growth Consultant (Freelance), Feb 2026–Present**, with Snap Engineering / Form Folly / Dily as sub-items (buttons opening their dialogs, class `.career-subs`) under it. Plombier 16 is now a past role (May–Aug 2026, ended), not "current" — the `current-indicator` moved to the Freelance row.
- Expertise band evidence links refreshed: "Position & GTM" now points to Form Folly (0-to-1 launch) and "Acquire" now points to Snap Engineering (#1 organic ranking), replacing Didomi/Plombier there; "Measure & improve" still points to WEMOOVE (unchanged, strongest quantified conversion-lift proof).
- Archive list: removed the old "Form Folly" and "Snap Engineering" rows (now full featured cases, would be duplicates); added **Publicis France** (automation proposal) and **Sonepar** (AI growth strategy), both found in the "Business Consulting" Drive subfolder, both dated 2026-09-25 — the two newest consulting samples in the source Drive at the time of this session. The Dily.pro pre-launch audit PDF link moved from the archive into the new Dily dialog as a secondary link.
- Source-of-truth Drive folder is public/view-only without sign-in: https://drive.google.com/drive/folders/1aeCvpgu6hx4w1sfvau4HrA9kHy4XatlQ, with subfolders Brand Collaborations, Business Consulting, Case Studies/Projects, Email Marketing Results, Form Folly. Only a subset of files there are linked from the site; the rest (e.g. individual brand-collab decks like Pillsbury, Nerolac, Johnson, Atrevia) were not added to keep the archive scannable — pull further file IDs the same way if Ayushi wants more added (open the file in Drive, read `iframe[src*=drivesharing/clientmodel]` or an image's `lh3.googleusercontent.com/.../d/<ID>=...` src via JS to get the real Drive file ID, then use `drive.google.com/file/d/<ID>/view`).
- Not done: no custom domain configured (using the default `github.io` URL); no favicon beyond the browser default; the old September 6 audit/QA evidence in `audit/` was left as historical record and not refreshed for this pass since the locked hero/Featured-work visuals it documents were not touched.

## Current design and handoff — September 6

- Local Git repository initialized in this directory. Baseline commit `05c9587` preserves all 43 existing files before this exploration. No remote or deployment was created.
- User is satisfied with the hero and Featured work. Preserve them, especially the outlined portrait and readable Didomi cover.
- User requested ImageGen suggestions for What I bring and everything below it. Earlier expertise-only ideas were not selected.
- Re-read project instructions, source, and handoff; restarted local preview and visually inspected expertise, experience, About/recommendations, and contact in the in-app browser.
- Problems observed: tall generic capability boxes, repeated introductory copy, lengthy timeline paragraphs, cramped About headline, oversized generic contact slogan.
- Three new lower-page mockups are saved in `audit/concepts-2026-09-06/`: `01-editorial-proof.png`, `02-working-portfolio.png`, `03-recruiter-edit.png`.
- The user selected `03-recruiter-edit.png`; its direction is now implemented and verified locally.
- Direction 2's document composition is illustrative, not authentic source-document evidence. If selected, ground any deployed artifact artwork in actual source deliverables.
- Generated images may deviate from specified dimensions, font choices and portrait fidelity. Implementation must use original portrait assets, actual fonts, accurate copy, EN/FR behavior, responsive layouts and new QA.

## Selected direction 3 — implemented September 6

- New lower-page markup in `index.html`; scoped CSS near the end of `assets/styles.css`. Existing header/hero/proof/Featured work/archive markup matches baseline `05c9587` exactly.
- Original `profile.webp` is reused in the yellow profile panel. No generated face, document artwork, or extra imagery was introduced.
- Capabilities link to existing Didomi/Plombier dialogs and the WEMOOVE experience anchor. The experience list is compact, with full details still available in the CVs and existing case dialogs.
- Native dialogues, archive, mobile menu, EN/FR persistence, translated CV selection, navigation and contact links retained. Date ranges have separate translated leaf spans for predictable wrapping.
- QA evidence: `audit/23-mobile-fr-expertise.png` through `audit/30-desktop-fr-career.png`; comparison `audit/28-lower-comparison.html` and `audit/29-lower-side-by-side.png`.
- Check current `design-qa.md` for actual checks and residual limits; do not infer external Drive/LinkedIn access or exhaustive browser testing.
- Local baseline remains `05c9587`. No deployment performed.

## Current outcome

The portfolio has been rebuilt in place as a responsive static one-page site for French CDI recruiters, while retaining selective freelance positioning. The visual system follows the approved full-page mockup and is intentionally concise, image-led, and less text-heavy than the earlier version.

The verified local preview is `http://127.0.0.1:4173/` when the local server is running.

## Current page structure

1. Sticky header: Work, Experience, About, EN/FR, Contact.
2. Hero: “Product & Growth Marketer,” positioning line, concise proof points, outlined portrait, strategy/dashboard quote, selected-work CTA, and CV download.
3. Proof strip: Convosight revenue growth, WEMOOVE MQL conversion, and LinkedIn recommendations.
4. Featured work: Didomi, Plombier 16, and Convosight image-led cards.
5. Collapsed secondary-work archive with 13 links.
6. Compact navy expertise band: Position & GTM, Acquire, Measure & Improve, each linked to supporting work or evidence.
7. Yellow profile panel beside a compact experience list: current Plombier 16 role, WEMOOVE, Convosight, Gowardhan.
8. Two verified recommendation excerpts and LinkedIn recommendation link.
9. Navy CDI-first contact/footer block with freelance availability secondary.

## Latest user corrections

- The Didomi thumbnail needed to communicate the project without zooming. It was replaced by `assets/work-didomi-v2.png`, a headline-first cover reading:
  - `DIDOMI`
  - `Signal-led GTM`
  - `Positioning + 9-day outreach sequence`
- The user explicitly prefers the white outline around Ayushi's hero cutout. The site now uses `assets/hero.webp`. Do not switch back to the halo-free portrait unless the user asks.

## Assets and provenance

- `assets/hero.webp`: user-approved outlined portrait already present in the project.
- `assets/profile.webp`: About portrait.
- `assets/work-didomi-v2.png`: generated with built-in ImageGen using the old Didomi document as content reference and Convosight as the readability/style reference.
- `assets/work-plombier.png`: generated project cover.
- `assets/work-convosight.png`: generated project cover.
- `assets/hero-portrait-v2.png` and `assets/work-didomi.png` are retained as earlier source/variant assets but are not currently referenced.

## Important content facts

- Hero role: `Product & Growth Marketer`.
- Positioning: `I connect positioning, GTM and paid acquisition.`
- Quote: `Marketing has two native languages: strategy and the dashboard. I speak both.`
- Current role: Plombier 16 Group, since May 2026.
- WEMOOVE: Oct 2025–Jan 2026.
- Convosight: Nov 2021–Sep 2024.
- Gowardhan: May 2020–Oct 2021.
- Education shown: MBA from Audencia. Undergraduate education remains intentionally omitted.
- Languages shown: English, French, Hindi.

## Interaction state

- Language preference is stored locally under `ayushi-language`.
- The main CV link changes with the selected language.
- Featured cases use native dialogs: `case-didomi`, `case-plombier`, and `case-convosight`.
- The archive is collapsed by default.
- The mobile menu appears at 900px and below.
- `#top` belongs to the body, not the sticky header, so back-to-top works correctly.

## QA state

- `design-qa.md` ends with `final result: passed` for the selected lower-page design.
- Lower-page evidence: `audit/23-mobile-fr-expertise.png` through `audit/30-desktop-fr-career.png`.
- Side-by-side selected concept / implementation evidence: `audit/28-lower-comparison.html` and `audit/29-lower-side-by-side.png`.
- Latest checks covered desktop (1440 × 1024), tablet (1024 × 768), mobile (390 × 844), EN/FR preference persistence, dialogs, archive, navigation, CV links, overflow, missing assets and console messages.

## Current local state

- Current implementation commit: `c973f3e` — `Implement selected compact lower-page portfolio design`.
- Safe rollback checkpoint: `05c9587` — `Checkpoint existing Ayushi portfolio before lower-page redesign`.
- No deployment or remote repository was created.

## Likely next work

- Content refinements requested by Ayushi or recruiters.
- Further crop/scale tuning of the outlined portrait if requested.
- Publishing only after an explicit deployment request.
