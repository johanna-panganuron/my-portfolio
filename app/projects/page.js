'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Chatbot from '@/components/Chatbot'
import Link from 'next/link'
import '../../styles/home.css'
import '../../styles/projects.css'

// export const metadata = {
//   title: 'Projects | Johanna Panganuron',
//   description: 'Explore web development projects including Task Tracker, Pet Grooming, and Library Management systems.',
// }

export default function Projects() {
  const projects = [
    {
      title: 'Pet Grooming',
      slug: 'pet-grooming',
      description: 'A pet grooming management system that allows customers to book grooming appointments, manage pet profiles, and track services, while staffs efficiently handle bookings and service operations.',
      technologies: ['Vue', 'VITE', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      githubLink: 'https://github.com/yourusername/pet-grooming',
      liveLink: '',
      figmaLink: '',
      image: '/images/projects/pet-grooming.png',
    },
    {
      title: 'CPC SSG Voting',
      slug: 'cpc-voting',
      description: 'A secure web-based voting system for Cordova Public College that allows students to vote online with one-vote-per-student enforcement and real-time result generation.',
      technologies: ['Vue', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      githubLink: 'https://github.com/yourusername/cpc-voting',
      liveLink: '',
      figmaLink: '',
      image: '/images/projects/voting-system.png',
    },
    {
      title: 'Task Tracker',
      slug: 'task-tracker',
      description: 'A task tracker system designed to help users efficiently organize, monitor, and manage their daily tasks and projects.',
      technologies: ['Next.js', 'Laravel', 'MongoDB', 'SASS'],
      githubLink: 'https://github.com/yourusername/task-tracker',
      liveLink: '',
      figmaLink: '',
      image: '/images/projects/task-tracker.png',
    },
    {
      title: 'CPC Library',
      slug: 'cpc-library',
      description: 'A library management system for Cordova Public College that automates book inventory, borrowing and returning transactions, and overdue fine calculations.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
      githubLink: 'https://github.com/yourusername/library-system',
      liveLink: '',
      figmaLink: '',
      figmaLink: 'https://www.figma.com/file/your-design-file',
      image: '/images/projects/library-system.png',
    },
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">My Projects</h1>
          <p style={{ color: 'var(--text-light)', maxWidth: '900px', margin: '0 auto', fontSize: '1rem' }}>
            Here are some of the projects I've worked on during my studies.
            <br></br> Click on any project to see detailed information, screenshots, and features.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
        {/* 
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="cta-text">Want to see more of my work?</p>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.5rem' }} />
            Visit My GitHub
          </a>
        </motion.div> */}
        {/* ───── CONTACT ───── */}
        <motion.div
          className="home-contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="home-contact-box">
            <h2 className="section-title">Get In Touch</h2>
            <p className="home-contact-subtitle">
              Have a project in mind or just want to say hi? I'd love to hear from you!
            </p>
            <Link href="/contact" className="btn btn-primary">Contact Me</Link>
          </div>
        </motion.div>
      </div>

      <Chatbot />
    </div>
  )
}