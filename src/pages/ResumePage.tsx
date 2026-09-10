import { siteLinks } from '../data/siteLinks'

export function ResumePage() {
  return (
    <section className="resume-page container" aria-labelledby="resume-title">
      <div className="resume-hero">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 id="resume-title">A current record, ready when you are.</h1>
          <p className="resume-introduction">
            Placeholder: add a short introduction to the current resume and the kinds of
            opportunities it supports.
          </p>

          {siteLinks.resumePdfAvailable ? (
            <a className="button button-primary" href={siteLinks.resumePdfPath} download>
              Download resume PDF <span aria-hidden="true">↓</span>
            </a>
          ) : (
            <p className="button button-primary button-unavailable" role="status">
              Resume PDF coming soon
            </p>
          )}

          <p className="resume-file-note">
            Add the final PDF at <code>public/resume/lindsey-west-resume.pdf</code>, then
            set <code>resumePdfAvailable</code> to <code>true</code> in{' '}
            <code>src/data/siteLinks.ts</code>.
          </p>
        </div>

        <aside className="resume-status-card" aria-labelledby="resume-status-heading">
          <p className="resume-status-mark" aria-hidden="true">↓</p>
          <p className="eyebrow">Current status</p>
          <h2 id="resume-status-heading">
            {siteLinks.resumePdfAvailable ? 'PDF ready to download' : 'PDF not added yet'}
          </h2>
          <p>
            {siteLinks.resumePdfAvailable
              ? 'The current public resume is available above.'
              : 'The download action will appear here as soon as the approved PDF is added.'}
          </p>
        </aside>
      </div>
    </section>
  )
}
