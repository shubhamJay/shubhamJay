# Updating site content

All live content lives under `src/content/`. You rarely need to edit templates in `src/pages/` or `src/components/`.

After changes, run `npm run build` locally (or push to `main` — GitHub Actions deploys to Pages).

## Blog post

1. Add `src/content/blog/my-slug.md`:

```markdown
---
title: My post title
description: Short teaser for the list page.
date: 2026-08-01
tags: [engineering, photography]
draft: false
# Optional: link out instead of an on-site article (e.g. Medium / Insights)
# externalUrl: https://example.com/article
---

Your Markdown body here (ignored for list display when externalUrl is set).
```

2. Visit `/blog/my-slug` after build (skipped when `externalUrl` is set — the list links out).

## Engineering project

1. Add `src/content/projects/project-name.md` with frontmatter: `title`, `year`, `stack`, `summary`, optional `cover`, `links`, `featured`, `order`.
2. Optional cover image under `public/images/projects/`.
3. It appears on `/work`.

## Photography genre

See the full walkthrough in **[PHOTOGRAPHY.md](./PHOTOGRAPHY.md)** (genres, series, photos, checklists, troubleshooting).

Quick genre add — `src/content/genres/portraits.md`:

```markdown
---
label: Portraits
description: Quiet environmental frames.
order: 3
---
```

2. The photography index and `/photography/portraits` update automatically.
3. Point photos at this genre via the `genre` field (must match the filename / id, e.g. `portraits`).

## Photography series

1. Add `src/content/series/my-series.md` with `title`, `year`, `genres`, `cover`, `summary`.
2. Add photos with `series: my-series` (matches the filename id).
3. Open `/photography/series/my-series`.

## Photo

1. Put the image file in `public/images/photography/...` (JPEG/WebP/SVG/etc.).
2. Add `src/content/photos/some-id.yaml`:

```yaml
src: /images/photography/my-folder/01.jpg
title: Frame title
genre: landscape
series: monsoon-2025   # optional
date: 2025-07-12
alt: Accessible description of the image
featured: false
```

3. `genre` must match a genres collection id. `series` must match a series id if set.
4. Paths in `src` are site-root paths (start with `/images/...`); the site prefixes GitHub Pages `base` for you.

## Achievement

1. Add `src/content/achievements/2026-something.md`:

```markdown
---
title: Something notable
date: 2026-01-15
category: award   # award | talk | cert | contest | other
summary: One or two sentences.
link: https://example.com   # optional
---
```

2. It appears on `/achievements`, newest first.

## Experience role

1. Add `src/content/experience/08-company.md` with `company`, `role`, `start`, `end`, `summary`, `tech`, `order`.
2. Put bullet details in the Markdown body.
3. Home shows a compact overview (first roles by `order`); `/work` shows the full list.

## About page

Edit `src/content/pages/about.md`. Social URLs and email live in `src/consts.ts`.

A résumé PDF is **not** hosted on the site (avoids publishing a phone number). Use `SOCIAL.cvRequest` (email) or add a redacted PDF under `public/` later if you want downloads again.

## GitHub Pages URL

In `astro.config.mjs`:

- Set `site` to `https://<username>.github.io`
- If the repo is a **project** site, set `base: '/<repo-name>'`
- If the repo is `<username>.github.io`, remove `base` (or set `base: '/'`)

Also update `SITE_TITLE` and `SOCIAL` in `src/consts.ts`.
