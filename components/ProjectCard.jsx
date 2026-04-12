'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

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


export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  image,
  slug,
  figmaLink, year
}) {
  // Create slug from title if not provided
  const projectSlug = slug || title.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="project-card">
      {/* Project Image with Link */}
      <div className="project-image">
        <Link href={`/projects/${projectSlug}`}>
          {image ? (
            <Image
              src={image}
              alt={title}
              width={400}
              height={220}
              className="project-img"
            />
          ) : (
            <span className="project-placeholder">{title.charAt(0)}</span>
          )}
        </Link>
      </div>

      <div className="project-content">
      <h3 className="project-title1">
  <Link href={`/projects/${projectSlug}`} className="project-title-link">
    {title}
  </Link>
</h3>
{year && <span className="project-year">{year}</span>}

        <p className="project-description">
          {description}
        </p>

        <div className="project-bottom">
          <div className="project-tech">
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="tech-tag">
                {techIcons[tech] && (
                  <img src={techIcons[tech]} alt={tech} className="tech-tag-icon" />
                )}
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="tech-tag">+{technologies.length - 4} more</span>
            )}
          </div>

          <div className="project-links">
            {/* {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Code</span>
            </a>
          )} */}

            {/* {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>Live Demo</span>
            </a>
          )} */}

            {/* {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faFigma} />
              <span>Design</span>
            </a>
          )} */}

            <Link href={`/projects/${projectSlug}`} className="project-link view-details">
              <span>View Project Details →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}