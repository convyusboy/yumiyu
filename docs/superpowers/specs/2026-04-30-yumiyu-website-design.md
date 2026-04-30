# Yumiyu Website — Design Spec

**Date:** 2026-04-30
**Owner:** Yumiyu (ridho@getboon.ai)
**Status:** Approved for implementation planning

## 1. Goal

Build a production-ready premium marketing website for **Yumiyu**, a freeze-dried pet food brand and manufacturer based in Indonesia. The site must serve two audiences simultaneously without favoring either:

1. **Consumer (B2C):** Pet owners discovering Yumiyu via Instagram/TikTok/Shopee. They need to understand product quality, see flavors, and trust the brand before clicking through to Shopee.
2. **Business (B2B):** Distributors, retailers, and brands seeking a private-label freeze-dried manufacturing partner.

The site should make Yumiyu look like a trusted premium international pet food brand AND a credible manufacturing partner.

## 2. Approved Decisions

| Decision | Choice |
|---|---|
| Tech stack | **Astro 4 + Tailwind CSS** + minimal vanilla JS |
| Visual direction | **Premium with playful warmth** — refined editorial palette, mascots used sparingly as accents |
| Typography | **Fraunces** (display) + **Inter** (body) |
| Audience strategy | **Dual-track from the homepage** — consumer above, B2B pivot mid-page |
| Missing-data strategy | **Hybrid placeholders + `CONTENT.md` checklist** for everything that needs real data before launch |

## 3. Asset Inventory

Source: `/Users/fitrilin/Documents/projects/yumiyu/assets/`

- **Logos** (2 variants): `Yumiyu Logo/opt 3 - blueyellow.png`, `opt 3 - yellowblue.png`
- **Packaging** (14 flavors): `Packaging Freeze Dried/{BEEF, CHICKEN, EGG YOLK, FISH, GOAT MEAT, MACKEREL TUNA, MIX SEAFOOD, MUSSELS, PASIFIC MACKEREL, PUMPKIN, SHRIMP, SWEET POTATO, TOFU, UBE}.png`
- **Production photos** (~30): `Production Process/Photos/DSC*.png` and `DSCF*.png`
- **Production video**: `Production Process/Video/` (verify contents during build)
- **USP visuals**: `Pembeda (Unique Selling Point)/a4pembeda-{kering, dicelup dalam air}.png` — dry vs rehydrated demo
- **Banner & booth designs**: brand reference only, not used directly on site
- **Flavor poster**: `Flavor Produk (Akrilik)/a4-flavor.png` — reference only

## 4. Design System

### Colors
```
--ink:      #0F2042   /* deep navy — primary text, headings */
--ink-soft: #2B3A6B   /* secondary text */
--gold:     #E8B84A   /* warm yellow — CTAs on dark, accents */
--cream:    #FAF6EE   /* page background — warm, not cold white */
--paper:    #FFFFFF   /* cards, modals */
--line:     #E8E2D2   /* hairline dividers */
--muted:    #6B7280   /* captions */
--success:  #2F6F4F   /* used very sparingly, mirrors "All Natural" badge */
```

Cream (`--cream`) is the default page background, not white. This is the single biggest "premium" lever — it's what makes Aesop, Le Labo, and Japanese editorial sites feel warm.

### Typography
- **Fraunces** (variable font, optical-size aware): display & headings, weights 400/500
- **Inter** (variable font): body & UI, weights 400/500/600
- Letter-spacing tightened on small-caps eyebrows
- Loaded via `@fontsource-variable/fraunces` and `@fontsource-variable/inter` (self-hosted, no Google Fonts request)

### Type Scale
12 / 14 / 16 / 18 / 20 / 24 / 32 / 48 / 64 / 80 px. Mobile clamps via `clamp()`.

### Layout Grammar
- Max content width: 1280px
- Reading column for prose: 1080px
- Section padding: 96–160px desktop, 64px mobile
- 12-column grid, 32px gutter
- Hairline rules (`--line`) instead of heavy section backgrounds
- Signature move: small-caps Inter eyebrow ("01 — Our Promise") above Fraunces display headline

### Motion
- IntersectionObserver-driven fade-up on scroll: ~600ms ease-out, 16px translate
- Image hover (product cards & manufacturing photos only): 1.03× scale, 400ms ease
- No carousels. No autoplay video.
- All animations honor `prefers-reduced-motion: reduce`

## 5. Site Architecture

```
yumiyu-site/
├── public/
│   └── assets/                  # optimized brand assets, copied from source
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro     # <head>, fonts, nav, footer, SEO meta
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── ProcessStep.astro
│   │   ├── SectionHeader.astro  # eyebrow + display heading + subhead
│   │   ├── CTABand.astro        # reusable full-bleed CTA section
│   │   └── InquiryForm.astro    # used on private-label & contact
│   ├── data/
│   │   └── products.ts          # single source of truth for 14 flavors
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── products.astro
│   │   ├── manufacturing.astro
│   │   ├── private-label.astro
│   │   └── contact.astro
│   └── styles/global.css
├── CONTENT.md                   # placeholder checklist
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### `src/data/products.ts` shape
```ts
export type Product = {
  slug: string;          // 'chicken-chunks'
  name: string;          // 'Chicken Chunks'
  category: 'meat' | 'seafood' | 'plant' | 'egg';
  image: string;         // path to packaging image
  benefit: string;       // one-line, e.g. "Lean protein, single ingredient"
  for: 'cats' | 'dogs' | 'both';
  // Placeholder fields, surfaced in CONTENT.md:
  weight?: string;
  ingredients?: string[];
  feedingGuide?: string;
};
```

All 14 products listed in §6 are seeded into this file with `category` and `for` set, and the placeholder fields left undefined.

## 6. Product Catalog (14 flavors)

| Slug | Display name | Category | For |
|---|---|---|---|
| beef-chunks | Beef Chunks | meat | both |
| chicken-chunks | Chicken Chunks | meat | both |
| goat-meat-chunks | Goat Meat Chunks | meat | dogs |
| egg-yolk-cubes | Egg Yolk Cubes | egg | both |
| fish-chunks | Fish Chunks | seafood | both |
| mackerel-tuna-chunks | Mackerel Tuna Chunks | seafood | both |
| pacific-mackerel-chunks | Pacific Mackerel Chunks | seafood | both |
| mix-seafood | Mix Seafood Chunks & Whole | seafood | both |
| mussels-whole | Mussels Whole | seafood | both |
| shrimp-whole | Shrimp Whole | seafood | both |
| pumpkin-chunks | Pumpkin Chunks | plant | both |
| sweet-potato-cubes | Sweet Potato Cubes | plant | both |
| tofu-cubes | Tofu Cubes | plant | both |
| ube-cubes | Ube Cubes | plant | both |

Cat/dog targeting placeholders go in `CONTENT.md` for client confirmation.

## 7. Page Specifications

### 7.1 Home (`/`)
1. **Sticky nav** — logo left; Products / Manufacturing / Private Label / About / Contact center; gold pill *Become a Distributor* right. Cream bg, hairline appears on scroll.
2. **Hero** — full-bleed cream. Left column: small-caps eyebrow *"Crafted in Indonesia · Single Ingredient"*; Fraunces headline *"Premium Freeze-Dried Nutrition for Pets"*; subheadline *"Real ingredients. Crafted with care for cats and dogs."*; primary CTA *Shop Products*, ghost CTA *Become a Distributor*. Right column: hero image (best production process or product photo, vignette treatment).
3. **Why Yumiyu** — 3 columns: *Single Ingredient · Human Grade · Nutrition Locked In*. Tiny mascot spot-illustration + 2-line copy each.
4. **Flavors showcase** — horizontal-scrolling editorial grid of all 14 packaging images on cream. Trailing "View all flavors →" link → `/products`.
5. **Freeze-drying benefits** — split layout. Left: USP "dry vs rehydrated" pair. Right: editorial paragraph + 4-stat row (Nutrition retained · Shelf-stable · No preservatives · Ingredient transparency).
6. **Manufacturing band** — full-bleed dark navy. Headline *"A factory built around real ingredients."* Three production photos asymmetric grid. CTA *"See our process →"* → `/manufacturing`.
7. **OEM / Private Label CTA** — cream, centered editorial. *"Build your own freeze-dried line with us."* → `/private-label`.
8. **Testimonials placeholder** — three-card row, all entries flagged in `CONTENT.md`. Fraunces quotation-mark accent.
9. **Contact band** — full-bleed navy. WhatsApp / Email / Instagram / TikTok / Shopee icons.
10. **Footer** — logo, nav, social, factory address line (placeholder), © 2026 Yumiyu, "Made in Indonesia" mark.

### 7.2 Products (`/products`)
- Hero strip: page title + category filter chips (*All · Meat · Seafood · Plant-based · Egg*) wired with vanilla JS (no framework).
- Grid: 3 cols desktop / 2 tablet / 1 mobile. Card = real packaging image on cream, padded; Fraunces flavor name; 1-line benefit; "For cats & dogs" tag.
- All 14 cards generated from `src/data/products.ts`.
- Card click expands an in-page detail panel (no modal, no route change) showing placeholder fields (weight, ingredients, feeding guide).

### 7.3 Manufacturing (`/manufacturing`)
- Hero: wide factory shot from `Production Process/Photos/`.
- 5-step walkthrough: Ingredient Sourcing → Preparation → Freeze-Drying → Quality Control → Packaging. Each step: production photo + step number small-caps + Fraunces step title + paragraph.
- Capability stat strip (placeholder numbers in `CONTENT.md`): capacity, lead time, MOQ, certifications.
- Closing CTA → `/private-label`.

### 7.4 Private Label / OEM (`/private-label`)
- Editorial hero: *"Your brand. Our craft."*
- Three sections: *What we make · How we work · Who we partner with*.
- Process timeline: Inquiry → Recipe development → Sample → Production → Delivery.
- Inquiry form: name, company, country, product interest (multi-select tied to product catalog), estimated MOQ, message. Form action: placeholder Formspree-ready endpoint flagged in `CONTENT.md`.

### 7.5 About (`/about`)
- Brand story (drafted from visual evidence; final version flagged in `CONTENT.md`).
- Founder / team placeholder block.
- "Our values" 3-column.
- Factory + team photos from `Production Process/Photos/`.

### 7.6 Contact (`/contact`)
- Two-column: form left, channels right.
- Real social links provided: instagram.com/yumiyu.id, tiktok.com/@yumiyu.id, shopee.co.id/yumiyu.id.
- WhatsApp number, email, factory address: placeholders flagged in `CONTENT.md`.
- Map placeholder (Google Maps embed slot).

## 8. SEO & Performance

- Per-page `<title>`, `<meta name="description">`, OpenGraph, Twitter card meta in `BaseLayout.astro`.
- `sitemap.xml` via `@astrojs/sitemap` integration.
- `robots.txt` allowing all.
- JSON-LD `Organization` schema in homepage `<head>`.
- All images via Astro `<Image>` (auto WebP/AVIF, responsive `srcset`, lazy by default — except the LCP hero image, which is `loading="eager"` + `fetchpriority="high"`).
- Self-hosted variable fonts via `@fontsource-variable/*`.
- Target: Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices = 100, SEO = 100.

## 9. Accessibility

- All interactive elements keyboard-reachable; visible focus styles.
- Alt text on every image (drawn from product name / step name).
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, headings in order).
- Color contrast: navy on cream ≥ 12:1, gold on navy ≥ 7:1 — verified during build.
- `prefers-reduced-motion` honored for all animations.

## 10. Responsive Behavior

- Breakpoints: mobile-first; `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- Nav collapses to hamburger below `md`. Hamburger menu = full-screen overlay, cream bg.
- Hero stacks vertically below `md`; image above text.
- Product grid: 3 → 2 → 1 columns at `lg` / `md` / mobile.
- Section padding scales: 160px / 96px / 64px at `xl` / `md` / mobile.

## 11. `CONTENT.md` Checklist

A single root-level file enumerating every placeholder with file path + line reference, grouped by category:

- **Brand & Company** (factory address, founder bio, team photos, certifications, founding year)
- **Products** (per-flavor: net weight, ingredient list, feeding guide, cat/dog confirmation, price/Shopee link)
- **Capability stats** (manufacturing capacity, lead time, MOQ, lab equipment list)
- **Testimonials** (3 quotes minimum)
- **Contact** (WhatsApp number, email, Google Maps embed URL)
- **Forms** (Formspree or alternative endpoint)
- **About copy** (real brand story to replace draft)
- **Media** (any new hero shots, founder portraits, lifestyle photography)

## 12. Out of Scope

- E-commerce checkout (Shopee handles transactions).
- CMS / admin panel (data lives in `src/data/products.ts`; client edits via PR or future CMS).
- Multilingual (English-only v1; ID can be added later via Astro i18n routing).
- Blog / journal.
- Live product inventory or pricing.
- Authenticated areas, accounts, wishlists.
- Email marketing integration (newsletter signup may be a placeholder field but is not wired).

## 13. Acceptance Criteria

- All 6 pages build with no errors and pass `astro check`.
- All 14 products render on `/products` with their real packaging images.
- A curated selection of production process photos (~12–15 of the strongest) used across the site, with the remainder available in `public/assets/` for future use.
- Real social links live in nav/footer/contact.
- `CONTENT.md` exists with every placeholder enumerated.
- Lighthouse mobile scores meet §8 targets on home, products, manufacturing.
- Site is fully responsive at 375 / 768 / 1280 viewports.
- Animations respect reduced-motion.
- Site deploys cleanly to Vercel/Netlify/Cloudflare Pages with no env vars required.
