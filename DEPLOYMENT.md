# Deploying to Vercel

## One-time setup

1. Push this branch to GitHub (or ensure your remote is accessible to Vercel).
2. Log in to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import the `montel-dev` repository.
4. Vercel will auto-detect Next.js. Accept the default settings — they match `vercel.json`.
5. Click **Deploy**. Your first production deployment will build and go live.

## Environment variables

No environment variables are required for the base portfolio. If you add contact form
functionality (e.g. Resend, SendGrid) later, add the API key in the Vercel dashboard
under **Settings → Environment Variables**.

## Custom domain

In the Vercel dashboard go to **Settings → Domains** and add your domain. Vercel
provides automatic HTTPS via Let's Encrypt.

## Continuous deployment

Every push to the `main` branch triggers a new production deployment automatically.
Pull request branches get preview deployment URLs.
