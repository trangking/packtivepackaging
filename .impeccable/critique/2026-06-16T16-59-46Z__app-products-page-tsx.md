---
target: app/products/page.tsx
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-06-16T16-59-46Z
slug: app-products-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Swiper hover/active states are clear; no loading state for images but acceptable for static site |
| 2 | Match Between System and Real World | 4 | Thai-language copy is concrete and product-literal — no jargon |
| 3 | User Control and Freedom | 2 | Carousel has no visible "view all N items" escape |
| 4 | Consistency and Standards | 2 | Same 5 categories shown twice (grid card, then swiper card) with near-duplicate copy |
| 5 | Error Prevention | 4 | n/a — no destructive actions or forms on this page |
| 6 | Recognition Rather Than Recall | 3 | Category names repeat as eyebrow + title, but no anchor mapping grid card to its swiper section |
| 7 | Flexibility and Efficiency of Use | 1 | No anchor/jump nav from top grid to matching carousel section |
| 8 | Aesthetic and Minimalist Design | 2 | Five back-to-back sections repeating eyebrow → title → description → swiper is structurally repetitive |
| 9 | Error Recovery | 4 | n/a |
| 10 | Help and Documentation | 3 | "ดูข้อมูลหมวดนี้" CTA is consistent and clear |
| **Total** | | **28/40** | **Good — solid foundation, redundant structure is the main drag** |

## Anti-Patterns Verdict

**LLM assessment**: Not AI-slop on the surface — crimson/paper-white system matches DESIGN.md exactly (tinted ambient shadows, pill buttons, Kanit weight contrast), no gradient text/glassmorphism/side-stripe/hero-metric tells. The real issue is structural redundancy, not aesthetic genericness.

**Deterministic scan**: `detect.mjs` returned a clean result (no findings) across app/products/page.tsx, components/ProductCard.tsx, components/ProductSwiper.tsx, components/CTASection.tsx, components/SectionHeading.tsx.

**Visual overlays**: not run — no dev server was started for this pass; source-level critique only.

## Overall Impression

Visual system is genuinely on-brand and well executed. The real problem is structural: the page shows every one of the 5 product categories twice — grid card up top, then a full carousel section immediately below — with near-duplicate Thai copy each time. For a B2B buyer trying to quickly judge capability, that's a lot of scrolling past redundant structure before reaching the CTA.

## What's Working

- Imagery-led cards (ProductCard.tsx:9-17) let real product photography fill the frame on a soft radial-gradient backdrop.
- Consistent crimson-tinted elevation across both card types, applying the Tinted-Not-Black rule correctly.
- CTASection gives a concrete checklist of what to send, lowering activation barrier for a quote request.

## Priority Issues

**[P1] Top grid and carousels duplicate the same 5 categories with near-identical copy**
Why it matters: A buyer scanning for one category has to scroll past unrelated carousels to confirm coverage — pure redundant scroll against the "quickly judge capability" goal.
Fix: Make top grid cards anchor-link to their matching carousel (`#slug`) instead of duplicating content, or turn the grid into a quick-jump nav.
Suggested command: /impeccable layout

**[P1] No quick-jump navigation between grid and matching section**
Why it matters: With 5 carousels stacked vertically, a buyer who wants one category must scroll past others — violates Flexibility and Efficiency.
Fix: Add `id={product.slug}` to each section; link grid cards to `#${product.slug}`, or add a sticky in-page tab bar.
Suggested command: /impeccable layout

**[P2] Carousel has no "view all" escape hatch**
Why it matters: `items.slice(0, 8)` caps the swiper at 8 of potentially 30+ items with no visible count, so users may not realize more exist.
Fix: Show a count near the swiper controls, e.g. "แสดง 8 จาก 38 รูปแบบ".
Suggested command: /impeccable clarify

**[P3] Mechanical bg-neutral-50/bg-white striping across 5 sections**
Why it matters: Combined with structural repetition, the page reads as templated rather than art-directed.
Fix: Vary section rhythm or give the flagship category a differentiated, larger treatment.
Suggested command: /impeccable layout

## Persona Red Flags

**Jordan (First-Timer B2B buyer)**: Has to scroll through up to 5 full carousels, each repeating what the grid already said, before reaching the contact CTA. No "skip to contact" or jump nav.

**Casey (Distracted mobile buyer)**: `slidesPerView: 1.04` means swiping through 5 separate carousels stacked on heavy vertical scroll; nav arrows sit above the carousel, outside the thumb zone.

## Minor Observations

- ProductSwiper's `sliderId` derived from `items[0]?.id` would break if two categories shared a first item id (currently fine, static data).
- `min-h-[3rem]` on swiper card titles is a reasonable defensive alignment pattern.
- `line-clamp-3` on grid card description handles copy-length variance well.

## Questions to Consider

- Does the top grid need to exist if every category is immediately re-shown below in more detail?
- What's the fastest path from page-load to seeing photos of one specific category right now?
- Would a visually distinct, larger treatment for one flagship category reduce the templated feel?
