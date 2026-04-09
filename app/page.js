'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaLaptopCode, FaCode, FaCog, FaPalette, FaLightbulb } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLaptopCode, faRocket, faCode, faDatabase, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '@/components/ProjectCard'
import Chatbot from '@/components/Chatbot'
import '../styles/projects.css'
import '../styles/home.css'

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
    { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Javascript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
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
  ]

  const featuredProjects = [
    {
      title: 'Pet Grooming',
      slug: 'pet-grooming',
      description: 'A pet grooming management system that allows customers to book grooming appointments, manage pet profiles, and track services, while staffs efficiently handle bookings and service operations.',
      technologies: ['Vue', 'VITE', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      image: '/images/projects/pet-grooming.png',
      link: '/projects/pet-grooming'
    },
    {
      title: 'CPC SSG Voting',
      slug: 'cpc-voting',
      description: 'A secure web-based voting system for Cordova Public College that allows students to vote online with one-vote-per-student enforcement and real-time result generation.',
      technologies: ['Vue', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      image: '/images/projects/voting-system.png',
      link: '/projects/cpc-voting'
    },
    {
      title: 'Task Tracker',
      slug: 'task-tracker',
      description: 'A task tracker system designed to help users efficiently organize, monitor, and manage their daily tasks and projects.',
      technologies: ['Next.js', 'Laravel', 'MongoDB', 'SASS'],
      image: '/images/projects/task-tracker.png',
      link: '/projects/task-tracker'
    },
  ]

  return (
    <div>

      {/* ───── HERO ───── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-image-mobile">
                <div className="profile-image-wrapper">
                  <img src="/images/profile.png" alt="Johanna Panganuron" className="profile-image" />
                </div>
              </div>
              <h1>Hi, I'm Johanna <span className="wave">👋</span></h1>
              <p className="hero-subtitle">
                <CurrentIcon className="hero-subtitle-icon" key={currentRole} />
                <span className="role-text">{displayText}<span className="cursor">|</span></span>
              </p>
              <p className="hero-description">
                I build scalable and user-focused web applications that turn ideas into real, functional solutions.
                Passionate about innovation and continuous growth, I strive to create digital experiences that are both efficient and impactful.
              </p>
              <div className="hero-buttons">
                <Link href="/projects" className="btn btn-primary">View Projects</Link>
                <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
              </div>
            </div>
            <div className="hero-image hero-image-desktop">
              <div className="profile-image-wrapper">
                <img src="/images/profile.png" alt="Johanna Panganuron" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── ABOUT ME ───── */}
      <section className="home-about scroll-animate">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="home-about-content">
            <h3>Johanna B. Panganuron</h3>
            <p className="home-about-role">Junior Full-Stack Web Developer</p>
            <p className="home-about-bio">
              Eager to bring ideas to life through web development. I thrive on challenges and enjoy continuous learning, always looking for ways to improve my skills and deliver better solutions.
              Excited to contribute to a team where I can grow, collaborate, and make a meaningful impact.
            </p>
            <div className="home-feature-cards">
              {[
                { icon: faCode, title: 'Clean Code', text: 'Writing code that is organized, readable, and easy to maintain.' },
                { icon: faRocket, title: 'Problem Solving', text: 'Analyzing problems and finding practical, efficient solutions.' },
                { icon: faDatabase, title: 'Database Management', text: 'Working with both SQL and NoSQL databases to handle data effectively.' },
                { icon: faUsers, title: 'Team Collaboration', text: 'Collaborating with teammates and contributing to shared project goals.' },
                { icon: faLaptopCode, title: 'Full-Stack Development', text: 'Developing web applications covering both frontend and backend.' },
                { icon: faGraduationCap, title: 'Continuous Learning', text: 'Keeping up with new technologies and improving my skills over time.' },
              ].map((item, index) => (
                <div key={index} className="home-feature-card">
                  <FontAwesomeIcon icon={item.icon} className="home-feature-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-primary home-about-btn">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
      {/* ───── TECH STACK ───── */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title scroll-animate">Technologies & Tools</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card scroll-animate" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="tech-icon-img">
                  <img src={tech.image} alt={tech.name} />
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURED PROJECTS ───── */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Here are some of the projects I've worked on during my studies.
              Click on any project to see detailed information, screenshots, and features.
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
            <Link href="/projects" className="btn btn-primary">View All Projects</Link>          </div>

          {/* ───── CONTACT ───── */}
          <div className="home-contact scroll-animate">
            <div className="home-contact-box">
              <h2 className="section-title">Get In Touch</h2>
              <p className="home-contact-subtitle">
                Have a project in mind or just want to say hi? I'd love to hear from you!
              </p>
              <Link href="/contact" className="btn btn-primary">Contact Me</Link>
            </div>
          </div>

        </div>
      </section>

      <Chatbot />
    </div>
  )
}