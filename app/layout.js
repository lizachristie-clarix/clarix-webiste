import './globals.css'

export const metadata = {
  title: 'Clarix CA',
  description: 'Professional websites, web apps, and mobile products — engineered for performance, designed for growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="/" className="logo-wrap">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="7" fill="url(#logoGrad)"/>
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#853953"/>
                  <stop offset="100%" stopColor="#612D53"/>
                </linearGradient>
              </defs>
              <line x1="7" y1="10" x2="19" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="23" cy="10" r="2" fill="white" opacity="0.85"/>
              <line x1="7" y1="16" x2="25" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="7" y1="22" x2="19" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="logo-text">Clarix</span>
          </a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact" className="nav-cta">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="logo-wrap">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="7" fill="url(#logoGradFooter)"/>
                <defs>
                  <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#853953"/>
                    <stop offset="100%" stopColor="#612D53"/>
                  </linearGradient>
                </defs>
                <line x1="7" y1="10" x2="19" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="23" cy="10" r="2" fill="white" opacity="0.85"/>
                <line x1="7" y1="16" x2="25" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="7" y1="22" x2="19" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="logo-text">Clarix</span>
            </a>
            <p className="footer-tagline">A growing digital ecosystem — built for Canadian businesses.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Divisions</div>
              <a href="/services">Clarix Digital</a>
              <a href="/services">Clarix Web</a>
              <a href="/services">Clarix Apps</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="footer-social">
            <div className="footer-col-title">Follow Us</div>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Clarix CA — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
