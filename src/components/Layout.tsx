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
            Lindsey West
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
          <p>© {new Date().getFullYear()} Lindsey West</p>
          <p>Portfolio shell · Phase 1</p>
        </div>
      </footer>
    </div>
  )
}
