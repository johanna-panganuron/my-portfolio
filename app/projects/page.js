'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import ContactSection from '@/components/ContactSection'
import Chatbot from '@/components/Chatbot'
import { faLayerGroup, faCode, faPenNib, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { GiSandsOfTime } from 'react-icons/gi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/home.css'
import '../../styles/projects.css'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
  
    {
      title: 'Juwxna Streetwear',
      year: 'April 2026',
      slug: 'juwxna-streetwear',
      description: 'A front-end e-commerce website for Juwxna Streetwear, a local streetwear brand born in Catarman, Cordova, Cebu. Features a full product catalog, lookbook editorial, cart system, and a dark urban aesthetic built for the streets.',
      category: ['frontend'],
      technologies: ['Nuxt.js', 'Vue', 'TypeScript', 'Tailwind CSS'],
      image: '/images/projects/juwxna-streetwear1.png',
    },
    {
      title: 'Cebu Tours',
      year: 'March 2026',
      slug: 'cebu-tours',
      description: 'A front-end travel and tourism website for Cebu Tours, a local tour operator based in Cordova, Cebu. Features island hopping packages, whale shark watching, canyoneering adventures, destination highlights, guide profiles, and a booking inquiry form — all wrapped in a clean coastal aesthetic.',
      category: ['frontend'],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/images/projects/cebu-tours1.png',
    },
    {
      title: 'Blade & Beard',
      year: 'February 2026',
      slug: 'blade-and-beard-barber-shop',
      description: 'A front-end barbershop website for Blade & Beard, a premium grooming destination in Cordova, Cebu. Features service listings, barber profiles, a gallery, and an appointment booking form with a sharp, masculine aesthetic.',
      category: ['frontend'],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/images/projects/blade-and-beard1.png',
    },
    {
      title: 'Kape ni Juwana',
      year: 'January 2026',
      slug: 'kapenijuwana',
      description: 'A front-end website for Kape ni Juwana, a local coffee shop featuring a clean and cozy aesthetic that showcases the menu, ambiance, and brand identity.',
      category: ['frontend'],
      technologies: ['Vue', 'VITE', 'CSS'],
      image: '/images/projects/1kape-ni-juwana.png',
    },
    {
      title: 'J & C Events',
      year: 'December 2025',
      slug: 'j-and-c-events',
      description: 'A front-end wedding and events planner website for J & C Events based in Cordova, Cebu. Features an elegant design with a gallery, quote form, FAQ section, and smooth scroll animations.',
      category: ['frontend'],
      technologies: ['React', 'VITE', 'CSS'],
      image: '/images/projects/j-and-events-1.png',
    },
    {
      title: 'Mimi\'s Pet Grooming',
      year: 'June - October 2025',
      slug: 'pet-grooming',
      description: 'A pet grooming management system that allows customers to book grooming appointments, manage pet profiles, and track services, while staffs efficiently handle bookings and service operations.',
      category: ['full-stack'],
      technologies: ['Vue', 'Node.js', 'MySQL', 'Socket.io', 'VITE', 'Vuex', 'Express.js', 'REST API', 'Axios', 'JWT', 'OAuth', 'Nodemailer', 'Chart.js', 'PDFKit', 'ExcelJS', 'Toastify', 'SweetAlert', 'Gemini Chatbot', 'Postman', 'CSS'],
      image: '/images/projects/pet-grooming.png',
    },
    {
      title: 'CPC SSG Voting',
      year: 'May 2025',
      slug: 'cpc-voting',
      description: 'A secure web-based voting system for Cordova Public College that allows students to vote online with one-vote-per-student enforcement and real-time result generation.',
      category: ['full-stack'],
      technologies: ['Vue CLI', 'Node.js', 'MySQL', 'Chart.js', 'Express.js', 'REST API', 'Axios', 'JWT', 'Tailwind', 'SweetAlert', 'ESLint', 'Postman', 'CSS'],
      image: '/images/projects/voting-system.png',
    },
    {
      title: 'Task Tracker',
      year: 'May 2025',
      slug: 'task-tracker',
      description: 'A task tracker system designed to help users efficiently organize, monitor, and manage their daily tasks and projects.',
      category: ['full-stack'],
      technologies: ['Next.js', 'Laravel', 'MongoDB', 'SASS', 'JWT', 'REST API'],
      image: '/images/projects/task-tracker.png',
    },
    {
      title: 'Nailed by Via - Nail Extension',
      year: 'April 2025',
      slug: 'nailed-by-via',
      description: 'A UI/UX design for a nail extension service booking app featuring service browsing, appointment scheduling, and a clean feminine aesthetic.',
      category: ['uiux'],
      technologies: ['Figma'],
      figmaLink: 'https://www.figma.com/file/your-link-here',
      image: '/images/projects/nail-extension.png',
    },
    {
      title: "Mimi's Pet Grooming - UI Design",
      year: 'February - March 2025',
      slug: 'mimis-pet-grooming-ui',
      description: 'A UI/UX design for a pet grooming service platform featuring appointment booking, pet profile management, and a clean user-friendly interface.',
      category: ['uiux'],
      technologies: ['Figma'],
      figmaLink: 'https://www.figma.com/file/your-link-here',
      image: '/images/projects/ui-pet-grooming.png',
    },
    {
      title: 'CPC Library',
      year: 'November 2024',
      slug: 'cpc-library',
      description: 'A library management system for Cordova Public College that automates book inventory, borrowing and returning transactions, and overdue fine calculations.',
      category: ['full-stack'],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      figmaLink: 'https://www.figma.com/file/your-design-file',
      image: '/images/projects/library-system.png',
    },
    {
      title: 'CPC Library - UI Design',
      year: 'October 2024',
      slug: 'cpc-library-ui',
      description: 'A UI/UX design for the CPC Library Management System featuring book catalog browsing, borrowing transactions, and an organized dashboard for librarians.',
      category: ['uiux'],
      technologies: ['Figma'],
      figmaLink: 'https://www.figma.com/file/your-link-here',
      image: '/images/projects/ui-library-cpc.png',
    },
  ]

  const filters = [
    { key: 'all', label: 'All', icon: faLayerGroup, color: '#10b981' },
    { key: 'full-stack', label: 'Full-Stack', icon: faCode, color: '#10b981' },
    { key: 'frontend', label: 'Front-End', icon: faDesktop, color: '#10b981' },
    { key: 'uiux', label: 'UI/UX Design', icon: faPenNib, color: '#10b981' },
  ].map(f => ({
    ...f,
    count: f.key === 'all'
      ? projects.length
      : projects.filter(p => p.category?.includes(f.key)).length
  }))

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category?.includes(activeFilter))

  return (
    <div>
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
            <p className="section-subtitle">
              Here are some of the projects I've worked on during my studies.
              <br /> Click on any project to see detailed information, screenshots and features.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="project-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                <span className="filter-icon-wrap">
                  <FontAwesomeIcon icon={filter.icon} style={{ width: 14, height: 14 }} />
                </span>
                {filter.label} ({filter.count})
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            {filtered.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.slug}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <div className="projects-coming-soon">
            <GiSandsOfTime style={{ fontSize: '1.2rem', color: '#10b981' }} />
            <p>More projects coming soon — stay tuned!</p>
          </div>
        </div>
      </div>

      <ContactSection />
      <Chatbot />
    </div>
  )
}