# Ayushi Joshi — portfolio handoff

This folder contains the current reviewed portfolio, including the EN/FR versions, CV downloads, project assets and design QA evidence.

## Open the site

The simplest method is to open `index.html` in a browser. For a more reliable local preview, open a terminal in this folder and run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173/`.

## What is included

- `index.html` — the one-page portfolio.
- `assets/` — photographs, project covers, CSS, JavaScript and English/French CV PDFs.
- `AGENTS.md` — technical/design handoff notes for a future developer or agent.
- `MEMORY.md` — decisions, content facts, visual locks and rollback context.
- `design-qa.md` and `audit/` — visual comparison and responsive QA evidence.

## Current design status

- Hero and Featured work are retained as approved.
- The lower page now uses compact expertise, a profile/experience layout, short LinkedIn recommendations and a CDI-first contact block.
- English and French are supported. The language selection is remembered in the browser.
- The project is static: no framework, database, account or deployment setup is required.

## Before publishing

Confirm the email address, phone number, LinkedIn link, CV files and all external project links are still current. Hosting/deployment is intentionally not included in this handoff.
