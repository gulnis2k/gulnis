# Deployment Guide

## Vercel Deployment
The production application is designed to be hosted on Vercel.

### Steps
1. Push the code to a GitHub repository.
2. Import the project in Vercel.
3. Configure Environment Variables (e.g., Sanity project ID, dataset, WhatsApp number).
4. Ensure the Build Command is `npm run build` and Output Directory is `.next`.
5. Deploy.

## Domain Configuration
- Configure the custom domain `https://gulnis.in` in the Vercel dashboard.
- Update DNS records with your registrar to point to Vercel's nameservers or A record.

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`=https://gulnis.in
- `NEXT_PUBLIC_SANITY_PROJECT_ID`=...
- `NEXT_PUBLIC_SANITY_DATASET`=production
- `NEXT_PUBLIC_WHATSAPP_NUMBER`=...
