# Adhi Annam Coir Comforts – Website

Corporate website for **Adhi Annam Coir Comforts Pvt. Ltd.** (Pollachi, Tamil Nadu), a manufacturer and exporter of coconut coir products since 2007. The site rebuilds the content and structure of <https://www.adhiannamcoir.com> as a Next.js application.

## Pages

Description 
The website includes several pages designed to provide visitors with complete information about Adhi Annam Coir. The Home page features a hero section, product categories, blog highlights, company strengths, clients and a call-to-action section. The About page presents the company's story, global reach, vision, mission, management team, certifications and core values. The Products section showcases all nine product categories, with individual category pages displaying available products and detailed product pages providing specifications, applications and enquiry options. The Trade Shows page highlights exhibition history and the PackVision Expo 2026 listing. The Blog section provides blog articles with individual article detail pages. Finally, the Contact page includes company contact information, an enquiry form that opens the visitor's email application, and a location map.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) with React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion (home page animations)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Project structure

```
app/                 Routes (pages, layout, 404)
components/          Header and Footer
data/products.ts     Product categories and product lists
data/blog.ts         Blog articles (titles, images, links)
public/              Logo, hero banner, certificates, product images
```

## Editing content

- **Add or change a product:** edit `data/products.ts` and add its specifications in `data/product-details.ts`. Place product photos in `public/products/`.
- **Add a blog article:** add an object to `data/blog.ts`.
- **Contact details:** update `components/Footer.tsx` and `app/contact/page.tsx`.

## Notes

- The enquiry form uses a `mailto:` link, so it opens the visitor's email application with the enquiry pre-filled.
- Product and blog imagery is stored locally under `public/`.
