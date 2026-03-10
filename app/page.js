export const metadata = {
  title: 'Clarix CA — Build Faster. Automate Smarter.',
  description: 'Professional websites, web apps, and mobile products — engineered for performance, designed for growth.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" aria-hidden="true"/>
        <div className="hero-content">
          <div className="hero-badge">🍁 Canadian Digital Ecosystem</div>
          <h1>Build Faster.<br/>Automate Smarter.</h1>
          <p>Professional websites, web apps, and mobile products —<br/>engineered for performance, designed for growth.</p>
          <div className="hero-actions">
            <a href="/services" className="btn-primary">View Services</a>
            <a href="/contact" className="btn-secondary">Start a Project</a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Divisions</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">End-to-End Services</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Canadian</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Team for Everything</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clarix */}
      <section className="section">
        <div className="container">
          <div className="section-label">Why Clarix</div>
          <h2 className="section-title">One ecosystem.<br/>Every digital need.</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Full Stack</h3>
              <p>From your first website to a full mobile app — one team handles everything. No handoffs, no miscommunication.</p>
            </div>
            <div className="card">
              <div className="card-icon">⚙️</div>
              <h3>Automation First</h3>
              <p>We build systems that work while you don't — forms, workflows, notifications, and integrations from day one.</p>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>Built for Growth</h3>
              <p>We build brands that stand out, attract the right clients, and keep them coming back for the long term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Our Divisions</div>
          <h2 className="section-title">Find your starting point.</h2>
          <p className="section-subtitle">Not sure where to begin? Most clients start with Clarix Digital.</p>
          <div className="divisions-grid">
            <div className="division-card">
              <div className="division-icon digital">D</div>
              <h3>Clarix Digital</h3>
              <p>For small businesses launching their online presence. Website, brand kit, and social starter — all in one package.</p>
              <a href="/services" className="card-link">View packages →</a>
            </div>
            <div className="division-card">
              <div className="division-icon web">W</div>
              <h3>Clarix Web</h3>
              <p>For businesses ready to expand into web apps, client portals, and SaaS-ready platforms.</p>
              <a href="/services" className="card-link">View packages →</a>
            </div>
            <div className="division-card">
              <div className="division-icon apps">A</div>
              <h3>Clarix Apps</h3>
              <p>For established businesses ready to go mobile with a full iOS and Android app experience.</p>
              <a href="/services" className="card-link">View packages →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">How we work.</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Consult</h3>
              <p>Your business is yours. Before we touch a single line of code, we take the time to understand your mission, values, and vision.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Craft</h3>
              <p>We shape what we've learned into a clear creative direction — one that feels authentically like you, while standing out in the market.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Complete</h3>
              <p>With direction locked in, we build with precision. Clean code, thoughtful design, delivered with professionalism.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Build Something Great?</h2>
          <p>Let's talk about your project — no obligation, no pressure.</p>
          <a href="/contact" className="cta-button">Start a Conversation</a>
        </div>
      </section>
    </>
  )
}
