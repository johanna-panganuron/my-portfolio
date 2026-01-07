// app/projects/[slug]/ProjectDetailClient.js - Client Component
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFigma, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faCalendar, faUser, faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/project-detail.css'

export default function ProjectDetailClient({ project }) {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

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
                quality={100}
                unoptimized
                priority
              />
            </div>

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
            <motion.div 
              className="details-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Technologies Used</h3>
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
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="details-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Key Features</h3>
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
              <motion.a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faGithub} /> View Source Code
              </motion.a>
            )}

            {project.liveLink && (
              <motion.a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
              </motion.a>
            )}

            {project.figmaLink && (
              <motion.a 
                href={project.figmaLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faFigma} /> Design Files
              </motion.a>
            )}

            {project.youtubeLink && (
              <motion.a 
                href={project.youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faYoutube} /> Capstone Video
              </motion.a>
            )}
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
    </div>
  )
}