'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  image,
  slug,
  figmaLink
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

        <p className="project-description">
          {description}
        </p>

        <div className="project-bottom">
          <div className="project-tech">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
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