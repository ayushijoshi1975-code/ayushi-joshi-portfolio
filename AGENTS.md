# Ayushi Portfolio — Agent Handoff

These instructions apply to this entire project.

## Project shape

- This is a static, single-page portfolio. Keep the existing HTML/CSS/JS architecture.
- Do not introduce a framework, package manager, build step, backend, route, or public API unless the user explicitly requests one.
- Main files: `index.html`, `assets/styles.css`, and `assets/script.js`.
- Preview locally with `python -m http.server 4173 --bind 127.0.0.1` from this directory.

## Design direction

- Treat `audit/17-approved-visual-target.png` as the top-page desktop direction. Below Featured work, the user selected `audit/concepts-2026-09-06/03-recruiter-edit.png`; the implementation uses compact expertise, an integrated yellow profile/experience layout, short recommendations and a navy contact/footer.
- Preserve the restrained Archivo/Figtree system, 1344px desktop content width, 24px radii, deep navy, warm yellow, lime, white, and light borders.
- Keep the page image-led and concise. Avoid dense card copy, unnecessary badges, generic service inventories, decorative card grids, logo marquees, process grids, and carousels.
- Use Phosphor icons. Do not reintroduce inline SVG or CSS-drawn icons.
- Keep the current three featured projects balanced and equally prominent.

## Locked visual decisions

- Keep Ayushi's white cutout outline in the hero. The active asset is `assets/hero.webp`.
- Keep the Didomi cover immediately readable at card size. The active asset is `assets/work-didomi-v2.png` with the headline “Signal-led GTM” and support line “Positioning + 9-day outreach sequence.” Do not replace it with a document screenshot or tiny copy.
- Current featured assets are `assets/work-didomi-v2.png`, `assets/work-plombier.png`, and `assets/work-convosight.png`.
- The accurate proof labels are:
  - `23% revenue growth — Convosight`
  - `+18% MQL conversion — WEMOOVE`
  - `13 LinkedIn recommendations`

## Content and behavior

- French recruiters and CDI roles are the primary audience. Selective freelance availability stays secondary.
- Preserve EN/FR support and local language persistence.
- English remains the source text. French translations use `data-fr` on leaf nodes only; never nest one `data-fr` element inside another.
- Accessible-label translations use `data-fr-aria`.
- The primary CV link must switch between `assets/Ayushi_Joshi_CV_EN.pdf` and `assets/Ayushi_Joshi_CV_FR.pdf`.
- Featured cards use `data-case` and open matching native `<dialog>` elements.
- Keep the work archive collapsed by default and synchronize `hidden` with `aria-expanded`.
- Preserve dialog close, backdrop close, native cancel/Escape behavior, and focus return.
- Preserve the mobile menu, keyboard focus styles, reduced-motion behavior, and zero-horizontal-overflow layouts.

## Source links and scope

- Keep the existing Didomi and Plombier Drive source links unless replacements are supplied.
- Convosight uses the in-page summary and LinkedIn context because no public case document is stored locally.
- Keep undergraduate education omitted until the LinkedIn/CV discrepancy is reconciled.
- Do not publish or deploy unless explicitly requested.

## Validation before handoff

- Test locally at 1440 × 1024, 1024 × 768, and 390 × 844.
- Verify EN/FR switching and persistence, navigation, mobile menu, archive, all dialogs, focus return, CV downloads, email/phone links, and external project links.
- Check for missing assets, browser console errors, broken anchors, unnamed controls, nested `data-fr` nodes, and horizontal overflow.
- If the visual design changes, refresh the relevant files in `audit/` and update `design-qa.md`.
- Do not claim completion while `design-qa.md` has open P0, P1, or P2 issues. Its final line must remain `final result: passed` only after verification.

## Preserve user work

- Treat existing assets, copy, links, and audit evidence as user-owned.
- Make scoped changes and do not delete earlier source assets merely because a newer version is active.

## Handoff package

- `SEND_TO_AYUSHI.md` is the short recipient-facing guide for the current reviewed state.
- `MEMORY.md` is the durable implementation/decision record for future agents; update it when a material design or content decision changes.
- A distributable archive should include the static site, `assets/`, `audit/`, `AGENTS.md`, `MEMORY.md`, `design-qa.md`, `README.md`, and `SEND_TO_AYUSHI.md`, but never `.git/`.
