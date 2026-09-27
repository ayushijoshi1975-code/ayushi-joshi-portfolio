# Project Memory — Ayushi Portfolio

Snapshot date: 2026-09-06

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
