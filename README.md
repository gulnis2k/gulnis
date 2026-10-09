# Gul NiS Homey Bakes by SK

A premium, responsive, single-page bakery website for **Gul NiS Homey Bakes by SK**, based in Coimbatore, Tamil Nadu, India.

The website showcases cakes and desserts, allows visitors to browse products by category, and directs orders to WhatsApp. Product content and images are managed through Sanity CMS.

## Features

- Responsive, mobile-first homepage
- Product listings with category filtering
- Sanity CMS integration for product management
- WhatsApp-based ordering and customer enquiries
- Custom cake and jar cake enquiries
- Frequently Asked Questions (FAQ) section
- Contact information and location details
- SEO metadata and social sharing metadata
- Local business structured data, sitemap, and robots configuration
- Optimized product images and descriptive alternative text

## Technology Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS and media assets:** Sanity
- **Hosting:** See `docs/DEPLOYMENT.md` for the current deployment configuration.

## Local Development

### Requirements

- Node.js compatible with the project
- npm
- Access to the project's Sanity configuration and environment variables

### Setup

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and configure the required environment variables.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

### Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Run only scripts defined in `package.json`. If a script is unavailable, use the equivalent command documented by the project.

## Managing Products

Product content is managed through Sanity Studio. Authorized editors can update product information and images without changing the website's source code.

For instructions on CMS setup, product fields, image alternative text, and product management, see `docs/CMS.md`.

Product images are stored as Sanity assets rather than being added directly to the repository. Storage limits depend on the Sanity plan.

## Orders and Customisation

Customers can contact the bakery through WhatsApp to enquire about products, availability, custom cakes, and jar cake options.

Cakes can be customised as jar cakes. Prices may vary depending on the selected sponge, flavour, and customisation. Customers should confirm pricing and availability directly with the bakery.

## SEO and Deployment

The project includes metadata and technical SEO configuration intended to help search engines understand the website. These features do not guarantee search rankings.

Before deployment, verify the required environment variables, Sanity access, production domain, sitemap, robots configuration, and WhatsApp and contact links.

Refer to the `docs/` directory for architecture, CMS setup, SEO, deployment, and project progress documentation.

## Security

- Never commit API tokens, passwords, or credentials.
- Keep local environment files out of version control.
- Give collaborators only the access they need.

## Repository

This repository contains the source code for the Gul NiS Homey Bakes by SK website.
