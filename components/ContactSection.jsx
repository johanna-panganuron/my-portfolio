'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/contact-section.css'

export default function ContactSection() {
    return (
        <motion.section
            className="home-contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="home-contact-inner">
                <div className="home-contact-box">
                    <h2 className="home-contact-title">Have a project in mind?</h2>
                    <p className="home-contact-subtitle">
                        Let's talk about what you{' '}
                        <span style={{
                            background: 'rgba(16, 185, 129, 0.15)',
                            color: '#10b981',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '3px',
                            fontWeight: '600'
                        }}>need</span>{' '}
                        and how I can help.
                    </p>
                    <Link href="/contact" className="btn btn-primary"> Get In Touch </Link>
                </div>
            </div>
        </motion.section>
    )
}