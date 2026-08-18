# ASAP Healthcare & Safety — Website

Multi-page marketing website for a professional First Aid, CPR, AED and workplace
Health & Safety training organization.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react.
Fully static (SSG) — every page is prerendered at build time. No backend; the
enquiry form submits via [Web3Forms](https://web3forms.com).

## Setup

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages statically generated)
npm start       # serve the production build locally
```

> Tip: don't run `npm run build` while `npm run dev` is running — both write to
> `.next` and will corrupt each other. To build while dev is up, use a separate
> output dir: `$env:NEXT_DIST_DIR=".next-build"; npm run build` (PowerShell).

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repo.
3. Framework preset "Next.js" is auto-detected — no configuration needed. Deploy.
4. Add the production domain in Vercel, then update `SITE_URL` in `data/site.ts`
   and redeploy (it drives the sitemap, robots.txt, JSON-LD and Open Graph URLs).

## Deploy to Cloudflare Pages

The site supports a fully static export (`NEXT_OUTPUT=export`), which is what
Cloudflare Pages serves.

1. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to
   **Workers & Pages → Create → Pages → Connect to Git** and select this repo.
2. Configure the build:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variable:** `NEXT_OUTPUT` = `export`
3. Deploy. Every push to `main` redeploys automatically.
4. Attach the production domain under the project's **Custom domains**, then
   update `SITE_URL` in `data/site.ts` and push.

Note: the static export serves images unoptimized (no image CDN resizing), which
is fine for this site's image sizes.

## Where content lives

- **`data/courses.ts`** — every training program (title, overview, who should
  attend, learning points, duration, modes, certification). Course cards, course
  pages, footer links and the contact form dropdown all render from this file.
- **`data/site.ts`** — contact details, stats, founder profile, credentials,
  industries, clients, testimonials, FAQs, site URL, Web3Forms key.

## ⚠ PLACEHOLDER CHECKLIST — complete before launch

- [ ] **WhatsApp number** — `CONTACT.whatsapp` in `data/site.ts` (currently `91XXXXXXXXXX`).
- [ ] **Web3Forms key** — `WEB3FORMS_KEY` in `data/site.ts` (currently `YOUR_WEB3FORMS_KEY`).
      Create a free key at web3forms.com pointed at the business email, then test the form.
- [ ] **Production domain** — `SITE_URL` in `data/site.ts`.
- [ ] **Real photos** — all images are Unsplash placeholders. Replace URLs in
      `components/Hero.tsx`, `app/page.tsx` (experience + founder sections),
      `app/about/page.tsx`, `app/gallery/page.tsx` and `data/courses.ts`.
      If self-hosting photos, put them in `public/` and remove the Unsplash
      `remotePatterns` entry from `next.config.ts`.
- [ ] **Stats confirmation** — the figures in `STATS` (30,000+ trained, 28+
      countries, 250+ clients, 10+ years) are taken from the existing business
      website. **Client must confirm** before launch.
- [ ] **Accreditation logos & claims** — `CREDENTIALS` in `data/site.ts` and the
      credibility sections use placeholder slots. Confirm each accreditation with
      the client and add official logos. Do not launch unverified claims.
- [ ] **Founder details & portrait** — confirm `FOUNDER` in `data/site.ts` and
      replace the portrait placeholder.
- [ ] **Testimonials** — `TESTIMONIALS` in `data/site.ts` are placeholders;
      replace with real client-supplied testimonials (with permission).
- [ ] **Client logos** — `CLIENTS` in `data/site.ts` renders text chips; confirm
      permission and swap in real monochrome logos in `components/LogoWall.tsx`.
- [ ] **Google Map embed** — replace the placeholder panel in `app/contact/page.tsx`.
- [ ] **Social links** — the footer icons in `components/Footer.tsx` point to `#`.
- [ ] **Privacy Policy & Terms** — footer links are placeholders; add real pages.
- [ ] **Compliance wording** — the Factories Act note on `/corporate` is general
      guidance; have the client's compliance advisor confirm the wording.
