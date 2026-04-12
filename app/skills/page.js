'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faServer, faDatabase, faRobot, faCodeBranch, faPenRuler } from '@fortawesome/free-solid-svg-icons'
import ContactSection from '@/components/ContactSection'
import Chatbot from '@/components/Chatbot'
import '../../styles/skills.css'

const skillCategories = [
    {
        icon: faCode,
        title: 'Frontend Development',
        skills: [
            { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85 },
            { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 70 },
            { name: 'Vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 88 },
            { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
            { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 85 },
            { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', level: 70 },
            { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
            { name: 'SASS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', level: 75 },
            { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 75 },
        ],
    },
    {
        icon: faServer,
        title: 'Backend Development',
        skills: [
            { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 90 },
            { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 85 },
            { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 70 },
            { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 70 },
        ],
    },
    {
        icon: faDatabase,
        title: 'Database',
        skills: [
            { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 90 },
            { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 70 },
        ],
    },
    {
        icon: faPenRuler,
        title: 'Design & Prototyping',
        skills: [
            { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 80 },
            { name: 'Canva', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', level: 75 },
        ],
    },
    {
        icon: faCodeBranch,
        title: 'Version Control & Deployment',
        skills: [
            { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 75 },
            { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 75 },
            { name: 'Vercel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', level: 70 },
            { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', level: 70 },
            { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 90 },
        ],
    },
    {
        icon: faRobot,
        title: 'AI Tools',
        skills: [
            { name: 'ChatGPT', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', level: 90 },
            { name: 'Claude', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg', level: 85 },
            { name: 'Gemini', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', level: 80 },
            { name: 'Cursor', image: 'https://cursor.sh/brand/icon.svg', level: 75 },
            { name: 'Grok', image: '/images/grok-logo.webp', level: 75 },
        ],
    },
]

export default function Skills() {
    return (
        <div>
            <div className="skills-page">
                <div className="container">

                    <motion.div
                        className="skills-header"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="section-title">Skills</h1>
                        <p className="section-subtitle">
                            Technologies and tools I work with to build modern web applications.
                        </p>
                    </motion.div>

                    <div className="skills-categories">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                className="skill-category-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            >
                                <div className="skill-category-header">
                                    <FontAwesomeIcon icon={category.icon} className="skill-category-icon" />
                                    <h2>{category.title}</h2>
                                </div>

                                <div className="skill-list">
                                    {category.skills.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            <div className="skill-item-info">
                                                <img src={skill.image} alt={skill.name} className="skill-item-icon" />
                                                <span className="skill-item-name">{skill.name}</span>
                                                <span className="skill-item-level">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar-track">
                                                <motion.div
                                                    className="skill-bar-fill"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                                />
                                            </div>
                                        </div>
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