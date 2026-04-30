# Yumiyu Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 6-page premium marketing/manufacturing website for Yumiyu using Astro 4 + Tailwind, real brand assets, and a placeholder checklist for missing content.

**Architecture:** Static-generated Astro site, file-based routing, single `products.ts` data source, real images optimized via Astro `<Image>`. No backend; contact form is Formspree-ready. Cream-on-navy editorial palette with Fraunces + Inter typography.

**Tech Stack:** Astro 4, Tailwind CSS 3, TypeScript, `@fontsource-variable/fraunces`, `@fontsource-variable/inter`, `@astrojs/sitemap`, `@astrojs/check`.

**Source folder for assets:** `/Users/fitrilin/Documents/projects/yumiyu/assets/`
**Output folder for site:** `/Users/fitrilin/Documents/projects/yumiyu/site/`

---

## Asset Mapping Reference (used throughout)

When tasks reference asset paths, use these exact source files (copy to `site/public/assets/...` during Task 2):

**Logos:**
- `assets/Yumiyu Logo/opt 3 - blueyellow.png` → `public/assets/logo.png` (primary)
- `assets/Yumiyu Logo/opt 3 - yellowblue.png` → `public/assets/logo-alt.png`

**Packaging (14 flavors):**
- `assets/Packaging Freeze Dried/BEEF.png` → `public/assets/products/beef.png`
- `assets/Packaging Freeze Dried/CHICKEN.png` → `public/assets/products/chicken.png`
- `assets/Packaging Freeze Dried/GOAT MEAT.png` → `public/assets/products/goat-meat.png`
- `assets/Packaging Freeze Dried/EGG YOLK.png` → `public/assets/products/egg-yolk.png`
- `assets/Packaging Freeze Dried/FISH.png` → `public/assets/products/fish.png`
- `assets/Packaging Freeze Dried/MACKEREL TUNA.png` → `public/assets/products/mackerel-tuna.png`
- `assets/Packaging Freeze Dried/PASIFIC MACKEREL.png` → `public/assets/products/pacific-mackerel.png`
- `assets/Packaging Freeze Dried/MIX SEAFOOD.png` → `public/assets/products/mix-seafood.png`
- `assets/Packaging Freeze Dried/MUSSELS.png` → `public/assets/products/mussels.png`
- `assets/Packaging Freeze Dried/SHRIMP.png` → `public/assets/products/shrimp.png`
- `assets/Packaging Freeze Dried/PUMPKIN.png` → `public/assets/products/pumpkin.png`
- `assets/Packaging Freeze Dried/SWEET POTATO.png` → `public/assets/products/sweet-potato.png`
- `assets/Packaging Freeze Dried/TOFU.png` → `public/assets/products/tofu.png`
- `assets/Packaging Freeze Dried/UBE.png` → `public/assets/products/ube.png`

**Production photos (12 curated):**
- `assets/Production Process/Photos/DSC06843.png` → `public/assets/process/p01.png`
- `assets/Production Process/Photos/DSC06865.png` → `public/assets/process/p02.png`
- `assets/Production Process/Photos/DSC06888.png` → `public/assets/process/p03.png`
- `assets/Production Process/Photos/DSC06911.png` → `public/assets/process/p04.png`
- `assets/Production Process/Photos/DSC06948.png` → `public/assets/process/p05.png`
- `assets/Production Process/Photos/DSC06963.png` → `public/assets/process/p06.png`
- `assets/Production Process/Photos/DSCF6271.png` → `public/assets/process/p07.png`
- `assets/Production Process/Photos/DSCF6287.png` → `public/assets/process/p08.png`
- `assets/Production Process/Photos/DSCF6329.png` → `public/assets/process/p09.png`
- `assets/Production Process/Photos/DSCF6354.png` → `public/assets/process/p10.png`
- `assets/Production Process/Photos/DSCF6379.png` → `public/assets/process/p11.png`
- `assets/Production Process/Photos/DSCF6385.png` → `public/assets/process/p12.png`

**USP visuals:**
- `assets/Pembeda (Unique Selling Point)/a4pembeda-kering.png` → `public/assets/usp/dry.png`
- `assets/Pembeda (Unique Selling Point)/a4pembeda-dicelup dalam air.png` → `public/assets/usp/rehydrated.png`

---

## Task 1: Scaffold Astro Project

**Files:**
- Create: `site/` directory
- Create: `site/package.json`, `site/astro.config.mjs`, `site/tailwind.config.mjs`, `site/tsconfig.json`

- [ ] **Step 1: Create the project**

Run from `/Users/fitrilin/Documents/projects/yumiyu/`:
```bash
cd /Users/fitrilin/Documents/projects/yumiyu && npm create astro@latest site -- --template minimal --typescript strict --install --no-git --yes
```
Expected: A `site/` directory created with minimal Astro template.

- [ ] **Step 2: Install Tailwind, sitemap, fonts**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npx astro add tailwind --yes && npx astro add sitemap --yes && npm install @fontsource-variable/fraunces @fontsource-variable/inter
```
Expected: Tailwind + sitemap integrations added to `astro.config.mjs`; font packages installed.

- [ ] **Step 3: Set the site URL in `astro.config.mjs`**

Edit `site/astro.config.mjs`. The file should look like:
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yumiyu.id',
  integrations: [tailwind(), sitemap()],
});
```

- [ ] **Step 4: Verify it builds**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```
Expected: `dist/` produced with no errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git init 2>/dev/null; git add -A site/ && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "chore: scaffold Astro project with Tailwind and sitemap"
```

---

## Task 2: Copy & Organize Brand Assets

**Files:**
- Create: `site/public/assets/{logo.png, logo-alt.png, products/*.png, process/*.png, usp/*.png}`

- [ ] **Step 1: Create asset directories**

```bash
mkdir -p /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/products /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/process /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/usp
```

- [ ] **Step 2: Copy logos**

```bash
cp "/Users/fitrilin/Documents/projects/yumiyu/assets/Yumiyu Logo/opt 3 - blueyellow.png" /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/logo.png
cp "/Users/fitrilin/Documents/projects/yumiyu/assets/Yumiyu Logo/opt 3 - yellowblue.png" /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/logo-alt.png
```

- [ ] **Step 3: Copy product packaging images using mapping above**

```bash
SRC="/Users/fitrilin/Documents/projects/yumiyu/assets/Packaging Freeze Dried"
DST="/Users/fitrilin/Documents/projects/yumiyu/site/public/assets/products"
cp "$SRC/BEEF.png" "$DST/beef.png"
cp "$SRC/CHICKEN.png" "$DST/chicken.png"
cp "$SRC/GOAT MEAT.png" "$DST/goat-meat.png"
cp "$SRC/EGG YOLK.png" "$DST/egg-yolk.png"
cp "$SRC/FISH.png" "$DST/fish.png"
cp "$SRC/MACKEREL TUNA.png" "$DST/mackerel-tuna.png"
cp "$SRC/PASIFIC MACKEREL.png" "$DST/pacific-mackerel.png"
cp "$SRC/MIX SEAFOOD.png" "$DST/mix-seafood.png"
cp "$SRC/MUSSELS.png" "$DST/mussels.png"
cp "$SRC/SHRIMP.png" "$DST/shrimp.png"
cp "$SRC/PUMPKIN.png" "$DST/pumpkin.png"
cp "$SRC/SWEET POTATO.png" "$DST/sweet-potato.png"
cp "$SRC/TOFU.png" "$DST/tofu.png"
cp "$SRC/UBE.png" "$DST/ube.png"
```

- [ ] **Step 4: Copy 12 production process photos**

```bash
SRC="/Users/fitrilin/Documents/projects/yumiyu/assets/Production Process/Photos"
DST="/Users/fitrilin/Documents/projects/yumiyu/site/public/assets/process"
cp "$SRC/DSC06843.png" "$DST/p01.png"
cp "$SRC/DSC06865.png" "$DST/p02.png"
cp "$SRC/DSC06888.png" "$DST/p03.png"
cp "$SRC/DSC06911.png" "$DST/p04.png"
cp "$SRC/DSC06948.png" "$DST/p05.png"
cp "$SRC/DSC06963.png" "$DST/p06.png"
cp "$SRC/DSCF6271.png" "$DST/p07.png"
cp "$SRC/DSCF6287.png" "$DST/p08.png"
cp "$SRC/DSCF6329.png" "$DST/p09.png"
cp "$SRC/DSCF6354.png" "$DST/p10.png"
cp "$SRC/DSCF6379.png" "$DST/p11.png"
cp "$SRC/DSCF6385.png" "$DST/p12.png"
```

- [ ] **Step 5: Copy USP visuals**

```bash
SRC="/Users/fitrilin/Documents/projects/yumiyu/assets/Pembeda (Unique Selling Point)"
DST="/Users/fitrilin/Documents/projects/yumiyu/site/public/assets/usp"
cp "$SRC/a4pembeda-kering.png" "$DST/dry.png"
cp "$SRC/a4pembeda-dicelup dalam air.png" "$DST/rehydrated.png"
```

- [ ] **Step 6: Verify count**

```bash
ls /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/products | wc -l
ls /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/process | wc -l
ls /Users/fitrilin/Documents/projects/yumiyu/site/public/assets/usp | wc -l
```
Expected: `14`, `12`, `2`.

- [ ] **Step 7: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/public/assets && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "chore: copy real brand assets into site/public"
```

---

## Task 3: Configure Tailwind Theme & Global Styles

**Files:**
- Modify: `site/tailwind.config.mjs`
- Create: `site/src/styles/global.css`

- [ ] **Step 1: Replace `tailwind.config.mjs`**

Write the entire contents of `site/tailwind.config.mjs`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F2042',
        'ink-soft': '#2B3A6B',
        gold: '#E8B84A',
        cream: '#FAF6EE',
        paper: '#FFFFFF',
        line: '#E8E2D2',
        muted: '#6B7280',
        success: '#2F6F4F',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
        prose: '1080px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Create `site/src/styles/global.css`**

```css
@import '@fontsource-variable/fraunces';
@import '@fontsource-variable/inter';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    background-color: theme('colors.cream');
    color: theme('colors.ink');
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  body {
    font-family: theme('fontFamily.sans');
    font-size: 16px;
    line-height: 1.6;
  }
  h1, h2, h3, h4 {
    font-family: theme('fontFamily.display');
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.1;
    color: theme('colors.ink');
  }
  ::selection {
    background-color: theme('colors.gold');
    color: theme('colors.ink');
  }
  a {
    color: inherit;
  }
}

@layer components {
  .eyebrow {
    @apply text-xs font-medium uppercase tracking-eyebrow text-ink-soft;
  }
  .btn-primary {
    @apply inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-cream transition hover:bg-ink-soft;
  }
  .btn-ghost {
    @apply inline-flex items-center justify-center rounded-full border border-ink/30 px-7 py-3 text-sm font-medium text-ink transition hover:border-ink hover:bg-ink hover:text-cream;
  }
  .btn-gold {
    @apply inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-medium text-ink transition hover:brightness-95;
  }
  .container-x {
    @apply mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12;
  }
  .section {
    @apply py-16 md:py-24 lg:py-32;
  }
  .hairline {
    @apply border-t border-line;
  }
  .reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
}
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/tailwind.config.mjs site/src/styles/global.css && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: theme tokens and global styles"
```

---

## Task 4: Product Data Module

**Files:**
- Create: `site/src/data/products.ts`

- [ ] **Step 1: Write `site/src/data/products.ts`**

```ts
export type ProductCategory = 'meat' | 'seafood' | 'plant' | 'egg';
export type ProductFor = 'cats' | 'dogs' | 'both';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  benefit: string;
  for: ProductFor;
  weight?: string;
  ingredients?: string[];
  feedingGuide?: string;
}

export const products: Product[] = [
  { slug: 'beef-chunks', name: 'Beef Chunks', category: 'meat', image: '/assets/products/beef.png', benefit: 'Iron-rich red meat. Single ingredient.', for: 'both' },
  { slug: 'chicken-chunks', name: 'Chicken Chunks', category: 'meat', image: '/assets/products/chicken.png', benefit: 'Lean protein. Gentle on digestion.', for: 'both' },
  { slug: 'goat-meat-chunks', name: 'Goat Meat Chunks', category: 'meat', image: '/assets/products/goat-meat.png', benefit: 'Novel protein. Hypoallergenic option.', for: 'dogs' },
  { slug: 'egg-yolk-cubes', name: 'Egg Yolk Cubes', category: 'egg', image: '/assets/products/egg-yolk.png', benefit: 'Choline and healthy fats. Coat support.', for: 'both' },
  { slug: 'fish-chunks', name: 'Fish Chunks', category: 'seafood', image: '/assets/products/fish.png', benefit: 'Omega-3 rich. Skin and coat support.', for: 'both' },
  { slug: 'mackerel-tuna-chunks', name: 'Mackerel Tuna Chunks', category: 'seafood', image: '/assets/products/mackerel-tuna.png', benefit: 'High protein. Naturally aromatic.', for: 'both' },
  { slug: 'pacific-mackerel-chunks', name: 'Pacific Mackerel Chunks', category: 'seafood', image: '/assets/products/pacific-mackerel.png', benefit: 'Cold-water omega-3. Heart-healthy.', for: 'both' },
  { slug: 'mix-seafood', name: 'Mix Seafood Chunks & Whole', category: 'seafood', image: '/assets/products/mix-seafood.png', benefit: 'Variety pack. A taste of the ocean.', for: 'both' },
  { slug: 'mussels-whole', name: 'Mussels Whole', category: 'seafood', image: '/assets/products/mussels.png', benefit: 'Natural glucosamine. Joint support.', for: 'both' },
  { slug: 'shrimp-whole', name: 'Shrimp Whole', category: 'seafood', image: '/assets/products/shrimp.png', benefit: 'Astaxanthin and lean protein.', for: 'both' },
  { slug: 'pumpkin-chunks', name: 'Pumpkin Chunks', category: 'plant', image: '/assets/products/pumpkin.png', benefit: 'Fiber and vitamin A. Digestive support.', for: 'both' },
  { slug: 'sweet-potato-cubes', name: 'Sweet Potato Cubes', category: 'plant', image: '/assets/products/sweet-potato.png', benefit: 'Natural energy. Easy to digest.', for: 'both' },
  { slug: 'tofu-cubes', name: 'Tofu Cubes', category: 'plant', image: '/assets/products/tofu.png', benefit: 'Plant protein. Light and crumbly.', for: 'both' },
  { slug: 'ube-cubes', name: 'Ube Cubes', category: 'plant', image: '/assets/products/ube.png', benefit: 'Antioxidant-rich purple yam.', for: 'both' },
];

export const categoryLabel: Record<ProductCategory, string> = {
  meat: 'Meat',
  seafood: 'Seafood',
  plant: 'Plant-based',
  egg: 'Egg',
};

export const forLabel: Record<ProductFor, string> = {
  cats: 'For cats',
  dogs: 'For dogs',
  both: 'For cats & dogs',
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npx astro check
```
Expected: zero errors. (Warnings about no pages yet are fine.)

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/data && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: product catalog data module"
```

---

## Task 5: Site Configuration & Constants

**Files:**
- Create: `site/src/data/site.ts`

- [ ] **Step 1: Write `site/src/data/site.ts`**

```ts
export const site = {
  name: 'Yumiyu',
  tagline: 'Premium Freeze-Dried Nutrition for Pets',
  description:
    'Yumiyu makes premium freeze-dried pet food and treats for cats and dogs. Single-ingredient, human-grade, crafted in Indonesia.',
  url: 'https://yumiyu.id',
  email: 'hello@yumiyu.id', // PLACEHOLDER — see CONTENT.md
  whatsapp: '+62 000 0000 0000', // PLACEHOLDER — see CONTENT.md
  whatsappUrl: 'https://wa.me/00000000000', // PLACEHOLDER — see CONTENT.md
  address: 'Indonesia', // PLACEHOLDER — see CONTENT.md
  social: {
    instagram: 'https://instagram.com/yumiyu.id',
    tiktok: 'https://tiktok.com/@yumiyu.id',
    shopee: 'https://shopee.co.id/yumiyu.id',
  },
} as const;

export const nav = [
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Private Label', href: '/private-label' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
```

- [ ] **Step 2: Verify**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npx astro check
```
Expected: zero errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/data/site.ts && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: site config constants"
```

---

## Task 6: Nav Component

**Files:**
- Create: `site/src/components/Nav.astro`

- [ ] **Step 1: Write `site/src/components/Nav.astro`**

```astro
---
import { site, nav } from '../data/site';
---

<header class="sticky top-0 z-40 bg-cream/85 backdrop-blur-md transition" id="site-nav">
  <div class="container-x flex items-center justify-between py-5">
    <a href="/" class="flex items-center gap-3" aria-label={site.name}>
      <img src="/assets/logo.png" alt={site.name} class="h-10 w-10 object-contain" width="40" height="40" />
      <span class="font-display text-xl text-ink">{site.name}</span>
    </a>

    <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
      {nav.map((item) => (
        <a href={item.href} class="text-sm text-ink-soft transition hover:text-ink">
          {item.label}
        </a>
      ))}
    </nav>

    <div class="flex items-center gap-3">
      <a href="/private-label" class="hidden md:inline-flex btn-gold">Become a Distributor</a>
      <button id="nav-toggle" class="md:hidden p-2" aria-label="Open menu" aria-expanded="false">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
      </button>
    </div>
  </div>

  <div id="mobile-menu" class="hidden md:hidden border-t border-line bg-cream">
    <nav class="container-x flex flex-col py-6" aria-label="Mobile">
      {nav.map((item) => (
        <a href={item.href} class="py-3 text-lg text-ink">
          {item.label}
        </a>
      ))}
      <a href="/private-label" class="btn-gold mt-4 self-start">Become a Distributor</a>
    </nav>
  </div>
</header>

<script>
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        nav.classList.add('shadow-[0_1px_0_0_rgba(0,0,0,0.06)]');
      } else {
        nav.classList.remove('shadow-[0_1px_0_0_rgba(0,0,0,0.06)]');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
</script>
```

- [ ] **Step 2: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/components/Nav.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: Nav component with mobile menu"
```

---

## Task 7: Footer Component

**Files:**
- Create: `site/src/components/Footer.astro`

- [ ] **Step 1: Write `site/src/components/Footer.astro`**

```astro
---
import { site, nav } from '../data/site';
const year = new Date().getFullYear();
---

<footer class="mt-24 border-t border-line bg-cream">
  <div class="container-x grid gap-12 py-16 md:grid-cols-4">
    <div class="md:col-span-2">
      <div class="flex items-center gap-3">
        <img src="/assets/logo.png" alt={site.name} class="h-10 w-10 object-contain" width="40" height="40" />
        <span class="font-display text-xl text-ink">{site.name}</span>
      </div>
      <p class="mt-4 max-w-sm text-sm text-ink-soft">
        Premium freeze-dried pet food and treats. Single ingredient. Human grade. Crafted in Indonesia.
      </p>
    </div>

    <div>
      <p class="eyebrow">Explore</p>
      <ul class="mt-4 space-y-2 text-sm text-ink-soft">
        {nav.map((item) => (
          <li><a href={item.href} class="hover:text-ink">{item.label}</a></li>
        ))}
      </ul>
    </div>

    <div>
      <p class="eyebrow">Connect</p>
      <ul class="mt-4 space-y-2 text-sm text-ink-soft">
        <li><a href={site.social.instagram} target="_blank" rel="noopener" class="hover:text-ink">Instagram</a></li>
        <li><a href={site.social.tiktok} target="_blank" rel="noopener" class="hover:text-ink">TikTok</a></li>
        <li><a href={site.social.shopee} target="_blank" rel="noopener" class="hover:text-ink">Shopee</a></li>
        <li><a href={`mailto:${site.email}`} class="hover:text-ink">{site.email}</a></li>
        <li><a href={site.whatsappUrl} target="_blank" rel="noopener" class="hover:text-ink">WhatsApp</a></li>
      </ul>
    </div>
  </div>

  <div class="border-t border-line">
    <div class="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted md:flex-row md:items-center">
      <p>&copy; {year} {site.name}. All rights reserved.</p>
      <p>Made in Indonesia.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/components/Footer.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: Footer component"
```

---

## Task 8: Base Layout

**Files:**
- Create: `site/src/layouts/BaseLayout.astro`

- [ ] **Step 1: Write `site/src/layouts/BaseLayout.astro`**

```astro
---
import '../styles/global.css';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import { site } from '../data/site';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const {
  title = site.tagline,
  description = site.description,
  image = '/assets/logo.png',
} = Astro.props;

const fullTitle = title === site.tagline ? `${site.name} — ${title}` : `${title} — ${site.name}`;
const url = Astro.url.toString();
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/assets/logo.png" />
    <meta name="generator" content={Astro.generator} />

    <title>{fullTitle}</title>
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <script type="application/ld+json" set:html={JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: `${site.url}/assets/logo.png`,
      sameAs: [site.social.instagram, site.social.tiktok, site.social.shopee],
    })} />
  </head>
  <body class="min-h-screen bg-cream text-ink antialiased">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">Skip to content</a>
    <Nav />
    <main id="main">
      <slot />
    </main>
    <Footer />
    <script>
      const els = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window && els.length) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        els.forEach((el) => io.observe(el));
      } else {
        els.forEach((el) => el.classList.add('is-visible'));
      }
    </script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/layouts/BaseLayout.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: BaseLayout with SEO meta and reveal observer"
```

---

## Task 9: Shared Section Components

**Files:**
- Create: `site/src/components/SectionHeader.astro`
- Create: `site/src/components/CTABand.astro`
- Create: `site/src/components/ProductCard.astro`
- Create: `site/src/components/ProcessStep.astro`

- [ ] **Step 1: Write `site/src/components/SectionHeader.astro`**

```astro
---
interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}
const { eyebrow, title, subtitle, align = 'left' } = Astro.props;
const alignClass = align === 'center' ? 'text-center mx-auto' : '';
---

<header class={`reveal max-w-3xl ${alignClass}`}>
  {eyebrow && <p class="eyebrow">{eyebrow}</p>}
  <h2 class="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">{title}</h2>
  {subtitle && <p class="mt-5 text-lg text-ink-soft md:text-xl">{subtitle}</p>}
</header>
```

- [ ] **Step 2: Write `site/src/components/CTABand.astro`**

```astro
---
interface Props {
  eyebrow?: string;
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: 'navy' | 'cream';
}
const { eyebrow, title, body, ctaLabel, ctaHref, variant = 'navy' } = Astro.props;
const isNavy = variant === 'navy';
---

<section class={isNavy ? 'bg-ink text-cream' : 'bg-cream'}>
  <div class="container-x section">
    <div class="reveal mx-auto max-w-3xl text-center">
      {eyebrow && <p class={isNavy ? 'eyebrow text-gold' : 'eyebrow'}>{eyebrow}</p>}
      <h2 class={`mt-3 font-display text-4xl md:text-5xl lg:text-6xl ${isNavy ? 'text-cream' : 'text-ink'}`}>{title}</h2>
      {body && <p class={`mt-5 text-lg ${isNavy ? 'text-cream/80' : 'text-ink-soft'}`}>{body}</p>}
      <div class="mt-8 flex justify-center">
        <a href={ctaHref} class={isNavy ? 'btn-gold' : 'btn-primary'}>{ctaLabel}</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Write `site/src/components/ProductCard.astro`**

```astro
---
import type { Product } from '../data/products';
import { forLabel } from '../data/products';

interface Props { product: Product }
const { product } = Astro.props;
---

<article
  data-category={product.category}
  data-for={product.for}
  class="reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition hover:border-ink/20 hover:shadow-[0_20px_60px_-30px_rgba(15,32,66,0.25)]"
>
  <div class="aspect-[4/5] overflow-hidden bg-cream">
    <img
      src={product.image}
      alt={`${product.name} packaging`}
      loading="lazy"
      class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      width="640"
      height="800"
    />
  </div>
  <div class="flex flex-1 flex-col p-6">
    <p class="eyebrow">Freeze-Dried</p>
    <h3 class="mt-2 font-display text-2xl text-ink">{product.name}</h3>
    <p class="mt-2 text-sm text-ink-soft">{product.benefit}</p>
    <p class="mt-4 text-xs uppercase tracking-eyebrow text-muted">{forLabel[product.for]}</p>
  </div>
</article>
```

- [ ] **Step 4: Write `site/src/components/ProcessStep.astro`**

```astro
---
interface Props {
  number: string;
  title: string;
  body: string;
  image: string;
  reverse?: boolean;
}
const { number, title, body, image, reverse = false } = Astro.props;
---

<div class={`reveal grid items-center gap-10 md:grid-cols-2 lg:gap-16 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
  <div class="overflow-hidden rounded-2xl bg-cream">
    <img src={image} alt={title} loading="lazy" class="h-full w-full object-cover" width="900" height="600" />
  </div>
  <div>
    <p class="eyebrow">Step {number}</p>
    <h3 class="mt-3 font-display text-3xl md:text-4xl">{title}</h3>
    <p class="mt-4 text-lg text-ink-soft">{body}</p>
  </div>
</div>
```

- [ ] **Step 5: Build to verify**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npx astro check
```
Expected: zero errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/components && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: shared section, CTA, product, process components"
```

---

## Task 10: Inquiry Form Component

**Files:**
- Create: `site/src/components/InquiryForm.astro`

- [ ] **Step 1: Write `site/src/components/InquiryForm.astro`**

```astro
---
interface Props {
  variant?: 'contact' | 'private-label';
}
const { variant = 'contact' } = Astro.props;
const isPL = variant === 'private-label';
---

<form
  action="https://formspree.io/f/REPLACE_ENDPOINT"
  method="POST"
  class="reveal grid gap-5"
>
  <div class="grid gap-5 md:grid-cols-2">
    <label class="block">
      <span class="eyebrow">Name</span>
      <input type="text" name="name" required class="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-ink focus:outline-none" />
    </label>
    <label class="block">
      <span class="eyebrow">Email</span>
      <input type="email" name="email" required class="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-ink focus:outline-none" />
    </label>
  </div>

  {isPL && (
    <div class="grid gap-5 md:grid-cols-2">
      <label class="block">
        <span class="eyebrow">Company</span>
        <input type="text" name="company" class="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-ink focus:outline-none" />
      </label>
      <label class="block">
        <span class="eyebrow">Country</span>
        <input type="text" name="country" class="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-ink focus:outline-none" />
      </label>
    </div>
  )}

  {isPL && (
    <label class="block">
      <span class="eyebrow">Estimated MOQ</span>
      <input type="text" name="moq" placeholder="e.g. 5,000 units / month" class="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-ink focus:outline-none" />
    </label>
  )}

  <label class="block">
    <span class="eyebrow">{isPL ? 'Project details' : 'Message'}</span>
    <textarea name="message" rows="6" required class="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink focus:border-ink focus:outline-none"></textarea>
  </label>

  <button type="submit" class="btn-primary self-start">
    {isPL ? 'Submit Inquiry' : 'Send Message'}
  </button>

  <p class="text-xs text-muted">Form endpoint is a placeholder — see CONTENT.md.</p>
</form>
```

- [ ] **Step 2: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/components/InquiryForm.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: inquiry form component"
```

---

## Task 11: Home Page

**Files:**
- Create: `site/src/pages/index.astro`
- Modify: delete the existing default `site/src/pages/index.astro` first if present

- [ ] **Step 1: Write `site/src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeader from '../components/SectionHeader.astro';
import CTABand from '../components/CTABand.astro';
import { products } from '../data/products';
import { site } from '../data/site';

const heroImage = '/assets/process/p06.png';
const factoryShots = ['/assets/process/p02.png', '/assets/process/p04.png', '/assets/process/p10.png'];
---

<BaseLayout>
  <!-- Hero -->
  <section class="container-x grid items-center gap-12 pt-12 pb-20 md:grid-cols-2 md:pt-16 md:pb-32 lg:gap-20">
    <div class="reveal">
      <p class="eyebrow">Crafted in Indonesia · Single Ingredient</p>
      <h1 class="mt-4 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
        Premium Freeze-Dried Nutrition for Pets
      </h1>
      <p class="mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
        Real ingredients. Crafted with care for cats and dogs.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href={site.social.shopee} target="_blank" rel="noopener" class="btn-primary">Shop Products</a>
        <a href="/private-label" class="btn-ghost">Become a Distributor</a>
      </div>
    </div>
    <div class="reveal relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream md:aspect-[5/6]">
      <img src={heroImage} alt="Yumiyu freeze-dried production" class="h-full w-full object-cover" loading="eager" fetchpriority="high" width="1200" height="1500" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent"></div>
    </div>
  </section>

  <!-- Why Yumiyu -->
  <section class="section bg-paper">
    <div class="container-x">
      <SectionHeader eyebrow="01 — Our Promise" title="Why Yumiyu" subtitle="Three principles guide every batch we make." />
      <div class="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
        <div class="reveal">
          <p class="font-display text-2xl">Single Ingredient</p>
          <p class="mt-3 text-ink-soft">No fillers, no preservatives, nothing else. Just one real ingredient per pack.</p>
        </div>
        <div class="reveal">
          <p class="font-display text-2xl">Human Grade</p>
          <p class="mt-3 text-ink-soft">Sourced and prepared to standards we'd accept on our own table.</p>
        </div>
        <div class="reveal">
          <p class="font-display text-2xl">Nutrition Locked In</p>
          <p class="mt-3 text-ink-soft">Freeze-drying preserves nutrients and aroma without heat or chemicals.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Flavors showcase -->
  <section class="section">
    <div class="container-x">
      <div class="flex items-end justify-between gap-6">
        <SectionHeader eyebrow="02 — The Range" title="Flavors crafted from real food" />
        <a href="/products" class="hidden text-sm text-ink-soft hover:text-ink md:inline">View all flavors →</a>
      </div>
      <div class="mt-12 -mx-6 overflow-x-auto px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <ul class="flex gap-6 pb-2">
          {products.map((p) => (
            <li class="reveal w-56 shrink-0 sm:w-64">
              <a href={`/products#${p.slug}`} class="group block">
                <div class="aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
                  <img src={p.image} alt={p.name} loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" width="512" height="640" />
                </div>
                <p class="mt-4 font-display text-xl">{p.name}</p>
                <p class="mt-1 text-sm text-ink-soft">{p.benefit}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="/products" class="mt-8 inline-block text-sm text-ink-soft hover:text-ink md:hidden">View all flavors →</a>
    </div>
  </section>

  <!-- Freeze-drying benefits -->
  <section class="section bg-paper">
    <div class="container-x grid items-center gap-12 md:grid-cols-2 lg:gap-20">
      <div class="reveal grid grid-cols-2 gap-4">
        <div class="aspect-square overflow-hidden rounded-2xl bg-cream">
          <img src="/assets/usp/dry.png" alt="Freeze-dried, dry form" class="h-full w-full object-cover" loading="lazy" width="600" height="600" />
        </div>
        <div class="aspect-square overflow-hidden rounded-2xl bg-cream">
          <img src="/assets/usp/rehydrated.png" alt="Rehydrated in water" class="h-full w-full object-cover" loading="lazy" width="600" height="600" />
        </div>
      </div>
      <div>
        <SectionHeader
          eyebrow="03 — The Method"
          title="Why freeze-drying matters"
          subtitle="Low temperature. No additives. Simply real food, made shelf-stable."
        />
        <dl class="reveal mt-10 grid grid-cols-2 gap-6">
          <div><dt class="eyebrow">Nutrients</dt><dd class="mt-2 font-display text-3xl">~98%</dd><dd class="text-sm text-ink-soft">retained</dd></div>
          <div><dt class="eyebrow">Shelf life</dt><dd class="mt-2 font-display text-3xl">12–24mo</dd><dd class="text-sm text-ink-soft">no refrigeration</dd></div>
          <div><dt class="eyebrow">Ingredients</dt><dd class="mt-2 font-display text-3xl">1</dd><dd class="text-sm text-ink-soft">per pack</dd></div>
          <div><dt class="eyebrow">Preservatives</dt><dd class="mt-2 font-display text-3xl">0</dd><dd class="text-sm text-ink-soft">none added</dd></div>
        </dl>
      </div>
    </div>
  </section>

  <!-- Manufacturing band -->
  <section class="bg-ink text-cream">
    <div class="container-x section">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <p class="eyebrow text-gold">04 — The Factory</p>
          <h2 class="mt-3 font-display text-4xl text-cream md:text-5xl lg:text-6xl">A factory built around real ingredients.</h2>
          <p class="mt-5 text-lg text-cream/80">From sourcing to packaging, every step is run in-house. Visit our process to see the standard we hold.</p>
          <a href="/manufacturing" class="mt-8 inline-flex btn-gold">See our process</a>
        </div>
        <div class="md:col-span-7 grid grid-cols-2 gap-4">
          <div class="aspect-[3/4] overflow-hidden rounded-2xl">
            <img src={factoryShots[0]} alt="Production floor" class="h-full w-full object-cover" loading="lazy" width="600" height="800" />
          </div>
          <div class="grid gap-4">
            <div class="aspect-[3/2] overflow-hidden rounded-2xl">
              <img src={factoryShots[1]} alt="Quality control" class="h-full w-full object-cover" loading="lazy" width="600" height="400" />
            </div>
            <div class="aspect-square overflow-hidden rounded-2xl">
              <img src={factoryShots[2]} alt="Packaging" class="h-full w-full object-cover" loading="lazy" width="600" height="600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- OEM CTA -->
  <CTABand
    variant="cream"
    eyebrow="05 — Partnership"
    title="Build your own freeze-dried line with us."
    body="Yumiyu manufactures private label freeze-dried pet food and treats for partners across Asia."
    ctaLabel="Private Label Inquiry"
    ctaHref="/private-label"
  />

  <!-- Testimonials placeholder -->
  <section class="section bg-paper">
    <div class="container-x">
      <SectionHeader eyebrow="06 — Voices" title="Loved by pets, trusted by their humans" />
      <div class="mt-14 grid gap-8 md:grid-cols-3">
        {[1,2,3].map(() => (
          <figure class="reveal rounded-2xl border border-line bg-cream p-8">
            <p class="font-display text-3xl text-gold">"</p>
            <blockquote class="mt-2 text-lg text-ink-soft">Customer review coming soon.</blockquote>
            <figcaption class="mt-6 text-sm text-muted">— Pending content. See CONTENT.md.</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>

  <!-- Contact band -->
  <section class="bg-ink text-cream">
    <div class="container-x section text-center">
      <p class="eyebrow text-gold">07 — Get in touch</p>
      <h2 class="mt-3 font-display text-4xl text-cream md:text-5xl lg:text-6xl">Talk to us.</h2>
      <p class="mt-5 text-lg text-cream/80">Stockists, retailers, and pet families — we'd love to hear from you.</p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a href={site.whatsappUrl} target="_blank" rel="noopener" class="btn-gold">WhatsApp</a>
        <a href={`mailto:${site.email}`} class="rounded-full border border-cream/30 px-7 py-3 text-sm text-cream hover:bg-cream hover:text-ink">{site.email}</a>
        <a href={site.social.instagram} target="_blank" rel="noopener" class="rounded-full border border-cream/30 px-7 py-3 text-sm text-cream hover:bg-cream hover:text-ink">Instagram</a>
      </div>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Build & verify the page**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```
Expected: build succeeds.

- [ ] **Step 3: Manual smoke test**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run preview &
sleep 3
curl -s http://localhost:4321/ | grep -q "Premium Freeze-Dried" && echo "OK" || echo "FAIL"
kill %1 2>/dev/null
```
Expected: `OK`.

- [ ] **Step 4: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/index.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: home page"
```

---

## Task 12: Products Page

**Files:**
- Create: `site/src/pages/products.astro`

- [ ] **Step 1: Write `site/src/pages/products.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeader from '../components/SectionHeader.astro';
import ProductCard from '../components/ProductCard.astro';
import { products, categoryLabel } from '../data/products';

const categories: Array<'all' | keyof typeof categoryLabel> = ['all', 'meat', 'seafood', 'plant', 'egg'];
---

<BaseLayout title="Products" description="Explore Yumiyu's full range of single-ingredient freeze-dried foods and treats.">
  <section class="container-x pt-12 pb-12 md:pt-16">
    <SectionHeader eyebrow="The Range" title="14 single-ingredient flavors" subtitle="Every pack contains one real food, freeze-dried to lock in nutrition and aroma." />

    <div id="filters" class="reveal mt-10 flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          type="button"
          data-filter={c}
          class={`filter-chip rounded-full border px-4 py-2 text-sm transition ${c === 'all' ? 'border-ink bg-ink text-cream' : 'border-line text-ink-soft hover:border-ink hover:text-ink'}`}
          aria-pressed={c === 'all'}
        >
          {c === 'all' ? 'All' : categoryLabel[c]}
        </button>
      ))}
    </div>
  </section>

  <section class="container-x pb-24">
    <div id="product-grid" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div id={p.slug} class="product-item">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
    <p class="mt-12 text-center text-sm text-muted">
      Net weights, ingredient lists, and feeding guides will be added soon. See CONTENT.md.
    </p>
  </section>
</BaseLayout>

<script>
  const chips = document.querySelectorAll<HTMLButtonElement>('.filter-chip');
  const items = document.querySelectorAll<HTMLElement>('.product-item');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.filter || 'all';

      chips.forEach((c) => {
        const active = c === chip;
        c.setAttribute('aria-pressed', String(active));
        c.classList.toggle('border-ink', active);
        c.classList.toggle('bg-ink', active);
        c.classList.toggle('text-cream', active);
        c.classList.toggle('border-line', !active);
        c.classList.toggle('text-ink-soft', !active);
      });

      items.forEach((item) => {
        const card = item.querySelector('article');
        const cat = card?.getAttribute('data-category');
        const visible = value === 'all' || cat === value;
        item.style.display = visible ? '' : 'none';
      });
    });
  });
</script>
```

- [ ] **Step 2: Build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```
Expected: success.

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/products.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: products page with category filter"
```

---

## Task 13: Manufacturing Page

**Files:**
- Create: `site/src/pages/manufacturing.astro`

- [ ] **Step 1: Write `site/src/pages/manufacturing.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeader from '../components/SectionHeader.astro';
import ProcessStep from '../components/ProcessStep.astro';
import CTABand from '../components/CTABand.astro';

const steps = [
  { number: '01', title: 'Ingredient Sourcing', body: 'We work directly with trusted farms and fisheries across Indonesia. Every batch starts with food we would eat ourselves.', image: '/assets/process/p01.png' },
  { number: '02', title: 'Preparation', body: 'Whole ingredients are cleaned, portioned, and arranged on trays by hand. No marinades, no fillers.', image: '/assets/process/p03.png' },
  { number: '03', title: 'Freeze-Drying', body: 'Trays move into low-temperature vacuum chambers, where moisture is sublimated away over 24+ hours — preserving nutrition and structure.', image: '/assets/process/p05.png' },
  { number: '04', title: 'Quality Control', body: 'Each batch is sampled for moisture, weight, and visual integrity before it ever sees a pouch.', image: '/assets/process/p07.png' },
  { number: '05', title: 'Packaging', body: 'Sealed in resealable, moisture-barrier pouches, each pack is coded for full traceability back to its source batch.', image: '/assets/process/p09.png' },
];
---

<BaseLayout title="Manufacturing" description="From sourcing to sealed pouch — see how Yumiyu freeze-dries real food into shelf-stable nutrition.">
  <section class="container-x pt-12 pb-12 md:pt-16">
    <SectionHeader eyebrow="Our Process" title="From whole food to sealed pouch" subtitle="Every Yumiyu pack is the result of five disciplined steps run inside our own facility." />
    <div class="reveal mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-cream">
      <img src="/assets/process/p11.png" alt="Yumiyu factory floor" class="h-full w-full object-cover" loading="eager" width="1600" height="900" />
    </div>
  </section>

  <section class="container-x section space-y-24">
    {steps.map((s, i) => (
      <ProcessStep number={s.number} title={s.title} body={s.body} image={s.image} reverse={i % 2 === 1} />
    ))}
  </section>

  <section class="bg-paper">
    <div class="container-x section">
      <SectionHeader eyebrow="Capability" title="Built to scale, without compromising care." align="center" />
      <dl class="reveal mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div class="text-center"><dt class="eyebrow">Capacity</dt><dd class="mt-3 font-display text-4xl">—</dd><dd class="mt-1 text-sm text-muted">tons / month</dd></div>
        <div class="text-center"><dt class="eyebrow">Lead time</dt><dd class="mt-3 font-display text-4xl">—</dd><dd class="mt-1 text-sm text-muted">weeks</dd></div>
        <div class="text-center"><dt class="eyebrow">MOQ</dt><dd class="mt-3 font-display text-4xl">—</dd><dd class="mt-1 text-sm text-muted">units</dd></div>
        <div class="text-center"><dt class="eyebrow">Certifications</dt><dd class="mt-3 font-display text-4xl">—</dd><dd class="mt-1 text-sm text-muted">on file</dd></div>
      </dl>
      <p class="mt-8 text-center text-sm text-muted">Specific figures available on request. See CONTENT.md.</p>
    </div>
  </section>

  <CTABand
    variant="navy"
    eyebrow="Partnership"
    title="Bring your brand to our factory."
    body="We work with retailers, distributors, and emerging brands to manufacture freeze-dried pet products at scale."
    ctaLabel="Private Label Inquiry"
    ctaHref="/private-label"
  />
</BaseLayout>
```

- [ ] **Step 2: Build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/manufacturing.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: manufacturing page"
```

---

## Task 14: Private Label Page

**Files:**
- Create: `site/src/pages/private-label.astro`

- [ ] **Step 1: Write `site/src/pages/private-label.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeader from '../components/SectionHeader.astro';
import InquiryForm from '../components/InquiryForm.astro';

const offerings = [
  { title: 'What we make', body: 'Single-ingredient freeze-dried treats and food toppers in pouches and bulk formats. Meat, seafood, egg, and plant-based options.' },
  { title: 'How we work', body: 'We translate your brand brief into a finished product — from recipe and pouch design to compliance documentation and shipping.' },
  { title: 'Who we partner with', body: 'Pet specialty retailers, e-commerce brands, and veterinary lines across Southeast Asia and beyond.' },
];

const timeline = [
  { num: '01', label: 'Inquiry' },
  { num: '02', label: 'Recipe' },
  { num: '03', label: 'Sample' },
  { num: '04', label: 'Production' },
  { num: '05', label: 'Delivery' },
];
---

<BaseLayout title="Private Label" description="Yumiyu manufactures premium freeze-dried pet food for partner brands across Asia.">
  <section class="container-x pt-12 pb-12 md:pt-16">
    <SectionHeader eyebrow="OEM / Private Label" title="Your brand. Our craft." subtitle="Yumiyu is a manufacturing partner for retailers and brands building premium freeze-dried lines." />
    <div class="reveal mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-cream">
      <img src="/assets/process/p08.png" alt="Yumiyu private label production" class="h-full w-full object-cover" loading="eager" width="1600" height="900" />
    </div>
  </section>

  <section class="container-x section">
    <div class="grid gap-10 md:grid-cols-3">
      {offerings.map((o) => (
        <div class="reveal rounded-2xl border border-line bg-paper p-8">
          <p class="eyebrow">Capability</p>
          <h3 class="mt-3 font-display text-2xl">{o.title}</h3>
          <p class="mt-3 text-ink-soft">{o.body}</p>
        </div>
      ))}
    </div>
  </section>

  <section class="bg-paper">
    <div class="container-x section">
      <SectionHeader eyebrow="The Process" title="Five steps from idea to delivery" align="center" />
      <ol class="reveal mt-14 grid gap-6 md:grid-cols-5">
        {timeline.map((t) => (
          <li class="rounded-2xl border border-line bg-cream p-6 text-center">
            <p class="eyebrow">Step</p>
            <p class="mt-2 font-display text-3xl">{t.num}</p>
            <p class="mt-2 text-sm text-ink-soft">{t.label}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>

  <section class="container-x section">
    <div class="grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <SectionHeader eyebrow="Inquiry" title="Tell us about your project." subtitle="We respond within two business days." />
      </div>
      <div class="lg:col-span-7">
        <InquiryForm variant="private-label" />
      </div>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/private-label.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: private-label page"
```

---

## Task 15: About Page

**Files:**
- Create: `site/src/pages/about.astro`

- [ ] **Step 1: Write `site/src/pages/about.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeader from '../components/SectionHeader.astro';
import CTABand from '../components/CTABand.astro';

const values = [
  { title: 'Real food first', body: 'Whole ingredients, freeze-dried. Nothing else added. Nothing taken away.' },
  { title: 'Made by hand', body: 'Small-batch production in our own facility means we taste, weigh, and inspect every batch.' },
  { title: 'Transparent always', body: 'Where it came from, who made it, and what is in the pack — always traceable.' },
];

const teamPhotos = ['/assets/process/p12.png', '/assets/process/p02.png'];
---

<BaseLayout title="About" description="The story behind Yumiyu — a freeze-dried pet food brand and manufacturer based in Indonesia.">
  <section class="container-x pt-12 pb-12 md:pt-16">
    <SectionHeader
      eyebrow="Our Story"
      title="A pet food company that runs its own factory."
      subtitle="We started Yumiyu because we wanted to know exactly what was in every pack we fed our own pets. So we built the factory. (Real founder story will replace this — see CONTENT.md.)"
    />
    <div class="reveal mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-cream">
      <img src="/assets/process/p06.png" alt="Yumiyu team at work" class="h-full w-full object-cover" loading="eager" width="1600" height="900" />
    </div>
  </section>

  <section class="container-x section">
    <div class="grid gap-12 md:grid-cols-2 lg:gap-20">
      <div class="reveal prose-lg max-w-none text-ink-soft">
        <p class="font-display text-2xl text-ink">From kitchen idea to in-house factory.</p>
        <p class="mt-6">Yumiyu is a small team of pet people who care about real food. We freeze-dry single ingredients — meat, seafood, eggs, vegetables — into shelf-stable nutrition that pets actually want to eat.</p>
        <p class="mt-4">Every pack is made in our facility in Indonesia, with ingredients we source ourselves and standards we wrote ourselves. (Final brand story to replace this draft — see CONTENT.md.)</p>
      </div>
      <div class="grid gap-4">
        <div class="aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
          <img src={teamPhotos[0]} alt="Yumiyu facility" class="h-full w-full object-cover" loading="lazy" width="800" height="600" />
        </div>
        <div class="aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
          <img src={teamPhotos[1]} alt="Yumiyu team" class="h-full w-full object-cover" loading="lazy" width="800" height="600" />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-paper">
    <div class="container-x section">
      <SectionHeader eyebrow="Our Values" title="Three principles, written down." />
      <div class="mt-14 grid gap-10 md:grid-cols-3">
        {values.map((v) => (
          <div class="reveal">
            <p class="font-display text-2xl">{v.title}</p>
            <p class="mt-3 text-ink-soft">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <CTABand
    variant="cream"
    title="Come say hello."
    body="Stockists, distributors, partners, and pet families — we'd love to meet you."
    ctaLabel="Contact us"
    ctaHref="/contact"
  />
</BaseLayout>
```

- [ ] **Step 2: Build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/about.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: about page"
```

---

## Task 16: Contact Page

**Files:**
- Create: `site/src/pages/contact.astro`

- [ ] **Step 1: Write `site/src/pages/contact.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SectionHeader from '../components/SectionHeader.astro';
import InquiryForm from '../components/InquiryForm.astro';
import { site } from '../data/site';
---

<BaseLayout title="Contact" description="Reach Yumiyu via WhatsApp, email, Instagram, TikTok, or Shopee.">
  <section class="container-x pt-12 pb-12 md:pt-16">
    <SectionHeader eyebrow="Contact" title="Talk to us." subtitle="We answer messages within two business days." />
  </section>

  <section class="container-x pb-24">
    <div class="grid gap-16 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <InquiryForm variant="contact" />
      </div>
      <aside class="lg:col-span-5 space-y-8">
        <div class="reveal rounded-2xl border border-line bg-paper p-8">
          <p class="eyebrow">Direct channels</p>
          <ul class="mt-4 space-y-3 text-ink-soft">
            <li><a href={site.whatsappUrl} target="_blank" rel="noopener" class="text-ink hover:underline">WhatsApp · {site.whatsapp}</a></li>
            <li><a href={`mailto:${site.email}`} class="text-ink hover:underline">{site.email}</a></li>
          </ul>
        </div>
        <div class="reveal rounded-2xl border border-line bg-paper p-8">
          <p class="eyebrow">Find us online</p>
          <ul class="mt-4 space-y-3 text-ink-soft">
            <li><a href={site.social.instagram} target="_blank" rel="noopener" class="text-ink hover:underline">Instagram · @yumiyu.id</a></li>
            <li><a href={site.social.tiktok} target="_blank" rel="noopener" class="text-ink hover:underline">TikTok · @yumiyu.id</a></li>
            <li><a href={site.social.shopee} target="_blank" rel="noopener" class="text-ink hover:underline">Shopee · yumiyu.id</a></li>
          </ul>
        </div>
        <div class="reveal rounded-2xl border border-line bg-paper p-8">
          <p class="eyebrow">Visit</p>
          <p class="mt-4 text-ink-soft">{site.address}</p>
          <p class="mt-2 text-xs text-muted">Full address & map will be added — see CONTENT.md.</p>
        </div>
      </aside>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/contact.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: contact page"
```

---

## Task 17: 404 Page

**Files:**
- Create: `site/src/pages/404.astro`

- [ ] **Step 1: Write `site/src/pages/404.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page not found" description="The page you're looking for doesn't exist.">
  <section class="container-x flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
    <p class="eyebrow">404</p>
    <h1 class="mt-4 font-display text-5xl md:text-7xl">This page wandered off.</h1>
    <p class="mt-5 max-w-md text-lg text-ink-soft">It may have followed a treat. Let's get you back home.</p>
    <a href="/" class="mt-8 btn-primary">Back to home</a>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/src/pages/404.astro && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: 404 page"
```

---

## Task 18: robots.txt

**Files:**
- Create: `site/public/robots.txt`

- [ ] **Step 1: Write `site/public/robots.txt`**

```
User-agent: *
Allow: /
Sitemap: https://yumiyu.id/sitemap-index.xml
```

- [ ] **Step 2: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/public/robots.txt && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "feat: robots.txt"
```

---

## Task 19: CONTENT.md Checklist

**Files:**
- Create: `site/CONTENT.md`

- [ ] **Step 1: Write `site/CONTENT.md`**

```markdown
# Yumiyu Site — Content Checklist

This file enumerates every placeholder in the live site. Replace each item with real content before launch.

## 1. Brand & Company

- [ ] **Email** — `src/data/site.ts` → `email`. Currently `hello@yumiyu.id`.
- [ ] **WhatsApp number** — `src/data/site.ts` → `whatsapp` and `whatsappUrl`. Currently placeholder.
- [ ] **Factory address** — `src/data/site.ts` → `address`. Currently just `"Indonesia"`.
- [ ] **Founder/team bios** — `src/pages/about.astro`, "Our Story" section. Currently a draft narrative.
- [ ] **Founding year** — Add to About if desired.
- [ ] **Certifications** — HACCP, ISO, BPOM etc. Add to Manufacturing capability strip.
- [ ] **Founder portrait / team photo** — Currently using factory photos as stand-ins on About.

## 2. Products (`src/data/products.ts`)

For each of the 14 flavors, fill in the optional fields on each `Product`:

- [ ] `weight` — net weight per pack (e.g. "50g").
- [ ] `ingredients` — full ingredient list (typically a single item).
- [ ] `feedingGuide` — feeding instructions / serving suggestions.
- [ ] **Cat/dog targeting confirmation** — currently `goat-meat-chunks` is set to `dogs` only and the rest are `both`. Confirm.
- [ ] **Shopee deep-link per product** — optional, can be added to the `Product` type.
- [ ] **Pricing** — handled on Shopee, not surfaced on the website by default.

## 3. Capability Stats (`src/pages/manufacturing.astro`)

The capability strip currently shows em-dashes:

- [ ] **Capacity** — tons / month.
- [ ] **Lead time** — weeks.
- [ ] **MOQ** — minimum order quantity.
- [ ] **Certifications count** — how many you hold.

## 4. Testimonials (`src/pages/index.astro`)

Three placeholder cards in the testimonials section:

- [ ] Replace each with a real quote, attribution, and (optionally) a small avatar.

## 5. Inquiry Form Endpoint (`src/components/InquiryForm.astro`)

- [ ] Replace `https://formspree.io/f/REPLACE_ENDPOINT` with a real Formspree (or alternative) form endpoint.

## 6. Contact Page (`src/pages/contact.astro`)

- [ ] Replace the address card text once the full factory address is finalized.
- [ ] Optionally add a Google Maps embed under the address card.

## 7. About Copy (`src/pages/about.astro`)

- [ ] Replace the draft "Our Story" paragraphs with the real founder story.
- [ ] Optionally swap `teamPhotos` for real team portraits if available.

## 8. Imagery (optional upgrades)

- [ ] **Hero image** — currently uses `process/p06.png`. Swap to a dedicated lifestyle/hero shot if one is produced later.
- [ ] **Lifestyle photography** — pets eating Yumiyu in real homes would significantly elevate the brand feel.
- [ ] **Founder portrait** — would replace About's factory photos.

## 9. Legal (optional)

- [ ] **Privacy policy page** — required if you collect form data.
- [ ] **Terms of service** — required if you ever take payments directly.
```

- [ ] **Step 2: Commit**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git add -A site/CONTENT.md && git -c user.email=dev@yumiyu.local -c user.name=dev commit -m "docs: CONTENT.md placeholder checklist"
```

---

## Task 20: Final Build, Smoke Test & Verification

**Files:** none (verification only)

- [ ] **Step 1: Run typecheck**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npx astro check
```
Expected: 0 errors, 0 warnings.

- [ ] **Step 2: Production build**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && npm run build
```
Expected: success; `dist/` populated.

- [ ] **Step 3: Verify all 6 pages + 404 + sitemap exist**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && for p in index products manufacturing private-label about contact 404; do test -f "dist/$p/index.html" || test -f "dist/$p.html" && echo "✓ $p" || echo "✗ $p MISSING"; done && test -f "dist/sitemap-index.xml" && echo "✓ sitemap" || echo "✗ sitemap MISSING"
```
Expected: 7 ✓ lines plus sitemap ✓.

- [ ] **Step 4: Preview server smoke test**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && (npm run preview &) && sleep 3 && for path in / /products /manufacturing /private-label /about /contact; do code=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:4321$path); echo "$code  $path"; done; pkill -f "astro preview" 2>/dev/null || true
```
Expected: every line starts with `200`.

- [ ] **Step 5: Verify each page contains its key copy**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && (npm run preview &) && sleep 3 && \
curl -s http://localhost:4321/ | grep -q "Premium Freeze-Dried Nutrition" && echo "✓ home headline" && \
curl -s http://localhost:4321/products | grep -q "single-ingredient" && echo "✓ products headline" && \
curl -s http://localhost:4321/manufacturing | grep -q "From whole food to sealed pouch" && echo "✓ manufacturing headline" && \
curl -s http://localhost:4321/private-label | grep -q "Your brand. Our craft." && echo "✓ private-label headline" && \
curl -s http://localhost:4321/about | grep -q "runs its own factory" && echo "✓ about headline" && \
curl -s http://localhost:4321/contact | grep -q "Talk to us" && echo "✓ contact headline" ; \
pkill -f "astro preview" 2>/dev/null || true
```
Expected: 6 ✓ lines.

- [ ] **Step 6: Verify all 14 product images are referenced in the built site**

```bash
cd /Users/fitrilin/Documents/projects/yumiyu/site && for img in beef chicken goat-meat egg-yolk fish mackerel-tuna pacific-mackerel mix-seafood mussels shrimp pumpkin sweet-potato tofu ube; do grep -rq "/assets/products/$img.png" dist/ && echo "✓ $img" || echo "✗ $img MISSING"; done
```
Expected: 14 ✓ lines.

- [ ] **Step 7: Final commit**

If anything was tweaked during verification, commit it. Otherwise:
```bash
cd /Users/fitrilin/Documents/projects/yumiyu && git -c user.email=dev@yumiyu.local -c user.name=dev commit --allow-empty -m "chore: site v1 verified — all pages build and serve cleanly"
```
