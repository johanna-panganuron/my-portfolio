'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import '../styles/footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            })
        }, { threshold: 0.1 })
    
        const footerContainer = document.querySelector('.footer-container')
        if (footerContainer) observer.observe(footerContainer)
    
        return () => observer.disconnect()
    }, [])
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © {currentYear} Johanna B. Panganuron. All rights reserved.
                </p>

                <div className="footer-socials">
                    {/* Facebook */}
                    <a
                        href="https://facebook.com/juwanaxz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Facebook"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/johanna-panganuron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/panganuron-johanna/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
