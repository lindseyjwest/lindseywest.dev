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

## Portfolio assets

- The downloadable resume lives at `public/resume/lindsey-west-resume.pdf`.
- The professional headshot lives at `public/images/profile/lindsey-west-professional-headshot.jpg`.
- Project placeholder images live in `public/images/projects/`. Replace an SVG with a real
  screenshot using the same filename to update the site without changing React code.
- Resume content shown on the site is centralized in `src/data/resume.ts`.
