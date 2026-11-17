import type { Project } from '../data/projects'
import { TimeKeeperCover } from './TimeKeeperCover'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [screenshot, ...additionalScreenshots] = project.screenshots
  const supportingScreenshots = project.cover ? project.screenshots : additionalScreenshots

  return (
    <article id={project.id} className={`showcase-project showcase-project-${index + 1}${project.cover ? ' showcase-project-editorial' : ''}`} aria-labelledby={`${project.id}-title`} data-project-reveal>
      <div className="showcase-media">
        <div className="showcase-visual">
          {project.cover === 'time-keeper' ? <TimeKeeperCover subtitle="Development & maintenance" showFooter={false} /> : screenshot ? (
            <a className="showcase-screenshot" href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size ${project.title} screenshot (opens in a new tab)`}>
              <figure>
                <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" />
                <figcaption>{screenshot.caption}<span aria-hidden="true">↗</span></figcaption>
              </figure>
            </a>
          ) : (
            <div className="showcase-placeholder">
              <span className="showcase-placeholder-label-space" aria-hidden="true" />
              <strong>{project.focus}</strong>
              <span>{project.title}</span>
            </div>
          )}
        </div>
        {supportingScreenshots.map(image => (
          <a className="showcase-secondary-image" key={image.src} href={image.src} target="_blank" rel="noopener noreferrer">
            {image.caption} <span aria-hidden="true">↗</span><span className="sr-only"> (screenshot opens in a new tab)</span>
          </a>
        ))}
      </div>
      <div className="showcase-copy">
        <p className="showcase-meta">0{index + 1} / {project.category}</p>
        <h2 id={`${project.id}-title`}>{project.title}</h2>
        <p className="showcase-context">{project.context}</p>
        {project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {project.contributions?.length ? (
          <div className="showcase-contribution">
            <h3>My contributions</h3>
            <ul>{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
          </div>
        ) : null}
        <div className="showcase-technologies">
          <span>Tools &amp; technologies</span>
          <ul aria-label={`${project.title} technologies`}>
            {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <div className="showcase-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repository <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          {project.evidenceLinks?.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          ))}
        </div>
      </div>
    </article>
  )
}
