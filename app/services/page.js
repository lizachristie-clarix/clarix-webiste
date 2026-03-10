export const metadata = {
  title: 'Services | Clarix CA',
  description: 'Professional websites, web apps, and mobile products — à la carte or full package.',
}

const divisions = [
  {
    name: 'Clarix Digital',
    tagline: 'For small businesses launching their online presence.',
    description:
      'You get a professional website, a starter brand package, and 5 social media posts to hit the ground running — everything you need to show up with confidence from day one.',
    services: [
      { name: 'Website (4 pages — Home, About, Services, Contact)', price: '$1,200', contact: false },
      { name: 'Brand Kit (logo, colour palette, fonts)', price: '$800', contact: false },
      { name: 'Social Starter (5 designed posts + reusable templates)', price: '$350', contact: false },
    ],
    bundle: '$2,000',
    bundleSaving: 'Save $350',
    bundleContact: false,
  },
  {
    name: 'Clarix Web',
    tagline: 'For businesses ready to expand beyond a website.',
    description:
      'We build custom web apps, client portals, and SaaS-ready platforms that grow as fast as your services do.',
    services: [
      { name: 'Custom Web Portal or Dashboard', price: null, contact: true },
      { name: 'User Accounts & Secure Login', price: '$800', contact: false },
      { name: 'Booking System', price: '$1,200', contact: false },
      { name: 'Payment Integration', price: '$800', contact: false },
      { name: 'Client Management System', price: '$1,200', contact: false },
      { name: 'Subscription / Membership System', price: '$1,000', contact: false },
      { name: 'API Integrations with Third-Party Tools', price: null, contact: true },
      { name: 'Analytics & Reporting Dashboard', price: '$1,000', contact: false },
    ],
    bundle: null,
    bundleSaving: null,
    bundleContact: true,
  },
  {
    name: 'Clarix Apps',
    tagline: 'For medium-sized businesses ready to go mobile.',
    description:
      'We build iOS and Android apps that give your customers a dedicated experience — and your business a serious competitive edge.',
    services: [
      { name: 'iOS + Android App (core screens)', price: null, contact: true },
      { name: 'User Login / Accounts', price: '$800', contact: false },
      { name: 'Push Notifications', price: '$600', contact: false },
      { name: 'Contact / Inquiry Form', price: '$300', contact: false },
      { name: 'Social Media Links', price: '$150', contact: false },
      { name: 'App Store & Google Play Submission', price: '$500', contact: false },
    ],
    bundle: null,
    bundleSaving: null,
    bundleContact: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-label">Services</div>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Every service is available à la carte — pick exactly what your business needs,
            or choose the full package and save. Complex projects are quoted individually.
          </p>
        </div>
      </section>

      {divisions.map((division) => (
        <section key={division.name} className="section division-section">
          <div className="container">
            <div className="division-header">
              <h2 className="division-name">{division.name}</h2>
              <p className="division-tagline">{division.tagline}</p>
              <p className="division-desc">{division.description}</p>
            </div>

            <div className="pricing-table">
              <div className="pricing-header">
                <span>Service</span>
                <span>Price (CAD)</span>
              </div>
              {division.services.map((service) => (
                <div className="pricing-row" key={service.name}>
                  <span>{service.name}</span>
                  {service.contact ? (
                    <a href="/contact" className="contact-price-btn">Contact Us</a>
                  ) : (
                    <span className="price">{service.price}</span>
                  )}
                </div>
              ))}
              <div className="pricing-bundle">
                <span>
                  Full Package
                  {division.bundleSaving && (
                    <span className="bundle-saving">{division.bundleSaving}</span>
                  )}
                </span>
                {division.bundleContact ? (
                  <a href="/contact" className="contact-price-btn contact-price-btn-light">Contact Us</a>
                ) : (
                  <span className="price bundle-price">{division.bundle}</span>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta">
        <div className="cta-content">
          <h2>Not Sure Which Package is Right for You?</h2>
          <p>Let's talk — no obligation, no pressure.</p>
          <a href="/contact" className="cta-button">Get a Free Estimate</a>
        </div>
      </section>
    </>
  )
}
