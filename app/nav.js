'use client'

import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

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

          {/* Desktop menu */}
          <ul className="nav-desktop">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact" className="nav-cta">Contact</a></li>
          </ul>

          {/* Hamburger button */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${open ? 'open-1' : ''}`}/>
            <span className={`ham-line ${open ? 'open-2' : ''}`}/>
            <span className={`ham-line ${open ? 'open-3' : ''}`}/>
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/contact" onClick={() => setOpen(false)} className="mobile-cta">Contact</a>
        </div>
      </div>
    </header>
  )
}
