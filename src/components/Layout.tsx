import { NavLink, Outlet } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

export function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-content">
          <NavLink className="site-logo" to="/" aria-label="Lindsey West home">
            Lindsey West<span className="site-logo-mark" aria-hidden="true" />
          </NavLink>
          <nav aria-label="Primary navigation">
            <ul className="site-navigation">
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                    to={item.to}
                    end={item.to === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <p className="footer-name">Lindsey West</p>
            <p>© {new Date().getFullYear()} · Professional portfolio</p>
          </div>
          <nav className="footer-links" aria-label="Portfolio links">
            <a
              href="https://github.com/lindseyjwest/lindseywest.dev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <span className="footer-link-placeholder">LinkedIn · coming soon</span>
            <NavLink to="/resume">Resume</NavLink>
          </nav>
        </div>
      </footer>
    </div>
  )
}
