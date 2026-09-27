# Ayushi Joshi portfolio - first-look product design audit

Date: 2026-08-29

## Scope

Read-only review of the portfolio's desktop and mobile experience, navigation, project filtering, bilingual switch, About section, contact path, public project files, and English CV. No portfolio source files were changed.

The first run was blocked by LinkedIn's sign-in wall. The profile was subsequently inspected in an authenticated in-app browser session, including its headline, About, Services, Featured, Experience, Education, certifications, skills, recommendations, languages, and visible activity.

## Overall verdict

Ayushi's work is stronger and more specific than the portfolio makes it look. The site currently positions her as an all-purpose digital marketer, while the evidence points to a sharper profile: a product/GTM and measurable-growth operator who can turn research and signals into an execution system.

The site is visually polished and functional, but it has too many familiar portfolio-template signals: pastel card grids, pills everywhere, lift-on-hover effects, generic service copy, oversized claims, and repeated section formulas. The result feels assembled rather than authored around Ayushi's particular strengths.

## Flow steps and health

1. **Desktop landing and hero - needs focus.** The hero is attractive but crowded by two copy columns, five skill pills, a portrait, a name badge, a CTA, and three stat cards. "Digital Marketer" is too generic for the quality of the work.
2. **Mobile landing - broken reflow.** A phone-width capture shows a horizontal scrollbar. The About grid expands to 372px inside a roughly 327px content area because the 300px portrait plus 72px card padding sets the minimum width.
3. **Services - visually clean, strategically over-broad.** Six equally weighted services imply Ayushi does everything. They dilute the stronger product/GTM and revenue-operations story.
4. **Featured work and filtering - functionally healthy, poorly curated.** Filtering works and updates `aria-pressed` after interaction, but 15 cards is not "featured." Client work, speculative work samples, audits, live sites, case studies, and in-progress concepts receive the same visual weight.
5. **Project evidence - strong.** The Didomi brief is the standout: category-specific signals, an account-scoring model, a concrete sequence, tooling, KPIs, and a 90-day rollout. The Plombier 16 deck shows structured prioritization and hands-on delivery. These projects feel more credible than the site's generic services copy.
6. **About and proof - mixed.** The CV and projects support meaningful outcomes, but the site separates numbers from their employer, baseline, period, and evidence. The brands marquee also combines direct brand work, employers, clients, prospects, and a Volvo case study, which can make claims feel inflated.
7. **Language switch - healthy.** English/French switching updates visible text, the document language, labels, and image alt text.
8. **Return-to-home navigation - needs a fix.** Clicking Home or the brand targets `#top`; the sticky navigation can cover the top of the hero because the main element has no matching scroll offset.
9. **Contact - healthy but generic.** Email, phone, location, LinkedIn, and the CDI/freelance message are clear. The primary audience is not: the CV says CDI is preferred, while the site gives CDI and freelance equal weight.
10. **LinkedIn context - strong raw evidence, weak alignment.** The profile adds valuable proof - 7,107 followers, 13 received recommendations, a long-form About section, and quantified experience - but its headline, services, Featured section, and current-role chronology do not create one coherent hiring story.

## Authenticated LinkedIn review

### What LinkedIn confirms

- The strongest positioning sentence is already written: **"Marketing has two native languages: the strategy document and the ads dashboard. I speak both."** It captures Ayushi's strategy-plus-execution advantage much better than "Digital Marketer."
- Convosight is the clearest professional anchor: Marketing Consultant from November 2021 to September 2024, with 23% revenue growth and campaign work for a SaaS community-marketing platform serving 50+ global consumer brands.
- WEMOOVE provides specific France-market outcomes: +18% MQL conversion, +34% sales conversion, and 10 new B2B leads during an October 2025 to January 2026 internship.
- Gowardhan Group establishes earlier product-marketing experience from May 2020 to October 2021.
- Social proof is substantial: 7,107 followers, 500+ connections, 13 received recommendations, and a verified/Premium profile.
- The profile supports the MBA, AI-agent certification, product/GTM skills, performance-marketing tools, and English/French positioning used by the portfolio.

### Trust and consistency risks

- The headline is a keyword list: performance marketing, product marketing, Google Ads, GA4, Meta Ads, SEO/AEO/GEO, GTM, SaaS, e-commerce, MBA, and CDI. It is searchable but hard to remember.
- The cover image is tool-first ("Les outils derrière les résultats" plus many platform logos). This reinforces the generic-stack impression instead of showing the business problems Ayushi solves.
- The Experience section ends in January 2026. It does not show the current Plombier 16 work that the portfolio says began in May 2026, nor a current consulting role. In August 2026 that makes the profile appear stale.
- The portfolio's 82% signed-quotes claim and Plombier work are absent from LinkedIn, while LinkedIn's stronger 23% Convosight revenue-growth claim is not prominent in the portfolio.
- Education is inconsistent across sources: LinkedIn shows a Bachelor of Education from Hemwati Nandan Bahuguna Garhwal University, while the English CV shows BA History Honours from IGNOU. If both are legitimate, both sources need enough detail to remove ambiguity.
- The LinkedIn Services section repeats the same generalist problem as the website: ten broad service categories alongside "Open to CDI," a proposal-request CTA, Calendly, and freelance language.

### Featured-section problem

Featured currently prioritizes an MBA consulting post, two recommendations, a ChatGPT-ads post, and a BCG/Forage certificate. It does not surface the strongest work samples or the portfolio itself.

Recommended Featured order:

1. A compact Didomi case study or document showing the signal engine and 90-day GTM plan.
2. A Plombier 16 case study with current results and reporting evidence.
3. The portfolio link with a clear positioning line.
4. The LGP client recommendation.
5. One high-quality original post that demonstrates her point of view rather than reporting industry news.

### Portfolio implications

The redesign should not invent a new identity. It should pull the strongest existing LinkedIn material into a more selective story: strategy plus execution, Convosight as the professional foundation, WEMOOVE as French-market proof, Didomi as strategic depth, and Plombier as current hands-on ownership.

## Highest-impact changes

1. **Choose a sharper positioning.** Lead with something closer to "Product & Growth Marketer" or "GTM and Growth Marketing" and make CDI in France the primary path, with freelance as secondary.
2. **Put proof before the service catalogue.** Move three flagship case studies directly below the hero: Didomi for product/GTM thinking, Plombier 16 for end-to-end execution, and one campaign with verified outcomes.
3. **Turn projects into case studies.** Each should state the situation, Ayushi's exact role, constraints, decisions, implementation, result, and evidence. Link the 82% signed-quotes claim to reporting, not only to the proposal deck.
4. **Reduce the AI-template vocabulary.** Use fewer pills, fewer rounded pastel grids, fewer repeated hover lifts, and more editorial project imagery, artifacts, charts, screenshots, and annotated outcomes.
5. **Simplify the hero.** One positioning line, one proof sentence, two CTAs, one natural portrait treatment, and a compact proof strip would be clearer than the current multi-column collage and separate stat rail.
6. **Fix responsive structure.** Remove the About overflow, add a real mobile navigation path, and fix the `#top` sticky-header offset.
7. **Clarify credibility.** Separate "worked on," "client," "employer," "independent work sample," and "academic case." Attach context to every headline number.

## Accessibility evidence and limits

Visible strengths include semantic headings, descriptive link labels, keyboard focus styles, reduced-motion handling, readable contrast, language metadata updates, and labels on the carousel controls.

Risks visible in this review include horizontal overflow on mobile, missing mobile wayfinding on a very long page, no skip link, the sticky-header anchor issue, and filter buttons that do not receive their initial `aria-pressed` state until the first interaction. Screenshot and DOM review cannot establish full WCAG compliance; keyboard order, screen-reader announcements, zoom behavior, and all contrast combinations still need dedicated testing.
