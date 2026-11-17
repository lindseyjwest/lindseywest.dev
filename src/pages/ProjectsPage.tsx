import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { siteLinks } from '../data/siteLinks'
import '../styles/projects.css'

export function ProjectsPage() {
  const { hash } = useLocation()
  const showcaseRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = showcaseRef.current?.querySelectorAll<HTMLElement>('[data-project-reveal]')
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
      if (item.id !== hash.slice(1) && item.getBoundingClientRect().top >= window.innerHeight) {
        item.classList.add('will-reveal')
        observer.observe(item)
      }
    })
    return () => observer.disconnect()
  }, [hash])

  return (
    <div className="projects-page">
      <header className="projects-intro home-wrap">
        <p className="projects-label">Selected work / Lindsey West</p>
        <div className="projects-intro-layout">
          <h1 id="projects-title">Selected<br /><em>projects.</em></h1>
          <p>A few projects I've worked on, from building applications to improving existing software.</p>
        </div>
      </header>
      <section className="projects-showcase home-wrap" aria-label="Projects" ref={showcaseRef}>
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </section>
      <div className="projects-end home-wrap"><span>Interested in working together?</span><a href={siteLinks.email}>Get in touch <span aria-hidden="true">↗</span></a></div>
    </div>
  )
}
