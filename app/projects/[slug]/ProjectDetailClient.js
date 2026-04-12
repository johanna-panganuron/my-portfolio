// app/projects/[slug]/ProjectDetailClient.js - Client Component
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { projectDetails } from './page'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFigma, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faCalendar, faUser, faExternalLinkAlt, faChevronLeft, faChevronRight, faLayerGroup, faListCheck, faUsers } from '@fortawesome/free-solid-svg-icons'
import ContactSection from '@/components/ContactSection'
import Chatbot from '@/components/Chatbot'
import '../../../styles/project-detail.css'

const techIcons = {
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vue CLI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Vuex': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'VITE': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'SASS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'JWT': '/images/jwt.webp',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  'PDFKit': '/images/pdf-js.png',
  'Nodemailer': '/images/node-mailer.png',
  'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'Excel JS': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg',
  'Gemini Chatbot': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
  'SweetAlert2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Axios': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
  'ESLint': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
  'Chart.js': '/images/chart-js.png',
  'Toastify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
}

export default function ProjectDetailClient({ project }) {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [otherProjects, setOtherProjects] = useState([])

  useEffect(() => {
    const others = Object.entries(projectDetails)
      .filter(([slug]) => slug !== project.slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    setOtherProjects(others)
  }, [project.slug])
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <motion.div
          onClick={() => router.back()}
          className="back-link"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="project-title">{project.title}</h1>
          <div className="project-meta">
            <span className="meta-item">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
              <strong>Role:</strong> {project.role}
            </span>
            <span className="meta-item">
              <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '0.5rem' }} />
              <strong>Duration:</strong> {project.duration}
            </span>
          </div>
        </motion.div>

        {/* Image Carousel */}
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous slide">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="carousel-slide">
              <Image
                src={project.screenshots[currentSlide]}
                alt={`${project.title} - Screenshot ${currentSlide + 1}`}
                width={1200}
                height={600}
                className="carousel-image"
                quality={85}
                priority
              />
            </div>

            {/* Preload adjacent images */}
            {project.screenshots.map((src, index) => (
              index !== currentSlide && (
                <Image
                  key={index}
                  src={src}
                  alt=""
                  width={1200}
                  height={600}
                  quality={85}
                  style={{ display: 'none' }}
                  priority={Math.abs(index - currentSlide) === 1}
                />
              )
            ))}

            <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next slide">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Info Grid */}
        <motion.div
          className="project-info-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-descriptionz">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-details">
            {/* Full width - Tech Stack */}
            <motion.div
              className="details-card"
              style={{ gridColumn: '1 / -1' }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3><FontAwesomeIcon icon={faLayerGroup} style={{ marginRight: '0.5rem', color: '#10b981' }} />Tech Stack</h3>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {techIcons[tech] && (
                      <img src={techIcons[tech]} alt={tech} style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                    )}
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Left - Users */}
            <motion.div
              className="details-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3><FontAwesomeIcon icon={faUsers} style={{ marginRight: '0.5rem', color: '#10b981' }} />Users ({project.actors.length})</h3>
              <ul className="features-list">
                {project.actors.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </motion.div>

            {/* Right - Key Features */}
            <motion.div
              className="details-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3><FontAwesomeIcon icon={faListCheck} style={{ marginRight: '0.5rem', color: '#10b981' }} />Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div
          className="project-links-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Project Links</h2>
          <div className="links-container">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FontAwesomeIcon icon={faGithub} /> View Source Code
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
              </a>
            )}
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FontAwesomeIcon icon={faFigma} /> Design Files
              </a>
            )}
            {project.youtubeLink && (
              <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FontAwesomeIcon icon={faYoutube} /> Capstone Video
              </a>
            )}
          </div>
        </motion.div>
        {/* Other Projects */}
        <motion.div
          className="other-projects-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Other Projects</h2>
          <div className="other-projects-grid">
            {otherProjects.map(([slug, proj]) => (
              <Link key={slug} href={`/projects/${slug}`} className="other-project-card">
                <div className="other-project-img-wrap">
                  <img src={proj.mainImage} alt={proj.title} className="other-project-img" />
                </div>
                <div className="other-project-info">
                  <h3>{proj.title}</h3>
                  <div className="other-project-tags">
                    {proj.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {techIcons[tech] && (
                          <img src={techIcons[tech]} alt={tech} style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                        )}
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="tech-badge">+{proj.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
        {/* Navigation */}
        <motion.div
          className="project-navigation"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects" className="nav-btn">
            ← Back to All Projects
          </Link>
        </motion.div>
      </div>
      <ContactSection />
      <Chatbot />
    </div>
  )
}