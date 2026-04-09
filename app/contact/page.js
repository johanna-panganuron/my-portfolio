'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faClock, faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Chatbot from '@/components/Chatbot'
import '../../styles/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Get In Touch</h1>
          <p>You can reach me at the following</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact Information</h2>

            <div className="info-items">
             
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="info-text">
                  <h3>phone number</h3>
                  <p>+63 949 128 0100</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>johannapanganuron@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="info-text">
                  <h3>Location</h3>
                  <p>Cordova, Cebu City, Philippines</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="info-text">
                  <h3>Response Time</h3>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* <div className="availability-card">
              <h3>Availability</h3>
              <p>
                Currently seeking OJT opportunities. Available for internships starting immediately.
              </p>
            </div> */}
            <h2>Connect with me</h2>

            <div className="social-links">
              <a href="https://facebook.com/juwanaxz" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://github.com/johanna-panganuron" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/johanna-panganuron/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="alert alert-success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary btn-submit"
              >
                <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '0.5rem' }} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Chatbot />
    </div >
  )
}