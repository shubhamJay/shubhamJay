# Shubham Jaybhaye — personal site

Static personal site for engineering work, photography portfolio, achievements, and blog. Built with [Astro](https://astro.build) and deployable to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Content

- **[CONTENT.md](./CONTENT.md)** — blog, work, achievements, experience, about
- **[PHOTOGRAPHY.md](./PHOTOGRAPHY.md)** — detailed guide to adding genres, series, and photos

Profile photo lives at `public/images/profile/` (referenced from `src/consts.ts`).

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Update `site` / `base` in `astro.config.mjs` for your username and repo name.
3. In the repo **Settings → Pages**, set source to **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow).
