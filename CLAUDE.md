# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Despite the `Lumina-iOS` repo name, this repository contains **only the marketing
website** for the Lumina iOS/iPadOS app — not the app itself. It is a single-page
React + Vite site deployed to GitHub Pages at https://tukies.github.io/Lumina-iOS/.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server (base path "/")
npm run build      # production build to dist/ (base path "/Lumina-iOS/")
npm run preview    # serve the production build locally
npm run lint       # ESLint over the repo
```

There is **no test framework** configured. `lint` and a successful `build` are the
only automated checks.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to
`main` (Node 22, `npm ci` + `npm run build`, uploads `dist/`). Pushing to `main` is
what ships the site — there is no separate publish step.

## Architecture

The entire site is essentially three files:

- `src/main.jsx` — entry point. Calls `initGoogleAnalytics()` then renders `<App />`.
- `src/App.jsx` — the whole single-page site (hero, overview, v1.1, Flow stories,
  live demos, workflows, systems, Pro, community, closing).
- `src/App.css` / `src/index.css` — all styling, plain CSS with CSS custom
  properties (no Tailwind, CSS modules, or CSS-in-JS).

### App.jsx is data-driven

Page content lives in plain `const` arrays at the top of `App.jsx` (`metrics`,
`highlights`, `releasePanels`, `stories`, `workflows`, `demoVideos`,
`integrations`, `proFeatures`, etc.). Section components (`HeroConsole`,
`DiscordCommunity`, `AmbientLightField`) and `App` `.map()` over these arrays.
**To change copy, screenshots, metrics, or supported devices, edit the relevant
array — do not hardcode content into the JSX.**

### The base-path convention (important)

Vite's `base` is `/` in dev but `/Lumina-iOS/` in production (see
`vite.config.js`). Because of this, **never hardcode absolute asset paths.** Static
assets live in `public/` and are referenced through helpers that prepend
`import.meta.env.BASE_URL`:

```js
const media = (fileName) => `${baseUrl}media/${fileName}`
const v11Media = (fileName) => media(`v1-1/${fileName}`)
```

Use these (or the same `baseUrl` pattern) for any new image, video, or link to the
privacy page. A path like `/media/foo.png` will 404 on GitHub Pages.

### Assets

- `public/media/` — images, logos, and demo videos. v1.1 screenshots are under
  `public/media/v1-1/`. Videos ship as both `.mov` and `.mp4`; the site references
  the `.mp4` plus a `-poster.jpg`.
- `public/privacy/index.html` — the privacy policy is a **standalone static HTML
  page** (self-contained inline `<style>`), not part of the React app. It is linked
  from `App.jsx` via `${baseUrl}privacy/index.html`. Edit it directly; it is not
  generated. (`Privacy-Policy.md` is the source/markdown reference for its content.)

### Analytics

`src/analytics.js` initializes **both PostHog and Google Analytics** from
`initGoogleAnalytics()`. The GA measurement ID falls back to a hardcoded default but
can be overridden with the `VITE_GA_MEASUREMENT_ID` env var. Use the exported
`trackEvent(name, params)` helper to fire GA events; it no-ops safely when `gtag`
isn't loaded (e.g. SSR/build).

## Conventions

- **Styling**: dark, cinematic, light-reactive theme driven by CSS variables
  defined in `src/index.css` (`--bg`, `--text-strong`, `--accent`, etc.), Manrope
  font. New sections follow the `section-shell` / `section-intro` / `section-kicker`
  / `section-title` class structure used throughout `App.css`.
- **ESLint**: flat config (`eslint.config.js`). Notably, `no-unused-vars` ignores
  names matching `^[A-Z_]` (constants/components), and `react-refresh` warns on
  non-component exports from component files. React 19 with the new JSX transform
  (no `import React` needed).
- **Design reference**: `design.md` documents the intended product positioning,
  page structure, visual direction, and copy tone. Read it before adding sections or
  rewriting copy so changes stay consistent with the established product feel.

## Git workflow

`main` is the deploy branch (pushing to it publishes the site). Do feature work on a
branch and merge via PR; do not push directly to `main` unless explicitly asked.
