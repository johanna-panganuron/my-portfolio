'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLaptopCode, faRocket, faCode, faDatabase, faUsers, faKeyboard, faTrophy, faKey, faShield } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import Chatbot from '@/components/Chatbot'
import '../../styles/about.css'

export default function About() {
  const skills = {
    frontend: [
      { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ],
    backend: [
      { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'REST APIs', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'JWT', image: null },
      { name: 'OAuth', image: null },
    ],
    database: [
      { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
    tools: [
      { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'npm', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
      { name: 'Vercel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    ],
    ai: [
      { name: 'ChatGPT', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'Claude', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg' },
      { name: 'Gemini', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
      { name: 'Cursor', image: 'https://cursor.sh/brand/icon.svg' },
      { name: 'Grok', image: '/images/grok-logo.webp' },
    ],
  }

  return (
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
            <Image src="/images/profile.png" alt="Johanna Panganuron" width={150} height={150} className="about-avatar-img" priority />
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
              Eager to bring ideas to life through web development. I thrive on challenges and enjoy continuous learning, always looking for ways to improve my skills and deliver better solutions.
              Excited to contribute to a team where I can grow, collaborate, and make a meaningful impact.
            </motion.p>
            <motion.a
              href="/resume.pdf"
              download="Panganuron_Johanna_Resume.pdf"
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
            { icon: faCode, title: 'Clean Code', text: 'Writing code that is organized, readable, and easy to maintain.' },
            { icon: faRocket, title: 'Problem Solving', text: 'Analyzing problems and finding practical, efficient solutions.' },
            { icon: faDatabase, title: 'Database Management', text: 'Working with both SQL and NoSQL databases to handle data effectively.' },
            { icon: faUsers, title: 'Team Collaboration', text: 'Collaborating with teammates and contributing to shared project goals.' },
            { icon: faLaptopCode, title: 'Full-Stack Development', text: 'Developing web applications covering both frontend and backend.' },
            { icon: faGraduationCap, title: 'Continuous Learning', text: 'Keeping up with new technologies and improving my skills over time.' },
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
              <div className="feature-card-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
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
              <FontAwesomeIcon icon={faKeyboard} />
            </div>
            <div>
              <p className="about-section-title">Data Encoder (OJT)</p>
              <p className="about-section-subtitle">DSWD - Pantawid Pamilyang Pilipino Program (4Ps) • Cordova, Cebu</p>
              <p className="about-section-year">January 2026 – April 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
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

        {/* Certifications */}
        <motion.div
          className="about-section-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="about-section-item">
            <img src="/images/tesda-logo.png" alt="TESDA" className="about-section-logo" />
            <div>
              <p className="about-section-title">Creative Web Design</p>
              <p className="about-section-subtitle">Cebu Call Center Academy • TESDA</p>
              <p className="about-section-year">August 11 - August 23, 2023</p>
            </div>
          </div>
          <div className="about-section-item">
            <img src="/images/tesda-logo.png" alt="TESDA" className="about-section-logo" />
            <div>
              <p className="about-section-title">Computer Systems Servicing (NC II)</p>
              <p className="about-section-subtitle">Cebu Call Center Academy • TESDA</p>
              <p className="about-section-year">June 26 - September 3, 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Honors & Awards */}
        <motion.div
          className="about-section-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Honors & Awards</h2>
          <div className="about-section-item">
            <div className="about-award-icon trophy">
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

        {/* Technical Skills */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>
                  {category === 'frontend' && 'Frontend Development'}
                  {category === 'backend' && 'Backend Development'}
                  {category === 'database' && 'Database'}
                  {category === 'tools' && 'Tools & Others'}
                  {category === 'ai' && 'AI Tools'}
                </h3>
                <div className="skill-tags">
                  {items.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill.image ? (
                        <img src={skill.image} alt={skill.name} className="skill-tag-icon" />
                      ) : skill.isX ? (
                        <FontAwesomeIcon icon={faXTwitter} className="skill-tag-fa-icon" style={{ color: '#000000' }} />
                      ) : skill.name === 'OAuth' ? (
                        <FontAwesomeIcon icon={faShield} className="skill-tag-fa-icon" style={{ color: '#60a5fa' }} />
                      ) : (
                        <FontAwesomeIcon icon={faKey} className="skill-tag-fa-icon" style={{ color: '#d97706' }} />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
              { year: '2024', title: 'Full-Stack Journey', desc: 'Dived into MySQL for database management, then explored backend development with Node.js, PHP, and Laravel — understanding how the full web stack comes together.' }, { year: '2024', title: 'Computer Systems Servicing NC II', desc: 'Earned TESDA NC II Certification, broadening my technical foundation.' },
              { year: '2025', title: 'Building Real Projects', desc: 'Developed Pet Grooming System, CPC SSG Voting System, CPC Library and Task Tracker — turning skills into real solutions.' },
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