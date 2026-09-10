import { PageIntro } from '../components/PageIntro'

export function ResumePage() {
  return (
    <div className="container page-content narrow-content">
      <PageIntro
        eyebrow="Resume"
        title="Current resume"
        description="A downloadable PDF will be added here once the current resume is ready to publish."
      />
      <section className="content-panel" aria-labelledby="resume-status-heading">
        <h2 id="resume-status-heading">Resume PDF placeholder</h2>
        <p>
          Add the approved PDF to the site&apos;s public files, then link it here with a
          descriptive download button.
        </p>
      </section>
    </div>
  )
}
