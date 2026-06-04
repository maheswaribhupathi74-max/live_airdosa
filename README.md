# AirDosa

AI-powered instant dosa delivery — a Next.js 14 landing page for the fictional Indian startup **AirDosa**.

**Live site:** https://maheswaribhupathi74-max.github.io/live_airdosa/

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages deployment

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds a static export and deploys to GitHub Pages.

**One-time repo setup** (if the site does not appear after the first workflow run):

1. Open **Settings → Pages** on the repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

Production builds set `GITHUB_PAGES=true` so assets use the `/live_airdosa` base path.
