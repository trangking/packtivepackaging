---
name: Packtive Packaging
description: Premium B2B packaging manufacturer site — confident crimson on factory-clean white
colors:
  factory-crimson: "#d71920"
  factory-crimson-deep: "#b91018"
  factory-crimson-shadow: "#671012"
  crimson-tint: "#ffe1e1"
  crimson-mist: "#fff1f1"
  graphite-ink: "#171717"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "Kanit, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.16
    letterSpacing: "normal"
  body:
    fontFamily: "Kanit, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0"
  label:
    fontFamily: "Kanit, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  pill: "9999px"
  card: "1.1rem"
  card-lg: "1.25rem"
  image: "0.5rem"
spacing:
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.factory-crimson}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.factory-crimson-deep}"
  button-secondary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.factory-crimson-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  product-card:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.card-lg}"
---

# Design System: Packtive Packaging

## 1. Overview

**Creative North Star: "The Premium Factory Floor"**

Packtive Packaging sells production capability to other businesses, not a feeling — so the system reads as a showroom built on top of a real factory: confident, exact, and unmistakably capable, with just enough polish that a brand manager trusts it on sight. Every surface stays paper-white and lets product photography do the convincing; the single crimson accent is reserved for the moments that move a visitor toward a quote, never spent on decoration.

This system explicitly rejects the cluttered, discount-print-shop look of budget packaging vendors and the over-decorated, gradient-heavy "AI generated" landing page aesthetic — no purple/cyan gradients, no glassmorphism, no glow-for-glow's-sake. It also rejects flatness for its own sake: depth exists, but only as a soft, crimson-tinted ambient glow that signals "this is the important thing," never as a hard drop shadow.

**Key Characteristics:**
- Single accent color (factory crimson) spent sparingly and only on action/identity moments
- Paper-white canvas; product photography is the hero, never competing with UI chrome
- Heavy display weight (font-black, 900) headlines paired with generous, airy body line-height
- Soft, color-tinted ambient shadows instead of neutral black drop shadows
- Pill-shaped, tactile buttons with a confident hover-lift on every interactive surface

## 2. Colors

A near-monochrome white canvas with one disciplined crimson accent and a single near-black ink — no secondary or tertiary hue family exists yet.

### Primary
- **Factory Crimson** (#d71920): The one color allowed to ask for attention — primary buttons, active nav state, eyebrow labels, links that mean "go." Used in flat fills (`bg-brand-600`) and as the swiper/carousel theme color.
- **Factory Crimson Deep** (#b91018): Hover/active state for the primary color and for crimson text on white surfaces (link text, card "view category" labels) — slightly heavier than the flat fill so hover reads as "pressed in," not just lighter.
- **Factory Crimson Shadow** (#671012): Never painted as a flat fill. Exists only as a low-opacity tint inside shadows (`rgba(103,16,18,0.06–0.10)`) and ultra-faint watermark marks (`text-brand-900/[0.045]`) — the color of depth, not of surface.

### Neutral
- **Crimson Mist** (#fff1f1) / **Crimson Tint** (#ffe1e1): Not neutrals in the literal sense — these are the palette's only "soft" surfaces: hero gradient wash, hover backgrounds (`hover:bg-brand-50`), selection highlight (`::selection`), pill borders. They let crimson breathe into a surface without becoming a saturated block.
- **Graphite Ink** (#171717): All body text and dark headline color. Warmer and deeper than pure black; pairs with the crimson family without competing against it.
- **Paper White** (#ffffff): The base canvas for every section. Product imagery and the crimson accent are what should register, not the background.
- **Neutral grays** (Tailwind default `neutral-200`–`neutral-600`): borders, secondary copy, dividers, disabled/inactive nav states.

### Named Rules
**The One Red Rule.** Factory Crimson (#d71920) is the only saturated color in the system. If a new screen needs a second "loud" color, that's a sign the page is doing too much — solve it with hierarchy (size, weight, white space), not a second hue.

## 3. Typography

**Display Font:** Kanit (with Noto Sans Thai, ui-sans-serif, system-ui fallback)
**Body Font:** Kanit (same family — no font pairing; weight does the differentiating)

**Character:** One geometric, slightly condensed Thai/Latin sans carries the entire system from hero headline down to button label. Because there's no second typeface, *weight* is the only lever — font-black (900) headlines against font-normal (400) body copy is what creates hierarchy, not a font change.

### Hierarchy
- **Display** (font-black/900, `clamp(1.75rem, 4vw, 3.75rem)` i.e. 1.75rem → 3.75rem responsive, leading-[1.16]): Page H1/H2. `text-wrap: balance` is applied so headlines never break into a single orphan word.
- **Title** (font-black/900, 1.125rem–1.25rem, leading-snug): Card and component headings (product card title, FAQ question).
- **Body** (font-normal/400, 1rem–1.125rem, leading-8/9): Paragraph copy. Line length capped via `max-w-2xl`/`max-w-3xl` containers, not a CSS measure — keep new body blocks inside one of those container widths.
- **Label/Eyebrow** (font-bold/700, 0.875rem, uppercase, tracking-[0.16em], colored Factory Crimson Deep): Section eyebrows and small tags — the only uppercase, letter-spaced text in the system.

### Named Rules
**The One Voice Rule.** There is exactly one font family in this system. Never introduce a second typeface "for variety" — express hierarchy with the existing weight scale (300→900) and size, not a new font.

## 4. Elevation

Ambient, not structural. Shadows in this system are soft, large-blur, and tinted with Factory Crimson Shadow rather than neutral black — their job is mood and a gentle sense of "this surface matters," not stacking-order communication. Nothing here uses a hard, dark, small-blur shadow; the moment a shadow looks crisp or gray, it's off-brand.

### Shadow Vocabulary
- **Premium** (`box-shadow: 0 24px 80px rgba(23,23,23,0.10)`): Large hero imagery, the most "lifted" surface on a page.
- **Card** (`box-shadow: 0 16px 48px rgba(23,23,23,0.08)`): Default elevated panel — info call-outs, floating captions over imagery.
- **Crimson Ambient** (`box-shadow: 0 14px 40px rgba(103,16,18,0.055)`, deepening to `0 22px 62px rgba(103,16,18,0.10)` on hover): Product cards and brand-adjacent panels — the tinted variant of Card, used whenever the surface is "about" the brand/product rather than generic content.
- **Button Glow** (`0 14px 34px rgba(215,25,32,0.22)`, deepening on hover): Primary button only. The one shadow allowed to use the flat Factory Crimson value directly instead of the deep shadow tint.

### Named Rules
**The Tinted-Not-Black Rule.** Any shadow touching a brand surface (card, button, brand panel) is tinted with Factory Crimson Shadow (#671012) at low opacity, never neutral black. Generic content surfaces (hero image frame, floating caption) may use the neutral Premium/Card values instead.

## 5. Components

Confident and tactile: every interactive surface has a deliberate hover state (lift + shadow deepen, never an abrupt color swap), and shapes lean toward the pill/rounded end rather than sharp corners — the system wants to feel handled, not just looked at.

### Buttons
- **Shape:** Full pill (`rounded-full`, 9999px), minimum 48px tap height (`min-h-12`).
- **Primary:** Flat Factory Crimson fill, white text, Button Glow shadow. The single highest-priority action per view ("ขอใบเสนอราคา" / request quote).
- **Secondary:** White/near-white fill, Factory Crimson Deep text, thin Crimson Tint border. Used beside a primary button for a lower-commitment action ("ขอคำปรึกษา" / ask for advice).
- **Ghost:** Transparent, ink-colored text, neutral hover fill only — no border, no shadow. Reserved for tertiary/"browse" actions.
- **Hover/Focus:** Every variant lifts 2px (`-translate-y-0.5`) and deepens its shadow on hover; the shared `.focus-ring` utility (2px Factory Crimson outline, offset) is mandatory on every interactive element — never remove it for visual cleanliness.

### Cards / Containers
- **Corner style:** 1.1rem on mobile, scaling to 1.25rem at `sm+` — consistently soft, never sharp, never fully rounded like a pill (that shape is reserved for buttons/tags).
- **Background:** Paper White, with a very faint radial crimson-tinted gradient behind product photography (`radial-gradient(circle at 50% 38%, #fff 0%, #fff7f7 58%, #f3eeee 100%)`) rather than a flat white image frame.
- **Shadow strategy:** Crimson Ambient at rest, deepening on hover (see Elevation). Pair with a 1px neutral border (`border-neutral-200/70`) that shifts to Crimson Tint on hover.
- **Internal padding:** 1.25rem (mobile) → 1.5rem (`sm+`) for card body content.

### Navigation
- Sticky header, `backdrop-blur-xl`, transparent/translucent over the hero and opaque-white once scrolled — the transition itself (border + shadow fade in) is part of the brand, not just a technical scroll-listener.
- Nav links are pill-shaped, font-semibold; the active route gets a Crimson Tint background, inactive links get a neutral-to-crimson hover (never a static gray default with no hover feedback).
- Mobile menu slides/blurs in (framer-motion, 0.22,1,0.36,1 easing) rather than a hard cut — motion energy matches the rest of the system's "responsive, not choreographed" feel.

### Signature Component: Eyebrow Label
A small uppercase tag (`.eyebrow` utility: text-sm, font-bold, uppercase, tracking-[0.16em], Factory Crimson Deep) that precedes nearly every section heading and the hero title. It's the system's signature "here's what this section is about" device — use it before introducing any new section heading rather than inventing a new label style.

## 6. Do's and Don'ts

### Do:
- **Do** keep Factory Crimson (#d71920) as the only saturated color on any given screen — everything else is white, ink, or a crimson tint/shadow of that same hue.
- **Do** use font-black (900) Kanit for every headline and font-normal (400) for body copy — weight contrast is the hierarchy system, not font changes.
- **Do** tint shadows on brand surfaces with rgba(103,16,18, 0.05–0.10) instead of neutral black — see The Tinted-Not-Black Rule.
- **Do** give every interactive element a hover lift (`-translate-y-0.5` or greater) plus a deepened shadow, and always keep `.focus-ring` for keyboard accessibility.
- **Do** let product photography fill the frame (object-contain/object-cover on a near-white backdrop) — imagery is the credibility signal, matching the napat-packaging.com reference's product-led approach.

### Don't:
- **Don't** introduce a second saturated accent color (no purple, cyan, or secondary brand hue) — this breaks The One Red Rule and immediately reads as generic SaaS/AI-template design, which PRODUCT.md explicitly calls out as an anti-reference.
- **Don't** use hard, small-blur, neutral-gray shadows (the "2014 app" look) — if a shadow looks crisp instead of soft and glowing, the blur radius is too small and/or the opacity is too high.
- **Don't** add a second font family "for variety" in headlines, labels, or body copy.
- **Don't** ship a cluttered, generic-print-shop layout (dense grids, no breathing room, stock photography) — this is the explicit anti-reference from PRODUCT.md and the opposite of the premium positioning.
- **Don't** use sharp/square corners on cards or buttons — everything in this system rounds at minimum 0.5rem, and primary actions are always full pills.
