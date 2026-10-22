import { resume } from '../data/resume'
import { siteLinks } from '../data/siteLinks'

export function ResumePage() {
  return (
    <div className="resume-page">
      <section className="resume-hero container" aria-labelledby="resume-title">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 id="resume-title">Data, reporting, and automation experience.</h1>
          <p className="resume-introduction">
            {resume.summary}
          </p>
          <div className="resume-actions">
            <a className="button button-primary" href={siteLinks.resumePdfPath} download>
              Download resume PDF <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href={siteLinks.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="resume-status-card" aria-labelledby="resume-status-heading">
          <p className="resume-status-mark" aria-hidden="true">✓</p>
          <p className="eyebrow">Current resume</p>
          <h2 id="resume-status-heading">PDF ready to download</h2>
          <p>Professional experience, education, skills, projects, and leadership.</p>
        </aside>
      </section>

      <div className="resume-content">
        <section className="resume-section container" aria-labelledby="experience-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading">Professional experience</h2>
          {resume.experience.map((experience) => (
            <article className="experience-entry" key={experience.organization}>
              <div className="resume-entry-heading">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.organization} · {experience.location}</p>
                </div>
                <p className="resume-entry-date">{experience.dates}</p>
              </div>
              <ul className="resume-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="resume-section resume-section-tinted" aria-labelledby="skills-heading">
          <div className="container">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-heading">Technical skills</h2>
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
          </div>
        </section>

        <section className="resume-section container" aria-labelledby="education-heading">
          <p className="eyebrow">Education</p>
          <h2 id="education-heading">Computer science foundation</h2>
          <div className="education-grid">
            {resume.education.map((education) => (
              <article className="education-card" key={education.school}>
                <h3>{education.school}</h3>
                <p>{education.location}</p>
                <p className="education-degree">{education.degree}</p>
                <p>{education.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-section-tinted" aria-labelledby="leadership-heading">
          <div className="container">
            <p className="eyebrow">Projects &amp; leadership</p>
            <h2 id="leadership-heading">Selected experience beyond the role.</h2>
            <div className="leadership-list">
              {resume.projectsAndLeadership.map((item) => (
                <article className="leadership-entry" key={item.title}>
                  <div className="resume-entry-heading">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.context}</p>
                    </div>
                    <p className="resume-entry-date">{item.date}</p>
                  </div>
                  <ul className="resume-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
