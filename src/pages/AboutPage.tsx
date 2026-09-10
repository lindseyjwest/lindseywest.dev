const aboutTopics = [
  {
    title: 'Professional background',
    description:
      'I’m especially drawn to work that starts with a messy question, disconnected data, or a manual workflow and turns into something clearer and more reliable.',
  },
  {
    title: 'Technical interests',
    description:
      'I like work where technical decisions have a practical impact—whether that means improving a data workflow, reducing repetitive work, or building a tool that is easier for someone else to use.',
  },
  {
    title: 'Education',
    description:
      'I’m completing a B.S. in Computer Science at Weber State University, with an expected graduation date of December 2026. My coursework has helped strengthen the software engineering and systems foundation behind the data and automation work I do professionally.',
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
            I work across data, analytics, automation, and software, with a focus on making
            information easier to use and processes easier to manage.
          </p>
        </div>
        <div className="about-hero-note">
          <span className="about-hero-note-mark" aria-hidden="true">✦</span>
          <p>Data · Analytics · Automation · Software</p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container about-story-layout">
          <div className="about-story-intro">
            <p className="eyebrow">Professional focus</p>
            <h2>Built around useful, well-considered work.</h2>
            <p>
              I’m most interested in the overlap between data systems, analytics,
              automation, and application development.
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
            Outside of work, I like having a life that is not entirely made of code and
            dashboards. This part of the site is where I’ll share a little more of
            that—my dog, hobbies, and a few things I enjoy outside of technical work.
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
