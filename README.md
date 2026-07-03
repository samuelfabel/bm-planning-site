# BM Planning — Site

Public landing page for [BM Planning](https://github.com/samuelfabel/bm-planning), an open source **Planning Poker** tool integrated with [Businessmap](https://businessmap.io).

## What is BM Planning?

BM Planning connects to Businessmap via REST API v2 to:

- Build card queues with filters by board, column, lane, and tags
- Run real-time voting sessions (Planning Poker)
- Persist Story Points directly on the board card

The API Key stays **only in the facilitator browser** (`sessionStorage`). The Go server coordinates rooms — **there is no hosted SaaS**; you run everything yourself.

**Main repository:** [github.com/samuelfabel/bm-planning](https://github.com/samuelfabel/bm-planning)

This site (`bm-planning-site`) is documentation and marketing only. It does not expose the planning API.

## Stack

- React 19 · TypeScript · Vite 6 · TailwindCSS 4
- React Router 7
- `bm.*` visual palette (Slate/Blue) aligned with the main app

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

To simulate the GitHub Pages base path:

```bash
VITE_BASE_PATH=/bm-planning/ npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The public URL is **`https://samuelfabel.github.io/bm-planning/`** — the base path must match the **Pages host repo** (`bm-planning`), not this repo name.

### 1. Configure Pages on `bm-planning`

1. In [samuelfabel/bm-planning](https://github.com/samuelfabel/bm-planning) → **Settings → Pages → Build and deployment**, select **GitHub Actions**

### 2. Publish

- Push to `main` on **bm-planning** runs `.github/workflows/pages.yml` (checks out this repo and builds with `VITE_BASE_PATH=/bm-planning/`)
- After changing only the site, run **Deploy site (GitHub Pages)** manually on `bm-planning`, or push any commit there

### 3. Verify

`https://samuelfabel.github.io/bm-planning/`

## Structure

```text
bm-planning-site/
├── src/
│   ├── components/    # layout, home, ui
│   ├── pages/         # /, /features, /docs, /self-host, /roadmap
│   └── config.ts      # roadmap, URLs
├── public/
└── vite.config.ts     # base path via VITE_BASE_PATH
```

## License

MIT — see [LICENSE](LICENSE).
