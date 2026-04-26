'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaLaptopCode, FaCode, FaCog, FaPalette, FaLightbulb } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faLaptopCode, faComments, faCode, faDatabase, faArrowTrendUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '@/components/ProjectCard'
import Chatbot from '@/components/Chatbot'
import ContactSection from '@/components/ContactSection'
import ServicesSection from '@/components/ServicesSection'
import '../styles/home.css'
import '../styles/services-section.css'
import '../styles/projects.css'

const roles = [
  { text: 'Junior Full-Stack Web Developer', icon: FaLaptopCode },
  { text: 'Frontend Developer', icon: FaCode },
  { text: 'Backend Developer', icon: FaCog },
  { text: 'UI/UX Designer', icon: FaPalette },
  { text: 'Problem Solver', icon: FaLightbulb },
]

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    let charIndex = 0
    const currentText = roles[currentRole].text
    setDisplayText('')

    const typing = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typing)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
      }
    }, 80)

    return () => clearInterval(typing)
  }, [currentRole])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.scroll-animate')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const CurrentIcon = roles[currentRole].icon

  const techStack = [
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Nuxt.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg'},

    { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'SASS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Vercel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  ]

  const featuredProjects = [
    {
      title: 'Kape ni Juwana',
      year: 'January 2026',
      slug: 'kapenijuwana',
      description: 'A front-end website for Kape ni Juwana, a local coffee shop. The site features a clean and cozy aesthetic showcasing the menu, ambiance, and brand identity of the café.',
      technologies: ['Vue', 'VITE', 'CSS'],
      image: '/images/projects/1kape-ni-juwana.png',
      link: '/projects/kapenijuwana'
    },
    {
      title: 'Mimi\'s Pet Grooming',
      year: 'June - October 2025',
      slug: 'pet-grooming',
      description: 'A pet grooming management system that allows customers to book grooming appointments, manage pet profiles, and track services, while staffs efficiently handle bookings and service operations.',
      technologies: ['Vue', 'VITE', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      image: '/images/projects/pet-grooming.png',
      link: '/projects/pet-grooming'
    },
    {
      title: 'Nailed by Via - Nail Extension',
      year: 'April 2025',
      slug: 'nailed-by-via',
      description: 'A UI/UX design for a nail extension service booking app featuring service browsing, appointment scheduling, and a clean feminine aesthetic.',
      technologies: ['Figma'],
      image: '/images/projects/nail-extension.png',
      link: '/projects/nailed-by-via'
    },
  ]

  return (
    <div>

      {/* ───── HERO ───── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              {/* Mobile */}
              <div className="hero-image-mobile">
                <div className="profile-image-wrapper">
                  <img src="/images/profile.png" alt="Johanna Panganuron" className="profile-image profile-light" />
                  <img src="/images/profile-dark.png" alt="Johanna Panganuron" className="profile-image profile-dark" />
                  <div className="mobile-badge mobile-badge-1"><FaLaptopCode /> Full-Stack Web Developer</div>
                  <div className="mobile-badge mobile-badge-2"><FaPalette /> UI/UX Designer</div>
                  <div className="mobile-badge mobile-badge-3"><FaLightbulb /> Problem Solver</div>
                </div>
              </div>
              <h1>Hi, I'm Johanna <span className="wave">👋</span></h1>
              {/* <p className="hero-subtitle">
                <CurrentIcon className="hero-subtitle-icon" key={currentRole} />
                <span className="role-text">{displayText}<span className="cursor">|</span></span>
              </p> */}
              <p className="hero-description">
                I build scalable and user-focused web applications that turn ideas into real, functional solutions.
                Passionate about innovation and continuous growth, I strive to create digital experiences that are both efficient and impactful.
              </p>
              <div className="hero-buttons">
                <Link href="/projects" className="btn btn-primary">View Projects</Link>
                <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
              </div>
            </div>
            {/* Desktop */}
            <div className="hero-image hero-image-desktop">
              <div className="profile-image-wrapper">
                <img src="/images/profile.png" alt="Johanna Panganuron" className="profile-image profile-light" />
                <img src="/images/profile-dark.png" alt="Johanna Panganuron" className="profile-image profile-dark" />

                <div className="orbit-ring">
                  <div className="hero-badge badge-1"><FaLaptopCode /> Full-Stack Web Developer</div>
                  <div className="hero-badge badge-2"><FaPalette /> UI/UX Designer</div>
                  <div className="hero-badge badge-3"><FaLightbulb /> Problem Solver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── ABOUT ME ───── */}
      <section className="home-about scroll-animate">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="home-about-content scroll-animate">
            <h3>Johanna B. Panganuron</h3>
            <p className="home-about-role">Junior Full-Stack Web Developer</p>
            <p className="home-about-bio">
              I help small businesses and individuals build web solutions that actually work — from simple websites to full booking systems and dashboards. If you have an idea, I'll turn it into something real, functional, and easy to use.
            </p>
            <div className="home-feature-cards">
              {[
                { icon: faCode, title: 'Clean & Maintainable Code', text: 'Your project won\'t break down the road — I write code that\'s organized and built to last.' },
                { icon: faLightbulb, title: 'Problem-First Thinking', text: 'I focus on solving your actual problem, not just writing code for the sake of it.' },
                { icon: faDatabase, title: 'Database & Data Management', text: 'Your data is stored, structured, and retrieved reliably — no messy spreadsheets needed.' },
                { icon: faComments, title: 'Clear Communication', text: 'I keep you updated throughout the process so you\'re never left guessing.' },
                { icon: faLaptopCode, title: 'Full-Stack Capability', text: 'From the interface your users see to the database behind it — I handle the whole thing.' },
                { icon: faArrowTrendUp, title: 'Always Improving', text: 'I stay up to date with modern tools so your project uses what actually works today.' },
              ].map((item, index) => (
                <div key={index} className="home-feature-card scroll-animate" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="home-feature-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-primary home-about-btn scroll-animate">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Services ───── */}
      <ServicesSection />

      {/* ───── TECH STACK ───── */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title scroll-animate">Tech Stack</h2>
          <div className="tech-icons-grid">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-icon-item scroll-animate"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <img src={tech.image} alt={tech.name} className="tech-icon-img-new" />
                <span className="tech-icon-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tech-stack-cta scroll-animate">
          <Link href="/skills" className="btn btn-primary">View All Skills</Link>
        </div>
      </section>

      {/* ───── FEATURED PROJECTS ───── */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Here are some of the projects I've worked on during my studies.
              <br></br>Click on any project to see detailed information, screenshots and features.
            </p>
          </div>
          <div className="home-projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="home-projects-cta scroll-animate">
            <Link href="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>



      {/* ───── CONTACT ───── */}
      <ContactSection />

      <Chatbot />
    </div>
  )
}