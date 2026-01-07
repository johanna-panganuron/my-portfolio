'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLaptopCode, faRocket, faDownload } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Chatbot from '@/components/Chatbot'
import '../../styles/about.css'

// export const metadata = {
//   title: 'About | Johanna Panganuron',
//   description: 'Learn more about Johanna Panganuron, a BSIT student specializing in full-stack web development.',
// }

export default function About() {
  const skills = {
    frontend: ['Vue', 'Vite', 'React', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST APIs', 'JWT', 'OAuth'],
    database: ['MySQL', 'MongoDB'],
    tools: ['Figma', 'Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  }

  return (
    <div className="about-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">About Me</h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="about-profile"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-image-container">
            <Image
              src="/images/profile.png"
              alt="Johanna Panganuron"
              width={180}
              height={180}
              className="profile-image"
              priority
            />
          </div>
          <div className="profile-info">
            <h2>Johanna B. Panganuron</h2>
            <p className="profile-role">BSIT Student & Aspiring Full-Stack Developer</p>
            <p className="profile-bio">
              I am a Bachelor of Science in Information Technology student with a strong passion
              for web development and software engineering. My journey in technology began with
              curiosity about how applications work, which evolved into a dedicated pursuit of
              creating functional and user-friendly digital solutions.
            </p>
            <p className="profile-bio">
              Throughout my academic journey, I have developed proficiency in both frontend
              and backend technologies. I enjoy the challenge of turning complex problems into
              elegant, efficient solutions.
            </p>
            <a
              href="/resume.pdf"
              download="Panganuron_Johanna_Resume.pdf"
              className="resume-btn"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="feature-cards">
          {[
            { icon: faLaptopCode, title: 'Full-Stack Development', text: 'Building complete web applications from frontend to backend with modern technologies.' },
            { icon: faRocket, title: 'Problem Solving', text: 'Turning complex challenges into elegant, efficient, and scalable solutions.' },
            { icon: faGraduationCap, title: 'Continuous Learning', text: 'Always exploring new technologies and best practices in software development.' }
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
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* OJT Objective */}
        <motion.div
          className="ojt-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>OJT Objective</h2>
          <p>
            I am actively seeking an On-the-Job Training opportunity where I can apply my
            technical skills in a professional environment. My goal is to contribute to real-world
            projects while learning industry best practices, collaborating with experienced developers,
            and gaining hands-on experience in software development workflows. I am eager to bring
            my enthusiasm, dedication, and technical knowledge to a dynamic team where I can grow
            as a developer and make meaningful contributions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-tags">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-icon school-logo-education">
              <Image
                src="/images/school-logo.jpg"
                alt="Cordova Public College Logo"
                width={100}
                height={100}
                className="school-logo"
              />
            </div>
            <div className="education-info">
              <h3>Bachelor of Science in Information Technology</h3>
              <p className="education-school">Cordova Public College</p>
              <p className="education-year">Expected Graduation: 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Chatbot />
    </div>
  )
}