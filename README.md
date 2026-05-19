# PromoGent Solutions — Marketing Site

A premium, dark-mode marketing site for **PromoGent Solutions PVT LTD**, built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

The site leads with **CRO & Traffic Optimization** as the core service for SMBs, and positions **AWS Cloud Adoption** as the enterprise track. Supporting service tiles cover WordPress, Shopify, Next.js, React Native and Flutter.

## Stack

- Next.js 14 (App Router, RSC)
- React 18 + TypeScript
- Tailwind CSS 3.4 with a custom dark theme
- `lucide-react` for icons
- Google Fonts (Inter + Manrope) via CSS

## Getting started

```bash
# 1. Install
npm install

# 2. Dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build
npm run start
```

## Project structure

```
promogent-site/
├── app/
│   ├── globals.css        # Tailwind base + custom theme (gradients, glass, grid bg)
│   ├── layout.tsx         # Root layout, SEO metadata
│   └── page.tsx           # Home page composition
├── components/
│   ├── Navbar.tsx         # Sticky glass navbar with mobile menu
│   ├── Hero.tsx           # CRO + Traffic Optimization hero banner with mock dashboard
│   ├── Services.tsx       # 6 service tiles (CRO, WP, Shopify, Next.js, mobile, AWS)
│   ├── Tracks.tsx         # SMB vs Enterprise dual-track section
│   ├── Process.tsx        # 4-step CRO recovery method
│   ├── Proof.tsx          # Fiverr top-rated proof + testimonials
│   ├── CTA.tsx            # Closing CTA with audit request form
│   └── Footer.tsx         # Footer with India legal info
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Customizing

- **Brand name / tagline** — `components/Navbar.tsx`, `components/Hero.tsx`
- **Services & deliverables** — `components/Services.tsx` (`services` array)
- **Pricing / engagement** — `components/Tracks.tsx`
- **Testimonials & stats** — `components/Proof.tsx`
- **Contact form action** — wire up `components/CTA.tsx` to your API route or form provider (Formspree, Resend, etc.)
- **Colors** — `tailwind.config.ts` (`colors.brand`, `colors.ink`, `colors.cyan`, `colors.accent`)

## Deployment

Deploys cleanly to Vercel (zero config). Just push to a repo and import:

```bash
npx vercel
```

Or build statically and deploy anywhere:

```bash
npm run build
```
