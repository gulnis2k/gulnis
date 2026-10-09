# SEO Strategy

## COMPLETED
- Next.js Metadata API for Title, Description.
- Open Graph and Twitter Card metadata for social sharing.
- Semantic HTML tags (nav, main, section, footer, h1-h6).
- `metadataBase` explicitly set to `https://gulnis.in`.
- Heading Hierarchy: H1 tags implemented correctly on the homepage (`Hero.tsx`) and the Products page (`AllProducts.tsx`).
- `sitemap.ts` and `robots.ts` configured for production domain (`https://gulnis.in`).
- Next.js Image component optimization (`<Image>`) for LCP performance.
- Accessibility (A11y) `aria-label` tags on icons and dynamic WhatsApp buttons.
- Business Information Verification: Location set to Coimbatore in metadata and UI.
- Sanity Dynamic Alt Text: `imageAlt` field added to Product schema and integrated via frontend fallback `product.imageAlt || product.name`.
- Structured Data: `Bakery` / `LocalBusiness` JSON-LD schema injected in layout.
- Structured Data: `Product` JSON-LD schema array injected dynamically in `AllProducts` and `BestSellers` for CMS items.
- Production build validation (TypeScript/ESLint).
- FINAL CLIENT VERIFICATION: Official business name ("Gul NiS Homey Cakes by SK"), Address, Phone, WhatsApp, Social media, YouTube, Opening hours, and Google Maps location have been verified and integrated into the site.

## FUTURE SEO EXPANSION
- Set up Google Search Console and verify `https://gulnis.in` (add verification meta tag in `layout.tsx`).
- Dynamically generate sitemap for individual product categories.
