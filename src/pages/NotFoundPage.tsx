import { Link } from 'react-router-dom'
import '../styles/not-found.css'

export function NotFoundPage() {
  return (
    <div className="home-page not-found-page">
      <section className="not-found-intro home-wrap" aria-labelledby="not-found-title">
        <p className="home-kicker">404 / Page not found</p>
        <h1 id="not-found-title">This page<br /><em>isn’t here.</em></h1>
        <p>The link may have changed, or the address may be incorrect.</p>
        <Link className="home-button" to="/">Return to Home <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  )
}
