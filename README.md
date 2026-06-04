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

Pushes to `main` build the site and publish to the `gh-pages` branch.

**One-time repo setup:**

1. Open **Settings → Pages** on the repository.
2. Set **Source** to **Deploy from a branch**.
3. Choose branch **`gh-pages`** and folder **`/ (root)`**.

**Local dev:** use `pnpm dev` and open **http://localhost:3000** (not `/live_airdosa`).

**Production build:** `pnpm run build:pages`
