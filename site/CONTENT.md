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

## 4. Testimonials

Section removed from the home page for now. When you have real customer quotes (3+), re-add a "Voices" section to `src/pages/index.astro` with quote, attribution, and (optionally) a small avatar per card.

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
