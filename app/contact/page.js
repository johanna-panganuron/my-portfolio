'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faCheckCircle,
  faTimesCircle,
  faSpinner, faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import Chatbot from '@/components/Chatbot'
import '../../styles/contact.css'

const contactInfo = [
  {
    icon: faPhone,
    label: 'Phone',
    value: '0949 1280 100',
    href: 'tel:+639491280100',
    color: '#10b981',
  },
  {
    icon: faEnvelope,
    label: 'Email',
    value: 'johannapanganuron@gmail.com',
    href: 'mailto:johannapanganuron@gmail.com',
    color: '#10b981',
  },
  {
    icon: faLocationDot,
    label: 'Location',
    value: 'Cordova, Cebu, Philippines',
    href: null,
    color: '#10b981',
  },
]

const socials = [
  { Icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/johannaxzpanganuron', color: '#1877f2' },
  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/johanna-panganuron', color: '#6e40c9' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/johanna-panganuron/', color: '#0077b5' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div>
      <div className="contact-page">
        <div className="container">

          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </motion.div>

          <div className="contact-grid">

            {/* Left — info panel */}
            <motion.div
              className="contact-info-panel"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="info-intro">
                <h2>🚀 Let&rsquo;s <span style={{ color: '#10b981' }}>build</span> something together</h2>
                <p>
                  I&rsquo;m open to freelance projects, collaborations, or full-time opportunities.
                  Whether you have a question or just want to connect, feel free to reach out!
                </p>
              </div>

              <div className="info-cards">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{ '--accent': item.color }}
                  >
                    <div className="info-card-icon">
                      <FontAwesomeIcon icon={item.icon} style={{ width: 16, height: 16 }} />
                    </div>
                    <div className="info-card-body">
                      <span className="info-card-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="info-card-value">{item.value}</a>
                      ) : (
                        <span className="info-card-value">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-section">
                <p className="social-label">Find me on</p>
                <div className="social-links">
                  {socials.map(({ Icon, label, href, color }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={label}
                      style={{ '--accent': color }}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              className="contact-form-panel"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className={`form-field ${focused === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={`form-field ${focused === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div
                  style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                  className={`form-field ${focused === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    style={{ flex: 1 }}
                  />
                </div>

                {status === 'success' && (
                  <div className="toast success">
                    <FontAwesomeIcon icon={faCheckCircle} style={{ width: 16, height: 16 }} />
                    <span>Message sent! I&rsquo;ll get back to you soon.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="toast error">
                    <FontAwesomeIcon icon={faTimesCircle} style={{ width: 16, height: 16 }} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'sending'}
                 
                >
                  {status === 'sending' ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin style={{ width: 16, height: 16 }} />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} style={{ width: 16, height: 16 }} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      <Chatbot />
    </div>
  )
}