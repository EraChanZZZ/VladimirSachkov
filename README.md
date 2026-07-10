# Personal website

Astro static site → GitHub Pages. Academic style, journey timeline, markdown projects.

## Run

```sh
npm install
npm run dev      # localhost:4321
npm run build    # dist/
```

## Edit content

- **Add a project**: drop a new `.md` in `src/content/projects/` — frontmatter fields:
  `title`, `tagline`, `period`, `context`, `tags`, `order` (lower = higher on page),
  `links`, and an optional `chart`. Body is free markdown; the pattern used so far is an
  "In one paragraph" section for skimmers, then technical detail.
- **Timeline**: the `journey` array at the top of `src/pages/index.astro`.
- **Photo**: drop `public/photo.jpg` (square-ish) — it replaces the "VS" monogram
  automatically.
- **Colors/typography**: `src/styles/global.css`, all in the `:root` variables.

## Deploy

Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and publishes to
GitHub Pages automatically. Served under the `base` path set in `astro.config.mjs`.
