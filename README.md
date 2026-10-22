# BnB Cloud Services — Website

Static services website for BnB Cloud Services, a software house offering custom ERP, web development, website design, SEO, e-commerce and cloud hosting.

Built with Next.js (App Router), TypeScript and Tailwind CSS, exported as a fully static site.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # writes static HTML/CSS/JS to ./out
```

Upload the contents of `out/` to any static web host.

## Customising

- **Company details, services, stats:** `src/lib/site.ts`
- **Brand colours:** CSS variables at the top of `src/app/globals.css`
- **Logo:** `src/components/Logo.tsx`
