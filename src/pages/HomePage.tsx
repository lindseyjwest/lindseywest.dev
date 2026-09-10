import { Link } from 'react-router-dom'
import { siteLinks } from '../data/siteLinks'

const capabilities = [
  {
    title: 'Data Engineering',
    description:
      'Building reliable data workflows, transformations, and datasets that support reporting, analytics, and downstream systems.',
  },
  {
    title: 'Analytics',
    description:
      'Turning operational data into reporting and analysis that helps people understand what’s happening and make better decisions.',
  },
  {
    title: 'Automation',
    description: 'Reducing repetitive work with scripts, APIs, workflows, and internal tools.',
  },
  {
    title: 'Software Development',
    description:
      'Building applications and backend systems with an emphasis on practical, maintainable solutions.',
  },
]

const projectPlaceholders = [
  { number: '01', accent: 'project-visual-blue' },
  { number: '02', accent: 'project-visual-coral' },
  { number: '03', accent: 'project-visual-yellow' },
]

export function HomePage() {
  return (
    <>
      <section className="home-hero container" aria-labelledby="home-title">
        <div className="hero-content">
          <p className="eyebrow">Professional portfolio</p>
          <h1 id="home-title">Lindsey West</h1>
          <p className="professional-descriptor">Data, Analytics &amp; Automation</p>
          <p className="hero-copy">
            I build data workflows, analytics tools, automations, and software that make
            information easier to use and repetitive work easier to avoid.
          </p>
          <div className="action-group">
            <Link className="button button-primary" to="/projects">
              View my work
            </Link>
            <a
              className="quiet-link"
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <Link className="quiet-link" to="/resume">
              Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span className="hero-mark-dot" />
          <span className="hero-mark-line" />
          <span className="hero-mark-index">01</span>
        </div>
      </section>

      <section className="what-i-do section" aria-labelledby="capabilities-heading">
        <div className="container what-i-do-layout">
          <div className="section-heading what-i-do-heading">
            <p className="eyebrow">What I do</p>
            <h2 id="capabilities-heading">Technical work with practical purpose.</h2>
            <p>
              The details will be grounded in real work as the portfolio grows.
            </p>
          </div>
          <ol className="capability-list">
            {capabilities.map((capability, index) => (
              <li className="capability-item" key={capability.title}>
                <span className="capability-number">0{index + 1}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <span className="capability-mark" aria-hidden="true">✦</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="featured-work section container" aria-labelledby="featured-work-heading">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2 id="featured-work-heading">A few things, thoughtfully chosen.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="featured-project-grid">
          {projectPlaceholders.map((project) => (
            <article className="featured-project" key={project.number}>
              <div className={`project-visual ${project.accent}`} aria-hidden="true">
                <span />
                <span />
              </div>
              <div className="featured-project-content">
                <p className="project-number">Project {project.number} · Placeholder</p>
                <h3>Project title placeholder</h3>
                <p>Placeholder: add the real problem, approach, and outcome.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-preview section">
        <div className="container about-preview-layout">
          <div className="photo-placeholder" role="img" aria-label="Future personal photo placeholder">
            <span>Future personal photo</span>
            <span aria-hidden="true" className="photo-placeholder-shape" />
          </div>
          <div className="about-preview-content">
            <p className="eyebrow">About</p>
            <h2>A little more context, eventually.</h2>
            <p>
              I like working on problems that sit somewhere between data, software, and
              process improvement. A lot of my work starts with a messy question or manual
              process and ends with something easier to understand, maintain, or use.
            </p>
            <Link className="text-link" to="/about">
              Get to know Lindsey <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section container" aria-labelledby="contact-heading">
        <div className="contact-panel">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let&apos;s connect.</h2>
          <p>If my work looks relevant to what you’re building, I’d be glad to hear from you.</p>
          <div className="action-group">
            <a
              className="button button-primary"
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              Visit GitHub <span aria-hidden="true">↗</span>
            </a>
            <Link className="button button-secondary" to="/resume">
              Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
