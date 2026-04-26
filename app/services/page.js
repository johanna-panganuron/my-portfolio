'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faCalendarCheck,
  faPaintBrush,
  faShoppingCart,
  faChartBar,
  faWrench,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import ContactSection from '@/components/ContactSection'
import Chatbot from '@/components/Chatbot'
import '../../styles/services.css'

const services = [
  {
    icon: faGlobe,
    number: '01',
    title: 'Business Website',
    client: '"I need a website for my business."',
    description:
      'A clean, fast, and mobile-friendly website that represents your brand online. Perfect for small businesses, restaurants, shops, and personal brands.',
    includes: [
      'Responsive design (mobile, tablet, desktop)',
      'Company profile or landing page',
      'Product or menu catalog',
      'Contact form integration',
    ],
  },
  {
    icon: faCalendarCheck,
    number: '02',
    title: 'Booking & Reservation System',
    client: '"I need my customers to book online."',
    description:
      'A full booking flow that lets your customers schedule appointments, manage reservations, and receive confirmations — all without manual back-and-forth.',
    includes: [
      'Customer-facing booking form',
      'Appointment scheduling & calendar',
      'Admin panel to manage bookings',
      'Status tracking (pending, confirmed, done)',
    ],
  },
  {
    icon: faPaintBrush,
    number: '03',
    title: 'UI/UX Design',
    client: '"I want a design before we build."',
    description:
      'See exactly what your product will look like before a single line of code is written. Wireframes and high-fidelity mockups in Figma so you can refine the vision first.',
    includes: [
      'Wireframes & user flow diagrams',
      'High-fidelity Figma mockups',
      'Mobile & desktop screen designs',
      'Clickable prototype for review',
    ],
  },
  {
    icon: faShoppingCart,
    number: '04',
    title: 'Online Store',
    client: '"I want to sell my products online."',
    description:
      'A simple, functional e-commerce experience where customers can browse your products, place orders, and you can manage everything from a clean admin panel.',
    includes: [
      'Product listing & detail pages',
      'Shopping cart & order flow',
      'Order management for admins',
      'Stock & inventory tracking',
    ],
  },
  {
    icon: faChartBar,
    number: '05',
    title: 'Admin Dashboard & Management System',
    client: '"I need to manage my business better."',
    description:
      'A custom internal tool built specifically for your business — track inventory, manage staff, monitor operations, and make better decisions with clear data.',
    includes: [
      'Custom dashboard with key metrics',
      'Inventory or product management',
      'Staff or user management',
      'Reports & data overview',
    ],
  },
  {
    icon: faWrench,
    number: '06',
    title: 'Website Revamp & Maintenance',
    client: '"My existing website needs fixing."',
    description:
      'Whether your site looks outdated, runs slow, or breaks on mobile — I can redesign, fix, and improve it so it works the way it should.',
    includes: [
      'Full redesign or partial update',
      'Mobile responsiveness fixes',
      'Bug fixes & performance improvements',
      'Ongoing support & maintenance',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <div className="services-page">
        <div className="container">

          {/* Header */}
          <motion.div
            className="services-page-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Services</h1>
            <p className="section-subtitle">
              Here's how I can help bring your idea to life — no tech jargon, just real solutions.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="services-page-list">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="services-page-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="services-page-left">
                  <span className="services-page-number">{service.number}</span>
                  <div className="services-page-icon">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                </div>

                <div className="services-page-body">
                  <p className="services-page-client">{service.client}</p>
                  <h3 className="services-page-title">{service.title}</h3>
                  <p className="services-page-desc">{service.description}</p>
                  <ul className="services-page-includes">
                    {service.includes.map((item, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faCheckCircle} className="services-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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