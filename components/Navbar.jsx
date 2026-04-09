'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link href="/" className="navbar-logo">
      <Image src="/images/jp.png" alt="Logo" width={55} height={55} className="navbar-logo-img" />
      </Link>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    </nav>
  )
}