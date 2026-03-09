export const metadata = {
  title: 'Clarix CA — Build Faster. Automate Smarter.',
  description: 'Professional websites, web apps, and mobile products — engineered for performance, designed for growth.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Build Faster. Automate Smarter.</h1>
        <p>Professional websites, web apps, and mobile products — engineered for performance, designed for growth.</p>
      </section>

      {/* Why Clarix */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Clarix</h2>
          <div className="services">
            <div className="card">
              <h3>Full Stack</h3>
              <p>From your first website to a full mobile app — one team handles everything. No handoffs, no miscommunication, no starting over with someone new.</p>
            </div>
            <div className="card">
              <h3>Automation First</h3>
              <p>We build systems that work while you don't — contact forms, email workflows, notifications, and integrations that eliminate repetitive manual work from day one.</p>
            </div>
            <div className="card">
              <h3>Built for Growth</h3>
              <p>We don't just build websites. We build brands that stand out, attract the right clients, and keep them coming back. Every decision we make is designed for the long term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Clarix Divisions</h2>
          <p className="section-subtitle">Not sure where to start? Most clients begin with Clarix Digital.</p>
          <div className="services">
            <div className="card">
              <h3>Clarix Digital</h3>
              <p>For small business owners ready to launch their online presence. You get a professional website, a starter brand package, and 5 social media posts to hit the ground running — everything you need to show up with confidence from day one.</p>
            </div>
            <div className="card">
              <h3>Clarix Web</h3>
              <p>For businesses and freelancers who already have a website but are ready for more. We expand your digital presence into custom web apps, client portals, and SaaS-ready platforms that grow as fast as your services do.</p>
            </div>
            <div className="card">
              <h3>Clarix Apps</h3>
              <p>For medium-sized businesses with an established web presence that are ready to go mobile. We build iOS and Android apps that give your customers a dedicated experience — and your business a serious competitive edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="services">
            <div className="card">
              <h3>01 — Consult</h3>
              <p>Your business is yours. Before we touch a single line of code, we take the time to understand your mission, your values, and how you want the world to see you. Every decision starts here.</p>
            </div>
            <div className="card">
              <h3>02 — Craft</h3>
              <p>We take what we've learned and shape it into a clear creative direction — one that feels authentically like you, while standing out in a market full of generic, forgettable digital products.</p>
            </div>
            <div className="card">
              <h3>03 — Complete</h3>
              <p>With direction locked in, we build with precision. Clean code, thoughtful design, and a final product that represents your business with the professionalism it deserves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Build Something Great?</h2>
        <a href="/contact" className="cta-button">Start a Conversation</a>
      </section>
    </>
  )
}
