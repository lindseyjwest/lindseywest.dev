# AI Instructions — lindseywest.dev

This repository contains Lindsey West's long-term professional portfolio website.

Before making changes, read:

- `PORTFOLIO_PROJECT_CONTEXT.md`
- This file

Treat those files as the source of truth for project direction, tone, design, and implementation priorities.

## Primary Goal

Build and maintain a professional portfolio for:

- Data engineering roles
- Analytics engineering / analytics roles
- Automation-focused technical roles
- Software engineering roles

The site should lean slightly more toward data, analytics, and automation while still presenting strong software engineering skills.

This is not just a school assignment. It should remain useful after graduation and evolve into a long-term professional portfolio.

Public domain:

**lindseywest.dev**

GitHub repository:

**https://github.com/lindseyjwest/lindseywest.dev**

---

## Core Working Principles

When assisting with this repository:

1. Prefer simple, understandable, maintainable solutions.
2. Avoid overengineering.
3. Do not add dependencies unless they solve a real problem.
4. Explain major architectural or technical decisions.
5. Help Lindsey learn while building.
6. Make changes in small, reviewable increments.
7. Preserve existing working behavior unless a change explicitly requires modifying it.
8. Do not rewrite large parts of the project without a clear reason.
9. Do not introduce abstractions before they are useful.
10. Favor clarity over cleverness.

When there are multiple reasonable approaches, briefly explain the tradeoffs and recommend the simplest option that fits the project.

---

## Content Rules

Never fabricate:

- Projects
- Work experience
- Metrics
- Accomplishments
- Technologies used
- Job responsibilities
- Education details
- Certifications
- Client/company information

If real content is not yet available, use clearly labeled placeholders.

Do not invent impressive-sounding filler just to make the site look complete.

Ask for real details when accurate personal information is necessary.

---

## Writing Style

All public-facing copy should feel:

- Professional
- Human
- Clear
- Confident
- Specific
- Concise
- Slightly conversational where appropriate

Avoid language that sounds generic, corporate, or AI-generated.

Avoid phrases such as:

- "Passionate developer"
- "Leveraging cutting-edge technologies"
- "Results-driven professional"
- "Innovative solutions"
- "Dynamic professional"
- "Transforming ideas into reality"
- "Crafting seamless digital experiences"

Do not overuse:

- Buzzwords
- Adjectives
- Em dashes
- Generic claims
- Empty statements about being passionate, driven, innovative, or detail-oriented

Prefer concrete statements describing what Lindsey builds, solves, improves, or works with.

---

## Professional Positioning

Do not lead with Lindsey's identity as a Computer Science student.

Education should support the professional story, not define it.

The site should primarily present Lindsey as a technical professional working across:

- Data
- Analytics
- Automation
- Software development

The homepage should answer quickly:

- What does Lindsey do?
- What kinds of problems does she solve?
- What areas is she strongest in?
- Where can a recruiter see evidence?

Avoid forcing Lindsey into an overly narrow title unless explicitly requested.

---

## Design Direction

The site should feel:

- Minimal
- Clean
- Spacious
- Modern
- Professional
- Memorable
- Slightly playful
- Intentional

Visual inspiration:

- Apple
- Notion

The current design should be **light mode first**.

Bright colors are encouraged, but should be used intentionally as accents rather than overwhelming the interface.

Good uses of color include:

- Buttons
- Links
- Hover states
- Project accents
- Small graphical details
- Section markers
- Tags
- Interactive details

Avoid:

- Generic developer portfolio templates
- Fake terminal interfaces
- Matrix/code-rain effects
- Excessive gradients
- Huge animated headings
- Overly flashy motion
- Excessive glassmorphism
- Neon-on-black "hacker" aesthetics
- Visual effects that hurt usability

The site should be memorable because it feels polished and personal, not because it is loud.

---

## Personality

Subtle personality is encouraged.

Good examples:

- Small hover interactions
- Playful but restrained microcopy
- Bright accent colors
- Thoughtful spacing
- Strong typography
- Personal photography
- Small unexpected details

Personal photography may include:

- A photo of Lindsey
- A photo of her dog
- A small number of hobby photos

Keep personal content secondary to professional content.

---

## Site Structure

The site should use a multi-page structure.

Initial pages:

- Home
- Projects
- About
- Resume

Optional pages may be added later if useful, such as:

- Experience
- Contact
- Individual project case studies
- Blog / technical writing

Do not add new top-level pages unless they improve the user experience or support real content.

---

## Homepage Priorities

The homepage should emphasize **what Lindsey does**.

Preferred content order:

1. Hero / professional introduction
2. What I Do / capabilities
3. Featured work
4. Short professional background
5. Small personal section
6. Contact / social links

The homepage should not look like a resume copied into a webpage.

Likely capability areas include:

- Data Engineering
- Analytics
- Automation
- Software Development

These should eventually be supported by real examples.

---

## Projects

The Projects page should support multiple project types:

- Data engineering
- Analytics
- Automation
- Software engineering
- School projects
- Personal projects

Project components should be reusable.

A project may include:

- Project name
- Short summary
- Problem
- What was built
- Technologies used
- Lindsey's contribution
- GitHub link
- Screenshots
- Results
- Challenges
- Lessons learned

Do not require every project to contain every field.

The architecture should make it easy to add, remove, reorder, and update projects later.

---

## Technical Guidance

The technical stack may evolve, but current priorities are:

- Fast development
- Easy maintenance
- Good learning value
- Git/GitHub workflow
- Responsive design
- Accessibility
- Strong performance
- Easy deployment
- Minimal infrastructure

A likely stack is:

- React
- Vite
- TypeScript
- CSS or CSS Modules
- Git / GitHub
- Cloudflare Pages

Do not switch frameworks without a meaningful reason.

Do not introduce:

- State management libraries unless needed
- UI component libraries unless justified
- Backend infrastructure unless the portfolio requires it
- Databases unless there is a real feature that needs one
- Complex build tooling without a clear benefit

---

## React / Frontend Rules

If React is used:

- Prefer functional components.
- Keep components focused and readable.
- Reuse components when duplication is meaningful.
- Avoid creating tiny components solely for abstraction.
- Keep data separate from layout when practical.
- Prefer simple props over complex state structures.
- Avoid unnecessary global state.
- Use semantic HTML.
- Use accessible labels and landmarks.
- Ensure keyboard usability.
- Ensure visible focus states.
- Support responsive layouts from the beginning.

Use TypeScript types where they improve clarity.

Do not create complicated type systems for simple static content.

---

## CSS Rules

Prefer readable, maintainable CSS.

Use:

- CSS variables for shared design tokens
- Consistent spacing
- Consistent typography
- Responsive sizing
- Clear class naming

Avoid:

- Large amounts of inline styling
- Excessively nested selectors
- Hardcoded values repeated throughout the project
- Styling frameworks unless specifically chosen
- Premature design-system complexity

If introducing design tokens, keep them simple.

Examples:

- Background colors
- Text colors
- Accent colors
- Border colors
- Font sizes
- Spacing
- Border radius
- Container widths

---

## Accessibility

Accessibility is required, not optional.

Maintain:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Meaningful link text
- Alt text for meaningful images
- Sufficient contrast
- Visible focus states
- Accessible form labels
- Reduced-motion considerations when animation is used

Do not sacrifice accessibility for visual effects.

---

## Responsive Design

The site must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Do not build desktop-only layouts and attempt to fix mobile at the end.

Responsive behavior should be considered during implementation.

---

## Performance

Keep the site lightweight.

Prefer:

- Optimized images
- Minimal dependencies
- Lazy loading where useful
- Simple animations
- Static content where appropriate

Avoid unnecessary JavaScript for effects that CSS can handle cleanly.

---

## Git and Repository Practices

Use Git and GitHub throughout development.

When suggesting commits, prefer small, meaningful commits.

Examples:

- `feat: add site navigation`
- `feat: build homepage hero`
- `style: add portfolio color tokens`
- `feat: add project card component`
- `fix: improve mobile navigation`

Do not bundle unrelated changes into one large commit when avoidable.

Before making major changes, inspect the existing repository structure.

Do not delete existing files unless they are clearly obsolete or the change requires it.

---

## Deployment

The site will ultimately be served at:

**lindseywest.dev**

Cloudflare Pages is the preferred deployment option unless another platform provides a clear advantage.

Deployment should remain straightforward and reproducible.

Avoid adding infrastructure that makes deployment harder than necessary.

---

## How to Work With Lindsey

Lindsey wants to build quickly while learning along the way.

When implementing a feature:

1. Briefly explain what will change.
2. Make the smallest useful implementation.
3. Explain unfamiliar concepts.
4. Call out important tradeoffs.
5. Avoid dumping large amounts of code without context.
6. Mention any new dependency before adding it and explain why it is needed.
7. Summarize changed files afterward.
8. Suggest an appropriate Git commit message when helpful.

If Lindsey asks for an implementation directly, make the change rather than only describing how it could be done.

If a request would cause unnecessary complexity, say so and recommend a simpler alternative.

---

## Current Phase

The project is currently in:

**Phase 1 — Portfolio Shell**

Current priorities:

1. Finalize frontend stack
2. Establish repository structure
3. Set up routing
4. Create global layout
5. Create navigation
6. Establish typography and design tokens
7. Build homepage shell
8. Build Projects page shell
9. Build About page shell
10. Add Resume page / download functionality
11. Add GitHub and LinkedIn links
12. Add reusable project placeholders
13. Make the site responsive
14. Deploy an initial version
15. Connect `lindseywest.dev`
16. Replace placeholders with real content

Do not block shell development while waiting for the final project list.

Use placeholders where necessary and keep the structure flexible.

---

## Before Making Changes

Before implementing a request:

1. Read `PORTFOLIO_PROJECT_CONTEXT.md`.
2. Read this file.
3. Inspect the relevant existing files.
4. Preserve the established design direction.
5. Check whether the requested change adds unnecessary complexity.
6. Use real content when available and placeholders otherwise.
7. Keep the solution understandable enough for Lindsey to explain and maintain herself.
