import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const featuredProjects = projects.filter((project) => project.featured)
const otherProjects = projects.filter((project) => !project.featured)

export function ProjectsPage() {
  return (
    <>
      <section className="projects-hero container" aria-labelledby="projects-title">
        <p className="eyebrow">Projects</p>
        <h1 id="projects-title">Work worth looking closer at.</h1>
        <p className="projects-hero-copy">
          A growing collection of data, analytics, automation, and software work. Each
          entry will be expanded with real context when it is ready to share.
        </p>
      </section>

      <section className="projects-featured container" aria-labelledby="featured-projects-heading">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 id="featured-projects-heading">A closer look, when the details are ready.</h2>
          </div>
          <p className="project-section-note">Selected project placeholder</p>
        </div>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="featured" />
        ))}
      </section>

      <section className="project-index section" aria-labelledby="project-index-heading">
        <div className="container project-index-layout">
          <div className="project-index-intro">
            <p className="eyebrow">Project index</p>
            <h2 id="project-index-heading">More to explore.</h2>
            <p>
              Placeholders are organized by project type so the mix can grow without
              changing the page structure.
            </p>
          </div>
          <div className="project-index-list">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
