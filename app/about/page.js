'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faLaptopCode, faArrowTrendUp, faCode, faDatabase, faLightbulb, faKeyboard, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import Chatbot from '@/components/Chatbot'
import ContactSection from '@/components/ContactSection'
import '../../styles/about.css'

export default function About() {
  const [modalImg, setModalImg] = useState(null)
  const [multiModal, setMultiModal] = useState(null)

  return (
    <div>
      {/* Single image modal */}
      {modalImg && (
        <div className="single-modal-overlay" onClick={() => setModalImg(null)}>
          <div className="img-modal-box" onClick={e => e.stopPropagation()}>
            <button className="img-modal-close" onClick={() => setModalImg(null)}>
              <FontAwesomeIcon icon={faTimes} /> Close
            </button>
            <img src={modalImg.src} alt={modalImg.alt} className="img-modal-img" />
            {modalImg.label && <p className="img-modal-label">{modalImg.label}</p>}
          </div>
        </div>
      )}

      {/* Fullscreen carousel modal */}
      {multiModal && (
        <>
          <div className="fullscreen-modal-overlay" onClick={() => setMultiModal(null)} />
          <div className="fullscreen-modal-ui">
            <div className="fullscreen-img-wrapper">
              <button className="fullscreen-close" onClick={() => setMultiModal(null)}>
                <FontAwesomeIcon icon={faTimes} /> Close
              </button>
              <button
                className="fullscreen-nav left"
                onClick={() => setMultiModal(prev => ({ ...prev, index: (prev.index - 1 + prev.imgs.length) % prev.imgs.length }))}
              >
                ‹
              </button>
              <img
                src={multiModal.imgs[multiModal.index].src}
                alt={multiModal.imgs[multiModal.index].alt}
                className="fullscreen-img"
              />
              <button
                className="fullscreen-nav right"
                onClick={() => setMultiModal(prev => ({ ...prev, index: (prev.index + 1) % prev.imgs.length }))}
              >
                ›
              </button>
              <div className="fullscreen-dots">
                {multiModal.imgs.map((_, i) => (
                  <button
                    key={i}
                    className={`fullscreen-dot ${i === multiModal.index ? 'active' : ''}`}
                    onClick={() => setMultiModal(prev => ({ ...prev, index: i }))}
                  />
                ))}
              </div>
              {multiModal.imgs[multiModal.index].label && (
                <p className="fullscreen-label">{multiModal.imgs[multiModal.index].label}</p>
              )}
            </div>
          </div>
        </>
      )}

      <div className="about-page">
        <div className="container">

          {/* Header */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">About Me</h1>
          </motion.div>

          {/* Cover Photo */}
          <motion.div
            className="about-cover-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-cover-photo">
              <img src="/images/cover-photo2.jpg" alt="Cover" className="cover-img" />
            </div>
            <div className="about-profile-avatar">
              <Image src="/images/profile.png" alt="Johanna Panganuron" width={150} height={150} className="about-avatar-img profile-light" priority />
              <Image src="/images/profile-dark.png" alt="Johanna Panganuron" width={150} height={150} className="about-avatar-img profile-dark" priority />
            </div>
          </motion.div>

          {/* Profile Info */}
          <div className="about-profile-info-section">
            <motion.div
              className="about-profile-name-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Johanna B. Panganuron</h2>
              <img src="/images/Twitter_Verified_Badge.svg.png" alt="Verified" className="verified-icon" />
            </motion.div>
            <motion.p
              className="about-profile-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Junior Full-Stack Web Developer
            </motion.p>
            <div className="about-profile-info-left">
              <motion.p
                className="about-profile-bio-short"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I help small businesses and individuals build web solutions that actually work — from simple websites to full booking systems and dashboards. If you have an idea, I'll turn it into something real, functional, and easy to use.
              </motion.p>
              <motion.a
                href="https://docs.google.com/document/d/1Rh-sByf3tgKurqGucIbHMmOJDI4HdjmdLX5zNKWp4Ww/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                View Resume
              </motion.a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="feature-cards">
            {[
              { icon: faCode, title: 'Clean & Maintainable Code', text: 'Your project won\'t break down the road — I write code that\'s organized and built to last.', color: '#10b981' },
              { icon: faLightbulb, title: 'Problem-First Thinking', text: 'I focus on solving your actual problem, not just writing code for the sake of it.', color: '#10b981' },
              { icon: faDatabase, title: 'Database & Data Management', text: 'Your data is stored, structured, and retrieved reliably — no messy spreadsheets needed.', color: '#10b981' },
              { icon: faComments, title: 'Clear Communication', text: 'I keep you updated throughout the process so you\'re never left guessing.', color: '#10b981' },
              { icon: faLaptopCode, title: 'Full-Stack Capability', text: 'From the interface your users see to the database behind it — I handle the whole thing.', color: '#10b981' },
              { icon: faArrowTrendUp, title: 'Always Improving', text: 'I stay up to date with modern tools so your project uses what actually works today.', color: '#10b981' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="feature-icon">
                  <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} />
                </div>
                <div className="feature-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience - 1 row */}
          <motion.div
            className="about-section-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Experience</h2>
            <div className="about-section-item">
              <div className="about-award-icon briefcase">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <div>
                <p className="about-section-title">Freelance Web Developer</p>
                <p className="about-section-subtitle">Self-Employed • Remote</p>
                <p className="about-section-year">April 2026 – Present</p>
                <p className="about-section-desc">Designing and developing full-stack web solutions for small businesses and individuals — including booking systems, dashboards, and custom websites using Vue, React, Next.js, Node.js, PHP, Laravel and MySQL.</p>
              </div>
            </div>
            <div className="about-section-item">
              <div className="about-award-icon briefcase">
                <FontAwesomeIcon icon={faKeyboard} />
              </div>
              <div>
                <p className="about-section-title">Data Encoder (OJT)</p>
                <p className="about-section-subtitle">DSWD - Pantawid Pamilyang Pilipino Program (4Ps) • Cordova, Cebu</p>
                <p className="about-section-year">January 2026 – April 2026</p>
                <p className="about-section-desc">Encoded and managed beneficiary records across structured datasets, ensuring data accuracy and consistency — reinforcing practical skills in data handling and attention to detail.</p>
              </div>
            </div>
          </motion.div>

          {/* Education | Honors - side by side */}
          <div className="about-side-by-side">
            <motion.div
              className="about-section-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Education</h2>
              <div className="about-section-item">
                <Image src="/images/school-logo.jpg" alt="Cordova Public College" width={55} height={55} className="about-section-logo" />
                <div>
                  <p className="about-section-title">Bachelor of Science in Information Technology</p>
                  <p className="about-section-subtitle">Cordova Public College</p>
                  <p className="about-section-year">August 2022 - June 2026</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-section-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Honors & Awards</h2>
              <div className="about-section-item">
                <div
                  className="about-award-icon trophy clickable-img"
                  onClick={() => setMultiModal({
                    imgs: [                     
                      { src: '/images/nc-2.png', alt: 'Certificate 1 - 3rd Placer', label: '3rd Placer' },
                      { src: '/images/nc-2.png', alt: 'Certificate 2 - Best Technical Implementation', label: 'Best Technical Implementation' },
                      { src: '/images/project-demo.png', alt: 'Project Demo', label: 'Project Demo' },
                      { src: '/images/awarding-photo.png', alt: 'Awarding Photo', label: 'Awarding Photo' },
                    ],
                    index: 0
                  })}
                >
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
                <div>
                  <p className="about-section-title">3rd Placer & Best Technical Implementation</p>
                  <p className="about-section-subtitle">Mini Hackathon (Figma) - IT Day</p>
                  <p className="about-section-subtitle">Cordova Public College</p>
                  <p className="about-section-year">March 19, 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications - 1 row */}
          <motion.div
            className="about-section-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
              <div className="about-section-item">
                <img
                  src="/images/tesda-logo.png"
                  alt="TESDA"
                  className="about-section-logo1 clickable-img"
                  onClick={() => setModalImg({ src: '/images/creative-web-design.png', alt: 'Creative Web Design', label: 'Creative Web Design' })}
                />
                <div>
                  <p className="about-section-title">Creative Web Design</p>
                  <p className="about-section-subtitle">Cebu Call Center Academy • TESDA</p>
                  <p className="about-section-year">August 11 - August 23, 2023</p>
                </div>
              </div>
              <div className="about-section-item">
                <img
                  src="/images/tesda-logo.png"
                  alt="TESDA"
                  className="about-section-logo1 clickable-img"
                  onClick={() => setModalImg({ src: '/images/nc-2.png', alt: 'Computer Systems Servicing NC II', label: 'Computer Systems Servicing (NC II)' })}
                />
                <div>
                  <p className="about-section-title">Computer Systems Servicing (NC II)</p>
                  <p className="about-section-subtitle">Cebu Call Center Academy • TESDA</p>
                  <p className="about-section-year">June 26 - September 3, 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="about-section-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">My Journey</h2>
            <div className="timeline">
              {[
                { year: '2022', title: 'The Beginning', desc: 'Started BSIT at Cordova Public College, curious about how websites work.' },
                { year: '2022', title: 'First Lines of Code', desc: 'Wrote my first HTML & CSS and fell in love with building things from scratch.' },
                { year: '2023', title: 'Going Deeper', desc: 'Learned JavaScript and discovered the power of making things interactive.' },
                { year: '2023', title: 'Creative Web Design', desc: 'Earned TESDA Certification in Creative Web Design, started taking design seriously.' },
                { year: '2024', title: 'Full-Stack Journey', desc: 'Dived into MySQL for database management, then explored backend development with Node.js, PHP, and Laravel — understanding how the full web stack comes together.' },
                { year: '2024', title: 'Computer Systems Servicing NC II', desc: 'Earned TESDA NC II Certification, broadening my technical foundation.' },
                { year: '2025', title: 'Building Real Projects', desc: 'Developed Mimi\'s Pet Grooming System, CPC SSG Voting System, CPC Library and Task Tracker — turning skills into real solutions.' },
                { year: '2026', title: 'Hackathon Win 🏆', desc: '3rd Placer & Best Technical Implementation at the Mini Hackathon (Figma) during IT Day.' },
                { year: '2026', title: 'Real World Experience', desc: 'Completed OJT at DSWD - Pantawid Pamilyang Pilipino Program (4Ps) as a Data Encoder.' },
                { year: '2026', title: 'Fresh Graduate 🎓', desc: 'Graduated with a BSIT degree, ready to bring my skills and passion to the professional world.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="timeline-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="timeline-cta-text">Curious about what I've built along the way?</p>
            <Link href="/projects" className="btn btn-primary">View My Projects</Link>
          </motion.div>

        </div>
      </div>

      {/* ───── CONTACT ───── */}
      <ContactSection />

      <Chatbot />
    </div>
  )
}