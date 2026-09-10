import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  variant?: 'featured' | 'compact'
}

export function ProjectCard({ project, variant = 'compact' }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.liveUrl || project.caseStudyUrl

  return (
    <article className={`project-entry project-entry-${variant}`}>
      <div className={`project-entry-visual project-tone-${project.visual.tone}`}>
        {project.visual.imageSrc ? (
          <img src={project.visual.imageSrc} alt={project.visual.imageAlt ?? ''} />
        ) : (
          <div
            className="project-entry-visual-placeholder"
            role="img"
            aria-label={`${project.category} visual placeholder`}
          >
            <span />
            <span />
            <span className="project-entry-visual-label">Visual placeholder</span>
          </div>
        )}
      </div>

      <div className="project-entry-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.contributionSummary && (
          <p className="project-contribution">
            <strong>Contribution</strong>
            {project.contributionSummary}
          </p>
        )}

        {project.technologies.length > 0 && (
          <ul className="technology-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <div className="project-entry-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl}>
                Case study <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
