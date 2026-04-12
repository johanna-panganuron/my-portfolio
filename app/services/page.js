'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobileAlt, faPalette, faDatabase, faGlobe, faServer } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import Chatbot from '@/components/Chatbot'
import '../../styles/services.css'

const services = [
    {
        icon: faGlobe,
        title: 'Full-Stack Web Development',
        description: 'End-to-end web application development covering both frontend and backend. I build scalable, functional, and user-friendly web apps tailored to your needs.',
        technologies: ['React', 'Next.js', 'Vue', 'Node.js', 'Laravel'],
    },
    {
        icon: faCode,
        title: 'Frontend Development',
        description: 'Clean, responsive, and interactive user interfaces built with modern frameworks. Focused on performance, accessibility, and great user experience.',
        technologies: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'CSS', 'SASS', 'Tailwind CSS'],
    },
    {
        icon: faServer,
        title: 'Backend Development',
        description: 'Robust server-side logic, REST APIs, and database integration. I ensure your application handles data efficiently and securely.',
        technologies: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST APIs'],
    },
    {
        icon: faDatabase,
        title: 'Database Design',
        description: 'Designing and managing both relational and non-relational databases. Optimized schemas, efficient queries, and reliable data storage.',
        technologies: ['MySQL', 'MongoDB'],
    },
    {
        icon: faPalette,
        title: 'UI/UX Design',
        description: 'Designing clean and intuitive interfaces using Figma. From wireframes to high-fidelity prototypes, I focus on creating great digital experiences.',
        technologies: ['Figma', 'Wireframing', 'Prototyping'],
    },
    {
        icon: faMobileAlt,
        title: 'Responsive Web Design',
        description: 'Making sure your website looks and works great on all screen sizes — desktop, tablet, and mobile — using modern CSS techniques.',
        technologies: ['CSS', 'Flexbox', 'Grid', 'Media Queries'],
    },
]
const techIcons = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'SASS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Wireframing': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Prototyping': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Flexbox': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Grid': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Media Queries': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
}
export default function Services() {
    return (
        <div>
            <div className="services-page">
                <div className="container">

                    <motion.div
                        className="services-header"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="section-title">Services</h1>
                        <p className="section-subtitle">
                            Here's what I can help you with. Whether it's a website, web app, or a custom system — I've got you covered.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-description">{service.description}</p>
                                <div className="service-tech">
                                    {service.technologies.map((tech, i) => (
                                        <span key={i} className="service-tech-tag">
                                            {techIcons[tech] && (
                                                <img
                                                    src={techIcons[tech]}
                                                    alt={tech}
                                                    style={{ width: 14, height: 14, objectFit: 'contain', flexShrink: 0 }}
                                                />
                                            )}
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            <ContactSection />
            <Chatbot />
        </div>
    )
}