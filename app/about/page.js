export const metadata = {
  title: 'About | Clarix CA',
  description: 'Clarix is more than an agency — a growing digital ecosystem built for Canadian businesses.',
}

export default function AboutPage() {
  return (
    <>
      {/* Opening */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Clarix</h2>
          <div className="about-text">
            <p>
              Clarix is more than an agency. We are a growing digital ecosystem — a platform
              of specialized divisions, each one purpose-built, each one connected — working
              together to help businesses build, grow, and scale online.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="mission-vision-grid">

            <div className="mission-card">
              <div className="mv-label">Our Mission</div>
              <h3>What we do and why we exist</h3>
              <p>
                Clarix exists to help Canadian businesses and startups build their digital
                presence — without the complexity, cost, or confusion of working with large
                agencies. We build websites, web apps, and mobile products using a shared
                technical platform that lets us deliver faster, more consistently, and at a
                quality most clients have never experienced at this price point.
              </p>
              <blockquote>
                "We build the digital infrastructure that Canadian businesses grow on."
              </blockquote>
            </div>

            <div className="mission-card">
              <div className="mv-label">Our Vision</div>
              <h3>Where we are going</h3>
              <p>
                To become Canada's most trusted digital ecosystem — a platform that any
                business can grow with, from their first website to a fully scaled mobile
                product. We envision a future where the gap between a great idea and a great
                product is smaller, faster, and more accessible than it has ever been.
                Clarix is how that future gets built.
              </p>
              <blockquote>
                "Every great Canadian business deserves a great digital product."
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="services">
            <div className="card">
              <h3>Speed with Purpose</h3>
              <p>We build fast because we have built the foundation. Not cutting corners — cutting waste. Every project benefits from the platform we have refined over time.</p>
            </div>
            <div className="card">
              <h3>Craft over Quantity</h3>
              <p>We do fewer projects and do them exceptionally well. Quality is not negotiable — it is the reason clients come back and send referrals.</p>
            </div>
            <div className="card">
              <h3>Real Partnership</h3>
              <p>We are not vendors. We are technical co-pilots. We understand our clients' businesses and care about outcomes, not just deliverables.</p>
            </div>
            <div className="card">
              <h3>Built for Canada</h3>
              <p>We understand the Canadian market, its businesses, and what they need to grow online. We are proud to be building from Canada, for Canada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">The Team</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '40px', color: '#9a8a90' }}>
            Two developers. One platform. Built for Canadian businesses. //needs update
          </p>
          <div className="team-grid">

            <div className="team-card">
              <div className="team-photo-placeholder">LC</div>
              <div className="team-info">
                <div className="team-name">Liza Christie</div>
                <div className="team-role">Co-Founder & Creative Director</div>
                <p className="team-bio">
                  I bring both vision and intention to every project I touch. With a sharp
                  eye for branding and a deep belief that great design can transform a
                  business, I pour the same passion into every client's brand as I do into
                  Clarix itself. For me, this is not simply a business — it is a craft I
                  genuinely love. And I believe we take care of the things we love. So when
                  you trust Clarix with your business, you're trusting that love of craft
                  to show up in every detail.
                </p>
                <a href="#" className="team-linkedin">LinkedIn — Coming Soon</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo-placeholder">KC</div>
              <div className="team-info">
                <div className="team-name">Kevin Christie</div>
                <div className="team-role">Co-Founder & Technical Director</div>
                <p className="team-bio">
                  I bring technical expertise across a broad range of disciplines —
                  engineering, project management, accounting, and software development.
                  At Clarix, I focus on building products that are not only powerful under
                  the hood, but accessible to everyone, including those who find it
                  difficult to keep pace with rapidly evolving technology. At the end of
                  the day, it is not the tools or the technology that drives me — it is
                  the people, and the real impact that well-built products can have on
                  their lives.
                </p>
                <a href="#" className="team-linkedin">LinkedIn — Coming Soon</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Want to Work With Us?</h2>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </>
  )
}
