import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { siteLinks } from '../data/siteLinks'
import { TimeKeeperCover } from '../components/TimeKeeperCover'
import '../styles/home.css'

export function HomePage() {
  const workRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = workRef.current?.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!items?.length || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    items.forEach((item) => {
      // Content already in view stays visible; only offscreen items are prepared for reveal.
      if (item.getBoundingClientRect().top >= window.innerHeight) {
        item.classList.add('will-reveal')
        observer.observe(item)
      }
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      <section className="home-intro home-wrap" aria-labelledby="home-title">
        <div className="home-intro-main">
          <p className="home-kicker hero-entrance hero-entrance-one">Salt Lake City, UT</p>
          <h1 className="hero-entrance hero-entrance-two" id="home-title">Lindsey<br />West<span className="home-period">.</span></h1>
          <p className="home-intro-label hero-entrance hero-entrance-three">Data, analytics <span>&amp;</span> automation</p>
        </div>
        <div className="home-intro-side">
          <figure className="home-portrait hero-entrance hero-entrance-two">
            <img src="/images/profile/lindsey-west-professional-headshot.jpg" alt="Lindsey West smiling in a professional headshot" />
            <figcaption>Data Analyst</figcaption>
          </figure>
          <div className="hero-entrance hero-entrance-four">
            <p className="home-intro-copy">I'm a Data Analyst working in healthcare. I work on reporting, Snowflake data pipelines, automation, and internal applications.</p>
            <Link className="home-inline-link" to="/about#professional-experience">Professional experience</Link>
            <div className="home-actions">
              <Link className="home-button" to="/projects">View my work <span aria-hidden="true">↗</span></Link>
              <Link className="home-inline-link" to="/resume">Resume <span aria-hidden="true">↗</span></Link>
              <a className="home-inline-link" href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-work home-wrap" aria-labelledby="work-heading" ref={workRef}>
        <div className="home-work-heading">
          <div><p className="home-kicker">Selected work</p><h2 id="work-heading">Work in <em>practice.</em></h2></div>
          <Link className="home-inline-link" to="/projects">Explore all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="home-projects">
          {projects.filter(project => project.featured).map((project) => (
            <article className="home-project" data-reveal key={project.id}>
              <Link className={`home-project-art${project.cover || project.screenshots.length ? '' : ' home-project-art-placeholder'}`} to={`/projects#${project.id}`} aria-label={`View details for ${project.title}`}>
                {project.cover === 'time-keeper' ? <TimeKeeperCover subtitle="Development & maintenance" showFooter={false} /> : project.screenshots[0] ? (
                  <img src={project.screenshots[0].src} alt={project.screenshots[0].alt} width={project.screenshots[0].width} height={project.screenshots[0].height} loading="lazy" />
                ) : (
                  <span className="home-project-placeholder"><span className="home-project-placeholder-number" aria-hidden="true" /><span className="home-project-placeholder-title">{project.focus}</span><span className="home-project-placeholder-link">View project <span aria-hidden="true">→</span></span></span>
                )}
              </Link>
              <div className="home-project-copy">
                <p className="home-project-meta">{project.focus}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="home-project-links">
                  <Link className="home-inline-link" to={`/projects#${project.id}`}>Project details <span aria-hidden="true">→</span></Link>
                  {project.githubUrl && <a className="home-inline-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-about" aria-labelledby="about-heading">
        <div className="home-wrap home-about-layout">
          <div><p className="home-kicker">About me</p><h2 id="about-heading">Curious about how things <em>work.</em></h2></div>
          <div className="home-about-copy">
            <p>I like figuring out how things work, finding better ways to do things, and building tools people actually use.</p>
            <Link className="home-inline-link" to="/about">More about me <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="home-contact home-wrap" aria-labelledby="contact-heading">
        <div className="home-contact-layout"><h2 id="contact-heading">Let’s <em>connect.</em></h2><div><p>If my work looks relevant to what you’re building, I’d be glad to hear from you.</p><div className="home-actions"><a className="home-button" href={siteLinks.email}>Email Lindsey <span aria-hidden="true">↗</span></a><a className="home-inline-link" href={siteLinks.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div></div></div>
      </section>
    </div>
  )
}
