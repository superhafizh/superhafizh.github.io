# superhafizh.github.io

Personal site, built with [Astro](https://astro.build). Static output, no client-side JavaScript.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type-check .astro and .ts files
```

## Edit content

- **Profile, experience, toolkit, links:** `src/data/site.ts`
- **Projects:** one Markdown file per project in `src/content/work/`. The frontmatter fields are defined in `src/content.config.ts`. Set `draft: true` to keep a project out of the build.
- **Social preview image:** `public/og.png` (1200×630)

## Deploy

Every push to `master` builds and deploys through `.github/workflows/deploy.yml`.
In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
