# H&S Custom Constructors — React + Tailwind rebuild

A modern rebuild of [hscustommena.com](https://hscustommena.com) using Vite, React,
TypeScript, and Tailwind CSS. Copy on the Home/About/Contact/Gallery/Create pages is
carried over from the live site; all imagery is placeholder (via picsum.photos) and
should be swapped for real project photos before launch.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config in `src/index.css`)
- React Router for client-side routing
- A minimal Express server (`server/`) that proxies the AI remodeling tool to
  [Replicate](https://replicate.com)

## Getting started

```bash
npm install
npm run dev:all   # runs the Vite dev server (5173) and the API server (8787) together
```

Or run them separately:

```bash
npm run dev      # frontend only
npm run server   # API server only
```

## The "Create" AI Remodeling Studio

The `/create` page lets a visitor upload a photo of their home, choose "Preserve
Structure" or "Complete Overhaul", add notes, and generate a redesigned image via the
`POST /api/remodel` endpoint in `server/index.ts`, which calls the Replicate API
(`black-forest-labs/flux-kontext-pro`).

**This requires a Replicate API token, which is not included.** To enable it:

1. Create an account at [replicate.com](https://replicate.com) and generate an API
   token.
2. Copy `server/.env.example` to `server/.env` and set `REPLICATE_API_TOKEN`.
3. Restart `npm run server` (or `npm run dev:all`).

Until a token is configured, the Create page will show a clear "AI service isn't
configured yet" error instead of crashing — everything else in the app works fully
without it.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Navbar, Footer, Layout
  pages/        Home, About, Gallery, Contact, Create
  data/         content.ts (site copy), placeholders.ts (placeholder images)
server/
  index.ts      Express server, single /api/remodel route
```
