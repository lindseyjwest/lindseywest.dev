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
- `npm test` checks crawler-visible metadata and sharing assets in the production output; run `npm run build` first.

## Structure

- `src/pages/` contains the four main pages and the shared-layout not-found experience.
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
- RV Park uses the real application capture in `public/images/projects/RVSite.png`.
  The displayed image uses optimized 768px and 1507px WebP variants; the Projects page
  links to the original PNG for full-resolution viewing. Running the application requires
  .NET 8 and SQL Server; its repository and database were not changed for this portfolio.
- The resume PDF is maintained separately. The mobile page offers a collapsible image preview
  and direct PDF access; changing that presentation does not alter the PDF.

## Metadata and sharing

- `src/data/pageMetadata.ts` defines titles, descriptions, canonical URLs, and Open Graph/Twitter metadata.
- The small plugin in `vite.config.ts` renders metadata into `dist/index.html`, `about.html`,
  `projects.html`, and `resume.html`. Cloudflare's extensionless HTML handling makes it available
  in the initial response for each main route, including social crawlers that do not run JavaScript.
- `src/components/PageMetadata.tsx` keeps the same metadata current during browser navigation.
- The sharing image is `public/images/social-preview.png` (1200 × 630). Its editable design source
  is `scripts/social-preview.html`, rendered with the site's existing fonts and headshot.
- Google Fonts loads directly from the document head with preconnections and `display=swap`.
- Unknown routes use the client-side not-found page and receive `noindex` after React loads.
  No static `404.html` is generated, preserving the separately configured SPA fallback.
