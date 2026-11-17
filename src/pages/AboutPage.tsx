import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { resume } from '../data/resume'
import '../styles/about.css'

const skillGroups = [
  { title: 'Data engineering', items: 'Snowflake, SQL, dbt, ETL/ELT, data modeling, data validation' },
  { title: 'Analytics & business intelligence', items: 'Domo, Excel, dashboards, KPI reporting' },
  { title: 'Development', items: 'Python, JavaScript, C#, .NET, Java, REST APIs, Git & GitHub' },
  { title: 'Automation & cloud', items: 'Azure Functions, Power Automate, Power Apps, Domo Pro Code Apps, SharePoint' },
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
          <p>I'm Lindsey, a Data Analyst working in healthcare. I like understanding how things work and building useful applications.</p>
        </div>
        <figure className="about-intro-portrait">
          <img src="/images/profile/lindsey-west-professional-headshot.jpg" alt="Lindsey West smiling in a professional headshot" />
          <figcaption>Salt Lake City, UT</figcaption>
        </figure>
      </section>

      <section id="professional-experience" className="about-experience" aria-labelledby="about-experience-heading">
        <div className="home-wrap about-section-layout">
          <div className="about-section-heading" data-about-reveal>
            <p className="about-label">Professional experience</p>
            <h2 id="about-experience-heading">Professional <em>experience.</em></h2>
          </div>
          <div className="about-timeline">
            <article className="about-timeline-entry" data-about-reveal>
              <div className="about-timeline-meta"><span>{experience.dates}</span><span>{experience.organization}</span></div>
              <div>
                <h3>{experience.role}</h3>
                <p>I build and maintain data pipelines and SQL-based dbt models in Snowflake, integrating data from multiple sources. I investigate data quality issues, troubleshoot pipelines, and validate reporting across systems.</p>
                <p>I develop Domo dashboards and reporting datasets for more than 80 clinics and nine support service departments. I also build internal applications and automate repetitive workflows using Python and Microsoft Power Platform.</p>
                <p>On our AI &amp; Technology Task Force, I help plan and develop internal tools, including a clinical mentorship app and Python automation for organizing images and preparing documents.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-skills home-wrap" aria-labelledby="about-skills-heading" data-about-reveal>
        <div className="about-skills-intro"><p className="about-label">Technical skills</p><h2 id="about-skills-heading">Tools <em>I use.</em></h2></div>
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
          <p>I also love making jewelry, traveling, and trying new creative projects.</p>
          <div className="about-links"><Link to="/projects">Explore my work <span aria-hidden="true">→</span></Link><Link to="/resume">View my resume <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </div>
  )
}
