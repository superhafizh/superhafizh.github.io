# superhafizh.github.io

Personal site at [superhafizh.com](https://superhafizh.com), built with [Astro](https://astro.build). Static output; the only script is the small one that opens case studies in a dialog on the homepage.

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

### superhafizh.com

The domain does not point at GitHub. Its DNS (Cloudflare) points at a VPS running Nginx Proxy Manager,
which proxies `superhafizh.com` to `https://superhafizh.github.io` and holds the Let's Encrypt certificate.
GitHub Pages picks the site by the `Host` header, so the proxy host's **Advanced** tab overrides it:

```nginx
location / {
  proxy_pass https://superhafizh.github.io;
  proxy_set_header Host superhafizh.github.io;
  proxy_ssl_server_name on;
  proxy_ssl_name superhafizh.github.io;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_redirect https://superhafizh.github.io/ /;
}
```

Leave **Pages → Custom domain** empty in the repository settings. Setting it makes `superhafizh.github.io`
redirect to `superhafizh.com`, and the proxy then loops. Because of this, `superhafizh.github.io` keeps
working; the canonical URLs point at `superhafizh.com`. If the domain changes, update `site` in
`astro.config.mjs` and the sitemap URL in `public/robots.txt`.
