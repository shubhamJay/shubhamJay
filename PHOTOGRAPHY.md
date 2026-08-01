# Adding photography to your portfolio

This guide walks through how the photography section is structured and how to publish new genres, series, and photos **without editing page templates**.

After any content change:

```bash
npm run dev      # preview locally
npm run build    # production build (also runs on GitHub Actions when you push)
```

---

## Mental model

```
Genres  →  stable categories (Street, Landscape, Portraits, …)
Series  →  named bodies of work / trips (Monsoon 2025, Street Notes, …)
Photos  →  individual frames that point at one genre + optional series
```

| You want to… | You add… | Shows up on… |
|--------------|----------|--------------|
| New category | `src/content/genres/<id>.md` | `/photography`, `/photography/<id>` |
| New project / trip | `src/content/series/<id>.md` | `/photography`, `/photography/series/<id>` |
| New image | file in `public/images/…` + `src/content/photos/<id>.yaml` | Genre page, series page, featured grids |

**IDs** are the filenames without extension (e.g. `monsoon-2025.md` → id `monsoon-2025`). Use lowercase kebab-case.

---

## Folder layout

```
public/images/photography/
  monsoon-2025/
    01.jpg
    02.jpg
  himalaya-2026/
    ridge-light.jpg

src/content/
  genres/
    landscape.md
    street.md
    portraits.md
  series/
    monsoon-2025.md
  photos/
    monsoon-01.yaml
    monsoon-02.yaml
```

Image files go under `public/` (served as-is). Metadata goes under `src/content/photos/` as YAML.

---

## Step 1 — Prepare image files

1. Export from Lightroom / Photos / etc. as **JPEG** or **WebP** (prefer WebP or compressed JPEG for faster loads).
2. Recommended longest edge: **1600–2400px** for portfolio; avoid uploading 40MP originals.
3. Strip GPS if you care about location privacy (Photos → export without location, or use a tool to strip EXIF).
4. Put files in a folder per series, e.g.:

```bash
mkdir -p public/images/photography/himalaya-2026
# then copy your JPGs into that folder
```

5. Public URL path will be `/images/photography/himalaya-2026/ridge-light.jpg`  
   (the site automatically prefixes GitHub Pages `base` if needed).

**Do not** put originals only in `src/` — the gallery reads paths under `public/`.

---

## Step 2 — Genre (only if new)

If the genre already exists (`landscape`, `street`, `portraits`), skip this.

Create `src/content/genres/events.md`:

```markdown
---
label: Events
description: Gatherings, celebrations, and candid moments in motion.
order: 4
---

Optional longer notes about how you shoot this genre.
```

- `label` — display name  
- `description` — short line on the photography index  
- `order` — sort position (lower = first)

The route `/photography/events` is generated automatically.

---

## Step 3 — Series (recommended for a trip or body of work)

Create `src/content/series/himalaya-2026.md`:

```markdown
---
title: Himalaya 2026
year: 2026
genres: [landscape]
cover: /images/photography/himalaya-2026/ridge-light.jpg
summary: High ridges, thin air, and long blue hours.
featured: true
---

A short paragraph about the series — what you chased, when, where.
This Markdown body appears on the series page under the cover.
```

| Field | Required | Notes |
|-------|----------|--------|
| `title` | yes | Series name |
| `year` | yes | Number |
| `genres` | no | List of genre **ids** (must match genre filenames) |
| `cover` | yes | Path starting with `/images/...` |
| `summary` | yes | One–two sentence teaser |
| `featured` | no | Currently informational; use for your own filtering later |

Visit `/photography/series/himalaya-2026` after build.

---

## Step 4 — Register each photo (YAML)

One YAML file per image in `src/content/photos/`.

Example `src/content/photos/himalaya-ridge.yaml`:

```yaml
src: /images/photography/himalaya-2026/ridge-light.jpg
title: Ridge light
genre: landscape
series: himalaya-2026
date: 2026-04-12
alt: Soft light along a high Himalayan ridge under cloud
featured: true
```

| Field | Required | Notes |
|-------|----------|--------|
| `src` | yes | Must match a file under `public/` |
| `title` | yes | Caption title |
| `genre` | yes | Must equal a genre id (`landscape`, not `Landscape`) |
| `series` | no | Must equal a series id if set |
| `date` | yes | `YYYY-MM-DD` (sorts galleries) |
| `alt` | yes | Accessibility description — be specific |
| `featured` | no | `true` → can appear in “Featured frames” on `/photography` |

### Batch tip

For ten photos in one series, create ten YAML files (or copy-paste and change `src` / `title` / `alt`). Naming the YAML file something memorable (`himalaya-01.yaml`) keeps git history clear; the filename is the content id, not the URL of the image.

---

## Step 5 — Check it live

```bash
npm run dev
```

Open:

- `/photography` — genres + series list + featured  
- `/photography/landscape` — all photos with `genre: landscape`  
- `/photography/series/himalaya-2026` — photos with `series: himalaya-2026`

If a page is empty: the `genre` / `series` string in YAML does not match the content file id, or `src` points at a missing file.

---

## Featured frames

On `/photography`, “Featured frames” lists photos with `featured: true` (newest first, capped). Use this for your strongest work across genres.

---

## Download protection

Gallery images use a `ProtectedPhoto` wrapper (no drag, no right-click save overlay). This **deters** casual downloads; it is not DRM. Anyone can still capture via screenshots or DevTools. For stronger protection you’d need watermarks or a paid image host — out of scope for this static setup.

---

## Replacing sample placeholders

The repo ships with SVG placeholders under `public/images/photography/`. To replace:

1. Drop real JPEGs into the same folders (or new folders).  
2. Update each photo YAML `src` (and series `cover`) to the new paths.  
3. Delete unused SVGs when you’re done.

---

## Instagram

Portfolio on this site is independent of Instagram. Handles linked in the site:

- [@memories_in_jpg](https://www.instagram.com/memories_in_jpg)  
- [@clicks.by.shubham](https://www.instagram.com/clicks.by.shubham)  

Edit URLs in `src/consts.ts` (`SOCIAL.instagramMemories` / `SOCIAL.instagramClicks`).

---

## Common mistakes

| Symptom | Likely cause |
|---------|----------------|
| Build error on photo YAML | Typo in field name, or invalid date |
| Genre page empty | `genre: Landscape` instead of `genre: landscape` |
| Series page empty | `series` id ≠ series filename |
| Broken image icon | `src` path wrong or file not under `public/` |
| Image missing on GitHub Pages | Forgot to commit the image file; or `base` misconfigured in `astro.config.mjs` |

---

## Minimal checklist for a new trip

1. [ ] Export & resize images  
2. [ ] `mkdir public/images/photography/<trip-id>/` and copy files  
3. [ ] Add `src/content/series/<trip-id>.md` (cover = one of the images)  
4. [ ] Add one YAML per photo under `src/content/photos/`  
5. [ ] `npm run dev` → verify genre + series pages  
6. [ ] Commit & push → GitHub Actions deploys  

For other content types (blog, work, achievements), see [CONTENT.md](./CONTENT.md).
