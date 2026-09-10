# lindseywest.dev

Phase 1 shell for Lindsey West's professional portfolio.

## Run locally

1. Install a current Node.js LTS release.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL Vite prints in the terminal.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` type-checks and produces a production build in `dist/`.
- `npm run preview` serves the completed production build locally.

## Structure

- `src/pages/` contains the four top-level pages.
- `src/components/` contains the shared layout and reusable page introduction.
- `src/styles/global.css` contains the small set of global design tokens and responsive styles.
- `public/_redirects` supports direct links to client-side routes on Cloudflare Pages.
