# lindseywest.dev

Lindsey West's professional portfolio, built with React, TypeScript, and Vite.

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
- `src/components/` contains the shared layout, project presentation, and navigation behavior.
- `src/data/projects.ts` defines project order, featured selections, copy, and screenshots.
- `src/styles/` contains the existing design tokens and page-specific responsive styles.
- Cloudflare Workers serves `dist/` with `assets.not_found_handling = "single-page-application"` for direct links and refreshes; no SPA catch-all in `_redirects` is needed.

## Portfolio assets

- The downloadable resume lives at `public/resume/lindsey-west-resume.pdf`.
- The professional headshot lives at `public/images/profile/lindsey-west-professional-headshot.jpg`.
- Application screenshots live in `public/images/projects/`; their paths, intrinsic dimensions,
  alt text, and captions are set in `src/data/projects.ts`.
- Time Keeper uses a shared editorial cover in `src/components/TimeKeeperCover.tsx`, styled
  with the portfolio's existing fonts and colors. Its cover and contribution evidence links
  are configured separately from application screenshots in `src/data/projects.ts`.
- StudyBuddy screenshots come from the project's public `studybuddy/Screenshots/` directory:
  https://github.com/lindseyjwest/CS3620_Portfolio/tree/main/studybuddy/Screenshots
- Earlier Time Keeper application captures remain in `public/images/projects/` for reference
  and are not displayed. They used existing demonstration records and read-only navigation;
  its repository and databases were left unchanged. Any future supporting application capture
  should demonstrate the integrated reporting behavior and use the caption
  “Existing application interface · Demonstration data”.
- RV Park still needs a real application capture. Its clearly labeled temporary cover is
  replaced automatically when a screenshot is added to its data entry. Running it requires
  .NET 8 and SQL Server; its repository and database were not changed for this portfolio.
- The resume PDF is maintained separately. The mobile page offers a collapsible image preview
  and direct PDF access; changing that presentation does not alter the PDF.
