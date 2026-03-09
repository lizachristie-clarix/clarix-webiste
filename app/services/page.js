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
      { name: 'Website (4 pages — Home, About, Services, Contact)', price: '$1,200' },
      { name: 'Brand Kit (logo, colour palette, fonts)', price: '$800' },
      { name: 'Social Starter (5 designed posts + reusable templates)', price: '$350' },
    ],
    bundle: '$2,000',
    bundleSaving: 'Save $350',
  },
  {
    name: 'Clarix Web',
    tagline: 'For businesses ready to expand beyond a website.',
    description:
      'We build custom web apps, client portals, and SaaS-ready platforms that grow as fast as your services do.',
    services: [
      { name: 'Custom Web Portal or Dashboard', price: '$2,500' },
      { name: 'User Accounts & Secure Login', price: '$800' },
      { name: 'Booking System', price: '$1,200' },
      { name: 'Payment Integration', price: '$800' },
      { name: 'Client Management System', price: '$1,200' },
      { name: 'Subscription / Membership System', price: '$1,000' },
      { name: 'API Integrations with Third-Party Tools', price: '$1,500' },
      { name: 'Analytics & Reporting Dashboard', price: '$1,000' },
    ],
    bundle: '$7,500',
    bundleSaving: 'Save $2,500',
  },
  {
    name: 'Clarix Apps',
    tagline: 'For medium-sized businesses ready to go mobile.',
    description:
      'We build iOS and Android apps that give your customers a dedicated experience — and your business a serious competitive edge.',
    services: [
      { name: 'iOS + Android App (core screens)', price: '$4,500' },
      { name: 'User Login / Accounts', price: '$800' },
      { name: 'Push Notifications', price: '$600' },
      { name: 'Contact / Inquiry Form', price: '$300' },
      { name: 'Social Media Links', price: '$150' },
      { name: 'App Store & Google Play Submission', price: '$500' },
    ],
    bundle: '$5,500',
    bundleSaving: 'Save $1,350',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Every service is available à la carte — pick exactly what your business needs,
            or choose the full package and save.
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
                  <span className="price">{service.price}</span>
                </div>
              ))}
              <div className="pricing-bundle">
                <span>
                  Full Package
                  <span className="bundle-saving">{division.bundleSaving}</span>
                </span>
                <span className="price bundle-price">{division.bundle}</span>
              </div>
            </div>

          </div>
        </section>
      ))}

      <section className="cta">
        <h2>Not Sure Which Package is Right for You?</h2>
        <a href="/contact" className="cta-button">Let's Talk</a>
      </section>
    </>
  )
}
