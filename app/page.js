'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import Chatbot from '@/components/Chatbot'
import '../styles/home.css'

export default function Home() {
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

  const techStack = [

    {
      name: 'HTML',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'Javascript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Vue',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      name: 'Vite',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'PHP',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      name: 'Laravel',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
    },
    {
      name: 'MySQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Figma',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
      name: 'Postman',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    }
  ]


  const featuredProjects = [
    {
      title: 'Pet Grooming',
      description: 'A system that allows customers to book grooming appointments, manage pet profiles, and track services, while staffs efficiently handle bookings and service operations.',
      technologies: ['Vue', 'VITE', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      image: '/images/projects/pet-grooming.png',
      link: '/projects/pet-grooming'
    },
    {
      title: 'CPC Voting',
      description: 'A secure web-based voting system for Cordova Public College that allows students to vote online with one-vote-per-student enforcement and real-time result generation.',
      technologies: ['Vue', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
      image: '/images/projects/voting-system.png',
      link: '/projects/cpc-voting'
    },
    {
      title: 'Task Tracker',
      description: 'A system designed to help users efficiently organize, monitor, and manage their daily tasks and projects.',
      technologies: ['Next.js', 'Laravel', 'MongoDB', 'SASS'],
      image: '/images/projects/task-tracker.png',
      link: '/projects/task-tracker'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Side - Content */}
            <div className="hero-content">
              {/* Profile Image - Mobile Only */}
              <div className="hero-image-mobile">
                <div className="profile-image-wrapper">
                  <img
                    src="/images/profile.png"
                    alt="Johanna Panganuron"
                    className="profile-image"
                  />
                </div>
              </div>
              <h1>Hi, I'm Johanna <span className="wave">👋</span></h1>
              <p className="hero-subtitle">BSIT Student | Full-Stack Developer | UI/UX Enthusiast</p>
              <p className="hero-description">
                Passionate about creating efficient web applications using modern technologies.
                Currently seeking OJT opportunities to apply my skills in real-world projects.
              </p>

              <div className="hero-buttons">
                <Link href="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right Side - Profile Image Desktop */}
            <div className="hero-image hero-image-desktop">
              <div className="profile-image-wrapper">
                <img
                  src="/images/profile.png"
                  alt="Johanna Panganuron"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Here are some of the projects I've worked on during my studies.
              <br></br> Click on any project to see detailed information, screenshots, and features.
            </p>
          </div>

          <div className="home-projects-grid">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="home-project-card scroll-animate"
                onClick={() => window.location.href = project.link}
                style={{ cursor: 'pointer', animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <div className="image-wrapper">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="project-img"
                    />
                  </div>
                </div>
                <div className="home-project-content">
                  <h3 className="home-project-title">{project.title}</h3>
                  <p className="home-project-description">{project.description}</p>
                  <div className="home-project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="home-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <Link href={project.link} className="home-project-link" onClick={(e) => e.stopPropagation()}>
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="home-projects-cta scroll-animate">
            <Link href="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title scroll-animate">Technologies I Work With</h2>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-card scroll-animate"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="tech-icon-img">
                  <img src={tech.image} alt={tech.name} />
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}