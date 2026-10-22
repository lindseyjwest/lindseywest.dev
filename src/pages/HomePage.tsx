import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { siteLinks } from '../data/siteLinks'

const capabilities = [
  {
    title: 'Data Engineering',
    description:
      'Building and maintaining Snowflake pipelines, dbt models, stored procedures, and scheduled tasks that bring data together reliably.',
  },
  {
    title: 'Analytics',
    description:
      'Developing Domo dashboards, KPIs, and reporting datasets that make performance and trends easier to understand.',
  },
  {
    title: 'Automation',
    description:
      'Reducing repetitive work with Python, Azure Functions, Power Automate, and internal business applications.',
  },
  {
    title: 'Software Development',
    description:
      'Building practical applications with C#, JavaScript, REST APIs, and the Microsoft Power Platform.',
  },
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
        <figure className="hero-portrait">
          <img
            src="/images/profile/lindsey-west-professional-headshot.jpg"
            alt="Lindsey West smiling in a professional headshot"
          />
          <figcaption>Data Analyst · Salt Lake City, UT</figcaption>
        </figure>
      </section>

      <section className="what-i-do section" aria-labelledby="capabilities-heading">
        <div className="container what-i-do-layout">
          <div className="section-heading what-i-do-heading">
            <p className="eyebrow">What I do</p>
            <h2 id="capabilities-heading">Technical work with practical purpose.</h2>
            <p>Data systems, reporting, and software that support day-to-day decisions.</p>
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
            <h2 id="featured-work-heading">Selected work and technical leadership.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="featured-project-grid">
          {projects.map((project, index) => (
            <article className="featured-project" key={project.id}>
              <div className={`project-visual project-tone-${project.visual.tone}`}>
                {project.visual.imageSrc && (
                  <img
                    src={project.visual.imageSrc}
                    alt={project.visual.imageAlt ?? ''}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="featured-project-content">
                <p className="project-number">Project 0{index + 1} · {project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-preview section">
        <div className="container about-preview-layout">
          <div className="experience-snapshot" aria-label="Professional experience snapshot">
            <p className="eyebrow">Current role</p>
            <strong>Data Analyst</strong>
            <span>Mountain Land Physical Therapy Partners</span>
            <dl>
              <div>
                <dt>Since</dt>
                <dd>2024</dd>
              </div>
              <div>
                <dt>Reporting reach</dt>
                <dd>80+ clinics</dd>
              </div>
              <div>
                <dt>Support teams</dt>
                <dd>9 departments</dd>
              </div>
            </dl>
          </div>
          <div className="about-preview-content">
            <p className="eyebrow">About</p>
            <h2>Turning complex workflows into useful systems.</h2>
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
              href={siteLinks.email}
            >
              Email Lindsey
            </a>
            <a
              className="button button-secondary"
              href={siteLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
