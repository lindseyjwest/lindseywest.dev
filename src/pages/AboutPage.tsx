import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { resume } from '../data/resume'
import '../styles/about.css'

const skillGroups = [
  { title: 'Data engineering', items: 'Snowflake, SQL, dbt, ETL/ELT, data modeling, data validation' },
  { title: 'Analytics & business intelligence', items: 'Domo, Excel, dashboards, KPI reporting' },
  { title: 'Development', items: 'Python, JavaScript, C#, .NET, Java, REST APIs, Git & GitHub' },
  { title: 'Automation & cloud', items: 'Azure Functions, Power Automate, Power Apps, Azure services, Domo Pro Code Apps, SharePoint' },
]

export function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const experience = resume.experience[0]

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll<HTMLElement>('[data-about-reveal]')
    if (!items?.length || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    items.forEach((item) => {
      if (item.getBoundingClientRect().top >= window.innerHeight) {
        item.classList.add('will-reveal')
        observer.observe(item)
      }
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page" ref={pageRef}>
      <section className="about-intro home-wrap" aria-labelledby="about-title">
        <div className="about-intro-copy">
          <p className="about-label">A little about me</p>
          <h1 id="about-title">Curious by nature.<br /><em>Practical by design.</em></h1>
          <p>I’m Lindsey. I like understanding how things work, asking questions, and building useful applications and data solutions.</p>
          <p>My work often starts with a messy question or a manual process and ends with something easier to understand, maintain, or use.</p>
        </div>
        <figure className="about-intro-portrait">
          <img src="/images/profile/lindsey-west-professional-headshot.jpg" alt="Lindsey West smiling in a professional headshot" />
          <figcaption>Lindsey West / Salt Lake City, UT</figcaption>
        </figure>
      </section>

      <section className="about-experience" aria-labelledby="about-experience-heading">
        <div className="home-wrap about-section-layout">
          <div className="about-section-heading" data-about-reveal>
            <p className="about-label">Professional experience</p>
            <h2 id="about-experience-heading">Learning through <em>the work.</em></h2>
            <p>At Mountain Land Physical Therapy Partners, my work spans data, software, and the teams that use them.</p>
          </div>
          <div className="about-timeline">
            <article className="about-timeline-entry" data-about-reveal>
              <div className="about-timeline-meta"><span>{experience.dates}</span><span>Mountain Land Physical Therapy Partners</span></div>
              <div>
                <h3>{experience.role}</h3>
                <p>I build and maintain data pipelines and SQL-based dbt models in Snowflake, integrating data from multiple sources. I investigate data quality issues, troubleshoot pipelines, and validate reporting across systems.</p>
                <p>In Domo, I develop dashboards, KPIs, and reporting datasets for more than 80 clinics and nine support service departments. I also build Python automation with Azure Functions and Power Automate, and internal applications using tools including Power Apps and Domo Pro Code Apps.</p>
                <p>As a member of the cross-department AI and Technical Task Force, I work with colleagues to identify business needs, evaluate potential solutions, and contribute to planning and implementation. My contributions include work on a clinical mentorship application and Python automation for organizing images and preparing documents.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-skills home-wrap" aria-labelledby="about-skills-heading" data-about-reveal>
        <div className="about-skills-intro"><p className="about-label">Technical skills</p><h2 id="about-skills-heading">The tools behind <em>the work.</em></h2><p>My toolkit spans data platforms, reporting, application development, and workflow automation.</p></div>
        <div className="about-skill-list">
          {skillGroups.map((group, index) => <div className="about-skill-row" key={group.title}><span className="about-skill-number">0{index + 1}</span><h3>{group.title}</h3><p>{group.items}</p></div>)}
        </div>
      </section>

      <section className="about-education" aria-labelledby="about-education-heading" data-about-reveal>
        <div className="home-wrap about-section-layout">
          <div className="about-section-heading"><p className="about-label">Education</p><h2 id="about-education-heading">A foundation in <em>computer science.</em></h2></div>
          <div className="about-education-list">
            {resume.education.map((education) => <article className="about-education-entry" key={education.school}><div><h3>{education.school}</h3><p>{education.degree === 'B.S. Computer Science' ? 'Bachelor of Science in Computer Science' : 'Associate of Science in Computer Science'}</p></div><p className="about-label">{education.date}</p></article>)}
          </div>
        </div>
      </section>

      <section className="about-closing home-wrap" aria-labelledby="about-closing-heading" data-about-reveal>
        <div><p className="about-label">Outside of work</p><h2 id="about-closing-heading">Beyond the <em>keyboard.</em></h2></div>
        <div>
          <p>When I’m not working with data or writing code, you’ll probably find me reading a good book, watching a movie (especially Star Wars), or spending time with my dog, Nora.</p>
          <p>I also love making jewelry, traveling, and finding new creative projects to get into. I enjoy having a mix of technical and creative interests, and I’m usually working on something new.</p>
          <div className="about-links"><Link to="/projects">Explore my work <span aria-hidden="true">→</span></Link><Link to="/resume">View my resume <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </div>
  )
}
