import { PageIntro } from '../components/PageIntro'

export function AboutPage() {
  return (
    <div className="container page-content narrow-content">
      <PageIntro
        eyebrow="About"
        title="Professional background, in progress"
        description="This page will introduce Lindsey&apos;s background, technical interests, career direction, education, and a small amount of personal context."
      />
      <section className="content-panel" aria-labelledby="about-placeholder-heading">
        <h2 id="about-placeholder-heading">Content placeholder</h2>
        <p>
          Add a factual professional introduction here. Keep it specific to real
          experience and include only personal details Lindsey chooses to share.
        </p>
      </section>
    </div>
  )
}
