import { siteLinks } from '../data/siteLinks'
import '../styles/resume.css'

export function ResumePage() {
  return (
    <div className="resume-document-page">
      <section className="resume-document-intro home-wrap" aria-labelledby="resume-title">
        <div className="resume-document-entrance">
          <p className="resume-document-label">Resume</p>
          <h1 id="resume-title">The experience behind <em>the work.</em></h1>
          <p className="resume-document-description">A closer look at my technical experience, education, and the tools I work with.</p>
          <div className="resume-document-actions">
            <a className="home-button" href={siteLinks.resumePdfPath} download>
              Download Resume <span aria-hidden="true">↓</span>
            </a>
            <a className="home-inline-link" href={siteLinks.resumePdfPath} target="_blank" rel="noopener noreferrer">
              View PDF <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
      <section className="resume-preview home-wrap" aria-labelledby="resume-preview-title">
        <div className="resume-preview-heading">
          <h2 id="resume-preview-title">Resume preview</h2>
          <span>PDF / Lindsey West</span>
        </div>
        <a className="resume-preview-link" href={siteLinks.resumePdfPath} target="_blank" rel="noopener noreferrer" aria-label="View Lindsey West’s resume PDF (opens in a new tab)">
          <img src="/resume/lindsey-west-resume-preview.png" alt="" width="1224" height="1584" />
        </a>
      </section>
    </div>
  )
}
