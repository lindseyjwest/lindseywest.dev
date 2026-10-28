import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article id={project.id} className={`showcase-project showcase-project-${index + 1}`} data-project-reveal>
      <div className="showcase-visual">
        {project.visual.imageSrc && !project.visual.isPlaceholder ? (
          <figure>
            <img src={project.visual.imageSrc} alt={project.visual.imageAlt ?? ''} loading="lazy" />
            {project.visual.conceptLabel && <figcaption>{project.visual.conceptLabel}</figcaption>}
          </figure>
        ) : (
          <div className="showcase-placeholder" aria-hidden="true">
            <span>0{index + 1} / {project.category}</span>
            <strong>{project.title}</strong>
            <span>Selected work</span>
          </div>
        )}
      </div>
      <div className="showcase-copy">
        <p className="showcase-meta">0{index + 1} / {project.category}{project.status && ` / ${project.status}`}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.contributionSummary && <p className="showcase-contribution"><strong>My contribution</strong>{project.contributionSummary}</p>}
        <div className="showcase-technologies">
          <span>Tools &amp; technologies</span>
          <ul aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        {(project.githubUrl || project.liveUrl || project.caseStudyUrl) && (
          <div className="showcase-links">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repository <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
            {project.caseStudyUrl && <a href={project.caseStudyUrl}>Case study <span aria-hidden="true">→</span></a>}
          </div>
        )}
      </div>
    </article>
  )
}
