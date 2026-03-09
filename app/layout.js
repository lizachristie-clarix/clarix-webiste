import './globals.css'

export const metadata = {
  title: 'Clarix CA',
  description: 'Websites, automation systems, and software built for modern businesses.',
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
          <a href="/" className="logo">Clarix CA</a>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Clarix CA</p>
    </footer>
  )
}
