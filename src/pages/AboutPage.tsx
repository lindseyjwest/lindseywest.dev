import { Link } from 'react-router-dom'
import { resume } from '../data/resume'

const capabilities = [
  { title: 'Data engineering', description: 'Snowflake pipelines, dbt models, stored procedures, and scheduled tasks that bring data together reliably.' },
  { title: 'Analytics', description: 'Domo dashboards, KPIs, and reporting datasets that make performance and trends easier to understand.' },
  { title: 'Automation', description: 'Python, Azure Functions, Power Automate, and internal applications that reduce repetitive work.' },
  { title: 'Software development', description: 'Practical applications built with C#, JavaScript, REST APIs, and the Microsoft Power Platform.' },
]

const aboutTopics = [
  {
    title: 'Professional background',
    description:
      'I build and maintain data pipelines, reporting datasets, dashboards, automations, and internal applications that support teams across an organization.',
  },
  {
    title: 'Technical interests',
    description:
      'I’m especially interested in reliable data systems, data quality, analytics, and automation that makes information easier to use.',
  },
  {
    title: 'Education',
    description:
      'I’m completing a B.S. in Computer Science at Weber State University, expected December 2026, after earning an A.S. in Computer Science from Salt Lake Community College in 2024.',
  },
]

export function AboutPage() {
  return (
    <>
      <section className="about-hero container" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">About</p>
          <h1 id="about-title">The work, and a little context.</h1>
          <p className="about-hero-copy">
            I work across data, analytics, automation, and software, with a focus on making
            information easier to use and processes easier to manage.
          </p>
        </div>
        <figure className="about-portrait">
          <img
            src="/images/profile/lindsey-west-professional-headshot.jpg"
            alt="Professional portrait of Lindsey West"
          />
        </figure>
      </section>

      <section className="about-story section">
        <div className="container about-story-layout">
          <div className="about-story-intro">
            <p className="eyebrow">Professional focus</p>
            <h2>Built around useful, well-considered work.</h2>
            <p>
              I’m most interested in the overlap between data systems, analytics,
              automation, and application development.
            </p>
          </div>
          <div className="about-topic-list">
            {aboutTopics.map((topic, index) => (
              <article className="about-topic" key={topic.title}>
                <p className="about-topic-number">0{index + 1}</p>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="capabilities-heading">
        <div className="about-story-layout">
          <div className="about-story-intro">
            <p className="eyebrow">What I do</p>
            <h2 id="capabilities-heading">Technical work with practical purpose.</h2>
            <p>Data systems, reporting, and software that support day-to-day decisions.</p>
          </div>
          <div className="about-topic-list">
            {capabilities.map((capability, index) => (
              <article className="about-topic" key={capability.title}>
                <p className="about-topic-number">0{index + 1}</p>
                <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="personal-section container" aria-labelledby="technical-foundation-heading">
        <div className="personal-section-heading">
          <p className="eyebrow">Technical foundation</p>
          <h2 id="technical-foundation-heading">Tools I use to move work forward.</h2>
          <p>
            My current toolkit spans programming, data platforms, reporting, cloud
            services, and workflow automation.
          </p>
        </div>
        <div className="skills-grid">
          {resume.skills.map((skillGroup) => (
            <article className="skill-card" key={skillGroup.category}>
              <h3>{skillGroup.category}</h3>
              <ul className="skill-tags" aria-label={`${skillGroup.category} skills`}>
                {skillGroup.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link className="text-link about-resume-link" to="/resume">
          View experience and education <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}
