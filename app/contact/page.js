'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', division: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // TODO: wire up to Supabase or Resend
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
    setForm({ name: '', email: '', division: '', message: '' })
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to explore what Clarix can do for your
            business? Fill out the form below and we will get back to you within 2 business days.
          </p>

          {status === 'success' ? (
            <div className="form-success">
              <h3>Message Received</h3>
              <p>Thank you for reaching out. We will be in touch within 2 business days.</p>
            </div>
          ) : (
            <form className="form-wrap" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <select
                name="division"
                value={form.division}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Which division are you interested in?</option>
                <option value="digital">Clarix Digital — Website & Brand</option>
                <option value="web">Clarix Web — Web Apps & Portals</option>
                <option value="apps">Clarix Apps — iOS & Android</option>
                <option value="unsure">Not sure yet — let's talk</option>
              </select>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="submit-button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Reassurance */}
      <section className="section" style={{ background: 'white', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="contact-reassurance">
            <div className="reassurance-item">
              <span className="reassurance-icon">⏱</span>
              <div>
                <strong>Response Time</strong>
                <p>We respond to all inquiries within 2 business days.</p>
              </div>
            </div>
            <div className="reassurance-item">
              <span className="reassurance-icon">🤝</span>
              <div>
                <strong>No Obligation</strong>
                <p>Our first conversation is always free — no pressure, no commitment.</p>
              </div>
            </div>
            <div className="reassurance-item">
              <span className="reassurance-icon">🍁</span>
              <div>
                <strong>Based in Canada</strong>
                <p>We are a Canadian team serving businesses across the GTA and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
