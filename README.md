# Ayushi Joshi — portfolio site

A static, responsive one-page portfolio. There is no build step, framework, or package install.

## Run locally

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `index.html` — page content, featured cases, archive, experience, about, contact, and native dialogs.
- `assets/styles.css` — visual system and desktop/tablet/mobile layouts.
- `assets/script.js` — EN/FR preference, mobile menu, archive, dialogs, focus return, reveals, and active navigation.
- `assets/hero.webp` — outlined hero portrait.
- `assets/work-didomi-v2.png`, `assets/work-plombier.png`, `assets/work-convosight.png` — dedicated featured-work thumbnails.
- `assets/profile.webp` — About portrait.
- `assets/Ayushi_Joshi_CV_EN.pdf`, `assets/Ayushi_Joshi_CV_FR.pdf` — downloadable CVs.
- `audit/` and `design-qa.md` — visual target, responsive evidence, side-by-side comparison, and final QA result.

## Content conventions

English is the HTML source text. French translations live on the same leaf node in `data-fr`:

```html
<span data-fr="Projets sélectionnés">Featured work</span>
```

Do not nest `data-fr` elements. Accessible-label translations use `data-fr-aria`. The primary CV link is switched between the EN and FR PDF by `assets/script.js`.

Featured cards use `data-case="case-id"` and open the matching `<dialog id="case-id">`. The secondary archive is controlled by `.archive-toggle` and starts with the `hidden` attribute.

## Publishing

The folder can be hosted on any static host. Deployment is intentionally not part of this local redesign.

## Sending the reviewed handoff

See `SEND_TO_AYUSHI.md` for a recipient-facing overview of the current portfolio, how to preview it locally, and what must be confirmed before publishing.
