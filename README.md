# Adhi Annam Coir Comforts – Website

Corporate website for **Adhi Annam Coir Comforts Pvt. Ltd.**, based in Pollachi, Tamil Nadu. The company is a manufacturer and exporter of coconut coir products since 2007. This project recreates the content and structure of the [official Adhi Annam Coir website](https://www.adhiannamcoir.com) using Next.js.

## Website Overview

The website provides visitors with comprehensive information about Adhi Annam Coir, its products, services and company background. The Home page showcases product categories, blog highlights, company strengths, clients and call-to-action sections. The About page presents the company's history, global presence, vision, mission, management team, certifications and core values.

The Products section features nine product categories, with dedicated category pages displaying available products and individual product pages containing specifications, applications and enquiry options. The Trade Shows page highlights exhibition history and the PackVision Expo 2026 listing. The Blog section includes blog articles and individual article detail pages. The Contact page provides company contact information, an enquiry form that opens the visitor's email application, and a location map.

## Tech Stack

- **Next.js 16** – App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** – Home page animations
- **Lucide React** – Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Project Structure

```text
app/                 Routes (pages, layout, 404)
components/          Header and Footer
data/products.ts     Product categories and product lists
data/blog.ts         Blog articles (titles, images, links)
public/              Logo, hero banner, certificates, product images
```

