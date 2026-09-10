const aboutTopics = [
  {
    title: 'Professional background',
    description:
      'Placeholder: add a concise, factual introduction to Lindsey’s professional experience and direction.',
  },
  {
    title: 'Technical interests',
    description:
      'Placeholder: add the tools, systems, or problems Lindsey is genuinely interested in exploring.',
  },
  {
    title: 'Education',
    description:
      'Placeholder: add only the education details Lindsey wants to share as supporting context.',
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
            This page will bring together real work across data, analytics, automation,
            and software with the context behind it.
          </p>
        </div>
        <div className="about-hero-note">
          <span className="about-hero-note-mark" aria-hidden="true">✦</span>
          <p>Professional background placeholder</p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container about-story-layout">
          <div className="about-story-intro">
            <p className="eyebrow">Professional focus</p>
            <h2>Built around useful, well-considered work.</h2>
            <p>
              The finished story will be specific, factual, and grounded in real
              experience rather than a résumé recap.
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

      <section className="personal-section container" aria-labelledby="personal-interests-heading">
        <div className="personal-section-heading">
          <p className="eyebrow">Personal interests</p>
          <h2 id="personal-interests-heading">The person behind the work.</h2>
          <p>
            Placeholder: add a short, personal note here. Keep it selective and true to
            Lindsey.
          </p>
        </div>
        <div className="photo-mosaic">
          <figure className="photo-slot photo-slot-portrait">
            <div role="img" aria-label="Future portrait photo placeholder">
              Portrait photo
            </div>
            <figcaption>Photo placeholder · Lindsey</figcaption>
          </figure>
          <figure className="photo-slot photo-slot-dog">
            <div role="img" aria-label="Future dog photo placeholder">Dog photo</div>
            <figcaption>Photo placeholder · dog</figcaption>
          </figure>
          <figure className="photo-slot photo-slot-hobby-one">
            <div role="img" aria-label="Future hobby photo placeholder one">Hobby photo</div>
            <figcaption>Photo placeholder · hobby</figcaption>
          </figure>
          <figure className="photo-slot photo-slot-hobby-two">
            <div role="img" aria-label="Future hobby photo placeholder two">Hobby photo</div>
            <figcaption>Photo placeholder · hobby</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
