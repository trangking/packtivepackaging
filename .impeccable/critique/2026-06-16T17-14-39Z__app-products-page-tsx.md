---
target: app/products/page.tsx
total_score: 24
p0_count: 0
p1_count: 0
timestamp: 2026-06-16T17-14-39Z
slug: app-products-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No "current section" indicator when landed via anchor jump; swiper pagination dots give no total-count feedback |
| 2 | Match Between System and Real World | 3 | Thai copy stays plain and product-literal; "ดูตัวอย่างด้านล่าง" reads as intended action |
| 3 | User Control and Freedom | 2 | Carousel slices to 8 of up to ~37 items (page.tsx:48) with no "view all" escape |
| 4 | Consistency and Standards | 2 | Two coexisting "more info" patterns on one screen: grid card -> in-page anchor, swiper card -> /products/[slug] detail page (ProductSwiper.tsx:83-88) — both real and useful, but visually identical buttons going to different kinds of destinations |
| 5 | Error Prevention | 3 | No destructive actions; anchor IDs are stable, slug-derived |
| 6 | Recognition Rather Than Recall | 2 | No "you are here" / visited-state tie-back from a scrolled-into section to the grid card that triggered it |
| 7 | Flexibility and Efficiency of Use | 2 | No sticky quick-jump nav while scrolling past unrelated categories; anchor links exist but only at the very top |
| 8 | Aesthetic and Minimalist Design | 2 | Grid description (data/site.ts) and each section's heading description (page.tsx:45) still restate nearly the same sentence within one scroll |
| 9 | Error Recovery | 4 | n/a — no error states on this page |
| 10 | Help and Documentation | 2 | No total-count or curation cue ("8 of 37") to help a B2B buyer judge real catalog depth |
| **Total** | | **24/40** | **Acceptable — anchor-nav fix landed correctly, but two carried-over issues plus one new inconsistency keep the score from moving past "acceptable"** |

## Anti-Patterns Verdict

**LLM assessment**: Not classic AI slop (no gradient text, no glassmorphism, no hero-metric template). What still reads as templated: identical card shells repeated 3x in the grid and 5x8 in the carousels with the same shadow/radius/hover recipe, an eyebrow on every section, and mechanical index % 2 background striping (page.tsx:39) that reads as a section generator rather than composed pacing.

**Deterministic scan**: detect.mjs --json against app/products/page.tsx, ProductCard.tsx, ProductSwiper.tsx, SectionHeading.tsx, CTASection.tsx returned a clean empty array — no automated flags. Nothing to reconcile against the LLM read; the detector doesn't catch IA/navigation issues like the ones below, which is expected (it scans for visual-pattern slop, not information architecture).

**Visual overlays**: not run. No dev server was started for this pass and no browser automation was attempted, so there's no live, human-visible overlay evidence — this critique is source-level only, same limitation as the previous run. A follow-up with live-server.mjs would let us confirm the anchor scroll actually clears the sticky header in a real viewport, rather than relying on computed CSS values.

## Overall Impression

The fix did what it was supposed to do: id={product.slug} + scroll-mt-24 (page.tsx:38-39) correctly clears the 64-68px sticky Navbar (Navbar.tsx:40,46), and the new grid CTA copy ("ดูตัวอย่างด้านล่าง" + down-chevron, ProductCard.tsx:25-30) unambiguously communicates "jump down," resolving the original dead-end-link P1. But the deeper issue named in the first critique — five near-identical carousels of redundant content — is only half-solved. Navigation between grid and section is fixed; the *content* redundancy between the grid card description and the carousel section description is not, and a new small inconsistency appeared: the swiper's own per-item CTA still points to /products/[slug], a real, deeper detail page, while the grid card now points to the in-page anchor. Both destinations are legitimate, but the page now teaches the user two different meanings for the same-looking pill button in two different contexts.

## What's Working

- **Anchor math is correct, not just present**: scroll-mt-24 (96px) comfortably clears the h-16/h-[68px] sticky header (Navbar.tsx:40,46) — verified against the actual navbar height rather than assumed.
- **Reduced-motion guard is real, not decorative**: globals.css:14-18 scopes scroll-behavior: auto under prefers-reduced-motion: reduce directly on html, so it will actually take effect for the new anchor-jump behavior.
- **The new CTA affordance is legible**: replacing a silent detail-page link with explicit "ดูตัวอย่างด้านล่าง" + a down-pointing chevron (ProductCard.tsx:25-30) gives keyboard and screen-reader users alike a clear statement of where the click goes, which is exactly what a quick-jump nav needs.

## Priority Issues

**[P2] Two visually identical CTA patterns now point to two different kinds of destinations**
Why it matters: the grid card's pill CTA jumps in-page (ProductCard.tsx:8); the swiper card's pill CTA (ProductSwiper.tsx:83-88, label "ดูข้อมูลหมวดนี้") navigates to a full /products/[slug] detail page with its own hero, breadcrumb, and specs. Both destinations are legitimate and non-redundant (confirmed: the detail page has unique content, not a copy of the swiper), but nothing in the button's visual language signals "this one jumps, that one navigates" — a user who learns one behavior from the grid may misjudge the other.
Fix: differentiate the two CTA styles (e.g., outline/ghost for the in-page jump vs. solid-fill "primary" for the real navigation), or add a trailing icon convention (down arrow for jump, right arrow for navigate) consistently across both components.
Suggested command: /impeccable clarify

**[P2] Carried over — no "view all N" escape on the carousel**
Why it matters: page.tsx:48 slices to 8 of potentially ~37 items per category with no visible total count. A B2B buyer trying to judge real catalog depth has no signal that there's more beyond the 8 shown, undermining the "quickly judge capability" goal from PRODUCT.md.
Fix: surface a count near the swiper header, e.g. "แสดง 8 จาก 37 แบบ" linking to the full detail page's gallery.
Suggested command: /impeccable clarify

**[P2] Carried over — grid card and carousel section descriptions still restate the same sentence**
Why it matters: the original critique's content-duplication concern is only partially fixed. page.tsx:45 builds its description by appending a clause to the same product.description used verbatim in the grid card (ProductCard.tsx:24) — the navigation duplication is solved, but the copy redundancy a user reads top-to-bottom is not.
Fix: write distinct carousel-section copy (materials, finishes, MOQ specifics) instead of reusing the grid card's sentence with a suffix bolted on.
Suggested command: /impeccable clarify

**[P3] No visible focus state on the new/adjacent interactive elements**
Why it matters: ProductCard.tsx:8's anchor Link and ProductSwiper.tsx:25-42's prev/next buttons don't carry the .focus-ring utility already used elsewhere in the system (e.g. ButtonLink). Keyboard users jumping via the new anchor links get no visible confirmation of landing — undermining the fix for exactly the users who'd rely on it most.
Fix: add the shared focus-ring class to both elements for consistency with the rest of the interactive system.
Suggested command: /impeccable audit

**[P3] Carried over — mechanical index % 2 background striping**
Why it matters: page.tsx:39 alternates bg-neutral-50/bg-white purely by array position, not by content weight — reads as a section generator rather than art-directed pacing, working against the "premium, not templated" brand principle.
Fix: vary section treatment by actual content importance (e.g. distinct layout for the flagship category) instead of index parity.
Suggested command: /impeccable layout

## Persona Red Flags

**Jordan (First-Timer B2B buyer)**: Clicks a grid card, lands mid-carousel with no "you are here" tie-back to the grid above. If they then click the swiper card's own "ดูข้อมูลหมวดนี้" button, they leave the anchor-nav page entirely for /products/[slug] — a reasonable destination, but one they weren't told would be different from where the grid card just took them.

**Sam (Accessibility-dependent user)**: Lands via anchor jump with no visible focus ring on the link that just fired (ProductCard.tsx:8 lacks .focus-ring), and the swiper's prev/next buttons (ProductSwiper.tsx:27,36) are labeled in English ("Previous product"/"Next product") on an otherwise fully-Thai page — inconsistent locale for screen-reader announcements.

**Casey (Distracted mobile buyer)**: Five sections of 8-card carousels at min-h-[370px] each is still a long thumb journey on mobile; slidesPerView={1.04} means each card's neighbor is just a 4% sliver, the only cue that more cards exist to swipe.

## Minor Observations

- page.tsx:44's title template concatenates product name without a connector, producing slightly stiff Thai ("ตัวอย่างซองและถุงแพคเกจจิ้ง") — worth a native-speaker copy pass.
- ProductSwiper.tsx:80 category label and ProductCard.tsx:18-20 shortName badge present the same taxonomy value in two different visual treatments (uppercase label vs. pill badge) for the same data.
- ProductSwiper.tsx:27,36 aria-labels are in English while the rest of the page is Thai.

## Questions to Consider

- Now that the grid is a quick-jump nav, should it stay sticky/visible while the user scrolls through the 5 carousels below, so "where am I" is never lost?
- Is the swiper card's own CTA to /products/[slug] actually the right second affordance, or would a single, consistent navigation model (just the anchor, with "view all" living inside each section) serve a B2B buyer better than two destinations per category?
- Is "8 of N" a deliberate curation choice or an unlabeled array slice — and should the UI say which?
