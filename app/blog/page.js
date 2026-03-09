export const metadata = {
  title: 'Blog | Clarix CA',
  description: 'Insights on web development, branding, and growing your digital presence.',
}

const posts = [
  {
    slug: 'automation-saves-time',
    title: 'How Automation Saves Canadian Businesses Time',
    excerpt:
      'From contact forms to email workflows — exploring how the right automation tools eliminate manual work and let you focus on what actually matters.',
    date: 'March 2026',
    division: 'Clarix Systems',
  },
  {
    slug: 'modern-website',
    title: 'Why Every Business Needs More Than Just a Website',
    excerpt:
      'A website is a starting point, not a finish line. Here is how a strong digital presence — brand, content, and platform — drives real business growth.',
    date: 'March 2026',
    division: 'Clarix Digital',
  },
]

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Clarix Blog</h2>
        <p className="section-subtitle">
          Insights on building, branding, and growing your digital presence — from the Clarix team.
        </p>
        <div className="blog-grid">
          {posts.map((post) => (
            <div className="card" key={post.slug}>
              <div className="blog-division">{post.division}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-date">{post.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
