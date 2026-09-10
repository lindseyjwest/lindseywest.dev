import { PageIntro } from '../components/PageIntro'

export function ProjectsPage() {
  return (
    <div className="container page-content">
      <PageIntro
        eyebrow="Projects"
        title="Selected technical work"
        description="Project case studies will be added here as real details, visuals, and links are ready to share."
      />
      <section aria-label="Project placeholders" className="card-grid">
        {[1, 2, 3, 4].map((projectNumber) => (
          <article className="project-card" key={projectNumber}>
            <p className="project-number">Placeholder {projectNumber.toString().padStart(2, '0')}</p>
            <h2>Project title</h2>
            <p>
              Add a short description of the problem, what was built, and Lindsey&apos;s
              contribution.
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}
