'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('animate-in')
            })
        }, { threshold: 0.1 })

        const footerMain = document.querySelector('.footer-main')
        if (footerMain) observer.observe(footerMain)

        return () => observer.disconnect()
    }, [])

    return (
        <footer className="footer">
            <div className="footer-main">

                {/* Col 1 - Bio */}
                <div className="footer-brand">
                    <Image
                        src="/images/jp-logo-white-.png"
                        alt="Johanna B. Panganuron Logo"
                        width={60}
                        height={60}
                    />
                    <p>I'm Junior Full-Stack Web Developer passionate about building functional and user-friendly web applications.</p>
                    <div className="footer-socials">
                        <a href="https://facebook.com/juwanaxz" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://github.com/johanna-panganuron" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/johanna-panganuron/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>

                {/* Col 2 - Nav + Services */}
                <div className="footer-cols-mobile">

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/skills">Skills</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 - Contact */}
                    <div className="footer-col">
                        <h4>Get In Touch</h4>
                        <div className="footer-contact-item">
                            <a href="mailto:johannapanganuron@gmail.com">johannapanganuron@gmail.com</a>
                            <span>0949 1280 100</span>
                            <span>Cordova, Cebu, Philippines</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© {currentYear} Johanna B. Panganuron. All rights reserved.</p>
                    <p>Built with Next.js ⚡</p>
                </div>
            </div>

        </footer>
    )
}