'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="home-contact-subtitle">
                        Whether it's a project, a question, or just a{' '}
                        <span style={{
                            background: 'rgba(16, 185, 129, 0.15)',
                            color: '#10b981',
                            padding: '0.1rem 0.5rem',
                            borderRadius: '3px',
                            fontWeight: '600'
                        }}>hello</span>{' '}
                        — my inbox is always open.
                    </p>
                    <Link href="/contact" className="btn btn-primary">Contact Me</Link>
                </div>
            </div>
        </motion.section>
    )
}