# Design QA — selected lower-page direction 3

Date: 2026-09-06. Scope: Expertise through Contact; existing top remains unchanged.

## Findings
No remaining actionable P0/P1/P2 findings in the reviewed lower-page implementation.

- Resolved P2: date ranges wrapped month/year inconsistently. Split each date range into two translated leaf spans, keeping individual dates together. Before: tablet capture 26; after: desktop capture 27 and French capture 30.
- P3: regular Phosphor quote/current-role icons use lighter strokes than the generated mock. They remain coherent with the existing icon system.
- Accepted deviations: use the original portrait rather than the generated approximation; flat brand fills rather than generated surface texture; preserve the existing phone link. These do not change the selected composition.

## Visual truth and comparison
- Target: `audit/concepts-2026-09-06/03-recruiter-edit.png` (1487 × 1058 raster; generated, no authoritative CSS viewport).
- Implementation: `audit/27-desktop-lower.png`, captured in the in-app browser at 1440 × 1250 CSS px to include the entire lower page.
- Full comparison: `audit/28-lower-comparison.html`, saved as `audit/29-lower-side-by-side.png`. Both actual images were opened together and inspected.
- Normalization: both images displayed at equal column width; implementation header/top gap cropped in the comparison using a 10.1% vertical offset, not by stretching. Content width remains the site's approved 1344 CSS px. The generated image's wider internal margins and shorter overall proportions are not treated as exact pixel specifications.
- Focused inspection: full-resolution source and implementation were opened in addition to the combined comparison. Desktop French career capture 30 and mobile captures 23–25 expose text wrapping, portrait crop and controls at readable scale.
- Browser-reported DPR was approximately 1. Browser screenshot output can exclude the scrollbar; captured viewport dimensions and screenshot pixels are not assumed interchangeable.
- State: static lower page, archive collapsed, dialogs closed, EN unless filename says FR.

## Five fidelity surfaces
- Typography: Archivo and Figtree are loaded (browser font checks true). Strong heading/body distinction; concise copy; no truncation. Dates retain month/year grouping in EN/FR.
- Layout: three-column navy expertise band; yellow profile beside four-role experience and paired recommendations; integrated navy contact/footer. Tablet retains columns; mobile stacks cleanly. No lower-page elements exceed viewport bounds at the checked widths.
- Color: navy #17213c, warm yellow #f8d574, white and near-black maintain the target palette. Yellow action links on navy and dark copy on yellow are high contrast; muted dates remain readable. Existing focus-visible styling retained.
- Imagery: original 600px portrait used in a circular crop, no broken images; approved hero and project assets unchanged. Phosphor icons, no custom drawn image substitutes.
- Content: roles/dates/source quote excerpts preserved; undergraduate education omitted; CDI-first contact and secondary freelance positioning retained. All new translatable copy uses leaf-node data-fr, with zero nested translations.

## Functional and responsive checks
- 1440 × 1024 desktop, 1024 × 768 tablet, 390 × 844 mobile: browser-checked; no horizontal overflow. Supplemental 1440 × 1250 capture for full composition.
- EN to FR switch, reload persistence, FR to EN switch: passed. Main CV href follows active language.
- Expertise Didomi/Plombier controls open matching native dialogs; Convosight featured control opens its dialog.
- Escape closes dialog and returns focus to original expertise trigger; explicit close button works.
- WEMOOVE anchor navigation focuses the intended experience row.
- Archive expands/collapses; hidden and aria-expanded agree.
- Mobile menu expands; Escape closes it. Language switch available in the menu.
- Profile CV EN/FR controls activated; local PDF assets present. Download attributes and resolved destinations inspected.
- Email/telephone/LinkedIn destinations inspected; no messages sent or calls initiated.
- Broken internal anchors: zero. Missing loaded images: zero. Nested data-fr: zero.
- Browser captured console warnings/errors: none.
- Existing top-page markup compared with baseline: unchanged. Git diff whitespace check: clean.
- Reduced-motion stylesheet and semantic/focus rules reviewed; OS reduced-motion setting was not changed.

## Evidence and residual limits
- 23: French mobile expertise.
- 24: French mobile experience/recommendations (before date-wrap refinement).
- 25: English mobile contact.
- 26: English tablet (before date-wrap refinement).
- 27: final desktop full lower page.
- 28/29: comparison document and side-by-side screenshot.
- 30: final French desktop career/contact.
- External Drive/LinkedIn availability/authentication was not revalidated; source URLs are preserved. No external form submission, exhaustive assistive-technology audit, cross-browser suite or publishing performed.

## Implementation checklist
- Selected lower-page direction built; original assets and static architecture retained.
- Responsive/local interaction checks completed.
- Evidence and handoff memory saved; baseline checkpoint retained.

final result: passed
