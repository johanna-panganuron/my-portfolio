import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faCalendarCheck,
  faPaintBrush,
  faShoppingCart,
  faChartBar,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    icon: faGlobe,
    color: '#10b981',
    title: 'Business Website',
    description:
      'Company profiles, product catalogs, landing pages, and online menus — built clean, fast, and mobile-friendly.',
  },
  {
    icon: faCalendarCheck,
    color: '#10b981',
    title: 'Booking & Reservation System',
    description:
      'Appointment scheduling, booking management, and customer-facing reservation flows for service-based businesses.',
  },
  {
    icon: faPaintBrush,
    color: '#10b981',
    title: 'UI/UX Design',
    description:
      'Wireframes, clickable prototypes, and full visual mockups in Figma before development begins.',
  },
  {
    icon: faShoppingCart,
    color: '#10b981',
    title: 'Online Store',
    description:
      'Simple e-commerce pages, product listings, and order management tailored to small and growing businesses.',
  },
  {
    icon: faChartBar,
    color: '#10b981',
    title: 'Admin Dashboard',
    description:
      'Custom dashboards, inventory trackers, staff management, and internal tools for full business visibility.',
  },
  {
    icon: faWrench,
    color: '#10b981',
    title: 'Website Revamp & Maintenance',
    description:
      'Redesigns, bug fixes, mobile responsiveness improvements, and ongoing maintenance for your site.',
  },
]

export default function ServicesSection() {
  return (
    <section className="home-services">
      <div className="container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Here's how I can help bring your idea to life — no tech jargon, just real solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card scroll-animate"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="service-icon-wrap">
                <FontAwesomeIcon icon={service.icon} style={{ color: service.color }} />
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}